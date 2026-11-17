import * as THREE from '../lib/three.module.js';

const VERSION = '2.0.0';
const SAVE_KEY = 'streetrush_city_v1';
const $ = (id) => document.getElementById(id);

/* ============================== SAVE ============================== */
const DEFAULT_SAVE = { cash: 0, coins: [], owned: ['sedan'], deliveries: 0, races: 0, bestRace: 0, muted: false, tut: false, pos: null, car: 'sedan' };
function loadSave() {
  const d = JSON.parse(JSON.stringify(DEFAULT_SAVE));
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (s && typeof s === 'object') Object.assign(d, s);
    if (!Array.isArray(d.coins)) d.coins = [];
    if (!Array.isArray(d.owned) || !d.owned.length) d.owned = ['sedan'];
  } catch (e) {}
  return d;
}
const save = loadSave();
function persist() {
  try {
    if (P && P.pos) { const p = P.car ? P.car.pos : P.pos; save.pos = { x: +p.x.toFixed(1), z: +p.z.toFixed(1) }; }
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch (e) {}
}

/* ============================== RNG / MATH ============================== */
function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const R = mulberry(20261116);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
function angLerp(a, b, t) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * t; }

/* ============================== CITY LAYOUT ============================== */
const BLOCK = 40, ROADW = 12, CELL = BLOCK + ROADW, N = 8, HALF = N * CELL / 2;
const LIMIT = HALF + 34;
const road = (i) => -HALF + i * CELL;              // road center line coordinate
const nodeV = (i, j) => new THREE.Vector3(road(i), 0, road(j));
function groundAt(x, z) {
  const u = x + HALF, w = z + HALF;
  const i = Math.floor(u / CELL), j = Math.floor(w / CELL);
  if (i < 0 || j < 0 || i >= N || j >= N) return 0;
  const ou = u - i * CELL, ow = w - j * CELL;
  return (ou > ROADW / 2 && ou < CELL - ROADW / 2 && ow > ROADW / 2 && ow < CELL - ROADW / 2) ? 0.2 : 0;
}

/* ============================== RENDERER ============================== */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.domElement.id = 'c';
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.body.prepend(renderer.domElement);

const scene = new THREE.Scene();
const FOGC = 0xf0b48e;
scene.fog = new THREE.Fog(FOGC, 80, 330);
{
  const c = document.createElement('canvas'); c.width = 4; c.height = 256; const g = c.getContext('2d');
  const gr = g.createLinearGradient(0, 0, 0, 256);
  gr.addColorStop(0, '#3a5fa8'); gr.addColorStop(0.45, '#8f8fc4'); gr.addColorStop(0.75, '#f0b48e'); gr.addColorStop(1, '#f6c9a0');
  g.fillStyle = gr; g.fillRect(0, 0, 4, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t;
}
const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 600);

scene.add(new THREE.HemisphereLight(0xcfe0ff, 0x6a5040, 1.15));
const sun = new THREE.DirectionalLight(0xffe2bb, 2.1);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -42, right: 42, top: 42, bottom: -42, near: 1, far: 260 });
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.04;
scene.add(sun); scene.add(sun.target);
const SUN_OFF = new THREE.Vector3(70, 110, 45);

/* ============================== TEXTURES ============================== */
function canvasTex(w, h, draw, repeat) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return t;
}
const winTex = canvasTex(256, 256, (g) => {
  const r = mulberry(99);
  g.fillStyle = '#e6e2da'; g.fillRect(0, 0, 256, 256);
  for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
    const lit = r() < 0.22;
    g.fillStyle = lit ? '#ffe2a0' : (r() < 0.5 ? '#5b6f88' : '#4a5a70');
    g.fillRect(x * 32 + 6, y * 32 + 7, 20, 19);
    if (!lit) { g.fillStyle = 'rgba(255,255,255,0.18)'; g.fillRect(x * 32 + 6, y * 32 + 7, 20, 4); }
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(x * 32, y * 32 + 29, 32, 3);
  }
}, true);
const roadTex = canvasTex(64, 256, (g) => {
  const r = mulberry(5);
  g.fillStyle = '#404048'; g.fillRect(0, 0, 64, 256);
  for (let i = 0; i < 900; i++) { const v = 50 + r() * 30 | 0; g.fillStyle = `rgba(${v},${v},${v + 6},0.5)`; g.fillRect(r() * 64, r() * 256, 1.5, 1.5); }
  g.fillStyle = '#f2c230'; g.fillRect(30, 0, 1.6, 256); g.fillRect(32.4, 0, 1.6, 256);
  g.fillStyle = '#e8e8e8';
  for (let y = 0; y < 256; y += 64) { g.fillRect(15, y, 1.5, 34); g.fillRect(47.5, y, 1.5, 34); }
  g.fillRect(2, 0, 1.6, 256); g.fillRect(60.4, 0, 1.6, 256);
}, true);

/* ============================== GEOMETRY MERGE HELPERS ============================== */
function newBatch() { return { pos: [], nor: [], uv: [], col: [] }; }
const tmpC = new THREE.Color();
// Adds a box to two batches: walls (with window uv scale) and caps (top/bottom)
function addBox(walls, caps, x, y, z, w, h, d, color, uvScale) {
  const b = new THREE.BoxGeometry(w, h, d).toNonIndexed(); b.translate(x, y + h / 2, z);
  const p = b.attributes.position.array, n = b.attributes.normal.array, u = b.attributes.uv.array;
  tmpC.set(color);
  for (let f = 0; f < 6; f++) {
    const ny = n[f * 18 + 1];
    const tgt = (Math.abs(ny) > 0.5 || !walls) ? caps : walls;
    const capShade = ny > 0.5 ? 0.82 : 1;
    for (let k = 0; k < 6; k++) {
      const i = f * 6 + k;
      tgt.pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
      tgt.nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      let uu = u[i * 2], vv = u[i * 2 + 1];
      if (tgt === walls && uvScale) { const fw = Math.abs(n[i * 3]) > 0.5 ? d : w; uu *= fw / uvScale; vv *= h / uvScale; }
      tgt.uv.push(uu, vv);
      tgt.col.push(tmpC.r * capShade, tmpC.g * capShade, tmpC.b * capShade);
    }
  }
  b.dispose();
}
function batchMesh(bt, mat) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(bt.pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(bt.nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(bt.uv, 2));
  g.setAttribute('color', new THREE.Float32BufferAttribute(bt.col, 3));
  g.computeBoundingSphere(); g.computeBoundingBox();
  const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; return m;
}

/* ============================== COLLISION GRID ============================== */
const GS = 26, GRID = new Map();
function addAABB(minX, maxX, minZ, maxZ, h) {
  const b = { minX, maxX, minZ, maxZ, h };
  for (let gx = Math.floor(minX / GS); gx <= Math.floor(maxX / GS); gx++)
    for (let gz = Math.floor(minZ / GS); gz <= Math.floor(maxZ / GS); gz++) {
      const k = gx + ',' + gz; if (!GRID.has(k)) GRID.set(k, []); GRID.get(k).push(b);
    }
  return b;
}
function nearby(x, z, r) {
  const out = [];
  for (let gx = Math.floor((x - r) / GS); gx <= Math.floor((x + r) / GS); gx++)
    for (let gz = Math.floor((z - r) / GS); gz <= Math.floor((z + r) / GS); gz++) {
      const a = GRID.get(gx + ',' + gz); if (a) for (const b of a) out.push(b);
    }
  return out;
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

/* ============================== BUILD CITY ============================== */
const wallMat = new THREE.MeshLambertMaterial({ map: winTex, vertexColors: true });
const capMat = new THREE.MeshLambertMaterial({ vertexColors: true });
const walls = newBatch(), caps = newBatch(), flat = newBatch();
const BCOL = ['#d9cfc1', '#b8c4d6', '#c9b29b', '#a9b8a2', '#e0d6e8', '#9fb3c8', '#d8aa9c', '#c4c4c4', '#e8dcc0', '#a6a0c8'];
const parks = [], blocksInfo = [];
const treeSpots = [];

// ground
{
  const g = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400), new THREE.MeshLambertMaterial({ color: 0x6f8f4f }));
  g.rotation.x = -Math.PI / 2; g.receiveShadow = true; scene.add(g);
  // outer asphalt pad under city
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(N * CELL + ROADW + 8, N * CELL + ROADW + 8), new THREE.MeshLambertMaterial({ color: 0x8a8580 }));
  pad.rotation.x = -Math.PI / 2; pad.position.y = 0.005; pad.receiveShadow = true; scene.add(pad);
}
// roads
{
  const LEN = N * CELL + ROADW;
  const rt = roadTex.clone(); rt.needsUpdate = true; rt.repeat.set(1, LEN / 16);
  const rm = new THREE.MeshLambertMaterial({ map: rt });
  for (let i = 0; i <= N; i++) {
    const a = new THREE.Mesh(new THREE.PlaneGeometry(ROADW, LEN), rm);
    a.rotation.x = -Math.PI / 2; a.position.set(road(i), 0.02, 0); a.receiveShadow = true; scene.add(a);
    const b = new THREE.Mesh(new THREE.PlaneGeometry(ROADW, LEN), rm);
    b.rotation.x = -Math.PI / 2; b.rotation.z = Math.PI / 2; b.position.set(0, 0.03, road(i)); b.receiveShadow = true; scene.add(b);
  }
  // intersections + crosswalks
  const im = new THREE.MeshLambertMaterial({ color: 0x45454d });
  const cw = new THREE.MeshLambertMaterial({ color: 0xe8e8e8 });
  const ig = new THREE.PlaneGeometry(ROADW, ROADW), sg = new THREE.PlaneGeometry(0.8, 3);
  const inst = new THREE.InstancedMesh(ig, im, (N + 1) * (N + 1)); let k = 0;
  const stripes = new THREE.InstancedMesh(sg, cw, (N + 1) * (N + 1) * 4 * 6); let s = 0;
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    e.set(-Math.PI / 2, 0, 0); q.setFromEuler(e);
    m4.compose(new THREE.Vector3(road(i), 0.04, road(j)), q, new THREE.Vector3(1, 1, 1)); inst.setMatrixAt(k++, m4);
    for (let side = 0; side < 4; side++) {
      const ax = side < 2; const sg2 = side % 2 ? 1 : -1;
      for (let t = 0; t < 6; t++) {
        const off = -5 + t * 2;
        let px, pz, rz;
        if (ax) { px = road(i) + off; pz = road(j) + sg2 * (ROADW / 2 + 1.8); rz = 0; }
        else { px = road(i) + sg2 * (ROADW / 2 + 1.8); pz = road(j) + off; rz = Math.PI / 2; }
        e.set(-Math.PI / 2, 0, rz); q.setFromEuler(e);
        m4.compose(new THREE.Vector3(px, 0.045, pz), q, new THREE.Vector3(1, 1, 1)); stripes.setMatrixAt(s++, m4);
      }
    }
  }
  inst.receiveShadow = true; stripes.receiveShadow = true; stripes.count = s;
  scene.add(inst); scene.add(stripes);
}
// blocks
for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
  const x0 = road(i) + ROADW / 2, z0 = road(j) + ROADW / 2;
  const cx = x0 + BLOCK / 2, cz = z0 + BLOCK / 2;
  addBox(null, flat, cx, 0, cz, BLOCK, 0.2, BLOCK, '#bdb6ae');
  addBox(null, flat, cx, 0.2, cz, BLOCK - 0.6, 0.005, BLOCK - 0.6, '#cfc8c0');
  const d = Math.max(Math.abs(cx), Math.abs(cz)) / HALF;
  const isPark = (R() < 0.13 && d > 0.2) || (i === 3 && j === 4);
  blocksInfo.push({ i, j, cx, cz, park: isPark });
  if (isPark) {
    parks.push({ cx, cz });
    addBox(null, flat, cx, 0.2, cz, BLOCK - 5, 0.03, BLOCK - 5, '#5f9a45');
    // paths
    addBox(null, flat, cx, 0.2, cz, 3, 0.04, BLOCK - 5, '#d9c9a8');
    addBox(null, flat, cx, 0.2, cz, BLOCK - 5, 0.04, 3, '#d9c9a8');
    // fountain
    addBox(null, flat, cx, 0.2, cz, 5, 0.6, 5, '#cfcfd4'); addBox(null, flat, cx, 0.2, cz, 4, 0.7, 4, '#4fa3d9');
    addAABB(cx - 2.5, cx + 2.5, cz - 2.5, cz + 2.5, 0.8);
    for (let t = 0; t < 12; t++) {
      const tx = cx + (R() - 0.5) * (BLOCK - 9), tz = cz + (R() - 0.5) * (BLOCK - 9);
      if (Math.abs(tx - cx) < 3.5 || Math.abs(tz - cz) < 3.5) continue;
      treeSpots.push([tx, tz, 0.8 + R() * 0.6]);
    }
    continue;
  }
  const H = 7 + 70 * Math.pow(1 - d, 1.6);
  const area = BLOCK - 6.5;
  if (R() < 0.22) {
    const w = 26 + R() * 4, dd = 26 + R() * 4, h = 10 + R() * H * 1.2;
    const c = BCOL[R() * BCOL.length | 0];
    addBox(walls, caps, cx, 0.2, cz, w, h, dd, c, 24);
    if (h > 30) addBox(walls, caps, cx, 0.2 + h, cz, w * 0.6, h * 0.25, dd * 0.6, c, 24);
    addBox(null, caps, cx + (R() - 0.5) * w * 0.4, 0.2 + h, cz + (R() - 0.5) * dd * 0.4, 3, 1.6, 3, '#8a8a90');
    addAABB(cx - w / 2, cx + w / 2, cz - dd / 2, cz + dd / 2, h);
  } else {
    const lot = area / 2;
    for (let a = 0; a < 2; a++) for (let b = 0; b < 2; b++) {
      const lx = cx - area / 2 + lot * (a + 0.5), lz = cz - area / 2 + lot * (b + 0.5);
      const w = 11 + R() * (lot - 12), dd = 11 + R() * (lot - 12);
      const h = 5 + Math.pow(R(), 1.5) * H;
      const c = BCOL[R() * BCOL.length | 0];
      addBox(walls, caps, lx, 0.2, lz, w, h, dd, c, 24);
      if (R() < 0.6) addBox(null, caps, lx + (R() - 0.5) * w * 0.5, 0.2 + h, lz + (R() - 0.5) * dd * 0.5, 2.5, 1.4, 2.5, '#8f8f96');
      // awning at street level
      if (R() < 0.5) addBox(null, caps, lx, 3.2, lz, w + 0.8, 0.25, dd + 0.8, ['#c0392b', '#2d6a4f', '#264653', '#e76f51'][R() * 4 | 0]);
      addAABB(lx - w / 2, lx + w / 2, lz - dd / 2, lz + dd / 2, h);
    }
  }
  // sidewalk trees
  for (let s = 0; s < 4; s++) if (R() < 0.45) {
    const along = (R() - 0.5) * (BLOCK - 12);
    const off = BLOCK / 2 - 1.3;
    const pts = [[cx + along, cz - off], [cx + along, cz + off], [cx - off, cz + along], [cx + off, cz + along]];
    const pt = pts[s]; treeSpots.push([pt[0], pt[1], 0.6]);
  }
}
const cityWalls = batchMesh(walls, wallMat), cityCaps = batchMesh(caps, capMat), cityFlat = batchMesh(flat, capMat);
cityFlat.castShadow = false;
scene.add(cityWalls, cityCaps, cityFlat);
const camBlockers = [cityWalls];

// outskirts trees ring
for (let k = 0; k < 140; k++) {
  const side = k % 4, t = (R() - 0.5) * 2 * (LIMIT + 10), o = LIMIT + 6 + R() * 40;
  const pt = side === 0 ? [t, -o] : side === 1 ? [t, o] : side === 2 ? [-o, t] : [o, t];
  treeSpots.push([pt[0], pt[1], 1 + R()]);
}
// trees (instanced)
{
  const trunkG = new THREE.CylinderGeometry(0.18, 0.25, 2.2, 6); trunkG.translate(0, 1.1, 0);
  const crownG = new THREE.IcosahedronGeometry(1.5, 0); crownG.translate(0, 3.2, 0);
  const trunks = new THREE.InstancedMesh(trunkG, new THREE.MeshLambertMaterial({ color: 0x6b4a2f }), treeSpots.length);
  const crowns = new THREE.InstancedMesh(crownG, new THREE.MeshLambertMaterial({ color: 0xffffff }), treeSpots.length);
  const m = new THREE.Matrix4(), c = new THREE.Color();
  treeSpots.forEach(([x, z, s], k) => {
    const y = groundAt(x, z);
    m.makeScale(s, s, s); m.setPosition(x, y, z); trunks.setMatrixAt(k, m); crowns.setMatrixAt(k, m);
    c.setHSL(0.26 + R() * 0.08, 0.45, 0.32 + R() * 0.12); crowns.setColorAt(k, c);
    addAABB(x - 0.35 * s, x + 0.35 * s, z - 0.35 * s, z + 0.35 * s, 6);
  });
  trunks.castShadow = crowns.castShadow = true; crowns.receiveShadow = true;
  scene.add(trunks, crowns);
}
// street lights (instanced poles) at block corners
{
  const pts = [];
  for (const b of blocksInfo) { const o = BLOCK / 2 - 0.8; pts.push([b.cx - o, b.cz - o], [b.cx + o, b.cz + o]); }
  const poleG = new THREE.CylinderGeometry(0.09, 0.12, 6, 6); poleG.translate(0, 3, 0);
  const lampG = new THREE.BoxGeometry(0.5, 0.25, 0.5); lampG.translate(0, 6.1, 0);
  const poles = new THREE.InstancedMesh(poleG, new THREE.MeshLambertMaterial({ color: 0x33343a }), pts.length);
  const lamps = new THREE.InstancedMesh(lampG, new THREE.MeshBasicMaterial({ color: 0xfff1c4 }), pts.length);
  const m = new THREE.Matrix4();
  pts.forEach(([x, z], k) => { m.makeTranslation(x, 0.2, z); poles.setMatrixAt(k, m); lamps.setMatrixAt(k, m); addAABB(x - 0.15, x + 0.15, z - 0.15, z + 0.15, 6); });
  poles.castShadow = true; scene.add(poles, lamps);
}

/* ============================== CHARACTERS ============================== */
function box(w, h, d, color, mat) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat || new THREE.MeshLambertMaterial({ color })); m.castShadow = true; return m; }
function makePerson(c) {
  const g = new THREE.Group();
  const skin = new THREE.MeshLambertMaterial({ color: c.skin || 0xc68642 });
  const hood = new THREE.MeshLambertMaterial({ color: c.top });
  const pants = new THREE.MeshLambertMaterial({ color: c.pants });
  const legs = [], arms = [];
  for (const s of [-1, 1]) {
    const pivot = new THREE.Group(); pivot.position.set(0.15 * s, 0.9, 0);
    const leg = box(0.22, 0.85, 0.24, 0, pants); leg.position.y = -0.43; pivot.add(leg);
    const shoe = box(0.24, 0.14, 0.36, c.shoe || 0xffffff); shoe.position.set(0, -0.84, 0.05); pivot.add(shoe);
    g.add(pivot); legs.push(pivot);
    const ap = new THREE.Group(); ap.position.set(0.36 * s, 1.55, 0);
    const arm = box(0.18, 0.7, 0.2, 0, hood); arm.position.y = -0.33; ap.add(arm);
    const hand = box(0.16, 0.16, 0.16, 0, skin); hand.position.y = -0.73; ap.add(hand);
    g.add(ap); arms.push(ap);
  }
  const torso = box(0.6, 0.75, 0.34, 0, hood); torso.position.y = 1.27; g.add(torso);
  const head = box(0.4, 0.42, 0.4, 0, skin); head.position.y = 1.88; g.add(head);
  const hair = box(0.42, 0.14, 0.42, 0x2b1a10); hair.position.y = 2.1; g.add(hair);
  if (c.cap) { const cap = box(0.44, 0.12, 0.44, c.cap); cap.position.y = 2.16; g.add(cap); const brim = box(0.4, 0.05, 0.25, c.cap); brim.position.set(0, 2.12, 0.3); g.add(brim); }
  if (c.pack) { const pk = box(0.44, 0.5, 0.2, c.pack); pk.position.set(0, 1.3, -0.25); g.add(pk); }
  const eyes = box(0.3, 0.06, 0.02, 0x111111); eyes.position.set(0, 1.92, 0.205); g.add(eyes);
  return { g, legs, arms };
}

/* ============================== VEHICLES ============================== */
const CARS = {
  sedan: { name: 'City Sedan', cost: 0, max: 27, acc: 15, turn: 1.9, color: 0x3a86ff, body: 'sedan' },
  taxi: { name: 'Taxi', cost: 250, max: 29, acc: 16, turn: 2.0, color: 0xffc300, body: 'sedan', taxi: true },
  van: { name: 'Delivery Van', cost: 400, max: 23, acc: 12, turn: 1.6, color: 0xf1f1f1, body: 'van' },
  sports: { name: 'Sports Coupe', cost: 1000, max: 39, acc: 23, turn: 2.2, color: 0xe63946, body: 'sports' },
  muscle: { name: 'Muscle Car', cost: 1800, max: 43, acc: 25, turn: 1.9, color: 0x1a1a1a, body: 'sports', stripe: 0xffbe0b },
  super: { name: 'Supercar', cost: 3500, max: 54, acc: 32, turn: 2.45, color: 0x39e014, body: 'super' },
};
const TRAFFIC_COLORS = [0x3a86ff, 0xe63946, 0xf1f1f1, 0x2a9d8f, 0x6c757d, 0x1d3557, 0x8338ec, 0xffc300, 0x111111, 0xd4a373];
const glassMat = new THREE.MeshLambertMaterial({ color: 0x1d2633 });
const tireMat = new THREE.MeshLambertMaterial({ color: 0x151515 });
const rimMat = new THREE.MeshLambertMaterial({ color: 0xbfc3c8 });
const headMat = new THREE.MeshBasicMaterial({ color: 0xfff6d5 });
const tailMat = new THREE.MeshBasicMaterial({ color: 0xff2a2a });
const wheelG = new THREE.CylinderGeometry(0.42, 0.42, 0.3, 14); wheelG.rotateZ(Math.PI / 2);
const rimG = new THREE.CylinderGeometry(0.22, 0.22, 0.32, 8); rimG.rotateZ(Math.PI / 2);
function makeCarMesh(spec, color) {
  const g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const paint = new THREE.MeshLambertMaterial({ color });
  const t = spec.body;
  let L = 4.3, W = 2.0, bh = 0.75, by = 0.45, ch = 0.62, cl = 2.2, cz = -0.15, cw = 1.72;
  if (t === 'van') { L = 4.8; bh = 1.9; ch = 0; }
  if (t === 'sports') { L = 4.5; bh = 0.6; by = 0.38; ch = 0.5; cl = 1.9; cz = -0.35; }
  if (t === 'super') { L = 4.6; W = 2.1; bh = 0.55; by = 0.32; ch = 0.45; cl = 1.7; cz = -0.2; }
  const b = box(W, bh, L, 0, paint); b.position.y = by + bh / 2; body.add(b);
  if (ch > 0) {
    const cab = box(cw, ch, cl, 0, glassMat); cab.position.set(0, by + bh + ch / 2, cz); body.add(cab);
    const roof = box(cw - 0.06, 0.08, cl - 0.3, 0, paint); roof.position.set(0, by + bh + ch, cz); body.add(roof);
  } else {
    const ws = box(W - 0.2, 0.7, 0.05, 0, glassMat); ws.position.set(0, by + bh - 0.5, L / 2 + 0.01); body.add(ws);
    for (const s of [-1, 1]) { const sw = box(0.05, 0.55, 0.9, 0, glassMat); sw.position.set(s * (W / 2 + 0.01), by + bh - 0.5, L / 2 - 0.7); body.add(sw); }
  }
  if (spec.stripe) { const st = box(0.5, 0.02, L + 0.02, spec.stripe); st.position.y = by + bh + 0.005; body.add(st); }
  if (spec.taxi) { const sign = box(0.7, 0.25, 0.3, 0xfff3b0); sign.position.set(0, by + bh + ch + 0.17, cz); body.add(sign); }
  if (t === 'super' || t === 'sports') { const sp = box(W * 0.9, 0.08, 0.35, color); sp.position.set(0, by + bh + 0.3, -L / 2 + 0.25); body.add(sp);
    for (const s of [-0.6, 0.6]) { const pole = box(0.08, 0.3, 0.08, 0x222222); pole.position.set(s, by + bh + 0.15, -L / 2 + 0.25); body.add(pole); } }
  for (const s of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.18, 0.05), headMat); hl.position.set(s * (W / 2 - 0.35), by + bh * 0.6, L / 2 + 0.01); body.add(hl);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.05), tailMat); tl.position.set(s * (W / 2 - 0.35), by + bh * 0.65, -L / 2 - 0.01); body.add(tl);
  }
  const bump = box(W + 0.04, 0.22, 0.2, 0x2a2a2a); bump.position.set(0, by + 0.05, L / 2 + 0.02); body.add(bump);
  const bump2 = bump.clone(); bump2.position.z = -L / 2 - 0.02; body.add(bump2);
  const wheels = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const wg = new THREE.Group(); wg.position.set(sx * (W / 2 - 0.12), 0.42, sz * (L / 2 - 0.85));
    const tire = new THREE.Mesh(wheelG, tireMat); tire.castShadow = true; wg.add(tire); wg.add(new THREE.Mesh(rimG, rimMat));
    g.add(wg); wheels.push(wg);
  }
  return { g, body, wheels, L, W };
}
const vehicles = [];
function spawnVehicle(specKey, color, x, z, yaw, ai) {
  const spec = CARS[specKey];
  const m = makeCarMesh(spec, color === undefined ? spec.color : color);
  const v = { spec, key: specKey, mesh: m, pos: new THREE.Vector3(x, 0, z), yaw, speed: 0, ai: null, stun: 0, wait: 0, ghost: 0, steerVis: 0, owned: false };
  m.g.position.copy(v.pos); m.g.rotation.y = yaw; scene.add(m.g);
  vehicles.push(v);
  if (ai) initAI(v);
  return v;
}
function removeVehicle(v) { scene.remove(v.mesh.g); const i = vehicles.indexOf(v); if (i >= 0) vehicles.splice(i, 1); }

/* ---------- traffic AI ---------- */
function rightOf(d) { return new THREE.Vector3(-d.z, 0, d.x); }
function neighbors(i, j) { const o = []; if (i > 0) o.push([i - 1, j]); if (i < N) o.push([i + 1, j]); if (j > 0) o.push([i, j - 1]); if (j < N) o.push([i, j + 1]); return o; }
function setSeg(v) {
  const a = v.ai, A = nodeV(...a.a), B = nodeV(...a.b), d = B.clone().sub(A).normalize(), r = rightOf(d);
  a.mode = 'seg'; a.t = a.t || 0;
  a.p0 = A.clone().addScaledVector(d, 7.5).addScaledVector(r, 3);
  a.p2 = B.clone().addScaledVector(d, -7.5).addScaledVector(r, 3);
  a.p1 = a.p0.clone().lerp(a.p2, 0.5);
  a.len = a.p0.distanceTo(a.p2);
}
function setTurn(v, c) {
  const a = v.ai, A = nodeV(...a.a), B = nodeV(...a.b), C = nodeV(...c);
  const d1 = B.clone().sub(A).normalize(), d2 = C.clone().sub(B).normalize(), r1 = rightOf(d1), r2 = rightOf(d2);
  a.mode = 'turn'; a.t = 0; a.next = c;
  a.p0 = B.clone().addScaledVector(d1, -7.5).addScaledVector(r1, 3);
  a.p2 = B.clone().addScaledVector(d2, 7.5).addScaledVector(r2, 3);
  a.p1 = d1.dot(d2) > 0.9 ? a.p0.clone().lerp(a.p2, 0.5) : B.clone().addScaledVector(r1, 3).addScaledVector(r2, 3);
  a.len = (a.p0.distanceTo(a.p1) + a.p1.distanceTo(a.p2) + a.p0.distanceTo(a.p2)) / 2;
}
function bez(a, t, out) {
  const u = 1 - t;
  out.set(0, 0, 0).addScaledVector(a.p0, u * u).addScaledVector(a.p1, 2 * u * t).addScaledVector(a.p2, t * t); return out;
}
function bezTan(a, t, out) {
  out.copy(a.p1).sub(a.p0).multiplyScalar(2 * (1 - t)).addScaledVector(a.p2.clone().sub(a.p1), 2 * t); return out;
}
function initAI(v, ni, nj) {
  let i = ni ?? (R2() * (N + 1) | 0), j = nj ?? (R2() * (N + 1) | 0);
  const nb = neighbors(i, j); const b = nb[R2() * nb.length | 0];
  v.ai = { a: [i, j], b, t: R2(), cruise: 8 + R2() * 4, spd: 0 };
  setSeg(v); bez(v.ai, v.ai.t, v.pos);
  const tg = bezTan(v.ai, v.ai.t, new THREE.Vector3()); v.yaw = Math.atan2(tg.x, tg.z);
}
const R2 = Math.random;
const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3();
function updateAI(v, dt) {
  const a = v.ai;
  const fwd = _v1.set(Math.sin(v.yaw), 0, Math.cos(v.yaw));
  let desired = a.mode === 'turn' ? a.cruise * 0.65 : a.cruise;
  // obstacle check
  const ents = [];
  ents.push(P.car ? P.car.pos : P.pos);
  for (const o of vehicles) if (o !== v && o !== P.car) ents.push(o.pos);
  let blockedByAI = false;
  for (const e of ents) {
    const dx = e.x - v.pos.x, dz = e.z - v.pos.z;
    const along = dx * fwd.x + dz * fwd.z; if (along <= 0 || along > 11) continue;
    const lat = Math.abs(dx * fwd.z - dz * fwd.x);
    if (lat < 2.0) {
      if (v.ghost > 0 && e !== (P.car ? P.car.pos : P.pos)) continue;
      desired = Math.min(desired, along < 5.5 ? 0 : a.cruise * (along - 5.5) / 6);
      if (e !== (P.car ? P.car.pos : P.pos)) blockedByAI = true;
    }
  }
  if (desired < 0.5 && blockedByAI) { v.wait += dt; if (v.wait > 3) { v.ghost = 2; v.wait = 0; } } else v.wait = 0;
  v.ghost = Math.max(0, v.ghost - dt);
  if (v.stun > 0) { v.stun -= dt; desired = 0; }
  a.spd += (desired - a.spd) * Math.min(1, dt * (desired < a.spd ? 5 : 1.6));
  a.t += a.spd * dt / Math.max(0.5, a.len);
  if (a.t >= 1) {
    if (a.mode === 'seg') {
      const nb = neighbors(...a.b).filter(n => !(n[0] === a.a[0] && n[1] === a.a[1]));
      setTurn(v, nb[R2() * nb.length | 0]);
    } else { a.a = a.b; a.b = a.next; a.t = 0; setSeg(v); }
  }
  const target = bez(a, Math.min(1, a.t), _v2);
  v.pos.lerp(target, Math.min(1, dt * (v.stun > 0 ? 0.5 : 8)));
  const tg = bezTan(a, Math.min(1, a.t), new THREE.Vector3());
  if (tg.lengthSq() > 1e-4) v.yaw = angLerp(v.yaw, Math.atan2(tg.x, tg.z), Math.min(1, dt * 8));
  v.speed = a.spd;
}

/* ============================== WORLD OBJECTS ============================== */
// coins
const COIN_N = 40, coinMeshes = [];
const coinG = new THREE.CylinderGeometry(0.55, 0.55, 0.14, 20); coinG.rotateX(Math.PI / 2);
const coinMat = new THREE.MeshLambertMaterial({ color: 0xffcc00, emissive: 0x6b4a00 });
const coinRng = mulberry(4242);
for (let k = 0; k < COIN_N; k++) {
  let x, z; const r = coinRng();
  const b = blocksInfo[coinRng() * blocksInfo.length | 0];
  if (r < 0.55) { const s = coinRng() * 4 | 0, along = (coinRng() - 0.5) * (BLOCK - 6), off = BLOCK / 2 - 1.8;
    [x, z] = s === 0 ? [b.cx + along, b.cz - off] : s === 1 ? [b.cx + along, b.cz + off] : s === 2 ? [b.cx - off, b.cz + along] : [b.cx + off, b.cz + along]; }
  else if (r < 0.85) { const i = coinRng() * (N + 1) | 0, t = (coinRng() - 0.5) * N * CELL; if (coinRng() < 0.5) [x, z] = [road(i) + (coinRng() < 0.5 ? -3 : 3), t]; else [x, z] = [t, road(i) + (coinRng() < 0.5 ? -3 : 3)]; }
  else { const p = parks.length ? parks[coinRng() * parks.length | 0] : b; x = p.cx + (coinRng() - 0.5) * 24; z = p.cz + 8 * (coinRng() < 0.5 ? -1 : 1); }
  const p = new THREE.Vector3(x, 0, z); resolveCircle(p, 0.8);
  const m = new THREE.Mesh(coinG, coinMat); m.position.set(p.x, groundAt(p.x, p.z) + 1.1, p.z); m.castShadow = true;
  m.visible = !save.coins.includes(k); scene.add(m); coinMeshes.push(m);
}
// markers
function makeBeam(color) {
  const g = new THREE.Group();
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 40, 24, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }));
  beam.position.y = 20; g.add(beam);
  const ring = new THREE.Mesh(new THREE.RingGeometry(2.2, 2.8, 32), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.9 }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.25; g.add(ring);
  g.userData.ring = ring; scene.add(g); return g;
}
const jobSpots = [[3, 3], [5, 2], [2, 6], [6, 5]].map(([i, j]) => new THREE.Vector3(road(i) + ROADW / 2 + 2.2, 0, road(j) + ROADW / 2 + 9));
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
// floating guide arrow
const arrow = new THREE.Group();
{
  const m = new THREE.MeshBasicMaterial({ color: 0xffd60a, fog: false, depthTest: false, transparent: true });
  const c = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.1, 4), m); c.rotation.x = Math.PI / 2; c.position.z = 0.4;
  const s = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.12, 0.8), m); s.position.z = -0.35;
  c.renderOrder = s.renderOrder = 10; arrow.add(c, s); arrow.visible = false; scene.add(arrow);
  arrow.userData.mat = m;
}

/* ============================== PLAYER ============================== */
const SPAWN = new THREE.Vector3(road(4) + ROADW / 2 + 1.6, 0.2, road(4) + ROADW / 2 + 9);
const P = { pos: SPAWN.clone(), vel: new THREE.Vector3(), yaw: 0, onGround: true, car: null, anim: 0, model: makePerson({ top: 0xe63946, pants: 0x2b2d42, cap: 0x1d3557, pack: 0x8d1b25 }) };
scene.add(P.model.g);
if (save.pos && Math.abs(save.pos.x) < LIMIT && Math.abs(save.pos.z) < LIMIT) { P.pos.set(save.pos.x, groundAt(save.pos.x, save.pos.z), save.pos.z); resolveCircle(P.pos, 0.6); }

// starter + parked + traffic cars
let myCar = null;
function spawnStarterCar() {
  myCar = spawnVehicle(save.car && CARS[save.car] && save.owned.includes(save.car) ? save.car : 'sedan', undefined, road(4) + 4.7, road(4) + 24, 0, false);
  myCar.owned = true;
}
spawnStarterCar();
{
  const pr = mulberry(31337);
  for (let k = 0; k < 14; k++) {
    const i = pr() * (N + 1) | 0, j = pr() * N | 0, along = road(j) + ROADW / 2 + 6 + pr() * (BLOCK - 12);
    const side = pr() < 0.5 ? -1 : 1, keys = ['sedan', 'sedan', 'taxi', 'van', 'sports'];
    const key = keys[pr() * keys.length | 0];
    if (pr() < 0.5) spawnVehicle(key, key === 'taxi' ? undefined : TRAFFIC_COLORS[pr() * TRAFFIC_COLORS.length | 0], road(i) + side * 4.7, along, side > 0 ? 0 : Math.PI, false);
    else spawnVehicle(key, key === 'taxi' ? undefined : TRAFFIC_COLORS[pr() * TRAFFIC_COLORS.length | 0], along, road(i) + side * 4.7, side > 0 ? Math.PI / 2 : -Math.PI / 2, false);
  }
  for (let k = 0; k < 24; k++) {
    const keys = ['sedan', 'sedan', 'sedan', 'taxi', 'van', 'sports'];
    const key = keys[R2() * keys.length | 0];
    const v = spawnVehicle(key, key === 'taxi' ? undefined : TRAFFIC_COLORS[R2() * TRAFFIC_COLORS.length | 0], 0, 0, 0, true);
    if (v.pos.distanceTo(P.pos) < 25) initAI(v);
  }
}

/* ============================== AUDIO ============================== */
let AC = null, engine = null;
function initAudio() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } }
  if (AC && AC.state === 'suspended') AC.resume();
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
function noise(dur, vol) {
  if (!AC || save.muted) return;
  try {
    const b = AC.createBuffer(1, AC.sampleRate * dur | 0, AC.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = AC.createBufferSource(), g = AC.createGain(); s.buffer = b; g.gain.value = vol || 0.3; s.connect(g); g.connect(AC.destination); s.start();
  } catch (e) {}
}
const SFX = {
  coin() { tone(988, 0.07, 'square', 0.06); tone(1318, 0.14, 'square', 0.06, null, 0.06); },
  cash() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.12, 'square', 0.06, null, i * 0.07)); },
  jump() { tone(280, 0.16, 'triangle', 0.12, 620); },
  door() { tone(200, 0.08, 'square', 0.08, 120); },
  horn() { tone(392, 0.35, 'sawtooth', 0.08); tone(494, 0.35, 'sawtooth', 0.06); },
  crash() { noise(0.35, 0.35); tone(120, 0.3, 'sawtooth', 0.12, 50); },
  check() { tone(880, 0.1, 'square', 0.07); tone(1320, 0.15, 'square', 0.07, null, 0.08); },
  fail() { tone(300, 0.3, 'sawtooth', 0.08, 120); },
  click() { tone(660, 0.05, 'square', 0.04); },
};
function engineOn() {
  if (!AC || save.muted || engine) return;
  try {
    const o = AC.createOscillator(), o2 = AC.createOscillator(), f = AC.createBiquadFilter(), g = AC.createGain();
    o.type = 'sawtooth'; o2.type = 'square'; f.type = 'lowpass'; f.frequency.value = 500; g.gain.value = 0.0;
    o.connect(f); o2.connect(f); f.connect(g); g.connect(AC.destination); o.start(); o2.start();
    engine = { o, o2, f, g };
  } catch (e) {}
}
function engineOff() { if (engine) { try { engine.o.stop(); engine.o2.stop(); engine.g.disconnect(); } catch (e) {} engine = null; } }
function engineUpdate(speed, thr) {
  if (!engine) return;
  const s = Math.abs(speed), f = 45 + s * 3.2 + thr * 12;
  const t = AC.currentTime;
  engine.o.frequency.setTargetAtTime(f, t, 0.05); engine.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
  engine.g.gain.setTargetAtTime(save.muted ? 0 : 0.035 + Math.min(0.03, s * 0.001), t, 0.1);
}

/* ============================== INPUT ============================== */
const joy = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
const look = { id: null, lx: 0, ly: 0, lastT: -10 };
const keys = {};
const btn = { A: false, B: false };
let camYaw = Math.PI / 4 + Math.PI, camPitch = 0.33, camDist = 7;
camYaw = P.yaw;
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
    camYaw -= dx * 0.0065; camPitch = clamp(camPitch + dy * 0.0045, 0.05, 1.25); look.lastT = clock;
  }
});
function ptrEnd(e) {
  if (e.pointerId === joy.id) { joy.id = null; joy.x = joy.y = 0; joyHome(); }
  if (e.pointerId === look.id) look.id = null;
}
cv.addEventListener('pointerup', ptrEnd); cv.addEventListener('pointercancel', ptrEnd); cv.addEventListener('lostpointercapture', ptrEnd);
function bindBtn(el, down, up) {
  el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); initAudio(); el.classList.add('down'); down && down(); });
  const u = (e) => { el.classList.remove('down'); up && up(); };
  el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('pointerleave', u);
}
bindBtn($('bA'), () => { btn.A = true; if (!P.car) doJump(); }, () => { btn.A = false; });
bindBtn($('bB'), () => { btn.B = true; if (P.car) SFX.horn(); }, () => { btn.B = false; });
bindBtn($('bC'), () => { toggleCar(); });
document.addEventListener('touchmove', (e) => { if (!e.target.closest || !e.target.closest('.scroll')) e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (state !== 'play') { if (e.code === 'Escape' || e.code === 'KeyM') { if (state === 'phone') closePhone(); } return; }
  initAudio();
  if (e.code === 'Space') { btn.A = true; if (!P.car) doJump(); e.preventDefault(); }
  if (e.code === 'KeyE' || e.code === 'KeyF' || e.code === 'Enter') toggleCar();
  if (e.code === 'KeyH') SFX.horn();
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
let state = 'loading', clock = 0, lastSave = 0, toastT = null, shake = 0;
function toast(t, c) { const el = $('toast'); el.textContent = t; el.style.color = c || '#fff'; el.style.opacity = 1; clearTimeout(toastT); toastT = setTimeout(() => el.style.opacity = 0, 1600); }
function addCash(n) { save.cash += n; SFX.cash(); hudDirty = true; persist(); }
function doJump() { if (P.onGround) { P.vel.y = 8.2; P.onGround = false; SFX.jump(); } }
let nearCar = null;
function findNearCar() {
  let best = null, bd = 4.2;
  for (const v of vehicles) { const d = v.pos.distanceTo(P.pos); if (d < bd) { bd = d; best = v; } }
  return best;
}
function toggleCar() {
  if (state !== 'play') return;
  if (P.car) {
    const v = P.car, f = new THREE.Vector3(Math.sin(v.yaw), 0, Math.cos(v.yaw)), r = rightOf(f);
    let out = null;
    for (const side of [-1, 1, -2]) {
      const p = side === -2 ? v.pos.clone().addScaledVector(f, -3.4) : v.pos.clone().addScaledVector(r, side * 2.3);
      const q = p.clone(); resolveCircle(q, 0.5); if (q.distanceTo(p) < 0.3) { out = q; break; }
    }
    if (!out) { out = v.pos.clone().addScaledVector(r, -2.4); resolveCircle(out, 0.5); }
    P.pos.set(out.x, groundAt(out.x, out.z), out.z); P.vel.set(0, 0, 0); P.yaw = v.yaw;
    v.speed = 0; P.car = null; P.model.g.visible = true; engineOff(); SFX.door();
    camDist = 7;
  } else if (nearCar) {
    const v = nearCar; if (v.ai) { v.ai = null; toast('You took the car!', '#ffd60a'); }
    P.car = v; P.model.g.visible = false; SFX.door(); engineOn(); camDist = 10.5;
    camYaw = v.yaw;
  }
  hudDirty = true;
}
function updateFoot(dt) {
  const inp = inputVec();
  const F = _v1.set(Math.sin(camYaw), 0, Math.cos(camYaw)), Rt = rightOf(F);
  const mx = F.x * -inp.y + Rt.x * inp.x, mz = F.z * -inp.y + Rt.z * inp.x;
  const mag = Math.min(1, Math.hypot(mx, mz));
  const sp = (inp.run ? 11 : 6) * mag;
  const tx = mag > 0.05 ? mx / Math.hypot(mx, mz) * sp : 0, tz = mag > 0.05 ? mz / Math.hypot(mx, mz) * sp : 0;
  const k = Math.min(1, dt * (P.onGround ? 12 : 3));
  P.vel.x = lerp(P.vel.x, tx, k); P.vel.z = lerp(P.vel.z, tz, k);
  if (mag > 0.05) P.yaw = angLerp(P.yaw, Math.atan2(mx, mz), Math.min(1, dt * 12));
  P.vel.y -= 24 * dt;
  P.pos.addScaledVector(P.vel, dt);
  const gnd = groundAt(P.pos.x, P.pos.z);
  if (P.pos.y <= gnd) { P.pos.y = gnd; P.vel.y = 0; P.onGround = true; } else if (P.pos.y - gnd > 0.25) P.onGround = false;
  resolveCircle(P.pos, 0.42, P.pos.y);
  // cars push player
  for (const v of vehicles) {
    const dx = P.pos.x - v.pos.x, dz = P.pos.z - v.pos.z, d = Math.hypot(dx, dz);
    if (d < 2.1 && d > 0.001 && P.pos.y < 1.5) { P.pos.x = v.pos.x + dx / d * 2.1; P.pos.z = v.pos.z + dz / d * 2.1; }
  }
  // anim
  const hs = Math.hypot(P.vel.x, P.vel.z);
  P.anim += dt * (4 + hs * 1.3);
  const sw = P.onGround ? Math.sin(P.anim) * Math.min(1, hs / 6) * 0.9 : 0.5;
  const m = P.model;
  m.legs[0].rotation.x = sw; m.legs[1].rotation.x = P.onGround ? -sw : -0.4;
  m.arms[0].rotation.x = -sw * 0.9; m.arms[1].rotation.x = sw * 0.9;
  m.g.position.set(P.pos.x, P.pos.y + (P.onGround ? Math.abs(Math.sin(P.anim)) * 0.05 * Math.min(1, hs / 6) : 0), P.pos.z);
  m.g.rotation.y = P.yaw;
  nearCar = findNearCar();
}
function updateCar(v, dt) {
  const inp = inputVec();
  const thr = -inp.y, steer = inp.x, hb = btn.A;
  const sp = v.spec;
  if (thr > 0.1) { if (v.speed < -0.5) v.speed += 32 * dt * thr; else v.speed += sp.acc * thr * dt * (1 - Math.max(0, v.speed) / sp.max * 0.6); }
  else if (thr < -0.1) { if (v.speed > 0.5) v.speed -= 34 * dt * -thr; else v.speed -= sp.acc * 0.55 * -thr * dt; }
  else v.speed *= (1 - 0.7 * dt);
  if (hb) v.speed *= (1 - 1.6 * dt);
  v.speed = clamp(v.speed, -11, sp.max);
  const turnAmt = steer * sp.turn * Math.min(1, Math.abs(v.speed) / 7) * Math.sign(v.speed) * (hb ? 1.55 : 1) * (1 - Math.min(0.45, Math.abs(v.speed) / sp.max * 0.45));
  v.yaw -= turnAmt * dt;
  const f = _v1.set(Math.sin(v.yaw), 0, Math.cos(v.yaw));
  v.pos.addScaledVector(f, v.speed * dt);
  // collisions with world using 3 circles
  let impact = false;
  for (const off of [-1.45, 0, 1.45]) {
    const c = v.pos.clone().addScaledVector(f, off), before = c.clone();
    if (resolveCircle(c, 1.05, 0.5)) { impact = true; v.pos.add(c.sub(before)); }
  }
  if (impact) { if (Math.abs(v.speed) > 14) { SFX.crash(); shake = 0.35; } v.speed *= Math.abs(v.speed) > 6 ? -0.25 : 0.5; }
  // vs other vehicles
  for (const o of vehicles) {
    if (o === v) continue;
    const dx = o.pos.x - v.pos.x, dz = o.pos.z - v.pos.z, d = Math.hypot(dx, dz);
    if (d < 3.3 && d > 0.01) {
      const push = (3.3 - d);
      o.pos.x += dx / d * push * 0.7; o.pos.z += dz / d * push * 0.7; v.pos.x -= dx / d * push * 0.3; v.pos.z -= dz / d * push * 0.3;
      resolveCircle(o.pos, 1.4, 0.5);
      if (Math.abs(v.speed) > 12) { SFX.crash(); shake = 0.3; }
      if (o.ai) o.stun = 2.5;
      v.speed *= 0.6;
    }
  }
  v.steerVis = lerp(v.steerVis, steer, Math.min(1, dt * 8));
  engineUpdate(v.speed, Math.max(0, thr));
}
function syncVehicle(v, dt) {
  const m = v.mesh; m.g.position.set(v.pos.x, 0, v.pos.z); m.g.rotation.y = v.yaw;
  const roll = v === P.car ? -v.steerVis * Math.min(1, Math.abs(v.speed) / 25) * 0.06 : 0;
  m.body.rotation.z = lerp(m.body.rotation.z, roll, Math.min(1, dt * 6));
  for (let i = 0; i < 4; i++) {
    const w = m.wheels[i]; w.children[0].rotation.x += v.speed * dt / 0.42; w.children[1].rotation.x = w.children[0].rotation.x;
    if (i % 2 === 1) w.rotation.y = v === P.car ? v.steerVis * 0.45 : 0;
  }
}

/* ---------- missions ---------- */
let M = null; // {type:'deliver', dest, time, total} | {type:'race', idx, time}
let raceCooldown = 0, jobCooldown = 0;
function focusPos() { return P.car ? P.car.pos : P.pos; }
function startDelivery(spot) {
  let dest = null;
  for (let tries = 0; tries < 40; tries++) {
    const i = R2() * (N + 1) | 0, j = R2() * N | 0; const along = road(j) + ROADW / 2 + 6 + R2() * (BLOCK - 12); const side = R2() < 0.5 ? -1 : 1;
    const p = R2() < 0.5 ? new THREE.Vector3(road(i) + side * 7.4, 0.2, along) : new THREE.Vector3(along, 0.2, road(i) + side * 7.4);
    resolveCircle(p, 1);
    if (p.distanceTo(spot) > 130) { dest = p; break; }
  }
  if (!dest) dest = nodeV(0, 0);
  const d = dest.distanceTo(spot);
  M = { type: 'deliver', dest, time: Math.round(d / 9 + 18), total: 0 };
  M.total = M.time;
  goalBeam.position.set(dest.x, groundAt(dest.x, dest.z), dest.z); goalBeam.visible = true;
  setBeamColor(goalBeam, 0xff4fa3);
  toast('📦 Deliver the package!', '#ffd60a'); SFX.check();
}
function setBeamColor(b, c) { b.children[0].material.color.setHex(c); b.children[1].material.color.setHex(c); }
function startRace() {
  M = { type: 'race', idx: 0, time: 0 };
  goalBeam.visible = true; setBeamColor(goalBeam, 0x38e07b); nextBeam.visible = true; setBeamColor(nextBeam, 0x38e07b);
  placeRaceBeams();
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
  for (const b of [...jobBeams, raceBeam, goalBeam, nextBeam]) { b.userData.ring.rotation.z += dt; }
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
      if (Math.hypot(fp.x - M.dest.x, fp.z - M.dest.z) < 4) {
        const pay = 60 + Math.round(M.time * 5); save.deliveries++; addCash(pay); toast('✅ Delivered! +$' + pay, '#7dff9b'); endMission(); jobCooldown = 4;
      } else if (M.time <= 0) { toast('⏰ Too slow — delivery failed', '#ff6b6b'); SFX.fail(); endMission(); jobCooldown = 4; }
    } else if (M.type === 'race') {
      M.time += dt;
      const p = raceRoute[M.idx];
      if (Math.hypot(fp.x - p.x, fp.z - p.z) < 7.5) {
        M.idx++; SFX.check();
        if (M.idx >= raceRoute.length) {
          const t = M.time; const first = save.races === 0; const best = !save.bestRace || t < save.bestRace;
          save.races++; if (best) save.bestRace = +t.toFixed(2);
          const pay = (first ? 300 : 120) + (best ? 100 : 0); addCash(pay);
          toast((best ? '🏆 NEW BEST ' : '🏁 FINISHED ') + t.toFixed(1) + 's  +$' + pay, '#7dff9b'); endMission(); raceCooldown = 6;
        } else placeRaceBeams();
      }
      if (!P.car && M) { toast('Race cancelled — you left the car', '#ff6b6b'); SFX.fail(); endMission(); raceCooldown = 4; }
    }
  }
  // arrow to target
  let target = null;
  if (M) target = M.type === 'deliver' ? M.dest : raceRoute[M.idx];
  if (target) {
    arrow.visible = true;
    arrow.position.set(fp.x, (P.car ? 3.4 : P.pos.y + 2.9) + Math.sin(clock * 4) * 0.12, fp.z);
    arrow.rotation.y = Math.atan2(target.x - fp.x, target.z - fp.z);
    arrow.userData.mat.color.setHex(M.type === 'race' ? 0x38e07b : 0xff4fa3);
  } else arrow.visible = false;
  // coins
  for (let k = 0; k < COIN_N; k++) {
    const c = coinMeshes[k]; if (!c.visible) continue;
    c.rotation.y += dt * 3;
    const yy = P.car ? 0.6 : P.pos.y;
    if (Math.hypot(fp.x - c.position.x, fp.z - c.position.z) < (P.car ? 2.8 : 1.4) && Math.abs(c.position.y - 1.1 - yy) < 1.8) {
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
  camTarget.lerp(_v2.set(fp.x, (P.car ? 1.6 : P.pos.y + 1.6), fp.z), Math.min(1, dt * 12));
  if (P.car && clock - look.lastT > 1.6 && Math.abs(P.car.speed) > 2) {
    const want = P.car.speed >= 0 ? P.car.yaw : P.car.yaw;
    camYaw = angLerp(camYaw, want, Math.min(1, dt * 2.2));
    camPitch = lerp(camPitch, 0.28, Math.min(1, dt * 1.5));
  }
  const dist = camDist + (P.car ? Math.min(4, Math.abs(P.car.speed) * 0.08) : 0);
  const cp = Math.cos(camPitch), spch = Math.sin(camPitch);
  const dir = _v1.set(-Math.sin(camYaw) * cp, spch, -Math.cos(camYaw) * cp);
  let d = dist;
  ray.set(camTarget, dir); ray.far = dist;
  const hits = ray.intersectObjects(camBlockers, false);
  if (hits.length) d = Math.max(1.2, hits[0].distance - 0.4);
  camWant.copy(camTarget).addScaledVector(dir, d);
  if (camWant.y < 0.4) camWant.y = 0.4;
  camera.position.copy(camWant);
  if (shake > 0) { camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake; shake = Math.max(0, shake - dt); }
  camera.lookAt(camTarget);
  const fov = P.car ? 62 + Math.min(14, Math.abs(P.car.speed) * 0.3) : 62;
  if (Math.abs(camera.fov - fov) > 0.1) { camera.fov = lerp(camera.fov, fov, Math.min(1, dt * 3)); camera.updateProjectionMatrix(); }
  sun.target.position.set(fp.x, 0, fp.z); sun.position.copy(sun.target.position).add(SUN_OFF);
}

/* ============================== HUD ============================== */
let hudDirty = true;
const mapCv = $('map'), mctx = mapCv.getContext('2d');
let mapT = 0;
function drawMap() {
  const S = 240, c = S / 2, scale = S / 2 / 95;
  const fp = focusPos();
  const a = camYaw, sa = Math.sin(a), ca = Math.cos(a);
  const tm = (x, z) => { const dx = x - fp.x, dz = z - fp.z; const f = dx * sa + dz * ca, r = dx * -ca + dz * sa; return [c - r * scale, c - f * scale]; };
  mctx.clearRect(0, 0, S, S);
  mctx.save(); mctx.beginPath(); mctx.arc(c, c, c, 0, Math.PI * 2); mctx.clip();
  mctx.fillStyle = '#5b7a46'; mctx.fillRect(0, 0, S, S);
  mctx.strokeStyle = '#cfcac2'; mctx.lineWidth = ROADW * scale; mctx.lineCap = 'square';
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
  if (myCar && myCar !== P.car) dot(myCar.pos.x, myCar.pos.z, '#3a86ff', 7, true);
  for (let k = 0; k < COIN_N; k++) { const m = coinMeshes[k]; if (m.visible && m.position.distanceTo(fp) < 60) dot(m.position.x, m.position.z, '#ffcc00', 4, false); }
  // player arrow
  const yaw = P.car ? P.car.yaw : P.yaw, rel = yaw - a;
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
    $('bA').textContent = inCar ? 'BRAKE' : 'JUMP';
    $('bB').textContent = inCar ? 'HORN' : 'RUN';
    $('speed').classList.toggle('hidden', !inCar);
    hudDirty = false;
  }
  const showC = P.car || nearCar;
  const bC = $('bC');
  if (!!showC === bC.classList.contains('hidden')) bC.classList.toggle('hidden', !showC);
  const lbl = P.car ? 'EXIT<br>CAR' : 'ENTER<br>CAR'; if (bC.innerHTML !== lbl) bC.innerHTML = lbl;
  if (P.car) { const s = Math.round(Math.abs(P.car.speed) * 3.6) + ' <small>KM/H</small>'; const el = $('speed'); if (el.innerHTML !== s) el.innerHTML = s; }
  const mEl = $('mission');
  if (M) {
    let h;
    if (M.type === 'deliver') { const d = Math.round(focusPos().distanceTo(M.dest)); h = '<b>' + Math.max(0, M.time).toFixed(0) + 's</b>📦 Deliver to the pink beam · ' + d + 'm'; }
    else h = '<b>' + M.time.toFixed(1) + 's</b>🏁 Checkpoint ' + (M.idx + 1) + '/' + raceRoute.length + (save.bestRace ? ' · Best ' + save.bestRace.toFixed(1) + 's' : '');
    if (mEl.innerHTML !== h) mEl.innerHTML = h; mEl.classList.remove('hidden');
  } else mEl.classList.add('hidden');
  mapT -= dt; if (mapT <= 0) { mapT = 0.08; drawMap(); }
}

/* ============================== SCREENS / PHONE ============================== */
function showScreen(id) { for (const s of ['start', 'phone', 'help']) $(s).classList.toggle('hidden', s !== id); }
function refreshStart() {
  $('startInfo').textContent = save.cash || save.coins.length ? `💵 $${save.cash.toLocaleString()} · 🪙 ${save.coins.length}/${COIN_N} coins` : 'Explore the city. Take any car. Get paid.';
  $('muteBtn').textContent = save.muted ? '🔇 SOUND OFF' : '🔊 SOUND ON';
}
function startPlay() {
  initAudio(); SFX.click(); state = 'play'; showScreen(null); $('hud').classList.remove('hidden');
  if (!save.tut) { $('tut').classList.remove('hidden'); }
  if (P.car) engineOn();
  hudDirty = true;
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
    h += '<div class="item"><div class="sw" style="background:#' + c.color.toString(16).padStart(6, '0') + '"></div><div class="nm">' + c.name +
      '<small>Top speed ' + Math.round(c.max * 3.6) + ' km/h</small></div>' +
      (own ? '<button class="go" data-call="' + k + '">CALL</button>' : '<button data-buy="' + k + '" ' + (save.cash < c.cost ? 'disabled' : '') + '>$' + c.cost.toLocaleString() + '</button>') + '</div>';
  }
  $('garage').innerHTML = h;
  $('stats').innerHTML = '🪙 Coins found: ' + save.coins.length + '/' + COIN_N + '<br>📦 Deliveries: ' + save.deliveries + '<br>🏁 Races finished: ' + save.races +
    '<br>⏱️ Best race: ' + (save.bestRace ? save.bestRace.toFixed(1) + 's' : '—') + '<br><span style="opacity:.6">v' + VERSION + '</span>';
  $('pMute').textContent = save.muted ? '🔇 Sound off' : '🔊 Sound on';
}
function callCar(k) {
  const fp = focusPos();
  // nearest road lane spot
  const ix = Math.round((fp.x + HALF) / CELL), iz = Math.round((fp.z + HALF) / CELL);
  const dx = Math.abs(fp.x - road(clamp(ix, 0, N))), dz = Math.abs(fp.z - road(clamp(iz, 0, N)));
  let x, z, yaw;
  if (dx < dz) { x = road(clamp(ix, 0, N)) + 4.7 * Math.sign(fp.x - road(clamp(ix, 0, N)) || 1); z = clamp(fp.z, -HALF + 8, HALF - 8); yaw = 0; }
  else { z = road(clamp(iz, 0, N)) + 4.7 * Math.sign(fp.z - road(clamp(iz, 0, N)) || 1); x = clamp(fp.x, -HALF + 8, HALF - 8); yaw = Math.PI / 2; }
  if (myCar && myCar !== P.car) removeVehicle(myCar);
  if (P.car && P.car === myCar) { toast('You are already in your car'); return; }
  for (const v of [...vehicles]) if (v.ai && Math.hypot(v.pos.x - x, v.pos.z - z) < 6) initAI(v);
  myCar = spawnVehicle(k, undefined, x, z, yaw, false); myCar.owned = true; save.car = k; persist();
  toast('🚗 ' + CARS[k].name + ' is here!', '#7af0ff');
  closePhone();
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
$('helpBack').onclick = () => { const b = $('helpBack').dataset.back; if (b === 'phone') showScreen('phone'); else { showScreen('start'); } };
$('muteBtn').onclick = () => { save.muted = !save.muted; persist(); initAudio(); refreshStart(); };
$('pMute').onclick = () => { save.muted = !save.muted; persist(); renderPhone(); };
$('pRespawn').onclick = () => { if (P.car) toggleCar(); P.pos.copy(SPAWN); P.vel.set(0, 0, 0); camTarget.copy(P.pos); closePhone(); toast('📍 Back at the start'); };
$('pClose').onclick = closePhone;
$('menuBtn').addEventListener('pointerdown', (e) => { e.stopPropagation(); openPhone(); });
$('tut').addEventListener('pointerdown', closeTut);
document.addEventListener('visibilitychange', () => { if (document.hidden) { persist(); if (state === 'play') openPhone(); } });
window.addEventListener('pagehide', persist);
function onResize() { renderer.setSize(window.innerWidth, window.innerHeight); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); }
window.addEventListener('resize', onResize); window.addEventListener('orientationchange', () => setTimeout(onResize, 250));

/* ============================== LOOP ============================== */
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame);
  let dt = (now - last) / 1000; last = now; if (!(dt > 0)) dt = 0; dt = Math.min(dt, 0.05);
  try {
    if (state === 'play') {
      clock += dt;
      for (const v of vehicles) if (v.ai && v !== P.car) updateAI(v, dt);
      if (P.car) { updateCar(P.car, dt); }
      else updateFoot(dt);
      for (const v of vehicles) {
        if (!v.ai && v !== P.car && Math.abs(v.speed) > 0.05) { v.speed *= (1 - 2 * dt); v.pos.addScaledVector(_v1.set(Math.sin(v.yaw), 0, Math.cos(v.yaw)), v.speed * dt); }
        syncVehicle(v, dt);
      }
      updateMissions(dt);
      updateHUD(dt);
      if (clock - lastSave > 6) { lastSave = clock; persist(); }
    } else {
      clock += dt * 0.3;
      if (state === 'start') { camYaw += dt * 0.08; }
    }
    updateCamera(dt);
    renderer.render(scene, camera);
  } catch (err) { console.error(err); }
}
P.model.g.position.copy(P.pos); P.model.g.rotation.y = P.yaw;
camTarget.set(P.pos.x, P.pos.y + 1.6, P.pos.z);
$('ver').textContent = 'v' + VERSION;
refreshStart();
state = 'start'; showScreen('start');
$('loading').classList.add('hidden');
requestAnimationFrame(frame);
window.__SR = { P, get M() { return M; }, save, vehicles, VERSION, jobSpots, raceStart, toggleCar, get nearCar() { return nearCar; }, get state() { return state; }, joy, btn, coinMeshes };
