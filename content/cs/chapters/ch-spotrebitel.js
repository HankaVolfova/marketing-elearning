// Kapitola 10: Spotřebitel v marketingové strategii – výukové texty (čeština).
// Celou kapitolou prochází jeden fiktivní obchod s běžeckou obuví KROK a jeho zákazníci (Alex, Robin).
// Zápis [[id|text]] vytvoří odkaz na pojem ze slovníčku. Všechny situace, výroky a údaje jsou fiktivní.

export default {
  id: 'ch-spotrebitel',
  title: 'Spotřebitel v marketingové strategii',
  headline: 'Chtěl/a jsem jen boty. Jak z toho vzniklo tolik rozhodování?',
  question: 'Co ovlivňuje zákazníka před nákupem, při něm a po něm?',

  intro: {
    minutes: null,
    scenario: {
      title: 'Příběh kapitoly',
      body: [
        'Alex začal běhat a chce si v KROKU koupit první běžecké boty. Na webu porovnává parametry, kamarád mu doporučuje svou oblíbenou značku a jedna nabídka právě končí ve slevě.',
        'Alex má otevřených dvanáct záložek a jasno pořád nemá. Bojí se, že vybere špatně, a zároveň nechce propásnout slevu. V kapitole uvidíš, co jeho rozhodování ovlivňuje, jakými kroky prochází a co se děje ještě dlouho po zaplacení.'
      ]
    },
    // Výstupy učení se studentům nezobrazují; podklad pro skripta.
    outcomes: [
      'rozlišit nákupní a spotřební chování a role kupujícího a uživatele;',
      'vysvětlit, proč stejná nabídka může mít pro různé zákazníky různou hodnotu (potřeby, motivace, váha vlastností);',
      'rozpoznat vliv zkušenosti, aktuálního stavu, hodnot, referenčních skupin, kultury a situace na rozhodování;',
      'popsat kupní proces jako orientační model a jeho zkracování, opakování a prolínání;',
      'vysvětlit omezenou racionalitu, heuristiky a kognitivní disonanci bez shazování zákazníka.'
    ]
  },

  blocks: [
    // ───────────────────────────── ČÁST 1
    {
      id: 'b1',
      title: 'Nákupem to nekončí',
      short: 'Nákupní × spotřební chování, kupující × uživatel, People',
      time: { main: 2 },
      steps: [
        {
          id: 's1-chovani',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Užší', term: 'nakupni_chovani', id: 'k-nakupni', title: 'Nákupní chování', text: 'Jednání spojené s výběrem a získáním produktu.' },
              { kicker: 'Širší', term: 'spotrebni_chovani', id: 'k-spotrebni', title: 'Spotřební chování', text: 'Jednání související s výběrem, získáním, používáním a opouštěním produktu.' }
            ] }
          ],
          tasks: ['m10-rozsah']
        },
        {
          id: 's1-role',
          title: 'Kdo kupuje a kdo používá',
          body: [
            { t: 'cards', items: [
              { kicker: 'Platí', term: 'kupujici', id: 'k-kupujici', title: 'Kupující', text: 'Osoba, která produkt kupuje.' },
              { kicker: 'Používá', term: 'uzivatel', id: 'k-uzivatel', title: 'Uživatel', text: 'Osoba, která produkt používá.' }
            ] }
          ],
          tasks: ['m10-role'],
          more: [
            { t: 'p', html: '<strong>Další osoby u výběru.</strong> Kromě kupujícího a uživatele může výběr ovlivnit i někdo další: kamarád, který boty doporučí, trenér nebo člen rodiny, který se podílí na rozpočtu. Pro KROK je užitečné vědět, kdo nabídku vybírá, kdo rozhoduje, kdo platí a kdo ji používá.' },
            { t: 'p', html: '<strong>Osobní a organizační spotřeba.</strong> Osobní spotřebitel kupuje pro sebe nebo svou domácnost. Organizace (firma, škola, úřad, sportovní klub) kupuje pro svou činnost. Kdyby běžecký klub objednával dresy a boty pro své členy, šlo by o organizační nákup.' }
          ]
        },
        {
          id: 's1-people',
          title: 'Marketingový mix: páté P',
          body: [
            { t: 'p', html: 'Ze čtyř P [[marketingovy_mix|marketingového mixu]] už znáš produkt, cenu, distribuci a komunikaci. Pohled na spotřebitele ukazuje, jak moc o výsledku rozhodují lidé. Mix se proto rozšiřuje o páté P.' },
            { t: 'cards', items: [
              { kicker: '5. P', term: 'people', id: 'k-people', title: 'People (lidé)', text: 'Rozšíření marketingového mixu o lidi, kteří se podílejí na poskytování nabídky a na kontaktu se zákazníkem: zaměstnance, partnery i samotné zákazníky.' }
            ] },
            { t: 'note', html: '<strong>Zákazník není až páté P.</strong> Produkt, cena, distribuce i komunikace se navrhují s ohledem na zákazníka od začátku. People doplňuje mix o to, jak se lidé (prodavač, servis, ale i sami zákazníci) podílejí na zkušenosti s nabídkou.' }
          ],
          tasks: ['m10-people']
        }
      ],
      summary: 'Spotřební chování pokračuje po nákupu. Člověk, který platí, navíc nemusí být tím, kdo produkt používá. Mix proto doplňujeme o People.'
    },

    // ───────────────────────────── ČÁST 2
    {
      id: 'b2',
      title: 'Stejné boty, jiné potřeby',
      short: 'Potřeba, přání, poptávka, motivace, Maslowova pyramida',
      time: { main: 3 },
      steps: [
        {
          id: 's2-ppp',
          lead: true,
          body: [
            { t: 'p', html: 'Z první kapitoly znáš tři pojmy: <dfn>[[potreba|potřeba]]</dfn> je pociťovaný nedostatek, <dfn>[[prani|přání]]</dfn> její konkrétní podoba a <dfn>[[poptavka|poptávka]]</dfn> přání podložené ochotou a schopností zaplatit.' }
          ],
          tasks: ['m10-ppp']
        },
        {
          id: 's2-motivace',
          title: 'Motivace a různé přínosy',
          body: [
            { t: 'cards', items: [
              { kicker: 'Hnací síla', term: 'motivace', id: 'k-motivace', title: 'Motivace', text: 'Vnitřní podnět, který člověka vede k jednání směřujícímu k určitému cíli.' }
            ] },
            { t: 'p', html: 'Motivace vychází z potřeb. Nejznámější rozdělení potřeb nabízí <dfn>[[maslowova_pyramida|Maslowova pyramida potřeb]]</dfn>: pět skupin potřeb seřazených od základních po nejvyšší.' },
            { t: 'pyramid', id: 'maslow', caption: 'Maslowova pyramida potřeb', levels: [
              { title: 'Seberealizace', text: 'rozvoj, osobní cíle', example: 'uběhnout první půlmaraton' },
              { title: 'Uznání a úcta', text: 'respekt, prestiž, sebevědomí', example: 'působit jako „opravdový běžec“' },
              { title: 'Společenské potřeby', text: 'sounáležitost, přátelství', example: 'běhat s partou z klubu' },
              { title: 'Bezpečí a jistota', text: 'ochrana, stabilita, zdraví', example: 'boty, které chrání před zraněním' },
              { title: 'Fyziologické potřeby', text: 'jídlo, pití, spánek, pohyb', example: 'pohyb a fyzická kondice' }
            ] },
            { t: 'p', html: 'Podle Maslowa člověk obvykle řeší nejdřív nižší potřeby a teprve potom vyšší. Model je orientační: potřeby se mohou překrývat a jeden nákup může naplňovat několik úrovní najednou. Běžecké boty mohou souviset se zdravím, s partou, se kterou člověk běhá, i s vlastním cílem uběhnout první závod.' },
            { t: 'p', html: 'Proto stejný produkt může různým lidem přinášet jiné přínosy a rozhodování spojuje funkční, emoční i sociální důvody.' },
            { t: 'mock', kind: 'personas', items: [
              { name: 'Alex', text: '„Chci začít pravidelně běhat a cítit se při tom pohodlně.“' },
              { name: 'Robin', text: '„Běhám s partou. Záleží mi také na tom, jak se v botách cítím a jak vypadají.“' }
            ] }
          ],
          tasks: ['m10-maslow', 'm10-vzhled']
        },
        {
          id: 's2-vaha',
          title: 'Vlastnosti mají různou váhu',
          body: [
            { t: 'mock', kind: 'calc', title: 'Alexovy priority', rows: [
              { label: 'Kde bude běhat', value: 'po městě' },
              { label: 'Rozpočet', value: 'omezený' },
              { label: 'Nejdůležitější', value: 'pohodlí při zkoušení' }
            ] }
          ],
          tasks: ['m10-vaha'],
          more: [
            { t: 'p', html: '<strong>Řečené a nevyřčené potřeby.</strong> Kromě toho, co zákazník řekne („chci běžecké boty“), může mít i další očekávání: že boty vydrží (skutečná potřeba), že dostane pravdivou radu (nevyřčená potřeba), že ho potěší něco navíc, například rada k vázání tkaniček, nebo že bude působit jako „opravdový běžec“. Firma tyto motivy automaticky nezná; může se na ně ptát a ověřovat je.' },
            { t: 'p', html: '<strong>Vlastnosti očima zákazníka.</strong> Některé vlastnosti lze snadno porovnat (hmotnost, cena, velikost). U jiných, jako je vzhled, barva nebo pocit při nošení, záleží na vnímání konkrétního člověka. Obojí může být součástí hodnoty, kterou zákazník hledá.' }
          ]
        }
      ],
      summary: 'Stejné boty nemusí mít pro všechny stejnou hodnotu. Záleží na hledaném přínosu, prioritách a možnostech zákazníka.'
    },

    // ───────────────────────────── ČÁST 3
    {
      id: 'b3',
      title: 'Nerozhodujeme se ve vzduchoprázdnu',
      short: 'Zkušenost, stav, hodnoty, referenční skupiny, kultura, situace',
      time: { main: 2.5 },
      steps: [
        {
          id: 's3-vlivy',
          lead: true,
          body: [
            { t: 'p', html: 'Rozhodování ovlivňují zkušenosti, postoje, znalosti, emoce i aktuální stav člověka. Stejný zákazník proto nemusí volit stejně v každé situaci.' }
          ],
          tasks: ['m10-vlivy']
        },
        {
          id: 's3-skupina',
          title: 'Referenční skupiny a kultura',
          body: [
            { t: 'p', html: '<dfn>[[referencni_skupina|Referenční skupina]]</dfn> není jakákoli skupina lidí. Je to skupina, se kterou se člověk <strong>srovnává</strong> a jejíž názory, normy a chování bere jako <strong>měřítko</strong> pro vlastní postoje a nákupy. Nemusí být jejím členem: stačí, že k ní vzhlíží, nebo se od ní naopak chce odlišit.' },
            { t: 'cards', items: [
              { kicker: 'Blízký osobní kontakt', term: 'referencni_skupina', id: 'k-referencni', title: 'Primární skupina', text: 'Lidé, se kterými je člověk v častém a osobním kontaktu. Jejich vliv bývá nejsilnější.', example: 'Rodina, nejbližší přátelé.' },
              { kicker: 'Formálnější členství', title: 'Sekundární skupina', text: 'Skupiny, jejichž je člověk členem, ale kontakt je méně častý nebo formálnější.', example: 'Běžecký klub, spolužáci, kolegové z práce.' },
              { kicker: 'Chci patřit k nim', title: 'Aspirační skupina', text: 'Skupina, ke které by člověk chtěl patřit, i když jejím členem není.', example: 'Zkušení maratonci, sportovní vzory.' },
              { kicker: 'Nechci být jako oni', title: 'Disociativní skupina', text: 'Skupina, od které se člověk chce odlišit; vyhýbá se tomu, co si s ní spojuje.', example: 'Lidé, kteří kupují jen podle módy, ne podle užitku.' }
            ] },
            { t: 'p', html: 'Kulturní zvyklosti a hodnoty vytvářejí širší souvislosti, ale neurčují volbu každého člověka stejně.' },
            { t: 'mock', kind: 'chat', title: 'Skupinový chat běžeckého klubu', messages: [
              { who: 'Trenérka', text: 'Na začátek doporučuju model Lehký krok, většině z nás sedí.' },
              { who: 'Alex', text: 'Díky, zkusím ho v KROKU.', own: true }
            ] }
          ],
          tasks: ['m10-klub']
        },
        {
          id: 's3-situace',
          title: 'Situace mění rozhodování',
          body: [
            { t: 'mock', kind: 'offers', title: 'Stejný Alex, dvě situace', items: [
              { name: 'Situace A', text: 'Plánuje první nákup a má čas navštívit KROK.' },
              { name: 'Situace B', text: 'Je na cestě na závod a zjistí, že si zapomněl boty.' }
            ] }
          ],
          tasks: ['m10-situace'],
          more: [
            { t: 'p', html: '<strong>Interní a externí vlivy.</strong> Mezi interní (vnitřní) vlivy patří psychologické vlivy (potřeby, hodnoty, postoje, znalosti, zkušenosti), trvalejší osobní charakteristiky (například otevřenost změnám nebo temperament) a přechodné stavy (nálada, únava, zdravotní stav). Mezi externí (vnější) vlivy patří kultura, referenční skupiny a situace.' },
            { t: 'p', html: '<strong>Kultura a subkultura.</strong> Kultura zahrnuje sdílené hodnoty, zvyklosti, jazyk a symboly, které si člověk osvojuje od dětství. Subkultura je skupina v rámci společnosti s některými vlastními hodnotami a zvyky, například komunita trailových běžců. Příslušnost ke kultuře nebo subkultuře může ovlivňovat, co lidé znají a co považují za běžné; neznamená ale, že se všichni její členové chovají stejně.' },
            { t: 'p', html: '<strong>Sociální role a konformita.</strong> Člověk zastává různé role (rodič, kolega, kapitán běžecké party) a role nese určitá očekávání okolí. Konformita je přizpůsobení názorů nebo chování skupině, ke které se člověk vztahuje. Míra konformity se mezi lidmi i situacemi liší.' },
            { t: 'p', html: 'Pohlaví, věk nebo původ mohou být užitečné popisné charakteristiky, samy o sobě ale chování člověka nevysvětlují. Závěry o zákaznících je potřeba opírat o jejich potřeby a skutečné jednání, ne o stereotypy.' }
          ]
        }
      ],
      summary: 'Volbu ovlivňuje člověk i jeho okolí a situace. Příslušnost ke skupině sama o sobě nevysvětluje chování jednotlivce.'
    },

    // ───────────────────────────── ČÁST 4
    {
      id: 'b4',
      title: 'Od potřeby ke zkušenosti',
      short: 'Kupní proces, typy nákupu, ponákupní chování',
      time: { main: 3 },
      steps: [
        {
          id: 's4-proces',
          lead: true,
          body: [
            { t: 'p', html: '<dfn>[[kupni_proces|Kupní proces]]</dfn> můžeme sledovat od rozpoznání potřeby přes hledání informací a hodnocení variant k nákupu a <dfn>[[ponakupni_chovani|ponákupnímu chování]]</dfn>. Ve skutečnosti se kroky mohou zkrátit, opakovat nebo prolínat.' },
            { t: 'chain', id: 'proces-schema', rows: [
              { label: 'Kupní proces', nodes: ['Rozpoznání potřeby', 'Hledání informací', 'Hodnocení variant', 'Nákupní rozhodnutí a nákup', 'Ponákupní chování'] }
            ] }
          ],
          tasks: ['m10-proces']
        },
        {
          id: 's4-typy',
          title: 'Typy nákupu',
          body: [
            { t: 'p', html: 'Kolik úsilí zákazník do rozhodování vloží, záleží na tom, jakou má s nákupem zkušenost. Rozlišujeme tři typy nákupu:' },
            { t: 'cards', items: [
              { kicker: 'Nejvíc úsilí', term: 'typy_nakupu', id: 'k-prvni-nakup', title: 'První nákupní zkušenost', text: 'Zákazník kategorii nezná. Musí si ujasnit, co potřebuje, hledat informace a podle čeho vybírat. Kupní proces probíhá celý a důkladně.', example: 'Alex kupuje své první běžecké boty.' },
              { kicker: 'Střední úsilí', id: 'k-zmena-volby', title: 'Změna dosavadní volby', text: 'Zákazník kategorii zná, ale dosavadní značka nebo model mu přestal vyhovovat. Hledá jinou variantu a znovu porovnává.', example: 'Alexe tlačí pata, a tak hledá jiný model.' },
              { kicker: 'Nejméně úsilí', id: 'k-rutinni', title: 'Rutinní (opakovaný) nákup', text: 'Zákazník opakuje osvědčenou volbu téměř bez rozmýšlení. Hledání a hodnocení variant se zkracuje nebo vypouští.', example: 'Alex si kupuje znovu stejný vyzkoušený model.' }
            ] },
            { t: 'note', html: 'Pro firmu z toho plyne jiná úloha: u prvního nákupu pomáhá dobrá rada a srozumitelné informace, u změny volby srovnání s konkurencí, u rutinního nákupu dostupnost a připomenutí.' }
          ],
          tasks: ['m10-typy']
        },
        {
          id: 's4-zkusenost',
          title: 'Zkušenost vstupuje do další volby',
          body: [
            { t: 'mock', kind: 'memo', quotes: true, title: 'Alexovy poznámky po měsíci běhání', notes: [
              { label: 'Pohodlí', text: 'Na 5 km výborné, na delší trasy mě tlačí pata.' },
              { label: 'KROK', text: 'Na dotaz k vázání odpověděli do druhého dne.' },
              { label: 'Plán', text: 'Na jaře chci zkusit i běh v terénu.' }
            ] }
          ],
          tasks: ['m10-pristi'],
          more: [
            { t: 'p', html: '<strong>Model podnět – black box – odezva.</strong> Na zákazníka působí podněty (nabídka, doporučení, situace) a on na ně reaguje (nákup, odložení, změna názoru). Co se děje „uvnitř“, zvenku přímo nevidíme: zkušenosti, hodnoty, kultura a další vlivy se promítají do toho, jak člověk potřebu rozpozná, hledá informace i hodnotí varianty. Proto firma potřebuje zákazníky poznávat, ne jen předpokládat jejich reakce.' },
            { t: 'p', html: '<strong>Organizační nákup.</strong> Kdyby běžecký klub nakupoval vybavení pro členy, typicky by vymezil požadavky (počet, velikosti, rozpočet), oslovil několik dodavatelů, porovnal nabídky, objednal a po dodání hodnotil spolupráci. Do rozhodování se může zapojit více lidí, ale nemusí. A i v organizaci hrají roli osobní vztahy, zkušenosti a sympatie, nejen čísla.' }
          ]
        }
      ],
      summary: 'Nákup je část širšího procesu. Zkušenosti po něm se mohou stát vstupem do dalšího rozhodování.'
    },

    // ───────────────────────────── ČÁST 5
    {
      id: 'b5',
      title: 'Dost dobré místo dokonale nejlepšího',
      short: 'Omezená racionalita, heuristiky, kognitivní disonance',
      time: { main: 2 },
      steps: [
        {
          id: 's5-racionalita',
          lead: true,
          body: [
            { t: 'cards', items: [
              { kicker: 'Rozhodování v reálu', term: 'omezena_racionalita', id: 'k-racionalita', title: 'Omezená racionalita', text: 'Rozhodování při omezených informacích, čase, pozornosti a možnostech zpracování.' }
            ] },
            { t: 'p', html: 'Člověk nemusí prozkoumat všechny nabídky, aby si vybral použitelně. Často hledá řešení, které dostatečně vyhovuje jeho potřebám a možnostem.' }
          ],
          tasks: ['m10-tri']
        },
        {
          id: 's5-heuristiky',
          title: 'Zkratky v rozhodování',
          body: [
            { t: 'p', html: '<dfn>[[heuristika|Heuristika]]</dfn> je zjednodušující pravidlo používané při rozhodování. Šetří úsilí, ale nemusí vést ke správnému závěru.' }
          ],
          tasks: ['m10-heuristiky']
        },
        {
          id: 's5-disonance',
          title: 'Pochybnosti po nákupu',
          body: [
            { t: 'cards', items: [
              { kicker: 'Vnitřní napětí', term: 'kognitivni_disonance', id: 'k-disonance', title: 'Kognitivní disonance', text: 'Nepříjemné napětí vyvolané rozporem mezi vlastními postoji, informacemi nebo jednáním.' }
            ] },
            { t: 'mock', kind: 'brief', title: 'Večer po nákupu', text: 'Alex si koupil boty, které mu při zkoušení vyhovovaly. Doma narazí na přesvědčivou recenzi jiného modelu a začne pochybovat, zda zvolil správně.' }
          ],
          tasks: ['m10-pochybnost'],
          more: [
            { t: 'p', html: '<strong>Emoce, očekávání a zkušenosti.</strong> Do rozhodování vstupují i emoce (radost z nové věci, obava ze špatné volby) a očekávání. Spokojenost pak vzniká porovnáním zkušenosti s tím, co člověk čekal. Proto KROKU pomáhá, když vytváří přiměřená očekávání: přesně popíše, k čemu se model hodí a k čemu ne.' },
            { t: 'p', html: '<strong>Jak s pochybností pracovat.</strong> Zákazník se může ujistit: znovu si projde důvody své volby, vyzkouší boty při běhu, zeptá se prodejce. Firma může pomoci jasnými informacemi, radou k používání nebo férovými podmínkami výměny. Pokud se ale při používání objeví skutečný problém, nejde už jen o pochybnost, ale o nespokojenost, kterou je potřeba řešit.' },
            { t: 'p', html: '<strong>Teorie užitku v ekonomii.</strong> Klasická ekonomie popisuje spotřebitele jako racionálního. <em>Kardinalistické</em> pojetí předpokládá, že užitek lze vyjádřit číslem. <em>Ordinalistické</em> pojetí předpokládá, že spotřebitel dokáže varianty seřadit podle preference, i když užitek přesně neměří. Obě pojetí jsou zjednodušující modely; v běžném rozhodování lidé pracují s omezenými informacemi, časem a pozorností.' },
            { t: 'p', html: 'Volba značkového nebo esteticky oblíbeného produktu není sama o sobě nerozumná. Pokud přináší přínos, který člověk hledá (pocit, styl, jistotu), je součástí hodnoty. Úkolem marketingu je pomáhat v orientaci a vytvářet přiměřená očekávání, ne zneužívat nejistotu zákazníka.' }
          ]
        }
      ],
      summary: 'Zákazník rozhoduje s omezenými zdroji a používá zkratky. Marketing mu má pomáhat orientovat se a vytvářet přiměřená očekávání.'
    }
  ],

  mindmap: {
    center: 'Spotřebitel',
    branches: [
      { block: 'b1', title: 'Nákup a spotřeba', text: 'Spotřební chování zahrnuje výběr, získání, používání a opouštění produktu; nákupní chování je jeho část. Kupující a uživatel nemusí být stejná osoba. Mix se doplňuje o páté P, People; zákazník ale není až páté P, s ním se počítá v celém mixu od začátku.', terms: ['nakupni_chovani', 'spotrebni_chovani', 'kupujici', 'uzivatel', 'people'], relations: 'Proč lidé vybírají právě tuto nabídku, vysvětlují jejich potřeby.' },
      { block: 'b2', title: 'Potřeby a přínosy', text: 'Motivace je vnitřní podnět k jednání, který vychází z potřeb. Maslowova pyramida řadí potřeby do pěti úrovní: fyziologické, bezpečí, společenské, uznání, seberealizace. Stejný produkt může různým lidem přinášet funkční, emoční i sociální přínosy, a proto i jinou hodnotu.', terms: ['potreba', 'prani', 'poptavka', 'motivace', 'maslowova_pyramida', 'hodnota'], relations: 'Potřeby a priority formují vlivy okolí a situace.' },
      { block: 'b3', title: 'Vlivy', text: 'Rozhodování ovlivňují vnitřní vlivy (zkušenost, postoje, aktuální stav) i vnější (kultura, situace a referenční skupiny, tedy skupiny, se kterými se člověk srovnává: primární, sekundární, aspirační, disociativní). Žádná jednotlivá charakteristika chování automaticky nevysvětluje.', terms: ['referencni_skupina'], relations: 'Vlivy se promítají do každého kroku kupního procesu.' },
      { block: 'b4', title: 'Kupní proces', text: 'Kupní proces má pět orientačních kroků: rozpoznání potřeby, hledání informací, hodnocení variant, nákup a ponákupní chování. Kroky se mohou zkracovat, opakovat a prolínat. Úsilí závisí na typu nákupu: první nákupní zkušenost, změna dosavadní volby, nebo rutinní nákup.', terms: ['kupni_proces', 'typy_nakupu', 'ponakupni_chovani', 'loajalita'], relations: 'Celým procesem prochází člověk s omezeným časem a pozorností.' },
      { block: 'b5', title: 'Rozhodovací omezení', text: 'Omezená racionalita znamená rozhodování s omezeným časem, informacemi a pozorností; lidé hledají dostatečně dobré řešení. Heuristiky volbu zjednodušují, ale mohou vést k chybě; kognitivní disonance je pochybnost po nákupu.', terms: ['omezena_racionalita', 'heuristika', 'kognitivni_disonance'], relations: 'Zkušenost po nákupu se vrací do dalšího rozhodování.' }
    ]
  },

  final: {
    intro: 'Nové krátké situace z KROKU ze všech pěti částí. Výsledky uvidíš podle oblastí, s odkazem tam, kde je téma vysvětlené.',
    tasks: ['m10-z-rozsah', 'm10-z-platce', 'm10-z-hodnota', 'm10-z-vlivy', 'm10-z-hodnoceni', 'm10-z-ponakup', 'm10-z-heuristika'],
    areas: [
      { id: 'rozsah', label: 'Rozsah spotřebního chování', anchor: 'b1' },
      { id: 'potreby', label: 'Potřeby a hodnota', anchor: 'b2' },
      { id: 'vlivy', label: 'Vlivy', anchor: 'b3' },
      { id: 'proces', label: 'Kupní proces', anchor: 'b4' },
      { id: 'racionalita', label: 'Omezená racionalita', anchor: 'b5' }
    ]
  }
};
