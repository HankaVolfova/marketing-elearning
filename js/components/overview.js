// Přehled kurzu: dvanáct kapitol, hotové i připravované.

import { h, svg } from '../dom.js';
import { L, ui } from '../i18n.js';
import COURSE from '../../data/course.js';
import * as store from '../store.js';
import { backpack } from '../illustrations.js';

const pad = (n) => String(n).padStart(2, '0');

export function renderOverview() {
  const c = L().course;
  const st = store.get();
  const last = st.last;
  const chapters = [...COURSE.chapters].sort((a, b) => a.order - b.order);

  return h('main', { id: 'main', class: 'page page--overview', tabindex: '-1' },
    h('header', { class: 'page__head overview__head' },
      h('div', {},
        h('p', { class: 'kicker' }, 'E-learning'),
        h('h1', {}, c.title),
        h('p', { class: 'overview__sub' }, c.subtitle),
        h('p', { class: 'lead' }, c.intro),
        last ? h('p', {}, h('a', { class: 'btn btn--primary', href: `#/kapitola/${last.chapter}/${last.anchor || ''}` }, ui().continueWhereLeft)) : null,
        h('p', { class: 'overview__test' }, h('a', { class: 'btn btn--ghost', href: '#/test' }, 'Vyzkoušej si vzorový test'))),
      null),
    h('ol', { class: 'chapters' }, chapters.map((ch) => {
      const t = c.chapters[ch.id];
      const ready = ch.status === 'ready';
      const seen = Object.keys(st.seen[ch.id] || {}).length;
      const inner = [
        h('span', { class: 'chapters__num', 'aria-hidden': 'true' }, pad(ch.order)),
        h('span', { class: 'chapters__body' },
          h('span', { class: 'chapters__title' }, t.title, ch.extension ? h('span', { class: 'badge badge--extension' }, ui().extensionBadge) : null),
          t.teaser ? h('span', { class: 'chapters__teaser' }, t.teaser) : null,
          h('span', { class: `chapters__status ${ready ? 'is-ready' : 'is-planned'}` },
            ready ? (seen ? `${ui().ready} · prošlé části: ${seen}` : ui().ready) : ui().planned))
      ];
      return h('li', { class: `chapters__item ${ready ? 'is-ready' : 'is-planned'}` },
        ready
          ? h('a', { href: `#/kapitola/${ch.id}`, class: 'chapters__link' }, inner)
          : h('div', { class: 'chapters__link', 'aria-disabled': 'true' }, inner, h('span', { class: 'sr-only' }, ` – ${ui().plannedLong}`)));
    })));
}
