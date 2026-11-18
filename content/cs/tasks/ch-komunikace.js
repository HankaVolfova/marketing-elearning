// Úlohy kapitoly 9 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní lezecké centrum ÚCHOP. Všechny výroky a výsledky jsou fiktivní.

export default {

  // ───── Část 1
  'm09-slib': {
    prompt: 'Alternativní situace: ÚCHOP slibuje lekci pro úplné začátečníky, ale ve skutečnosti nemá instruktora ani vybavení k zapůjčení. Vyřeší problém přesvědčivější reklama?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Reklama nevyrobí instruktora.',
    explanation: '<strong>Ne.</strong> Komunikační slib musí odpovídat nabídce. V této situaci potřebuje centrum nejdřív zajistit službu, kterou chce nabízet.'
  },

  'm09-cile': {
    prompt: 'Jaký komunikační cíl odpovídá situaci?',
    categories: { informovat: 'Informovat o existenci nabídky', vysvetlit: 'Vysvětlit podmínky a upravit mylnou představu', podnitit: 'Podnítit rezervaci konkrétního termínu' },
    items: {
      netusi: { text: 'Lidé netuší, že centrum nabízí lekce bez předchozí zkušenosti.', why: 'Nejdřív musí vědět, že nabídka existuje.' },
      vybaveni: { text: 'Nabídku znají, ale myslí si, že potřebují vlastní vybavení.', why: 'Překážkou je mylná představa: vysvětlit, že vybavení zapůjčíme.' },
      zvazuji: { text: 'Nabídce rozumějí a zvažují ji.', why: 'Chybí jen poslední krok: rezervace termínu.' }
    },
    explanation: 'Každá skupina je jinde, takže potřebuje jiné sdělení. Kdo o nabídce neví, nepotřebuje výzvu k rezervaci, a kdo ji zvažuje, nepotřebuje znovu slyšet, že existuje.'
  },

  'm09-aida': {
    prompt: 'Přiřaď hlavní funkci, kterou zde daná část sdělení plní.',
    categories: { a: 'Pozornost (Attention)', i: 'Zájem (Interest)', d: 'Touha (Desire)', act: 'Akce (Action)' },
    items: {
      stena: { text: '„Na stěnu poprvé? Začni s námi.“', why: 'Otázka má upoutat: pozornost.' },
      lekce: { text: '„Úvodní lekce pro dospělé bez lezeckých zkušeností.“', why: 'Informace, že nabídka je právě pro mě: zájem.' },
      zazitek: { text: '„Vyzkoušej nový zážitek s vedením instruktora a vybavením připraveným na místě.“', why: 'Přínos a jistota, že to zvládnu: touha.' },
      termin: { text: '„Vyber si termín a rezervuj místo.“', why: 'Výzva k jednání: akce.' }
    },
    explanation: 'Části sdělení mohou plnit více funkcí současně. Model používáme jako pomůcku pro práci s komunikací, nikoli jako popis povinné cesty nákupního rozhodování.'
  },

  // ───── Část 2
  'm09-role': {
    prompt: 'Jakou roli má v komunikačním procesu?',
    categories: { odesilatel: 'Odesílatel', sdeleni: 'Sdělení předané kanálem', prijemce: 'Příjemce', zpetna: 'Zpětná vazba' },
    items: {
      uchop: { text: 'ÚCHOP připravující pozvánku.', why: 'Kdo význam vytváří a posílá: odesílatel.' },
      prispevek: { text: 'Příspěvek zveřejněný na sociální síti.', why: 'Sdělení (pozvánka) a kanál (sociální síť).' },
      zajemce: { text: 'Dospělý zájemce bez lezeckých zkušeností.', why: 'Kdo sdělení přijímá a vykládá: příjemce.' },
      dotaz: { text: 'Dotaz „Musím mít vlastní vybavení?“', why: 'Reakce, která se vrací k odesílateli: zpětná vazba.' }
    },
    explanation: 'Zpětná vazba ukazuje, jak příjemce sdělení pochopil. Tady prozrazuje, že informace o zapůjčení vybavení nedorazila.'
  },

  'm09-slang': {
    prompt: 'Která varianta lépe odpovídá úplným začátečníkům a výchozí nabídce ÚCHOPU?',
    options: { a: 'Varianta A', b: 'Varianta B' },
    feedback: {
      a: 'Začátečník nemusí vědět, co je „top“ nebo „bouldr“, a „lezečky s sebou“ odporuje tomu, že vybavení zapůjčíme.',
      b: 'Ano. Srozumitelná a v souladu s nabídkou.'
    },
    explanation: 'Varianta A předpokládá znalost lezeckých výrazů a navíc vytváří jiné očekávání ohledně vybavení. Varianta B je srozumitelnější a odpovídá nabídce.'
  },

  'm09-dotaz': {
    prompt: 'Pod pozvánkou se opakovaně objevuje dotaz, zda je lekce vhodná i bez zkušeností. Co by měl ÚCHOP udělat?',
    options: {
      znovu: 'Zveřejnit stejný příspěvek znovu, aby ho vidělo víc lidí.',
      proverit: 'Prověřit srozumitelnost sdělení a informaci zvýraznit.',
      schvalne: 'Odpovídat na každý dotaz zvlášť v komentářích.'
    },
    feedback: {
      znovu: 'Stejný příspěvek povede ke stejným dotazům.',
      proverit: 'Ano. Opakovaný dotaz ukazuje, kde sdělení nefunguje.',
      schvalne: 'Odpovědi pomohou tazatelům, ale sdělení zůstane nejasné pro všechny ostatní.'
    },
    explanation: 'Opakovaný dotaz je podklad pro úpravu komunikace. Odeslání sdělení ještě neznamená, že příjemce pochopil podstatné informace.'
  },

  // ───── Část 3
  'm09-reklama-pr': {
    prompt: 'Reklama, nebo PR?',
    categories: { reklama: 'Reklama', pr: 'PR' },
    items: {
      zaplati: { text: 'ÚCHOP zaplatí zobrazení pozvánky vybrané skupině uživatelů.', why: 'Placená prezentace nabídky: reklama.' },
      sousede: { text: 'ÚCHOP pořádá setkání se sousedy centra a řeší jejich podněty k provozu.', why: 'Vztahy a důvěra v okolí: PR.' },
      redakce: { text: 'ÚCHOP poskytne redakci informace o svém komunitním programu; redakce samostatně rozhoduje o zveřejnění.', why: 'Práce s médii je součást PR; o zveřejnění rozhoduje redakce.' }
    },
    explanation: 'PR zahrnuje více než mediální výstupy. Práce s médii nezaručuje zveřejnění a může vyžadovat značné prostředky, i když firma nekupuje reklamní prostor.'
  },

  'm09-nastroje': {
    prompt: 'Který nástroj ÚCHOP použil?',
    categories: { podpora: 'Podpora prodeje', osobni: 'Osobní prodej', primy: 'Přímý marketing', sponzoring: 'Sponzoring' },
    items: {
      zvyhodneni: { text: 'Časově omezená nabídka zvýhodněné první lekce.', why: 'Pobídka k vyzkoušení: podpora prodeje.' },
      kurz: { text: 'Pracovník centra se zájemcem probere vhodný placený kurz a pomůže mu vybrat.', why: 'Rozhovor s konkrétním člověkem a pomoc s rozhodnutím: osobní prodej.' },
      email: { text: 'Adresný e-mail dosavadním zájemcům s nabídkou termínu a možností rezervace.', why: 'Adresné oslovení s možností přímé reakce: přímý marketing.' },
      akce: { text: 'Centrum podpoří místní sportovní akci výměnou za dohodnutou prezentaci partnerství.', why: 'Podpora akce za dohodnutý komunikační přínos: sponzoring.' }
    },
    explanation: 'Rozhoduje hlavní princip: pobídka, osobní rozhovor, adresné oslovení, nebo partnerství. Jedna aktivita přitom může podporovat i více účelů najednou.'
  },

  'm09-prostredi': {
    prompt: 'ÚCHOP zaplatí zobrazení příspěvku s pozvánkou na úvodní lekci. Co nejlépe určuje zařazení aktivity?',
    options: {
      reklama: 'Je to reklama, protože jde o placenou prezentaci nabídky.',
      pr: 'Je to automaticky PR, protože se odehrává na sociální síti.',
      novy: 'Je to nový samostatný nástroj, který s reklamou nesouvisí.'
    },
    feedback: {
      reklama: 'Ano. Rozhoduje provedení: placená prezentace nabídky.',
      pr: 'Sociální síť je jen prostředí. PR by šlo o budování vztahů a reputace.',
      novy: 'Online prostředí z reklamy nedělá jiný nástroj.'
    },
    explanation: 'Sociální síť je zde prostředí nebo kanál. Konkrétní provedení odpovídá reklamě.'
  },

  // ───── Část 4
  'm09-push-pull': {
    prompt: 'Push, nebo pull?',
    categories: { push: 'Push', pull: 'Pull' },
    items: {
      skoleni: { text: 'Výrobce lezeckých bot zaškolí prodavače ve sportovních obchodech a dá jim bonus za každý prodaný pár.', why: 'Komunikace míří na obchodní partnery, kteří nabídku tlačí dál: push.' },
      video: { text: 'Výrobce natočí se známými lezci videa na sociální sítě, aby se zákazníci na boty v obchodě sami ptali.', why: 'Komunikace míří na konečné zákazníky, kteří nabídku poptávají: pull.' },
      podminky: { text: 'Výrobce nabídne obchodům výhodnější obchodní podmínky, pokud boty umístí na viditelné místo.', why: 'Pobídka pro obchodníka: push.' },
      kupon: { text: 'Výrobce v reklamě nabídne zákazníkům slevový kupon na boty, který uplatní v kterémkoli sportovním obchodě.', why: 'Pobídka přímo pro konečné zákazníky, kteří pak boty v obchodě žádají: pull.' }
    },
    explanation: '<strong>Push</strong> zaměřuje komunikaci na obchodní partnery, <strong>pull</strong> na konečné zákazníky. Rozhoduje, na koho komunikace míří, ne jaký nástroj firma použije.'
  },

  'm09-rozpory': {
    prompt: 'Co je potřeba sjednotit?',
    options: {
      'pro-koho': 'Pro koho je lekce určena.',
      obsah: 'Co lekce obsahuje.',
      mista: 'Jaké informace poskytují jednotlivá kontaktní místa.',
      barva: 'Jen barvu loga na webu a v reklamě.'
    },
    feedback: {
      'pro-koho': 'Ano. Reklama mluví o začátečnících, web o pokročilých.',
      obsah: 'Ano. Jednou je vybavení zapůjčené, jindy nutné vlastní.',
      mista: 'Ano. Recepce musí vědět totéž, co slibuje reklama.',
      barva: 'Grafika rozpor v obsahu nevyřeší.'
    },
    explanation: 'Nejde jen o grafickou jednotnost. Zájemce potřebuje získat stejnou podstatnou informaci a odpovídající službu.'
  },

  'm09-rezervace': {
    prompt: 'ÚCHOP v reklamě slibuje snadnou rezervaci, ale formulář nefunguje a na uvedený telefon nikdo nereaguje. Má centrum nejdřív opravit rezervaci, než reklamu zveřejní znovu?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Přesně.',
    wrongLead: 'Další reklama přivede další lidi ke stejné překážce.',
    explanation: '<strong>Ano.</strong> Komunikace přivádí zájem, ale získání služby má překážku. Je potřeba opravit proces rezervace a informovat zákazníky odpovídajícím způsobem.'
  },

  // ───── Část 5
  'm09-metriky': {
    prompt: 'Který údaj z přehledu odpovídá otázce?',
    categories: { n12000: '12 000', n180: '180', n12: '12' },
    items: {
      zobrazeno: { text: 'Kolikrát bylo sdělení zobrazeno.', why: 'Zobrazení: 12 000.' },
      kliknuti: { text: 'Kolik kliknutí přivedlo na stránku.', why: 'Kliknutí: 180.' },
      rezervace: { text: 'Kolik rezervací bylo dokončeno.', why: 'Dokončené rezervace: 12.' }
    },
    explanation: 'Zobrazení nejsou počet unikátních lidí. Kliknutí není rezervace a rezervace ještě nemusí být uskutečněná návštěva.'
  },

  'm09-pricina': {
    prompt: 'Kampaň má hodně zobrazení a málo rezervací. Co potřebujeme prověřit?',
    options: {
      zajemci: 'Zda oslovujeme vhodné zájemce.',
      srozumitelnost: 'Zda je nabídka srozumitelná.',
      rezervace: 'Zda funguje rezervace a vyhovují termíny.',
      rozpocet: 'Automaticky uzavřít, že je nutné zvýšit rozpočet.'
    },
    feedback: {
      zajemci: 'Ano. Sdělení mohou vidět lidé, které lezení nezajímá.',
      srozumitelnost: 'Ano. Lidé nemusejí pochopit, že lekce je pro ně.',
      rezervace: 'Ano. Zájem se může ztratit až u formuláře nebo termínů.',
      rozpocet: 'Vyšší rozpočet přinese více zobrazení, ale nevyřeší jiné příčiny.'
    },
    explanation: 'Výsledek může mít více příčin. Data nás vedou k ověření, nikoli k automatickému vysvětlení. Také samotná rezervace po kampani nemusí dokazovat, že ji způsobila výhradně tato kampaň.'
  },

  'm09-zdarma': {
    prompt: 'ÚCHOP uvádí „Vybavení zdarma“. Ve skutečnosti je zapůjčení součástí ceny lekce a lekci nelze koupit levněji bez něj. Jaká formulace je pro tuto nabídku přesnější a férovější?',
    options: {
      zahrnuto: '„Vybavení je zahrnuto v ceně lekce.“',
      zdarma: '„Vybavení zdarma ke každé lekci!“'
    },
    feedback: {
      zahrnuto: 'Ano. Přesně popisuje, co cena obsahuje.',
      zdarma: 'Vytváří dojem, že vybavení dostane navíc bez placení. Je ale součástí ceny lekce.'
    },
    explanation: 'Přesná informace pomáhá nastavit správné očekávání. Zájemce má rozumět tomu, za co platí a co cena zahrnuje.'
  },


  // ───── Závěrečné procvičení
  'm09-z-cil': {
    prompt: '„Lidé nabídku znají, ale domnívají se, že je určena jen zkušeným lezcům.“ Co je vhodný bezprostřední komunikační úkol?',
    options: {
      vysvetlit: 'Vysvětlit, že lekce je pro lidi bez zkušeností.',
      zobrazeni: 'Zvýšit počet zobrazení, ať nabídku vidí víc lidí.',
      sleva: 'Nabídnout na lekci časově omezenou slevu.'
    },
    feedback: {
      vysvetlit: 'Ano. Je potřeba upravit mylnou představu.',
      zobrazeni: 'Více zobrazení mylnou představu nezmění.',
      sleva: 'Sleva nevysvětlí, že lekce je pro začátečníky.'
    },
    explanation: 'Překážkou je mylná představa, proto je úkolem vysvětlit, pro koho lekce je.'
  },
  'm09-z-aida': {
    prompt: '„Rezervuj si úvodní lekci.“ Jakou hlavní funkci tato část sdělení plní podle AIDA?',
    options: { a: 'Pozornost', i: 'Zájem', d: 'Touha', act: 'Akce' },
    feedback: {
      a: 'Upoutat má spíš úvodní otázka nebo obraz.',
      i: 'Zájem budí informace o nabídce.',
      d: 'Touhu vyvolává přínos nebo zážitek.',
      act: 'Ano. Výzva k jednání.'
    },
    explanation: 'Výzva k rezervaci plní funkci akce.'
  },
  'm09-z-proces': {
    prompt: '„ÚCHOP použije slang, kterému cílová skupina nerozumí.“ Co se v komunikačním procesu děje?',
    options: { sum: 'Šum: jazyk ztěžuje dekódování sdělení.', kanal: 'Problém je ve zvoleném kanálu, ne v obsahu.', zpetna: 'Jde o zpětnou vazbu od cílové skupiny.' },
    feedback: {
      sum: 'Ano. Kódování neodpovídá tomu, jak příjemce sdělení dekóduje.',
      kanal: 'Kanál může být v pořádku; nesrozumitelný je obsah.',
      zpetna: 'Zpětná vazba je reakce příjemce, ne slang odesílatele.'
    },
    explanation: 'Problém převodu významu a interpretace sdělení; jazyk může působit jako šum.'
  },
  'm09-z-nastroje': {
    prompt: 'Který nástroj ÚCHOP použil?',
    categories: { reklama: 'Reklama', primy: 'Přímý marketing', pr: 'PR', podpora: 'Podpora prodeje' },
    items: {
      pozvanka: { text: 'Placená pozvánka v médiu.', why: 'Placená prezentace: reklama.' },
      adresna: { text: 'Adresná nabídka s možností rezervace.', why: 'Adresné oslovení s reakcí: přímý marketing.' },
      sousede: { text: 'Setkání se sousedy a řešení jejich podnětů.', why: 'Vztahy a důvěra: PR.' },
      zvyhodneni: { text: 'Dočasné zvýhodnění první lekce.', why: 'Pobídka: podpora prodeje.' }
    },
    explanation: 'Placená prezentace, adresné oslovení, vztahy, nebo pobídka.'
  },
  'm09-z-integrace': {
    prompt: '„Web a recepce poskytují odlišné informace o tom, co cena zahrnuje.“ Jaký je závěr?',
    options: { koordinace: 'Nesoulad informací vyžadující koordinaci.', vzhled: 'Stačí sjednotit vzhled webu.', nic: 'Jde o přizpůsobení sdělení jednotlivým kanálům.' },
    feedback: {
      koordinace: 'Ano. Podstatné informace musí být stejné všude.',
      vzhled: 'Grafika nesoulad v obsahu nevyřeší.',
      nic: 'Podání se může přizpůsobit kanálu, ale podstatné informace, jako co cena zahrnuje, se lišit nesmí.'
    },
    explanation: 'Nesoulad informací vyžaduje koordinaci, nikoli jen sjednocení vzhledu.'
  },
  'm09-z-zobrazeni': {
    prompt: '„Příspěvek měl 20 000 zobrazení.“ Co tento údaj sám nedokazuje?',
    options: {
      porozumeni: 'Že mu lidé porozuměli.',
      rezervace: 'Že vzniklo 20 000 rezervací.',
      lide: 'Že jej vidělo 20 000 různých lidí.',
      zobrazovano: 'Že se příspěvek uživatelům zobrazoval.'
    },
    feedback: {
      porozumeni: 'Ano, nedokazuje. Zobrazení neříká nic o pochopení.',
      rezervace: 'Ano, nedokazuje. Zobrazení nejsou rezervace.',
      lide: 'Ano, nedokazuje. Jeden člověk může příspěvek vidět vícekrát.',
      zobrazovano: 'Tohle údaj naopak dokazuje: příspěvek se zobrazoval.'
    },
    explanation: 'Zobrazení dokazuje jen to, že se sdělení zobrazilo. Neříká nic o porozumění, rezervacích ani počtu různých lidí.'
  },
};
