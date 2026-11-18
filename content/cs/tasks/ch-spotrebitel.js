// Úlohy kapitoly 10 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní obchod s běžeckou obuví KROK. Všechny výroky a údaje jsou fiktivní.

export default {

  // ───── Část 1
  'm10-rozsah': {
    prompt: 'Co už přesahuje samotný výběr a získání bot?',
    categories: { ziskani: 'Výběr a získání', pouzivani: 'Používání', opousteni: 'Opouštění produktu' },
    items: {
      porovnani: { text: 'Porovnání dvou modelů před koupí.', why: 'Výběr: součást nákupního chování.' },
      platba: { text: 'Zaplacení objednávky.', why: 'Získání: součást nákupního chování.' },
      behy: { text: 'Zkušenost s botami během několika běhů.', why: 'Používání: přesahuje samotný nákup.' },
      opotrebene: { text: 'Rozhodnutí, jak naložit s opotřebenými botami.', why: 'Opouštění produktu: přesahuje samotný nákup.' }
    },
    explanation: 'Všechny situace patří do spotřebního chování. Nákupní chování pokrývá jeho užší část.'
  },

  'm10-role': {
    prompt: 'Robin koupí v KROKU boty jako dárek pro Alexe. Kdo je kupující a kdo uživatel?',
    categories: { kupujici: 'Kupující', uzivatel: 'Uživatel' },
    items: {
      robin: { text: 'Robin', why: 'Robin boty kupuje a platí.' },
      alex: { text: 'Alex', why: 'Alex v botách poběží.' }
    },
    explanation: 'Role se mohou spojovat v jedné osobě, ale nemusí. Firma potřebuje rozumět tomu, kdo vybírá, kdo platí a kdo nabídku používá.'
  },

  'm10-people': {
    prompt: 'Které P marketingového mixu KROKU situace hlavně popisuje?',
    categories: { produkt: 'Produkt', cena: 'Cena', distribuce: 'Distribuce', komunikace: 'Komunikace', people: 'People' },
    items: {
      podrazka: { text: 'Model s odolnou podrážkou pro běh po městě.', why: 'Vlastnosti nabídky: produkt.' },
      cena: { text: 'Úvodní model za dostupnou cenu.', why: 'Za kolik: cena.' },
      eshop: { text: 'Boty lze koupit v prodejně i v e-shopu s výdejem druhý den.', why: 'Kde a jak je nabídka dostupná: distribuce.' },
      newsletter: { text: 'Newsletter s tipy pro začínající běžce.', why: 'Sdělení zákazníkům: komunikace.' },
      prodavac: { text: 'Prodavač změří chodidlo a poradí s výběrem velikosti.', why: 'Člověk, který se podílí na nabídce a zkušenosti zákazníka: People.' }
    },
    explanation: 'Prodavač neprodává jen boty: jeho rada je součástí toho, jakou hodnotu zákazník získá. Proto se mix rozšiřuje o People. Zákazník přitom není „až páté P“; ostatní P se navrhují s ohledem na něj od začátku.'
  },

  // ───── Část 2
  'm10-ppp': {
    prompt: 'Potřeba, přání, nebo poptávka?',
    categories: { potreba: 'Potřeba', prani: 'Přání', poptavka: 'Poptávka' },
    items: {
      pohyb: { text: '„Potřebuji se při běhu pohodlně a bezpečně pohybovat.“', why: 'Základní užitek, který člověk hledá: potřeba.' },
      model: { text: '„Chci konkrétní model z nabídky KROKU.“', why: 'Konkrétní podoba řešení: přání.' },
      rozpocet: { text: '„Tento model chci koupit a mám na něj vyčleněný rozpočet.“', why: 'Přání podložené ochotou a schopností zaplatit: poptávka.' }
    },
    explanation: 'Potřeba říká, co člověk potřebuje; přání, jakou podobu má mít řešení; poptávka vzniká, když je na přání ochoten a schopen zaplatit.'
  },

  'm10-maslow': {
    prompt: 'Kterou úroveň Maslowovy pyramidy Alexova poznámka nejvíc vystihuje?',
    categories: { bezpeci: 'Bezpečí a jistota', spolecenske: 'Společenské potřeby', uznani: 'Uznání a úcta', seberealizace: 'Seberealizace' },
    items: {
      zraneni: { text: '„Hlavně ať mě boty chrání před zraněním kolene.“', why: 'Ochrana zdraví: bezpečí a jistota.' },
      parta: { text: '„Chci se přidat k partě, která běhá ve čtvrtek po práci.“', why: 'Sounáležitost se skupinou: společenské potřeby.' },
      obdiv: { text: '„Chci, aby ostatní v klubu viděli, že to s běháním myslím vážně.“', why: 'Respekt a uznání ostatních: uznání a úcta.' },
      pulmaraton: { text: '„Do roka chci uběhnout svůj první půlmaraton.“', why: 'Osobní cíl a rozvoj: seberealizace.' }
    },
    explanation: 'Jeden nákup může naplňovat více úrovní najednou. Tady hledáme tu, kterou poznámka vystihuje <strong>nejvíc</strong>.'
  },

  'm10-vzhled': {
    prompt: 'Je Robinův zájem o vzhled sám o sobě důkazem nerozumného rozhodování?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Vzhled může být legitimní součást hodnoty.',
    explanation: '<strong>Ne.</strong> Vzhled nebo pocit mohou být součástí hodnoty, kterou člověk hledá. Volbu posuzujeme podle jeho potřeb a možností, ne jen podle technických parametrů.'
  },

  'm10-vaha': {
    prompt: 'Alex bude běhat po městě, má omezený rozpočet a prioritou je pohodlí při zkoušení. Který postup odpovídá jeho situaci lépe?',
    options: {
      parametry: 'Vybrat model s největším počtem parametrů bez vyzkoušení.',
      vyzkouset: 'Porovnat vhodné modely v rozpočtu a vyzkoušet, jak mu sedí.'
    },
    feedback: {
      parametry: 'Víc parametrů ještě neznamená, že bota bude Alexovi sedět, ani že se vejde do rozpočtu.',
      vyzkouset: 'Ano. Odpovídá jeho prioritám i možnostem.'
    },
    explanation: 'Význam vlastnosti záleží na situaci zákazníka. Více parametrů automaticky neznamená vhodnější produkt.'
  },

  // ───── Část 3
  'm10-vlivy': {
    prompt: 'Jaký vliv výrok hlavně popisuje?',
    categories: { zkusenost: 'Zkušenost', stav: 'Aktuální stav', hodnoty: 'Hodnoty a postoj' },
    items: {
      znacka: { text: '„Předchozí boty mi dobře sloužily, proto se vracím ke stejné značce.“', why: 'Opírá se o to, co už zažil: zkušenost.' },
      unava: { text: '„Jsem unavený/á a nechci dnes porovnávat deset modelů.“', why: 'Platí právě dnes: aktuální stav.' },
      odolne: { text: '„Dlouhodobě preferuji opravitelné a odolné výrobky.“', why: 'Trvalý postoj: hodnoty.' }
    },
    explanation: 'Vlivy se mohou kombinovat. Hledáme hlavní vliv popsaný ve výroku.'
  },

  'm10-klub': {
    prompt: 'Trenérka Alexova běžeckého klubu doporučí model Lehký krok a Alex ho přidá mezi zvažované možnosti. O jakou referenční skupinu jde?',
    options: { primarni: 'O primární skupinu, protože s klubem je Alex v kontaktu.', sekundarni: 'O sekundární skupinu, protože je členem klubu s formálnějším kontaktem.', aspiracni: 'O aspirační skupinu, protože k trenérce Alex jako běžec vzhlíží.' },
    feedback: {
      primarni: 'Primární skupinu tvoří lidé v častém a osobním kontaktu, typicky rodina a nejbližší přátelé. Klub je spíš formálnější členství.',
      sekundarni: 'Ano. Alex je členem klubu, kontakt je ale formálnější než v rodině nebo mezi nejbližšími přáteli.',
      aspiracni: 'Aspirační skupina je ta, ke které člověk chce patřit, ale není jejím členem. Alex už v klubu je.'
    },
    explanation: 'Běžecký klub je pro Alexe <strong>sekundární</strong> referenční skupina: je jejím členem, kontakt je formálnější. Doporučení ovlivnilo, které modely zvažuje; koupit ho ale nemusí.'
  },


  'm10-situace': {
    prompt: 'Může druhá situace změnit význam dostupnosti, času a ochoty porovnávat?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Přesně.',
    wrongLead: 'Zkus si představit sebe cestou na závod.',
    explanation: '<strong>Ano.</strong> Časový tlak a okamžitá potřeba mohou změnit priority. Stejný člověk se může v různých situacích rozhodovat odlišně.'
  },

  // ───── Část 4
  'm10-proces': {
    prompt: 'Do kterého kroku kupního procesu činnost hlavně patří?',
    categories: { potreba: 'Rozpoznání potřeby', informace: 'Hledání informací', hodnoceni: 'Hodnocení variant', nakup: 'Nákup', ponakup: 'Ponákupní chování' },
    items: {
      nevyhovuje: { text: 'Alex zjistí, že dosavadní obuv pro běh nevyhovuje.', why: 'Uvědomí si nedostatek: rozpoznání potřeby.' },
      prohlizi: { text: 'Prohlíží nabídku KROKU a ptá se na zkušenosti.', why: 'Sbírá podklady: hledání informací.' },
      zkousi: { text: 'Zkouší dva vhodné modely a porovnává je.', why: 'Porovnává možnosti: hodnocení variant.' },
      objedna: { text: 'Vybraný model objedná a zaplatí.', why: 'Volba a získání: nákup.' },
      po: { text: 'Po běhání hodnotí pohodlí a zkušenost.', why: 'Zkušenost po nákupu: ponákupní chování.' }
    },
    explanation: 'Jedna konkrétní činnost může někdy zasahovat do více kroků: například při zkoušení bot v obchodě Alex zároveň získává informace i hodnotí varianty.'
  },

  'm10-typy': {
    prompt: 'O jaký typ nákupu jde?',
    categories: { prvni: 'První nákupní zkušenost', zmena: 'Změna dosavadní volby', rutinni: 'Rutinní nákup' },
    items: {
      ponozky: { text: 'Robin si objedná znovu stejné běžecké ponožky jako minule, ani nehledá jiné.', why: 'Opakuje osvědčenou volbu bez rozmýšlení: rutinní nákup.' },
      hodinky: { text: 'Alex chce sledovat tempo a poprvé v životě vybírá sportovní hodinky.', why: 'Kategorii nezná, musí zjistit, podle čeho vybírat: první nákupní zkušenost.' },
      bunda: { text: 'Robinova běžecká bunda promoká, a tak porovnává jiné značky bund.', why: 'Kategorii zná, dosavadní volba přestala vyhovovat: změna dosavadní volby.' }
    },
    explanation: 'Rozhoduje <strong>zkušenost s nákupem</strong>: první nákup je nejnáročnější, při změně volby zákazník znovu porovnává, rutinní nákup se téměř nerozmýšlí.'
  },

  'm10-pristi': {
    prompt: 'Co může Alex po používání bot zohlednit při dalším nákupu?',
    options: {
      ocekavani: 'Zda boty odpovídaly očekávání.',
      reakce: 'Jak KROK reagoval na dotazy nebo problém.',
      zmena: 'Zda se změnil způsob jeho běhání.',
      nic: 'Jen aktuální slevy; zkušenost s botami už roli nehraje.'
    },
    feedback: {
      ocekavani: 'Ano. Například tlak na patě na delších trasách.',
      reakce: 'Ano. Zkušenost s obchodem je součástí celé zkušenosti.',
      zmena: 'Ano. Běh v terénu může vyžadovat jiné boty.',
      nic: 'Slevy mohou hrát roli, ale zkušenost po nákupu se stává důležitým vstupem do další volby.'
    },
    explanation: 'Zkušenost a změněné potřeby mohou ovlivnit další volbu. Spokojenost může podpořit návrat, ale automaticky nezaručuje [[loajalita|loajalitu]].'
  },

  // ───── Část 5
  'm10-tri': {
    prompt: 'Alex porovná tři vhodné modely, vyzkouší je a vybere jeden v rozpočtu. Neprošel všechny boty na trhu. Může to přesto být rozumné rozhodnutí?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Projít všechny boty na trhu nelze.',
    explanation: '<strong>Ano.</strong> Úplné porovnání všech možností může být neproveditelné. Podstatné je, zda postup a volba přiměřeně odpovídají potřebám a situaci.'
  },

  'm10-heuristiky': {
    prompt: 'Přiřaď ke zkratce její hlavní omezení.',
    categories: {
      cena: 'Cena sama kvalitu ani vhodnost neprokazuje.',
      znamost: 'Známost usnadní orientaci, ale nenahradí posouzení vhodnosti.',
      ostatni: 'Zkušenost ostatních nemusí odpovídat individuálním potřebám.'
    },
    items: {
      drazsi: { text: '„Dražší model bude určitě lepší.“', why: 'Zkratka cena = kvalita.' },
      znam: { text: '„Tuhle značku znám, proto ji zařadím do výběru.“', why: 'Zkratka podle známosti.' },
      vsichni: { text: '„Všichni v běžecké skupině mají tento model, musí sedět i mně.“', why: 'Zkratka podle ostatních.' }
    },
    explanation: 'Zkratky šetří úsilí. Problém vzniká, když se z užitečného vodítka stane neověřená jistota.'
  },

  'm10-pochybnost': {
    prompt: 'Dokazuje tato pochybnost sama o sobě, že jsou koupené boty nekvalitní?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Boty se nezměnily, změnila se informace, kterou Alex má.',
    explanation: '<strong>Ne.</strong> Pochybnost o rozhodnutí není totéž jako zjištěná vada. Je vhodné odlišit nové informace, vlastní zkušenost s používáním a potřebu ujistit se o volbě.'
  },


  // ───── Závěrečné procvičení
  'm10-z-rozsah': {
    prompt: 'Zákaznice po roce rozhoduje, zda boty opraví, ponechá na jiné použití, nebo vyřadí. O co jde?',
    options: {
      spotrebni: 'O spotřební chování (opouštění produktu).',
      nakupni: 'O nákupní chování zákaznice v obchodě.',
      nesouvisi: 'O kognitivní disonanci po nákupu.'
    },
    feedback: {
      spotrebni: 'Ano. Opouštění produktu je součástí spotřebního chování.',
      nakupni: 'Nákup proběhl před rokem; teď jde o opouštění produktu.',
      nesouvisi: 'Disonance je pochybnost o volbě. Tady jde o konec používání produktu.'
    },
    explanation: 'Spotřební chování zahrnuje i opouštění produktu.'
  },
  'm10-z-platce': {
    prompt: '„Ten, kdo boty zaplatil, je vždy používá.“ Platí to?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Vzpomeň si na Robinův dárek.',
    explanation: '<strong>Ne.</strong> Kupující a uživatel nemusí být stejná osoba.'
  },
  'm10-z-hodnota': {
    prompt: 'Dva zákazníci hodnotí stejný model jinak, protože jeden hledá pohodlí při krátkém běhu a druhý jiné využití. Jaký je správný závěr?',
    options: {
      priority: 'Různé priority mohou vést k různé hodnotě.',
      chyba: 'Jeden z nich model nezná dost dobře.',
      cena: 'Hodnotu určuje jen cena, takže ji musí vidět stejně.'
    },
    feedback: {
      priority: 'Ano.',
      chyba: 'Znalost může hrát roli, ale tady se liší hlavně to, jaký přínos každý hledá.',
      cena: 'Hodnota je subjektivní posouzení přínosů a obětí.'
    },
    explanation: 'Rozdílné priority mohou vést k odlišné hodnotě stejné nabídky.'
  },
  'm10-z-vlivy': {
    prompt: 'Jaký vliv se zde hlavně uplatňuje?',
    categories: { skupina: 'Referenční skupina', zkusenost: 'Zkušenost', situace: 'Situace / časový tlak' },
    items: {
      doporuceni: { text: 'Doporučení běžecké skupiny.', why: 'Skupina, ke které se zákazník vztahuje.' },
      predchozi: { text: 'Dobrá zkušenost s předchozím modelem.', why: 'Co už zákazník zažil.' },
      odjezd: { text: 'Málo času před odjezdem.', why: 'Okolnosti právě teď.' }
    },
    explanation: 'Doporučení skupiny, vlastní zkušenost a situace jsou různé vlivy, které se mohou i kombinovat.'
  },
  'm10-z-hodnoceni': {
    prompt: '„Zákazník porovnává dva vyzkoušené modely podle pohodlí a ceny.“ Který krok kupního procesu to je?',
    options: { informace: 'Hledání informací', hodnoceni: 'Hodnocení variant', ponakup: 'Ponákupní chování' },
    feedback: {
      informace: 'Informace už má; teď je porovnává.',
      hodnoceni: 'Ano.',
      ponakup: 'Ještě nekoupil.'
    },
    explanation: 'Porovnávání možností podle kritérií je hodnocení variant.'
  },
  'm10-z-ponakup': {
    prompt: '„Po několika bězích porovnává zkušenost s očekáváním.“ Který krok kupního procesu to je?',
    options: { hodnoceni: 'Hodnocení variant', nakup: 'Nákup', ponakup: 'Ponákupní chování' },
    feedback: {
      hodnoceni: 'Hodnocení variant probíhá před nákupem.',
      nakup: 'Nákup už proběhl.',
      ponakup: 'Ano.'
    },
    explanation: 'Hodnocení zkušenosti po nákupu je ponákupní chování.'
  },
  'm10-z-heuristika': {
    prompt: '„Zákazník vybírá známou značku, protože předpokládá menší riziko.“ Co to je?',
    options: {
      heuristika: 'Heuristika; sama nedokazuje správnou ani chybnou volbu.',
      chyba: 'Chyba v úsudku, které se má zákazník vyhnout.',
      dukaz: 'Rozumné ověření kvality podle známosti značky.'
    },
    feedback: {
      heuristika: 'Ano.',
      chyba: 'Zkratka může vést ke správné i chybné volbě.',
      dukaz: 'Je to zkratka, ne ověření. Známost kvalitu ani vhodnost neprokazuje.'
    },
    explanation: 'Použití heuristiky. Nejde samo o sobě o důkaz správné ani chybné volby.'
  },
};
