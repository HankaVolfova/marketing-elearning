// Kapitola 1: Vývoj a filosofie marketingu – výukové texty (čeština).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Úlohy jsou vloženy uzlem { t: 'task', id }; jejich texty jsou v content/cs/tasks/,
// klíče a vazby v data/tasks/.

export default {
  id: 'ch-filosofie',
  title: 'Vývoj a filosofie marketingu',
  headline: 'Dobrý produkt. A proč ho nikdo nekupuje?',
  question: 'Jak poznáte firmu, která přemýšlí marketingově?',
  mascotLine: 'Mám sedm kapes. Ale víme, kdo mě potřebuje?',

  intro: {
    // Cíl: hlavní cesta kapitoly 8–10 minut; časy se uvádějí u jednotlivých částí (block.time).
    minutes: null,
    lead: 'Marketing si spousta lidí spojí s reklamou. Reklama je ale jen jeho viditelná špička. Tahle kapitola ukazuje, co je pod ní: jak vzniká hodnota pro zákazníka, kdo komu na trhu nabízí a hlavně jakými způsoby může firma přemýšlet, když se rozhoduje.',
    scenario: {
      title: 'Příběh kapitoly',
      company: 'Ranec',
      body: [
        'Firma Ranec vyrábí batohy. Její nový model Dojížďák je kvalitně ušitý, má pevné zipy a slušnou cenu. Přesto se prodává mnohem hůř, než vedení čekalo.',
        'Na poradě padnou čtyři návrhy, čím začít: snížit výrobní náklady, přidat další technické parametry, posílit prodejní tlak, nebo zjistit, co zákazníci při používání batohu skutečně potřebují. V kapitole uvidíte, jaký způsob myšlení stojí za každým z nich.'
      ]
    },
    // Výstupy učení se v e-learningu nezobrazují (rozhodnutí vyučující 13. 11. 2026); ponechány jako podklad pro skripta.
    outcomes: [
      'vysvětlit, co marketing zahrnuje a čím se liší od reklamy a prodeje;',
      'rozlišit potřebu, přání a poptávku a vysvětlit, co je hodnota pro zákazníka;',
      'zařadit vztah na trhu jako B2C, B2B, C2C nebo C2B;',
      'charakterizovat pět podnikatelských koncepcí a rozpoznat je na příkladu;',
      'posoudit rozhodnutí firmy z pohledu zákazníka, firmy i společnosti.'
    ]
  },

  // Pět koncepcí – jedno místo pro názvy, hlasy z porady a vzorové charakteristiky.
  // Používá je výklad (karty), srovnávací tabulka, porada, otevřená odpověď i závěrečné procvičení.
  concepts: [
    { key: 'vyrobni', id: 'k-vyrobni', name: 'Výrobní koncepce', term: 'vyrobni_koncepce', voice: 'Potřebujeme to vyrábět levněji a dostat všude.',
      model: 'Výrobní koncepce vychází z předpokladu, že zákazníci preferují levné a snadno dostupné produkty. Firma se proto soustředí na efektivní hromadnou výrobu, nízké náklady a širokou distribuci. Hodí se na trzích, kde poptávka převyšuje nabídku nebo kde rozhoduje hlavně cena. Rizikem je, že firma přehlíží další požadavky zákazníků a po nasycení trhu ztrácí výhodu.' },
    { key: 'vyrobkova', id: 'k-vyrobkova', name: 'Výrobková koncepce', term: 'vyrobkova_koncepce', voice: 'Přidejme lepší parametry.',
      model: 'Výrobková koncepce vychází z předpokladu, že zákazníci preferují produkty s nejlepší kvalitou, výkonem a vlastnostmi. Firma se proto soustředí na neustálé zdokonalování produktu a přidávání nových vlastností. Přínosem je kvalitní a inovativní produkt tam, kde to zákazníci skutečně oceňují. Rizikem je marketingová krátkozrakost: firma vyvíjí vlastnosti bez odpovídajícího užitku pro zákazníka a přehlédne změnu jeho potřeb.' },
    { key: 'prodejni', id: 'k-prodejni', name: 'Prodejní koncepce', term: 'prodejni_koncepce', voice: 'Musíme víc zabrat v prodeji.',
      model: 'Prodejní koncepce vychází z předpokladu, že zákazníci sami nekoupí dostatečné množství, a proto je nutné je aktivně přesvědčovat. Firma se soustředí na prodej existující nabídky pomocí reklamy, prodejních technik a akcí. Uplatní se například u produktů, o které zákazníci sami neusilují. Rizikem je zaměření na jednorázovou transakci bez ohledu na spokojenost zákazníka a dlouhodobý vztah.' },
    { key: 'marketingova', id: 'k-marketingova', name: 'Marketingová koncepce', term: 'marketingova_koncepce', voice: 'Co naši zákazníci skutečně potřebují?',
      model: 'Marketingová koncepce vychází z potřeb vybraných zákazníků. Firma je zkoumá, a to včetně potřeb dosud nevyjádřených, a podle nich sladí produkt, cenu, distribuci i komunikaci tak, aby zákazníkům vytvořila vyšší hodnotu než konkurence a současně naplnila své cíle. Usiluje o spokojenost a dlouhodobý vztah se zákazníkem. Je náročná na informace a koordinaci a bývá kritizována za opomíjení dopadů na společnost.' },
    { key: 'odpovedna', id: 'k-odpovedna', name: 'Společensky odpovědná koncepce', term: 'spolecensky_odpovedna_koncepce', voice: 'Jak uspokojit zákazníka a současně zohlednit dlouhodobé dopady?',
      model: 'Společensky odpovědná koncepce propojuje potřeby zákazníků, cíle firmy a dlouhodobé zájmy společnosti. Firma kromě ekonomického výsledku zohledňuje sociální a environmentální dopady své činnosti, tedy všechny tři pilíře udržitelnosti, a hledá řešení konfliktů mezi krátkodobým ziskem a dlouhodobým prospěchem. Přínosem je důvěra a dlouhodobá životaschopnost. Rizikem jsou vyšší náklady, obtížné kompromisy a greenwashing.' }
  ],

  blocks: [
    // ───────────────────────────── BLOK 1
    {
      id: 'b1',
      title: 'Co je marketing?',
      short: 'Marketing není jen reklama',
      time: { main: 2 },
      steps: [
        {
          id: 'b1-k1',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[marketing|Marketing]]</dfn> zahrnuje činnosti, kterými firma poznává zákazníky a trh, vytváří hodnotnou nabídku, komunikuje ji a dostává k zákazníkům. Pomáhá tak uspokojovat jejich potřeby a naplňovat cíle firmy.' },
            { t: 'p', html: 'Začíná už rozhodováním, <strong>co a pro koho nabídnout</strong>, a pokračuje i po nákupu. Reklama a prodej jsou jeho součástí.' },
            { t: 'mock', kind: 'chat', title: 'Z rozhovorů s dojíždějícími', messages: [
              { who: 'Bára, dojíždí vlakem', text: 'Notebook mi v dešti zmokl už dvakrát.' },
              { who: 'Ranec', text: 'Díky. Batoh s voděodolnou kapsou je na cestě. Po pár měsících se ozveme, jak funguje.', own: true }
            ] }
          ],
          tasks: ['b1-k1-rozhodni'],
          more: [
            { t: 'p', html: 'Autoři marketing definují různě. Americká marketingová asociace zdůrazňuje vytváření, komunikování, dodávání a směnu nabídek, které mají hodnotu pro zákazníky, partnery i společnost. Philip Kotler mluví o společenském a manažerském procesu, v němž lidé uspokojují své potřeby a přání tvorbou a směnou produktů a hodnot. Jádro je stejné: zákazník, hodnota nabídky a cíle organizace.' }
          ]
        },
        {
          id: 'b1-k2',
          title: 'K čemu marketing slouží',
          body: [
            { t: 'p', html: 'Marketing sleduje čtyři cíle: <strong>uspokojit potřeby zákazníků</strong>, <strong>vytvořit přiměřený zisk</strong>, <strong>získat [[konkurencni_vyhoda|konkurenční výhodu]]</strong> a <strong>budovat dlouhodobý vztah</strong>. Neziskové organizace místo zisku sledují naplnění svého poslání.' },
            { t: 'mock', kind: 'product', name: 'Dojížďák 22 l', price: '2 490 Kč', features: ['voděodolná kapsa na notebook', 'kapsa na jízdenku bez sundání batohu', 'reflexní prvky'], badge: 'Jen u nás' }
          ],
          tasks: ['b1-k2-cil']
        },
        {
          id: 'b1-k3',
          title: 'Reklama a prodej jsou jen části celku',
          body: [
            { t: 'p', html: '<strong>Reklama</strong> je jeden z nástrojů, kterými firma o nabídce komunikuje. <strong>Prodej</strong> je okamžik, kdy zákazník kupuje. Marketing obojí zahrnuje, ale začíná dřív a končí později.' },
            { t: 'mock', kind: 'poster', headline: 'Dojížďák. Do vlaku i do deště.', place: 'Nahoře billboard u nádraží, pod ním hodnocení zákaznice v e-shopu Rance o měsíc později',
              review: { stars: 2, text: 'Reklama mě zaujala, tak jsem batoh koupila. Ve vlaku se ale nevejde pod sedadlo, a tak jsem ho vrátila.' } }
          ],
          tasks: ['b1-k3-porovnani']
        }
      ],
      summary: 'Marketing provází nabídku od poznání zákazníka po vztah po nákupu. Reklama a prodej jsou jen jeho části.'
    },

    // ───────────────────────────── BLOK 2
    {
      id: 'b2',
      title: 'Potřeba, přání, poptávka a hodnota',
      short: 'Od nedostatku k nákupu',
      time: { main: 2 },
      steps: [
        {
          id: 'b2-pojmy',
          lead: true,
          body: [
            { t: 'p', html: 'Mezi tím, že člověku něco chybí, a tím, že si něco koupí, jsou tři kroky. Ne každý dojde až do konce.' },
            { t: 'cards', items: [
              { kicker: 'Co mi chybí', term: 'potreba', title: 'Potřeba', text: 'Pociťovaný nedostatek.', example: 'Potřebuju každý den nosit věci do školy.' },
              { kicker: 'Jakou podobu tomu dám', term: 'prani', title: 'Přání', text: 'Konkrétní podoba potřeby, ovlivněná kulturou, okolím a zkušenostmi.', example: 'Chci Dojížďák s kapsou na notebook.' },
              { kicker: 'Můžu a chci zaplatit', term: 'poptavka', title: 'Poptávka', text: 'Přání podložené schopností i ochotou zaplatit.', example: 'Mám odložené peníze a v pátek si ho koupím.' }
            ] }
          ],
          tasks: ['b2-ppp'],
          more: [
            { t: 'p', html: 'Potřeby firma nevytváří. Potřebu přenášet věci lze uspokojit batohem, taškou i skříňkou ve škole. Marketing může odhalit potřebu, kterou lidé sami nevyslovili ([[latentni_potreba|nevyjádřenou potřebu]]), a nabídnout nový způsob, jak ji uspokojit. Potřeba poslouchat hudbu existovala dávno, přenosný přehrávač byl jen nový způsob.' }
          ]
        },
        {
          id: 'b2-hodnota',
          title: 'Hodnota pro zákazníka',
          body: [
            { t: 'p', html: '<dfn>[[hodnota|Hodnota]]</dfn> je to, jak zákazník porovná <strong>přínosy</strong> nabídky s tím, co musí <strong>obětovat</strong>: peníze, čas, úsilí a riziko. Je subjektivní, takže stejný produkt má pro různé lidi různou hodnotu.' },
            { t: 'p', html: 'Ke [[smena|směně]] dojde, jen když zákazník vnímá hodnotu [[nabidka|nabídky]] vyšší než to, co za ni dává.' },
            { t: 'mock', kind: 'personas', items: [
              { name: 'Bára', text: 'Dojíždí denně 50 minut vlakem, pak kus na kole. Nosí notebook.' },
              { name: 'Tomáš', text: 'Do práce to má pět minut pěšky. Nosí svačinu a klíče.' }
            ] }
          ],
          tasks: ['b2-hodnota']
        }
      ],
      summary: 'Potřeba je nedostatek, přání její podoba, poptávka přání se schopností i ochotou zaplatit. Hodnota je subjektivní porovnání přínosů a obětí.'
    },

    // ───────────────────────────── BLOK 3
    {
      id: 'b3',
      title: 'Kdo komu nabízí',
      short: 'B2C, B2B, C2C, C2B',
      time: { main: 1.5 },
      steps: [
        {
          id: 'b3-typy',
          lead: true,
          body: [
            { t: 'p', html: 'Typ vztahu na trhu určuje, <strong>kdo nabízí a kdo kupuje</strong>. Nerozhoduje web ani aplikace, přes kterou se obchoduje.' },
            { t: 'figure', kind: 'market-matrix', id: 'b3-matice' }
          ],
          tasks: ['b3-trhy']
        },
        {
          id: 'b3-rozdily',
          title: 'Čím se liší B2B a B2C',
          body: [
            { t: 'p', html: 'V [[b2b|B2B]] obvykle rozhoduje víc lidí, kupuje se pro provoz nebo další výrobu a vztah bývá dlouhodobý a smluvní. V [[b2c|B2C]] rozhoduje častěji jednotlivec podle osobních preferencí. Jsou to <strong>typické tendence</strong>, ne pravidla.' }
          ],
          tasks: ['b3-tendence'],
          more: [
            { t: 'table', id: 'b3-tabulka', caption: 'Typické rozdíly mezi B2C a B2B', head: ['', 'B2C (spotřební trh)', 'B2B (obchodní trh)'], rows: [
              ['Účel nákupu', 'Osobní spotřeba jednotlivce nebo domácnosti.', 'Další výroba, provoz organizace nebo další prodej.'],
              ['Kdo rozhoduje', 'Obvykle jednotlivec, případně rodina.', 'Často více lidí: uživatelé, nákupčí, technici, schvalovatelé rozpočtu.'],
              ['Kritéria výběru', 'Osobní preference, cena, vzhled, doporučení.', 'Specifikace, celkové náklady, spolehlivost, servis. Roli hraje i důvěra.'],
              ['Vztah', 'Mnoho zákazníků, vztah bývá volnější a kratší.', 'Méně zákazníků, vztah bývá dlouhodobý a smluvní.']
            ] }
          ]
        }
      ],
      summary: 'Typ vztahu určuje, kdo nabízí a kdo kupuje, ne platforma. B2B a B2C se liší v typických tendencích.'
    },

    // ───────────────────────────── BLOK 4
    {
      id: 'b4',
      title: 'Jak firma přemýšlí: podnikatelské koncepce',
      short: 'Pět koncepcí',
      isMain: true,
      time: { main: 3.5 },
      steps: [
        {
          id: 'b4-uvod',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[podnikatelska_koncepce|Podnikatelská koncepce]]</dfn> je způsob myšlení, ze kterého firma při rozhodování opakovaně vychází. Na poradě Rance zazní pět různých.' },
            { t: 'voices' },
            { t: 'p', html: 'Koncepce se v historii prosazovaly postupně, ale dnes existují <strong>všechny vedle sebe</strong>, často i v jedné firmě.' }
          ],
          more: [
            { t: 'figure', kind: 'timeline', id: 'b4-osa' },
            { t: 'p', html: '<strong>Marketing v Česku.</strong> Začátky sahají do doby kolem druhé světové války, kdy šlo hlavně o reklamu. V roce 1960 začal vycházet časopis Marketing a v roce 1967 vznikla Česká marketingová společnost. Po roce 1971 režim rozvoj oboru zastavil. Znovu se marketing rozvinul po roce 1989 a dlouho se přitom zaměňoval s prodejem nebo reklamou.' }
          ]
        },
        {
          id: 'b4-vv',
          title: 'Výrobní a výrobková: obě se dívají dovnitř firmy',
          body: [
            { t: 'cards', items: [
              { kicker: 'Levně a všude', term: 'vyrobni_koncepce', id: 'k-vyrobni', title: 'Výrobní koncepce', text: 'Předpoklad: zákazník chce levné a dostupné produkty. Firma řeší efektivní velkovýrobu, nízké náklady a širokou distribuci.', example: 'Riziko: přehlíží, co dalšího zákazníci chtějí.' },
              { kicker: 'Lépe a víc funkcí', term: 'vyrobkova_koncepce', id: 'k-vyrobkova', title: 'Výrobková koncepce', text: 'Předpoklad: zákazník chce nejlepší kvalitu a vlastnosti. Firma neustále zdokonaluje produkt. Co je „lepší“, ale posuzuje sama.', example: 'Riziko: [[marketingova_kratkozrakost|marketingová krátkozrakost]].' }
            ] }
          ],
          tasks: ['b4-vv'],
          more: [
            { t: 'p', html: '<strong>Marketingová krátkozrakost</strong> znamená, že se firma zamiluje do svého produktu a přestane vidět potřebu, kterou uspokojuje. Často se uvádí příklad Nokie, která zdokonalovala tlačítkové telefony, zatímco potřebu zákazníků začaly lépe uspokojovat dotykové smartphony. Skutečné příčiny byly složitější, princip ale ilustruje dobře.' }
          ]
        },
        {
          id: 'b4-pm',
          title: 'Prodejní a marketingová: kde firma začíná',
          body: [
            { t: 'cards', items: [
              { kicker: 'Začíná u produktu', term: 'prodejni_koncepce', id: 'k-prodejni', title: 'Prodejní koncepce', text: 'Předpoklad: zákazník sám nekoupí dost, musí být přesvědčen. Firma tlačí existující nabídku reklamou, akcemi a prodejními technikami.', example: 'Riziko: jednorázový prodej bez spokojenosti a vztahu.' },
              { kicker: 'Začíná u zákazníka', term: 'marketingova_koncepce', id: 'k-marketingova', title: 'Marketingová koncepce', text: 'Předpoklad: uspěje, kdo lépe než konkurence vytvoří hodnotu pro vybrané zákazníky. Firma zkoumá jejich potřeby, i nevyslovené, a podle nich ladí celou nabídku.', example: 'Omezení: náročnost na informace; kritika za opomíjení dopadů na společnost.' }
            ] },
            { t: 'p', html: 'Reklamu používají obě. Proto koncepci nepoznáte z jediné kampaně, ale z toho, <strong>odkud firma vychází</strong>.' }
          ],
          tasks: ['b4-pm', 'b4-kampan'],
          more: [
            { t: 'p', html: 'Marketingová koncepce může být <strong>reaktivní</strong> (uspokojuje potřeby, které zákazníci vyjadřují) nebo <strong>proaktivní</strong> (předvídá i potřeby nevyslovené). Proaktivní příklad: přenosný přehrávač Sony Walkman nabídl lidem poslouchat vlastní hudbu kdekoli, i když o to předem nežádali.' }
          ]
        },
        {
          id: 'b4-odp',
          title: 'Společensky odpovědná: zákazník, firma i společnost',
          body: [
            { t: 'cards', items: [
              { kicker: 'Myslí i na dopady', term: 'spolecensky_odpovedna_koncepce', id: 'k-odpovedna', title: 'Společensky odpovědná koncepce', text: 'Propojuje potřeby zákazníků, cíle firmy a dlouhodobé zájmy společnosti. Zohledňuje sociální a environmentální dopady, tedy [[tri_pilire|tři pilíře udržitelnosti]]. V původní opoře se nazývá sociální koncepce.', example: 'Riziko: vyšší náklady, kompromisy a greenwashing. Není to totéž co charita.' }
            ] }
          ],
          tasks: ['b4-dar'],
          more: [
            { t: 'p', html: 'Nepleťte si ji se [[socialni_marketing|sociálním marketingem]]. Ten používá marketingové postupy ke změně chování lidí pro společenský prospěch, třeba v kampani za bezpečnou jízdu. Na společensky odpovědnou koncepci navazuje [[csr|společenská odpovědnost firem (CSR)]].' }
          ]
        },
        {
          id: 'b4-srovnani',
          title: 'Všech pět vedle sebe',
          body: [
            { t: 'conceptTable', id: 'b4-tabulka' }
          ],
          tasks: ['b4-vychozi']
        }
      ],
      summary: 'Výrobní vychází z nákladů a dostupnosti, výrobková z kvality produktu, prodejní z přesvědčování, marketingová z potřeb zákazníků a společensky odpovědná k tomu přidává dopady na společnost.'
    },

    // ───────────────────────────── BLOK 5
    {
      id: 'b5',
      title: 'Zákazník, firma a společnost',
      short: 'Hodnota, vztahy, dopady',
      time: { main: 1.5 },
      steps: [
        {
          id: 'b5-dopady',
          lead: true,
          body: [
            { t: 'p', html: 'Každé marketingové rozhodnutí má tři strany: <strong>zákazníka</strong> (hodnota), <strong>firmu</strong> (ekonomická životaschopnost) a <strong>společnost</strong> (sociální a environmentální dopady). Často se podporují, někdy jdou proti sobě.' }
          ],
          tasks: ['b5-dilema']
        },
        {
          id: 'b5-vztahy',
          title: 'Vztahy a loajalita',
          body: [
            { t: 'p', html: '[[vztahovy_marketing|Vztahový marketing]] buduje dlouhodobé, oboustranně výhodné vztahy se zákazníky i dalšími partnery ([[stakeholder|stakeholdery]]). Věrní zákazníci jsou pro firmu cenní, ale [[loajalita|loajalita]] úspěch <strong>nezaručuje</strong>: zákazník odejde, když nabídka přestane mít hodnotu.' }
          ],
          tasks: ['b5-loajalita'],
          more: [
            { t: 'p', html: 'Systematickou práci s informacemi o zákaznících označujeme jako [[crm|CRM]]. [[holisticky_marketing|Holistický marketing]] (Kotler a Keller) tvrdí, že v marketingu „všechno souvisí se vším“: propojuje interní, integrovaný, vztahový a společensky odpovědný marketing.' }
          ]
        }
      ],
      summary: 'Dobré rozhodnutí zohledňuje zákazníka, firmu i společnost. Loajalita je důležitý předpoklad úspěchu, ne jeho záruka.'
    }
  ],


  // Srovnávací tabulka koncepcí – řádky (popisky); hodnoty se berou z výkladu koncepcí.
  conceptTable: {
    caption: 'Pět podnikatelských koncepcí vedle sebe',
    rows: [
      { key: 'vychozi', label: 'Výchozí bod' },
      { key: 'predpoklad', label: 'Předpoklad o zákazníkovi' },
      { key: 'rozhodnuti', label: 'Typické rozhodnutí' },
      { key: 'riziko', label: 'Hlavní riziko' }
    ],
    cols: {
      vyrobni: { vychozi: 'Výroba a náklady', predpoklad: 'Chce levné a dostupné produkty.', rozhodnuti: 'Vyrábět víc a levněji, dostat produkt všude.', riziko: 'Přehlíží další požadavky zákazníků.' },
      vyrobkova: { vychozi: 'Produkt a jeho vlastnosti', predpoklad: 'Chce nejlepší kvalitu a vlastnosti.', rozhodnuti: 'Zlepšit parametry, přidat funkce.', riziko: 'Marketingová krátkozrakost.' },
      prodejni: { vychozi: 'Existující nabídka, kterou je třeba prodat', predpoklad: 'Sám nekoupí dost, musí být přesvědčen.', rozhodnuti: 'Posílit reklamu, prodejní tlak, akce.', riziko: 'Jednorázová transakce bez vztahu.' },
      marketingova: { vychozi: 'Potřeby vybraných zákazníků', predpoklad: 'Koupí to, co mu přináší vyšší hodnotu než konkurence.', rozhodnuti: 'Zjistit potřeby a sladit podle nich celou nabídku.', riziko: 'Náročnost; opomíjení dopadů na společnost.' },
      odpovedna: { vychozi: 'Zákazník, firma i společnost', predpoklad: 'Má i dlouhodobé zájmy, nejen okamžitá přání.', rozhodnuti: 'Hledat řešení vyvažující zisk a dlouhodobé dopady.', riziko: 'Vyšší náklady, kompromisy, greenwashing.' }
    }
  },

  // Myšlenková mapa – pět větví podle bloků
  mindmap: {
    center: 'Vývoj a filosofie marketingu',
    branches: [
      { block: 'b1', title: 'Co je marketing', text: 'Marketing zahrnuje činnosti, kterými firma poznává zákazníky, vytváří a komunikuje hodnotnou nabídku a dostává ji k nim. Sleduje čtyři cíle: uspokojit potřeby zákazníků, vytvořit přiměřený zisk, získat konkurenční výhodu a budovat dlouhodobý vztah; neziskové organizace místo zisku naplňují své poslání.', terms: ['marketing', 'konkurencni_vyhoda'], relations: 'Hodnota a směna (blok 2) jsou jádrem definice. Způsob, jakým firma marketing pojímá, popisují koncepce (blok 4).' },
      { block: 'b2', title: 'Potřeba, přání, poptávka, hodnota', text: 'Potřeba je nedostatek, přání její podoba, poptávka přání podložené schopností a ochotou zaplatit. Hodnota je subjektivní porovnání přínosů a obětí.', terms: ['potreba', 'prani', 'poptavka', 'nabidka', 'smena', 'hodnota', 'latentni_potreba'], relations: 'Marketingová koncepce (blok 4) z těchto pojmů přímo vychází. Hodnota se objevuje znovu v bloku 5.' },
      { block: 'b3', title: 'Kdo komu nabízí', text: 'Typ trhu říká, kdo nabízí a kdo kupuje: firma spotřebiteli (B2C), firma firmě (B2B), spotřebitel spotřebiteli (C2C), spotřebitel firmě (C2B). Rozhoduje vztah, ne platforma. B2B trh je typicky koncentrovaný: méně kupujících, větší objemy, víc lidí v rozhodování a dlouhodobé smluvní vztahy.', terms: ['b2c', 'b2b', 'c2c', 'c2b'], relations: 'Kdo je zákazník, určuje, jak hodnotu vnímá (blok 2) i jak dlouhý vztah s ním firma buduje (blok 5).' },
      { block: 'b4', title: 'Podnikatelské koncepce', text: 'Podnikatelská koncepce je způsob myšlení, od kterého se odvíjí rozhodování firmy. Výrobní staví na levné a dostupné výrobě, výrobková na nejlepším produktu, prodejní na přesvědčování k nákupu, marketingová na potřebách zákazníků a společensky odpovědná na zájmech zákazníka, firmy i společnosti. Dnes existují vedle sebe.', terms: ['podnikatelska_koncepce', 'vyrobni_koncepce', 'vyrobkova_koncepce', 'prodejni_koncepce', 'marketingova_koncepce', 'spolecensky_odpovedna_koncepce', 'marketingova_kratkozrakost'], relations: 'Marketingová koncepce stojí na potřebách a hodnotě (blok 2). Společensky odpovědná vede k propojení zákazníka, firmy a společnosti (blok 5).' },
      { block: 'b5', title: 'Zákazník, firma, společnost', text: 'Holistický marketing posuzuje rozhodnutí z pohledu zákazníka, firmy i společnosti. Vztahový marketing buduje dlouhodobé vztahy; loajalita je předpokladem úspěchu, ne jeho zárukou.', terms: ['vztahovy_marketing', 'loajalita', 'holisticky_marketing', 'stakeholder', 'csr'], relations: 'Navazuje na společensky odpovědnou koncepci (blok 4) a na hodnotu pro zákazníka (blok 2).' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Úlohy pokrývají všechny hlavní cíle kapitoly. Vyhodnocené úlohy uvidíte ve výsledcích podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['z-rozsah-1', 'z-rozsah-2', 'z-ppp', 'z-hodnota', 'z-trhy-1', 'z-trhy-2', 'z-vv-1', 'z-vv-2', 'z-pm-1', 'z-pm-2', 'z-odpov'],
    areas: [
      { id: 'rozsah', label: 'Rozsah marketingu', anchor: 'b1' },
      { id: 'ppp', label: 'Potřeba, přání a poptávka', anchor: 'b2-pojmy' },
      { id: 'hodnota', label: 'Hodnota pro zákazníka', anchor: 'b2-hodnota' },
      { id: 'trhy', label: 'Typy trhů', anchor: 'b3' },
      { id: 'vv', label: 'Výrobní × výrobková koncepce', anchor: 'b4-vv' },
      { id: 'pm', label: 'Prodejní × marketingová koncepce', anchor: 'b4-pm' },
      { id: 'odpov', label: 'Odpovědné rozhodování', anchor: 'b5' }
    ]
  }
};
