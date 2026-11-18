// Kapitola 11: Analýza portfolia – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní firma VENKU (outdoorové vybavení) se čtyřmi samostatně řízenými řadami:
// batohy, stany, spacáky, trekové hole. Každá řada je hodnocena na svém vymezeném trhu. Všechny údaje jsou fiktivní.

const BCG_CELLS = (u) => [
  [{ code: 'Hvězdy', term: 'hvezdy', text: u.hvezdy }, { code: 'Otazníky', term: 'otazniky', text: u.otazniky }],
  [{ code: 'Dojné krávy', term: 'dojne_kravy', text: u.kravy }, { code: 'Psi', term: 'psi', text: u.psi }]
];

export default {
  id: 'ch-portfolio',
  title: 'Analýza portfolia',
  headline: 'Všechno rozvíjet nejde. Kam dáme peníze?',
  question: 'Jak porovnat části nabídky a rozhodnout o jejich další podpoře?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'VENKU vyrábí vybavení na turistiku ve čtyřech produktových řadách: batohy, stany, spacáky a trekové hole. Na rozvoj má příští rok k dispozici 5 milionů korun.',
        'Vedoucí řad ale žádají dohromady 9,5 milionu a každý má pro svou řadu dobré argumenty. Vyhovět všem nejde. V kapitole uvidíš, jak jednotlivé části nabídky porovnat a podle čeho rozhodnout, kam peníze dát.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit analýzu portfolia jako strategické rozhodování o celku nabídky navazující na STP a mix jednotlivých produktů a vymezit SBU;',
      'vysvětlit účel matice BCG, spočítat relativní tržní podíl a odlišit tempo růstu trhu od růstu vlastních prodejů;',
      'zařadit jednotky do matice BCG a vysvětlit, jaké otázky jednotlivé pozice otevírají;',
      'popsat omezení matice BCG (vymezení trhu, data, ziskovost, vazby v portfoliu);',
      'vysvětlit matici GE, výběr kritérií a jejich váhy.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Od jednoho produktu k celé nabídce',
      short: 'Portfolio jako strategické rozhodování, SBU',
      time: { main: 2 },
      steps: [
        {
          id: 's1-portfolio',
          lead: true,
          body: [
            { t: 'p', html: 'Dosud jsme vždy řešili <strong>jeden produkt</strong>: komu ho nabídneme (segmentace a cílení), jak se má odlišit (positioning) a jak ho nastavíme v marketingovém mixu. Tuhle práci musí firma odvést u každého svého produktu nebo produktové řady.' },
            { t: 'p', html: 'Většina firem ale nabízí produktů víc a peníze, lidé ani čas nestačí na všechno. Proto musí rozhodovat i o <strong>celku</strong>: které části nabídky rozvíjet, které jen udržovat a od kterých ustoupit. Tomu slouží analýza portfolia. Je to <strong>strategické rozhodování o tom, jak řídit jednotlivé produkty firmy jako jeden celek</strong>.' },
            { t: 'chain', id: 'od-produktu-k-portfoliu', caption: 'Dvě úrovně marketingového řízení', rows: [
              { label: 'Každý produkt', nodes: ['Segmentace a cílení', 'Positioning', 'Marketingový mix'] },
              { label: 'Celé portfolio', nodes: ['Porovnat části nabídky', 'Rozdělit zdroje', 'Rozhodnout o podpoře'] }
            ] },
            { t: 'cards', items: [
              { kicker: 'Celek', term: 'portfolio', id: 'k-portfolio', title: 'Portfolio', text: 'Soubor produktů nebo podnikatelských oblastí, které firma společně řídí.' },
              { kicker: 'Porovnání', term: 'analyza_portfolia', id: 'k-analyza', title: 'Analýza portfolia', text: 'Porovnávání částí nabídky jako podklad pro rozhodování o jejich podpoře a dalším rozvoji.' }
            ] },
            { t: 'mock', kind: 'calc', title: 'Žádosti vedoucích řad VENKU na příští rok', note: 'K dispozici na rozvoj celkem: 5 mil. Kč', rows: [
              { label: 'Batohy', value: '3 mil. Kč' },
              { label: 'Stany', value: '1,5 mil. Kč' },
              { label: 'Spacáky', value: '4 mil. Kč' },
              { label: 'Trekové hole', value: '1 mil. Kč' },
              { label: 'Žádosti celkem', value: '9,5 mil. Kč' }
            ] }
          ],
          tasks: ['m11-samostatne']
        },
        {
          id: 's1-sbu',
          title: 'Co je SBU?',
          body: [
            { t: 'cards', items: [
              { kicker: 'Strategic Business Unit', term: 'sbu', id: 'k-sbu', title: 'Strategická podnikatelská jednotka (SBU)', text: 'Část podnikání, kterou lze samostatně strategicky řídit, s vymezeným trhem, konkurenty a odpovědností za výsledky.' }
            ] },
            { t: 'mock', kind: 'brief', title: 'Jak je VENKU řízeno', text: 'Každá ze čtyř řad má vlastní vedení, vymezený trh, konkurenty a rozpočet. V tomto příkladu je proto posuzujeme jako SBU.' }
          ],
          tasks: ['m11-sbu'],
          more: [
            { t: 'p', html: '<strong>Různé podoby SBU.</strong> SBU může být divize, značka, produktová řada nebo i jednotlivý produkt, pokud ho lze samostatně strategicky řídit: má vymezený trh a konkurenty, vlastní vedení a rozpočet a lze u něj oddělit náklady, výnosy a výsledky. Firmy SBU vymezují tehdy, když jednotlivé části podnikání potřebují odlišný strategický postup, například kvůli jiným zákazníkům, technologiím nebo zemím.' },
            { t: 'p', html: '<strong>Portfolio × sortiment.</strong> Šíře, délka a hloubka [[sortiment|sortimentu]] z kapitoly o produktu popisují, co firma nabízí. Analýza portfolia jde dál: hodnotí postavení jednotlivých částí nabídky na jejich trzích a slouží k rozhodování o jejich podpoře.' },
            { t: 'p', html: '<strong>Vazba na situační analýzu.</strong> Analýza portfolia patří k hodnocení výchozí situace firmy. Využívá poznatky o trhu a konkurenci a sama je podkladem pro strategická rozhodnutí.' },
            { t: 'p', html: '<strong>Co s jednotkou dělat.</strong> Jednotku lze budovat, udržovat, rozvíjet, tlumit nebo ukončit. Modely portfolia pomáhají tuto volbu připravit, samy ji ale neurčují.' }
          ]
        }
      ],
      summary: 'Každý produkt potřebuje vlastní STP a mix, ale firma musí řídit i celek. Analýza portfolia je strategické rozhodování o tom, kterým částem nabídky dát zdroje. Nejdřív vymezíme jednotky, které porovnáváme.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Matice BCG: co to je a jak ji číst',
      short: 'Účel matice BCG, dvě otázky, dvě osy',
      time: { main: 2 },
      steps: [
        {
          id: 's2-bcg',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[matice_bcg|Matice BCG]]</dfn> je nejznámější nástroj analýzy portfolia. Vyvinula ji poradenská firma Boston Consulting Group. Slouží k tomu, aby firma viděla všechny své jednotky v jednom obrázku a mohla rozhodnout, <strong>kam dát peníze a péči</strong>.' },
            { t: 'p', html: 'Každou jednotku posoudí podle dvou jednoduchých otázek a podle odpovědí ji umístí do jednoho ze čtyř polí:' },
            { t: 'cards', items: [
              { kicker: 'Otázka 1 · vodorovná osa', term: 'relativni_trzni_podil', id: 'k-podil', title: 'Jsme silnější než největší konkurent?', text: 'Odpovídá <strong>relativní tržní podíl</strong>: naše prodeje vydělené prodeji největšího konkurenta na stejném trhu. Nad 1 = jsme silnější, pod 1 = slabší.', example: 'Prodáme za 10 mil. Kč, největší konkurent za 5 mil. Kč: 10 ÷ 5 = 2 → jsme silnější.' },
              { kicker: 'Otázka 2 · svislá osa', term: 'tempo_rustu_trhu', id: 'k-rust', title: 'Roste náš trh rychle?', text: 'Odpovídá <strong>tempo růstu trhu</strong>: o kolik procent za rok vzrostl celý trh. Nad 10 % = rychle, pod 10 % = pomalu. Jde o růst celého trhu, ne naší firmy.', example: 'Celý trh vzrostl za rok o 12 % → roste rychle. Kolik vyrostla naše firma, tady nerozhoduje.' }
            ] },
            { t: 'matrix', id: 'bcg-osy', caption: 'Dvě otázky, čtyři pole', corner: 'Růst trhu / relativní podíl', cols: ['Silnější než konkurent (nad 1)', 'Slabší než konkurent (pod 1)'], rows: ['Trh roste rychle (nad 10 %)', 'Trh roste pomalu (pod 10 %)'],
              cells: [
                [{ code: 'silní na rostoucím trhu' }, { code: 'slabí na rostoucím trhu' }],
                [{ code: 'silní na pomalém trhu' }, { code: 'slabí na pomalém trhu' }]
              ] }
          ],
          tasks: ['m11-vypocet', 'm11-rust'],
          more: [
            { t: 'p', html: '<strong>Vymezení trhu a období.</strong> Obě osy mají smysl jen tehdy, když jsou údaje za stejný vymezený trh (například turistické batohy v ČR) a za stejné období.' },
            { t: 'p', html: '<strong>Hranice růstu.</strong> Hranice 10 % je v této kapitole výuková volba. V praxi se hranice rychlého a pomalého růstu volí podle odvětví a ekonomické situace. Nízký růst přitom neznamená pokles: trh může růst pomalu, stagnovat, nebo klesat.' }
          ]
        }
      ],
      summary: 'Matice BCG pomáhá rozdělit zdroje mezi jednotky portfolia. Ptá se, zda je jednotka silnější než největší konkurent a zda její trh rychle roste.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Čtyři pozice v matici BCG',
      short: 'Hvězdy, otazníky, dojné krávy, psi',
      time: { main: 2.5 },
      steps: [
        {
          id: 's3-pozice',
          lead: true,
          body: [
            { t: 'p', html: 'Každé ze čtyř polí matice má svůj název. Název napovídá, jakou roli jednotka v portfoliu obvykle hraje a na co se firma u ní ptá.' },
            { t: 'cards', items: [
              { kicker: 'Silní · trh roste rychle', term: 'hvezdy', id: 'k-hvezdy', title: 'Hvězdy', text: 'Vysoký relativní podíl na rychle rostoucím trhu.', example: 'Potřebují hodně prostředků, aby si pozici udržely, dokud trh roste.' },
              { kicker: 'Slabí · trh roste rychle', term: 'otazniky', id: 'k-otazniky', title: 'Otazníky', text: 'Nízký relativní podíl na rychle rostoucím trhu.', example: 'Firma rozhoduje, zda do nich investovat a posílit je, nebo ustoupit.' },
              { kicker: 'Silní · trh roste pomalu', term: 'dojne_kravy', id: 'k-kravy', title: 'Dojné krávy', text: 'Vysoký relativní podíl na pomalu rostoucím trhu.', example: 'Obvykle vydělávají víc, než potřebují; mohou financovat ostatní části portfolia.' },
              { kicker: 'Slabí · trh roste pomalu', term: 'psi', id: 'k-psi', title: 'Psi', text: 'Nízký relativní podíl na pomalu rostoucím trhu. Používá se i označení bídní psi.', example: 'Firma zvažuje, zda mají ještě ekonomický nebo strategický význam.' }
            ] }
          ],
          tasks: []
        },
        {
          id: 's3-souhrn',
          title: 'Portfolio VENKU v matici BCG',
          body: [
            { t: 'table', id: 'venku-data', caption: 'Řady VENKU. Každá řada je hodnocena na svém vymezeném trhu za stejné sledované období.', head: ['Řada', 'Relativní podíl', 'Růst příslušného trhu'], rows: [
              ['Batohy', '1,5', '15 %'],
              ['Stany', '1,4', '3 %'],
              ['Spacáky', '0,5', '18 %'],
              ['Trekové hole', '0,6', '2 %']
            ] },
            { t: 'matrix', id: 'bcg-venku', caption: 'Matice BCG pro řady VENKU', corner: 'Růst trhu / relativní podíl', cols: ['Vysoký podíl (nad 1)', 'Nízký podíl (pod 1)'], rows: ['Vysoký růst (nad 10 %)', 'Nízký růst (pod 10 %)'],
              cells: BCG_CELLS({ hvezdy: 'Batohy · 1,5 · 15 %', otazniky: 'Spacáky · 0,5 · 18 %', kravy: 'Stany · 1,4 · 3 %', psi: 'Trekové hole · 0,6 · 2 %' }) }
          ],
          tasks: ['m11-pozice', 'm11-spacaky'],
          more: [
            { t: 'p', html: '<strong>Možné finanční role.</strong> Dojné krávy mohou vytvářet prostředky, hvězdy a otazníky je často potřebují pro růst. Zda to v konkrétní firmě platí, ukáží až skutečné náklady, ziskovost a peněžní toky.' },
            { t: 'p', html: '<strong>Změna pozice.</strong> Pozice se mění s trhem i s postavením jednotky. Když růst trhu zpomalí, může se hvězda stát dojnou krávou, ale jen pokud si udrží vysoký relativní podíl; jinak se může ocitnout mezi psy. Otazník může při úspěšném posílení pozice získat vysoký podíl, nebo naopak při zpomalení trhu sklouznout mezi psy.' },
            { t: 'p', html: '<strong>Vyvážené portfolio.</strong> Často se uvádí, že firmě pomáhá, když má jednotky, které prostředky vytvářejí, i jednotky s perspektivou růstu. Neplatí ale univerzálně, že každá firma musí mít všechny čtyři typy.' }
          ]
        }
      ],
      summary: 'Kvadrant pomáhá položit otázky o podpoře jednotky. Neurčuje automaticky ziskovost ani jediné správné rozhodnutí.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Dvě čísla neřeknou všechno',
      short: 'Omezení BCG, vymezení trhu',
      time: { main: 1.5 },
      steps: [
        {
          id: 's4-hole',
          lead: true,
          body: [
            { t: 'p', html: 'BCG zjednodušuje situaci na dvě osy. Pro rozhodnutí potřebujeme také náklady, ziskovost, peněžní toky, vztahy mezi produkty a další strategické souvislosti.' },
            { t: 'mock', kind: 'memo', title: 'Doplňující informace o řadě trekových holí', notes: [
              { label: 'BCG', text: 'Nízký relativní podíl na pomalu rostoucím trhu.' },
              { label: 'Ekonomika', text: 'Řada je zisková a vyžaduje málo dalších prostředků.' },
              { label: 'Vazby', text: 'Doplňuje nabídku pro významné odběratele.' }
            ] }
          ],
          tasks: ['m11-pes']
        },
        {
          id: 's4-trh',
          title: 'Záleží na vymezení trhu',
          body: [],
          tasks: ['m11-trh'],
          more: [
            { t: 'p', html: '<strong>Data.</strong> Údaje o prodejích konkurentů a velikosti trhu nebývají snadno dostupné ani přesně srovnatelné. Výsledek matice je tak spolehlivý, jak spolehlivé jsou podklady.' },
            { t: 'p', html: '<strong>Podíl, zisk a peníze nejsou totéž.</strong> Vysoký tržní podíl neznamená automaticky vysoký zisk a zisk neznamená automaticky dostatek peněz v daném okamžiku. Rozhodnutí o podpoře potřebuje všechny tři pohledy.' },
            { t: 'p', html: '<strong>Návaznost na další analýzy.</strong> Samotné tempo růstu nevypovídá o celé atraktivitě trhu a samotný podíl o celé konkurenční síle. Proto se BCG doplňuje analýzou prostředí a konkurence, případně širším modelem, jako je matice GE.' }
          ]
        }
      ],
      summary: 'Matice pomáhá orientaci, ale nenahrazuje podklady a úsudek. Výsledek závisí také na tom, jak vymezíme trh a jednotku.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'GE: širší pohled',
      short: 'Atraktivita trhu, konkurenční postavení, váhy',
      time: { main: 2.5 },
      steps: [
        {
          id: 's5-ge',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Více kritérií', term: 'matice_ge', id: 'k-ge', title: 'Matice GE', text: 'Model hodnocení portfolia podle atraktivity trhu a konkurenčního postavení jednotky, přičemž každá osa zahrnuje více kritérií.' }
            ] },
            { t: 'cards', items: [
              { kicker: 'Svislá osa', term: 'atraktivita_trhu', id: 'k-atraktivita', title: 'Atraktivita trhu', text: 'Celkové hodnocení podmínek a perspektiv trhu podle vybraných kritérií.' },
              { kicker: 'Vodorovná osa', term: 'konkurencni_postaveni', id: 'k-postaveni', title: 'Konkurenční postavení', text: 'Celkové hodnocení schopnosti jednotky uspět vůči konkurenci podle vybraných kritérií.' }
            ] }
          ],
          tasks: ['m11-kriteria']
        },
        {
          id: 's5-vahy',
          title: 'Váhy vyjadřují význam',
          body: [
            { t: 'p', html: 'Kritéria nemusí mít stejnou důležitost. <dfn>[[vaha_kriteria|Váhy]]</dfn> vyjadřují jejich význam a hodnocení popisuje zjištěný stav. Výběr kritérií, vah i bodování musí být zdůvodněný.' }
          ],
          tasks: ['m11-body']
        },
        {
          id: 's5-devet',
          title: 'Devět polí jako podklad rozhodnutí',
          body: [
            { t: 'matrix', id: 'ge-matice', size: '3x3', caption: 'Matice GE: obecné směry podpory', corner: 'Atraktivita trhu / konkurenční postavení', cols: ['Silné', 'Střední', 'Slabé'], rows: ['Vysoká', 'Střední', 'Nízká'],
              cells: [
                [{ code: 'Rozvoj a investice', tone: 'up' }, { code: 'Rozvoj a investice', tone: 'up' }, { code: 'Výběrová podpora', tone: 'mid' }],
                [{ code: 'Rozvoj a investice', tone: 'up' }, { code: 'Výběrová podpora', tone: 'mid' }, { code: 'Omezení, sklizeň, odchod', tone: 'down' }],
                [{ code: 'Výběrová podpora', tone: 'mid' }, { code: 'Omezení, sklizeň, odchod', tone: 'down' }, { code: 'Omezení, sklizeň, odchod', tone: 'down' }]
              ] },
            { t: 'list', items: [
              '<strong>Rozvoj a investice:</strong> silnější kombinace, posuzovat rozvoj a investice.',
              '<strong>Výběrová podpora:</strong> smíšené kombinace, vybírat podporu podle konkrétních podmínek.',
              '<strong>Omezení, sklizeň, odchod:</strong> slabší kombinace, posuzovat omezení podpory, sklizeň nebo odchod.'
            ] }
          ],
          tasks: ['m11-ge-batohy'],
          more: [
            { t: 'p', html: '<strong>Příklady kritérií.</strong> Atraktivita trhu: velikost a růst trhu, sezónnost a cykličnost, průměrná ziskovost oboru, typ a intenzita konkurence, technologická náročnost, legislativní podmínky, citlivost na ekonomické výkyvy, dostupnost zdrojů. Konkurenční postavení: tržní podíl, věrnost zákazníků, růst tržeb, marketingové zkušenosti, kvalita distribuce, výzkum a vývoj, výrobní možnosti, finanční zdroje, ziskovost, kvalita řízení. Seznam není uzavřený; kritéria se volí podle situace.' },
            { t: 'p', html: '<strong>Postup váženého hodnocení.</strong> Pro každou osu se vyberou kritéria a přidělí se jim váhy tak, aby jejich součet byl 1. Každé kritérium se ohodnotí, například na škále 1–5 (1 velmi slabé, 5 velmi silné). Body se vynásobí vahou a sečtou. Výsledné skóre obou os určí pole matice podle předem stanovených hranic.' },
            { t: 'p', html: '<strong>Nároky a subjektivita.</strong> GE nepotřebuje jen dvě čísla, ale více podložených hodnocení. Výběr kritérií, vah i bodů je úsudek, který je potřeba zdůvodnit a ideálně ověřit u více lidí. GE proto není automaticky jednodušší ani přesnější než BCG; dává širší pohled za cenu větší práce s podklady.' }
          ]
        }
      ],
      summary: 'GE používá širší soubor kritérií než BCG. Výsledek je podkladem pro rozhodování, nikoli jeho náhradou.'
    }
  ],

  mindmap: {
    center: 'Analýza portfolia',
    branches: [
      { block: 'b1', title: 'Portfolio jako celek', text: 'Každý produkt potřebuje vlastní STP, positioning a mix; analýza portfolia je strategické rozhodování o celku: kterým částem nabídky (SBU) dát zdroje, které udržovat a od kterých ustoupit.', terms: ['portfolio', 'analyza_portfolia', 'sbu', 'sortiment'], relations: 'Jednotky pak porovnáváme na osách BCG.' },
      { block: 'b2', title: 'Matice BCG', text: 'Matice BCG pomáhá rozdělit zdroje mezi jednotky. Ptá se: jsme silnější než největší konkurent (relativní tržní podíl nad 1)? Roste trh rychle (nad 10 %)? Jde o růst trhu, ne vlastní firmy.', terms: ['matice_bcg', 'relativni_trzni_podil', 'tempo_rustu_trhu'], relations: 'Kombinace os určuje pozici v matici.' },
      { block: 'b3', title: 'Pozice BCG', text: 'Hvězdy: silní na rychle rostoucím trhu. Otazníky: slabí na rychle rostoucím trhu. Dojné krávy: silní na pomalém trhu, financují ostatní. Psi: slabí na pomalém trhu.', terms: ['hvezdy', 'dojne_kravy', 'otazniky', 'psi'], relations: 'Pozice otevírá otázky, ale nerozhoduje.' },
      { block: 'b4', title: 'Omezení modelu', text: 'BCG zjednodušuje situaci na dva údaje. Výsledek závisí na vymezení trhu a datech a sám nerozhoduje o ziskovosti ani o ukončení.', terms: ['matice_bcg'], relations: 'Širší soubor kritérií nabízí matice GE.' },
      { block: 'b5', title: 'Matice GE', text: 'Matice GE hodnotí jednotky podle atraktivity trhu a konkurenčního postavení, které se skládají z více vážených kritérií. Výběr kritérií, vah i hodnocení musí být zdůvodněný.', terms: ['matice_ge', 'atraktivita_trhu', 'konkurencni_postaveni', 'vaha_kriteria'], relations: 'Výsledek obou modelů je podkladem pro rozdělení zdrojů v portfoliu.' }
    ]
  },

  final: {
    intro: 'Nové krátké situace z VENKU ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m11-z-sbu', 'm11-z-barva', 'm11-z-podil', 'm11-z-vlastni', 'm11-z-kvadranty', 'm11-z-pes', 'm11-z-ge', 'm11-z-vahy'],
    areas: [
      { id: 'sbu', label: 'Portfolio a SBU', anchor: 'b1' },
      { id: 'osy', label: 'Osy BCG', anchor: 'b2' },
      { id: 'kvadranty', label: 'Kvadranty BCG', anchor: 'b3' },
      { id: 'omezeni', label: 'Omezení', anchor: 'b4' },
      { id: 'ge', label: 'Matice GE', anchor: 'b5' }
    ]
  }
};
