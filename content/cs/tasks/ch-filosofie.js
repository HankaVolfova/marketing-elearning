// Úlohy kapitoly 1 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Klíče odpovědí jsou v data/tasks/ch-filosofie.js.

const K = {
  vyrobni: 'Výrobní koncepce',
  vyrobkova: 'Výrobková koncepce',
  prodejni: 'Prodejní koncepce',
  marketingova: 'Marketingová koncepce',
  odpovedna: 'Společensky odpovědná koncepce'
};

const NELZE = 'Z této informace nelze koncepci spolehlivě určit';

// Vzorové charakteristiky (souvislé) a vzorové odpovědi v bodech (formát zkoušky)
const MODELS = {
  vyrobni: {
    label: 'výrobní',
    keyPoints: ['předpoklad: zákazníci chtějí levné a dostupné produkty', 'zaměření na efektivní výrobu a nízké náklady', 'široká (intenzivní) distribuce', 'vhodná, když poptávka převyšuje nabídku nebo rozhoduje cena', 'riziko: přehlížení dalších požadavků zákazníků'],
    points: [
      'Orientace firmy na výrobu: efektivita, velké série, nízké náklady na kus.',
      'Předpoklad: zákazník preferuje levné a snadno dostupné produkty.',
      'Typická rozhodnutí: standardizace a omezení sortimentu, hromadná výroba, intenzivní distribuce.',
      'Uplatnění: trhy, kde poptávka převyšuje nabídku nebo kde zákazníci rozhodují hlavně podle ceny.',
      'Riziko: firma přehlíží další požadavky zákazníků; po nasycení trhu nízká cena nestačí.'
    ]
  },
  vyrobkova: {
    label: 'výrobkovou',
    keyPoints: ['předpoklad: zákazníci chtějí nejlepší kvalitu a vlastnosti', 'zaměření na zdokonalování produktu', '„lepší“ posuzuje firma, ne zákazník', 'uplatnění tam, kde kvalita skutečně rozhoduje', 'riziko: marketingová krátkozrakost'],
    points: [
      'Orientace firmy na produkt: kvalita, výkon, nové funkce, neustálé zdokonalování.',
      'Předpoklad: zákazník preferuje produkt s nejlepšími vlastnostmi a je ochoten za ně zaplatit.',
      'Typická rozhodnutí: přidat funkce, použít kvalitnější materiál, vyvinout model s lepšími parametry.',
      'Uplatnění: tam, kde kvalita a výkon jsou pro zákazníky skutečně rozhodující.',
      'Riziko: marketingová krátkozrakost, tedy vlastnosti bez užitku pro zákazníka a přehlédnutí změny jeho potřeb.'
    ]
  },
  prodejni: {
    label: 'prodejní',
    keyPoints: ['předpoklad: zákazník sám nekoupí dost', 'aktivní přesvědčování ke koupi', 'prodej existující nabídky (reklama, prodejní techniky, akce)', 'uplatnění u produktů, o které lidé sami neusilují', 'riziko: jednorázová transakce bez vztahu'],
    points: [
      'Orientace firmy na prodej toho, co už vyrobila.',
      'Předpoklad: zákazník sám nekoupí dostatečné množství, musí být aktivně přesvědčen.',
      'Typická rozhodnutí: silná reklama, prodejní tlak a techniky, slevové akce, provize prodejcům.',
      'Uplatnění: produkty, o které zákazníci sami aktivně neusilují; potřeba rychle prodat zásoby.',
      'Riziko: důraz na jednorázovou transakci bez ohledu na spokojenost a dlouhodobý vztah.'
    ]
  },
  marketingova: {
    label: 'marketingovou',
    keyPoints: ['východisko: potřeby vybraných zákazníků (cílového trhu)', 'hodnota účinněji než konkurence + cíle firmy', 'sladění celé nabídky (marketingového mixu)', 'i nevyjádřené potřeby (proaktivní přístup)', 'spokojenost a dlouhodobý vztah; riziko: náročnost'],
    points: [
      'Východisko: potřeby a přání vybraných zákazníků (cílového trhu), které firma zkoumá, včetně dosud nevyjádřených.',
      'Cíl: vytvářet pro zákazníky vyšší hodnotu než konkurence a současně naplnit cíle firmy.',
      'Typická rozhodnutí: podle zjištěných potřeb sladit produkt, cenu, distribuci i komunikaci.',
      'Vztah k zákazníkovi: spokojenost, zpětná vazba a dlouhodobý vztah, zákazník se vrací.',
      'Omezení: náročnost na informace a koordinaci; kritika za opomíjení dopadů na společnost.'
    ]
  },
  odpovedna: {
    label: 'společensky odpovědnou',
    keyPoints: ['propojuje zákazníka, firmu a společnost', 'dlouhodobé zájmy společnosti, nejen okamžitá přání', 'sociální a environmentální dopady, tři pilíře udržitelnosti', 'řešení konfliktu krátkodobého zisku a dlouhodobého prospěchu', 'riziko: náklady, kompromisy, greenwashing; není to jen charita'],
    points: [
      'Propojuje potřeby zákazníků, cíle firmy a dlouhodobé zájmy společnosti.',
      'Kromě ekonomického výsledku zohledňuje sociální a environmentální dopady (tři pilíře udržitelnosti).',
      'Typická rozhodnutí: materiál s ohledem na životnost, opravitelnost, férové podmínky u dodavatelů.',
      'Hledá rovnováhu mezi krátkodobým ziskem a dlouhodobým prospěchem; nejde jen o charitativní dary.',
      'Rizika: vyšší náklady, obtížné kompromisy, greenwashing. (V opoře označena jako sociální koncepce.)'
    ]
  }
};

export default {

  'b1-k1-rozhodni': {
    prompt: 'Firma zjišťuje, proč zákazníci vracejí její batohy. Patří tato činnost do marketingu?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Marketing pokračuje i po prodeji.',
    explanation: '<strong>Ano.</strong> Zkušenost po nákupu pomáhá firmě poznat, zda nabídka splnila očekávání zákazníků a co má zlepšit. Marketing při tom spolupracuje například se zákaznickým servisem a vývojem produktu.'
  },

  'b1-k2-cil': {
    prompt: 'Dojížďák má jako jediný batoh na trhu kapsu na jízdenku, ke které se zákazník dostane bez sundání batohu. Který cíl marketingu tím Ranec sleduje nejvíc?',
    options: { potreby: 'Uspokojit potřeby zákazníků', zisk: 'Vytvořit přiměřený zisk', vyhoda: 'Získat konkurenční výhodu', vztah: 'Budovat dlouhodobý vztah' },
    feedback: {
      potreby: 'Kapsa potřebu zákazníků opravdu řeší. Klíčové je ale slovo „jako jediný“: vlastnost, kterou nikdo jiný nemá, je důvodem vybrat si právě Ranec.',
      zisk: 'Na batohu Ranec vydělá, ale rozhodujícím znakem situace je to, že takovou kapsu nemá nikdo jiný.',
      vyhoda: 'Ano. Vlastnost, kterou konkurence nenabízí, je důvodem vybrat si právě Ranec. Zároveň samozřejmě uspokojuje potřebu zákazníků.',
      vztah: 'Vztah se buduje hlavně po nákupu. Tady jde o to, čím se Ranec odlišuje od ostatních.'
    },
    explanation: 'Jedno rozhodnutí často slouží více cílům. Tady je nejvýraznější odlišení od konkurence.'
  },

  'b1-k3-porovnani': {
    prompt: 'Obě firmy prodávají batohy a obě dělají reklamu. Která z nich pracuje s marketingem v celém rozsahu?',
    options: {
      a: '<strong>Firma A</strong> navrhne batoh podle představ zkušeného designéra, pečlivě otestuje jeho kvalitu a pak hledá, jak ho reklamou prodat.',
      b: '<strong>Firma B</strong> nejdřív zjistí, co dojíždějící potřebují, podle toho navrhne batoh, cenu i reklamu a po nákupu sleduje spokojenost.',
      obe: 'Obě stejně: obě mají vlastní produkt, cenu i reklamu, tedy všechny nástroje marketingu.'
    },
    feedback: {
      a: 'Firma A využívá marketing jen na konci, jako reklamu. Rozhodnutí, co a pro koho nabídnout, udělala bez zákazníka.',
      b: 'Ano. Firma B začíná u zákazníka, podle něj tvoří nabídku a o zákazníka se zajímá i po nákupu. Reklama je u ní jen jedna z částí.',
      obe: 'Mít nástroje ještě neznamená marketing v celém rozsahu. Rozhoduje, jestli firma začíná u zákazníka a pokračuje i po prodeji.'
    },
    explanation: 'Reklamu používají obě firmy. Rozdíl je v tom, kde marketing začíná a kde končí.'
  },

  'b2-ppp': {
    prompt: 'Potřeba, přání, nebo poptávka?',
    categories: { potreba: 'Potřeba', prani: 'Přání', poptavka: 'Poptávka' },
    items: {
      dopravit: { text: '„Potřebuju nějak dostat notebook a svačinu do školy.“', why: 'Obecný nedostatek bez konkrétního řešení: potřeba.' },
      sedy: { text: '„Chci ten šedý Dojížďák s kapsou na notebook.“', why: 'Potřeba dostala konkrétní podobu: přání. Zatím nevíme, jestli může a chce zaplatit.' },
      patek: { text: '„Dojížďák si v pátek koupím, peníze mám odložené.“', why: 'Může i chce zaplatit: poptávka.' },
      nemam: { text: '„Strašně se mi líbí, ale tenhle měsíc na něj nemám.“', why: 'Chybí schopnost zaplatit, takže to zůstává přáním.' }
    },
    explanation: 'Pro poptávku musí zákazník zaplatit <strong>moci i chtít</strong>.'
  },

  'b2-hodnota': {
    prompt: 'Dojížďák stojí pro oba stejně: 2 490 Kč. Pro koho má vyšší hodnotu?',
    options: { bara: 'Pro Báru', tomas: 'Pro Tomáše', stejne: 'Pro oba stejnou, cena je stejná' },
    feedback: {
      bara: 'Ano. Báře batoh chrání notebook a usnadní cestu, takže přínosy jasně převáží 2 490 Kč. Tomášovi by byl zbytečně velký a drahý.',
      tomas: 'Tomáš kapsu na notebook ani na jízdenku nevyužije. Za stejnou cenu dostane málo přínosů.',
      stejne: 'Stejná cena neznamená stejnou hodnotu. Hodnota je subjektivní: záleží na tom, co komu produkt přinese.'
    },
    explanation: 'Produkt se nezměnil, změnil se zákazník. Proto marketing začíná otázkou <strong>pro koho</strong>.'
  },

  'b3-trhy': {
    prompt: 'Kdo komu nabízí? Zařaďte každou situaci.',
    categories: { b2c: 'B2C', b2b: 'B2B', c2c: 'C2C', c2b: 'C2B' },
    items: {
      jednotlivec: { text: 'Ranec prodá batoh studentce pro její osobní použití.', why: 'Firma prodává spotřebitelce: B2C.' },
      zamestnanci: { text: 'Ranec prodá 300 batohů síti prodejen turistického vybavení, která je nabídne svým zákazníkům.', why: 'Kupuje firma, která batohy dál prodává: B2B.' },
      aplikace: { text: 'Dva studenti si přeprodají batoh přes bazarovou aplikaci.', why: 'Prodávají si mezi sebou soukromé osoby: C2C. Že aplikaci provozuje firma, na tom nic nemění.' },
      vykup: { text: 'Studentka, která ráda fotí v horách, prodá Ranci své fotografie batohů v terénu pro jeho e-shop.', why: 'Nabízí soukromá osoba, kupuje firma: C2B.' },
      marketplace: { text: 'Ranec prodá batoh studentovi přes velký online marketplace.', why: 'Prodává firma, kupuje spotřebitel: B2C. Platforma typ vztahu neurčuje.' }
    },
    explanation: 'Rozhoduje, kdo prodává a kdo kupuje, ne kde obchod proběhne.'
  },

  'b3-tendence': {
    prompt: 'Spíš B2B, nebo spíš B2C?',
    categories: { b2b: 'Spíš B2B', b2c: 'Spíš B2C' },
    items: {
      vice: { text: 'O nákupu rozhoduje nákupčí, technik i finanční ředitel.', why: 'Více lidí v rozhodování je typické pro B2B.' },
      recenze: { text: 'Zákaznice se rozhodne během dvou dnů podle recenzí.', why: 'Rychlé osobní rozhodnutí je typické pro B2C.' },
      smlouva: { text: 'Smlouva počítá se servisem na dva roky.', why: 'Dlouhodobý smluvní vztah je typický pro B2B.' },
      kamaradka: { text: 'Rozhodne vzhled a doporučení kamarádky.', why: 'Osobní preference a doporučení okolí jsou typické pro B2C.' }
    },
    explanation: 'Jsou to tendence. I v B2B hraje roli důvěra a i v B2C se někdo rozhoduje velmi racionálně.'
  },

  'b4-vv': {
    prompt: 'Výrobní, nebo výrobková? Zařaďte rozhodnutí Rance.',
    categories: { vyrobni: 'Výrobní', vyrobkova: 'Výrobková' },
    items: {
      hala: { text: 'Omezí nabídku na jeden model a dostane ho do všech supermarketů za 699 Kč.', why: 'Nízká cena a široká dostupnost: výrobní.' },
      funkce: { text: 'Přidá vyhřívaná ramena a dvanáctou kapsu, protože „lepší batoh se prodá sám“.', why: 'Zlepšuje produkt podle sebe, bez zjišťování potřeb: výrobková.' },
      stroj: { text: 'Koupí šicí stroj, který šije o 40 % rychleji, aby mohl zlevnit.', why: 'Investice do výroby kvůli nižším nákladům: výrobní. Batoh sám se nezlepšil.' },
      svy: { text: 'Použije odolnější látku, protože je přesvědčený, že kvalitu zákazníci ocení.', why: 'Lepší produkt na základě přesvědčení firmy: výrobková. Kdyby to zjistil od zákazníků, šlo by o marketingovou.' }
    },
    explanation: 'Výrobní: <strong>levně a všude</strong>. Výrobková: <strong>lépe a víc</strong>. Obě vycházejí z firmy, ne ze zákazníka.'
  },

  'b4-pm': {
    prompt: 'Prodejní, nebo marketingová?',
    categories: { prodejni: 'Prodejní', marketingova: 'Marketingová' },
    items: {
      sklad: { text: 'Ve skladu leží 8 000 batohů, vedení vyhlásí akci „jen do půlnoci“.', why: 'Hotový produkt a tlak na jeho prodej: prodejní.' },
      rozhovory: { text: 'Po rozhovorech s dojíždějícími upraví batoh, cenu i místa prodeje.', why: 'Začíná u potřeb zákazníků a ladí celou nabídku: marketingová.' },
      provize: { text: 'Prodejci dostanou pokyn „nepustit zákazníka bez nákupu“.', why: 'Prodej za každou cenu, bez ohledu na spokojenost: prodejní.' },
      spokojenost: { text: 'Po třech měsících se zákazníků ptá, jak jsou spokojení.', why: 'Zájem o zákazníka i po prodeji a dlouhodobý vztah: marketingová.' }
    },
    explanation: 'Prodejní končí prodejem, marketingová v něm vidí začátek vztahu.'
  },

  'b4-kampan': {
    prompt: 'Ranec spustí velkou kampaň na sociálních sítích. Ze které koncepce vychází?',
    options: { prodejni: 'Prodejní', marketingova: 'Marketingová', nelze: 'Z toho to nepoznám' },
    correctLead: 'Přesně tak.',
    wrongLead: 'Kampaň používají obě koncepce.',
    explanation: 'Z jediné kampaně koncepci nepoznáte. Rozhoduje, z čeho kampaň vychází: z hotového produktu, který je potřeba prodat, nebo ze zjištěných potřeb zákazníků.'
  },

  'b4-dar': {
    prompt: 'Ranec daruje 50 batohů dětskému domovu, jinak na svém podnikání nic nemění. Je to společensky odpovědná koncepce?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Dar sám o sobě koncepci neurčuje.',
    explanation: '<strong>Ne.</strong> Společensky odpovědná koncepce se pozná podle toho, jak firma podniká: materiály, výroba, podmínky lidí, životnost produktu. Jednorázový dar je hezký, ale o koncepci nevypovídá.'
  },

  'b4-vychozi': {
    prompt: 'Odkud která koncepce vychází?',
    categories: { vyrobni: 'Výrobní', vyrobkova: 'Výrobková', prodejni: 'Prodejní', marketingova: 'Marketingová', odpovedna: 'Společensky odpovědná' },
    items: {
      naklady: { text: 'Z nákladů a dostupnosti', why: 'Výrobní: levně a všude.' },
      produkt: { text: 'Z kvality a vlastností produktu', why: 'Výrobková: lepší produkt podle firmy.' },
      sklad: { text: 'Z hotové nabídky, kterou je třeba prodat', why: 'Prodejní: přesvědčit zákazníka ke koupi.' },
      zakaznik: { text: 'Z potřeb vybraných zákazníků', why: 'Marketingová: nejdřív zákazník, pak nabídka.' },
      dopady: { text: 'Ze zákazníka, firmy i dlouhodobých dopadů na společnost', why: 'Společensky odpovědná: k marketingové přidává ohled na společnost a prostředí.' }
    },
    explanation: 'Výchozí bod je nejrychlejší způsob, jak koncepce rozlišit.'
  },


  'b5-dilema': {
    prompt: 'Ranec chystá novou verzi Dojížďáku a vybírá ze tří variant. Kterou byste doporučili? Pak se podívejte, jak varianta dopadá na zákazníka, firmu a společnost.',
    options: {
      levnejsi: {
        label: 'Levnější materiál',
        detail: 'Cena −300 Kč, vyšší marže, životnost zhruba 3 roky místo 6.',
        analysis: {
          zakaznik: 'Dnes ušetří. Za tři roky ale kupuje znovu a celkově zaplatí víc.',
          firma: 'Vyšší marže a nižší cena přilákají cenově citlivé zákazníky. Hrozí ale ztráta pověsti spolehlivého batohu.',
          spolecnost: 'Víc batohů v odpadu, vyšší spotřeba surovin.'
        },
        defensible: 'Obhajitelné, pokud firma cílí na segment, kterému jde hlavně o nízkou cenu, a otevřeně o kratší životnosti informuje.'
      },
      opravitelny: {
        label: 'Opravitelný batoh',
        detail: 'Cena +200 Kč, vyměnitelné přezky, zipy a popruhy, servis na pobočkách.',
        analysis: {
          zakaznik: 'Mírně vyšší cena, ale batoh si nechá opravit místo nákupu nového.',
          firma: 'Vyšší náklady a nutnost servisu. Zato opakovaný kontakt se zákazníkem a příjmy ze servisu a dílů.',
          spolecnost: 'Delší používání, méně odpadu.'
        },
        defensible: 'Obhajitelné, pokud firma dokáže servis zajistit a vysvětlit zákazníkům, proč stojí za to připlatit.'
      },
      zivotnost: {
        label: 'Maximální životnost',
        detail: 'Cena +600 Kč, nejodolnější materiály, záruka 10 let.',
        analysis: {
          zakaznik: 'Výrazně dražší nákup, ale batoh na mnoho let. Pro studenty může být nedostupný.',
          firma: 'Silná pozice „batohu na celý život“. Méně opakovaných nákupů a riziko ztráty cenově citlivých zákazníků.',
          spolecnost: 'Nejmenší spotřeba surovin na roky používání.'
        },
        defensible: 'Obhajitelné, pokud firma cílí na zákazníky, kteří ocení dlouhou životnost a mají na ni rozpočet.'
      }
    },
    reasoningHint: 'Napište, pro jaké zákazníky by vaše volba dávala smysl a co by firma musela pohlídat.'
  },
  'b5-loajalita': {
    prompt: 'Které tvrzení o loajalitě zákazníků je nejpřesnější? (Tato úloha má jednu správnou odpověď.)',
    options: {
      a: 'Loajalita je jedinou spolehlivou zárukou dlouhodobého úspěchu firmy.',
      b: 'Loajalita zvyšuje šanci na dlouhodobý úspěch, ale nezaručuje ho.',
      c: 'Na loajalitě dnes nezáleží, zákazníci stejně přecházejí ke konkurenci.'
    },
    feedback: {
      a: 'Příliš silné tvrzení. Věrný zákazník odejde, když nabídka ztratí hodnotu, a „věrnost“ může být jen setrvačnost.',
      b: 'Ano. Loajalita je významný předpoklad dlouhodobého úspěchu, ale nenahradí hodnotu nabídky.',
      c: 'Příliš silné tvrzení opačným směrem. Udržet zákazníka je obvykle výhodnější než získávat nové.'
    },
    explanation: 'Absolutní tvrzení („jediná záruka“, „nezáleží“) v marketingu obvykle neplatí. Loajalita je důležitý předpoklad, ne záruka.'
  },

  // ───── Závěrečné procvičení
  'z-rozsah-1': {
    prompt: 'Které činnosti patří do marketingu?',
    options: {
      vyzkum: 'Zjišťování potřeb zákazníků',
      cena: 'Stanovení ceny produktu',
      pece: 'Péče o zákazníka po nákupu',
      reklama: 'Reklama',
      ucetni: 'Sestavení účetní uzávěrky'
    },
    feedback: {
      vyzkum: 'Ano, poznávání zákazníků je výchozí bod marketingu.',
      cena: 'Ano, cena je součástí nabídky.',
      pece: 'Ano, budování vztahů po nákupu do marketingu patří.',
      reklama: 'Ano, reklama je jeden z nástrojů marketingové komunikace. Jen ne celý marketing.',
      ucetni: 'Účetní uzávěrka je úkol financí. Marketing s financemi spolupracuje, ale tohle nedělá.'
    },
    explanation: 'Marketing zahrnuje poznávání zákazníků, tvorbu nabídky (včetně ceny), komunikaci, směnu i péči po nákupu.'
  },
  'z-rozsah-2': {
    prompt: 'Jaký je vztah mezi marketingem a prodejem?',
    options: {
      a: 'Jde o totéž, marketing je jen modernější název pro prodej.',
      b: 'Prodej je širší pojem, marketing je jedna z jeho podpůrných činností.',
      c: 'Prodej je okamžik směny; marketing začíná dřív a pokračuje po něm.'
    },
    feedback: {
      a: 'Častý omyl. Marketing je mnohem širší než prodej.',
      b: 'Je to naopak: prodej je jedna fáze marketingového procesu.',
      c: 'Ano. Marketing zahrnuje poznávání zákazníků a tvorbu nabídky před prodejem i budování vztahu po něm.'
    },
    explanation: 'Marketing ≠ prodej ≠ reklama. Prodej je okamžik, reklama nástroj, marketing celý proces.'
  },
  'z-ppp': {
    prompt: 'Kamila by Dojížďák chtěla a peníze má. Za 2 490 Kč ho ale koupit nechce. Vytváří Kamila poptávku po tomto batohu?',
    options: {
      a: 'Ano, protože má peníze.',
      b: 'Ne, chybí ochota zaplatit.',
      c: 'Ne, chybí potřeba.'
    },
    feedback: {
      a: 'Schopnost zaplatit nestačí. Poptávka vyžaduje i ochotu.',
      b: 'Ano. Poptávka = přání + schopnost zaplatit + ochota zaplatit. Ochota tu chybí.',
      c: 'Potřebu i přání Kamila má. Chybí ochota zaplatit danou cenu.'
    },
    explanation: 'Pro poptávku musí zákazník zaplatit moci i chtít.'
  },
  'z-hodnota': {
    prompt: 'Proč může mít stejný batoh za stejnou cenu pro dva lidi různou hodnotu?',
    options: {
      a: 'Protože jeden z nich batoh koupil ve slevě a druhý za plnou cenu.',
      b: 'Protože hodnota je dána hlavně kvalitou a parametry produktu.',
      c: 'Protože každý jinak vnímá přínosy i to, co musí obětovat.'
    },
    feedback: {
      a: 'Cena je stejná. Rozdíl je jinde.',
      b: 'Kvalita je u obou stejná, a přesto se hodnota liší. Hodnota je širší než kvalita.',
      c: 'Ano. Hodnota je subjektivní porovnání přínosů a obětí (peníze, čas, úsilí, riziko).'
    },
    explanation: 'Hodnota se rodí v hlavě zákazníka. Proto marketing začíná otázkou „pro koho“.'
  },
  'z-trhy-1': {
    prompt: 'Účetní kancelář objedná přes online marketplace 20 batohů od výrobce jako dárek pro své zaměstnance. O jaký vztah jde?',
    options: { b2c: 'B2C', b2b: 'B2B', c2c: 'C2C', c2b: 'C2B' },
    feedback: {
      b2c: 'Kupuje organizace, ne spotřebitel. A platforma typ vztahu neurčuje.',
      b2b: 'Ano. Firma nakupuje od firmy pro potřeby své organizace. Marketplace na tom nic nemění.',
      c2c: 'Soukromé osoby tu na straně prodeje ani nákupu nejsou.',
      c2b: 'Nabízí výrobce, tedy firma.'
    },
    explanation: 'Rozhoduje, kdo prodává a kdo kupuje.'
  },
  'z-trhy-2': {
    prompt: 'Student nabídne Ranci krátké video, jak batoh používá při dojíždění, a Ranec ho od něj koupí pro svůj web. O jaký vztah jde?',
    options: { b2c: 'B2C', b2b: 'B2B', c2c: 'C2C', c2b: 'C2B' },
    feedback: {
      b2c: 'Směr je opačný: nabízí soukromá osoba.',
      b2b: 'Student není organizace.',
      c2c: 'Kupuje firma, ne soukromá osoba.',
      c2b: 'Ano. Soukromá osoba nabízí, organizace kupuje a využije to ve své činnosti.'
    },
    explanation: 'C2B: spotřebitel nabízí, firma kupuje.'
  },
  'z-vv-1': {
    prompt: 'Výrobní, nebo výrobková? Firma vyvine batoh se samočisticí látkou, protože věří, že „tohle tu ještě nebylo“.',
    options: { vyrobni: K.vyrobni, vyrobkova: K.vyrobkova },
    feedback: {
      vyrobni: 'Nejde o náklady ani dostupnost, ale o novou vlastnost produktu.',
      vyrobkova: 'Ano. Zdokonalení produktu podle přesvědčení firmy.'
    },
    explanation: 'Výrobková: lepší vlastnosti. Výrobní: nižší náklady a dostupnost.'
  },
  'z-vv-2': {
    prompt: 'Výrobní, nebo výrobková? Firma sjednotí všechny batohy na jeden střih, aby mohla vyrábět ve velkých sériích a prodávat levněji.',
    options: { vyrobni: K.vyrobni, vyrobkova: K.vyrobkova },
    feedback: {
      vyrobni: 'Ano. Standardizace, velké série a nižší cena jsou znaky výrobní koncepce.',
      vyrobkova: 'Produkt se nezlepšuje, ale zjednodušuje kvůli nákladům.'
    },
    explanation: 'Standardizace kvůli nákladům je typicky výrobní krok.'
  },
  'z-pm-1': {
    prompt: 'Prodejní, nebo marketingová? Prodejci dostanou za každý prodaný batoh provizi navíc a pokyn „nepustit zákazníka bez nákupu“.',
    options: { prodejni: K.prodejni, marketingova: K.marketingova },
    feedback: {
      prodejni: 'Ano. Tlak na prodej existující nabídky, bez zájmu o to, co zákazník potřebuje.',
      marketingova: 'Marketingová by začínala u potřeb zákazníka, ne u tlaku na prodej.'
    },
    explanation: 'Prodejní koncepce: prodat, co máme, i pod tlakem.'
  },
  'z-pm-2': {
    prompt: 'Prodejní, nebo marketingová? Firma zjistí, že cyklisté chtějí batoh, který se nepotí na zádech, vyvine pro ně model s větráním a nabízí ho v cykloprodejnách.',
    options: { prodejni: K.prodejni, marketingova: K.marketingova },
    feedback: {
      prodejni: 'Firma nezačíná u hotového produktu, ale u zjištěné potřeby.',
      marketingova: 'Ano. Vybraná skupina, zjištěná potřeba a podle ní produkt i místo prodeje.'
    },
    explanation: 'Marketingová koncepce začíná u zákazníka a ladí celou nabídku.'
  },
  'z-odpov': {
    prompt: 'Která situace nejlépe odpovídá společensky odpovědné koncepci?',
    options: {
      a: 'Firma natočí kampaň „Jsme zelení“ a na obaly přidá zelené logo, výrobu ale nemění.',
      b: 'Firma prodlouží životnost batohů a zavede opravy, i když jí to zvýší náklady.',
      c: 'Firma jednou ročně věnuje část zisku na charitu, jinak své podnikání nemění.'
    },
    feedback: {
      a: 'To je greenwashing: komunikace bez skutečné změny.',
      b: 'Ano. Skutečná změna v tom, jak firma podniká, s ohledem na zákazníka, firmu i společnost.',
      c: 'Dar je fajn, ale společenská odpovědnost se pozná na tom, jak firma podniká.'
    },
    explanation: 'Společensky odpovědná koncepce se projevuje v podnikání samotném, ne jen v komunikaci nebo darech.'
  },
};
