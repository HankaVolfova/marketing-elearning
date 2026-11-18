// Vstupní bod: hlavička, směrování, nastavení, sledování čtené části a postupu.

import { h, replace } from './dom.js';
import { ui } from './i18n.js';
import * as store from './store.js';
import COURSE from '../data/course.js';
import { renderOverview } from './components/overview.js';
import { renderChapter } from './components/chapter.js';
import { renderGlossaryPage, setupTermDialog } from './components/glossary.js';
import { renderProgressSummary } from './components/progress.js';
import { renderMapPage } from './components/mindmap.js';
import { renderSampleTest } from './components/sampletest.js';

const app = document.getElementById('app');
let route = { page: null, chapter: null };
let observers = [];

// ───────── Animace: podle systému, nebo ruční přepínač
function applyMotion() {
  const m = store.get().prefs.motion;
  if (m === 'on') document.documentElement.dataset.motion = 'reduce';
  else if (m === 'off') document.documentElement.dataset.motion = 'allow';
  else delete document.documentElement.dataset.motion;
}
export function reduceMotion() {
  const m = store.get().prefs.motion;
  if (m === 'on') return true;
  if (m === 'off') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ───────── Hlavička
// Odkaz v liště: na mobilu se zobrazí krátký popisek, čtečka vždy dostane celý název.
function navLink(href, nav, long, short) {
  return h('a', { href, class: 'topbar__link', dataset: { nav }, 'aria-label': long },
    h('span', { class: 'lbl-long', 'aria-hidden': 'true' }, long),
    h('span', { class: 'lbl-short', 'aria-hidden': 'true' }, short));
}
function renderHeader() {
  const settingsDlg = h('dialog', { class: 'dialog dialog--settings', 'aria-labelledby': 'settings-h' });
  const settingsBtn = h('button', { type: 'button', class: 'topbar__btn', 'aria-haspopup': 'dialog' }, ui().navSettings);
  settingsBtn.addEventListener('click', () => {
    const name = 'motion';
    const cur = store.get().prefs.motion;
    const opt = (val, label) => {
      const id = `motion-${val}`;
      const input = h('input', { type: 'radio', name, id, value: val, checked: cur === val });
      input.addEventListener('change', () => { store.setPref('motion', val); applyMotion(); });
      return h('span', { class: 'seg__opt' }, input, h('label', { for: id }, label));
    };
    const ready = COURSE.chapters.filter((c) => c.status === 'ready');
    replace(settingsDlg, 
      h('div', { class: 'dialog__head' }, h('h2', { id: 'settings-h' }, ui().navSettings),
        h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => settingsDlg.close() }, ui().close)),
      h('fieldset', { class: 'self-rate' }, h('legend', {}, ui().reduceMotion),
        h('div', { class: 'seg' }, opt('system', ui().reduceMotionSystem), opt('on', ui().reduceMotionOn), opt('off', ui().reduceMotionOff))),
      h('h3', {}, ui().progressTitle),
      renderProgressSummary(ready));
    settingsDlg.showModal();
    settingsDlg.querySelector('input:checked')?.focus();
  });
  settingsDlg.addEventListener('close', () => settingsBtn.focus());
  settingsDlg.addEventListener('click', (e) => { if (e.target === settingsDlg) settingsDlg.close(); });

  const header = h('header', { class: 'topbar' },
    h('a', { href: '#main', class: 'skip', onclick: (e) => { e.preventDefault(); const m = document.getElementById('main'); m?.focus(); } }, ui().skipToContent),
    h('a', { href: '#/', class: 'topbar__brand' }, h('span', { class: 'topbar__mark', 'aria-hidden': 'true' }, 'M'), ui().brand),
    h('nav', { class: 'topbar__nav', 'aria-label': 'Hlavní navigace' },
      navLink('#/', 'overview', ui().navCourse, 'Kurz'),
      navLink('#/mapa', 'map', ui().navMap, 'Mapy'),
      navLink('#/slovnicek', 'glossary', ui().navGlossary, 'Slovníček'),
      navLink('#/test', 'test', 'Vzorový test', 'Test'),
      settingsBtn),
    settingsDlg);
  document.body.prepend(header);
}

// ───────── Směrování
function parse() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  if (parts[0] === 'kapitola' && parts[1]) return { page: 'chapter', chapter: parts[1], anchor: parts[2] || null };
  if (parts[0] === 'slovnicek') return { page: 'glossary', term: parts[1] || null };
  if (parts[0] === 'mapa') return { page: 'map', chapter: parts[1] || null };
  if (parts[0] === 'test') return { page: 'test' };
  return { page: 'overview' };
}

function disconnect() { observers.forEach((o) => o.disconnect()); observers = []; }

function render() {
  const r = parse();
  const sameChapter = r.page === 'chapter' && route.page === 'chapter' && route.chapter === r.chapter;
  document.querySelectorAll('.topbar__link').forEach((a) => {
    const active = (r.page === 'overview' && a.dataset.nav === 'overview') || (r.page === 'glossary' && a.dataset.nav === 'glossary') || (r.page === 'map' && a.dataset.nav === 'map') || (r.page === 'test' && a.dataset.nav === 'test');
    if (active) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });

  if (!sameChapter) {
    disconnect();
    let page;
    if (r.page === 'chapter') page = renderChapter(r.chapter);
    else if (r.page === 'glossary') page = renderGlossaryPage(r.term);
    else if (r.page === 'map') page = renderMapPage(r.chapter);
    else if (r.page === 'test') page = renderSampleTest();
    else page = renderOverview();
    replace(app, page);
    document.title = r.page === 'glossary' ? `${ui().glossaryTitle} · ${ui().brand}` : r.page === 'map' ? `${ui().mapsTitle} · ${ui().brand}` : r.page === 'test' ? `Vzorový test · ${ui().brand}` : ui().brand;
    if (r.page === 'chapter') setupChapterObservers(r.chapter);
  }
  route = r;

  if (r.page === 'chapter' && r.anchor) goTo(r.anchor, !sameChapter);
  else if (!sameChapter && r.page !== 'glossary') { window.scrollTo(0, 0); document.getElementById('main')?.focus({ preventScroll: true }); }
  else if (r.page === 'glossary' && !r.term) { window.scrollTo(0, 0); document.getElementById('main')?.focus({ preventScroll: true }); }
}

function goTo(anchor, fresh) {
  const el = document.getElementById(anchor);
  if (!el) return;
  // Pokud je cíl uvnitř zavřeného rozbalovacího prvku, otevři ho
  const det = el.closest('details'); if (det) det.open = true;
  const target = el.matches('h1,h2,h3,h4,[tabindex]') ? el : el.querySelector('h1[tabindex],h2[tabindex],h3[tabindex]') || el;
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: fresh || reduceMotion() ? 'auto' : 'smooth', block: 'start' });
    target.focus({ preventScroll: true });
    el.classList.add('is-target');
    setTimeout(() => el.classList.remove('is-target'), 1600);
  });
}

// ───────── Zvýraznění čtené části, prošlé bloky, poslední místo
function setupChapterObservers(chapterId) {
  if (!('IntersectionObserver' in window)) return;
  const links = () => document.querySelectorAll('.chapter__nav .toc__link');
  const sectionObs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const id = e.target.dataset.section;
      document.body.dataset.currentSection = id;
      links().forEach((a) => { if (a.dataset.target === id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
      // Přesnější uložené místo uvnitř stejné části (např. krok, ze kterého student odešel do slovníčku) nepřepisuj.
      const cur = store.get().last;
      const inside = cur && cur.chapter === chapterId && cur.anchor !== id && document.getElementById(cur.anchor)?.closest(`[data-section="${id}"]`);
      if (!inside) store.setLast(chapterId, id);
    }
  }, { rootMargin: '-35% 0px -60% 0px' });
  document.querySelectorAll('[data-section]').forEach((s) => sectionObs.observe(s));

  // Blok je „prošlý“, když student dojde k jeho shrnutí. Neznamená to zvládnutí látky.
  const seenObs = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const id = e.target.dataset.seenMarker;
      store.markSeen(chapterId, id);
      const link = document.querySelector(`.chapter__nav .toc__link[data-target="${id}"]`);
      if (link && !link.querySelector('.toc__seen')) link.append(h('span', { class: 'toc__seen' }, h('span', { 'aria-hidden': 'true' }, '✓ '), ui().seenBadge));
      seenObs.unobserve(e.target);
    }
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-seen-marker]').forEach((s) => seenObs.observe(s));
  observers.push(sectionObs, seenObs);
}

// ───────── Start
function start() {
  const ok = store.init();
  applyMotion();
  renderHeader();
  document.body.append(h('div', { id: 'global-status', class: 'sr-only', role: 'status', 'aria-live': 'polite' }));
  if (!ok) app.before(h('p', { class: 'banner', role: 'status' }, ui().storageUnavailable));
  setupTermDialog();
  window.addEventListener('hashchange', render);
  render();
}

start();
