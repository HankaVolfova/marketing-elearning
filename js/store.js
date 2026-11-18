// Ukládání postupu. Lokálně v prohlížeči (localStorage), s verzováním schématu.
// Pokud úložiště není dostupné, běží vše v paměti a e-learning funguje dál.

import { CONTENT_VERSION } from '../data/course.js';

const KEY = 'marketing-elearning-progress';
const SCHEMA = 1;

const empty = () => ({
  schema: SCHEMA,
  contentVersion: CONTENT_VERSION,
  seen: {},      // { chapterId: { blockId: timestamp } } – část prošlá (ne zvládnutá)
  tasks: {},     // { taskId: { tried, result, answer } } – result: correct | partial | incorrect | null
  open: {},      // { 'taskId:variant': { text, compared } } – otevřené odpovědi
  self: {},      // { 'taskId:variant': 'yes' | 'partly' | 'no' } – sebehodnocení
  last: null,    // { chapter, anchor }
  prefs: { motion: 'system' }
});

let available = true;
let state = empty();
const listeners = new Set();

function probe() {
  try {
    const k = '__probe__';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    return true;
  } catch { return false; }
}

// Migrace mezi verzemi schématu. Neznámá nebo poškozená data se zahodí, ale aplikace nespadne.
function migrate(raw) {
  if (!raw || typeof raw !== 'object') return empty();
  if (raw.schema !== SCHEMA) {
    // Zatím existuje jen schéma 1. Pro budoucí verze sem doplnit převody.
    return empty();
  }
  const base = empty();
  const s = { ...base, ...raw, prefs: { ...base.prefs, ...(raw.prefs || {}) } };
  for (const k of ['seen', 'tasks', 'open', 'self']) if (typeof s[k] !== 'object' || s[k] === null) s[k] = {};
  s.contentVersion = CONTENT_VERSION;
  return s;
}

export function init() {
  available = probe();
  if (available) {
    try { state = migrate(JSON.parse(window.localStorage.getItem(KEY) || 'null')); }
    catch { state = empty(); }
  }
  return available;
}

function save() {
  if (available) {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); }
    catch { available = false; }
  }
  listeners.forEach((fn) => fn(state));
}

export const isAvailable = () => available;
export const get = () => state;
export const subscribe = (fn) => { listeners.add(fn); return () => listeners.delete(fn); };

export function markSeen(chapter, block) {
  state.seen[chapter] = state.seen[chapter] || {};
  if (!state.seen[chapter][block]) { state.seen[chapter][block] = Date.now(); save(); }
}

export function setTask(id, data) {
  state.tasks[id] = { ...(state.tasks[id] || {}), ...data, tried: true };
  save();
}
export function clearTask(id) { delete state.tasks[id]; save(); }

export function setOpen(key, data) { state.open[key] = { ...(state.open[key] || {}), ...data }; save(); }
export function setSelf(key, val) { state.self[key] = val; save(); }

export function setLast(chapter, anchor) {
  if (state.last && state.last.chapter === chapter && state.last.anchor === anchor) return;
  state.last = { chapter, anchor };
  save();
}

export function setPref(k, v) { state.prefs[k] = v; save(); }

export function clearAll() {
  const prefs = state.prefs;
  state = empty();
  state.prefs = prefs;
  if (available) { try { window.localStorage.removeItem(KEY); } catch { /* nic */ } }
  save();
}
