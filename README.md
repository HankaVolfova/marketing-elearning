# Marketing – e-learning

E-learning předmětu Marketing (Škoda Auto Vysoká škola / ŠAVŠ) pro studenty všech oborů. Obsahuje 12 kapitol (kapitoly 11 a 12 jsou rozšiřující téma), myšlenkové mapy, slovníček a vzorový test.

Projekt nemá backend ani sestavovací krok. Je to statický web (HTML, CSS, ES moduly), který lze hostovat např. na GitHub Pages.

## Spuštění lokálně

ES moduly se nenačtou při otevření `index.html` přímo ze souboru. Spusťte jednoduchý server:

```
python3 -m http.server 8000
```

a otevřete `http://localhost:8000`.

## Struktura

```
index.html
css/
  fonts.css            písmo Manrope (lokálně, s českou diakritikou)
  styles.css           vizuální systém
assets/fonts/          podmnožiny písem latin + latin-ext (SIL OFL)
data/                  jazykově nezávislá data
  course.js            kapitoly: identifikátor ≠ pořadí zobrazení, stav (ready / planned), verze obsahu
  glossary.js          pojmy: identifikátor, kapitola, místo výkladu
  tasks/               úlohy: typ, cíl učení, pojmy, kapitola, klíč odpovědí
content/cs/            všechny české texty
  ui.js                texty rozhraní
  course.js            názvy kapitol
  glossary.js          stručné definice (sdílené slovníčkem i výkladem)
  figures.js           texty schémat
  test-bank.js         báze otázek vzorového testu (uzavřené s klíčem, otevřené se vzorovou odpovědí)
  chapters/            výklad kapitol
  tasks/               zadání, možnosti, zpětná vazba a vysvětlení úloh
js/
  main.js              směrování, hlavička, nastavení, sledování čtené části
  i18n.js              jazyková vrstva
  store.js             ukládání postupu (localStorage, verzované schéma, záloha v paměti)
  logic/evaluate.js    vyhodnocení úloh (nezávislé na jazyce i zobrazení)
  components/          kapitola, úlohy, schémata, slovníček, mapa, závěrečné procvičení, postup, vzorový test
  chapter-art.js       ilustrace v úvodu kapitol (SVG)
```

## Přidání další kapitoly

1. V `data/course.js` změnit stav kapitoly na `ready`.
2. Přidat `content/cs/chapters/<id>.js` (struktura jako `ch-filosofie.js`).
3. Přidat úlohy: `data/tasks/<id>.js` (klíče) a `content/cs/tasks/<id>.js` (texty), zaregistrovat v `data/tasks/index.js` a `js/i18n.js`.
4. Pojmy doplnit do `data/glossary.js` a `content/cs/glossary.js`.

## Anglická verze

Doplní se složka `content/en/` se stejnou strukturou a záznam v `js/i18n.js`. Kód komponent ani logika úloh se nemění.

## Typy úloh

- `classify`: zařazování položek do kategorií; položka může mít více přijatelných odpovědí.
- `choice`: výběr jedné nebo více možností, zpětná vazba ke každé možnosti.
- `decide`: rozhodnutí ano / ne s vysvětlením.
- `dilemma`: více obhajitelných řešení, rozbor dopadů na zákazníka, firmu a společnost.

Každá úloha má stabilní identifikátor, kapitolu, cíl učení a pojmy ze slovníčku (pro pozdější smíšené opakování).

## Vzorový test

Stránka `#/test`. Z každého tématu báze (`content/cs/test-bank.js`) se vylosuje jedna otázka, z tématu Produkt a značka dvě, celkem 8. Uzavřené otázky se vyhodnotí automaticky, u otevřených student napíše odpověď a porovná ji se vzorem. Nic se neukládá.

## Rozšiřující kapitoly

Příznak `extension: true` v `data/course.js` zobrazí štítek „Rozšiřující téma“ na přehledu a poznámku v úvodu kapitoly.
