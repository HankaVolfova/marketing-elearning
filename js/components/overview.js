// Přehled kurzu: dvanáct kapitol, hotové i připravované.

import { h, svg } from '../dom.js';
import { L, ui } from '../i18n.js';
import COURSE from '../../data/course.js';
import * as store from '../store.js';
import { chapterArt } from '../chapter-art.js';

const pad = (n) => String(n).padStart(2, '0');

export function renderOverview() {
  const c = L().course;
  const st = store.get();
  const last = st.last;
  const chapters = [...COURSE.chapters].sort((a, b) => a.order - b.order);
  const first = chapters.find((x) => x.status === 'ready');
  const collage = ['ch-komunikace', 'ch-cena', 'ch-znacka'];

  return h('main', { id: 'main', class: 'page page--overview', tabindex: '-1' },
    h('header', { class: 'ohero' },
      h('div', { class: 'ohero__text' },
        h('p', { class: 'ohero__kicker' }, c.kicker),
        h('h1', { class: 'ohero__title' }, c.title),
        h('p', { class: 'ohero__tagline' }, c.tagline),
        h('p', { class: 'ohero__lead' }, c.intro),
        h('ul', { class: 'ohero__facts', 'aria-label': 'Co vás čeká' }, c.facts.map((f) => h('li', {}, f))),
        h('p', { class: 'ohero__cta' },
          last ? h('a', { class: 'btn btn--light', href: `#/kapitola/${last.chapter}/${last.anchor || ''}` }, ui().continueWhereLeft)
               : first ? h('a', { class: 'btn btn--light', href: `#/kapitola/${first.id}` }, c.startLabel) : null,
          h('a', { class: 'btn btn--outline-light', href: '#/test' }, 'Vzorový test'))),
      h('div', { class: 'ohero__side' },
        h('div', { class: 'ohero__collage', 'aria-hidden': 'true' },
          collage.map((id, i) => h('span', { class: `ohero__bubble ohero__bubble--${i + 1}`, html: chapterArt(id) || '' }))),
        h('aside', { class: 'sticky', 'aria-label': 'Vzkaz od vyučující' },
          h('span', { class: 'sticky__tape', 'aria-hidden': 'true' }),
          h('p', { class: 'sticky__hi' }, c.note.greeting),
          h('p', { class: 'sticky__text' }, c.note.text),
          h('p', { class: 'sticky__sig' }, c.note.signature)))),

    h('h2', { class: 'ochapters__title' }, c.chaptersTitle),
    h('ol', { class: 'ochapters' }, chapters.map((ch) => {
      const t = c.chapters[ch.id];
      const ready = ch.status === 'ready';
      const seen = Object.keys(st.seen[ch.id] || {}).length;
      const art = chapterArt(ch.id);
      const inner = [
        h('span', { class: 'ochapters__art', 'aria-hidden': 'true', html: art || '' }),
        h('span', { class: 'ochapters__body' },
          h('span', { class: 'ochapters__num' }, `Kapitola ${ch.order}`),
          h('span', { class: 'ochapters__name' }, t.title),
          ch.extension ? h('span', { class: 'badge badge--extension' }, ui().extensionBadge) : null,
          t.teaser ? h('span', { class: 'ochapters__teaser' }, t.teaser) : null,
          seen ? h('span', { class: 'ochapters__seen' }, `Prošlé části: ${seen}`) : null)
      ];
      return h('li', { class: `ochapters__item ${ready ? 'is-ready' : 'is-planned'}` },
        ready
          ? h('a', { href: `#/kapitola/${ch.id}`, class: 'ochapters__link' }, inner)
          : h('div', { class: 'ochapters__link', 'aria-disabled': 'true' }, inner, h('span', { class: 'sr-only' }, ` – ${ui().plannedLong}`)));
    })));
}
