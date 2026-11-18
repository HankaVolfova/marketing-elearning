// Kapitola 5: Produkt v marketingové strategii – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní firma: DOUŠEK (termolahve a nádobí na nápoje).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny modely, situace a čísla jsou fiktivní.

export default {
  id: 'ch-produkt',
  title: 'Produkt v marketingové strategii',
  headline: 'Prodáváme láhev. Nebo něco víc?',
  question: 'Co zákazník skutečně kupuje a jak nabídku rozvíjet?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'DOUŠEK připravuje termolahev pro lidi, kteří denně dojíždějí do práce nebo do školy. Lahev drží teplotu, je z kvalitní oceli a má rozumnou cenu. Před uvedením na trh se řeší, čím zákazníky přesvědčit.',
        'Na poradě zazní tři návrhy: přidat další barevné varianty, rozšířit lahev o další funkce a doplňky, nebo nejdřív ujasnit, jaký užitek lidé při dojíždění potřebují. V kapitole uvidíš, co všechno zákazník kupuje, když kupuje „jen“ lahev.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit produkt jako nabídku přinášející užitek a rozlišit jádro, skutečný a rozšířený produkt;',
      'odlišit technickou vlastnost od zákaznického užitku;',
      'posoudit design a obal podle situace použití a funkcí obalu;',
      'určit šíři, délku a hloubku sortimentu a rozpoznat, co firma rozšiřuje;',
      'popsat vývoj nového produktu a rozlišit invenci a inovaci;',
      'vysvětlit životní cyklus produktu jako orientační model a zvažovat reakce firmy v jednotlivých fázích.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Co zákazník skutečně kupuje?',
      short: 'Produkt a jeho tři dimenze',
      time: { main: 2.5 },
      steps: [
        {
          id: 's1-produkt',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Nabídka uspokojující potřebu', term: 'produkt', id: 'k-produkt', title: 'Produkt', text: 'Nabídka, která může uspokojit potřebu nebo přání zákazníka.' }
            ] },
            { t: 'p', html: 'Produktem může být výrobek, služba i další nabídka. Z marketingového hlediska nás zajímá především užitek, který zákazník získá.' },
            { t: 'note', html: '<strong>Výrobek × produkt.</strong> Výrobek je hmotná věc. Produkt je širší: cokoli, co uspokojí potřebu nebo přání, tedy i služba, zážitek či myšlenka, a navíc s užitkem a službami kolem (tři dimenze produktu).' }
          ],
          tasks: ['m05-sluzba']
        },
        {
          id: 's1-dimenze',
          title: 'Tři dimenze produktu',
          body: [
            { t: 'cards', items: [
              { kicker: 'Proč to kupuji', term: 'jadro_produktu', id: 'k-jadro', title: 'Jádro produktu', text: 'Základní užitek, který zákazník prostřednictvím produktu získává.', example: 'Mít teplý nápoj během dojíždění.' },
              { kicker: 'Co přesně dostanu', term: 'skutecny_produkt', id: 'k-skutecny', title: 'Skutečný produkt', text: 'Konkrétní provedení produktu, například jeho vlastnosti, kvalita, design, značka a obal.', example: 'Izolace, objem a uzávěr termolahve.' },
              { kicker: 'Co k tomu získám navíc', term: 'rozsireny_produkt', id: 'k-rozsireny', title: 'Rozšířený produkt', text: 'Dodatečné služby a přínosy spojené se získáním a používáním produktu.', example: 'Doplňkový servis nebo dobrovolná záruka nad rámec běžných povinností.' }
            ] }
          ],
          tasks: ['m05-dimenze']
        },
        {
          id: 's1-druhy',
          title: 'Druhy produktů a marketingový mix',
          body: [
            { t: 'p', html: 'Podle toho, jak zákazníci produkty nakupují, se liší i nastavení celého mixu:' },
            { t: 'table', id: 'druhy-produktu', caption: 'Druhy spotřebních produktů a typický marketingový mix', head: ['Druh', 'Produkt', 'Cena', 'Distribuce', 'Komunikace'], rows: [
              ['Rychloobrátkové zboží, předměty denní potřeby (FMCG): pečivo, zubní pasta', 'standardizovaný, kupovaný často a bez rozmýšlení; důležitá značka a obal', 'nízká, zákazníci citliví na cenu, časté akce', 'intenzivní, co nejvíc míst', 'masová reklama, připomínání, podpora prodeje a materiály v místě prodeje'],
              ['Produkty dlouhodobé spotřeby: pračka, nábytek, auto', 'kupuje se zřídka, zákazník porovnává; důležitá kvalita, záruka, servis', 'vyšší, splátky, vliv vnímané hodnoty', 'selektivní, prodejci s poradenstvím', 'informace a srovnání, osobní prodej, recenze'],
              ['Zboží zvláštní poptávky (luxusní): šperky, luxusní hodinky', 'jedinečnost, prestiž, služby navíc', 'vysoká (prémiová), slevy minimálně', 'exkluzivní, málo vybraných prodejců', 'image a prestiž, osobní prodej, PR, akce pro klientelu'],
              ['Nevyhledávané zboží: pojištění, preventivní prohlídka', 'zákazník o něm ví, ale aktivně ho neshání', 'podle hodnoty a rizika', 'přímý kontakt, zprostředkovatelé', 'osobní prodej, vysvětlování přínosu']
            ] }
          ],
          tasks: []
        },
        {
          id: 's1-uzitek',
          title: 'Vlastnost × užitek',
          body: [],
          tasks: ['m05-uzitek'],
          more: [
            { t: 'p', html: '<strong>Podoby produktu.</strong> Produktem může být hmotný výrobek, služba, zážitek, událost, místo, organizace, informace, myšlenka i osoba. Často se kombinují: DOUŠEK prodává lahev (výrobek) a k ní může nabídnout servis (službu).' },
            { t: 'p', html: '<strong>Tři dimenze podrobněji.</strong> Jádro odpovídá na otázku, jakou potřebu produkt řeší. Skutečný produkt je to, co zákazník vidí a drží v ruce: vlastnosti, kvalita, design, značka, obal. Rozšířený produkt tvoří služby kolem: instalace, doručení, servis, záruky, financování. Čím víc zákazníci rozlišují nabídky podle skutečného a rozšířeného produktu, tím víc může firma odlišit nabídku právě tam.' },
            { t: 'p', html: '<strong>Spotřební a B2B produkty.</strong> Domácnostem DOUŠEK prodává lahve přes e-shop a obchody; firmám může dodávat lahve s vlastním potiskem jako dárky pro zaměstnance. Firemní zákazník řeší jiné věci: množství, termín dodání, potisk, cenu za kus a fakturaci.' },
          ]
        }
      ],
      summary: 'Zákazník získává užitek prostřednictvím konkrétního provedení a souvisejících služeb. Produkt proto není jen soupis parametrů.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Vlastnosti, design a obal',
      short: 'Design podle použití, funkce obalu',
      time: { main: 1.5 },
      steps: [
        {
          id: 's2-design',
          lead: true,
          body: [
            { t: 'p', html: 'Vlastnosti a design ovlivňují, jak produkt funguje a jak se používá. Atraktivní vzhled může zaujmout, ale při rozhodování je potřeba posoudit také praktický užitek.' },
            { t: 'mock', kind: 'offers', title: 'Dva návrhy uzávěru · DOUŠEK', items: [
              { name: 'Varianta A', text: 'Výrazný vzhled, ale k otevření jsou potřeba obě ruce a uzávěr se obtížně čistí.' },
              { name: 'Varianta B', text: 'Jednodušší vzhled, otevře se jednou rukou a snadno se rozebere k čištění.' }
            ] }
          ],
          tasks: ['m05-uzaver']
        },
        {
          id: 's2-obal',
          title: 'Obal není jen reklama',
          body: [
            { t: 'p', html: 'Obal může produkt chránit, usnadnit přepravu a manipulaci, poskytovat informace i pomáhat rozpoznání nabídky. Jeho vzhled nesmí znemožnit ostatní důležité funkce.' }
          ],
          tasks: ['m05-obal'],
          more: [
            { t: 'p', html: '<strong>Funkční benefity.</strong> Vlastnosti, které přizpůsobují běžné používání konkrétním potřebám: u lahve třeba uzávěr ovladatelný v rukavicích pro lidi, kteří jezdí v zimě na kole.' },
            { t: 'p', html: '<strong>Typy obalů podle opory.</strong> <em>Přepravní</em> obaly chrání zboží při přepravě, manipulaci a skladování (krabice, palety). <em>Spotřebitelské</em> obaly provázejí produkt až k zákazníkovi a nesou informace i vizuální identitu. Opora uvádí mezi funkcemi obalu ochranu produktu, funkčnost při balení a v logistice, uchopitelnost pro zákazníka, informace a bezpečnost.' },
            { t: 'p', html: '<strong>Design a vizuální styl firmy.</strong> Design se netýká jen produktu. Firma může mít jednotný vizuální styl napříč produkty, obaly, prodejnami i komunikací, aby ji zákazníci snadno poznali.' }
          ]
        }
      ],
      summary: 'Dobré provedení propojuje vzhled s používáním. Obal má vedle upoutání také ochranné, informační a praktické funkce.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Jedna láhev, celý sortiment',
      short: 'Produktová řada, šíře, délka, hloubka',
      time: { main: 2 },
      steps: [
        {
          id: 's3-rada',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Skupina souvisejících produktů', term: 'produktova_rada', id: 'k-rada', title: 'Produktová řada', text: 'Skupina souvisejících produktů, které mají podobnou funkci nebo slouží podobným potřebám.' }
            ] },
            { t: 'p', html: 'Všechny řady dohromady tvoří <dfn>[[sortiment|sortiment]]</dfn>, tedy soubor produktů, které firma nabízí.' },
            { t: 'mock', kind: 'offers', title: 'Katalog DOUŠKU', items: [
              { name: 'Řada termolahví', text: 'Lahve na cesty a výlety.' },
              { name: 'Řada termohrnků', text: 'Hrnky na kávu a čaj s sebou.' }
            ] }
          ],
          tasks: ['m05-rada']
        },
        {
          id: 's3-sire',
          title: 'Šíře, délka a hloubka',
          body: [
            { t: 'cards', items: [
              { kicker: 'Kolik řad', term: 'sire_sortimentu', id: 'k-sire', title: 'Šíře sortimentu', text: 'Počet produktových řad.' },
              { kicker: 'Kolik položek celkem', term: 'delka_sortimentu', id: 'k-delka', title: 'Délka sortimentu', text: 'Celkový počet produktových položek v sortimentu.' },
              { kicker: 'Kolik variant', term: 'hloubka_sortimentu', id: 'k-hloubka', title: 'Hloubka sortimentu', text: 'Počet variant produktu.' }
            ] },
            { t: 'note', html: '<strong>V tomto zjednodušeném katalogu počítáme jako produktovou položku jednotlivý model. Jeho barevná provedení sledujeme jako varianty.</strong>' },
            { t: 'table', id: 'katalog-dousek', caption: 'Katalog DOUŠKU', head: ['Řada', 'Modely', 'Barevné varianty každého modelu'], rows: [
              ['Termolahve', 'Cesta, Výlet', 'smaragdová, fialová'],
              ['Termohrnky', 'Ráno', 'smaragdová, žlutá']
            ] }
          ],
          tasks: ['m05-pocet-rady', 'm05-pocet-modely', 'm05-pocet-varianty']
        },
        {
          id: 's3-rozsireni',
          title: 'Co firma právě rozšiřuje?',
          body: [],
          tasks: ['m05-rozsireni'],
          more: [
            { t: 'p', html: '<strong>Prodlužování a doplňování řady.</strong> Řadu lze <em>prodloužit</em> směrem k levnějším nebo dražším modelům (například základní a luxusní provedení lahve), nebo <em>doplnit</em> o další modely ve stejné cenové úrovni (například lahev s jiným objemem). Každé rozšíření ale zvyšuje nároky na výrobu, sklad i komunikaci a nové modely si mohou navzájem brát zákazníky.' },
            { t: 'p', html: 'Jak hodnotit celé portfolio produktů a rozhodovat, které rozvíjet, ukáže kapitola o analýze portfolia.' }
          ]
        }
      ],
      summary: 'Šíře sleduje řady, délka produktové položky a hloubka varianty. Při práci se sortimentem musí být jasné, co přesně počítáme.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Nápad ještě není inovace',
      short: 'Vývoj nového produktu, invence, inovace',
      time: { main: 2 },
      steps: [
        {
          id: 's4-vyvoj',
          lead: true,
          body: [
            { t: 'p', html: 'Při vývoji nového produktu firma vybírá náměty, posuzuje zájem zákazníků a ekonomickou proveditelnost, vyvíjí a testuje řešení. Teprve potom rozhoduje o uvedení na trh, tedy o <dfn>[[komercializace|komercializaci]]</dfn>.' },
            { t: 'steps', items: [
              { title: 'Námět', text: 'Sběr a výběr nápadů.' },
              { title: 'Posouzení', text: 'Zájem zákazníků a ekonomická proveditelnost.' },
              { title: 'Vývoj a testování', text: 'Prototyp, ověření funkce a používání.' },
              { title: 'Uvedení na trh', text: 'Zahájení prodeje.' }
            ] }
          ],
          tasks: ['m05-etapy']
        },
        {
          id: 's4-invence',
          title: 'Invence × inovace',
          body: [
            { t: 'cards', items: [
              { kicker: 'Nápad', term: 'invence', id: 'k-invence', title: 'Invence', text: 'Nový nápad nebo návrh řešení.' },
              { kicker: 'Uskutečněná změna', term: 'inovace', id: 'k-inovace', title: 'Inovace', text: 'Realizovaná významná změna produktu nebo způsobu fungování firmy.' }
            ] }
          ],
          tasks: ['m05-invence']
        },
        {
          id: 's4-testovani',
          title: 'Výsledek testování není formalita',
          body: [],
          tasks: ['m05-netesnost'],
          more: [
            { t: 'p', html: '<strong>Jak firma k novému produktu přijde.</strong> Vlastním vývojem, akvizicí (koupí firmy, která produkt má), koupí licence nebo patentu, případně získáním know-how. Licence otevírá podobné možnosti i firmám s menším kapitálem.' },
            { t: 'p', html: '<strong>Etapy podrobněji podle opory.</strong> Hledání nápadů, výběr nápadů, tvorba a testování koncepce, ekonomická analýza (zájem o produkt, náklady na vývoj a výrobu, minimální prodej pro návratnost investic), vývoj produktu, testování na trhu a komercializace, včetně volby vhodného okamžiku uvedení (například na veletrhu).' },
            { t: 'p', html: '<strong>Členění inovací používané v opoře.</strong> Produktové (nový nebo významně zlepšený produkt), procesní (nový způsob výroby nebo dodávky), organizační (změna řízení a organizace práce) a marketingové (změna způsobu, jak firma nabízí a komunikuje).' },
            { t: 'p', html: '<strong>Proč nové produkty neuspějí.</strong> Opora uvádí podle Kotlera nejčastější příčiny: přecenění velikosti trhu, provedení neodpovídající očekávání, špatné umístění na trhu, nevhodná cena nebo marketingová komunikace, vyšší náklady na vývoj, než se čekalo, a silná reakce konkurence. Známým příkladem z praxe je New Coke (1985): Coca-Cola změnila recepturu a podcenila, jak silný vztah mají zákazníci k původnímu nápoji.' }
          ]
        }
      ],
      summary: 'Nový produkt potřebuje ověřit potřebu, proveditelnost i fungování. Nápad a jeho realizace jsou různé věci a ani inovace sama nezaručuje tržní úspěch.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Produkt má svůj příběh na trhu',
      short: 'Životní cyklus produktu',
      time: { main: 2.5 },
      steps: [
        {
          id: 's5-faze',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[zivotni_cyklus|Životní cyklus produktu]]</dfn> je orientační model vývoje prodeje v čase. Rozlišuje zavádění, růst, zralost a úpadek. Skutečné produkty se mohou vyvíjet odlišně a jejich fáze není vždy snadné určit.' },
            { t: 'plc', id: 'zivotni-cyklus', title: 'Životní cyklus produktu',
              note: 'Ilustrativní model, nikoli předpověď konkrétního produktu.',
              x: 'Čas', y: 'Objem prodeje',
              curve: [[0, 4], [8, 6], [16, 11], [24, 20], [32, 34], [40, 50], [48, 63], [56, 72], [64, 77], [72, 78], [80, 74], [88, 62], [96, 48], [100, 42]],
              phases: [
                { term: 'faze_zavadeni', name: 'Zavádění', from: 0, to: 22 },
                { term: 'faze_rust', name: 'Růst', from: 22, to: 50 },
                { term: 'faze_zralost', name: 'Zralost', from: 50, to: 80 },
                { term: 'faze_upadek', name: 'Úpadek', from: 80, to: 100 }
              ] },
            { t: 'cards', items: [
              { term: 'faze_zavadeni', id: 'k-zavadeni', title: 'Zavádění', text: 'Fáze, kdy produkt vstupuje na trh a získává první zákazníky.' },
              { term: 'faze_rust', id: 'k-rust', title: 'Růst', text: 'Fáze, kdy se prodej zvyšuje a produkt získává širší přijetí.' },
              { term: 'faze_zralost', id: 'k-zralost', title: 'Zralost', text: 'Fáze, kdy růst zpomaluje a prodej se stabilizuje.', example: 'Sílí boj o zákazníky.' },
              { term: 'faze_upadek', id: 'k-upadek', title: 'Úpadek', text: 'Fáze dlouhodobého poklesu prodeje produktu.', example: 'Firma rozhoduje o dalším postupu.' }
            ] }
          ],
          tasks: ['m05-faze']
        },
        {
          id: 's5-zralost',
          title: 'Co dělat ve zralosti?',
          body: [],
          tasks: ['m05-zralost']
        },
        {
          id: 's5-pokles',
          title: 'Jeden slabý měsíc není úpadek',
          body: [],
          tasks: ['m05-pokles'],
          more: [
            { t: 'p', html: '<strong>Fáze vývoje.</strong> Ještě před uvedením na trh produkt vzniká: firma do něj investuje, ale zatím nic neprodává. Klasický model tuto fázi často nezobrazuje.' },
            { t: 'p', html: '<strong>Prodej, tržby a zisk nejsou totéž.</strong> Objem prodeje (kolik kusů), tržby (kolik peněz za ně) a zisk (co zbude po odečtení nákladů) se mohou vyvíjet různě. Rostoucí prodej neznamená automaticky rostoucí zisk: záleží na cenách, nákladech i výdajích na podporu produktu.' },
            { t: 'p', html: '<strong>Různé tvary cyklu.</strong> Opora uvádí například sezónní průběh, kdy se prodej opakovaně zvedá a klesá (zahradní nábytek, hrablo na sníh), opakované oživení po nové podpoře nebo rychlý vzestup a pád módních výstřelků. Trendem je zkracování životního cyklu kvůli rychlému technologickému vývoji a konkurenci.' },
            { t: 'p', html: '<strong>Oživení, nebo ukončení?</strong> Při dlouhodobém poklesu může firma produkt oživit (nové využití, nový segment, úprava), postupně omezovat investice a prodávat zbývajícím zákazníkům, nebo produkt ukončit. I ukončení může vyvolat reakce věrných zákazníků. Příkladem z praxe je Škoda Felicia, jejíž výroba skončila v roce 2001 a která má dodnes skupinu nadšených příznivců.' }
          ]
        }
      ],
      summary: 'Životní cyklus pomáhá přemýšlet o vývoji produktu. Nenahrazuje data a neříká, že každý produkt musí projít stejnou cestou.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Produkt v marketingové strategii',
    branches: [
      { block: 'b1', title: 'Produkt a jeho dimenze', text: 'Produkt je vše, co firma nabízí k uspokojení potřeby; je širší než výrobek (hmotná věc). Má tři dimenze: jádro (základní užitek), skutečný produkt (vlastnosti, design, obal, značka) a rozšířený produkt (služby navíc). Podle druhu produktu (rychloobrátkové zboží, dlouhodobá spotřeba, zvláštní poptávka, nevyhledávané) se liší celý marketingový mix.', terms: ['produkt', 'jadro_produktu', 'skutecny_produkt', 'rozsireny_produkt'], relations: 'Poznání potřeb ovlivňuje provedení i vývoj.' },
      { block: 'b2', title: 'Provedení', text: 'Provedení produktu tvoří vlastnosti, kvalita, design a obal. Obal chrání, usnadňuje manipulaci a informuje; vzhled je jen jedna z jeho funkcí.', terms: ['skutecny_produkt'], relations: 'Provedení se liší podle modelů a variant v sortimentu.' },
      { block: 'b3', title: 'Sortiment', text: 'Sortiment je souhrn všech produktů firmy. Šíře je počet produktových řad, délka počet položek celkem a hloubka počet variant produktu.', terms: ['produktova_rada', 'sortiment', 'sire_sortimentu', 'delka_sortimentu', 'hloubka_sortimentu'], relations: 'Nové produkty sortiment rozšiřují.' },
      { block: 'b4', title: 'Vývoj a inovace', text: 'Invence je nápad, inovace realizovaná významná změna produktu, procesu, organizace nebo marketingu. Mezi nimi stojí vývoj: ověření potřeby, proveditelnosti a fungování, pak komercializace.', terms: ['invence', 'inovace', 'komercializace'], relations: 'Uvedením na trh začíná životní cyklus produktu.' },
      { block: 'b5', title: 'Životní cyklus', text: 'Životní cyklus produktu popisuje vývoj prodeje v čase: zavádění (pomalý prodej, vysoké náklady, slabá konkurence), růst (rychlý prodej, první zisk, noví konkurenti, rozšiřování distribuce), zralost (velké objemy, silná konkurence, připomínání a podpora prodeje, ceny se nezvyšují) a úpadek (pokles prodeje i zisku, utlumení, servis a náhradní díly). Je to orientační model.', terms: ['zivotni_cyklus', 'faze_zavadeni', 'faze_rust', 'faze_zralost', 'faze_upadek'], relations: 'Vývoj prodeje může vést k úpravě sortimentu nebo k inovaci.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace ze světa DOUŠKU ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m05-z-dimenze', 'm05-z-obal', 'm05-z-sortiment', 'm05-z-invence', 'm05-z-cyklus'],
    areas: [
      { id: 'dimenze', label: 'Dimenze produktu', anchor: 'b1' },
      { id: 'provedeni', label: 'Provedení a obal', anchor: 'b2' },
      { id: 'sortiment', label: 'Sortiment', anchor: 'b3' },
      { id: 'inovace', label: 'Nový produkt a inovace', anchor: 'b4' },
      { id: 'cyklus', label: 'Životní cyklus', anchor: 'b5' }
    ]
  }
};
