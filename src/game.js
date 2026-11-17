import * as THREE from 'three';
import { S, clamp, lerp, angLerp, angDiff, pick, R2, $ } from './state.js';
import {
  renderer, scene, camera, LOC, ramps, coinMeshes, COIN_N, districtAt, DISTRICTS, makeBeam, setBeamColor, makeSign, updateEnvironment, updateTrafficLights,
  clockText, camBlockers, blocksInfo, sideSpot, curbSpot, road, nodeV, neighbors, N, HALF, CELL, ROADW, BLOCK, LIMIT, groundAt, resolveCircle, losClear, CURB, nearestNode, radialTex,
} from './world.js';
import { makePerson, poseAndWrite, flushCrowd, peds, spawnCiv, spawnGang, spawnCop, spawnNPC, removePed, hitPed, knockDown, panic, playerPunchHits, punchTarget, updatePed, manageCrowd, GANGS, LOOKS, alertGang, hideIdx } from './people.js';
import { CARS, vehicles, spawnVehicle, removeVehicle, drive, aiDrive, navPoint, initAI, police, spawnPolice, updateVehicles, updateVehicleVisuals, heli, updateHeli, wreck, damage, smoke, glow } from './vehicles.js';

const VERSION = '4.0.0';
const SAVE_KEY = 'streetrush_city_v2';

/* ============================== SAVE ============================== */
const DEFAULT = {
  cash: 150, xp: 0, coins: [], garage: ['sedan'], discovered: [], props: {}, story: 0, flags: {}, races: {}, stunts: [], ach: [], gangRep: { 3: 0, 4: 0 },
  stranger: 0, skills: { drive: 0, fight: 0, stamina: 0 }, stats: { kos: 0, stolen: 0, stunts: 0, robberies: 0, fares: 0, escapes: 0, races: 0, deliveries: 0, maxStars: 0, maxSpeed: 0, bestDrift: 0 },
  storeCD: {}, muted: false, tut: false, pos: null, gameMin: 15 * 60 + 30, lastSeen: 0, played: 0, quality: 'auto', home: 'safehouse',
};
function loadSave() {
  const d = JSON.parse(JSON.stringify(DEFAULT));
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    if (s && typeof s === 'object') { for (const k in s) if (s[k] !== null && typeof s[k] === 'object' && !Array.isArray(s[k]) && d[k] && typeof d[k] === 'object' && !Array.isArray(d[k])) Object.assign(d[k], s[k]); else d[k] = s[k]; }
    else { // migrate cash/coins from v3 save
      const o = JSON.parse(localStorage.getItem('streetrush_city_v1') || 'null'); if (o) { d.cash += Math.min(o.cash || 0, 5000); d.coins = Array.isArray(o.coins) ? o.coins : []; }
    }
  } catch (e) {}
  return d;
}
const save = S.save = loadSave();
function persist() {
  try {
    if (P) { const p = P.car ? P.car.pos : P.pos; save.pos = { x: +p.x.toFixed(1), z: +p.z.toFixed(1) }; }
    save.gameMin = S.gameMin; save.lastSeen = Date.now();
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch (e) {}
}
S.gameMin = save.gameMin;

/* ============================== AUDIO ============================== */
let AC = null, engine = null, ambience = null, sirenSnd = null, alarmT = 0;
function initAudio() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } }
  if (AC && AC.state === 'suspended') AC.resume();
  if (AC && !ambience && !save.muted) startLoops();
}
function tone(f, dur, type, vol, f2, delay) {
  if (!AC || save.muted) return;
  try { const t = AC.currentTime + (delay || 0), o = AC.createOscillator(), g = AC.createGain(); o.type = type || 'square'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur); g.gain.setValueAtTime(vol || 0.1, t); g.gain.exponentialRampToValueAtTime(0.0008, t + dur); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.02); } catch (e) {}
}
function noise(dur, vol, lp, delay = 0) {
  if (!AC || save.muted) return;
  try { const b = AC.createBuffer(1, AC.sampleRate * dur | 0, AC.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2); const s = AC.createBufferSource(), g = AC.createGain(), f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp || 2000; s.buffer = b; g.gain.value = vol || 0.3; s.connect(f); f.connect(g); g.connect(AC.destination); s.start(AC.currentTime + delay); } catch (e) {}
}
function startLoops() {
  try {
    const len = AC.sampleRate * 4, b = AC.createBuffer(1, len, AC.sampleRate), d = b.getChannelData(0);
    let last = 0; for (let i = 0; i < len; i++) { last = last * 0.985 + (Math.random() * 2 - 1) * 0.015; d[i] = last * 3; }
    const s = AC.createBufferSource(), g = AC.createGain(); s.buffer = b; s.loop = true; g.gain.value = 0.14; s.connect(g); g.connect(AC.destination); s.start(); ambience = { s, g };
    const o = AC.createOscillator(), lfo = AC.createOscillator(), lg = AC.createGain(), sg = AC.createGain(); o.type = 'square'; o.frequency.value = 700; lfo.type = 'square'; lfo.frequency.value = 1.6; lg.gain.value = 180;
    lfo.connect(lg); lg.connect(o.frequency); const f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1600; o.connect(f); f.connect(sg); sg.gain.value = 0; sg.connect(AC.destination); o.start(); lfo.start(); sirenSnd = sg;
  } catch (e) {}
}
function stopLoops() { try { ambience && ambience.s.stop(); } catch (e) {} ambience = null; if (sirenSnd) sirenSnd.gain.value = 0; }
const SFX = {
  coin() { tone(988, 0.07, 'square', 0.05); tone(1318, 0.14, 'square', 0.05, null, 0.06); },
  cash() { [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.12, 'triangle', 0.08, null, i * 0.06)); },
  punch() { noise(0.12, 0.5, 700); tone(90, 0.12, 'sine', 0.25, 50); },
  whoosh() { noise(0.15, 0.1, 2500); },
  hurt() { noise(0.15, 0.3, 500); tone(160, 0.15, 'sawtooth', 0.06, 90); },
  jump() { noise(0.12, 0.08, 900); },
  door() { noise(0.1, 0.25, 600); tone(110, 0.08, 'square', 0.05, 70); },
  horn() { tone(392, 0.4, 'sawtooth', 0.06); tone(466, 0.4, 'sawtooth', 0.05); },
  crash() { noise(0.45, 0.5, 1400); tone(80, 0.3, 'sawtooth', 0.1, 40); },
  check() { tone(880, 0.1, 'triangle', 0.08); tone(1320, 0.15, 'triangle', 0.08, null, 0.08); },
  fail() { tone(300, 0.35, 'sawtooth', 0.07, 110); },
  click() { tone(660, 0.05, 'triangle', 0.05); },
  ping() { tone(1200, 0.08, 'sine', 0.08); tone(1600, 0.12, 'sine', 0.08, null, 0.09); },
  yelp() { tone(700 + Math.random() * 300, 0.18, 'triangle', 0.035, 450); },
  star() { tone(520, 0.12, 'square', 0.06); tone(390, 0.2, 'square', 0.06, null, 0.12); },
  lost() { [523, 659, 784].forEach((f, i) => tone(f, 0.15, 'triangle', 0.08, null, i * 0.1)); },
  rank() { [392, 523, 659, 784, 1046].forEach((f, i) => tone(f, 0.22, 'square', 0.06, null, i * 0.09)); },
  pass() { [523, 659, 784, 1046, 784, 1046].forEach((f, i) => tone(f, 0.2, 'triangle', 0.09, null, i * 0.11)); },
  bust() { [400, 300, 200].forEach((f, i) => tone(f, 0.3, 'sawtooth', 0.07, null, i * 0.2)); },
  cheer() { for (let i = 0; i < 6; i++) noise(0.4, 0.06, 3000, i * 0.05); },
  alarm() { tone(950, 0.25, 'square', 0.05); tone(750, 0.25, 'square', 0.05, null, 0.25); },
  nitro() { noise(0.6, 0.15, 3000); },
};
function engineOn() {
  if (!AC || save.muted || engine) return;
  try { const o = AC.createOscillator(), o2 = AC.createOscillator(), f = AC.createBiquadFilter(), g = AC.createGain(); o.type = 'sawtooth'; o2.type = 'triangle'; f.type = 'lowpass'; f.frequency.value = 380; g.gain.value = 0; o.connect(f); o2.connect(f); f.connect(g); g.connect(AC.destination); o.start(); o2.start(); engine = { o, o2, f, g }; } catch (e) {}
}
function engineOff() { if (engine) { try { engine.o.stop(); engine.o2.stop(); engine.g.disconnect(); } catch (e) {} engine = null; } }
function engineUpdate(speed, thr, nitro) {
  if (!engine) return;
  const s = Math.abs(speed), gear = Math.min(5, Math.floor(s / 10)), rpm = (s - gear * 10) / 10, f = 40 + rpm * 60 + gear * 7 + thr * 8, t = AC.currentTime;
  engine.o.frequency.setTargetAtTime(f, t, 0.05); engine.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
  engine.f.frequency.setTargetAtTime(300 + thr * 600 + s * 9 + (nitro ? 900 : 0), t, 0.08);
  engine.g.gain.setTargetAtTime(save.muted ? 0 : 0.05 + thr * 0.035, t, 0.1);
}

/* ============================== HUD HELPERS ============================== */
function toast(t, c, dur = 2200) {
  const box = $('toasts'); const el = document.createElement('div'); el.className = 'toast'; el.textContent = t; if (c) el.style.color = c;
  box.prepend(el); while (box.children.length > 3) box.lastChild.remove();
  setTimeout(() => { el.style.transition = 'opacity .4s'; el.style.opacity = 0; setTimeout(() => el.remove(), 420); }, dur);
}
let bigT = null;
function bigMsg(t, s, color = '#ffd60a', dur = 2600) { const b = $('big'); b.querySelector('.t').textContent = t; b.querySelector('.t').style.color = color; b.querySelector('.s').textContent = s || ''; b.style.opacity = 1; clearTimeout(bigT); bigT = setTimeout(() => b.style.opacity = 0, dur); }
const dlgQ = []; let dlgT = 0;
function say(lines) { for (const l of lines) dlgQ.push(l); if (!dlgT) nextDialog(); }
function nextDialog() {
  const l = dlgQ.shift(); const el = $('dialog');
  if (!l) { el.classList.add('hidden'); dlgT = 0; return; }
  el.querySelector('.av').textContent = l[0]; el.querySelector('.who').textContent = l[1]; el.querySelector('.txt').textContent = l[2]; el.classList.remove('hidden');
  dlgT = Math.max(2.6, l[2].length * 0.055); SFX.ping();
}
$('dialog').addEventListener('pointerdown', (e) => { e.stopPropagation(); nextDialog(); });
let choiceCb = null;
function choose(opts, cb) {
  const el = $('choices'); el.innerHTML = ''; choiceCb = cb;
  opts.forEach((o, i) => { const b = document.createElement('button'); b.textContent = o; b.addEventListener('pointerdown', (e) => { e.stopPropagation(); el.classList.add('hidden'); const f = choiceCb; choiceCb = null; f && f(i); }); el.appendChild(b); });
  el.classList.remove('hidden');
}
let dmgFlash = 0;
const fmt = (n) => '$' + Math.round(n).toLocaleString();

/* ============================== PROGRESSION ============================== */
const RANKS = [[0, 'Nobody'], [120, 'Street Rat'], [350, 'Hustler'], [700, 'Wheelman'], [1150, 'Enforcer'], [1800, 'Made Man'], [2700, 'Underboss'], [3900, 'Boss'], [5500, 'Kingpin'], [8000, 'Legend']];
const rankOf = (xp) => { let r = 0; for (let i = 0; i < RANKS.length; i++) if (xp >= RANKS[i][0]) r = i; return r; };
function addXP(n) {
  const before = rankOf(save.xp); save.xp += n; const after = rankOf(save.xp);
  if (after > before) { const bonus = after * 250; save.cash += bonus; setTimeout(() => { bigMsg('RANK UP!', 'Rank ' + (after + 1) + ': ' + RANKS[after][1] + '  •  +' + fmt(bonus), '#ffd166', 3200); SFX.rank(); }, 600); refreshBeams(); }
  hudDirty = true;
}
function addCash(n, label, color = '#7dff9b') { save.cash += n; if (label) toast(label + '  +' + fmt(n), color); SFX.cash(); hudDirty = true; }
function skillUp(k, amt) {
  const b = Math.floor(save.skills[k]); save.skills[k] = Math.min(100, save.skills[k] + amt);
  if (Math.floor(save.skills[k] / 10) > Math.floor(b / 10)) toast({ drive: '🚗 Driving', fight: '👊 Fighting', stamina: '🏃 Stamina' }[k] + ' skill up! (' + Math.floor(save.skills[k]) + ')', '#4cc9ff');
}
const ACH = {
  firstSteal: ['🚗', 'Grand Theft Starter', 'Steal your first car'], knock: ['👊', 'Knockout Artist', 'KO 25 people'], fugitive: ['⭐', 'Most Wanted', 'Reach 5 stars'],
  escape: ['💨', 'Slippery', 'Lose a 3+ star wanted level'], stunt: ['🛫', 'Stunt Pilot', 'Land 5 unique stunt jumps'], drift: ['🔥', 'Drift King', 'Earn $150 from one drift'],
  collector: ['🏎️', 'Collector', 'Discover 8 different cars'], coins: ['🪙', 'Treasure Hunter', 'Find all 40 hidden stashes'], business: ['🏢', 'Entrepreneur', 'Own 3 properties'],
  kingpin: ['👑', 'Kingpin', 'Finish Vinny\'s story'], speed: ['⚡', 'Speed Demon', 'Hit 200 km/h'], racer: ['🏁', 'Street Legend', 'Win all of Lucia\'s races'],
  taxi: ['🚕', 'You Talkin\' To Me?', 'Complete 10 taxi fares'], robber: ['💰', 'Stick \'Em Up', 'Rob 5 stores'], ghost: ['👻', 'Ghost Rider', 'Earn The Ghost'], night: ['🌙', 'Night Owl', 'Be out at 3 AM'],
};
function unlock(id) { if (save.ach.includes(id)) return; save.ach.push(id); const a = ACH[id]; setTimeout(() => { toast('🏆 ' + a[1] + ' — ' + a[2], '#ffd166', 3500); SFX.rank(); }, 300); addXP(50); persist(); }

/* ============================== PLAYER ============================== */
const SPAWN = new THREE.Vector3(LOC.safehouse.x, CURB, LOC.safehouse.z);
const P = S.P = { pos: SPAWN.clone(), vel: new THREE.Vector3(), yaw: Math.PI / 2, onGround: true, car: null, hp: 100, lastHit: 0, fighting: 0, combo: 0, comboT: 0, punchCD: 0, down: 0, dead: false, person: null };
P.person = makePerson(0, { skin: '#c68642', top: '#c1121f', sleeve: '#c1121f', pants: '#1b263b', hair: '#1a1110', shoe: '#f4f4f4' }); P.person.scale = 1.02;
if (save.pos && Math.abs(save.pos.x) < LIMIT && Math.abs(save.pos.z) < LIMIT) { P.pos.set(save.pos.x, groundAt(save.pos.x, save.pos.z), save.pos.z); resolveCircle(P.pos, 0.6); }

/* ============================== WANTED / POLICE ============================== */
let heat = 0, evadeT = 0, lastSeen = new THREE.Vector3(), seenT = 0, bustT = 0, policeSpawnT = 0, seenCheckT = 0, peakStars = 0;
function setWanted(n, silent) {
  n = clamp(n, 0, 5);
  if (n > S.wanted) { if (!silent) SFX.star(); evadeT = 0; lastSeen.copy(focusPos()); peakStars = Math.max(peakStars, n); save.stats.maxStars = Math.max(save.stats.maxStars, n); if (n >= 5) unlock('fugitive'); }
  S.wanted = n; hudDirty = true;
}
function copSees(pos, range = 1) {
  for (const p of peds) if (p.kind === 'cop' && p.down <= 0 && p.pos.distanceTo(pos) < 34 * range && losClear(p.pos.x, p.pos.z, pos.x, pos.z)) return true;
  for (const v of police) if (!v.removed && !v.wrecked && !v.ai?.leaving && v.pos.distanceTo(pos) < 48 * range && losClear(v.pos.x, v.pos.z, pos.x, pos.z)) return true;
  for (const v of vehicles) if (v.spec.police && v.ai?.kind === 'traffic' && v.pos.distanceTo(pos) < 40 * range && losClear(v.pos.x, v.pos.z, pos.x, pos.z)) return true;
  if (heli.active && Math.hypot(heli.spot.position.x - pos.x, heli.spot.position.z - pos.z) < 22) return true;
  return false;
}
let snitches = new Set();
const hooks = S.hooks = {
  crime(pos0, level, label, victim) {
    const pos = new THREE.Vector3(pos0.x, 0, pos0.z);
    panic(pos, 22, pos, 4);
    if (MS && MS.noCrime) return;
    if (S.wanted > 0) { heat += level; if (heat >= 4 && S.wanted < 5) { heat = 0; setWanted(S.wanted + 1); toast('🚨 ' + label + '! Heat rising', '#ff6b6b'); } lastSeen.copy(pos); evadeT = 0; return; }
    if (copSees(pos)) { setWanted(level); toast('🚨 ' + label + '! A cop saw that.', '#ff6b6b'); }
  },
  snitch(p) { if (S.wanted > 0) return; snitches.add(p); toast('📞 A witness is calling 911 — stop them!', '#ffbe0b'); },
  snitchDone(p) { if (!snitches.has(p)) return; snitches.delete(p); if (p.down > 0 || p.dead) return; setWanted(Math.max(S.wanted, 1)); toast('🚨 Witness reported you to the police', '#ff6b6b'); },
  playerHit(dmg, from, attacker) { hurtPlayer(dmg, from); },
  copContact(dt, cop, inCar) { bustT += dt * (inCar ? 0.8 : 1.6); },
  copsOut(v) { for (const s of [-1, 1]) { const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw); spawnCop(new THREE.Vector3(v.pos.x - fz * 1.8 * s, 0, v.pos.z + fx * 1.8 * s)); } },
  dropCash(pos, amt) { dropPickup(pos, 'cash', amt); },
  toast,
  carWrecked(v) {
    if (v === P.car) { exitCar(true); hurtPlayer(25, v.pos); toast('🔥 Your car is wrecked!', '#ff6b6b'); }
    if (v.role === 'police') hooks.crime(v.pos, 1, 'Destroying a police car');
    if (MS && MS.onWreck) MS.onWreck(v);
    for (const e of events) if (e.onWreck) e.onWreck(v);
  },
  impact(k, other) {
    shake = Math.max(shake, Math.min(0.6, k * 0.025)); if (k > 9) SFX.crash();
    if (other && other.role === 'police') hooks.crime(other.pos, 1, 'Ramming a police car');
    if (other && other.ai && other.ai.kind === 'traffic' && k > 10) hooks.crime(other.pos, 0, 'Hit and run');
    if (MS && MS.onImpact) MS.onImpact(k, other);
    for (const e of events) if (e.onImpact) e.onImpact(k, other);
  },
  pedHit(p) { SFX.yelp(); addXP(1); },
  ko(p) { if (MS && MS.onKO) MS.onKO(p); for (const e of events) if (e.onKO) e.onKO(p); },
  launched(v, r) { if (v !== P.car) return; stunt = { ramp: r, t: 0, start: v.pos.clone(), maxY: 0 }; S.timeScale = 0.45; SFX.whoosh(); },
  landed(v, airT) {
    if (v !== P.car || !stunt) return;
    const dist = Math.hypot(v.pos.x - stunt.start.x, v.pos.z - stunt.start.z); const r = stunt.ramp; stunt = null; S.timeScale = 1;
    if (!save.stunts.includes(r.id)) { save.stunts.push(r.id); save.stats.stunts++; addCash(250 + Math.round(dist * 4), '🛫 UNIQUE STUNT ' + save.stunts.length + '/' + ramps.length, '#ffd60a'); addXP(25); bigMsg('UNIQUE STUNT!', Math.round(dist) + 'm • ' + airT.toFixed(1) + 's air', '#ffd60a', 2000); if (save.stunts.length >= 5) unlock('stunt'); }
    else addCash(Math.round(dist * 1.5), '🛫 Airtime ' + airT.toFixed(1) + 's', '#ffd60a');
    shake = 0.4;
  },
};
function hurtPlayer(dmg, from) {
  if (P.dead || S.state !== 'play') return;
  P.hp -= dmg; P.lastHit = S.clock; dmgFlash = Math.min(1, dmgFlash + dmg / 25); shake = Math.max(shake, 0.25); SFX.hurt();
  P.person.hitT = 0.3; P.fighting = 3;
  if (from && !P.car) { const dx = P.pos.x - from.x, dz = P.pos.z - from.z, l = Math.hypot(dx, dz) || 1; P.vel.x += dx / l * 3; P.vel.z += dz / l * 3; }
  if (P.hp <= 0) wasted();
  hudDirty = true;
}
function wantedTick(dt) {
  const f = focusPos();
  bustT = Math.max(0, bustT - dt * 0.6);
  if (bustT > 1.4 && !P.dead) { busted(); return; }
  if (S.wanted <= 0) { heli.active = false; return; }
  seenCheckT -= dt;
  if (seenCheckT <= 0) { seenCheckT = 0.25; if (copSees(f)) { seenT = 0.3; lastSeen.copy(f); evadeT = 0; } }
  seenT -= dt;
  const searchR = 40 + S.wanted * 15, outside = f.distanceTo(lastSeen) > searchR;
  if (seenT <= 0) { evadeT += dt * (outside ? 2.2 : 1); const need = 5 + S.wanted * 3.5; if (evadeT > need) loseCops(); }
  heli.active = S.wanted >= 4;
}
function loseCops() {
  const lvl = S.wanted; setWanted(0, true); heat = 0; evadeT = 0; SFX.lost();
  toast('😎 You lost the cops!', '#7af0ff', 2600); save.stats.escapes++; addXP(10 * lvl); if (lvl >= 3) unlock('escape');
  for (const v of police) if (v.ai && !v.ai.target) v.ai.leaving = true;
}
function managePolice(dt) {
  for (let i = police.length - 1; i >= 0; i--) { const v = police[i]; if (v.removed || (v.ai?.leaving && v.pos.distanceTo(focusPos()) > 120) || (v.wrecked && v.pos.distanceTo(focusPos()) > 90)) { if (!v.removed && v !== P.car) removeVehicle(v); police.splice(i, 1); } }
  const want = [0, 1, 2, 3, 4, 6][S.wanted];
  const active = police.filter(v => !v.wrecked && !v.ai?.leaving && !v.ai?.target && v !== P.car).length;
  policeSpawnT -= dt;
  if (active < want && policeSpawnT <= 0) { policeSpawnT = 2.5 - S.wanted * 0.3; const v = spawnPolice(focusPos(), S.wanted >= 5 && R2() < 0.4 ? 'sports' : 'police'); if (v && v.key === 'sports') { v.spec = { ...CARS.police, max: 50, acc: 30 }; } }
  // nearest siren volume
  let nd = 1e9; for (const v of police) if (!v.removed && !v.wrecked && (S.wanted > 0 || v.ai?.target)) nd = Math.min(nd, v.pos.distanceTo(focusPos()));
  if (sirenSnd) sirenSnd.gain.value = save.muted ? 0 : clamp(1 - nd / 110, 0, 1) * 0.05;
}
function busted() {
  if (P.dead) return; P.dead = true; SFX.bust();
  const loss = clamp(Math.round(save.cash * 0.1), 50, 2000); save.cash = Math.max(0, save.cash - loss);
  bigMsg('BUSTED', '-' + fmt(loss) + ' in "legal fees"', '#4da3ff', 3200);
  failMission('You got busted');
  setTimeout(() => respawnAt(LOC.police, 'Released from the station'), 2600);
}
function wasted() {
  if (P.dead) return; P.dead = true; SFX.bust(); if (P.car) exitCar(true);
  P.person.down = 3; P.person.downMax = 3;
  const loss = Math.min(save.cash, 200); save.cash -= loss;
  bigMsg('WASTED', '-' + fmt(loss) + ' hospital bill', '#ff4d5e', 3200);
  failMission('You got wasted');
  setTimeout(() => respawnAt(LOC.hospital, 'Patched up at the hospital'), 2600);
}
function respawnAt(spot, msg) {
  setWanted(0, true); heat = 0; bustT = 0; heli.active = false;
  for (const p of [...peds]) if (p.kind === 'cop') removePed(p);
  for (const v of police) if (v.ai) v.ai.leaving = true;
  engineOff(); P.pos.set(spot.x, CURB, spot.z); P.vel.set(0, 0, 0); P.hp = 100; P.dead = false; P.person.down = 0; P.person.hide = false; P.car = null;
  camTarget.copy(P.pos); toast(msg, '#fff'); hudDirty = true; persist();
}

/* ============================== PICKUPS ============================== */
const pickups = [];
const billTex = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 32; const g = c.getContext('2d'); g.fillStyle = '#5cb85c'; g.fillRect(0, 0, 64, 32); g.fillStyle = '#2d6a4f'; g.fillRect(4, 4, 56, 24); g.fillStyle = '#9be59b'; g.font = 'bold 22px sans-serif'; g.textAlign = 'center'; g.fillText('$', 32, 25); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const billG = new THREE.BoxGeometry(0.5, 0.06, 0.26), billM = new THREE.MeshStandardMaterial({ map: billTex, roughness: 0.6 });
const bagG = new THREE.SphereGeometry(0.42, 12, 10).scale(1, 0.9, 1), bagM = new THREE.MeshStandardMaterial({ color: 0xc9b37e, roughness: 0.9 });
function dropPickup(pos, type, amt, opts = {}) {
  const m = new THREE.Mesh(type === 'bag' ? bagG : billG, type === 'bag' ? bagM : billM); m.castShadow = true;
  const p = { m, type, amt, pos: new THREE.Vector3(pos.x + (R2() - 0.5), 0.2, pos.z + (R2() - 0.5)), vy: 4, t: opts.life || 40, ...opts };
  scene.add(m); pickups.push(p); return p;
}
function updatePickups(dt) {
  const f = focusPos();
  for (let i = pickups.length - 1; i >= 0; i--) {
    const p = pickups[i]; p.t -= dt;
    if (p.vy !== 0) { p.vy -= 15 * dt; p.pos.y += p.vy * dt; const g = groundAt(p.pos.x, p.pos.z) + 0.25; if (p.pos.y < g) { p.pos.y = g; p.vy = 0; } }
    p.m.position.set(p.pos.x, p.pos.y + Math.sin(S.clock * 3 + i) * 0.08, p.pos.z); p.m.rotation.y += dt * 2;
    const d = Math.hypot(f.x - p.pos.x, f.z - p.pos.z);
    if (d < (P.car ? 3 : 1.4) && !P.dead) { addCash(p.amt, p.type === 'bag' ? '💰 Money bag' : '💵 Cash'); scene.remove(p.m); pickups.splice(i, 1); if (p.onGet) p.onGet(p); continue; }
    if (p.t <= 0 && !p.keep) { scene.remove(p.m); pickups.splice(i, 1); }
  }
}

/* ============================== VEHICLE ENTER / EXIT ============================== */
let nearCar = null, alarmCar = null;
function findNearCar() { let best = null, bd = 4.3; for (const v of vehicles) { if (v.wrecked || v.removed) continue; const d = v.pos.distanceTo(P.pos); if (d < bd) { bd = d; best = v; } } return best; }
function enterCar(v) {
  if (v.ai && v.ai.kind === 'traffic' && v.spec.police) { const c = spawnCop(new THREE.Vector3(v.pos.x - Math.cos(v.yaw) * 2, 0, v.pos.z + Math.sin(v.yaw) * 2)); if (c) { c.state = 'fight'; c.target = 'player'; } setWanted(Math.max(S.wanted, 2)); toast('🚨 You jacked a police cruiser!', '#ff6b6b'); }
  else if (v.ai && v.ai.kind === 'traffic') { // carjack!
    const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
    const drv = spawnNPC(LOOKS.civ(), new THREE.Vector3(v.pos.x - fz * 1.9, 0, v.pos.z + fx * 1.9), { state: 'down', pers: R2() < 0.25 ? 'tough' : 'coward', hp: 35 });
    if (drv) { knockDown(drv, 1.6); drv.kind = 'civ'; drv.from = 0; drv.to = 0; drv.onUp = (p) => { if (p.pers !== 'tough') { p.state = 'flee'; p.t = 5; p.fleeFrom = P.pos.clone(); } else toast('😠 "Hey! That\'s MY car!"', '#ffbe0b'); }; }
    hooks.crime(v.pos, 1, 'Carjacking'); save.stats.stolen++; unlock('firstSteal'); addXP(5); SFX.yelp();
  } else if (v.role === 'police' || v.spec.police) { hooks.crime(v.pos, 2, 'Stealing a police car'); setWanted(Math.max(S.wanted, 2)); }
  else if (!v.owned && !v.mission && R2() < 0.25 && !v.alarmDone) { alarmCar = v; alarmT = 6; v.alarmDone = true; toast('🚨 Car alarm!', '#ffbe0b'); hooks.crime(v.pos, 1, 'Car theft'); }
  else if (!v.owned && !v.stolenCounted) { v.stolenCounted = true; save.stats.stolen++; unlock('firstSteal'); }
  v.ai = null; v.role = v.role === 'police' ? 'stolenPolice' : v.role; const pi = police.indexOf(v); if (pi >= 0) police.splice(pi, 1);
  P.car = v; P.person.hide = true; SFX.door(); engineOn(); camDist = 9.5; camYaw = v.yaw;
  if (!save.discovered.includes(v.key)) { save.discovered.push(v.key); toast('🚘 New car: ' + v.spec.name + ' (' + save.discovered.length + '/' + Object.keys(CARS).length + ')', '#7af0ff'); addXP(10); if (save.discovered.length >= 8) unlock('collector'); if (v.key === 'ghost') unlock('ghost'); }
  hudDirty = true;
}
function exitCar(force) {
  const v = P.car; if (!v) return;
  const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw); let out = null;
  for (const side of [1, -1, -2]) {
    const p = side === -2 ? new THREE.Vector3(v.pos.x - fx * 3.5, 0, v.pos.z - fz * 3.5) : new THREE.Vector3(v.pos.x - fz * side * 2.2, 0, v.pos.z + fx * side * 2.2);
    const q = p.clone(); resolveCircle(q, 0.5); if (q.distanceTo(p) < 0.3) { out = q; break; }
  }
  if (!out) { out = new THREE.Vector3(v.pos.x - fz * 2.3, 0, v.pos.z + fx * 2.3); resolveCircle(out, 0.5); }
  P.pos.set(out.x, groundAt(out.x, out.z), out.z); P.vel.set(0, 0, 0); P.yaw = v.yaw;
  const spd = Math.hypot(v.vel.x, v.vel.z);
  P.car = null; P.person.hide = false; engineOff(); SFX.door(); camDist = 5.5; hudDirty = true; P.ignoreCar = v; P.ignoreT = S.clock + 2;
  if (force || spd > 8) { P.person.down = 1.2; P.person.downMax = 1.2; if (spd > 8) { P.vel.set(v.vel.x * 0.4, 2, v.vel.z * 0.4); hurtPlayer(Math.min(20, spd * 0.5)); toast('🤸 Bailed out!', '#fff'); } }
}

/* ============================== INPUT ============================== */
const joy = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
const look = { id: null, lx: 0, ly: 0, lastT: -10 };
const keys = {}, btn = { A: false, B: false, D: false };
let camYaw = Math.PI / 2, camPitch = 0.3, camDist = 5.5, shake = 0;
const joyEl = $('joy'), knobEl = $('knob'), JOY_R = 52;
const cv = renderer.domElement;
cv.addEventListener('pointerdown', (e) => {
  if (S.state !== 'play') return;
  initAudio();
  if (!$('tut').classList.contains('hidden')) { $('tut').classList.add('hidden'); save.tut = true; persist(); }
  if (e.clientX < window.innerWidth * 0.45 && joy.id === null && e.pointerType !== 'mouse') {
    joy.id = e.pointerId; joy.ox = e.clientX; joy.oy = e.clientY; joy.x = joy.y = 0; joyEl.style.left = (e.clientX - 65) + 'px'; joyEl.style.top = (e.clientY - 65) + 'px'; joyEl.style.bottom = 'auto';
  } else if (look.id === null) { look.id = e.pointerId; look.lx = e.clientX; look.ly = e.clientY; }
  try { cv.setPointerCapture(e.pointerId); } catch (_) {}
});
cv.addEventListener('pointermove', (e) => {
  if (e.pointerId === joy.id) { let dx = e.clientX - joy.ox, dy = e.clientY - joy.oy; const l = Math.hypot(dx, dy); if (l > JOY_R) { dx *= JOY_R / l; dy *= JOY_R / l; } joy.x = dx / JOY_R; joy.y = dy / JOY_R; knobEl.style.transform = `translate(${dx}px,${dy}px)`; }
  else if (e.pointerId === look.id) { const dx = e.clientX - look.lx, dy = e.clientY - look.ly; look.lx = e.clientX; look.ly = e.clientY; camYaw -= dx * 0.0065; camPitch = clamp(camPitch + dy * 0.0045, -0.1, 1.25); look.lastT = S.clock; }
});
function ptrEnd(e) { if (e.pointerId === joy.id) { joy.id = null; joy.x = joy.y = 0; joyEl.style.left = joyEl.style.top = joyEl.style.bottom = ''; knobEl.style.transform = ''; } if (e.pointerId === look.id) look.id = null; }
cv.addEventListener('pointerup', ptrEnd); cv.addEventListener('pointercancel', ptrEnd); cv.addEventListener('lostpointercapture', ptrEnd);
function bindBtn(el, down, up) {
  el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); initAudio(); el.classList.add('down'); if (down) down(); });
  const u = () => { el.classList.remove('down'); if (up) up(); }; el.addEventListener('pointerup', u); el.addEventListener('pointercancel', u); el.addEventListener('pointerleave', u);
}
bindBtn($('bA'), () => { btn.A = true; if (!P.car) punch(); }, () => btn.A = false);
bindBtn($('bB'), () => { btn.B = true; if (P.car) honk(); }, () => btn.B = false);
bindBtn($('bD'), () => { btn.D = true; if (!P.car) doJump(); else if (P.car.nitro > 0.1) SFX.nitro(); }, () => btn.D = false);
bindBtn($('bC'), () => contextAction());
document.addEventListener('touchmove', (e) => { if (!e.target.closest || !e.target.closest('.scroll,.tabs')) e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
window.addEventListener('keydown', (e) => {
  keys[e.code] = true;
  if (S.state === 'phone' && (e.code === 'Escape' || e.code === 'KeyM')) { closePhone(); return; }
  if (S.state !== 'play') return; initAudio();
  if (e.code === 'KeyJ' || e.code === 'KeyF') { if (!P.car) punch(); }
  if (e.code === 'Space') { if (!P.car) doJump(); e.preventDefault(); }
  if (e.code === 'KeyE' || e.code === 'Enter') contextAction();
  if (e.code === 'KeyH') honk();
  if (e.code === 'KeyM' || e.code === 'Escape') openPhone();
  if (e.code.startsWith('Arrow')) e.preventDefault();
});
window.addEventListener('keyup', (e) => { keys[e.code] = false; });
function inputVec() {
  let x = joy.x, y = joy.y;
  if (keys.KeyA || keys.ArrowLeft) x -= 1; if (keys.KeyD || keys.ArrowRight) x += 1; if (keys.KeyW || keys.ArrowUp) y -= 1; if (keys.KeyS || keys.ArrowDown) y += 1;
  const l = Math.hypot(x, y); if (l > 1) { x /= l; y /= l; } return { x, y };
}
const focusPos = () => P.car ? P.car.pos : P.pos;

/* ============================== FOOT CONTROL & COMBAT ============================== */
function doJump() { if (P.onGround && P.down <= 0 && !P.dead) { P.vel.y = 6.2; P.onGround = false; SFX.jump(); } }
function honk() { SFX.horn(); const f = focusPos(); for (const p of peds) if (p.kind === 'civ' && p.pos.distanceTo(f) < 16 && R2() < 0.7 && p.state !== 'fight') { p.state = 'flee'; p.t = 1.5; p.fleeFrom = f.clone(); } }
function punch() {
  if (P.punchCD > 0 || P.dead || P.down > 0 || !P.onGround) return;
  const tgt = punchTarget(P); if (tgt) { P.yaw = Math.atan2(tgt.pos.x - P.pos.x, tgt.pos.z - P.pos.z); const d = Math.hypot(tgt.pos.x - P.pos.x, tgt.pos.z - P.pos.z); if (d > 1.0) { const sp = Math.min(10, (d - 0.8) * 8); P.lunge = { x: Math.sin(P.yaw) * sp, z: Math.cos(P.yaw) * sp, t: 0.14 }; } }
  P.combo = S.clock - P.comboT < 0.9 ? (P.combo + 1) % 3 : 0; P.comboT = S.clock;
  P.person.punchT = 0.3; P.person.punchArm = P.combo % 2; P.punchCD = P.combo === 2 ? 0.42 : 0.3; P.fighting = 3;
  P.pendingPunch = 0.12;
}
function resolvePunch() {
  const dmg = (11 + save.skills.fight * 0.12) * (P.combo === 2 ? 1.9 : 1);
  const hit = playerPunchHits(P, dmg);
  if (hit) {
    SFX.punch(); S.hitStop = P.combo === 2 ? 0.09 : 0.05; shake = Math.max(shake, P.combo === 2 ? 0.3 : 0.15); skillUp('fight', 0.35);
    for (let k = 0; k < 6; k++) glow.emit(hit.pos.x, 1.4, hit.pos.z, (R2() - 0.5) * 4, R2() * 3, (R2() - 0.5) * 4, 0.2, 0.25, 1, 0.9, 0.6, -0.5);
    if (hit.down > 0) { save.stats.kos++; addXP(4); if (save.stats.kos >= 25) unlock('knock'); }
  } else SFX.whoosh();
}
function updateFoot(dt) {
  const inp = inputVec(), pp = P.person;
  P.punchCD -= dt; P.fighting = Math.max(0, P.fighting - dt);
  if (P.pendingPunch > 0) { P.pendingPunch -= dt; if (P.pendingPunch <= 0) resolvePunch(); }
  if (pp.down > 0) { pp.down -= dt; P.vel.x *= 0.9; P.vel.z *= 0.9; }
  P.down = pp.down;
  const Fx = Math.sin(camYaw), Fz = Math.cos(camYaw);
  let mx = Fx * -inp.y - Fz * inp.x, mz = Fz * -inp.y + Fx * inp.x;
  if (P.dead || P.down > 0) mx = mz = 0;
  const mag = Math.min(1, Math.hypot(mx, mz)), run = btn.B || keys.ShiftLeft;
  const sp = (run ? 7.2 * (1 + save.skills.stamina * 0.0015) : 3.6) * mag * (pp.punchT > 0 ? 0.3 : 1), hl = Math.hypot(mx, mz) || 1;
  if (run && mag > 0.5) skillUp('stamina', dt * 0.06);
  const k = Math.min(1, dt * (P.onGround ? 10 : 2.5));
  if (P.lunge && P.lunge.t > 0) { P.lunge.t -= dt; P.vel.x = P.lunge.x; P.vel.z = P.lunge.z; }
  else { P.vel.x = lerp(P.vel.x, mag > 0.05 ? mx / hl * sp : 0, k); P.vel.z = lerp(P.vel.z, mag > 0.05 ? mz / hl * sp : 0, k); }
  if (mag > 0.05 && pp.punchT <= 0) P.yaw = angLerp(P.yaw, Math.atan2(mx, mz), Math.min(1, dt * 11));
  P.vel.y -= 20 * dt; P.pos.addScaledVector(P.vel, dt);
  const gnd = groundAt(P.pos.x, P.pos.z);
  if (P.pos.y <= gnd) { P.pos.y = gnd; P.vel.y = 0; P.onGround = true; } else if (P.pos.y - gnd > 0.25) P.onGround = false;
  resolveCircle(P.pos, 0.38, P.pos.y);
  for (const v of vehicles) {
    if (v.removed || (v === P.ignoreCar && S.clock < P.ignoreT)) continue;
    const dx = P.pos.x - v.pos.x, dz = P.pos.z - v.pos.z, d = Math.hypot(dx, dz);
    if (d < 2.1 && d > 0.001 && P.pos.y < 1.5 + v.y) {
      const vs = Math.hypot(v.vel.x, v.vel.z);
      if (vs > 6 && !P.dead && S.clock - P.lastHit > 0.8) { hurtPlayer(vs * 1.6, v.pos); pp.down = 1.4; pp.downMax = 1.4; P.vel.set(dx / d * vs * 0.5, 3, dz / d * vs * 0.5); }
      P.pos.x = v.pos.x + dx / d * 2.1; P.pos.z = v.pos.z + dz / d * 2.1;
    }
  }
  if (S.clock - P.lastHit > 6 && P.hp < 100) { P.hp = Math.min(100, P.hp + dt * 5); hudDirty = true; }
  pp.pos.copy(P.pos); pp.yaw = P.yaw; pp.speed = Math.hypot(P.vel.x, P.vel.z); pp.air = !P.onGround; pp.guard = P.fighting > 0 ? Math.min(1, pp.guard + dt * 4) : Math.max(0, pp.guard - dt * 2);
  pp.hitT = Math.max(0, pp.hitT - dt * 2); pp.punchT = Math.max(0, pp.punchT - dt); pp.ground = gnd;
  nearCar = findNearCar();
}

/* ============================== DRIVING REWARDS ============================== */
let drift = { score: 0, idle: 0 }, nearMiss = { chain: 0, t: 0, cool: new WeakMap() }, stunt = null, distAcc = 0;
function updateCarPlayer(dt) {
  const v = P.car, inp = inputVec();
  const thr = -inp.y, steer = inp.x;
  drive(v, { thr, steer, hb: btn.A || keys.Space, nitro: btn.D || keys.ShiftLeft }, dt);
  engineUpdate(v.speed, Math.max(0, thr), v.nitroOn);
  const kmh = Math.abs(v.speed) * 3.6; if (kmh > save.stats.maxSpeed) { save.stats.maxSpeed = kmh; if (kmh >= 200) unlock('speed'); }
  distAcc += Math.abs(v.speed) * dt; if (distAcc > 100) { distAcc = 0; skillUp('drive', 0.4); }
  // drift scoring
  if (v.drift > 0 && Math.abs(v.speed) > 9) { drift.score += v.drift * Math.abs(v.speed) * dt * 0.16; drift.idle = 0; }
  else if (drift.score > 0) { drift.idle += dt; if (drift.idle > 0.6) { const s = Math.round(drift.score); if (s >= 10) { addCash(s, '🔥 DRIFT', '#ff9f1c'); skillUp('drive', s * 0.02); if (s > save.stats.bestDrift) save.stats.bestDrift = s; if (s >= 150) unlock('drift'); } drift.score = 0; } }
  // near misses
  nearMiss.t -= dt; if (nearMiss.t <= 0) nearMiss.chain = 0;
  if (Math.abs(v.speed) > 17) {
    const fx = Math.sin(v.yaw), fz = Math.cos(v.yaw);
    for (const o of vehicles) {
      if (o === v || !o.ai || o.ai.kind !== 'traffic') continue;
      const dx = o.pos.x - v.pos.x, dz = o.pos.z - v.pos.z; if (dx * dx + dz * dz > 25) continue;
      const along = dx * fx + dz * fz, lat = Math.abs(dx * fz - dz * fx);
      if (Math.abs(along) < 1.2 && lat > 2.0 && lat < 3.4 && !(nearMiss.cool.get(o) > S.clock)) {
        nearMiss.cool.set(o, S.clock + 3); nearMiss.chain++; nearMiss.t = 3;
        addCash(10 * nearMiss.chain, '💨 NEAR MISS' + (nearMiss.chain > 1 ? ' x' + nearMiss.chain : ''), '#7af0ff');
      }
    }
  }
  if (stunt) { stunt.t += dt; if (stunt.t > 1.4) S.timeScale = lerp(S.timeScale, 1, 0.1); }
  nearCar = null;
}

/* ============================== PLACES: STORES, SPRAY, GARAGE, CHOP, PROPERTIES ============================== */
const PROPS = {
  taco: { name: "Taco Loco Truck", cost: 1500, rate: 25, icon: '🌮', spot: LOC.props.taco },
  carwash: { name: 'Sudsy Car Wash', cost: 4000, rate: 60, icon: '🧽', spot: LOC.props.carwash },
  chop: { name: 'Chop Shop (stake)', cost: 6000, rate: 110, icon: '🔧', spot: LOC.props.chop, req: () => save.flags.chop },
  penthouse: { name: 'Uptown Penthouse', cost: 9000, rate: 0, icon: '🏙️', spot: LOC.props.penthouse, home: true },
  club: { name: 'NEON Nightclub', cost: 18000, rate: 220, icon: '🪩', spot: LOC.props.club },
};
const STORE_NAMES = ['24/7', 'Liquor Barn', 'Gas & Go', 'Mini Mart', 'Quik-E', '24/7 Uptown'];
let robbing = null, sprayCD = 0, incomeT = 0;
const propBeams = {};
for (const k in PROPS) { const b = makeBeam(0x4cc9ff, 1.4); b.position.set(PROPS[k].spot.x, groundAt(PROPS[k].spot.x, PROPS[k].spot.z), PROPS[k].spot.z); b.scale.set(1, 0.3, 1); propBeams[k] = b; }
const storeBeams = LOC.stores.map(s => { const b = makeBeam(0x38e07b, 1.2); b.position.set(s.x, CURB, s.z); b.scale.set(1, 0.25, 1); return b; });
const garageBeam = makeBeam(0x7af0ff, 2.2); garageBeam.position.set(LOC.garage.x, 0, LOC.garage.z); garageBeam.scale.set(1, 0.3, 1);
const chopBeam = makeBeam(0xff7b00, 2.6); chopBeam.position.set(LOC.chop.x, 0, LOC.chop.z); chopBeam.scale.set(1, 0.35, 1);
const sprayBeams = LOC.spray.map(s => { const b = makeBeam(0xffd60a, 2.6); b.position.set(s.x, 0, s.z); b.scale.set(1, 0.3, 1); return b; });
{ const s = makeSign('FIRST CITY BANK', { fg: '#e9c46a', bg: '#1b2a3a', w: 7, h: 1.3, neon: false }); const b = sideSpot(3, 3, 3, 0); s.position.set(b.x - Math.sin(b.yaw) * 0.8, 4.6, b.z - Math.cos(b.yaw) * 0.8); s.rotation.y = b.yaw; scene.add(s); }
const TONY = sideSpot(3, 2, 1, 4);
{ const s = makeSign("TONY'S PIZZA", { fg: '#ff9f1c', w: 6, h: 1.4, sub: 'since 1987' }); s.position.set(TONY.x - Math.sin(TONY.yaw) * 0.8, 4.4, TONY.z - Math.cos(TONY.yaw) * 0.8); s.rotation.y = TONY.yaw; scene.add(s); }
const BANK = sideSpot(3, 3, 3, 0);
function ownedProps() { return Object.keys(save.props).filter(k => save.props[k]); }
function incomeRate() { return ownedProps().reduce((a, k) => a + (PROPS[k]?.rate || 0), 0); }
function homeSpot() { return save.home === 'penthouse' && save.props.penthouse ? LOC.props.penthouse : LOC.safehouse; }
let ctx = null; // current contextual action
function findContext() {
  const f = focusPos();
  if (P.car) {
    const v = P.car;
    if (v.spec.taxi && !MS && !taxi) return { label: 'TAXI<br>JOB', fn: startTaxi };
    if (Math.hypot(f.x - LOC.garage.x, f.z - LOC.garage.z) < 5 && !v.mission) return { label: 'STORE<br>CAR', fn: storeCar };
    if (Math.hypot(f.x - LOC.chop.x, f.z - LOC.chop.z) < 5.5 && save.flags.chop && !v.owned && !v.mission) return { label: 'SELL<br>' + fmt(sellValue(v)), fn: sellCar };
    return { label: 'EXIT', fn: () => exitCar() };
  }
  if (P.dead) return null;
  for (let k = 0; k < LOC.stores.length; k++) { const s = LOC.stores[k]; if (Math.hypot(f.x - s.x, f.z - s.z) < 2.6 && !robbing) return storeReady(k) ? { label: 'ROB<br>💰', fn: () => startRobbery(k) } : null; }
  for (const k in PROPS) { const p = PROPS[k]; if (Math.hypot(f.x - p.spot.x, f.z - p.spot.z) < 2.6) { if (save.props[k]) return null; if (p.req && !p.req()) return null; return { label: 'BUY<br>' + fmt(p.cost), fn: () => buyProp(k) }; } }
  const hs = homeSpot(); if (Math.hypot(f.x - hs.x, f.z - hs.z) < 2.6) return { label: 'REST<br>💾', fn: rest };
  if (nearCar) return { label: nearCar.ai?.kind === 'traffic' ? 'JACK<br>CAR' : 'ENTER', fn: () => enterCar(nearCar) };
  return null;
}
function contextAction() { if (S.state !== 'play') return; const c = findContext(); if (c) c.fn(); }
function rest() { P.hp = 100; S.gameMin = (S.gameMin + 240) % 1440; persist(); bigMsg('SAVED', 'Rested 4 hours • health restored', '#7af0ff'); SFX.check(); }
function buyProp(k) {
  const p = PROPS[k]; if (save.cash < p.cost) { toast('Not enough cash (' + fmt(p.cost) + ')', '#ff6b6b'); SFX.fail(); return; }
  save.cash -= p.cost; save.props[k] = true; SFX.pass(); bigMsg('PROPERTY BOUGHT', p.icon + ' ' + p.name + (p.rate ? ' • +' + fmt(p.rate) + ' every game hour' : ' • new safehouse'), '#4cc9ff');
  if (p.home) save.home = k; addXP(60); if (ownedProps().length >= 3) unlock('business'); persist(); hudDirty = true;
}
function storeReady(k) { return !(storeCD[k] > S.clock); }
const storeCD = {};
function startRobbery(k) {
  const s = LOC.stores[k];
  const clerk = spawnNPC(LOOKS.civ(), new THREE.Vector3(s.x - Math.sin(s.yaw) * 1.6, CURB, s.z - Math.cos(s.yaw) * 1.6), { state: 'idle', pers: R2() < 0.2 ? 'tough' : 'coward', hp: 40 });
  if (clerk) { clerk.yaw = s.yaw; clerk.armsUp = 99; }
  robbing = { k, t: 0, need: 5, clerk, alarm: R2() < 0.55 ? 1.5 + R2() * 3 : 99, twist: clerk && clerk.pers === 'tough' && R2() < 0.6 };
  hooks.crime(s, 1, 'Armed robbery'); panic(s, 20, s, 5);
  say([['😱', 'Clerk', pick(['Okay okay! Take it! Just don\'t hurt me!', 'Not again! This is the third time this week!', 'I get paid minimum wage for this?!'])]]);
}
function updateRobbery(dt) {
  if (!robbing) { $('prog').classList.add('hidden'); return; }
  const s = LOC.stores[robbing.k], d = Math.hypot(P.pos.x - s.x, P.pos.z - s.z);
  $('prog').classList.remove('hidden');
  if (d > 4.5 || P.car || P.dead) { toast('Robbery abandoned', '#ff6b6b'); endRob(false); return; }
  robbing.t += dt; $('prog').querySelector('i').style.width = (robbing.t / robbing.need * 100) + '%';
  if (robbing.t > robbing.alarm && robbing.alarm < 90) { robbing.alarm = 99; setWanted(Math.max(S.wanted, 2)); toast('🔔 The silent alarm was tripped!', '#ff6b6b'); SFX.alarm(); }
  if (robbing.twist && robbing.t > 2 && robbing.clerk) { robbing.twist = false; robbing.clerk.armsUp = 0; robbing.clerk.state = 'fight'; robbing.clerk.target = 'player'; robbing.clerk.hp = 60; say([['😤', 'Clerk', 'You picked the WRONG store, pal!']]); }
  if (robbing.t >= robbing.need) {
    const amt = 180 + rankOf(save.xp) * 70 + (R2() * 120 | 0);
    addCash(amt, '💰 ' + STORE_NAMES[robbing.k] + ' robbed'); save.stats.robberies++; addXP(30); if (save.stats.robberies >= 5) unlock('robber');
    setWanted(Math.max(S.wanted, 2)); endRob(true);
  }
}
function endRob(ok) { if (robbing.clerk && !robbing.clerk.dead) { robbing.clerk.armsUp = 0; robbing.clerk.kind = 'civ'; robbing.clerk.state = 'flee'; robbing.clerk.t = 6; robbing.clerk.fleeFrom = P.pos.clone(); } storeCD[robbing.k] = S.clock + 240; robbing = null; $('prog').classList.add('hidden'); }
function sellValue(v) { return Math.round(v.spec.value * (0.35 + 0.65 * Math.max(0, v.hp) / v.maxHp) * (save.props.chop ? 1.3 : 1)); }
function sellCar() { const v = P.car, val = sellValue(v); exitCar(); removeVehicle(v); addCash(val, '🔧 Sold the ' + v.spec.name, '#ff9f1c'); addXP(15); bigMsg('SOLD!', v.spec.name + ' → ' + fmt(val), '#ff9f1c', 1800); }
function storeCar() {
  const v = P.car, slots = save.props.penthouse ? 8 : 4;
  if (save.garage.length >= slots && !save.garage.includes(v.key)) { toast('Garage full (' + slots + ' slots) — buy the Penthouse for more', '#ff6b6b'); return; }
  if (!save.garage.includes(v.key)) save.garage.push(v.key);
  exitCar(); removeVehicle(v); v.hp = v.maxHp; SFX.check(); toast('🅿️ ' + v.spec.name + ' stored. Call it anytime from your phone.', '#7af0ff'); persist();
}
let myCar = null;
function callCar(k) {
  if (P.car) { toast('Get out of your car first'); return; }
  const f = focusPos(), [ix, iz] = nearestNode(f.x, f.z);
  const dx = Math.abs(f.x - road(ix)), dz = Math.abs(f.z - road(iz)); let x, z, yaw;
  if (dx < dz) { const sd = Math.sign(f.x - road(ix)) || 1; x = road(ix) + 4.9 * sd; z = clamp(f.z, -HALF + 10, HALF - 10); yaw = sd > 0 ? Math.PI : 0; }
  else { const sd = Math.sign(f.z - road(iz)) || 1; z = road(iz) + 4.9 * sd; x = clamp(f.x, -HALF + 10, HALF - 10); yaw = sd > 0 ? Math.PI / 2 : -Math.PI / 2; }
  if (myCar && myCar !== P.car && !myCar.removed) removeVehicle(myCar);
  for (const v of [...vehicles]) if (v.ai?.kind === 'traffic' && Math.hypot(v.pos.x - x, v.pos.z - z) < 7) initAI(v, undefined, undefined, f);
  myCar = spawnVehicle(k, undefined, x, z, yaw, false); myCar.owned = true; toast('🚗 ' + CARS[k].name + ' delivered!', '#7af0ff'); closePhone();
}
function updatePlaces(dt) {
  const f = focusPos();
  // spray shop
  sprayCD -= dt;
  for (const s of LOC.spray) if (P.car && sprayCD <= 0 && Math.hypot(f.x - s.x, f.z - s.z) < 5) {
    sprayCD = 6;
    if (S.wanted > 0 && copSees(f, 0.6)) { toast('👮 Not with cops watching!', '#ff6b6b'); continue; }
    const cost = S.wanted > 0 ? 100 + S.wanted * 50 : 50;
    if (save.cash < cost) { toast('Paint job costs ' + fmt(cost), '#ff6b6b'); continue; }
    save.cash -= cost; const v = P.car; v.hp = v.maxHp; const col = pick([0xa4161a, 0x2f5fa8, 0x111111, 0xeeeeee, 0x2a9d8f, 0x5a189a, 0xf77f00, 0x3a5a40]);
    v.mesh.pm.material = new THREE.MeshPhysicalMaterial({ color: col, metalness: 0.45, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.08 });
    const had = S.wanted; if (had) { setWanted(0, true); heat = 0; for (const pv of police) if (pv.ai) pv.ai.leaving = true; }
    bigMsg('FRESH PAINT', had ? 'Cops lost your trail • -' + fmt(cost) : 'Repaired & repainted • -' + fmt(cost), '#ffd60a'); SFX.cash();
  }
  // business income every in-game hour
  incomeT += dt * 1.5; if (incomeT >= 60) { incomeT = 0; const r = incomeRate(); if (r > 0) addCash(r, '🏢 Business income', '#4cc9ff'); }
  // beams
  for (const k in PROPS) propBeams[k].visible = !save.props[k] && (!PROPS[k].req || PROPS[k].req()) && Math.hypot(f.x - PROPS[k].spot.x, f.z - PROPS[k].spot.z) < 70;
  storeBeams.forEach((b, k) => b.visible = !(storeCD[k] > S.clock) && Math.hypot(f.x - LOC.stores[k].x, f.z - LOC.stores[k].z) < 60);
  chopBeam.visible = !!save.flags.chop; garageBeam.visible = !!P.car;
  // car alarm
  if (alarmCar && alarmT > 0) { alarmT -= dt; if ((S.frameN % 30) === 0) SFX.horn(); if (alarmT <= 0) alarmCar = null; }
}

/* ============================== TAXI ============================== */
let taxi = null;
function startTaxi() { taxi = { fare: null, done: 0, wait: 0 }; toast('🚕 On duty! Look for a waving customer.', '#ffd60a'); nextFare(); }
function nextFare() {
  if (!taxi) return; const f = focusPos();
  let spot = null; for (let k = 0; k < 20; k++) { const b = pick(blockInfoCache()); const s = sideSpot(b.i, b.j, R2() * 4 | 0, (R2() - 0.5) * 20, 1.6); const d = Math.hypot(s.x - f.x, s.z - f.z); if (d > 40 && d < 160) { spot = s; break; } }
  if (!spot) spot = sideSpot(2, 2, 0);
  const p = spawnNPC(LOOKS.civ(), new THREE.Vector3(spot.x, CURB, spot.z), { state: 'cheer', pers: 'coward', hp: 30 });
  taxi.fare = { p, spot, picked: false, dest: null, t: 0 };
}
function blockInfoCache() { return blockInfoCache.c || (blockInfoCache.c = []); }
function updateTaxi(dt) {
  if (!taxi) return null;
  if (!P.car || !P.car.spec.taxi) { toast('🚕 Off duty', '#ffd60a'); if (taxi.fare && taxi.fare.p && !taxi.fare.picked) { taxi.fare.p.kind = 'civ'; taxi.fare.p.state = 'walk'; } taxi = null; return null; }
  const fr = taxi.fare; if (!fr) return null; const f = focusPos();
  if (!fr.picked) {
    if (fr.p.dead || fr.p.down > 0) { taxi.fare = null; nextFare(); return null; }
    if (Math.hypot(f.x - fr.p.pos.x, f.z - fr.p.pos.z) < 6 && Math.abs(P.car.speed) < 2) {
      fr.picked = true; removePed(fr.p);
      let dest = null; for (let k = 0; k < 20; k++) { const b = pick(blockInfoCache()); const s = sideSpot(b.i, b.j, R2() * 4 | 0, 0, 1.6); const d = Math.hypot(s.x - f.x, s.z - f.z); if (d > 90 && d < 260) { dest = s; break; } }
      fr.dest = dest || sideSpot(5, 5, 0); fr.t = Math.round(Math.hypot(fr.dest.x - f.x, fr.dest.z - f.z) / 10 + 14); fr.crash = 0;
      say([['🧑', 'Passenger', pick(['Step on it! I\'m late for my own wedding!', 'Follow that... no wait, just go downtown.', 'You drive like my grandma. Faster!', 'Take the scenic route. JK. HURRY.'])]]);
    }
    return { text: '🚕 Pick up the waving customer', pos: fr.p.pos, color: 0xffd60a };
  }
  fr.t -= dt;
  if (Math.hypot(f.x - fr.dest.x, f.z - fr.dest.z) < 6 && Math.abs(P.car.speed) < 3) {
    const pay = 60 + Math.max(0, Math.round(fr.t * 6)) - fr.crash * 10; taxi.done++; save.stats.fares++;
    addCash(Math.max(20, pay), '🚕 Fare #' + taxi.done + (fr.t > 0 ? ' + tip' : ''), '#ffd60a'); addXP(8); if (save.stats.fares >= 10) unlock('taxi');
    if (taxi.done % 5 === 0) addCash(300, '🚕 5 fares in a row!', '#ffd60a');
    taxi.fare = null; nextFare(); return null;
  }
  if (fr.t < -20) { toast('😤 Passenger bailed — too slow!', '#ff6b6b'); taxi.fare = null; nextFare(); return null; }
  return { text: '🚕 Drive your fare <b>' + Math.max(0, Math.ceil(fr.t)) + 's</b>', pos: fr.dest, color: 0xffd60a };
}

/* ============================== MISSIONS ============================== */
let MS = null;
const missionBeam = makeBeam(0xff4fa3); missionBeam.visible = false;
const arrow = new THREE.Group();
{ const m = new THREE.MeshBasicMaterial({ color: 0xffd60a, fog: false, depthTest: false, transparent: true, toneMapped: false }); const c = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.1, 16), m); c.rotation.x = Math.PI / 2; c.position.z = 0.4; const s = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 10), m); s.rotation.x = Math.PI / 2; s.position.z = -0.35; c.renderOrder = s.renderOrder = 10; arrow.add(c, s); arrow.visible = false; scene.add(arrow); arrow.userData.mat = m; }
const CONTACTS = {
  vinny: { name: 'Vinny "The Fish"', av: '🐟', color: 0xb5179e, spot: LOC.vinny },
  lucia: { name: 'Lucia Reyes', av: '🏁', color: 0x38e07b, spot: LOC.lucia },
  tony: { name: 'Big Tony', av: '🍕', color: 0xff9f1c, spot: TONY },
  stranger: { name: '???', av: '🎩', color: 0x9d4edd, spot: null },
};
const contactBeams = {};
for (const k in CONTACTS) { const b = makeBeam(CONTACTS[k].color, 2.2); b.visible = false; contactBeams[k] = b; const c = CONTACTS[k]; if (c.spot) b.position.set(c.spot.x, CURB, c.spot.z); }
const V = (t) => ['🐟', 'Vinny', t], L = (t) => ['🏁', 'Lucia', t], T = (t) => ['🍕', 'Big Tony', t], X = (t) => ['🎩', 'The Stranger', t];
// helpers
const go = (pos, text, o = {}) => ({ text, target: () => pos, update: () => Math.hypot(focusPos().x - pos.x, focusPos().z - pos.z) < (o.r || 4) && (!o.car || P.car) && (!o.slow || !P.car || Math.abs(P.car.speed) < 4) });
const stepLose = (text = 'Lose the cops') => ({ text: () => S.wanted > 0 ? text : 'Lost them!', update: () => S.wanted === 0 });
function spawnCarAt(key, spot, color) { const v = spawnVehicle(key, color, spot.x, spot.z, spot.yaw, false); return v; }
function fleeDriver(v, speedK = 1) {
  v.ai = { kind: 'drive', dyn: true, goal: null, fn: (v, dt) => {
    const f = focusPos(); const a = v.ai;
    if (!a.goal || Math.hypot(a.goal[0] - v.pos.x, a.goal[1] - v.pos.z) < 12) { let best = null, bd = -1; for (let k = 0; k < 8; k++) { const i = R2() * (N + 1) | 0, j = R2() * (N + 1) | 0, d = Math.hypot(road(i) - f.x, road(j) - f.z); if (d > bd) { bd = d; best = [road(i), road(j)]; } } a.goal = best; }
    const [nx, nz] = navPoint(v, a.goal[0], a.goal[1]); aiDrive(v, nx, nz, dt, { thr: speedK, nitro: speedK >= 1 && Math.hypot(f.x - v.pos.x, f.z - v.pos.z) < 25 });
  } };
}
const MISSIONS = {
  v1: { c: 'vinny', title: 'Hot Wheels', rank: 0, req: () => save.story === 0, steps: () => [
    { start(m) { say([V('Kid! Get over here. You look like someone who needs money and has no morals. Perfect.'), V('There\'s a red Sports Coupe parked outside the NEON club downtown. I want it.'), V('Bring it to my chop shop at the Docks. And don\'t scratch it!')]); m.car = spawnCarAt('sports', LOC.rareSpots[0], 0xc1121f); m.car.mission = true; }, text: 'Steal the red Sports Coupe outside NEON', target: (m) => m.car.pos, update: (m) => P.car === m.car },
    { start(m) { setWanted(2); say([V('WAIT. Bad news — the owner\'s a cop\'s cousin. That car has a TRACKER!'), V('Lose the heat before you come anywhere near my shop!')]); }, ...stepLose('The car has a tracker! Lose the cops') },
    { text: 'Deliver the car to Vinny\'s Chop Shop', target: () => LOC.chop, update: (m) => P.car === m.car && Math.hypot(P.car.pos.x - LOC.chop.x, P.car.pos.z - LOC.chop.z) < 5.5 && S.wanted === 0 },
    { start(m) { const cond = Math.max(0, m.car.hp) / m.car.maxHp; m.reward = 400 + Math.round(cond * 400); exitCar(); removeVehicle(m.car); save.flags.chop = true; say([V(cond > 0.8 ? 'Beautiful! Not a scratch! You\'re a natural.' : 'You call this "not scratched"?! ...Fine. It\'ll sell.'), V('From now on, bring me ANY car and I\'ll buy it. No questions asked.')]); }, update: () => true },
  ], reward: (m) => m.reward, xp: 120, done: () => { save.story = 1; } },
  v2: { c: 'vinny', title: 'Debt Collector', rank: 1, req: () => save.story === 1, steps: () => [
    { start() { say([V('Sal "The Shark" owes me $800. He thinks I forgot.'), V('I never forget. Go to Old Town and... remind him.')]); }, ...go(sideSpot(2, 6, 0, 0), 'Find Sal in Old Town') },
    { start(m) { const s = sideSpot(2, 6, 0, 3); m.sal = spawnNPC({ skin: '#e0ac8a', top: '#f72585', pants: '#ffffff', hair: '#111111', shoe: '#111111' }, new THREE.Vector3(s.x, CURB, s.z), { state: 'fight', target: 'player', pers: 'tough', hp: 60, afterFight: 'idle' }); m.salCar = spawnCarAt('muscle', curbSpot(2, 6, 0, 10), 0x7209b7); m.salCar.mission = true; say([['🦈', 'Sal', 'Vinny sent a KID? Ha! Come here, I\'ll teach you some manners!']]); m.sal.onKO = () => { m.koed = true; }; }, text: 'Rough up Sal', target: (m) => m.sal.pos, update: (m) => m.koed },
    { start(m) { m.sal.scripted = true; m.sal.onUp = (p) => { p.state = 'goto'; p.dest = m.salCar.pos; p.goSpeed = 6.2; p.onArrive = () => { removePed(p); fleeDriver(m.salCar, 0.85); m.fleeing = true; say([['🦈', 'Sal', 'You\'ll never catch me in my baby!']]); }; }; }, text: () => 'Sal is running for his car!', target: (m) => m.fleeing ? m.salCar.pos : m.sal.pos, update: (m) => m.fleeing },
    { text: 'Sal\'s getting away! Wreck his car', target: (m) => m.salCar.pos, update: (m, dt) => { if (Math.hypot(m.salCar.pos.x - focusPos().x, m.salCar.pos.z - focusPos().z) > 260) { m.lostT = (m.lostT || 0) + dt; if (m.lostT > 6) m.fail('Sal got away'); } else m.lostT = 0; return m.salCar.wrecked; } },
    { start(m) { m.bag = dropPickup(m.salCar.pos, 'bag', 0, { keep: true, onGet: () => { m.got = true; } }); say([['🦈', 'Sal', 'OKAY! OKAY! Take the money! Take it!']]); }, text: 'Grab the $800', target: (m) => m.bag.pos, update: (m) => m.got },
    { start(m) { choose(['🤝 Give it to Vinny (he pays you $300)', '💰 Keep all $800 (Vinny won\'t like it)'], (i) => { m.choice = i; if (i === 0) { save.flags.loyal = true; addCash(300, 'Vinny\'s cut'); say([V('An honest crook! I like you, kid. I won\'t forget this.')]); } else { save.flags.loyal = false; addCash(800, 'Kept the money'); say([V('...Funny. Sal says he paid. I\'ll be thinking about this, kid.')]); } }); }, text: 'Decide what to do with the money', update: (m) => m.choice !== undefined },
  ], reward: () => 0, xp: 150, done: () => { save.story = 2; } },
  v3: { c: 'vinny', title: 'The Getaway', rank: 3, req: () => save.story === 2, steps: () => [
    { start() { say([V('My boys are hitting First City Bank downtown. They need a driver.'), V('Bring a fast car. Park out front. Keep the engine running.')]); }, text: 'Get a car', update: () => !!P.car },
    { text: 'Pull up in front of First City Bank', target: () => BANK, update: () => P.car && Math.hypot(P.car.pos.x - BANK.x, P.car.pos.z - BANK.z) < 9 && Math.abs(P.car.speed) < 3 },
    { start(m) { m.t = 0; m.car = P.car; say([['😷', 'Crew', 'Driver\'s here. Let\'s go to work. 15 seconds.']]); for (let k = 0; k < 2; k++) { const p = spawnNPC({ skin: '#c68642', top: '#111111', pants: '#111111', hair: '#111111', shoe: '#111111' }, new THREE.Vector3(P.car.pos.x + 2, 0, P.car.pos.z + k), { state: 'goto' }); p.dest = new THREE.Vector3(BANK.x, CURB, BANK.z); p.goSpeed = 3; p.onArrive = (q) => removePed(q); } m.noCrime = true; },
      text: (m) => 'Keep the engine running… <b>' + Math.max(0, Math.ceil(15 - m.t)) + 's</b>', target: () => BANK,
      update: (m, dt) => {
        m.t += dt; if (!P.car || Math.hypot(P.car.pos.x - BANK.x, P.car.pos.z - BANK.z) > 25) { m.fail('You abandoned the crew'); return false; }
        if (m.t > 6 && !m.cop) { m.cop = true; const s = curbSpot(3, 3, 3, 14); const pc = spawnVehicle('police', undefined, s.x, s.z, s.yaw, false); pc.role = 'police'; police.push(pc); say([V('Kid, a patrol car just parked down the street. Stay cool... STAY COOL.')]); }
        return m.t >= 15;
      } },
    { start(m) { m.noCrime = false; SFX.alarm(); setWanted(4); for (const pv of police) if (!pv.ai) { pv.ai = { kind: 'police', dyn: true }; pv.hasCops = 2; } say([['😷', 'Crew', 'GO GO GO! The alarm tripped!']]); }, ...stepLose('GET AWAY! Lose the cops') },
    { text: 'Drop the crew at the safehouse garage', target: () => LOC.garage, update: () => P.car && Math.hypot(P.car.pos.x - LOC.garage.x, P.car.pos.z - LOC.garage.z) < 6 },
  ], reward: () => 2500, xp: 250, done: () => { save.story = 3; } },
  v4: { c: 'vinny', title: 'Turf War', rank: 4, req: () => save.story === 3, steps: () => [
    { start() { say([V('The Vipers are muscling in on my corner at the Docks.'), V('Go remind them whose corner it is. With your fists.')]); }, ...go(LOC.gangSpots[4][0], 'Go to the Vipers\' corner in the Docks', { r: 12 }) },
    { start(m) { m.noCrime = true; m.ko = 0; m.need = 6; const s = LOC.gangSpots[4][0]; m.gang = []; for (let k = 0; k < 6; k++) { const p = spawnGang(4, s); if (p) { p.state = 'fight'; p.target = 'player'; m.gang.push(p); } } say([['🐍', 'Viper', 'Look who it is. Vinny\'s new puppy. Get him!']]); m.onKO = (p) => { if (p.kind === 'gang' && p.gang === 4 && !p.counted) { p.counted = true; m.ko++; } }; },
      text: (m) => 'Beat down the Vipers <b>' + m.ko + '/' + m.need + '</b>', target: () => LOC.gangSpots[4][0],
      update: (m) => {
        if (m.ko >= 4 && !m.reinf) { m.reinf = true; m.need = 9; say([['🐍', 'Viper', 'Reinforcements! Get over here!']]); const s = curbSpot(6, 6, 0, -10); const van = spawnVehicle('van', 0x3c096c, s.x, s.z, s.yaw, false); for (let k = 0; k < 3; k++) { const p = spawnGang(4, { x: van.pos.x, z: van.pos.z + 2 }); if (p) { p.state = 'fight'; p.target = 'player'; } } }
        return m.ko >= m.need;
      } },
  ], reward: () => 1500, xp: 300, done: () => { save.story = 4; save.gangRep[4] = -6; save.gangRep[3] = (save.gangRep[3] || 0) + 3; toast('⚠️ The Vipers will attack you on sight in the Docks now', '#b5179e', 4000); } },
  v5: { c: 'vinny', title: 'Armored Assets', rank: 5, req: () => save.story === 4, steps: () => [
    { start(m) { say([V('An armored truck is doing its rounds. Three bags of cash inside.'), V('Ram it till it dies. Grab the bags. Easy money.')]); const f = focusPos(); const [i, j] = nearestNode(f.x + 120, f.z); m.truck = spawnVehicle('armored', undefined, road(i), road(j), 0, false); m.truck.mission = true; fleeDriver(m.truck, 0.5); m.onImpact = (k, o) => { if (o === m.truck && !m.alerted) { m.alerted = true; setWanted(Math.max(S.wanted, 3)); fleeDriver(m.truck, 0.75); } }; m.onWreck = (v) => { if (v === m.truck) m.dead = true; }; },
      text: (m) => 'Ram the armored truck until it breaks down (' + Math.max(0, Math.round(m.truck.hp / m.truck.maxHp * 100)) + '%)', target: (m) => m.truck.pos, update: (m) => m.dead },
    { start(m) { m.bags = 0; for (let k = 0; k < 3; k++) dropPickup(m.truck.pos, 'bag', 1000, { keep: true, onGet: () => { m.bags++; } }); toast('💰 Money bags everywhere!', '#7dff9b'); }, text: (m) => 'Grab the money bags <b>' + m.bags + '/3</b>', target: (m) => m.truck.pos, update: (m) => m.bags >= 3 },
    stepLose(),
  ], reward: () => 500, xp: 350, done: () => { save.story = 5; } },
  v6a: { c: 'vinny', title: 'The Fish Stinks', rank: 6, req: () => save.story === 5 && !save.flags.loyal, steps: () => [
    { start() { say([V('Kid! Big score tonight. Meet me at the pier in the Docks. Come alone.')]); }, ...go(curbSpot(7, 7, 1, 0), 'Meet Vinny at the Docks pier', { r: 10 }) },
    { start(m) { say([V('You thought I forgot about Sal\'s $800? I NEVER forget!'), V('Boys — take care of him. And I already called the cops. Bye bye!')]); const s = curbSpot(7, 7, 1, 0); for (let k = 0; k < 6; k++) { const p = spawnGang(4, { x: s.x + (R2() - 0.5) * 10, z: s.z + (R2() - 0.5) * 10 }); if (p) { p.state = 'fight'; p.target = 'player'; } } setWanted(3); m.origin = new THREE.Vector3(s.x, 0, s.z); },
      text: () => 'It\'s a SETUP! Escape the Docks and lose the cops', target: () => homeSpot(), update: (m) => S.wanted === 0 && focusPos().distanceTo(m.origin) > 150 },
    { start() { say([L('Heard Vinny tried to bury you. Nobody does that to my drivers.'), L('Come to my garage. I have something for you.')]); }, ...go(LOC.lucia, 'Go see Lucia') },
    { start() { say([L('Vinny\'s supercar. I "borrowed" it while he was busy with you. It\'s yours now, Kingpin.')]); }, update: () => true },
  ], reward: () => 5000, xp: 500, done: () => { save.story = 6; if (!save.garage.includes('super')) save.garage.push('super'); unlock('kingpin'); bigMsg('KINGPIN', 'Vinny\'s supercar is in your garage', '#ffd166', 4000); } },
  v6b: { c: 'vinny', title: 'Fish Out of Water', rank: 6, req: () => save.story === 5 && save.flags.loyal, steps: () => [
    { start() { say([V('KID! The cops are raiding my place! I need a ride out of Old Town NOW!')]); }, ...go(LOC.vinny, 'Rescue Vinny in Old Town', { r: 12 }) },
    { start(m) { m.vinny = spawnNPC({ skin: '#e0ac8a', top: '#f8f9fa', pants: '#6c757d', hair: '#adb5bd', shoe: '#111111' }, new THREE.Vector3(LOC.vinny.x, CURB, LOC.vinny.z), { state: 'follow', hp: 999 }); for (let k = 0; k < 3; k++) spawnCop(new THREE.Vector3(LOC.vinny.x + (R2() - 0.5) * 14, 0, LOC.vinny.z + 8 + R2() * 4)); setWanted(3); say([V('About time! Get us a car!')]); },
      text: 'Get Vinny into a car', target: (m) => m.vinny.pos, update: (m) => { if (P.car && Math.hypot(P.car.pos.x - m.vinny.pos.x, P.car.pos.z - m.vinny.pos.z) < 6) { removePed(m.vinny); setWanted(4); return true; } return false; } },
    { start() { say([V('DRIVE! DRIVE! DRIVE!')]); }, ...stepLose('Lose the cops with Vinny aboard') },
    { text: 'Drop Vinny at the Docks pier', target: () => curbSpot(7, 7, 1, 0), update: () => P.car && Math.hypot(P.car.pos.x - curbSpot(7, 7, 1, 0).x, P.car.pos.z - curbSpot(7, 7, 1, 0).z) < 8 },
    { start() { say([V('You saved my life, kid. Take my supercar. And my corner. You\'re the Kingpin now.')]); }, update: () => true },
  ], reward: () => 6000, xp: 500, done: () => { save.story = 6; if (!save.garage.includes('super')) save.garage.push('super'); unlock('kingpin'); bigMsg('KINGPIN', 'Vinny\'s supercar is in your garage', '#ffd166', 4000); } },
  // Lucia races
  r1: { c: 'lucia', title: 'Race: Downtown Dash', rank: 1, req: () => !save.races.r1, repeat: true, steps: () => raceSteps('r1', 6, 0.85, 900) },
  r2: { c: 'lucia', title: 'Race: Harbor Run', rank: 3, req: () => save.races.r1 && !save.races.r2, repeat: true, steps: () => raceSteps('r2', 9, 0.95, 1600) },
  r3: { c: 'lucia', title: 'Race: The Big One', rank: 5, req: () => save.races.r2 && !save.races.r3, repeat: true, steps: () => raceSteps('r3', 12, 1.05, 3000) },
  // Tony
  pizza: { c: 'tony', title: 'Pizza Panic', rank: 0, req: () => true, repeat: true, steps: () => [
    { start(m) { say([T(pick(['Four pizzas, four hungry customers, ninety seconds. Don\'t crash — the pizzas fly out!', 'You drive, they eat. Crash and you\'re paying for the pizza!']))]); m.pizzas = 6; m.drops = 0; m.t = 90; m.onImpact = (k) => { if (k > 10 && m.pizzas > 0) { m.pizzas--; toast('🍕 A pizza flew out the window! (' + m.pizzas + ' left)', '#ff9f1c'); dropPickup(P.car.pos, 'cash', 1, { life: 3 }); } }; m.next = () => { for (let k = 0; k < 20; k++) { const b = pick(blockInfoCache()); const s = sideSpot(b.i, b.j, R2() * 4 | 0, 0, 1.6); const d = Math.hypot(s.x - focusPos().x, s.z - focusPos().z); if (d > 60 && d < 200) return s; } return LOC.stores[0]; }; m.dest = m.next(); }, text: 'Get a car', update: () => !!P.car },
    { text: (m) => '🍕 Deliver pizza ' + (m.drops + 1) + '/4 • <b>' + Math.ceil(m.t) + 's</b> • ' + m.pizzas + ' pizzas', target: (m) => m.dest, update: (m, dt) => {
      m.t -= dt; if (m.t <= 0) { m.fail('The pizzas got cold'); return false; } if (m.pizzas <= 0) { m.fail('You lost all the pizzas'); return false; }
      if (Math.hypot(focusPos().x - m.dest.x, focusPos().z - m.dest.z) < 6) { m.drops++; m.pizzas--; addCash(40, '🍕 Delivered! +tip', '#ff9f1c'); SFX.check(); if (m.drops >= 4) return true; m.dest = m.next(); m.t += 12; }
      return false; } },
  ], reward: (m) => 150 + m.pizzas * 60 + Math.round(m.t * 3), xp: 60, done: () => { save.stats.deliveries++; } },
  // the stranger
  x1: { c: 'stranger', title: 'A Favor', rank: 2, req: () => save.stranger === 0, steps: () => [
    { start(m) { m.spot = strangerSpot; say([X('Ah. You can see me. Interesting.'), X('Bring me a police cruiser. Don\'t ask why. Nobody ever asks why.')]); }, text: () => S.wanted ? 'Lose the cops, then bring the cruiser' : 'Steal a police cruiser and bring it to the Stranger', target: (m) => m.spot, update: (m) => P.car && P.car.spec.police && Math.hypot(P.car.pos.x - m.spot.x, P.car.pos.z - m.spot.z) < 7 && S.wanted === 0 },
    { start() { const v = P.car; exitCar(); removeVehicle(v); say([X('Lovely. It still smells like donuts.')]); }, update: () => true },
  ], reward: () => 1500, xp: 200, done: () => { save.stranger = 1; } },
  x2: { c: 'stranger', title: 'Hot Potato', rank: 3, req: () => save.stranger === 1, steps: () => [
    { start(m) { say([X('I want to watch something. Survive four stars for ninety seconds. No paint shops.'), X('Begin.')]); setWanted(4); m.t = 90; m.noSpray = true; }, text: (m) => 'Survive 4 stars <b>' + Math.ceil(m.t) + 's</b>', update: (m, dt) => { m.t -= dt; if (S.wanted < 4 && S.wanted > 0) setWanted(4, true); if (S.wanted === 0) setWanted(4, true); return m.t <= 0; } },
    { start() { setWanted(0, true); for (const v of police) if (v.ai) v.ai.leaving = true; say([X('Delightful. The police will forget all of this. I made sure.')]); }, update: () => true },
  ], reward: () => 2500, xp: 300, done: () => { save.stranger = 2; } },
  x3: { c: 'stranger', title: 'The Ghost', rank: 4, req: () => save.stranger === 2, steps: () => [
    { start() { say([X('One last game. Hit three of my... favorite ramps. Unique jumps. Tonight.'), X('Then I will give you something that does not officially exist.')]); }, text: (m) => 'Land 3 NEW unique stunt jumps (' + Math.max(0, save.stunts.length - m.base) + '/3)', update: (m) => { if (m.base === undefined) m.base = save.stunts.length; return save.stunts.length - m.base >= 3 || save.stunts.length >= ramps.length; } },
    { start() { say([X('The Ghost is in your garage. Drive it at night. You\'ll understand.')]); if (!save.garage.includes('ghost')) save.garage.push('ghost'); unlock('ghost'); }, update: () => true },
  ], reward: () => 1000, xp: 400, done: () => { save.stranger = 3; } },
};
// race generation
function raceRoute(seed, len) {
  let r = seed * 9973 % 2147483647; const rnd = () => (r = r * 16807 % 2147483647) / 2147483647;
  const out = []; let cur = nearestNode(LOC.lucia.x, LOC.lucia.z), prev = [cur[0] - 1, cur[1]]; const seen = new Set();
  for (let k = 0; k < len; k++) { let nb = neighbors(...cur).filter(n => !(n[0] === prev[0] && n[1] === prev[1])); const fresh = nb.filter(n => !seen.has(n.join())); if (fresh.length) nb = fresh; const nx = nb[rnd() * nb.length | 0]; prev = cur; cur = nx; seen.add(cur.join()); out.push(nodeV(...cur)); }
  return out;
}
function raceSteps(id, len, skill, prize) {
  return [
    { start() { say([L(pick(['Think you can drive? Prove it. First to the finish wins.', 'My crew\'s been undefeated for a month. Embarrass them.', 'No rules. Well, one rule: win.']))]); }, text: 'Get a car', update: () => !!P.car },
    { start(m) {
        m.route = raceRoute({ r1: 11, r2: 22, r3: 33 }[id], len); m.idx = 0; m.t = -3; m.racers = [];
        const f = P.car.pos, yaw = Math.atan2(m.route[0].x - f.x, m.route[0].z - f.z), fx = Math.sin(yaw), fz = Math.cos(yaw);
        P.car.yaw = yaw; P.car.vel.set(0, 0, 0);
        for (let k = 0; k < 3; k++) {
          const key = pick(['sports', 'muscle', 'super', 'sports']); const off = [[-3.2, 0], [3.2, 0], [0, -6]][k];
          const v = spawnVehicle(key, pick([0xe63946, 0x4361ee, 0x2a9d8f, 0xffbe0b, 0xf72585]), f.x - fz * off[0] + fx * off[1], f.z + fx * off[0] + fz * off[1], yaw, false);
          v.spec = { ...v.spec, max: v.spec.max * skill * (0.9 + k * 0.05), acc: v.spec.acc * skill }; v.mission = true; v.invuln = true; v.racer = { idx: 0, done: false };
          v.ai = { kind: 'drive', dyn: true, fn: (v, dt) => {
            if (m.t < 0) { drive(v, { thr: 0, steer: 0, hb: true }, dt); return; }
            const rc = v.racer; if (rc.done) { drive(v, { thr: 0, steer: 0, hb: true }, dt); return; }
            const cp = m.route[rc.idx]; if (Math.hypot(cp.x - v.pos.x, cp.z - v.pos.z) < 9) { rc.idx++; if (rc.idx >= m.route.length) { rc.done = true; m.finishers.push(v); return; } }
            const c2 = m.route[rc.idx], c3 = m.route[Math.min(rc.idx + 1, m.route.length - 1)]; const [nx, nz] = navPoint(v, c2.x, c2.z);
            const behind = progress(v) < progress(P.car); aiDrive(v, nx, nz, dt, { nitro: behind, nextX: c3.x, nextZ: c3.z });
            if (behind && Math.abs(v.speed) < v.spec.max) v.vel.multiplyScalar(1 + dt * 0.12);
          } };
          m.racers.push(v);
        }
        m.finishers = []; m.noCrime = true; const progress = (v) => !v ? -1e9 : v === P.car ? m.idx * 1000 - Math.hypot(m.route[Math.min(m.idx, m.route.length - 1)].x - v.pos.x, m.route[Math.min(m.idx, m.route.length - 1)].z - v.pos.z) : v.racer.idx * 1000 - Math.hypot(m.route[Math.min(v.racer.idx, m.route.length - 1)].x - v.pos.x, m.route[Math.min(v.racer.idx, m.route.length - 1)].z - v.pos.z);
        m.progress = progress; m.cleanup = () => { for (const v of m.racers) if (!v.removed && v !== P.car) { v.ai = null; v.invuln = false; } };
      },
      text: (m) => { if (!P.car) return 'Get back in your car!'; if (m.t < 0) return '<b>' + Math.ceil(-m.t) + '</b>'; const pos = 1 + m.racers.filter(v => v.racer.done || m.progress(v) > m.progress(P.car)).length; return '🏁 Position <b>' + pos + '/4</b> • Checkpoint ' + Math.min(m.idx + 1, m.route.length) + '/' + m.route.length + ' • ' + m.t.toFixed(1) + 's'; },
      target: (m) => m.route[Math.min(m.idx, m.route.length - 1)],
      update: (m, dt) => {
        const prevT = m.t; m.t += dt; if (prevT < 0 && Math.ceil(-m.t) !== Math.ceil(-prevT)) { SFX.check(); if (m.t >= 0) bigMsg('GO!', '', '#38e07b', 900); }
        if (m.t < 0) { P.car.vel.set(0, 0, 0); return false; }
        if (!P.car) { m.fail('You left your car'); return false; }
        const cp = m.route[m.idx]; if (Math.hypot(cp.x - P.car.pos.x, cp.z - P.car.pos.z) < 9) { m.idx++; SFX.check(); if (m.idx >= m.route.length) { m.place = 1 + m.finishers.length; return true; } }
        return false;
      } },
    { start(m) { m.cleanup(); const won = m.place === 1; save.stats.races++; if (won) { const first = !save.races[id]; save.races[id] = true; m.prize = first ? prize : Math.round(prize * 0.3); if (first && id === 'r1' && !save.garage.includes('sports')) { save.garage.push('sports'); toast('🏎️ Lucia gave you a Sports Coupe!', '#38e07b', 3500); } if (first && id === 'r3') { if (!save.garage.includes('muscle')) save.garage.push('muscle'); unlock('racer'); toast('🏎️ Lucia gave you her Muscle Car!', '#38e07b', 3500); } say([L(pick(['Not bad. Not bad at all.', 'Okay, okay. You\'re fast.', 'My crew is NEVER living this down.']))]); } else { m.prize = 0; say([L('P' + m.place + '? Come back when you can drive.')]); m.fail('You finished P' + m.place); } }, update: () => true },
  ];
}
// mission runtime
function availableMissions(c) { const r = rankOf(save.xp); return Object.entries(MISSIONS).filter(([id, d]) => d.c === c && d.req() && (c === 'stranger' || r >= d.rank)); }
function lockedMission(c) { const r = rankOf(save.xp); return Object.entries(MISSIONS).find(([id, d]) => d.c === c && d.req() && r < d.rank); }
function startMission(id) {
  if (MS || P.dead) return;
  const d = MISSIONS[id]; MS = { id, d, steps: d.steps(), i: 0, started: false, fail: (r) => { MS && (MS.failReason = r); } };
  if (taxi) taxi = null;
  bigMsg(d.title.toUpperCase(), CONTACTS[d.c].name, '#ffd166', 2000); SFX.ping(); hudDirty = true;
}
function failMission(reason) {
  S.lastFail = reason;
  if (!MS) return; const m = MS; MS = null; if (m.cleanup) m.cleanup();
  setTimeout(() => { bigMsg('MISSION FAILED', reason, '#ff4d5e', 2800); SFX.fail(); }, P.dead ? 2700 : 0);
  missionBeam.visible = false; arrow.visible = false; hudDirty = true;
}
function passMission() {
  const m = MS; MS = null; const d = m.d; const cash = (d.reward ? d.reward(m) : 0) + (m.prize || 0);
  if (d.done) d.done(m); if (cash > 0) save.cash += cash; addXP(d.xp || 50);
  setTimeout(() => { bigMsg('MISSION PASSED', cash > 0 ? '+' + fmt(cash) + '  •  +' + (d.xp || 50) + ' XP' : '+' + (d.xp || 50) + ' XP', '#38e07b', 3000); SFX.pass(); }, 400);
  missionBeam.visible = false; arrow.visible = false; persist(); hudDirty = true; refreshBeams();
}
function updateMission(dt) {
  if (!MS) return null;
  const m = MS; const st = m.steps[m.i];
  if (!st) { passMission(); return null; }
  if (!st._s) { st._s = true; st.start && st.start(m); }
  if (m.failReason) { failMission(m.failReason); return null; }
  if (st.update(m, dt)) { m.i++; if (m.i >= m.steps.length) passMission(); return null; }
  if (m.failReason) { failMission(m.failReason); return null; }
  const text = typeof st.text === 'function' ? st.text(m) : st.text;
  const tp = st.target ? st.target(m) : null;
  return { text, pos: tp, color: 0xff4fa3 };
}
let strangerSpot = null;
function refreshBeams() {
  for (const k in CONTACTS) { const b = contactBeams[k]; b.visible = false; }
}
function updateContacts(dt) {
  const f = focusPos();
  // stranger appears at night at one spot
  if (S.night > 0.6) { if (!strangerSpot) strangerSpot = pick(LOC.strangerSpots); } else strangerSpot = null;
  CONTACTS.stranger.spot = strangerSpot;
  if (strangerSpot) contactBeams.stranger.position.set(strangerSpot.x, CURB, strangerSpot.z);
  for (const k in CONTACTS) {
    const c = CONTACTS[k], b = contactBeams[k];
    if (!c.spot || MS) { b.visible = false; continue; }
    const av = availableMissions(k), d = Math.hypot(f.x - c.spot.x, f.z - c.spot.z);
    b.visible = av.length > 0 && (k !== 'stranger' || d < 60);
    if (b.visible && d < 3 && !P.dead && !(contactCD > S.clock)) {
      contactCD = S.clock + 4;
      if (av.length === 1) startMission(av[0][0]);
      else choose(av.map(([id, d]) => d.title).concat(['Not now']), (i) => { if (i < av.length) startMission(av[i][0]); });
    }
  }
}
let contactCD = 0;

/* ============================== RANDOM EVENTS ============================== */
const events = [];
let eventT = 9, rareT = 200;
function evMarker(color) { const b = makeBeam(color, 1.6); b.scale.set(1, 0.6, 1); return b; }
function endEvent(e) { const i = events.indexOf(e); if (i >= 0) events.splice(i, 1); if (e.beam) scene.remove(e.beam); if (e.cleanup) e.cleanup(); }
function roadSpotNear(f, minD, maxD) { for (let k = 0; k < 40; k++) { const i = R2() * (N + 1) | 0, j = R2() * (N + 1) | 0, x = road(i), z = road(j), d = Math.hypot(x - f.x, z - f.z); if (d > minD && d < maxD) return { i, j, x, z }; } return null; }
const EVENTS = {
  chase() {
    const f = focusPos(), s = roadSpotNear(f, 60, 120); if (!s) return null;
    const sus = spawnVehicle(pick(['sports', 'muscle', 'sedan']), pick([0x2b2d42, 0x6a040f, 0x3a0ca3]), s.x, s.z, R2() * 6, false); fleeDriver(sus, 0.9); sus.mission = true;
    const cops = []; for (let k = 0; k < 2; k++) { const v = spawnVehicle('police', undefined, s.x + (k ? 9 : -9), s.z + 6, 0, false); v.ai = { kind: 'police', dyn: true, target: sus }; v.role = 'police'; police.push(v); cops.push(v); }
    toast('🚨 Police chase nearby! Ram the suspect for a reward', '#4da3ff', 3200);
    const e = { name: 'chase', t: 75, sus, beam: evMarker(0x4da3ff), update(dt) { this.beam.position.set(sus.pos.x, 0, sus.pos.z); if (sus.wrecked) { addCash(400, '👮 Citizen\'s arrest! Suspect stopped'); addXP(40); return true; } if (sus.pos.distanceTo(focusPos()) > 320) return true; return false; },
      cleanup() { for (const c of cops) if (c.ai) { c.ai.target = null; c.ai.leaving = true; } if (!sus.removed && sus !== P.car && sus.ai) sus.ai = null; } };
    return e;
  },
  armored() {
    const f = focusPos(), s = roadSpotNear(f, 70, 140); if (!s) return null;
    const v = spawnVehicle('armored', undefined, s.x, s.z, 0, false); fleeDriver(v, 0.45); v.mission = true;
    toast('🚚 An armored truck is passing through. Feeling lucky?', '#e9c46a', 3200);
    const e = { name: 'armored', t: 120, v, beam: evMarker(0xe9c46a), alerted: false,
      update() { this.beam.position.set(v.pos.x, 0, v.pos.z); if (v.wrecked) { for (let k = 0; k < 3; k++) dropPickup(v.pos, 'bag', 250 + (R2() * 300 | 0), { life: 60 }); addXP(40); return true; } if (v.pos.distanceTo(focusPos()) > 350) return true; return false; },
      onImpact(k, o) { if (o === v && !this.alerted) { this.alerted = true; setWanted(Math.max(S.wanted, 2)); fleeDriver(v, 0.7); toast('🚨 The guards radioed the cops!', '#ff6b6b'); } },
      cleanup() { if (!v.removed && v !== P.car) v.ai = null; } };
    return e;
  },
  mugging() {
    const f = focusPos(); const victim = peds.find(p => p.kind === 'civ' && p.down <= 0 && p.pos.distanceTo(f) > 15 && p.pos.distanceTo(f) < 45); if (!victim) return null;
    const thief = spawnNPC({ skin: pick(['#c68642', '#8d5524', '#f1c9a5']), top: '#3d405b', pants: '#111111', hair: '#111111', shoe: '#ffffff' }, victim.pos.clone().add(new THREE.Vector3(1, 0, 0)), { state: 'flee', pers: 'coward', hp: 30 });
    if (!thief) return null; thief.t = 30; thief.fleeFrom = victim.pos.clone(); thief.base = 6.5;
    victim.state = 'idle'; victim.armsUp = 3; victim.idle = 3;
    say([['😫', 'Victim', 'HEY! He took my purse! STOP THIEF!']]);
    const e = { name: 'mugging', t: 30, beam: evMarker(0xff6b6b), update() { this.beam.position.set(thief.pos.x, CURB, thief.pos.z); if (thief.dead) return true; return false; },
      onKO(p) { if (p === thief) { dropPickup(p.pos, 'cash', 150); toast('🦸 Hero! Grab the purse money.', '#7af0ff'); addXP(30); victim.cheer = 3; victim.state = 'cheer'; setTimeout(() => { if (!victim.dead) { victim.state = 'walk'; } }, 3000); this.done = true; } },
      cleanup() { if (!thief.dead) { thief.kind = 'civ'; thief.state = 'walk'; thief.from = 0; thief.to = 0; } } };
    e.update = function () { this.beam.position.set(thief.pos.x, CURB, thief.pos.z); return this.done || thief.dead; };
    return e;
  },
  gangfight() {
    const f = focusPos(); if (P.car) return null;
    const ang = R2() * 6.28, c = { x: f.x + Math.cos(ang) * 22, z: f.z + Math.sin(ang) * 22 }; const p0 = new THREE.Vector3(c.x, 0, c.z); resolveCircle(p0, 2);
    const A = [], B = [];
    for (let k = 0; k < 3; k++) { const a = spawnGang(3, { x: p0.x - 2, z: p0.z }), b = spawnGang(4, { x: p0.x + 2, z: p0.z }); if (a) A.push(a); if (b) B.push(b); }
    A.forEach((a, i) => { a.state = 'fight'; a.target = B[i % B.length]; }); B.forEach((b, i) => { b.state = 'fight'; b.target = A[i % A.length]; });
    toast('🥊 Gang fight! Kings vs Vipers', '#e9c46a', 3000); panic(p0, 20, p0);
    return { name: 'gangfight', t: 60, beam: evMarker(0xe9c46a), update() { this.beam.position.set(p0.x, 0, p0.z); return [...A, ...B].every(p => p.dead || p.down > 0 || p.state !== 'fight'); } };
  },
  racer() {
    if (!P.car || Math.abs(P.car.speed) < 6) return null;
    const v0 = P.car, fx = Math.sin(v0.yaw), fz = Math.cos(v0.yaw);
    const rv = spawnVehicle(pick(['sports', 'muscle', 'super']), pick([0xf72585, 0x4cc9ff, 0xb5e48c]), v0.pos.x - fz * 3.6 - fx * 2, v0.pos.z + fx * 3.6 - fz * 2, v0.yaw, false); resolveCircle(rv.pos, 1.4);
    const goalN = roadSpotNear(focusPos(), 200, 300); if (!goalN) { removeVehicle(rv); return null; }
    const goal = new THREE.Vector3(goalN.x, 0, goalN.z); rv.mission = true; rv.invuln = true; rv.vel.copy(v0.vel); rv.spec = { ...rv.spec, max: rv.spec.max * 0.92 };
    rv.ai = { kind: 'drive', dyn: true, fn: (v, dt) => { const [nx, nz] = navPoint(v, goal.x, goal.z); aiDrive(v, nx, nz, dt, { nitro: true }); } };
    say([['😎', 'Street Racer', 'Nice ride, slowpoke. Race you to the pink beam! $400 says I win.']]);
    const e = { name: 'racer', t: 70, beam: evMarker(0xf72585), update() { this.beam.position.set(goal.x, 0, goal.z); const me = focusPos();
      if (Math.hypot(me.x - goal.x, me.z - goal.z) < 9 && P.car) { addCash(400, '🏁 You smoked the street racer!'); addXP(40); return true; }
      if (Math.hypot(rv.pos.x - goal.x, rv.pos.z - goal.z) < 9) { toast('😎 "Too slow!" The racer won.', '#ff6b6b'); return true; } return false; }, target: goal,
      cleanup() { if (!rv.removed && rv !== P.car) rv.ai = null; } };
    return e;
  },
  brawl() {
    if (P.car) return null; const f = focusPos();
    const p = spawnNPC({ skin: pick(['#f1c9a5', '#8d5524', '#c68642']), top: '#ffffff', sleeve: pick(['#f1c9a5', '#8d5524']), pants: '#2b2d42', hair: '#111111', shoe: '#111111' }, new THREE.Vector3(f.x + 5, CURB, f.z + 3), { state: 'idle', pers: 'tough', hp: 90 });
    if (!p) return null; resolveCircle(p.pos, 0.5);
    say([['😤', 'Tough Guy', pick(['You looking at me?! Let\'s go, right here, right now!', 'My buddies bet $250 I can knock you out. Put \'em up!'])]]);
    setTimeout(() => { if (!p.dead) { p.state = 'fight'; p.target = 'player'; } }, 1500);
    const fans = []; for (let k = 0; k < 4; k++) { const q = spawnNPC(LOOKS.civ(), new THREE.Vector3(f.x + Math.cos(k * 1.6) * 6, CURB, f.z + Math.sin(k * 1.6) * 6), { state: 'cheer', pers: 'coward', hp: 25 }); if (q) { resolveCircle(q.pos, 0.5); fans.push(q); } }
    const e = { name: 'brawl', t: 60, noCrime: true, beam: null,
      onKO(q) { if (q === p) { addCash(250, '🥊 You won the street fight!'); addXP(30); SFX.cheer(); fans.forEach(f2 => f2.cheer = 3); this.done = true; } },
      update() { return this.done || p.dead || P.dead; },
      cleanup() { for (const q of fans) if (!q.dead) { q.kind = 'civ'; q.state = 'walk'; q.from = 0; q.to = 0; } if (!p.dead) { p.kind = 'civ'; p.state = 'walk'; p.from = 0; p.to = 0; } } };
    return e;
  },
  rare() {
    const owned = save.garage.includes('gold'); if (owned) return null;
    const s = pick(LOC.rareSpots); const v = spawnCarAt('gold', s); v.rare = true;
    toast('📸 Someone spotted a GOLD supercar parked in ' + DISTRICTS[districtAt(s.x, s.z)].name + '!', '#ffd60a', 4500);
    return { name: 'rare', t: 240, beam: evMarker(0xffd60a), update() { this.beam.position.set(v.pos.x, 0, v.pos.z); if (P.car === v) { toast('🏆 You found the Gold Rush! Store it in your garage!', '#ffd60a', 4000); return true; } return v.removed || v.wrecked; } };
  },
  icecream() {
    if (S.night < 0.6) return null; const pk = pick(blockInfoCache().filter(b => b.park) || []); if (!pk) return null;
    const v = spawnVehicle('icecream', undefined, pk.cx + 7, pk.cz + 7, R2() * 6, false);
    toast('🍦 You hear a creepy ice cream jingle somewhere in the night...', '#ff8fc7', 4000);
    return { name: 'icecream', t: 180, beam: null, update(dt) { if ((S.frameN % 90) === 0 && v.pos.distanceTo(focusPos()) < 60) { [784, 659, 784, 880].forEach((f, i) => tone(f, 0.18, 'sine', 0.04, null, i * 0.2)); } return P.car === v || v.removed; } };
  },
};
function updateEvents(dt) {
  eventT -= dt; rareT -= dt;
  if (eventT <= 0 && !MS && events.length < 2 && S.state === 'play') {
    eventT = 40 + R2() * 40;
    let pool = ['chase', 'chase', 'armored', 'mugging', 'mugging', 'gangfight', 'racer', 'racer', 'brawl'];
    if (S.night > 0.6) pool.push('icecream');
    if (rareT <= 0) { pool = ['rare']; rareT = 600; }
    if (!S.firstEvent) { pool = ['chase']; S.firstEvent = true; }
    const name = pick(pool); const e = EVENTS[name](); if (e) events.push(e); else eventT = 5;
  }
  for (const e of [...events]) { e.t -= dt; if (e.update(dt) || e.t <= 0) endEvent(e); }
}

/* ============================== GANG TURF ============================== */
let gangT = 0;
function manageGangs(dt) {
  gangT -= dt; if (gangT > 0) return; gangT = 3;
  const f = focusPos();
  for (const g of [3, 4]) {
    const near = peds.filter(p => p.kind === 'gang' && p.gang === g);
    for (const p of near) if (p.pos.distanceTo(f) > 200 && !events.length) removePed(p);
    if (near.length < 6) for (const s of LOC.gangSpots[g]) if (Math.hypot(s.x - f.x, s.z - f.z) < 140 && Math.hypot(s.x - f.x, s.z - f.z) > 40 && peds.filter(p => p.kind === 'gang' && p.home && Math.hypot(p.home.x - s.x, p.home.z - s.z) < 6).length < 2) { spawnGang(g, s); spawnGang(g, s); }
  }
}

/* ============================== MINIMAP ============================== */
const mapCv = $('map'), mctx = mapCv.getContext('2d');
let mapT = 0;
function drawMap(objective) {
  const Sz = 236, c = Sz / 2, scale = Sz / 2 / 100, f = focusPos(), sa = Math.sin(camYaw), ca = Math.cos(camYaw);
  const tm = (x, z) => { const dx = x - f.x, dz = z - f.z; return [c - (dx * -ca + dz * sa) * scale, c - (dx * sa + dz * ca) * scale]; };
  mctx.clearRect(0, 0, Sz, Sz); mctx.save(); mctx.beginPath(); mctx.arc(c, c, c, 0, Math.PI * 2); mctx.clip();
  mctx.fillStyle = S.night > 0.5 ? '#2a2c3a' : '#6d6a64'; mctx.fillRect(0, 0, Sz, Sz);
  mctx.strokeStyle = S.night > 0.5 ? '#8a8ea8' : '#e4e0d8'; mctx.lineWidth = ROADW * scale; mctx.lineCap = 'square';
  for (let i = 0; i <= N; i++) { let p1 = tm(road(i), -HALF), p2 = tm(road(i), HALF); mctx.beginPath(); mctx.moveTo(...p1); mctx.lineTo(...p2); mctx.stroke(); p1 = tm(-HALF, road(i)); p2 = tm(HALF, road(i)); mctx.beginPath(); mctx.moveTo(...p1); mctx.lineTo(...p2); mctx.stroke(); }
  if (S.wanted > 0) { const [sx, sy] = tm(lastSeen.x, lastSeen.z); mctx.fillStyle = (S.frameN >> 4) % 2 ? 'rgba(255,40,40,0.22)' : 'rgba(40,80,255,0.22)'; mctx.beginPath(); mctx.arc(sx, sy, (40 + S.wanted * 15) * scale, 0, 7); mctx.fill(); }
  const dot = (x, z, col, r, clampIt, label) => {
    let [px, py] = tm(x, z); const dx = px - c, dy = py - c, l = Math.hypot(dx, dy);
    if (l > c - 10) { if (!clampIt) return; px = c + dx / l * (c - 10); py = c + dy / l * (c - 10); }
    mctx.fillStyle = col; mctx.beginPath(); mctx.arc(px, py, r, 0, 7); mctx.fill(); mctx.strokeStyle = '#000'; mctx.lineWidth = 2; mctx.stroke();
    if (label) { mctx.fillStyle = '#000'; mctx.font = 'bold ' + (r * 1.3 | 0) + 'px sans-serif'; mctx.textAlign = 'center'; mctx.textBaseline = 'middle'; mctx.fillText(label, px, py + 1); }
  };
  LOC.stores.forEach((s, k) => { if (!(storeCD[k] > S.clock)) dot(s.x, s.z, '#38e07b', 6, false, '$'); });
  LOC.spray.forEach(s => dot(s.x, s.z, '#ffd60a', 6, false, 'P'));
  if (save.flags.chop) dot(LOC.chop.x, LOC.chop.z, '#ff7b00', 6, false, 'C');
  const hs = homeSpot(); dot(hs.x, hs.z, '#7af0ff', 7, true, 'H');
  for (const k in contactBeams) if (contactBeams[k].visible) { const b = contactBeams[k].position; dot(b.x, b.z, '#' + CONTACTS[k].color.toString(16).padStart(6, '0'), 9, true, CONTACTS[k].av === '🎩' ? '?' : k[0].toUpperCase()); }
  for (const e of events) if (e.beam) { const b = e.beam.position; dot(b.x, b.z, '#' + e.beam.userData.beam.material.color.getHexString(), 7, true, '!'); }
  for (const v of police) if (!v.removed && !v.wrecked) dot(v.pos.x, v.pos.z, (S.frameN >> 3) % 2 ? '#ff3030' : '#3060ff', 5, false);
  for (const p of peds) if (p.kind === 'cop' && p.state === 'chase') dot(p.pos.x, p.pos.z, '#4da3ff', 3, false);
  if (objective && objective.pos) dot(objective.pos.x, objective.pos.z, '#ff4fa3', 10, true, '★');
  for (const p of pickups) dot(p.pos.x, p.pos.z, '#7dff9b', 4, false);
  for (let k = 0; k < COIN_N; k++) { const m = coinMeshes[k]; if (m.visible && m.position.distanceTo(f) < 50) dot(m.position.x, m.position.z, '#ffcc00', 3.5, false); }
  const rel = (P.car ? P.car.yaw : P.yaw) - camYaw; mctx.translate(c, c); mctx.rotate(-rel);
  mctx.fillStyle = '#fff'; mctx.strokeStyle = '#000'; mctx.lineWidth = 2; mctx.beginPath(); mctx.moveTo(0, -13); mctx.lineTo(9, 10); mctx.lineTo(0, 5); mctx.lineTo(-9, 10); mctx.closePath(); mctx.fill(); mctx.stroke();
  mctx.restore();
}

/* ============================== HUD ============================== */
let hudDirty = true, lastDistrict = -1, districtT = 0;
function updateHUD(dt, objective) {
  if (hudDirty) {
    $('cash').textContent = fmt(save.cash);
    $('hpBar').firstElementChild.style.width = Math.max(0, P.hp) + '%';
    const r = rankOf(save.xp), lo = RANKS[r][0], hi = RANKS[r + 1] ? RANKS[r + 1][0] : lo + 1;
    $('rankTxt').textContent = 'R' + (r + 1) + ' ' + RANKS[r][1]; $('xpBar').firstElementChild.style.width = clamp((save.xp - lo) / (hi - lo) * 100, 0, 100) + '%';
    const inCar = !!P.car;
    $('bA').textContent = inCar ? 'BRAKE' : 'PUNCH'; $('bB').textContent = inCar ? 'HORN' : 'RUN'; $('bD').textContent = inCar ? 'NITRO' : 'JUMP';
    $('speed').classList.toggle('hidden', !inCar);
    const st = $('stars'); if (S.wanted > 0) { st.classList.remove('hidden'); st.innerHTML = [1, 2, 3, 4, 5].map(i => '<span class="' + (i <= S.wanted ? 'on' : 'off') + '">★</span>').join(''); } else st.classList.add('hidden');
    hudDirty = false;
  }
  $('stars').classList.toggle('flash', S.wanted > 0 && seenT <= 0);
  ctx = findContext(); const bC = $('bC');
  if (!!ctx === bC.classList.contains('hidden')) bC.classList.toggle('hidden', !ctx);
  if (ctx && bC.innerHTML !== ctx.label) bC.innerHTML = ctx.label;
  if (P.car) { const s = String(Math.round(Math.abs(P.car.speed) * 3.6)); if ($('spd').textContent !== s) $('spd').textContent = s; $('nitro').firstElementChild.style.width = (P.car.nitro * 100) + '%'; }
  const o = $('obj');
  if (objective && objective.text) { if (o.innerHTML !== objective.text) o.innerHTML = objective.text; o.classList.remove('hidden'); } else o.classList.add('hidden');
  dmgFlash = Math.max(0, dmgFlash - dt * 1.5); $('dmg').style.opacity = Math.max(dmgFlash, P.hp < 30 ? 0.35 + Math.sin(S.clock * 6) * 0.15 : 0);
  if (dlgT > 0) { dlgT -= dt; if (dlgT <= 0) nextDialog(); }
  const dIdx = districtAt(focusPos().x, focusPos().z);
  if (dIdx !== lastDistrict) { lastDistrict = dIdx; const el = $('district'); el.textContent = DISTRICTS[dIdx].name; el.style.color = DISTRICTS[dIdx].color; el.style.opacity = 1; districtT = 2.2; }
  if (districtT > 0) { districtT -= dt; if (districtT <= 0) $('district').style.opacity = 0; }
  mapT -= dt; if (mapT <= 0) { mapT = 0.08; drawMap(objective); $('clock').textContent = clockText() + (S.rain > 0.3 ? ' 🌧️' : S.night > 0.6 ? ' 🌙' : ' ☀️'); }
}

/* ============================== PHONE ============================== */
let tab = 'jobs';
const TABS = [['jobs', '📍 Jobs'], ['garage', '🚗 Garage'], ['props', '🏢 Property'], ['me', '📊 Me'], ['awards', '🏆 Awards'], ['set', '⚙️']];
function openPhone() { if (S.state !== 'play') return; S.state = 'phone'; engineOff(); renderPhone(); $('phone').classList.remove('hidden'); persist(); }
function closePhone() { S.state = 'play'; $('phone').classList.add('hidden'); if (P.car) engineOn(); }
function item(av, name, sub, btnHtml) { return '<div class="item"><div class="av">' + av + '</div><div class="nm">' + name + (sub ? '<small>' + sub + '</small>' : '') + '</div>' + (btnHtml || '') + '</div>'; }
function renderPhone() {
  $('pCash').textContent = fmt(save.cash);
  $('tabs').innerHTML = TABS.map(([k, l]) => '<button class="tab' + (k === tab ? ' on' : '') + '" data-tab="' + k + '">' + l + '</button>').join('');
  let h = '';
  const r = rankOf(save.xp);
  if (tab === 'jobs') {
    if (MS) h += item('⚡', 'Current: ' + MS.d.title, CONTACTS[MS.d.c].name, '<button class="red" data-act="cancel">QUIT</button>');
    for (const k of ['vinny', 'lucia', 'tony', 'stranger']) {
      const c = CONTACTS[k], av = availableMissions(k), lk = lockedMission(k);
      if (k === 'stranger' && save.stranger === 0 && rankOf(save.xp) < 2) { h += item('❔', 'Unknown number', 'Rank up to find out…'); continue; }
      if (k === 'stranger') { h += item(c.av, c.name, save.stranger >= 3 ? 'Gone. For now.' : 'Only appears at night. Look for a purple beam.'); continue; }
      if (av.length) h += item(c.av, c.name, av.map(([id, d]) => d.title).join(' • '), '<button class="go" data-gps="' + k + '">GPS</button>');
      else if (lk) h += item(c.av, c.name, '🔒 ' + lk[1].title + ' — unlocks at Rank ' + (lk[1].rank + 1));
      else h += item(c.av, c.name, k === 'vinny' && save.story >= 6 ? 'Story complete. You run this town.' : 'Nothing right now');
    }
    h += '<div class="sec">ALWAYS AVAILABLE</div>' + item('💰', 'Rob a store', 'Green $ on the map. Hold your ground ~5s.') + item('🚕', 'Taxi', 'Get in any taxi and tap TAXI JOB.') + item('🔧', 'Chop Shop', save.flags.chop ? 'Sell any stolen car at Vinny\'s (orange C).' : '🔒 Unlocks during Vinny\'s story') + item('🛫', 'Stunt jumps', save.stunts.length + '/' + ramps.length + ' unique jumps found') + item('🪙', 'Hidden stashes', save.coins.length + '/' + COIN_N + ' found');
  } else if (tab === 'garage') {
    h += '<div class="sec">YOUR GARAGE (' + save.garage.length + '/' + (save.props.penthouse ? 8 : 4) + ') — store cars at the blue H garage</div>';
    for (const k of save.garage) h += item('🚗', CARS[k].name, 'Top speed ' + Math.round(CARS[k].max * 3.6) + ' km/h', '<button class="go" data-call="' + k + '">CALL</button>');
    h += '<div class="sec">DEALERSHIP</div>';
    for (const k in CARS) if (CARS[k].cost > 0 && !save.garage.includes(k)) h += item('🏷️', CARS[k].name, Math.round(CARS[k].max * 3.6) + ' km/h', '<button data-buy="' + k + '" ' + (save.cash < CARS[k].cost ? 'disabled' : '') + '>' + fmt(CARS[k].cost) + '</button>');
    h += '<div class="sec">COLLECTION (' + save.discovered.length + '/' + Object.keys(CARS).length + ')</div>';
    for (const k in CARS) { const d = save.discovered.includes(k); h += item(d ? '✅' : (CARS[k].secret ? '❓' : '⬜'), d ? CARS[k].name : (CARS[k].secret ? '??? (secret)' : CARS[k].name), d ? 'Discovered' : 'Drive one to discover it'); }
  } else if (tab === 'props') {
    h += '<div class="sec">INCOME: ' + fmt(incomeRate()) + ' per game hour (every 40s)</div>';
    for (const k in PROPS) { const p = PROPS[k], own = save.props[k], lock = p.req && !p.req(); h += item(p.icon, p.name, own ? '✅ Owned' + (p.rate ? ' • +' + fmt(p.rate) + '/hr' : '') : lock ? '🔒 Locked' : (p.rate ? '+' + fmt(p.rate) + '/hr' : 'Safehouse + 8 garage slots') + ' • Walk to the blue beam to buy', own ? '' : '<button data-gps-prop="' + k + '" ' + (lock ? 'disabled' : '') + '>' + fmt(p.cost) + '</button>'); }
  } else if (tab === 'me') {
    h += item('⭐', 'Rank ' + (r + 1) + ' — ' + RANKS[r][1], save.xp + ' XP' + (RANKS[r + 1] ? ' • next at ' + RANKS[r + 1][0] : ''));
    for (const [k, n] of [['drive', '🚗 Driving'], ['fight', '👊 Fighting'], ['stamina', '🏃 Stamina']]) h += '<div class="item"><div class="nm">' + n + '<div class="bar"><i style="width:' + save.skills[k] + '%"></i></div></div><b>' + Math.floor(save.skills[k]) + '</b></div>';
    const st = save.stats; h += '<div class="sec">STATS</div><div style="font-weight:700;line-height:1.7;opacity:.9">👊 Knockouts: ' + st.kos + '<br>🚗 Cars stolen: ' + st.stolen + '<br>💰 Stores robbed: ' + st.robberies + '<br>😎 Police escapes: ' + st.escapes + '<br>⭐ Highest wanted: ' + st.maxStars + '<br>🚕 Taxi fares: ' + st.fares + '<br>⚡ Top speed: ' + Math.round(st.maxSpeed) + ' km/h<br>🔥 Best drift: ' + fmt(st.bestDrift) + '</div>';
  } else if (tab === 'awards') {
    h += '<div class="sec">' + save.ach.length + '/' + Object.keys(ACH).length + ' UNLOCKED</div>';
    for (const k in ACH) { const a = ACH[k], got = save.ach.includes(k); h += item(got ? a[0] : '🔒', a[1], a[2]); }
  } else {
    h += item('🔊', 'Sound', save.muted ? 'Off' : 'On', '<button data-act="mute">' + (save.muted ? 'TURN ON' : 'TURN OFF') + '</button>');
    h += item('✨', 'Graphics', { auto: 'Auto (' + curQ + ')', high: 'High', medium: 'Medium', low: 'Low' }[save.quality], '<button data-act="quality">CHANGE</button>');
    h += item('📍', 'Stuck?', 'Teleport home', '<button data-act="home">GO HOME</button>');
    h += item('❓', 'Controls', 'Left: move • Right: look • PUNCH/BRAKE • RUN/HORN • JUMP/NITRO • green button = action');
    h += '<div style="opacity:.5;font-size:12px;margin-top:8px">v' + VERSION + ' • progress saves on this device</div>';
  }
  $('pBody').innerHTML = h;
}
$('phone').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return; initAudio(); SFX.click();
  if (b.dataset.tab) { tab = b.dataset.tab; renderPhone(); return; }
  if (b.dataset.call) { callCar(b.dataset.call); return; }
  if (b.dataset.buy) { const k = b.dataset.buy; if (save.cash >= CARS[k].cost) { save.cash -= CARS[k].cost; save.garage.push(k); SFX.cash(); persist(); hudDirty = true; toast('🏷️ Bought a ' + CARS[k].name + '! Call it from your garage.', '#7dff9b'); } renderPhone(); return; }
  if (b.dataset.gps) { gps = CONTACTS[b.dataset.gps].spot; closePhone(); toast('📍 GPS set to ' + CONTACTS[b.dataset.gps].name, '#ff4fa3'); return; }
  if (b.dataset.gpsProp) { gps = PROPS[b.dataset.gpsProp].spot; closePhone(); toast('📍 GPS set to ' + PROPS[b.dataset.gpsProp].name, '#4cc9ff'); return; }
  const a = b.dataset.act;
  if (a === 'cancel') { failMission('You quit'); renderPhone(); }
  if (a === 'mute') { save.muted = !save.muted; if (save.muted) stopLoops(); else initAudio(); persist(); renderPhone(); }
  if (a === 'quality') { const order = ['auto', 'high', 'medium', 'low']; save.quality = order[(order.indexOf(save.quality) + 1) % 4]; qChecked = true; applyQuality(save.quality === 'auto' ? 'high' : save.quality); persist(); renderPhone(); }
  if (a === 'home') { if (P.car) exitCar(); if (S.wanted > 0) { toast('Not while wanted!', '#ff6b6b'); return; } const h = homeSpot(); P.pos.set(h.x, CURB, h.z); camTarget.copy(P.pos); closePhone(); }
});
$('pClose').onclick = closePhone;
$('menuBtn').addEventListener('pointerdown', (e) => { e.stopPropagation(); openPhone(); });
let gps = null;

/* ============================== QUALITY ============================== */
let curQ = 'high', qChecked = save.quality !== 'auto', fpsAcc = 0, fpsN = 0;
function applyQuality(q) {
  curQ = q; const dpr = window.devicePixelRatio || 1;
  renderer.setPixelRatio(q === 'low' ? 1 : q === 'medium' ? Math.min(dpr, 1.25) : Math.min(dpr, 1.6));
  scene.traverse(o => { if (o.isDirectionalLight) o.castShadow = q !== 'low'; });
  renderer.setSize(window.innerWidth, window.innerHeight);
}
if (save.quality !== 'auto') applyQuality(save.quality);

/* ============================== CAMERA ============================== */
const ray = new THREE.Raycaster(), camTarget = new THREE.Vector3(), camWant = new THREE.Vector3(), _v = new THREE.Vector3();
function updateCamera(dt) {
  const f = focusPos();
  camTarget.lerp(_v.set(f.x, (P.car ? 1.5 + P.car.y : P.pos.y + 1.55), f.z), Math.min(1, dt * 12));
  if (P.car && S.clock - look.lastT > 1.6 && (Math.abs(P.car.speed) > 2 || P.car.air)) {
    const want = stunt ? P.car.yaw + Math.PI * 0.35 : P.car.yaw;
    camYaw = angLerp(camYaw, want, Math.min(1, dt * (stunt ? 1.2 : 2.2))); camPitch = lerp(camPitch, stunt ? 0.12 : 0.24, Math.min(1, dt * 1.5));
  }
  const dist = camDist + (P.car ? Math.min(3.5, Math.abs(P.car.speed) * 0.07) : 0) + (stunt ? 3 : 0);
  const cp = Math.cos(camPitch), sp = Math.sin(camPitch); const dir = _v.set(-Math.sin(camYaw) * cp, sp, -Math.cos(camYaw) * cp);
  let d = dist; ray.set(camTarget, dir); ray.far = dist; const hits = ray.intersectObjects(camBlockers, false); if (hits.length) d = Math.max(1.0, hits[0].distance - 0.35);
  camWant.copy(camTarget).addScaledVector(dir, d); if (camWant.y < 0.35) camWant.y = 0.35;
  camera.position.copy(camWant);
  if (shake > 0) { camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake; shake = Math.max(0, shake - dt * 1.5); }
  camera.lookAt(camTarget.x, camTarget.y + 0.15, camTarget.z);
  const fov = P.car ? 60 + Math.min(14, Math.abs(P.car.speed) * 0.28) + (P.car.nitroOn ? 10 : 0) : 60;
  if (Math.abs(camera.fov - fov) > 0.1) { camera.fov = lerp(camera.fov, fov, Math.min(1, dt * 3)); camera.updateProjectionMatrix(); }
}

/* ============================== WORLD POPULATION ============================== */
blockInfoCache.c = blocksInfo;
const TRAFFIC_COLORS = [0x2f5fa8, 0xa4161a, 0xeeeeee, 0x2a9d8f, 0x6c757d, 0x1d3557, 0x5a189a, 0x111111, 0xc0c0c0, 0x8d6e63, 0x264653, 0x7a0019];
function populate() {
  const pr = (() => { let a = 31337; return () => (a = a * 16807 % 2147483647) / 2147483647; })();
  for (let k = 0; k < 16; k++) {
    const i = pr() * N | 0, j = pr() * N | 0, side = pr() * 4 | 0, key = ['sedan', 'sedan', 'suv', 'taxi', 'van', 'sports', 'sedan'][pr() * 7 | 0];
    const s = curbSpot(i, j, side, (pr() - 0.5) * 24); spawnVehicle(key, key === 'taxi' ? undefined : TRAFFIC_COLORS[pr() * TRAFFIC_COLORS.length | 0], s.x, s.z, s.yaw, false);
  }
  const s0 = curbSpot(4, 4, 2, -14); myCar = spawnVehicle(save.garage.includes('sports') ? 'sports' : 'sedan', undefined, s0.x, s0.z, s0.yaw, false); myCar.owned = true;
  for (let k = 0; k < 24; k++) { const key = pick(['sedan', 'sedan', 'sedan', 'suv', 'suv', 'taxi', 'van', 'sports', 'police']); const v = spawnVehicle(key, key === 'taxi' || key === 'police' ? undefined : pick(TRAFFIC_COLORS), 0, 0, 0, true); if (key === 'police') v.role = 'patrol'; if (v.pos.distanceTo(P.pos) < 25) initAI(v); }
  for (let k = 0; k < 40; k++) spawnCiv(P.pos.x, P.pos.z, 8, 140);
  // nightclub lux cars
  spawnVehicle('super', 0xffffff, curbSpot(4, 3, 1, 8).x, curbSpot(4, 3, 1, 8).z, curbSpot(4, 3, 1, 8).yaw, false);
  spawnVehicle('muscle', undefined, curbSpot(4, 3, 1, -16).x, curbSpot(4, 3, 1, -16).z, curbSpot(4, 3, 1, -16).yaw, false);
}
let trafficT = 0;
function manageTraffic(dt) {
  trafficT -= dt; if (trafficT > 0) return; trafficT = 1;
  const f = focusPos();
  for (const v of vehicles) if (v.ai?.kind === 'traffic' && v.pos.distanceTo(f) > 220) initAI(v, undefined, undefined, f);
  for (const v of [...vehicles]) if (!v.ai && !v.owned && v !== P.car && (v.wrecked || v.mission) && v.pos.distanceTo(f) > 200) removeVehicle(v);
}

/* ============================== OBJECTIVES / ARROW ============================== */
function updateObjective(dt, obj) {
  const f = focusPos();
  let target = obj && obj.pos ? obj.pos : null;
  if (!target && gps) { target = gps; if (Math.hypot(f.x - gps.x, f.z - gps.z) < 6) { gps = null; target = null; } }
  missionBeam.visible = !!(obj && obj.pos && MS);
  if (obj && obj.pos) { missionBeam.position.set(obj.pos.x, groundAt(obj.pos.x, obj.pos.z), obj.pos.z); setBeamColor(missionBeam, obj.color || 0xff4fa3); missionBeam.userData.ring.rotation.z += dt; }
  if (target) { arrow.visible = true; arrow.position.set(f.x, (P.car ? 3.2 + P.car.y : P.pos.y + 2.6) + Math.sin(S.clock * 4) * 0.1, f.z); arrow.rotation.y = Math.atan2(target.x - f.x, target.z - f.z); arrow.userData.mat.color.setHex(obj?.color || 0xff4fa3); }
  else arrow.visible = false;
  // coins
  for (let k = 0; k < COIN_N; k++) {
    const c = coinMeshes[k]; if (!c.visible) continue; c.rotation.y += dt * 3;
    if (Math.hypot(f.x - c.position.x, f.z - c.position.z) < (P.car ? 2.8 : 1.3)) { c.visible = false; save.coins.push(k); SFX.coin(); addCash(50, '🪙 Stash ' + save.coins.length + '/' + COIN_N, '#ffd60a'); addXP(10); if (save.coins.length === COIN_N) { addCash(2000, '🎉 ALL STASHES FOUND!'); unlock('coins'); } }
  }
}

/* ============================== START / LOOP ============================== */
function refreshStart() {
  const r = rankOf(save.xp);
  $('startInfo').textContent = save.xp > 0 ? '⭐ Rank ' + (r + 1) + ' ' + RANKS[r][1] + ' • ' + fmt(save.cash) : 'A city full of trouble. Make some.';
  $('muteBtn').textContent = save.muted ? '🔇 SOUND OFF' : '🔊 SOUND ON';
}
function offlineIncome() {
  if (!save.lastSeen) return; const mins = Math.min(180, (Date.now() - save.lastSeen) / 60000); const r = incomeRate();
  if (r > 0 && mins > 2) { const amt = Math.round(mins * r * 0.5); save.cash += amt; setTimeout(() => { bigMsg('WELCOME BACK', 'Your businesses earned ' + fmt(amt) + ' while you were away', '#4cc9ff', 3500); SFX.cash(); }, 1200); }
}
$('playBtn').onclick = () => {
  initAudio(); SFX.click(); S.state = 'play'; $('start').classList.add('hidden'); $('hud').classList.remove('hidden');
  if (!save.tut) $('tut').classList.remove('hidden');
  offlineIncome(); save.played = (save.played || 0) + 1;
  if (save.story === 0 && !save.flags.introText) { save.flags.introText = true; setTimeout(() => say([V('Hey kid. Word is you\'re new in town and broke. I can fix one of those.'), V('Come see me in Old Town. Follow the purple beam. — V 🐟')]), 9000); }
  hudDirty = true; persist();
};
$('muteBtn').onclick = () => { save.muted = !save.muted; persist(); initAudio(); if (save.muted) stopLoops(); refreshStart(); };
$('resetBtn').onclick = () => { if (confirm('Start a brand new game? All progress will be erased.')) { localStorage.removeItem(SAVE_KEY); location.reload(); } };
document.addEventListener('visibilitychange', () => { if (document.hidden) { persist(); if (S.state === 'play') openPhone(); } });
window.addEventListener('pagehide', persist);
function onResize() { renderer.setSize(window.innerWidth, window.innerHeight); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); }
window.addEventListener('resize', onResize); window.addEventListener('orientationchange', () => setTimeout(onResize, 250));

let last = performance.now(), lastSave = 0;
function frame(now) {
  requestAnimationFrame(frame);
  let raw = (now - last) / 1000; last = now; if (!(raw > 0)) raw = 0; raw = Math.min(raw, 0.05);
  tick(raw);
  try { renderer.render(scene, camera); } catch (err) { console.error(err); }
}
function tick(raw) {
  if (S.hitStop > 0) { S.hitStop -= raw; }
  const ts = S.hitStop > 0 ? 0.08 : S.timeScale;
  const dt = raw * ts;
  try {
    let objective = null;
    if (S.state === 'play') {
      S.clock += dt;
      updateTrafficLights(S.clock);
      if (P.car) updateCarPlayer(dt); else if (!P.dead || P.person.down > 0) updateFoot(dt);
      updateVehicles(dt);
      for (const p of [...peds]) updatePed(p, dt);
      manageCrowd(dt); manageGangs(dt); manageTraffic(dt);
      wantedTick(dt); managePolice(dt);
      updatePlaces(dt); updateRobbery(dt); updatePickups(dt);
      updateContacts(dt); updateEvents(dt);
      objective = updateMission(dt) || updateTaxi(dt) || (gps ? { text: '📍 GPS route', pos: gps, color: 0xff4fa3 } : null);
      if (!objective && events.length) { const e = events.find(e => e.target); if (e) objective = { text: '🏁 Beat the racer to the pink beam!', pos: e.target, color: 0xf72585 }; }
      updateObjective(dt, objective);
      updateHUD(raw, objective);
      if (S.gameMin > 180 && S.gameMin < 200) unlock('night');
      if (S.clock - lastSave > 8) { lastSave = S.clock; persist(); }
      if (!qChecked && S.clock > 3) { fpsAcc += raw; fpsN++; if (fpsAcc > 4) { const fps = fpsN / fpsAcc; qChecked = true; if (fps < 24) applyQuality('low'); else if (fps < 38) applyQuality('medium'); } }
    } else {
      S.clock += dt * 0.5; if (S.state === 'start') camYaw += dt * 0.05;
      updateTrafficLights(S.clock); updateVehicles(dt); for (const p of [...peds]) updatePed(p, dt);
    }
    updateEnvironment(S.state === 'play' ? dt : dt * 0.3, focusPos());
    updateHeli(dt, focusPos());
    updateVehicleVisuals(dt);
    const cp = camera.position;
    P.person.hide = !!P.car; if (P.dead && P.person.down > 0) { P.person.down -= dt; }
    poseAndWrite(P.person, dt);
    for (const p of peds) { const d2 = (p.pos.x - cp.x) ** 2 + (p.pos.z - cp.z) ** 2; if (d2 < 130 * 130 || ((S.frameN + p.idx) & 3) === 0) poseAndWrite(p, dt); }
    flushCrowd(); S.frameN++;
    updateCamera(raw);
  } catch (err) { console.error(err); }
}
populate();
for (const p of peds) poseAndWrite(p, 0);
camTarget.set(P.pos.x, P.pos.y + 1.55, P.pos.z);
for (const k of save.coins) if (coinMeshes[k]) coinMeshes[k].visible = false;
$('ver').textContent = 'v' + VERSION; refreshStart();
S.state = 'start'; $('start').classList.remove('hidden'); $('loading').classList.add('hidden');
requestAnimationFrame(frame);
window.__SR = { S, P, save, peds, vehicles, police, LOC, MISSIONS, startMission, get MS() { return MS; }, events, EVENTS, setWanted, enterCar, exitCar, punch, contextAction, findContext, joy, btn, ramps, heli, camera, setCam: (y, p) => { camYaw = y; camPitch = p; }, addXP, rankOf, startRobbery, get robbing() { return robbing; }, pickups, wreck, hitPed, knockDown, get bustT() { return bustT; }, get strangerSpot() { return strangerSpot; }, VERSION, sim: (sec) => { for (let i = 0; i < sec * 30; i++) tick(1 / 30); } };
