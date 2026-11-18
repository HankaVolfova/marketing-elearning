// Přehled postupu: odlišuje prošlé části, vyzkoušené úlohy, výsledky vyhodnocených úloh a sebehodnocení.

import { h, replace } from '../dom.js';
import { L, ui } from '../i18n.js';
import TASKS from '../../data/tasks/index.js';
import * as store from '../store.js';

export function renderProgress(chapterId) {
  const box = h('div', { class: 'progress' });
  const draw = () => {
    const st = store.get();
    const ch = L().chapters[chapterId];
    const blocks = ch.blocks;
    const seen = st.seen[chapterId] || {};
    const chapterTasks = Object.entries(TASKS).filter(([, d]) => d.chapter === chapterId && d.type !== 'poll');
    const tried = chapterTasks.filter(([id]) => st.tasks[id]?.tried);
    const auto = chapterTasks.filter(([, d]) => d.type === 'choice' || d.type === 'decide' || d.type === 'classify');
    const autoDone = auto.filter(([id]) => st.tasks[id]?.result);
    const autoOk = auto.filter(([id]) => st.tasks[id]?.result === 'correct');
    const selfVals = Object.entries(st.self).filter(([k, v]) => v && TASKS[k.split(':')[0]]?.chapter === chapterId);
    const count = (val) => selfVals.filter(([, v]) => v === val).length;

    replace(box, 
      h('p', { class: 'hint' }, ui().progressNote),
      !store.isAvailable() ? h('p', { class: 'note note--warn' }, ui().storageUnavailable) : null,
      h('dl', { class: 'progress__grid' },
        h('div', {}, h('dt', {}, ui().progressSeen), h('dd', {}, `${blocks.filter((b) => seen[b.id]).length} z ${blocks.length} bloků`)),
        h('div', {}, h('dt', {}, ui().progressTried), h('dd', {}, `${tried.length} z ${chapterTasks.length} úloh`)),
        h('div', {}, h('dt', {}, ui().progressAuto), h('dd', {}, autoDone.length ? `správně ${autoOk.length} z ${autoDone.length} vyhodnocených` : ui().areaNotTried)),
        h('div', {}, h('dt', {}, ui().progressSelf), h('dd', {}, selfVals.length
          ? `${ui().selfRateOptions.yes}: ${count('yes')} · ${ui().selfRateOptions.partly}: ${count('partly')} · ${ui().selfRateOptions.no}: ${count('no')}`
          : ui().areaNotTried))),
      clearControl());
  };

  function clearControl() {
    const wrap = h('div', { class: 'clear' });
    const confirmBox = h('div', { class: 'clear__confirm', hidden: true },
      h('p', {}, ui().clearConfirm),
      h('button', { type: 'button', class: 'btn btn--danger', onclick: () => { store.clearAll(); location.hash = '#/'; announceGlobal(ui().clearDone); } }, 'Ano, vymazat'),
      ' ',
      h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => { confirmBox.hidden = true; first.focus(); } }, 'Zrušit'));
    const first = h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => { confirmBox.hidden = false; confirmBox.querySelector('button').focus(); } }, ui().clearProgress);
    wrap.append(first, confirmBox);
    return wrap;
  }

  draw();
  const un = store.subscribe(() => { if (!box.isConnected && box.dataset.mounted) { un(); return; } draw(); });
  requestAnimationFrame(() => { box.dataset.mounted = '1'; });
  return box;
}

export function announceGlobal(msg) {
  const r = document.getElementById('global-status');
  if (r) { r.textContent = ''; setTimeout(() => { r.textContent = msg; }, 50); }
}

// Souhrn postupu pro dialog Nastavení: jedna poznámka, jedna tabulka (řádek = kapitola), jedno tlačítko pro vymazání.
function chapterStats(chapterId, st) {
  const ch = L().chapters[chapterId];
  const seen = st.seen[chapterId] || {};
  const chapterTasks = Object.entries(TASKS).filter(([, d]) => d.chapter === chapterId && d.type !== 'poll');
  const tried = chapterTasks.filter(([id]) => st.tasks[id]?.tried);
  const auto = chapterTasks.filter(([, d]) => d.type === 'choice' || d.type === 'decide' || d.type === 'classify');
  const autoDone = auto.filter(([id]) => st.tasks[id]?.result);
  const autoOk = auto.filter(([id]) => st.tasks[id]?.result === 'correct');
  return { ch, seenN: ch.blocks.filter((b) => seen[b.id]).length, blocksN: ch.blocks.length, triedN: tried.length, tasksN: chapterTasks.length, doneN: autoDone.length, okN: autoOk.length };
}

export function renderProgressSummary(chapters) {
  const box = h('div', { class: 'progress progress--summary' });
  const st = store.get();
  const rows = chapters.map((c, i) => {
    const s = chapterStats(c.id, st);
    return h('tr', {},
      h('th', { scope: 'row' }, `${String(c.order).padStart(2, '0')} ${s.ch.title}`),
      h('td', { 'data-label': ui().progressSeen }, `${s.seenN} z ${s.blocksN}`),
      h('td', { 'data-label': ui().progressTried }, `${s.triedN} z ${s.tasksN}`),
      h('td', { 'data-label': ui().progressAuto }, s.doneN ? `${s.okN} z ${s.doneN}` : '–'));
  });
  const confirmBox = h('div', { class: 'clear__confirm', hidden: true },
    h('p', {}, ui().clearConfirm),
    h('button', { type: 'button', class: 'btn btn--danger', onclick: () => { store.clearAll(); location.hash = '#/'; announceGlobal(ui().clearDone); box.closest('dialog')?.close(); } }, 'Ano, vymazat'),
    ' ',
    h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => { confirmBox.hidden = true; first.focus(); } }, 'Zrušit'));
  const first = h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => { confirmBox.hidden = false; confirmBox.querySelector('button').focus(); } }, ui().clearProgress);
  box.append(h('p', { class: 'hint' }, ui().progressNote));
  if (!store.isAvailable()) box.append(h('p', { class: 'note note--warn' }, ui().storageUnavailable));
  box.append(
    h('div', { class: 'table-wrap' },
      h('table', { class: 'table table--stack progress__table' },
        h('caption', { class: 'sr-only' }, ui().progressTitle),
        h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, 'Kapitola'), h('th', { scope: 'col' }, ui().progressSeen), h('th', { scope: 'col' }, ui().progressTried), h('th', { scope: 'col' }, 'Správně / vyhodnoceno'))),
        h('tbody', {}, rows))),
    h('div', { class: 'clear' }, first, confirmBox));
  return box;
}
