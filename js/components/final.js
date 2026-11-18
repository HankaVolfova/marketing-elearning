// Závěrečné procvičení s výsledky podle oblastí. Sebekontrola je oddělená od vyhodnocených úloh.

import { h, replace } from '../dom.js';
import { ui } from '../i18n.js';
import TASKS from '../../data/tasks/index.js';
import * as store from '../store.js';
import { renderTask } from './tasks.js';

export function renderFinal(ch) {
  const f = ch.final;
  const results = h('div', { class: 'results', 'aria-live': 'polite' });
  const tasksWrap = h('div', { class: 'final__tasks' });

  // Vyhodnocované úlohy se odesílají najednou jedním tlačítkem; otevřená otázka (sebekontrola) následuje po něm.
  const autoIds = f.tasks.filter((id) => TASKS[id].type !== 'open');
  const openIds = f.tasks.filter((id) => TASKS[id].type === 'open');
  const batchMsg = h('p', { class: 'form-msg', role: 'status', hidden: true });
  const evaluateAll = () => {
    let missing = 0;
    for (const item of tasksWrap.querySelectorAll('.final__item--auto')) {
      const form = item.querySelector('form');
      if (form) {
        form.requestSubmit();
        if (form.querySelector('.form-msg:not([hidden])')) missing++;
      } else {
        const task = item.querySelector('.task');
        if (task?.evaluate && !task.evaluate()) missing++;
      }
    }
    batchMsg.hidden = !missing;
    batchMsg.textContent = missing === 1 ? 'Jedna úloha zatím není vyplněná. Doplň ji a vyhodnoť znovu.' : missing ? `Nevyplněné úlohy: ${missing}. Doplň je a vyhodnoť znovu.` : '';
    drawResults();
    if (!missing) results.querySelector('h3')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const drawTasks = () => {
    const item = (id, i, cls) => h('div', { class: `final__item ${cls}` },
      h('p', { class: 'final__count', 'aria-hidden': 'true' }, `${i + 1} / ${f.tasks.length}`),
      renderTask(id, { onChange: drawResults, deferred: cls === 'final__item--auto' }));
    replace(tasksWrap,
      ...autoIds.map((id, i) => item(id, i, 'final__item--auto')),
      h('div', { class: 'final__batch' },
        h('button', { type: 'button', class: 'btn btn--primary', onclick: evaluateAll }, 'Vyhodnotit závěrečné procvičení'),
        batchMsg),
      ...openIds.map((id, i) => item(id, autoIds.length + i, 'final__item--open')));
  };

  function drawResults() {
    const st = store.get();
    const rows = f.areas.map((a) => {
      const ids = f.tasks.filter((t) => TASKS[t].area === a.id);
      let status;
      if (a.selfCheck) {
        const variants = TASKS[ids[0]].variants;
        const done = variants.filter((v) => st.open[`${ids[0]}:${v}`]?.compared);
        const rated = variants.map((v) => st.self[`${ids[0]}:${v}`]).filter(Boolean);
        status = done.length
          ? `${ui().selfCheckArea}: porovnáno ${done.length} z ${variants.length} koncepcí` + (rated.length ? `, sebehodnocení „${ui().selfRateOptions[rated[rated.length - 1]].toLowerCase()}“` : '')
          : `${ui().selfCheckArea}: ${ui().areaNotTried}`;
        return { a, status, kind: 'self' };
      }
      const tried = ids.filter((t) => st.tasks[t]?.result);
      const ok = ids.filter((t) => st.tasks[t]?.result === 'correct').length;
      if (!tried.length) status = ui().areaNotTried;
      else status = `správně ${ok} z ${ids.length}` + (tried.length < ids.length ? ` (vyzkoušeno ${tried.length})` : '');
      const anyPartial = ids.some((t) => st.tasks[t]?.result === 'partial');
      const kind = !tried.length ? 'none' : ok === ids.length ? 'correct' : (ok > 0 || anyPartial) ? 'partial' : 'incorrect';
      return { a, status, kind };
    });
    const label = { correct: 'Zvládnuto', partial: 'Částečně', incorrect: 'Vrať se k výkladu', none: 'Nevyzkoušeno', self: 'Sebekontrola' };
    replace(results, 
      h('h3', {}, ui().results),
      h('p', { class: 'hint' }, ui().resultsNote),
      h('ul', { class: 'results__list' }, rows.map(({ a, status, kind }) => h('li', { class: `results__row results__row--${kind}` },
        h('span', { class: 'results__state' }, label[kind]),
        h('span', { class: 'results__area' }, a.label),
        h('span', { class: 'results__status' }, status),
        h('a', { href: `#/kapitola/${ch.id}/${a.anchor}`, class: 'results__link' }, ui().backToExplanation, h('span', { class: 'sr-only' }, `: ${a.label}`))))),
      h('button', { type: 'button', class: 'btn btn--ghost', onclick: reset }, ui().resetFinal));
  }

  function reset() {
    for (const id of f.tasks) {
      store.clearTask(id);
      const def = TASKS[id];
      if (def.type === 'open') for (const v of def.variants) { store.setOpen(`${id}:${v}`, { text: '', compared: false }); store.setSelf(`${id}:${v}`, null); }
    }
    drawTasks(); drawResults();
    tasksWrap.querySelector('input, textarea, select')?.focus();
  }

  drawTasks();
  drawResults();
  return h('div', { class: 'final final--batch' }, h('p', { class: 'lead' }, f.intro), tasksWrap, results);
}
