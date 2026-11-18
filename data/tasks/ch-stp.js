// Úlohy kapitoly 4 – jazykově nezávislá data. Prefix m04.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o4-segmentace  – vysvětlit segmentaci a zařadit segmentační kritéria
//   o4-pouzitelnost – posoudit použitelnost segmentu
//   o4-targeting   – odlišit segmentaci od targetingu a vybrat segment podle atraktivity a možností firmy
//   o4-positioning – vymezit positioning, odlišit záměr od skutečného vnímání
//   o4-mix         – propojit 4P a 4C a najít nesoulad mixu s pozicí

const CH = 'ch-stp';

export default {

  'm04-rozdeleni': { chapter: CH, part: 'b1', place: 's1-segmentace', type: 'choice', objective: 'o4-segmentace', concepts: ['segmentace', 'segment'], options: ['pismeno', 'prinos', 'vsichni'], correct: ['prinos'] },
  'm04-kriteria': { chapter: CH, part: 'b1', place: 's1-kriteria', type: 'classify', objective: 'o4-segmentace', concepts: ['geograficka_kriteria', 'demograficka_kriteria', 'psychograficka_kriteria', 'behavioralni_kriteria'],
    categories: ['geo', 'demo', 'psycho', 'behav'],
    items: { oblast: ['geo'], domacnost: ['demo'], styl: ['psycho'], cetnost: ['behav'] } },
  'm04-vek': { chapter: CH, part: 'b1', place: 's1-vek', type: 'decide', objective: 'o4-segmentace', concepts: ['demograficka_kriteria', 'segment'], options: ['ano', 'ne'], correct: ['ne'] },

  'm04-prekryv': { chapter: CH, part: 'b2', place: 's2-homogenita', type: 'decide', objective: 'o4-pouzitelnost', concepts: ['vnitrni_homogenita', 'vnejsi_heterogenita'], options: ['ano', 'ne'], correct: ['ne'] },
  'm04-pouzitelnost': { chapter: CH, part: 'b2', place: 's2-pouzitelnost', type: 'choice', multiple: true, objective: 'o4-pouzitelnost', concepts: ['segment'], options: ['velikost', 'dostupnost', 'nazev'], correct: ['velikost', 'dostupnost'] },

  'm04-seg-target': { chapter: CH, part: 'b3', place: 's3-targeting', type: 'classify', objective: 'o4-targeting', concepts: ['segmentace', 'targeting'],
    categories: ['segmentace', 'targeting'],
    items: { rozlisili: ['segmentace'], vybirame: ['targeting'] } },
  'm04-vyber': { chapter: CH, part: 'b3', place: 's3-vyber', type: 'choice', objective: 'o4-targeting', concepts: ['targeting'], options: ['kancelare', 'sport', 'kraj'], correct: ['kancelare'] },
  'm04-vice-segmentu': { chapter: CH, part: 'b3', place: 's3-pocet', type: 'choice', multiple: true, objective: 'o4-targeting', concepts: ['targeting'], options: ['pozadavky', 'zdroje', 'zisk'], correct: ['pozadavky', 'zdroje'] },

  'm04-pozice': { chapter: CH, part: 'b4', place: 's4-positioning', type: 'choice', objective: 'o4-positioning', concepts: ['positioning'], options: ['vsichni', 'spolehlivy', 'wow'], correct: ['spolehlivy'] },
  'm04-zaklad': { chapter: CH, part: 'b4', place: 's4-zaklady', type: 'classify', objective: 'o4-positioning', concepts: ['positioning', 'usp', 'esp'],
    categories: ['usp', 'esp', 'uziti', 'cena'],
    items: { okno: ['usp'], pauza: ['esp'], porada: ['uziti'], menu: ['cena'] } },
  'm04-reposition': { chapter: CH, part: 'b4', place: 's4-repositioning', type: 'decide', objective: 'o4-positioning', concepts: ['repositioning'], options: ['ano', 'ne'], correct: ['ne'] },

  'm04-4p': { chapter: CH, part: 'b5', place: 's5-mix', type: 'classify', objective: 'o4-mix', concepts: ['marketingovy_mix', 'ctyri_p'],
    categories: ['produkt', 'cena', 'distribuce', 'komunikace'],
    items: { porce: ['produkt'], castka: ['cena'], rozvoz: ['distribuce'], web: ['komunikace'] } },
  'm04-4c': { chapter: CH, part: 'b5', place: 's5-4c', type: 'choice', multiple: true, objective: 'o4-mix', concepts: ['ctyri_c', 'naklady_zakaznika', 'pohodli_zakaznika', 'hodnota'], options: ['jencena', 'cas', 'pohodli', 'hodnota'], correct: ['cas', 'pohodli', 'hodnota'] },
  'm04-nesoulad': { chapter: CH, part: 'b5', place: 's5-nesoulad', type: 'choice', objective: 'o4-mix', concepts: ['pohodli_zakaznika', 'positioning'], options: ['pohodli', 'nazev', 'obedy'], correct: ['pohodli'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm04-z-kriterium': { chapter: CH, part: 'final', place: 's1-kriteria', type: 'choice', area: 'segmentace', objective: 'o4-segmentace', concepts: ['behavioralni_kriteria'], options: ['geo', 'demo', 'psycho', 'behav'], correct: ['behav'] },
  'm04-z-pouzitelnost': { chapter: CH, part: 'final', place: 's2-pouzitelnost', type: 'choice', multiple: true, area: 'pouzitelnost', objective: 'o4-pouzitelnost', concepts: ['segment'], options: ['meritelnost', 'vyznamnost', 'dostupnost', 'obsluzitelnost'], correct: ['dostupnost', 'obsluzitelnost'] },
  'm04-z-targeting': { chapter: CH, part: 'final', place: 's3-targeting', type: 'choice', area: 'targeting', objective: 'o4-targeting', concepts: ['targeting'], options: ['segmentace', 'targeting', 'positioning'], correct: ['targeting'] },
  'm04-z-positioning': { chapter: CH, part: 'final', place: 's4-mapa', type: 'choice', area: 'positioning', objective: 'o4-positioning', concepts: ['positioning'], options: ['shoda', 'rozpor', 'slogan'], correct: ['rozpor'] },
  'm04-z-4c': { chapter: CH, part: 'final', place: 's5-4c', type: 'choice', multiple: true, area: 'mix', objective: 'o4-mix', concepts: ['pohodli_zakaznika', 'naklady_zakaznika'], options: ['pohodli', 'naklady', 'hodnota-produktu', 'komunikace'], correct: ['pohodli', 'naklady'] }
};
