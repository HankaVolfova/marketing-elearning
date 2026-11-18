// Úlohy kapitoly 10 – jazykově nezávislá data. Prefix m10.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o10-rozsah     – nákupní × spotřební chování, kupující × uživatel
//   o10-potreby    – potřeba, přání, poptávka, motivace, různá váha vlastností
//   o10-vlivy      – zkušenost, stav, hodnoty, referenční skupiny, kultura, situace
//   o10-proces     – kupní proces jako orientační model, rutina, ponákupní chování
//   o10-racionalita – omezená racionalita, heuristiky, kognitivní disonance

const CH = 'ch-spotrebitel';

export default {

  'm10-rozsah': { chapter: CH, part: 'b1', place: 's1-chovani', type: 'classify', objective: 'o10-rozsah', concepts: ['nakupni_chovani', 'spotrebni_chovani'],
    categories: ['ziskani', 'pouzivani', 'opousteni'],
    items: { porovnani: ['ziskani'], platba: ['ziskani'], behy: ['pouzivani'], opotrebene: ['opousteni'] } },
  'm10-role': { chapter: CH, part: 'b1', place: 's1-role', type: 'classify', objective: 'o10-rozsah', concepts: ['kupujici', 'uzivatel'],
    categories: ['kupujici', 'uzivatel'],
    items: { robin: ['kupujici'], alex: ['uzivatel'] } },

  'm10-people': { chapter: CH, part: 'b1', place: 's1-people', type: 'classify', objective: 'o10-rozsah', concepts: ['people', 'marketingovy_mix'],
    categories: ['produkt', 'cena', 'distribuce', 'komunikace', 'people'],
    items: { podrazka: ['produkt'], cena: ['cena'], eshop: ['distribuce'], newsletter: ['komunikace'], prodavac: ['people'] } },

  'm10-ppp': { chapter: CH, part: 'b2', place: 's2-ppp', type: 'classify', objective: 'o10-potreby', concepts: ['potreba', 'prani', 'poptavka'],
    categories: ['potreba', 'prani', 'poptavka'],
    items: { pohyb: ['potreba'], model: ['prani'], rozpocet: ['poptavka'] } },
  'm10-maslow': { chapter: CH, part: 'b2', place: 's2-motivace', type: 'classify', objective: 'o10-potreby', concepts: ['maslowova_pyramida', 'motivace'],
    categories: ['bezpeci', 'spolecenske', 'uznani', 'seberealizace'],
    items: { zraneni: ['bezpeci'], parta: ['spolecenske'], obdiv: ['uznani'], pulmaraton: ['seberealizace'] } },
  'm10-vzhled': { chapter: CH, part: 'b2', place: 's2-motivace', type: 'decide', objective: 'o10-potreby', concepts: ['motivace', 'hodnota'], options: ['ano', 'ne'], correct: ['ne'] },
  'm10-vaha': { chapter: CH, part: 'b2', place: 's2-vaha', type: 'choice', objective: 'o10-potreby', concepts: ['hodnota'], options: ['parametry', 'vyzkouset'], correct: ['vyzkouset'] },

  'm10-vlivy': { chapter: CH, part: 'b3', place: 's3-vlivy', type: 'classify', objective: 'o10-vlivy', concepts: ['spotrebni_chovani'],
    categories: ['zkusenost', 'stav', 'hodnoty'],
    items: { znacka: ['zkusenost'], unava: ['stav'], odolne: ['hodnoty'] } },
  'm10-klub': { chapter: CH, part: 'b3', place: 's3-skupina', type: 'choice', objective: 'o10-vlivy', concepts: ['referencni_skupina'], options: ['primarni', 'sekundarni', 'aspiracni'], correct: ['sekundarni'] },
  'm10-situace': { chapter: CH, part: 'b3', place: 's3-situace', type: 'decide', objective: 'o10-vlivy', concepts: ['spotrebni_chovani'], options: ['ano', 'ne'], correct: ['ano'] },

  'm10-proces': { chapter: CH, part: 'b4', place: 's4-proces', type: 'classify', objective: 'o10-proces', concepts: ['kupni_proces', 'ponakupni_chovani'],
    categories: ['potreba', 'informace', 'hodnoceni', 'nakup', 'ponakup'],
    items: { nevyhovuje: ['potreba'], prohlizi: ['informace'], zkousi: ['hodnoceni'], objedna: ['nakup'], po: ['ponakup'] } },
  'm10-typy': { chapter: CH, part: 'b4', place: 's4-typy', type: 'classify', objective: 'o10-proces', concepts: ['typy_nakupu', 'kupni_proces'],
    categories: ['prvni', 'zmena', 'rutinni'],
    items: { ponozky: ['rutinni'], hodinky: ['prvni'], bunda: ['zmena'] } },
  'm10-pristi': { chapter: CH, part: 'b4', place: 's4-zkusenost', type: 'choice', multiple: true, objective: 'o10-proces', concepts: ['ponakupni_chovani', 'loajalita'], options: ['ocekavani', 'reakce', 'zmena', 'nic'], correct: ['ocekavani', 'reakce', 'zmena'] },

  'm10-tri': { chapter: CH, part: 'b5', place: 's5-racionalita', type: 'decide', objective: 'o10-racionalita', concepts: ['omezena_racionalita'], options: ['ano', 'ne'], correct: ['ano'] },
  'm10-heuristiky': { chapter: CH, part: 'b5', place: 's5-heuristiky', type: 'classify', objective: 'o10-racionalita', concepts: ['heuristika'],
    categories: ['cena', 'znamost', 'ostatni'],
    items: { drazsi: ['cena'], znam: ['znamost'], vsichni: ['ostatni'] } },
  'm10-pochybnost': { chapter: CH, part: 'b5', place: 's5-disonance', type: 'decide', objective: 'o10-racionalita', concepts: ['kognitivni_disonance'], options: ['ano', 'ne'], correct: ['ne'] },

  'm10-z-rozsah': { chapter: CH, part: 'final', place: 's1-chovani', type: 'choice', area: 'rozsah', objective: 'o10-rozsah', concepts: ['spotrebni_chovani'], options: ['spotrebni', 'nakupni', 'nesouvisi'], correct: ['spotrebni'] },
  'm10-z-platce': { chapter: CH, part: 'final', place: 's1-role', type: 'decide', area: 'rozsah', objective: 'o10-rozsah', concepts: ['kupujici', 'uzivatel'], options: ['ano', 'ne'], correct: ['ne'] },
  'm10-z-hodnota': { chapter: CH, part: 'final', place: 's2-vaha', type: 'choice', area: 'potreby', objective: 'o10-potreby', concepts: ['hodnota'], options: ['priority', 'chyba', 'cena'], correct: ['priority'] },
  'm10-z-vlivy': { chapter: CH, part: 'final', place: 's3-skupina', type: 'classify', area: 'vlivy', objective: 'o10-vlivy', concepts: ['referencni_skupina'],
    categories: ['skupina', 'zkusenost', 'situace'], items: { doporuceni: ['skupina'], predchozi: ['zkusenost'], odjezd: ['situace'] } },
  'm10-z-hodnoceni': { chapter: CH, part: 'final', place: 's4-proces', type: 'choice', area: 'proces', objective: 'o10-proces', concepts: ['kupni_proces'], options: ['informace', 'hodnoceni', 'ponakup'], correct: ['hodnoceni'] },
  'm10-z-ponakup': { chapter: CH, part: 'final', place: 's4-zkusenost', type: 'choice', area: 'proces', objective: 'o10-proces', concepts: ['ponakupni_chovani'], options: ['hodnoceni', 'nakup', 'ponakup'], correct: ['ponakup'] },
  'm10-z-heuristika': { chapter: CH, part: 'final', place: 's5-heuristiky', type: 'choice', area: 'racionalita', objective: 'o10-racionalita', concepts: ['heuristika'], options: ['heuristika', 'chyba', 'dukaz'], correct: ['heuristika'] }
};
