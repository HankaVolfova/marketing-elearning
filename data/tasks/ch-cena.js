// Úlohy kapitoly 7 – jazykově nezávislá data. Prefix m07.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o7-vysledek  – rozlišit cenu, tržby a zisk; cena nedokazuje kvalitu
//   o7-naklady   – cíle ceny, fixní a variabilní náklady, náklady na kus
//   o7-metody    – nákladová (přirážka), poptávková a konkurenční metoda
//   o7-strategie – skimming, penetrace, prémiová a ekonomická cena
//   o7-sleva     – proč je sleva drahá (dopad na zisk a potřebný prodej), psychologická cena a kotva

const CH = 'ch-cena';

export default {

  'm07-ctz': { chapter: CH, part: 'b1', place: 's1-cena', type: 'choice', objective: 'o7-vysledek', concepts: ['cena', 'trzby', 'zisk'], options: ['ano', 'trzby', 'naklady'], correct: ['trzby'] },
  'm07-kvalita': { chapter: CH, part: 'b1', place: 's1-informace', type: 'decide', objective: 'o7-vysledek', concepts: ['cena'], options: ['ano', 'ne'], correct: ['ne'] },

  'm07-cile': { chapter: CH, part: 'b2', place: 's2-cile', type: 'classify', objective: 'o7-naklady', concepts: ['cena'],
    categories: ['podil', 'objem', 'zisk'],
    items: { zakaznici: ['podil'], sklad: ['objem'], vysledek: ['zisk'] } },
  'm07-naklady': { chapter: CH, part: 'b2', place: 's2-naklady', type: 'classify', objective: 'o7-naklady', concepts: ['fixni_naklady', 'variabilni_naklady'],
    categories: ['fixni', 'variabilni'],
    items: { najem: ['fixni'], material: ['variabilni'], obal: ['variabilni'], software: ['fixni'] } },
  'm07-kus': { chapter: CH, part: 'b2', place: 's2-kus', type: 'choice', objective: 'o7-naklady', concepts: ['jednotkove_naklady'], options: ['500', '700', '20500'], correct: ['700'] },

  'm07-prirazka': { chapter: CH, part: 'b3', place: 's3-nakladova', type: 'choice', objective: 'o7-metody', concepts: ['nakladova_metoda', 'prirazka'], options: ['770', '840', '875'], correct: ['840'] },
  'm07-metody': { chapter: CH, part: 'b3', place: 's3-metody', type: 'classify', objective: 'o7-metody', concepts: ['nakladova_metoda', 'poptavkova_metoda', 'konkurencni_metoda'],
    categories: ['poptavkova', 'konkurencni', 'nakladova'],
    items: { hodnota: ['poptavkova'], porovnani: ['konkurencni'], naklady: ['nakladova'] } },
  'm07-kombinace': { chapter: CH, part: 'b3', place: 's3-kombinace', type: 'choice', multiple: true, objective: 'o7-metody', concepts: ['nakladova_metoda'], options: ['prijmou', 'hodnota', 'cile', 'nic'], correct: ['prijmou', 'hodnota', 'cile'] },

  'm07-strategie': { chapter: CH, part: 'b4', place: 's4-strategie', type: 'classify', objective: 'o7-strategie', concepts: ['skimming', 'cenova_penetrace', 'premiova_cena', 'ekonomicka_cena'],
    categories: ['skimming', 'penetrace', 'premiova', 'ekonomicka'],
    items: { prvni: ['skimming'], rychle: ['penetrace'], dlouhodobe: ['premiova'], jednoduche: ['ekonomicka'] } },

  'm07-sleva-objem': { chapter: CH, part: 'b5', place: 's5-sleva', type: 'choice', objective: 'o7-sleva', concepts: ['sleva'], options: ['11', '15', '20'], correct: ['20'] },
  'm07-vnimani': { chapter: CH, part: 'b5', place: 's5-vnimani', type: 'classify', objective: 'o7-sleva', concepts: ['psychologicka_cena', 'cenova_kotva'],
    categories: ['psychologicka', 'kotva'],
    items: { koncovka: ['psychologicka'], vedle: ['kotva'] } },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm07-z-trzby': { chapter: CH, part: 'final', place: 's1-cena', type: 'choice', area: 'vysledek', objective: 'o7-vysledek', concepts: ['trzby', 'zisk'], options: ['trzby', 'zisk', 'oboji'], correct: ['trzby'] },
  'm07-z-naklady': { chapter: CH, part: 'final', place: 's2-naklady', type: 'classify', area: 'naklady', objective: 'o7-naklady', concepts: ['fixni_naklady', 'variabilni_naklady'],
    categories: ['fixni', 'variabilni'], items: { material: ['variabilni'], najem: ['fixni'] } },
  'm07-z-metoda': { chapter: CH, part: 'final', place: 's3-metody', type: 'choice', area: 'metody', objective: 'o7-metody', concepts: ['poptavkova_metoda'], options: ['nakladova', 'poptavkova', 'konkurencni'], correct: ['poptavkova'] },
  'm07-z-strategie': { chapter: CH, part: 'final', place: 's4-strategie', type: 'choice', area: 'strategie', objective: 'o7-strategie', concepts: ['cenova_penetrace'], options: ['skimming', 'penetrace', 'premiova', 'ekonomicka'], correct: ['penetrace'] },
  'm07-z-sleva': { chapter: CH, part: 'final', place: 's5-sleva', type: 'choice', area: 'sleva', objective: 'o7-sleva', concepts: ['sleva'], options: ['50-2x', '90-11', '50-11'], correct: ['50-2x'] }
};
