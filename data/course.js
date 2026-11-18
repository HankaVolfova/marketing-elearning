// Struktura kurzu – jazykově nezávislá.
// Identifikátor kapitoly je oddělený od pořadí zobrazení (order).
// Pořadí lze později změnit (např. přesunout kapitolu Spotřebitel blíž k začátku)
// bez změny identifikátorů, a tedy bez ztráty uloženého postupu.

export const CONTENT_VERSION = '2026-11-18.1';

// extension: true = rozšiřující téma mimo rozsah zkoušky (štítek na přehledu a poznámka v úvodu kapitoly).
export default {
  chapters: [
    { id: 'ch-filosofie',   order: 1,  status: 'ready' },
    { id: 'ch-strategie',   order: 2,  status: 'ready' },
    { id: 'ch-prostredi',   order: 3,  status: 'ready' },
    { id: 'ch-stp',         order: 4,  status: 'ready' },
    { id: 'ch-produkt',     order: 5,  status: 'ready' },
    { id: 'ch-znacka',      order: 6,  status: 'ready' },
    { id: 'ch-cena',        order: 7,  status: 'ready' },
    { id: 'ch-distribuce',  order: 8,  status: 'ready' },
    { id: 'ch-komunikace',  order: 9,  status: 'ready' },
    { id: 'ch-spotrebitel', order: 10, status: 'ready' },
    { id: 'ch-portfolio',   order: 11, status: 'ready', extension: true },
    { id: 'ch-mezinarodni', order: 12, status: 'ready', extension: true }
  ]
};
