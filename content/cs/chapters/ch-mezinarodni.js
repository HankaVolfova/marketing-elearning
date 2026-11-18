// Kapitola 12: Specifika mezinárodních trhů – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní firma ROSTO (domácí pěstitelské sady pro malé byty), která zvažuje
// vstup na první zahraniční trh. Trh není ztotožněn s konkrétním státem; jeho vlastnosti jsou fiktivní výzkumná zjištění
// o vymezené cílové skupině. Všechny údaje a situace jsou fiktivní.

export default {
  id: 'ch-mezinarodni',
  title: 'Specifika mezinárodních trhů',
  headline: 'Doma to funguje. A za hranicemi?',
  question: 'Co můžeme zachovat a co potřebujeme přizpůsobit?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'ROSTO prodává domácí pěstitelské sady pro malé byty: nádobu, substrát, semínka a návod. Doma se mu daří. Teď se ozval zahraniční obchodník, který by sady rád nabízel u sebe.',
        'Tým chce příležitost rychle využít. Jeden návrh zní přeložit web a přepočítat domácí cenu kurzem, druhý naopak všechno změnit, protože jde o zahraničí. Třetí chce nejdřív ověřit zákazníky, podmínky trhu a možnosti obsluhy. V kapitole uvidíš, co může cestovat beze změny a co je potřeba přizpůsobit.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'odlišit ověřená zjištění o zahraničním trhu od předpokladů a určit, co je před vstupem potřeba poznat;',
      'vysvětlit standardizaci a adaptaci, jejich kombinování a tři koncepce mezinárodního marketingu;',
      'popsat, co ovlivňuje cenu na zahraničním trhu, a rozlišit cenovou standardizaci a diferenciaci;',
      'rozlišit vývoz, licenci, franchising, kapitálový vstup, joint venture a strategickou alianci;',
      'vysvětlit, proč je potřeba ověřit význam sdělení a vhodnost kanálů na novém trhu.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Nový trh, nové otázky',
      short: 'Zjištění × předpoklad, co poznat před vstupem',
      time: { main: 1.5 },
      steps: [
        {
          id: 's1-trh',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[mezinarodni_marketing|Mezinárodní marketing]]</dfn> používá stejné základní principy jako domácí marketing. Nový trh ale může mít jiné zákaznické potřeby, konkurenci, distribuční podmínky nebo požadavky na nabídku.' },
            { t: 'mock', kind: 'calc', title: 'Sada ROSTO Parapet', rows: [
              { label: 'Pro koho', value: 'lidé v malých bytech' },
              { label: 'Obsah', value: 'nádoba, substrát, semínka, návod' },
              { label: 'Slib', value: 'snadné pěstování bez zahrady' }
            ] }
          ],
          tasks: ['m12-zjisteni']
        },
        {
          id: 's1-poznat',
          title: 'Co potřebujeme poznat?',
          body: [],
          tasks: ['m12-proverit'],
          more: [
            { t: 'p', html: '<strong>Návaznost na dřívější kapitoly.</strong> Vstup na zahraniční trh je jednou z cest rozvoje trhu z Ansoffovy matice. Využívá situační analýzu (prostředí, konkurence, výzkum) i segmentaci: ROSTO nevstupuje „do země“, ale k vybrané cílové skupině na novém trhu.' },
            { t: 'p', html: '<strong>Internacionalizace a koncentrace obchodu.</strong> Internacionalizace je postupné rozšiřování podnikání z domácího trhu do zahraničí. Koncentrace obchodu znamená sdružování nebo slučování firem, které chtějí získat větší konkurenční sílu, sdílet zdroje nebo snížit náklady; v mezinárodním obchodě vede ke vzniku velkých firem i strategických aliancí.' },
            { t: 'p', html: '<strong>Proč firmy expandují.</strong> Důvodem může být nová příležitost, poptávka zahraničních partnerů, využití kapacit nebo rozložení rizika. Expanze není automatickou nutností: i firma na menším domácím trhu se rozhoduje podle svých cílů, zdrojů a zjištěné příležitosti.' }
          ]
        }
      ],
      summary: 'Vstup na zahraniční trh začíná poznáním situace. Domácí zkušenost je východiskem, nikoli důkazem stejné poptávky.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Stejný produkt, nebo úprava?',
      short: 'Standardizace × adaptace, tři koncepce',
      time: { main: 2.5 },
      steps: [
        {
          id: 's2-sa',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Zachovat', term: 'standardizace', id: 'k-standardizace', title: 'Standardizace', text: 'Zachování stejných nebo obdobných prvků nabídky a marketingových postupů na více trzích.' },
              { kicker: 'Přizpůsobit', term: 'adaptace', id: 'k-adaptace', title: 'Adaptace', text: 'Přizpůsobení nabídky nebo marketingových postupů podmínkám konkrétního trhu či cílové skupiny.' }
            ] }
          ],
          tasks: ['m12-sa']
        },
        {
          id: 's2-podklady',
          title: 'Co upravit podle zjištění?',
          body: [
            { t: 'mock', kind: 'memo', title: 'Výzkumná zjištění ROSTA o cílové skupině na novém trhu', notes: [
              { label: 'Potřeby', text: 'Cíloví zákazníci oceňují snadné používání a malý rozměr.' },
              { label: 'Nádoba', text: 'Zkouška ukázala, že základní nádoba jejich požadavkům vyhovuje.' },
              { label: 'Návod', text: 'Stávajícímu českému návodu nerozumějí.' },
              { label: 'Dávkování', text: 'Testování odhalilo potřebu upravit dávkování vody pro popsané podmínky používání.' }
            ] }
          ],
          tasks: ['m12-uprava']
        },
        {
          id: 's2-koncepce',
          title: 'Tři koncepce mezinárodního marketingu',
          body: [
            { t: 'cards', items: [
              { kicker: 'Jeden trh', term: 'vyvozni_koncepce', id: 'k-vyvozni', title: 'Vývozní koncepce', text: 'Přístup zaměřený na uplatnění nabídky na vybraném zahraničním trhu s přizpůsobením jeho podmínkám.' },
              { kicker: 'Podobné segmenty', term: 'globalni_koncepce', id: 'k-globalni', title: 'Globální koncepce', text: 'Přístup využívající podobnou nabídku a postupy pro podobné zákaznické segmenty napříč trhy.' },
              { kicker: 'Základ + úpravy', term: 'interkulturni_koncepce', id: 'k-interkulturni', title: 'Interkulturní koncepce', text: 'Přístup kombinující společný základ s přizpůsobením sociálním a kulturním podmínkám zákazníků.' }
            ] },
            { t: 'p', html: 'Jde o zjednodušené modelové přístupy. Kterýkoli z nich může použít malá i velká firma a ani globální koncepce neznamená, že firma rozdíly mezi trhy přehlíží.' }
          ],
          tasks: ['m12-koncepce'],
          more: [
            { t: 'p', html: '<strong>Výhody a omezení.</strong> Standardizace může přinést úspory z rozsahu, rychlejší vstup, jednodušší řízení a jednotnou image. Hrozí ale, že nabídka nebude odpovídat místním potřebám, podmínkám nebo zvyklostem. Adaptace pomáhá soulad s místními preferencemi, standardy a infrastrukturou a snižuje riziko jazykových a kulturních omylů. Stojí ale peníze, čas a koordinaci a může oslabit jednotnou image.' },
            { t: 'p', html: '<strong>Přizpůsobit lze i funkci.</strong> Úpravy se nemusí týkat jen obalu, názvu nebo image. Někdy je potřeba upravit i funkční a technické vlastnosti, například napájení, rozměry, materiál nebo dávkování podle podmínek používání.' },
            { t: 'p', html: '<strong>Sociokulturní zóny.</strong> Někteří autoři uvádějí ještě přístup, který seskupuje trhy nebo segmenty do zón podle podobných charakteristik (kupní síla, životní styl, zvyklosti). V rámci zóny lze standardizovat, mezi zónami přizpůsobovat.' },
            { t: 'p', html: '<strong>Koncepce × forma vstupu.</strong> Koncepce říká, nakolik firma nabídku a postupy zachovává nebo přizpůsobuje. Forma vstupu (vývoz, licence, franchising, společný podnik…) říká, jakým uspořádáním se nabídka na trh dostane. Jsou to dvě různá rozhodnutí.' }
          ]
        }
      ],
      summary: 'Nevolíme jen mezi změnou všeho a změnou ničeho. Hledáme účelnou kombinaci společného základu a potřebných úprav.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Stejná cenovka nestačí',
      short: 'Faktory ceny, cenová standardizace × diferenciace',
      time: { main: 1.5 },
      steps: [
        {
          id: 's3-cena',
          lead: true,
          body: [
            { t: 'p', html: 'Cenu na zahraničním trhu ovlivňuje zákaznická hodnota, kupní síla, konkurence i náklady na obsluhu trhu. Význam mohou mít měna, kurz, doprava a příslušné obchodní či daňové podmínky.' },
            { t: 'list', items: [
              '<strong>Zákazník:</strong> hodnota pro cílovou skupinu, kupní síla.',
              '<strong>Trh:</strong> konkurenční nabídky a jejich ceny.',
              '<strong>Náklady:</strong> doprava, partner, zákaznická podpora, úpravy nabídky.',
              '<strong>Podmínky:</strong> měna a kurz, obchodní a daňové podmínky.'
            ] }
          ],
          tasks: ['m12-kurz']
        },
        {
          id: 's3-strategie',
          title: 'Standardizace × diferenciace cen',
          body: [
            { t: 'cards', items: [
              { kicker: 'Společná politika', term: 'cenova_standardizace', id: 'k-cen-standard', title: 'Cenová standardizace', text: 'Uplatňování společné cenové politiky nebo obdobného cenového postavení na více trzích.' },
              { kicker: 'Podle trhu', term: 'cenova_diferenciace', id: 'k-cen-diferenciace', title: 'Cenová diferenciace', text: 'Přizpůsobování cen rozdílným podmínkám jednotlivých trhů.' }
            ] }
          ],
          tasks: ['m12-cenove'],
          more: [
            { t: 'p', html: '<strong>Kurzové změny.</strong> Když se změní kurz, může se změnit příjem v domácí měně nebo cena pro zahraničního zákazníka. Firma proto rozhoduje, v jaké měně bude prodávat a jak bude na výkyvy reagovat.' },
            { t: 'p', html: '<strong>Daňové a obchodní podmínky.</strong> Daně, cla, dovozní pravidla nebo regulace cen mohou ovlivnit konečnou cenu i ekonomiku vstupu. Konkrétní pravidla se liší podle trhu i produktu a mění se v čase; před vstupem je potřeba je ověřit u odborníků. Vhodnost vstupu ale nevyplývá z jediného nákladového faktoru, posuzuje se celá ekonomika i příležitost.' },
            { t: 'p', html: '<strong>Diferenciace mezi trhy × cenová segmentace.</strong> [[cenova_segmentace|Cenová segmentace]] z kapitoly o ceně nabízí různé ceny různým skupinám zákazníků nebo situacím. Cenová diferenciace v mezinárodním marketingu je její specifický případ na úrovni trhů: ceny se liší mezi zeměmi či trhy podle jejich podmínek. Velké cenové rozdíly mezi blízkými trhy mohou vést k přeprodeji zboží z levnějšího trhu na dražší.' }
          ]
        }
      ],
      summary: 'Přepočet domácí ceny je jen jeden údaj. Cenové rozhodnutí musí odpovídat hodnotě nabídky a podmínkám nového trhu.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Jak na trh vstoupíme?',
      short: 'Vývoz, licence, franchising, kapitálové vstupy',
      time: { main: 2.5 },
      steps: [
        {
          id: 's4-vyvoz',
          lead: true,
          body: [
            { t: 'p', html: 'Firma může prodávat do zahraničí přímo nebo přes obchodní partnery (<dfn>[[vyvoz|vývoz]]</dfn>). Partner může pomoci se znalostí trhu a dostupností nabídky; spolupráce vyžaduje dohodnuté podmínky a rozdělení rolí.' },
            { t: 'chain', id: 'vstup-vyvoz', rows: [
              { label: 'Situace ROSTA', nodes: ['ROSTO vyrábí doma', 'Zahraniční obchodník sady nakoupí', 'Prodá je zákazníkům na svém trhu'] }
            ] }
          ],
          tasks: ['m12-vyvoz']
        },
        {
          id: 's4-smluvni',
          title: 'Licence × franchising',
          body: [
            { t: 'cards', items: [
              { kicker: 'Vymezená práva', term: 'licence', id: 'k-licence', title: 'Licence', text: 'Smluvně vymezené oprávnění využívat určité duševní vlastnictví nebo know-how.' },
              { kicker: 'Celý koncept', term: 'franchising', id: 'k-franchising', title: 'Franchising', text: 'Spolupráce, při níž samostatný podnikatel používá značku a podnikatelský koncept poskytovatele za dohodnutých podmínek.' }
            ] },
            { t: 'chain', id: 'vstup-smluvni', rows: [
              { label: 'Licence (alternativní scénář)', nodes: ['ROSTO', 'oprávnění k řešení sady', 'Zahraniční výrobce'] },
              { label: 'Franchising (alternativní scénář)', nodes: ['ROSTO', 'značka, postupy, podpora', 'Samostatný partner'] }
            ] }
          ],
          tasks: ['m12-lf']
        },
        {
          id: 's4-kapital',
          title: 'Vlastní podnik a společné podnikání',
          body: [
            { t: 'p', html: '<dfn>[[kapitalovy_vstup|Kapitálový vstup]]</dfn> může zahrnovat založení nebo získání zahraničního podniku či společný podnik s partnerem (<dfn>[[joint_venture|joint venture]]</dfn>). Přináší jiné možnosti řízení, ale také investiční nároky a rizika. <dfn>[[strategicka_aliance|Strategická aliance]]</dfn> je spolupráce firem, která majetkové propojení mít nemusí.' }
          ],
          tasks: ['m12-kapital'],
          more: [
            { t: 'p', html: '<strong>Přímý a nepřímý vývoz.</strong> Při přímém vývozu firma sama prodává zahraničním zákazníkům a zajišťuje obchod, dodání i podporu. Při nepřímém vývozu využije zprostředkovatele: obchodníka, který zboží nakoupí a prodává na vlastní účet a riziko, výhradního prodejce, obchodního zástupce, který jedná jménem firmy, nebo komisionáře. Menší firmy mohou spolupracovat i v exportních aliancích nebo využít distribuční síť jiné firmy, která nabízí doplňkové produkty (piggyback).' },
            { t: 'p', html: '<strong>Investice na zelené louce a akvizice.</strong> Firma může v zahraničí postavit nový podnik („na zelené louce“), nebo koupit existující firmu (akvizice). Nový podnik dává velkou kontrolu, ale trvá déle a stojí víc; akvizice přinese hotové zázemí a zákazníky, ale i jejich problémy.' },
            { t: 'p', html: '<strong>Další smluvní formy.</strong> Patří sem smlouvy o řízení (poskytnutí manažerského know-how a lidí), zušlechťovací operace (zpracování materiálu nebo kompletace v zahraničí) a výrobní kooperace (dělba výroby mezi partnery v různých zemích).' },
            { t: 'p', html: '<strong>Investiční klima.</strong> Před kapitálovým vstupem firma posuzuje vztah země k zahraničním investorům, politickou a ekonomickou stabilitu, stabilitu měny a případná omezení vlastnictví nebo převodu peněz.' },
            { t: 'p', html: '<strong>Franchising není záruka.</strong> Franchisant získá ověřený koncept a podporu, ale vkládá vlastní prostředky, platí poplatky, musí dodržovat pravidla poskytovatele a nese podnikatelské riziko. Poskytovatel zase musí kvalitu sítě kontrolovat a podporovat. Smluvní podmínky každé formy vstupu je vhodné řešit s právníkem.' }
          ]
        }
      ],
      summary: 'Forma vstupu ovlivňuje zdroje, role, kontrolu a rizika. Neexistuje jedna nejlepší možnost pro všechny firmy a trhy.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Přeloženo ještě neznamená pochopeno',
      short: 'Význam sdělení, společný slib, kanály',
      time: { main: 2 },
      steps: [
        {
          id: 's5-preklad',
          lead: true,
          body: [
            { t: 'p', html: 'Při komunikaci na novém trhu ověřujeme nejen jazykovou správnost, ale také srozumitelnost a význam sdělení pro cílové zákazníky. Doslovný překlad nemusí zachovat původní smysl.' },
            { t: 'mock', kind: 'brief', title: 'Pracovní návrh ROSTA', text: 'Český slogan: „Nech to růst.“ Tým připravil překlad, ale zatím ho nikdo z cílové skupiny neviděl.' }
          ],
          tasks: ['m12-slogan']
        },
        {
          id: 's5-slib',
          title: 'Společný slib, místní provedení',
          body: [],
          tasks: ['m12-slib']
        },
        {
          id: 's5-kanal',
          title: 'Kanál vybírej podle zákazníků',
          body: [
            { t: 'p', html: 'Komunikační kanál vybíráme podle dostupnosti, používání a důvěry cílové skupiny. Domácí zkušenost nemusí na novém trhu stačit.' }
          ],
          tasks: ['m12-sit'],
          more: [
            { t: 'p', html: '<strong>Standardizovaná a adaptovaná komunikace.</strong> Standardizovaná komunikace používá na více trzích stejný koncept, což přináší jednotnou image, nižší náklady a jednodušší plánování; může ale působit méně místně. Adaptovaná komunikace se tvoří s ohledem na místní podmínky, často ve spolupráci s místním partnerem; lépe odpovídá trhu, ale vyžaduje koordinaci, aby se neztratil společný význam značky.' },
            { t: 'p', html: '<strong>Symboly a kontext.</strong> Barvy, gesta, čísla, obrázky nebo humor mohou mít v různých kulturních a sociálních souvislostech jiný význam. Proto se sdělení testuje s lidmi z cílové skupiny a s místními odborníky, ne jen překládá.' },
            { t: 'p', html: '<strong>Původ nabídky.</strong> Země nebo region původu může u části zákazníků vyvolat určité asociace (například řemeslo, tradice, technika). Někteří zákazníci dávají přednost domácím produktům, jiní zahraničním. Původ ale sám o sobě kvalitu nedokazuje a jeho vliv je potřeba u cílové skupiny ověřit.' },
            { t: 'p', html: '<strong>Místní pravidla.</strong> Reklama na některé produkty, oslovování dětí, používání jazyka nebo srovnávací reklama mohou mít na různých trzích různá pravidla. Konkrétní požadavky je potřeba ověřit pro daný trh a produkt.' }
          ]
        }
      ],
      summary: 'Zachovej důvěryhodný význam značky a ověř místní porozumění i vhodnost kanálů. Původ nabídky může různé zákazníky ovlivňovat různě.'
    }
  ],

  mindmap: {
    center: 'Mezinárodní trhy',
    branches: [
      { block: 'b1', title: 'Poznání trhu', text: 'Mezinárodní marketing uplatňuje stejné principy na zákazníky a trhy ve více zemích. Domácí úspěch nenahrazuje poznání nových zákazníků, konkurence a podmínek.', terms: ['mezinarodni_marketing'], relations: 'Ze zjištění vychází, co zachovat a co upravit.' },
      { block: 'b2', title: 'Produkt a přístup', text: 'Standardizace zachovává stejné prvky nabídky na více trzích, adaptace je přizpůsobuje místním podmínkám; firma je kombinuje. Vývozní, globální a interkulturní koncepce se liší tím, jak tento poměr nastavují.', terms: ['standardizace', 'adaptace', 'vyvozni_koncepce', 'globalni_koncepce', 'interkulturni_koncepce'], relations: 'Stejná otázka platí i pro cenu.' },
      { block: 'b3', title: 'Cena', text: 'Cenová standardizace drží společnou cenovou politiku na více trzích, cenová diferenciace přizpůsobuje ceny jednotlivým trhům. Přepočet domácí ceny kurzem sám nestačí.', terms: ['cenova_standardizace', 'cenova_diferenciace', 'cenova_segmentace'], relations: 'Náklady a kontrolu ovlivňuje i forma vstupu.' },
      { block: 'b4', title: 'Forma vstupu', text: 'Na zahraniční trh lze vstoupit vývozem, smluvně (licence, franchising) nebo kapitálově (vlastní podnik, joint venture); strategická aliance je spolupráce bez nutného vlastnictví. Formy se liší nároky, kontrolou a rizikem.', terms: ['vyvoz', 'licence', 'franchising', 'kapitalovy_vstup', 'joint_venture', 'strategicka_aliance'], relations: 'Na trhu pak musí zákazníci nabídce porozumět.' },
      { block: 'b5', title: 'Komunikace', text: 'Komunikaci na novém trhu lze standardizovat, nebo adaptovat; vždy ověřujeme, zda příjemci sdělení rozumějí. Stejný slib může mít místně přizpůsobené provedení.', terms: ['adaptace', 'standardizace'], relations: 'Reakce zákazníků jsou novým zjištěním o trhu.' }
    ]
  },

  final: {
    intro: 'Nové krátké situace z ROSTA ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m12-z-trh', 'm12-z-sa', 'm12-z-cena', 'm12-z-vstup', 'm12-z-komunikace'],
    areas: [
      { id: 'trh', label: 'Poznání trhu', anchor: 'b1' },
      { id: 'sa', label: 'Standardizace a adaptace', anchor: 'b2' },
      { id: 'cena', label: 'Cena', anchor: 'b3' },
      { id: 'vstup', label: 'Vstup na trh', anchor: 'b4' },
      { id: 'komunikace', label: 'Komunikace', anchor: 'b5' }
    ]
  }
};
