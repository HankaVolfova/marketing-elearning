// Úlohy kapitoly 12 – zadání, možnosti, zpětná vazba a vysvětlení (čeština).
// Celou kapitolou prochází fiktivní firma ROSTO. Zahraniční trh i jeho vlastnosti jsou fiktivní.

export default {

  // ───── Část 1
  'm12-zjisteni': {
    prompt: 'Zjištění, předpoklad, nebo nepodložené zobecnění?',
    categories: { predpoklad: 'Předpoklad', zjisteni: 'Zjištění z uvedeného výzkumu', zobecneni: 'Nepodložené zobecnění' },
    items: {
      doma: { text: '„Doma se sada dobře prodává, takže se bude stejně prodávat i v zahraničí.“', why: 'Domácí výsledek přenesený bez ověření: předpoklad.' },
      rozhovory: { text: '„Z rozhovorů s vybranými zákazníky cílového segmentu vyplynul zájem o snadno použitelnou sadu do malého bytu.“', why: 'Opírá se o konkrétní výzkum s vymezenou skupinou.' },
      obchodnik: { text: '„Zájem jednoho obchodníka dokazuje poptávku všech domácností na trhu.“', why: 'Z jednoho partnera usuzuje na celý trh.' }
    },
    explanation: 'Podklad vždy posuzujeme podle toho, od koho a jak vznikl. Zájem partnera ani menší výzkum automaticky nepopisují celý trh.'
  },
  'm12-proverit': {
    prompt: 'Co má ROSTO před rozhodnutím prověřit?',
    options: {
      potreby: 'Potřeby vybrané cílové skupiny.',
      konkurence: 'Konkurenční nabídky a jejich ceny.',
      obsluha: 'Možnosti prodeje, doručení a zákaznické podpory.',
      pozadavky: 'Požadavky vztahující se k produktu a jeho uvedení na trh.',
      vzdalenost: 'Hlavně celkový počet obyvatel cílové země.'
    },
    feedback: {
      potreby: 'Ano. Bez nich nevíme, zda a jak nabídka obstojí.',
      konkurence: 'Ano. Ukáže, s čím se sada bude srovnávat a za kolik.',
      obsluha: 'Ano. Zákazník musí sadu získat a dostat pomoc.',
      pozadavky: 'Ano. Produkt a jeho uvedení musí odpovídat místním požadavkům.',
      vzdalenost: 'Velikost země neříká, kolik je v ní vhodných zákazníků ani jaké tam jsou podmínky.'
    },
    explanation: 'Rozhodnutí potřebuje znát zákazníky, konkurenci, cesty k zákazníkovi i požadavky na nabídku.'
  },

  // ───── Část 2
  'm12-sa': {
    prompt: 'Standardizace, nebo adaptace?',
    categories: { standardizace: 'Standardizace', adaptace: 'Adaptace' },
    items: {
      nadoba: { text: 'ROSTO zachová ověřený konstrukční základ nádoby.', why: 'Stejný prvek na více trzích.' },
      navod: { text: 'Připraví srozumitelný návod pro zákazníky nového trhu.', why: 'Přizpůsobení cílové skupině.' },
      soucast: { text: 'Upraví funkční součást sady podle ověřených místních podmínek používání.', why: 'Přizpůsobení funkce podmínkám trhu.' },
      znacka: { text: 'Zachová základní vizuální rozpoznatelnost značky.', why: 'Stejný prvek na více trzích.' }
    },
    explanation: 'Oba přístupy se mohou kombinovat. Přizpůsobení se může týkat vzhledu, služeb i funkčních vlastností.'
  },
  'm12-uprava': {
    prompt: 'Který postup odpovídá těmto podkladům?',
    options: {
      nadoba: 'Zachovat vyhovující nádobu.',
      navod: 'Přizpůsobit návod a instrukce k dávkování.',
      vse: 'Pro nový trh vyvinout novou nádobu i značku.',
      nic: 'Ponechat návod i dávkování, upravit jen cenu.'
    },
    feedback: {
      nadoba: 'Ano. Test ukázal, že vyhovuje.',
      navod: 'Ano. Zjištění ukázala nesrozumitelný návod a jiné dávkování.',
      vse: 'Nádoba podle testu vyhovuje; nová by přidala náklady bez přínosu.',
      nic: 'Zjištění ukázala problém s návodem a dávkováním, ne s cenou.'
    },
    explanation: 'Rozsah změn odvozujeme od zjištění. Standardizace může šetřit prostředky, adaptace pomáhá odstranit konkrétní nesoulad.'
  },
  'm12-koncepce': {
    prompt: 'Který přístup v situaci převažuje?',
    categories: { vyvozni: 'Vývozní koncepce', globalni: 'Globální koncepce', interkulturni: 'Interkulturní koncepce' },
    items: {
      jeden: { text: 'ROSTO se soustředí na jeden vybraný zahraniční trh a připravuje nabídku pro jeho podmínky.', why: 'Jeden trh a přizpůsobení jeho podmínkám.' },
      segmenty: { text: 'ROSTO hledá podobné segmenty na více trzích a využívá obdobnou nabídku.', why: 'Podobné segmenty napříč trhy.' },
      zaklad: { text: 'ROSTO drží společný základ, ale upravuje vybrané prvky podle místních potřeb a způsobu používání.', why: 'Společný základ + místní úpravy.' }
    },
    explanation: 'Jde o zjednodušené modelové přístupy; v praxi se prolínají. Globální koncepce neznamená přehlížení rozdílů a vývozní koncepci mohou použít malé i velké firmy.'
  },

  // ───── Část 3
  'm12-kurz': {
    prompt: 'ROSTO přepočítá českou cenu kurzem. Potřebuje k posouzení ceny na novém trhu ještě další podklady?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Kurz je jen jeden z údajů.',
    explanation: '<strong>Ano.</strong> Přepočet měny neověřuje místní poptávku, konkurenční hodnotu ani dodatečné náklady. Tyto vlivy je potřeba posoudit samostatně.'
  },
  'm12-cenove': {
    prompt: 'Cenová standardizace, nebo diferenciace?',
    categories: { standard: 'Cenová standardizace', diferenciace: 'Cenová diferenciace' },
    items: {
      obdobne: { text: 'ROSTO usiluje o obdobné cenové postavení na více trzích a zohledňuje místní náklady.', why: 'Společná politika, číselná cena se může lišit.' },
      odlisna: { text: 'ROSTO stanoví pro nový trh odlišnou cenu podle poptávky, konkurence a nákladů.', why: 'Cena přizpůsobená podmínkám trhu.' }
    },
    explanation: 'Společná politika nemusí znamenat totožnou číselnou cenovku. Diferenciaci lze řídit i bez vlastní dceřiné společnosti.'
  },

  // ───── Část 4
  'm12-vyvoz': {
    prompt: 'ROSTO vyrábí doma. Zahraniční obchodník sady nakupuje a dále je prodává zákazníkům na svém trhu. O jaký základní způsob jde?',
    options: { vyvoz: 'Vývoz s využitím obchodního partnera.', licence: 'Licence pro zahraničního obchodníka.', jv: 'Společný podnik s obchodníkem.' },
    feedback: {
      vyvoz: 'Ano.',
      licence: 'Obchodník nezískal právo sady vyrábět, kupuje hotové výrobky.',
      jv: 'Nevzniká žádný společně vlastněný podnik.'
    },
    explanation: 'ROSTO nemusí kvůli tomuto uspořádání zakládat vlastní zahraniční výrobní podnik. Stále ale řeší kvalitu spolupráce, dodávky a prezentaci nabídky.'
  },
  'm12-lf': {
    prompt: 'Alternativní scénáře ROSTA: licence, nebo franchising?',
    categories: { licence: 'Licence', franchising: 'Franchising' },
    items: {
      vyrobce: { text: 'Zahraniční výrobce získá oprávnění využívat konkrétní chráněné řešení sady.', why: 'Vymezené právo k řešení: licence.' },
      misto: { text: 'Samostatný partner provozuje prodejní a poradenské místo podle konceptu ROSTA, s jeho značkou, postupy a podporou.', why: 'Celý podnikatelský koncept: franchising.' }
    },
    explanation: 'Licence se týká vymezených práv. Franchising představuje širší podnikatelský koncept. Ani jedna forma neodstraňuje potřebu zdrojů, kontroly a promyšlené spolupráce.'
  },
  'm12-kapital': {
    prompt: 'O jakou formu jde?',
    categories: { vlastni: 'Vlastní kapitálový vstup', jv: 'Společný podnik (joint venture)', aliance: 'Strategická aliance bez nutného kapitálového vstupu' },
    items: {
      provoz: { text: 'ROSTO vybuduje vlastní zahraniční provoz.', why: 'Vlastní investice a vlastnictví.' },
      spolecne: { text: 'ROSTO a místní partner společně založí podnik a podílejí se na něm.', why: 'Společné vlastnictví nového podniku.' },
      vyvoj: { text: 'ROSTO a místní firma se dohodnou na společném vývoji, aniž vznikne společný podnik nebo majetkový podíl.', why: 'Spolupráce na společném cíli bez majetkového propojení.' }
    },
    explanation: 'Strategická spolupráce nemusí vždy znamenat společné vlastnictví. Konkrétní forma musí odpovídat cíli, zdrojům a požadovanému řízení.'
  },

  // ───── Část 5
  'm12-slogan': {
    prompt: 'Co má firma udělat před použitím přeloženého sloganu?',
    options: {
      overit: 'Ověřit porozumění u místních posuzovatelů a zákazníků.',
      gramatika: 'Nechat překlad zkontrolovat korektorem a použít.',
      symboly: 'Použít slogan v angličtině, té rozumí všichni.'
    },
    feedback: {
      overit: 'Ano.',
      gramatika: 'Korektura ohlídá gramatiku, ne to, jak slogan pochopí zákazníci.',
      symboly: 'Ani anglický slogan nemusí cílová skupina pochopit tak, jak firma zamýšlí.'
    },
    explanation: 'Kontrolujeme, co si příjemci ze sdělení skutečně odnášejí. Nejde jen o správně přeložená slova.'
  },
  'm12-slib': {
    prompt: 'ROSTO chce zachovat slib snadného pěstování v malém bytě. Co může přizpůsobit, aniž tento slib opustí?',
    options: {
      jazyk: 'Jazyk a podobu návodu.',
      ukazky: 'Ukázky použití podle ověřených podmínek cílové skupiny.',
      kanaly: 'Kanály, kterými zákazníci vyhledávají informace.',
      pravdivost: 'Samotný slib, aby lépe odpovídal místní konkurenci.'
    },
    feedback: {
      jazyk: 'Ano.',
      ukazky: 'Ano.',
      kanaly: 'Ano.',
      pravdivost: 'Změnou slibu by firma opustila to, co chce zachovat. Přizpůsobuje se provedení, ne slib.'
    },
    explanation: 'Konzistentní význam nevyžaduje stejné provedení všude. Přizpůsobení nesmí znamenat nepravdivý slib.'
  },
  'm12-sit': {
    prompt: 'ROSTO chce použít stejnou sociální síť jako doma jen proto, že už pro ni má materiály. Je to dostatečný důvod?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Hotové materiály nejsou důkaz, že tam zákazníci jsou.',
    explanation: '<strong>Ne.</strong> Existující materiály mohou ušetřit práci. Nejdřív ale potřebujeme vědět, zda tímto kanálem skutečně oslovíme vybrané zákazníky.'
  },


  // ───── Závěrečné procvičení
  'm12-z-trh': {
    prompt: '„Zájem jednoho distributora znamená, že nabídku chce většina domácností v cílové zemi.“ Platí to?',
    options: { ano: 'Ano', ne: 'Ne' },
    correctLead: 'Správně.',
    wrongLead: 'Jeden partner není celý trh.',
    explanation: '<strong>Ne.</strong> Zájem partnera není důkazem velikosti a struktury konečné poptávky.'
  },
  'm12-z-sa': {
    prompt: 'Standardizace, nebo adaptace?',
    categories: { standardizace: 'Standardizace', adaptace: 'Adaptace' },
    items: {
      konstrukce: { text: 'Zachování vyhovující konstrukce nádoby na více trzích.', why: 'Stejný prvek na více trzích.' },
      funkce: { text: 'Úprava funkční části podle ověřených podmínek používání.', why: 'Přizpůsobení funkce.' },
      navod: { text: 'Přizpůsobení návodu cílové skupině.', why: 'Přizpůsobení skupině.' }
    },
    explanation: 'Adaptace se může týkat i funkčních vlastností; standardizace a adaptace se kombinují.'
  },
  'm12-z-cena': {
    prompt: '„Firma přepočítala domácí cenu kurzem, ale neověřila dopravu ani konkurenční nabídky.“ Jaký je závěr?',
    options: {
      neuplne: 'Podklady pro cenu jsou zatím neúplné.',
      staci: 'Přepočet kurzem je dostatečný základ ceny.',
      zdvojnasobit: 'Cenu stačí zvýšit o odhad nákladů na dopravu.'
    },
    feedback: {
      neuplne: 'Ano.',
      staci: 'Chybí náklady i srovnání s konkurencí.',
      zdvojnasobit: 'Doprava je jen jeden údaj; chybí srovnání s konkurencí a hodnota pro zákazníky.'
    },
    explanation: 'Podklady pro cenové rozhodnutí jsou neúplné: chybí náklady obsluhy trhu i konkurenční hodnota.'
  },
  'm12-z-vstup': {
    prompt: 'O jakou formu vstupu jde?',
    categories: { vyvoz: 'Vývoz přes partnera', licence: 'Licence', jv: 'Joint venture' },
    items: {
      kupuje: { text: 'Místní partner kupuje sady a prodává je zákazníkům.', why: 'Prodej hotových výrobků partnerovi.' },
      reseni: { text: 'Partner využívá smluvně poskytnuté řešení výrobku.', why: 'Vymezené právo.' },
      podnik: { text: 'ROSTO a partner založí společně vlastněný podnik.', why: 'Společné vlastnictví.' }
    },
    explanation: 'Vývoz, smluvní oprávnění a společné vlastnictví jsou tři různé formy s různými nároky a kontrolou.'
  },
  'm12-z-komunikace': {
    prompt: '„Překlad je gramaticky správný. Zákazníci ale slogan chápou jinak, než firma zamýšlela.“ Jaký je závěr?',
    options: {
      upravit: 'Upravit sdělení podle ověřeného porozumění.',
      staci: 'Ponechat slogan, zákazníci si na něj zvyknou.',
      zakaznici: 'Doplnit pod slogan vysvětlující poznámku.'
    },
    feedback: {
      upravit: 'Ano.',
      staci: 'Zákazníci si zvyknou spíš na nepochopený význam. Rozhoduje, co si odnesou.',
      zakaznici: 'Poznámka je záplata; hlavní sdělení má být srozumitelné samo.'
    },
    explanation: 'Je potřeba upravit sdělení podle ověřeného porozumění; jazyková správnost sama nestačí.'
  },
};
