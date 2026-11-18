// Odborná schémata vykreslená přesně z dat (HTML + dekorativní SVG, žádný text v obrázku).

import { h, svg, blockNodes } from '../dom.js';
import { L } from '../i18n.js';
import { people } from '../illustrations.js';

export function renderFigure(kind, id) {
  const f = L().figures[kind];
  const fig = (body, cls) => h('figure', { class: `figure figure--${cls}`, id },
    body, h('figcaption', {}, f.caption));
  switch (kind) {
    case 'needs-flow': return fig(needsFlow(f), 'flow');
    case 'value-scale': return fig(valueScale(f), 'scale');
    case 'market-matrix': return fig(marketMatrix(f), 'matrix');
    case 'meeting': return fig(meeting(f), 'meeting');
    case 'timeline': return fig(timeline(f), 'timeline');
    case 'triangle': return fig(triangle(f), 'triangle');
    default: return h('p', {}, `Chybí schéma ${kind}`);
  }
}

function needsFlow(f) {
  const ol = h('ol', { class: 'flow', 'aria-label': f.alt });
  f.steps.forEach((s, i) => {
    ol.append(h('li', { class: 'flow__step' }, h('span', { class: 'flow__num', 'aria-hidden': 'true' }, String(i + 1)),
      h('strong', {}, s.title), h('span', {}, s.text)));
    if (f.between[i]) {
      const b = f.between[i];
      ol.append(h('li', { class: 'flow__between' },
        h('span', { class: 'flow__influence' }, h('span', { class: 'sr-only' }, 'Vliv: '), b.influence),
        h('span', { class: 'flow__exit' }, h('span', { class: 'flow__exit-mark', 'aria-hidden': 'true' }, '↘'), h('span', { class: 'sr-only' }, 'Kde cesta může skončit: '), b.exit)));
    }
  });
  return ol;
}

function valueScale(f) {
  const pan = (side, cls) => h('div', { class: `scale__pan scale__pan--${cls}` },
    h('h5', {}, side.title), h('ul', {}, side.items.map((i) => h('li', {}, i))));
  return h('div', { class: 'scale', role: 'group', 'aria-label': f.alt },
    pan(f.gains, 'gains'),
    h('div', { class: 'scale__beam', 'aria-hidden': 'true' },
      svg('<svg viewBox="0 0 120 80"><path d="M10 20h100M60 20v52M40 72h40" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="60" cy="14" r="5" fill="var(--i-purple)" stroke="currentColor" stroke-width="2"/></svg>')),
    pan(f.costs, 'costs'));
}

function marketMatrix(f) {
  return h('div', { class: 'table-wrap' }, h('table', { class: 'matrix' },
    h('caption', { class: 'sr-only' }, f.caption),
    h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, h('span', { class: 'matrix__axis' }, `${f.rowHead} ↓  /  ${f.colHead} →`)),
      f.cols.map((c) => h('th', { scope: 'col' }, c)))),
    h('tbody', {}, f.rows.map((r, ri) => h('tr', {}, h('th', { scope: 'row' }, r),
      f.cells[ri].map((cell) => h('td', {}, h('strong', { class: 'matrix__code' }, cell.code), h('span', {}, cell.text))))))));
}

function meeting(f) {
  const voices = {};
  for (const c of L().chapters['ch-filosofie'].concepts) voices[c.key] = { voice: c.voice, name: c.name, id: c.id };
  return h('ul', { class: 'meeting', 'aria-label': f.alt },
    f.people.map((p) => h('li', { class: `meeting__person meeting__person--${p.key}` },
      h('blockquote', { class: 'bubble' }, h('p', {}, `„${voices[p.key].voice}“`)),
      svg(people[p.key], 'meeting__face'),
      h('p', { class: 'meeting__role' }, h('span', {}, p.role), h('a', { href: `#/kapitola/ch-filosofie/${voices[p.key].id}`, class: 'meeting__concept' }, voices[p.key].name)))));
}

function timeline(f) {
  const names = {};
  for (const c of L().chapters['ch-filosofie'].concepts) names[c.key] = c.name;
  return h('div', { class: 'tl' },
    h('ol', { class: 'tl__list' }, f.items.map((i) => h('li', { class: `tl__item tl__item--${i.key}` }, h('strong', {}, names[i.key]), h('span', {}, i.when)))),
    h('p', { class: 'tl__today' }, f.today));
}

function triangle(f) {
  return h('div', { class: 'tri', role: 'group', 'aria-label': f.alt },
    svg('<svg viewBox="0 0 300 240" preserveAspectRatio="none"><path d="M150 20L280 220H20z" fill="var(--mint-100)" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>', 'tri__bg'),
    f.nodes.map((n, i) => h('div', { class: `tri__node tri__node--${i}` }, h('strong', {}, n.title), h('span', {}, n.text))),
    h('div', { class: 'tri__center' }, f.center));
}
