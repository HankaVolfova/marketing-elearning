// Úvodní ilustrace kapitol: minimalistické ploché kresby předmětů z příběhu kapitoly.
// Bez postav a obličejů, jen barvy kurzu (proměnné --i-*). Dekorativní: aria-hidden.

const S = 'stroke="var(--i-line)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
const bg = '<circle cx="120" cy="104" r="88" fill="var(--i-white)"/>';
const shadow = (cx, w) => `<ellipse cx="${cx}" cy="178" rx="${w}" ry="6" fill="var(--i-mint)"/>`;

const ART = {
  // Ranec: batoh Dojížďák s kapsou na jízdenku
  'ch-filosofie': `${bg}${shadow(120, 52)}
    <path d="M92 66 q0-26 28-26 q28 0 28 26" fill="none" ${S}/>
    <rect x="78" y="62" width="84" height="112" rx="22" fill="var(--i-emerald)" ${S}/>
    <rect x="92" y="112" width="56" height="46" rx="10" fill="var(--i-mint)" ${S}/>
    <path d="M92 124 h56" ${S}/>
    <path d="M86 84 h68" ${S}/>
    <rect x="160" y="96" width="14" height="40" rx="5" fill="var(--i-butter)" ${S}/>
    <rect x="163" y="84" width="10" height="16" rx="2" fill="var(--i-white)" ${S}/>`,

  // Sportovní centrum: terč s šipkou a kettlebell
  'ch-strategie': `${bg}${shadow(124, 62)}
    <circle cx="104" cy="96" r="46" fill="var(--i-white)" ${S}/>
    <circle cx="104" cy="96" r="31" fill="var(--i-mint)" ${S}/>
    <circle cx="104" cy="96" r="15" fill="var(--i-emerald)" ${S}/>
    <path d="M104 96 L150 52" ${S}/>
    <path d="M150 52 l-2 -12 m2 12 l12 -2" ${S}/>
    <rect x="134" y="148" width="68" height="8" rx="4" fill="var(--i-white)" ${S}/>
    <rect x="138" y="134" width="12" height="36" rx="4" fill="var(--i-lilac)" ${S}/>
    <rect x="186" y="134" width="12" height="36" rx="4" fill="var(--i-lilac)" ${S}/>`,

  // Kavárna Za rohem: šálek na podšálku, pára, cedulka
  'ch-prostredi': `${bg}${shadow(116, 58)}
    <ellipse cx="116" cy="162" rx="56" ry="10" fill="var(--i-white)" ${S}/>
    <path d="M78 104 h76 v28 q0 28 -38 28 q-38 0 -38 -28 z" fill="var(--i-emerald)" ${S}/>
    <path d="M154 112 q20 0 20 14 q0 14 -20 14" fill="none" ${S}/>
    <path d="M100 92 q-8 -10 0 -20 q8 -10 0 -20" fill="none" ${S}/>
    <path d="M120 92 q-8 -10 0 -20 q8 -10 0 -20" fill="none" ${S}/>
    <path d="M140 92 q-8 -10 0 -20" fill="none" ${S}/>
    <rect x="158" y="40" width="30" height="40" rx="6" fill="var(--i-butter)" ${S}/>
    <path d="M166 54 h14 M166 64 h10" ${S}/>`,

  // Krabička: obědová krabička s přihrádkami a špendlík místa doručení
  'ch-stp': `${bg}${shadow(116, 62)}
    <rect x="60" y="92" width="112" height="78" rx="12" fill="var(--i-white)" ${S}/>
    <path d="M116 92 v78 M116 130 h56" ${S}/>
    <circle cx="88" cy="128" r="16" fill="var(--i-butter)" ${S}/>
    <rect x="124" y="100" width="40" height="22" rx="6" fill="var(--i-emerald)" ${S}/>
    <rect x="124" y="138" width="40" height="24" rx="6" fill="var(--i-lilac)" ${S}/>
    <path d="M170 34 q-20 0 -20 20 q0 16 20 34 q20 -18 20 -34 q0 -20 -20 -20 z" fill="var(--i-emerald)" ${S}/>
    <circle cx="170" cy="54" r="7" fill="var(--i-white)" ${S}/>`,

  // DOUŠEK: termolahev a hrnek
  'ch-produkt': `${bg}${shadow(118, 58)}
    <rect x="86" y="30" width="34" height="18" rx="5" fill="var(--i-line)"/>
    <rect x="78" y="46" width="50" height="128" rx="16" fill="var(--i-emerald)" ${S}/>
    <path d="M78 76 h50 M78 150 h50" ${S}/>
    <rect x="136" y="116" width="44" height="58" rx="10" fill="var(--i-lilac)" ${S}/>
    <path d="M180 128 q16 0 16 14 q0 14 -16 14" fill="none" ${S}/>
    <path d="M136 130 h44" ${S}/>`,

  // KLID: sluchátka přes uši
  'ch-znacka': `${bg}${shadow(120, 56)}
    <path d="M70 128 v-26 q0 -52 50 -52 q50 0 50 52 v26" fill="none" ${S}/>
    <path d="M70 102 q0 -44 50 -44 q50 0 50 44" fill="none" stroke="var(--i-emerald)" stroke-width="6" stroke-linecap="round"/>
    <rect x="56" y="112" width="34" height="56" rx="14" fill="var(--i-emerald)" ${S}/>
    <rect x="150" y="112" width="34" height="56" rx="14" fill="var(--i-emerald)" ${S}/>
    <rect x="80" y="120" width="12" height="40" rx="5" fill="var(--i-lilac)" ${S}/>
    <rect x="148" y="120" width="12" height="40" rx="5" fill="var(--i-lilac)" ${S}/>`,

  // ZÁŘ: stolní lampa a cenovka
  'ch-cena': `${bg}${shadow(108, 50)}
    <ellipse cx="96" cy="170" rx="34" ry="8" fill="var(--i-emerald)" ${S}/>
    <path d="M96 162 L118 100 L82 64" fill="none" ${S}/>
    <circle cx="118" cy="100" r="5" fill="var(--i-white)" ${S}/>
    <path d="M60 50 l40 -16 l14 30 l-50 18 z" fill="var(--i-emerald)" ${S}/>
    <path d="M78 76 q-4 30 22 40" fill="none" stroke="var(--i-yellow)" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/>
    <path d="M148 92 h34 l12 14 l-12 14 h-34 z" fill="var(--i-butter)" ${S}/>
    <circle cx="158" cy="106" r="4" fill="var(--i-white)" ${S}/>
    <path d="M168 102 h14 M168 110 h10" ${S}/>`,

  // TAH: krabice deskové hry, kostka a balík na cestě
  'ch-distribuce': `${bg}${shadow(116, 62)}
    <rect x="52" y="84" width="96" height="62" rx="8" fill="var(--i-emerald)" ${S}/>
    <rect x="56" y="146" width="88" height="14" rx="4" fill="var(--i-mint)" ${S}/>
    <path d="M66 94 h68 v42 h-68 z" fill="var(--i-white)" ${S}/>
    <path d="M66 115 h68 M100 94 v42" ${S}/>
    <circle cx="83" cy="104" r="5" fill="var(--i-yellow)" ${S}/>
    <circle cx="117" cy="126" r="5" fill="var(--i-lilac)" ${S}/>
    <rect x="160" y="128" width="30" height="30" rx="7" fill="var(--i-white)" ${S}/>
    <circle cx="169" cy="137" r="2.6" fill="var(--i-line)"/><circle cx="181" cy="149" r="2.6" fill="var(--i-line)"/><circle cx="175" cy="143" r="2.6" fill="var(--i-line)"/>
    <rect x="150" y="48" width="40" height="34" rx="5" fill="var(--i-butter)" ${S}/>
    <path d="M150 60 h40 M170 48 v12" ${S}/>
    <path d="M136 66 h-26 M128 76 h-18" stroke="var(--i-emerald)" stroke-width="3" stroke-linecap="round"/>`,

  // ÚCHOP: panel lezecké stěny s chyty a bublina sdělení
  'ch-komunikace': `${bg}${shadow(108, 54)}
    <path d="M58 172 L74 40 h68 l-8 132 z" fill="var(--i-mint)" ${S}/>
    <path d="M90 140 q-10 0 -8 -8 q4 -10 14 -6 q8 4 2 12 z" fill="var(--i-emerald)" ${S}/>
    <path d="M110 108 q-8 2 -10 -6 q0 -10 10 -8 q8 2 6 10 z" fill="var(--i-lilac)" ${S}/>
    <path d="M94 76 q-10 0 -8 -8 q4 -8 12 -6 q8 4 2 12 z" fill="var(--i-yellow)" ${S}/>
    <path d="M118 58 q-6 -2 -4 -8 q4 -6 10 -2 q4 4 -2 10 z" fill="var(--i-emerald)" ${S}/>
    <path d="M150 52 h40 q8 0 8 8 v22 q0 8 -8 8 h-24 l-10 10 v-10 h-6 q-8 0 -8 -8 v-22 q0 -8 8 -8 z" fill="var(--i-white)" ${S}/>
    <path d="M160 66 h28 M160 76 h18" ${S}/>`,

  // KROK: běžecká bota
  'ch-spotrebitel': `${bg}${shadow(120, 66)}
    <path d="M52 150 q0 -18 16 -24 l30 -10 l18 -30 q6 -8 14 -4 l10 6 q10 6 18 18 q14 20 34 26 q16 4 16 18 v6 q0 10 -12 10 h-130 q-14 0 -14 -10 z" fill="var(--i-emerald)" ${S}/>
    <path d="M52 156 h144 v6 q0 10 -12 10 h-118 q-14 0 -14 -10 z" fill="var(--i-white)" ${S}/>
    <path d="M108 100 l14 8 M102 112 l14 8 M96 124 l12 6" stroke="var(--i-white)" stroke-width="3" stroke-linecap="round"/>
    <path d="M150 124 q10 10 26 14" fill="none" stroke="var(--i-lilac)" stroke-width="5" stroke-linecap="round"/>`,

  // VENKU: stan a trekové hole
  'ch-portfolio': `${bg}${shadow(118, 66)}
    <path d="M48 170 L104 70 L168 170 z" fill="var(--i-emerald)" ${S}/>
    <path d="M104 70 L132 170" ${S}/>
    <path d="M104 116 L84 170 h40 z" fill="var(--i-mint)" ${S}/>
    <path d="M104 70 l-6 -12 M104 70 l8 -10" ${S}/>
    <path d="M168 170 l-62 -100" ${S}/>
    <path d="M178 70 l12 102 M192 70 l2 102" ${S}/>
    <path d="M174 70 h8 M188 70 h8" stroke="var(--i-lilac)" stroke-width="6" stroke-linecap="round"/>`,

  // ROSTO: pěstitelská sada (květináč se sazenicí) a obrys zeměkoule
  'ch-mezinarodni': `${bg}${shadow(108, 54)}
    <circle cx="166" cy="62" r="26" fill="var(--i-white)" ${S}/>
    <path d="M140 62 h52 M166 36 q-14 26 0 52 M166 36 q14 26 0 52" fill="none" ${S}/>
    <path d="M70 120 h76 l-8 52 h-60 z" fill="var(--i-lilac)" ${S}/>
    <rect x="64" y="110" width="88" height="14" rx="5" fill="var(--i-emerald)" ${S}/>
    <path d="M108 110 v-40" ${S}/>
    <path d="M108 86 q-26 -2 -30 -24 q24 0 30 24 z" fill="var(--i-emerald)" ${S}/>
    <path d="M108 74 q20 -6 22 -26 q-20 4 -22 26 z" fill="var(--i-mint)" ${S}/>`
};

export function chapterArt(chapterId) {
  const body = ART[chapterId];
  if (!body) return null;
  return `<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">${body}</svg>`;
}
