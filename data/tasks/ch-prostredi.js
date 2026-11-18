// Úlohy kapitoly 3 – jazykově nezávislá data. Prefix m03 zajišťuje jedinečná ID v celém kurzu.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o3-prostredi  – rozlišit mikroprostředí a makroprostředí, zařadit vlivy podle PESTLE a popsat dopad
//   o3-konkurence – rozlišit rivala, nového konkurenta a substitut; znát pět sil
//   o3-swot       – zařadit podložená zjištění do SWOT, odlišit příležitost od aktivity
//   o3-vyzkum     – formulovat výzkumnou otázku, rozlišit primární a sekundární data a etapy výzkumu
//   o3-metody     – zvolit přístup a metodu podle otázky, posoudit reprezentativnost

const CH = 'ch-prostredi';

export default {

  'm03-mikro-makro': { chapter: CH, part: 'b1', place: 's1-mikro-makro', type: 'classify', objective: 'o3-prostredi', concepts: ['mikroprostredi_podniku', 'makroprostredi'],
    categories: ['mikro', 'makro'],
    items: { obsluha: ['mikro'], mouka: ['mikro'], kupni: ['makro'], zakon: ['makro'] } },
  'm03-mikro-oblasti': { chapter: CH, part: 'b1', place: 's1-mikro', type: 'classify', objective: 'o3-prostredi', concepts: ['mikroprostredi_podniku'],
    categories: ['podnik', 'lide', 'partneri'],
    items: { mista: ['podnik'], cekani: ['lide'], pekarna: ['partneri'], hluk: ['lide'] } },
  'm03-pestle': { chapter: CH, part: 'b1', place: 's1-pestle', type: 'classify', objective: 'o3-prostredi', concepts: ['pestle', 'makroprostredi'],
    categories: ['politicke', 'ekonomicke', 'sociokulturni', 'technologicke', 'legislativni', 'environmentalni'],
    items: { energie: ['ekonomicke'], navyky: ['sociokulturni'], objednavani: ['technologicke'], oznacovani: ['legislativni'] } },
  'm03-dopad': { chapter: CH, part: 'b1', place: 's1-dopad', type: 'choice', objective: 'o3-prostredi', concepts: ['pestle', 'situacni_analyza'], options: ['oblast', 'dopad'], correct: ['dopad'] },

  'm03-konkurenti': { chapter: CH, part: 'b2', place: 's2-konkurenti', type: 'classify', objective: 'o3-konkurence', concepts: ['substitut', 'porteruv_model'],
    categories: ['rival', 'novy', 'substitut'],
    items: { park: ['rival'], retezec: ['novy'], kavovar: ['substitut'] } },
  'm03-pet-sil': { chapter: CH, part: 'b2', place: 's2-pet-sil', type: 'classify', objective: 'o3-konkurence', concepts: ['porteruv_model'],
    categories: ['rivalita', 'vstup', 'substituty', 'dodavatele', 'odberatele'],
    items: { prazirna: ['dodavatele'], kancelar: ['odberatele'] } },

  'm03-swot': { chapter: CH, part: 'b3', place: 's3-swot', type: 'classify', objective: 'o3-swot', concepts: ['swot'],
    categories: ['s', 'w', 'o', 't'],
    items: { baristi: ['s'], vernost: ['w'], fakulta: ['o'], konkurent: ['t'] } },
  'm03-prilezitost': { chapter: CH, part: 'b3', place: 's3-prilezitost', type: 'choice', objective: 'o3-swot', concepts: ['swot'], options: ['a', 'b'], correct: ['a'] },
  'm03-podlozene': { chapter: CH, part: 'b3', place: 's3-podlozene', type: 'decide', objective: 'o3-swot', concepts: ['swot'], options: ['ano', 'ne'], correct: ['ne'] },

  'm03-otazka': { chapter: CH, part: 'b4', place: 's4-otazka', type: 'choice', objective: 'o3-vyzkum', concepts: ['marketingovy_vyzkum'], options: ['nechapou', 'duvody', 'reklama'], correct: ['duvody'] },
  'm03-data': { chapter: CH, part: 'b4', place: 's4-data', type: 'classify', objective: 'o3-vyzkum', concepts: ['primarni_data', 'sekundarni_data'],
    categories: ['primarni', 'sekundarni'],
    items: { pokladna: ['sekundarni'], rozhovory: ['primarni'], zprava: ['sekundarni'], dotazovani: ['primarni'] } },
  'm03-etapy': { chapter: CH, part: 'b4', place: 's4-etapy', type: 'classify', objective: 'o3-vyzkum', concepts: ['marketingovy_vyzkum'],
    categories: ['priprava', 'realizace', 'hodnoceni'],
    items: { skupina: ['priprava'], sber: ['realizace'], posouzeni: ['hodnoceni'] } },

  'm03-pristup': { chapter: CH, part: 'b5', place: 's5-pristupy', type: 'classify', objective: 'o3-metody', concepts: ['kvantitativni_vyzkum', 'kvalitativni_vyzkum'],
    categories: ['kvanti', 'kvali'],
    items: { karta: ['kvanti'], navsteva: ['kvali'], skala: ['kvanti'], vyber: ['kvali'] } },
  'm03-metody': { chapter: CH, part: 'b5', place: 's5-metody', type: 'classify', objective: 'o3-metody', concepts: ['dotazovani', 'pozorovani', 'experiment', 'hloubkovy_rozhovor'],
    categories: ['dotazovani', 'pozorovani', 'experiment', 'rozhovor'],
    items: { obsluha: ['dotazovani'], vyloha: ['pozorovani'], menu: ['experiment'], odchod: ['rozhovor'] } },
  'm03-reprezentativnost': { chapter: CH, part: 'b5', place: 's5-reprezentativnost', type: 'decide', objective: 'o3-metody', concepts: ['reprezentativnost'], options: ['ano', 'ne'], correct: ['ne'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm03-z-prostredi': { chapter: CH, part: 'final', place: 's1-mikro-makro', type: 'classify', area: 'prostredi', objective: 'o3-prostredi', concepts: ['mikroprostredi_podniku', 'makroprostredi'],
    categories: ['mikro', 'makro'], items: { recepcni: ['mikro'], kupni: ['makro'] } },
  'm03-z-substitut': { chapter: CH, part: 'final', place: 's2-konkurenti', type: 'choice', area: 'konkurence', objective: 'o3-konkurence', concepts: ['substitut'], options: ['rival', 'novy', 'substitut', 'dodavatel'], correct: ['substitut'] },
  'm03-z-swot': { chapter: CH, part: 'final', place: 's3-swot', type: 'classify', area: 'swot', objective: 'o3-swot', concepts: ['swot'],
    categories: ['s', 'w', 'o', 't'], items: { lektori: ['s'], system: ['w'], firmy: ['o'], konkurent: ['t'] } },
  'm03-z-data': { chapter: CH, part: 'final', place: 's4-data', type: 'choice', area: 'data', objective: 'o3-vyzkum', concepts: ['sekundarni_data', 'primarni_data'], options: ['primarni', 'sekundarni'], correct: ['sekundarni'] },
  'm03-z-skala': { chapter: CH, part: 'final', place: 's5-pristupy', type: 'decide', area: 'pristup', objective: 'o3-metody', concepts: ['kvantitativni_vyzkum'], options: ['spravne', 'nespravne'], correct: ['nespravne'] },
  'm03-z-pocet': { chapter: CH, part: 'final', place: 's5-reprezentativnost', type: 'decide', area: 'pristup', objective: 'o3-metody', concepts: ['reprezentativnost'], options: ['spravne', 'nespravne'], correct: ['nespravne'] }
};
