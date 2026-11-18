// Pomocné funkce pro práci s DOM.

export function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else if (k === 'text') el.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'dataset') Object.assign(el.dataset, v);
    else if (v === true) el.setAttribute(k, '');
    else el.setAttribute(k, v);
  }
  append(el, children);
  return el;
}

export function append(el, children) {
  for (const c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

// Nahradí obsah prvku; ignoruje null/undefined/false a rozbalí pole.
export function replace(el, ...children) { el.replaceChildren(); return append(el, children); }

let uid = 0;
export const nextId = (p = 'id') => `${p}-${++uid}`;

// Převede zápis [[id|text]] na odkaz na pojem ze slovníčku.
export function richText(html) {
  return html.replace(/\[\[([a-z0-9_]+)\|([^\]]+)\]\]/g,
    (_, id, label) => `<a href="#/slovnicek/${id}" class="term-link" data-term="${id}">${label}</a>`);
}

export function rich(tag, html, attrs = {}) {
  return h(tag, { ...attrs, html: richText(html) });
}

export function announce(region, msg) {
  if (!region) return;
  region.textContent = '';
  // drobné zpoždění, aby čtečka změnu zachytila
  setTimeout(() => { region.textContent = msg; }, 30);
}

export function svg(markup, cls = '') {
  const wrap = document.createElement('span');
  wrap.className = 'svg-wrap ' + cls;
  wrap.innerHTML = markup;
  return wrap;
}

// Všechny obsahové uzly bloku: klasický výklad (body) i výukové kroky (steps).
export function blockNodes(b) {
  const out = [...(b.body || [])];
  for (const st of b.steps || []) out.push(...(st.body || []), ...(st.extra || []));
  return out;
}
