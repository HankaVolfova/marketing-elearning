// Úlohy kapitoly 3 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Všechny firmy, výroky a čísla jsou fiktivní.

export default {

  // ───── Část 1
  'm03-mikro-makro': {
    prompt: 'Mikroprostředí, nebo makroprostředí? Zařaďte poznámky kavárny Za rohem.',
    categories: { mikro: 'Mikroprostředí', makro: 'Makroprostředí' },
    items: {
      obsluha: { text: 'Zaškolení nové obsluhy.', why: 'Jak zaškolí své lidi, rozhoduje kavárna sama: mikroprostředí.' },
      mouka: { text: 'Výběr dodavatele kávy.', why: 'Dodavatele si kavárna vybírá a jedná s ním: mikroprostředí. Možnost ovlivnit ale neznamená plnou kontrolu nad tím, jak se dodavatel bude chovat.' },
      kupni: { text: 'Pokles kupní síly obyvatel čtvrti.', why: 'Kolik lidé mohou utratit, kavárna sama nezmění. Může jen reagovat: makroprostředí.' },
      zakon: { text: 'Změna zákonných požadavků na provoz.', why: 'Zákony kavárna neurčuje, musí se jim přizpůsobit: makroprostředí.' }
    },
    explanation: 'Rozhoduje otázka: <strong>dokáže to podnik sám ovlivňovat?</strong> Pokud ano, jde o mikroprostředí. Pokud musí reagovat, jde o makroprostředí.'
  },

  'm03-mikro-oblasti': {
    prompt: 'Do které oblasti mikroprostředí patří poznámka kavárny Za rohem?',
    categories: { podnik: 'Podnik sám', lide: 'Lidé', partneri: 'Partneři' },
    items: {
      mista: { text: 'Na terase je jen dvanáct míst k sezení.', why: 'Kapacita a vybavení provozovny: podnik sám.' },
      cekani: { text: 'Stálí hosté si stěžují na dlouhé čekání.', why: 'Zákazníci: lidé.' },
      pekarna: { text: 'Pekárna, která dodává dezerty, zdražila.', why: 'Dodavatel: partneři.' },
      hluk: { text: 'Sousedům vadí hluk z terasy po desáté večer.', why: 'Veřejnost v okolí kavárny: lidé.' }
    },
    explanation: 'Mikroprostředí tvoří <strong>podnik sám</strong>, <strong>lidé</strong> (zákazníci, zaměstnanci, veřejnost) a <strong>partneři</strong> (dodavatelé, distributoři a další).'
  },

  'm03-pestle': {
    prompt: 'Kavárna sleduje, co se kolem ní mění. Do které oblasti PESTLE patří hlavní popsaný vliv?',
    categories: { politicke: 'Politické', ekonomicke: 'Ekonomické', sociokulturni: 'Sociokulturní', technologicke: 'Technologické', legislativni: 'Legislativní', environmentalni: 'Environmentální' },
    items: {
      energie: { text: 'Zdražování energií.', why: 'Ceny a náklady: ekonomické prostředí.' },
      navyky: { text: 'Rostoucí zájem obyvatel o jiné stravovací návyky.', why: 'Zvyky a preference lidí: sociokulturní prostředí.' },
      objednavani: { text: 'Rozšíření nové technologie objednávání.', why: 'Nová technologie a její využití: technologické prostředí.' },
      oznacovani: { text: 'Nová zákonná povinnost označování.', why: 'Zákonná povinnost: legislativní prostředí.' }
    },
    explanation: 'Některé jevy mají více souvislostí. Zdražování energií může souviset i s politikou nebo životním prostředím. Tady hledáme <strong>hlavní popsaný vliv</strong>, nikoli jedinou možnou interpretaci.'
  },

  'm03-dopad': {
    prompt: 'Který zápis je pro rozhodování kavárny užitečnější?',
    options: {
      oblast: '„Ekonomické prostředí: ceny energií meziročně rostou zhruba o desetinu.“',
      dopad: '„Dražší energie zvýší náklady na kávovary a chlazení a může snížit marži.“'
    },
    feedback: {
      oblast: 'Zápis popisuje změnu v okolí, ale neříká, co znamená pro kavárnu.',
      dopad: 'Ano. Zápis vysvětluje, proč je změna pro konkrétní podnik důležitá.'
    },
    explanation: 'První zápis jen pojmenovává oblast. Druhý vysvětluje, proč je změna pro konkrétní podnik důležitá.'
  },

  // ───── Část 2
  'm03-konkurenti': {
    prompt: 'Z pohledu kavárny Za rohem: kdo je kdo?',
    categories: { rival: 'Současný rival', novy: 'Nový konkurent', substitut: 'Substitut' },
    items: {
      park: { text: 'Kavárna U Parku ve stejné čtvrti.', why: 'Už na trhu působí a nabízí podobný produkt: současný rival.' },
      retezec: { text: 'Řetězec Kafe & Go, který na jaře otevře pobočku na náměstí.', why: 'Na trh teprve vstupuje: nový konkurent.' },
      kavovar: { text: 'Domácí kávovar, který si koupila část štamgastů.', why: 'Uspokojuje stejnou potřebu (dobrá káva) jiným způsobem: substitut.' }
    },
    explanation: 'Substitut nemusí být stejný druh produktu: rozhoduje, že uspokojí stejnou potřebu. Nový konkurent se od rivala liší tím, že na trh teprve vstupuje.'
  },

  'm03-pet-sil': {
    prompt: 'Kterou z pěti sil situace popisuje?',
    categories: { rivalita: 'Rivalita konkurentů', vstup: 'Hrozba vstupu', substituty: 'Hrozba substitutů', dodavatele: 'Síla dodavatelů', odberatele: 'Síla odběratelů' },
    items: {
      prazirna: { text: 'Kavárna je závislá na jediné pražírně, která jí dodává výběrovou kávu.', why: 'Náhradu za tuto kávu nelze snadno sehnat, pražírna proto může snadněji prosadit své podmínky: vyjednávací síla dodavatelů.' },
      kancelar: { text: 'Firma ze sousedství objednává denně kávu pro celou kancelář a vyjednává množstevní slevu.', why: 'Velký objem objednávek dává zákazníkovi silnější vyjednávací pozici: vyjednávací síla odběratelů.' }
    },
    explanation: 'U dodavatelů i odběratelů sledujte <strong>závislost</strong>: kdo koho víc potřebuje a jak snadno může přejít jinam.'
  },

  // ───── Část 3
  'm03-swot': {
    prompt: 'Zařaďte zjištění kavárny Za rohem do SWOT.',
    categories: { s: 'S · Silná stránka', w: 'W · Slabá stránka', o: 'O · Příležitost', t: 'T · Hrozba' },
    items: {
      baristi: { text: 'Zkušení baristé, které hosté znají jménem.', why: 'Schopnost firmy, která jí pomáhá: silná stránka.' },
      vernost: { text: 'Časté výpadky vlastního věrnostního systému.', why: 'Vlastní systém, který kavárnu omezuje: slabá stránka. Problém je uvnitř firmy, proto nejde o hrozbu.' },
      fakulta: { text: 'Ve vedlejší ulici se otevírá nová fakulta, kolem kavárny budou denně chodit stovky studentů.', why: 'Víc lidí v okolí znamená víc potenciálních hostů. Okolnost v okolí, kterou může kavárna využít: příležitost.' },
      konkurent: { text: 'Do čtvrti vstupuje řetězec Kafe & Go.', why: 'Nepříznivá okolnost v okolí: hrozba.' }
    },
    explanation: 'Nejdřív se zeptejte: <strong>popisuje položka firmu, nebo její okolí?</strong> Potom: pomáhá, nebo omezuje?'
  },

  'm03-prilezitost': {
    prompt: 'Který výrok popisuje příležitost v okolí firmy?',
    options: { a: 'A: „Ve vedlejší ulici se otevírá nová fakulta, kolem kavárny budou denně chodit stovky studentů.“', b: 'B: „Založíme profil na sociálních sítích a každý týden tam zveřejníme novou nabídku.“' },
    feedback: {
      a: 'Ano. Popisuje okolnost v okolí, kterou může firma využít.',
      b: 'Tohle je navrhovaná aktivita, tedy co firma udělá. Do SWOT nepatří.'
    },
    explanation: 'Založení profilu je navrhovaná aktivita. Příležitost popisuje okolnost, kterou může firma využít.'
  },

  'm03-podlozene': {
    prompt: 'Majitelka napíše do silných stránek „nejlepší káva ve městě“. Zatím nemá srovnání ani zpětnou vazbu. Je to dostatečně podložené zjištění?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Zatím jde jen o dojem.',
    explanation: '<strong>Ne.</strong> Zatím jde o přesvědčení majitelky. Je potřeba zjistit, v čem je kavárna skutečně silná a z čeho toto hodnocení vychází.'
  },

  // ───── Část 4
  'm03-otazka': {
    prompt: 'Kavárně Za rohem klesá obsazenost. Která otázka nejlépe pomůže hledat příčiny?',
    options: {
      nechapou: '„Kolik hostů by se vrátilo, kdybychom snížili ceny kávy?“',
      duvody: '„Proč k nám hosté chodí méně často než dřív?“',
      reklama: '„Které akce konkurence nám berou hosty?“'
    },
    feedback: {
      nechapou: 'Otázka už předem předpokládá příčinu (cenu) a hledá jen potvrzení.',
      duvody: 'Ano. Otázka je otevřená a nepředpokládá příčinu. Hledá skutečné důvody.',
      reklama: 'Otázka předem předpokládá, že příčinou je konkurence. Důvody mohou být jinde.'
    },
    explanation: 'Dobrá výzkumná otázka popisuje, co potřebujeme zjistit, a <strong>nepředpokládá odpověď</strong>.'
  },

  'm03-data': {
    prompt: 'Primární, nebo sekundární data?',
    categories: { primarni: 'Primární', sekundarni: 'Sekundární' },
    items: {
      pokladna: { text: 'Kavárna využije své záznamy z pokladny.', why: 'Záznamy už existují, vznikly pro evidenci prodejů: sekundární data.' },
      rozhovory: { text: 'Objedná nové rozhovory s bývalými štamgasty o tom, proč přestali chodit.', why: 'Data se nově získávají právě pro tuto otázku: primární data. Sběr může provést i agentura.' },
      zprava: { text: 'Využije dříve zpracovanou zprávu města o změnách ve složení obyvatel čtvrti.', why: 'Zpráva už existuje: sekundární data.' },
      dotazovani: { text: 'Pro svůj aktuální problém uskuteční nové dotazování hostů.', why: 'Nový sběr pro aktuální problém: primární data.' }
    },
    explanation: 'Rozhoduje, zda data <strong>nově získáváme pro tuto otázku</strong>, nebo využíváme data, která už existují. Nezáleží na tom, kdo data vlastní ani kdo sběr provede: i vlastní záznamy firmy mohou být sekundární a i sběr přes agenturu je primární.'
  },

  'm03-etapy': {
    prompt: 'Do které etapy výzkumu činnost patří?',
    categories: { priprava: 'Příprava', realizace: 'Realizace', hodnoceni: 'Hodnocení' },
    items: {
      skupina: { text: 'Určení, které hosty potřebujeme oslovit.', why: 'Zkoumaná skupina se stanovuje předem: příprava.' },
      sber: { text: 'Sběr a analýza odpovědí.', why: 'Samotné provedení výzkumu: realizace.' },
      posouzeni: { text: 'Posouzení, zda výsledky pomohly objasnit problém.', why: 'Zpětný pohled na smysl výzkumu: hodnocení.' }
    },
    explanation: 'Rozeslání dotazníku je jen část realizace. Bez přípravy nevíme, koho a na co se ptát, bez hodnocení nevíme, zda výzkum pomohl.'
  },

  // ───── Část 5
  'm03-pristup': {
    prompt: 'Kavárna chce zjistit… Který přístup odpovídá hlavnímu účelu?',
    categories: { kvanti: 'Kvantitativní', kvali: 'Kvalitativní' },
    items: {
      karta: { text: 'Jaký podíl hostů využívá věrnostní kartu.', why: 'Hledáme četnost (podíl): kvantitativní.' },
      navsteva: { text: 'Jak hosté prožívají návštěvu a co jim při ní vadí.', why: 'Hledáme zkušenost a její význam: kvalitativní.' },
      skala: { text: 'Jaké hodnocení získaly dezerty na škále 1–5.', why: 'Hodnocení je subjektivní názor, ale sbíráme ho na škále a vyhodnocujeme číselně: kvantitativní.' },
      vyber: { text: 'Proč si hosté vybírají právě tuto kavárnu.', why: 'Hledáme motivy a souvislosti: kvalitativní.' }
    },
    explanation: 'Přístup volíme podle účelu: <strong>kolik a jak často</strong>, nebo <strong>proč a jak</strong>. I subjektivní názor lze získávat a vyhodnocovat kvantitativně.'
  },

  'm03-metody': {
    prompt: 'Která metoda nejlépe odpovídá otázce kavárny?',
    categories: { dotazovani: 'Standardizované dotazování', pozorovani: 'Pozorování', experiment: 'Experiment', rozhovor: 'Hloubkový rozhovor' },
    items: {
      obsluha: { text: 'Změřit podíl hostů spokojených s rychlostí obsluhy.', why: 'Potřebujeme stejné otázky pro mnoho hostů a jejich odpovědi sečíst: standardizované dotazování.' },
      vyloha: { text: 'Zjistit, kolik kolemjdoucích se zastaví u výlohy.', why: 'Jde o chování, které lze sledovat bez ptaní: pozorování.' },
      menu: { text: 'Porovnat, jak se prodávají dezerty při dvou podobách menu za srovnatelných podmínek.', why: 'Řízeně měníme jednu věc a porovnáváme výsledky: experiment.' },
      odchod: { text: 'Podrobně porozumět tomu, proč někteří štamgasti přestali chodit.', why: 'Hledáme podrobné důvody a souvislosti: hloubkový rozhovor.' }
    },
    explanation: 'Metodu odvozuj z otázky. Pro stejný problém může existovat i další vhodná metoda; tady hledáme tu, která otázce odpovídá nejlépe.'
  },

  'm03-reprezentativnost': {
    prompt: 'Kavárna se zeptá tisíce sledujících svého profilu, zda jim vyhovuje otevírací doba. Může výsledek automaticky vydávat za názor všech obyvatel čtvrti?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Přesně.',
    wrongLead: 'Tisíc odpovědí je hodně, ale od koho?',
    explanation: '<strong>Ne.</strong> Sledující profilu mohou mít ke kavárně jiný vztah než ostatní obyvatelé čtvrti. Velký počet odpovědí sám neodstraní problém výběru.'
  },

  // ───── Závěrečné procvičení
  'm03-z-prostredi': {
    prompt: 'Hotel: mikroprostředí, nebo makroprostředí?',
    categories: { mikro: 'Mikroprostředí', makro: 'Makroprostředí' },
    items: {
      recepcni: { text: 'Zaškolení recepčních.', why: 'O zaškolení svých lidí rozhoduje hotel sám: mikroprostředí.' },
      kupni: { text: 'Celkový pokles kupní síly domácností.', why: 'Hotel ho sám neovlivní, může jen reagovat: makroprostředí.' }
    },
    explanation: 'Mikroprostředí podnik dokáže ovlivňovat, na makroprostředí reaguje.'
  },
  'm03-z-substitut': {
    prompt: '„Zákazník místo nákupu nové vrtačky využije službu půjčovny.“ Co je půjčovna z pohledu prodejce vrtaček?',
    options: { rival: 'Současný rival', novy: 'Nový konkurent', substitut: 'Substitut', dodavatel: 'Dodavatel' },
    feedback: {
      rival: 'Půjčovna vrtačky neprodává. Nabízí jiný způsob, jak potřebu vyřešit.',
      novy: 'O vstupu na trh situace nic neříká. Podstatné je, že nabízí jiný způsob uspokojení potřeby.',
      substitut: 'Ano. Zákazník potřebuje vyvrtat díru, ne nutně vlastnit vrtačku. Půjčovna je alternativní způsob uspokojení stejné potřeby.',
      dodavatel: 'Půjčovna prodejci nic nedodává.'
    },
    explanation: 'Substitut uspokojuje stejnou potřebu jiným způsobem.'
  },
  'm03-z-swot': {
    prompt: 'Zařaďte zjištění jazykové školy do SWOT.',
    categories: { s: 'S · Silná stránka', w: 'W · Slabá stránka', o: 'O · Příležitost', t: 'T · Hrozba' },
    items: {
      lektori: { text: 'Zkušený tým lektorů.', why: 'Schopnost školy: silná stránka.' },
      system: { text: 'Poruchový vlastní rezervační systém.', why: 'Vlastní omezení školy: slabá stránka.' },
      firmy: { text: 'Rostoucí zájem místních firem o jazykové kurzy.', why: 'Víc lidí v okolí znamená víc potenciálních hostů. Okolnost v okolí, kterou může kavárna využít: příležitost.' },
      konkurent: { text: 'Vstup silného konkurenta do regionu.', why: 'Nepříznivá okolnost v okolí: hrozba.' }
    },
    explanation: 'Firma (S, W) × okolí (O, T); pomáhá × omezuje.'
  },
  'm03-z-data': {
    prompt: '„Firma použije dříve vytvořené záznamy reklamací k hledání opakovaných problémů.“ Jaká data využívá?',
    options: { primarni: 'Primární data', sekundarni: 'Sekundární data' },
    feedback: {
      primarni: 'Záznamy už existují, nevznikly nově pro tuto otázku.',
      sekundarni: 'Ano. Data už existují a firma je využívá pro nový problém. Nemusejí pocházet mimo firmu.'
    },
    explanation: 'Sekundární data už existují; mohou být i vlastní, interní.'
  },
  'm03-z-skala': {
    prompt: '„Hodnocení spokojenosti na číselné škále nemůže být kvantitativní, protože jde o názor.“',
    options: { spravne: 'Správně', nespravne: 'Nesprávně' },
    correctLead: 'Ano, tvrzení je nesprávné.',
    wrongLead: 'Tvrzení neplatí.',
    explanation: 'Názor lze zjišťovat na škále u mnoha lidí a vyhodnotit číselně, například průměrem nebo podílem odpovědí. O přístupu rozhoduje účel a práce s daty, ne to, zda jde o názor.'
  },
  'm03-z-pocet': {
    prompt: '„Dostatek odpovědí sám zaručí reprezentativnost.“',
    options: { spravne: 'Správně', nespravne: 'Nesprávně' },
    correctLead: 'Ano, tvrzení je nesprávné.',
    wrongLead: 'Tvrzení neplatí.',
    explanation: 'Reprezentativnost závisí na tom, jak byl vzorek vybrán a jaké má složení vůči populaci. Mnoho odpovědí od nevhodně vybraných lidí stále nevypovídá o celé populaci.'
  },
};
