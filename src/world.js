import * as THREE from 'three';
import { Sky } from '../lib/addons/Sky.js';
import { mergeGeometries, mergeVertices } from '../lib/addons/BufferGeometryUtils.js';
import { S, clamp, lerp, mulberry, pick, R2 } from './state.js';

/* ============================== LAYOUT ============================== */
export const BLOCK = 40, ROADW = 12, CELL = BLOCK + ROADW, N = 8, HALF = N * CELL / 2;
export const LIMIT = HALF + 34;
export const CURB = 0.18;
export const road = (i) => -HALF + i * CELL;
export const nodeV = (i, j) => new THREE.Vector3(road(i), 0, road(j));
export const blockCenter = (i, j) => [road(i) + ROADW / 2 + BLOCK / 2, road(j) + ROADW / 2 + BLOCK / 2];
export function groundAt(x, z) {
  const u = x + HALF, w = z + HALF;
  const i = Math.floor(u / CELL), j = Math.floor(w / CELL);
  if (i < 0 || j < 0 || i >= N || j >= N) return 0;
  const ou = u - i * CELL, ow = w - j * CELL;
  return (ou > ROADW / 2 && ou < CELL - ROADW / 2 && ow > ROADW / 2 && ow < CELL - ROADW / 2) ? CURB : 0;
}
export function neighbors(i, j) { const o = []; if (i > 0) o.push([i - 1, j]); if (i < N) o.push([i + 1, j]); if (j > 0) o.push([i, j - 1]); if (j < N) o.push([i, j + 1]); return o; }
export function nearestNode(x, z) { return [clamp(Math.round((x + HALF) / CELL), 0, N), clamp(Math.round((z + HALF) / CELL), 0, N)]; }
export const DISTRICTS = [
  { name: 'Downtown', color: '#7af0ff' }, { name: 'Little Havana', color: '#ff9fd0' }, { name: 'Uptown', color: '#c9b6ff' },
  { name: 'Old Town', color: '#ffd166' }, { name: 'The Docks', color: '#8ecae6' }];
export function districtAt(x, z) {
  if (Math.max(Math.abs(x), Math.abs(z)) < 62) return 0;
  if (x < 0 && z < 0) return 1; if (x >= 0 && z < 0) return 2; if (x < 0 && z >= 0) return 3; return 4;
}

/* ============================== RENDERER / SCENE ============================== */
export const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.domElement.id = 'c';
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.85;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.prepend(renderer.domElement);
export const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xcdbfb2, 120, 620);
export const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
const sky = new Sky(); sky.scale.setScalar(4500); scene.add(sky);
const su = sky.material.uniforms;
su.turbidity.value = 4; su.rayleigh.value = 1.6; su.mieCoefficient.value = 0.005; su.mieDirectionalG.value = 0.85;
{
  const pm = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene(); const sky2 = new Sky(); sky2.scale.setScalar(1000);
  const u2 = sky2.material.uniforms; u2.turbidity.value = 4; u2.rayleigh.value = 1.6; u2.mieCoefficient.value = 0.005; u2.mieDirectionalG.value = 0.85;
  u2.sunPosition.value.setFromSphericalCoords(1, THREE.MathUtils.degToRad(50), 3.6);
  envScene.add(sky2);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(900, 16), new THREE.MeshBasicMaterial({ color: 0x55534f })); ground.rotation.x = -Math.PI / 2; ground.position.y = -5; envScene.add(ground);
  scene.environment = pm.fromScene(envScene, 0.02).texture;
  scene.environmentIntensity = 0.42;
}
export const hemi = new THREE.HemisphereLight(0xdfeaff, 0x6b5b4b, 0.25); scene.add(hemi);
export const sun = new THREE.DirectionalLight(0xffeccc, 3.4);
sun.castShadow = true;
const SHADOW_R = 55;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -SHADOW_R, right: SHADOW_R, top: SHADOW_R, bottom: -SHADOW_R, near: 1, far: 340 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
scene.add(sun); scene.add(sun.target);

/* ============================== TEXTURES ============================== */
const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
export function canvasTex(w, h, draw, repeat, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = maxAniso; return t;
}
function noiseFill(g, w, h, base, amt, n, r, size = 2) {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) { const v = (r() - 0.5) * amt; g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`; g.fillRect(r() * w, r() * h, size, size); }
}
// facade generator: same layout in color mode ('c') and night-emissive mode ('e')
function facade(kind, mode) {
  return canvasTex(512, 512, (g) => {
    const r = mulberry(kind === 'brick' ? 11 : kind === 'plaster' ? 12 : kind === 'glass' ? 13 : 15);
    const E = mode === 'e';
    if (kind === 'glass') {
      if (!E) { const gr = g.createLinearGradient(0, 0, 512, 512); gr.addColorStop(0, '#c7d9e8'); gr.addColorStop(0.5, '#8aa7c0'); gr.addColorStop(1, '#b8cde0'); g.fillStyle = gr; } else g.fillStyle = '#000';
      g.fillRect(0, 0, 512, 512);
      for (let cy = 0; cy < 8; cy++) for (let cx = 0; cx < 16; cx++) {
        const v = (r() - 0.5) * 0.18, lit = r() < 0.3;
        if (!E) { g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,20,40,${-v})`; g.fillRect(cx * 32, cy * 64, 32, 64); }
        else if (lit) { g.fillStyle = r() < 0.5 ? '#ffe2a8' : '#cfe8ff'; g.fillRect(cx * 32 + 3, cy * 64 + 5, 26, 52); }
      }
      g.fillStyle = E ? '#000' : '#3d4650';
      for (let x = 0; x <= 512; x += 32) g.fillRect(x - 1.5, 0, 3, 512);
      for (let y = 0; y <= 512; y += 64) g.fillRect(0, y - 3, 512, 6);
      return;
    }
    if (kind === 'metal') {
      g.fillStyle = E ? '#000' : '#b9bcbf'; g.fillRect(0, 0, 512, 512);
      if (!E) for (let x = 0; x < 512; x += 8) { g.fillStyle = (x / 8) % 2 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.08)'; g.fillRect(x, 0, 4, 512); }
      for (let cx = 0; cx < 8; cx++) { const lit = r() < 0.4; const x = cx * 64 + 12; if (!E) { g.fillStyle = '#4a5866'; g.fillRect(x, 20, 40, 14); } else if (lit) { g.fillStyle = '#ffd58a'; g.fillRect(x, 20, 40, 14); } }
      if (!E) { g.fillStyle = 'rgba(120,60,20,0.25)'; for (let k = 0; k < 30; k++) g.fillRect(r() * 512, r() * 512, 2 + r() * 6, 20 + r() * 60); }
      return;
    }
    if (!E) {
      if (kind === 'brick') {
        g.fillStyle = '#a4a4a4'; g.fillRect(0, 0, 512, 512);
        for (let y = 0; y < 512; y += 6) for (let x = (y / 6 % 2) * 6; x < 512; x += 12) { const v = 200 + (r() - 0.5) * 50 | 0; g.fillStyle = `rgb(${v},${v * 0.98 | 0},${v * 0.96 | 0})`; g.fillRect(x, y, 11, 5); }
      } else { noiseFill(g, 512, 512, '#e9e6e0', 0.08, 5000, r); for (let cy = 0; cy < 8; cy++) { g.fillStyle = 'rgba(0,0,0,0.07)'; g.fillRect(0, cy * 64 + 60, 512, 4); } }
    } else { g.fillStyle = '#000'; g.fillRect(0, 0, 512, 512); }
    const wr = mulberry(77 + kind.length);
    for (let cy = 0; cy < 8; cy++) for (let cx = 0; cx < 8; cx++) {
      const x = kind === 'brick' ? cx * 64 + 16 : cx * 64 + 10, y = kind === 'brick' ? cy * 64 + 12 : cy * 64 + 14;
      const w = kind === 'brick' ? 32 : 44, h = kind === 'brick' ? 38 : 36;
      const litDay = wr() < 0.08, litNight = wr() < 0.42, curtain = wr() < 0.35, warm = wr() < 0.7;
      if (E) { if (litNight) { g.fillStyle = warm ? '#ffcf86' : '#bfe0ff'; g.fillRect(x, y, w, h); if (curtain) { g.fillStyle = 'rgba(0,0,0,0.45)'; g.fillRect(x, y, w, h * 0.4); } } continue; }
      if (kind !== 'brick') { g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x - 2, y - 2, w + 4, h + 4); }
      const frame = kind === 'brick' ? '#ece6da' : '#5a5f66';
      g.fillStyle = frame; g.fillRect(x - 3, y - 3, w + 6, h + 6);
      const gr = g.createLinearGradient(x, y, x + w * 0.6, y + h);
      if (litDay) { gr.addColorStop(0, '#ffe7b0'); gr.addColorStop(1, '#f2c27a'); } else { gr.addColorStop(0, '#9fb6cc'); gr.addColorStop(0.45, '#4f6378'); gr.addColorStop(1, '#2c3a4a'); }
      g.fillStyle = gr; g.fillRect(x, y, w, h);
      if (!litDay && curtain) { g.fillStyle = 'rgba(230,225,210,0.75)'; g.fillRect(x, y, w, h * 0.4); }
      g.fillStyle = frame; g.fillRect(x + w / 2 - 1.5, y, 3, h); g.fillRect(x, y + h * 0.42, w, 3);
      if (kind === 'brick') { g.fillStyle = '#d8d2c4'; g.fillRect(x - 5, y + h + 3, w + 10, 5); }
    }
  }, true);
}
const shopTex = (mode) => canvasTex(512, 128, (g) => {
  const r = mulberry(14), E = mode === 'e';
  g.fillStyle = E ? '#000' : '#3a3836'; g.fillRect(0, 0, 512, 128);
  const signs = ['#c0392b', '#1f6f8b', '#2d6a4f', '#8e44ad', '#d35400', '#34495e', '#b7950b'];
  for (let s = 0; s < 4; s++) {
    const x = s * 128, sc = pick(signs, r);
    g.fillStyle = E ? sc : sc; g.fillRect(x + 4, 6, 120, 22);
    g.fillStyle = E ? '#fff' : 'rgba(255,255,255,0.85)'; for (let k = 0; k < 6; k++) g.fillRect(x + 14 + k * 17, 13, 11, 8);
    if (!E) { const gr = g.createLinearGradient(x, 34, x, 124); gr.addColorStop(0, '#a9c1d4'); gr.addColorStop(1, '#3f4c58'); g.fillStyle = gr; }
    else g.fillStyle = '#ffe2b0';
    g.fillRect(x + 8, 34, 70, 88);
    if (!E) { g.fillStyle = 'rgba(255,240,200,0.35)'; g.fillRect(x + 12, 70, 62, 50); g.fillStyle = '#222'; g.fillRect(x + 84, 38, 36, 86); g.fillStyle = '#7c95a8'; g.fillRect(x + 88, 42, 28, 50); g.fillStyle = '#555'; g.fillRect(x + 8, 76, 70, 3); g.fillRect(x + 42, 34, 3, 88); }
  }
}, true);
const roadTex = canvasTex(256, 1024, (g) => {
  const r = mulberry(5);
  noiseFill(g, 256, 1024, '#3f4045', 0.14, 22000, r, 2);
  g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(52, 0, 30, 1024); g.fillRect(174, 0, 30, 1024);
  for (let i = 0; i < 18; i++) { g.strokeStyle = 'rgba(20,20,22,0.5)'; g.lineWidth = 1.2; g.beginPath(); let x = r() * 256, y = r() * 1024; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 30; y += r() * 25; g.lineTo(x, y); } g.stroke(); }
  for (let i = 0; i < 6; i++) { g.fillStyle = 'rgba(10,10,12,0.25)'; g.beginPath(); g.ellipse(40 + r() * 170, r() * 1024, 8 + r() * 14, 12 + r() * 22, r(), 0, 7); g.fill(); }
  g.fillStyle = '#4a4a4f'; g.beginPath(); g.arc(70, 500, 13, 0, 7); g.fill(); g.strokeStyle = '#2a2a2e'; g.lineWidth = 2; for (let k = -10; k <= 10; k += 5) { g.beginPath(); g.moveTo(60, 500 + k); g.lineTo(80, 500 + k); g.stroke(); }
  g.fillStyle = '#e6b531'; g.fillRect(122, 0, 5, 1024); g.fillRect(131, 0, 5, 1024);
  g.fillStyle = '#e8e8e8'; g.fillRect(8, 0, 5, 1024); g.fillRect(243, 0, 5, 1024);
}, true);
const sideTex = canvasTex(256, 256, (g) => { noiseFill(g, 256, 256, '#b4aea5', 0.1, 6000, mulberry(6)); g.fillStyle = 'rgba(80,70,60,0.35)'; for (let k = 0; k <= 256; k += 64) { g.fillRect(k - 1, 0, 2, 256); g.fillRect(0, k - 1, 256, 2); } }, true);
const grassTex = canvasTex(256, 256, (g) => noiseFill(g, 256, 256, '#5e8a3f', 0.22, 14000, mulberry(7), 2), true);
export const radialTex = canvasTex(128, 128, (g) => { const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.5, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); }, false, false);

/* ============================== MATERIALS ============================== */
const wallMat = (kind, extra = {}) => new THREE.MeshStandardMaterial({ map: facade(kind, 'c'), emissiveMap: facade(kind, 'e'), emissive: 0xffffff, emissiveIntensity: 0, vertexColors: true, roughness: 0.85, ...extra });
export const M = {
  brick: wallMat('brick'), plaster: wallMat('plaster', { roughness: 0.8 }), glass: wallMat('glass', { roughness: 0.08, metalness: 0.75 }), metal: wallMat('metal', { roughness: 0.6, metalness: 0.35 }),
  shop: new THREE.MeshStandardMaterial({ map: shopTex('c'), emissiveMap: shopTex('e'), emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.55, metalness: 0.1 }),
  cap: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }),
  side: new THREE.MeshStandardMaterial({ map: sideTex, vertexColors: true, roughness: 0.92 }),
  grass: new THREE.MeshStandardMaterial({ map: grassTex, vertexColors: true, roughness: 1 }),
};
const nightMats = [M.brick, M.plaster, M.glass, M.metal, M.shop];

/* ============================== BATCHING ============================== */
const newBatch = () => ({ pos: [], nor: [], uv: [], col: [] });
const tmpC = new THREE.Color();
function addBox(walls, caps, x, y, z, w, h, d, color, uvScale) {
  const b = new THREE.BoxGeometry(w, h, d).toNonIndexed(); b.translate(x, y + h / 2, z);
  const p = b.attributes.position.array, n = b.attributes.normal.array, u = b.attributes.uv.array;
  tmpC.set(color);
  for (let f = 0; f < 6; f++) {
    const ny = n[f * 18 + 1];
    const tgt = (Math.abs(ny) > 0.5 || !walls) ? caps : walls; if (!tgt) continue;
    for (let k = 0; k < 6; k++) {
      const i = f * 6 + k;
      tgt.pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]); tgt.nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      let uu = u[i * 2], vv = u[i * 2 + 1];
      if (tgt === walls && uvScale) { const fw = Math.abs(n[i * 3]) > 0.5 ? d : w; uu *= fw / uvScale; vv *= h / uvScale; }
      tgt.uv.push(uu, vv); tgt.col.push(tmpC.r, tmpC.g, tmpC.b);
    }
  }
}
function addGeo(bt, geo, color, worldUV) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  const p = g.attributes.position.array, n = g.attributes.normal.array, u = g.attributes.uv ? g.attributes.uv.array : null;
  tmpC.set(color);
  for (let i = 0; i < p.length / 3; i++) {
    bt.pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]); bt.nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
    if (worldUV) bt.uv.push(p[i * 3] / worldUV, p[i * 3 + 2] / worldUV); else bt.uv.push(u ? u[i * 2] : 0, u ? u[i * 2 + 1] : 0);
    bt.col.push(tmpC.r, tmpC.g, tmpC.b);
  }
}
function batchMesh(bt, mat, cast = true) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(bt.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(bt.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(bt.uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(bt.col, 3));
  g.computeBoundingSphere(); g.computeBoundingBox();
  const m = new THREE.Mesh(g, mat); m.castShadow = cast; m.receiveShadow = true; return m;
}
export function colorize(g, hex, k = 1) {
  g = g.index ? g.toNonIndexed() : g;
  const c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3);
  for (let i = 0; i < a.length; i += 3) { a[i] = c.r * k; a[i + 1] = c.g * k; a[i + 2] = c.b * k; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  for (const key of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(key)) g.deleteAttribute(key);
  return g;
}

/* ============================== COLLISION ============================== */
const GS = 26, GRID = new Map();
export function addAABB(minX, maxX, minZ, maxZ, h) {
  const b = { minX, maxX, minZ, maxZ, h };
  for (let gx = Math.floor(minX / GS); gx <= Math.floor(maxX / GS); gx++)
    for (let gz = Math.floor(minZ / GS); gz <= Math.floor(maxZ / GS); gz++) { const k = gx + ',' + gz; if (!GRID.has(k)) GRID.set(k, []); GRID.get(k).push(b); }
  return b;
}
const _near = [];
export function nearby(x, z, r) {
  _near.length = 0;
  for (let gx = Math.floor((x - r) / GS); gx <= Math.floor((x + r) / GS); gx++)
    for (let gz = Math.floor((z - r) / GS); gz <= Math.floor((z + r) / GS); gz++) { const a = GRID.get(gx + ',' + gz); if (a) for (const b of a) _near.push(b); }
  return _near;
}
export const lastHit = { nx: 0, nz: 0 };
export function resolveCircle(p, r, yb) {
  let hit = false; lastHit.nx = 0; lastHit.nz = 0;
  for (const b of nearby(p.x, p.z, r + 1)) {
    if (yb !== undefined && yb > b.h) continue;
    const cx = clamp(p.x, b.minX, b.maxX), cz = clamp(p.z, b.minZ, b.maxZ);
    const dx = p.x - cx, dz = p.z - cz, d2 = dx * dx + dz * dz;
    if (d2 < r * r) {
      if (d2 > 1e-6) { const d = Math.sqrt(d2); p.x += dx / d * (r - d); p.z += dz / d * (r - d); lastHit.nx += dx / d; lastHit.nz += dz / d; }
      else {
        const l = p.x - b.minX, rr = b.maxX - p.x, t = p.z - b.minZ, bb = b.maxZ - p.z, m = Math.min(l, rr, t, bb);
        if (m === l) { p.x = b.minX - r; lastHit.nx -= 1; } else if (m === rr) { p.x = b.maxX + r; lastHit.nx += 1; } else if (m === t) { p.z = b.minZ - r; lastHit.nz -= 1; } else { p.z = b.maxZ + r; lastHit.nz += 1; }
      }
      hit = true;
    }
  }
  if (Math.abs(p.x) > LIMIT) { lastHit.nx -= Math.sign(p.x); p.x = Math.sign(p.x) * LIMIT; hit = true; }
  if (Math.abs(p.z) > LIMIT) { lastHit.nz -= Math.sign(p.z); p.z = Math.sign(p.z) * LIMIT; hit = true; }
  const l = Math.hypot(lastHit.nx, lastHit.nz); if (l > 0) { lastHit.nx /= l; lastHit.nz /= l; }
  return hit;
}
// cheap line-of-sight test against buildings (2D, sampled)
export function losClear(ax, az, bx, bz) {
  const d = Math.hypot(bx - ax, bz - az), n = Math.ceil(d / 4);
  for (let k = 1; k < n; k++) {
    const t = k / n, x = ax + (bx - ax) * t, z = az + (bz - az) * t;
    for (const b of nearby(x, z, 0.5)) if (b.h > 3 && x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ) return false;
  }
  return true;
}

/* ============================== CITY GENERATION ============================== */
const R = mulberry(20261116);
const B = { brick: newBatch(), plaster: newBatch(), glass: newBatch(), metal: newBatch(), shop: newBatch(), caps: newBatch(), side: newBatch(), curb: newBatch(), grass: newBatch() };
export const parks = [], blocksInfo = [], treeSpots = [];
const props = { bench: [], bin: [], hydrant: [], container: [] };
const TINTS = {
  brick: ['#ffffff', '#e8d2c4', '#f2c9b0', '#d9b8a8', '#f0e0d0'],
  plaster: ['#ffffff', '#f3e3c8', '#e3ecf2', '#f1d8cf', '#e2e8d6', '#efe2f0', '#d8d2c8'],
  havana: ['#ffb3c6', '#9ee6d6', '#ffe08a', '#ffc49b', '#b8e0ff', '#d6b8ff', '#fff1c1'],
  glass: ['#ffffff', '#cfe6ff', '#d8f2ec', '#e8e8f2', '#c8dcf0'],
  metal: ['#ffffff', '#d7dde3', '#e6ddd0', '#cfd8d1', '#b9c7d6'],
};
const AWN = ['#9b2c2c', '#2d6a4f', '#264653', '#c76b3a', '#5b3f8c', '#1f4e79'];
{ const gt = grassTex.clone(); gt.needsUpdate = true; gt.repeat.set(200, 200);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshStandardMaterial({ map: gt, roughness: 1 })); g.rotation.x = -Math.PI / 2; g.position.y = -0.02; g.receiveShadow = true; scene.add(g); }
export const roadMat = (() => { const rt = roadTex.clone(); rt.needsUpdate = true; rt.repeat.set(1, (N * CELL + ROADW) / 48); return new THREE.MeshStandardMaterial({ map: rt, roughness: 0.92 }); })();
{
  const LEN = N * CELL + ROADW;
  for (let i = 0; i <= N; i++) {
    const a = new THREE.Mesh(new THREE.PlaneGeometry(ROADW, LEN), roadMat); a.rotation.x = -Math.PI / 2; a.position.set(road(i), 0, 0); a.receiveShadow = true; scene.add(a);
    const b = new THREE.Mesh(new THREE.PlaneGeometry(ROADW, LEN), roadMat); b.rotation.x = -Math.PI / 2; b.rotation.z = Math.PI / 2; b.position.set(0, 0.006, road(i)); b.receiveShadow = true; scene.add(b);
  }
  const it = canvasTex(64, 64, (g) => noiseFill(g, 64, 64, '#404146', 0.14, 900, mulberry(9), 2), true);
  const im = new THREE.MeshStandardMaterial({ map: it, roughness: 0.92 });
  const cw = new THREE.MeshStandardMaterial({ color: 0xe9e9e9, roughness: 0.7 });
  const inst = new THREE.InstancedMesh(new THREE.PlaneGeometry(ROADW, ROADW), im, (N + 1) * (N + 1)); let k = 0;
  const stripes = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.7, 3.2), cw, (N + 1) * (N + 1) * 24); let s = 0;
  const stopL = new THREE.InstancedMesh(new THREE.PlaneGeometry(ROADW / 2 - 0.4, 0.45), cw, (N + 1) * (N + 1) * 4); let sl = 0;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), one = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    e.set(-Math.PI / 2, 0, 0); q.setFromEuler(e); m4.compose(new THREE.Vector3(road(i), 0.012, road(j)), q, one); inst.setMatrixAt(k++, m4);
    for (let side = 0; side < 4; side++) {
      const ax = side < 2, sg = side % 2 ? 1 : -1;
      for (let t = 0; t < 6; t++) {
        const off = -5 + t * 2; let px, pz, rz;
        if (ax) { px = road(i) + off; pz = road(j) + sg * (ROADW / 2 + 1.9); rz = 0; } else { px = road(i) + sg * (ROADW / 2 + 1.9); pz = road(j) + off; rz = Math.PI / 2; }
        e.set(-Math.PI / 2, 0, rz); q.setFromEuler(e); m4.compose(new THREE.Vector3(px, 0.016, pz), q, one); stripes.setMatrixAt(s++, m4);
      }
      let px, pz, rz; const half = ROADW / 4 + 0.2;
      if (side === 0) { px = road(i) - half; pz = road(j) - (ROADW / 2 + 3.9); rz = 0; }
      if (side === 1) { px = road(i) + half; pz = road(j) + (ROADW / 2 + 3.9); rz = 0; }
      if (side === 2) { px = road(i) - (ROADW / 2 + 3.9); pz = road(j) + half; rz = Math.PI / 2; }
      if (side === 3) { px = road(i) + (ROADW / 2 + 3.9); pz = road(j) - half; rz = Math.PI / 2; }
      e.set(-Math.PI / 2, 0, rz); q.setFromEuler(e); m4.compose(new THREE.Vector3(px, 0.016, pz), q, one); stopL.setMatrixAt(sl++, m4);
    }
  }
  inst.receiveShadow = stripes.receiveShadow = stopL.receiveShadow = true; scene.add(inst, stripes, stopL);
}
// reserved blocks for landmarks (no random buildings blocking markers)
for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
  const [cx, cz] = blockCenter(i, j);
  addBox(B.curb, null, cx, 0, cz, BLOCK, CURB, BLOCK, '#a9a49c');
  addGeo(B.side, new THREE.PlaneGeometry(BLOCK, BLOCK).rotateX(-Math.PI / 2).translate(cx, CURB + 0.001, cz), '#ffffff', 3);
  const dist = districtAt(cx, cz);
  const dn = Math.max(Math.abs(cx), Math.abs(cz)) / HALF;
  const isPark = (R() < 0.12 && dn > 0.2 && dist !== 4) || (i === 3 && j === 4) || (i === 1 && j === 2);
  blocksInfo.push({ i, j, cx, cz, park: isPark, dist });
  for (let s = 0; s < 4; s++) for (let t = -1; t <= 1; t += 2) {
    const along = t * (6 + R() * 8), off = BLOCK / 2 - 0.9;
    const pts = [[cx + along, cz - off, 0], [cx + along, cz + off, Math.PI], [cx - off, cz + along, Math.PI / 2], [cx + off, cz + along, -Math.PI / 2]];
    const [px, pz, rot] = pts[s]; const r = R();
    if (r < (dist === 4 ? 0.1 : 0.32)) treeSpots.push([px, pz, 0.75 + R() * 0.35]);
    else if (r < 0.45) props.bench.push([px, pz, rot + Math.PI]);
    else if (r < 0.58) props.bin.push([px, pz, rot]);
    else if (r < 0.64) props.hydrant.push([px, pz, rot]);
  }
  if (isPark) {
    parks.push({ cx, cz });
    addGeo(B.grass, new THREE.PlaneGeometry(BLOCK - 6, BLOCK - 6).rotateX(-Math.PI / 2).translate(cx, CURB + 0.01, cz), '#ffffff', 6);
    addGeo(B.side, new THREE.PlaneGeometry(3, BLOCK - 6).rotateX(-Math.PI / 2).translate(cx, CURB + 0.02, cz), '#e8dcc0', 3);
    addGeo(B.side, new THREE.PlaneGeometry(BLOCK - 6, 3).rotateX(-Math.PI / 2).translate(cx, CURB + 0.021, cz), '#e8dcc0', 3);
    addGeo(B.caps, new THREE.CylinderGeometry(3, 3.2, 0.7, 28).translate(cx, CURB + 0.35, cz), '#cfcbc4');
    addGeo(B.caps, new THREE.CylinderGeometry(2.6, 2.6, 0.05, 28).translate(cx, CURB + 0.66, cz), '#3f86b8');
    addGeo(B.caps, new THREE.CylinderGeometry(0.35, 0.5, 1.8, 12).translate(cx, CURB + 0.9, cz), '#cfcbc4');
    addAABB(cx - 3, cx + 3, cz - 3, cz + 3, 0.9);
    for (let t = 0; t < 14; t++) { const tx = cx + (R() - 0.5) * (BLOCK - 10), tz = cz + (R() - 0.5) * (BLOCK - 10); if (Math.abs(tx - cx) < 4.5 || Math.abs(tz - cz) < 4.5) continue; treeSpots.push([tx, tz, 0.9 + R() * 0.6]); }
    for (const [bx, bz, rot] of [[cx + 5, cz + 2.2, Math.PI], [cx - 5, cz - 2.2, 0], [cx + 2.2, cz - 5, Math.PI / 2], [cx - 2.2, cz + 5, -Math.PI / 2]]) props.bench.push([bx, bz, rot]);
    continue;
  }
  // district style
  const Hmax = [12 + 80 * Math.pow(1 - dn, 1.4), 14, 38, 18, 12][dist];
  const area = BLOCK - 6.5;
  const style = () => {
    if (dist === 0) return R() < 0.6 ? 'glass' : 'plaster';
    if (dist === 1) return 'havana';
    if (dist === 2) return R() < 0.5 ? 'glass' : 'plaster';
    if (dist === 3) return R() < 0.8 ? 'brick' : 'plaster';
    return 'metal';
  };
  const putBuilding = (lx, lz, w, dd, h) => {
    let st = style(); if (st === 'glass' && h < 22) st = 'plaster';
    const bt = st === 'havana' ? B.plaster : B[st];
    const tint = pick(TINTS[st], R);
    const base = st === 'glass' ? 0 : 4.2;
    if (st === 'metal') {
      addBox(bt, B.caps, lx, CURB, lz, w, h, dd, tint, 24);
      for (const sgn of [-1, 1]) addBox(null, B.caps, lx, CURB, lz + sgn * (dd / 2 + 0.02), w * 0.35, 4.5, 0.08, '#6e7378');
    } else {
      if (st !== 'glass') addBox(B.shop, null, lx, CURB, lz, w + 0.08, 4.2, dd + 0.08, '#ffffff', 24);
      addBox(bt, B.caps, lx, CURB + base, lz, w, h - base, dd, tint, 24);
      if (st === 'glass') addBox(B.caps, null, lx, CURB, lz, w + 0.4, 0.6, dd + 0.4, '#3d4248');
    }
    const top = CURB + h, pc = st === 'glass' ? '#5d6670' : '#8a857c';
    addBox(null, B.caps, lx, top - 0.5, lz, w + 0.5, 0.35, dd + 0.5, pc);
    for (const [ox, oz, ww, d2] of [[0, dd / 2 - 0.15, w, 0.3], [0, -dd / 2 + 0.15, w, 0.3], [w / 2 - 0.15, 0, 0.3, dd], [-w / 2 + 0.15, 0, 0.3, dd]]) addBox(null, B.caps, lx + ox, top, lz + oz, ww, 0.9, d2, pc);
    addBox(null, B.caps, lx, top - 0.02, lz, w - 0.6, 0.06, dd - 0.6, '#77746e');
    if (R() < 0.7) addBox(null, B.caps, lx + (R() - 0.5) * w * 0.4, top, lz + (R() - 0.5) * dd * 0.4, 2.6, 1.5, 2, '#9a9ba0');
    if (R() < 0.35 && h < 40 && st !== 'glass') {
      const tx = lx + (R() - 0.5) * w * 0.4, tz = lz + (R() - 0.5) * dd * 0.4;
      addGeo(B.caps, new THREE.CylinderGeometry(1.2, 1.2, 2.2, 14).translate(tx, top + 2.4, tz), '#8b5a3c');
      addGeo(B.caps, new THREE.ConeGeometry(1.35, 0.8, 14).translate(tx, top + 3.9, tz), '#5e3c28');
      for (const [a, b2] of [[-0.8, -0.8], [0.8, 0.8], [-0.8, 0.8], [0.8, -0.8]]) addBox(null, B.caps, tx + a, top, tz + b2, 0.15, 1.3, 0.15, '#444444');
    }
    if (st === 'glass' && h > 50) { addBox(null, B.caps, lx, top, lz, w * 0.5, 4, dd * 0.5, '#4b535c'); addGeo(B.caps, new THREE.CylinderGeometry(0.08, 0.12, 9, 6).translate(lx, top + 8.5, lz), '#cccccc'); }
    if ((st === 'plaster' || st === 'havana' || st === 'brick') && R() < (st === 'havana' ? 0.95 : 0.7)) {
      const ac = pick(AWN, R), ah = CURB + 3.1;
      addBox(null, B.caps, lx, ah, lz + dd / 2 + 0.7, w * 0.8, 0.12, 1.4, ac); addBox(null, B.caps, lx, ah - 0.35, lz + dd / 2 + 1.38, w * 0.8, 0.35, 0.04, ac);
      addBox(null, B.caps, lx, ah, lz - dd / 2 - 0.7, w * 0.8, 0.12, 1.4, ac); addBox(null, B.caps, lx, ah - 0.35, lz - dd / 2 - 1.38, w * 0.8, 0.35, 0.04, ac);
    }
    addAABB(lx - w / 2, lx + w / 2, lz - dd / 2, lz + dd / 2, h);
  };
  if (dist === 4 && R() < 0.45) {
    // container yard
    for (let k = 0; k < 10; k++) {
      const x = cx + (R() - 0.5) * 24, z = cz + (R() - 0.5) * 24, rot = R() < 0.5 ? 0 : Math.PI / 2, stack = R() < 0.4 ? 2 : 1;
      for (let s2 = 0; s2 < stack; s2++) props.container.push([x, z, rot, s2 * 2.6]);
      const hw = rot ? 1.25 : 3.05, hd = rot ? 3.05 : 1.25; addAABB(x - hw, x + hw, z - hd, z + hd, 2.6 * stack);
    }
    putBuilding(cx + 8, cz - 8, 14, 12, 7);
  } else if (R() < (dist === 0 ? 0.3 : dist === 4 ? 0.5 : 0.18)) {
    const w = 26 + R() * 4, dd = 26 + R() * 4; putBuilding(cx, cz, w, dd, (dist === 4 ? 6 : 12) + R() * Hmax * 1.1);
  } else {
    const lot = area / 2;
    for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) {
      const lx = cx - area / 2 + lot * (a + 0.5), lz = cz - area / 2 + lot * (b + 0.5);
      putBuilding(lx, lz, 11 + R() * (lot - 12), 11 + R() * (lot - 12), 6 + Math.pow(R(), 1.4) * Hmax);
    }
  }
}
export const cityMeshes = [];
for (const [k, mat, cast] of [['brick', M.brick, true], ['plaster', M.plaster, true], ['glass', M.glass, true], ['metal', M.metal, true], ['shop', M.shop, false], ['caps', M.cap, true], ['curb', M.cap, false], ['side', M.side, false], ['grass', M.grass, false]]) {
  if (!B[k].pos.length) continue; const m = batchMesh(B[k], mat, cast); scene.add(m); cityMeshes.push(m);
}
export const camBlockers = cityMeshes.slice(0, 4);

// distant skyline so the horizon isn't empty
{
  const n = 140, im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), new THREE.MeshStandardMaterial({ map: facade('glass', 'c'), emissiveMap: facade('glass', 'e'), emissive: 0xffffff, emissiveIntensity: 0, roughness: 0.4, metalness: 0.3 }), n);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), c = new THREE.Color();
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2 + R() * 0.03, rad = 470 + R() * 280, h = 30 + Math.pow(R(), 1.5) * 170, w = 18 + R() * 40;
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), R() * 3); m.compose(new THREE.Vector3(Math.cos(a) * rad, 0, Math.sin(a) * rad), q, new THREE.Vector3(w, h, w * (0.6 + R() * 0.8)));
    im.setMatrixAt(k, m); c.setHSL(0.58 + R() * 0.08, 0.15, 0.55 + R() * 0.25); im.setColorAt(k, c);
  }
  scene.add(im); nightMats.push(im.material);
}
// outskirts trees
for (let k = 0; k < 160; k++) {
  const side = k % 4, t = (R() - 0.5) * 2 * (LIMIT + 10), o = LIMIT + 6 + R() * 50;
  const pt = side === 0 ? [t, -o] : side === 1 ? [t, o] : side === 2 ? [-o, t] : [o, t];
  treeSpots.push([pt[0], pt[1], 1.1 + R() * 0.8]);
}
{ // smooth leafy trees
  const trunkG = new THREE.CylinderGeometry(0.16, 0.26, 3, 7); trunkG.translate(0, 1.5, 0);
  const blobs = [[0, 3.6, 0, 1.5], [0.8, 3.1, 0.3, 1.1], [-0.65, 3.2, -0.45, 1.15], [0.1, 4.45, -0.2, 1.05], [-0.3, 3.0, 0.75, 1.0]];
  let crownG = mergeGeometries(blobs.map(([x, y, z, r]) => {
    const g = new THREE.IcosahedronGeometry(r, 2); const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i); const f = 1 + 0.13 * Math.sin(vx * 4.1 + vy * 2.3) * Math.cos(vz * 3.7 - vy * 1.9); p.setXYZ(i, vx * f, vy * f, vz * f); }
    return g.translate(x, y, z);
  }));
  crownG.deleteAttribute('uv'); crownG = mergeVertices(crownG); crownG.computeVertexNormals();
  const p = crownG.attributes.position, col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) { const k = 0.55 + 0.45 * clamp((p.getY(i) - 2.2) / 2.8, 0, 1); col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = k; }
  crownG.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const trunks = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x5b4330, roughness: 1 }), treeSpots.length);
  const crowns = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 }), treeSpots.length);
  const m = new THREE.Matrix4(), c = new THREE.Color(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  treeSpots.forEach(([x, z, s], k) => {
    q.setFromAxisAngle(up, R() * 6.28); sc.set(s, s * (0.9 + R() * 0.25), s);
    m.compose(new THREE.Vector3(x, groundAt(x, z), z), q, sc); trunks.setMatrixAt(k, m); crowns.setMatrixAt(k, m);
    c.setHSL(0.24 + R() * 0.07, 0.42 + R() * 0.15, 0.3 + R() * 0.1); crowns.setColorAt(k, c);
    addAABB(x - 0.3 * s, x + 0.3 * s, z - 0.3 * s, z + 0.3 * s, 6);
  });
  trunks.castShadow = crowns.castShadow = true; crowns.receiveShadow = true; scene.add(trunks, crowns);
}
function instProps(list, geo, mat, collide) {
  if (!list.length) return null;
  const im = new THREE.InstancedMesh(geo, mat, list.length), m = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  list.forEach(([x, z, r, y = 0], k) => { q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, groundAt(x, z) + y, z), q, one); im.setMatrixAt(k, m); if (collide) addAABB(x - collide, x + collide, z - collide, z + collide, 1); });
  im.castShadow = true; im.receiveShadow = true; scene.add(im); return im;
}
{
  const wood = 0x8a5a36, metal = 0x2f3237, red = 0xc0262d;
  const benchG = mergeGeometries([colorize(new THREE.BoxGeometry(1.8, 0.07, 0.45).translate(0, 0.45, 0), wood), colorize(new THREE.BoxGeometry(1.8, 0.4, 0.06).translate(0, 0.75, -0.22), wood), colorize(new THREE.BoxGeometry(0.07, 0.45, 0.45).translate(-0.8, 0.22, 0), metal), colorize(new THREE.BoxGeometry(0.07, 0.45, 0.45).translate(0.8, 0.22, 0), metal)]);
  instProps(props.bench, benchG, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), 0.6);
  instProps(props.bin, new THREE.CylinderGeometry(0.28, 0.24, 0.9, 12).translate(0, 0.45, 0), new THREE.MeshStandardMaterial({ color: 0x2c4a3a, roughness: 0.6, metalness: 0.4 }), 0.3);
  const hyd = mergeGeometries([colorize(new THREE.CylinderGeometry(0.14, 0.17, 0.6, 10).translate(0, 0.3, 0), red), colorize(new THREE.SphereGeometry(0.15, 10, 6).translate(0, 0.62, 0), red), colorize(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 6).rotateZ(Math.PI / 2).translate(0, 0.4, 0), red)]);
  instProps(props.hydrant, hyd, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }), 0.2);
  const cont = instProps(props.container, new THREE.BoxGeometry(6.1, 2.6, 2.5).translate(0, 1.3, 0), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.4, map: facade('metal', 'c') }), 0);
  if (cont) { const c = new THREE.Color(); props.container.forEach((_, k) => { c.set(pick(['#b5482f', '#2f6db5', '#2f9e5a', '#d9a326', '#8a8f96', '#7a3fa0'], R)); cont.setColorAt(k, c); }); }
}

/* ---------- street lights (with night light pools) + traffic lights ---------- */
export const TL = [];
let tlLamps = null, lampHeads = null, lightPools = null;
{
  const lampPts = [];
  for (const b of blocksInfo) { const o = BLOCK / 2 - 0.7; lampPts.push([b.cx - o, b.cz + 5, -Math.PI / 2], [b.cx + o, b.cz - 5, Math.PI / 2], [b.cx + 5, b.cz - o, Math.PI], [b.cx - 5, b.cz + o, 0]); }
  const poleG = mergeGeometries([new THREE.CylinderGeometry(0.08, 0.13, 7, 8).translate(0, 3.5, 0), new THREE.BoxGeometry(0.08, 0.08, 1.6).translate(0, 6.9, 0.75)]);
  const headG = new THREE.BoxGeometry(0.35, 0.14, 0.7).translate(0, 6.85, 1.45);
  const poles = new THREE.InstancedMesh(poleG, new THREE.MeshStandardMaterial({ color: 0x3a3d42, metalness: 0.6, roughness: 0.45 }), lampPts.length);
  lampHeads = new THREE.InstancedMesh(headG, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2c8, emissiveIntensity: 0.3 }), lampPts.length);
  lightPools = new THREE.InstancedMesh(new THREE.PlaneGeometry(9, 9).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffd9a0, map: radialTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }), lampPts.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  lampPts.forEach(([x, z, r], k) => {
    q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, CURB, z), q, one); poles.setMatrixAt(k, m); lampHeads.setMatrixAt(k, m);
    const fx = Math.sin(r), fz = Math.cos(r); m.makeTranslation(x + fx * 1.6, 0.05, z + fz * 1.6); lightPools.setMatrixAt(k, m);
    addAABB(x - 0.15, x + 0.15, z - 0.15, z + 0.15, 7);
  });
  poles.castShadow = true; lightPools.renderOrder = 2; scene.add(poles, lampHeads, lightPools);
  const tlPole = mergeGeometries([new THREE.CylinderGeometry(0.09, 0.12, 5.4, 8).translate(0, 2.7, 0), new THREE.CylinderGeometry(0.06, 0.06, 3.6, 6).rotateX(Math.PI / 2).translate(0, 5.3, 1.8)]);
  const tlBox = new THREE.BoxGeometry(0.42, 1.2, 0.32).translate(0, 4.75, 3.3);
  const tlLamp = new THREE.SphereGeometry(0.15, 10, 8).translate(0.22, 4.75, 3.3);
  const cnt = (N + 1) * (N + 1) * 2;
  const tp = new THREE.InstancedMesh(tlPole, new THREE.MeshStandardMaterial({ color: 0x2b2e33, metalness: 0.5, roughness: 0.5 }), cnt);
  const tb = new THREE.InstancedMesh(tlBox, new THREE.MeshStandardMaterial({ color: 0x1b1d20, roughness: 0.6 }), cnt);
  tlLamps = new THREE.InstancedMesh(tlLamp, new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false }), cnt);
  let k = 0; const c = new THREE.Color(0x30ff60);
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    const o = ROADW / 2 + 0.6;
    const cfg = [[road(i) - o, road(j) - o, Math.PI / 2, 1], [road(i) + o, road(j) + o, -Math.PI / 2, 1], [road(i) + o, road(j) - o, 0, 0], [road(i) - o, road(j) + o, Math.PI, 0]];
    for (const [x, z, r, axis] of cfg.filter((_, n) => n % 2 === ((i + j) % 2))) {
      q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, CURB, z), q, one);
      tp.setMatrixAt(k, m); tb.setMatrixAt(k, m); tlLamps.setMatrixAt(k, m); tlLamps.setColorAt(k, c);
      TL.push({ i, j, axis, k }); addAABB(x - 0.15, x + 0.15, z - 0.15, z + 0.15, 6); k++;
    }
  }
  tp.count = tb.count = tlLamps.count = k; tp.castShadow = tb.castShadow = true; scene.add(tp, tb, tlLamps);
}
const tlOff = (i, j) => ((i * 3 + j * 5) % 7) * 1.7;
export function greenAxis(i, j, t) { return Math.floor((t + tlOff(i, j)) / 10) % 2; }
export function isYellow(i, j, t) { return (t + tlOff(i, j)) % 10 > 8.4; }
let lastTL = -1;
const C_G = new THREE.Color(0x2bff6a), C_R = new THREE.Color(0xff3030), C_Y = new THREE.Color(0xffc000);
export function updateTrafficLights(t) {
  const step = Math.floor(t * 2); if (step === lastTL) return; lastTL = step;
  for (const L of TL) tlLamps.setColorAt(L.k, greenAxis(L.i, L.j, t) === L.axis ? (isYellow(L.i, L.j, t) ? C_Y : C_G) : C_R);
  tlLamps.instanceColor.needsUpdate = true;
}

/* ============================== SIGNS & MARKERS ============================== */
export function makeSign(text, opts = {}) {
  const { w = 6, h = 1.4, bg = '#111', fg = '#ff2fa0', font = '900 italic', neon = true, sub = null } = opts;
  const tex = canvasTex(512, Math.round(512 * h / w), (g, W, H) => {
    g.fillStyle = bg; g.fillRect(0, 0, W, H);
    g.strokeStyle = fg; g.lineWidth = 6; g.strokeRect(8, 8, W - 16, H - 16);
    g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
    if (neon) { g.shadowColor = fg; g.shadowBlur = 18; }
    let fs = H * (sub ? 0.5 : 0.62); g.font = `${font} ${fs}px sans-serif`;
    while (g.measureText(text).width > W - 40 && fs > 10) { fs -= 2; g.font = `${font} ${fs}px sans-serif`; }
    g.fillText(text, W / 2, sub ? H * 0.4 : H / 2 + 2);
    if (sub) { g.font = `700 ${H * 0.22}px sans-serif`; g.fillText(sub, W / 2, H * 0.78); }
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, toneMapped: !neon, side: THREE.DoubleSide }));
  return m;
}
export function makeBeam(color, r = 2.6) {
  const g = new THREE.Group();
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 40, 32, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false }));
  beam.position.y = 20; g.add(beam);
  const ring = new THREE.Mesh(new THREE.RingGeometry(r * 0.85, r * 1.05, 40), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.9, toneMapped: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.25; g.add(ring);
  g.userData.ring = ring; g.userData.beam = beam; scene.add(g); return g;
}
export function setBeamColor(b, c) { b.userData.beam.material.color.setHex(c); b.userData.ring.material.color.setHex(c); }

/* ============================== LANDMARKS / LOCATIONS ============================== */
// sidewalk point in front of block (i,j) on a side: 0:-z 1:+z 2:-x 3:+x
export function sideSpot(i, j, side, along = 0, inset = 2.4) {
  const [cx, cz] = blockCenter(i, j), o = BLOCK / 2 - inset;
  const P = [[cx + along, cz - o, Math.PI], [cx + along, cz + o, 0], [cx - o, cz + along, -Math.PI / 2], [cx + o, cz + along, Math.PI / 2]][side];
  return { x: P[0], z: P[1], yaw: P[2], i, j, side };
}
// curb parking lane next to block side (cars face along traffic)
export function curbSpot(i, j, side, along = 0) {
  const [cx, cz] = blockCenter(i, j), o = BLOCK / 2 + 1.1;
  if (side === 0) return { x: cx + along, z: cz - o, yaw: Math.PI / 2 };
  if (side === 1) return { x: cx + along, z: cz + o, yaw: -Math.PI / 2 };
  if (side === 2) return { x: cx - o, z: cz + along, yaw: Math.PI };
  return { x: cx + o, z: cz + along, yaw: 0 };
}
function signAt(spot, text, opts, height = 4.4) {
  const s = makeSign(text, opts); const fx = Math.sin(spot.yaw), fz = Math.cos(spot.yaw);
  s.position.set(spot.x - fx * 0.8, height, spot.z - fz * 0.8); s.rotation.y = spot.yaw; scene.add(s); return s;
}
export const LOC = {
  safehouse: sideSpot(4, 4, 2, -11, 1.8),
  garage: curbSpot(4, 4, 2, -2),
  stores: [sideSpot(2, 2, 1), sideSpot(5, 3, 0), sideSpot(1, 5, 3), sideSpot(6, 6, 2, 4), sideSpot(3, 6, 1, -6), sideSpot(6, 1, 2)],
  spray: [curbSpot(2, 4, 3, 6), curbSpot(6, 2, 1, -4)],
  police: sideSpot(3, 1, 1, 4),
  hospital: sideSpot(5, 5, 0, 0),
  club: sideSpot(4, 3, 1, 0),
  vinny: sideSpot(1, 6, 0, -8),
  lucia: sideSpot(6, 5, 3, 0),
  chop: curbSpot(7, 7, 0, 0),
  props: {
    taco: sideSpot(3, 4, 0, 10),
    carwash: curbSpot(5, 1, 2, 0),
    club: sideSpot(4, 3, 1, 6),
    chop: sideSpot(7, 7, 0, 6),
    penthouse: sideSpot(6, 1, 1, 0),
  },
  rareSpots: [curbSpot(4, 3, 1, -8), curbSpot(2, 1, 0, 5), curbSpot(7, 3, 2, -6), curbSpot(0, 6, 1, 4), curbSpot(5, 7, 3, 0)],
  strangerSpots: [sideSpot(2, 3, 0, 5), sideSpot(5, 6, 1, -5), sideSpot(1, 1, 3, 0), sideSpot(6, 4, 2, 7), sideSpot(3, 7, 0, 3)],
  gangSpots: { 3: [sideSpot(0, 5, 1, 3), sideSpot(2, 6, 3, -4), sideSpot(1, 7, 0, 6)], 4: [sideSpot(5, 6, 0, 8), sideSpot(7, 5, 2, -2), sideSpot(6, 7, 1, 0)] },
};
signAt(LOC.safehouse, 'HOME', { fg: '#7af0ff', w: 3, h: 1 }, 3.2);
LOC.stores.forEach((s, k) => signAt(s, ['24/7', 'LIQUOR', 'GAS & GO', 'MINI MART', 'QUIK-E', '24/7'][k], { fg: ['#38e07b', '#ffbe0b', '#ff4f4f', '#7af0ff', '#ff9fd0', '#38e07b'][k], w: 4.5, h: 1.2 }));
LOC.spray.forEach((s) => { const sg = makeSign('PAINT & BODY', { fg: '#ffd60a', w: 6, h: 1.4, sub: 'lose the cops • $100' }); sg.position.set(s.x, 6.2, s.z); sg.rotation.y = s.yaw + Math.PI; scene.add(sg); });
signAt(LOC.police, 'POLICE', { fg: '#4da3ff', w: 5, h: 1.3 });
signAt(LOC.hospital, 'HOSPITAL', { fg: '#ff4f4f', bg: '#fff', w: 5, h: 1.3, neon: false });
signAt(LOC.club, 'NEON', { fg: '#ff2fa0', w: 6, h: 2, sub: 'NIGHTCLUB' }, 5.2);
signAt(LOC.lucia, "LUCIA'S GARAGE", { fg: '#38e07b', w: 6, h: 1.4 });
{ const s = makeSign('CHOP SHOP', { fg: '#ff7b00', w: 6, h: 1.4, sub: 'no questions asked' }); s.position.set(LOC.chop.x, 5.5, LOC.chop.z - 3.6); scene.add(s); }

/* ---------- stunt ramps (on the road center line, between lanes) ---------- */
export const ramps = [];
{
  const rampG = (() => {
    const s = new THREE.Shape(); s.moveTo(-3, 0); s.lineTo(3, 0); s.lineTo(3, 1.5); s.lineTo(-3, 0);
    const g = new THREE.ExtrudeGeometry(s, { depth: 2.6, bevelEnabled: false }); g.translate(0, 0, -1.3); g.rotateY(-Math.PI / 2); g.computeVertexNormals(); return g;
  })();
  const stripeTex = canvasTex(128, 128, (g) => { g.fillStyle = '#ffd60a'; g.fillRect(0, 0, 128, 128); g.fillStyle = '#111'; for (let k = -128; k < 256; k += 32) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k + 16, 0); g.lineTo(k + 16 + 128, 128); g.lineTo(k + 128, 128); g.fill(); } }, true);
  stripeTex.repeat.set(1.5, 3);
  const rm = new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.6 });
  const defs = [[2, 1, 1, 1], [5, 2, 0, -1], [4, 6, 1, -1], [1, 4, 0, 1], [7, 3, 1, 1], [3, 0, 0, 1], [6, 7, 0, -1], [0, 2, 1, -1], [8, 5, 1, 1], [4, 1, 0, 1]];
  for (const [i, j, axis, dir] of defs) {
    // axis 1: road along z at x=road(i), between j and j+1. axis 0: road along x at z=road(i), between j and j+1
    const mid = road(j) + CELL / 2;
    const x = axis === 1 ? road(i) : mid, z = axis === 1 ? mid : road(i);
    const yaw = axis === 1 ? (dir > 0 ? 0 : Math.PI) : (dir > 0 ? Math.PI / 2 : -Math.PI / 2);
    const m = new THREE.Mesh(rampG, rm); m.position.set(x, 0, z); m.rotation.y = yaw; m.castShadow = true; m.receiveShadow = true; scene.add(m);
    ramps.push({ x, z, yaw, len: 6, w: 2.6, h: 1.5, id: ramps.length });
  }
  // two mega ramps in the outskirts
  for (const [x, z, yaw] of [[-LIMIT + 12, -120, 0], [LIMIT - 12, 140, Math.PI]]) {
    const m = new THREE.Mesh(rampG, rm); m.position.set(x, 0, z); m.rotation.y = yaw; m.scale.set(1.6, 2.2, 2); scene.add(m);
    ramps.push({ x, z, yaw, len: 12, w: 4.2, h: 3.3, id: ramps.length, mega: true });
  }
}

/* ============================== SKY: CLOUDS, STARS, RAIN ============================== */
const cloudTex = canvasTex(512, 512, (g) => {
  const r = mulberry(31); g.clearRect(0, 0, 512, 512);
  for (let k = 0; k < 70; k++) {
    const x = r() * 512, y = r() * 512, rad = 20 + r() * 60;
    for (const [ox, oy] of [[0, 0], [512, 0], [-512, 0], [0, 512], [0, -512]]) {
      const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, rad); gr.addColorStop(0, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(x + ox - rad, y + oy - rad, rad * 2, rad * 2);
    }
  }
}, true, true);
cloudTex.repeat.set(5, 5);
const cloudAlpha = canvasTex(256, 256, (g) => { const gr = g.createRadialGradient(128, 128, 30, 128, 128, 128); gr.addColorStop(0, '#fff'); gr.addColorStop(1, '#000'); g.fillStyle = gr; g.fillRect(0, 0, 256, 256); }, false, false);
const clouds = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ map: cloudTex, alphaMap: cloudAlpha, transparent: true, depthWrite: false, fog: false, color: 0xffffff, side: THREE.DoubleSide }));
clouds.position.y = 320; clouds.renderOrder = -1; scene.add(clouds);
const stars = (() => {
  const n = 900, p = new Float32Array(n * 3), r = mulberry(8);
  for (let i = 0; i < n; i++) { const th = r() * Math.PI * 2, ph = Math.acos(r() * 0.95); p[i * 3] = Math.sin(ph) * Math.cos(th) * 2000; p[i * 3 + 1] = Math.cos(ph) * 2000; p[i * 3 + 2] = Math.sin(ph) * Math.sin(th) * 2000; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const m = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false })); scene.add(m); return m;
})();
const RAIN_N = 1400;
const rain = (() => {
  const p = new Float32Array(RAIN_N * 6); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  const m = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: 0xaab8cc, transparent: true, opacity: 0.0, fog: false })); m.frustumCulled = false; scene.add(m); return m;
})();
const rainState = new Float32Array(RAIN_N * 3);
for (let i = 0; i < RAIN_N; i++) { rainState[i * 3] = (R2() - 0.5) * 60; rainState[i * 3 + 1] = R2() * 30; rainState[i * 3 + 2] = (R2() - 0.5) * 60; }

/* ============================== DAY / NIGHT / WEATHER ============================== */
const FOG_DAY = new THREE.Color(0xcdbfb2), FOG_NIGHT = new THREE.Color(0x0d1222), FOG_DUSK = new THREE.Color(0xe0a07a), FOG_RAIN = new THREE.Color(0x7d8794);
const SUN_DAY = new THREE.Color(0xffeccc), SUN_DUSK = new THREE.Color(0xffa060), MOON = new THREE.Color(0x8aa6ff);
const tmpCol = new THREE.Color();
export const sunDir = new THREE.Vector3();
let rainTarget = 0, rainTimer = 60, flash = 0;
export function setRain(v) { rainTarget = v; }
export function updateEnvironment(dt, focus) {
  // time
  S.gameMin = (S.gameMin + dt * 1.5) % 1440;
  const tday = S.gameMin / 1440; // 0..1
  const ang = tday * Math.PI * 2 - Math.PI / 2; // sunrise at 6:00
  const elev = Math.sin(ang); // -1..1
  const sunE = elev * 1.15;
  sunDir.set(Math.cos(ang) * 0.75, sunE, -0.55).normalize();
  const day = clamp((elev + 0.08) / 0.3, 0, 1), dusk = clamp(1 - Math.abs(elev - 0.06) / 0.22, 0, 1);
  S.night = 1 - day; S.dusk = dusk;
  // weather
  rainTimer -= dt; if (rainTimer <= 0) { rainTimer = 90 + R2() * 150; rainTarget = R2() < 0.28 ? 0.6 + R2() * 0.4 : 0; }
  S.rain = lerp(S.rain, rainTarget, Math.min(1, dt * 0.08));
  const rn = S.rain;
  su.sunPosition.value.copy(sunDir);
  su.turbidity.value = 4 + rn * 12; su.rayleigh.value = 1.6 + dusk * 1.2 - rn * 1.2; su.mieCoefficient.value = 0.005 + rn * 0.02;
  // lights
  const moonUp = 1 - day;
  if (day > 0.02) {
    sun.color.copy(SUN_DAY).lerp(SUN_DUSK, dusk); sun.intensity = (3.4 * day) * (1 - rn * 0.65);
    sun.position.copy(sunDir).multiplyScalar(160);
  } else { sun.color.copy(MOON); sun.intensity = 0.55 * (1 - rn * 0.5); sun.position.set(-60, 120, 70); }
  hemi.intensity = 0.1 + 0.2 * day + flash * 3; hemi.color.setHex(day > 0.3 ? 0xdfeaff : 0x6070a0);
  scene.environmentIntensity = 0.08 + 0.36 * day * (1 - rn * 0.4);
  renderer.toneMappingExposure = 0.85 + moonUp * 0.25;
  tmpCol.copy(FOG_DAY).lerp(FOG_DUSK, dusk * 0.6).lerp(FOG_NIGHT, moonUp).lerp(FOG_RAIN, rn * (1 - moonUp * 0.7));
  scene.fog.color.copy(tmpCol); scene.fog.near = 120 - rn * 80; scene.fog.far = 620 - rn * 380 - moonUp * 120;
  // night materials
  const ni = clamp(moonUp * 1.3 - 0.15, 0, 1);
  for (const m of nightMats) m.emissiveIntensity = ni * (m === M.shop ? 0.9 : 1.15);
  lampHeads.material.emissiveIntensity = 0.3 + ni * 3; lightPools.material.opacity = ni * 0.55;
  stars.material.opacity = clamp(moonUp - rn, 0, 1) * 0.9;
  clouds.material.opacity = 0.55 + rn * 0.45; clouds.material.color.setRGB(lerp(1, 0.18, moonUp) * (1 - rn * 0.45), lerp(1, 0.2, moonUp) * (1 - rn * 0.42), lerp(1, 0.28, moonUp) * (1 - rn * 0.38));
  cloudTex.offset.x += dt * 0.0016; clouds.position.x = focus.x; clouds.position.z = focus.z;
  // wet roads
  roadMat.roughness = 0.92 - rn * 0.62; roadMat.color.setScalar(1 - rn * 0.35); M.side.roughness = 0.92 - rn * 0.5;
  // rain particles
  rain.material.opacity = rn * 0.55; rain.visible = rn > 0.02;
  if (rain.visible) {
    const p = rain.geometry.attributes.position.array, sp = 26 * dt;
    for (let i = 0; i < RAIN_N; i++) {
      let y = rainState[i * 3 + 1] - sp; if (y < 0) { y += 30; rainState[i * 3] = (R2() - 0.5) * 60; rainState[i * 3 + 2] = (R2() - 0.5) * 60; }
      rainState[i * 3 + 1] = y;
      const x = focus.x + rainState[i * 3], z = focus.z + rainState[i * 3 + 2];
      p[i * 6] = x; p[i * 6 + 1] = y; p[i * 6 + 2] = z; p[i * 6 + 3] = x + 0.08; p[i * 6 + 4] = y + 0.9; p[i * 6 + 5] = z;
    }
    rain.geometry.attributes.position.needsUpdate = true;
    if (rn > 0.7 && R2() < dt * 0.05) flash = 1;
  }
  flash = Math.max(0, flash - dt * 3);
  // shadow camera follows focus
  const tx = Math.round(focus.x / 2) * 2, tz = Math.round(focus.z / 2) * 2;
  sun.target.position.set(tx, 0, tz); sun.position.x += tx; sun.position.z += tz;
  return flash > 0.95;
}
export function clockText() { const h = Math.floor(S.gameMin / 60), m = Math.floor(S.gameMin % 60); return (h % 12 || 12) + ':' + String(m).padStart(2, '0') + (h < 12 ? ' AM' : ' PM'); }

/* ============================== PED NAV GRAPH ============================== */
const PO = BLOCK / 2 - 2.2;
export const pedNodes = [];
{
  const nodeIdx = new Map();
  for (const b of blocksInfo) for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { nodeIdx.set(b.i + ',' + b.j + ',' + sx + ',' + sz, pedNodes.length); pedNodes.push({ x: b.cx + sx * PO, z: b.cz + sz * PO, nb: [], dist: b.dist }); }
  for (const b of blocksInfo) {
    const g = (i, j, sx, sz) => nodeIdx.get(i + ',' + j + ',' + sx + ',' + sz);
    const c = [g(b.i, b.j, -1, -1), g(b.i, b.j, 1, -1), g(b.i, b.j, 1, 1), g(b.i, b.j, -1, 1)];
    for (let k = 0; k < 4; k++) { pedNodes[c[k]].nb.push(c[(k + 1) % 4]); pedNodes[c[(k + 1) % 4]].nb.push(c[k]); }
    if (b.i < N - 1) for (const sz of [-1, 1]) { const a = g(b.i, b.j, 1, sz), d = g(b.i + 1, b.j, -1, sz); pedNodes[a].nb.push(d); pedNodes[d].nb.push(a); }
    if (b.j < N - 1) for (const sx of [-1, 1]) { const a = g(b.i, b.j, sx, 1), d = g(b.i, b.j + 1, sx, -1); pedNodes[a].nb.push(d); pedNodes[d].nb.push(a); }
  }
}
export function nearestPedNode(x, z) { let best = 0, bd = 1e9; for (let i = 0; i < pedNodes.length; i++) { const n = pedNodes[i], d = (n.x - x) ** 2 + (n.z - z) ** 2; if (d < bd) { bd = d; best = i; } } return best; }

/* ============================== HIDDEN STASHES ============================== */
export const COIN_N = 40;
export const coinMeshes = [];
{
  const coinG = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 28); coinG.rotateX(Math.PI / 2);
  const coinMat = new THREE.MeshStandardMaterial({ color: 0xffc928, metalness: 1, roughness: 0.22, emissive: 0x4a3000 });
  const cr = mulberry(4242);
  for (let k = 0; k < COIN_N; k++) {
    let x, z; const r = cr(); const b = blocksInfo[cr() * blocksInfo.length | 0];
    if (r < 0.55) { const s = cr() * 4 | 0, along = (cr() - 0.5) * (BLOCK - 6), off = BLOCK / 2 - 2.2; [x, z] = s === 0 ? [b.cx + along, b.cz - off] : s === 1 ? [b.cx + along, b.cz + off] : s === 2 ? [b.cx - off, b.cz + along] : [b.cx + off, b.cz + along]; }
    else if (r < 0.85) { const i = cr() * (N + 1) | 0, t = (cr() - 0.5) * N * CELL; if (cr() < 0.5) [x, z] = [road(i) + (cr() < 0.5 ? -3 : 3), t]; else [x, z] = [t, road(i) + (cr() < 0.5 ? -3 : 3)]; }
    else { const p = parks.length ? parks[cr() * parks.length | 0] : b; x = p.cx + (cr() - 0.5) * 24; z = p.cz + 8 * (cr() < 0.5 ? -1 : 1); }
    const p = new THREE.Vector3(x, 0, z); resolveCircle(p, 0.8);
    const m = new THREE.Mesh(coinG, coinMat); m.position.set(p.x, groundAt(p.x, p.z) + 1.1, p.z); m.castShadow = true; scene.add(m); coinMeshes.push(m);
  }
}
