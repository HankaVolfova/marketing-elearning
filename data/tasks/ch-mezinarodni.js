// Úlohy kapitoly 12 – jazykově nezávislá data. Prefix m12.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o12-trh        – zjištění × předpoklad, co poznat před vstupem
//   o12-sa         – standardizace, adaptace, tři koncepce
//   o12-cena       – faktory ceny, cenová standardizace × diferenciace
//   o12-vstup      – vývoz, licence, franchising, kapitálový vstup, joint venture, strategická aliance
//   o12-komunikace – význam sdělení, společný slib, kanály

const CH = 'ch-mezinarodni';

export default {

  'm12-zjisteni': { chapter: CH, part: 'b1', place: 's1-trh', type: 'classify', objective: 'o12-trh', concepts: ['mezinarodni_marketing'],
    categories: ['predpoklad', 'zjisteni', 'zobecneni'],
    items: { doma: ['predpoklad'], rozhovory: ['zjisteni'], obchodnik: ['zobecneni'] } },
  'm12-proverit': { chapter: CH, part: 'b1', place: 's1-poznat', type: 'choice', multiple: true, objective: 'o12-trh', concepts: ['mezinarodni_marketing'], options: ['potreby', 'konkurence', 'obsluha', 'pozadavky', 'vzdalenost'], correct: ['potreby', 'konkurence', 'obsluha', 'pozadavky'] },

  'm12-sa': { chapter: CH, part: 'b2', place: 's2-sa', type: 'classify', objective: 'o12-sa', concepts: ['standardizace', 'adaptace'],
    categories: ['standardizace', 'adaptace'],
    items: { nadoba: ['standardizace'], navod: ['adaptace'], soucast: ['adaptace'], znacka: ['standardizace'] } },
  'm12-uprava': { chapter: CH, part: 'b2', place: 's2-podklady', type: 'choice', multiple: true, objective: 'o12-sa', concepts: ['standardizace', 'adaptace'], options: ['nadoba', 'navod', 'vse', 'nic'], correct: ['nadoba', 'navod'] },
  'm12-koncepce': { chapter: CH, part: 'b2', place: 's2-koncepce', type: 'classify', objective: 'o12-sa', concepts: ['vyvozni_koncepce', 'globalni_koncepce', 'interkulturni_koncepce'],
    categories: ['vyvozni', 'globalni', 'interkulturni'],
    items: { jeden: ['vyvozni'], segmenty: ['globalni'], zaklad: ['interkulturni'] } },

  'm12-kurz': { chapter: CH, part: 'b3', place: 's3-cena', type: 'decide', objective: 'o12-cena', concepts: ['cenova_diferenciace'], options: ['ano', 'ne'], correct: ['ano'] },
  'm12-cenove': { chapter: CH, part: 'b3', place: 's3-strategie', type: 'classify', objective: 'o12-cena', concepts: ['cenova_standardizace', 'cenova_diferenciace'],
    categories: ['standard', 'diferenciace'],
    items: { obdobne: ['standard'], odlisna: ['diferenciace'] } },

  'm12-vyvoz': { chapter: CH, part: 'b4', place: 's4-vyvoz', type: 'choice', objective: 'o12-vstup', concepts: ['vyvoz'], options: ['vyvoz', 'licence', 'jv'], correct: ['vyvoz'] },
  'm12-lf': { chapter: CH, part: 'b4', place: 's4-smluvni', type: 'classify', objective: 'o12-vstup', concepts: ['licence', 'franchising'],
    categories: ['licence', 'franchising'],
    items: { vyrobce: ['licence'], misto: ['franchising'] } },
  'm12-kapital': { chapter: CH, part: 'b4', place: 's4-kapital', type: 'classify', objective: 'o12-vstup', concepts: ['kapitalovy_vstup', 'joint_venture', 'strategicka_aliance'],
    categories: ['vlastni', 'jv', 'aliance'],
    items: { provoz: ['vlastni'], spolecne: ['jv'], vyvoj: ['aliance'] } },

  'm12-slogan': { chapter: CH, part: 'b5', place: 's5-preklad', type: 'choice', objective: 'o12-komunikace', concepts: ['adaptace'], options: ['overit', 'gramatika', 'symboly'], correct: ['overit'] },
  'm12-slib': { chapter: CH, part: 'b5', place: 's5-slib', type: 'choice', multiple: true, objective: 'o12-komunikace', concepts: ['adaptace', 'standardizace'], options: ['jazyk', 'ukazky', 'kanaly', 'pravdivost'], correct: ['jazyk', 'ukazky', 'kanaly'] },
  'm12-sit': { chapter: CH, part: 'b5', place: 's5-kanal', type: 'decide', objective: 'o12-komunikace', concepts: ['adaptace'], options: ['ano', 'ne'], correct: ['ne'] },

  'm12-z-trh': { chapter: CH, part: 'final', place: 's1-trh', type: 'decide', area: 'trh', objective: 'o12-trh', concepts: ['mezinarodni_marketing'], options: ['ano', 'ne'], correct: ['ne'] },
  'm12-z-sa': { chapter: CH, part: 'final', place: 's2-sa', type: 'classify', area: 'sa', objective: 'o12-sa', concepts: ['standardizace', 'adaptace'],
    categories: ['standardizace', 'adaptace'], items: { konstrukce: ['standardizace'], funkce: ['adaptace'], navod: ['adaptace'] } },
  'm12-z-cena': { chapter: CH, part: 'final', place: 's3-cena', type: 'choice', area: 'cena', objective: 'o12-cena', concepts: ['cenova_diferenciace'], options: ['neuplne', 'staci', 'zdvojnasobit'], correct: ['neuplne'] },
  'm12-z-vstup': { chapter: CH, part: 'final', place: 's4-smluvni', type: 'classify', area: 'vstup', objective: 'o12-vstup', concepts: ['vyvoz', 'licence', 'joint_venture'],
    categories: ['vyvoz', 'licence', 'jv'], items: { kupuje: ['vyvoz'], reseni: ['licence'], podnik: ['jv'] } },
  'm12-z-komunikace': { chapter: CH, part: 'final', place: 's5-preklad', type: 'choice', area: 'komunikace', objective: 'o12-komunikace', concepts: ['adaptace'], options: ['upravit', 'staci', 'zakaznici'], correct: ['upravit'] }
};
