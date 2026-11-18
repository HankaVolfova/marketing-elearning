// Kapitola 8: Distribuce v marketingové strategii – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní firma: TAH (deskové hry), hlavní produkt rodinná hra Víkendovka.
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny podniky, situace, nabídky a údaje jsou fiktivní.

export default {
  id: 'ch-distribuce',
  title: 'Distribuce v marketingové strategii',
  headline: 'Skvělá hra. Jen ji nikde nekoupíte.',
  question: 'Jak dostat nabídku k zákazníkovi způsobem, který mu vyhovuje?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'TAH uvedl rodinnou deskovou hru Víkendovka. Recenze jsou dobré a lidé se na hru ptají, ale nákup často nedokončí. Vlastní e-shop totiž nabízí jen osobní odběr ve skladu za městem, v pracovní dny mezi 9. a 14. hodinou.',
        'Tým zvažuje, co dělat: posílit reklamu, aby na e-shop přišlo víc lidí, vyměnit obrázek na krabici, nebo změnit to, kde a jak si hru lidé mohou koupit a převzít. V kapitole uvidíte cestu hry od výrobce až ke stolu, u kterého se bude hrát.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit distribuci jako zajištění dostupnosti v místě, čase, množství a podmínkách a odlišit ji od samotné přepravy;',
      'rozlišit přímou a nepřímou distribuční cestu podle obchodních rolí a určit délku cesty;',
      'popsat role maloobchodu, velkoobchodu a zprostředkovatele a posoudit přínosy a náklady partnerů;',
      'rozlišit intenzivní, selektivní a exkluzivní distribuci;',
      'posoudit sladění více distribučních cest, zásob a informací pro zákazníka.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Dostupnost není jen doprava',
      short: 'Distribuce, pohodlí zákazníka',
      time: { main: 1.5 },
      steps: [
        {
          id: 's1-distribuce',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Místo, čas, množství, podmínky', term: 'distribuce', id: 'k-distribuce', title: 'Distribuce', text: 'Zajišťování dostupnosti nabídky zákazníkům v odpovídajícím místě, čase, množství a podmínkách.' }
            ] },
            { t: 'mock', kind: 'calc', title: 'Víkendovka v e-shopu TAH', rows: [
              { label: 'Rodinná hra pro 2–6 hráčů', value: '790 Kč' },
              { label: 'Převzetí', value: 'osobní odběr ve skladu' },
              { label: 'Kde a kdy', value: 'za městem, Po–Pá 9–14 h' }
            ] }
          ],
          tasks: ['m08-prekazky']
        },
        {
          id: 's1-pohodli',
          title: 'Pohodlí zákazníka',
          body: [
            { t: 'p', html: 'Distribuci firma posuzuje také očima zákazníka: jak snadno nabídku najde, objedná a získá. To navazuje na [[pohodli_zakaznika|pohodlí zákazníka]] v modelu 4C. Přeprava, skladování a zásoby (<dfn>[[fyzicka_distribuce|fyzická distribuce]]</dfn>) jsou nutné, ale samy nestačí.' }
          ],
          tasks: ['m08-sklad'],
          more: [
            { t: 'p', html: '<strong>Fyzická distribuce.</strong> Přeprava (jak a čím zboží putuje), skladování (kde a jak dlouho je uloženo) a řízení zásob (kolik her a kde mít, aby nechyběly ani zbytečně neležely).' },
            { t: 'p', html: '<strong>Další činnosti v distribuci.</strong> Obchodní (vyjednávání, nákup a prodej, převzetí rizika), informační (výměna údajů o poptávce, zásobách a objednávkách) a podpůrné (financování, balení, poradenství, vyřizování reklamací).' },
            { t: 'p', html: '<strong>Distribuce a 4C.</strong> Z pohledu firmy jde o místo (Place), z pohledu zákazníka o pohodlí (Convenience): jak rychle, jednoduše a za jakých podmínek se k nabídce dostane.' }
          ]
        }
      ],
      summary: 'Distribuce propojuje nabídku s možností ji skutečně získat. Nestačí, že produkt existuje nebo leží ve skladu.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Přímo, nebo přes obchod?',
      short: 'Přímá a nepřímá cesta, dopravce, délka cesty',
      time: { main: 2.5 },
      steps: [
        {
          id: 's2-cesty',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[distribucni_cesta|Distribuční cesta]]</dfn> ukazuje, přes koho se nabídka dostává od výrobce ke konečnému zákazníkovi.' },
            { t: 'cards', items: [
              { kicker: 'Bez obchodníka mezi', term: 'prima_cesta', id: 'k-prima', title: 'Přímá distribuční cesta', text: 'Prodej výrobce přímo konečnému zákazníkovi bez samostatného obchodního mezičlánku.', plus: 'Přímý kontakt se zákazníkem, kontrola nad cenou a službami, žádná marže obchodníka.', minus: 'Náklady a práci prodeje nese firma sama, menší pokrytí trhu.' },
              { kicker: 'S obchodníkem mezi', term: 'neprima_cesta', id: 'k-neprima', title: 'Nepřímá distribuční cesta', text: 'Prodej s využitím jednoho nebo více obchodních mezičlánků mezi výrobcem a konečným zákazníkem.', plus: 'Velké pokrytí trhu, síť a zkušenosti obchodníků, nižší vlastní náklady na prodej.', minus: 'Marže obchodníka, menší kontrola nad prezentací a cenou, slabší kontakt se zákazníkem.' }
            ] },
            { t: 'p', html: '<dfn>[[eshop|E-shop]]</dfn> může patřit k přímé i nepřímé cestě. Rozhoduje, kdo zákazníkovi prodává.' },
            { t: 'note', html: '<strong>Podle čeho cestu volit.</strong> Zákazníci (kolik jich je, kde a jak chtějí nakupovat), produkt (cena, složitost, potřeba poradenství a servisu, trvanlivost), firma (zdroje, zkušenosti, jak velkou kontrolu chce mít), mezičlánky (dostupnost, schopnosti, náklady), konkurence a prostředí (například legislativa).' }
          ],
          tasks: ['m08-cesty']
        },
        {
          id: 's2-dopravce',
          title: 'Dopravce není prodejce',
          body: [
            { t: 'chain', id: 'role-dopravce', rows: [
              { label: 'Obchodní vztah', nodes: ['TAH (prodávající)', 'Zákazník'] },
              { label: 'Doručení', nodes: ['Externí dopravce přepraví zásilku'] }
            ] },
            { t: 'p', html: 'Externí dopravce zajišťuje přepravu. Sám o sobě není <dfn>[[obchodni_mezicl|obchodní mezičlánek]]</dfn>, protože hru nekupuje ani neprodává.' }
          ],
          tasks: ['m08-dopravce']
        },
        {
          id: 's2-delka',
          title: 'Délka cesty',
          body: [
            { t: 'p', html: '<dfn>[[delka_cesty|Délku distribuční cesty]]</dfn> vyjadřuje počet obchodních mezičlánků mezi výrobcem a konečným zákazníkem. Není to počet kilometrů, skladů ani dopravních prostředků.' },
            { t: 'chain', id: 'tri-cesty', rows: [
              { label: 'Cesta A', nodes: ['TAH', 'Zákazník'] },
              { label: 'Cesta B', nodes: ['TAH', 'Nezávislý maloobchod', 'Zákazník'] },
              { label: 'Cesta C', nodes: ['TAH', 'Nezávislý velkoobchod', 'Maloobchod', 'Zákazník'] }
            ] }
          ],
          tasks: ['m08-delka'],
          more: [
            { t: 'p', html: '<strong>Vlastní prodejci a prodejny.</strong> Přímý prodej může probíhat přes vlastní obchodní zástupce (časté u firemních zákazníků), vlastní prodejny nebo vlastní e-shop. Výrobce má blízko k zákazníkům a nabídku plně v rukou, ale nese náklady na lidi, prostory a provoz.' },
            { t: 'p', html: '<strong>Náklady přímého prodeje.</strong> Kdo prodává sám, platí i expedici zásilek, zákaznickou podporu, vratky a reklamace. Vlastní e-shop proto nemusí být automaticky levnější než prodej přes partnery.' },
            { t: 'p', html: '<strong>Online tržiště.</strong> Na tržišti může prodávat výrobce sám (tržiště mu poskytuje prostor a služby), nebo tržiště hry nakoupí a prodává je samo. Zařazení cesty tedy záleží na tom, kdo je v konkrétním případě prodávajícím, ne na názvu platformy.' }
          ]
        }
      ],
      summary: 'Přímou a nepřímou cestu rozlišujeme podle obchodních rolí. Externí doprava sama neznamená další obchodní úroveň.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Co mezičlánky přinášejí?',
      short: 'Maloobchod, velkoobchod, zprostředkovatel',
      time: { main: 2 },
      steps: [
        {
          id: 's3-role',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Prodává konečným zákazníkům', term: 'maloobchod', id: 'k-maloobchod', title: 'Maloobchod', text: 'Prodej konečným zákazníkům pro jejich osobní spotřebu nebo užití.' },
              { kicker: 'Prodává dalším firmám', term: 'velkoobchod', id: 'k-velkoobchod', title: 'Velkoobchod', text: 'Prodej především dalším obchodníkům a organizacím pro jejich činnost.' },
              { kicker: 'Pomáhá sjednat obchod', term: 'zprostredkovatel', id: 'k-zprostredkovatel', title: 'Zprostředkovatel', text: 'Subjekt pomáhající sjednat obchod mezi jinými subjekty.' }
            ] }
          ],
          tasks: ['m08-role']
        },
        {
          id: 's3-prinos',
          title: 'Přínos musí odpovídat nákladům',
          body: [
            { t: 'p', html: 'Partner může výrobci zajistit dosah, skladování, prodej a služby, které by jinak musel vybudovat sám. Spolupráce ale přináší náklady, závislosti a potřebu dohodnout podmínky.' }
          ],
          tasks: ['m08-partner']
        },
        {
          id: 's3-velkoobchod',
          title: 'Mezičlánek nemusí cestu zhoršit',
          body: [],
          tasks: ['m08-velkoobchod'],
          more: [
            { t: 'p', html: '<strong>Přímá × nepřímá distribuce.</strong> Přímá cesta dává výrobci blízký kontakt se zákazníky a plnou kontrolu nad prezentací, ale vyžaduje vlastní lidi, prostory a systémy. Nepřímá cesta přináší dosah, zkušenosti a služby partnerů, ale vyžaduje dohody, sdílení informací a ochotu přenechat část rozhodování partnerovi. Kontakt se zákazníky přitom výrobce neztrácí úplně: může s nimi komunikovat, sbírat zpětnou vazbu nebo poskytovat servis.' },
            { t: 'p', html: '<strong>Maloobchodní formáty.</strong> Specializované prodejny (například obchod s deskovými hrami), obchodní domy, supermarkety a hypermarkety, diskontní prodejny, e-shopy a online tržiště, ale i prodej mimo prodejny (automaty, zásilkový prodej).' },
            { t: 'p', html: '<strong>Velkoobchod.</strong> Nakupuje velká množství od výrobců, skladuje je a zásobuje prodejny nebo další firmy. Formát <em>cash and carry</em> („zaplať a odvez“) slouží podnikatelům, kteří si zboží sami vyberou, zaplatí a odvezou.' },
            { t: 'p', html: '<strong>Zprostředkovatelé</strong> zboží obvykle nenakupují. Patří k nim obchodní zástupci a agenti (pracují za provizi), komisionáři (prodávají vlastním jménem na cizí účet) nebo makléři. Specifickými místy zprostředkování obchodu jsou burzy a aukce.' }
          ]
        }
      ],
      summary: 'Mezičlánek není jen další položka v ceně. Hodnotíme, jaké činnosti a přínosy zajišťuje a za jakých podmínek.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Distribuční strategie',
      short: 'Intenzivní, selektivní, exkluzivní distribuce',
      time: { main: 2 },
      steps: [
        {
          id: 's4-strategie',
          title: 'Distribuční strategie',
          lead: true,
          body: [
            { t: 'p', html: 'Distribuční strategie určuje, jak široce firma pokryje trh: na kolika místech a u jakých partnerů bude nabídka k dostání. Rozlišujeme tři distribuční strategie:' },
            { t: 'cards', items: [
              { kicker: 'Všude: co nejvíce míst', term: 'intenzivni_distribuce', id: 'k-intenzivni', title: 'Intenzivní distribuce', text: 'Strategie usilující o širokou dostupnost prostřednictvím co největšího počtu vhodných prodejních míst.' },
              { kicker: 'Někde: vybraní partneři', term: 'selektivni_distribuce', id: 'k-selektivni', title: 'Selektivní distribuce', text: 'Strategie využívající vybrané prodejní partnery podle stanovených požadavků.' },
              { kicker: 'Výhradně: jeden nebo pár partnerů', term: 'exkluzivni_distribuce', id: 'k-exkluzivni', title: 'Exkluzivní distribuce', text: 'Strategie svěřující prodej na vymezeném trhu nebo území partnerovi či omezenému okruhu partnerů s výhradním zastoupením.' }
            ] },
            { t: 'note', html: '<strong>Selektivní × exkluzivní.</strong> Výběr několika kvalitních prodejen je selektivní distribuce. Exkluzivní je teprve tehdy, když partner dostane <strong>výhradní</strong> právo prodávat na vymezeném území.' }
          ],
          tasks: ['m08-intenzita'],
          more: [
            { t: 'p', html: '<strong>Přínosy a omezení.</strong> Intenzivní distribuce dává zákazníkům hru téměř všude, ale firma musí obsloužit mnoho prodejců a každý z nich hru prezentuje po svém. Selektivní distribuce umožní vybrat partnery, kteří hru umějí předvést, za cenu menšího pokrytí. Exkluzivní distribuce dává partnerovi jistotu a motivaci investovat, ale dostupnost závisí na jediném nebo několika málo partnerech.' },
            { t: 'p', html: '<strong>Požadavky na partnery a kontrola.</strong> U selektivní i exkluzivní distribuce si firma s partnery dohodne například způsob prezentace, školení personálu, minimální zásoby nebo úroveň služeb a průběžně sleduje, jak spolupráce funguje. I při intenzivní distribuci může firma mít s partnery dohody a sledovat, jak se hra prodává.' },
            { t: 'p', html: 'Exkluzivní distribuce se nepoužívá jen u luxusních výrobků. Může jít třeba o výhradního dovozce pro určitou zemi nebo o specializovaný sortiment, který potřebuje zaškoleného prodejce.' }
          ]
        }
      ],
      summary: 'Intenzita distribuce vyjadřuje způsob pokrytí trhu. Musí odpovídat produktu, zákazníkům, službám a zvolenému postavení nabídky.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Jedna nabídka, více cest',
      short: 'Kombinace kanálů, zásoby, informace',
      time: { main: 2 },
      steps: [
        {
          id: 's5-kanaly',
          lead: true,
          body: [
            { t: 'p', html: 'Firma může prodávat přímo i prostřednictvím partnerů. Jednotlivé cesty se mohou doplňovat, pokud jsou promyšlené jejich role, podmínky a dostupnost.' },
            { t: 'mock', kind: 'memo', title: 'Současný plán TAHU', notes: [
              { label: 'Vlastní e-shop', text: 'Přímé objednávky.' },
              { label: 'Vybrané nezávislé prodejny', text: 'Hru lze vidět a získat poradenství.' },
              { label: 'Dopravce', text: 'Doručuje zásilky z vlastního e-shopu.' }
            ] }
          ],
          tasks: ['m08-kanaly']
        },
        {
          id: 's5-skladem',
          title: 'Skladem kde?',
          body: [
            { t: 'mock', kind: 'memo', title: 'Co zákazník vidí v e-shopu TAHU', notes: [
              { label: 'Detail hry', text: 'Víkendovka skladem. Vyzvednutí u partnera možné.' },
              { label: 'Po výběru prodejny', text: 'Na této prodejně není hra dostupná. Dodání za pět dní.' }
            ] }
          ],
          tasks: ['m08-skladem']
        },
        {
          id: 's5-proces',
          title: 'Sladit slib a skutečnost',
          body: [],
          tasks: ['m08-proces'],
          more: [
            { t: 'p', html: '<strong>Možné konflikty.</strong> Když výrobce prodává sám a zároveň přes partnery, partneři se mohou obávat, že jim přebírá zákazníky, například nižší cenou ve vlastním e-shopu. Pomáhají jasné dohody o cenách, rolích a o tom, kdo zákazníkovi co nabízí.' },
            { t: 'p', html: '<strong>Online objednávka, převzetí naživo.</strong> Zákazník si hru objedná na webu a vyzvedne ji v prodejně, nebo si ji v prodejně prohlédne a objedná domů. Aby to fungovalo, musí systémy sdílet údaje o zásobách a stavu objednávky.' },
            { t: 'p', html: '<strong>Náklady kanálů.</strong> Každá cesta má jiné nároky: vlastní e-shop potřebuje provoz, expedici a podporu, partner očekává podíl na prodeji a dohodnuté podmínky, výdejní místa poplatky. Firma je porovnává s tím, co zákazníkům přinášejí.' }
          ]
        }
      ],
      summary: 'Více cest může zvýšit pohodlí zákazníka. Potřebují ale odpovídající zásoby, informace a dohodnuté postupy.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Distribuce v marketingové strategii',
    branches: [
      { block: 'b1', title: 'Dostupnost', text: 'Distribuce zajišťuje, aby zákazník mohl nabídku získat ve správném místě, čase, množství a za odpovídajících podmínek. Nejde jen o dopravu.', terms: ['distribuce', 'fyzicka_distribuce', 'pohodli_zakaznika'], relations: 'Dostupnost zajišťuje zvolená distribuční cesta.' },
      { block: 'b2', title: 'Distribuční cesty', text: 'Distribuční cesta je posloupnost subjektů, přes které nabídka putuje k zákazníkovi. Přímá cesta nemá obchodní mezičlánek (kontrola a kontakt se zákazníkem, ale vlastní náklady a menší pokrytí), nepřímá má jeden či více (velké pokrytí, ale marže a menší kontrola); dopravce sám mezičlánkem není. Volbu ovlivňují zákazníci, produkt, firma, mezičlánky, konkurence a prostředí.', terms: ['distribucni_cesta', 'prima_cesta', 'neprima_cesta', 'obchodni_mezicl', 'delka_cesty', 'eshop'], relations: 'Nepřímá cesta pracuje s partnery.' },
      { block: 'b3', title: 'Partneři', text: 'Maloobchod prodává konečným zákazníkům, velkoobchod dalším obchodům a zprostředkovatel obchod sjednává bez vlastnictví zboží. Přínos partnera posuzujeme spolu s náklady a podmínkami.', terms: ['maloobchod', 'velkoobchod', 'zprostredkovatel'], relations: 'Počet a výběr partnerů určuje intenzitu distribuce.' },
      { block: 'b4', title: 'Distribuční strategie', text: 'Distribuční strategie: intenzivní usiluje o co nejširší dostupnost (zboží denní potřeby), selektivní vybírá partnery podle požadavků na služby (dlouhodobá spotřeba) a exkluzivní svěřuje prodej jednomu či několika partnerům s výhradním zastoupením (luxusní zboží, výhradní dovozce).', terms: ['intenzivni_distribuce', 'selektivni_distribuce', 'exkluzivni_distribuce'], relations: 'Různé cesty a partneři je potřeba sladit.' },
      { block: 'b5', title: 'Sladění cest', text: 'Firma často využívá více prodejních cest najednou (prodejna, e-shop, partneři). Potřebuje jasné role, dostupné zásoby a přesné informace, aby slib odpovídal skutečnému předání.', terms: ['distribucni_cesta', 'eshop'], relations: 'Zkušenost s převzetím ovlivňuje i marketingovou komunikaci a důvěru.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace z TAHU ze všech pěti částí. Výsledky uvidíte podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m08-z-dostupnost', 'm08-z-cesta', 'm08-z-dopravce', 'm08-z-role', 'm08-z-intenzita', 'm08-z-kanaly'],
    areas: [
      { id: 'dostupnost', label: 'Dostupnost', anchor: 'b1' },
      { id: 'cesta', label: 'Distribuční cesta', anchor: 'b2' },
      { id: 'role', label: 'Role partnerů', anchor: 'b3' },
      { id: 'intenzita', label: 'Distribuční strategie', anchor: 'b4' },
      { id: 'kanaly', label: 'Sladění kanálů', anchor: 'b5' }
    ]
  }
};
