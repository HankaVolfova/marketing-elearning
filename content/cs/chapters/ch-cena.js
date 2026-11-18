// Kapitola 7: Cena v marketingové strategii – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní firma: ZÁŘ (stolní lampy).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny výrobky, nabídky, ceny a výsledky jsou fiktivní. Částky jsou bez DPH.

const NOTE = 'Částky jsou bez DPH.';

export default {
  id: 'ch-cena',
  title: 'Cena v marketingové strategii',
  headline: 'Prodáváme víc. Proč nám zbývá míň?',
  question: 'Jak nastavit cenu, která dává smysl zákazníkovi i firmě?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'ZÁŘ prodává designovou stolní lampu za 1 000 Kč. Prodej je stabilní, ale tým chce růst. Navrhuje slevu na 900 Kč: „Prodáme víc lamp, a tak víc vyděláme.“',
        'Vedoucí výroby návrh zastaví otázkou, kolik firmě z každé lampy po slevě zbude a kolik kusů navíc by musela prodat, aby na tom nebyla hůř. Na odpověď nikdo z porady nemá číslo. V kapitole uvidíte, co všechno se skrývá za cenovkou a jak cenu nastavit, aby dávala smysl zákazníkovi i firmě.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'rozlišit cenu, tržby a zisk a vysvětlit, proč cena sama nedokazuje kvalitu;',
      'popsat, co cenové rozhodnutí zohledňuje, rozlišit fixní a variabilní náklady a spočítat náklady na kus;',
      'stanovit cenu nákladovou metodou s přirážkou a odlišit poptávkovou a konkurenční metodu;',
      'rozlišit sbírání smetany, cenové pronikání, prémiovou a ekonomickou cenu;',
      'vysvětlit na výpočtu, proč je sleva pro firmu drahá; vysvětlit psychologickou cenu a cenovou kotvu.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Cena není jen číslo',
      short: 'Cena, tržby, zisk',
      time: { main: 1.5 },
      steps: [
        {
          id: 's1-cena',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Za jednu lampu', term: 'cena', id: 'k-cena', title: 'Cena', text: 'Peněžní částka požadovaná za výrobek nebo službu.' },
              { kicker: 'Za všechny prodané', term: 'trzby', id: 'k-trzby', title: 'Tržby', text: 'Peněžní hodnota uskutečněného prodeje.' },
              { kicker: 'Co zbude', term: 'zisk', id: 'k-zisk', title: 'Zisk', text: 'Kladný rozdíl mezi výnosy a náklady; v našich příkladech mezi tržbami a náklady.' }
            ] },
            { t: 'mock', kind: 'calc', title: 'Prodej lamp ZÁŘ za týden', note: NOTE, rows: [
              { label: 'Prodané lampy', value: '10 ks' },
              { label: 'Cena lampy', value: '1 000 Kč' },
              { label: 'Náklady na prodané lampy', value: '8 000 Kč' }
            ] }
          ],
          tasks: ['m07-ctz']
        },
        {
          id: 's1-informace',
          title: 'Cena jako informace',
          body: [
            { t: 'p', html: 'Zákazník cenu porovnává s vnímanou hodnotou nabídky a svým rozpočtem. Cena může ovlivnit očekávání, ale sama neprokazuje skutečnou kvalitu.' }
          ],
          tasks: ['m07-kvalita'],
          more: [
            { t: 'p', html: '<strong>Funkce ceny.</strong> <em>Informační</em>: cena zákazníkovi i firmě něco sděluje, například o hodnotě nabídky nebo o tom, co je na trhu žádané. <em>Alokační</em>: pomáhá rozhodovat, kam zákazníci dají peníze a kam firmy směřují zdroje.' },
            { t: 'p', html: '<strong>Nabídka, poptávka a rovnovážná cena.</strong> Zjednodušený ekonomický model říká, že cena se ustálí tam, kde se množství, které chtějí zákazníci koupit, rovná množství, které chtějí firmy prodat. Skutečné ceny ovlivňuje i řada dalších vlivů, takže každá tržní cena nemusí být nejlepší možná.' },
            { t: 'p', html: '<strong>Cena a ostatní nástroje mixu.</strong> Cena přináší firmě tržby, ale musí ladit s produktem, distribucí i marketingovou komunikací. Lampa s propracovaným provedením a službou může obhájit vyšší cenu než jednoduchý model.' }
          ]
        }
      ],
      summary: 'Cena ovlivňuje volbu zákazníka i ekonomický výsledek firmy. Tržby a zisk nejsou totéž.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Co musí cena zohlednit?',
      short: 'Cíle, fixní a variabilní náklady, náklady na kus',
      time: { main: 2 },
      steps: [
        {
          id: 's2-cile',
          lead: true,
          body: [
            { t: 'p', html: 'Cenové rozhodnutí vychází z cílů firmy, nákladů, zákaznické hodnoty, poptávky a konkurence. Firma může sledovat například maximalizaci zisku, objem prodeje (třeba když potřebuje vyprodat přebytečné zásoby), tržní podíl nebo návratnost investic. Podle cíle se pak liší i vhodná cena.' }
          ],
          tasks: ['m07-cile']
        },
        {
          id: 's2-naklady',
          title: 'Fixní × variabilní náklady',
          body: [
            { t: 'cards', items: [
              { kicker: 'Nemění se s objemem', term: 'fixni_naklady', id: 'k-fixni', title: 'Fixní náklady', text: 'Náklady, které se v daném období a rozsahu činnosti nemění přímo s objemem produkce.' },
              { kicker: 'Rostou s každým kusem', term: 'variabilni_naklady', id: 'k-variabilni', title: 'Variabilní náklady', text: 'Náklady, které se mění s objemem produkce.' }
            ] }
          ],
          tasks: ['m07-naklady']
        },
        {
          id: 's2-kus',
          title: 'Náklady na jeden kus',
          body: [
            { t: 'p', html: 'Pro nákladovou kalkulaci rozpočítáme fixní náklady na plánovaný počet kusů a přičteme variabilní náklady na kus. Výsledkem jsou <dfn>[[jednotkove_naklady|jednotkové náklady]]</dfn>; závisejí proto také na předpokládaném objemu.' },
            { t: 'mock', kind: 'calc', title: 'Výrobní podklad ZÁŘ', note: NOTE, rows: [
              { label: 'Fixní náklady za období', value: '20 000 Kč' },
              { label: 'Variabilní náklady na lampu', value: '500 Kč' },
              { label: 'Plánovaná výroba a prodej', value: '100 ks' }
            ] }
          ],
          tasks: ['m07-kus'],
          more: [
            { t: 'p', html: '<strong>Celkové a jednotkové náklady.</strong> Celkové náklady jsou součet fixních a variabilních nákladů za období (20 000 + 100 × 500 = 70 000 Kč). Jednotkové náklady jsou tento součet vydělený počtem kusů (70 000 ÷ 100 = 700 Kč).' },
            { t: 'p', html: '<strong>Jiný objem, jiné náklady na kus.</strong> Kdyby ZÁŘ vyrobila jen 50 lamp, připadlo by na každou 20 000 ÷ 50 = 400 Kč fixních nákladů a jednotkové náklady by byly 900 Kč. Při 200 lampách by to bylo 100 + 500 = 600 Kč.' },
            { t: 'p', html: '<strong>Konkurence, poptávka a positioning.</strong> Cena musí obstát ve srovnání s alternativami, odpovídat tomu, kolik jsou zákazníci ochotni zaplatit, a ladit s pozicí, kterou firma chce mít.' },
            { t: 'p', html: '<strong>Cenová citlivost.</strong> Někteří zákazníci na změnu ceny reagují silně, jiní téměř vůbec. Cenová elasticita poptávky vyjadřuje, jak výrazně se změní poptávané množství při změně ceny. Pro firmu je důležité vědět, jak citliví jsou právě její zákazníci.' }
          ]
        }
      ],
      summary: 'Cena musí respektovat více hledisek než náklady. Samotná nákladová kalkulace navíc závisí na tom, s jakým objemem firma počítá.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Tři cesty ke stanovení ceny',
      short: 'Nákladová, poptávková a konkurenční metoda',
      time: { main: 2 },
      steps: [
        {
          id: 's3-nakladova',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Začíná náklady', term: 'nakladova_metoda', id: 'k-nakladova', title: 'Nákladová metoda', text: 'Stanovení ceny na základě nákladů a zvolené přirážky nebo požadovaného výsledku.' }
            ] },
            { t: 'note', html: '<dfn>[[prirazka|Přirážka]]</dfn> je částka připočtená k nákladovému základu. Tady ji počítáme jako <strong>přirážku z nákladů</strong>. ' + NOTE }
          ],
          tasks: ['m07-prirazka']
        },
        {
          id: 's3-metody',
          title: 'Poptávková × konkurenční metoda',
          body: [
            { t: 'cards', items: [
              { kicker: 'Začíná zákazníkem', term: 'poptavkova_metoda', id: 'k-poptavkova', title: 'Poptávková metoda', text: 'Stanovení ceny s ohledem na zákaznickou poptávku, vnímanou hodnotu a ochotu zaplatit.' },
              { kicker: 'Začíná alternativami', term: 'konkurencni_metoda', id: 'k-konkurencni', title: 'Konkurenční metoda', text: 'Stanovení ceny s ohledem na ceny a nabídky konkurence.' }
            ] }
          ],
          tasks: ['m07-metody']
        },
        {
          id: 's3-kombinace',
          title: 'Jedna metoda nestačí na všechno',
          body: [],
          tasks: ['m07-kombinace'],
          more: [
            { t: 'p', html: '<strong>Výhody a omezení.</strong> Nákladová metoda je jednoduchá a zajistí, že firma ví, kolik ji výrobek stojí, ale neříká, zda zákazníci cenu přijmou. Poptávková metoda vychází z hodnoty pro zákazníka, ale vyžaduje znát jeho ochotu platit a stále musí pokrýt náklady. Konkurenční metoda respektuje trh, ale nezohledňuje vlastní náklady a odlišnosti nabídky.' },
            { t: 'p', html: '<strong>Přirážka × marže.</strong> Přirážka se počítá z nákladů, marže z prodejní ceny. Lampa s náklady 700 Kč a cenou 840 Kč má přirážku 140 ÷ 700 = 20 %, ale marži jen 140 ÷ 840 ≈ 16,7 %. Kdo by chtěl marži 20 % z ceny, musel by prodávat za 700 ÷ 0,8 = 875 Kč.' },
            { t: 'p', html: '<strong>Návratnost investic.</strong> Firma může cenu nastavit i tak, aby se jí v určitém čase vrátily peníze vložené do vývoje nebo výroby. Jak rychle a v jaké výši, záleží na jejích cílech a možnostech trhu.' },
            { t: 'p', html: '<strong>Poptávka a proveditelnost.</strong> I když firma vychází ze zákazníka, cena musí dlouhodobě pokrýt náklady. Poptávková orientace tedy neznamená, že ekonomiku nabídky ignorujeme.' }
          ]
        }
      ],
      summary: 'Nákladová metoda začíná náklady, poptávková zákazníkem a konkurenční alternativami na trhu. Při rozhodování potřebujeme jejich souvislosti.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Cenové strategie',
      short: 'Skimming, penetrace, prémiová a ekonomická cena',
      time: { main: 2 },
      steps: [
        {
          id: 's4-strategie',
          title: 'Cenové strategie',
          lead: true,
          body: [
            { t: 'p', html: 'Cenová strategie určuje, jak firma s cenou dlouhodobě pracuje. Rozlišujeme čtyři základní cenové strategie: dvě řeší, s jakou cenou nový produkt na trh <strong>vstoupí</strong>, dvě určují dlouhodobé <strong>cenové postavení</strong> nabídky.' },
            { t: 'cards', items: [
              { kicker: 'Vstup: začít výš, pak snižovat', term: 'skimming', id: 'k-skimming', title: 'Sbírání smetany (skimming)', text: 'Vyšší počáteční cena nového produktu s následným postupným snižováním.' },
              { kicker: 'Vstup: začít níž, získat zákazníky', term: 'cenova_penetrace', id: 'k-penetrace-cena', title: 'Cenové pronikání (penetrace)', text: 'Relativně nízká vstupní cena zaměřená na rychlé získání zákazníků a tržního podílu.' },
              { kicker: 'Postavení: dlouhodobě výš', term: 'premiova_cena', id: 'k-premiova', title: 'Prémiová cena', text: 'Dlouhodobě vyšší cenová úroveň podporující výjimečnou hodnotu a pozici nabídky.' },
              { kicker: 'Postavení: dlouhodobě dostupně', term: 'ekonomicka_cena', id: 'k-ekonomicka', title: 'Ekonomická cena', text: 'Dlouhodobě dostupná cenová úroveň podpořená úsporným řešením nabídky a nákladů.' }
            ] },
            { t: 'note', html: '<strong>Nepleťte si sbírání smetany s prémiovou cenou.</strong> Obě začínají vysoko, ale sbírání smetany cenu plánovaně snižuje, kdežto prémiová cena zůstává vysoko dlouhodobě.' }
          ],
          tasks: ['m07-strategie'],
          more: [
            { t: 'p', html: '<strong>Podmínky a rizika.</strong> Sbírání smetany předpokládá zákazníky, kteří chtějí novinku mezi prvními a jsou ochotni zaplatit víc; riziko je, že vysoká cena přiláká konkurenci. Cenové pronikání vyžaduje schopnost vyrábět a prodávat ve velkém a vydržet období s nízkým výsledkem na kus; riziko je, že zákazníci si na nízkou cenu zvyknou. Prémiová cena potřebuje hodnotu, kterou zákazníci skutečně vnímají. Ekonomická cena potřebuje trvale úsporný provoz.' },
            { t: 'p', html: '<strong>Reakce konkurence a cenová válka.</strong> Když firma výrazně sníží cenu, konkurenti mohou odpovědět stejně. Postupné vzájemné snižování cen (cenová válka) může poškodit výsledek všech zúčastněných a zákazníci si začnou všímat hlavně ceny.' },
            { t: 'p', html: '<strong>Prémiová cena a akce.</strong> Firmy s prémiovou cenou slevy obvykle používají opatrně, aby nenarušily vnímanou hodnotu. Neznamená to, že se cenová akce nesmí objevit nikdy.' },
            { t: 'p', html: '<strong>Cenové pronikání × tržní penetrace.</strong> Nepleťte si cenové pronikání (nízká vstupní cena) s [[trzni_penetrace|tržní penetrací]] z Ansoffovy matice v kapitole 2, která znamená zvyšování prodeje stávajících produktů na stávajícím trhu.' }
          ]
        }
      ],
      summary: 'Cenová strategie musí odpovídat nabídce, cílovým zákazníkům a možnostem firmy. Rozlišujte vstupní cenovou cestu a dlouhodobé cenové postavení.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Proč je sleva drahá',
      short: 'Dopad slevy na zisk, vnímání ceny',
      time: { main: 2.5 },
      steps: [
        {
          id: 's5-sleva',
          lead: true,
          body: [
            { t: 'p', html: 'Zpátky k lampě z úvodu: ZÁŘ ji prodává za 1 000 Kč a jedna lampa firmu stojí 800 Kč. Z každé prodané lampy tedy zbude 200 Kč. Co udělá <dfn>[[sleva|sleva]]</dfn> 10 %?' },
            { t: 'table', id: 'sleva-zar', caption: 'Týden prodeje lamp ZÁŘ bez slevy a se slevou 10 %', head: ['', 'Bez slevy', 'Se slevou 10 %'], rows: [
              ['Cena lampy', '1 000 Kč', '900 Kč'],
              ['Náklady na jednu lampu', '800 Kč', '800 Kč'],
              ['Z jedné lampy zbude', '200 Kč', '100 Kč'],
              ['Prodané lampy', '10 ks', '10 ks'],
              ['Zisk za týden', '2 000 Kč', '1 000 Kč']
            ] },
            { t: 'note', html: '<strong>Sleva je drahá.</strong> Zákazník ušetří 100 Kč, ale ty firmě chybí celé: náklady na lampu se slevou nezmenší. Sleva 10 % z ceny tu vezme <strong>polovinu</strong> toho, co firmě z lampy zbývalo.' }
          ],
          tasks: ['m07-sleva-objem']
        },
        {
          id: 's5-vnimani',
          title: 'Jak cenu posuzujeme?',
          body: [
            { t: 'p', html: 'Vnímání ceny ovlivňuje její podoba a srovnání s jinou hodnotou. <dfn>[[psychologicka_cena|Psychologická cena]]</dfn> může pracovat například s koncovkou; <dfn>[[cenova_kotva|cenová kotva]]</dfn> poskytuje referenční bod. Účinek není u všech zákazníků stejný.' },
            { t: 'mock', kind: 'offers', title: 'Nabídka lamp ZÁŘ na webu', items: [
              { name: 'ZÁŘ Základ · 999 Kč', text: 'Jednoduchá stolní lampa s vypínačem.' },
              { name: 'ZÁŘ Komplet · 2 490 Kč', text: 'Stmívání, nastavitelná barva světla, nabíjení telefonu.' }
            ] }
          ],
          tasks: ['m07-vnimani'],
          more: [
            { t: 'p', html: '<strong>Proč firmy slevy používají.</strong> Například k vyrovnání poptávky v klidnějším období, k uvolnění zásob starších modelů nebo k získání nových zákazníků. Vždy je dobré spočítat, co sleva udělá s výsledkem.' },
            { t: 'p', html: '<strong>Cenová segmentace</strong> znamená různé ceny či podmínky pro různé skupiny zákazníků, časy nebo situace nákupu: studentská sleva, levnější lampy mimo sezónu, jiná cena pro firemní odběratele. Může být férová i užitečná, pokud je srozumitelná.' },
            { t: 'p', html: '<strong>Další podoby cenových nabídek.</strong> Výhodná balení (lampa se žárovkou navíc), množstevní nabídky pro firmy (deset lamp do kanceláře) nebo financování (rozložení platby do splátek).' },
            { t: 'p', html: '<strong>Kotva × nepravdivá původní cena.</strong> Cenová kotva je legitimní srovnání se skutečně nabízenou alternativou, například s vybaveným modelem. Něco jiného je uvádět „původní cenu“, za kterou se výrobek ve skutečnosti neprodával. Taková nabídka zákazníky klame.' }
          ]
        }
      ],
      summary: 'Sleva ubírá z toho, co firmě z každého kusu zbývá, a stejný zisk pak vyžaduje mnohem vyšší prodej. Slevu proto posuzujte podle výsledku, ne jen podle růstu prodeje. Cenové prezentace mohou ovlivnit vnímání, ale nenahrazují skutečnou hodnotu nabídky.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Cena v marketingové strategii',
    branches: [
      { block: 'b1', title: 'Význam ceny', text: 'Cena je částka, kterou zákazník platí za nabídku; jako jediný prvek mixu přímo přináší tržby. Tržby (cena × množství) nejsou zisk a vyšší cena nedokazuje kvalitu.', terms: ['cena', 'trzby', 'zisk'], relations: 'Cenu nastavujeme podle cílů, nákladů, zákazníků a konkurence.' },
      { block: 'b2', title: 'Východiska rozhodování', text: 'Cena vychází z cílů firmy (zisk, objem prodeje, tržní podíl), nákladů, hodnoty pro zákazníka, poptávky a konkurence. Fixní náklady se s objemem nemění, variabilní rostou s každým kusem, proto náklady na kus závisejí na objemu.', terms: ['fixni_naklady', 'variabilni_naklady', 'jednotkove_naklady'], relations: 'Z nákladů vychází nákladová metoda.' },
      { block: 'b3', title: 'Metody cenotvorby', text: 'Nákladová metoda přidá k nákladům přirážku, poptávková vychází z hodnoty pro zákazníka, konkurenční z cen alternativ. V praxi se kombinují.', terms: ['nakladova_metoda', 'prirazka', 'poptavkova_metoda', 'konkurencni_metoda'], relations: 'Metoda dává cenu; strategie určuje cenovou cestu.' },
      { block: 'b4', title: 'Cenové strategie', text: 'Cenové strategie: sbírání smetany začíná vysokou cenou a postupně zlevňuje, cenové pronikání vstupuje nízkou cenou kvůli rychlému získání zákazníků a tržního podílu. Prémiová cena je dlouhodobě vysoká, ekonomická dlouhodobě nízká a zisk z ní plyne z objemu prodeje.', terms: ['skimming', 'cenova_penetrace', 'premiova_cena', 'ekonomicka_cena'], relations: 'Strategii doplňují cenové změny a způsob prezentace ceny.' },
      { block: 'b5', title: 'Změny a vnímání ceny', text: 'Sleva sníží částku, která firmě zbude z každého kusu, mnohem víc než cenu; pro stejný zisk je pak potřeba prodat výrazně víc kusů. Psychologická cena a cenová kotva ovlivňují, jak zákazník cenu vnímá.', terms: ['sleva', 'psychologicka_cena', 'cenova_kotva', 'cenova_segmentace'], relations: 'Každou změnu ceny je dobré propočítat a sladit s pozicí značky.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace ze světa ZÁŘE ze všech pěti částí. Výsledky uvidíte podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m07-z-trzby', 'm07-z-naklady', 'm07-z-metoda', 'm07-z-strategie', 'm07-z-sleva'],
    areas: [
      { id: 'vysledek', label: 'Cena a ekonomický výsledek', anchor: 'b1' },
      { id: 'naklady', label: 'Náklady', anchor: 'b2' },
      { id: 'metody', label: 'Metody', anchor: 'b3' },
      { id: 'strategie', label: 'Cenové strategie', anchor: 'b4' },
      { id: 'sleva', label: 'Sleva', anchor: 'b5' }
    ]
  }
};
