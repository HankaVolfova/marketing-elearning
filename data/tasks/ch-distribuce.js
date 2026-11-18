// Úlohy kapitoly 8 – jazykově nezávislá data. Prefix m08.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o8-dostupnost – distribuce jako dostupnost (místo, čas, množství, podmínky), nejen přeprava
//   o8-cesty      – přímá × nepřímá cesta podle obchodních rolí, dopravce, délka cesty
//   o8-partneri   – role maloobchodu, velkoobchodu, zprostředkovatele; přínosy a náklady
//   o8-intenzita  – intenzivní, selektivní, exkluzivní distribuce
//   o8-kanaly     – sladění více cest, zásob a informací

const CH = 'ch-distribuce';

export default {

  'm08-prekazky': { chapter: CH, part: 'b1', place: 's1-distribuce', type: 'choice', multiple: true, objective: 'o8-dostupnost', concepts: ['distribuce'], options: ['cas', 'misto', 'mnozstvi', 'nazev'], correct: ['cas', 'misto', 'mnozstvi'] },
  'm08-sklad': { chapter: CH, part: 'b1', place: 's1-pohodli', type: 'decide', objective: 'o8-dostupnost', concepts: ['distribuce', 'fyzicka_distribuce', 'pohodli_zakaznika'], options: ['ano', 'ne'], correct: ['ne'] },

  'm08-cesty': { chapter: CH, part: 'b2', place: 's2-cesty', type: 'classify', objective: 'o8-cesty', concepts: ['prima_cesta', 'neprima_cesta', 'eshop'],
    categories: ['prima', 'neprima'],
    items: { prodejna: ['prima'], vlastni: ['prima'], obchod: ['neprima'], nezavisly: ['neprima'] } },
  'm08-dopravce': { chapter: CH, part: 'b2', place: 's2-dopravce', type: 'decide', objective: 'o8-cesty', concepts: ['obchodni_mezicl', 'prima_cesta'], options: ['ano', 'ne'], correct: ['ne'] },
  'm08-delka': { chapter: CH, part: 'b2', place: 's2-delka', type: 'classify', objective: 'o8-cesty', concepts: ['delka_cesty'],
    categories: ['0', '1', '2'],
    items: { a: ['0'], b: ['1'], c: ['2'] } },

  'm08-role': { chapter: CH, part: 'b3', place: 's3-role', type: 'classify', objective: 'o8-partneri', concepts: ['maloobchod', 'velkoobchod', 'zprostredkovatel'],
    categories: ['maloobchod', 'velkoobchod', 'zprostredkovatel'],
    items: { rodiny: ['maloobchod'], zasobuje: ['velkoobchod'], provize: ['zprostredkovatel'] } },
  'm08-partner': { chapter: CH, part: 'b3', place: 's3-prinos', type: 'choice', multiple: true, objective: 'o8-partneri', concepts: ['obchodni_mezicl', 'maloobchod'], options: ['zakaznici', 'sluzby', 'podminky', 'pocet'], correct: ['zakaznici', 'sluzby', 'podminky'] },
  'm08-velkoobchod': { chapter: CH, part: 'b3', place: 's3-velkoobchod', type: 'decide', objective: 'o8-partneri', concepts: ['velkoobchod'], options: ['ano', 'ne'], correct: ['ano'] },

  'm08-intenzita': { chapter: CH, part: 'b4', place: 's4-strategie', type: 'classify', objective: 'o8-intenzita', concepts: ['intenzivni_distribuce', 'selektivni_distribuce', 'exkluzivni_distribuce'],
    categories: ['intenzivni', 'selektivni', 'exkluzivni'],
    items: { kapesni: ['intenzivni'], predvest: ['selektivni'], sberatelska: ['exkluzivni'], dovozce: ['exkluzivni'] } },

  'm08-kanaly': { chapter: CH, part: 'b5', place: 's5-kanaly', type: 'choice', multiple: true, objective: 'o8-kanaly', concepts: ['prima_cesta', 'neprima_cesta'], options: ['prima', 'neprima', 'exkluzivni'], correct: ['prima', 'neprima'] },
  'm08-skladem': { chapter: CH, part: 'b5', place: 's5-skladem', type: 'choice', objective: 'o8-kanaly', concepts: ['distribuce'], options: ['zasoba', 'barva', 'nazev'], correct: ['zasoba'] },
  'm08-proces': { chapter: CH, part: 'b5', place: 's5-proces', type: 'choice', multiple: true, objective: 'o8-kanaly', concepts: ['distribucni_cesta'], options: ['overeni', 'pripraveno', 'informuje', 'obrazek'], correct: ['overeni', 'pripraveno', 'informuje'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm08-z-dostupnost': { chapter: CH, part: 'final', place: 's1-distribuce', type: 'choice', area: 'dostupnost', objective: 'o8-dostupnost', concepts: ['distribuce'], options: ['mnozstvi', 'reklama', 'cena'], correct: ['mnozstvi'] },
  'm08-z-cesta': { chapter: CH, part: 'final', place: 's2-cesty', type: 'choice', area: 'cesta', objective: 'o8-cesty', concepts: ['neprima_cesta', 'delka_cesty'], options: ['prima', 'neprima1', 'neprima2'], correct: ['neprima1'] },
  'm08-z-dopravce': { chapter: CH, part: 'final', place: 's2-dopravce', type: 'decide', area: 'cesta', objective: 'o8-cesty', concepts: ['prima_cesta', 'obchodni_mezicl'], options: ['prima', 'neprima'], correct: ['prima'] },
  'm08-z-role': { chapter: CH, part: 'final', place: 's3-role', type: 'choice', area: 'role', objective: 'o8-partneri', concepts: ['velkoobchod'], options: ['maloobchod', 'velkoobchod', 'zprostredkovatel'], correct: ['velkoobchod'] },
  'm08-z-intenzita': { chapter: CH, part: 'final', place: 's4-strategie', type: 'choice', area: 'intenzita', objective: 'o8-intenzita', concepts: ['selektivni_distribuce'], options: ['intenzivni', 'selektivni', 'exkluzivni'], correct: ['selektivni'] },
  'm08-z-kanaly': { chapter: CH, part: 'final', place: 's5-skladem', type: 'choice', area: 'kanaly', objective: 'o8-kanaly', concepts: ['distribucni_cesta'], options: ['nesoulad', 'reklama', 'cena'], correct: ['nesoulad'] }
};
