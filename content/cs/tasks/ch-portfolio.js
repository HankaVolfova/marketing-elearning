// Úlohy kapitoly 11 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní firma VENKU (outdoorové vybavení). Všechny údaje jsou fiktivní.

export default {

  // ───── Část 1
  'm11-samostatne': {
    prompt: 'VENKU má omezené prostředky. Má při posuzování jedné řady brát v úvahu i potřeby a možnosti ostatních?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Žádosti dohromady přesahují rozpočet skoro dvakrát.',
    explanation: '<strong>Ano.</strong> Jednotlivé řady mají různé potřeby a role. Firma rozhoduje také o tom, jak mezi ně rozdělit společné zdroje.'
  },
  'm11-sbu': {
    prompt: 'Co podle uvedených podmínek představuje SBU?',
    options: {
      stany: 'Řada stanů s vlastní strategií a odpovědností za výsledky.',
      modra: 'Nová modrá varianta stanu s vlastním kódem v katalogu.'
    },
    feedback: {
      stany: 'Ano. Splňuje podmínky samostatného strategického řízení.',
      modra: 'Barevná varianta nemá vlastní trh, strategii ani odpovědnost za výsledky.'
    },
    explanation: 'SBU vymezujeme podle strategického řízení. Ne každá položka nebo varianta produktu je automaticky samostatnou jednotkou.'
  },

  // ───── Část 2
  'm11-vypocet': {
    prompt: 'Batohy VENKU se za rok prodaly za 12 mil. Kč, batohy největšího konkurenta na stejném trhu za 8 mil. Kč. Jaký je relativní tržní podíl batohů VENKU?',
    options: { '067': '0,67', '15': '1,5', '4': '4' },
    feedback: {
      '067': 'Obrácený poměr: 8 ÷ 12. Do čitatele patří hodnocená jednotka.',
      '15': 'Ano. 12 ÷ 8 = 1,5.',
      '4': 'To je rozdíl v milionech (12 − 8), ne poměr.'
    },
    explanation: 'Postup: 12 ÷ 8 = <strong>1,5</strong>. Porovnáváme VENKU s největším konkurentem. Nejde o podíl na celkovém trhu.'
  },
  'm11-rust': {
    prompt: 'Celý trh stanů vzrostl za rok o 15 %, prodej stanů VENKU o 4 %. Který údaj patří na osu růstu trhu v BCG?',
    options: { trh: '15 % (růst celého vymezeného trhu stanů)', venku: '4 % (meziroční růst prodeje stanů firmy VENKU)' },
    feedback: {
      trh: 'Ano.',
      venku: 'To je růst vlastních prodejů, ne trhu.'
    },
    explanation: 'Osa popisuje vývoj celého trhu. Růst prodejů jedné firmy je jiný údaj.'
  },
  // ───── Část 3
  'm11-pozice': {
    prompt: 'Kam patří jednotlivé řady VENKU?',
    categories: { hvezda: 'Hvězda', otaznik: 'Otazník', krava: 'Dojná kráva', pes: 'Pes' },
    items: {
      batohy: { text: 'Batohy: relativní podíl 1,5; růst trhu 15 %.', why: 'Silnější než konkurent, trh roste rychle: hvězda.' },
      spacaky: { text: 'Spacáky: relativní podíl 0,5; růst trhu 18 %.', why: 'Slabší než konkurent, trh roste rychle: otazník.' },
      stany: { text: 'Stany: relativní podíl 1,4; růst trhu 3 %.', why: 'Silnější než konkurent, trh roste pomalu: dojná kráva.' },
      hole: { text: 'Trekové hole: relativní podíl 0,6; růst trhu 2 %.', why: 'Slabší než konkurent, trh roste pomalu: pes.' }
    },
    explanation: 'U každé řady stačí dvě otázky: je podíl nad 1? Roste trh nad 10 %? Kolik řada vydělává, z pozice přímo nevyčteme.'
  },

  'm11-spacaky': {
    prompt: 'Spacáky jsou otazník. Co je nejvhodnější další otázka?',
    options: {
      zdroje: 'Co a kolik potřebujeme k posílení jejich pozice?',
      zrusit: 'Kdy řadu utlumit, protože má nízký podíl?',
      hvezda: 'Jak řadu udržet beze změny, dokud trh roste?'
    },
    feedback: {
      zdroje: 'Ano.',
      zrusit: 'Nízký podíl na rostoucím trhu může být příležitostí; utlumit řadu bez posouzení je předčasné.',
      hvezda: 'Beze změny se pozice sama nezlepší; silnější podíl je potřeba aktivně získat.'
    },
    explanation: 'Rostoucí trh může nabídnout příležitost. Rozvoj ale vyžaduje posouzení zdrojů, konkurence a dosažitelnosti silnější pozice.'
  },

  // ───── Část 4
  'm11-pes': {
    prompt: 'Potřebuje VENKU před rozhodnutím o řadě trekových holí víc informací než jen označení pes?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Podívej se na doplňující informace o řadě.',
    explanation: '<strong>Ano.</strong> Firma musí posoudit i její skutečný přínos a vazby v portfoliu. Kvadrant není automatický příkaz k ukončení.'
  },
  'm11-trh': {
    prompt: 'VENKU spočítá svůj prodej turistických batohů proti prodeji všech druhů zavazadel jednoho konkurenta. Může takové porovnání zkreslit obraz pozice na trhu turistických batohů?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Porovnáváš batohy s kufry, taškami a dalšími zavazadly.',
    explanation: '<strong>Ano.</strong> Čitatel a jmenovatel musí odpovídat stejnému vymezenému trhu. Jinak může výsledek vytvářet zavádějící obraz pozice.'
  },

  // ───── Část 5
  'm11-kriteria': {
    prompt: 'Ke které ose matice GE kritérium patří?',
    categories: { atraktivita: 'Atraktivita trhu', postaveni: 'Konkurenční postavení' },
    items: {
      velikost: { text: 'Velikost a růst trhu outdoorového vybavení.', why: 'Popisuje trh, ne VENKU.' },
      intenzita: { text: 'Intenzita konkurence v odvětví.', why: 'Podmínka trhu, která platí pro všechny, kdo na něm působí.' },
      znacka: { text: 'Rozpoznatelnost značky VENKU a preference zákazníků.', why: 'Schopnost VENKU uspět vůči konkurenci.' },
      distribuce: { text: 'Dostupnost a výkonnost distribuční sítě VENKU.', why: 'Schopnost VENKU uspět vůči konkurenci.' }
    },
    explanation: 'Atraktivita trhu popisuje podmínky a perspektivy trhu; konkurenční postavení schopnosti jednotky. Seznam kritérií není uzavřený, volí se podle situace.'
  },
  'm11-body': {
    prompt: 'VENKU přidělí každému kritériu pět bodů jen proto, aby řada vypadala dobře. Stačí tím získat důvěryhodnou analýzu?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Body bez podkladů jsou jen přání.',
    explanation: '<strong>Ne.</strong> Čísla nezaručují objektivitu. Hodnocení potřebuje podklady a srozumitelná pravidla.'
  },
  'm11-ge-batohy': {
    prompt: 'Řada batohů má podle podloženého hodnocení silné konkurenční postavení a vysokou atraktivitu trhu. Jaký směr má smysl posoudit?',
    options: {
      rozvoj: 'Rozvoj a investice, po ověření zdrojů.',
      ukonceni: 'Sklizeň: omezit podporu a čerpat výnosy.',
      bezohledu: 'Výběrovou podporu jen některých modelů.'
    },
    feedback: {
      rozvoj: 'Ano.',
      ukonceni: 'Sklizeň se posuzuje u slabších kombinací, ne u silné pozice na atraktivním trhu.',
      bezohledu: 'Výběrová podpora odpovídá smíšeným kombinacím. Tady jde o nejsilnější pole.'
    },
    explanation: 'Pozice podporuje úvahu o rozvoji, ale konkrétní rozsah investice stále vyžaduje rozhodnutí.'
  },

  // ───── Nepovinné
  // ───── Závěrečné procvičení
  'm11-z-sbu': {
    prompt: '„Řada má samostatnou strategii, vedení, rozpočet a vymezené konkurenty.“ Co z toho plyne?',
    options: { sbu: 'Může být vymezena jako SBU.', polozka: 'Je to jen položka sortimentu.', nikdy: 'Produktová řada nikdy nemůže být SBU.' },
    feedback: {
      sbu: 'Ano.',
      polozka: 'Má vlastní strategii i odpovědnost; jde o víc než položku.',
      nikdy: 'Může, pokud splňuje podmínky samostatného řízení.'
    },
    explanation: 'Splňuje podmínky samostatného strategického řízení, může být vymezena jako SBU.'
  },
  'm11-z-barva': {
    prompt: '„Jiná barva stejného výrobku je automaticky další SBU.“ Platí to?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Barva sama strategické řízení nezakládá.',
    explanation: '<strong>Ne.</strong> SBU vymezujeme podle samostatného strategického řízení, ne podle varianty výrobku.'
  },
  'm11-z-podil': {
    prompt: 'Prodeje jednotky: 6 mil. Kč. Prodeje největšího konkurenta na stejném trhu: 12 mil. Kč. Jaký je relativní tržní podíl?',
    options: { '05': '0,5', '2': '2', '18': '18' },
    feedback: {
      '05': 'Ano. 6 ÷ 12 = 0,5.',
      '2': 'Obrácený poměr; do čitatele patří hodnocená jednotka.',
      '18': 'To je součet prodejů.'
    },
    explanation: '6 ÷ 12 = 0,5. Jednotka má poloviční prodeje než největší konkurent.'
  },
  'm11-z-vlastni': {
    prompt: '„Růst vlastního prodeje o 20 % automaticky znamená růst trhu o 20 %.“ Platí to?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Vzpomeň si na stany: trh +15 %, VENKU +4 %.',
    explanation: '<strong>Ne.</strong> Vlastní prodej může růst rychleji i pomaleji než celý trh.'
  },
  'm11-z-kvadranty': {
    prompt: 'Při výukové hranici růstu 10 % zařaď jednotky do matice BCG.',
    categories: { hvezda: 'Hvězda', krava: 'Dojná kráva', otaznik: 'Otazník', pes: 'Pes' },
    items: {
      a: { text: 'Relativní podíl 1,6; růst trhu 14 %.', why: 'Podíl nad 1, růst nad 10 %: hvězda.' },
      b: { text: 'Relativní podíl 1,3; růst trhu 4 %.', why: 'Podíl nad 1, růst pod 10 %: dojná kráva.' },
      c: { text: 'Relativní podíl 0,4; růst trhu 16 %.', why: 'Podíl pod 1, růst nad 10 %: otazník.' },
      d: { text: 'Relativní podíl 0,7; růst trhu 1 %.', why: 'Podíl pod 1, růst pod 10 %: pes.' }
    },
    explanation: 'Vždy rozhodují obě osy: relativní podíl vůči 1 a růst trhu vůči zvolené hranici.'
  },
  'm11-z-pes': {
    prompt: '„Jednotka zařazená mezi psy může být zisková.“ Platí to?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Vzpomeň si na trekové hole.',
    explanation: '<strong>Ano.</strong> Ziskovost z tohoto zařazení přímo nevyplývá.'
  },
  'm11-z-ge': {
    prompt: 'Přiřaď osu matice GE k jejímu významu.',
    categories: { podminky: 'Hodnocení podmínek a perspektiv trhu', schopnost: 'Hodnocení schopnosti jednotky uspět vůči konkurenci' },
    items: {
      atraktivita: { text: 'Atraktivita trhu', why: 'Popisuje trh.' },
      postaveni: { text: 'Konkurenční postavení', why: 'Popisuje jednotku vůči konkurenci.' }
    },
    explanation: 'Atraktivita trhu hodnotí trh, konkurenční postavení hodnotí jednotku.'
  },
  'm11-z-vahy': {
    prompt: '„Výsledek GE závisí na volbě kritérií a vah.“ Platí to?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Zkus změnit váhu jednoho kritéria: skóre se změní.',
    explanation: '<strong>Ano.</strong> Výsledek přímo závisí na zvolených kritériích, vahách i hodnocení; proto je musíme zdůvodnit.'
  },
};
