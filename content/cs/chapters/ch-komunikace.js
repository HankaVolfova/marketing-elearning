// Kapitola 9: Marketingová komunikace – výukové texty (čeština).
// Celou kapitolou prochází jedno fiktivní lezecké centrum: ÚCHOP (úvodní lekce pro dospělé začátečníky,
// vedení instruktorem, zapůjčení vybavení, rezervace termínu předem).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku. Všechny situace, výroky a výsledky jsou fiktivní.

export default {
  id: 'ch-komunikace',
  title: 'Marketingová komunikace',
  headline: 'Viděli nás všichni. Pochopil nás někdo?',
  question: 'Jak dostat správné sdělení ke správným lidem a poznat, zda funguje?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'ÚCHOP provozuje lezeckou stěnu a zve na první lekci pro začátečníky. Příspěvek na sociálních sítích vidělo hodně lidí, rezervací je ale jen pár. Část komentářů se ptá, jestli je lekce opravdu i pro někoho, kdo nikdy nelezl.',
        'Tým navrhuje tři cesty: přidat rozpočet, aby příspěvek vidělo ještě víc lidí, použít výraznější obrázek a víc vykřičníků, nebo ověřit, koho oslovujeme, zda nabídce rozumí a jak se dostane k rezervaci. V kapitole uvidíš, co se může ztratit mezi tím, kdy sdělení někdo vidí, a tím, kdy podle něj jedná.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit úlohu marketingové komunikace a formulovat komunikační cíl podle situace cílové skupiny;',
      'použít AIDA jako pomůcku pro tvorbu a posouzení sdělení;',
      'popsat komunikační proces včetně kódování, dekódování, šumu a zpětné vazby;',
      'rozlišit reklamu, PR, podporu prodeje, osobní prodej, přímý marketing a sponzoring a odlišit nástroj od kanálu;',
      'vysvětlit integrovanou marketingovou komunikaci a soulad komunikace s nabídkou;',
      'rozlišit zobrazení, kliknutí, rezervace a návštěvy a nevyvozovat příčiny automaticky.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Nejdřív si řekni, co chceš změnit',
      short: 'Úloha komunikace, komunikační cíl, AIDA',
      time: { main: 2 },
      steps: [
        {
          id: 's1-komunikace',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Významy, vnímání, jednání', term: 'marketingova_komunikace', id: 'k-mk', title: 'Marketingová komunikace', text: 'Předávání významů a informací, které ovlivňuje vnímání nabídky a podporuje vztahy a jednání cílových skupin.' }
            ] },
            { t: 'p', html: 'Komunikace vychází z cílové skupiny, positioningu a skutečné nabídky. Může informovat, přesvědčovat, připomínat nebo posilovat vztahy. Nenahradí však službu, která nefunguje.' },
            { t: 'note', html: '<strong>Zdroj jedinečné konkurenční výhody.</strong> Konkurence může napodobit vlastnosti produktu, cenu i způsob prodeje. Originální způsob komunikace se ale napodobit nedá: kopie působí jako kopie a připomíná původní značku. Proto je marketingová komunikace považována za zdroj jedinečné [[konkurencni_vyhoda|konkurenční výhody]], a proto musí být provázaná s ostatními rozhodnutími firmy.' },
            { t: 'mock', kind: 'calc', title: 'Úvodní lekce ÚCHOP', rows: [
              { label: 'Pro koho', value: 'dospělí bez lezeckých zkušeností' },
              { label: 'Co obsahuje', value: 'vedení instruktorem, zapůjčení vybavení' },
              { label: 'Jak se přihlásit', value: 'rezervace termínu předem' }
            ] }
          ],
          tasks: ['m09-slib']
        },
        {
          id: 's1-cil',
          title: 'Cílová skupina a komunikační cíl',
          body: [
            { t: 'p', html: '<dfn>[[komunikacni_cil|Komunikační cíl]]</dfn> vyjadřuje, co chceme změnit ve znalostech, vnímání nebo jednání cílové skupiny. Zobrazení sdělení je prostředek; samo ještě neříká, zda lidé nabídce porozuměli.' }
          ],
          tasks: ['m09-cile']
        },
        {
          id: 's1-aida',
          title: 'AIDA jako práce se sdělením',
          body: [
            { t: 'p', html: '<dfn>[[aida|AIDA]]</dfn> pomáhá tvořit a posuzovat sdělení podle čtyř funkcí: upoutat pozornost, vzbudit zájem, vyvolat touhu a podnítit akci.' },
            { t: 'acronym', id: 'aida-prehled', items: [
              { letter: 'A', title: 'Attention', text: 'pozornost' },
              { letter: 'I', title: 'Interest', text: 'zájem' },
              { letter: 'D', title: 'Desire', text: 'touha' },
              { letter: 'A', title: 'Action', text: 'akce' }
            ] }
          ],
          tasks: ['m09-aida'],
          more: [
            { t: 'p', html: '<strong>Další komunikační cíle.</strong> Kromě informování, přesvědčování a připomínání může komunikace budovat image a postoj ke značce, posilovat vztah se stávajícími zákazníky, měnit mylné představy nebo podporovat obchodní partnery. Cíle mohou být ekonomické (prodej, rezervace) i mimoekonomické (povědomí, image, názor).' },
            { t: 'p', html: '<strong>Komunikace a positioning.</strong> Komunikace pozici vyjadřuje a pomáhá ji ukotvit v mysli zákazníků. ÚCHOP chce být vnímán jako bezpečné a přátelské místo pro první lezení; sdělení to musí podporovat a nabídka potvrdit.' },
            { t: 'p', html: 'Podrobnou tvorbu sdělení, kreativní techniky a plánování kampaní probírá samostatný předmět Marketingová komunikace.' }
          ]
        }
      ],
      summary: 'Začni cílovou skupinou a změnou, které chceš dosáhnout. AIDA pomáhá promyslet funkce sdělení.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Odesláno neznamená pochopeno',
      short: 'Komunikační proces, šum, zpětná vazba',
      time: { main: 2 },
      steps: [
        {
          id: 's2-proces',
          lead: true,
          body: [
            { t: 'p', html: 'V <dfn>[[komunikacni_proces|komunikačním procesu]]</dfn> odesílatel převádí zamýšlený význam do sdělení a předává ho kanálem příjemci. Příjemce sdělení interpretuje. Jeho pochopení se může od záměru odesílatele lišit.' },
            { t: 'p', html: 'Průběh procesu zachycuje <dfn>[[komunikacni_schema|komunikační schéma]]</dfn>: model, který ukazuje prvky komunikace a vztahy mezi nimi. Tvoří ho <strong>subjekt</strong> (odesílatel, tvůrce sdělení), <strong>objekt</strong> (příjemce), <strong>sdělení</strong> (zpráva, kterou doručujeme), kódování a dekódování, kanál, zpětná vazba a <strong>šum</strong> (narušení procesu).' },
            { t: 'chain', id: 'proces-schema', caption: 'Komunikační schéma', rows: [
              { label: 'Cesta sdělení', nodes: ['Odesílatel', 'Kódování', 'Sdělení a kanál', 'Dekódování', 'Příjemce'] },
              { label: 'Zpětná vazba', nodes: ['Příjemce', 'Odesílatel'] },
              { label: 'Šum', nodes: ['Může narušit kterýkoli krok'] }
            ] },
            { t: 'list', items: [
              '<strong>[[kodovani|Kódování]]:</strong> převod významu do slov, obrazů a dalších znaků.',
              '<strong>[[dekodovani|Dekódování]]:</strong> interpretace sdělení příjemcem.',
              '<strong>[[komunikacni_kanal|Kanál]]:</strong> cesta, kterou se sdělení dostává k příjemci.',
              '<strong>[[komunikacni_sum|Šum]]:</strong> vliv, který narušuje přenos nebo pochopení.',
              '<strong>[[zpetna_vazba|Zpětná vazba]]:</strong> reakce příjemce vracející se k odesílateli.'
            ] }
          ],
          tasks: ['m09-role']
        },
        {
          id: 's2-slang',
          title: 'Slang může být překážkou',
          body: [
            { t: 'mock', kind: 'offers', title: 'Dvě varianty stejné pozvánky ÚCHOP', items: [
              { name: 'Varianta A', text: '„Pošli první top na bouldru. Lezečky s sebou.“' },
              { name: 'Varianta B', text: '„Vyzkoušej si lezení při úvodní lekci pro začátečníky. Potřebné vybavení ti zapůjčíme.“' }
            ] }
          ],
          tasks: ['m09-slang']
        },
        {
          id: 's2-zpetna',
          title: 'Zpětná vazba něco říká',
          body: [
            { t: 'mock', kind: 'memo', quotes: true, title: 'Komentáře pod pozvánkou', notes: [
              { label: 'Dotaz', text: 'Je lekce vhodná i bez zkušeností?' },
              { label: 'Dotaz', text: 'Můžu přijít, i když jsem nikdy nelezl?' }
            ] }
          ],
          tasks: ['m09-dotaz'],
          more: [
            { t: 'p', html: '<strong>Jazykové a kulturní rozdíly.</strong> Stejné slovo, obraz nebo gesto mohou různí lidé chápat různě. Odborný slang, zkratky nebo humor, kterému rozumí jen „zasvěcení“, mohou začátečníky odradit.' },
            { t: 'p', html: '<strong>Důvěryhodnost odesílatele.</strong> Na tom, kdo sdělení posílá, záleží: zkušenost instruktora nebo doporučení známého může zvýšit důvěru, nesoulad mezi slibem a zkušeností ji naopak oslabí.' },
            { t: 'p', html: '<strong>Druhy šumů.</strong> Technické (sdělení se nezobrazí, špatný zvuk), sémantické (nesrozumitelný jazyk), psychologické (příjemce je zahlcen, nemá zájem) nebo situační (sdělení přijde v nevhodnou chvíli). Nevhodně načasované sdělení může vyznít až necitlivě, i když bylo připravené s dobrým úmyslem.' },
            { t: 'p', html: '<strong>Příklad z praxe: Adidas, 2017.</strong> Den po bostonském maratonu rozeslala firma účastníkům e-mail s předmětem „Congrats, you survived the Boston Marathon!“. Běžná sportovní gratulace se ale potkala s kontextem: na stejném závodě v roce 2013 zabily dva výbuchy u cíle tři lidi a stovky dalších zranily. Lidé slovo „survived“ dekódovali jako narážku na útok, kritika na sociálních sítích byla okamžitá a firma se ještě týž den veřejně omluvila, že předmětu e-mailu nikdo nevěnoval dostatečnou pozornost. Sdělení samo o sobě nebylo zlé; selhalo to, jak ho příjemci v daném kontextu pochopili.' }
          ]
        }
      ],
      summary: 'Úspěch komunikace závisí také na tom, jak příjemce sdělení vyloží. Zpětná vazba pomáhá odhalit nejasnosti.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Komunikační mix',
      short: 'Nástroje komunikačního mixu, push a pull',
      time: { main: 3.5 },
      steps: [
        {
          id: 's3-mix',
          title: 'Komunikační mix',
          lead: true,
          body: [
            { t: 'p', html: 'Jak ale sdělení k cílové skupině dostat? K tomu slouží <dfn>[[komunikacni_mix|komunikační mix]]</dfn>: soubor nástrojů marketingové komunikace, které firma kombinuje, aby dosáhla svých komunikačních cílů. Je to rozpracování čtvrtého P marketingového mixu (Promotion) z kapitoly 4.' },
            { t: 'p', html: 'Každý nástroj umí něco jiného: jeden osloví mnoho lidí najednou, jiný buduje důvěru, další přiměje k rychlé reakci. Proto firma nevolí „nejlepší nástroj“, ale kombinaci, která odpovídá cíli, publiku, nabídce a rozpočtu. Základní komunikační mix tvoří šest nástrojů:' },
            { t: 'cards', items: [
              { kicker: 'Placená prezentace', term: 'reklama', id: 'k-reklama', title: 'Reklama', text: 'Placená neosobní prezentace nabídky nebo myšlenek identifikovaného zadavatele.', example: 'ÚCHOP: placená pozvánka na úvodní lekci na sociální síti.', plus: 'Osloví mnoho lidí a buduje povědomí.', minus: 'Lidé jí věří méně a snadno ji přehlédnou.' },
              { kicker: 'Vztahy a reputace', term: 'pr', id: 'k-pr', title: 'Public relations (PR)', text: 'Činnosti zaměřené na vztahy, důvěru a reputaci organizace u relevantních skupin veřejnosti.', example: 'ÚCHOP: setkání se sousedy centra, informace pro místní média.', plus: 'Buduje důvěru a reputaci dlouhodobě.', minus: 'Výsledky přicházejí pomaleji; o zveřejnění v médiích firma nerozhoduje.' },
              { kicker: 'Pobídka', term: 'podpora_prodeje', id: 'k-podpora', title: 'Podpora prodeje', text: 'Krátkodobé pobídky podporující vyzkoušení nebo nákup nabídky: slevy, kupony, vzorky, soutěže. Patří sem i materiály v místě nákupu a prodeje (POP/POS): stojany, poutače, wobblery na regálu, displeje u pokladny.', example: 'ÚCHOP: zvýhodněná první lekce do konce měsíce.', plus: 'Přináší rychlou reakci.', minus: 'Častým používáním oslabuje vnímanou hodnotu.' },
              { kicker: 'Rozhovor', term: 'osobni_prodej', id: 'k-osobni', title: 'Osobní prodej', text: 'Přímá komunikace se zájemcem s cílem představit nabídku a podpořit rozhodnutí o koupi.', example: 'ÚCHOP: instruktor se zájemcem vybere vhodný kurz.', plus: 'Umí reagovat na konkrétního člověka a jeho otázky.', minus: 'Je náročný na čas a lidi, osloví málo zájemců.' },
              { kicker: 'Adresně', term: 'primy_marketing', id: 'k-primy', title: 'Přímý marketing', text: 'Adresná komunikace zaměřená na konkrétní příjemce a jejich reakci.', example: 'ÚCHOP: e-mail dosavadním zájemcům s nabídkou termínů.', plus: 'Je adresný a dobře měřitelný.', minus: 'Potřebuje kvalitní a oprávněně získané kontakty.' },
              { kicker: 'Partnerství', term: 'sponzoring', id: 'k-sponzoring', title: 'Sponzoring', text: 'Podpora subjektu nebo aktivity spojená s dohodnutým komunikačním přínosem pro sponzora. Na rozdíl od mecenášství, které je nezištné, očekává sponzor protislužbu.', example: 'ÚCHOP: podpora místních lezeckých závodů mládeže.', plus: 'Spojí značku s akcí nebo komunitou, kterou lidé mají rádi.', minus: 'Efekt se obtížně měří.' }
            ] },
            { t: 'note', html: '<strong>Prostředí není nástroj.</strong> Sociální síť, web nebo veletrh jsou prostředí, ve kterém mohou fungovat různé nástroje. Placený příspěvek na sociální síti je reklama, odpověď na dotaz pod ním může být PR. Na veletrhu se často potká více nástrojů najednou.' },
            { t: 'p', html: '<strong>Nové formy komunikace.</strong> <em>Virální marketing</em>: obsah, který lidé sami sdílejí dál. <em>Guerilla marketing</em>: nečekaná, nápaditá akce s menším rozpočtem. <em>Product placement</em>: umístění produktu do filmu, pořadu nebo videa. Dále například influencer marketing nebo event marketing.' }
          ],
          tasks: ['m09-reklama-pr', 'm09-nastroje', 'm09-prostredi'],
          more: [
            { t: 'p', html: '<strong>Veletrhy a výstavy na příkladu ÚCHOPU.</strong> Na sportovním veletrhu by centrum mohlo postavit malou lezeckou stěnu, nechat návštěvníky vyzkoušet první kroky s instruktorem (osobní kontakt), rozdávat poukazy na zvýhodněnou první lekci (podpora prodeje) a sbírat kontakty zájemců se souhlasem (přímý marketing).' },
            { t: 'p', html: 'Nástroje se často dělí na osobní a neosobní, hranice ale nejsou ostré: například přímý marketing může být adresný a zároveň zprostředkovaný e-mailem. Podrobné plánování a realizaci jednotlivých nástrojů probírá předmět Marketingová komunikace.' }
          ]
        },
        {
          id: 's3-push-pull',
          title: 'Push a pull: komu komunikaci směrujeme',
          body: [
            { t: 'p', html: 'Když se nabídka k zákazníkovi dostává přes obchodníky, musí firma rozhodnout, na koho komunikaci hlavně zaměří. Podle toho rozlišujeme dvě komunikační strategie:' },
            { t: 'cards', items: [
              { kicker: 'Tlačit nabídku k zákazníkovi', term: 'push_strategie', id: 'k-push', title: 'Strategie push', text: 'Firma komunikuje hlavně s obchodními partnery (školení, obchodní podmínky, odměny za prodej). Partneři pak nabídku „tlačí“ dál k zákazníkům.', example: 'Výrobce lezeckých bot školí prodavače a dává obchodům bonus za prodej.' },
              { kicker: 'Přitáhnout zákazníka k nabídce', term: 'pull_strategie', id: 'k-pull', title: 'Strategie pull', text: 'Firma oslovuje přímo konečné zákazníky (hlavně reklamou a podporou prodeje). Zákazníci pak nabídku u obchodníků sami žádají a „vytahují“ ji.', example: 'Výrobce natočí s lezci videa a zákazníci se na boty v obchodě sami ptají.' }
            ] },
            { t: 'chain', id: 'push-pull-schema', rows: [
              { label: 'Push', nodes: ['Výrobce', 'Obchodník', 'Zákazník'] },
              { label: 'Pull', nodes: ['Výrobce', 'Zákazník', 'Poptává u obchodníka'] }
            ] },
            { t: 'p', html: 'Firmy obě strategie obvykle kombinují. Rozhoduje, kdo má větší vliv na nákup: obchodník, který zákazníkovi radí, nebo zákazník, který už ví, co chce.' }
          ],
          tasks: ['m09-push-pull']
        }
      ],
      summary: 'Komunikační mix je kombinace nástrojů, kterými firma dosahuje komunikačních cílů. Každý nástroj má jiné silné stránky a omezení. Strategie push míří na obchodní partnery, strategie pull na konečné zákazníky.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Jeden slib napříč kontakty',
      short: 'Integrovaná marketingová komunikace',
      time: { main: 1.5 },
      steps: [
        {
          id: 's4-imk',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Koordinace', term: 'imk', id: 'k-imk', title: 'Integrovaná marketingová komunikace', text: 'Koordinované používání komunikačních nástrojů a sdělení tak, aby společně podporovaly srozumitelný a konzistentní obraz nabídky a značky.' }
            ] },
            { t: 'p', html: 'Konzistence neznamená stejný text všude. Podstatné informace a slib musí držet pohromadě, i když se způsob podání přizpůsobí situaci.' },
            { t: 'mock', kind: 'memo', title: 'Modelová situace: co zájemce slyší na různých místech', notes: [
              { label: 'Reklama', text: 'Úvodní lekce bez zkušeností, vybavení zapůjčíme.' },
              { label: 'Web', text: 'Kurz pro pokročilé, vlastní vybavení nutné.' },
              { label: 'Recepce', text: 'Nevíme, co nabídka zahrnuje.' }
            ] }
          ],
          tasks: ['m09-rozpory']
        },
        {
          id: 's4-mix',
          title: 'Komunikace musí odpovídat mixu',
          body: [],
          tasks: ['m09-rezervace'],
          more: [
            { t: 'p', html: '<strong>Role zaměstnanců.</strong> Komunikují nejen reklama a web, ale i recepce, instruktoři nebo telefonní linka. Proto potřebují vědět, co centrum slibuje, a mít aktuální informace o nabídce, cenách a termínech.' },
            { t: 'p', html: '<strong>Přínosy a nároky koordinace.</strong> Jednotná sdělení se lépe pamatují, posilují důvěru a nástroje se navzájem podporují. Koordinace ale vyžaduje plánování, sdílení informací mezi odděleními a partnery a někoho, kdo za celek odpovídá.' },
            { t: 'p', html: 'Plánování integrovaných kampaní podrobně probírá předmět Marketingová komunikace.' }
          ]
        }
      ],
      summary: 'Sdělení mají být koordinovaná a podpořená skutečným fungováním nabídky. Stejná barva a logo samy integraci nezajistí.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Co se skutečně změnilo?',
      short: 'Zobrazení, kliknutí, rezervace; příčiny; férovost',
      time: { main: 2 },
      steps: [
        {
          id: 's5-vysledky',
          lead: true,
          body: [
            { t: 'p', html: 'Vyhodnocení musí odpovídat cíli. Počet zobrazení říká něco jiného než kliknutí, rezervace nebo skutečná návštěva. Samotné zobrazení nepotvrzuje porozumění ani změnu postoje.' },
            { t: 'mock', kind: 'calc', title: 'Přehled kampaně ÚCHOP za dva týdny', rows: [
              { label: 'Zobrazení', value: '12 000' },
              { label: 'Kliknutí na stránku', value: '180' },
              { label: 'Dokončené rezervace', value: '12' }
            ] }
          ],
          tasks: ['m09-metriky']
        },
        {
          id: 's5-pricina',
          title: 'Čísla sama neřeknou příčinu',
          body: [],
          tasks: ['m09-pricina']
        },
        {
          id: 's5-ferovost',
          title: 'Srozumitelně a odpovědně',
          body: [],
          tasks: ['m09-zdarma'],
          more: [
            { t: 'p', html: '<strong>Krátkodobé a dlouhodobé účinky.</strong> Některé aktivity mají přinést rychlou reakci (rezervace tento týden), jiné působí dlouhodobě (povědomí, důvěra, image). Hodnotit je stejným měřítkem ve stejném čase by bylo zavádějící.' },
            { t: 'p', html: '<strong>Jak zjistit porozumění.</strong> Pomůže sledovat dotazy a komentáře, krátce se zeptat nových zájemců, co od lekce čekají, nebo vyzkoušet text na několika lidech z cílové skupiny ještě před zveřejněním.' },
            { t: 'p', html: '<strong>Etika komunikace.</strong> Férová komunikace nezamlčuje podstatné podmínky, nezveličuje přínosy a nevytváří falešný dojem, například uměle vytvořeným zájmem nebo nepravdivými recenzemi. Jde i o dlouhodobou důvěru ke značce.' },
            { t: 'p', html: 'Podrobné měření a optimalizaci kampaní probírá předmět Marketingová komunikace.' }
          ]
        }
      ],
      summary: 'Vyhodnocuj to, co odpovídá cíli, a ověřuj příčiny výsledku. Srozumitelný slib musí odpovídat skutečným podmínkám.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Marketingová komunikace',
    branches: [
      { block: 'b1', title: 'Cíl a sdělení', text: 'Marketingová komunikace předává významy a informace, které ovlivňují vnímání nabídky a jednání cílových skupin. Vychází z komunikačního cíle; AIDA (pozornost, zájem, touha, akce) pomáhá sdělení tvořit. Originální komunikaci nelze napodobit, proto je zdrojem jedinečné konkurenční výhody.', terms: ['marketingova_komunikace', 'komunikacni_cil', 'aida', 'konkurencni_vyhoda'], relations: 'Sdělení musí příjemce také pochopit.' },
      { block: 'b2', title: 'Komunikační proces', text: 'Komunikační schéma zachycuje prvky procesu: subjekt (odesílatel) převede význam do sdělení (kódování), pošle ho kanálem a objekt (příjemce) ho vyloží (dekódování); šum může přenos narušit a zpětná vazba ukazuje, jak sdělení dorazilo. Příjemce proto nemusí pochopit totéž, co odesílatel zamýšlel.', terms: ['komunikacni_proces', 'komunikacni_schema', 'kodovani', 'dekodovani', 'komunikacni_kanal', 'komunikacni_sum', 'zpetna_vazba'], relations: 'Kanál a nástroj volíme podle cíle.' },
      { block: 'b3', title: 'Komunikační mix', text: 'Komunikační mix je kombinace nástrojů pro dosažení komunikačních cílů: reklama, PR, podpora prodeje (včetně materiálů POP/POS), osobní prodej, přímý marketing a sponzoring (na rozdíl od mecenášství s protislužbou); každý má jiné výhody a omezení. Kanál, například sociální síť, není nástroj. K novým formám patří virální a guerilla marketing nebo product placement. Push míří na obchodní partnery, pull na konečné zákazníky.', terms: ['komunikacni_mix', 'reklama', 'pr', 'podpora_prodeje', 'osobni_prodej', 'primy_marketing', 'sponzoring', 'push_strategie', 'pull_strategie'], relations: 'Nástroje je potřeba koordinovat.' },
      { block: 'b4', title: 'Integrace', text: 'Integrovaná marketingová komunikace koordinuje nástroje a sdělení tak, aby společně vytvářely konzistentní obraz nabídky. Podstatné informace musí být všude stejné a odpovídat skutečné nabídce.', terms: ['imk'], relations: 'Výsledky ukážou, zda komunikace funguje.' },
      { block: 'b5', title: 'Výsledek a odpovědnost', text: 'Komunikaci vyhodnocujeme podle cíle: zobrazení, kliknutí, rezervace a návštěvy jsou různé ukazatele. Sdělení musí být přesné a férové.', terms: ['komunikacni_cil', 'zpetna_vazba'], relations: 'Zjištění vedou k úpravě cíle, sdělení nebo nabídky.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace z ÚCHOPU ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m09-z-cil', 'm09-z-aida', 'm09-z-proces', 'm09-z-nastroje', 'm09-z-integrace', 'm09-z-zobrazeni'],
    areas: [
      { id: 'cil', label: 'Cíl a sdělení', anchor: 'b1' },
      { id: 'proces', label: 'Komunikační proces', anchor: 'b2' },
      { id: 'nastroje', label: 'Nástroje', anchor: 'b3' },
      { id: 'integrace', label: 'Integrace', anchor: 'b4' },
      { id: 'vyhodnoceni', label: 'Vyhodnocení', anchor: 'b5' }
    ]
  }
};
