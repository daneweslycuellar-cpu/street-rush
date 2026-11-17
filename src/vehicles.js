import * as THREE from 'three';
import { mergeGeometries } from '../lib/addons/BufferGeometryUtils.js';
import { S, clamp, lerp, angLerp, angDiff, pick, R2 } from './state.js';
import { scene, radialTex, colorize, resolveCircle, lastHit, groundAt, nodeV, road, neighbors, nearestNode, N, HALF, CELL, ROADW, greenAxis, isYellow, ramps, losClear, camera } from './world.js';
import { peds, knockPed } from './people.js';

/* ============================== SPECS ============================== */
export const CARS = {
  sedan: { name: 'City Sedan', cost: 0, value: 250, max: 28, acc: 15, turn: 1.9, color: 0x2f5fa8, body: 'sedan', hp: 100 },
  taxi: { name: 'Taxi', cost: 250, value: 300, max: 29, acc: 16, turn: 2.0, color: 0xf2b705, body: 'sedan', taxi: true, hp: 100 },
  van: { name: 'Delivery Van', cost: 400, value: 350, max: 24, acc: 12, turn: 1.6, color: 0xf1f1f1, body: 'van', hp: 140 },
  suv: { name: 'SUV', cost: 600, value: 500, max: 31, acc: 16, turn: 1.75, color: 0x2d3436, body: 'suv', hp: 130 },
  sports: { name: 'Sports Coupe', cost: 1000, value: 900, max: 40, acc: 23, turn: 2.2, color: 0xc1121f, body: 'sports', hp: 90 },
  muscle: { name: 'Muscle Car', cost: 1800, value: 1300, max: 44, acc: 25, turn: 1.9, color: 0x111111, body: 'sports', stripe: 0xffbe0b, hp: 110 },
  super: { name: 'Supercar', cost: 3500, value: 2500, max: 55, acc: 32, turn: 2.45, color: 0xf77f00, body: 'super', hp: 85 },
  police: { name: 'Police Cruiser', cost: -1, value: 1200, max: 42, acc: 24, turn: 2.1, color: 0x111318, body: 'sedan', police: true, hp: 160 },
  armored: { name: 'Armored Truck', cost: -1, value: 3000, max: 26, acc: 11, turn: 1.4, color: 0x5f6b5a, body: 'truck', hp: 320 },
  icecream: { name: 'Ice Cream Truck', cost: -1, value: 800, max: 22, acc: 11, turn: 1.6, color: 0xffd6e8, body: 'van', icecream: true, hp: 140, secret: true },
  ghost: { name: 'The Ghost', cost: -1, value: 6000, max: 62, acc: 38, turn: 2.6, color: 0x0b0b0f, body: 'super', underglow: 0x00ffe1, hp: 120, secret: true },
  gold: { name: 'Gold Rush', cost: -1, value: 9000, max: 58, acc: 34, turn: 2.5, color: 0xd4af37, body: 'super', gold: true, hp: 100, secret: true },
};
const BODY = {
  sedan: { L: 4.6, W: 1.84, wb: 1.38, wr: 0.34, clear: 0.26, belt: 0.98, roof: 1.46, zw: 0.95, ws: 0.62, zr: -1.2, rs: 0.5 },
  suv: { L: 4.75, W: 1.95, wb: 1.45, wr: 0.4, clear: 0.36, belt: 1.18, roof: 1.8, zw: 1.1, ws: 0.5, zr: -2.1, rs: 0.18 },
  sports: { L: 4.5, W: 1.9, wb: 1.4, wr: 0.34, clear: 0.2, belt: 0.82, roof: 1.22, zw: 0.65, ws: 0.72, zr: -0.95, rs: 0.6 },
  super: { L: 4.6, W: 2.0, wb: 1.44, wr: 0.35, clear: 0.16, belt: 0.72, roof: 1.12, zw: 0.55, ws: 0.9, zr: -0.8, rs: 0.65 },
  van: { L: 5.0, W: 2.0, wb: 1.65, wr: 0.38, clear: 0.32, belt: 1.15, roof: 2.15, zw: 1.75, ws: 0.55, zr: -2.48, rs: 0.02 },
  truck: { L: 5.8, W: 2.25, wb: 1.95, wr: 0.46, clear: 0.42, belt: 1.35, roof: 2.65, zw: 2.2, ws: 0.4, zr: -2.85, rs: 0.02 },
};

/* ============================== GEOMETRY ============================== */
function extrudeSide(shape, width, bevel) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 10 });
  g.rotateY(-Math.PI / 2); g.translate((width - bevel * 2) / 2, 0, 0); g.computeVertexNormals(); return g;
}
const stripAttrs = (g, keep) => { g = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(g.attributes)) if (!keep.includes(k)) g.deleteAttribute(k); return g; };
const geoCache = {};
function carGeos(key) {
  if (geoCache[key]) return geoCache[key];
  const spec = CARS[key], type = spec.body, T = BODY[type], hl = T.L / 2, ar = T.wr + 0.07;
  const s = new THREE.Shape();
  s.moveTo(-hl + 0.1, T.clear + 0.12);
  s.lineTo(-T.wb - ar - 0.05, T.clear); s.absarc(-T.wb, T.wr + 0.02, ar, Math.PI, 0, true);
  s.lineTo(T.wb - ar, T.clear); s.absarc(T.wb, T.wr + 0.02, ar, Math.PI, 0, true);
  s.lineTo(hl - 0.2, T.clear); s.quadraticCurveTo(hl + 0.04, T.clear, hl + 0.04, T.clear + 0.28);
  s.lineTo(hl, T.belt - 0.18); s.quadraticCurveTo(hl - 0.04, T.belt - 0.02, hl - 0.45, T.belt);
  s.lineTo(T.zw, T.belt + 0.07); s.lineTo(T.zr, T.belt + 0.07); s.lineTo(-hl + 0.35, T.belt + 0.02);
  s.quadraticCurveTo(-hl - 0.02, T.belt, -hl - 0.02, T.belt - 0.25); s.lineTo(-hl + 0.02, T.clear + 0.3);
  s.quadraticCurveTo(-hl, T.clear + 0.12, -hl + 0.1, T.clear + 0.12);
  const paint = [extrudeSide(s, T.W, 0.07)], trim = [], lights = [];
  const gh = new THREE.Shape(), b0 = T.belt + 0.05;
  gh.moveTo(T.zr, b0); gh.lineTo(T.zr + T.rs, T.roof - 0.02); gh.quadraticCurveTo(T.zr + T.rs + 0.1, T.roof + 0.02, T.zr + T.rs + 0.25, T.roof + 0.02);
  gh.lineTo(T.zw - T.ws - 0.2, T.roof + 0.02); gh.quadraticCurveTo(T.zw - T.ws, T.roof, T.zw - T.ws + 0.05, T.roof - 0.05); gh.lineTo(T.zw, b0); gh.lineTo(T.zr, b0);
  const ghG = extrudeSide(gh, T.W - 0.2, 0.06);
  const midZ = (T.zw - T.ws + T.zr + T.rs) / 2;
  if (type === 'van' || type === 'truck') {
    paint.push(ghG);
    const wsLen = Math.hypot(T.ws, T.roof - b0);
    trim.push(colorize(new THREE.BoxGeometry(T.W - 0.3, wsLen * 0.85, 0.06).rotateX(-Math.atan2(T.ws, T.roof - b0)).translate(0, (b0 + T.roof) / 2, T.zw - T.ws / 2 + 0.04), 0x1a2430));
    for (const sx of [-1, 1]) trim.push(colorize(new THREE.BoxGeometry(0.05, 0.55, 0.8).translate(sx * (T.W / 2 - 0.08), b0 + 0.45, T.zw - T.ws - 0.55), 0x1a2430));
    if (type === 'truck') { for (const sx of [-1, 1]) trim.push(colorize(new THREE.BoxGeometry(0.05, 0.9, 2.6).translate(sx * (T.W / 2 + 0.01), 1.6, -0.9), 0x3f4a3c)); trim.push(colorize(new THREE.BoxGeometry(1.0, 0.5, 0.05).translate(0, 1.8, -hl - 0.03), 0xd4af37)); }
  } else {
    trim.push(colorize(ghG, 0x16202b));
    const roofLen = (T.zw - T.ws - 0.15) - (T.zr + T.rs + 0.15);
    paint.push(new THREE.BoxGeometry(T.W - 0.3, 0.06, roofLen).translate(0, T.roof + 0.03, midZ));
    paint.push(new THREE.BoxGeometry(T.W - 0.16, T.roof - b0, 0.12).translate(0, (T.roof + b0) / 2, midZ - 0.1));
  }
  if (spec.stripe) trim.push(colorize(new THREE.BoxGeometry(0.42, 0.02, T.L - 0.3).translate(0, T.belt + 0.08, 0), spec.stripe));
  if (spec.taxi) lights.push(colorize(new THREE.BoxGeometry(0.75, 0.22, 0.28).translate(0, T.roof + 0.15, midZ), 0xfff6c0, 1.2));
  if (spec.police) {
    for (const sx of [-1, 1]) trim.push(colorize(new THREE.BoxGeometry(0.03, 0.42, 2.2).translate(sx * (T.W / 2 + 0.005), T.belt - 0.3, 0), 0xf2f2f2));
    trim.push(colorize(new THREE.BoxGeometry(1.3, 0.1, 0.3).translate(0, T.roof + 0.07, midZ), 0x222222));
  }
  if (spec.icecream) { trim.push(colorize(new THREE.ConeGeometry(0.35, 0.8, 12).rotateX(Math.PI).translate(0, T.roof + 0.5, 0), 0xd9a066)); trim.push(colorize(new THREE.SphereGeometry(0.38, 12, 8).translate(0, T.roof + 1.0, 0), 0xff8fc7)); for (const sx of [-1, 1]) trim.push(colorize(new THREE.BoxGeometry(0.03, 0.8, 1.6).translate(sx * (T.W / 2 + 0.01), 1.5, -0.6), 0x7ad9ff)); }
  if (type === 'sports' || type === 'super') {
    trim.push(colorize(new THREE.BoxGeometry(T.W * 0.86, 0.05, 0.32).translate(0, T.belt + 0.3, -hl + 0.28), 0x111111));
    for (const sx of [-0.55, 0.55]) trim.push(colorize(new THREE.BoxGeometry(0.06, 0.26, 0.08).translate(sx, T.belt + 0.15, -hl + 0.28), 0x111111));
  }
  const fz = hl + 0.03, rz = -hl - 0.03, ly = T.belt - 0.2;
  for (const sx of [-1, 1]) {
    lights.push(colorize(new THREE.BoxGeometry(0.42, 0.13, 0.08).translate(sx * (T.W / 2 - 0.32), ly, fz - 0.02), 0xfff3d6, 1.6));
    lights.push(colorize(new THREE.BoxGeometry(0.44, 0.13, 0.08).translate(sx * (T.W / 2 - 0.3), ly + 0.02, rz + 0.02), 0xff1a1a, 1.1));
    trim.push(colorize(new THREE.BoxGeometry(0.16, 0.08, 0.2).translate(sx * (T.W / 2 + 0.06), T.belt + 0.12, T.zw - 0.15), 0x1c1c1c));
    trim.push(colorize(new THREE.BoxGeometry(0.03, 0.04, 0.18).translate(sx * (T.W / 2 + 0.01), T.belt - 0.12, 0.1), 0x9aa0a6));
  }
  trim.push(colorize(new THREE.BoxGeometry(T.W * 0.5, 0.2, 0.06).translate(0, ly - 0.08, fz), 0x141414));
  trim.push(colorize(new THREE.BoxGeometry(T.W + 0.04, 0.2, 0.18).translate(0, T.clear + 0.14, fz - 0.03), 0x2a2a2a));
  trim.push(colorize(new THREE.BoxGeometry(T.W + 0.04, 0.2, 0.18).translate(0, T.clear + 0.14, rz + 0.03), 0x2a2a2a));
  trim.push(colorize(new THREE.BoxGeometry(0.5, 0.12, 0.02).translate(0, T.clear + 0.36, rz - 0.01), 0xf4f4f4));
  trim.push(colorize(new THREE.BoxGeometry(T.W - 0.3, 0.12, T.L - 0.8).translate(0, T.clear + 0.02, 0), 0x111111));
  const tire = colorize(new THREE.CylinderGeometry(T.wr, T.wr, 0.24, 22).rotateZ(Math.PI / 2), 0x161616);
  const rim = colorize(new THREE.CylinderGeometry(T.wr * 0.64, T.wr * 0.64, 0.25, 14).rotateZ(Math.PI / 2), spec.gold ? 0xd4af37 : 0xb8bec4);
  const hub = colorize(new THREE.CylinderGeometry(T.wr * 0.22, T.wr * 0.22, 0.26, 8).rotateZ(Math.PI / 2), 0x55595e);
  const spokes = []; for (let k = 0; k < 5; k++) spokes.push(colorize(new THREE.BoxGeometry(0.255, T.wr * 1.15, 0.06).rotateX(k * Math.PI * 2 / 5), 0x8a9096));
  return (geoCache[key] = { paintG: mergeGeometries(paint.map(g => stripAttrs(g, ['position', 'normal', 'uv']))), trimG: mergeGeometries(trim), lightG: mergeGeometries(lights), wheelG: mergeGeometries([tire, rim, hub, ...spokes]), T });
}
const paintCache = {};
const paintMat = (c, gold) => paintCache[c] || (paintCache[c] = new THREE.MeshPhysicalMaterial({ color: c, metalness: gold ? 1 : 0.45, roughness: gold ? 0.2 : 0.35, clearcoat: 1, clearcoatRoughness: 0.08 }));
const trimMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.4, roughness: 0.18 });
const lightMat = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
const wheelMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.5, roughness: 0.5 });
const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, alphaMap: radialTex, transparent: true, opacity: 0.55, depthWrite: false });
const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff1cf, map: radialTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
const sirenR = new THREE.MeshBasicMaterial({ color: 0xff2020, toneMapped: false }), sirenB = new THREE.MeshBasicMaterial({ color: 0x2050ff, toneMapped: false });
const wreckMat = new THREE.MeshStandardMaterial({ color: 0x1c1a19, roughness: 1 });
function makeCarMesh(key, color) {
  const spec = CARS[key], { paintG, trimG, lightG, wheelG, T } = carGeos(key);
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const pm = new THREE.Mesh(paintG, paintMat(color, spec.gold)); pm.castShadow = true; pm.receiveShadow = true; body.add(pm);
  const tm = new THREE.Mesh(trimG, trimMat); tm.castShadow = true; body.add(tm);
  body.add(new THREE.Mesh(lightG, lightMat));
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(T.W + 0.9, T.L + 0.9).rotateX(-Math.PI / 2), shadowMat); sh.position.y = 0.035; sh.renderOrder = 1; g.add(sh);
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(4.5, 13).rotateX(-Math.PI / 2), beamMat); beam.position.set(0, 0.04, T.L / 2 + 6.5); beam.renderOrder = 2; g.add(beam);
  let siren = null;
  if (spec.police) {
    siren = [new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.14, 0.26), sirenR), new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.14, 0.26), sirenB)];
    const mz = (T.zw - T.ws + T.zr + T.rs) / 2; siren[0].position.set(-0.33, T.roof + 0.16, mz); siren[1].position.set(0.33, T.roof + 0.16, mz); body.add(...siren);
  }
  if (spec.underglow) { const ug = new THREE.Mesh(new THREE.PlaneGeometry(T.W + 1.6, T.L + 1.2).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: spec.underglow, map: radialTex, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, depthWrite: false })); ug.position.y = 0.05; g.add(ug); }
  const wheels = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const wg = new THREE.Group(); wg.position.set(sx * (T.W / 2 - 0.16), T.wr, sz * T.wb);
    const w = new THREE.Mesh(wheelG, wheelMat); w.castShadow = true; wg.add(w); g.add(wg); wheels.push(wg);
  }
  return { g, body, wheels, pm, siren, beam, T };
}

/* ============================== PARTICLES ============================== */
class Particles {
  constructor(n, additive) {
    this.n = n; this.i = 0;
    this.pos = new Float32Array(n * 3); this.vel = new Float32Array(n * 3); this.col = new Float32Array(n * 3); this.alpha = new Float32Array(n); this.size = new Float32Array(n); this.life = new Float32Array(n); this.max = new Float32Array(n); this.grow = new Float32Array(n);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1)); g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    const m = new THREE.ShaderMaterial({
      uniforms: { map: { value: radialTex }, scale: { value: window.innerHeight * 0.9 } },
      vertexShader: 'attribute float alpha; attribute float size; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_PointSize=size*scale/max(0.1,-mv.z); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'uniform sampler2D map; varying float vA; varying vec3 vC; void main(){ float a=texture2D(map,gl_PointCoord).r*vA; if(a<0.01) discard; gl_FragColor=vec4(vC,a); }',
      transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.mesh = new THREE.Points(g, m); this.mesh.frustumCulled = false; this.mesh.renderOrder = 3; scene.add(this.mesh);
  }
  emit(x, y, z, vx, vy, vz, life, size, r, g, b, grow = 1) {
    const i = this.i; this.i = (this.i + 1) % this.n;
    this.pos.set([x, y, z], i * 3); this.vel.set([vx, vy, vz], i * 3); this.col.set([r, g, b], i * 3); this.life[i] = life; this.max[i] = life; this.size[i] = size; this.grow[i] = grow; this.alpha[i] = 1;
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; continue; }
      this.life[i] -= dt; const k = this.life[i] / this.max[i];
      this.pos[i * 3] += this.vel[i * 3] * dt; this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt; this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.size[i] += this.grow[i] * dt; this.alpha[i] = Math.max(0, k) * (k > 0.85 ? (1 - k) / 0.15 : 1);
    }
    const a = this.mesh.geometry.attributes; a.position.needsUpdate = a.alpha.needsUpdate = a.size.needsUpdate = a.color.needsUpdate = true;
  }
}
export const smoke = new Particles(500, false), glow = new Particles(400, true);
window.addEventListener('resize', () => { smoke.mesh.material.uniforms.scale.value = glow.mesh.material.uniforms.scale.value = window.innerHeight * 0.9; });

/* ============================== VEHICLES ============================== */
export const vehicles = S.vehicles;
export function spawnVehicle(key, color, x, z, yaw, ai) {
  const spec = CARS[key];
  const mesh = makeCarMesh(key, color === undefined ? spec.color : color);
  const v = { spec, key, mesh, pos: new THREE.Vector3(x, 0, z), vel: new THREE.Vector3(), y: 0, vy: 0, air: false, airT: 0, yaw, speed: 0, ai: null, role: null, stun: 0, wait: 0, ghost: 0, steerVis: 0, hp: spec.hp, maxHp: spec.hp, nitro: 1, drift: 0, stuckT: 0, revT: 0, pitch: 0 };
  mesh.g.position.copy(v.pos); mesh.g.rotation.y = yaw; scene.add(mesh.g);
  vehicles.push(v); if (ai) initAI(v); return v;
}
export function removeVehicle(v) { scene.remove(v.mesh.g); const i = vehicles.indexOf(v); if (i >= 0) vehicles.splice(i, 1); v.removed = true; }
export function wreck(v) {
  if (v.wrecked) return; v.wrecked = true; v.hp = 0; v.ai = null; v.mesh.pm.material = wreckMat; v.burn = 8;
  for (let k = 0; k < 30; k++) glow.emit(v.pos.x, 1, v.pos.z, (R2() - 0.5) * 8, 3 + R2() * 6, (R2() - 0.5) * 8, 0.6 + R2() * 0.5, 2.5, 1, 0.5 + R2() * 0.3, 0.1, 2);
  S.hooks.carWrecked(v);
}
export function damage(v, amt) { if (v.wrecked || v.invuln) return; v.hp -= amt; if (v.hp <= 0) wreck(v); }

/* ---------- physics ---------- */
const _c = new THREE.Vector3();
export function drive(v, inp, dt) {
  const sp = v.spec;
  if (v.wrecked) { inp = { thr: 0, steer: 0, hb: true }; }
  const isP = v === S.P.car;
  const skill = isP ? 1 + (S.save.skills.drive || 0) * 0.0015 : 1;
  const nitroOn = inp.nitro && v.nitro > 0.02 && !v.air;
  if (nitroOn) v.nitro = Math.max(0, v.nitro - dt * 0.33); else v.nitro = Math.min(1, v.nitro + dt * 0.06);
  v.nitroOn = nitroOn;
  const maxS = sp.max * skill * (nitroOn ? 1.32 : 1) * (S.rain > 0.5 ? 0.95 : 1);
  if (v.air) {
    v.vy -= 17 * dt; v.y += v.vy * dt; v.airT += dt;
    v.yaw -= inp.steer * 0.6 * dt;
    v.pos.x += v.vel.x * dt; v.pos.z += v.vel.z * dt;
    if (v.y <= groundAt(v.pos.x, v.pos.z)) { const land = -v.vy; v.y = groundAt(v.pos.x, v.pos.z); v.vy = 0; v.air = false; if (land > 13) damage(v, (land - 13) * 2); S.hooks.landed && S.hooks.landed(v, v.airT); v.airT = 0; }
  } else {
    const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
    const vf0 = v.vel.x * fx + v.vel.z * fz;
    const turn = inp.steer * sp.turn * Math.min(1, Math.abs(vf0) / 7) * Math.sign(vf0 || 1) * (inp.hb ? 1.75 : 1) * (1 - Math.min(0.42, Math.abs(vf0) / maxS * 0.42));
    v.yaw -= turn * dt;
    const nx = Math.sin(v.yaw), nz = Math.cos(v.yaw);
    let vf = v.vel.x * nx + v.vel.z * nz, vl = v.vel.x * -nz + v.vel.z * nx;
    const thr = inp.thr;
    if (thr > 0.05) { if (vf < -0.5) vf += 32 * dt * thr; else vf += sp.acc * thr * dt * (1 - Math.max(0, vf) / maxS * 0.55) * (nitroOn ? 1.9 : 1); }
    else if (thr < -0.05) { if (vf > 0.5) vf -= 34 * dt * -thr; else vf -= sp.acc * 0.55 * -thr * dt; }
    else vf *= (1 - 0.55 * dt);
    if (nitroOn && thr <= 0.05) vf += sp.acc * 1.2 * dt;
    if (vf > maxS) vf = lerp(vf, maxS, Math.min(1, dt * 2));
    vf = clamp(vf, -12, maxS + 4);
    if (inp.hb) vf *= (1 - 0.9 * dt);
    const grip = inp.hb ? 1.3 : (S.rain > 0.4 ? 4.5 : 7.5);
    vl *= Math.max(0, 1 - grip * dt);
    v.vel.set(nx * vf - nz * vl, 0, nz * vf + nx * vl);
    v.speed = vf; v.lat = vl;
    v.drift = (Math.abs(vl) > 2.6 && Math.abs(vf) > 7) ? Math.abs(vl) : 0;
    v.pos.x += v.vel.x * dt; v.pos.z += v.vel.z * dt;
    v.y = lerp(v.y, groundAt(v.pos.x, v.pos.z), Math.min(1, dt * 10));
    // ramps
    for (const r of ramps) {
      const dx = v.pos.x - r.x, dz = v.pos.z - r.z; if (dx * dx + dz * dz > r.len * r.len) continue;
      const rf = Math.sin(r.yaw), rfz = Math.cos(r.yaw); const lz = dx * rf + dz * rfz, lx = dx * -rfz + dz * rf;
      if (Math.abs(lx) < r.w / 2 + 0.6 && lz > -r.len / 2 && lz < r.len / 2 + 0.2) {
        const along = vf * (nx * rf + nz * rfz);
        if (along > 5) { v.y = r.h * clamp((lz + r.len / 2) / r.len, 0, 1); if (lz > r.len / 2 - 0.4) { v.air = true; v.vy = along * (r.h / r.len) * 1.25 + (r.mega ? 5 : 2.5); v.airT = 0; S.hooks.launched && S.hooks.launched(v, r); } }
      }
    }
  }
  // world collision (3 circles)
  const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
  let impact = 0;
  for (const off of [-1.45, 0, 1.45]) {
    _c.set(v.pos.x + fx * off, 0, v.pos.z + fz * off); const bx = _c.x, bz = _c.z;
    if (resolveCircle(_c, 1.0, v.y + 0.5)) {
      v.pos.x += _c.x - bx; v.pos.z += _c.z - bz;
      const vn = v.vel.x * lastHit.nx + v.vel.z * lastHit.nz;
      if (vn < 0) { v.vel.x -= lastHit.nx * vn * 1.35; v.vel.z -= lastHit.nz * vn * 1.35; impact = Math.max(impact, -vn); }
    }
  }
  if (impact > 0) { v.vel.multiplyScalar(0.85); if (impact > 7) { damage(v, (impact - 6) * (isP ? 1.4 : 2.2)); if (isP) S.hooks.impact(impact); sparks(v.pos, impact); } }
  // vehicles
  for (const o of vehicles) {
    if (o === v || o.removed) continue;
    const dx = o.pos.x - v.pos.x, dz = o.pos.z - v.pos.z, d2 = dx * dx + dz * dz; if (d2 > 11 || Math.abs(o.y - v.y) > 2) continue;
    const d = Math.sqrt(d2) || 0.01, nxx = dx / d, nzz = dz / d, push = 3.3 - d;
    const dyn = !o.ai || o.ai.dyn;
    o.pos.x += nxx * push * (dyn ? 0.5 : 0.7); o.pos.z += nzz * push * (dyn ? 0.5 : 0.7); v.pos.x -= nxx * push * (dyn ? 0.5 : 0.3); v.pos.z -= nzz * push * (dyn ? 0.5 : 0.3);
    const rel = (v.vel.x - o.vel.x) * nxx + (v.vel.z - o.vel.z) * nzz;
    if (rel > 0) {
      const mv = o.spec.hp > 200 ? 0.3 : 0.55;
      v.vel.x -= nxx * rel * mv; v.vel.z -= nzz * rel * mv; o.vel.x += nxx * rel * (1 - mv); o.vel.z += nzz * rel * (1 - mv);
      if (rel > 6) { damage(v, rel * (isP ? 0.7 : 1.4)); damage(o, rel * (o === S.P.car ? 0.7 : 1.6)); sparks(_c.set((v.pos.x + o.pos.x) / 2, 0.7, (v.pos.z + o.pos.z) / 2), rel); if (isP) S.hooks.impact(rel, o); }
    }
    if (o.ai && o.ai.kind === 'traffic') o.stun = 2.5;
    resolveCircle(o.pos, 1.4, 0.5);
  }
  // pedestrians
  const as = Math.hypot(v.vel.x, v.vel.z);
  if (as > 3 && !v.air) {
    const sg = Math.sign(v.speed) || 1;
    for (const p of peds) {
      if (p.down > 0 || p.dead) continue;
      const dx = p.pos.x - v.pos.x, dz = p.pos.z - v.pos.z; if (dx * dx + dz * dz > 220) continue;
      const along = (dx * fx + dz * fz) * sg, lat = Math.abs(dx * fz - dz * fx);
      if (along > -2.3 && along < 2.6 && lat < 1.4) { knockPed(p, v, isP); v.vel.multiplyScalar(0.92); if (isP) S.hooks.pedHit(p); }
      else if (isP && along > 0 && along < 10 + as * 0.4 && lat < 3.5 && p.state !== 'flee' && p.kind === 'civ') { p.state = 'flee'; p.t = 1.6; p.fleeFrom = new THREE.Vector3(p.pos.x - fz * (dx * -fz + dz * fx >= 0 ? -1 : 1), 0, p.pos.z); }
    }
  }
  v.steerVis = lerp(v.steerVis, inp.steer, Math.min(1, dt * 8));
  v.speed = v.vel.x * Math.sin(v.yaw) + v.vel.z * Math.cos(v.yaw);
}
function sparks(p, k) { for (let i = 0; i < Math.min(14, k); i++) glow.emit(p.x, 0.7, p.z, (R2() - 0.5) * 9, R2() * 5, (R2() - 0.5) * 9, 0.3 + R2() * 0.3, 0.25, 1, 0.8, 0.4, -0.5); }

/* ---------- AI helpers: steer toward a point along the road grid ---------- */
export function aiDrive(v, tx, tz, dt, o = {}) {
  const dx = tx - v.pos.x, dz = tz - v.pos.z, d = Math.hypot(dx, dz);
  const want = Math.atan2(dx, dz), err = angDiff(v.yaw, want);
  let steer = clamp(-err * 2.4, -1, 1), thr = o.thr ?? 1;
  if (Math.abs(err) > 1.25 && v.speed > 9) thr = 0.15;
  if (o.stopDist && d < o.stopDist) thr = v.speed > 1.5 ? -1 : 0;
  if (o.nextX !== undefined && d < 32) { const turn = Math.abs(angDiff(want, Math.atan2(o.nextX - tx, o.nextZ - tz))); if (turn > 0.7 && v.speed > 13 + (1 - turn / 1.6) * 10) thr = -0.8; }
  else if (Math.abs(err) > 0.6 && v.speed > 18) thr = Math.min(thr, 0.2);
  if (v.revT > 0) { v.revT -= dt; thr = -1; steer = -steer; }
  else if (thr > 0.5 && Math.abs(v.speed) < 1.5) { v.stuckT += dt; if (v.stuckT > 1.1) { v.revT = 0.9; v.stuckT = 0; } } else v.stuckT = 0;
  drive(v, { thr, steer, hb: Math.abs(err) > 1.0 && v.speed > 16, nitro: o.nitro && Math.abs(err) < 0.25 }, dt);
}
// pick next grid node toward goal; returns world point to aim for
export function navPoint(v, gx, gz) {
  if (Math.hypot(gx - v.pos.x, gz - v.pos.z) < 70 && losClear(v.pos.x, v.pos.z, gx, gz)) { v.nav = null; return [gx, gz]; }
  const goal = nearestNode(gx, gz);
  if (!v.nav || Math.hypot(road(v.nav[0]) - v.pos.x, road(v.nav[1]) - v.pos.z) < 8 || (v.navT -= 1 / 60) < 0) {
    const cur = v.nav && Math.hypot(road(v.nav[0]) - v.pos.x, road(v.nav[1]) - v.pos.z) < 8 ? v.nav : nearestNode(v.pos.x, v.pos.z);
    if (Math.hypot(road(cur[0]) - v.pos.x, road(cur[1]) - v.pos.z) > 9 && !(v.nav)) { v.nav = cur; v.navT = 3; }
    else {
      let best = null, bd = 1e9; const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
      for (const n of neighbors(cur[0], cur[1])) {
        let sc = Math.abs(n[0] - goal[0]) + Math.abs(n[1] - goal[1]) + R2() * 0.3;
        const ddx = road(n[0]) - v.pos.x, ddz = road(n[1]) - v.pos.z; if ((ddx * fx + ddz * fz) < -5) sc += 1.5;
        if (sc < bd) { bd = sc; best = n; }
      }
      v.nav = best || cur; v.navT = 4;
    }
  }
  return [road(v.nav[0]), road(v.nav[1])];
}

/* ---------- traffic AI (lane following) ---------- */
const rightOf = (d) => new THREE.Vector3(-d.z, 0, d.x);
const LANE = 3;
function setSeg(v) { const a = v.ai, A = nodeV(...a.a), B = nodeV(...a.b), d = B.clone().sub(A).normalize(), r = rightOf(d); a.mode = 'seg'; a.axis = Math.abs(d.x) > 0.5 ? 0 : 1; a.p0 = A.clone().addScaledVector(d, 9).addScaledVector(r, LANE); a.p2 = B.clone().addScaledVector(d, -10.2).addScaledVector(r, LANE); a.p1 = a.p0.clone().lerp(a.p2, 0.5); a.len = a.p0.distanceTo(a.p2); }
function setTurn(v, c) { const a = v.ai, A = nodeV(...a.a), B = nodeV(...a.b), C = nodeV(...c); const d1 = B.clone().sub(A).normalize(), d2 = C.clone().sub(B).normalize(), r1 = rightOf(d1), r2 = rightOf(d2); a.mode = 'turn'; a.t = 0; a.next = c; a.p0 = B.clone().addScaledVector(d1, -10.2).addScaledVector(r1, LANE); a.p2 = B.clone().addScaledVector(d2, 9).addScaledVector(r2, LANE); a.p1 = d1.dot(d2) > 0.9 ? a.p0.clone().lerp(a.p2, 0.5) : B.clone().addScaledVector(r1, LANE).addScaledVector(r2, LANE); a.len = (a.p0.distanceTo(a.p1) + a.p1.distanceTo(a.p2) + a.p0.distanceTo(a.p2)) / 2; }
const bez = (a, t, out) => { const u = 1 - t; return out.set(0, 0, 0).addScaledVector(a.p0, u * u).addScaledVector(a.p1, 2 * u * t).addScaledVector(a.p2, t * t); };
const _t1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
const bezTan = (a, t, out) => out.copy(a.p1).sub(a.p0).multiplyScalar(2 * (1 - t)).addScaledVector(_t1.copy(a.p2).sub(a.p1), 2 * t);
export function initAI(v, ni, nj, near) {
  let i, j;
  if (near) { for (let k = 0; k < 30; k++) { i = R2() * (N + 1) | 0; j = R2() * (N + 1) | 0; const d = Math.hypot(road(i) - near.x, road(j) - near.z); if (d > 60 && d < 170) break; } }
  else { i = ni ?? (R2() * (N + 1) | 0); j = nj ?? (R2() * (N + 1) | 0); }
  v.ai = { kind: 'traffic', a: [i, j], b: pick(neighbors(i, j)), t: R2() * 0.8, cruise: 8.5 + R2() * 3.5, spd: 0 };
  setSeg(v); bez(v.ai, v.ai.t, v.pos); const tg = bezTan(v.ai, v.ai.t, _v3); v.yaw = Math.atan2(tg.x, tg.z);
}
function updateTraffic(v, dt) {
  const a = v.ai, fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
  let desired = (a.mode === 'turn' ? a.cruise * 0.6 : a.cruise) * (a.fast ? 1.9 : 1);
  const me = S.P.car ? S.P.car.pos : S.P.pos;
  let blockedByAI = false;
  const check = (e, isAI, latMax) => {
    const dx = e.x - v.pos.x, dz = e.z - v.pos.z, along = dx * fx + dz * fz; if (along <= 0 || along > 12) return;
    if (Math.abs(dx * fz - dz * fx) < latMax) { if (isAI && v.ghost > 0) return; desired = Math.min(desired, along < 5.8 ? 0 : a.cruise * (along - 5.8) / 6); if (isAI) blockedByAI = true; }
  };
  if (!a.fast) { check(me, false, 2.0); for (const o of vehicles) if (o !== v && o !== S.P.car) check(o.pos, true, 2.0); for (const p of peds) if (p.onRoad && p.down <= 0) check(p.pos, false, 1.6); }
  let red = false;
  if (a.mode === 'seg' && !a.fast) { red = greenAxis(a.b[0], a.b[1], S.clock) !== a.axis || isYellow(a.b[0], a.b[1], S.clock); if (red) { const rem = (1 - a.t) * a.len; if (rem < 10) desired = Math.min(desired, rem < 0.5 ? 0 : rem * 0.9); } }
  if (desired < 0.5 && blockedByAI) { v.wait += dt; if (v.wait > 4) { v.ghost = 2.5; v.wait = 0; } } else v.wait = 0;
  v.ghost = Math.max(0, v.ghost - dt);
  if (v.stun > 0) { v.stun -= dt; desired = 0; v.pos.x += v.vel.x * dt; v.pos.z += v.vel.z * dt; v.vel.multiplyScalar(Math.max(0, 1 - dt * 3)); resolveCircle(v.pos, 1.4, 0.5); if (v.stun <= 0) a.recover = 1; }
  a.spd += (desired - a.spd) * Math.min(1, dt * (desired < a.spd ? 4 : 1.4));
  a.t += a.spd * dt / Math.max(0.5, a.len);
  if (a.t >= 1) {
    if (a.mode === 'seg') { if (red) a.t = 1; else setTurn(v, pick(neighbors(...a.b).filter(n => !(n[0] === a.a[0] && n[1] === a.a[1])))); }
    else { a.a = a.b; a.b = a.next; a.t = 0; setSeg(v); }
  }
  if (v.stun <= 0) {
    const target = bez(a, Math.min(1, a.t), _v2);
    const k = a.recover ? Math.min(1, dt * 1.5) : Math.min(1, dt * 8); if (a.recover) { a.recover -= dt; if (a.recover < 0) a.recover = 0; }
    const ox = v.pos.x, oz = v.pos.z; v.pos.lerp(target, k);
    v.vel.set((v.pos.x - ox) / Math.max(dt, 1e-4), 0, (v.pos.z - oz) / Math.max(dt, 1e-4));
    const tg = bezTan(a, Math.min(1, a.t), _v3); if (tg.lengthSq() > 1e-4) v.yaw = angLerp(v.yaw, Math.atan2(tg.x, tg.z), Math.min(1, dt * 8));
  }
  v.speed = a.spd;
  // traffic hitting peds (rare: fast cars)
  if (a.fast) for (const p of peds) { if (p.down > 0) continue; const dx = p.pos.x - v.pos.x, dz = p.pos.z - v.pos.z; if (dx * dx + dz * dz < 4) knockPed(p, v, false); }
}

/* ============================== POLICE ============================== */
export const police = [];
export function spawnPolice(near, key = 'police') {
  let best = null;
  for (let k = 0; k < 30; k++) {
    const i = R2() * (N + 1) | 0, j = R2() * (N + 1) | 0, x = road(i), z = road(j), d = Math.hypot(x - near.x, z - near.z);
    if (d > 70 && d < 140) { best = [x, z]; const vx = x - camera.position.x, vz = z - camera.position.z; const cf = new THREE.Vector3(); camera.getWorldDirection(cf); if (vx * cf.x + vz * cf.z < 0) break; }
  }
  if (!best) return null;
  const v = spawnVehicle(key, key === 'police' ? undefined : 0x111318, best[0], best[1], Math.atan2(near.x - best[0], near.z - best[1]), false);
  v.ai = { kind: 'police', dyn: true }; v.role = 'police'; v.hasCops = 2; police.push(v); return v;
}
export function updatePolice(v, dt, target) {
  const a = v.ai;
  if (v.wrecked) return;
  const P = S.P, tp = target ? target.pos : (P.car ? P.car.pos : P.pos), tvel = target ? target.vel : (P.car ? P.car.vel : P.vel);
  if (target && (target.removed || target.wrecked)) { a.target = null; a.leaving = true; return; }
  const d = Math.hypot(tp.x - v.pos.x, tp.z - v.pos.z);
  if (a.leaving) { const [nx, nz] = navPoint(v, v.pos.x + Math.sin(v.yaw) * 200, v.pos.z + Math.cos(v.yaw) * 200); aiDrive(v, nx, nz, dt, { thr: 0.6 }); return; }
  if (!target && !P.car && d < 14 && v.hasCops > 0) { // stop and let cops out
    aiDrive(v, tp.x, tp.z, dt, { stopDist: 30 });
    if (Math.abs(v.speed) < 2) { S.hooks.copsOut(v); v.hasCops = 0; a.parked = true; }
    return;
  }
  if (a.parked) { if (P.car || d > 25) { a.parked = false; } else { drive(v, { thr: 0, steer: 0, hb: true }, dt); return; } }
  const lead = Math.min(1.2, d / 25);
  const gx = tp.x + tvel.x * lead, gz = tp.z + tvel.z * lead;
  const [nx, nz] = navPoint(v, gx, gz);
  aiDrive(v, nx, nz, dt, { nitro: d > 40 || S.wanted >= 4, thr: 1 });
  if (v.speed > v.spec.max * 0.9 && S.wanted >= 3) v.vel.multiplyScalar(1 + dt * 0.08); // rubber band
}

/* ---------- helicopter ---------- */
export const heli = (() => {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x1d2b4a, metalness: 0.5, roughness: 0.4 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(1.2, 2.4, 6, 12).rotateX(Math.PI / 2), mat); g.add(body);
  const glass = new THREE.Mesh(new THREE.SphereGeometry(1.15, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI / 2.3), new THREE.MeshStandardMaterial({ color: 0x223344, metalness: 0.8, roughness: 0.1 })); glass.position.set(0, 0.2, 1.4); g.add(glass);
  const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, 4.5, 8).rotateX(Math.PI / 2), mat); tail.position.set(0, 0.3, -3.6); g.add(tail);
  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.8), mat); fin.position.set(0, 0.8, -5.6); g.add(fin);
  const rotor = new THREE.Mesh(new THREE.BoxGeometry(9, 0.05, 0.3), new THREE.MeshStandardMaterial({ color: 0x111111 })); rotor.position.y = 1.5; g.add(rotor);
  const rotor2 = rotor.clone(); rotor2.rotation.y = Math.PI / 2; rotor.add(rotor2);
  for (const sx of [-1, 1]) { const sk = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 3.4), new THREE.MeshStandardMaterial({ color: 0x222222 })); sk.position.set(sx * 0.9, -1.4, 0); g.add(sk); }
  const cone = new THREE.Mesh(new THREE.ConeGeometry(7, 42, 24, 1, true).translate(0, -21, 0), new THREE.MeshBasicMaterial({ color: 0xfff4d0, transparent: true, opacity: 0.1, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  scene.add(cone); cone.visible = false;
  const spot = new THREE.Mesh(new THREE.CircleGeometry(7, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xfff4d0, map: radialTex, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false })); scene.add(spot);
  g.visible = false; spot.visible = false; scene.add(g);
  return { g, rotor, cone, spot, pos: new THREE.Vector3(0, 60, 0), active: false };
})();
const _up = new THREE.Vector3(), _dir = new THREE.Vector3();
export function updateHeli(dt, focus) {
  const h = heli;
  if (!h.active) { if (h.g.visible) { h.pos.y += dt * 12; h.g.position.copy(h.pos); h.cone.visible = false; if (h.pos.y > 140) { h.g.visible = false; h.spot.visible = false; } } return; }
  if (!h.g.visible) { h.g.visible = true; h.spot.visible = true; h.pos.set(focus.x + 120, 70, focus.z + 120); }
  const tx = focus.x + Math.sin(S.clock * 0.3) * 14, tz = focus.z + Math.cos(S.clock * 0.3) * 14;
  h.pos.x = lerp(h.pos.x, tx, Math.min(1, dt * 0.6)); h.pos.z = lerp(h.pos.z, tz, Math.min(1, dt * 0.6)); h.pos.y = lerp(h.pos.y, 42, Math.min(1, dt * 0.5));
  h.g.position.copy(h.pos); h.g.rotation.y = Math.atan2(focus.x - h.pos.x, focus.z - h.pos.z); h.g.rotation.x = 0.12;
  h.rotor.rotation.y += dt * 28;
  const sx = lerp(h.spot.position.x || focus.x, focus.x, Math.min(1, dt * 1.5)), sz = lerp(h.spot.position.z || focus.z, focus.z, Math.min(1, dt * 1.5));
  h.spot.position.set(sx, 0.08, sz);
  h.cone.visible = true; h.cone.position.copy(h.pos);
  h.cone.quaternion.setFromUnitVectors(_up.set(0, -1, 0), _dir.set(sx - h.pos.x, -h.pos.y, sz - h.pos.z).normalize());
  const len = Math.hypot(sx - h.pos.x, h.pos.y, sz - h.pos.z); h.cone.scale.set(1, len / 42, 1);
}

/* ============================== UPDATE ALL ============================== */
let flashT = 0;
export function updateVehicles(dt, policeTarget) {
  flashT += dt;
  const flip = Math.floor(flashT * 6) % 2;
  sirenR.color.setRGB(flip ? 3 : 0.3, 0.1, 0.1); sirenB.color.setRGB(0.1, 0.2, flip ? 0.3 : 3);
  for (const v of [...vehicles]) {
    if (v.removed) continue;
    if (v === S.P.car) continue;
    if (v.ai) {
      if (v.ai.kind === 'traffic') updateTraffic(v, dt);
      else if (v.ai.kind === 'police') updatePolice(v, dt, v.ai.target || null);
      else if (v.ai.kind === 'drive' && v.ai.fn) v.ai.fn(v, dt);
    } else if (!v.wrecked || true) {
      if (Math.hypot(v.vel.x, v.vel.z) > 0.05 || v.air) drive(v, { thr: 0, steer: 0, hb: true }, dt);
    }
  }
}
export function updateVehicleVisuals(dt) {
  const ni = S.night;
  beamMat.opacity = clamp(ni * 1.2 - 0.2, 0, 1) * 0.45;
  for (const v of vehicles) {
    const m = v.mesh; m.g.position.set(v.pos.x, v.y, v.pos.z); m.g.rotation.y = v.yaw;
    const isP = v === S.P.car;
    const roll = isP ? -v.steerVis * Math.min(1, Math.abs(v.speed) / 25) * 0.05 + (v.lat || 0) * 0.008 : 0;
    m.body.rotation.z = lerp(m.body.rotation.z, roll, Math.min(1, dt * 6));
    v.pitch = v.air ? lerp(v.pitch, clamp(-v.vy * 0.03, -0.5, 0.5), Math.min(1, dt * 3)) : lerp(v.pitch, 0, Math.min(1, dt * 8));
    m.g.rotation.x = v.pitch;
    m.beam.visible = !v.wrecked && ni > 0.25;
    for (let i = 0; i < 4; i++) { const w = m.wheels[i]; w.children[0].rotation.x += v.speed * dt / 0.36; if (i % 2 === 1) w.rotation.y = (isP || (v.ai && v.ai.dyn)) ? v.steerVis * 0.45 : 0; }
    if (m.siren) { const on = v.role === 'police'; m.siren[0].visible = m.siren[1].visible = on; }
    // effects
    const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
    if (v.drift > 0 && (S.frameN & 1)) for (const sx of [-0.8, 0.8]) smoke.emit(v.pos.x - fx * 1.6 - fz * sx, 0.25, v.pos.z - fz * 1.6 + fx * sx, (R2() - 0.5), 0.6 + R2(), (R2() - 0.5), 1.2, 1.0, 0.85, 0.85, 0.88, 2.2);
    if (v.nitroOn) for (let k = 0; k < 2; k++) glow.emit(v.pos.x - fx * 2.5, 0.45 + v.y, v.pos.z - fz * 2.5, -fx * 6 + (R2() - 0.5), (R2() - 0.5), -fz * 6 + (R2() - 0.5), 0.18, 0.7, 0.3, 0.6, 1, -1);
    if (!v.wrecked && v.hp < v.maxHp * 0.45 && (S.frameN % 3 === 0)) { const k = v.hp < v.maxHp * 0.18; smoke.emit(v.pos.x + fx * 1.7, 1 + v.y, v.pos.z + fz * 1.7, (R2() - 0.5) * 0.5, 1.5 + R2(), (R2() - 0.5) * 0.5, 1.6, 0.8, k ? 0.2 : 0.6, k ? 0.2 : 0.6, k ? 0.2 : 0.62, 1.8); if (k) glow.emit(v.pos.x + fx * 1.7, 1 + v.y, v.pos.z + fz * 1.7, 0, 2, 0, 0.4, 0.8, 1, 0.45, 0.1, -0.6); }
    if (v.wrecked && v.burn > 0) { v.burn -= dt; if (S.frameN % 2 === 0) { glow.emit(v.pos.x + (R2() - 0.5) * 2, 1.2, v.pos.z + (R2() - 0.5) * 3, 0, 2.5, 0, 0.5, 1.3, 1, 0.5, 0.1, -1); smoke.emit(v.pos.x, 2, v.pos.z, (R2() - 0.5), 2.5, (R2() - 0.5), 2.5, 1.2, 0.15, 0.15, 0.15, 2.5); } }
  }
  smoke.update(dt); glow.update(dt);
}
