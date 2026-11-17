// Shared mutable game state hub (avoids circular-import headaches)
export const S = {
  clock: 0,          // real seconds of play (scaled)
  timeScale: 1,
  hitStop: 0,
  gameMin: 17 * 60 + 20, // in-game minutes since midnight
  night: 0,          // 0 day .. 1 night
  rain: 0,           // 0..1
  wanted: 0,         // 0..5 stars
  P: null,           // player
  vehicles: [],
  peds: [],
  state: 'loading',
  save: null,
  frameN: 0,
};
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export function angLerp(a, b, t) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return a + d * t; }
export function angDiff(a, b) { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; }
export function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
export const R2 = Math.random;
export const pick = (arr, r = R2) => arr[r() * arr.length | 0];
export const $ = (id) => document.getElementById(id);
