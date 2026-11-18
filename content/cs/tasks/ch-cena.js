// Úlohy kapitoly 7 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní firma ZÁŘ. Všechny částky jsou fiktivní a bez DPH.

export default {

  // ───── Část 1
  'm07-ctz': {
    prompt: 'Vedoucí prodeje ZÁŘE hlásí: „Tento týden jsme na lampách vydělali 10 000 Kč.“ Má pravdu?',
    options: {
      ano: 'Ano, za deset lamp po 1 000 Kč firma vydělala 10 000 Kč.',
      trzby: 'Ne, 10 000 Kč jsou tržby, firmě po odečtení nákladů zbylo 2 000 Kč.',
      naklady: 'Ne, vydělali 8 000 Kč, protože tolik činily náklady na lampy.'
    },
    feedback: {
      ano: '10 × 1 000 Kč = 10 000 Kč jsou tržby. „Vydělali“ obvykle myslíme zisk, a ten zjistíme až po odečtení nákladů.',
      trzby: 'Ano. Tržby 10 000 Kč − náklady 8 000 Kč = zisk 2 000 Kč.',
      naklady: 'Náklady firma zaplatila, nevydělala je. Zisk = tržby − náklady = 2 000 Kč.'
    },
    explanation: '<strong>Cena</strong> je 1 000 Kč za lampu, <strong>tržby</strong> 10 × 1 000 = 10 000 Kč, <strong>zisk</strong> 10 000 − 8 000 = 2 000 Kč.'
  },

  'm07-kvalita': {
    prompt: 'ZÁŘ nabídne dvě lampy. Jedna je dražší. Stačí cenovka k závěru, že je kvalitnější?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Cenovka je jen jeden údaj.',
    explanation: '<strong>Ne.</strong> Cena může vyvolávat určitý dojem. K posouzení kvality potřebujeme také informace o vlastnostech, provedení a zkušenostech s používáním.'
  },

  // ───── Část 2
  'm07-cile': {
    prompt: 'Jaký hlavní cíl ZÁŘ výrokem sleduje?',
    categories: { podil: 'Získání zákazníků / tržní podíl', objem: 'Zvýšení objemu prodeje zásob', zisk: 'Zisk' },
    items: {
      zakaznici: { text: '„Chceme rychleji získat zákazníky pro nový model.“', why: 'Hlavní je počet zákazníků a podíl na trhu.' },
      sklad: { text: '„Potřebujeme uvolnit sklad starší řady.“', why: 'Cílem je prodat zásoby, tedy objem prodeje.' },
      vysledek: { text: '„Hledáme ekonomicky nejlepší výsledek po odečtení nákladů.“', why: 'Výsledek po odečtení nákladů: zisk.' }
    },
    explanation: 'Cíle se mohou kombinovat a někdy si odporují: rychlé získání zákazníků nízkou cenou může na čas snížit zisk.'
  },

  'm07-naklady': {
    prompt: 'Fixní, nebo variabilní náklady? Rozhodujte podle popsaného chování nákladu.',
    categories: { fixni: 'Fixní', variabilni: 'Variabilní' },
    items: {
      najem: { text: 'Sjednaný měsíční nájem dílny při stejné kapacitě.', why: 'Platí se stejně, ať ZÁŘ vyrobí 10, nebo 100 lamp: fixní.' },
      material: { text: 'Materiál spotřebovaný na výrobu každé další lampy.', why: 'S každou lampou přibude: variabilní.' },
      obal: { text: 'Obal pro každý vyrobený kus.', why: 'Každý kus potřebuje obal: variabilní.' },
      software: { text: 'Sjednaný paušál za administrativní software.', why: 'Pevná částka bez ohledu na počet lamp: fixní.' }
    },
    explanation: 'Zařazení vychází z toho, jak se náklad chová při změně objemu. Stejný druh nákladu (třeba mzdy nebo energie) může být podle situace fixní i variabilní.'
  },

  'm07-kus': {
    prompt: 'Jaké jsou v této kalkulaci celkové náklady na jednu lampu?',
    options: { '500': '500 Kč', '700': '700 Kč', '20500': '20 500 Kč' },
    feedback: {
      '500': 'To jsou jen variabilní náklady. Chybí podíl fixních nákladů na kus.',
      '700': 'Ano. 20 000 ÷ 100 + 500 = 700 Kč na kus.',
      '20500': 'Fixní náklady patří celému období. Na jeden kus je potřeba je rozpočítat: 20 000 ÷ 100.'
    },
    explanation: 'Postup: 20 000 ÷ 100 = 200 Kč fixních nákladů na kus; 200 + 500 = <strong>700 Kč na kus</strong>.'
  },

  // ───── Část 3
  'm07-prirazka': {
    prompt: 'Kalkulované náklady na lampu činí 700 Kč. ZÁŘ přidá přirážku 20 % z těchto nákladů. Jaká bude cena?',
    options: { '770': '770 Kč', '840': '840 Kč', '875': '875 Kč' },
    feedback: {
      '770': '770 Kč by odpovídalo přirážce 10 %. Spočítejte 20 % ze 700 Kč.',
      '840': 'Ano. 700 × 0,20 = 140 Kč; 700 + 140 = 840 Kč.',
      '875': 'Takto by vyšla cena s marží 20 % z prodejní ceny (700 ÷ 0,8). My počítáme přirážku z nákladů.'
    },
    explanation: 'Postup: 700 × 0,20 = 140 Kč; 700 + 140 = <strong>840 Kč</strong>. Přirážku počítáme z nákladů. Zákaznickou ochotu tuto cenu zaplatit tím ještě neověřujeme.'
  },

  'm07-metody': {
    prompt: 'Kterou metodou ZÁŘ postupuje?',
    categories: { poptavkova: 'Poptávková', konkurencni: 'Konkurenční', nakladova: 'Nákladová' },
    items: {
      hodnota: { text: '„ZÁŘ zjišťuje, jakou hodnotu má pro zákazníky nastavitelná lampa a jak reagují na různé ceny.“', why: 'Východiskem je zákazník a jeho ochota zaplatit: poptávková.' },
      porovnani: { text: '„ZÁŘ porovnává svou lampu s podobnými nabídkami a jejich cenami.“', why: 'Východiskem jsou alternativy na trhu: konkurenční.' },
      naklady: { text: '„ZÁŘ vychází z nákladů 700 Kč a přidává přirážku.“', why: 'Východiskem jsou náklady: nákladová.' }
    },
    explanation: 'Metody se liší východiskem: náklady, zákazník, nebo konkurence.'
  },

  'm07-kombinace': {
    prompt: 'ZÁŘ spočítá cenu s přirážkou. Co ještě potřebuje posoudit?',
    options: {
      prijmou: 'Zda ji zákazníci přijmou.',
      hodnota: 'Jaká je hodnota nabídky vůči alternativám.',
      cile: 'Zda odpovídá cílům a pozici firmy.',
      nic: 'Zda je přirážka stejná jako u předchozího modelu.'
    },
    feedback: {
      prijmou: 'Ano. Výpočet neříká nic o ochotě zákazníků platit.',
      hodnota: 'Ano. Zákazník lampu porovnává s alternativami.',
      cile: 'Ano. Cena musí ladit s tím, čeho chce firma dosáhnout a jak chce být vnímána.',
      nic: 'Stejná přirážka jako dřív nic neříká o tom, zda zákazníci novou lampu za tuto cenu koupí.'
    },
    explanation: 'Metody představují různá východiska. Výsledné rozhodnutí obvykle propojuje náklady, zákazníky a konkurenci.'
  },

  // ───── Část 4
  'm07-strategie': {
    prompt: 'Kterou cenovou strategii ZÁŘ v jednotlivých scénářích volí?',
    categories: { skimming: 'Sbírání smetany', penetrace: 'Cenové pronikání', premiova: 'Prémiová cena', ekonomicka: 'Ekonomická cena' },
    items: {
      prvni: { text: '„Nový model nabídneme za vyšší cenu těm, kdo ho chtějí mezi prvními, a později cenu postupně snížíme.“', why: 'Vyšší vstupní cena s plánovaným snižováním: sbírání smetany.' },
      rychle: { text: '„Nový model uvedeme s nízkou vstupní cenou, abychom rychle získali co nejvíc zákazníků.“', why: 'Nízká vstupní cena pro rychlé získání zákazníků: cenové pronikání.' },
      dlouhodobe: { text: '„Cenu držíme dlouhodobě vysoko a zlevňovat neplánujeme. Nabízíme propracované provedení a nadstandardní servis.“', why: 'Dlouhodobě vyšší cena podložená hodnotou, bez plánovaného zlevňování: prémiová cena.' },
      jednoduche: { text: '„Jednoduchý funkční model bez doplňků držíme díky úspornému řešení trvale za dostupnou cenu.“', why: 'Dlouhodobě dostupná cena díky úspornému řešení: ekonomická cena.' }
    },
    explanation: 'Sbírání smetany a cenové pronikání řeší <strong>vstup</strong> nového produktu, prémiová a ekonomická cena <strong>dlouhodobé postavení</strong>. Nízká cena sama nedokazuje nízkou kvalitu a cenové pronikání nevyžaduje nekvalitní produkt.'
  },

  // ───── Část 5
  'm07-sleva-objem': {
    prompt: 'Kolik lamp musí ZÁŘ se slevou 10 % prodat, aby měla stejný týdenní zisk 2 000 Kč jako bez slevy?',
    options: { '11': '11 lamp', '15': '15 lamp', '20': '20 lamp' },
    feedback: {
      '11': 'Tak by to vyšlo, kdyby stačilo zvýšit prodej o stejných 10 % jako sleva. Z lampy ale nezbývá o 10 % méně, nýbrž o polovinu méně.',
      '15': '15 × 100 Kč = 1 500 Kč. Na původních 2 000 Kč to nestačí.',
      '20': 'Ano. Z lampy teď zbude 100 Kč, takže na 2 000 Kč je potřeba 2 000 ÷ 100 = 20 lamp.'
    },
    explanation: 'Z lampy se slevou zbude 100 Kč místo 200 Kč. Na stejný zisk 2 000 Kč musí ZÁŘ prodat <strong>20 lamp, tedy dvojnásobek</strong>. Sleva 10 % vyžaduje dvakrát vyšší prodej.'
  },

  'm07-vnimani': {
    prompt: 'Co který prvek nabídky ZÁŘE využívá?',
    categories: { psychologicka: 'Psychologická cena', kotva: 'Možná cenová kotva' },
    items: {
      koncovka: { text: 'Cena lampy 999 Kč místo 1 000 Kč.', why: 'Koncovka ceny: psychologická cena.' },
      vedle: { text: 'Zobrazení základního modelu vedle výrazně dražšího vybaveného modelu.', why: 'Dražší model vytváří referenční bod pro porovnání: možná cenová kotva.' }
    },
    explanation: 'Koncovka může ovlivnit dojem z částky. Vedlejší cena může změnit referenční rámec. Ani jedno nezaručuje nákup.'
  },


  // ───── Závěrečné procvičení
  'm07-z-trzby': {
    prompt: '„ZÁŘ prodá 20 lamp po 800 Kč.“ Co můžeme z těchto údajů určit?',
    options: { trzby: 'Tržby 16 000 Kč', zisk: 'Zisk 16 000 Kč', oboji: 'Tržby i zisk' },
    feedback: {
      trzby: 'Ano. 20 × 800 = 16 000 Kč tržeb.',
      zisk: 'Bez nákladů zisk určit nelze. 16 000 Kč jsou tržby.',
      oboji: 'Zisk nezjistíme, dokud neznáme náklady.'
    },
    explanation: '20 × 800 = 16 000 Kč tržeb. Bez nákladů nelze určit zisk.'
  },
  'm07-z-naklady': {
    prompt: 'Fixní, nebo variabilní náklady?',
    categories: { fixni: 'Fixní', variabilni: 'Variabilní' },
    items: {
      material: { text: 'Materiál na každou další lampu.', why: 'Roste s počtem lamp: variabilní.' },
      najem: { text: 'Sjednaný nájem za stejné období a kapacitu.', why: 'Nemění se s počtem lamp: fixní.' }
    },
    explanation: 'Rozhoduje, zda se náklad mění s objemem produkce.'
  },
  'm07-z-metoda': {
    prompt: '„ZÁŘ zjišťuje, jak zákazníci vnímají přínos nového modelu a kolik jsou za něj ochotni zaplatit.“ Jakou metodu používá?',
    options: { nakladova: 'Nákladovou', poptavkova: 'Poptávkovou', konkurencni: 'Konkurenční' },
    feedback: {
      nakladova: 'O nákladech situace nic neříká.',
      poptavkova: 'Ano. Východiskem je vnímaná hodnota a ochota zaplatit.',
      konkurencni: 'Ceny konkurence situace nezmiňuje.'
    },
    explanation: 'Vnímaná hodnota a ochota zaplatit: poptávková metoda.'
  },
  'm07-z-strategie': {
    prompt: '„ZÁŘ chce nízkou vstupní cenou rychle získat širší zákaznickou základnu.“ O jakou strategii jde?',
    options: { skimming: 'Sbírání smetany', penetrace: 'Cenové pronikání (penetrace)', premiova: 'Prémiová cena', ekonomicka: 'Ekonomická cena' },
    feedback: {
      skimming: 'Sbírání smetany začíná vyšší cenou.',
      penetrace: 'Ano. Nízká vstupní cena pro rychlé získání zákazníků.',
      premiova: 'Prémiová cena je dlouhodobě vyšší.',
      ekonomicka: 'Ekonomická cena je dlouhodobé postavení, ne vstupní strategie zaměřená na rychlý zisk zákazníků.'
    },
    explanation: 'Nízká vstupní cena pro rychlé rozšíření zákazníků: cenové pronikání.'
  },
  'm07-z-sleva': {
    prompt: 'Lampička ZÁŘ Mini stojí 500 Kč a firmu stojí 400 Kč. ZÁŘ ji zlevní o 10 % na 450 Kč. Co to znamená?',
    options: {
      '50-2x': 'Z kusu zbude 50 Kč, pro stejný zisk musí firma prodat dvojnásobek.',
      '90-11': 'Z kusu zbude 90 Kč, pro stejný zisk stačí prodat asi o desetinu víc.',
      '50-11': 'Z kusu zbude 50 Kč, pro stejný zisk stačí prodat asi o desetinu víc.'
    },
    feedback: {
      '50-2x': 'Ano. 500 − 400 = 100 Kč, po slevě 450 − 400 = 50 Kč. Polovina, takže dvojnásobek kusů.',
      '90-11': 'Sleva nesníží náklady. Z kusu zbude 450 − 400 = 50 Kč, ne 90 Kč.',
      '50-11': 'Částka správně, závěr ne. Když z kusu zbývá polovina, je pro stejný zisk potřeba dvojnásobek kusů.'
    },
    explanation: 'Před slevou zbude z kusu 100 Kč, po slevě 50 Kč. Stejný zisk proto vyžaduje <strong>dvojnásobný prodej</strong>.'
  },
};
