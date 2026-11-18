// Úlohy kapitoly 2 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Všechny firmy, výroky a čísla jsou fiktivní.

export default {

  'm02-rizeni': {
    prompt: 'Které rozhodnutí určuje dlouhodobé směřování centra?',
    options: { a: 'Zápis A', b: 'Zápis B' },
    correctLead: 'Ano.',
    wrongLead: 'Tohle řeší běžný provoz.',
    explanation: 'Zápis A určuje zaměření a budoucí rozvoj centra. Objednávka podložek je provozní úkol, který toto fungování podporuje. Strategické rozhodnutí určuje, kam se organizace dlouhodobě vydá.'
  },

  'm02-mise-vize': {
    prompt: 'Mise, nebo vize? Zařaďte výroky sportovního centra.',
    categories: { mise: 'Mise', vize: 'Vize' },
    items: {
      zivot: { text: '„Umožňujeme studentům pravidelný pohyb díky dostupným lekcím přímo v kampusu.“', why: 'Popisuje, proč centrum existuje a jaký přínos dnes nabízí: mise.' },
      prvni: { text: '„Chceme být první volbou studentů, kteří hledají pohyb ve městě.“', why: 'Popisuje žádoucí budoucí stav: vize.' },
      nosit: { text: '„Pomáháme studentům vyvážit studium a zdraví.“', why: 'Současný smysl existence a přínos pro studenty: mise.' },
      sit: { text: '„Chceme mít sportoviště ve všech areálech univerzity.“', why: 'Představa budoucnosti, kam chce centrum dojít: vize.' }
    },
    explanation: 'Mise odpovídá na otázku <strong>proč existujeme</strong> (teď), vize na otázku <strong>kam směřujeme</strong> (budoucnost).'
  },

  'm02-cil-aktivita': {
    prompt: 'Který výrok popisuje výsledek, kterého chce centrum dosáhnout?',
    options: {
      prispevky: 'Zveřejnit šest příspěvků na sociálních sítích.',
      obsazenost: 'Zvýšit do konce semestru průměrnou obsazenost večerních lekcí z 50 % na 65 %.'
    },
    correctLead: 'Přesně.',
    wrongLead: 'Příspěvky jsou činnost, ne výsledek.',
    explanation: 'Obsazenost popisuje požadovaný výsledek. Příspěvky jsou aktivita, která k němu může přispět. Jejich zveřejnění samo o sobě vyšší obsazenost nezaručuje.'
  },

  'm02-smart': {
    prompt: '„Chceme zvýšit průměrnou obsazenost večerních lekcí z 50 % na 65 %.“ Co z tohoto výroku poznáte a co ještě potřebujete doplnit nebo ověřit?',
    options: {
      meritelny: 'Výsledek je měřitelný.',
      termin: 'Chybí termín dosažení.',
      dosazitelnost: 'Dosažitelnost už je prokázaná tím, že výrok obsahuje čísla.',
      relevance: 'Relevanci je potřeba posoudit vzhledem k cílům centra.'
    },
    feedback: {
      meritelny: 'Ano. Obsazenost v procentech se dá změřit a porovnat s výchozí hodnotou 50 %.',
      termin: 'Ano. Není jasné, dokdy má být 65 % dosaženo. Bez termínu nejde poznat, zda se cíl splnil.',
      dosazitelnost: 'Čísla ukazují měřitelnost, ne dosažitelnost. Ta závisí na kapacitě, zdrojích a zkušenostech centra.',
      relevance: 'Ano. Zda cíl dává smysl, se posuzuje vzhledem k tomu, kam centrum směřuje.'
    },
    explanation: 'Přesné číslo dělá cíl měřitelným. Dosažitelnost a relevanci z věty samotné nepoznáte.'
  },

  'm02-pouzitelny-cil': {
    prompt: 'Který cíl nejlépe odpovídá podkladu?',
    options: {
      oblibenejsi: 'Být pro studenty oblíbenějším sportovním centrem než loni.',
      obsazenost: 'Do konce semestru zvýšit obsazenost večerních lekcí z 50 % na 65 %.',
      stoprocent: 'Do konce příštího týdne zajistit stoprocentní obsazenost všech služeb.'
    },
    feedback: {
      oblibenejsi: 'Přání, ne cíl. Nejde změřit, o kolik a dokdy.',
      obsazenost: 'Ano. Cíl určuje konkrétní výsledek, měřítko a termín. Podklad navíc vysvětluje jeho návaznost na potřeby centra a předpokládanou dosažitelnost.',
      stoprocent: 'Měřitelné a s termínem, ale podle podkladu nedosažitelné a netýká se jen večerních lekcí.'
    },
    explanation: 'Dobrý cíl je měřitelný a časově ohraničený a zároveň odpovídá možnostem a směřování organizace.'
  },

  'm02-obedy': {
    prompt: 'Na čem která posilovna staví konkurenční výhodu?',
    categories: { naklady: 'Nákladové vůdcovství', diferenciace: 'Diferenciace' },
    items: {
      krabicka: { text: 'Fit Express', why: 'Výhoda vzniká úsporným provozem a nižšími náklady.' },
      namiru: { text: 'Studio Forma', why: 'Výhoda vzniká odlišnou službou, která má pro zákazníky hodnotu.' }
    },
    explanation: 'Nákladové vůdcovství stojí na nižších nákladech, diferenciace na odlišnosti, kterou zákazníci ocení.'
  },

  'm02-koncentrace': {
    prompt: 'Sportovní centrum zvažuje tři směry. Který nejzřetelněji představuje koncentraci?',
    options: {
      siroka: 'Rozšířit lekce pro všechny studenty i širokou veřejnost z okolí.',
      hory: 'Program jen pro studentské sportovce, kteří se vracejí po zranění.',
      sleva: 'Nabídnout všem klientům tento týden slevu na permanentky.'
    },
    feedback: {
      siroka: 'Široká veřejnost je opak úzkého segmentu.',
      hory: 'Ano. Rozhodujícím znakem je jasně vymezený úzký segment.',
      sleva: 'Krátkodobá sleva sama neříká, na jaké konkurenční výhodě centrum staví, ani na koho se zaměřuje.'
    },
    explanation: 'Koncentrace říká, na jak úzkou skupinu zákazníků se firma zaměřuje.'
  },

  'm02-konkurence': {
    prompt: 'Zařaďte sportoviště ve městě. U jedné položky platí dvě odpovědi zároveň.',
    categories: { naklady: 'Nákladové vůdcovství', diferenciace: 'Diferenciace', koncentrace: 'Koncentrace' },
    items: {
      uspora: { text: 'Sportoviště obsluhuje široký trh a díky úspornému provozu má nižší náklady než konkurenti.', why: 'Široký trh a nižší náklady: nákladové vůdcovství.' },
      jedinecna: { text: 'Sportoviště obsluhuje široký trh a nabízí jedinečnou službu, kterou zákazníci oceňují.', why: 'Široký trh a hodnotná odlišnost: diferenciace.' },
      uzka_jedinecna: { text: 'Sportoviště se soustředí na úzkou skupinu zákazníků a nabízí jí jedinečnou službu.', why: 'Koncentrace i diferenciace zároveň: koncentrace říká, na koho se firma zaměřuje (úzký segment), diferenciace, čím v něm vyniká (jedinečná služba).' }
    },
    explanation: 'Koncentrace se kombinuje s jedním ze dvou zdrojů výhody: v úzkém segmentu se firma odlišuje, nebo má nižší náklady.'
  },

  'm02-polsko': {
    prompt: 'Centrum chce nabídnout stejné skupinové lekce zaměstnancům firem v okolí kampusu. Je produkt stávající, nebo nový? A trh?',
    categories: { stavajici: 'Stávající', novy: 'Nový' },
    items: {
      produkt: { text: 'Produkt', why: 'Lekce se nemění: stávající produkt.' },
      trh: { text: 'Trh', why: 'Zaměstnanci firem jsou pro centrum nový zákaznický segment: nový trh.' }
    },
    explanation: 'Stávající produkt na novém trhu: <strong>rozvoj trhu</strong>.'
  },

  'm02-ansoff': {
    prompt: 'Zařaďte záměry sportovního centra do Ansoffovy matice.',
    categories: { penetrace: 'Tržní penetrace', produkt: 'Rozvoj produktu', trh: 'Rozvoj trhu', diverzifikace: 'Diverzifikace' },
    items: {
      mista: { text: 'Získat víc studentů na stávající lekce díky rozšíření večerního rozvrhu.', why: 'Stávající produkt, stávající trh: tržní penetrace.' },
      brasna: { text: 'Nabídnout studentům novou službu: individuální tréninkové plány online.', why: 'Nový produkt, stávající trh: rozvoj produktu.' },
      polsko: { text: 'Nabídnout stávající skupinové lekce zaměstnancům firem v okolí.', why: 'Stávající produkt, nový trh: rozvoj trhu.' },
      zachranari: { text: 'Otevřít pro seniory z města nový program zdravotního cvičení s fyzioterapeutem.', why: 'Nový produkt i nový trh: diverzifikace.' }
    },
    explanation: 'Vždy se zeptejte zvlášť: je produkt pro tuto firmu nový? Je trh pro tuto firmu nový?'
  },

  'm02-matice-limity': {
    prompt: 'Když správně zařadíte nápad do matice, znamená to, že už víte, zda se firmě vyplatí?',
    thinkHint: 'Zkuste si odpověď nejdřív promyslet. Pak si zobrazte vysvětlení.',
    reasoningLabel: 'Vaše úvaha (nepovinné, nikam se neodesílá)',
    revealLabel: 'Ukázat vysvětlení',
    explanation: '<strong>Ne.</strong> Matice pojmenuje směr růstu. Firma ještě musí posoudit zákazníky, konkurenci, potřebné zdroje a rizika. Nový produkt na novém trhu obvykle přináší více neznámých.'
  },

  'm02-cst': {
    prompt: 'Cíl, strategie, nebo taktika? Zařaďte poznámky sportovního centra.',
    categories: { cil: 'Cíl', strategie: 'Strategie', taktika: 'Taktika' },
    items: {
      navstevy: { text: '„Do konce semestru zvýšit průměrnou obsazenost večerních lekcí z 50 % na 65 %.“', why: 'Požadovaný výsledek s měřítkem a termínem: cíl.' },
      preference: { text: '„Získat studenty, kteří zatím nesportují, nabídkou přizpůsobenou začátečníkům.“', why: 'Hlavní cesta, jak cíle dosáhnout: strategie.' },
      snidane: { text: '„Zavést čtvrteční večerní lekci pro začátečníky a informovat o ní na kolejích a v menze.“', why: 'Konkrétní postup a nástroje: taktika.' }
    },
    explanation: 'Cíl = výsledek, strategie = hlavní cesta, taktika = konkrétní rozpracování. Taktické kroky musí odpovídat zvolené strategii: lekce pro začátečníky míří právě na studenty, kteří zatím nesportují.'
  },

  'm02-plan': {
    prompt: 'Co potřebuje zápis doplnit, aby se podle něj dalo jednat a výsledek vyhodnotit?',
    options: {
      kdo: 'Kdo za přípravu odpovídá.',
      kdy: 'Kdy lekce začne.',
      zdroje: 'Jaké prostředky může využít.',
      vyhodnoceni: 'Jak a kdy se vyhodnotí výsledek.',
      slogan: 'Atraktivní název lekce, který zaujme studenty.'
    },
    feedback: {
      kdo: 'Ano. Bez odpovědné osoby se úkol snadno ztratí mezi ostatními.',
      kdy: 'Ano. Termín umožňuje připravit navazující kroky a později vyhodnotit výsledek.',
      zdroje: 'Ano. Rozpočet, lektoři a volný sál určují, co je reálně proveditelné.',
      vyhodnoceni: 'Ano. Bez kontroly nepoznáte, jestli lekce přispěla k cíli.',
      slogan: 'Název může pomoci komunikaci, ale nenahradí odpovědnost, termín, zdroje ani kontrolu.'
    },
    explanation: 'Plán odpovídá na otázky kdo, co, kdy, s jakými zdroji a jak se pozná výsledek.'
  },

  'm02-kontrola': {
    prompt: 'Centrum po měsíci zjistí, že na lekci pro začátečníky téměř nikdo nechodí. Co nejlépe odpovídá smyslu kontroly?',
    options: {
      'beze-zmeny': 'Pokračovat beze změny, protože nový program potřebuje čas a plán byl schválen.',
      porovnat: 'Porovnat výsledek s cílem, zjistit příčiny a podle toho upravit postup.',
      snizit: 'Lekci rovnou zrušit a lektora přesunout na lekce, o které je zájem.'
    },
    feedback: {
      'beze-zmeny': 'Plán není dogma. Kontrola existuje právě proto, aby se dal upravit.',
      porovnat: 'Ano. Kontrola pomáhá zjistit odchylku a její příčiny. Úprava má vycházet ze zjištění.',
      snizit: 'Zrušení může být nakonec správné, ale bez zjištění příčin nevíte, zda lekce selhala kvůli obsahu, času, nebo informovanosti.'
    },
    explanation: 'Kontrola porovná výsledek s cílem, hledá příčiny a dává podklad pro úpravy.'
  },


  // ───── Závěrečné procvičení
  'm02-z-mise': {
    prompt: 'Městská knihovna: mise, nebo vize?',
    categories: { mise: 'Mise', vize: 'Vize' },
    items: {
      zpristupnujeme: { text: '„Zpřístupňujeme obyvatelům města knihy, informace a prostor pro učení.“', why: 'Současný důvod existence a přínos: mise.' },
      komunitni: { text: '„Chceme se stát hlavním komunitním místem pro celoživotní učení ve městě.“', why: 'Žádoucí budoucí stav: vize.' }
    },
    explanation: 'Mise = proč existujeme teď, vize = kam směřujeme.'
  },
  'm02-z-smart': {
    prompt: '„Do konce června zvýšit podíl včas vyřízených objednávek z 85 % na 95 %.“ Co bez znalosti možností organizace ještě nedokážete potvrdit?',
    options: { meritelnost: 'Měřitelnost', termin: 'Časové ohraničení', dosazitelnost: 'Dosažitelnost' },
    feedback: {
      meritelnost: 'Měřitelnost potvrdit můžete: podíl v procentech se dá změřit.',
      termin: 'Termín je uvedený: do konce června.',
      dosazitelnost: 'Ano. Přesné číslo samo o sobě dosažitelnost nedokazuje. Záleží na kapacitách a možnostech organizace.'
    },
    explanation: 'Čísla dělají cíl měřitelným, ne nutně dosažitelným.'
  },
  'm02-z-konkurence': {
    prompt: 'Servis opravuje výhradně profesionální hudební nástroje pro koncertní hráče. Kterou strategii zadání nejzřetelněji ukazuje?',
    options: { naklady: 'Nákladové vůdcovství', diferenciace: 'Diferenciace', koncentrace: 'Koncentrace' },
    feedback: {
      naklady: 'O nákladech zadání nic neříká.',
      diferenciace: 'Konkrétní způsob odlišení zadání neuvádí. Jisté je jen zaměření na úzkou skupinu.',
      koncentrace: 'Ano. Úzký segment: profesionální koncertní hráči.'
    },
    explanation: 'Samotné zadání neprokazuje nákladové vůdcovství ani konkrétní způsob diferenciace. Prokazuje úzký segment.'
  },
  'm02-z-ansoff': {
    prompt: 'Výrobce dodává kancelářské židle firmám. Nově chce stejnou židli prodávat domácnostem pro domácí pracovny. O jakou strategii jde?',
    options: { penetrace: 'Tržní penetrace', produkt: 'Rozvoj produktu', trh: 'Rozvoj trhu', diverzifikace: 'Diverzifikace' },
    feedback: {
      penetrace: 'Domácnosti jsou pro výrobce nový trh, ne ten stávající.',
      produkt: 'Židle zůstává stejná, produkt není nový.',
      trh: 'Ano. Stávající produkt, nový zákaznický segment.',
      diverzifikace: 'Diverzifikace by vyžadovala i nový produkt.'
    },
    explanation: 'Nový trh nemusí být jiná země, může to být i nový segment zákazníků.'
  },
  'm02-z-plan': {
    prompt: 'Firma má cíl a seznam aktivit, ale neurčila odpovědné osoby, termíny ani způsob vyhodnocení. Co musí doplnit?',
    options: { odpovednosti: 'Odpovědné osoby', terminy: 'Termíny', kontrola: 'Způsob vyhodnocení (kontrolu)', slogan: 'Slogan kampaně', logo: 'Nové logo' },
    feedback: {
      odpovednosti: 'Ano. Bez odpovědnosti se aktivity snadno nerealizují.',
      terminy: 'Ano. Termíny umožní řídit postup a vyhodnotit výsledek.',
      kontrola: 'Ano. Bez kontroly firma nepozná, jestli se cíl plní.',
      slogan: 'Slogan je součást komunikace, chybějící části plánu nenahradí.',
      logo: 'Logo s chybějícími částmi plánu nesouvisí.'
    },
    explanation: 'Plán potřebuje odpovědnosti, termíny a kontrolu. Pokud v zadání chybějí i rozpočet a zdroje, doplnila by je firma také.'
  },
};
