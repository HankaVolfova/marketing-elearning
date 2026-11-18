// Kapitola 6: Značka v marketingové strategii – výukové texty (čeština).
// Celou kapitolou prochází jedna fiktivní značka sluchátek: KLID.
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny situace, výroky, výsledky i konkurenční nabídky jsou fiktivní.

export default {
  id: 'ch-znacka',
  title: 'Značka v marketingové strategii',
  headline: 'Logo poznáte. Ale čemu vlastně věříte?',
  question: 'Co vytváří značku a proč může ovlivnit naši volbu?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'KLID vyrábí sluchátka a chystá novou řadu pro studium a práci v hlučném prostředí. Technicky si s konkurencí nezadá, jenže zákazníci si název značky nepamatují a v obchodě sáhnou po té, kterou znají.',
        'Na poradě zazní tři návrhy: navrhnout výraznější logo a nový obal, investovat do toho, aby název vidělo co nejvíc lidí, nebo ujasnit, co značka slibuje, a sladit s tím produkt, komunikaci i zákaznickou zkušenost. V kapitole uvidíte, co pomáhá značku poznat a co jí pomáhá věřit.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit značku a odlišit ji od loga; popsat přínosy značky pro zákazníka a firmu;',
      'rozpoznat identifikátory značky a vysvětlit význam jejich konzistentního používání;',
      'rozlišit spontánní vybavení a rozpoznání značky, asociaci a heuristiku;',
      'vysvětlit vnímanou kvalitu a odlišit opakovaný nákup, preferenci a ochotu doporučit;'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Značka není jen logo',
      short: 'Značka, její přínosy',
      time: { main: 1.5 },
      steps: [
        {
          id: 's1-znacka',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Identifikuje a odlišuje', term: 'znacka', id: 'k-znacka', title: 'Značka', text: 'Identifikuje a odlišuje nabídku prostřednictvím názvu, symbolů a dalších prvků a spojuje ji s určitými významy a očekáváními.' }
            ] },
            { t: 'mock', kind: 'brandpage', variant: 'a', title: 'Produktová stránka sluchátek KLID', product: 'KLID Fokus', slogan: 'Prostor pro tvůj poslech.', features: ['Potlačení okolního hluku', 'Jednoduché ovládání jedním tlačítkem', 'Výdrž na celý pracovní den'] }
          ],
          tasks: ['m06-logo']
        },
        {
          id: 's1-prinosy',
          title: 'Co značka usnadňuje?',
          body: [
            { t: 'p', html: 'Značka pomáhá zákazníkovi rozpoznat nabídku, spojit ji s předchozí zkušeností a zjednodušit výběr. Firmě pomáhá odlišit se a budovat preference.' },
            { t: 'note', html: '<strong>Značka je aktivem podniku.</strong> Je to nehmotný majetek: firma ji může chránit (ochranná známka), rozvíjet, licencovat i prodat a silná značka jí přináší hodnotu.' }
          ],
          tasks: ['m06-prinosy'],
          more: [
            { t: 'p', html: '<strong>Produkt a značka.</strong> Produkt je to, co zákazník kupuje a používá; značka mu dává jméno, rozpoznatelnou podobu a význam. Značka může ovlivnit vnímání všech dimenzí produktu, od jádra po rozšířený produkt.' },
            { t: 'p', html: '<strong>Značka jako zkratka.</strong> Když zákazník značku zná a má s ní dobrou zkušenost, nemusí pokaždé znovu porovnávat všechny nabídky. To mu šetří čas, ale zkratka nemusí vždy vést k nejlepší volbě.' },
            { t: 'p', html: '<strong>Další role podle opory.</strong> Pro firmu je značka prostředkem identifikace, právní ochrany, zdrojem konkurenční výhody a finanční návratnosti. Pro zákazníka pomáhá identifikaci, orientaci a snižuje vnímané riziko nákupu.' },
            { t: 'p', html: '<strong>Právní ochrana.</strong> Značku lze chránit registrací jako ochrannou známku; tím firma získá výlučné právo ji pro dané výrobky či služby používat.' }
          ]
        }
      ],
      summary: 'Značka pomáhá nabídku poznat a přisoudit jí význam. Logo je jedním z jejích prvků, nikoli celou značkou.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Podle čeho ji poznáte?',
      short: 'Identifikátory značky',
      time: { main: 1.5 },
      steps: [
        {
          id: 's2-identifikatory',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[identifikatory_znacky|Identifikátory]]</dfn> jsou prvky, podle kterých zákazníci značku rozpoznávají. Patří mezi ně název, [[logo|logo]], barvy, [[slogan|slogan]] nebo zvukový prvek ([[jingle|jingle]]).' },
            { t: 'mock', kind: 'brandkit', title: 'Sada identifikátorů KLID', name: 'KLID', slogan: 'Prostor pro tvůj poslech.',
              colors: [{ name: 'Grafit', hex: '#23262B' }, { name: 'Písek', hex: '#D9C3A5' }, { name: 'Mlha', hex: '#E9ECEF' }],
              sound: 'Tři tiché stoupající tóny, které se na konci ztiší.' }
          ],
          tasks: ['m06-identifikatory']
        },
        {
          id: 's2-jednotnost',
          title: 'Jednotnost pomáhá rozpoznání',
          body: [
            { t: 'mock', kind: 'brandpair', title: 'Dva návrhy produktové stránky KLID se stejným textem' }
          ],
          tasks: ['m06-jednotnost'],
          more: [
            { t: 'p', html: '<strong>Dobrý název</strong> bývá zapamatovatelný, smysluplný (naznačuje přínos nebo charakter nabídky) a snadno vyslovitelný. Myslet je třeba i na <strong>přenositelnost</strong>: jak název zní a co znamená v jiných jazycích a zemích, nebo zda se hodí i pro další produkty.' },
            { t: 'p', html: '<strong>Slogan, jingle a maskot.</strong> Slogan je krátká fráze, kterou si zákazník se značkou spojí. Jingle je krátká melodie, která může fungovat i samostatně. Identifikátorem může být také maskot, tedy postava spojená se značkou.' },
            { t: 'p', html: '<strong>Změny vizuální podoby.</strong> Značky svou podobu čas od času upravují, třeba zjednodušením loga pro malé obrazovky. Změna obvykle navazuje na dosavadní prvky, aby zákazníci značku dál poznali.' }
          ]
        }
      ],
      summary: 'Prvky značky mají fungovat společně. Rozpoznatelnost podporuje jejich konzistentní používání.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Co se vám vybaví?',
      short: 'Povědomí, asociace, heuristika',
      time: { main: 2.5 },
      steps: [
        {
          id: 's3-povedomi',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[povedomi_o_znacce|Povědomí o značce]]</dfn> vyjadřuje, zda ji zákazníci znají. Spontánně vybavenou značku člověk uvede bez nabídky názvů; při rozpoznání ji pozná po předložení názvu nebo jiného prvku.' },
            { t: 'cards', items: [
              { kicker: 'Bez nápovědy', term: 'spontanni_vybaveni', id: 'k-spontanni', title: 'Spontánní vybavení', text: 'Vybavení značky bez předložení jejího názvu nebo identifikátoru.' },
              { kicker: 'S předloženým prvkem', term: 'rozpoznani_znacky', id: 'k-rozpoznani', title: 'Rozpoznání', text: 'Poznání značky po předložení jejího názvu nebo jiného identifikátoru.' }
            ] }
          ],
          tasks: ['m06-povedomi']
        },
        {
          id: 's3-asociace',
          title: 'Asociace nejsou automaticky fakta',
          body: [
            { t: 'cards', items: [
              { kicker: 'Co si se značkou spojuji', term: 'asociace_se_znackou', id: 'k-asociace', title: 'Asociace se značkou', text: 'Významy, představy a zkušenosti, které si zákazník se značkou spojuje.' }
            ] },
            { t: 'mock', kind: 'memo', quotes: true, title: 'Výroky zákazníků z rozhovorů', notes: [
              { label: '1', text: 'KLID si spojuji se soustředěním.' },
              { label: '2', text: 'Působí na mě draze.' },
              { label: '3', text: 'Vybaví se mi jednoduché ovládání.' }
            ] }
          ],
          tasks: ['m06-draze']
        },
        {
          id: 's3-heuristika',
          title: 'Asociace × heuristika',
          body: [
            { t: 'cards', items: [
              { kicker: 'Spojení v paměti', term: 'asociace_se_znackou', title: 'Asociace', text: 'Významy, představy a zkušenosti, které si zákazník se značkou spojuje.', example: '„S KLIDEM si spojuji soustředění.“' },
              { kicker: 'Zkratka při rozhodování', term: 'heuristika', id: 'k-heuristika', title: 'Heuristika', text: 'Zjednodušující pravidlo používané při rozhodování.', example: '„Značku znám, proto předpokládám bezpečnější volbu.“' }
            ] }
          ],
          tasks: ['m06-heuristika'],
          more: [
            { t: 'p', html: '<strong>Jak se povědomí a asociace zjišťují.</strong> Spontánní vybavení otázkou bez nápovědy („Jaké značky sluchátek tě napadnou?“), rozpoznání předložením názvu nebo loga. Asociace například otázkou „Co se ti vybaví, když se řekne KLID?“, doplňováním slov nebo přiřazováním vlastností. Různé způsoby měření dávají různé výsledky, proto je dobré vědět, jak bylo povědomí zjištěno.' },
            { t: 'p', html: '<strong>Pozitivní i negativní asociace.</strong> Se značkou se mohou spojovat příjemné významy (soustředění, jednoduchost) i nepříjemné (nespolehlivost, složitá reklamace). Firma je ovlivňuje nabídkou, zkušeností i komunikací, ale nemá je plně pod kontrolou.' },
            { t: 'p', html: '<strong>Osobnost značky</strong> jsou lidské vlastnosti, které zákazníci značce připisují. Pro KLID to může být klidná, spolehlivá a nenápadná; jiná značka může být hravá nebo odvážná. Neexistuje jedna osobnost, která by se hodila všem značkám.' }
          ]
        }
      ],
      summary: 'Povědomí říká, zda značku známe. Asociace ukazují, co pro nás znamená; heuristika je způsob, jak si usnadňujeme rozhodnutí.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Slib musí přežít používání',
      short: 'Vnímaná kvalita, loajalita, doporučení',
      time: { main: 2 },
      steps: [
        {
          id: 's4-kvalita',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Jak kvalitu hodnotí zákazník', term: 'vnimana_kvalita', id: 'k-kvalita', title: 'Vnímaná kvalita', text: 'Zákazníkovo hodnocení kvality nabídky, které nemusí přesně odpovídat jejím skutečným vlastnostem.' }
            ] },
            { t: 'mock', kind: 'memo', title: 'Záznam zkušenosti zákazníka se sluchátky KLID', notes: [
              { label: 'Obal', text: 'Působí luxusně, krásně se otevírá.' },
              { label: 'Používání', text: 'Sluchátka se opakovaně odpojují od telefonu.' },
              { label: 'Podpora', text: 'Na dva dotazy nikdo neodpověděl.' }
            ] }
          ],
          tasks: ['m06-duvera']
        },
        {
          id: 's4-loajalita',
          title: 'Opakovaný nákup není vždy loajalita',
          body: [
            { t: 'p', html: '<dfn>[[loajalita|Loajalita ke značce]]</dfn> zahrnuje vztah a preferenci značky. Samotný opakovaný nákup nemusí tento vztah dokazovat: člověk může nakupovat také ze zvyku nebo kvůli omezenému výběru.' }
          ],
          tasks: ['m06-preference']
        },
        {
          id: 's4-doporuceni',
          title: 'Doporučení',
          body: [
            { t: 'p', html: '<dfn>[[ochota_doporucit|Ochota doporučit]]</dfn> značku může vypovídat o vztahu zákazníka a podporovat její šíření. Není však automaticky totéž jako skutečné doporučení nebo další nákup.' }
          ],
          tasks: ['m06-doporuceni'],
          more: [
            { t: 'p', html: '<strong>Podpora a používání.</strong> Zkušenost se značkou nevzniká jen při nákupu. Rychlá a ochotná zákaznická podpora může důvěru posílit i ve chvíli, kdy se něco pokazí; nereagující podpora ji naopak oslabí.' },
            { t: 'p', html: '<strong>Kladné i záporné doporučení.</strong> Zákazníci sdílejí dobré i špatné zkušenosti, osobně i v recenzích. Špatná zkušenost se může šířit stejně jako dobrá, a proto má firma zájem problémy řešit rychle.' },
            { t: 'p', html: '<strong>Co lidé říkají × co dělají.</strong> V dotazníku zákazník vyjadřuje postoj nebo záměr. Skutečné chování (nákup, doporučení) se může lišit, a proto se zjišťuje zvlášť, například z prodejních dat nebo z toho, odkud noví zákazníci přišli.' }
          ]
        }
      ],
      summary: 'Zkušenost může potvrdit nebo oslabit očekávání. Opakovaný nákup, preference a ochota doporučit spolu souvisejí, ale nejsou zaměnitelné.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Značka v marketingové strategii',
    branches: [
      { block: 'b1', title: 'Značka a její role', text: 'Značka identifikuje a odlišuje nabídku a spojuje ji s významy. Pomáhá orientaci zákazníka i budování preference a pro firmu je nehmotným aktivem, které lze chránit, rozvíjet i prodat.', terms: ['znacka'], relations: 'Značku tvoří rozpoznatelné prvky.' },
      { block: 'b2', title: 'Identifikátory', text: 'Název, logo, barvy, slogan a zvuk pomáhají rozpoznání. Jejich konzistentní používání propojuje různá setkání se značkou.', terms: ['identifikatory_znacky', 'logo', 'slogan', 'jingle'], relations: 'Identifikátory pomáhají povědomí o značce.' },
      { block: 'b3', title: 'Povědomí a asociace', text: 'Povědomí o značce říká, zda ji lidé znají (spontánně si ji vybaví, nebo ji rozpoznají); asociace, co si s ní spojují. Osobnost značky jsou lidské vlastnosti, které jí zákazníci připisují. Heuristika je zjednodušující pravidlo rozhodování, které nemusí vést ke správnému závěru.', terms: ['povedomi_o_znacce', 'spontanni_vybaveni', 'rozpoznani_znacky', 'asociace_se_znackou', 'heuristika'], relations: 'Asociace ovlivňují očekávání, která prověří zkušenost.' },
      { block: 'b4', title: 'Zkušenost a vztah', text: 'Vnímaná kvalita a důvěra vznikají ze zkušenosti se značkou. Loajalita (přednost i mezi alternativami) není totéž co opakovaný nákup nebo ochota doporučit.', terms: ['vnimana_kvalita', 'loajalita', 'ochota_doporucit'], relations: 'Zkušenost zpětně ovlivňuje povědomí a asociace: potvrdí, nebo oslabí, co značka slibuje.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace ze světa KLIDU ze všech pěti částí. Výsledky uvidíte podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m06-z-role', 'm06-z-identifikatory', 'm06-z-povedomi', 'm06-z-loajalita'],
    areas: [
      { id: 'role', label: 'Značka a její role', anchor: 'b1' },
      { id: 'identifikatory', label: 'Identifikátory', anchor: 'b2' },
      { id: 'povedomi', label: 'Povědomí a asociace', anchor: 'b3' },
      { id: 'loajalita', label: 'Zkušenost a loajalita', anchor: 'b4' }
    ]
  }
};
