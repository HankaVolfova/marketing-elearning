// Kapitola 3: Marketingové prostředí – výukové texty (čeština).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny firmy, výroky a čísla v příkladech a úlohách jsou fiktivní.

export default {
  id: 'ch-prostredi',
  title: 'Marketingové prostředí',
  headline: 'Máme pocit, že to bude fungovat. Máme i nějaká data?',
  question: 'Jak poznat situaci firmy a zjistit to, co nám pro rozhodování chybí?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'Kavárna Za rohem funguje už šestým rokem. Poslední měsíce do ní chodí znatelně méně lidí, a to i v časech, kdy dřív nebylo kde sedět. Majitelka musí rozhodnout, co změnit.',
        'Od personálu a známých slyší tři vysvětlení: „Určitě jsme moc drazí.“ „Lidi přešli ke konkurenci.“ „Možná jim přestala vyhovovat nabídka nebo otevírací doba.“ Každé vede k jinému řešení, ale žádné zatím nikdo neověřil. V kapitole uvidíte, jak rozlišit dohad od zjištění a kde hledat, co kavárně chybí vědět.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'rozlišit mikroprostředí podniku a makroprostředí podle možnosti ovlivnění;',
      'zařadit vlivy makroprostředí podle PESTLE a popsat jejich dopad na firmu;',
      'rozlišit současné konkurenty, nové konkurenty a substituty; vyjmenovat Porterových pět sil;',
      'sestavit SWOT z podložených zjištění a odlišit příležitost od aktivity;',
      'formulovat výzkumnou otázku, rozlišit primární a sekundární data a etapy výzkumu;',
      'zvolit přístup a metodu podle výzkumné otázky a vysvětlit, proč počet odpovědí nezaručuje reprezentativnost.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Firma není ostrov',
      short: 'Mikroprostředí, makroprostředí, PESTLE',
      time: { main: 3 },
      steps: [
        {
          id: 's1-mikro-makro',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[situacni_analyza|Situační analýza]]</dfn> systematicky hodnotí situaci podniku a jeho prostředí jako podklad pro rozhodování. Začíná otázkou: co můžeme ovlivnit a na co musíme reagovat?' },
            { t: 'cards', items: [
              { kicker: 'Co můžeme ovlivňovat', term: 'mikroprostredi_podniku', id: 'k-mikro', title: 'Mikroprostředí podniku', text: 'Faktory, které podnik dokáže ovlivňovat.', example: 'Například zaškolení obsluhy nebo výběr dodavatele kávy.' },
              { kicker: 'Na co musíme reagovat', term: 'makroprostredi', id: 'k-makro', title: 'Makroprostředí', text: 'Širší vlivy, které podnik sám nedokáže ovlivnit.', example: 'Například kupní síla obyvatel nebo nové zákony.' }
            ] },
            { t: 'mock', kind: 'memo', title: 'Provozní poznámky · kavárna Za rohem', notes: [
              { label: 'Provoz', text: 'V pondělí nastupuje nová baristka, musíme ji zaškolit.' },
              { label: 'Nákup', text: 'Vybíráme nového dodavatele kávy.' },
              { label: 'Prodej', text: 'Lidé ve čtvrti šetří, ke kávě si méně často dají dezert.' },
              { label: 'Úřad', text: 'Mění se zákonné požadavky na provoz kaváren.' }
            ] }
          ],
          tasks: ['m03-mikro-makro']
        },
        {
          id: 's1-mikro',
          title: 'Mikroprostředí: co podnik zná zblízka',
          body: [
            { t: 'p', html: '[[mikroprostredi_podniku|Mikroprostředí]] tvoří vlivy, které podnik může svým rozhodováním ovlivňovat. Patří sem tři oblasti:' },
            { t: 'cards', items: [
              { kicker: 'Uvnitř firmy', id: 'k-mikro-podnik', title: 'Podnik sám', text: 'Zdroje, finance, procesy a organizace. Podklady dávají podnikové analýzy, například rozvaha, výkaz zisku a ztráty, personální údaje nebo fungování logistiky.', example: 'Za rohem: počet míst k sezení, otevírací doba, hospodaření kavárny.' },
              { kicker: 'Kolem firmy', id: 'k-mikro-lide', title: 'Lidé', text: 'Zákazníci, zaměstnanci a veřejnost, například sousedé, místní komunita nebo média.', example: 'Za rohem: stálí hosté, baristky, sousedé z domu.' },
              { kicker: 'Spolupracují s firmou', id: 'k-mikro-partneri', title: 'Partneři', text: 'Dodavatelé, distributoři a další obchodní partneři.', example: 'Za rohem: pražírna kávy, pekárna s dezerty, rozvozová platforma.' }
            ] },
            { t: 'p', html: 'Možnost ovlivnit neznamená plnou kontrolu. Kavárna si pražírnu vybírá a vyjednává s ní o cenách i termínech, jak se ale pražírna zachová, sama neurčuje.' }
          ],
          tasks: ['m03-mikro-oblasti'],
          more: [
            { t: 'p', html: '<strong>Funkce marketingového oddělení.</strong> <em>Komunikativní a informační</em>: informuje o produktech a zpět přináší informace o zákaznících, trhu a konkurenci. <em>Koordinační</em>: propojuje činnosti uvnitř podniku i mezi podnikem a zákazníky, aby se aktivity nezdvojovaly a image podniku byl jednotný. <em>Analytická</em>: shromažďuje a vyhodnocuje faktory působící uvnitř podniku i z jeho okolí a předává je vedení.' }
          ]
        },
        {
          id: 's1-pestle',
          title: 'PESTLE: šest oblastí makroprostředí',
          body: [
            { t: 'p', html: '<dfn>[[pestle|PESTLE]]</dfn> pomáhá systematicky procházet makroprostředí. Důležité je vysvětlit, jaký dopad má každý vliv na konkrétní podnik.' },
            { t: 'acronym', id: 'pestle-prehled', items: [
              { letter: 'P', title: 'Politické', text: 'stabilita, zásahy státu' },
              { letter: 'E', title: 'Ekonomické', text: 'ceny, kupní síla' },
              { letter: 'S', title: 'Sociokulturní', text: 'zvyky, demografie' },
              { letter: 'T', title: 'Technologické', text: 'nové technologie' },
              { letter: 'L', title: 'Legislativní', text: 'zákony a povinnosti' },
              { letter: 'E', title: 'Environmentální', text: 'příroda, udržitelnost' }
            ] }
          ],
          tasks: ['m03-pestle'],
          more: [
            { t: 'p', html: '<strong>Politické prostředí</strong> nastavuje „pravidla hry“: politická stabilita, zásahy státu do ekonomiky, mezinárodní vztahy nebo míra korupce.' },
            { t: 'p', html: '<strong>Ekonomické prostředí</strong> působí přímo na nabídku i poptávku: hospodářská politika (monetární, fiskální, důchodová, obchodní a měnová) se promítá do kupní síly a struktury poptávky.' },
            { t: 'p', html: '<strong>Sociokulturní prostředí</strong> zahrnuje zvyky, přístupy a preference, které se mohou lišit i regionálně, a demografické údaje: velikost a věkové složení populace, porodnost, úmrtnost nebo složení obyvatelstva.' },
            { t: 'p', html: '<strong>Technologické prostředí</strong> sleduje úroveň technologií a jejich využití u firem i zákazníků, investice do výzkumu a vývoje nebo úroveň řízení procesů v oboru.' },
            { t: 'p', html: '<strong>Legislativní prostředí</strong> se často spojuje s politickým, vhodnější je ale sledovat ho samostatně: vznik a schvalování zákonů, nadnárodní legislativa nebo vymahatelnost práva.' },
            { t: 'p', html: '<strong>Environmentální prostředí</strong> zahrnuje šetrnost a udržitelnost řešení, citlivost trhu na „zelené“ nabídky i fyzické prostředí, například geografii nebo nerostné bohatství.' },
            { t: 'p', html: 'Stejnou podstatu mají i zkrácené varianty <strong>STEP</strong> a <strong>PEST</strong>. Liší se jen počtem oblastí, které výslovně pojmenovávají.' }
          ]
        },
        {
          id: 's1-dopad',
          title: 'Faktor nestačí, potřebujeme dopad',
          body: [],
          tasks: ['m03-dopad']
        }
      ],
      summary: 'Prostředí sledujte podle možnosti ovlivnění a dopadu na firmu. Seznam faktorů začíná být užitečný až tehdy, když vysvětlíte jejich význam.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Konkurence není jen vedlejší obchod',
      short: 'Rival, nový konkurent, substitut, pět sil',
      time: { main: 1.5 },
      steps: [
        {
          id: 's2-konkurenti',
          lead: true,
          body: [
            { t: 'p', html: 'Konkurenční tlak nevytvářejí jen současní soupeři. Hrozbu mohou představovat noví konkurenti i substituty, tedy jiné způsoby uspokojení stejné potřeby.' },
            { t: 'cards', items: [
              { kicker: 'Už tu je', id: 'k-rival', title: 'Současný rival', text: 'Firma, která už na stejném trhu nabízí podobný produkt.' },
              { kicker: 'Teprve přichází', id: 'k-novy', title: 'Nový konkurent', text: 'Firma, která se na trh teprve chystá vstoupit.' },
              { kicker: 'Jiná cesta ke stejné potřebě', term: 'substitut', id: 'k-substitut', title: 'Substitut', text: 'Jiný způsob uspokojení stejné potřeby.' }
            ] },
            { t: 'mock', kind: 'offers', title: 'Kam jinam na kávu · okolí kavárny Za rohem', items: [
              { name: 'Kavárna U Parku', text: 'Druhá kavárna ve stejné čtvrti, podobná nabídka.' },
              { name: 'Kafe & Go', text: 'Řetězec ohlásil, že na jaře otevře pobočku na náměstí.' },
              { name: 'Kávovar doma', text: 'Část štamgastů si koupila domácí kávovar.' }
            ] }
          ],
          tasks: ['m03-konkurenti']
        },
        {
          id: 's2-pet-sil',
          title: 'Porterových pět sil',
          body: [
            { t: 'p', html: '<dfn>[[porteruv_model|Porterův model pěti sil]]</dfn> zkoumá tlaky působící na konkurenci a ziskovost v odvětví. K rivalitě, novým konkurentům a substitutům přidává vyjednávací sílu dodavatelů a odběratelů.' },
            { t: 'forces', id: 'pet-sil', caption: 'Porterův model pěti sil', center: 'Rivalita současných konkurentů',
              top: 'Hrozba vstupu nových konkurentů', left: 'Vyjednávací síla dodavatelů', right: 'Vyjednávací síla odběratelů', bottom: 'Hrozba substitutů', bottomTerm: 'substitut' }
          ],
          tasks: ['m03-pet-sil'],
          more: [
            { t: 'p', html: '<strong>Proč samostatná analýza.</strong> Některé konkurenty může firma svým jednáním ovlivnit, jiné vůbec. Míra ovlivnění se liší podle oboru a situace, proto se konkurence analyzuje samostatně a nezařazuje se povinně do mikro-, ani makroprostředí.' },
            { t: 'p', html: '<strong>Co jednotlivé síly posiluje.</strong> Rivalitu například velký počet podobně silných konkurentů nebo pomalý růst trhu. Hrozbu vstupu snižují překážky, jako jsou vysoké počáteční investice, legislativní požadavky nebo věrnost zákazníků stávajícím firmám. Substituty jsou silnější, když nabízejí výhodný poměr užitku a ceny a přechod k nim je snadný. Síla dodavatelů roste, když je jich málo nebo je změna dodavatele nákladná. Síla odběratelů roste, když nakupují velké objemy nebo mohou snadno přejít jinam.' },
            { t: 'p', html: '<strong>Odkud brát podklady.</strong> O dodavatelích a odběratelích firma obvykle už ví hodně z vlastní činnosti. Pro odhad nových konkurentů a substitutů pomáhají zjištění z makroprostředí, třeba legislativní, ekonomické nebo technologické změny.' }
          ]
        }
      ],
      summary: 'Konkurenci posuzujte šířeji než seznamem podobných firem. Sledujte také vstup nových hráčů, alternativní řešení a vyjednávací sílu partnerů.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'SWOT: co z toho je podstatné?',
      short: 'Silné a slabé stránky, příležitosti, hrozby',
      time: { main: 2 },
      steps: [
        {
          id: 's3-swot',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[swot|SWOT]]</dfn> shrnuje podstatná zjištění o firmě a jejím okolí. Silné a slabé stránky popisují vlastní charakteristiky a schopnosti firmy; příležitosti a hrozby přicházejí z okolí.' },
            { t: 'matrix', id: 'swot-matice', caption: 'Matice SWOT', corner: 'Odkud / vliv', cols: ['Pomáhá', 'Omezuje'], rows: ['Firma', 'Okolí'],
              cells: [
                [{ code: 'S · Silné stránky', text: 'V čem má firma výhodu.' }, { code: 'W · Slabé stránky', text: 'Co ji omezuje.' }],
                [{ code: 'O · Příležitosti', text: 'Příznivé okolnosti v okolí.' }, { code: 'T · Hrozby', text: 'Nepříznivé okolnosti v okolí.' }]
              ] },
            { t: 'dontmix', id: 'swot-zdroje', a: 'Slabá stránka', b: 'příležitost', html: '<strong>S a W</strong> popisují firmu samotnou: co má, co umí a jak funguje (podnik sám, tedy vnitřní část mikroprostředí). <strong>O a T</strong> přicházejí zvenku: z makroprostředí, od konkurence, zákazníků či dodavatelů. Firma je nevytváří, může je jen využít, nebo se jim bránit. <br><strong>Pomůcka:</strong> Existovalo by to, i kdyby naše firma nebyla? Pokud ano, jde o příležitost nebo hrozbu. <br><strong>Příklad:</strong> Pomalý vlastní objednávkový systém je <strong>slabá stránka</strong>. „Lepší objednávkový systém“ není příležitost, je to úkol, jak slabou stránku odstranit. Příležitostí je například to, že si hosté v okolí zvykají objednávat předem přes mobil.' }
          ],
          tasks: ['m03-swot']
        },
        {
          id: 's3-prilezitost',
          title: 'Příležitost není úkol',
          body: [
            { t: 'mock', kind: 'memo', quotes: true, title: 'Lísteček ze SWOT workshopu kavárny Za rohem', notes: [
              { label: 'A', text: 'Ve vedlejší ulici se otevírá nová fakulta, kolem kavárny budou denně chodit stovky studentů.' },
              { label: 'B', text: 'Založíme profil na sociálních sítích a každý týden tam zveřejníme novou nabídku.' }
            ] }
          ],
          tasks: ['m03-prilezitost']
        },
        {
          id: 's3-podlozene',
          title: 'SWOT musí vycházet ze zjištění',
          body: [],
          tasks: ['m03-podlozene'],
          more: [
            { t: 'p', html: '<strong>Jak výsledky využít.</strong> Častá zásada zní: silné stránky posilovat, slabé stránky odstraňovat, příležitosti využívat a hrozby sledovat. Teprve propojení položek, například jak silnou stránkou využít příležitost, dává podklad pro rozhodování.' },
            { t: 'p', html: '<strong>Návaznost na předchozí analýzy.</strong> Do SWOT vstupují nejdůležitější zjištění z analýzy mikroprostředí, makroprostředí i konkurence. Rozhoduje obsah zjištění: vlastnost nebo schopnost firmy patří mezi silné či slabé stránky, okolnost v okolí mezi příležitosti či hrozby. To, co ve firmě nefunguje, je slabou stránkou, ne hrozbou; to, co funguje, je silnou stránkou, ne příležitostí.' },
            { t: 'p', html: '<strong>Pozor na subjektivitu.</strong> SWOT je jednoduchý nástroj, ale snadno ho ovlivní názor autora. Proto každá položka potřebuje oporu ve zjištěních.' }
          ]
        }
      ],
      summary: 'SWOT třídí podstatná zjištění, ne přání a seznam aktivit. Každá položka potřebuje oporu a význam pro konkrétní firmu.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Nejdřív otázka, potom data',
      short: 'Výzkumná otázka, primární a sekundární data, etapy',
      time: { main: 2 },
      steps: [
        {
          id: 's4-otazka',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[marketingovy_vyzkum|Marketingový výzkum]]</dfn> je systematické získávání a vyhodnocování informací pro konkrétní marketingové rozhodování. Začíná vyjasněním problému a otázky, na kterou potřebujeme odpověď.' },
            { t: 'mock', kind: 'occupancy', title: 'Obsazenost míst v kavárně Za rohem odpoledne', rows: [
              { label: 'Září', value: 82 },
              { label: 'Říjen', value: 71 },
              { label: 'Listopad', value: 58, strong: true }
            ] }
          ],
          tasks: ['m03-otazka']
        },
        {
          id: 's4-data',
          title: 'Primární × sekundární data',
          body: [
            { t: 'cards', items: [
              { kicker: 'Nově pro tuto otázku', term: 'primarni_data', id: 'k-primarni', title: 'Primární data', text: 'Nově získaná data pro řešení konkrétního výzkumného problému.' },
              { kicker: 'Už existují', term: 'sekundarni_data', id: 'k-sekundarni', title: 'Sekundární data', text: 'Již existující data využitá pro řešení výzkumného problému.' }
            ] }
          ],
          tasks: ['m03-data']
        },
        {
          id: 's4-etapy',
          title: 'Výzkum není jen rozeslání dotazníku',
          body: [
            { t: 'steps', items: [
              { title: 'Příprava', text: 'Určuje otázku, metodu, zkoumanou skupinu, čas a zdroje.' },
              { title: 'Realizace', text: 'Zahrnuje sběr, zpracování, analýzu a předání výsledků.' },
              { title: 'Hodnocení', text: 'Posuzuje, zda výzkum přinesl potřebné odpovědi.' }
            ] }
          ],
          tasks: ['m03-etapy'],
          more: [
            { t: 'p', html: '<strong>Podrobnější průběh.</strong> V přípravě se určuje výzkumná otázka, metoda, cílová skupina, časový harmonogram a zdroje. V realizaci se data sbírají a kódují, analyzují (často statistickými nástroji) a výsledky se shrnou v závěrečné zprávě. V hodnocení se posuzuje, zda výzkum splnil své cíle. Pokud nepřinesl potřebné informace, může být nutné ho zopakovat s jiným nastavením.' },
            { t: 'p', html: '<strong>Co se zkoumá.</strong> Výzkum se může týkat makroprostředí i firmy samotné, nejčastěji ale trhu (velikost, potenciál, skutečná spotřeba, tržní podíly) a jeho účastníků (chování, spokojenost, potřeby, vnímání).' },
            { t: 'p', html: '<strong>Marketingový informační systém</strong> sjednocuje postupy shromažďování, analýzy a vyhodnocování informací, aby firma mohla lépe plánovat, organizovat, řídit a kontrolovat marketingové činnosti.' },
            { t: 'p', html: '<strong>Dostupnost a vhodnost sekundárních dat.</strong> Sekundárními zdroji mohou být vlastní záznamy firmy, odborné studie, výzkumné zprávy, datové soubory nebo veřejně dostupné informace. Vždy je dobré posoudit, zda jsou dostatečně aktuální, spolehlivé a zda odpovídají naší otázce, protože vznikla pro jiný účel. Primární sběr může firma zajistit sama, s agenturou, nebo s využitím panelu respondentů, kteří souhlasili s účastí ve výzkumech.' }
          ]
        }
      ],
      summary: 'Nejdřív vyjasněte otázku a prověřte dostupná data. Nový sběr navrhujte podle toho, co skutečně potřebujete zjistit.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Kolik, proč — a jak to zjistit?',
      short: 'Kvantitativní a kvalitativní výzkum, metody, reprezentativnost',
      time: { main: 2.5 },
      steps: [
        {
          id: 's5-pristupy',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Rozsah a četnost', term: 'kvantitativni_vyzkum', id: 'k-kvanti', title: 'Kvantitativní výzkum', text: 'Výzkum zjišťující a analyzující číselně vyjádřitelné charakteristiky, četnosti a vztahy.' },
              { kicker: 'Význam a souvislosti', term: 'kvalitativni_vyzkum', id: 'k-kvali', title: 'Kvalitativní výzkum', text: 'Výzkum usilující o hlubší porozumění významům, zkušenostem a motivům.' }
            ] },
            { t: 'note', html: '<strong>Tvrdá × měkká data.</strong> Tvrdá data jsou objektivně měřitelná fakta (počet hostů, tržby, věk zákazníků). Měkká data vycházejí ze subjektivního vnímání respondentů (názory, postoje, spokojenost, dojmy).' },
            { t: 'mock', kind: 'brief', title: 'Co chce kavárna Za rohem zjistit', text: 'Majitelka si sepsala otázky. Některé začínají „kolik“, jiné „proč“ a „jak“.' }
          ],
          tasks: ['m03-pristup']
        },
        {
          id: 's5-metody',
          title: 'Metodu vybírejte podle otázky',
          body: [
            { t: 'cards', items: [
              { term: 'dotazovani', id: 'k-dotazovani', title: 'Dotazování', text: 'Získávání odpovědí na položené otázky.' },
              { term: 'pozorovani', id: 'k-pozorovani', title: 'Pozorování', text: 'Systematické sledování a zaznamenávání jevů nebo chování.' },
              { term: 'experiment', id: 'k-experiment', title: 'Experiment', text: 'Zkoumání účinku řízené změny při srovnání podmínek.' },
              { term: 'hloubkovy_rozhovor', id: 'k-rozhovor', title: 'Hloubkový rozhovor', text: 'Podrobné zkoumání zkušeností, významů a motivů prostřednictvím rozhovoru.' }
            ] },
            { t: 'p', html: 'Kvantitativní dotazování může být osobní, písemné (online, poštou) nebo telefonické. Hloubkový rozhovor, skupinová diskuse nebo případová studie (podrobné zkoumání jednoho či několika případů) patří ke kvalitativním přístupům.' },
            { t: 'note', html: 'Metoda a výzkumný přístup nejsou totéž. Například pozorování může zaznamenávat počty i podrobné průběhy chování.' }
          ],
          tasks: ['m03-metody']
        },
        {
          id: 's5-reprezentativnost',
          title: 'Hodně odpovědí není automaticky reprezentativní vzorek',
          body: [
            { t: 'p', html: '<dfn>[[reprezentativnost|Reprezentativnost]]</dfn> souvisí s tím, zda výběr a složení vzorku umožňují přiměřeně usuzovat na vymezenou populaci. Samotný počet odpovědí ji nezaručuje.' }
          ],
          tasks: ['m03-reprezentativnost'],
          more: [
            { t: 'p', html: '<strong>Focus group</strong> je moderovaná skupinová diskuse. Složení skupiny odpovídá zkoumané cílové skupině a kromě odpovědí na otázky ukazuje i to, jak se názory utvářejí ve skupině.' },
            { t: 'p', html: '<strong>Projektivní techniky</strong> se hodí, když respondent nechce nebo neumí odpovídat na přímé otázky: má třeba okomentovat mnohoznačný podnět, dokončit větu či příběh, přiřadit barvy nebo hrát roli.' },
            { t: 'p', html: '<strong>Mystery shopping</strong> je předem připravený skrytý nákup. Hodnotí přístup personálu, řešení problémových situací i atmosféru nákupu.' },
            { t: 'p', html: '<strong>Kombinace přístupů.</strong> V praxi se přístupy často kombinují: kvalitativní část pomůže pochopit souvislosti a připravit otázky, kvantitativní část ověří, jak často se jev vyskytuje.' },
            { t: 'p', html: '<strong>Výhody a omezení metod.</strong> Osobní dotazování umožní vysvětlit nejasnou otázku, ale je náročné na čas, lidi a peníze. Dotazování online, poštou nebo telefonem osloví mnoho lidí, často ale s nízkou návratností. Pozorování zachytí i to, co lidé neumějí nebo nechtějí říct, jejich motivy však přímo neodhalí. Hloubkový rozhovor může přinést neočekávaná zjištění, klade ale vysoké nároky na tazatele a ne vše z rozhovoru se dá využít.' }
          ]
        }
      ],
      summary: 'Nejdřív určete, co chcete zjistit, potom přístup, metodu a výběr zkoumaných lidí. Čísla sama nezaručují kvalitní závěr.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Marketingové prostředí',
    branches: [
      { block: 'b1', title: 'Prostředí', text: 'Marketingové prostředí tvoří vlivy, které působí na firmu. Mikroprostředí (podnik sám, lidé jako zákazníci, zaměstnanci a veřejnost, partneři jako dodavatelé a distributoři) firma může ovlivňovat, na makroprostředí jen reaguje; PESTLE ho třídí na politické, ekonomické, sociokulturní, technologické, legislativní a environmentální vlivy.', terms: ['situacni_analyza', 'mikroprostredi_podniku', 'makroprostredi', 'pestle'], relations: 'Zjištění o prostředí vstupují do SWOT.' },
      { block: 'b2', title: 'Konkurence', text: 'Porterův model pěti sil popisuje, co určuje intenzitu konkurence v odvětví: rivalita, noví konkurenti, substituty a vyjednávací síla dodavatelů a odběratelů. Konkurenci analyzujeme samostatně, nezařazujeme ji do mikro ani makroprostředí.', terms: ['porteruv_model', 'substitut'], relations: 'Konkurenci analyzujeme samostatně; její zjištění také vstupují do SWOT.' },
      { block: 'b3', title: 'SWOT', text: 'SWOT shrnuje silné a slabé stránky firmy a příležitosti a hrozby z jejího okolí. Silné a slabé stránky popisují firmu samotnou (vnitřní část mikroprostředí), příležitosti a hrozby přicházejí zvenku (makroprostředí, konkurence, zákazníci či dodavatelé). Pomůcka: existovalo by to, i kdyby naše firma nebyla? Pak jde o příležitost nebo hrozbu. Každá položka musí vycházet ze zjištění.', terms: ['swot'], relations: 'Kde zjištění chybějí, pomáhá výzkum.' },
      { block: 'b4', title: 'Výzkumný postup', text: 'Marketingový výzkum systematicky získává a vyhodnocuje informace pro rozhodování ve třech fázích: příprava, realizace a hodnocení. Primární data sbíráme nově, sekundární už existují.', terms: ['marketingovy_vyzkum', 'primarni_data', 'sekundarni_data'], relations: 'Výzkum doplňuje chybějící informace.' },
      { block: 'b5', title: 'Přístupy a metody', text: 'Kvantitativní výzkum měří, kolik a jak často (dotazování osobní, písemné, telefonické); kvalitativní zjišťuje proč a jak (hloubkový rozhovor, skupinová diskuse, případová studie). Tvrdá data jsou objektivně měřitelná fakta, měkká data subjektivní názory a postoje. Metodu volíme podle otázky a počet odpovědí sám nezaručuje reprezentativnost.', terms: ['kvantitativni_vyzkum', 'kvalitativni_vyzkum', 'dotazovani', 'pozorovani', 'experiment', 'hloubkovy_rozhovor', 'reprezentativnost'], relations: 'Přístup a metoda navazují na výzkumnou otázku.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace ze všech pěti částí. Výsledky uvidíte podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m03-z-prostredi', 'm03-z-substitut', 'm03-z-swot', 'm03-z-data', 'm03-z-skala', 'm03-z-pocet'],
    areas: [
      { id: 'prostredi', label: 'Mikroprostředí a makroprostředí', anchor: 'b1' },
      { id: 'konkurence', label: 'Konkurenční síly', anchor: 'b2' },
      { id: 'swot', label: 'SWOT', anchor: 'b3' },
      { id: 'data', label: 'Výzkumná data', anchor: 'b4' },
      { id: 'pristup', label: 'Přístup a vzorek', anchor: 'b5' }
    ]
  }
};
