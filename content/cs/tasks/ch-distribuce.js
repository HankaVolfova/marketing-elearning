// Úlohy kapitoly 8 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní firma TAH a její hra Víkendovka. Všechny údaje jsou fiktivní.

export default {

  // ───── Část 1
  'm08-prekazky': {
    prompt: 'Zákazník chce Víkendovku na sobotní rodinné setkání. Co může zabránit nákupu?',
    options: {
      cas: 'Hra je dostupná až příští týden.',
      misto: 'Jediný odběr je daleko a během jeho pracovní doby.',
      mnozstvi: 'Firma nabízí pouze balení po dvaceti hrách.',
      nazev: 'Hra stojí stejně jako podobné rodinné hry.'
    },
    feedback: {
      cas: 'Ano. Překážka v čase: do soboty hru nezíská.',
      misto: 'Ano. Překážka v místě a podmínkách: odběr je daleko a v době, kdy zákazník pracuje.',
      mnozstvi: 'Ano. Překážka v množství: rodina potřebuje jednu hru, ne dvacet.',
      nazev: 'Běžná cena v segmentu nákupu nebrání.'
    },
    explanation: 'Distribuce řeší, aby nabídka byla dostupná ve správném <strong>čase</strong>, na vhodném <strong>místě</strong>, v potřebném <strong>množství</strong> a za přijatelných podmínek.'
  },

  'm08-sklad': {
    prompt: 'TAH dopraví hru bez poškození do svého skladu. Znamená to, že už vyřešil dostupnost pro konečného zákazníka?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Ve skladu hra zákazníkovi nepomůže.',
    explanation: '<strong>Ne.</strong> Přeprava do skladu je jen část cesty. Zákazník ještě potřebuje možnost hru vhodným způsobem koupit a převzít.'
  },

  // ───── Část 2
  'm08-cesty': {
    prompt: 'Přímá, nebo nepřímá cesta?',
    categories: { prima: 'Přímá', neprima: 'Nepřímá' },
    items: {
      prodejna: { text: 'TAH prodá Víkendovku zákazníkovi ve vlastní prodejně.', why: 'Prodává sám výrobce: přímá.' },
      vlastni: { text: 'TAH prodá Víkendovku přes svůj e-shop přímo zákazníkovi.', why: 'Prodávajícím je stále TAH, jen online: přímá.' },
      obchod: { text: 'Nezávislý obchod koupí hry od TAHU a dále je prodává zákazníkům.', why: 'Mezi TAH a zákazníka vstupuje obchodník: nepřímá.' },
      nezavisly: { text: 'Nezávislý e-shop koupí hry od TAHU a dále je prodává zákazníkům.', why: 'E-shop patří jinému obchodníkovi, který hry nakoupil: nepřímá.' }
    },
    explanation: 'Online nebo kamenná podoba sama cestu neurčuje. Rozhoduje, <strong>kdo zákazníkovi prodává</strong>: výrobce, nebo jiný obchodník.'
  },

  'm08-dopravce': {
    prompt: 'Zákazník koupí hru přímo v e-shopu TAHU. Balík doručí externí dopravce. Změnila se tím cesta automaticky na nepřímou?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Přesně.',
    wrongLead: 'Dopravce hru jen veze.',
    explanation: '<strong>Ne.</strong> Dopravce v této situaci zajišťuje přepravu. Hru nekupuje a neprodává zákazníkovi; prodávajícím zůstává TAH.'
  },

  'm08-delka': {
    prompt: 'Kolik obchodních mezičlánků má každá cesta ze schématu?',
    categories: { '0': '0', '1': '1', '2': '2' },
    items: {
      a: { text: 'Cesta A: TAH → zákazník.', why: 'Mezi výrobcem a zákazníkem nikdo není: 0.' },
      b: { text: 'Cesta B: TAH → nezávislý maloobchod → zákazník.', why: 'Jeden obchodník (maloobchod): 1.' },
      c: { text: 'Cesta C: TAH → nezávislý velkoobchod → maloobchod → zákazník.', why: 'Dva obchodníci (velkoobchod a maloobchod): 2.' }
    },
    explanation: 'Počítáme jen obchodní mezičlánky mezi výrobcem a konečným zákazníkem, ne výrobce, zákazníka, sklady ani dopravce.'
  },

  // ───── Část 3
  'm08-role': {
    prompt: 'Jakou roli partner plní?',
    categories: { maloobchod: 'Maloobchod', velkoobchod: 'Velkoobchod', zprostredkovatel: 'Zprostředkovatel' },
    items: {
      rodiny: { text: 'Obchod nabízí Víkendovku rodinám spolu s hrami dalších výrobců.', why: 'Prodává konečným zákazníkům pro jejich užití: maloobchod.' },
      zasobuje: { text: 'Firma nakupuje větší množství her a zásobuje prodejny.', why: 'Prodává dalším obchodníkům: velkoobchod.' },
      provize: { text: 'Samostatný partner vyhledá pro TAH odběratele a za sjednaný obchod dostává provizi. Hry sám nenakupuje k dalšímu prodeji.', why: 'Pomáhá sjednat obchod mezi jinými: zprostředkovatel.' }
    },
    explanation: 'Rozhoduje, <strong>komu a jak</strong> partner prodává, ne velikost objednávky: maloobchod konečným zákazníkům, velkoobchod dalším firmám, zprostředkovatel obchod sjednává.'
  },

  'm08-partner': {
    prompt: 'Specializovaný obchod nabízí TAHU spolupráci. Co má firma posoudit?',
    options: {
      zakaznici: 'Zda obchod oslovuje vhodné zákazníky.',
      sluzby: 'Jaké služby poskytne a jak bude hry prezentovat.',
      podminky: 'Jaké budou obchodní podmínky a náklady spolupráce.',
      pocet: 'Především počet jeho prodejen, ostatní je druhořadé.'
    },
    feedback: {
      zakaznici: 'Ano. Partner má smysl, když se k němu dostanou lidé, pro které je Víkendovka určená.',
      sluzby: 'Ano. Rodinnou hru pomáhá prodat ukázka a rada.',
      podminky: 'Ano. Spolupráce stojí peníze a vyžaduje dohodu.',
      pocet: 'Počet prodejen je jen jedno hledisko. Bez vhodných zákazníků, služeb a výhodných podmínek nestačí.'
    },
    explanation: 'Více míst může zvýšit dostupnost, ale rozhodující je také vhodnost partnera, služby a ekonomika spolupráce.'
  },

  'm08-velkoobchod': {
    prompt: 'Velkoobchod má zásoby blízko prodejen a spojuje dodávky více výrobců. Může tím prodejny zásobovat rychleji a efektivněji než jednotliví výrobci samostatně?',
    options: { ano: 'Ano, může', ne: 'Ne, nemůže' },
    correctLead: 'Ano.',
    wrongLead: 'Další článek cestu nemusí zhoršit.',
    explanation: '<strong>Ano, může.</strong> Další obchodní úroveň může přinést efektivnější skladování a zásobování. Výsledek závisí na konkrétním uspořádání, nikoli pouze na počtu článků.'
  },

  // ───── Část 4
  'm08-intenzita': {
    prompt: 'Kterou distribuční strategii TAH v jednotlivých plánech volí?',
    categories: { intenzivni: 'Intenzivní', selektivni: 'Selektivní', exkluzivni: 'Exkluzivní' },
    items: {
      kapesni: { text: 'Jednoduchou kapesní hru nabídneme v co nejširší síti vhodných obchodů, včetně čerpacích stanic.', why: 'Cílem je co nejširší dostupnost: intenzivní.' },
      predvest: { text: 'Složitější strategickou hru dáme jen do obchodů, které ji umějí předvést a poradit s výběrem.', why: 'Vybraní partneři podle požadavků, bez výhradnosti: selektivní.' },
      sberatelska: { text: 'Sběratelskou edici bude v Praze prodávat výhradně jeden specializovaný obchod.', why: 'Výhradní zastoupení na vymezeném území: exkluzivní.' },
      dovozce: { text: 'Na Slovensku bude hru dovážet a prodávat jen jeden dovozce s výhradní smlouvou.', why: 'Výhradní dovozce pro zemi: exkluzivní. Exkluzivita nemusí znamenat luxusní výrobek.' }
    },
    explanation: '<strong>Všude</strong> (intenzivní), <strong>u vybraných</strong> (selektivní), nebo <strong>výhradně</strong> (exkluzivní). O strategii rozhoduje požadované pokrytí trhu a výběr partnerů, ne cena výrobku.'
  },

  // ───── Část 5
  'm08-kanaly': {
    prompt: 'Co uspořádání TAHU obsahuje?',
    options: {
      prima: 'Přímou distribuční cestu.',
      neprima: 'Nepřímou distribuční cestu.',
      exkluzivni: 'Automaticky exkluzivní distribuci.'
    },
    feedback: {
      prima: 'Ano. Vlastní e-shop prodává přímo.',
      neprima: 'Ano. Nezávislé prodejny jsou obchodní mezičlánek.',
      exkluzivni: 'Výhradnost v plánu není. Vybrané prodejny odpovídají spíš selektivní distribuci.'
    },
    explanation: 'Vlastní e-shop a nezávislé prodejny představují různé obchodní cesty. Samotná kombinace kanálů neříká, že existuje výhradnost.'
  },

  'm08-skladem': {
    prompt: 'Co potřebuje firma především vyjasnit?',
    options: {
      zasoba: 'Rozdíl mezi zásobou ve skladu a dostupností na prodejně.',
      barva: 'Zda e-shop potřebuje výraznější reklamu na úvodní stránce.',
      nazev: 'Zda snížit cenu hry na webu, aby se lépe prodávala.'
    },
    feedback: {
      zasoba: 'Ano. „Skladem“ platí pro sklad, ne pro vybranou prodejnu.',
      barva: 'Reklama přivede víc lidí ke stejné nepřesné informaci o dostupnosti.',
      nazev: 'Cena problém s nepřesnou dostupností nevyřeší.'
    },
    explanation: 'Zákazník potřebuje vědět, kde hra skutečně je a kdy ji může získat. Obecné „skladem“ nestačí, pokud vytváří jiné očekávání.'
  },

  'm08-proces': {
    prompt: 'Co musí TAH při zavedení vyzvednutí objednávek u partnera domluvit?',
    options: {
      overeni: 'Jak se ověří dostupnost hry.',
      pripraveno: 'Kdy bude objednávka připravena.',
      informuje: 'Kdo zákazníka informuje a kdo řeší dotazy k předání.',
      obrazek: 'Hlavně společnou reklamu na sociálních sítích.'
    },
    feedback: {
      overeni: 'Ano. Zákazník musí vidět skutečnou dostupnost na vybrané prodejně.',
      pripraveno: 'Ano. Bez termínu nemůže zákazník přijít ve správnou chvíli.',
      informuje: 'Ano. Jasné role zabrání tomu, aby se zákazník ptal na dvou místech a nikdo nevěděl.',
      obrazek: 'Společná prezentace sama zákazníkovi hru nepředá.'
    },
    explanation: 'Propojení potřebuje fungující proces a jasné role. Společná prezentace sama zákazníkovi hru nepředá.'
  },


  // ───── Závěrečné procvičení
  'm08-z-dostupnost': {
    prompt: '„Hru lze koupit pouze v balení po deseti kusech. Zákazník chce jednu pro rodinu.“ V čem je překážka?',
    options: { mnozstvi: 'V množství a podmínkách získání.', reklama: 'V nedostatečné reklamě hry.', cena: 'V příliš vysoké ceně balení.' },
    feedback: {
      mnozstvi: 'Ano. Zákazník nemůže získat potřebné množství.',
      reklama: 'Zákazník o hře ví, jen ji nemůže koupit v potřebném množství.',
      cena: 'Cena balení může odradit, ale hlavní překážkou je, že jednu hru nejde koupit vůbec.'
    },
    explanation: 'Překážka v množství a podmínkách získání nabídky.'
  },
  'm08-z-cesta': {
    prompt: '„Nezávislý e-shop nakoupí hry od TAHU a prodává je rodinám.“ O jakou cestu jde?',
    options: { prima: 'Přímá cesta', neprima1: 'Nepřímá cesta s jedním obchodním mezičlánkem', neprima2: 'Nepřímá cesta se dvěma obchodními mezičlánky' },
    feedback: {
      prima: 'Prodávajícím je nezávislý e-shop, ne TAH.',
      neprima1: 'Ano. Jeden obchodník mezi TAHEM a rodinami.',
      neprima2: 'Mezi TAHEM a rodinami je jen nezávislý e-shop.'
    },
    explanation: 'Nezávislý e-shop je jeden obchodní mezičlánek.'
  },
  'm08-z-dopravce': {
    prompt: '„Vlastní e-shop TAHU využije externího dopravce.“ Jaká je to cesta?',
    options: { prima: 'Přímá', neprima: 'Nepřímá' },
    correctLead: 'Správně.',
    wrongLead: 'Dopravce není prodejce.',
    explanation: '<strong>Přímá.</strong> Prodávajícím zůstává TAH; dopravce zajišťuje jen přepravu.'
  },
  'm08-z-role': {
    prompt: '„Partner dodává hry více maloobchodním prodejnám.“ Jakou roli plní?',
    options: { maloobchod: 'Maloobchodní', velkoobchod: 'Velkoobchodní', zprostredkovatel: 'Zprostředkovatelskou' },
    feedback: {
      maloobchod: 'Maloobchod prodává konečným zákazníkům, ne prodejnám.',
      velkoobchod: 'Ano. Prodává dalším obchodníkům.',
      zprostredkovatel: 'Partner hry dodává, nejen sjednává obchod.'
    },
    explanation: 'Rozhoduje, komu a pro jaké použití prodává, nikoli jen velikost objednávky.'
  },
  'm08-z-intenzita': {
    prompt: '„TAH vybírá několik prodejen podle schopnosti předvést hru, ale žádné nesvěřuje výhradní zastoupení.“ O jakou distribuci jde?',
    options: { intenzivni: 'Intenzivní', selektivni: 'Selektivní', exkluzivni: 'Exkluzivní' },
    feedback: {
      intenzivni: 'TAH nehledá co nejvíce míst, ale vybírá.',
      selektivni: 'Ano. Vybraní partneři bez výhradnosti.',
      exkluzivni: 'Chybí výhradní zastoupení.'
    },
    explanation: 'Výběr partnerů bez výhradnosti: selektivní distribuce.'
  },
  'm08-z-kanaly': {
    prompt: '„Web slibuje vyzvednutí ještě dnes, ale prodejna objednávku dostane až za tři dny.“ Jaký je závěr?',
    options: { nesoulad: 'Nesoulad slibu na webu a skutečného předání.', reklama: 'Prodejna potřebuje silnější reklamu.', cena: 'Je potřeba snížit cenu objednávky.' },
    feedback: {
      nesoulad: 'Ano. Slib na webu neodpovídá tomu, co se skutečně děje.',
      reklama: 'Reklama problém s předáním nevyřeší.',
      cena: 'Cena s problémem nesouvisí.'
    },
    explanation: 'Nesoulad informací a skutečného procesu předání. Slib zákazníkovi musí odpovídat realitě.'
  },
};
