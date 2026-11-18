// Jazyková vrstva. Všechny texty se načítají odsud; komponenty a logika úloh
// jsou na jazyku nezávislé. Anglickou verzi lze doplnit přidáním složky content/en
// se stejnou strukturou a záznamu do LANGS.

import uiCs from '../content/cs/ui.js';
import courseCs from '../content/cs/course.js';
import glossaryCs from '../content/cs/glossary.js';
import figuresCs from '../content/cs/figures.js';
import chFilosofieCs from '../content/cs/chapters/ch-filosofie.js';
import tasksFilosofieCs from '../content/cs/tasks/ch-filosofie.js';
import chStrategieCs from '../content/cs/chapters/ch-strategie.js';
import tasksStrategieCs from '../content/cs/tasks/ch-strategie.js';
import chProstrediCs from '../content/cs/chapters/ch-prostredi.js';
import tasksProstrediCs from '../content/cs/tasks/ch-prostredi.js';
import chStpCs from '../content/cs/chapters/ch-stp.js';
import tasksStpCs from '../content/cs/tasks/ch-stp.js';
import chProduktCs from '../content/cs/chapters/ch-produkt.js';
import tasksProduktCs from '../content/cs/tasks/ch-produkt.js';
import chZnackaCs from '../content/cs/chapters/ch-znacka.js';
import tasksZnackaCs from '../content/cs/tasks/ch-znacka.js';
import chCenaCs from '../content/cs/chapters/ch-cena.js';
import tasksCenaCs from '../content/cs/tasks/ch-cena.js';
import chDistribuceCs from '../content/cs/chapters/ch-distribuce.js';
import tasksDistribuceCs from '../content/cs/tasks/ch-distribuce.js';
import chKomunikaceCs from '../content/cs/chapters/ch-komunikace.js';
import tasksKomunikaceCs from '../content/cs/tasks/ch-komunikace.js';
import chSpotrebitelCs from '../content/cs/chapters/ch-spotrebitel.js';
import tasksSpotrebitelCs from '../content/cs/tasks/ch-spotrebitel.js';
import chPortfolioCs from '../content/cs/chapters/ch-portfolio.js';
import tasksPortfolioCs from '../content/cs/tasks/ch-portfolio.js';
import chMezinarodniCs from '../content/cs/chapters/ch-mezinarodni.js';
import tasksMezinarodniCs from '../content/cs/tasks/ch-mezinarodni.js';

const LANGS = {
  cs: {
    ui: uiCs,
    course: courseCs,
    glossary: glossaryCs,
    figures: figuresCs,
    chapters: { 'ch-filosofie': chFilosofieCs, 'ch-strategie': chStrategieCs, 'ch-prostredi': chProstrediCs, 'ch-stp': chStpCs, 'ch-produkt': chProduktCs, 'ch-znacka': chZnackaCs, 'ch-cena': chCenaCs, 'ch-distribuce': chDistribuceCs, 'ch-komunikace': chKomunikaceCs, 'ch-spotrebitel': chSpotrebitelCs, 'ch-portfolio': chPortfolioCs, 'ch-mezinarodni': chMezinarodniCs },
    tasks: { ...tasksFilosofieCs, ...tasksStrategieCs, ...tasksProstrediCs, ...tasksStpCs, ...tasksProduktCs, ...tasksZnackaCs, ...tasksCenaCs, ...tasksDistribuceCs, ...tasksKomunikaceCs, ...tasksSpotrebitelCs, ...tasksPortfolioCs, ...tasksMezinarodniCs }
  }
};

let current = 'cs';

export function setLang(lang) { if (LANGS[lang]) current = lang; }
export function lang() { return current; }
export const L = () => LANGS[current];
export const ui = () => LANGS[current].ui;
