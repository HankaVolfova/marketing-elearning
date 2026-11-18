// Úlohy kapitoly 11 – jazykově nezávislá data. Prefix m11.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o11-sbu       – portfolio, analýza portfolia, SBU
//   o11-osy       – relativní tržní podíl, tempo růstu trhu, orientace os
//   o11-kvadranty – hvězdy, dojné krávy, otazníky, psi
//   o11-omezeni   – omezení BCG, vymezení trhu
//   o11-ge        – matice GE, kritéria, váhy, vážené hodnocení

const CH = 'ch-portfolio';

export default {

  'm11-samostatne': { chapter: CH, part: 'b1', place: 's1-portfolio', type: 'decide', objective: 'o11-sbu', concepts: ['portfolio', 'analyza_portfolia'], options: ['ano', 'ne'], correct: ['ano'] },
  'm11-sbu': { chapter: CH, part: 'b1', place: 's1-sbu', type: 'choice', objective: 'o11-sbu', concepts: ['sbu'], options: ['stany', 'modra'], correct: ['stany'] },

  'm11-vypocet': { chapter: CH, part: 'b2', place: 's2-bcg', type: 'choice', objective: 'o11-osy', concepts: ['relativni_trzni_podil'], options: ['067', '15', '4'], correct: ['15'] },
  'm11-rust': { chapter: CH, part: 'b2', place: 's2-bcg', type: 'choice', objective: 'o11-osy', concepts: ['tempo_rustu_trhu'], options: ['trh', 'venku'], correct: ['trh'] },

  'm11-pozice': { chapter: CH, part: 'b3', place: 's3-souhrn', type: 'classify', objective: 'o11-kvadranty', concepts: ['hvezdy', 'otazniky', 'dojne_kravy', 'psi'],
    categories: ['hvezda', 'otaznik', 'krava', 'pes'], items: { batohy: ['hvezda'], spacaky: ['otaznik'], stany: ['krava'], hole: ['pes'] } },
  'm11-spacaky': { chapter: CH, part: 'b3', place: 's3-souhrn', type: 'choice', objective: 'o11-kvadranty', concepts: ['otazniky'], options: ['zdroje', 'zrusit', 'hvezda'], correct: ['zdroje'] },

  'm11-pes': { chapter: CH, part: 'b4', place: 's4-hole', type: 'decide', objective: 'o11-omezeni', concepts: ['psi', 'matice_bcg'], options: ['ano', 'ne'], correct: ['ano'] },
  'm11-trh': { chapter: CH, part: 'b4', place: 's4-trh', type: 'decide', objective: 'o11-omezeni', concepts: ['relativni_trzni_podil'], options: ['ano', 'ne'], correct: ['ano'] },

  'm11-kriteria': { chapter: CH, part: 'b5', place: 's5-ge', type: 'classify', objective: 'o11-ge', concepts: ['atraktivita_trhu', 'konkurencni_postaveni'],
    categories: ['atraktivita', 'postaveni'],
    items: { velikost: ['atraktivita'], intenzita: ['atraktivita'], znacka: ['postaveni'], distribuce: ['postaveni'] } },
  'm11-body': { chapter: CH, part: 'b5', place: 's5-vahy', type: 'decide', objective: 'o11-ge', concepts: ['vaha_kriteria'], options: ['ano', 'ne'], correct: ['ne'] },
  'm11-ge-batohy': { chapter: CH, part: 'b5', place: 's5-devet', type: 'choice', objective: 'o11-ge', concepts: ['matice_ge'], options: ['rozvoj', 'ukonceni', 'bezohledu'], correct: ['rozvoj'] },

  // Nepovinné procvičení

  // Závěrečné procvičení
  'm11-z-sbu': { chapter: CH, part: 'final', place: 's1-sbu', type: 'choice', area: 'sbu', objective: 'o11-sbu', concepts: ['sbu'], options: ['sbu', 'polozka', 'nikdy'], correct: ['sbu'] },
  'm11-z-barva': { chapter: CH, part: 'final', place: 's1-sbu', type: 'decide', area: 'sbu', objective: 'o11-sbu', concepts: ['sbu'], options: ['ano', 'ne'], correct: ['ne'] },
  'm11-z-podil': { chapter: CH, part: 'final', place: 's2-bcg', type: 'choice', area: 'osy', objective: 'o11-osy', concepts: ['relativni_trzni_podil'], options: ['05', '2', '18'], correct: ['05'] },
  'm11-z-vlastni': { chapter: CH, part: 'final', place: 's2-bcg', type: 'decide', area: 'osy', objective: 'o11-osy', concepts: ['tempo_rustu_trhu'], options: ['ano', 'ne'], correct: ['ne'] },
  'm11-z-kvadranty': { chapter: CH, part: 'final', place: 's3-souhrn', type: 'classify', area: 'kvadranty', objective: 'o11-kvadranty', concepts: ['hvezdy', 'dojne_kravy', 'otazniky', 'psi'],
    categories: ['hvezda', 'krava', 'otaznik', 'pes'],
    items: { a: ['hvezda'], b: ['krava'], c: ['otaznik'], d: ['pes'] } },
  'm11-z-pes': { chapter: CH, part: 'final', place: 's4-hole', type: 'decide', area: 'omezeni', objective: 'o11-omezeni', concepts: ['psi'], options: ['ano', 'ne'], correct: ['ano'] },
  'm11-z-ge': { chapter: CH, part: 'final', place: 's5-ge', type: 'classify', area: 'ge', objective: 'o11-ge', concepts: ['atraktivita_trhu', 'konkurencni_postaveni'],
    categories: ['podminky', 'schopnost'], items: { atraktivita: ['podminky'], postaveni: ['schopnost'] } },
  'm11-z-vahy': { chapter: CH, part: 'final', place: 's5-vahy', type: 'decide', area: 'ge', objective: 'o11-ge', concepts: ['vaha_kriteria', 'matice_ge'], options: ['ano', 'ne'], correct: ['ano'] }
};
