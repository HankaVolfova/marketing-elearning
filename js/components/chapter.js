// Stránka kapitoly: úvod, výukové bloky, závěrečné procvičení, návrat k úvodní situaci.

import { h, rich, svg, nextId, replace, blockNodes } from '../dom.js';
import { L, ui } from '../i18n.js';
import * as store from '../store.js';
import COURSE from '../../data/course.js';
import { renderTask } from './tasks.js';
import { renderFigure } from './figures.js';
import { renderDefinition } from './glossary.js';
import { renderFinal } from './final.js';
import { renderProgress } from './progress.js';
import { mug, productIcon } from '../illustrations.js';
import { chapterArt } from '../chapter-art.js';

const pad = (n) => String(n).padStart(2, '0');

export function renderChapter(chapterId) {
  const ch = L().chapters[chapterId];
  const meta = COURSE.chapters.find((c) => c.id === chapterId);
  if (!ch || !meta || meta.status !== 'ready') return renderPlanned(chapterId);

  const sections = [
    { id: 'uvod', label: 'Úvod' },
    ...ch.blocks.map((b, i) => ({ id: b.id, label: b.title, num: i + 1 })),
    { id: 'zaver', label: ui().finalTitle }
  ];

  const nav = renderNav(chapterId, sections);
  const content = h('div', { class: 'chapter__content' },
    renderIntro(ch, meta, chapterId),
    ch.blocks.map((b, i) => renderBlock(chapterId, b, i)),
    h('section', { class: 'section section--final', id: 'zaver', 'aria-labelledby': 'zaver-h', dataset: { section: 'zaver' } },
      h('h2', { id: 'zaver-h', class: 'section__title', tabindex: '-1' }, ui().finalTitle),
      renderFinal(ch)),
    renderChapterEnd(meta)
  );

  return h('main', { id: 'main', class: 'page page--chapter', tabindex: '-1', dataset: { chapter: chapterId } },
    h('div', { class: 'chapter' }, nav, content));
}

// ───────── Navigace kapitolou (desktop: přichycená vlevo; mobil: tlačítko „Obsah kapitoly“)
function renderNav(chapterId, sections) {
  const seen = store.get().seen[chapterId] || {};
  const list = () => h('ol', { class: 'toc' }, sections.map((s) => h('li', {},
    h('a', { href: `#/kapitola/${chapterId}/${s.id}`, class: 'toc__link', dataset: { target: s.id } },
      s.num ? h('span', { class: 'toc__num', 'aria-hidden': 'true' }, String(s.num)) : null,
      h('span', { class: 'toc__label' }, s.label),
      seen[s.id] ? h('span', { class: 'toc__seen' }, h('span', { 'aria-hidden': 'true' }, '✓ '), ui().seenBadge) : null))));

  const total = L().chapters[chapterId].blocks.length;
  const cheer = h('p', { class: 'nav-progress', 'aria-live': 'polite' });
  const bar = h('span', { class: 'nav-progress__bar', 'aria-hidden': 'true' }, h('span', {}));
  const drawCheer = () => {
    const n = L().chapters[chapterId].blocks.filter((b) => (store.get().seen[chapterId] || {})[b.id]).length;
    cheer.textContent = n === 0 ? 'Začínáš. Pět krátkých částí.' : n === total ? 'Všech pět částí máš za sebou. Super!' : `Máš za sebou ${n} z ${total} částí.`;
    bar.firstChild.style.width = `${(n / total) * 100}%`;
  };
  drawCheer();
  const un = store.subscribe(() => { if (!side.isConnected && side.dataset.mounted) { un(); return; } drawCheer(); });
  const side = h('nav', { class: 'chapter__nav', 'aria-label': ui().chapterToc },
    h('p', { class: 'chapter__nav-title' }, ui().inThisChapter), list(), h('div', { class: 'nav-progress-wrap' }, bar, cheer));
  requestAnimationFrame(() => { side.dataset.mounted = '1'; });

  // Mobilní obsah v dialogu
  const dlg = h('dialog', { class: 'dialog dialog--toc', 'aria-label': ui().chapterToc });
  const openBtn = h('button', { type: 'button', class: 'btn btn--toc', 'aria-haspopup': 'dialog' }, ui().chapterToc);
  openBtn.addEventListener('click', () => {
    replace(dlg, 
      h('div', { class: 'dialog__head' }, h('h2', {}, ui().chapterToc),
        h('button', { type: 'button', class: 'btn btn--ghost', onclick: () => dlg.close() }, ui().closeToc)),
      list());
    dlg.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => dlg.close()));
    const cur = document.body.dataset.currentSection;
    const curLink = cur && dlg.querySelector(`a[data-target="${cur}"]`);
    if (curLink) curLink.setAttribute('aria-current', 'location');
    dlg.showModal();
    (curLink || dlg.querySelector('a'))?.focus();
  });
  dlg.addEventListener('close', () => openBtn.focus({ preventScroll: true }));
  return h('div', { class: 'chapter__navwrap' }, side, h('div', { class: 'toc-mobile' }, openBtn), dlg);
}

// ───────── Úvod kapitoly (krátký: obsah a první zapojení hned po otevření)
function renderIntro(ch, meta, chapterId) {
  const last = store.get().last;
  const canContinue = last && last.chapter === chapterId && last.anchor && last.anchor !== 'uvod';
  const fmt = (n) => String(n).replace('.', ',');
  const mainTotal = ch.blocks.every((b) => b.time) ? ch.blocks.reduce((a, b) => a + b.time.main, 0) : null;
  return h('section', { class: 'section section--intro', id: 'uvod', 'aria-labelledby': 'uvod-h', dataset: { section: 'uvod' } },
    h('div', { class: chapterArt(chapterId) ? 'hero hero--art' : 'hero' },
      h('div', { class: 'hero__text' },
        h('p', { class: 'badge badge--chapter' }, `${ui().chapterWord} ${meta.order} · ${ch.title}`),
        h('h1', { id: 'uvod-h', class: 'hero__title', tabindex: '-1' }, ch.headline),
        h('p', { class: 'hero__question' }, ch.question),
        meta.extension ? h('p', { class: 'hero__extension', html: ui().extensionNote }) : null,
        canContinue ? h('p', {}, h('a', { class: 'btn btn--ghost', href: `#/kapitola/${chapterId}/${last.anchor}` }, ui().continueWhereLeft)) : null),
      chapterArt(chapterId) ? h('div', { class: 'hero__art hero__art--chapter', html: chapterArt(chapterId) }) : null),

    h('div', { class: 'scenario' },
      h('h2', { class: 'scenario__title' }, ch.intro.scenario.title),
      ch.intro.scenario.body.map((p) => h('p', {}, p)),
      ch.intro.scenario.taskId ? renderTask(ch.intro.scenario.taskId) : null,
      ch.intro.scenario.taskId ? h('p', { class: 'hint' }, 'Ke své volbě se vrátíš na konci kapitoly.') : null),

    h('div', { class: 'intro-grid' },
      h('div', { class: 'blocks-overview' },
        h('h2', {}, ui().blocksOverview),
        h('ol', {}, ch.blocks.map((b, i) => h('li', {},
          h('a', { href: `#/kapitola/${chapterId}/${b.id}` },
            h('span', { class: 'bo__icon', 'aria-hidden': 'true' }, String(i + 1)),
            h('span', { class: 'bo__text' }, h('span', { class: 'bo__num' }, `Část ${i + 1}`), h('strong', {}, b.title)),
            b.time ? h('span', { class: 'bo__time' }, `${fmt(b.time.main)} min`) : null)))))),
    h('p', { class: 'start' }, h('a', { class: 'btn btn--primary btn--large', href: `#/kapitola/${chapterId}/${ch.blocks[0].id}` }, ui().start, h('span', { 'aria-hidden': 'true' }, ' →'))));
}

// ───────── Výukový blok
function renderBlock(chapterId, b, i) {
  const headId = `${b.id}-h`;
  const fmt = (n) => String(n).replace('.', ',');
  const head = h('header', { class: 'block__head' },
    h('p', { class: 'block__meta' },
      h('span', { class: 'badge badge--part' }, `${ui().blockWord} ${i + 1} z ${L().chapters[chapterId].blocks.length}`),
      b.time ? h('span', { class: 'badge badge--time' }, `${fmt(b.time.main)} min`) : null),
    h('h2', { id: headId, class: 'block__title', tabindex: '-1' }, b.title));
  const summary = h('div', { class: 'summary', id: `${b.id}-shrnuti`, dataset: { seenMarker: b.id } },
    h('p', { class: 'summary__label' }, ui().summary), h('p', { class: 'summary__text' }, b.summary));

  // Nový rytmus: krátké výukové kroky (myšlenka → teorie → příklad → interakce)
  if (b.steps) {
    return h('section', { class: 'section block block--steps' + (b.isMain ? ' block--main' : ''), id: b.id, 'aria-labelledby': headId, dataset: { section: b.id } },
      head,
      h('p', { class: 'goal goal--short' }, b.goal),
      b.steps.map((st, k) => renderStep(chapterId, b, st, k, b.steps.length)),
      b.optional ? h('details', { class: 'optional' },
        h('summary', {}, h('span', { class: 'optional__title' }, b.optional.title), h('span', { class: 'optional__note' }, b.optional.note)),
        h('div', { class: 'optional__body' }, b.optional.steps.map((st, k) => renderStep(chapterId, b, st, k, b.optional.steps.length, true)))) : null,
      summary);
  }

  const groups = b.taskGroups || [{ title: ui().practice, tasks: b.tasks }];
  return h('section', { class: 'section block' + (b.isMain ? ' block--main' : ''), id: b.id, 'aria-labelledby': headId, dataset: { section: b.id } },
    head,
    h('p', { class: 'goal goal--short' }, b.goal),
    h('div', { class: 'prose' }, renderNodes(b.body, chapterId)),
    b.example ? h('aside', { class: 'example', 'aria-labelledby': `${b.id}-ex` },
      h('p', { class: 'tag tag--example' }, `${ui().example} · ${ui().fictional.toLowerCase()} Ranec`),
      h('h3', { id: `${b.id}-ex` }, b.example.title),
      renderNodes(b.example.body, chapterId)) : null,
    h('div', { class: 'practice', id: `${b.id}-procviceni` },
      groups.map((g) => h('div', { class: 'practice__group' },
        h('p', { class: 'tag tag--practice' }, ui().practice),
        h('h3', {}, g.title),
        g.intro ? h('p', {}, g.intro) : null,
        g.tasks.length > 2
          ? g.tasks.map((t, k) => h('div', { class: 'final__item' }, h('p', { class: 'final__count', 'aria-hidden': 'true' }, `${k + 1} / ${g.tasks.length}`), renderTask(t)))
          : g.tasks.map((t) => renderTask(t))))),
    summary);
}

function renderStep(chapterId, b, st, k, total, optional = false) {
  const hid = `${st.id}-h`;
  const tasks = st.tasks || (st.task ? [st.task] : []);
  return h('section', { class: 'step' + (st.lead ? ' step--lead' : '') + (optional ? ' step--optional' : ''), id: st.id, 'aria-labelledby': st.lead ? `${b.id}-h` : hid },
    st.lead ? null : h('h3', { id: hid, class: 'step__title', tabindex: '-1' }, st.title),
    st.body.length ? h('div', { class: 'prose' }, renderNodes(st.body, chapterId)) : null,
    tasks.length ? h('div', { class: 'step__task' },
      h('p', { class: 'step__tasklabel' }, tasks.length > 1 ? 'Úkoly' : 'Úkol'),
      tasks.map((t) => renderTask(t))) : null,
    st.more ? h('details', { class: 'expand expand--more' }, h('summary', {}, 'Chci vědět víc'), h('div', { class: 'expand__body' }, renderNodes(st.more, chapterId))) : null);
}

// ───────── Obsahové uzly
export function renderNodes(nodes, chapterId) {
  const out = [];
  for (const n of nodes) out.push(renderNode(n, chapterId));
  return out;
}

function renderNode(n, chapterId) {
  switch (n.t) {
    case 'p': return rich('p', n.html, { id: n.id });
    case 'h3': return h('h3', { id: n.id, tabindex: n.id ? '-1' : null }, n.text);
    case 'list': return h(n.ordered ? 'ol' : 'ul', { class: 'list' }, n.items.map((i) => rich('li', i)));
    case 'def': return renderDefinition(n.term, n.note);
    case 'note': return h('div', { class: 'note' }, rich('p', n.html));
    case 'aside': return h('p', { class: 'aside' }, h('span', { class: 'aside__mark', 'aria-hidden': 'true' }, '—'), ' ', n.text);
    case 'expand': return h('details', { class: 'expand' }, h('summary', {}, n.title), h('div', { class: 'expand__body' }, renderNodes(n.body, chapterId)));
    case 'figure': return renderFigure(n.kind, n.id);
    case 'steps': return h('ol', { class: 'steps' }, n.items.map((s) => h('li', {}, h('strong', {}, s.title), ' ', h('span', {}, s.text))));
    case 'table': return renderTable(n);
    case 'timeline3': return h('div', { class: 'phases' }, n.cols.map((c) => h('div', { class: 'phases__col' }, h('h4', {}, c.title), h('ul', {}, c.items.map((i) => h('li', {}, i))))));
    case 'twoCustomers': return h('div', { class: 'customers' }, n.items.map((c) => h('div', { class: 'customer' },
      h('h4', {}, c.name), h('p', { class: 'customer__who' }, c.who),
      h('div', { class: 'customer__cols' },
        h('div', {}, h('p', { class: 'customer__lbl' }, 'Přínosy'), h('ul', {}, c.gains.map((g) => h('li', {}, g)))),
        h('div', {}, h('p', { class: 'customer__lbl' }, 'Oběti'), h('ul', {}, c.costs.map((g) => h('li', {}, g))))),
      h('p', { class: 'customer__verdict' }, c.verdict))));
    case 'compare2': return h('div', { class: 'compare2' }, n.items.map((c) => h('div', {}, h('h4', {}, c.title), h('p', {}, c.text))));
    case 'concept': return renderConcept(n);
    case 'conceptNav': return renderConceptNav(chapterId);
    case 'conceptTable': return renderConceptTable(chapterId, n.id);
    case 'dontmix': return h('div', { class: 'dontmix', id: n.id, tabindex: '-1' },
      h('p', { class: 'dontmix__title' }, h('span', { class: 'tag tag--warn' }, 'Nepleť si'), ' ', h('strong', {}, `${n.a} × ${n.b}`)),
      rich('p', n.html));
    case 'dontmixList': return h('div', { class: 'dontmix-list', id: n.id },
      h('h3', {}, n.title),
      h('dl', {}, n.items.map((i) => h('div', {}, h('dt', {}, `${i.a} × ${i.b}`), h('dd', {}, i.text)))));
    case 'egg': return renderEgg();
    case 'cards': return renderCards(n);
    case 'mock': return renderMock(n);
    case 'voices': return renderVoices(chapterId);
    case 'acronym': return renderAcronym(n);
    case 'matrix': return renderMatrix(n);
    case 'forces': return renderForces(n);
    case 'pmap': return renderPerceptionMap(n);
    case 'plc': return renderLifeCycle(n);
    case 'chain': return renderChain(n);
    case 'pyramid': return renderPyramid(n);
    default: return null;
  }
}

function renderTable(n) {
  return h('div', { class: 'table-wrap', id: n.id },
    h('table', { class: 'table table--stack' },
      h('caption', {}, n.caption),
      h('thead', {}, h('tr', {}, n.head.map((c, i) => h('th', { scope: 'col' }, i === 0 ? h('span', { class: 'sr-only' }, 'Oblast') : c)))),
      h('tbody', {}, n.rows.map((r) => h('tr', {}, h('th', { scope: 'row' }, r[0]),
        r.slice(1).map((c, i) => h('td', { 'data-label': n.head[i + 1] }, c)))))));
}

const ROW_LABELS = {
  podstata: 'Podstata a výchozí předpoklad',
  zamereni: 'Hlavní zaměření firmy',
  zakaznik: 'Vztah k zákazníkovi',
  rozhodovani: 'Typické rozhodování',
  prinos: 'Přínos a podmínky využití',
  riziko: 'Riziko nebo omezení'
};

function renderConcept(n) {
  const headId = `${n.id}-h`;
  return h('article', { class: `concept concept--${n.key}`, id: n.id, 'aria-labelledby': headId },
    h('header', { class: 'concept__head' },
      h('h3', { id: headId, tabindex: '-1' }, n.name),
      n.altName ? h('p', { class: 'concept__alt' }, n.altName) : null,
      h('p', { class: 'concept__voice' }, h('span', { class: 'sr-only' }, 'Hlas na poradě: '), `„${n.voice}“`)),
    renderDefinition(n.term, null, { hideTerm: true }),
    h('dl', { class: 'concept__rows' }, Object.entries(n.rows).map(([k, v]) =>
      h('div', { class: 'concept__row' }, h('dt', {}, ROW_LABELS[k]), h('dd', { html: v })))),
    h('div', { class: 'concept__example' },
      h('p', { class: 'tag tag--example' }, `${ui().example} · Ranec`),
      h('p', {}, n.example),
      n.exampleAside ? h('p', { class: 'aside' }, h('span', { class: 'aside__mark', 'aria-hidden': 'true' }, '—'), ' ', n.exampleAside) : null),
    n.extra ? renderNodes(n.extra) : null,
    h('div', { class: 'concept__model' },
      h('p', { class: 'concept__model-label' }, 'Stručná vzorová charakteristika'),
      h('p', {}, n.model)));
}

function conceptsOf(chapterId) {
  return L().chapters[chapterId].concepts || [];
}

function renderConceptNav(chapterId) {
  return h('nav', { class: 'concept-nav', 'aria-label': 'Přejít na koncepci' },
    h('ul', {}, conceptsOf(chapterId).map((c) => h('li', {}, h('a', { href: `#/kapitola/${chapterId}/${c.id}`, class: `chip chip--${c.key}` }, c.name)))),
    h('a', { href: `#/kapitola/${chapterId}/b4-srovnani`, class: 'chip chip--outline' }, 'Srovnávací tabulka'));
}

function renderConceptTable(chapterId, id) {
  const ch = L().chapters[chapterId];
  const t = ch.conceptTable;
  const concepts = conceptsOf(chapterId);
  return h('div', { class: 'table-wrap', id },
    h('table', { class: 'table table--stack table--concepts' },
      h('caption', {}, t.caption),
      h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, 'Koncepce'), t.rows.map((r) => h('th', { scope: 'col' }, r.label)))),
      h('tbody', {}, concepts.map((c) => h('tr', { class: `row--${c.key}` },
        h('th', { scope: 'row' }, h('a', { href: `#/kapitola/${chapterId}/${c.id}` }, c.name)),
        t.rows.map((r) => h('td', { 'data-label': r.label }, t.cols[c.key][r.key])))))));
}

// ───────── Easter egg: hrnek
function renderEgg() {
  const tipId = nextId('egg');
  const tip = h('p', { class: 'egg__tip', id: tipId, role: 'note', hidden: true }, 'Káva pomáhá. Rozdíl mezi výrobní a výrobkovou za tebe ale nevysvětlí.');
  const btn = h('button', { type: 'button', class: 'egg__btn', 'aria-expanded': 'false', 'aria-controls': tipId, 'aria-label': ui().mugLabel }, svg(mug));
  const toggle = (open) => { tip.hidden = !open; btn.setAttribute('aria-expanded', String(open)); };
  btn.addEventListener('click', () => toggle(tip.hidden));
  btn.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });
  tip.addEventListener('keydown', (e) => { if (e.key === 'Escape') { toggle(false); btn.focus(); } });
  return h('div', { class: 'egg' }, btn, tip);
}

// ───────── Konec kapitoly: jen navigace dál
function renderChapterEnd(meta) {
  const ready = COURSE.chapters.filter((c) => c.status === 'ready').sort((a, b) => a.order - b.order);
  const next = ready.find((c) => c.order > meta.order);
  return h('nav', { class: 'chapter-end', 'aria-label': 'Pokračování' },
    h('a', { class: 'btn btn--ghost', href: '#/' }, 'Zpět na přehled kurzu'),
    next ? h('a', { class: 'btn btn--primary', href: `#/kapitola/${next.id}` }, `Další kapitola: ${L().chapters[next.id].title}`) : null);
}

// ───────── Návrat k úvodní situaci (nepoužívá se)
function renderClosing(ch) {
  const c = ch.closing;
  const body = h('div', {});
  const draw = () => {
    if (!c.options) { replace(body); return; }
    const pollId = ch.intro.scenario.taskId;
    const choice = pollId ? store.get().tasks[pollId]?.answer : null;
    if (!pollId) {
      replace(body, h('ul', { class: 'closing__list' }, Object.values(c.options).map((o) => h('li', {},
        h('p', { class: 'closing__opt' }, h('strong', {}, o.label), o.concept ? h('span', { class: 'closing__concept' }, ` → ${o.concept}`) : null),
        h('p', {}, o.text)))));
      return;
    }
    replace(body, 
      h('p', { class: 'closing__choice' },
        choice && c.options[choice] ? [h('strong', {}, c.yourChoice + ' '), c.options[choice].label] : c.noChoice),
      h('ul', { class: 'closing__list' }, Object.entries(c.options).map(([k, o]) => h('li', { class: k === choice ? 'is-chosen' : '' },
        h('p', { class: 'closing__opt' }, h('strong', {}, o.label), o.concept ? h('span', { class: 'closing__concept' }, ` → ${o.concept}`) : null),
        k === choice ? h('p', { class: 'sr-only' }, 'Tvoje volba.') : null,
        h('p', {}, o.text)))));
  };
  draw();
  const section = h('section', { class: 'section section--closing', id: 'porada', 'aria-labelledby': 'porada-h', dataset: { section: 'porada' } },
    h('h2', { id: 'porada-h', class: 'section__title', tabindex: '-1' }, c.title),
    h('p', { class: 'lead' }, c.intro),
    body,
    c.taskId ? renderTask(c.taskId) : null,
    c.outro ? h('p', { class: 'closing__outro' }, c.outro) : null);
  let prev = store.get().tasks[ch.intro.scenario.taskId]?.answer;
  const un = store.subscribe((st) => {
    if (!section.isConnected && section.dataset.mounted) { un(); return; }
    const now = st.tasks[ch.intro.scenario.taskId]?.answer;
    if (now !== prev) { prev = now; draw(); }
  });
  requestAnimationFrame(() => { section.dataset.mounted = '1'; });
  return section;
}

function renderPlanned(chapterId) {
  const t = L().course.chapters[chapterId]?.title || chapterId;
  return h('main', { id: 'main', class: 'page page--planned', tabindex: '-1' },
    h('p', { class: 'kicker' }, ui().planned),
    h('h1', {}, t),
    h('p', { class: 'lead' }, ui().plannedLong),
    h('p', {}, h('a', { href: '#/', class: 'btn btn--ghost' }, ui().navCourse)));
}

// ───────── Pojmové karty (kousek teorie s mikro-příkladem)
function renderCards(n) {
  return h('div', { class: `cards cards--${n.items.length}` }, n.items.map((c) => h('div', { class: 'card', id: c.id || null, tabindex: c.id ? '-1' : null },
    c.kicker ? h('p', { class: 'card__kicker' }, c.kicker) : null,
    h('p', { class: 'card__title' }, c.term ? h('a', { href: `#/slovnicek/${c.term}`, class: 'term-link', 'data-term': c.term }, c.title) : c.title),
    rich('p', c.text, { class: 'card__text' }),
    c.example ? rich('p', c.example, { class: 'card__example' }) : null,
    c.plus || c.minus ? h('dl', { class: 'card__pm' },
      c.plus ? [h('dt', { class: 'card__pm-plus' }, 'Výhoda'), rich('dd', c.plus)] : null,
      c.minus ? [h('dt', { class: 'card__pm-minus' }, 'Omezení'), rich('dd', c.minus)] : null) : null)));
}

// ───────── Vizuály ze světa příběhu (bez postav a obličejů)
function renderMock(n) {
  const fig = (cls, label, ...kids) => h('figure', { class: `mock mock--${cls}` }, ...kids, label ? h('figcaption', { class: 'mock__caption' }, label) : null);
  switch (n.kind) {
    case 'chat':
      return fig('chat', n.title, h('ul', { class: 'chat' }, n.messages.map((m) => h('li', { class: 'chat__msg' + (m.own ? ' chat__msg--own' : '') },
        h('span', { class: 'chat__who' }, m.who), h('span', { class: 'chat__text' }, m.text)))));
    case 'product':
      return fig('product', 'Produktová karta v e-shopu Rance',
        h('div', { class: 'product' },
          h('div', { class: 'product__img' }, svg(productIcon)),
          h('div', { class: 'product__body' },
            n.badge ? h('span', { class: 'product__badge' }, n.badge) : null,
            h('p', { class: 'product__name' }, n.name),
            h('ul', { class: 'product__features' }, n.features.map((f) => h('li', {}, f))),
            h('p', { class: 'product__price' }, n.price))));
    case 'poster':
      return fig('poster', n.place,
        h('div', { class: 'poster' }, h('p', { class: 'poster__headline' }, n.headline), h('span', { class: 'poster__brand' }, 'RANEC')),
        n.review ? h('div', { class: 'review' },
          h('span', { class: 'review__stars', role: 'img', 'aria-label': `Hodnocení ${n.review.stars} z 5` }, '★'.repeat(n.review.stars) + '☆'.repeat(5 - n.review.stars)),
          h('p', { class: 'review__text' }, `„${n.review.text}“`),
          n.review.source ? h('p', { class: 'review__source' }, n.review.source) : null) : null);
    case 'personas':
      return fig('personas', null, h('div', { class: 'personas' }, n.items.map((p) => h('div', { class: 'persona' },
        h('span', { class: 'persona__avatar', 'aria-hidden': 'true' }, p.name.charAt(0)),
        h('div', {}, h('p', { class: 'persona__name' }, p.name), h('p', { class: 'persona__text' }, p.text))))));
    case 'memo':
      return fig('memo', n.title, h('ul', { class: 'memo' }, n.notes.map((x) => h('li', { class: 'memo__note' },
        h('span', { class: 'memo__label' }, x.label), h('span', {}, n.quotes ? `„${x.text}“` : x.text)))));
    case 'sign':
      return fig('sign', n.title, h('div', { class: 'sign' }, h('p', { class: 'sign__text' }, n.text)));
    case 'occupancy':
      return fig('occupancy', n.title, h('ul', { class: 'bars' }, n.rows.map((r) => h('li', { class: 'bars__row' + (r.strong ? ' is-strong' : '') },
        h('span', { class: 'bars__label' }, r.label),
        h('span', { class: 'bars__track', 'aria-hidden': 'true' }, h('span', { class: 'bars__fill', style: `width:${r.value}%` })),
        h('span', { class: 'bars__value' }, `${r.value} %`)))));
    case 'brief':
      return fig('brief', null, h('div', { class: 'brief' }, h('p', { class: 'brief__title' }, n.title), h('p', { class: 'brief__text' }, n.text)));
    case 'offers':
      return fig('offers', n.title, h('div', { class: 'personas' }, n.items.map((p) => h('div', { class: 'persona offer' },
        h('div', {}, h('p', { class: 'persona__name' }, p.name), h('p', { class: 'persona__text' }, p.text))))));
    case 'plan':
      return fig('plan', n.title, h('div', { class: 'plan' },
        h('p', { class: 'plan__note' }, `„${n.note}“`),
        h('dl', { class: 'plan__grid' }, n.cols.map((c) => h('div', {}, h('dt', {}, c), h('dd', {}, h('span', { 'aria-label': 'nevyplněno' }, '?')))))));
    case 'calc':
      return fig('calc', n.title, h('div', { class: 'calc' },
        n.note ? h('p', { class: 'calc__note' }, n.note) : null,
        h('dl', { class: 'calc__rows' }, n.rows.map((r) => h('div', {}, h('dt', {}, r.label), h('dd', {}, r.value))))));
    case 'brandpage':
      return fig('brand', n.title, brandPage(n.variant, n));
    case 'brandkit':
      return fig('brand', n.title, h('div', { class: 'brandkit' },
        h('dl', { class: 'brandkit__list' },
          h('div', {}, h('dt', {}, 'Název'), h('dd', {}, h('span', { class: 'brandkit__name' }, n.name))),
          h('div', {}, h('dt', {}, 'Logo'), h('dd', {}, h('span', { class: 'klid-logo' }, h('span', { class: 'klid-logo__dot', 'aria-hidden': 'true' }), 'KLID'))),
          h('div', {}, h('dt', {}, 'Barvy'), h('dd', { class: 'brandkit__colors' }, n.colors.map((c) => h('span', { class: 'brandkit__swatch' }, h('span', { class: 'brandkit__chip', style: `background:${c.hex}`, 'aria-hidden': 'true' }), c.name)))),
          h('div', {}, h('dt', {}, 'Slogan'), h('dd', {}, `„${n.slogan}“`)),
          h('div', {}, h('dt', {}, 'Zvukový motiv'), h('dd', {}, n.sound)))));
    case 'brandpair':
      return fig('brand', n.title, h('div', { class: 'brandpair' },
        h('div', {}, h('p', { class: 'brandpair__label' }, 'Varianta A'), brandPage('a', { product: 'KLID Fokus', slogan: 'Prostor pro tvůj poslech.', features: ['Potlačení okolního hluku', 'Ovládání jedním tlačítkem'] })),
        h('div', {}, h('p', { class: 'brandpair__label' }, 'Varianta B'), brandPage('b', { product: 'KLID Fokus', slogan: 'Prostor pro tvůj poslech.', features: ['Potlačení okolního hluku', 'Ovládání jedním tlačítkem'] }))));
    default: return null;
  }
}

// Fiktivní značka KLID – vizuálně odlišená od prvků kurzu (grafit, písek). Varianta B úmyslně nekonzistentní.
function brandPage(variant, n) {
  const b = variant === 'b';
  return h('div', { class: `klid-page${b ? ' klid-page--b' : ''}` },
    h('p', { class: 'klid-page__logo' }, b ? h('span', { class: 'klid-logo klid-logo--b' }, 'Klid ✦') : h('span', { class: 'klid-logo' }, h('span', { class: 'klid-logo__dot', 'aria-hidden': 'true' }), 'KLID')),
    h('p', { class: 'klid-page__product' }, n.product),
    h('p', { class: 'klid-page__slogan' }, n.slogan),
    h('ul', { class: 'klid-page__features' }, n.features.map((f) => h('li', {}, f))));
}

// ───────── Zkratky a číslované kroky (SMART, postup plánu)
function renderAcronym(n) {
  return h('ol', { class: n.wide ? 'acronym acronym--wide' : 'acronym', id: n.id || null, tabindex: n.id ? '-1' : null }, n.items.map((i) => h('li', {},
    h('span', { class: 'acronym__letter', 'aria-hidden': 'true' }, i.letter),
    h('span', { class: 'acronym__body' }, h('strong', {}, i.title), i.text ? h('span', {}, i.text) : null))));
}

// ───────── Matice 2 × 2 vykreslená z dat (např. Ansoffova)
function renderMatrix(n) {
  return h('div', { class: 'table-wrap', id: n.id || null },
    h('table', { class: `matrix matrix--${n.size || '2x2'}` },
      h('caption', { class: 'sr-only' }, n.caption),
      h('thead', {}, h('tr', {}, h('th', { scope: 'col' }, h('span', { class: 'matrix__axis' }, n.corner)), n.cols.map((c) => h('th', { scope: 'col' }, c)))),
      h('tbody', {}, n.rows.map((r, ri) => h('tr', {}, h('th', { scope: 'row' }, r),
        n.cells[ri].map((cell) => h('td', { class: cell.tone ? `tone-${cell.tone}` : null }, cell.term
          ? h('a', { href: `#/slovnicek/${cell.term}`, class: 'term-link matrix__code', 'data-term': cell.term }, cell.code)
          : h('strong', { class: 'matrix__code' }, cell.code),
          cell.text ? h('span', { class: 'matrix__text' }, cell.text) : null)))))));
}

// ───────── Porterových pět sil vykreslených z dat (rivalita uprostřed)
function renderForces(n) {
  const cell = (pos, text, term) => h('li', { class: `forces__cell forces__cell--${pos}` },
    term ? h('a', { href: `#/slovnicek/${term}`, class: 'term-link', 'data-term': term }, text) : text);
  return h('figure', { class: 'forces', id: n.id || null, tabindex: n.id ? '-1' : null },
    h('ul', { class: 'forces__grid', 'aria-label': n.caption },
      cell('top', n.top), cell('left', n.left), cell('center', n.center), cell('right', n.right), cell('bottom', n.bottom, n.bottomTerm)),
    h('figcaption', { class: 'mock__caption' }, n.caption));
}

// ───────── Porada: pět hlasů, pět koncepcí
function renderVoices(chapterId) {
  const roles = { vyrobni: 'Výroba', vyrobkova: 'Vývoj', prodejni: 'Obchod', marketingova: 'Marketing', odpovedna: 'Udržitelnost' };
  return h('figure', { class: 'mock mock--voices' },
    h('ul', { class: 'voices' }, conceptsOf(chapterId).map((c) => h('li', { class: `voice voice--${c.key}` },
      h('span', { class: 'voice__role' }, roles[c.key]),
      h('span', { class: 'voice__text' }, `„${c.voice}“`)))),
    h('figcaption', { class: 'mock__caption' }, 'Porada vedení firmy Ranec'));
}

// ───────── Mapa vnímání vykreslená z dat (škály 1–5, záměr firmy odlišeným symbolem)
function renderPerceptionMap(n) {
  const W = 340, H = 300, L0 = 56, R0 = 320, T0 = 16, B0 = 240;
  const px = (v) => L0 + (v - 1) / 4 * (R0 - L0);
  const py = (v) => B0 - (v - 1) / 4 * (B0 - T0);
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const grid = [1, 2, 3, 4, 5].map((v) => `<line class="pmap__grid" x1="${px(v)}" y1="${T0}" x2="${px(v)}" y2="${B0}"/><line class="pmap__grid" x1="${L0}" y1="${py(v)}" x2="${R0}" y2="${py(v)}"/><text class="pmap__tick" x="${px(v)}" y="${B0 + 14}" text-anchor="middle">${v}</text><text class="pmap__tick" x="${L0 - 8}" y="${py(v) + 4}" text-anchor="end">${v}</text>`).join('');
  const cross = `<line class="pmap__axis" x1="${px(3)}" y1="${T0}" x2="${px(3)}" y2="${B0}"/><line class="pmap__axis" x1="${L0}" y1="${py(3)}" x2="${R0}" y2="${py(3)}"/>`;
  const pts = n.points.map((p) => `<circle class="pmap__pt${p.own ? ' pmap__pt--own' : ''}" cx="${px(p.x)}" cy="${py(p.y)}" r="7"/>${p.below ? `<text class="pmap__lbl" x="${px(p.x)}" y="${py(p.y) + 22}" text-anchor="middle">${esc(p.name)}</text>` : `<text class="pmap__lbl" x="${px(p.x) + 11}" y="${py(p.y) + (p.y >= 5 ? 14 : -8)}">${esc(p.name)}</text>`}`).join('');
  let intent = '';
  if (n.intent) {
    const own = n.points.find((p) => p.own);
    const ix = px(n.intent.x), iy = py(n.intent.y);
    intent = (own ? `<line class="pmap__arrow" x1="${px(own.x)}" y1="${py(own.y) - 9}" x2="${ix}" y2="${iy + 11}"/>` : '') +
      `<rect class="pmap__intent" x="${ix - 7}" y="${iy - 7}" width="14" height="14" transform="rotate(45 ${ix} ${iy})"/><text class="pmap__lbl pmap__lbl--intent" x="${ix + 13}" y="${iy + 4}">${esc(n.intent.name)}</text>`;
  }
  const axes = `<text class="pmap__axislbl" x="${(L0 + R0) / 2}" y="${H - 22}" text-anchor="middle">${esc(n.x.label)} (1 = ${esc(n.x.low)}, 5 = ${esc(n.x.high)})</text>` +
    `<text class="pmap__axislbl" transform="translate(14 ${(T0 + B0) / 2}) rotate(-90)" text-anchor="middle">${esc(n.y.label.replace('Vnímané pohodlí objednání a doručení', 'Vnímané pohodlí'))} (1–5)</text>`;
  const markup = `<svg viewBox="0 0 ${W} ${H - 10}" role="img" aria-labelledby="${n.id}-t ${n.id}-d" xmlns="http://www.w3.org/2000/svg"><title id="${n.id}-t">${esc(n.title)}</title><desc id="${n.id}-d">${esc(n.note)} ${n.points.map((p) => `${esc(p.name)}: cena ${p.x}, pohodlí ${p.y}.`).join(' ')}${n.intent ? ` ${esc(n.intent.name)}: cena ${n.intent.x}, pohodlí ${n.intent.y}.` : ''}</desc>${grid}${cross}${axes}${intent}${pts}</svg>`;
  return h('figure', { class: 'pmap', id: n.id, tabindex: '-1' },
    h('p', { class: 'pmap__title' }, n.title),
    n.note ? h('p', { class: 'pmap__note' }, n.note) : null,
    svg(markup, 'pmap__svg'),
    h('ul', { class: 'pmap__legend' },
      h('li', {}, h('span', { class: 'pmap__key pmap__key--pt', 'aria-hidden': 'true' }), ` ${n.legendObserved}: `,
        n.points.map((p) => `${p.name} (cena ${p.x}, pohodlí ${p.y})`).join(' · ')),
      n.intent ? h('li', {}, h('span', { class: 'pmap__key pmap__key--intent', 'aria-hidden': 'true' }), ` ${n.intent.name}: ${n.legendIntent} (cena ${n.intent.x}, pohodlí ${n.intent.y})`) : null),
    h('figcaption', { class: 'mock__caption' }, `${n.y.label}: 1 = ${n.y.low}, 5 = ${n.y.high}.`));
}

// ───────── Životní cyklus produktu – ilustrativní křivka z dat (osa x 0–100, osa y 0–100)
function renderLifeCycle(n) {
  const W = 360, H = 230, L0 = 30, R0 = 350, T0 = 34, B0 = 196;
  const px = (v) => L0 + v / 100 * (R0 - L0);
  const py = (v) => B0 - v / 100 * (B0 - T0);
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const pts = n.curve.map(([x, y]) => [px(x), py(y)]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${p1[0] + (p2[0] - p0[0]) / 6},${p1[1] + (p2[1] - p0[1]) / 6} ${p2[0] - (p3[0] - p1[0]) / 6},${p2[1] - (p3[1] - p1[1]) / 6} ${p2[0]},${p2[1]}`;
  }
  const bands = n.phases.map((f, i) => `<rect class="plc__band plc__band--${i % 2}" x="${px(f.from)}" y="${T0 - 22}" width="${px(f.to) - px(f.from)}" height="${B0 - T0 + 22}"/><text class="plc__phase" x="${(px(f.from) + px(f.to)) / 2}" y="${T0 - 8}" text-anchor="middle">${esc(f.name)}</text>`).join('');
  const axes = `<line class="plc__axis" x1="${L0}" y1="${B0}" x2="${R0}" y2="${B0}"/><line class="plc__axis" x1="${L0}" y1="${T0 - 22}" x2="${L0}" y2="${B0}"/><text class="plc__axislbl" x="${R0}" y="${B0 + 18}" text-anchor="end">${esc(n.x)} →</text><text class="plc__axislbl" transform="translate(${L0 - 10} ${B0}) rotate(-90)">${esc(n.y)} →</text>`;
  const desc = `${n.note} Fáze: ${n.phases.map((f) => f.name).join(', ')}. Prodej při zavádění pomalu roste, v růstu rychle stoupá, ve zralosti se stabilizuje a v úpadku dlouhodobě klesá.`;
  const markup = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${n.id}-t ${n.id}-d" xmlns="http://www.w3.org/2000/svg"><title id="${n.id}-t">${esc(n.title)}</title><desc id="${n.id}-d">${esc(desc)}</desc>${bands}${axes}<path class="plc__curve" d="${d}"/></svg>`;
  return h('figure', { class: 'pmap plc', id: n.id, tabindex: '-1' },
    h('p', { class: 'pmap__title' }, n.title),
    n.note ? h('p', { class: 'pmap__note' }, n.note) : null,
    svg(markup, 'pmap__svg'));
}

// ───────── Distribuční cesty / role vykreslené z dat (na mobilu pod sebou)
function renderPyramid(n) {
  const k = n.levels.length;
  return h('figure', { class: 'pyramid', id: n.id || null, tabindex: n.id ? '-1' : null },
    n.caption ? h('figcaption', { class: 'chain__caption' }, n.caption) : null,
    h('ol', { class: 'pyramid__levels', reversed: true },
      n.levels.map((l, i) => h('li', { class: 'pyramid__level', style: `--w:${Math.round(46 + (54 * i) / Math.max(1, k - 1))}%; --tone:${i}` },
        h('span', { class: 'pyramid__title' }, l.title),
        h('span', { class: 'pyramid__text' }, l.text),
        l.example ? h('span', { class: 'pyramid__example' }, l.example) : null))));
}

function renderChain(n) {
  return h('figure', { class: 'chain', id: n.id || null, tabindex: n.id ? '-1' : null },
    n.caption ? h('figcaption', { class: 'chain__caption' }, n.caption) : null,
    h('ul', { class: 'chain__rows' }, n.rows.map((r) => h('li', { class: 'chain__row' },
      h('span', { class: 'chain__label' }, r.label),
      h('ol', { class: 'chain__nodes', 'aria-label': `${r.label}: ${r.nodes.join(', potom ')}` },
        r.nodes.map((x) => h('li', { class: 'chain__node' }, x)))))));
}

