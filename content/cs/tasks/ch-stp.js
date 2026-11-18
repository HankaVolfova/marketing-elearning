// Úlohy kapitoly 4 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní firma Krabička. Všechna čísla a hodnocení jsou fiktivní.

export default {

  // ───── Část 1
  'm04-rozdeleni': {
    prompt: 'Které rozdělení nejlépe pomůže Krabičce připravit různé obědové nabídky?',
    options: {
      pismeno: 'Podle věku zákazníků: do 30 let, od 30 do 50 let a nad 50 let.',
      prinos: 'Podle toho, zda hledají rychlý pracovní oběd, nebo přesné nutriční hodnoty.',
      vsichni: 'Všechny zákazníky dohromady, protože všichni chtějí rychle a dobře jíst.'
    },
    feedback: {
      pismeno: 'Věk může být užitečný, ale sám neříká, jaký oběd kdo potřebuje. Lidé stejného věku mohou hledat úplně jiné přínosy.',
      prinos: 'Ano. Rozdělení odráží rozdílné požadované přínosy.',
      vsichni: 'Jedna skupina pro všechny je opak segmentace: nic se nedá přizpůsobit.'
    },
    explanation: 'Rozdělení odráží rozdílné požadované přínosy. Skupiny mají smysl tehdy, když nám pomohou nabídku přizpůsobit.'
  },

  'm04-kriteria': {
    prompt: 'Podle jakého kritéria Krabička zákazníky popisuje?',
    categories: { geo: 'Geografické', demo: 'Demografické', psycho: 'Psychografické', behav: 'Behaviorální' },
    items: {
      oblast: { text: '„Bydlí v dojezdové oblasti rozvozu.“', why: 'Rozhoduje místo, kde zákazník žije: geografické kritérium.' },
      domacnost: { text: '„Domácnost tvoří rodiče se dvěma dětmi.“', why: 'Složení domácnosti je demografická charakteristika.' },
      styl: { text: '„Aktivní životní styl je pro ně důležitou součástí identity.“', why: 'Životní styl a hodnoty: psychografické kritérium.' },
      cetnost: { text: '„Objednávají oběd třikrát týdně.“', why: 'Četnost nákupů popisuje chování vůči nabídce: behaviorální kritérium.' }
    },
    explanation: 'Ptej se: <strong>kde</strong> žijí (geografická), <strong>kdo</strong> jsou (demografická), <strong>jak žijí a co je pro ně důležité</strong> (psychografická), <strong>jak se chovají k nabídce</strong> (behaviorální).'
  },

  'm04-vek': {
    prompt: 'Stačí stejný věk k závěru, že Alexovi i Robinovi bude vyhovovat stejná nabídka?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Věk mají stejný, ale potřebují něco jiného.',
    explanation: '<strong>Ne.</strong> Věk je užitečná charakteristika, ale sám nemusí vysvětlit požadovaný přínos. Pro nabídku obědů jsou zde důležité i situace použití a životní styl.'
  },

  // ───── Část 2
  'm04-prekryv': {
    prompt: 'Krabička vytvoří dvě skupiny: „lidé, kteří chtějí chutný oběd“ a „lidé, kteří mají rádi dobré jídlo“. Pomůže jí toto rozdělení připravit odlišné nabídky?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Přesně.',
    wrongLead: 'Zkus najít, v čem se ty dvě skupiny liší.',
    explanation: '<strong>Ne.</strong> Skupiny se významově překrývají. Není jasné, v čem se jejich potřeby liší a jak podle toho nabídku upravit.'
  },

  'm04-pouzitelnost': {
    prompt: 'Krabička identifikovala zajímavou skupinu zákazníků mimo svůj rozvozový dosah. Zatím nezná její velikost a nemá prostředky na rozšíření rozvozu. Co musí prověřit?',
    options: {
      velikost: 'Velikost a významnost skupiny.',
      dostupnost: 'Dostupnost a možnost obsluhy.',
      nazev: 'Jak skupinu pojmenovat v marketingových materiálech.'
    },
    feedback: {
      velikost: 'Ano. Bez znalosti velikosti nepozná, zda se skupina vyplatí.',
      dostupnost: 'Ano. Skupina je mimo rozvoz a firma nemá prostředky ho rozšířit.',
      nazev: 'Pojmenování přijde na řadu později. Nejdřív je potřeba vědět, zda se skupina vyplatí a zda ji firma obslouží.'
    },
    explanation: 'Zajímavá skupina se stává použitelným segmentem, až když ji firma umí změřit, posoudit její význam, oslovit ji a obsloužit.'
  },

  // ───── Část 3
  'm04-seg-target': {
    prompt: 'Segmentace, nebo targeting? Zařaď rozhodnutí Krabičky.',
    categories: { segmentace: 'Segmentace', targeting: 'Targeting' },
    items: {
      rozlisili: { text: '„Rozlišili jsme zákazníky podle potřeb a situací, ve kterých objednávají.“', why: 'Hledání a popis skupin: segmentace.' },
      vybirame: { text: '„Pro první fázi vybíráme zaměstnance kanceláří v našem rozvozovém dosahu.“', why: 'Volba, komu se firma bude věnovat: targeting.' }
    },
    explanation: 'Segmentace skupiny <strong>najde a popíše</strong>, targeting z nich <strong>vybere</strong> ty, kterým se firma bude věnovat.'
  },

  'm04-vyber': {
    prompt: 'Který segment nejlépe odpovídá současným možnostem Krabičky?',
    options: {
      kancelare: 'Zaměstnanci kanceláří v centru',
      sport: 'Zákazníci požadující individuální sportovní jídelníčky',
      kraj: 'Domácnosti v celém kraji'
    },
    feedback: {
      kancelare: 'Ano. Propojuje dostatečnou poptávku s tím, co Krabička umí: rychlé standardní obědy a rozvoz v centru.',
      sport: 'Zájem je zajímavý, ale Krabička zatím nemá individuální poradenství ani odborné zázemí.',
      kraj: 'Největší počet zákazníků, ale rozvoz po celém kraji zatím nezvládne.'
    },
    explanation: 'Podle zadaných podkladů propojuje poptávku s možnostmi firmy. Nejde o univerzálně nejlepší segment — rozhodnutí vychází z konkrétní situace.'
  },

  'm04-vice-segmentu': {
    prompt: 'Krabička chce současně zavést rychlé pracovní obědy i individuální sportovní jídelníčky. Co musí před rozhodnutím posoudit?',
    options: {
      pozadavky: 'Zda zvládne odlišné požadavky obou skupin.',
      zdroje: 'Zda má potřebné zdroje.',
      zisk: 'Zda více segmentů automaticky znamená vyšší zisk.'
    },
    feedback: {
      pozadavky: 'Ano. Každá skupina potřebuje jinou nabídku, přípravu i komunikaci.',
      zdroje: 'Ano. Kuchyň, lidé, odbornost a peníze rozhodují, co je proveditelné.',
      zisk: 'Automaticky ne. Více segmentů znamená i vyšší náklady a nároky na koordinaci.'
    },
    explanation: 'Širší záběr může přinést víc zákazníků, ale jen pokud firma zvládne odlišné požadavky a má na to zdroje.'
  },

  // ───── Část 4
  'm04-zaklad': {
    prompt: 'Na čem staví Krabička svou pozici v jednotlivých návrzích?',
    categories: { usp: 'USP', esp: 'ESP', uziti: 'Způsob užití', cena: 'Cena a kvalita' },
    items: {
      okno: { text: 'Jako jediní v centru doručíme oběd přesně ve vámi zvolené čtvrthodině.', why: 'Jedinečný funkční přínos, který konkurence nenabízí: USP.' },
      pauza: { text: 'Na chvíli zpomal. Oběd od nás je tvoje klidná pauza uprostřed dne.', why: 'Nestaví na vlastnosti produktu, ale na pocitu: ESP.' },
      porada: { text: 'Obědové balíčky pro deset lidí na rychlou pracovní poradu.', why: 'Vymezuje situaci, pro kterou je nabídka určená: způsob užití.' },
      menu: { text: 'Poctivý oběd z čerstvých surovin za cenu menu v jídelně.', why: 'Staví na poměru toho, co zákazník dostane, a kolik zaplatí: cena a kvalita.' }
    },
    explanation: '<strong>USP</strong> staví na jedinečném funkčním přínosu, <strong>ESP</strong> na emoci. Pozici lze opřít také o <strong>způsob užití</strong> nebo o <strong>vztah ceny a kvality</strong>.'
  },

  'm04-pozice': {
    prompt: 'Který návrh nejlépe vymezuje pozici Krabičky pro zaměstnance kanceláří v centru?',
    options: {
      vsichni: '„Nejlepší obědy ve městě pro všechny, kdo mají hlad.“',
      spolehlivy: '„Spolehlivý pracovní oběd doručený do kanceláře ve zvoleném čase.“',
      wow: '„Krabička: moderní, chutná a zdravá volba na každý pracovní den.“'
    },
    feedback: {
      vsichni: 'Neříká, pro koho ani v čem. A „nejlepší“ se nedá doložit.',
      spolehlivy: 'Ano. Je jasná cílová situace (pracovní den v kanceláři), přínos (spolehlivé doručení v čase) i to, čím slib doložit. Krabička ale musí slíbené doručování skutečně zvládnout.',
      wow: 'Zní pozitivně, ale stejné slibují i ostatní. Nevymezuje cílovou situaci ani přínos, čím se Krabička liší.'
    },
    explanation: 'Dobrá pozice říká, pro koho jsme, jaký přínos nabízíme vůči alternativám a čím to doložíme.'
  },

  'm04-reposition': {
    prompt: 'Krabička se rozhodne přejít od obrazu nejlevnějšího oběda k pohodlnému doručení do kanceláře. Stačí přepsat úvodní větu na webu?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Přesně.',
    wrongLead: 'Věta na webu je jen slib.',
    explanation: '<strong>Ne.</strong> Novou pozici musí podpořit nabídka, doručování, cena i marketingová komunikace. Zákazník potřebuje slíbenou změnu také zažít.'
  },

  // ───── Část 5
  'm04-4p': {
    prompt: 'Který nástroj 4P Krabička řeší?',
    categories: { produkt: 'Produkt', cena: 'Cena', distribuce: 'Distribuce', komunikace: 'Marketingová komunikace' },
    items: {
      porce: { text: 'Obědová nabídka a velikost porce.', why: 'Co zákazník dostane: produkt.' },
      castka: { text: 'Částka za oběd a způsob úhrady.', why: 'Kolik a jak zaplatí: cena.' },
      rozvoz: { text: 'Rozvoz do kanceláří.', why: 'Jak se oběd dostane k zákazníkovi: distribuce.' },
      web: { text: 'Vysvětlení nabídky a doručování na webu.', why: 'Jak firma o nabídce informuje: marketingová komunikace.' }
    },
    explanation: 'Čtyři nástroje spolu souvisejí: dobrý oběd, který nejde rozumně objednat nebo doručit, svou pozici neobhájí.'
  },

  'm04-4c': {
    prompt: 'Vyber všechna správná tvrzení o Krabičce z pohledu 4C.',
    options: {
      jencena: '„Zákazníkovým nákladem je pouze cena oběda včetně rozvozu.“',
      cas: '„Do nákladů může patřit čas a úsilí potřebné k objednání.“',
      pohodli: '„Rozvoz má pro zákazníka význam také jako pohodlí.“',
      hodnota: '„Hodnotou může být úspora času během pracovního dne.“'
    },
    feedback: {
      jencena: 'Nesprávně. Náklady zákazníka jsou peněžní i nepeněžní: patří k nim i čas a úsilí.',
      cas: 'Ano. Složité objednání stojí zákazníka čas a úsilí, tedy nepeněžní náklad.',
      pohodli: 'Ano. Distribuce z pohledu firmy je pro zákazníka pohodlí: oběd přijde tam, kde ho potřebuje.',
      hodnota: 'Ano. Hodnota není jen jídlo samotné, ale i přínos, který zákazník získá, třeba ušetřený čas.'
    },
    explanation: '4C ukazuje stejnou nabídku očima zákazníka: co mu přináší, co ho stojí (nejen peníze), jak snadno ji získá a jak může s firmou komunikovat.'
  },

  'm04-nesoulad': {
    prompt: 'Co nejvíce odporuje slibované pozici?',
    options: {
      pohodli: 'Komplikované objednání a vyzvednutí oběda.',
      nazev: 'Cena o něco vyšší než v závodní jídelně.',
      obedy: 'Menší výběr jídel než v jídelně.'
    },
    feedback: {
      pohodli: 'Ano. Patnáct minut na telefonickou objednávku a vyzvednutí na okraji města jsou opakem pohodlí.',
      nazev: 'Vyšší cena slibu pohodlí přímo neodporuje; pohodlí za ni může stát.',
      obedy: 'Užší výběr se slibem pohodlí nekoliduje, Krabička nesoutěží šíří menu.'
    },
    explanation: 'Slíbené pohodlí musí být podpořeno skutečným postupem objednání a doručení. Marketingová komunikace sama nesoulad nevyřeší.'
  },


  // ───── Závěrečné procvičení
  'm04-z-kriterium': {
    prompt: '„Krabička rozděluje zákazníky podle četnosti objednávek.“ Jaké kritérium používá?',
    options: { geo: 'Geografické', demo: 'Demografické', psycho: 'Psychografické', behav: 'Behaviorální' },
    feedback: {
      geo: 'O místě tu nejde.',
      demo: 'Četnost objednávek není charakteristika osoby, jako je věk nebo příjem.',
      psycho: 'Nejde o životní styl ani hodnoty.',
      behav: 'Ano. Četnost objednávek je chování vůči nabídce.'
    },
    explanation: 'Jde o chování vůči nabídce: behaviorální kritérium.'
  },
  'm04-z-pouzitelnost': {
    prompt: '„Skupina má specifické požadavky, ale Krabička ji neumí oslovit ani zajistit rozvoz.“ Která vlastnost segmentu představuje problém?',
    options: { meritelnost: 'Měřitelnost', vyznamnost: 'Významnost', dostupnost: 'Dostupnost', obsluzitelnost: 'Praktická obsloužitelnost' },
    feedback: {
      meritelnost: 'O měření skupiny situace nic neříká.',
      vyznamnost: 'Velikost ani výnosnost tu nejsou problém.',
      dostupnost: 'Ano. Firma skupinu neumí oslovit ani k ní nabídku dostat.',
      obsluzitelnost: 'Ano. Bez rozvozu pro ni neumí uskutečnit program.'
    },
    explanation: 'Problém je v dostupnosti i praktické obsloužitelnosti. Obě odpovědi jsou správné.'
  },
  'm04-z-targeting': {
    prompt: '„Krabička po porovnání segmentů rozhodne, že novou nabídku zaměří na zaměstnance kanceláří v centru.“ O jaký krok jde?',
    options: { segmentace: 'Segmentace', targeting: 'Targeting', positioning: 'Positioning' },
    feedback: {
      segmentace: 'Segmenty už jsou popsané a porovnané. Teď se vybírá.',
      targeting: 'Ano. Jde o výběr skupiny, nikoli její teprve vznikající popis.',
      positioning: 'Positioning by řešil, jak chce být Krabička vnímána. Tady se rozhoduje, komu se věnovat.'
    },
    explanation: 'Výběr skupiny, které se firma bude věnovat, je targeting.'
  },
  'm04-z-positioning': {
    prompt: '„Krabička chce být vnímána jako pohodlné řešení oběda. Zákazníci ji ale spojují hlavně s komplikovaným objednáváním.“ Jak situaci vyhodnotíš?',
    options: {
      shoda: 'Pozice je dosažená, protože ji firma zvolila.',
      rozpor: 'Zamýšlená pozice a skutečné vnímání se rozcházejí.',
      slogan: 'Stačí nový slogan a pozice bude v pořádku.'
    },
    feedback: {
      shoda: 'Zvolená pozice je záměr. Rozhoduje, jak ji vnímají zákazníci.',
      rozpor: 'Ano. Firma musí zjistit příčiny a upravit skutečnou zkušenost s objednáváním.',
      slogan: 'Slogan zkušenost s komplikovaným objednáváním nezmění.'
    },
    explanation: 'Zamýšlená pozice a skutečné vnímání se rozcházejí. Řešením je změnit zkušenost, ne jen slova.'
  },
  'm04-z-4c': {
    prompt: '„Zákazník musí kvůli vyzvednutí oběda absolvovat dlouhou cestu.“ Které části 4C se to týká?',
    options: { pohodli: 'Pohodlí zákazníka', naklady: 'Náklady zákazníka', 'hodnota-produktu': 'Chuť a složení jídla', komunikace: 'Komunikace se zákazníkem' },
    feedback: {
      pohodli: 'Ano. Získat oběd je pro zákazníka obtížné.',
      naklady: 'Ano. Cesta stojí čas, úsilí a možná i peníze za dopravu.',
      'hodnota-produktu': 'Jídlo samotné se nemění. Problém je v tom, jak se k němu zákazník dostane.',
      komunikace: 'Nejde o výměnu informací, ale o způsob získání oběda.'
    },
    explanation: 'Dlouhá cesta snižuje pohodlí a zvyšuje nepeněžní náklady zákazníka. Obě souvislosti platí.'
  },
};
