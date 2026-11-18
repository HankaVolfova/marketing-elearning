// Texty schémat a ilustrací – čeština. Schémata se vykreslují z těchto dat (žádný text v obrázcích).

export default {
  'needs-flow': {
    caption: 'Od potřeby k nákupu. Na každém kroku může cesta skončit.',
    steps: [
      { title: 'Potřeba', text: 'Potřebuju každý den nosit věci do školy.' },
      { title: 'Přání', text: 'Chci batoh Dojížďák s kapsou na notebook.' },
      { title: 'Poptávka', text: 'Můžu ho zaplatit a za tu cenu ho chci.' },
      { title: 'Nákup', text: 'Pokud ho najdu a nabídka obstojí, koupím.' }
    ],
    between: [
      { influence: 'Kultura, okolí, styl, zkušenosti', exit: 'Potřebu uspokojím jinak, třeba skříňkou ve škole.' },
      { influence: 'Schopnost a ochota zaplatit', exit: 'Nemám na to nebo za tu cenu nechci. Zůstane to přáním.' },
      { influence: 'Dostupnost a konkurence', exit: 'Koupím něco jiného nebo jinde.' }
    ],
    alt: 'Schéma: potřeba, přání, poptávka a nákup jako čtyři kroky. Mezi kroky působí vlivy a z každého kroku vede odbočka, kde cesta k nákupu končí.'
  },
  'value-scale': {
    caption: 'Hodnota pro zákazníka: přínosy proti obětem. Obě misky váží zákazník po svém.',
    gains: { title: 'Co získám', items: ['užitek z produktu', 'kvalita a spolehlivost', 'pohodlí', 'dobrý pocit, styl'] },
    costs: { title: 'Co obětuji', items: ['peníze', 'čas', 'úsilí', 'riziko'] },
    alt: 'Váha se dvěma miskami: na jedné přínosy (užitek, kvalita, pohodlí, dobrý pocit), na druhé oběti (peníze, čas, úsilí, riziko).'
  },
  'market-matrix': {
    caption: 'Typy vztahů na trhu podle toho, kdo nabízí a kdo kupuje',
    rowHead: 'Kdo nabízí',
    colHead: 'Kdo kupuje',
    rows: ['Organizace', 'Soukromá osoba'],
    cols: ['Spotřebitel', 'Organizace'],
    cells: [
      [{ code: 'B2C', text: 'obchodník → spotřebitel' }, { code: 'B2B', text: 'výrobce → obchodník' }],
      [{ code: 'C2C', text: 'spotřebitel → spotřebitel' }, { code: 'C2B', text: 'spotřebitel → firma' }]
    ]
  },
  meeting: {
    caption: 'Porada firmy Ranec: pět hlasů, pět koncepcí',
    alt: 'Ilustrace: pět lidí u jednoho stolu, každý s bublinou, ve které zazní jeden z přístupů.',
    people: [
      { key: 'vyrobni', role: 'Výroba' },
      { key: 'vyrobkova', role: 'Vývoj' },
      { key: 'prodejni', role: 'Obchod' },
      { key: 'marketingova', role: 'Marketing' },
      { key: 'odpovedna', role: 'Udržitelnost' }
    ]
  },
  timeline: {
    caption: 'Kdy se jednotlivé koncepce prosazovaly jako převládající (orientačně)',
    items: [
      { key: 'vyrobni', when: 'počátek 20. století' },
      { key: 'vyrobkova', when: 'po nasycení základní poptávky' },
      { key: 'prodejni', when: 'rostoucí konkurence, kolem pol. 20. století' },
      { key: 'marketingova', when: 'od 50. let, rozvoj v 70.–90. letech' },
      { key: 'odpovedna', when: 'reakce na dopady spotřeby' }
    ],
    today: 'Dnes: všech pět vedle sebe'
  },
  triangle: {
    caption: 'Tři strany marketingového rozhodnutí',
    alt: 'Trojúhelník: zákazník, firma a společnost ve vrcholech, uprostřed dlouhodobé vztahy.',
    nodes: [
      { title: 'Zákazník', text: 'hodnota: přínosy proti obětem' },
      { title: 'Firma', text: 'ekonomická životaschopnost a cíle' },
      { title: 'Společnost', text: 'sociální a environmentální dopady' }
    ],
    center: 'Dlouhodobé vztahy'
  }
};
