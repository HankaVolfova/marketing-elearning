// Slovníček: stránka s vyhledáváním a dialog s definicí pro odkazy ve výkladu.

import { h, replace } from '../dom.js';
import { L, ui, lang } from '../i18n.js';
import * as store from '../store.js';
import GLOSSARY from '../../data/glossary.js';

const byId = () => Object.fromEntries(GLOSSARY.map((g) => [g.id, g]));

export function termText(id) { return L().glossary[id]; }

export function sortedTerms() {
  const txt = L().glossary;
  return GLOSSARY.filter((g) => txt[g.id])
    .map((g) => ({ ...g, ...txt[g.id] }))
    .sort((a, b) => a.term.localeCompare(b.term, lang()));
}

export const explanationHref = (g, preferChapter) => {
  const alt = preferChapter && preferChapter !== g.chapter && (g.also || []).find((a) => a.chapter === preferChapter);
  return alt ? `#/kapitola/${alt.chapter}/${alt.anchor}` : `#/kapitola/${g.chapter}/${g.anchor}`;
};

// Definice ve výkladu – stejné znění jako ve slovníčku
export function renderDefinition(id, extra, { hideTerm = false } = {}) {
  const t = termText(id);
  const g = byId()[id];
  if (!t) return null;
  return h('div', { class: 'definition' + (hideTerm ? ' definition--bare' : ''), id: `def-${id}` },
    hideTerm ? h('p', { class: 'definition__term sr-only' }, h('dfn', {}, t.term)) : h('p', { class: 'definition__term' }, h('dfn', {}, t.term)),
    h('p', { class: 'definition__text' }, t.def),
    extra ? h('p', { class: 'definition__extra' }, extra) : null,
    g ? h('a', { class: 'definition__link term-link', 'data-term': id, href: `#/slovnicek/${id}` }, ui().openInGlossary, h('span', { class: 'sr-only' }, `: ${t.term}`)) : null);
}

// ───────── Stránka slovníčku
export function renderGlossaryPage(focusId) {
  const terms = sortedTerms();
  const chapters = L().course.chapters;
  const searchId = 'gloss-search';
  const input = h('input', { type: 'search', id: searchId, class: 'input', autocomplete: 'off' });
  const count = h('p', { class: 'hint', 'aria-live': 'polite' });
  const list = h('div', { class: 'glossary' });

  function render(q = '') {
    const norm = (s) => s.toLocaleLowerCase(lang()).normalize('NFD').replace(/\p{Diacritic}/gu, '');
    const nq = norm(q.trim());
    const hits = terms.filter((t) => !nq || norm(t.term).includes(nq) || norm(t.def).includes(nq));
    count.textContent = hits.length ? ui().glossaryCount(hits.length) : ui().glossaryEmpty;
    const groups = {};
    for (const t of hits) {
      const letter = t.term.charAt(0).toLocaleUpperCase(lang());
      (groups[letter] = groups[letter] || []).push(t);
    }
    replace(list, ...Object.entries(groups).map(([letter, items]) => h('section', { class: 'glossary__group', 'aria-labelledby': `gl-${letter}` },
      h('h2', { class: 'glossary__letter', id: `gl-${letter}` }, letter),
      h('dl', {}, items.map((t) => h('div', { class: 'glossary__entry', id: `g-${t.id}`, tabindex: '-1' },
        h('dt', {}, t.term),
        h('dd', {}, h('p', {}, t.def),
          h('p', { class: 'glossary__meta' }, h('span', {}, chapters[t.chapter]?.title || ''), ' · ',
            h('a', { href: explanationHref(t) }, ui().goToExplanation),
            ...(t.also || []).flatMap((a) => [h('br'), h('span', {}, chapters[a.chapter]?.title || ''), ' · ',
              h('a', { href: `#/kapitola/${a.chapter}/${a.anchor}` }, ui().goToExplanation)]))))))
    )));
  }
  input.addEventListener('input', () => render(input.value));
  render();

  const last = store.get().last;
  const back = last && last.chapter
    ? h('a', { class: 'btn btn--ghost back-link', href: `#/kapitola/${last.chapter}/${last.anchor || ''}` }, h('span', { 'aria-hidden': 'true' }, '← '), 'Zpět do kapitoly, kde jsem byl/a')
    : null;
  const page = h('main', { id: 'main', class: 'page page--glossary', tabindex: '-1' },
    back ? h('p', { class: 'glossary__back' }, back) : null,
    h('header', { class: 'page__head' }, h('p', { class: 'kicker' }, ui().brand), h('h1', {}, ui().glossaryTitle), h('p', { class: 'lead' }, ui().glossaryIntro)),
    h('div', { class: 'glossary__search' }, h('label', { for: searchId }, ui().glossarySearch), input, count),
    list);

  if (focusId) {
    requestAnimationFrame(() => {
      const el = page.querySelector(`#g-${CSS.escape(focusId)}`);
      if (el) { el.classList.add('is-target'); el.scrollIntoView({ block: 'center' }); el.focus({ preventScroll: true }); }
    });
  }
  return page;
}

// ───────── Dialog s definicí (odkaz na pojem ve výkladu)
let dialog, lastTrigger;
export function setupTermDialog() {
  dialog = h('dialog', { class: 'dialog dialog--term', 'aria-labelledby': 'term-dlg-title' });
  document.body.append(dialog);
  dialog.addEventListener('close', () => { lastTrigger?.focus(); });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a.term-link');
    if (!a) return;
    e.preventDefault();
    openTerm(a.dataset.term, a);
  });
}

function openTerm(id, trigger) {
  const t = termText(id);
  const g = byId()[id];
  if (!t || !g) return;
  lastTrigger = trigger;
  // Zapamatuj přesné místo, aby se student ze slovníčku vrátil tam, kde byl.
  const main = document.getElementById('main');
  const spot = trigger.closest('.step[id], .card[id], section[id]');
  if (main?.dataset.chapter && spot) store.setLast(main.dataset.chapter, spot.id);
  const close = h('button', { type: 'button', class: 'btn btn--ghost dialog__close', onclick: () => dialog.close() }, ui().close);
  replace(dialog, 
    h('h2', { id: 'term-dlg-title' }, t.term),
    h('p', {}, t.def),
    h('p', { class: 'dialog__links' },
      h('a', { href: explanationHref(g, document.getElementById('main')?.dataset.chapter), onclick: () => dialog.close() }, ui().goToExplanation), ' · ',
      h('a', { href: `#/slovnicek/${id}`, onclick: () => dialog.close() }, ui().openInGlossary)),
    close);
  dialog.showModal();
  close.focus();
}
