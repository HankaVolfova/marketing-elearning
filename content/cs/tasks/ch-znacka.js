// Úlohy kapitoly 6 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní značka KLID. Všechny výroky a výsledky jsou fiktivní.

export default {

  // ───── Část 1
  'm06-logo': {
    prompt: 'KLID vymění logo, ale zákazníci dál zažívají stejné problémy s podporou. Změnila tím firma automaticky i jejich zkušenost se značkou?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Nové logo podporu nezlepší.',
    explanation: '<strong>Ne.</strong> Logo pomáhá nabídku rozpoznat. Samotná grafická změna ale neodstraňuje zkušenosti, které si zákazníci se značkou spojují.'
  },

  'm06-prinosy': {
    prompt: 'Vyberte hlavní přínos popsaný ve výroku.',
    categories: { zakaznik: 'Přínos pro zákazníka', firma: 'Přínos pro firmu' },
    items: {
      poznam: { text: '„Poznám, od koho sluchátka pocházejí.“', why: 'Zákazník nabídku identifikuje: přínos pro zákazníka.' },
      vyberu: { text: '„Snáze si vyberu nabídku, se kterou mám dobrou zkušenost.“', why: 'Značka zákazníkovi zjednoduší výběr: přínos pro zákazníka.' },
      odlisit: { text: '„Naši nabídku lze odlišit od podobných sluchátek.“', why: 'Odlišení od konkurence: přínos pro firmu.' },
      upred: { text: '„Zákazníci nás mohou upřednostnit před alternativami.“', why: 'Budování preference: přínos pro firmu.' }
    },
    explanation: 'Pro zákazníka značka znamená rozpoznání a snazší výběr, pro firmu odlišení a možnost budovat preferenci. Oba pohledy spolu souvisejí.'
  },

  // ───── Část 2
  'm06-identifikatory': {
    prompt: 'O jaký identifikátor jde?',
    categories: { nazev: 'Název', logo: 'Logo', slogan: 'Slogan', jingle: 'Zvukový prvek / jingle' },
    items: {
      slovo: { text: 'Napsané slovo KLID.', why: 'Samotné jméno značky: název.' },
      graficke: { text: 'Graficky zpracované označení KLID.', why: 'Grafická podoba: logo.' },
      fraze: { text: '„Prostor pro tvůj poslech.“', why: 'Krátká fráze spojená se značkou: slogan.' },
      melodie: { text: 'Krátká opakovaná melodie spojená se značkou.', why: 'Zvukový prvek: jingle.' }
    },
    explanation: 'Název se dá vyslovit a napsat, logo je jeho grafická podoba, slogan krátké sdělení a jingle zvuková stopa značky.'
  },

  'm06-jednotnost': {
    prompt: 'Která varianta zákazníkovi spíše usnadní rozpoznat stejnou značku?',
    options: { a: 'Varianta A', b: 'Varianta B' },
    feedback: {
      a: 'Ano. Navazuje na stanovené logo, barvy a styl, takže zákazník pozná, že jde o stejnou značku.',
      b: 'Když se mění název, logo i barvy najednou, zákazník nemusí poznat, že jde o stejnou značku.'
    },
    explanation: 'Opakované používání rozpoznatelných prvků pomáhá spojit různá setkání se stejnou značkou. Neznamená to, že se identita nikdy nesmí měnit. Barvy zde pomáhají rozpoznání díky používání se značkou; nepřisuzujeme jim univerzální účinek na všechny zákazníky.'
  },

  // ───── Část 3
  'm06-povedomi': {
    prompt: 'Spontánní vybavení, nebo rozpoznání?',
    categories: { spontanni: 'Spontánní vybavení', rozpoznani: 'Rozpoznání (podpořená znalost)' },
    items: {
      napadnou: { text: 'Otázka „Jaké značky sluchátek tě napadnou?“ a odpověď „KLID“.', why: 'Zákazník značku uvedl bez nápovědy: spontánní vybavení.' },
      znas: { text: 'Otázka „Znáš značku KLID?“ a odpověď „Ano“.', why: 'Zákazník reaguje na předložený název: rozpoznání.' }
    },
    explanation: 'V prvním případě zákazník název vytáhl z paměti bez nápovědy. Ve druhém reaguje na předloženou značku.'
  },

  'm06-draze': {
    prompt: 'Výrok „KLID působí draze“ sám o sobě dokazuje, že má KLID nejvyšší cenu na trhu?',
    options: { ano: 'Dokazuje', ne: 'Nedokazuje' },
    correctLead: 'Správně.',
    wrongLead: 'Jde o dojem, ne o změřenou cenu.',
    explanation: '<strong>Nedokazuje.</strong> Výrok popisuje vnímání zákazníka. Skutečné cenové srovnání bychom museli zjistit zvlášť.'
  },

  'm06-heuristika': {
    prompt: 'Asociace, nebo heuristika?',
    categories: { asociace: 'Asociace', heuristika: 'Heuristika' },
    items: {
      studium: { text: '„Při názvu KLID se mi vybaví studium.“', why: 'Spojení značky s představou v paměti: asociace.' },
      riziko: { text: '„Koupím známou značku, protože předpokládám menší riziko.“', why: 'Zjednodušující pravidlo pro rozhodnutí: heuristika.' }
    },
    explanation: 'Asociace popisuje spojení v paměti. Heuristika ukazuje, jak člověk zjednodušuje rozhodnutí. Taková zkratka nemusí vést ke správnému závěru: známá značka nemusí být kvalitnější.'
  },

  // ───── Část 4
  'm06-duvera': {
    prompt: 'KLID má luxusně působící obal. Sluchátka se ale opakovaně odpojují a podpora nereaguje. Co může dlouhodobě ohrozit důvěru zákazníků?',
    options: {
      rozpor: 'Rozpor mezi očekáváním a zkušeností.',
      logo: 'Méně výrazná reklama než u konkurence.',
      nazev: 'Vyšší cena oproti jiným sluchátkům.'
    },
    feedback: {
      rozpor: 'Ano. Obal vzbudí očekávání, které používání a podpora nesplní.',
      logo: 'Méně reklamy může snížit známost, ale důvěru podkopává hlavně špatná zkušenost.',
      nazev: 'Vyšší cena sama důvěru neohrožuje, pokud jí odpovídá zkušenost.'
    },
    explanation: 'Vizuální dojem může ovlivnit očekávání. Důvěru ale může oslabit opakovaná zkušenost, která slibu neodpovídá.'
  },

  'm06-preference': {
    prompt: 'Který výrok nejlépe naznačuje preferenci značky?',
    options: {
      obchod: '„Kupuji KLID, protože ho jako jediný prodává obchod u nás.“',
      preference: '„KLID mi vyhovuje a příště bych mu dal/a přednost i před jinými.“',
      sleva: '„Koupil/a jsem KLID, protože byl zrovna ve výrazné slevě.“'
    },
    feedback: {
      obchod: 'Opakovaný nákup tu vychází z dostupnosti, ne ze vztahu ke značce.',
      preference: 'Ano. Výrok vyjadřuje zkušenost a přednost i mezi alternativami.',
      sleva: 'Jednorázový nákup kvůli ceně o preferenci nevypovídá.'
    },
    explanation: 'Výrok vyjadřuje zkušenost a preferenci. Ostatní popisují hlavně dostupnost nebo jednorázovou cenu.'
  },

  'm06-doporuceni': {
    prompt: 'Zákazník v dotazníku uvede, že by KLID doporučil. Víme tím, že už značku skutečně někomu doporučil?',
    thinkHint: 'Zkuste si odpověď nejdřív promyslet. Pak si zobrazte vysvětlení.',
    reasoningLabel: 'Vaše úvaha (nepovinné, nikam se neodesílá)',
    revealLabel: 'Ukázat vysvětlení',
    explanation: '<strong>Ne.</strong> Známe jeho vyjádřenou ochotu. Skutečné chování bychom museli zjišťovat zvlášť.'
  },

  // ───── Část 5




  // ───── Závěrečné procvičení
  'm06-z-role': {
    prompt: '„Zákazník pozná KLID a vybaví si předchozí dobrou zkušenost.“ Co zde značka usnadňuje?',
    options: {
      orientace: 'Identifikaci nabídky a orientaci při výběru.',
      kvalita: 'Zaručuje, že nový model bude stejně kvalitní.',
      cena: 'Umožňuje nastavit vyšší cenu než konkurence.'
    },
    feedback: {
      orientace: 'Ano. Značka pomáhá nabídku poznat a propojit ji s předchozí zkušeností.',
      kvalita: 'Značka kvalitu nezaručuje. Pomáhá jen spojit nabídku s dřívější zkušeností.',
      cena: 'Silná značka to někdy umožní, ale o ceně situace nic neříká. Jde o rozpoznání a zkušenost.'
    },
    explanation: 'Značka usnadňuje identifikaci a orientaci. Kvalitu ani cenu sama nezaručuje.'
  },
  'm06-z-identifikatory': {
    prompt: 'O jaký identifikátor jde?',
    categories: { logo: 'Logo', slogan: 'Slogan', jingle: 'Zvukový prvek / jingle' },
    items: {
      graficke: { text: 'Grafické označení KLID.', why: 'Grafická podoba značky: logo.' },
      fraze: { text: 'Krátká fráze vyjadřující přínos.', why: 'Slogan.' },
      melodie: { text: 'Krátká rozpoznatelná melodie.', why: 'Zvukový prvek: jingle.' }
    },
    explanation: 'Logo = obraz, slogan = slova, jingle = zvuk.'
  },
  'm06-z-povedomi': {
    prompt: 'Co který výrok zjišťuje nebo popisuje?',
    categories: { spontanni: 'Spontánní vybavení', rozpoznani: 'Rozpoznání', asociace: 'Asociace' },
    items: {
      napadnou: { text: '„Jaké značky sluchátek tě napadnou?“', why: 'Otázka bez nápovědy zjišťuje spontánní vybavení.' },
      ovladani: { text: '„KLID si spojuji s jednoduchým ovládáním.“', why: 'Spojení značky s představou: asociace.' }
    },
    explanation: 'Povědomí říká, zda zákazník značku zná; asociace, co pro něj znamená.'
  },
  'm06-z-loajalita': {
    prompt: '„Zákazník opakovaně kupuje KLID jen proto, že jiná značka není dostupná.“ Jaký je správný závěr?',
    options: {
      dokazuje: 'Opakovaný nákup je jasným důkazem silné loajality zákazníka.',
      nedokazuje: 'Opakovaný nákup sám nedokazuje preferenci ani vztah ke značce.',
      doporuci: 'Zákazník bude značku pravděpodobně doporučovat dalším.'
    },
    feedback: {
      dokazuje: 'Nakupuje kvůli dostupnosti. Kdyby měl na výběr, mohl by zvolit jinak.',
      nedokazuje: 'Ano. Opakování vychází z omezeného výběru, ne z preference.',
      doporuci: 'O ochotě doporučit situace nic neříká.'
    },
    explanation: 'Samotné opakování nákupu nedokazuje preferenci a vztah ke značce.'
  },
};
