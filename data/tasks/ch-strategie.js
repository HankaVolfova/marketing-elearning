// Úlohy kapitoly 2 – jazykově nezávislá data. Prefix m02 zajišťuje jedinečná ID v celém kurzu.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o2-smer       – vysvětlit vztah strategického řízení a marketingu, rozlišit misi a vizi
//   o2-cile       – odlišit cíl od aktivity a posoudit cíl podle SMART
//   o2-konkurence – rozlišit nákladové vůdcovství, diferenciaci a koncentraci
//   o2-rust       – zařadit růstový záměr do Ansoffovy matice a znát její limity
//   o2-plan       – rozlišit cíl, strategii a taktiku; popsat marketingový plán a kontrolu

const CH = 'ch-strategie';

export default {

  'm02-rizeni': { chapter: CH, part: 'b1', place: 's1-rizeni', type: 'decide', objective: 'o2-smer', concepts: ['strategicke_rizeni'], options: ['a', 'b'], correct: ['a'] },
  'm02-mise-vize': { chapter: CH, part: 'b1', place: 's1-mise-vize', type: 'classify', objective: 'o2-smer', concepts: ['mise', 'vize'],
    categories: ['mise', 'vize'],
    items: { zivot: ['mise'], prvni: ['vize'], nosit: ['mise'], sit: ['vize'] } },

  'm02-cil-aktivita': { chapter: CH, part: 'b2', place: 's2-cil', type: 'decide', objective: 'o2-cile', concepts: ['cil', 'aktivita'], options: ['prispevky', 'obsazenost'], correct: ['obsazenost'] },
  'm02-smart': { chapter: CH, part: 'b2', place: 's2-smart', type: 'choice', multiple: true, objective: 'o2-cile', concepts: ['smart', 'cil'], options: ['meritelny', 'termin', 'dosazitelnost', 'relevance'], correct: ['meritelny', 'termin', 'relevance'] },
  'm02-pouzitelny-cil': { chapter: CH, part: 'b2', place: 's2-pouzitelny', type: 'choice', objective: 'o2-cile', concepts: ['cil', 'smart'], options: ['oblibenejsi', 'obsazenost', 'stoprocent'], correct: ['obsazenost'] },

  'm02-obedy': { chapter: CH, part: 'b3', place: 's3-naklady-diferenciace', type: 'classify', objective: 'o2-konkurence', concepts: ['nakladove_vudcovstvi', 'diferenciace'],
    categories: ['naklady', 'diferenciace'],
    items: { krabicka: ['naklady'], namiru: ['diferenciace'] } },
  'm02-koncentrace': { chapter: CH, part: 'b3', place: 's3-koncentrace', type: 'choice', objective: 'o2-konkurence', concepts: ['koncentrace'], options: ['siroka', 'hory', 'sleva'], correct: ['hory'] },
  'm02-konkurence': { chapter: CH, part: 'b3', place: 's3-souhrn', type: 'classify', multi: true, objective: 'o2-konkurence', concepts: ['nakladove_vudcovstvi', 'diferenciace', 'koncentrace'],
    categories: ['naklady', 'diferenciace', 'koncentrace'],
    // Položka „uzka_jedinecna“ vyžaduje obě kategorie zároveň (koncentrace + diferenciace).
    items: { uspora: ['naklady'], jedinecna: ['diferenciace'], uzka_jedinecna: ['koncentrace', 'diferenciace'] },
    requireAll: ['uzka_jedinecna'] },

  'm02-polsko': { chapter: CH, part: 'b4', place: 's4-ansoff', type: 'classify', objective: 'o2-rust', concepts: ['ansoffova_matice', 'rozvoj_trhu'],
    categories: ['stavajici', 'novy'],
    items: { produkt: ['stavajici'], trh: ['novy'] } },
  'm02-ansoff': { chapter: CH, part: 'b4', place: 's4-ctyri', type: 'classify', objective: 'o2-rust', concepts: ['trzni_penetrace', 'rozvoj_produktu', 'rozvoj_trhu', 'diverzifikace'],
    categories: ['penetrace', 'produkt', 'trh', 'diverzifikace'],
    items: { mista: ['penetrace'], brasna: ['produkt'], polsko: ['trh'], zachranari: ['diverzifikace'] } },
  'm02-matice-limity': { chapter: CH, part: 'b4', place: 's4-limity', type: 'reveal', objective: 'o2-rust', concepts: ['ansoffova_matice'] },

  'm02-cst': { chapter: CH, part: 'b5', place: 's5-cst', type: 'classify', objective: 'o2-plan', concepts: ['cil', 'strategie', 'taktika'],
    categories: ['cil', 'strategie', 'taktika'],
    items: { navstevy: ['cil'], preference: ['strategie'], snidane: ['taktika'] } },
  'm02-plan': { chapter: CH, part: 'b5', place: 's5-plan', type: 'choice', multiple: true, objective: 'o2-plan', concepts: ['marketingovy_plan'], options: ['kdo', 'kdy', 'zdroje', 'vyhodnoceni', 'slogan'], correct: ['kdo', 'kdy', 'zdroje', 'vyhodnoceni'] },
  'm02-kontrola': { chapter: CH, part: 'b5', place: 's5-kontrola', type: 'choice', objective: 'o2-plan', concepts: ['kontrola'], options: ['beze-zmeny', 'porovnat', 'snizit'], correct: ['porovnat'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm02-z-mise': { chapter: CH, part: 'final', place: 'b1', type: 'classify', area: 'smer', objective: 'o2-smer', concepts: ['mise', 'vize'],
    categories: ['mise', 'vize'], items: { zpristupnujeme: ['mise'], komunitni: ['vize'] } },
  'm02-z-smart': { chapter: CH, part: 'final', place: 's2-smart', type: 'choice', area: 'cile', objective: 'o2-cile', concepts: ['smart'], options: ['meritelnost', 'termin', 'dosazitelnost'], correct: ['dosazitelnost'] },
  'm02-z-konkurence': { chapter: CH, part: 'final', place: 's3-koncentrace', type: 'choice', area: 'konkurence', objective: 'o2-konkurence', concepts: ['koncentrace'], options: ['naklady', 'diferenciace', 'koncentrace'], correct: ['koncentrace'] },
  'm02-z-ansoff': { chapter: CH, part: 'final', place: 's4-ctyri', type: 'choice', area: 'rust', objective: 'o2-rust', concepts: ['rozvoj_trhu'], options: ['penetrace', 'produkt', 'trh', 'diverzifikace'], correct: ['trh'] },
  'm02-z-plan': { chapter: CH, part: 'final', place: 's5-plan', type: 'choice', multiple: true, area: 'plan', objective: 'o2-plan', concepts: ['marketingovy_plan'], options: ['odpovednosti', 'terminy', 'kontrola', 'slogan', 'logo'], correct: ['odpovednosti', 'terminy', 'kontrola'] }
};
