// Úlohy kapitoly 6 – jazykově nezávislá data. Prefix m06.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o6-znacka      – vysvětlit značku, odlišit ji od loga, popsat přínosy
//   o6-identita    – rozpoznat identifikátory a význam konzistence
//   o6-povedomi    – rozlišit vybavení × rozpoznání, asociaci × heuristiku, dojem × fakt
//   o6-zkusenost   – vnímaná kvalita, opakovaný nákup × preference, ochota × skutečné doporučení

const CH = 'ch-znacka';

export default {

  'm06-logo': { chapter: CH, part: 'b1', place: 's1-znacka', type: 'decide', objective: 'o6-znacka', concepts: ['znacka', 'logo'], options: ['ano', 'ne'], correct: ['ne'] },
  'm06-prinosy': { chapter: CH, part: 'b1', place: 's1-prinosy', type: 'classify', objective: 'o6-znacka', concepts: ['znacka'],
    categories: ['zakaznik', 'firma'],
    items: { poznam: ['zakaznik'], vyberu: ['zakaznik'], odlisit: ['firma'], upred: ['firma'] } },

  'm06-identifikatory': { chapter: CH, part: 'b2', place: 's2-identifikatory', type: 'classify', objective: 'o6-identita', concepts: ['identifikatory_znacky', 'logo', 'slogan', 'jingle'],
    categories: ['nazev', 'logo', 'slogan', 'jingle'],
    items: { slovo: ['nazev'], graficke: ['logo'], fraze: ['slogan'], melodie: ['jingle'] } },
  'm06-jednotnost': { chapter: CH, part: 'b2', place: 's2-jednotnost', type: 'choice', objective: 'o6-identita', concepts: ['identifikatory_znacky'], options: ['a', 'b'], correct: ['a'] },

  'm06-povedomi': { chapter: CH, part: 'b3', place: 's3-povedomi', type: 'classify', objective: 'o6-povedomi', concepts: ['spontanni_vybaveni', 'rozpoznani_znacky'],
    categories: ['spontanni', 'rozpoznani'],
    items: { napadnou: ['spontanni'], znas: ['rozpoznani'] } },
  'm06-draze': { chapter: CH, part: 'b3', place: 's3-asociace', type: 'decide', objective: 'o6-povedomi', concepts: ['asociace_se_znackou'], options: ['ano', 'ne'], correct: ['ne'] },
  'm06-heuristika': { chapter: CH, part: 'b3', place: 's3-heuristika', type: 'classify', objective: 'o6-povedomi', concepts: ['asociace_se_znackou', 'heuristika'],
    categories: ['asociace', 'heuristika'],
    items: { studium: ['asociace'], riziko: ['heuristika'] } },

  'm06-duvera': { chapter: CH, part: 'b4', place: 's4-kvalita', type: 'choice', objective: 'o6-zkusenost', concepts: ['vnimana_kvalita'], options: ['rozpor', 'logo', 'nazev'], correct: ['rozpor'] },
  'm06-preference': { chapter: CH, part: 'b4', place: 's4-loajalita', type: 'choice', objective: 'o6-zkusenost', concepts: ['loajalita'], options: ['obchod', 'preference', 'sleva'], correct: ['preference'] },
  'm06-doporuceni': { chapter: CH, part: 'b4', place: 's4-doporuceni', type: 'reveal', objective: 'o6-zkusenost', concepts: ['ochota_doporucit'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm06-z-role': { chapter: CH, part: 'final', place: 's1-prinosy', type: 'choice', area: 'role', objective: 'o6-znacka', concepts: ['znacka'], options: ['orientace', 'kvalita', 'cena'], correct: ['orientace'] },
  'm06-z-identifikatory': { chapter: CH, part: 'final', place: 's2-identifikatory', type: 'classify', area: 'identifikatory', objective: 'o6-identita', concepts: ['logo', 'slogan', 'jingle'],
    categories: ['logo', 'slogan', 'jingle'], items: { graficke: ['logo'], fraze: ['slogan'], melodie: ['jingle'] } },
  'm06-z-povedomi': { chapter: CH, part: 'final', place: 's3-povedomi', type: 'classify', area: 'povedomi', objective: 'o6-povedomi', concepts: ['spontanni_vybaveni', 'asociace_se_znackou'],
    categories: ['spontanni', 'rozpoznani', 'asociace'], items: { napadnou: ['spontanni'], ovladani: ['asociace'] } },
  'm06-z-loajalita': { chapter: CH, part: 'final', place: 's4-loajalita', type: 'choice', area: 'loajalita', objective: 'o6-zkusenost', concepts: ['loajalita'], options: ['dokazuje', 'nedokazuje', 'doporuci'], correct: ['nedokazuje'] }
};
