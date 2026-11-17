import * as THREE from 'three';
import { Sky } from '../lib/addons/Sky.js';
import { mergeGeometries } from '../lib/addons/BufferGeometryUtils.js';

const VERSION = '3.0.0';
const SAVE_KEY = 'streetrush_city_v1';
const $ = (id) => document.getElementById(id);

/* ============================== SAVE ============================== */
const DEFAULT_SAVE = { cash: 0, coins: [], owned: ['sedan'], deliveries: 0, races: 0, bestRace: 0, muted: false, tut: false, pos: null, car: 'sedan', quality: 'auto' };
function loadSave() {
  const d = JSON.parse(JSON.stringify(DEFAULT_SAVE));
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (s && typeof s === 'object') Object.assign(d, s);
    if (!Array.isArray(d.coins)) d.coins = [];
    if (!Array.isArray(d.owned) || !d.owned.length) d.owned = ['sedan'];
    if (!['auto', 'high', 'medium', 'low'].includes(d.quality)) d.quality = 'auto';
  } catch (e) {}
  return d;
}
const save = loadSave();
let P = null;
function persist() {
  try {
    if (P && P.pos) { const p = P.car ? P.car.pos : P.pos; save.pos = { x: +p.x.toFixed(1), z: +p.z.toFixed(1) }; }
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch (e) {}
}

/* ============================== HELPERS ============================== */
function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const R = mulberry(20261116);
const R2 = Math.random;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
function angLerp(a, b, t) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * t; }
const pick = (arr, r = R2) => arr[r() * arr.length | 0];

/* ============================== LAYOUT ============================== */
const BLOCK = 40, ROADW = 12, CELL = BLOCK + ROADW, N = 8, HALF = N * CELL / 2;
const LIMIT = HALF + 34;
const road = (i) => -HALF + i * CELL;
const nodeV = (i, j) => new THREE.Vector3(road(i), 0, road(j));
const CURB = 0.18;
function groundAt(x, z) {
  const u = x + HALF, w = z + HALF;
  const i = Math.floor(u / CELL), j = Math.floor(w / CELL);
  if (i < 0 || j < 0 || i >= N || j >= N) return 0;
  const ou = u - i * CELL, ow = w - j * CELL;
  return (ou > ROADW / 2 && ou < CELL - ROADW / 2 && ow > ROADW / 2 && ow < CELL - ROADW / 2) ? CURB : 0;
}

/* ============================== RENDERER ============================== */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.domElement.id = 'c';
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.82;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const FOGC = 0xc4d3e2;
scene.fog = new THREE.Fog(FOGC, 90, 360);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);

const sunDir = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 38), THREE.MathUtils.degToRad(215));
const sky = new Sky(); sky.scale.setScalar(4500);
const su = sky.material.uniforms;
su.turbidity.value = 3.5; su.rayleigh.value = 1.4; su.mieCoefficient.value = 0.004; su.mieDirectionalG.value = 0.82; su.sunPosition.value.copy(sunDir);
scene.add(sky);
{
  const pm = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene(); const sky2 = new Sky(); sky2.scale.setScalar(1000);
  for (const k of Object.keys(su)) if (sky2.material.uniforms[k]) sky2.material.uniforms[k].value = su[k].value;
  envScene.add(sky2);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(900, 16), new THREE.MeshBasicMaterial({ color: 0x5a5a58 })); ground.rotation.x = -Math.PI / 2; ground.position.y = -5; envScene.add(ground);
  scene.environment = pm.fromScene(envScene, 0.02).texture;
  scene.environmentIntensity = 0.42;
}
scene.add(new THREE.HemisphereLight(0xdfeaff, 0x6b5b4b, 0.25));
const sun = new THREE.DirectionalLight(0xffeccc, 3.4);
sun.castShadow = true;
const SHADOW_R = 55;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -SHADOW_R, right: SHADOW_R, top: SHADOW_R, bottom: -SHADOW_R, near: 1, far: 320 });
sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
scene.add(sun); scene.add(sun.target);
const SUN_OFF = sunDir.clone().multiplyScalar(150);

/* ============================== TEXTURES ============================== */
const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = maxAniso; return t;
}
function noiseFill(g, w, h, base, amt, n, r, size = 2) {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for (let i = 0; i < n; i++) { const v = (r() - 0.5) * amt; g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`; g.fillRect(r() * w, r() * h, size, size); }
}
function drawWindow(g, x, y, w, h, r, frame, lit) {
  g.fillStyle = frame; g.fillRect(x - 3, y - 3, w + 6, h + 6);
  const gr = g.createLinearGradient(x, y, x + w * 0.6, y + h);
  if (lit) { gr.addColorStop(0, '#ffe7b0'); gr.addColorStop(1, '#f2c27a'); }
  else { gr.addColorStop(0, '#9fb6cc'); gr.addColorStop(0.45, '#4f6378'); gr.addColorStop(1, '#2c3a4a'); }
  g.fillStyle = gr; g.fillRect(x, y, w, h);
  if (!lit && r() < 0.35) { g.fillStyle = 'rgba(230,225,210,0.75)'; g.fillRect(x, y, w, h * (0.25 + r() * 0.4)); }
  g.fillStyle = frame; g.fillRect(x + w / 2 - 1.5, y, 3, h); g.fillRect(x, y + h * 0.42, w, 3);
  g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x, y, w, 2);
}
const brickTex = canvasTex(512, 512, (g) => {
  const r = mulberry(11);
  g.fillStyle = '#a4a4a4'; g.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 512; y += 6) for (let x = (y / 6 % 2) * 6; x < 512; x += 12) {
    const v = 200 + (r() - 0.5) * 50 | 0; g.fillStyle = `rgb(${v},${v * 0.98 | 0},${v * 0.96 | 0})`; g.fillRect(x, y, 11, 5);
  }
  for (let cy = 0; cy < 8; cy++) for (let cx = 0; cx < 8; cx++) {
    const x = cx * 64 + 16, y = cy * 64 + 12;
    drawWindow(g, x, y, 32, 38, r, '#ece6da', r() < 0.12);
    g.fillStyle = '#d8d2c4'; g.fillRect(x - 5, y + 41, 42, 5);
  }
}, true);
const plasterTex = canvasTex(512, 512, (g) => {
  const r = mulberry(12);
  noiseFill(g, 512, 512, '#e9e6e0', 0.08, 5000, r);
  for (let cy = 0; cy < 8; cy++) { g.fillStyle = 'rgba(0,0,0,0.07)'; g.fillRect(0, cy * 64 + 60, 512, 4); }
  for (let cy = 0; cy < 8; cy++) for (let cx = 0; cx < 8; cx++) {
    const x = cx * 64 + 10, y = cy * 64 + 14;
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x - 2, y - 2, 48, 40);
    drawWindow(g, x, y, 44, 36, r, '#5a5f66', r() < 0.12);
  }
}, true);
const glassTex = canvasTex(512, 512, (g) => {
  const r = mulberry(13);
  const gr = g.createLinearGradient(0, 0, 512, 512); gr.addColorStop(0, '#c7d9e8'); gr.addColorStop(0.5, '#8aa7c0'); gr.addColorStop(1, '#b8cde0');
  g.fillStyle = gr; g.fillRect(0, 0, 512, 512);
  for (let cy = 0; cy < 8; cy++) for (let cx = 0; cx < 16; cx++) {
    const v = (r() - 0.5) * 0.18; g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,20,40,${-v})`; g.fillRect(cx * 32, cy * 64, 32, 64);
    if (r() < 0.06) { g.fillStyle = 'rgba(255,230,170,0.35)'; g.fillRect(cx * 32 + 2, cy * 64 + 4, 28, 54); }
  }
  g.fillStyle = '#3d4650';
  for (let x = 0; x <= 512; x += 32) g.fillRect(x - 1.5, 0, 3, 512);
  for (let y = 0; y <= 512; y += 64) g.fillRect(0, y - 3, 512, 6);
}, true);
const shopTex = canvasTex(512, 128, (g) => {
  const r = mulberry(14);
  g.fillStyle = '#3a3836'; g.fillRect(0, 0, 512, 128);
  const signs = ['#c0392b', '#1f6f8b', '#2d6a4f', '#8e44ad', '#d35400', '#34495e', '#b7950b'];
  for (let s = 0; s < 4; s++) {
    const x = s * 128;
    g.fillStyle = pick(signs, r); g.fillRect(x + 4, 6, 120, 22);
    g.fillStyle = 'rgba(255,255,255,0.85)'; for (let k = 0; k < 6; k++) g.fillRect(x + 14 + k * 17, 13, 11, 8);
    const gr = g.createLinearGradient(x, 34, x, 124); gr.addColorStop(0, '#a9c1d4'); gr.addColorStop(1, '#3f4c58');
    g.fillStyle = gr; g.fillRect(x + 8, 34, 70, 88);
    g.fillStyle = 'rgba(255,240,200,0.35)'; g.fillRect(x + 12, 70, 62, 50);
    g.fillStyle = '#222'; g.fillRect(x + 84, 38, 36, 86);
    g.fillStyle = '#7c95a8'; g.fillRect(x + 88, 42, 28, 50);
    g.fillStyle = '#555'; g.fillRect(x + 8, 76, 70, 3); g.fillRect(x + 42, 34, 3, 88);
  }
}, true);
const roadTex = canvasTex(256, 1024, (g) => {
  const r = mulberry(5);
  noiseFill(g, 256, 1024, '#3f4045', 0.14, 22000, r, 2);
  g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(52, 0, 30, 1024); g.fillRect(174, 0, 30, 1024);
  for (let i = 0; i < 18; i++) { g.strokeStyle = 'rgba(20,20,22,0.5)'; g.lineWidth = 1.2; g.beginPath(); let x = r() * 256, y = r() * 1024; g.moveTo(x, y); for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 30; y += r() * 25; g.lineTo(x, y); } g.stroke(); }
  g.fillStyle = '#e6b531'; g.fillRect(122, 0, 5, 1024); g.fillRect(131, 0, 5, 1024);
  g.fillStyle = '#e8e8e8'; g.fillRect(8, 0, 5, 1024); g.fillRect(243, 0, 5, 1024);
}, true);
const sideTex = canvasTex(256, 256, (g) => {
  const r = mulberry(6);
  noiseFill(g, 256, 256, '#b4aea5', 0.1, 6000, r);
  g.fillStyle = 'rgba(80,70,60,0.35)'; for (let k = 0; k <= 256; k += 64) { g.fillRect(k - 1, 0, 2, 256); g.fillRect(0, k - 1, 256, 2); }
}, true);
const grassTex = canvasTex(256, 256, (g) => noiseFill(g, 256, 256, '#5e8a3f', 0.22, 14000, mulberry(7), 2), true);

/* ============================== MATERIALS ============================== */
const M_brick = new THREE.MeshStandardMaterial({ map: brickTex, vertexColors: true, roughness: 0.88 });
const M_plaster = new THREE.MeshStandardMaterial({ map: plasterTex, vertexColors: true, roughness: 0.8 });
const M_glass = new THREE.MeshStandardMaterial({ map: glassTex, vertexColors: true, roughness: 0.08, metalness: 0.75 });
const M_shop = new THREE.MeshStandardMaterial({ map: shopTex, roughness: 0.55, metalness: 0.1 });
const M_cap = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 });
const M_side = new THREE.MeshStandardMaterial({ map: sideTex, vertexColors: true, roughness: 0.92 });
const M_grass = new THREE.MeshStandardMaterial({ map: grassTex, vertexColors: true, roughness: 1 });

/* ============================== BATCHING ============================== */
function newBatch() { return { pos: [], nor: [], uv: [], col: [] }; }
const tmpC = new THREE.Color();
function addBox(walls, caps, x, y, z, w, h, d, color, uvScale, vOff = 0) {
  const b = new THREE.BoxGeometry(w, h, d).toNonIndexed(); b.translate(x, y + h / 2, z);
  const p = b.attributes.position.array, n = b.attributes.normal.array, u = b.attributes.uv.array;
  tmpC.set(color);
  for (let f = 0; f < 6; f++) {
    const ny = n[f * 18 + 1];
    const tgt = (Math.abs(ny) > 0.5 || !walls) ? caps : walls;
    if (!tgt) continue;
    for (let k = 0; k < 6; k++) {
      const i = f * 6 + k;
      tgt.pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
      tgt.nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      let uu = u[i * 2], vv = u[i * 2 + 1];
      if (tgt === walls && uvScale) { const fw = Math.abs(n[i * 3]) > 0.5 ? d : w; uu *= fw / uvScale; vv = vv * h / uvScale + vOff; }
      tgt.uv.push(uu, vv);
      tgt.col.push(tmpC.r, tmpC.g, tmpC.b);
    }
  }
  b.dispose();
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
  g.setAttribute('position', new THREE.Float32BufferAttribute(bt.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(bt.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(bt.uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(bt.col, 3));
  g.computeBoundingSphere(); g.computeBoundingBox();
  const m = new THREE.Mesh(g, mat); m.castShadow = cast; m.receiveShadow = true; return m;
}
function colorize(g, hex) {
  g = g.index ? g.toNonIndexed() : g;
  const c = new THREE.Color(hex), a = new Float32Array(g.attributes.position.count * 3);
  for (let i = 0; i < a.length; i += 3) { a[i] = c.r; a[i + 1] = c.g; a[i + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) g.deleteAttribute(k);
  return g;
}

/* ============================== COLLISION ============================== */
const GS = 26, GRID = new Map();
function addAABB(minX, maxX, minZ, maxZ, h) {
  const b = { minX, maxX, minZ, maxZ, h };
  for (let gx = Math.floor(minX / GS); gx <= Math.floor(maxX / GS); gx++)
    for (let gz = Math.floor(minZ / GS); gz <= Math.floor(maxZ / GS); gz++) {
      const k = gx + ',' + gz; if (!GRID.has(k)) GRID.set(k, []); GRID.get(k).push(b);
    }
  return b;
}
const _near = [];
function nearby(x, z, r) {
  _near.length = 0;
  for (let gx = Math.floor((x - r) / GS); gx <= Math.floor((x + r) / GS); gx++)
    for (let gz = Math.floor((z - r) / GS); gz <= Math.floor((z + r) / GS); gz++) {
      const a = GRID.get(gx + ',' + gz); if (a) for (const b of a) _near.push(b);
    }
  return _near;
}
function resolveCircle(p, r, yb) {
  let hit = false;
  for (const b of nearby(p.x, p.z, r + 1)) {
    if (yb !== undefined && yb > b.h) continue;
    const cx = clamp(p.x, b.minX, b.maxX), cz = clamp(p.z, b.minZ, b.maxZ);
    const dx = p.x - cx, dz = p.z - cz, d2 = dx * dx + dz * dz;
    if (d2 < r * r) {
      if (d2 > 1e-6) { const d = Math.sqrt(d2); p.x += dx / d * (r - d); p.z += dz / d * (r - d); }
      else {
        const l = p.x - b.minX, rr = b.maxX - p.x, t = p.z - b.minZ, bb = b.maxZ - p.z, m = Math.min(l, rr, t, bb);
        if (m === l) p.x = b.minX - r; else if (m === rr) p.x = b.maxX + r; else if (m === t) p.z = b.minZ - r; else p.z = b.maxZ + r;
      }
      hit = true;
    }
  }
  if (Math.abs(p.x) > LIMIT) { p.x = Math.sign(p.x) * LIMIT; hit = true; }
  if (Math.abs(p.z) > LIMIT) { p.z = Math.sign(p.z) * LIMIT; hit = true; }
  return hit;
}

/* ============================== CITY ============================== */
const B_brick = newBatch(), B_plaster = newBatch(), B_glass = newBatch(), B_shop = newBatch(), B_caps = newBatch(), B_side = newBatch(), B_curb = newBatch(), B_grass = newBatch();
const parks = [], blocksInfo = [], treeSpots = [], props = { bench: [], bin: [], hydrant: [] };
const BRICK_T = ['#ffffff', '#e8d2c4', '#f2c9b0', '#d9b8a8', '#f0e0d0'];
const PLASTER_T = ['#ffffff', '#f3e3c8', '#e3ecf2', '#f1d8cf', '#e2e8d6', '#efe2f0', '#d8d2c8'];
const GLASS_T = ['#ffffff', '#cfe6ff', '#d8f2ec', '#e8e8f2', '#c8dcf0'];
const AWN = ['#9b2c2c', '#2d6a4f', '#264653', '#c76b3a', '#5b3f8c', '#1f4e79'];
{
  const gt = grassTex.clone(); gt.needsUpdate = true; gt.repeat.set(160, 160);
  const g = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), new THREE.MeshStandardMaterial({ map: gt, roughness: 1 }));
  g.rotation.x = -Math.PI / 2; g.position.y = -0.02; g.receiveShadow = true; scene.add(g);
}
{
  const LEN = N * CELL + ROADW;
  const rt = roadTex.clone(); rt.needsUpdate = true; rt.repeat.set(1, LEN / 48);
  const rm = new THREE.MeshStandardMaterial({ map: rt, roughness: 0.92 });
  for (let i = 0; i <= N; i++) {
    const a = new THREE.Mesh(new THREE.PlaneGeometry(ROADW, LEN), rm);
    a.rotation.x = -Math.PI / 2; a.position.set(road(i), 0.0, 0); a.receiveShadow = true; scene.add(a);
    const b = new THREE.Mesh(new THREE.PlaneGeometry(ROADW, LEN), rm);
    b.rotation.x = -Math.PI / 2; b.rotation.z = Math.PI / 2; b.position.set(0, 0.006, road(i)); b.receiveShadow = true; scene.add(b);
  }
  const it = canvasTex(64, 64, (g) => noiseFill(g, 64, 64, '#404146', 0.14, 900, mulberry(9), 2), true);
  const im = new THREE.MeshStandardMaterial({ map: it, roughness: 0.92 });
  const cw = new THREE.MeshStandardMaterial({ color: 0xe9e9e9, roughness: 0.7 });
  const inst = new THREE.InstancedMesh(new THREE.PlaneGeometry(ROADW, ROADW), im, (N + 1) * (N + 1)); let k = 0;
  const stripes = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.7, 3.2), cw, (N + 1) * (N + 1) * 4 * 6); let s = 0;
  const stopL = new THREE.InstancedMesh(new THREE.PlaneGeometry(ROADW / 2 - 0.4, 0.45), cw, (N + 1) * (N + 1) * 4); let sl = 0;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), one = new THREE.Vector3(1, 1, 1);
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    e.set(-Math.PI / 2, 0, 0); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(road(i), 0.012, road(j)), q, one); inst.setMatrixAt(k++, m4);
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
  inst.receiveShadow = stripes.receiveShadow = stopL.receiveShadow = true;
  scene.add(inst, stripes, stopL);
}
for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
  const x0 = road(i) + ROADW / 2, z0 = road(j) + ROADW / 2, cx = x0 + BLOCK / 2, cz = z0 + BLOCK / 2;
  addBox(B_curb, null, cx, 0, cz, BLOCK, CURB, BLOCK, '#a9a49c');
  addGeo(B_side, new THREE.PlaneGeometry(BLOCK, BLOCK).rotateX(-Math.PI / 2).translate(cx, CURB + 0.001, cz), '#ffffff', 3);
  const d = Math.max(Math.abs(cx), Math.abs(cz)) / HALF;
  const isPark = (R() < 0.13 && d > 0.2) || (i === 3 && j === 4);
  blocksInfo.push({ i, j, cx, cz, park: isPark });
  for (let s = 0; s < 4; s++) {
    for (let t = -1; t <= 1; t += 2) {
      const along = t * (6 + R() * 8), off = BLOCK / 2 - 0.9;
      const pts = [[cx + along, cz - off, 0], [cx + along, cz + off, Math.PI], [cx - off, cz + along, Math.PI / 2], [cx + off, cz + along, -Math.PI / 2]];
      const [px, pz, rot] = pts[s]; const r = R();
      if (r < 0.32) treeSpots.push([px, pz, 0.75 + R() * 0.35]);
      else if (r < 0.45) props.bench.push([px, pz, rot + Math.PI]);
      else if (r < 0.58) props.bin.push([px, pz, rot]);
      else if (r < 0.64) props.hydrant.push([px, pz, rot]);
    }
  }
  if (isPark) {
    parks.push({ cx, cz });
    addGeo(B_grass, new THREE.PlaneGeometry(BLOCK - 6, BLOCK - 6).rotateX(-Math.PI / 2).translate(cx, CURB + 0.01, cz), '#ffffff', 6);
    addGeo(B_side, new THREE.PlaneGeometry(3, BLOCK - 6).rotateX(-Math.PI / 2).translate(cx, CURB + 0.02, cz), '#e8dcc0', 3);
    addGeo(B_side, new THREE.PlaneGeometry(BLOCK - 6, 3).rotateX(-Math.PI / 2).translate(cx, CURB + 0.021, cz), '#e8dcc0', 3);
    addGeo(B_caps, new THREE.CylinderGeometry(3, 3.2, 0.7, 28).translate(cx, CURB + 0.35, cz), '#cfcbc4');
    addGeo(B_caps, new THREE.CylinderGeometry(2.6, 2.6, 0.05, 28).translate(cx, CURB + 0.66, cz), '#3f86b8');
    addGeo(B_caps, new THREE.CylinderGeometry(0.35, 0.5, 1.8, 12).translate(cx, CURB + 0.9, cz), '#cfcbc4');
    addAABB(cx - 3, cx + 3, cz - 3, cz + 3, 0.9);
    for (let t = 0; t < 14; t++) {
      const tx = cx + (R() - 0.5) * (BLOCK - 10), tz = cz + (R() - 0.5) * (BLOCK - 10);
      if (Math.abs(tx - cx) < 4.5 || Math.abs(tz - cz) < 4.5) continue;
      treeSpots.push([tx, tz, 0.9 + R() * 0.6]);
    }
    for (const [bx, bz, rot] of [[cx + 5, cz + 2.2, Math.PI], [cx - 5, cz - 2.2, 0], [cx + 2.2, cz - 5, Math.PI / 2], [cx - 2.2, cz + 5, -Math.PI / 2]]) props.bench.push([bx, bz, rot]);
    continue;
  }
  const H = 9 + 75 * Math.pow(1 - d, 1.7);
  const area = BLOCK - 6.5;
  const putBuilding = (lx, lz, w, dd, h) => {
    const st = h > 34 ? (R() < 0.75 ? 2 : 1) : (R() < 0.5 ? 0 : 1);
    const bt = st === 0 ? B_brick : st === 1 ? B_plaster : B_glass;
    const tint = st === 0 ? pick(BRICK_T, R) : st === 1 ? pick(PLASTER_T, R) : pick(GLASS_T, R);
    const base = st === 2 ? 0 : 4.2;
    if (st !== 2) addBox(B_shop, null, lx, CURB, lz, w + 0.08, 4.2, dd + 0.08, '#ffffff', 24);
    addBox(bt, B_caps, lx, CURB + base, lz, w, h - base, dd, tint, 24, 0);
    if (st === 2) addBox(B_caps, null, lx, CURB, lz, w + 0.4, 0.6, dd + 0.4, '#3d4248');
    const top = CURB + h, pc = st === 2 ? '#5d6670' : '#8a857c';
    addBox(null, B_caps, lx, top - 0.5, lz, w + 0.5, 0.35, dd + 0.5, pc);
    for (const [ox, oz, ww, d2] of [[0, dd / 2 - 0.15, w, 0.3], [0, -dd / 2 + 0.15, w, 0.3], [w / 2 - 0.15, 0, 0.3, dd], [-w / 2 + 0.15, 0, 0.3, dd]]) addBox(null, B_caps, lx + ox, top, lz + oz, ww, 0.9, d2, pc);
    addBox(null, B_caps, lx, top - 0.02, lz, w - 0.6, 0.06, dd - 0.6, '#77746e');
    if (R() < 0.7) addBox(null, B_caps, lx + (R() - 0.5) * w * 0.4, top, lz + (R() - 0.5) * dd * 0.4, 2.6, 1.5, 2, '#9a9ba0');
    if (R() < 0.35 && h < 40) {
      const tx = lx + (R() - 0.5) * w * 0.4, tz = lz + (R() - 0.5) * dd * 0.4;
      addGeo(B_caps, new THREE.CylinderGeometry(1.2, 1.2, 2.2, 14).translate(tx, top + 2.4, tz), '#8b5a3c');
      addGeo(B_caps, new THREE.ConeGeometry(1.35, 0.8, 14).translate(tx, top + 3.9, tz), '#5e3c28');
      for (const [a, b2] of [[-0.8, -0.8], [0.8, 0.8], [-0.8, 0.8], [0.8, -0.8]]) addBox(null, B_caps, tx + a, top, tz + b2, 0.15, 1.3, 0.15, '#444');
    }
    if (st === 2 && h > 50) { addBox(null, B_caps, lx, top, lz, w * 0.5, 4, dd * 0.5, '#4b535c'); addGeo(B_caps, new THREE.CylinderGeometry(0.08, 0.12, 9, 6).translate(lx, top + 8.5, lz), '#cccccc'); }
    if (st !== 2 && R() < 0.75) {
      const ac = pick(AWN, R), ah = CURB + 3.1;
      addBox(null, B_caps, lx, ah, lz + dd / 2 + 0.7, w * 0.8, 0.12, 1.4, ac); addBox(null, B_caps, lx, ah - 0.35, lz + dd / 2 + 1.38, w * 0.8, 0.35, 0.04, ac);
      addBox(null, B_caps, lx, ah, lz - dd / 2 - 0.7, w * 0.8, 0.12, 1.4, ac); addBox(null, B_caps, lx, ah - 0.35, lz - dd / 2 - 1.38, w * 0.8, 0.35, 0.04, ac);
    }
    addAABB(lx - w / 2, lx + w / 2, lz - dd / 2, lz + dd / 2, h);
  };
  if (R() < 0.24) {
    const w = 26 + R() * 4, dd = 26 + R() * 4; putBuilding(cx, cz, w, dd, 14 + R() * H * 1.25);
  } else {
    const lot = area / 2;
    for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) {
      const lx = cx - area / 2 + lot * (a + 0.5), lz = cz - area / 2 + lot * (b + 0.5);
      putBuilding(lx, lz, 11 + R() * (lot - 12), 11 + R() * (lot - 12), 7 + Math.pow(R(), 1.4) * H);
    }
  }
}
const cityMeshes = [];
for (const [bt, mat, cast] of [[B_brick, M_brick, true], [B_plaster, M_plaster, true], [B_glass, M_glass, true], [B_shop, M_shop, false], [B_caps, M_cap, true], [B_curb, M_cap, false], [B_side, M_side, false], [B_grass, M_grass, false]]) {
  if (!bt.pos.length) continue; const m = batchMesh(bt, mat, cast); scene.add(m); cityMeshes.push(m);
}
const camBlockers = cityMeshes.slice(0, 3);
for (let k = 0; k < 160; k++) {
  const side = k % 4, t = (R() - 0.5) * 2 * (LIMIT + 10), o = LIMIT + 6 + R() * 50;
  const pt = side === 0 ? [t, -o] : side === 1 ? [t, o] : side === 2 ? [-o, t] : [o, t];
  treeSpots.push([pt[0], pt[1], 1.1 + R() * 0.8]);
}
{
  const trunkG = new THREE.CylinderGeometry(0.16, 0.26, 3, 7); trunkG.translate(0, 1.5, 0);
  const blobs = [[0, 3.6, 0, 1.55], [0.75, 3.1, 0.3, 1.1], [-0.6, 3.2, -0.45, 1.15], [0.1, 4.4, -0.2, 1.05]];
  const crownG = mergeGeometries(blobs.map(([x, y, z, r]) => new THREE.IcosahedronGeometry(r, 1).translate(x, y, z)));
  const trunks = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x5b4330, roughness: 1 }), treeSpots.length);
  const crowns = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.95, flatShading: true }), treeSpots.length);
  const m = new THREE.Matrix4(), c = new THREE.Color(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
  treeSpots.forEach(([x, z, s], k) => {
    q.setFromAxisAngle(up, R() * 6.28); sc.set(s, s * (0.9 + R() * 0.25), s);
    m.compose(new THREE.Vector3(x, groundAt(x, z), z), q, sc); trunks.setMatrixAt(k, m); crowns.setMatrixAt(k, m);
    c.setHSL(0.24 + R() * 0.07, 0.42 + R() * 0.15, 0.26 + R() * 0.1); crowns.setColorAt(k, c);
    addAABB(x - 0.3 * s, x + 0.3 * s, z - 0.3 * s, z + 0.3 * s, 6);
  });
  trunks.castShadow = crowns.castShadow = true; crowns.receiveShadow = true; scene.add(trunks, crowns);
}
function instProps(list, geo, mat, collide) {
  if (!list.length) return;
  const im = new THREE.InstancedMesh(geo, mat, list.length), m = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  list.forEach(([x, z, r], k) => { q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, groundAt(x, z), z), q, one); im.setMatrixAt(k, m); if (collide) addAABB(x - collide, x + collide, z - collide, z + collide, 1); });
  im.castShadow = true; im.receiveShadow = true; scene.add(im);
}
{
  const wood = 0x8a5a36, metal = 0x2f3237, red = 0xc0262d;
  const benchG = mergeGeometries([
    colorize(new THREE.BoxGeometry(1.8, 0.07, 0.45).translate(0, 0.45, 0), wood), colorize(new THREE.BoxGeometry(1.8, 0.4, 0.06).translate(0, 0.75, -0.22), wood),
    colorize(new THREE.BoxGeometry(0.07, 0.45, 0.45).translate(-0.8, 0.22, 0), metal), colorize(new THREE.BoxGeometry(0.07, 0.45, 0.45).translate(0.8, 0.22, 0), metal)]);
  instProps(props.bench, benchG, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 }), 0.6);
  instProps(props.bin, new THREE.CylinderGeometry(0.28, 0.24, 0.9, 12).translate(0, 0.45, 0), new THREE.MeshStandardMaterial({ color: 0x2c4a3a, roughness: 0.6, metalness: 0.4 }), 0.3);
  const hyd = mergeGeometries([colorize(new THREE.CylinderGeometry(0.14, 0.17, 0.6, 10).translate(0, 0.3, 0), red), colorize(new THREE.SphereGeometry(0.15, 10, 6).translate(0, 0.62, 0), red), colorize(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 6).rotateZ(Math.PI / 2).translate(0, 0.4, 0), red)]);
  instProps(props.hydrant, hyd, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 }), 0.2);
}
/* ---------- street lights + traffic lights ---------- */
const TL = [];
let tlLamps = null;
{
  const lampPts = [];
  for (const b of blocksInfo) { const o = BLOCK / 2 - 0.7; lampPts.push([b.cx - o, b.cz + 5, -Math.PI / 2], [b.cx + o, b.cz - 5, Math.PI / 2], [b.cx + 5, b.cz - o, Math.PI], [b.cx - 5, b.cz + o, 0]); }
  // local: pole at origin, arm toward +z (rotated to face road)
  const poleG = mergeGeometries([new THREE.CylinderGeometry(0.08, 0.13, 7, 8).translate(0, 3.5, 0), new THREE.BoxGeometry(0.08, 0.08, 1.6).translate(0, 6.9, 0.75)]);
  const headG = new THREE.BoxGeometry(0.35, 0.14, 0.7).translate(0, 6.85, 1.45);
  const poles = new THREE.InstancedMesh(poleG, new THREE.MeshStandardMaterial({ color: 0x3a3d42, metalness: 0.6, roughness: 0.45 }), lampPts.length);
  const heads = new THREE.InstancedMesh(headG, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff2c8, emissiveIntensity: 0.5 }), lampPts.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), up = new THREE.Vector3(0, 1, 0);
  // rotation r makes local +z point toward the road
  lampPts.forEach(([x, z, r], k) => {
    q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, CURB, z), q, one); poles.setMatrixAt(k, m); heads.setMatrixAt(k, m);
    addAABB(x - 0.15, x + 0.15, z - 0.15, z + 0.15, 7);
  });
  poles.castShadow = true; scene.add(poles, heads);
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
    // axis 1 = traffic moving along z; axis 0 = along x. Each pole hangs its light over the approaching lane.
    const cfg = [[road(i) - o, road(j) - o, Math.PI / 2, 1], [road(i) + o, road(j) + o, -Math.PI / 2, 1], [road(i) + o, road(j) - o, 0, 0], [road(i) - o, road(j) + o, Math.PI, 0]];
    for (const [x, z, r, axis] of [cfg[0], cfg[1], cfg[2], cfg[3]].filter((_, n) => n % 2 === ((i + j) % 2))) {
      q.setFromAxisAngle(up, r); m.compose(new THREE.Vector3(x, CURB, z), q, one);
      tp.setMatrixAt(k, m); tb.setMatrixAt(k, m); tlLamps.setMatrixAt(k, m); tlLamps.setColorAt(k, c);
      TL.push({ i, j, axis, k }); addAABB(x - 0.15, x + 0.15, z - 0.15, z + 0.15, 6); k++;
    }
  }
  tp.count = tb.count = tlLamps.count = k;
  tp.castShadow = tb.castShadow = true; scene.add(tp, tb, tlLamps);
}
const tlOff = (i, j) => ((i * 3 + j * 5) % 7) * 1.7;
function greenAxis(i, j, t) { return Math.floor((t + tlOff(i, j)) / 10) % 2; }
function isYellow(i, j, t) { return (t + tlOff(i, j)) % 10 > 8.4; }
let lastTLUpdate = -1;
const C_G = new THREE.Color(0x2bff6a), C_R = new THREE.Color(0xff3030), C_Y = new THREE.Color(0xffc000);
function updateTrafficLights(t) {
  const step = Math.floor(t * 2); if (step === lastTLUpdate) return; lastTLUpdate = step;
  for (const L of TL) tlLamps.setColorAt(L.k, greenAxis(L.i, L.j, t) === L.axis ? (isYellow(L.i, L.j, t) ? C_Y : C_G) : C_R);
  tlLamps.instanceColor.needsUpdate = true;
}

/* ============================== PEOPLE (instanced smooth rigs) ============================== */
const MAXP = 56;
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
  im.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(im); return { name, im, key };
});
const rig = { parts: {} };
{
  const O = (parent, x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); if (parent) parent.add(o); return o; };
  rig.root = O(null, 0, 0, 0);
  rig.hips = O(rig.root, 0, 0.93, 0);
  rig.parts.pelvis = O(rig.hips, 0, 0, 0);
  rig.spine = O(rig.hips, 0, 0.06, 0);
  rig.parts.torso = O(rig.spine, 0, 0.25, 0);
  rig.parts.neck = O(rig.spine, 0, 0.5, 0);
  rig.headJ = O(rig.spine, 0, 0.55, 0);
  rig.parts.head = O(rig.headJ, 0, 0.12, 0);
  rig.parts.hair = O(rig.headJ, 0, 0.135, -0.012);
  rig.parts.nose = O(rig.headJ, 0, 0.115, 0.112);
  rig.parts.eyeL = O(rig.headJ, 0.04, 0.14, 0.098); rig.parts.eyeR = O(rig.headJ, -0.04, 0.14, 0.098);
  for (const [s, L] of [[1, 'L'], [-1, 'R']]) {
    const sh = O(rig.spine, 0.215 * s, 0.43, 0); rig['sh' + L] = sh;
    rig.parts['uArm' + L] = O(sh, 0, -0.13, 0);
    const el = O(sh, 0, -0.27, 0); rig['el' + L] = el;
    rig.parts['fArm' + L] = O(el, 0, -0.11, 0); rig.parts['hand' + L] = O(el, 0, -0.25, 0);
    const hp = O(rig.hips, 0.095 * s, -0.04, 0); rig['hip' + L] = hp;
    rig.parts['thigh' + L] = O(hp, 0, -0.2, 0);
    const kn = O(hp, 0, -0.43, 0); rig['kn' + L] = kn;
    rig.parts['shin' + L] = O(kn, 0, -0.2, 0); rig.parts['foot' + L] = O(kn, 0, -0.42, 0.045);
  }
}
const SKINS = ['#f1c9a5', '#e0ac8a', '#c68642', '#8d5524', '#5c3a1e', '#f6d7c0', '#b97a57'];
const TOPS = ['#e63946', '#1d3557', '#457b9d', '#2a9d8f', '#e9c46a', '#f4a261', '#ffffff', '#222222', '#6a4c93', '#8ac926', '#ff99c8', '#adb5bd', '#3a5a40', '#bc6c25'];
const PANTS = ['#1b263b', '#2b2d42', '#3d405b', '#222222', '#5e503f', '#4a6fa5', '#7f5539', '#adb5bd', '#283618'];
const HAIRS = ['#1a1110', '#2b1b12', '#4a2f1d', '#7a5230', '#c9a66b', '#d8c3a5', '#6e6e6e', '#111111'];
const SHOES = ['#ffffff', '#222222', '#8b4513', '#e63946', '#1d3557', '#dddddd'];
function makePersonData(idx, look) {
  const c = look || { skin: pick(SKINS), top: pick(TOPS), pants: pick(PANTS), hair: pick(HAIRS), shoe: pick(SHOES) };
  c.sleeve = c.sleeve || (R2() < 0.55 ? c.skin : c.top); c.eye = '#1a1a1a';
  const col = new THREE.Color();
  for (const p of crowd) { col.set(c[p.key]); p.im.setColorAt(idx, col); }
  return { idx, look: c, pos: new THREE.Vector3(), yaw: 0, speed: 0, ph: R2() * 6, air: false, down: 0, scale: 0.94 + R2() * 0.12, hide: false, armsUp: 0 };
}
function poseAndWrite(p, dt) {
  const r = rig;
  const s = p.speed, run = clamp((s - 2.4) / 3.5, 0, 1);
  const A = clamp(s * 0.3, 0, 0.95);
  if (!p.air && p.down <= 0) p.ph += dt * (s < 0.1 ? 0 : 4.6 + s * 1.15);
  const ph = p.ph;
  r.root.position.copy(p.pos); r.root.rotation.set(0, p.yaw, 0); r.root.scale.setScalar(p.hide ? 0.0001 : p.scale);
  const bob = s > 0.1 ? Math.abs(Math.cos(ph)) * 0.035 * (0.5 + run) : Math.sin(clock * 2 + p.idx) * 0.004;
  r.hips.position.y = 0.91 + bob - run * 0.03;
  r.hips.rotation.set(0.04 * A + run * 0.2, Math.sin(ph) * 0.12 * A, 0);
  r.spine.rotation.set(0.02 + run * 0.08, -Math.sin(ph) * 0.22 * A, 0);
  r.headJ.rotation.set(-run * 0.2, Math.sin(ph) * 0.06 * A, 0);
  const legs = [[r.hipL, r.knL, 0], [r.hipR, r.knR, Math.PI]];
  for (const [hip, kn, o] of legs) {
    const sn = Math.sin(ph + o), cs = Math.cos(ph + o);
    if (p.air) { hip.rotation.set(o ? -0.25 : -0.85, 0, 0); kn.rotation.set(o ? 0.6 : 1.3, 0, 0); continue; }
    hip.rotation.set(-sn * A * (0.75 + run * 0.35), 0, 0);
    kn.rotation.set((0.06 + Math.max(0, -cs) * 1.0 + (sn < 0 ? 0.2 : 0)) * A * (1 + run * 0.6), 0, 0);
  }
  const arms = [[r.shL, r.elL, Math.PI, 1], [r.shR, r.elR, 0, -1]];
  for (const [sh, el, o, side] of arms) {
    const sn = Math.sin(ph + o);
    if (p.armsUp > 0) { sh.rotation.set(-2.6, 0, side * 0.35); el.rotation.set(-0.3, 0, 0); continue; }
    if (p.air) { sh.rotation.set(-1.2, 0, side * 0.5); el.rotation.set(-0.7, 0, 0); continue; }
    sh.rotation.set(-sn * A * 0.85, 0, side * (0.07 + run * 0.05));
    el.rotation.set(-(0.15 + A * 0.45 + run * 1.0), 0, 0);
  }
  if (p.down > 0) {
    const k = clamp(Math.min(p.down, 3 - p.down) / 0.45, 0, 1);
    r.root.rotation.x = -k * 1.45; r.root.position.y += k * 0.14;
    r.shL.rotation.set(-1.4 * k, 0, 0.6 * k); r.shR.rotation.set(-1.4 * k, 0, -0.6 * k);
  }
  r.root.updateMatrixWorld(true);
  for (const c of crowd) c.im.setMatrixAt(p.idx, r.parts[c.name].matrixWorld);
}
/* ---------- pedestrian navigation graph ---------- */
const PO = BLOCK / 2 - 2.2;
const pedNodes = [], nodeIdx = new Map();
for (const b of blocksInfo) for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
  nodeIdx.set(b.i + ',' + b.j + ',' + sx + ',' + sz, pedNodes.length); pedNodes.push({ x: b.cx + sx * PO, z: b.cz + sz * PO, nb: [] });
}
for (const b of blocksInfo) {
  const g = (i, j, sx, sz) => nodeIdx.get(i + ',' + j + ',' + sx + ',' + sz);
  const c = [g(b.i, b.j, -1, -1), g(b.i, b.j, 1, -1), g(b.i, b.j, 1, 1), g(b.i, b.j, -1, 1)];
  for (let k = 0; k < 4; k++) { pedNodes[c[k]].nb.push(c[(k + 1) % 4]); pedNodes[c[(k + 1) % 4]].nb.push(c[k]); }
  if (b.i < N - 1) for (const sz of [-1, 1]) { const a = g(b.i, b.j, 1, sz), d = g(b.i + 1, b.j, -1, sz); pedNodes[a].nb.push(d); pedNodes[d].nb.push(a); }
  if (b.j < N - 1) for (const sx of [-1, 1]) { const a = g(b.i, b.j, sx, 1), d = g(b.i, b.j + 1, sx, -1); pedNodes[a].nb.push(d); pedNodes[d].nb.push(a); }
}

/* ============================== VEHICLES ============================== */
const CARS = {
  sedan: { name: 'City Sedan', cost: 0, max: 28, acc: 15, turn: 1.9, color: 0x2f5fa8, body: 'sedan' },
  taxi: { name: 'Taxi', cost: 250, max: 29, acc: 16, turn: 2.0, color: 0xf2b705, body: 'sedan', taxi: true },
  van: { name: 'Delivery Van', cost: 400, max: 24, acc: 12, turn: 1.6, color: 0xf1f1f1, body: 'van' },
  suv: { name: 'SUV', cost: 600, max: 31, acc: 16, turn: 1.75, color: 0x2d3436, body: 'suv' },
  sports: { name: 'Sports Coupe', cost: 1000, max: 40, acc: 23, turn: 2.2, color: 0xc1121f, body: 'sports' },
  muscle: { name: 'Muscle Car', cost: 1800, max: 44, acc: 25, turn: 1.9, color: 0x111111, body: 'sports', stripe: 0xffbe0b },
  super: { name: 'Supercar', cost: 3500, max: 55, acc: 32, turn: 2.45, color: 0xf77f00, body: 'super' },
};
const BODY = {
  sedan: { L: 4.6, W: 1.84, wb: 1.38, wr: 0.34, clear: 0.26, belt: 0.98, roof: 1.46, zw: 0.95, ws: 0.62, zr: -1.2, rs: 0.5 },
  suv: { L: 4.75, W: 1.95, wb: 1.45, wr: 0.4, clear: 0.36, belt: 1.18, roof: 1.8, zw: 1.1, ws: 0.5, zr: -2.1, rs: 0.18 },
  sports: { L: 4.5, W: 1.9, wb: 1.4, wr: 0.34, clear: 0.2, belt: 0.82, roof: 1.22, zw: 0.65, ws: 0.72, zr: -0.95, rs: 0.6 },
  super: { L: 4.6, W: 2.0, wb: 1.44, wr: 0.35, clear: 0.16, belt: 0.72, roof: 1.12, zw: 0.55, ws: 0.9, zr: -0.8, rs: 0.65 },
  van: { L: 5.0, W: 2.0, wb: 1.65, wr: 0.38, clear: 0.32, belt: 1.15, roof: 2.15, zw: 1.75, ws: 0.55, zr: -2.48, rs: 0.02 },
};
function extrudeSide(shape, width, bevel) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 10 });
  g.rotateY(-Math.PI / 2); g.translate((width - bevel * 2) / 2, 0, 0); g.computeVertexNormals(); return g;
}
function stripAttrs(g, keep) { g = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(g.attributes)) if (!keep.includes(k)) g.deleteAttribute(k); return g; }
const geoCache = {};
function carGeos(type, spec) {
  const key = type + (spec.taxi ? 't' : '') + (spec.stripe ? 's' : '');
  if (geoCache[key]) return geoCache[key];
  const T = BODY[type], hl = T.L / 2, ar = T.wr + 0.07;
  const s = new THREE.Shape();
  s.moveTo(-hl + 0.1, T.clear + 0.12);
  s.lineTo(-T.wb - ar - 0.05, T.clear); s.absarc(-T.wb, T.wr + 0.02, ar, Math.PI, 0, true);
  s.lineTo(T.wb - ar, T.clear); s.absarc(T.wb, T.wr + 0.02, ar, Math.PI, 0, true);
  s.lineTo(hl - 0.2, T.clear);
  s.quadraticCurveTo(hl + 0.04, T.clear, hl + 0.04, T.clear + 0.28);
  s.lineTo(hl, T.belt - 0.18);
  s.quadraticCurveTo(hl - 0.04, T.belt - 0.02, hl - 0.45, T.belt);
  s.lineTo(T.zw, T.belt + 0.07);
  s.lineTo(T.zr, T.belt + 0.07);
  s.lineTo(-hl + 0.35, T.belt + 0.02);
  s.quadraticCurveTo(-hl - 0.02, T.belt, -hl - 0.02, T.belt - 0.25);
  s.lineTo(-hl + 0.02, T.clear + 0.3);
  s.quadraticCurveTo(-hl, T.clear + 0.12, -hl + 0.1, T.clear + 0.12);
  const paintParts = [extrudeSide(s, T.W, 0.07)];
  const trim = [];
  const gh = new THREE.Shape(), b0 = T.belt + 0.05;
  gh.moveTo(T.zr, b0); gh.lineTo(T.zr + T.rs, T.roof - 0.02); gh.quadraticCurveTo(T.zr + T.rs + 0.1, T.roof + 0.02, T.zr + T.rs + 0.25, T.roof + 0.02);
  gh.lineTo(T.zw - T.ws - 0.2, T.roof + 0.02); gh.quadraticCurveTo(T.zw - T.ws, T.roof, T.zw - T.ws + 0.05, T.roof - 0.05); gh.lineTo(T.zw, b0); gh.lineTo(T.zr, b0);
  const ghG = extrudeSide(gh, T.W - 0.2, 0.06);
  if (type === 'van') {
    paintParts.push(ghG);
    const wsLen = Math.hypot(T.ws, T.roof - b0);
    trim.push(colorize(new THREE.BoxGeometry(T.W - 0.3, wsLen * 0.85, 0.06).rotateX(-Math.atan2(T.ws, T.roof - b0)).translate(0, (b0 + T.roof) / 2, T.zw - T.ws / 2 + 0.04), 0x1a2430));
    for (const sx of [-1, 1]) trim.push(colorize(new THREE.BoxGeometry(0.05, 0.55, 0.8).translate(sx * (T.W / 2 - 0.08), b0 + 0.45, T.zw - T.ws - 0.55), 0x1a2430));
  } else {
    trim.push(colorize(ghG, 0x16202b));
    const roofLen = (T.zw - T.ws - 0.15) - (T.zr + T.rs + 0.15);
    paintParts.push(new THREE.BoxGeometry(T.W - 0.3, 0.06, roofLen).translate(0, T.roof + 0.03, (T.zw - T.ws + T.zr + T.rs) / 2));
    const bz = (T.zw - T.ws + T.zr + T.rs) / 2 - 0.1;
    paintParts.push(new THREE.BoxGeometry(T.W - 0.16, T.roof - b0, 0.12).translate(0, (T.roof + b0) / 2, bz));
  }
  if (spec.stripe) trim.push(colorize(new THREE.BoxGeometry(0.42, 0.02, T.L - 0.3).translate(0, T.belt + 0.08, 0), spec.stripe));
  if (spec.taxi) trim.push(colorize(new THREE.BoxGeometry(0.75, 0.22, 0.28).translate(0, T.roof + 0.15, (T.zw - T.ws + T.zr + T.rs) / 2), 0xfff6c0));
  if (type === 'sports' || type === 'super') {
    trim.push(colorize(new THREE.BoxGeometry(T.W * 0.86, 0.05, 0.32).translate(0, T.belt + 0.3, -hl + 0.28), 0x111111));
    for (const sx of [-0.55, 0.55]) trim.push(colorize(new THREE.BoxGeometry(0.06, 0.26, 0.08).translate(sx, T.belt + 0.15, -hl + 0.28), 0x111111));
  }
  const fz = hl + 0.03, rz = -hl - 0.03, ly = T.belt - 0.2;
  for (const sx of [-1, 1]) {
    trim.push(colorize(new THREE.BoxGeometry(0.42, 0.13, 0.08).translate(sx * (T.W / 2 - 0.32), ly, fz - 0.02), 0xfff8e0));
    trim.push(colorize(new THREE.BoxGeometry(0.44, 0.13, 0.08).translate(sx * (T.W / 2 - 0.3), ly + 0.02, rz + 0.02), 0xd01010));
    trim.push(colorize(new THREE.BoxGeometry(0.16, 0.08, 0.2).translate(sx * (T.W / 2 + 0.06), T.belt + 0.12, T.zw - 0.15), 0x1c1c1c));
    trim.push(colorize(new THREE.BoxGeometry(0.03, 0.04, 0.18).translate(sx * (T.W / 2 + 0.01), T.belt - 0.12, 0.1), 0x9aa0a6));
  }
  trim.push(colorize(new THREE.BoxGeometry(T.W * 0.5, 0.2, 0.06).translate(0, ly - 0.08, fz), 0x141414));
  trim.push(colorize(new THREE.BoxGeometry(T.W + 0.04, 0.2, 0.18).translate(0, T.clear + 0.14, fz - 0.03), 0x2a2a2a));
  trim.push(colorize(new THREE.BoxGeometry(T.W + 0.04, 0.2, 0.18).translate(0, T.clear + 0.14, rz + 0.03), 0x2a2a2a));
  trim.push(colorize(new THREE.BoxGeometry(0.5, 0.12, 0.02).translate(0, T.clear + 0.36, rz - 0.01), 0xf4f4f4));
  trim.push(colorize(new THREE.BoxGeometry(T.W - 0.3, 0.12, T.L - 0.8).translate(0, T.clear + 0.02, 0), 0x111111));
  const paintG = mergeGeometries(paintParts.map(g => stripAttrs(g, ['position', 'normal', 'uv'])));
  const trimG = mergeGeometries(trim);
  const tire = colorize(new THREE.CylinderGeometry(T.wr, T.wr, 0.24, 22).rotateZ(Math.PI / 2), 0x161616);
  const rim = colorize(new THREE.CylinderGeometry(T.wr * 0.64, T.wr * 0.64, 0.25, 14).rotateZ(Math.PI / 2), 0xb8bec4);
  const hub = colorize(new THREE.CylinderGeometry(T.wr * 0.22, T.wr * 0.22, 0.26, 8).rotateZ(Math.PI / 2), 0x55595e);
  const spokes = []; for (let k = 0; k < 5; k++) spokes.push(colorize(new THREE.BoxGeometry(0.255, T.wr * 1.15, 0.06).rotateX(k * Math.PI * 2 / 5), 0x8a9096));
  const wheelG = mergeGeometries([tire, rim, hub, ...spokes]);
  return (geoCache[key] = { paintG, trimG, wheelG, T });
}
const paintCache = {};
const paintMat = (c) => paintCache[c] || (paintCache[c] = new THREE.MeshStandardMaterial({ color: c, metalness: 0.45, roughness: 0.33 }));
const trimMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.4, roughness: 0.18 });
const wheelMat = new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.5, roughness: 0.5 });
function makeCarMesh(spec, color) {
  const { paintG, trimG, wheelG, T } = carGeos(spec.body, spec);
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const pm = new THREE.Mesh(paintG, paintMat(color)); pm.castShadow = true; pm.receiveShadow = true; body.add(pm);
  const tm = new THREE.Mesh(trimG, trimMat); tm.castShadow = true; body.add(tm);
  const wheels = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const wg = new THREE.Group(); wg.position.set(sx * (T.W / 2 - 0.16), T.wr, sz * T.wb);
    const w = new THREE.Mesh(wheelG, wheelMat); w.castShadow = true; wg.add(w); g.add(wg); wheels.push(wg);
  }
  return { g, body, wheels };
}
const TRAFFIC_COLORS = [0x2f5fa8, 0xa4161a, 0xeeeeee, 0x2a9d8f, 0x6c757d, 0x1d3557, 0x5a189a, 0x111111, 0xc0c0c0, 0x8d6e63, 0x264653, 0x7a0019];
const vehicles = [];
function spawnVehicle(specKey, color, x, z, yaw, ai) {
  const spec = CARS[specKey];
  const m = makeCarMesh(spec, color === undefined ? spec.color : color);
  const v = { spec, key: specKey, mesh: m, pos: new THREE.Vector3(x, 0, z), yaw, speed: 0, ai: null, stun: 0, wait: 0, ghost: 0, steerVis: 0, owned: false };
  m.g.position.copy(v.pos); m.g.rotation.y = yaw; scene.add(m.g);
  vehicles.push(v); if (ai) initAI(v); return v;
}
function removeVehicle(v) { scene.remove(v.mesh.g); const i = vehicles.indexOf(v); if (i >= 0) vehicles.splice(i, 1); }

/* ---------- traffic AI ---------- */
function rightOf(d) { return new THREE.Vector3(-d.z, 0, d.x); }
function neighbors(i, j) { const o = []; if (i > 0) o.push([i - 1, j]); if (i < N) o.push([i + 1, j]); if (j > 0) o.push([i, j - 1]); if (j < N) o.push([i, j + 1]); return o; }
const LANE = 3;
function setSeg(v) {
  const a = v.ai, A = nodeV(...a.a), B = nodeV(...a.b), d = B.clone().sub(A).normalize(), r = rightOf(d);
  a.mode = 'seg'; a.axis = Math.abs(d.x) > 0.5 ? 0 : 1;
  a.p0 = A.clone().addScaledVector(d, 9).addScaledVector(r, LANE);
  a.p2 = B.clone().addScaledVector(d, -10.2).addScaledVector(r, LANE);
  a.p1 = a.p0.clone().lerp(a.p2, 0.5); a.len = a.p0.distanceTo(a.p2);
}
function setTurn(v, c) {
  const a = v.ai, A = nodeV(...a.a), B = nodeV(...a.b), C = nodeV(...c);
  const d1 = B.clone().sub(A).normalize(), d2 = C.clone().sub(B).normalize(), r1 = rightOf(d1), r2 = rightOf(d2);
  a.mode = 'turn'; a.t = 0; a.next = c;
  a.p0 = B.clone().addScaledVector(d1, -10.2).addScaledVector(r1, LANE);
  a.p2 = B.clone().addScaledVector(d2, 9).addScaledVector(r2, LANE);
  a.p1 = d1.dot(d2) > 0.9 ? a.p0.clone().lerp(a.p2, 0.5) : B.clone().addScaledVector(r1, LANE).addScaledVector(r2, LANE);
  a.len = (a.p0.distanceTo(a.p1) + a.p1.distanceTo(a.p2) + a.p0.distanceTo(a.p2)) / 2;
}
const bez = (a, t, out) => { const u = 1 - t; return out.set(0, 0, 0).addScaledVector(a.p0, u * u).addScaledVector(a.p1, 2 * u * t).addScaledVector(a.p2, t * t); };
const _t1 = new THREE.Vector3();
const bezTan = (a, t, out) => out.copy(a.p1).sub(a.p0).multiplyScalar(2 * (1 - t)).addScaledVector(_t1.copy(a.p2).sub(a.p1), 2 * t);
function initAI(v, ni, nj) {
  const i = ni ?? (R2() * (N + 1) | 0), j = nj ?? (R2() * (N + 1) | 0);
  const b = pick(neighbors(i, j));
  v.ai = { a: [i, j], b, t: R2() * 0.8, cruise: 8.5 + R2() * 3.5, spd: 0 };
  setSeg(v); bez(v.ai, v.ai.t, v.pos);
  const tg = bezTan(v.ai, v.ai.t, new THREE.Vector3()); v.yaw = Math.atan2(tg.x, tg.z);
}
const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
function updateAI(v, dt) {
  const a = v.ai;
  const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
  let desired = a.mode === 'turn' ? a.cruise * 0.6 : a.cruise;
  const me = P.car ? P.car.pos : P.pos;
  let blockedByAI = false;
  const check = (e, isAI, latMax) => {
    const dx = e.x - v.pos.x, dz = e.z - v.pos.z;
    const along = dx * fx + dz * fz; if (along <= 0 || along > 12) return;
    const lat = Math.abs(dx * fz - dz * fx);
    if (lat < latMax) {
      if (isAI && v.ghost > 0) return;
      desired = Math.min(desired, along < 5.8 ? 0 : a.cruise * (along - 5.8) / 6);
      if (isAI) blockedByAI = true;
    }
  };
  check(me, false, 2.0);
  for (const o of vehicles) if (o !== v && o !== P.car) check(o.pos, true, 2.0);
  for (const p of peds) if (p.onRoad && p.down <= 0) check(p.pos, false, 1.6);
  let red = false;
  if (a.mode === 'seg') {
    red = greenAxis(a.b[0], a.b[1], clock) !== a.axis || isYellow(a.b[0], a.b[1], clock);
    if (red) { const rem = (1 - a.t) * a.len; if (rem < 10) desired = Math.min(desired, rem < 0.5 ? 0 : rem * 0.9); }
  }
  if (desired < 0.5 && blockedByAI) { v.wait += dt; if (v.wait > 4) { v.ghost = 2.5; v.wait = 0; } } else v.wait = 0;
  v.ghost = Math.max(0, v.ghost - dt);
  if (v.stun > 0) { v.stun -= dt; desired = 0; }
  a.spd += (desired - a.spd) * Math.min(1, dt * (desired < a.spd ? 4 : 1.4));
  a.t += a.spd * dt / Math.max(0.5, a.len);
  if (a.t >= 1) {
    if (a.mode === 'seg') {
      if (red) a.t = 1;
      else { const nb = neighbors(...a.b).filter(n => !(n[0] === a.a[0] && n[1] === a.a[1])); setTurn(v, pick(nb)); }
    } else { a.a = a.b; a.b = a.next; a.t = 0; setSeg(v); }
  }
  const target = bez(a, Math.min(1, a.t), _v2);
  v.pos.lerp(target, Math.min(1, dt * (v.stun > 0 ? 0.5 : 8)));
  const tg = bezTan(a, Math.min(1, a.t), _v3);
  if (tg.lengthSq() > 1e-4) v.yaw = angLerp(v.yaw, Math.atan2(tg.x, tg.z), Math.min(1, dt * 8));
  v.speed = a.spd;
}

/* ============================== WORLD OBJECTS ============================== */
const COIN_N = 40, coinMeshes = [];
const coinG = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 28); coinG.rotateX(Math.PI / 2);
const coinMat = new THREE.MeshStandardMaterial({ color: 0xffc928, metalness: 1, roughness: 0.22, emissive: 0x4a3000 });
const coinRng = mulberry(4242);
for (let k = 0; k < COIN_N; k++) {
  let x, z; const r = coinRng();
  const b = blocksInfo[coinRng() * blocksInfo.length | 0];
  if (r < 0.55) { const s = coinRng() * 4 | 0, along = (coinRng() - 0.5) * (BLOCK - 6), off = BLOCK / 2 - 2.2;
    [x, z] = s === 0 ? [b.cx + along, b.cz - off] : s === 1 ? [b.cx + along, b.cz + off] : s === 2 ? [b.cx - off, b.cz + along] : [b.cx + off, b.cz + along]; }
  else if (r < 0.85) { const i = coinRng() * (N + 1) | 0, t = (coinRng() - 0.5) * N * CELL; if (coinRng() < 0.5) [x, z] = [road(i) + (coinRng() < 0.5 ? -3 : 3), t]; else [x, z] = [t, road(i) + (coinRng() < 0.5 ? -3 : 3)]; }
  else { const p = parks.length ? parks[coinRng() * parks.length | 0] : b; x = p.cx + (coinRng() - 0.5) * 24; z = p.cz + 8 * (coinRng() < 0.5 ? -1 : 1); }
  const p = new THREE.Vector3(x, 0, z); resolveCircle(p, 0.8);
  const m = new THREE.Mesh(coinG, coinMat); m.position.set(p.x, groundAt(p.x, p.z) + 1.1, p.z); m.castShadow = true;
  m.visible = !save.coins.includes(k); scene.add(m); coinMeshes.push(m);
}
function makeBeam(color) {
  const g = new THREE.Group();
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 40, 32, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false, toneMapped: false }));
  beam.position.y = 20; g.add(beam);
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.75, 40), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.9, toneMapped: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.25; g.add(ring);
  g.userData.ring = ring; scene.add(g); return g;
}
const jobSpots = [[3, 3], [5, 2], [2, 6], [6, 5]].map(([i, j]) => new THREE.Vector3(road(i) + ROADW / 2 + 2.6, 0, road(j) + ROADW / 2 + 9));
const jobBeams = jobSpots.map(p => { const b = makeBeam(0xffd60a); b.position.set(p.x, groundAt(p.x, p.z), p.z); return b; });
const raceStart = new THREE.Vector3(road(5) + 3, 0, road(4) + 20);
const raceBeam = makeBeam(0x38e07b); raceBeam.position.copy(raceStart);
const raceRoute = (() => {
  const rr = mulberry(777); const out = []; let cur = [5, 4], prev = [5, 3]; const seen = new Set();
  for (let k = 0; k < 11; k++) {
    let nb = neighbors(...cur).filter(n => !(n[0] === prev[0] && n[1] === prev[1]));
    const fresh = nb.filter(n => !seen.has(n.join())); if (fresh.length) nb = fresh;
    const nx = nb[rr() * nb.length | 0]; prev = cur; cur = nx; seen.add(cur.join()); out.push(nodeV(...cur));
  }
  return out;
})();
const goalBeam = makeBeam(0xff4fa3); goalBeam.visible = false;
const nextBeam = makeBeam(0xff4fa3); nextBeam.visible = false; nextBeam.scale.set(0.6, 0.5, 0.6);
const arrow = new THREE.Group();
{
  const m = new THREE.MeshBasicMaterial({ color: 0xffd60a, fog: false, depthTest: false, transparent: true, toneMapped: false });
  const c = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.1, 16), m); c.rotation.x = Math.PI / 2; c.position.z = 0.4;
  const s = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 10), m); s.rotation.x = Math.PI / 2; s.position.z = -0.35;
  c.renderOrder = s.renderOrder = 10; arrow.add(c, s); arrow.visible = false; scene.add(arrow); arrow.userData.mat = m;
}

/* ============================== PLAYER + PEDS + CARS ============================== */
const SPAWN = new THREE.Vector3(road(4) + ROADW / 2 + 2.2, CURB, road(4) + ROADW / 2 + 9);
P = { pos: SPAWN.clone(), vel: new THREE.Vector3(), yaw: 0, onGround: true, car: null, person: null };
P.person = makePersonData(0, { skin: '#c68642', top: '#c1121f', sleeve: '#c1121f', pants: '#1b263b', hair: '#1a1110', shoe: '#f4f4f4' });
P.person.scale = 1.02;
if (save.pos && Math.abs(save.pos.x) < LIMIT && Math.abs(save.pos.z) < LIMIT) { P.pos.set(save.pos.x, groundAt(save.pos.x, save.pos.z), save.pos.z); resolveCircle(P.pos, 0.6); }

const peds = [];
function reroutePed(p) {
  let best = 0, bd = 1e9;
  for (let i = 0; i < pedNodes.length; i++) { const n = pedNodes[i], d = (n.x - p.pos.x) ** 2 + (n.z - p.pos.z) ** 2; if (d < bd) { bd = d; best = i; } }
  p.from = best; p.to = pick(pedNodes[best].nb); p.lat = (R2() - 0.5) * 1.6;
}
function newPed(idx) {
  const p = makePersonData(idx);
  let ni = R2() * pedNodes.length | 0, tries = 0;
  while (Math.hypot(pedNodes[ni].x - P.pos.x, pedNodes[ni].z - P.pos.z) > 160 && tries++ < 30) ni = R2() * pedNodes.length | 0; // bias near player
  const n = pedNodes[ni], nx = pick(n.nb), t = R2();
  p.from = ni; p.to = nx; p.pos.set(lerp(n.x, pedNodes[nx].x, t), CURB, lerp(n.z, pedNodes[nx].z, t));
  p.base = R2() < 0.18 ? 3.2 + R2() * 1.2 : 1.15 + R2() * 0.5; p.mode = 'walk'; p.t = 0; p.lat = (R2() - 0.5) * 1.6; p.idle = 0; p.onRoad = false;
  return p;
}
for (let k = 1; k < MAXP; k++) peds.push(newPed(k));
function scarePed(p, from, dur) {
  if (p.down > 0) return;
  p.mode = 'flee'; p.t = dur; const dx = p.pos.x - from.x, dz = p.pos.z - from.z, l = Math.hypot(dx, dz) || 1;
  p.fx = dx / l; p.fz = dz / l; p.armsUp = R2() < 0.4 ? 0.8 : 0; p.idle = 0;
}
function updatePed(p, dt) {
  if (p.down > 0) { p.down -= dt; p.speed = 0; if (p.down <= 0) { p.mode = 'walk'; reroutePed(p); } return; }
  p.armsUp = Math.max(0, p.armsUp - dt);
  let tx, tz, sp;
  if (p.mode === 'flee') {
    p.t -= dt; tx = p.pos.x + p.fx * 5; tz = p.pos.z + p.fz * 5; sp = 6.0;
    if (p.t <= 0) { p.mode = 'walk'; reroutePed(p); }
  } else if (p.idle > 0) { p.idle -= dt; tx = p.pos.x; tz = p.pos.z; sp = 0; }
  else {
    const a = pedNodes[p.from], b = pedNodes[p.to];
    const dx = b.x - a.x, dz = b.z - a.z, l = Math.hypot(dx, dz) || 1, rx = -dz / l, rz = dx / l;
    tx = b.x + rx * p.lat; tz = b.z + rz * p.lat; sp = p.base;
    if (Math.hypot(tx - p.pos.x, tz - p.pos.z) < 0.8) {
      const nb = b.nb.filter(n => n !== p.from); p.from = p.to; p.to = pick(nb.length ? nb : b.nb);
      if (R2() < 0.08) p.idle = 1.5 + R2() * 4;
    }
  }
  const dx = tx - p.pos.x, dz = tz - p.pos.z, l = Math.hypot(dx, dz);
  p.speed = lerp(p.speed, l > 0.05 ? sp : 0, Math.min(1, dt * 4));
  if (l > 0.05) p.yaw = angLerp(p.yaw, Math.atan2(dx, dz), Math.min(1, dt * 7));
  p.pos.x += Math.sin(p.yaw) * p.speed * dt; p.pos.z += Math.cos(p.yaw) * p.speed * dt;
  if (!P.car) { const ex = p.pos.x - P.pos.x, ez = p.pos.z - P.pos.z, d = Math.hypot(ex, ez); if (d < 0.75 && d > 0.001) { p.pos.x = P.pos.x + ex / d * 0.75; p.pos.z = P.pos.z + ez / d * 0.75; } }
  resolveCircle(p.pos, 0.32, 0.3);
  const g = groundAt(p.pos.x, p.pos.z); p.onRoad = g === 0;
  p.pos.y = lerp(p.pos.y, g, Math.min(1, dt * 12));
}
function knockPed(p, v) {
  if (p.down > 0) return;
  p.down = 3; p.mode = 'down';
  const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw), rx = -fz, rz = fx;
  const side = ((p.pos.x - v.pos.x) * rx + (p.pos.z - v.pos.z) * rz) >= 0 ? 1 : -1;
  p.pos.x += rx * side * 1.7 + fx * 1.2; p.pos.z += rz * side * 1.7 + fz * 1.2; resolveCircle(p.pos, 0.35);
  p.yaw = Math.atan2(-rx * side, -rz * side);
}

let myCar = spawnVehicle(save.car && CARS[save.car] && save.owned.includes(save.car) ? save.car : 'sedan', undefined, road(4) + 4.9, road(4) + 24, Math.PI, false);
myCar.owned = true;
{
  const pr = mulberry(31337);
  for (let k = 0; k < 16; k++) {
    const i = pr() * (N + 1) | 0, j = pr() * N | 0, along = road(j) + ROADW / 2 + 7 + pr() * (BLOCK - 14);
    const side = pr() < 0.5 ? -1 : 1, key = ['sedan', 'sedan', 'suv', 'taxi', 'van', 'sports'][pr() * 6 | 0];
    const col = key === 'taxi' ? undefined : TRAFFIC_COLORS[pr() * TRAFFIC_COLORS.length | 0];
    if (pr() < 0.5) spawnVehicle(key, col, road(i) + side * 4.9, along, side > 0 ? Math.PI : 0, false);
    else spawnVehicle(key, col, along, road(i) + side * 4.9, side > 0 ? Math.PI / 2 : -Math.PI / 2, false);
  }
  for (let k = 0; k < 22; k++) {
    const key = pick(['sedan', 'sedan', 'sedan', 'suv', 'suv', 'taxi', 'van', 'sports']);
    const v = spawnVehicle(key, key === 'taxi' ? undefined : pick(TRAFFIC_COLORS), 0, 0, 0, true);
    if (v.pos.distanceTo(P.pos) < 25) initAI(v);
  }
}

/* ============================== AUDIO ============================== */
let AC = null, engine = null, ambience = null;
function initAudio() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } }
  if (AC && AC.state === 'suspended') AC.resume();
  if (AC && !ambience && !save.muted) startAmbience();
}
function tone(f, dur, type, vol, f2, delay) {
  if (!AC || save.muted) return;
  try {
    const t = AC.currentTime + (delay || 0), o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'square'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    g.gain.setValueAtTime(vol || 0.1, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.02);
  } catch (e) {}
}
function noise(dur, vol, lp) {
  if (!AC || save.muted) return;
  try {
    const b = AC.createBuffer(1, AC.sampleRate * dur | 0, AC.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = AC.createBufferSource(), g = AC.createGain(), f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp || 2000;
    s.buffer = b; g.gain.value = vol || 0.3; s.connect(f); f.connect(g); g.connect(AC.destination); s.start();
  } catch (e) {}
}
function startAmbience() {
  try {
    const len = AC.sampleRate * 4, b = AC.createBuffer(1, len, AC.sampleRate), d = b.getChannelData(0);
    let last = 0; for (let i = 0; i < len; i++) { last = last * 0.985 + (Math.random() * 2 - 1) * 0.015; d[i] = last * 3; }
    const s = AC.createBufferSource(), g = AC.createGain(); s.buffer = b; s.loop = true; g.gain.value = 0.16; s.connect(g); g.connect(AC.destination); s.start();
    ambience = { s, g };
  } catch (e) {}
}
function stopAmbience() { if (ambience) { try { ambience.s.stop(); } catch (e) {} ambience = null; } }
const SFX = {
  coin() { tone(988, 0.07, 'square', 0.05); tone(1318, 0.14, 'square', 0.05, null, 0.06); },
  cash() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.12, 'triangle', 0.08, null, i * 0.07)); },
  jump() { noise(0.12, 0.08, 900); },
  door() { noise(0.1, 0.25, 600); tone(110, 0.08, 'square', 0.05, 70); },
  horn() { tone(392, 0.4, 'sawtooth', 0.06); tone(466, 0.4, 'sawtooth', 0.05); },
  crash() { noise(0.45, 0.45, 1400); tone(90, 0.3, 'sawtooth', 0.1, 40); },
  check() { tone(880, 0.1, 'triangle', 0.08); tone(1320, 0.15, 'triangle', 0.08, null, 0.08); },
  fail() { tone(300, 0.3, 'sawtooth', 0.06, 120); },
  click() { tone(660, 0.05, 'triangle', 0.05); },
  yelp() { tone(700 + Math.random() * 300, 0.18, 'triangle', 0.035, 450); },
};
function engineOn() {
  if (!AC || save.muted || engine) return;
  try {
    const o = AC.createOscillator(), o2 = AC.createOscillator(), f = AC.createBiquadFilter(), g = AC.createGain();
    o.type = 'sawtooth'; o2.type = 'triangle'; f.type = 'lowpass'; f.frequency.value = 380; g.gain.value = 0;
    o.connect(f); o2.connect(f); f.connect(g); g.connect(AC.destination); o.start(); o2.start(); engine = { o, o2, f, g };
  } catch (e) {}
}
function engineOff() { if (engine) { try { engine.o.stop(); engine.o2.stop(); engine.g.disconnect(); } catch (e) {} engine = null; } }
function engineUpdate(speed, thr) {
  if (!engine) return;
  const s = Math.abs(speed), gear = Math.min(4, Math.floor(s / 11)), rpm = (s - gear * 11) / 11;
  const f = 38 + rpm * 55 + gear * 6 + thr * 8, t = AC.currentTime;
  engine.o.frequency.setTargetAtTime(f, t, 0.06); engine.o2.frequency.setTargetAtTime(f * 0.5, t, 0.06);
  engine.f.frequency.setTargetAtTime(300 + thr * 500 + s * 8, t, 0.1);
  engine.g.gain.setTargetAtTime(save.muted ? 0 : 0.05 + thr * 0.03, t, 0.1);
}

/* ============================== INPUT ============================== */
const joy = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
const look = { id: null, lx: 0, ly: 0, lastT: -10 };
const keys = {};
const btn = { A: false, B: false };
let camYaw = 0, camPitch = 0.3, camDist = 5.5;
const joyEl = $('joy'), knobEl = $('knob');
const JOY_R = 52;
function joyHome() { joyEl.style.left = ''; joyEl.style.top = ''; joyEl.style.bottom = ''; knobEl.style.transform = ''; }
const cv = renderer.domElement;
cv.addEventListener('pointerdown', (e) => {
  if (state !== 'play') return;
  initAudio();
  if (!$('tut').classList.contains('hidden')) closeTut();
  if (e.clientX < window.innerWidth * 0.45 && joy.id === null && e.pointerType !== 'mouse') {
    joy.id = e.pointerId; joy.ox = e.clientX; joy.oy = e.clientY; joy.x = joy.y = 0;
    joyEl.style.left = (e.clientX - 65) + 'px'; joyEl.style.top = (e.clientY - 65) + 'px'; joyEl.style.bottom = 'auto';
  } else if (look.id === null) { look.id = e.pointerId; look.lx = e.clientX; look.ly = e.clientY; }
  try { cv.setPointerCapture(e.pointerId); } catch (_) {}
});
cv.addEventListener('pointermove', (e) => {
  if (e.pointerId === joy.id) {
    let dx = e.clientX - joy.ox, dy = e.clientY - joy.oy; const l = Math.hypot(dx, dy);
    if (l > JOY_R) { dx *= JOY_R / l; dy *= JOY_R / l; }
    joy.x = dx / JOY_R; joy.y = dy / JOY_R; knobEl.style.transform = `translate(${dx}px,${dy}px)`;
  } else if (e.pointerId === look.id) {
    const dx = e.clientX - look.lx, dy = e.clientY - look.ly; look.lx = e.clientX; look.ly = e.clientY;
    camYaw -= dx * 0.0065; camPitch = clamp(camPitch + dy * 0.0045, -0.1, 1.25); look.lastT = clock;
  }
});
function ptrEnd(e) { if (e.pointerId === joy.id) { joy.id = null; joy.x = joy.y = 0; joyHome(); } if (e.pointerId === look.id) look.id = null; }
cv.addEventListener('pointerup', ptrEnd); cv.addEventListener('pointercancel', ptrEnd); cv.addEventListener('lostpointercapture', ptrEnd);
function bindBtn(el, down, up) {
  el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); initAudio(); el.classList.add('down'); if (down) down(); });
  const u = () => { el.classList.remove('down'); if (up) up(); };
  el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('pointerleave', u);
}
bindBtn($('bA'), () => { btn.A = true; if (!P.car) doJump(); }, () => { btn.A = false; });
bindBtn($('bB'), () => { btn.B = true; if (P.car) honk(); }, () => { btn.B = false; });
bindBtn($('bC'), () => toggleCar());
document.addEventListener('touchmove', (e) => { if (!e.target.closest || !e.target.closest('.scroll')) e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (state !== 'play') { if ((e.code === 'Escape' || e.code === 'KeyM') && state === 'phone') closePhone(); return; }
  initAudio();
  if (e.code === 'Space') { btn.A = true; if (!P.car) doJump(); e.preventDefault(); }
  if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') toggleCar();
  if (e.code === 'KeyH') honk();
  if (e.code === 'KeyM' || e.code === 'Escape') openPhone();
  if (e.code.startsWith('Arrow')) e.preventDefault();
});
window.addEventListener('keyup', (e) => { keys[e.code] = false; if (e.code === 'Space') btn.A = false; });
function inputVec() {
  let x = joy.x, y = joy.y;
  if (keys.KeyA || keys.ArrowLeft) x -= 1; if (keys.KeyD || keys.ArrowRight) x += 1;
  if (keys.KeyW || keys.ArrowUp) y -= 1; if (keys.KeyS || keys.ArrowDown) y += 1;
  const l = Math.hypot(x, y); if (l > 1) { x /= l; y /= l; }
  return { x, y, run: btn.B || keys.ShiftLeft || keys.ShiftRight };
}

/* ============================== GAMEPLAY ============================== */
let state = 'loading', clock = 0, lastSave = 0, toastT = null, shake = 0, frameN = 0;
function toast(t, c) { const el = $('toast'); el.textContent = t; el.style.color = c || '#fff'; el.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(() => el.style.opacity = 0, 1700); }
function addCash(n) { save.cash += n; SFX.cash(); hudDirty = true; persist(); }
function doJump() { if (P.onGround) { P.vel.y = 6.2; P.onGround = false; SFX.jump(); } }
function focusPos() { return P.car ? P.car.pos : P.pos; }
function honk() { SFX.horn(); const fp = focusPos(); for (const p of peds) if (p.pos.distanceTo(fp) < 16 && R2() < 0.8) scarePed(p, fp, 1.5 + R2()); }
let nearCar = null;
function findNearCar() { let best = null, bd = 4.2; for (const v of vehicles) { const d = v.pos.distanceTo(P.pos); if (d < bd) { bd = d; best = v; } } return best; }
function toggleCar() {
  if (state !== 'play') return;
  if (P.car) {
    const v = P.car, fx = Math.sin(v.yaw), fz = Math.cos(v.yaw), rx = -fz, rz = fx;
    let out = null;
    for (const side of [1, -1, -2]) {
      const p = side === -2 ? new THREE.Vector3(v.pos.x - fx * 3.5, 0, v.pos.z - fz * 3.5) : new THREE.Vector3(v.pos.x + rx * side * 2.2, 0, v.pos.z + rz * side * 2.2);
      const q = p.clone(); resolveCircle(q, 0.5); if (q.distanceTo(p) < 0.3) { out = q; break; }
    }
    if (!out) { out = new THREE.Vector3(v.pos.x + rx * 2.3, 0, v.pos.z + rz * 2.3); resolveCircle(out, 0.5); }
    P.pos.set(out.x, groundAt(out.x, out.z), out.z); P.vel.set(0, 0, 0); P.yaw = v.yaw;
    v.speed = 0; P.car = null; P.person.hide = false; engineOff(); SFX.door(); camDist = 5.5;
  } else if (nearCar) {
    const v = nearCar; if (v.ai) { v.ai = null; toast('You took the car!', '#ffd60a'); }
    P.car = v; P.person.hide = true; SFX.door(); engineOn(); camDist = 9.5; camYaw = v.yaw;
  }
  hudDirty = true;
}
function updateFoot(dt) {
  const inp = inputVec();
  const Fx = Math.sin(camYaw), Fz = Math.cos(camYaw);
  const mx = Fx * -inp.y - Fz * inp.x, mz = Fz * -inp.y + Fx * inp.x;
  const mag = Math.min(1, Math.hypot(mx, mz));
  const sp = (inp.run ? 7.5 : 3.6) * mag, hl = Math.hypot(mx, mz) || 1;
  const tx = mag > 0.05 ? mx / hl * sp : 0, tz = mag > 0.05 ? mz / hl * sp : 0;
  const k = Math.min(1, dt * (P.onGround ? 10 : 2.5));
  P.vel.x = lerp(P.vel.x, tx, k); P.vel.z = lerp(P.vel.z, tz, k);
  if (mag > 0.05) P.yaw = angLerp(P.yaw, Math.atan2(mx, mz), Math.min(1, dt * 11));
  P.vel.y -= 20 * dt;
  P.pos.addScaledVector(P.vel, dt);
  const gnd = groundAt(P.pos.x, P.pos.z);
  if (P.pos.y <= gnd) { P.pos.y = gnd; P.vel.y = 0; P.onGround = true; } else if (P.pos.y - gnd > 0.25) P.onGround = false;
  resolveCircle(P.pos, 0.38, P.pos.y);
  for (const v of vehicles) {
    const dx = P.pos.x - v.pos.x, dz = P.pos.z - v.pos.z, d = Math.hypot(dx, dz);
    if (d < 2.1 && d > 0.001 && P.pos.y < 1.5) { P.pos.x = v.pos.x + dx / d * 2.1; P.pos.z = v.pos.z + dz / d * 2.1; }
  }
  const pp = P.person; pp.pos.copy(P.pos); pp.yaw = P.yaw; pp.speed = Math.hypot(P.vel.x, P.vel.z); pp.air = !P.onGround;
  nearCar = findNearCar();
}
function updateCar(v, dt) {
  const inp = inputVec();
  const thr = -inp.y, steer = inp.x, hb = btn.A || keys.Space;
  const sp = v.spec;
  if (thr > 0.1) { if (v.speed < -0.5) v.speed += 32 * dt * thr; else v.speed += sp.acc * thr * dt * (1 - Math.max(0, v.speed) / sp.max * 0.6); }
  else if (thr < -0.1) { if (v.speed > 0.5) v.speed -= 34 * dt * -thr; else v.speed -= sp.acc * 0.55 * -thr * dt; }
  else v.speed *= (1 - 0.6 * dt);
  if (hb) v.speed *= (1 - 1.5 * dt);
  v.speed = clamp(v.speed, -11, sp.max);
  const turnAmt = steer * sp.turn * Math.min(1, Math.abs(v.speed) / 7) * Math.sign(v.speed) * (hb ? 1.55 : 1) * (1 - Math.min(0.45, Math.abs(v.speed) / sp.max * 0.45));
  v.yaw -= turnAmt * dt;
  const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
  v.pos.x += fx * v.speed * dt; v.pos.z += fz * v.speed * dt;
  let impact = false;
  for (const off of [-1.45, 0, 1.45]) {
    const c = _v1.set(v.pos.x + fx * off, 0, v.pos.z + fz * off), bx = c.x, bz = c.z;
    if (resolveCircle(c, 1.0, 0.5)) { impact = true; v.pos.x += c.x - bx; v.pos.z += c.z - bz; }
  }
  if (impact) { if (Math.abs(v.speed) > 14) { SFX.crash(); shake = 0.35; } v.speed *= Math.abs(v.speed) > 6 ? -0.25 : 0.5; }
  for (const o of vehicles) {
    if (o === v) continue;
    const dx = o.pos.x - v.pos.x, dz = o.pos.z - v.pos.z, d = Math.hypot(dx, dz);
    if (d < 3.3 && d > 0.01) {
      const push = 3.3 - d;
      o.pos.x += dx / d * push * 0.7; o.pos.z += dz / d * push * 0.7; v.pos.x -= dx / d * push * 0.3; v.pos.z -= dz / d * push * 0.3;
      resolveCircle(o.pos, 1.4, 0.5);
      if (Math.abs(v.speed) > 12) { SFX.crash(); shake = 0.3; }
      if (o.ai) o.stun = 2.5; v.speed *= 0.6;
    }
  }
  const as = Math.abs(v.speed), sg = Math.sign(v.speed) || 1;
  if (as > 3) for (const p of peds) {
    if (p.down > 0) continue;
    const dx = p.pos.x - v.pos.x, dz = p.pos.z - v.pos.z;
    if (dx * dx + dz * dz > 200) continue;
    const along = (dx * fx + dz * fz) * sg, lat = Math.abs(dx * fz - dz * fx);
    if (along > -2.4 && along < 2.6 && lat < 1.45) { knockPed(p, v); SFX.yelp(); v.speed *= 0.85; }
    else if (along > 0 && along < 10 + as * 0.4 && lat < 3.5 && p.mode !== 'flee') {
      const side = (dx * -fz + dz * fx) >= 0 ? 1 : -1;
      scarePed(p, _v2.set(p.pos.x + fz * side, 0, p.pos.z - fx * side), 1.6); if (R2() < 0.3) SFX.yelp();
    }
  }
  v.steerVis = lerp(v.steerVis, steer, Math.min(1, dt * 8));
  engineUpdate(v.speed, Math.max(0, thr));
}
function syncVehicle(v, dt) {
  const m = v.mesh; m.g.position.set(v.pos.x, 0, v.pos.z); m.g.rotation.y = v.yaw;
  const isP = v === P.car;
  const roll = isP ? -v.steerVis * Math.min(1, Math.abs(v.speed) / 25) * 0.05 : 0;
  m.body.rotation.z = lerp(m.body.rotation.z, roll, Math.min(1, dt * 6));
  for (let i = 0; i < 4; i++) {
    const w = m.wheels[i]; w.children[0].rotation.x += v.speed * dt / 0.36;
    if (i % 2 === 1) w.rotation.y = isP ? v.steerVis * 0.45 : 0;
  }
}

/* ---------- missions ---------- */
let M = null, raceCooldown = 0, jobCooldown = 0;
function setBeamColor(b, c) { b.children[0].material.color.setHex(c); b.children[1].material.color.setHex(c); }
function startDelivery(spot) {
  let dest = null;
  for (let tries = 0; tries < 40; tries++) {
    const i = R2() * (N + 1) | 0, j = R2() * N | 0; const along = road(j) + ROADW / 2 + 6 + R2() * (BLOCK - 12); const side = R2() < 0.5 ? -1 : 1;
    const p = R2() < 0.5 ? new THREE.Vector3(road(i) + side * 7.6, CURB, along) : new THREE.Vector3(along, CURB, road(i) + side * 7.6);
    resolveCircle(p, 1); if (p.distanceTo(spot) > 130) { dest = p; break; }
  }
  if (!dest) dest = nodeV(0, 0);
  M = { type: 'deliver', dest, time: Math.round(dest.distanceTo(spot) / 9 + 18) };
  goalBeam.position.set(dest.x, groundAt(dest.x, dest.z), dest.z); goalBeam.visible = true; setBeamColor(goalBeam, 0xff4fa3);
  toast('📦 Deliver the package!', '#ffd60a'); SFX.check();
}
function startRace() {
  M = { type: 'race', idx: 0, time: 0 };
  goalBeam.visible = true; setBeamColor(goalBeam, 0x38e07b); setBeamColor(nextBeam, 0x38e07b); placeRaceBeams();
  toast('🏁 RACE! Hit every checkpoint', '#38e07b'); SFX.check();
}
function placeRaceBeams() {
  const p = raceRoute[M.idx]; goalBeam.position.set(p.x, 0, p.z);
  const n = raceRoute[M.idx + 1]; if (n) { nextBeam.visible = true; nextBeam.position.set(n.x, 0, n.z); } else nextBeam.visible = false;
}
function endMission() { M = null; goalBeam.visible = false; nextBeam.visible = false; hudDirty = true; }
function updateMissions(dt) {
  const fp = focusPos();
  raceCooldown = Math.max(0, raceCooldown - dt); jobCooldown = Math.max(0, jobCooldown - dt);
  for (const b of [...jobBeams, raceBeam, goalBeam, nextBeam]) b.userData.ring.rotation.z += dt;
  if (!M) {
    jobBeams.forEach(b => b.visible = true); raceBeam.visible = true;
    for (const s of jobSpots) if (jobCooldown <= 0 && Math.hypot(fp.x - s.x, fp.z - s.z) < 3.2) { startDelivery(s); break; }
    if (!M && raceCooldown <= 0 && Math.hypot(fp.x - raceStart.x, fp.z - raceStart.z) < 3.5) {
      if (P.car) startRace(); else { toast('🚗 Get in a car to race!', '#38e07b'); raceCooldown = 3; }
    }
  } else {
    jobBeams.forEach(b => b.visible = false); raceBeam.visible = false;
    if (M.type === 'deliver') {
      M.time -= dt;
      if (Math.hypot(fp.x - M.dest.x, fp.z - M.dest.z) < 4) { const pay = 60 + Math.round(M.time * 5); save.deliveries++; addCash(pay); toast('✅ Delivered! +$' + pay, '#7dff9b'); endMission(); jobCooldown = 4; }
      else if (M.time <= 0) { toast('⏰ Too slow — delivery failed', '#ff6b6b'); SFX.fail(); endMission(); jobCooldown = 4; }
    } else if (M.type === 'race') {
      M.time += dt;
      const p = raceRoute[M.idx];
      if (Math.hypot(fp.x - p.x, fp.z - p.z) < 7.5) {
        M.idx++; SFX.check();
        if (M.idx >= raceRoute.length) {
          const t = M.time, first = save.races === 0, best = !save.bestRace || t < save.bestRace;
          save.races++; if (best) save.bestRace = +t.toFixed(2);
          const pay = (first ? 300 : 120) + (best ? 100 : 0); addCash(pay);
          toast((best ? '🏆 NEW BEST ' : '🏁 FINISHED ') + t.toFixed(1) + 's  +$' + pay, '#7dff9b'); endMission(); raceCooldown = 6;
        } else placeRaceBeams();
      }
      if (M && !P.car) { toast('Race cancelled — you left the car', '#ff6b6b'); SFX.fail(); endMission(); raceCooldown = 4; }
    }
  }
  let target = null; if (M) target = M.type === 'deliver' ? M.dest : raceRoute[M.idx];
  if (target) {
    arrow.visible = true;
    arrow.position.set(fp.x, (P.car ? 3.2 : P.pos.y + 2.6) + Math.sin(clock * 4) * 0.1, fp.z);
    arrow.rotation.y = Math.atan2(target.x - fp.x, target.z - fp.z);
    arrow.userData.mat.color.setHex(M.type === 'race' ? 0x38e07b : 0xff4fa3);
  } else arrow.visible = false;
  for (let k = 0; k < COIN_N; k++) {
    const c = coinMeshes[k]; if (!c.visible) continue;
    c.rotation.y += dt * 3;
    const yy = P.car ? 0.6 : P.pos.y;
    if (Math.hypot(fp.x - c.position.x, fp.z - c.position.z) < (P.car ? 2.8 : 1.3) && Math.abs(c.position.y - 1.1 - yy) < 1.8) {
      c.visible = false; save.coins.push(k); save.cash += 25; SFX.coin(); hudDirty = true; persist();
      toast('🪙 Coin ' + save.coins.length + '/' + COIN_N + '  +$25', '#ffd60a');
      if (save.coins.length === COIN_N) { addCash(1000); toast('🎉 ALL COINS FOUND! +$1000', '#ffd60a'); }
    }
  }
}

/* ============================== CAMERA ============================== */
const ray = new THREE.Raycaster();
const camTarget = new THREE.Vector3(), camWant = new THREE.Vector3();
function updateCamera(dt) {
  const fp = focusPos();
  camTarget.lerp(_v2.set(fp.x, P.car ? 1.5 : P.pos.y + 1.55, fp.z), Math.min(1, dt * 12));
  if (P.car && clock - look.lastT > 1.6 && Math.abs(P.car.speed) > 2) {
    camYaw = angLerp(camYaw, P.car.yaw, Math.min(1, dt * 2.2)); camPitch = lerp(camPitch, 0.24, Math.min(1, dt * 1.5));
  }
  const dist = camDist + (P.car ? Math.min(3.5, Math.abs(P.car.speed) * 0.07) : 0);
  const cp = Math.cos(camPitch), sp = Math.sin(camPitch);
  const dir = _v1.set(-Math.sin(camYaw) * cp, sp, -Math.cos(camYaw) * cp);
  let d = dist;
  ray.set(camTarget, dir); ray.far = dist;
  const hits = ray.intersectObjects(camBlockers, false);
  if (hits.length) d = Math.max(1.0, hits[0].distance - 0.35);
  camWant.copy(camTarget).addScaledVector(dir, d);
  if (camWant.y < 0.35) camWant.y = 0.35;
  camera.position.copy(camWant);
  if (shake > 0) { camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake; shake = Math.max(0, shake - dt); }
  camera.lookAt(camTarget.x, camTarget.y + 0.15, camTarget.z);
  const fov = P.car ? 60 + Math.min(14, Math.abs(P.car.speed) * 0.28) : 60;
  if (Math.abs(camera.fov - fov) > 0.1) { camera.fov = lerp(camera.fov, fov, Math.min(1, dt * 3)); camera.updateProjectionMatrix(); }
  const tx = Math.round(fp.x / 2) * 2, tz = Math.round(fp.z / 2) * 2;
  sun.target.position.set(tx, 0, tz); sun.position.set(tx + SUN_OFF.x, SUN_OFF.y, tz + SUN_OFF.z);
}

/* ============================== HUD ============================== */
let hudDirty = true;
const mapCv = $('map'), mctx = mapCv.getContext('2d');
let mapT = 0;
function drawMap() {
  const S = 240, c = S / 2, scale = S / 2 / 95, fp = focusPos();
  const sa = Math.sin(camYaw), ca = Math.cos(camYaw);
  const tm = (x, z) => { const dx = x - fp.x, dz = z - fp.z; const f = dx * sa + dz * ca, r = dx * -ca + dz * sa; return [c - r * scale, c - f * scale]; };
  mctx.clearRect(0, 0, S, S);
  mctx.save(); mctx.beginPath(); mctx.arc(c, c, c, 0, Math.PI * 2); mctx.clip();
  mctx.fillStyle = '#6d6a64'; mctx.fillRect(0, 0, S, S);
  for (const p of parks) { const pts = [[-17, -17], [17, -17], [17, 17], [-17, 17]].map(([a, b]) => tm(p.cx + a, p.cz + b)); mctx.fillStyle = '#5e8a3f'; mctx.beginPath(); pts.forEach((q, i) => i ? mctx.lineTo(...q) : mctx.moveTo(...q)); mctx.fill(); }
  mctx.strokeStyle = '#e4e0d8'; mctx.lineWidth = ROADW * scale; mctx.lineCap = 'square';
  for (let i = 0; i <= N; i++) {
    let p1 = tm(road(i), -HALF), p2 = tm(road(i), HALF); mctx.beginPath(); mctx.moveTo(...p1); mctx.lineTo(...p2); mctx.stroke();
    p1 = tm(-HALF, road(i)); p2 = tm(HALF, road(i)); mctx.beginPath(); mctx.moveTo(...p1); mctx.lineTo(...p2); mctx.stroke();
  }
  const dot = (x, z, col, r, clampIt) => {
    let [px, py] = tm(x, z); const dx = px - c, dy = py - c, l = Math.hypot(dx, dy);
    if (l > c - 10) { if (!clampIt) return; px = c + dx / l * (c - 10); py = c + dy / l * (c - 10); }
    mctx.fillStyle = col; mctx.beginPath(); mctx.arc(px, py, r, 0, 7); mctx.fill(); mctx.strokeStyle = '#000'; mctx.lineWidth = 2; mctx.stroke();
  };
  if (!M) { jobSpots.forEach(s => dot(s.x, s.z, '#ffd60a', 9, true)); dot(raceStart.x, raceStart.z, '#38e07b', 9, true); }
  else if (M.type === 'deliver') dot(M.dest.x, M.dest.z, '#ff4fa3', 11, true);
  else { const p = raceRoute[M.idx]; dot(p.x, p.z, '#38e07b', 11, true); }
  if (myCar && myCar !== P.car && vehicles.includes(myCar)) dot(myCar.pos.x, myCar.pos.z, '#3a86ff', 7, true);
  for (let k = 0; k < COIN_N; k++) { const m = coinMeshes[k]; if (m.visible && m.position.distanceTo(fp) < 60) dot(m.position.x, m.position.z, '#ffcc00', 4, false); }
  const rel = (P.car ? P.car.yaw : P.yaw) - camYaw;
  mctx.translate(c, c); mctx.rotate(-rel);
  mctx.fillStyle = '#fff'; mctx.strokeStyle = '#000'; mctx.lineWidth = 2;
  mctx.beginPath(); mctx.moveTo(0, -13); mctx.lineTo(9, 10); mctx.lineTo(0, 5); mctx.lineTo(-9, 10); mctx.closePath(); mctx.fill(); mctx.stroke();
  mctx.restore();
}
function updateHUD(dt) {
  if (hudDirty) {
    $('cash').textContent = '$' + save.cash.toLocaleString();
    $('coinsTxt').textContent = 'Coins ' + save.coins.length + '/' + COIN_N;
    const inCar = !!P.car;
    $('bA').textContent = inCar ? 'BRAKE' : 'JUMP'; $('bB').textContent = inCar ? 'HORN' : 'RUN';
    $('speed').classList.toggle('hidden', !inCar); hudDirty = false;
  }
  const showC = P.car || nearCar, bC = $('bC');
  if (!!showC === bC.classList.contains('hidden')) bC.classList.toggle('hidden', !showC);
  const lbl = P.car ? 'EXIT<br>CAR' : 'ENTER<br>CAR'; if (bC.innerHTML !== lbl) bC.innerHTML = lbl;
  if (P.car) { const s = Math.round(Math.abs(P.car.speed) * 3.6) + ' <small>KM/H</small>'; const el = $('speed'); if (el.innerHTML !== s) el.innerHTML = s; }
  const mEl = $('mission');
  if (M) {
    const h = M.type === 'deliver' ? '<b>' + Math.max(0, M.time).toFixed(0) + 's</b>📦 Deliver to the pink beam · ' + Math.round(focusPos().distanceTo(M.dest)) + 'm'
      : '<b>' + M.time.toFixed(1) + 's</b>🏁 Checkpoint ' + (M.idx + 1) + '/' + raceRoute.length + (save.bestRace ? ' · Best ' + save.bestRace.toFixed(1) + 's' : '');
    if (mEl.innerHTML !== h) mEl.innerHTML = h; mEl.classList.remove('hidden');
  } else mEl.classList.add('hidden');
  mapT -= dt; if (mapT <= 0) { mapT = 0.08; drawMap(); }
}

/* ============================== QUALITY ============================== */
let fpsAcc = 0, fpsN = 0, qualityChecked = save.quality !== 'auto', curQ = 'high';
function applyQuality(q) {
  curQ = q;
  if (q === 'low') { renderer.setPixelRatio(1); sun.castShadow = false; scene.fog.far = 280; }
  else if (q === 'medium') { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25)); sun.castShadow = true; scene.fog.far = 360; }
  else { renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6)); sun.castShadow = true; scene.fog.far = 360; }
  renderer.setSize(window.innerWidth, window.innerHeight);
}
if (save.quality !== 'auto') applyQuality(save.quality);

/* ============================== SCREENS / PHONE ============================== */
function showScreen(id) { for (const s of ['start', 'phone', 'help']) $(s).classList.toggle('hidden', s !== id); }
function refreshStart() {
  $('startInfo').textContent = save.cash || save.coins.length ? `💵 $${save.cash.toLocaleString()} · 🪙 ${save.coins.length}/${COIN_N} coins` : 'Explore the city. Take any car. Get paid.';
  $('muteBtn').textContent = save.muted ? '🔇 SOUND OFF' : '🔊 SOUND ON';
}
function startPlay() {
  initAudio(); SFX.click(); state = 'play'; showScreen(null); $('hud').classList.remove('hidden');
  if (!save.tut) $('tut').classList.remove('hidden');
  if (P.car) engineOn(); hudDirty = true;
}
function closeTut() { $('tut').classList.add('hidden'); save.tut = true; persist(); }
function openPhone() { if (state !== 'play') return; state = 'phone'; engineOff(); renderPhone(); showScreen('phone'); persist(); }
function closePhone() { state = 'play'; showScreen(null); if (P.car) engineOn(); }
function renderPhone() {
  $('pCash').textContent = '$' + save.cash.toLocaleString();
  $('pMission').innerHTML = M ? '<div class="item"><div class="nm">' + (M.type === 'deliver' ? '📦 Delivery in progress' : '🏁 Race in progress') + '</div><button data-act="cancel" class="go" style="background:#ff6b6b;color:#2b0000">CANCEL</button></div>' : '';
  let h = '';
  for (const k in CARS) {
    const c = CARS[k], own = save.owned.includes(k);
    h += '<div class="item"><div class="sw" style="background:#' + c.color.toString(16).padStart(6, '0') + '"></div><div class="nm">' + c.name + '<small>Top speed ' + Math.round(c.max * 3.6) + ' km/h</small></div>' +
      (own ? '<button class="go" data-call="' + k + '">CALL</button>' : '<button data-buy="' + k + '" ' + (save.cash < c.cost ? 'disabled' : '') + '>$' + c.cost.toLocaleString() + '</button>') + '</div>';
  }
  $('garage').innerHTML = h;
  $('stats').innerHTML = '🪙 Coins found: ' + save.coins.length + '/' + COIN_N + '<br>📦 Deliveries: ' + save.deliveries + '<br>🏁 Races finished: ' + save.races +
    '<br>⏱️ Best race: ' + (save.bestRace ? save.bestRace.toFixed(1) + 's' : '—') + '<br><span style="opacity:.6">v' + VERSION + '</span>';
  $('pMute').textContent = save.muted ? '🔇 Sound off' : '🔊 Sound on';
  $('pQuality').textContent = '✨ Graphics: ' + ({ auto: 'Auto (' + curQ + ')', high: 'High', medium: 'Medium', low: 'Low' })[save.quality];
}
function callCar(k) {
  if (P.car && P.car === myCar) { toast('Get out of your car first'); return; }
  const fp = focusPos();
  const ix = clamp(Math.round((fp.x + HALF) / CELL), 0, N), iz = clamp(Math.round((fp.z + HALF) / CELL), 0, N);
  const dx = Math.abs(fp.x - road(ix)), dz = Math.abs(fp.z - road(iz));
  let x, z, yaw;
  if (dx < dz) { const sd = Math.sign(fp.x - road(ix)) || 1; x = road(ix) + 4.9 * sd; z = clamp(fp.z, -HALF + 10, HALF - 10); yaw = sd > 0 ? Math.PI : 0; }
  else { const sd = Math.sign(fp.z - road(iz)) || 1; z = road(iz) + 4.9 * sd; x = clamp(fp.x, -HALF + 10, HALF - 10); yaw = sd > 0 ? Math.PI / 2 : -Math.PI / 2; }
  if (myCar && myCar !== P.car) removeVehicle(myCar);
  for (const v of [...vehicles]) if (v.ai && Math.hypot(v.pos.x - x, v.pos.z - z) < 7) initAI(v);
  myCar = spawnVehicle(k, undefined, x, z, yaw, false); myCar.owned = true; save.car = k; persist();
  toast('🚗 ' + CARS[k].name + ' is here!', '#7af0ff'); closePhone();
}
$('phone').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return; initAudio(); SFX.click();
  if (b.dataset.buy) { const k = b.dataset.buy; if (save.cash >= CARS[k].cost) { save.cash -= CARS[k].cost; save.owned.push(k); persist(); SFX.cash(); hudDirty = true; renderPhone(); } }
  else if (b.dataset.call) callCar(b.dataset.call);
  else if (b.dataset.act === 'cancel') { endMission(); renderPhone(); }
});
$('playBtn').onclick = startPlay;
$('helpBtn').onclick = () => { SFX.click(); showScreen('help'); $('helpBack').dataset.back = 'start'; };
$('pHelp').onclick = () => { showScreen('help'); $('helpBack').dataset.back = 'phone'; };
$('helpBack').onclick = () => { showScreen($('helpBack').dataset.back === 'phone' ? 'phone' : 'start'); };
$('muteBtn').onclick = () => { save.muted = !save.muted; persist(); initAudio(); if (save.muted) stopAmbience(); refreshStart(); };
$('pMute').onclick = () => { save.muted = !save.muted; if (save.muted) stopAmbience(); else initAudio(); persist(); renderPhone(); };
$('pQuality').onclick = () => { const order = ['auto', 'high', 'medium', 'low']; save.quality = order[(order.indexOf(save.quality) + 1) % 4]; qualityChecked = true; applyQuality(save.quality === 'auto' ? 'high' : save.quality); persist(); renderPhone(); };
$('pRespawn').onclick = () => { if (P.car) toggleCar(); P.pos.copy(SPAWN); P.vel.set(0, 0, 0); camTarget.copy(P.pos); closePhone(); toast('📍 Back at the start'); };
$('pClose').onclick = closePhone;
$('menuBtn').addEventListener('pointerdown', (e) => { e.stopPropagation(); openPhone(); });
document.addEventListener('visibilitychange', () => { if (document.hidden) { persist(); if (state === 'play') openPhone(); } });
window.addEventListener('pagehide', persist);
function onResize() { renderer.setSize(window.innerWidth, window.innerHeight); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); }
window.addEventListener('resize', onResize); window.addEventListener('orientationchange', () => setTimeout(onResize, 250));

/* ============================== LOOP ============================== */
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  let rawDt = (now - last) / 1000; last = now; if (!(rawDt > 0)) rawDt = 0;
  const dt = Math.min(rawDt, 0.05);
  try {
    if (state === 'play') {
      clock += dt;
      updateTrafficLights(clock);
      for (const v of vehicles) if (v.ai && v !== P.car) updateAI(v, dt);
      if (P.car) updateCar(P.car, dt); else updateFoot(dt);
      for (const v of vehicles) {
        if (!v.ai && v !== P.car && Math.abs(v.speed) > 0.05) { v.speed *= (1 - 2 * dt); v.pos.x += Math.sin(v.yaw) * v.speed * dt; v.pos.z += Math.cos(v.yaw) * v.speed * dt; }
        syncVehicle(v, dt);
      }
      for (const p of peds) updatePed(p, dt);
      updateMissions(dt);
      updateHUD(dt);
      if (clock - lastSave > 6) { lastSave = clock; persist(); }
      if (!qualityChecked && clock > 2) { fpsAcc += rawDt; fpsN++; if (fpsAcc > 4) { const fps = fpsN / fpsAcc; qualityChecked = true; if (fps < 24) applyQuality('low'); else if (fps < 38) applyQuality('medium'); } }
    } else {
      clock += dt * 0.5;
      if (state === 'start') camYaw += dt * 0.06;
      updateTrafficLights(clock);
      for (const v of vehicles) { if (v.ai) updateAI(v, dt); syncVehicle(v, dt); }
      for (const p of peds) updatePed(p, dt);
    }
    const cp = camera.position;
    poseAndWrite(P.person, dt);
    for (const p of peds) { const d2 = (p.pos.x - cp.x) ** 2 + (p.pos.z - cp.z) ** 2; if (d2 < 120 * 120 || ((frameN + p.idx) & 3) === 0) poseAndWrite(p, d2 < 120 * 120 ? dt : dt * 4); }
    for (const c of crowd) c.im.instanceMatrix.needsUpdate = true;
    frameN++;
    updateCamera(dt);
    renderer.render(scene, camera);
  } catch (err) { console.error(err); }
}
P.person.pos.copy(P.pos); P.person.yaw = P.yaw;
for (const p of peds) poseAndWrite(p, 0);
for (const c of crowd) c.im.instanceColor.needsUpdate = true;
camTarget.set(P.pos.x, P.pos.y + 1.55, P.pos.z);
$('ver').textContent = 'v' + VERSION;
refreshStart();
state = 'start'; showScreen('start');
$('loading').classList.add('hidden');
requestAnimationFrame(frame);
window.__SR = { P, get M() { return M; }, save, vehicles, peds, VERSION, jobSpots, raceStart, toggleCar, get nearCar() { return nearCar; }, get state() { return state; }, joy, btn, coinMeshes, renderer, camera, setCam: (y, p) => { camYaw = y; camPitch = p; } };
