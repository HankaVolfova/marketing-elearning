// Kapitola 4: Cílené tržní aktivity – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní firma: Krabička (příprava a rozvoz obědů).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny situace, nabídky a čísla jsou fiktivní.

export default {
  id: 'ch-stp',
  title: 'Cílené tržní aktivity',
  headline: 'Pro všechny. Takže pro nikoho?',
  question: 'Komu nabídnout co — a proč by si měl vybrat právě nás?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'Krabička připravuje a rozváží obědy po městě. Chce oslovit všechny: studenty, zaměstnance kanceláří, rodiny i sportovce. Do nabídky proto přibývají další a další jídla.',
        'Výsledek je ale opačný, než majitelé čekali. Menu je dlouhé, kuchyně nestíhá a zákazníkům není jasné, proč si vybrat právě Krabičku, když obědy rozváží i jiní. V kapitole uvidíš, jak trh rozdělit, koho si vybrat a jak se mu ukázat jako ta správná volba.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit segmentaci a segment a zvolit kritéria, která pomáhají připravit nabídku;',
      'zařadit znak zákazníka mezi geografická, demografická, psychografická a behaviorální kritéria;',
      'posoudit použitelnost segmentu (homogenita, heterogenita, měřitelnost, významnost, dostupnost, obsloužitelnost);',
      'odlišit segmentaci od targetingu a vybrat segment podle atraktivity i možností firmy;',
      'vymezit positioning a odlišit zamýšlenou pozici od skutečného vnímání zákazníků;',
      'propojit 4P a 4C a najít nesoulad mezi pozicí a marketingovým mixem.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Rozděl trh smysluplně',
      short: 'Segmentace, segment, kritéria',
      time: { main: 2 },
      steps: [
        {
          id: 's1-segmentace',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Rozdělujeme trh', term: 'segmentace', id: 'k-segmentace', title: 'Segmentace', text: 'Rozdělování trhu do skupin zákazníků s podobnými potřebami nebo reakcemi na nabídku.' },
              { kicker: 'Skupina s podobnými potřebami', term: 'segment', id: 'k-segment', title: 'Segment', text: 'Skupina zákazníků s podobnými potřebami nebo požadovanými přínosy.' }
            ] }
          ],
          tasks: ['m04-rozdeleni']
        },
        {
          id: 's1-kriteria',
          title: 'Podle čeho rozdělovat?',
          body: [
            { t: 'cards', items: [
              { kicker: 'Kde', term: 'geograficka_kriteria', id: 'k-geo', title: 'Geografická kritéria', text: 'Členění podle místa, oblasti a podmínek, ve kterých zákazníci žijí.' },
              { kicker: 'Kdo', term: 'demograficka_kriteria', id: 'k-demo', title: 'Demografická kritéria', text: 'Členění podle charakteristik, jako je věk, příjem nebo složení domácnosti.' },
              { kicker: 'Jak žijí', term: 'psychograficka_kriteria', id: 'k-psycho', title: 'Psychografická kritéria', text: 'Členění podle životního stylu, hodnot a osobnosti.' },
              { kicker: 'Jak se chovají', term: 'behavioralni_kriteria', id: 'k-behav', title: 'Behaviorální kritéria', text: 'Členění podle chování vůči nabídce, například četnosti nákupů nebo příležitosti využití.' }
            ] }
          ],
          tasks: ['m04-kriteria']
        },
        {
          id: 's1-vek',
          title: 'Stejný věk, jiné potřeby',
          body: [
            { t: 'mock', kind: 'personas', items: [
              { name: 'Alex, 24 let', text: '„Mezi schůzkami chci oběd rychle a bez plánování.“' },
              { name: 'Robin, 24 let', text: '„Při tréninku si hlídám složení a množství živin.“' }
            ] }
          ],
          tasks: ['m04-vek'],
          more: [
            { t: 'p', html: '<strong>Další příklady kritérií u Krabičky.</strong> Geografická: čtvrť, vzdálenost od kuchyně, městská či příměstská oblast. Demografická: fáze života domácnosti, povolání, příjem. Psychografická: zdravý životní styl, důraz na udržitelnost, vztah k vaření. Behaviorální: příležitost (pracovní den, víkend s rodinou), četnost objednávek, věrnost, postoj k nabídce, zda jde o nového, pravidelného nebo bývalého zákazníka.' },
            { t: 'p', html: '<strong>B2C a B2B.</strong> Kdyby Krabička vozila obědy i firmám pro jejich zaměstnance, segmentovala by firemní odběratele jinak: podle odvětví a velikosti firmy, sídla (logistika rozvozu), velikosti a pravidelnosti objednávek, způsobu nákupu (kdo o dodavateli rozhoduje, jaké má požadavky) a také podle vztahu nákupčích k dodavatelům.' },
            { t: 'p', html: '<strong>Mikrosegment a kombinace kritérií.</strong> Segment lze dále dělit na menší podskupiny se specifickými potřebami (mikrosegmenty), například zaměstnanci kanceláří, kteří mají jen 20 minut na oběd. Kritéria se často kombinují; spojení geografických a demografických údajů se nazývá geodemografie.' },
            { t: 'p', html: '<strong>VALS</strong> (Values and Lifestyles) je model psychografické segmentace. Spojuje hlavní motivaci spotřebitele (ideály, výkon, sebevyjádření) se zdroji, které má k dispozici (nejen finanční, ale i vzdělání a zkušenosti), a podle krátkého dotazníku řadí lidi do skupin s podrobným profilem.' },
            { t: 'p', html: '<strong>Přijímání inovací</strong> (Rogers) dělí zákazníky podle toho, kdy novinku přijmou: inovátoři (méně než 3 %), raní osvojitelé (asi 14 %), raná většina (asi 34 %), pozdní většina (asi 34 %) a opozdilci (asi 16 %). U Krabičky by mohlo jít třeba o to, kdo jako první vyzkouší objednávání přes novou aplikaci.' }
          ]
        }
      ],
      summary: 'Segmentace hledá podobnosti významné pro nabídku. Jedna demografická charakteristika ještě nemusí vystihovat potřeby zákazníků.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Je to použitelný segment?',
      short: 'Homogenita, heterogenita, vlastnosti segmentu',
      time: { main: 1.5 },
      steps: [
        {
          id: 's2-homogenita',
          lead: true,
          body: [
            { t: 'p', html: 'Zákazníci uvnitř segmentu mají být podobní v relevantních potřebách či reakcích. Jednotlivé segmenty se mají lišit natolik, aby jejich odlišení pomáhalo při přípravě nabídky.' },
            { t: 'cards', items: [
              { kicker: 'Uvnitř podobní', term: 'vnitrni_homogenita', id: 'k-homogenita', title: 'Vnitřní homogenita', text: 'Podobnost zákazníků uvnitř segmentu.' },
              { kicker: 'Navzájem odlišní', term: 'vnejsi_heterogenita', id: 'k-heterogenita', title: 'Vnější heterogenita', text: 'Odlišnost mezi segmenty.' }
            ] }
          ],
          tasks: ['m04-prekryv']
        },
        {
          id: 's2-pouzitelnost',
          title: 'Segment musí jít poznat a obsloužit',
          body: [
            { t: 'p', html: 'Použitelný segment má být měřitelný, dostatečně významný, dostupný a prakticky obsloužitelný. Nemusí být největší: i menší skupina může být pro firmu vhodná.' },
            { t: 'acronym', id: 'vlastnosti-segmentu', items: [
              { letter: '1', title: 'Měřitelnost', text: 'zjistíme velikost a charakteristiky' },
              { letter: '2', title: 'Významnost', text: 'dost rozsáhlá nebo výnosná' },
              { letter: '3', title: 'Dostupnost', text: 'oslovíme ji a nabídku k ní dostaneme' },
              { letter: '4', title: 'Obsloužitelnost', text: 'umíme pro ni uskutečnit program' }
            ] }
          ],
          tasks: ['m04-pouzitelnost'],
          more: [
            { t: 'p', html: '<strong>Posouzení × výběr.</strong> Vlastnosti segmentu ověřujeme, abychom věděli, se kterými skupinami se dá vůbec pracovat. Teprve pak přichází targeting: z použitelných segmentů firma vybírá ty, kterým se bude věnovat, podle jejich atraktivity a vlastních možností.' },
            { t: 'p', html: '<strong>Proč na tom záleží.</strong> Dobře provedená segmentace umožňuje přizpůsobit zákazníkům produkt, distribuci i komunikaci a může být zdrojem konkurenční výhody. Je ale časově i odborně náročná a při nevhodně zvolených kritériích nemusí přinést výsledek.' }
          ]
        }
      ],
      summary: 'Dobře pojmenovaná skupina ještě nemusí být použitelným segmentem. Firma ji potřebuje poznat, oslovit a skutečně obsloužit.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Vyber, koho obsloužíš',
      short: 'Targeting',
      time: { main: 2 },
      steps: [
        {
          id: 's3-targeting',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Najdeme skupiny', term: 'segmentace', title: 'Segmentace', text: 'Rozdělování trhu do skupin zákazníků s podobnými potřebami nebo reakcemi na nabídku.' },
              { kicker: 'Vybereme, komu se věnujeme', term: 'targeting', id: 'k-targeting', title: 'Zacílení (targeting)', text: 'Výběr segmentu nebo segmentů, na které firma zaměří svou nabídku a marketingové aktivity.' }
            ] }
          ],
          tasks: ['m04-seg-target']
        },
        {
          id: 's3-vyber',
          title: 'Největší nemusí být nejvhodnější',
          body: [
            { t: 'p', html: 'Při zacílení firma posuzuje atraktivitu segmentu i vlastní možnosti. Sleduje například velikost, růst, konkurenci, výnosnost a soulad s cíli a zdroji.' },
            { t: 'mock', kind: 'brief', title: 'Podklady Krabičky', text: 'Menší kuchyň, rozvoz v centru, rychlá příprava standardních obědů. Individuální nutriční poradenství zatím nenabízí.' },
            { t: 'table', id: 'krabicka-segmenty', caption: 'Tři možné segmenty Krabičky', head: ['Segment', 'Situace'], rows: [
              ['Zaměstnanci kanceláří v centru', 'Dostatečná poptávka, potřeba rychlého oběda, zvládnutelný rozvoz.'],
              ['Zákazníci požadující individuální sportovní jídelníčky', 'Zajímavý zájem, ale vysoké nároky na individualizaci a odborné zázemí.'],
              ['Domácnosti v celém kraji', 'Velký počet potenciálních zákazníků, ale rozvoz přesahuje současné možnosti firmy.']
            ] }
          ],
          tasks: ['m04-vyber']
        },
        {
          id: 's3-pocet',
          title: 'Jeden segment, nebo několik?',
          body: [
            { t: 'p', html: 'Firma se může soustředit na jeden segment nebo obsluhovat více segmentů s přizpůsobenou nabídkou. Širší záběr obvykle přináší další nároky na zdroje a koordinaci.' }
          ],
          tasks: ['m04-vice-segmentu'],
          more: [
            { t: 'p', html: '<strong>Strategie zacílení.</strong> <em>Hromadný (nediferencovaný) marketing</em>: jeden marketingový mix pro celý trh; firma se tím od cíleného marketingu částečně odklání. <em>Segmentová strategie</em>: dva nebo více segmentů s přizpůsobenou nabídkou. <em>Výklenková strategie</em>: jeden úzký, často dosud neobsazený segment (srovnej s [[koncentrace|koncentrací]] z kapitoly 2). <em>Individuální marketing</em>: nabídka přizpůsobená konkrétnímu zákazníkovi a dlouhodobý vztah, typicky na B2B trzích nebo u luxusních produktů.' },
            { t: 'p', html: '<strong>Podle čeho segmenty porovnat.</strong> Intenzita konkurence, současná velikost a očekávaný růst, výše tržeb a budoucí výnosnost, soulad s cíli firmy a reálnost jejich dosažení, postavení dodavatelů a odběratelů. Aby rozhodnutí nebylo jen dojmem z porady, používají se kvalitativní metody (expertní odhady, metoda Delphi s nezávislými experty) i kvantitativní (statistické hodnocení, regresní a korelační analýzy).' }
          ]
        }
      ],
      summary: 'Targeting je volba, komu se firma bude věnovat. Rozhoduje atraktivita segmentu i schopnost firmy nabídku skutečně zajistit.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Získej místo v hlavě zákazníka',
      short: 'Positioning, USP a ESP, repositioning',
      time: { main: 3 },
      steps: [
        {
          id: 's4-positioning',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Jak chceme být vnímáni', term: 'positioning', id: 'k-positioning', title: 'Positioning (umístění)', text: 'Vymezování žádoucí pozice nabídky nebo značky v mysli cílových zákazníků vůči alternativám.' }
            ] },
            { t: 'p', html: 'Firma si volí, s jakým přínosem chce být spojována. Zda ji tak zákazníci skutečně vnímají, musí ověřovat. Slogan může pozici vyjádřit, ale sám ji nevytvoří.' }
          ],
          tasks: ['m04-pozice'],
          more: [
            { t: 'p', html: '<strong>Jak zjistit, kde nás zákazníci skutečně vidí.</strong> Pomáhá například [[mapa_vnimani|mapa vnímání]]. Zobrazuje, jak zákazníci vnímají nabídky podle vybraných významných vlastností. Odlišná poloha v mapě sama neznamená, že si nabídky nekonkurují.' },
            { t: 'pmap', id: 'mapa-krabicka', title: 'Mapa vnímání: obědy s rozvozem v centru',
              x: { label: 'Vnímaná cena', low: 'nízká', high: 'vysoká' },
              y: { label: 'Vnímané pohodlí objednání a doručení', low: 'nízké', high: 'vysoké' },
              points: [
                { name: 'Krabička', x: 3, y: 2, own: true },
                { name: 'Konkurent A', x: 2, y: 2, below: true },
                { name: 'Konkurent B', x: 4, y: 5 }
              ],
              intent: { name: 'Krabička – záměr', x: 3, y: 4 },

              legendObserved: 'hodnocení zákazníků (škála 1–5)',
              legendIntent: 'záměr firmy, nikoli zjištěné hodnocení' }
          ]
        },
        {
          id: 's4-zaklady',
          title: 'Na čem lze pozici stavět',
          body: [
            { t: 'p', html: 'Pozice potřebuje oporu: něco, čím se nabídka v mysli zákazníků odliší od alternativ. Nejčastěji firmy stavějí na jednom z těchto základů:' },
            { t: 'cards', items: [
              { kicker: 'Funkční přínos', term: 'usp', id: 'k-usp', title: 'USP (Unique Selling Proposition)', text: 'Jedinečný přínos nebo vlastnost, kterou konkurence nenabízí, nebo ji nedokáže nabídnout stejně přesvědčivě.', example: 'Krabička: oběd doručený v přesně zvoleném čtvrthodinovém okně. Z praxe: Volvo a bezpečnost.' },
              { kicker: 'Pocit a vztah', term: 'esp', id: 'k-esp', title: 'ESP (Emotional Selling Proposition)', text: 'Emocionální vazba, pocit nebo životní styl, se kterým si zákazník značku spojuje. Výrobek může být podobný jako u konkurence, odlišuje ho prožitek.', example: 'Krabička: oběd jako chvíle klidu uprostřed hektického dne. Z praxe: Red Bull a adrenalin.' },
              { kicker: 'Kdy a k čemu', id: 'k-pozice-uziti', title: 'Způsob užití', text: 'Pozice podle situace nebo příležitosti, pro kterou je nabídka nejvhodnější.', example: 'Krabička: obědové balíčky pro rychlou pracovní poradu.' },
              { kicker: 'Kolik za co', id: 'k-pozice-cena', title: 'Cena a kvalita', text: 'Pozice podle vztahu ceny a kvality: vyšší kvalita za vyšší cenu, nebo přiměřená kvalita za nízkou cenu. Vyšší cena sama vyšší kvalitu nezaručuje.', example: 'Krabička: poctivý oběd za cenu menu v jídelně.' },
              { kicker: 'Odkud pochází', id: 'k-pozice-zeme', title: 'Země původu', text: 'Využití vlastností, které si zákazníci s určitou zemí spojují. Jde o vnímání, ne o doklad kvality konkrétního produktu.', example: 'Z praxe: „Swiss made“ u hodinek a švýcarská přesnost.' }
            ] }
          ],
          tasks: ['m04-zaklad']
        },
        {
          id: 's4-repositioning',
          title: 'Repositioning',
          body: [
            { t: 'cards', items: [
              { kicker: 'Měníme pozici', term: 'repositioning', id: 'k-repositioning', title: 'Repositioning', text: 'Změna dosavadního positioningu nabídky nebo značky.' }
            ] }
          ],
          tasks: ['m04-reposition'],
          more: [
            { t: 'p', html: '<strong>Postup.</strong> Zhodnotit současnou pozici (jak nás zákazníci skutečně vnímají), stanovit žádoucí pozici, rozhodnout o krocích, posoudit zdroje (lidi, peníze, čas) a nastavit ukazatele, podle kterých se pozná, zda se firma k cílové pozici blíží. Pozice obvykle nevzniká rychle a potřebuje soulad celé nabídky.' },
            { t: 'p', html: 'Pozici lze vymezovat nejen produktu, ale i značce, firmě nebo myšlence.' }
          ]
        }
      ],
      summary: 'Positioning vymezuje, s čím chceme být spojováni. Skutečné vnímání zákazníků může být jiné — proto ho zjišťujeme. Samotný slib ale pozici nevytvoří: splnit ho musí celá nabídka, tedy marketingový mix v další části.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Slaď nabídku: 4P a 4C',
      short: 'Marketingový mix, 4P, 4C',
      time: { main: 2 },
      steps: [
        {
          id: 's5-mix',
          lead: true,
          body: [
            { t: 'note', html: '<strong>Od slibu k nabídce.</strong> Segment máme vybraný a pozici vymezenou. Zatím je to ale jen <strong>slib</strong>. Zákazník ho uvěří teprve tehdy, když ho zažije: když dostane takový produkt, za takovou cenu, takovým způsobem a s takovým sdělením, jaké pozice slibuje. <strong>Positioning říká CO slibujeme, marketingový mix JAK to splníme.</strong>' },
            { t: 'p', html: '<dfn>[[marketingovy_mix|Marketingový mix]]</dfn> je soubor provázaných nástrojů, kterými firma převádí svou pozici do skutečné nabídky pro vybrané zákazníky. Model <dfn>[[ctyri_p|4P]]</dfn> zahrnuje produkt, cenu, distribuci a marketingovou komunikaci.' },
            { t: 'table', id: 'ctyri-p', caption: 'Pozice Krabičky: „Spolehlivý pracovní oběd doručený do kanceláře ve zvoleném čase.“ Jak ji splní 4P?', head: ['Nástroj 4P', 'Co Krabička rozhodne, aby slib splnila'], rows: [
              ['Product — produkt', 'Jídla, která vydrží převoz a dají se sníst u pracovního stolu.'],
              ['Price — cena', 'Cena běžného pracovního oběda, pro firmy měsíční fakturace.'],
              ['Place — distribuce', 'Objednávka online do 10:00, doručení ve zvolené čtvrthodině.'],
              ['Promotion — marketingová komunikace', 'Sdělení o přesném čase doručení, cílené na kancelářské budovy v centru.']
            ] },
            { t: 'p', html: 'Stačí, aby jediný nástroj slibu odporoval (například oběd dorazí o hodinu později), a pozice se rozpadne. Proto se 4P navrhují společně a vždy podle zvoleného segmentu a pozice.' }
          ],
          tasks: ['m04-4p']
        },
        {
          id: 's5-4c',
          title: 'Stejná nabídka očima zákazníka',
          body: [
            { t: 'table', id: 'p-c', caption: 'Propojení 4P a 4C', head: ['Pohled firmy: 4P', 'Pohled zákazníka: 4C'], rows: [
              ['Product — produkt', 'Customer Value — hodnota pro zákazníka'],
              ['Price — cena', 'Customer Costs — náklady zákazníka'],
              ['Place — distribuce', 'Convenience — pohodlí zákazníka'],
              ['Promotion — marketingová komunikace', 'Communication — komunikace se zákazníkem']
            ] },
            { t: 'p', html: 'Pohled <dfn>[[ctyri_c|4C]]</dfn> připomíná, co nabídka znamená pro zákazníka: jakou přináší [[hodnota|hodnotu]], co ho stojí ([[naklady_zakaznika|náklady zákazníka]]), jak pohodlně ji získá ([[pohodli_zakaznika|pohodlí]]) a jak může s firmou komunikovat ([[komunikace_se_zakaznikem|komunikace se zákazníkem]]).' }
          ],
          tasks: ['m04-4c']
        },
        {
          id: 's5-nesoulad',
          title: 'Najdi nesoulad',
          body: [
            { t: 'mock', kind: 'memo', quotes: true, title: 'Nabídka Krabičky na webu', notes: [
              { label: 'Slib', text: 'Pohodlný pracovní oběd bez starostí.' },
              { label: 'Podmínky', text: 'Objednávat lze jen telefonicky mezi 7:00 a 7:15. Oběd si vyzvedneš na okraji města.' }
            ] }
          ],
          tasks: ['m04-nesoulad'],
          more: [
            { t: 'p', html: '<strong>Proč nástroje provázat.</strong> Model 4P uceleně představil E. J. McCarthy (1960) a zdůraznil, že nástroje odděleně nefungují. Ph. Kotler pak zdůrazňoval provázání mixu se segmentací, zacílením a positioningem. Například slib pohodlí (pozice) potřebuje snadné objednání (distribuce, komunikace), přiměřenou cenu včetně času zákazníka (cena, náklady) a jídlo, které se dobře převáží (produkt).' },
            { t: 'p', html: 'Samostatné strategie produktu, ceny, distribuce a marketingové komunikace následují v dalších kapitolách.' }
          ]
        }
      ],
      summary: 'Vybranému segmentu a positioningu musí odpovídat celý mix. 4C pomáhá ověřit, jak nabídku prožívá zákazník.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Cílené tržní aktivity',
    branches: [
      { block: 'b1', title: 'Segmentace', text: 'Segmentace rozděluje trh na skupiny zákazníků s podobnými potřebami nebo chováním (segmenty). Kritéria jsou geografická, demografická, psychografická a behaviorální.', terms: ['segmentace', 'segment', 'geograficka_kriteria', 'demograficka_kriteria', 'psychograficka_kriteria', 'behavioralni_kriteria'], relations: 'Nalezené skupiny je třeba posoudit, zda jsou použitelné.' },
      { block: 'b2', title: 'Použitelnost segmentů', text: 'Použitelný segment je uvnitř podobný a navenek odlišný, měřitelný, dostatečně významný, dostupný a obsloužitelný. Velký počet lidí sám nestačí.', terms: ['vnitrni_homogenita', 'vnejsi_heterogenita'], relations: 'Z použitelných segmentů firma vybírá cílové.' },
      { block: 'b3', title: 'Targeting', text: 'Targeting je výběr segmentů, na které se firma zaměří, podle jejich atraktivity a vlastních možností. Segmentace skupiny najde, targeting mezi nimi vybírá.', terms: ['targeting'], relations: 'Pro vybraný segment se vymezuje pozice.' },
      { block: 'b4', title: 'Positioning', text: 'Positioning je vymezení pozice, kterou má nabídka zaujímat v mysli zákazníků vůči alternativám. Stavět ji lze na jedinečném funkčním přínosu (USP), emoci (ESP), způsobu užití, vztahu ceny a kvality nebo zemi původu. Zamýšlenou pozici porovnáváme se skutečným vnímáním zákazníků.', terms: ['positioning', 'usp', 'esp', 'repositioning'], relations: 'Pozici musí podpořit celý marketingový mix.' },
      { block: 'b5', title: 'Marketingový mix', text: 'Marketingový mix (4P: produkt, cena, distribuce, komunikace) převádí zvolenou pozici do konkrétní nabídky: positioning říká, co slibujeme, mix, jak to splníme. 4C ukazuje totéž očima zákazníka: hodnota, náklady, pohodlí, komunikace.', terms: ['marketingovy_mix', 'ctyri_p', 'ctyri_c', 'hodnota', 'naklady_zakaznika', 'pohodli_zakaznika', 'komunikace_se_zakaznikem'], relations: 'Jednotlivé nástroje mixu rozvádějí další kapitoly.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace z Krabičky ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m04-z-kriterium', 'm04-z-pouzitelnost', 'm04-z-targeting', 'm04-z-positioning', 'm04-z-4c'],
    areas: [
      { id: 'segmentace', label: 'Segmentace', anchor: 'b1' },
      { id: 'pouzitelnost', label: 'Použitelnost segmentu', anchor: 'b2' },
      { id: 'targeting', label: 'Targeting', anchor: 'b3' },
      { id: 'positioning', label: 'Positioning', anchor: 'b4' },
      { id: 'mix', label: '4P a 4C', anchor: 'b5' }
    ]
  }
};
