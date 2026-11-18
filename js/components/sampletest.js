// Vzorový test: z každého tématu báze jedna náhodná otázka (téma Produkt a značka dvě), celkem 8.
// Uzavřené otázky se vyhodnotí automaticky, otevřené student napíše a porovná se vzorovou odpovědí.
// Nic se neukládá: každé otevření nebo „Nová sada“ vylosuje nové otázky.

import { h, replace, nextId } from '../dom.js';
import BANK from '../../content/cs/test-bank.js';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function drawSet() {
  return BANK.topics.map((t) => {
    const q = pick(t.questions);
    if (q.type !== 'closed') return { topic: t, q };
    const order = shuffle(q.options.map((_, i) => i));
    return { topic: t, q, order };
  });
}

function renderQuestion(item, n) {
  const { topic, q } = item;
  const el = h('section', { class: 'task stest__q', 'aria-labelledby': `stq-${n}` },
    h('p', { class: 'stest__meta' }, h('span', { class: 'stest__num' }, `${n}.`), h('span', { class: 'stest__topic' }, topic.title), h('span', { class: 'stest__pts' }, '5 b.')),
    h('h2', { class: 'task__prompt stest__prompt', id: `stq-${n}` }, q.q));

  if (q.type === 'closed') {
    const name = nextId('stq');
    const opts = item.order.map((i) => {
      const id = nextId('sto');
      const input = h('input', { type: 'radio', name, id, value: String(i) });
      return { i, input, wrap: h('div', { class: 'choice__opt' }, input, h('label', { for: id }, q.options[i])) };
    });
    el.append(h('fieldset', { class: 'stest__opts' }, h('legend', { class: 'sr-only' }, q.q), opts.map((o) => o.wrap)));
    const res = h('p', { class: 'stest__res', hidden: true });
    el.append(res);
    item.evaluate = () => {
      const chosen = opts.find((o) => o.input.checked);
      opts.forEach((o) => {
        o.input.disabled = true;
        if (o.i === q.correct) o.wrap.dataset.state = 'correct';
        else if (chosen && o === chosen) o.wrap.dataset.state = 'incorrect';
      });
      const ok = chosen && chosen.i === q.correct;
      res.hidden = false;
      res.className = 'stest__res ' + (ok ? 'is-ok' : 'is-bad');
      res.textContent = ok ? 'Správně.' : (chosen ? `Nesprávně. Správná odpověď: ${q.options[q.correct]}.` : `Bez odpovědi. Správná odpověď: ${q.options[q.correct]}.`);
      return { closed: true, ok: !!ok, answered: !!chosen };
    };
  } else {
    const id = nextId('sta');
    const ta = h('textarea', { id, class: 'textarea', rows: 5, placeholder: 'Napiš odpověď vlastními slovy…' });
    const model = h('div', { class: 'stest__model', hidden: true },
      h('p', { class: 'stest__model-h' }, 'Vzorová odpověď'),
      h('p', {}, q.model),
      h('p', { class: 'stest__model-hint' }, 'Porovnej: obsahuje tvoje odpověď hlavní body? Na přesném znění nezáleží.'));
    el.append(h('label', { for: id, class: 'sr-only' }, 'Tvoje odpověď'), ta, model);
    item.evaluate = () => {
      model.hidden = false;
      ta.readOnly = true;
      return { closed: false, answered: ta.value.trim().length > 0 };
    };
  }
  return el;
}

export function renderSampleTest() {
  const page = h('div', { class: 'page stest' });
  const build = () => {
    const set = drawSet();
    const list = h('div', { class: 'stest__list' }, set.map((it, i) => renderQuestion(it, i + 1)));
    const summary = h('div', { class: 'stest__summary', hidden: true, tabindex: '-1', role: 'status' });
    const evalBtn = h('button', { type: 'button', class: 'btn btn--primary' }, 'Vyhodnotit test');
    const newBtn = h('button', { type: 'button', class: 'btn btn--ghost' }, 'Nová sada otázek');
    const newTop = h('button', { type: 'button', class: 'btn btn--ghost' }, 'Nová sada otázek');
    evalBtn.addEventListener('click', () => {
      const r = set.map((it) => it.evaluate());
      const closed = r.filter((x) => x.closed);
      const ok = closed.filter((x) => x.ok).length;
      const open = r.length - closed.length;
      evalBtn.hidden = true;
      summary.hidden = false;
      replace(summary,
        h('p', { class: 'stest__summary-h' }, 'Výsledek'),
        h('p', {}, `Uzavřené otázky: ${ok} z ${closed.length} správně (${ok * 5} z ${closed.length * 5} bodů).`),
        open ? h('p', {}, `Otevřené otázky (${open}): porovnej svoje odpovědi se vzorem u každé otázky. V ostrém testu je hodnotí zkoušející.`) : null);
      summary.scrollIntoView({ block: 'center' });
      summary.focus({ preventScroll: true });
    });
    const again = () => { build(); window.scrollTo(0, 0); };
    newBtn.addEventListener('click', again);
    newTop.addEventListener('click', again);
    replace(page,
      h('header', { class: 'stest__head' },
        h('p', { class: 'kicker' }, 'Příprava na zkoušku'),
        h('h1', { tabindex: '-1' }, 'Vzorový test'),
        h('p', { class: 'lead' }, 'Test má 8 otázek po 5 bodech: z každého tématu jedna, z tématu Produkt a značka dvě. Pokaždé se namíchá nová sada. Uzavřené otázky se vyhodnotí automaticky. U otevřených napiš odpověď a po vyhodnocení ji porovnej se vzorem.'),
        h('p', {}, newTop)),
      list,
      h('div', { class: 'stest__actions' }, evalBtn),
      summary,
      h('div', { class: 'stest__actions' }, newBtn, h('a', { class: 'btn btn--ghost', href: '#/' }, 'Zpět na přehled kurzu')));
  };
  build();
  return page;
}
