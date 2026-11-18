// Úlohy kapitoly 9 – jazykově nezávislá data. Prefix m09.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o9-cil        – úloha komunikace, komunikační cíl, AIDA jako model sdělení
//   o9-proces     – komunikační proces, šum, zpětná vazba
//   o9-nastroje   – reklama, PR, podpora prodeje, osobní prodej, přímý marketing, sponzoring; nástroj × kanál
//   o9-integrace  – integrovaná marketingová komunikace a soulad s nabídkou
//   o9-vyhodnoceni – zobrazení × kliknutí × rezervace, příčiny, férová komunikace

const CH = 'ch-komunikace';

export default {

  'm09-slib': { chapter: CH, part: 'b1', place: 's1-komunikace', type: 'decide', objective: 'o9-cil', concepts: ['marketingova_komunikace'], options: ['ano', 'ne'], correct: ['ne'] },
  'm09-cile': { chapter: CH, part: 'b1', place: 's1-cil', type: 'classify', objective: 'o9-cil', concepts: ['komunikacni_cil'],
    categories: ['informovat', 'vysvetlit', 'podnitit'],
    items: { netusi: ['informovat'], vybaveni: ['vysvetlit'], zvazuji: ['podnitit'] } },
  'm09-aida': { chapter: CH, part: 'b1', place: 's1-aida', type: 'classify', objective: 'o9-cil', concepts: ['aida'],
    categories: ['a', 'i', 'd', 'act'],
    items: { stena: ['a'], lekce: ['i'], zazitek: ['d'], termin: ['act'] } },

  'm09-role': { chapter: CH, part: 'b2', place: 's2-proces', type: 'classify', objective: 'o9-proces', concepts: ['komunikacni_proces', 'zpetna_vazba', 'komunikacni_kanal'],
    categories: ['odesilatel', 'sdeleni', 'prijemce', 'zpetna'],
    items: { uchop: ['odesilatel'], prispevek: ['sdeleni'], zajemce: ['prijemce'], dotaz: ['zpetna'] } },
  'm09-slang': { chapter: CH, part: 'b2', place: 's2-slang', type: 'choice', objective: 'o9-proces', concepts: ['kodovani', 'dekodovani', 'komunikacni_sum'], options: ['a', 'b'], correct: ['b'] },
  'm09-dotaz': { chapter: CH, part: 'b2', place: 's2-zpetna', type: 'choice', objective: 'o9-proces', concepts: ['zpetna_vazba'], options: ['znovu', 'proverit', 'schvalne'], correct: ['proverit'] },

  'm09-reklama-pr': { chapter: CH, part: 'b3', place: 's3-mix', type: 'classify', objective: 'o9-nastroje', concepts: ['reklama', 'pr'],
    categories: ['reklama', 'pr'],
    items: { zaplati: ['reklama'], sousede: ['pr'], redakce: ['pr'] } },
  'm09-nastroje': { chapter: CH, part: 'b3', place: 's3-mix', type: 'classify', objective: 'o9-nastroje', concepts: ['podpora_prodeje', 'osobni_prodej', 'primy_marketing', 'sponzoring'],
    categories: ['podpora', 'osobni', 'primy', 'sponzoring'],
    items: { zvyhodneni: ['podpora'], kurz: ['osobni'], email: ['primy'], akce: ['sponzoring'] } },
  'm09-prostredi': { chapter: CH, part: 'b3', place: 's3-mix', type: 'choice', objective: 'o9-nastroje', concepts: ['reklama', 'komunikacni_kanal', 'komunikacni_mix'], options: ['reklama', 'pr', 'novy'], correct: ['reklama'] },

  'm09-push-pull': { chapter: CH, part: 'b3', place: 's3-push-pull', type: 'classify', objective: 'o9-nastroje', concepts: ['push_strategie', 'pull_strategie'],
    categories: ['push', 'pull'],
    items: { skoleni: ['push'], video: ['pull'], podminky: ['push'], kupon: ['pull'] } },

  'm09-rozpory': { chapter: CH, part: 'b4', place: 's4-imk', type: 'choice', multiple: true, objective: 'o9-integrace', concepts: ['imk'], options: ['pro-koho', 'obsah', 'mista', 'barva'], correct: ['pro-koho', 'obsah', 'mista'] },
  'm09-rezervace': { chapter: CH, part: 'b4', place: 's4-mix', type: 'decide', objective: 'o9-integrace', concepts: ['imk', 'marketingova_komunikace'], options: ['ano', 'ne'], correct: ['ano'] },

  'm09-metriky': { chapter: CH, part: 'b5', place: 's5-vysledky', type: 'classify', objective: 'o9-vyhodnoceni', concepts: ['komunikacni_cil'],
    categories: ['n12000', 'n180', 'n12'],
    items: { zobrazeno: ['n12000'], kliknuti: ['n180'], rezervace: ['n12'] } },
  'm09-pricina': { chapter: CH, part: 'b5', place: 's5-pricina', type: 'choice', multiple: true, objective: 'o9-vyhodnoceni', concepts: ['komunikacni_cil'], options: ['zajemci', 'srozumitelnost', 'rezervace', 'rozpocet'], correct: ['zajemci', 'srozumitelnost', 'rezervace'] },
  'm09-zdarma': { chapter: CH, part: 'b5', place: 's5-ferovost', type: 'choice', objective: 'o9-vyhodnoceni', concepts: ['marketingova_komunikace'], options: ['zahrnuto', 'zdarma'], correct: ['zahrnuto'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm09-z-cil': { chapter: CH, part: 'final', place: 's1-cil', type: 'choice', area: 'cil', objective: 'o9-cil', concepts: ['komunikacni_cil'], options: ['vysvetlit', 'zobrazeni', 'sleva'], correct: ['vysvetlit'] },
  'm09-z-aida': { chapter: CH, part: 'final', place: 's1-aida', type: 'choice', keepOrder: true, area: 'cil', objective: 'o9-cil', concepts: ['aida'], options: ['a', 'i', 'd', 'act'], correct: ['act'] },
  'm09-z-proces': { chapter: CH, part: 'final', place: 's2-proces', type: 'choice', area: 'proces', objective: 'o9-proces', concepts: ['kodovani', 'dekodovani', 'komunikacni_sum'], options: ['sum', 'kanal', 'zpetna'], correct: ['sum'] },
  'm09-z-nastroje': { chapter: CH, part: 'final', place: 's3-mix', type: 'classify', area: 'nastroje', objective: 'o9-nastroje', concepts: ['reklama', 'primy_marketing', 'pr', 'podpora_prodeje'],
    categories: ['reklama', 'primy', 'pr', 'podpora'], items: { pozvanka: ['reklama'], adresna: ['primy'], sousede: ['pr'], zvyhodneni: ['podpora'] } },
  'm09-z-integrace': { chapter: CH, part: 'final', place: 's4-imk', type: 'choice', area: 'integrace', objective: 'o9-integrace', concepts: ['imk'], options: ['koordinace', 'vzhled', 'nic'], correct: ['koordinace'] },
  'm09-z-zobrazeni': { chapter: CH, part: 'final', place: 's5-vysledky', type: 'choice', multiple: true, area: 'vyhodnoceni', objective: 'o9-vyhodnoceni', concepts: ['komunikacni_cil'], options: ['porozumeni', 'rezervace', 'lide', 'zobrazovano'], correct: ['porozumeni', 'rezervace', 'lide'] }
};
