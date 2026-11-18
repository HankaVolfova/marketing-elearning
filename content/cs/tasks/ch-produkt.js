// Úlohy kapitoly 5 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní firma DOUŠEK. Všechny modely a čísla jsou fiktivní.

export default {

  // ───── Část 1
  'm05-sluzba': {
    prompt: 'DOUŠEK nabídne placenou službu čištění a údržby svých lahví. Je i tato služba produktem?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Produkt nemusí jít vzít do ruky.',
    explanation: '<strong>Ano.</strong> Produkt nemusí být hmotný předmět. Služba přináší zákazníkovi užitek a firma ji může samostatně nabídnout.'
  },

  'm05-dimenze': {
    prompt: 'Do které dimenze produktu patří?',
    categories: { jadro: 'Jádro', skutecny: 'Skutečný produkt', rozsireny: 'Rozšířený produkt' },
    items: {
      teply: { text: 'Možnost mít teplý nápoj na cestě.', why: 'Základní užitek, kvůli kterému lahev kupuji: jádro.' },
      objem: { text: 'Objem 500 ml a těsnící uzávěr.', why: 'Konkrétní provedení: skutečný produkt.' },
      udrzba: { text: 'Doplňková služba pravidelné údržby.', why: 'Služba navíc spojená s používáním: rozšířený produkt.' },
      tvar: { text: 'Tvar lahve a její barevné provedení.', why: 'Design je součást provedení: skutečný produkt.' }
    },
    explanation: 'Jádro = <strong>užitek</strong>, skutečný produkt = <strong>provedení</strong>, rozšířený produkt = <strong>služby a přínosy navíc</strong>.'
  },

  'm05-uzitek': {
    prompt: 'Který výrok nejlépe popisuje zákaznický užitek místo technické vlastnosti?',
    options: {
      konstrukce: '„Dvoustěnná konstrukce s vakuovou izolací.“',
      objem: '„Objem 500 ml, víčko na jedno otočení.“',
      caj: '„Při cestě vlakem mám pořád teplý čaj.“'
    },
    feedback: {
      konstrukce: 'Technická vlastnost: popisuje provedení, ne co z ní zákazník má.',
      objem: 'Parametr provedení. Užitek z něj teprve plyne.',
      caj: 'Ano. Vyjadřuje, co z lahve zákazník má.'
    },
    explanation: 'Konstrukce a objem popisují provedení. Teplý čaj na cestě vyjadřuje, co z něj zákazník má.'
  },

  // ───── Část 2
  'm05-uzaver': {
    prompt: 'Která varianta podle uvedených vlastností lépe odpovídá pohodlnému používání při dojíždění?',
    options: { a: 'Varianta A', b: 'Varianta B' },
    feedback: {
      a: 'Výrazný vzhled může zaujmout, ale při dojíždění obvykle máš volnou jen jednu ruku a čištění je každodenní starost.',
      b: 'Ano. Jednoduché ovládání a čištění přinášejí v této situaci praktický přínos.'
    },
    explanation: 'Rozhodujeme podle konkrétní situace použití. Jednoduché ovládání a čištění přinášejí zákazníkovi praktický přínos. Pro jinou situaci nebo jiné zákazníky může být výrazný design důležitější.'
  },

  'm05-obal': {
    prompt: 'Co má DOUŠEK při návrhu obalu posoudit?',
    options: {
      ochrana: 'Zda lahev chrání při přepravě.',
      manipulace: 'Zda se snadno přenáší a otevírá.',
      informace: 'Zda poskytuje potřebné informace.',
      foto: 'Zda obal vypadá podobně jako u konkurence.'
    },
    feedback: {
      ochrana: 'Ano. Poškozená lahev zklame i při sebelepším vzhledu obalu.',
      manipulace: 'Ano. Obal má usnadnit přenášení, skladování i rozbalení.',
      informace: 'Ano. Zákazník potřebuje vědět například objem, materiál a jak lahev čistit.',
      foto: 'Podobnost s konkurencí není funkce obalu; spíš může ztížit rozpoznání značky.'
    },
    explanation: 'Obal plní ochrannou, manipulační, informační i upoutávací funkci. Vzhled nesmí ostatní funkce znemožnit.'
  },

  // ───── Část 3
  'm05-rada': {
    prompt: 'DOUŠEK začne vedle termolahví nabízet také termohrnky. Co do nabídky přidává?',
    options: { barva: 'Novou barvu stávající lahve', rada: 'Další produktovou řadu', varianta: 'Další variantu modelu Cesta' },
    feedback: {
      barva: 'Barva by byla jen varianta stávajícího modelu. Termohrnky jsou jiná skupina produktů.',
      rada: 'Ano. Termohrnky tvoří další skupinu souvisejících produktů.',
      varianta: 'Termohrnek není varianta lahve, ale jiný druh produktu.'
    },
    explanation: 'Termohrnky zde tvoří další skupinu souvisejících produktů. Nejde jen o novou barvu stávající lahve.'
  },

  'm05-pocet-rady': {
    prompt: 'Kolik produktových řad katalog obsahuje?',
    options: { '1': '1', '2': '2', '3': '3' },
    feedback: {
      '1': 'Termolahve a termohrnky jsou dvě různé řady.',
      '2': 'Ano. Termolahve a termohrnky: šíře sortimentu je 2.',
      '3': 'Tři jsou modely (Cesta, Výlet, Ráno), ne řady.'
    },
    explanation: 'Šíře = počet řad: termolahve a termohrnky.'
  },
  'm05-pocet-modely': {
    prompt: 'Kolik modelů (produktových položek) obsahuje katalog celkem?',
    options: { '2': '2', '3': '3', '6': '6' },
    feedback: {
      '2': 'Dvě jsou řady. Modely jsou Cesta, Výlet a Ráno.',
      '3': 'Ano. Cesta, Výlet a Ráno: délka sortimentu je 3.',
      '6': 'Šest je počet všech barevných provedení. Barvy podle pravidla počítáme jako varianty, ne jako položky.'
    },
    explanation: 'Délka = celkový počet položek. Podle pravidla katalogu je položkou model, takže 3.'
  },
  'm05-pocet-varianty': {
    prompt: 'Kolik barevných variant má model Cesta?',
    options: { '1': '1', '2': '2', '4': '4' },
    feedback: {
      '1': 'Cesta se vyrábí ve smaragdové i fialové.',
      '2': 'Ano. Smaragdová a fialová: hloubka u modelu Cesta je 2.',
      '4': 'Čtyři jsou barevná provedení celé řady termolahví (dva modely po dvou barvách).'
    },
    explanation: 'Hloubka = počet variant konkrétního produktu: Cesta má 2.'
  },

  'm05-rozsireni': {
    prompt: 'Co firma rozšiřuje?',
    categories: { sire: 'Šíři sortimentu', delka: 'Délku sortimentu', hloubka: 'Hloubku sortimentu' },
    items: {
      konvice: { text: 'Přidá novou řadu cestovních konvic.', why: 'Nová řada: roste šíře.' },
      sport: { text: 'Do řady termolahví přidá nový model Sport.', why: 'Nový model, tedy další položka: roste délka.' },
      barva: { text: 'Model Cesta nabídne v další barvě.', why: 'Nová varianta stejného modelu: roste hloubka.' }
    },
    explanation: 'Řada → šíře, model (položka) → délka, barva (varianta) → hloubka. Počítáme stále podle stejného pravidla.'
  },

  // ───── Část 4
  'm05-etapy': {
    prompt: 'DOUŠEK připravuje nový uzávěr. Do které etapy činnost patří?',
    categories: { posouzeni: 'Posouzení', vyvoj: 'Vývoj a testování', uvedeni: 'Uvedení na trh' },
    items: {
      naklady: { text: 'Zjišťuje, zda zákazníci řešení potřebují a kolik bude stát výroba.', why: 'Zájem zákazníků a ekonomická proveditelnost: posouzení.' },
      tesnost: { text: 'Ověřuje těsnost prototypu a jeho používání.', why: 'Práce s prototypem: vývoj a testování.' },
      prodej: { text: 'Zahajuje prodej hotového produktu.', why: 'Komercializace: uvedení na trh.' }
    },
    explanation: 'Proces může vyžadovat návraty a úpravy: když test neprojde, vrací se tým k vývoji, někdy i k posouzení. Nejde o automatický postup k úspěchu.'
  },

  'm05-invence': {
    prompt: 'Invence, nebo inovace?',
    categories: { invence: 'Invence', inovace: 'Inovace' },
    items: {
      navrh: { text: 'Na poradě vznikl návrh nového uzávěru, zatím se nerealizoval.', why: 'Zatím jen nápad: invence.' },
      uvedl: { text: 'DOUŠEK dokončil a uvedl na trh významně vylepšený uzávěr usnadňující používání a čištění.', why: 'Realizovaná významná změna: inovace.' }
    },
    explanation: 'Dobrá myšlenka může být základem změny. Inovací se v tomto výkladu stává až její realizace.'
  },

  'm05-netesnost': {
    prompt: 'DOUŠEK už do nového modelu hodně investoval. Testování ale opakovaně ukazuje netěsnost. Co je nejvhodnější?',
    options: {
      prodat: 'Zahájit prodej včas, aby se investice začala vracet.',
      vyresit: 'Problém vyřešit a funkčnost ověřit, případně projekt zastavit.',
      vysvetlit: 'Začít prodávat a netěsnost řešit průběžně podle reklamací.'
    },
    feedback: {
      prodat: 'Netěsná lahev povede k reklamacím a ztrátě důvěry. Investice se tím spíš prodraží.',
      vyresit: 'Ano. Testování má ovlivnit rozhodnutí o dalším postupu, i kdyby to znamenalo projekt zastavit.',
      vysvetlit: 'Problém je známý už teď. Řešit ho až přes reklamace znamená zklamat zákazníky a poškodit důvěru.'
    },
    explanation: 'Dosavadní investice nejsou důvodem ignorovat zjištěný problém. Testování má ovlivnit rozhodnutí o dalším postupu.'
  },

  // ───── Část 5
  'm05-faze': {
    prompt: 'Čtyři různé výukové situace modelu DOUŠEK Cesta (nejde o jeho současný stav). Která fáze nejlépe odpovídá?',
    categories: { zavadeni: 'Zavádění', rust: 'Růst', zralost: 'Zralost', upadek: 'Úpadek' },
    items: {
      zacal: { text: 'Právě se začal prodávat a teprve si získává zákazníky.', why: 'Vstup na trh a první zákazníci: zavádění.' },
      pribyva: { text: 'Objednávky výrazně přibývají několik období po sobě.', why: 'Prodej se zvyšuje: růst.' },
      stabilni: { text: 'Prodej je delší dobu vysoký, ale už výrazně neroste.', why: 'Růst zpomalil, prodej se stabilizoval: zralost.' },
      klesa: { text: 'Prodej několik období klesá a zákazníci přecházejí na jiná řešení.', why: 'Dlouhodobý pokles: úpadek.' }
    },
    explanation: 'Fázi poznáš podle vývoje prodeje v delším čase, ne podle jednoho údaje.'
  },

  'm05-zralost': {
    prompt: 'Model Cesta se prodává stabilně, ale zákazníci už nemají silný důvod vybrat si ho místo konkurence. Co může firma posoudit?',
    options: {
      zlepseni: 'Smysluplné zlepšení produktu.',
      segmenty: 'Nové situace použití nebo vhodné segmenty.',
      vztah: 'Posílení vztahu se zákazníky a odlišení nabídky.',
      ukoncit: 'Automatické ukončení prodeje, protože růst zpomalil.'
    },
    feedback: {
      zlepseni: 'Ano. Úprava, která přinese skutečný užitek, může dát zákazníkům nový důvod.',
      segmenty: 'Ano. Lahev může najít uplatnění třeba u sportovců nebo na výletech.',
      vztah: 'Ano. Věrnost a jasná odlišnost pomáhají v době silné konkurence.',
      ukoncit: 'Zpomalení růstu neznamená konec. Stabilní prodej může být pro firmu velmi cenný.'
    },
    explanation: 'Jde o možnosti k posouzení, nikoli povinný seznam zásahů. Volba závisí na situaci a zdrojích firmy.'
  },

  'm05-pokles': {
    prompt: 'Prodej lahve v jednom měsíci klesl. Stačí to k závěru, že produkt vstoupil do úpadku?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Jeden měsíc je na takový závěr málo.',
    explanation: '<strong>Ne.</strong> Je potřeba sledovat delší vývoj, sezónnost a příčiny změny. Krátkodobý pokles sám fázi životního cyklu neprokazuje. Při dlouhodobém poklesu může firma posoudit oživení, úpravu nabídky, omezení investic nebo ukončení produktu. Vhodná reakce záleží na situaci.'
  },


  // ───── Závěrečné procvičení
  'm05-z-dimenze': {
    prompt: 'Do které dimenze produktu patří?',
    categories: { jadro: 'Jádro', skutecny: 'Skutečný produkt', rozsireny: 'Rozšířený produkt' },
    items: {
      vylet: { text: 'Mít nápoj po ruce při výletu.', why: 'Základní užitek: jádro.' },
      material: { text: 'Objem, materiál a tvar lahve.', why: 'Konkrétní provedení: skutečný produkt.' },
      servis: { text: 'Volitelná doplňková servisní služba.', why: 'Služba navíc: rozšířený produkt.' }
    },
    explanation: 'Užitek → jádro, provedení → skutečný produkt, služby navíc → rozšířený produkt.'
  },
  'm05-z-obal': {
    prompt: '„Obal dobře vypadá, ale lahev při běžné přepravě nechrání.“ Jaký je správný závěr?',
    options: {
      staci: 'Obal je v pořádku, protože upoutá pozornost.',
      nenahrazuje: 'Vzhled obalu nenahradí jeho ochrannou funkci.',
      reklama: 'Obal slouží hlavně jako reklama, ochrana není podstatná.'
    },
    feedback: {
      staci: 'Upoutání je jen jedna funkce. Poškozená lahev zákazníka zklame.',
      nenahrazuje: 'Ano. Obal musí plnit i ochrannou funkci.',
      reklama: 'Ochrana při přepravě je jedna ze základních funkcí obalu.'
    },
    explanation: 'Vizuální atraktivita nenahrazuje ochrannou funkci obalu.'
  },
  'm05-z-sortiment': {
    prompt: 'Co se změní? (Počítáme stejně jako ve výkladu: položka = model, barva = varianta.)',
    categories: { sire: 'Šíře', delka: 'Délka', hloubka: 'Hloubka' },
    items: {
      rada: { text: 'Nová produktová řada.', why: 'Přibude řada: změna šíře.' },
      model: { text: 'Další model ve stávající řadě.', why: 'Přibude položka: změna délky.' },
      barva: { text: 'Další barva stejného modelu.', why: 'Přibude varianta: změna hloubky.' }
    },
    explanation: 'Řada → šíře, model → délka, barva → hloubka.'
  },
  'm05-z-invence': {
    prompt: '„Zaměstnanec navrhne nový výrobní postup, který zatím nikdo nevyzkoušel ani nezavedl.“ O co jde?',
    options: { inovace: 'Procesní inovace', namet: 'Invence (zatím jen námět)', komercializace: 'Komercializace postupu' },
    feedback: {
      inovace: 'Postup ještě nikdo nezavedl, takže realizovanou inovací zatím není.',
      namet: 'Ano. Inovací se stane, až bude postup ověřen a zaveden.',
      komercializace: 'Komercializace je uvedení produktu na trh. Tady jde o nápad.'
    },
    explanation: 'Zatím jde o námět. Inovace vyžaduje realizaci.'
  },
  'm05-z-cyklus': {
    prompt: '„Dlouhodobě stabilní prodej přestal výrazně růst.“ Které fázi to nejlépe odpovídá?',
    options: { zavadeni: 'Zavádění', rust: 'Růst', zralost: 'Zralost', upadek: 'Úpadek' },
    feedback: {
      zavadeni: 'Při zavádění produkt teprve získává první zákazníky.',
      rust: 'Růst by znamenal, že prodej výrazně přibývá.',
      zralost: 'Ano. Stabilní prodej bez výrazného růstu odpovídá zralosti. Skutečný závěr ale vyžaduje širší podklady.',
      upadek: 'Úpadek znamená dlouhodobý pokles, tady prodej stabilní je.'
    },
    explanation: 'Nejlépe odpovídá zralosti. Skutečný závěr vyžaduje širší podklady o vývoji a jeho příčinách.'
  },
};
