// Úlohy kapitoly 1 – jazykově nezávislá data:
// typ, vazba na kapitolu, cíl učení, pojmy ze slovníčku, klíč odpovědí.
// Texty zadání a zpětné vazby jsou v content/<jazyk>/tasks/.
//
// Cíle učení kapitoly:
//   o-rozsah     – vysvětlit, co marketing zahrnuje
//   o-ppp        – rozlišit potřebu, přání a poptávku
//   o-hodnota    – vysvětlit hodnotu pro zákazníka
//   o-trhy       – zařadit typ trhu
//   o-koncepce-r – rozpoznat a odlišit koncepce
//   o-koncepce-v – charakterizovat koncepce vlastními slovy
//   o-odpov      – posoudit rozhodnutí z pohledu zákazníka, firmy a společnosti

const CH = 'ch-filosofie';

export default {

  'b1-k1-rozhodni': { chapter: CH, type: 'decide', objective: 'o-rozsah', concepts: ['marketing'], options: ['ano', 'ne'], correct: ['ano'] },

  'b1-k2-cil': { chapter: CH, type: 'choice', objective: 'o-rozsah', concepts: ['konkurencni_vyhoda'], options: ['potreby', 'zisk', 'vyhoda', 'vztah'], correct: ['vyhoda'] },

  'b1-k3-porovnani': { chapter: CH, type: 'choice', objective: 'o-rozsah', concepts: ['marketing'], options: ['a', 'b', 'obe'], correct: ['b'] },

  'b2-ppp': { chapter: CH, type: 'classify', objective: 'o-ppp', concepts: ['potreba', 'prani', 'poptavka'],
    categories: ['potreba', 'prani', 'poptavka'],
    items: { dopravit: ['potreba'], sedy: ['prani'], patek: ['poptavka'], nemam: ['prani'] } },
  'b2-hodnota': { chapter: CH, type: 'choice', objective: 'o-hodnota', concepts: ['hodnota'], options: ['bara', 'tomas', 'stejne'], correct: ['bara'] },

  'b3-trhy': { chapter: CH, type: 'classify', objective: 'o-trhy', concepts: ['b2c', 'b2b', 'c2c', 'c2b'],
    categories: ['b2c', 'b2b', 'c2c', 'c2b'],
    items: { jednotlivec: ['b2c'], zamestnanci: ['b2b'], aplikace: ['c2c'], vykup: ['c2b'], marketplace: ['b2c'] } },
  'b3-tendence': { chapter: CH, type: 'classify', objective: 'o-trhy', concepts: ['b2b', 'b2c'],
    categories: ['b2b', 'b2c'],
    items: { vice: ['b2b'], recenze: ['b2c'], smlouva: ['b2b'], kamaradka: ['b2c'] } },

  'b4-vv': { chapter: CH, type: 'classify', objective: 'o-koncepce-r', concepts: ['vyrobni_koncepce', 'vyrobkova_koncepce'],
    categories: ['vyrobni', 'vyrobkova'],
    items: { hala: ['vyrobni'], funkce: ['vyrobkova'], stroj: ['vyrobni'], svy: ['vyrobkova'] } },
  'b4-pm': { chapter: CH, type: 'classify', objective: 'o-koncepce-r', concepts: ['prodejni_koncepce', 'marketingova_koncepce'],
    categories: ['prodejni', 'marketingova'],
    items: { sklad: ['prodejni'], rozhovory: ['marketingova'], provize: ['prodejni'], spokojenost: ['marketingova'] } },
  'b4-kampan': { chapter: CH, type: 'decide', objective: 'o-koncepce-r', concepts: ['prodejni_koncepce', 'marketingova_koncepce'], options: ['prodejni', 'marketingova', 'nelze'], correct: ['nelze'] },
  'b4-dar': { chapter: CH, type: 'decide', objective: 'o-koncepce-r', concepts: ['spolecensky_odpovedna_koncepce', 'csr'], options: ['ano', 'ne'], correct: ['ne'] },
  'b4-vychozi': { chapter: CH, type: 'classify', objective: 'o-koncepce-r', concepts: ['vyrobni_koncepce', 'vyrobkova_koncepce', 'prodejni_koncepce', 'marketingova_koncepce', 'spolecensky_odpovedna_koncepce'],
    categories: ['vyrobni', 'vyrobkova', 'prodejni', 'marketingova', 'odpovedna'],
    items: { naklady: ['vyrobni'], produkt: ['vyrobkova'], sklad: ['prodejni'], zakaznik: ['marketingova'], dopady: ['odpovedna'] } },

  'b5-dilema': { chapter: CH, type: 'dilemma', objective: 'o-odpov', concepts: ['hodnota', 'tri_pilire', 'spolecensky_odpovedna_koncepce'], options: ['levnejsi', 'opravitelny', 'zivotnost'] },
  'b5-loajalita': { chapter: CH, type: 'choice', objective: 'o-odpov', concepts: ['loajalita'], options: ['a', 'b', 'c'], correct: ['b'] },

  // ───── Závěrečné procvičení (area = oblast ve výsledcích)
  'z-rozsah-1': { chapter: CH, type: 'choice', multiple: true, area: 'rozsah', objective: 'o-rozsah', concepts: ['marketing'], options: ['vyzkum', 'cena', 'pece', 'reklama', 'ucetni'], correct: ['vyzkum', 'cena', 'pece', 'reklama'] },
  'z-rozsah-2': { chapter: CH, type: 'choice', area: 'rozsah', objective: 'o-rozsah', concepts: ['marketing'], options: ['a', 'b', 'c'], correct: ['c'] },
  'z-ppp': { chapter: CH, type: 'choice', area: 'ppp', objective: 'o-ppp', concepts: ['poptavka', 'prani'], options: ['a', 'b', 'c'], correct: ['b'] },
  'z-hodnota': { chapter: CH, type: 'choice', area: 'hodnota', objective: 'o-hodnota', concepts: ['hodnota'], options: ['a', 'b', 'c'], correct: ['c'] },
  'z-trhy-1': { chapter: CH, type: 'choice', area: 'trhy', objective: 'o-trhy', concepts: ['b2b'], options: ['b2c', 'b2b', 'c2c', 'c2b'], correct: ['b2b'] },
  'z-trhy-2': { chapter: CH, type: 'choice', area: 'trhy', objective: 'o-trhy', concepts: ['c2b'], options: ['b2c', 'b2b', 'c2c', 'c2b'], correct: ['c2b'] },
  'z-vv-1': { chapter: CH, type: 'choice', area: 'vv', objective: 'o-koncepce-r', concepts: ['vyrobni_koncepce', 'vyrobkova_koncepce'], options: ['vyrobni', 'vyrobkova'], correct: ['vyrobkova'] },
  'z-vv-2': { chapter: CH, type: 'choice', area: 'vv', objective: 'o-koncepce-r', concepts: ['vyrobni_koncepce', 'vyrobkova_koncepce'], options: ['vyrobni', 'vyrobkova'], correct: ['vyrobni'] },
  'z-pm-1': { chapter: CH, type: 'choice', area: 'pm', objective: 'o-koncepce-r', concepts: ['prodejni_koncepce', 'marketingova_koncepce'], options: ['prodejni', 'marketingova'], correct: ['prodejni'] },
  'z-pm-2': { chapter: CH, type: 'choice', area: 'pm', objective: 'o-koncepce-r', concepts: ['prodejni_koncepce', 'marketingova_koncepce'], options: ['prodejni', 'marketingova'], correct: ['marketingova'] },
  'z-odpov': { chapter: CH, type: 'choice', area: 'odpov', objective: 'o-odpov', concepts: ['spolecensky_odpovedna_koncepce', 'csr'], options: ['a', 'b', 'c'], correct: ['b'] }
};
