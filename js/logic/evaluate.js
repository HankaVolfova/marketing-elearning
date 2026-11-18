// Logika vyhodnocení úloh – nezávislá na jazyce i na zobrazení.
// Volné odpovědi se nevyhodnocují (žádné hledání klíčových slov); jde o sebekontrolu.

// Zařazování: každá položka má seznam přijatelných kategorií.
export function evalClassify(def, answer) {
  const ids = Object.keys(def.items);
  const perItem = {};
  let ok = 0;
  for (const id of ids) {
    const accepted = def.items[id];
    const given = answer?.[id];
    let correct;
    if (def.requireAll?.includes(id)) {
      // Položka vyžaduje všechny uvedené kategorie zároveň (např. koncentrace + diferenciace).
      const g = Array.isArray(given) ? given : given ? [given] : [];
      correct = g.length === accepted.length && accepted.every((a) => g.includes(a));
    } else {
      correct = !!given && accepted.includes(given);
    }
    const both = def.requireAll?.includes(id);
    perItem[id] = { correct, accepted, given, alternatives: accepted.length > 1 && !both, both };
    if (correct) ok++;
  }
  const result = ok === ids.length ? 'correct' : ok >= Math.ceil(ids.length / 2) ? 'partial' : 'incorrect';
  return { perItem, ok, total: ids.length, result };
}

// Výběr: jedna nebo více správných možností (multiple = musí se shodovat celá množina).
export function evalChoice(def, answer) {
  const given = Array.isArray(answer) ? answer : answer ? [answer] : [];
  const correctSet = new Set(def.correct);
  if (!def.multiple) {
    const correct = given.length === 1 && correctSet.has(given[0]);
    return { result: correct ? 'correct' : 'incorrect', given };
  }
  const hits = given.filter((g) => correctSet.has(g)).length;
  const wrong = given.filter((g) => !correctSet.has(g)).length;
  const exact = hits === correctSet.size && wrong === 0;
  const result = exact ? 'correct' : hits > 0 && hits >= wrong ? 'partial' : 'incorrect';
  return { result, given, hits, wrong };
}

// Je uložená odpověď stále platná vůči aktuálním datům úlohy? (kvůli změnám obsahu)
export function answerStillValid(def, answer) {
  if (answer === undefined || answer === null) return false;
  if (def.type === 'classify') {
    return typeof answer === 'object' && Object.entries(answer).every(([k, v]) => def.items[k] && (Array.isArray(v) ? v.every((x) => def.categories.includes(x)) : def.categories.includes(v)));
  }
  if (def.type === 'choice' || def.type === 'decide' || def.type === 'poll' || def.type === 'dilemma') {
    const arr = Array.isArray(answer) ? answer : [answer];
    return arr.every((a) => def.options.includes(a));
  }
  return true;
}
