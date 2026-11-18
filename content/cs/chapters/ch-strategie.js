// Kapitola 2: Formulace marketingové strategie – výukové texty (čeština).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku.
// Všechny firmy, výroky a čísla v příkladech a úlohách jsou fiktivní.

export default {
  id: 'ch-strategie',
  title: 'Formulace marketingové strategie',
  headline: 'Máme spoustu nápadů. Ale kam vlastně jdeme?',
  question: 'Jak propojit směr firmy, cíle a konkrétní kroky?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'Univerzitní sportovní centrum nabízí studentům skupinové lekce jógy, pilates a kruhového tréninku. Sály jsou vybavené a lektoři oblíbení, přesto na řadě lekcí zůstává polovina míst prázdná. Vedení se ptá, co s tím.',
        'Na poradě zazní tři návrhy: „Zlevníme všechny vstupy.“ „Spustíme kampaň na sociálních sítích.“ „Nejdřív si ujasníme, koho chceme získat a jaký výsledek potřebujeme.“ Každý z nich zní rozumně. V kapitole uvidíš, proč na pořadí kroků záleží a co by mělo být jasné dřív, než se cokoli spustí.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'vysvětlit vztah strategického řízení a marketingu;',
      'rozlišit misi a vizi;',
      'odlišit cíl od aktivity a posoudit cíl podle SMART;',
      'rozlišit nákladové vůdcovství, diferenciaci a koncentraci;',
      'zařadit růstový záměr do Ansoffovy matice;',
      'rozlišit cíl, strategii a taktiku a popsat postup a náležitosti marketingového plánu.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Nejdřív směr: mise a vize',
      short: 'Strategické řízení, mise, vize',
      time: { main: 1.5 },
      steps: [
        {
          id: 's1-rizeni',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[strategicke_rizeni|Strategické řízení]]</dfn> určuje dlouhodobé směřování organizace, její cíle a rozdělení zdrojů. Marketing na tento rámec navazuje: jeho rozhodnutí mají podporovat směr celé organizace.' },
            { t: 'mock', kind: 'memo', quotes: true, title: 'Zápis z porady · sportovní centrum', notes: [
              { label: 'A', text: 'Chceme se dlouhodobě zaměřit na pravidelný pohyb studentů a rozšiřovat nabídku i mimo hlavní kampus.' },
              { label: 'B', text: 'Ve středu objednáme nové podložky a opravíme osvětlení v sále.' }
            ] }
          ],
          tasks: ['m02-rizeni'],
          more: [
            { t: 'p', html: 'Strategické řízení vytváří rámec pro marketingový proces: nejdřív si organizace vyjasní své poslání, cíle a základní strategie, teprve pak na ně navazují marketingová rozhodnutí o produktech a zákaznících. Patří sem i rozhodnutí o zdrojích, například jak aktivity financovat a do čeho investovat.' }
          ]
        },
        {
          id: 's1-mise-vize',
          title: 'Mise a vize',
          body: [
            { t: 'cards', items: [
              { kicker: 'Proč existujeme', term: 'mise', id: 'k-mise', title: 'Mise', text: 'Vyjádření důvodu existence organizace, komu slouží a jaký přínos nabízí.' },
              { kicker: 'Kam směřujeme', term: 'vize', id: 'k-vize', title: 'Vize', text: 'Představa žádoucího budoucího stavu organizace.' }
            ] },
            { t: 'mock', kind: 'sign', title: 'Cedule u vchodu do sportovního centra', text: 'Hýbeme se spolu.' }
          ],
          tasks: ['m02-mise-vize'],
          more: [
            { t: 'p', html: 'Mise a vize dohromady tvoří <strong>poslání podniku</strong>: v jaké oblasti organizace působí, pro koho vytváří nabídku a jak chce rozvíjet své schopnosti. Bývají prezentované navenek, proto mají často i emocionální podtext a podílejí se na nich marketingoví odborníci.' },
            { t: 'p', html: 'Samotný slogan, jako „Hýbeme se spolu“ na ceduli, ještě nemusí stačit k určení, zda jde o misi, nebo vizi. Rozhoduje obsah: popisuje současný smysl existence, nebo žádoucí budoucnost?' }
          ]
        }
      ],
      summary: 'Mise říká, proč organizace existuje. Vize ukazuje, kam chce směřovat. Marketing by měl obojí podporovat.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Přání nestačí: stanov cíl',
      short: 'Cíl, aktivita, SMART',
      time: { main: 2.5 },
      steps: [
        {
          id: 's2-cil',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Jaký výsledek', term: 'cil', id: 'k-cil', title: 'Cíl', text: 'Konkrétní požadovaný stav, kterého má organizace dosáhnout v určitém období.' },
              { kicker: 'Co uděláme', term: 'aktivita', id: 'k-aktivita', title: 'Aktivita', text: 'Konkrétní činnost uskutečňovaná při naplňování cíle.' }
            ] },
            { t: 'mock', kind: 'occupancy', title: 'Obsazenost večerních lekcí · sportovní centrum', rows: [
              { label: 'Pondělí · jóga', value: 58 },
              { label: 'Úterý · kruhový trénink', value: 44 },
              { label: 'Čtvrtek · pilates', value: 48 },
              { label: 'Průměr', value: 50, strong: true }
            ] }
          ],
          tasks: ['m02-cil-aktivita']
        },
        {
          id: 's2-smart',
          title: 'SMART: dá se s cílem pracovat?',
          body: [
            { t: 'p', html: '<dfn>[[smart|SMART]]</dfn> pomáhá posoudit, zda je cíl konkrétní, měřitelný, dosažitelný, relevantní a časově ohraničený. Dosažitelnost a relevance se posuzují podle skutečných možností a směřování organizace.' },
            { t: 'acronym', items: [
              { letter: 'S', title: 'konkrétní' },
              { letter: 'M', title: 'měřitelný' },
              { letter: 'A', title: 'dosažitelný' },
              { letter: 'R', title: 'relevantní' },
              { letter: 'T', title: 'časově ohraničený' }
            ] }
          ],
          tasks: ['m02-smart']
        },
        {
          id: 's2-pouzitelny',
          title: 'Vyber použitelný cíl',
          body: [
            { t: 'mock', kind: 'brief', title: 'Podklad sportovního centra', text: 'Centrum chce lépe využít stávající večerní lekce. Má volnou kapacitu, prostředky na oslovení studentů a podle předchozího zkušebního období považuje obsazenost 65 % za dosažitelnou.' }
          ],
          tasks: ['m02-pouzitelny-cil'],
          more: [
            { t: 'p', html: '<strong>SMARTER</strong> přidává dvě písmena: <strong>E</strong> (etický a ekologický: cíl je v souladu s dlouhodobou udržitelností) a <strong>R</strong> (přehodnocovaný: cíl se průběžně ověřuje vůči trhu i podniku).' },
            { t: 'p', html: 'Organizace si stanovují cíle <strong>ekonomické</strong> (obrat, tržní podíl, počet zákazníků), <strong>sociální</strong> (odpovědnost vůči komunitám) i <strong>environmentální</strong> (udržitelnost výroby).' },
            { t: 'p', html: 'Časté chyby: cíl je neurčitý, nepřiměřený (příliš malý nebo nereálný), protichůdný jiným cílům, nebo bez termínu. Pomáhá také určit, <strong>kdo za naplnění cíle odpovídá</strong>.' }
          ]
        }
      ],
      summary: 'Cíl popisuje výsledek, aktivita cestu k jeho naplnění. U dobrého cíle poznáš, co se má změnit, o kolik a dokdy.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Jak budeme konkurovat?',
      short: 'Nákladové vůdcovství, diferenciace, koncentrace',
      time: { main: 2 },
      steps: [
        {
          id: 's3-naklady-diferenciace',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Efektivnější náklady', term: 'nakladove_vudcovstvi', id: 'k-naklady', title: 'Nákladové vůdcovství', text: 'Strategie stavějící [[konkurencni_vyhoda|konkurenční výhodu]] na nižších nákladech oproti konkurenci.' },
              { kicker: 'Hodnotná odlišnost', term: 'diferenciace', id: 'k-diferenciace', title: 'Diferenciace', text: 'Strategie stavějící konkurenční výhodu na odlišnosti, kterou zákazníci považují za hodnotnou.' }
            ] },
            { t: 'p', html: 'Nižší náklady mohou umožnit nižší cenu nebo vyšší marži. Samotná sleva ještě neznamená nákladové vůdcovství.' },
            { t: 'mock', kind: 'offers', title: 'Dvě posilovny v okolí kampusu', items: [
              { name: 'Fit Express', text: 'Samoobslužný provoz, jednotné vybavení a vstup na kartu snižují náklady.' },
              { name: 'Studio Forma', text: 'Tréninky sestavené podle individuálních cílů, s osobním trenérem a službou, za kterou jsou zákazníci ochotni připlatit.' }
            ] }
          ],
          tasks: ['m02-obedy']
        },
        {
          id: 's3-koncentrace',
          title: 'Koncentrace: úzký segment',
          body: [
            { t: 'cards', items: [
              { kicker: 'Úzký segment', term: 'koncentrace', id: 'k-koncentrace', title: 'Koncentrace', text: 'Zaměření na úzký segment trhu, v němž firma usiluje o konkurenční výhodu.' }
            ] },
            { t: 'p', html: 'V úzkém segmentu se firma může odlišovat nebo usilovat o nižší náklady. Koncentrace tedy říká hlavně to, <strong>na jak širokou skupinu zákazníků</strong> se zaměřuje.' }
          ],
          tasks: ['m02-koncentrace']
        },
        {
          id: 's3-souhrn',
          title: 'Všechny tři vedle sebe',
          body: [],
          tasks: ['m02-konkurence'],
          more: [
            { t: 'p', html: '<strong>Výhody a omezení.</strong> Nákladové vůdcovství vyžaduje trvale efektivnější provoz než konkurence; nízké náklady lze ztratit, když je konkurence dorovná. Diferenciace vyžaduje odlišnost, kterou zákazníci skutečně ocení a konkurence snadno nenapodobí. Koncentrace vyžaduje dobře znát potřeby úzkého segmentu a nese riziko, že segment zmenší nebo do něj vstoupí větší hráči.' },
            { t: 'p', html: '<strong>Další členění strategií.</strong> Podle vývoje trhu se rozlišují strategie <strong>růstové, udržovací a ústupové</strong>. Podle chování ke konkurenci <strong>kooperační a konfliktní</strong>. Podle šíře zaměření <strong>masový a výklenkový</strong> přístup. Podle fáze životního cyklu trhu strategie pro nový, nasycený nebo klesající trh. Podle úrovně strategie rámcové, souhrnné a dílčí.' }
          ]
        }
      ],
      summary: 'Konkurenční výhoda může vycházet z nižších nákladů nebo hodnotné odlišnosti. Koncentrace znamená zaměření na úzký segment.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Kudy může firma růst?',
      short: 'Ansoffova matice',
      isMain: true,
      time: { main: 2 },
      steps: [
        {
          id: 's4-ansoff',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[ansoffova_matice|Ansoffova matice]]</dfn> rozlišuje čtyři růstové strategie podle dvou otázek: nabízíme <strong>stávající, nebo nový produkt</strong>? Působíme na <strong>stávajícím, nebo novém trhu</strong>? Obojí posuzujeme z pohledu konkrétní firmy.' },
            { t: 'matrix', id: 'ansoff-matice', caption: 'Ansoffova matice', corner: 'Trh / produkt', cols: ['Stávající produkt', 'Nový produkt'], rows: ['Stávající trh', 'Nový trh'],
              cells: [
                [{ code: 'Tržní penetrace', term: 'trzni_penetrace' }, { code: 'Rozvoj produktu', term: 'rozvoj_produktu' }],
                [{ code: 'Rozvoj trhu', term: 'rozvoj_trhu' }, { code: 'Diverzifikace', term: 'diverzifikace' }]
              ] },
            { t: 'mock', kind: 'brief', title: 'Výchozí situace · sportovní centrum', text: 'Centrum nabízí skupinové lekce studentům své univerzity.' }
          ],
          tasks: ['m02-polsko']
        },
        {
          id: 's4-ctyri',
          title: 'Čtyři možnosti růstu',
          body: [
            { t: 'cards', items: [
              { kicker: 'Stávající produkt · stávající trh', term: 'trzni_penetrace', id: 'k-penetrace', title: 'Tržní penetrace', text: 'Zvyšování prodeje stávajících produktů na stávajícím trhu.' },
              { kicker: 'Nový produkt · stávající trh', term: 'rozvoj_produktu', id: 'k-rozvoj-produktu', title: 'Rozvoj produktu', text: 'Nabídka nových produktů na stávajícím trhu.' },
              { kicker: 'Stávající produkt · nový trh', term: 'rozvoj_trhu', id: 'k-rozvoj-trhu', title: 'Rozvoj trhu', text: 'Nabídka stávajících produktů na novém trhu.' },
              { kicker: 'Nový produkt · nový trh', term: 'diverzifikace', id: 'k-diverzifikace', title: 'Diverzifikace', text: 'Nabídka nových produktů na novém trhu.' }
            ] }
          ],
          tasks: ['m02-ansoff']
        },
        {
          id: 's4-limity',
          title: 'Co z matice nepoznáš?',
          body: [],
          tasks: ['m02-matice-limity'],
          more: [
            { t: 'p', html: '<strong>Rozvoj trhu</strong> může znamenat vstup do jiné země (geografická expanze) i oslovení nového segmentu ve stejné zemi, třeba jiné věkové skupiny.' },
            { t: 'p', html: '<strong>Prodej na stávajícím trhu</strong> lze zvyšovat například novými prodejními místy, intenzivnější distribucí a marketingovou komunikací, nebo tím, že stávající zákazníci budou produkt využívat častěji.' },
            { t: 'p', html: '<strong>Nároky na zdroje a poznání trhu</strong> obvykle rostou s počtem neznámých. Rozvoj trhu vyžaduje poznat nové zákazníky, rozvoj produktu zvládnout nový produkt a diverzifikace obojí najednou, proto bývá nejrizikovější.' }
          ]
        }
      ],
      summary: 'U růstové strategie sleduj dvě osy: produkt a trh. Zařazení nápadu do matice pomáhá přemýšlet o růstu, ale nenahrazuje posouzení jeho proveditelnosti.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Ze strategie do praxe',
      short: 'Cíl, strategie, taktika, plán',
      time: { main: 2.5 },
      steps: [
        {
          id: 's5-cst',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Výsledek', term: 'cil', title: 'Cíl', text: 'Konkrétní požadovaný stav, kterého má organizace dosáhnout v určitém období.' },
              { kicker: 'Cesta', term: 'strategie', id: 'k-strategie', title: 'Strategie', text: 'Vymezení hlavního způsobu, jak za daných podmínek dosáhnout cílů.' },
              { kicker: 'Konkrétní postup', term: 'taktika', id: 'k-taktika', title: 'Taktika', text: 'Rozpracování strategie do konkrétních postupů a nástrojů.' }
            ] }
          ],
          tasks: ['m02-cst']
        },
        {
          id: 's5-plan',
          title: 'Marketingový plán krok za krokem',
          body: [
            { t: 'p', html: '<dfn>[[marketingovy_plan|Marketingový plán]]</dfn> rozpracovává marketingové cíle a strategii do navazujících činností, odpovědností, termínů a zdrojů. Součástí je také kontrola výsledků a případné úpravy.' },
            { t: 'p', html: 'Plán postupuje v šesti navazujících krocích:' },
            { t: 'acronym', id: 'postup-planu', wide: true, items: [
              { letter: '1', title: 'Analýza situace', text: 'Kde jsme?' },
              { letter: '2', title: 'Cíle', text: 'Kam chceme dojít?' },
              { letter: '3', title: 'Strategie', text: 'Jakou cestu zvolíme?' },
              { letter: '4', title: 'Taktika', text: 'Jak ji rozpracujeme?' },
              { letter: '5', title: 'Uskutečnění', text: 'Kdo co udělá, kdy a s jakými zdroji?' },
              { letter: '6', title: 'Kontrola', text: 'Jak poznáme výsledek a co upravíme?' }
            ] },
            { t: 'mock', kind: 'plan', title: 'Zápis sportovního centra', note: 'Zavedeme čtvrteční večerní lekci pro začátečníky a budeme ji komunikovat studentům.', cols: ['Kdo', 'Kdy', 'Zdroje', 'Vyhodnocení'] }
          ],
          tasks: ['m02-plan']
        },
        {
          id: 's5-kontrola',
          title: 'Kontrola vrací plán do reality',
          body: [
            { t: 'p', html: '<dfn>[[kontrola|Kontrola]]</dfn> porovnává výsledky s cíli, hledá odchylky a jejich příčiny a dává podklad pro úpravy dalšího postupu.' }
          ],
          tasks: ['m02-kontrola'],
          more: [
            { t: 'p', html: 'V praxi i v zahraniční literatuře se pro stejný postup často používá model <strong>SOSTAC</strong> (Situation, Objectives, Strategy, Tactics, Action, Control). Zjednodušeně musí každý plán odpovědět na otázky kdo, co, kdy a za kolik.' },
            { t: 'p', html: '<strong>Úrovně plánování</strong> se liší účelem: <strong>strategická</strong> určuje hlavní směry, strategie a zdroje na delší dobu; <strong>taktická</strong> rozpracovává strategii a reaguje na změny prostředí; <strong>operativní</strong> řídí každodenní aktivity a aktuální úkoly. Délka období se liší podle organizace a odvětví.' },
            { t: 'p', html: '<strong>Proč plánovat.</strong> Plán snižuje podnikatelské riziko: přibližuje budoucí fungování na trhu, odhaduje prodeje a náklady, umožňuje připravit varianty (optimistickou i pesimistickou) a průběžně kontrolovat plnění cílů. Je i nástrojem práce se zaměstnanci, kteří se do přípravy mohou zapojit.' }
          ]
        }
      ],
      summary: 'Cíl určuje výsledek, strategie cestu a taktika konkrétní postup. Plán přidává odpovědnosti, termíny, zdroje a kontrolu.'
    }
  ],

  // Myšlenková mapa – pět větví podle částí
  mindmap: {
    center: 'Formulace marketingové strategie',
    branches: [
      { block: 'b1', title: 'Směr organizace', text: 'Strategické řízení určuje dlouhodobé směřování. Mise vyjadřuje důvod existence, vize žádoucí budoucnost.', terms: ['strategicke_rizeni', 'mise', 'vize'], relations: 'Směr organizace ovlivňuje cíle a volbu strategie.' },
      { block: 'b2', title: 'Cíle', text: 'Cíl popisuje požadovaný výsledek v určitém období. SMART pomáhá posoudit jeho konkrétnost, měřitelnost, dosažitelnost, relevanci a časové vymezení.', terms: ['cil', 'aktivita', 'smart'], relations: 'Cíle dávají smysl volbě strategie a pozdější kontrole.' },
      { block: 'b3', title: 'Konkurenční výhoda', text: 'Konkurenční výhoda je to, čím firma obstojí vůči konkurenci: nižšími náklady (nákladové vůdcovství), hodnotnou odlišností (diferenciace), nebo zaměřením na úzký segment (koncentrace).', terms: ['nakladove_vudcovstvi', 'diferenciace', 'koncentrace', 'konkurencni_vyhoda'], relations: 'Strategie musí odpovídat zákazníkům, zdrojům a cílům.' },
      { block: 'b4', title: 'Růst', text: 'Ansoffova matice kombinuje stávající a nové produkty se stávajícími a novými trhy. Rozlišuje penetraci, rozvoj produktu, rozvoj trhu a diverzifikaci.', terms: ['ansoffova_matice', 'trzni_penetrace', 'rozvoj_produktu', 'rozvoj_trhu', 'diverzifikace'], relations: 'Zvolený směr růstu potřebuje rozpracování a posouzení zdrojů.' },
      { block: 'b5', title: 'Uskutečnění a kontrola', text: 'Marketingový plán převádí cíle a strategii do postupů, odpovědností, termínů a zdrojů v šesti krocích: analýza situace, cíle, strategie, taktika, uskutečnění a kontrola. Kontrola porovnává výsledky s cíli a pomáhá upravovat další postup.', terms: ['strategie', 'taktika', 'marketingovy_plan', 'kontrola'], relations: 'Výsledky kontroly jsou podkladem pro další rozhodování.' }
    ]
  },

  // Závěrečné procvičení
  final: {
    intro: 'Nové krátké situace ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m02-z-mise', 'm02-z-smart', 'm02-z-konkurence', 'm02-z-ansoff', 'm02-z-plan'],
    areas: [
      { id: 'smer', label: 'Směřování organizace a mise/vize', anchor: 'b1' },
      { id: 'cile', label: 'Cíle a SMART', anchor: 'b2' },
      { id: 'konkurence', label: 'Konkurenční strategie', anchor: 'b3' },
      { id: 'rust', label: 'Růstové strategie', anchor: 'b4' },
      { id: 'plan', label: 'Marketingový plán', anchor: 'b5' }
    ]
  }
};
