// Komponenty úloh: zařazování, výběr, anketa, otevřená odpověď se sebekontrolou, dilema.

import { h, rich, nextId, announce, replace, blockNodes } from '../dom.js';
import { L, ui } from '../i18n.js';
import TASKS from '../../data/tasks/index.js';
import * as store from '../store.js';
import { evalClassify, evalChoice, answerStillValid } from '../logic/evaluate.js';

const ICON = {
  correct: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 10.5l3 3 5-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  incorrect: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 7l6 6M13 7l-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  partial: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 10h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  info: '<svg viewBox="0 0 20 20" aria-hidden="true" focusable="false"><circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9v5M10 6v.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
};

function verdict(kind, text, { buddy = false } = {}) {
  return h('p', { class: `verdict verdict--${kind}` },
    h('span', { class: 'verdict__icon', html: ICON[kind] }), h('strong', {}, text));
}

// Vzorová souvislá charakteristika se bere přímo z výkladu koncepce (jedno znění pro výklad i úlohu).
function conceptModel(chapterId, key) {
  return (L().chapters[chapterId].concepts || []).find((c) => c.key === key)?.model || '';
}

const resultText = (r) => r === 'correct' ? ui().correct : r === 'partial' ? ui().partly : ui().incorrect;

function shell(id, { title, kind } = {}) {
  const promptId = nextId('prompt');
  const live = h('div', { class: 'sr-only', 'aria-live': 'polite', role: 'status' });
  const el = h('section', { class: `task task--${kind || 'default'}`, id: `task-${id}`, 'aria-labelledby': promptId, dataset: { task: id } });
  return { el, promptId, live, title };
}

export function renderTask(id, opts = {}) {
  const def = TASKS[id];
  const txt = L().tasks[id];
  if (!def || !txt) return h('p', { class: 'missing' }, `Chybí úloha ${id}`);
  switch (def.type) {
    case 'classify': return classifyTask(id, def, txt, opts);
    case 'choice': return choiceTask(id, def, txt, opts);
    case 'poll': return pollTask(id, def, txt, opts);
    case 'open': return openTask(id, def, txt, opts);
    case 'dilemma': return dilemmaTask(id, def, txt, opts);
    case 'decide': return decideTask(id, def, txt, opts);
    case 'reveal': return revealTask(id, def, txt, opts);
    default: return h('p', {}, `Neznámý typ úlohy ${def.type}`);
  }
}

// Pořadí položek při zařazování: míchá se podle pevného klíče z ID úlohy (stabilně) a odmítá pořadí,
// ve kterém by správné odpovědi tvořily vzorec (střídání A–B–A–B, „po diagonále“ ve stejném pořadí
// jako kategorie, nebo seskupení A–A–B–B). Student tak musí o každé položce přemýšlet zvlášť.
function itemOrder(id, def) {
  const keys = Object.keys(def.items);
  if (keys.length < 3) return keys;
  const cats = def.categories;
  const idx = (k) => cats.indexOf(def.items[k][0]);
  const patterned = (arr) => {
    const a = arr.map(idx);
    const diagonal = a.every((v, i) => v === i % cats.length);
    const alternating = a.every((v, i) => i === 0 || v !== a[i - 1]) && new Set(a).size === 2;
    const grouped = a.every((v, i) => i === 0 || v >= a[i - 1]);
    const groupedDesc = a.every((v, i) => i === 0 || v <= a[i - 1]);
    return diagonal || alternating || grouped || groupedDesc;
  };
  let seed = 0;
  for (const ch of id) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  // všechna pořadí (položek je málo), z nich ta bez vzorce; výběr podle klíče úlohy
  const perms = [];
  const permute = (arr, rest) => {
    if (perms.length > 5000) return;
    if (!rest.length) { perms.push(arr); return; }
    rest.forEach((k, i) => permute([...arr, k], [...rest.slice(0, i), ...rest.slice(i + 1)]));
  };
  permute([], keys);
  const good = perms.filter((p) => !patterned(p));
  const pool = good.length ? good : perms;
  return pool[seed % pool.length];
}

// ───────────────────────── Zařazování (klikací alternativa, žádný drag-and-drop)
function classifyTask(id, def, txt, opts) {
  const s = shell(id, { kind: 'classify' });
  const saved = store.get().tasks[id];
  let answer = saved && answerStillValid(def, saved.answer) ? { ...saved.answer } : {};
  const form = h('form', { class: 'classify', novalidate: true });
  const rows = {};

  for (const itemId of itemOrder(id, def)) {
    const fsId = nextId('fs');
    const fb = h('div', { class: 'item-feedback', hidden: true });
    const multi = def.requireAll?.includes(itemId);
    const seg = h('div', { class: 'seg' + (multi ? ' seg--multi' : ''), role: multi ? 'group' : 'radiogroup', 'aria-labelledby': fsId + '-l' },
      def.categories.map((cat) => {
        const rid = nextId('r');
        const cur = answer[itemId];
        const input = h('input', { type: multi ? 'checkbox' : 'radio', name: fsId, id: rid, value: cat,
          checked: multi ? Array.isArray(cur) && cur.includes(cat) : cur === cat });
        input.addEventListener('change', () => {
          if (multi) {
            const set = new Set(Array.isArray(answer[itemId]) ? answer[itemId] : []);
            if (input.checked) set.add(cat); else set.delete(cat);
            answer[itemId] = [...set];
            if (!answer[itemId].length) delete answer[itemId];
          } else answer[itemId] = cat;
        });
        return h('span', { class: 'seg__opt' }, input, h('label', { for: rid }, txt.categories[cat]));
      }));
    const row = h('div', { class: 'classify__row', role: 'group', 'aria-labelledby': fsId + '-l' },
      h('p', { class: 'classify__item', id: fsId + '-l', html: txt.items[itemId].text }),
      multi ? h('p', { class: 'hint' }, 'Tady můžeš vybrat víc možností.') : null,
      seg, fb);
    rows[itemId] = { row, fb };
    form.append(row);
  }

  const summary = h('div', { class: 'task__result', hidden: true });
  const checkBtn = h('button', { type: 'submit', class: 'btn btn--primary' }, ui().check);
  const retryBtn = h('button', { type: 'button', class: 'btn btn--ghost', hidden: true }, ui().tryAgain);
  const msg = h('p', { class: 'form-msg', role: 'alert', hidden: true });

  function show(res) {
    for (const [itemId, r] of Object.entries(res.perItem)) {
      const { fb, row } = rows[itemId];
      const acc = r.accepted.map((c) => txt.categories[c]).join(' / ');
      const kind = r.correct ? 'correct' : 'incorrect';
      row.dataset.state = kind;
      fb.hidden = false;
      replace(fb, 
        verdict(kind, r.correct ? (r.alternatives ? `${ui().correct} ${ui().acceptedAlso}` : ui().correct) : `${ui().incorrect} Správně: ${r.both ? r.accepted.map((c) => txt.categories[c]).join(' + ') : acc}.`),
        h('p', { html: txt.items[itemId].why })
      );
    }
    summary.hidden = false;
    replace(summary, 
      verdict(res.result, `${resultText(res.result)} ${ui().resultCount(res.ok, res.total)}`, { buddy: true }),
      txt.explanation ? rich('p', txt.explanation, { class: 'task__explain' }) : null
    );
    retryBtn.hidden = false;
    announce(s.live, `${resultText(res.result)} ${ui().resultCount(res.ok, res.total)}`);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Object.keys(def.items).some((k) => !answer[k])) {
      msg.hidden = false; msg.textContent = ui().answerAllFirst; return;
    }
    msg.hidden = true;
    const res = evalClassify(def, answer);
    store.setTask(id, { answer: { ...answer }, result: res.result });
    show(res);
    opts.onChange?.();
  });
  retryBtn.addEventListener('click', () => {
    answer = {};
    form.querySelectorAll('input').forEach((i) => { i.checked = false; });
    Object.values(rows).forEach(({ fb, row }) => { fb.hidden = true; delete row.dataset.state; });
    summary.hidden = true; retryBtn.hidden = true;
    store.setTask(id, { answer: null, result: null });
    opts.onChange?.();
    form.querySelector('input')?.focus();
  });

  form.append(msg, h('div', { class: 'task__actions' }, checkBtn, retryBtn), summary);
  s.el.append(h('h4', { class: 'task__prompt', id: s.promptId, html: txt.prompt }), form, s.live);
  if (saved && saved.result && Object.keys(answer).length === Object.keys(def.items).length) show(evalClassify(def, answer));
  return s.el;
}

// Pořadí možností: delší (větné) možnosti se míchají podle pevného klíče z ID úlohy,
// aby správná odpověď nebyla systematicky na stejném místě. Pořadí je stabilní (stejné při každém zobrazení).
// Číselné možnosti a úlohy s keepOrder zůstávají v přirozeném pořadí.
function optionOrder(id, def, txt) {
  const plain = (o) => String(txt.options[o] || '').replace(/<[^>]+>/g, '');
  if (def.keepOrder || def.options.every((o) => /^\d/.test(plain(o)))) return def.options;
  let seed = 0;
  for (const ch of id) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
  const arr = def.options.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ───────────────────────── Výběr z možností (jedna i více odpovědí)
function choiceTask(id, def, txt, opts) {
  const s = shell(id, { kind: 'choice' });
  const saved = store.get().tasks[id];
  const name = nextId('c');
  const type = def.multiple ? 'checkbox' : 'radio';
  const form = h('form', { class: 'choice', novalidate: true });
  const fieldset = h('fieldset', {}, h('legend', { class: 'sr-only' }, txt.prompt.replace(/<[^>]+>/g, '')));
  if (def.multiple) fieldset.append(h('p', { class: 'hint' }, ui().selectAllThatApply));
  const optEls = {};
  const order = optionOrder(id, def, txt);
  for (const o of order) {
    const oid = nextId('o');
    const input = h('input', { type, name, id: oid, value: o });
    const fb = h('div', { class: 'opt-feedback', hidden: true });
    const wrap = h('div', { class: 'choice__opt' }, input, h('label', { for: oid, html: txt.options[o] }), fb);
    optEls[o] = { input, fb, wrap };
    fieldset.append(wrap);
  }
  const result = h('div', { class: 'task__result', hidden: true });
  const checkBtn = h('button', { type: 'submit', class: 'btn btn--primary' }, ui().check);
  const retryBtn = h('button', { type: 'button', class: 'btn btn--ghost', hidden: true }, ui().tryAgain);
  const msg = h('p', { class: 'form-msg', role: 'alert', hidden: true });

  const getAnswer = () => def.options.filter((o) => optEls[o].input.checked);

  function show(given) {
    const res = evalChoice(def, given);
    for (const o of def.options) {
      const { fb, wrap } = optEls[o];
      const isCorrect = def.correct.includes(o);
      const chosen = given.includes(o);
      fb.hidden = true; delete wrap.dataset.state;
      // U jedné odpovědi ukaž vysvětlení ke zvolené možnosti; u více odpovědí ke všem.
      if (def.multiple || chosen) {
        const kind = isCorrect ? (chosen ? 'correct' : 'partial') : (chosen ? 'incorrect' : 'info');
        if (def.multiple && !chosen && !isCorrect) continue;
        wrap.dataset.state = kind;
        fb.hidden = false;
        const label = def.multiple
          ? (isCorrect ? (chosen ? 'Patří sem.' : 'Patří sem, ale nevybral/a jsi ji.') : 'Sem nepatří.')
          : (isCorrect ? ui().correct : ui().incorrect);
        replace(fb, verdict(kind === 'info' ? 'info' : kind, label), rich('p', txt.feedback?.[o] || ''));
      }
    }
    result.hidden = false;
    replace(result, 
      verdict(res.result, resultText(res.result), { buddy: true }),
      txt.explanation ? rich('p', txt.explanation, { class: 'task__explain' }) : null
    );
    retryBtn.hidden = false;
    announce(s.live, resultText(res.result) + ' ' + (txt.feedback?.[given[0]] || '').replace(/<[^>]+>/g, ''));
    return res;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const given = getAnswer();
    if (!given.length) { msg.hidden = false; msg.textContent = ui().chooseOptionFirst; return; }
    msg.hidden = true;
    const res = show(given);
    store.setTask(id, { answer: def.multiple ? given : given[0], result: res.result });
    opts.onChange?.();
  });
  retryBtn.addEventListener('click', () => {
    Object.values(optEls).forEach(({ input, fb, wrap }) => { input.checked = false; fb.hidden = true; delete wrap.dataset.state; });
    result.hidden = true; retryBtn.hidden = true;
    store.setTask(id, { answer: null, result: null });
    opts.onChange?.();
    optEls[order[0]].input.focus();
  });

  form.append(fieldset, msg, h('div', { class: 'task__actions' }, checkBtn, retryBtn), result);
  s.el.append(h('h4', { class: 'task__prompt', id: s.promptId, html: txt.prompt }), form, s.live);

  if (saved && saved.result && answerStillValid(def, saved.answer)) {
    const given = Array.isArray(saved.answer) ? saved.answer : [saved.answer];
    given.forEach((g) => { optEls[g].input.checked = true; });
    show(given);
  }
  return s.el;
}

// ───────────────────────── Nebodovaná volba (úvod kapitoly)
function pollTask(id, def, txt) {
  const s = shell(id, { kind: 'poll' });
  const saved = store.get().tasks[id];
  const name = nextId('p');
  const fb = h('div', { class: 'task__result', hidden: true });
  const form = h('form', { class: 'choice choice--poll', novalidate: true });
  const fieldset = h('fieldset', {}, h('legend', { class: 'sr-only' }, txt.prompt));
  for (const o of def.options) {
    const oid = nextId('o');
    const input = h('input', { type: 'radio', name, id: oid, value: o, checked: saved?.answer === o });
    fieldset.append(h('div', { class: 'choice__opt' }, input, h('label', { for: oid }, txt.options[o])));
  }
  const btn = h('button', { type: 'submit', class: 'btn btn--primary' }, 'Vybrat');
  const showFb = () => { fb.hidden = false; replace(fb, verdict('info', ui().noScoreNote), h('p', {}, txt.feedback)); };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = form.querySelector('input:checked')?.value;
    if (!v) return;
    store.setTask(id, { answer: v, result: null });
    showFb();
    announce(s.live, ui().noScoreNote);
  });
  form.append(fieldset, h('div', { class: 'task__actions' }, btn), fb);
  s.el.append(h('h4', { class: 'task__prompt', id: s.promptId }, txt.prompt), form, s.live);
  if (saved?.answer) showFb();
  return s.el;
}

// ───────────────────────── Otevřená odpověď se sebekontrolou
function openTask(id, def, txt, opts) {
  const s = shell(id, { kind: def.exam ? 'exam' : 'open' });
  let variant = opts.variant || def.variants[0];
  const selId = nextId('sel');
  const select = h('select', { id: selId, class: 'select' },
    def.variants.map((v) => h('option', { value: v }, txt.variantLabel(v))));
  const progress = h('ul', { class: 'variant-progress', 'aria-label': 'Stav procvičení koncepcí' });
  const prompt = h('h4', { class: 'task__prompt', id: s.promptId });
  const taId = nextId('ta');
  const textarea = h('textarea', { id: taId, rows: def.exam ? 9 : 6, class: 'textarea' });
  const hint = h('p', { class: 'hint', id: taId + '-h' }, ui().emptyAnswerHint);
  textarea.setAttribute('aria-describedby', taId + '-h');
  const compareBtn = h('button', { type: 'button', class: 'btn btn--primary' }, ui().compareWithModel);
  const reveal = h('div', { class: 'model', hidden: true, tabindex: '-1' });

  const key = () => `${id}:${variant}`;

  function renderProgress() {
    const st = store.get();
    replace(progress, ...def.variants.map((v) => {
      const done = st.open[`${id}:${v}`]?.compared;
      const self = st.self[`${id}:${v}`];
      const label = txt.variantLabel(v) + (done ? ` – porovnáno${self ? ', ' + ui().selfRateOptions[self].toLowerCase() : ''}` : '');
      return h('li', { class: done ? 'is-done' : '' }, h('button', { type: 'button', class: 'chip' + (v === variant ? ' is-current' : ''), 'aria-pressed': String(v === variant), onclick: () => { select.value = v; setVariant(v); } }, label));
    }));
  }

  function renderReveal() {
    const m = txt.models[variant];
    const st = store.get();
    const list = m.checklist || (def.exam ? null : txt.checklist);
    const checklist = !list || !list.length ? null : h('fieldset', { class: 'checklist' },
      h('legend', {}, ui().selfCheck),
      list.map((c, i) => {
        const cid = nextId('ck');
        return h('div', { class: 'check' }, h('input', { type: 'checkbox', id: cid }), h('label', { for: cid }, c));
      }));
    const rateName = nextId('rate');
    const rate = h('fieldset', { class: 'self-rate' }, h('legend', {}, ui().selfRate),
      h('div', { class: 'seg' }, Object.entries(ui().selfRateOptions).map(([k, label]) => {
        const rid = nextId('sr');
        const input = h('input', { type: 'radio', name: rateName, id: rid, value: k, checked: st.self[key()] === k });
        input.addEventListener('change', () => { store.setSelf(key(), k); renderProgress(); opts.onChange?.(); });
        return h('span', { class: 'seg__opt' }, input, h('label', { for: rid }, label));
      })));
    replace(reveal, 
      h('p', { class: 'model__note' }, verdict('info', ui().selfCheckNote)),
      def.exam
        ? h('div', {}, h('h5', {}, ui().modelAnswerPoints), h('ol', { class: 'points' }, m.points.map((p) => h('li', {}, p))),
            h('p', { class: 'format-note' }, txt.formatNote), h('p', { class: 'format-note' }, txt.scoreNote))
        : h('div', {}, h('h5', {}, ui().modelAnswer), h('p', { class: 'model__text' }, m.model || conceptModel(def.chapter, variant)),
            h('h5', {}, ui().keyPoints), h('ul', { class: 'keypoints' }, m.keyPoints.map((p) => h('li', {}, p)))),
      def.exam ? h('div', {}, h('h5', {}, ui().keyPoints), h('ul', { class: 'keypoints' }, m.keyPoints.map((p) => h('li', {}, p)))) : null,
      checklist,
      rate
    );
  }

  function setVariant(v) {
    variant = v;
    prompt.textContent = txt.prompt(txt.models[v].label, v);
    const saved = store.get().open[key()];
    textarea.value = saved?.text || '';
    reveal.hidden = !saved?.compared;
    if (saved?.compared) renderReveal();
    renderProgress();
  }

  let t;
  textarea.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => store.setOpen(key(), { text: textarea.value }), 400); });
  select.addEventListener('change', () => setVariant(select.value));
  compareBtn.addEventListener('click', () => {
    store.setOpen(key(), { text: textarea.value, compared: true });
    store.setTask(id, { result: null });
    renderReveal();
    reveal.hidden = false;
    renderProgress();
    opts.onChange?.();
    reveal.focus();
    announce(s.live, def.exam ? ui().modelAnswerPoints : ui().modelAnswer);
  });

  s.el.append(
    def.variants.length > 1 ? h('div', { class: 'variant-pick' }, h('label', { for: selId }, txt.pickLabel || ui().pickConcept), select) : null,
    def.variants.length > 1 ? progress : null,
    prompt,
    h('label', { for: taId, class: 'sr-only' }, ui().writeHere),
    textarea, hint,
    h('div', { class: 'task__actions' }, compareBtn),
    reveal, s.live
  );
  select.value = variant;
  setVariant(variant);
  return s.el;
}

// ───────────────────────── Dilema – více obhajitelných řešení
function dilemmaTask(id, def, txt, opts) {
  const s = shell(id, { kind: 'dilemma' });
  const saved = store.get().tasks[id];
  const name = nextId('d');
  const form = h('form', { class: 'choice choice--dilemma', novalidate: true });
  const fieldset = h('fieldset', {}, h('legend', { class: 'sr-only' }, txt.prompt));
  for (const o of def.options) {
    const oid = nextId('o');
    const input = h('input', { type: 'radio', name, id: oid, value: o, checked: saved?.answer === o });
    fieldset.append(h('div', { class: 'choice__opt' }, input,
      h('label', { for: oid }, h('strong', {}, txt.options[o].label), h('span', { class: 'opt-detail' }, txt.options[o].detail))));
  }
  const out = h('div', { class: 'task__result', hidden: true, tabindex: '-1' });
  const btn = h('button', { type: 'submit', class: 'btn btn--primary' }, 'Zobrazit dopady');
  const msg = h('p', { class: 'form-msg', role: 'alert', hidden: true });

  const analysisTable = (o) => {
    const a = txt.options[o].analysis;
    return h('dl', { class: 'impact' },
      h('div', {}, h('dt', {}, 'Zákazník'), h('dd', {}, a.zakaznik)),
      h('div', {}, h('dt', {}, 'Firma'), h('dd', {}, a.firma)),
      h('div', {}, h('dt', {}, 'Společnost'), h('dd', {}, a.spolecnost)));
  };

  function show(v) {
    const others = def.options.filter((o) => o !== v);
    out.hidden = false;
    replace(out, 
      verdict('info', ui().dilemmaNote),
      h('h5', {}, `Tvoje volba: ${txt.options[v].label}`),
      analysisTable(v),
      h('p', { class: 'defensible' }, txt.options[v].defensible),
      ...others.map((o) => h('details', { class: 'expand' }, h('summary', {}, `Pro srovnání: ${txt.options[o].label}`), analysisTable(o), h('p', { class: 'defensible' }, txt.options[o].defensible)))
    );
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = form.querySelector('input:checked')?.value;
    if (!v) { msg.hidden = false; msg.textContent = ui().chooseOptionFirst; return; }
    msg.hidden = true;
    store.setTask(id, { answer: v, result: null });
    show(v);
    out.focus();
    opts.onChange?.();
  });
  form.append(fieldset,
    msg, h('div', { class: 'task__actions' }, btn), out);
  s.el.append(h('h4', { class: 'task__prompt', id: s.promptId }, txt.prompt), form, s.live);
  if (saved?.answer && def.options.includes(saved.answer)) show(saved.answer);
  return s.el;
}

// ───────────────────────── Rychlé rozhodnutí tlačítky (např. Ano / Ne), okamžitá zpětná vazba
function decideTask(id, def, txt, opts) {
  const s = shell(id, { kind: 'decide' });
  const saved = store.get().tasks[id];
  const out = h('div', { class: 'task__result', hidden: true });
  const buttons = {};
  let pending = null;
  const group = h('div', { class: 'decide', role: 'group', 'aria-labelledby': s.promptId },
    def.options.map((o) => {
      const b = h('button', { type: 'button', class: 'btn btn--choice', 'aria-pressed': 'false' }, txt.options[o]);
      b.addEventListener('click', () => {
        if (!opts.deferred) { answer(o, true); return; }
        // Závěrečné procvičení: volba se jen označí, vyhodnotí se společně tlačítkem na konci.
        pending = o;
        for (const [k, bb] of Object.entries(buttons)) bb.setAttribute('aria-pressed', String(k === o));
      });
      buttons[o] = b;
      return b;
    }));

  function answer(o, fromUser) {
    const res = evalChoice(def, o);
    for (const [k, b] of Object.entries(buttons)) b.setAttribute('aria-pressed', String(k === o));
    const ok = res.result === 'correct';
    out.hidden = false;
    const lead = ok ? (txt.correctLead || ui().correct) : (txt.wrongLead || ui().incorrect);
    if (ok) {
      replace(out, verdict('correct', lead, { buddy: true }), rich('p', txt.explanation));
    } else {
      // Přátelská nápověda a další pokus; vysvětlení je k dispozici na požádání.
      const more = h('div', { hidden: true }, rich('p', txt.explanation));
      const showBtn = h('button', { type: 'button', class: 'btn btn--link' }, 'Ukázat vysvětlení');
      showBtn.addEventListener('click', () => { more.hidden = false; showBtn.remove(); });
      replace(out, verdict('incorrect', lead, { buddy: true }), h('p', {}, 'Klidně to zkus ještě jednou.'), showBtn, more);
    }
    if (fromUser) {
      store.setTask(id, { answer: o, result: res.result });
      opts.onChange?.();
      announce(s.live, ok ? lead + ' ' + txt.explanation.replace(/<[^>]+>/g, '') : lead + ' Klidně to zkus ještě jednou.');
    }
  }

  s.el.append(h('h4', { class: 'task__prompt', id: s.promptId, html: txt.prompt }), group, out, s.live);
  s.el.evaluate = () => { if (!pending) return !!store.get().tasks[id]?.result; answer(pending, true); return true; };
  if (saved?.answer && answerStillValid(def, saved.answer)) answer(saved.answer, false);
  return s.el;
}

// ───────────────────────── Odhalení vysvětlení po vlastním zamyšlení (nehodnotí se)
function revealTask(id, def, txt, opts) {
  const s = shell(id, { kind: 'reveal' });
  const out = h('div', { class: 'task__result reveal', hidden: true, tabindex: '-1' });
  const btn = h('button', { type: 'button', class: 'btn btn--primary', 'aria-expanded': 'false' }, txt.revealLabel || 'Ukázat vysvětlení');
  const show = () => {
    out.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    replace(out, verdict('info', 'Vysvětlení'), rich('p', txt.explanation),
      h('p', { class: 'hint' }, 'Porovnej s tím, co jsi vymyslel/a. Nemusí to být stejná slova, jde o stejný postup.'));
  };
  btn.addEventListener('click', () => {
    show();
    store.setTask(id, { result: null, revealed: true });
    opts.onChange?.();
    out.focus();
  });
  s.el.append(
    h('h4', { class: 'task__prompt', id: s.promptId }, txt.prompt),
    h('p', { class: 'hint' }, txt.thinkHint),
    h('div', { class: 'task__actions' }, btn),
    out, s.live);
  if (store.get().tasks[id]?.revealed) show();
  return s.el;
}
