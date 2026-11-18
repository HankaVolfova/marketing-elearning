// Myšlenková mapa: interaktivní, ovladatelná klávesnicí. Na mobilu se zobrazí jako hierarchický seznam
// (stejný obsah i stejná struktura, liší se jen rozvržení).

import { h, nextId } from '../dom.js';
import { L, ui } from '../i18n.js';
import * as store from '../store.js';
import COURSE from '../../data/course.js';

export function renderMindmap(ch) {
  const m = ch.mindmap;
  const gl = L().glossary;
  const blocks = Object.fromEntries(ch.blocks.map((b, i) => [b.id, i + 1]));

  const items = m.branches.map((br) => {
    const pid = nextId('mm');
    const panel = h('div', { class: 'mm__panel', id: pid, hidden: true },
      h('p', {}, br.text),
      h('p', { class: 'mm__label' }, ui().mapTerms),
      h('ul', { class: 'mm__terms' }, br.terms.map((t) => h('li', {}, h('a', { href: `#/slovnicek/${t}`, class: 'term-link', 'data-term': t }, gl[t]?.term || t)))),
      h('p', { class: 'mm__label' }, ui().mapRelations),
      h('p', {}, br.relations),
      h('p', {}, h('a', { href: `#/kapitola/${ch.id}/${br.block}`, class: 'mm__go' }, `${ui().goToExplanation}: ${ui().blockWord.toLowerCase()} ${blocks[br.block]}`)));
    const btn = h('button', { type: 'button', class: 'mm__btn', 'aria-expanded': 'false', 'aria-controls': pid },
      h('span', { class: 'mm__num', 'aria-hidden': 'true' }, String(blocks[br.block]).padStart(2, '0')),
      h('span', {}, br.title));
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
    return h('li', { class: `mm__branch mm__branch--${br.block}` }, btn, panel);
  });

  return h('div', { class: 'mm' },
    h('p', { class: 'mm__center' }, h('strong', {}, m.center)),
    h('ul', { class: 'mm__branches', 'aria-label': ui().mapTitle }, items));
}

// Stránka „Myšlenkové mapy“: rychlé shrnutí témat s přepínáním nahoře.
// Téma se bere z adresy, jinak poslední otevřené, jinak první hotové.
export function renderMapPage(chapterId) {
  const all = [...COURSE.chapters].sort((a, b) => a.order - b.order);
  const ready = all.filter((c) => c.status === 'ready');
  const last = store.get().last;
  const id = (chapterId && ready.some((c) => c.id === chapterId)) ? chapterId
    : (last && ready.some((c) => c.id === last.chapter)) ? last.chapter : ready[0]?.id;
  const ch = L().chapters[id];
  const titles = L().course.chapters;
  const back = last && last.chapter
    ? h('p', { class: 'glossary__back' }, h('a', { class: 'btn btn--ghost back-link', href: `#/kapitola/${last.chapter}/${last.anchor || ''}` }, h('span', { 'aria-hidden': 'true' }, '← '), 'Zpět do kapitoly, kde jsem byl/a'))
    : null;
  const switcher = h('nav', { class: 'topic-switch', 'aria-label': 'Témata' },
    h('ul', {}, all.map((c) => {
      const isReady = c.status === 'ready';
      const label = [h('span', { class: 'topic-switch__num', 'aria-hidden': 'true' }, String(c.order)), h('span', { class: 'topic-switch__title' }, titles[c.id]?.title || c.id)];
      return h('li', {}, isReady
        ? h('a', { href: `#/mapa/${c.id}`, class: 'topic-switch__item' + (c.id === id ? ' is-current' : ''), 'aria-current': c.id === id ? 'page' : null }, label)
        : h('span', { class: 'topic-switch__item is-planned' }, label, h('span', { class: 'sr-only' }, ` – ${ui().planned}`)));
    })));
  return h('main', { id: 'main', class: 'page page--map', tabindex: '-1' },
    back,
    h('header', { class: 'page__head' },
      h('h1', {}, ui().mapsTitle),
      h('p', { class: 'lead' }, ui().mapsIntro)),
    switcher,
    h('section', { class: 'map-wrap', 'aria-label': `${ui().chapterWord} ${all.find((c) => c.id === id).order}: ${ch.title}` },
      renderMindmap(ch),
      h('p', { class: 'map-go' }, h('a', { class: 'btn btn--ghost', href: `#/kapitola/${id}` }, 'Otevřít kapitolu'))));
}
