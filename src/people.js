import * as THREE from 'three';
import { S, clamp, lerp, angLerp, pick, R2 } from './state.js';
import { scene, radialTex, pedNodes, nearestPedNode, resolveCircle, groundAt, CURB, LOC, districtAt } from './world.js';

/* ============================== INSTANCED RIG ============================== */
export const MAXP = 100;
const PART_DEFS = [
  ['pelvis', () => new THREE.CapsuleGeometry(0.12, 0.16, 4, 10).rotateZ(Math.PI / 2).scale(1, 1, 0.78), 'pants'],
  ['torso', () => new THREE.CapsuleGeometry(0.165, 0.27, 6, 12).scale(1.08, 1, 0.66), 'top'],
  ['neck', () => new THREE.CylinderGeometry(0.05, 0.055, 0.12, 8), 'skin'],
  ['head', () => new THREE.SphereGeometry(0.118, 16, 12).scale(0.92, 1.1, 1), 'skin'],
  ['hair', () => new THREE.SphereGeometry(0.127, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.55).scale(0.95, 1.1, 1.05), 'hair'],
  ['nose', () => new THREE.SphereGeometry(0.022, 6, 4), 'skin'],
  ['eyeL', () => new THREE.SphereGeometry(0.017, 6, 4), 'eye'], ['eyeR', () => new THREE.SphereGeometry(0.017, 6, 4), 'eye'],
  ['uArmL', () => new THREE.CapsuleGeometry(0.052, 0.2, 4, 8), 'top'], ['uArmR', () => new THREE.CapsuleGeometry(0.052, 0.2, 4, 8), 'top'],
  ['fArmL', () => new THREE.CapsuleGeometry(0.044, 0.18, 4, 8), 'sleeve'], ['fArmR', () => new THREE.CapsuleGeometry(0.044, 0.18, 4, 8), 'sleeve'],
  ['handL', () => new THREE.SphereGeometry(0.048, 8, 6).scale(0.75, 1.15, 0.55), 'skin'], ['handR', () => new THREE.SphereGeometry(0.048, 8, 6).scale(0.75, 1.15, 0.55), 'skin'],
  ['thighL', () => new THREE.CapsuleGeometry(0.075, 0.28, 4, 8), 'pants'], ['thighR', () => new THREE.CapsuleGeometry(0.075, 0.28, 4, 8), 'pants'],
  ['shinL', () => new THREE.CapsuleGeometry(0.058, 0.3, 4, 8), 'pants'], ['shinR', () => new THREE.CapsuleGeometry(0.058, 0.3, 4, 8), 'pants'],
  ['footL', () => new THREE.CapsuleGeometry(0.052, 0.13, 4, 8).rotateX(Math.PI / 2).scale(1, 0.8, 1), 'shoe'], ['footR', () => new THREE.CapsuleGeometry(0.052, 0.13, 4, 8).rotateX(Math.PI / 2).scale(1, 0.8, 1), 'shoe'],
];
const crowdMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75 });
const crowd = PART_DEFS.map(([name, geo, key]) => {
  const im = new THREE.InstancedMesh(geo(), crowdMat, MAXP); im.castShadow = true; im.receiveShadow = true; im.frustumCulled = false;
  im.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(im);
  const z = new THREE.Matrix4().makeScale(0, 0, 0); for (let i = 0; i < MAXP; i++) im.setMatrixAt(i, z);
  return { name, im, key };
});
const blobs = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.95, 0.95).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: radialTex, transparent: true, opacity: 0.38, depthWrite: false }), MAXP);
blobs.frustumCulled = false; blobs.renderOrder = 1; scene.add(blobs);
const rig = { parts: {} };
{
  const O = (parent, x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); if (parent) parent.add(o); return o; };
  rig.root = O(null, 0, 0, 0); rig.hips = O(rig.root, 0, 0.93, 0);
  rig.parts.pelvis = O(rig.hips, 0, 0, 0); rig.spine = O(rig.hips, 0, 0.06, 0);
  rig.parts.torso = O(rig.spine, 0, 0.25, 0); rig.parts.neck = O(rig.spine, 0, 0.5, 0); rig.headJ = O(rig.spine, 0, 0.55, 0);
  rig.parts.head = O(rig.headJ, 0, 0.12, 0); rig.parts.hair = O(rig.headJ, 0, 0.135, -0.012); rig.parts.nose = O(rig.headJ, 0, 0.115, 0.112);
  rig.parts.eyeL = O(rig.headJ, 0.04, 0.14, 0.098); rig.parts.eyeR = O(rig.headJ, -0.04, 0.14, 0.098);
  for (const [s, L] of [[1, 'L'], [-1, 'R']]) {
    const sh = O(rig.spine, 0.215 * s, 0.43, 0); rig['sh' + L] = sh; rig.parts['uArm' + L] = O(sh, 0, -0.13, 0);
    const el = O(sh, 0, -0.27, 0); rig['el' + L] = el; rig.parts['fArm' + L] = O(el, 0, -0.11, 0); rig.parts['hand' + L] = O(el, 0, -0.25, 0);
    const hp = O(rig.hips, 0.095 * s, -0.04, 0); rig['hip' + L] = hp; rig.parts['thigh' + L] = O(hp, 0, -0.2, 0);
    const kn = O(hp, 0, -0.43, 0); rig['kn' + L] = kn; rig.parts['shin' + L] = O(kn, 0, -0.2, 0); rig.parts['foot' + L] = O(kn, 0, -0.42, 0.045);
  }
}
const SKINS = ['#f1c9a5', '#e0ac8a', '#c68642', '#8d5524', '#5c3a1e', '#f6d7c0', '#b97a57'];
const TOPS = ['#e63946', '#1d3557', '#457b9d', '#2a9d8f', '#e9c46a', '#f4a261', '#ffffff', '#222222', '#6a4c93', '#8ac926', '#ff99c8', '#adb5bd', '#3a5a40', '#bc6c25'];
const PANTS = ['#1b263b', '#2b2d42', '#3d405b', '#222222', '#5e503f', '#4a6fa5', '#7f5539', '#adb5bd', '#283618'];
const HAIRS = ['#1a1110', '#2b1b12', '#4a2f1d', '#7a5230', '#c9a66b', '#d8c3a5', '#6e6e6e', '#111111'];
const SHOES = ['#ffffff', '#222222', '#8b4513', '#e63946', '#1d3557', '#dddddd'];
export const GANGS = {
  3: { name: 'Kings', color: '#2d6a4f', accent: '#e9c46a', district: 3 },
  4: { name: 'Vipers', color: '#7b2cbf', accent: '#111111', district: 4 },
};
export const LOOKS = {
  cop: () => ({ skin: pick(SKINS), top: '#1d3557', sleeve: '#1d3557', pants: '#14213d', hair: '#0b0b0b', shoe: '#111111' }),
  gang: (g) => ({ skin: pick(SKINS), top: GANGS[g].color, sleeve: R2() < 0.5 ? GANGS[g].color : pick(SKINS), pants: '#1a1a1a', hair: GANGS[g].accent, shoe: '#f4f4f4' }),
  civ: () => ({ skin: pick(SKINS), top: pick(TOPS), pants: pick(PANTS), hair: pick(HAIRS), shoe: pick(SHOES) }),
};
const freeIdx = []; for (let i = MAXP - 1; i >= 1; i--) freeIdx.push(i);
function setLook(idx, c) {
  c.sleeve = c.sleeve || (R2() < 0.55 ? c.skin : c.top); c.eye = '#1a1a1a';
  const col = new THREE.Color(); for (const p of crowd) { col.set(c[p.key]); p.im.setColorAt(idx, col); p.im.instanceColor.needsUpdate = true; }
}
export function makePerson(idx, look) {
  const c = look || LOOKS.civ(); setLook(idx, c);
  return { idx, look: c, pos: new THREE.Vector3(), yaw: 0, speed: 0, ph: R2() * 6, air: false, down: 0, scale: 0.94 + R2() * 0.12, hide: false, armsUp: 0, punchT: 0, punchArm: 0, guard: 0, phone: 0, hitT: 0, cheer: 0, kb: new THREE.Vector3(), hp: 30, maxHp: 30, downMax: 4 };
}
const ZERO = new THREE.Matrix4().makeScale(0, 0, 0), bm = new THREE.Matrix4();
export function hideIdx(idx) { for (const c of crowd) c.im.setMatrixAt(idx, ZERO); blobs.setMatrixAt(idx, ZERO); }
export function poseAndWrite(p, dt) {
  const r = rig, s = p.speed, run = clamp((s - 2.4) / 3.5, 0, 1), A = clamp(s * 0.3, 0, 0.95);
  if (!p.air && p.down <= 0) p.ph += dt * (s < 0.1 ? 0 : 4.6 + s * 1.15);
  const ph = p.ph;
  r.root.position.copy(p.pos); r.root.rotation.set(0, p.yaw, 0); r.root.scale.setScalar(p.hide ? 0.0001 : p.scale);
  const bob = s > 0.1 ? Math.abs(Math.cos(ph)) * 0.035 * (0.5 + run) : Math.sin(S.clock * 2 + p.idx) * 0.004;
  r.hips.position.y = 0.91 + bob - run * 0.03 - p.guard * 0.06;
  r.hips.rotation.set(0.04 * A + run * 0.2 + p.guard * 0.08 - p.hitT * 0.9, Math.sin(ph) * 0.12 * A, 0);
  r.spine.rotation.set(0.02 + run * 0.08, -Math.sin(ph) * 0.22 * A, 0);
  r.headJ.rotation.set(-run * 0.2 + p.hitT * 0.6, Math.sin(ph) * 0.06 * A, 0);
  for (const [hip, kn, o] of [[r.hipL, r.knL, 0], [r.hipR, r.knR, Math.PI]]) {
    const sn = Math.sin(ph + o), cs = Math.cos(ph + o);
    if (p.air) { hip.rotation.set(o ? -0.25 : -0.85, 0, 0); kn.rotation.set(o ? 0.6 : 1.3, 0, 0); continue; }
    hip.rotation.set(-sn * A * (0.75 + run * 0.35) - p.guard * (o ? -0.25 : 0.35), 0, 0);
    kn.rotation.set((0.06 + Math.max(0, -cs) * 1.0 + (sn < 0 ? 0.2 : 0)) * A * (1 + run * 0.6) + p.guard * 0.4, 0, 0);
  }
  for (const [sh, el, o, side] of [[r.shL, r.elL, Math.PI, 1], [r.shR, r.elR, 0, -1]]) {
    const sn = Math.sin(ph + o);
    if (p.armsUp > 0 || p.cheer > 0) { const w = p.cheer > 0 ? Math.sin(S.clock * 14 + side) * 0.3 : 0; sh.rotation.set(-2.7 + w, 0, side * 0.35); el.rotation.set(-0.3, 0, 0); continue; }
    if (p.air) { sh.rotation.set(-1.2, 0, side * 0.5); el.rotation.set(-0.7, 0, 0); continue; }
    sh.rotation.set(-sn * A * 0.85, 0, side * (0.07 + run * 0.05)); el.rotation.set(-(0.15 + A * 0.45 + run * 1.0), 0, 0);
    if (p.guard > 0) { sh.rotation.set(lerp(sh.rotation.x, -1.05, p.guard), 0, side * 0.12); el.rotation.set(lerp(el.rotation.x, -2.0, p.guard), 0, 0); }
    if (side === -1 && p.phone > 0) { sh.rotation.set(-0.35, 0, -0.45); el.rotation.set(-2.5, 0, 0); }
  }
  if (p.punchT > 0) {
    const k = 1 - p.punchT / 0.3, e = Math.sin(clamp(k, 0, 1) * Math.PI);
    const [sh, el, side] = p.punchArm ? [r.shR, r.elR, -1] : [r.shL, r.elL, 1];
    sh.rotation.set(lerp(-1.0, -1.62, e), 0, side * -0.1 * e); el.rotation.set(lerp(-2.0, -0.05, e), 0, 0);
    r.spine.rotation.y += (p.punchArm ? 0.45 : -0.45) * e; r.hips.rotation.x += 0.12 * e;
  }
  if (p.down > 0) {
    const k = clamp(Math.min(p.down, p.downMax - p.down) / 0.45, 0, 1);
    r.root.rotation.x = -k * 1.45; r.root.position.y += k * 0.14;
    r.shL.rotation.set(-1.4 * k, 0, 0.6 * k); r.shR.rotation.set(-1.4 * k, 0, -0.6 * k);
  }
  r.root.updateMatrixWorld(true);
  for (const c of crowd) c.im.setMatrixAt(p.idx, r.parts[c.name].matrixWorld);
  const sc = p.hide ? 0 : (p.down > 0 ? 1.6 : 1) * (1 - Math.min(0.6, (p.pos.y - (p.ground ?? p.pos.y)) * 0.3));
  bm.makeScale(sc, 1, sc); bm.setPosition(p.pos.x, (p.ground ?? p.pos.y) + 0.03, p.pos.z); blobs.setMatrixAt(p.idx, bm);
}
export function flushCrowd() { for (const c of crowd) c.im.instanceMatrix.needsUpdate = true; blobs.instanceMatrix.needsUpdate = true; }

/* ============================== PED MANAGEMENT ============================== */
export const peds = S.peds;
function alloc() { return freeIdx.pop(); }
export function removePed(p) { const i = peds.indexOf(p); if (i >= 0) peds.splice(i, 1); hideIdx(p.idx); freeIdx.push(p.idx); p.dead = true; }
function basePed(kind, look, pos) {
  const idx = alloc(); if (idx === undefined) return null;
  const p = makePerson(idx, look);
  Object.assign(p, { kind, state: 'walk', t: 0, idle: 0, atkCD: 0, lat: (R2() - 0.5) * 1.6, base: 1.2 + R2() * 0.45, from: 0, to: 0, onRoad: false, target: null, alert: 0, downMax: 4 });
  p.pos.copy(pos); p.ground = pos.y; peds.push(p); return p;
}
export function spawnCiv(nearX, nearZ, minD = 50, maxD = 150) {
  let ni = 0;
  for (let tries = 0; tries < 40; tries++) { ni = R2() * pedNodes.length | 0; const n = pedNodes[ni], d = Math.hypot(n.x - nearX, n.z - nearZ); if (d > minD && d < maxD) break; }
  const n = pedNodes[ni], nx = pick(n.nb), t = R2();
  const p = basePed('civ', LOOKS.civ(), new THREE.Vector3(lerp(n.x, pedNodes[nx].x, t), CURB, lerp(n.z, pedNodes[nx].z, t)));
  if (!p) return null;
  p.from = ni; p.to = nx; p.pers = R2() < 0.18 ? 'tough' : R2() < 0.25 ? 'snitch' : 'coward';
  if (R2() < 0.15) p.base = 3.2 + R2() * 1.2; // joggers
  p.hp = p.maxHp = p.pers === 'tough' ? 45 : 28;
  return p;
}
export function spawnGang(g, spot) {
  const p = basePed('gang', LOOKS.gang(g), new THREE.Vector3(spot.x + (R2() - 0.5) * 3, CURB, spot.z + (R2() - 0.5) * 3)); if (!p) return null;
  p.gang = g; p.state = 'hang'; p.home = { x: p.pos.x, z: p.pos.z }; p.yaw = R2() * 6; p.hp = p.maxHp = 50; p.pers = 'tough'; return p;
}
export function spawnCop(pos) {
  const p = basePed('cop', LOOKS.cop(), pos.clone()); if (!p) return null;
  p.state = 'chase'; p.hp = p.maxHp = 70; p.pers = 'tough'; p.base = 1.4; return p;
}
export function spawnNPC(look, pos, opts = {}) {
  const p = basePed('npc', look || LOOKS.civ(), pos.clone()); if (!p) return null;
  p.state = opts.state || 'idle'; p.idle = 1e9; p.hp = p.maxHp = opts.hp || 40; p.pers = opts.pers || 'tough'; Object.assign(p, opts); return p;
}

/* ============================== COMBAT ============================== */
const _d = new THREE.Vector3();
export function playerFocus() { return S.P.car ? S.P.car.pos : S.P.pos; }
export function hitPed(p, dmg, from, byPlayer, heavy) {
  if (p.dead) return;
  p.hp -= dmg; p.hitT = 0.25; p.stunT = heavy ? 0.9 : 0.6;
  _d.set(p.pos.x - from.x, 0, p.pos.z - from.z); const l = _d.length() || 1;
  p.kb.set(_d.x / l, 0, _d.z / l).multiplyScalar(heavy ? 7 : 3.5);
  if (p.hp <= 0) knockDown(p, 4 + R2() * 2.5);
  const H = S.hooks;
  if (byPlayer) {
    if (p.kind === 'cop') H.crime(p.pos, 2, 'Assaulting an officer');
    else H.crime(p.pos, 1, 'Assault', p);
    if (p.kind === 'gang') { S.save.gangRep[p.gang] = (S.save.gangRep[p.gang] || 0) - 1; alertGang(p.gang, p.pos); }
  }
  if (p.down > 0 || p.scripted) return;
  // reactions
  if (p.kind === 'cop' || p.kind === 'gang' || p.pers === 'tough') { p.state = 'fight'; p.target = byPlayer ? 'player' : p.target; }
  else if (p.pers === 'snitch' && byPlayer) { p.state = 'flee'; p.t = 2; p.fleeFrom = from.clone(); p.thenPhone = true; }
  else { p.state = 'flee'; p.t = 4; p.fleeFrom = from.clone(); }
}
export function knockDown(p, dur) {
  p.down = dur; p.downMax = dur; p.state = 'down'; p.speed = 0; p.punchT = 0; p.guard = 0; p.phone = 0;
  if (p.kind !== 'cop' && R2() < (p.kind === 'gang' ? 0.8 : 0.4)) S.hooks.dropCash(p.pos, p.kind === 'gang' ? 20 + (R2() * 50 | 0) : 5 + (R2() * 30 | 0));
  if (p.onKO) p.onKO(p);
  if (S.hooks.ko) S.hooks.ko(p);
}
// vehicle hits a pedestrian
export function knockPed(p, v, byPlayer) {
  if (p.down > 0 || p.dead) return;
  const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw), rx = -fz, rz = fx;
  const side = ((p.pos.x - v.pos.x) * rx + (p.pos.z - v.pos.z) * rz) >= 0 ? 1 : -1;
  p.pos.x += rx * side * 1.7 + fx * 1.2; p.pos.z += rz * side * 1.7 + fz * 1.2; resolveCircle(p.pos, 0.35);
  p.yaw = Math.atan2(-rx * side, -rz * side); p.hp -= 25;
  knockDown(p, 3.5);
  if (byPlayer) S.hooks.crime(p.pos, p.kind === 'cop' ? 2 : 1, p.kind === 'cop' ? 'Hit an officer' : 'Reckless driving', p);
}
export function alertGang(g, pos) {
  for (const q of peds) if (q.kind === 'gang' && q.gang === g && q.down <= 0 && q.pos.distanceTo(pos) < 28) { q.state = 'fight'; q.target = 'player'; }
}
export function panic(pos, radius, srcPos, dur = 4) {
  const src = new THREE.Vector3((srcPos || pos).x, 0, (srcPos || pos).z);
  for (const p of peds) {
    if (p.kind !== 'civ' || p.down > 0 || p.state === 'phone' || p.state === 'fight') continue;
    const d = Math.hypot(p.pos.x - pos.x, p.pos.z - pos.z); if (d > radius) continue;
    if (p.pers === 'snitch' && R2() < 0.5) { p.state = 'flee'; p.t = 1.2; p.thenPhone = true; p.fleeFrom = src.clone(); continue; }
    p.state = 'flee'; p.t = dur * (0.7 + R2() * 0.6); p.fleeFrom = src.clone(); if (R2() < 0.35) p.armsUp = 1.2;
  }
}
// player's punch: returns true if anything was hit
export function playerPunchHits(P, dmg) {
  const fx = Math.sin(P.yaw), fz = Math.cos(P.yaw); let best = null, bd = 1.6;
  for (const p of peds) {
    if (p.down > 0 || p.dead) continue;
    const dx = p.pos.x - P.pos.x, dz = p.pos.z - P.pos.z, d = Math.hypot(dx, dz); if (d > 1.7) continue;
    const dot = (dx * fx + dz * fz) / (d || 1); if (dot < 0.35) continue;
    if (d < bd) { bd = d; best = p; }
  }
  if (best) { hitPed(best, dmg, P.pos, true, P.combo >= 2); return best; }
  return null;
}
// soft auto-aim: nearest ped in front for facing
export function punchTarget(P) {
  let best = null, bd = 3.2;
  for (const p of peds) { if (p.down > 0 || p.dead) continue; const d = Math.hypot(p.pos.x - P.pos.x, p.pos.z - P.pos.z); if (d < bd) { bd = d; best = p; } }
  return best;
}

/* ============================== AI ============================== */
function reroute(p) { p.from = nearestPedNode(p.pos.x, p.pos.z); p.to = pick(pedNodes[p.from].nb); p.lat = (R2() - 0.5) * 1.6; }
export function updatePed(p, dt) {
  const P = S.P;
  p.hitT = Math.max(0, p.hitT - dt * 2); p.punchT = Math.max(0, p.punchT - dt); p.armsUp = Math.max(0, p.armsUp - dt); p.cheer = Math.max(0, p.cheer - dt);
  // knockback slide
  if (p.kb.lengthSq() > 0.01) { p.pos.addScaledVector(p.kb, dt); p.kb.multiplyScalar(Math.max(0, 1 - dt * 7)); resolveCircle(p.pos, 0.32, 0.3); }
  if (p.stunT > 0 && p.down <= 0) { p.stunT -= dt; p.speed = 0; p.ground = groundAt(p.pos.x, p.pos.z); return; }
  if (p.down > 0) {
    p.down -= dt; p.speed = 0; p.guard = 0;
    if (p.down <= 0) {
      p.hp = Math.max(p.hp, p.maxHp * 0.5);
      if (p.kind === 'cop') { p.state = 'chase'; }
      else if (p.kind === 'gang' || (p.pers === 'tough' && R2() < 0.5)) { p.state = 'fight'; p.target = 'player'; }
      else if (p.pers === 'snitch') { p.state = 'phone'; p.t = 4; }
      else { p.state = 'flee'; p.t = 5; p.fleeFrom = P.pos.clone(); }
      if (p.onUp) p.onUp(p);
      if (p.scripted && p.state === 'fight' && p.onUp) p.onUp(p);
    }
    p.ground = groundAt(p.pos.x, p.pos.z); return;
  }
  let tx = p.pos.x, tz = p.pos.z, sp = 0, faceTo = null;
  const pf = playerFocus();
  const dPlayer = Math.hypot(pf.x - p.pos.x, pf.z - p.pos.z);
  p.guard = Math.max(0, p.guard - dt * 3);
  switch (p.state) {
    case 'walk': {
      if (p.idle > 0) { p.idle -= dt; break; }
      const a = pedNodes[p.from], b = pedNodes[p.to];
      const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1;
      tx = b.x - dz / l * p.lat; tz = b.z + dx / l * p.lat; sp = p.base;
      if (Math.hypot(tx - p.pos.x, tz - p.pos.z) < 0.8) { const nb = b.nb.filter(n => n !== p.from); p.from = p.to; p.to = pick(nb.length ? nb : b.nb); if (R2() < 0.07) p.idle = 1.5 + R2() * 4; }
      // cops on patrol notice wanted player
      if (p.kind === 'cop' && S.wanted > 0 && dPlayer < 40) p.state = 'chase';
      break;
    }
    case 'idle': { faceTo = p.faceTo || null; break; }
    case 'hang': {
      const h = p.home; tx = h.x; tz = h.z; sp = Math.hypot(h.x - p.pos.x, h.z - p.pos.z) > 1.5 ? 1.3 : 0;
      if (sp === 0) faceTo = pf;
      if ((S.save.gangRep[p.gang] || 0) <= -3 && dPlayer < 14 && !P.car) { p.state = 'fight'; p.target = 'player'; S.hooks.toast('⚠️ The ' + GANGS[p.gang].name + ' recognize you!', GANGS[p.gang].color); alertGang(p.gang, p.pos); }
      break;
    }
    case 'flee': {
      p.t -= dt; const f = p.fleeFrom || pf; const dx = p.pos.x - f.x, dz = p.pos.z - f.z, l = Math.hypot(dx, dz) || 1;
      tx = p.pos.x + dx / l * 5; tz = p.pos.z + dz / l * 5; sp = 6.0;
      if (p.t <= 0) { if (p.thenPhone) { p.thenPhone = false; p.state = 'phone'; p.t = 4; S.hooks.snitch(p); } else { p.state = p.kind === 'cop' ? 'chase' : 'walk'; reroute(p); } }
      break;
    }
    case 'phone': {
      p.phone = 1; faceTo = pf; p.t -= dt;
      if (p.t <= 0) { p.phone = 0; S.hooks.snitchDone(p); p.state = 'flee'; p.t = 4; p.fleeFrom = pf.clone(); }
      break;
    }
    case 'fight': {
      let tgt = p.target === 'player' ? (P.car ? null : P.pos) : (p.target && !p.target.dead && p.target.down <= 0 ? p.target.pos : null);
      if (p.target === 'player' && P.dead) tgt = null;
      if (!tgt || Math.hypot(tgt.x - p.pos.x, tgt.z - p.pos.z) > 32) { p.state = p.kind === 'gang' ? 'hang' : p.kind === 'cop' ? 'chase' : p.kind === 'npc' ? (p.afterFight || 'idle') : 'walk'; if (p.state === 'walk') reroute(p); break; }
      const d = Math.hypot(tgt.x - p.pos.x, tgt.z - p.pos.z);
      faceTo = tgt; p.guard = Math.min(1, p.guard + dt * 6);
      if (d > 1.05) { tx = tgt.x; tz = tgt.z; sp = d > 3 ? 5.6 : 2.2; }
      p.atkCD -= dt;
      if (d < 1.25 && p.atkCD <= 0) {
        p.atkCD = 0.75 + R2() * 0.7; p.punchT = 0.3; p.punchArm = 1 - p.punchArm; p.pendingHit = 0.13;
      }
      if (p.pendingHit > 0) { p.pendingHit -= dt; if (p.pendingHit <= 0 && d < 1.45) { if (p.target === 'player') S.hooks.playerHit(p.kind === 'cop' ? 9 : 6 + R2() * 6, p.pos, p); else hitPed(p.target, 10, p.pos, false); } }
      break;
    }
    case 'chase': { // cops
      if (S.wanted <= 0) { p.state = 'walk'; reroute(p); p.kind === 'cop' && (p.leave = 20); break; }
      if (P.car) { tx = pf.x; tz = pf.z; sp = dPlayer > 8 ? 6.3 : 0; faceTo = pf; if (dPlayer < 5 && Math.abs(P.car.speed) < 2) S.hooks.copContact(dt, p, true); break; }
      tx = pf.x; tz = pf.z; sp = dPlayer > 1.1 ? 6.6 : 0; faceTo = pf; p.guard = 0.6;
      if (dPlayer < 1.4) S.hooks.copContact(dt, p, false);
      if (P.fighting > 0 && dPlayer < 1.3) { p.state = 'fight'; p.target = 'player'; }
      break;
    }
    case 'goto': { tx = p.dest.x; tz = p.dest.z; sp = p.goSpeed || 5; if (Math.hypot(tx - p.pos.x, tz - p.pos.z) < 0.7) { p.state = p.after || 'idle'; if (p.onArrive) p.onArrive(p); } break; }
    case 'follow': { const d = Math.hypot(pf.x - p.pos.x, pf.z - p.pos.z); if (d > 2.5) { tx = pf.x; tz = pf.z; sp = d > 6 ? 6 : 3; } faceTo = pf; break; }
    case 'cheer': { p.cheer = 1; faceTo = pf; break; }
  }
  const dx = tx - p.pos.x, dz = tz - p.pos.z, l = Math.hypot(dx, dz);
  p.speed = lerp(p.speed, l > 0.05 ? sp : 0, Math.min(1, dt * 5));
  if (l > 0.05 && sp > 0) p.yaw = angLerp(p.yaw, Math.atan2(dx, dz), Math.min(1, dt * 8));
  else if (faceTo) p.yaw = angLerp(p.yaw, Math.atan2(faceTo.x - p.pos.x, faceTo.z - p.pos.z), Math.min(1, dt * 6));
  p.pos.x += Math.sin(p.yaw) * p.speed * dt; p.pos.z += Math.cos(p.yaw) * p.speed * dt;
  if (!P.car && !P.dead) { const ex = p.pos.x - P.pos.x, ez = p.pos.z - P.pos.z, d = Math.hypot(ex, ez); if (d < 0.7 && d > 0.001) { p.pos.x = P.pos.x + ex / d * 0.7; p.pos.z = P.pos.z + ez / d * 0.7; } }
  resolveCircle(p.pos, 0.32, 0.3);
  const g = groundAt(p.pos.x, p.pos.z); p.onRoad = g === 0; p.ground = g;
  p.pos.y = lerp(p.pos.y, g, Math.min(1, dt * 12));
}
// keep civilians around the player: recycle far-away ones
let recycleT = 0;
export function manageCrowd(dt, target = 46) {
  recycleT -= dt; if (recycleT > 0) return; recycleT = 0.5;
  const f = playerFocus();
  let civs = 0;
  for (const p of [...peds]) {
    if (p.kind === 'civ') {
      civs++;
      if (p.pos.distanceTo(f) > 190 && p.state !== 'phone') { removePed(p); civs--; }
    }
    if (p.kind === 'cop' && (p.leave !== undefined) && S.wanted <= 0) { p.leave -= 0.5; if (p.leave <= 0 && p.pos.distanceTo(f) > 50) removePed(p); }
  }
  const dens = districtAt(f.x, f.z) === 4 ? 0.6 : (S.night > 0.6 ? 0.75 : 1);
  for (let k = 0; k < 3 && civs < target * dens; k++) { spawnCiv(f.x, f.z, 55, 150); civs++; }
}
