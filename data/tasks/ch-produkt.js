// Úlohy kapitoly 5 – jazykově nezávislá data. Prefix m05.
// part = identifikátor části (b1–b5), place = místo výkladu, ke kterému úloha patří.
//
// Cíle učení kapitoly (interní, studentům se nezobrazují):
//   o5-dimenze   – vysvětlit produkt, rozlišit jádro, skutečný a rozšířený produkt, vlastnost a užitek
//   o5-provedeni – posoudit design a obal podle použití a funkcí
//   o5-sortiment – určit šíři, délku a hloubku sortimentu
//   o5-inovace   – popsat vývoj nového produktu, rozlišit invenci a inovaci
//   o5-cyklus    – pracovat s životním cyklem jako orientačním modelem

const CH = 'ch-produkt';

export default {

  'm05-sluzba': { chapter: CH, part: 'b1', place: 's1-produkt', type: 'decide', objective: 'o5-dimenze', concepts: ['produkt'], options: ['ano', 'ne'], correct: ['ano'] },
  'm05-dimenze': { chapter: CH, part: 'b1', place: 's1-dimenze', type: 'classify', objective: 'o5-dimenze', concepts: ['jadro_produktu', 'skutecny_produkt', 'rozsireny_produkt'],
    categories: ['jadro', 'skutecny', 'rozsireny'],
    items: { teply: ['jadro'], objem: ['skutecny'], udrzba: ['rozsireny'], tvar: ['skutecny'] } },
  'm05-uzitek': { chapter: CH, part: 'b1', place: 's1-uzitek', type: 'choice', objective: 'o5-dimenze', concepts: ['jadro_produktu'], options: ['konstrukce', 'objem', 'caj'], correct: ['caj'] },

  'm05-uzaver': { chapter: CH, part: 'b2', place: 's2-design', type: 'choice', objective: 'o5-provedeni', concepts: ['skutecny_produkt'], options: ['a', 'b'], correct: ['b'] },
  'm05-obal': { chapter: CH, part: 'b2', place: 's2-obal', type: 'choice', multiple: true, objective: 'o5-provedeni', concepts: ['skutecny_produkt'], options: ['ochrana', 'manipulace', 'informace', 'foto'], correct: ['ochrana', 'manipulace', 'informace'] },

  'm05-rada': { chapter: CH, part: 'b3', place: 's3-rada', type: 'choice', objective: 'o5-sortiment', concepts: ['produktova_rada'], options: ['barva', 'rada', 'varianta'], correct: ['rada'] },
  'm05-pocet-rady': { chapter: CH, part: 'b3', place: 's3-sire', type: 'choice', objective: 'o5-sortiment', concepts: ['sire_sortimentu'], options: ['1', '2', '3'], correct: ['2'] },
  'm05-pocet-modely': { chapter: CH, part: 'b3', place: 's3-sire', type: 'choice', objective: 'o5-sortiment', concepts: ['delka_sortimentu'], options: ['2', '3', '6'], correct: ['3'] },
  'm05-pocet-varianty': { chapter: CH, part: 'b3', place: 's3-sire', type: 'choice', objective: 'o5-sortiment', concepts: ['hloubka_sortimentu'], options: ['1', '2', '4'], correct: ['2'] },
  'm05-rozsireni': { chapter: CH, part: 'b3', place: 's3-rozsireni', type: 'classify', objective: 'o5-sortiment', concepts: ['sire_sortimentu', 'delka_sortimentu', 'hloubka_sortimentu'],
    categories: ['sire', 'delka', 'hloubka'],
    items: { konvice: ['sire'], sport: ['delka'], barva: ['hloubka'] } },

  'm05-etapy': { chapter: CH, part: 'b4', place: 's4-vyvoj', type: 'classify', objective: 'o5-inovace', concepts: ['komercializace'],
    categories: ['posouzeni', 'vyvoj', 'uvedeni'],
    items: { naklady: ['posouzeni'], tesnost: ['vyvoj'], prodej: ['uvedeni'] } },
  'm05-invence': { chapter: CH, part: 'b4', place: 's4-invence', type: 'classify', objective: 'o5-inovace', concepts: ['invence', 'inovace'],
    categories: ['invence', 'inovace'],
    items: { navrh: ['invence'], uvedl: ['inovace'] } },
  'm05-netesnost': { chapter: CH, part: 'b4', place: 's4-testovani', type: 'choice', objective: 'o5-inovace', concepts: ['komercializace'], options: ['prodat', 'vyresit', 'vysvetlit'], correct: ['vyresit'] },

  'm05-faze': { chapter: CH, part: 'b5', place: 's5-faze', type: 'classify', objective: 'o5-cyklus', concepts: ['zivotni_cyklus', 'faze_zavadeni', 'faze_rust', 'faze_zralost', 'faze_upadek'],
    categories: ['zavadeni', 'rust', 'zralost', 'upadek'],
    items: { zacal: ['zavadeni'], pribyva: ['rust'], stabilni: ['zralost'], klesa: ['upadek'] } },
  'm05-zralost': { chapter: CH, part: 'b5', place: 's5-zralost', type: 'choice', multiple: true, objective: 'o5-cyklus', concepts: ['faze_zralost'], options: ['zlepseni', 'segmenty', 'vztah', 'ukoncit'], correct: ['zlepseni', 'segmenty', 'vztah'] },
  'm05-pokles': { chapter: CH, part: 'b5', place: 's5-pokles', type: 'decide', objective: 'o5-cyklus', concepts: ['faze_upadek', 'zivotni_cyklus'], options: ['ano', 'ne'], correct: ['ne'] },

  // Závěrečné procvičení (area = oblast ve výsledcích)
  'm05-z-dimenze': { chapter: CH, part: 'final', place: 's1-dimenze', type: 'classify', area: 'dimenze', objective: 'o5-dimenze', concepts: ['jadro_produktu', 'skutecny_produkt', 'rozsireny_produkt'],
    categories: ['jadro', 'skutecny', 'rozsireny'], items: { vylet: ['jadro'], material: ['skutecny'], servis: ['rozsireny'] } },
  'm05-z-obal': { chapter: CH, part: 'final', place: 's2-obal', type: 'choice', area: 'provedeni', objective: 'o5-provedeni', concepts: ['skutecny_produkt'], options: ['staci', 'nenahrazuje', 'reklama'], correct: ['nenahrazuje'] },
  'm05-z-sortiment': { chapter: CH, part: 'final', place: 's3-sire', type: 'classify', area: 'sortiment', objective: 'o5-sortiment', concepts: ['sire_sortimentu', 'delka_sortimentu', 'hloubka_sortimentu'],
    categories: ['sire', 'delka', 'hloubka'], items: { rada: ['sire'], model: ['delka'], barva: ['hloubka'] } },
  'm05-z-invence': { chapter: CH, part: 'final', place: 's4-invence', type: 'choice', area: 'inovace', objective: 'o5-inovace', concepts: ['invence', 'inovace'], options: ['inovace', 'namet', 'komercializace'], correct: ['namet'] },
  'm05-z-cyklus': { chapter: CH, part: 'final', place: 's5-faze', type: 'choice', area: 'cyklus', objective: 'o5-cyklus', concepts: ['faze_zralost'], options: ['zavadeni', 'rust', 'zralost', 'upadek'], correct: ['zralost'] }
};
