// Ilustrační svět kurzu: batoh-průvodce, zákazníci, tým firmy Ranec.
// Měkké zaoblené tvary, pastelové výplně z palety ŠAVŠ, smaragdové kontury.
// Ilustrace neobsahují text (bubliny s textem jsou HTML). Barvy přes CSS proměnné.

const S = 'stroke="var(--i-line)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
const s = (w = 2.4) => `stroke="var(--i-line)" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;

// Obličej batohu podle nálady
function face(mood, cx = 60, cy = 74) {
  const eyeY = cy - 4;
  const eyes = mood === 'happy'
    ? `<path d="M${cx - 14} ${eyeY}q4-5 8 0M${cx + 6} ${eyeY}q4-5 8 0" ${s(2.4)} fill="none"/>`
    : `<circle cx="${cx - 10}" cy="${eyeY}" r="2.8" fill="var(--i-line)"/><circle cx="${cx + 10}" cy="${eyeY}" r="2.8" fill="var(--i-line)"/>`;
  const mouth = {
    happy: `<path d="M${cx - 9} ${cy + 5}q9 9 18 0" ${s()} fill="var(--i-white)"/>`,
    neutral: `<path d="M${cx - 7} ${cy + 6}q7 5 14 0" ${s()} fill="none"/>`,
    worried: `<path d="M${cx - 7} ${cy + 9}q7-6 14 0" ${s()} fill="none"/><path d="M${cx - 15} ${eyeY - 8}l7 2M${cx + 15} ${eyeY - 8}l-7 2" ${s(2)} fill="none"/>`,
    thinking: `<path d="M${cx - 6} ${cy + 7}h12" ${s()} fill="none"/><path d="M${cx + 6} ${eyeY - 9}l8-3" ${s(2)} fill="none"/>`
  }[mood] || '';
  const blush = mood === 'happy' ? `<ellipse cx="${cx - 19}" cy="${cy + 3}" rx="4" ry="2.5" fill="var(--i-purple)" opacity=".7"/><ellipse cx="${cx + 19}" cy="${cy + 3}" rx="4" ry="2.5" fill="var(--i-purple)" opacity=".7"/>` : '';
  return eyes + mouth + blush;
}

// Batoh-průvodce. extras: 'patch' (nášivka), 'pockets' (hodně kapes)
export function mascot(mood = 'neutral', { extras = [], label = '' } = {}) {
  return `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"'}>
  <path d="M44 22c0-9 7-15 16-15s16 6 16 15" ${s(3)} fill="none"/>
  <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" ${S}/>
  <path d="M22 54c10-12 66-12 76 0" ${S} fill="none"/>
  <rect x="38" y="92" width="44" height="22" rx="9" fill="var(--i-emerald)" ${S}/>
  <path d="M60 92v6" ${s(2)}/>
  ${face(mood, 60, 74)}
  ${extras.includes('patch') ? `<path d="M80 98l9-3 3 9-9 3z" fill="var(--i-yellow)" ${s(2)}/><path d="M82 99l7 6M88 97l-5 9" ${s(1.4)}/>` : ''}
  ${extras.includes('pockets') ? `<rect x="6" y="64" width="16" height="20" rx="5" fill="var(--i-purple)" ${S}/><rect x="98" y="58" width="16" height="22" rx="5" fill="var(--i-yellow)" ${S}/><rect x="98" y="84" width="14" height="16" rx="5" fill="var(--i-lilac)" ${S}/><rect x="8" y="88" width="14" height="16" rx="5" fill="var(--i-butter)" ${S}/><path d="M52 6l3-5M68 6l-3-5" ${s(2)}/>` : ''}
</svg>`;
}

export const mascotMini = (mood) => `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" stroke="var(--i-line)" stroke-width="5" stroke-linejoin="round"/>
  ${face(mood, 60, 72).replace(/stroke-width="2(\.4)?"/g, 'stroke-width="4.5"').replace(/r="2.8"/g, 'r="5"')}
</svg>`;

// Batoh pod deštěm s notebookem
export const rainScene = `<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <ellipse cx="130" cy="190" rx="90" ry="8" fill="var(--i-mint)"/>
  <path d="M86 52c-13 0-22-8-22-19s10-19 22-18c4-11 15-16 28-13 11-9 32-6 37 7 15-2 26 7 26 19s-10 24-25 24z" fill="var(--i-white)" ${S}/>
  <path d="M84 64l-5 10M102 62l-5 10M164 62l-5 10M182 64l-5 10M60 92l-5 10M66 128l-5 10M200 96l-5 10M206 132l-5 10" stroke="var(--i-rain)" stroke-width="3" stroke-linecap="round"/>
  <g transform="translate(78 74) scale(.86)">
    <path d="M44 22c0-9 7-15 16-15s16 6 16 15" ${s(3)} fill="none"/>
    <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" ${S}/>
    <rect x="38" y="92" width="44" height="22" rx="9" fill="var(--i-emerald)" ${S}/>
    ${face('worried', 60, 74)}
  </g>
  <rect x="150" y="70" width="38" height="26" rx="4" fill="var(--i-butter)" ${S} transform="rotate(16 169 83)"/>
  <path d="M156 92l26 7" ${s(2)} transform="rotate(16 169 83)"/>
</svg>`;

// Zákaznice a firma: obě strany něco získají
export const twoSides = `<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <ellipse cx="130" cy="160" rx="110" ry="8" fill="var(--i-mint)"/>
  <!-- zákaznice -->
  <circle cx="62" cy="58" r="20" fill="var(--i-white)" ${S}/>
  <path d="M42 54c4-18 34-20 40-2-10-6-26-6-40 2z" fill="var(--i-line)"/>
  <circle cx="55" cy="60" r="2.2" fill="var(--i-line)"/><circle cx="69" cy="60" r="2.2" fill="var(--i-line)"/>
  <path d="M56 68q6 5 12 0" ${s(2)} fill="none"/>
  <path d="M32 152c0-34 12-52 30-52s30 18 30 52" fill="var(--i-lilac)" ${S}/>
  <path d="M78 104c10 0 16 8 16 18v18c0 6-5 10-10 10h-4" fill="var(--i-mint)" ${S}/>
  <!-- srdce -->
  <path d="M120 70c-6-8-18-4-16 6 1 6 16 16 16 16s15-10 16-16c2-10-10-14-16-6z" fill="var(--i-purple)" ${S}/>
  <!-- obchod -->
  <path d="M164 88h76v64h-76z" fill="var(--i-white)" ${S}/>
  <path d="M158 88l10-24h68l10 24z" fill="var(--i-yellow)" ${S}/>
  <path d="M176 64v24M194 64v24M212 64v24M230 64v24" ${s(2)}/>
  <rect x="188" y="114" width="28" height="38" rx="5" fill="var(--i-mint)" ${S}/>
  <!-- mince -->
  <circle cx="138" cy="122" r="13" fill="var(--i-yellow)" ${S}/><path d="M138 115v14" ${s(2)}/>
</svg>`;

// Reklama: megafon, který přehluší otázku po zákazníkovi
export const megaphone = `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <ellipse cx="130" cy="150" rx="100" ry="7" fill="var(--i-mint)"/>
  <path d="M40 70l70-34v88L40 90z" fill="var(--i-yellow)" ${S}/>
  <rect x="24" y="66" width="18" height="28" rx="6" fill="var(--i-white)" ${S}/>
  <path d="M56 92l6 26h12l-4-22" fill="var(--i-white)" ${S}/>
  <path d="M124 56q12 24 0 48M138 46q20 34 0 68" stroke="var(--i-rain)" stroke-width="2.6" stroke-linecap="round" fill="none"/>
  <g transform="translate(160 40) scale(.72)">
    <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" ${S}/>
    <rect x="38" y="92" width="44" height="22" rx="9" fill="var(--i-emerald)" ${S}/>
    ${face('thinking', 60, 74)}
  </g>
</svg>`;

// Billboard u nádraží a batoh, který se nevejde pod sedadlo ve vlaku
export const billboard = `<svg viewBox="0 0 260 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <ellipse cx="130" cy="160" rx="110" ry="7" fill="var(--i-mint)"/>
  <rect x="14" y="16" width="104" height="64" rx="8" fill="var(--i-yellow)" ${S}/>
  <path d="M40 80v76M92 80v76" ${S}/>
  <g transform="translate(46 24) scale(.36)">
    <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" ${S}/>
    ${face('happy', 60, 74)}
  </g>
  <path d="M24 30l8 4M24 64l8-3M108 30l-8 4M108 64l-8-3" ${s(2)}/>
  <g transform="translate(158 96) scale(.62)">
    <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" ${S}/>
    <rect x="38" y="92" width="44" height="22" rx="9" fill="var(--i-emerald)" ${S}/>
    ${face('worried', 60, 74)}
  </g>
  <!-- sedadlo ve vlaku -->
  <path d="M150 156v-40h86v40" fill="none" ${S}/>
  <rect x="146" y="98" width="94" height="18" rx="6" fill="var(--i-lilac)" ${S}/>
  <path d="M232 98V40c0-6 4-10 10-10" fill="none" ${S}/>
  <path d="M168 132l-8 6M228 132l8 6" ${s(2.2)}/>
</svg>`;

// Batoh jako předmět (bez obličeje) pro produktovou kartu
export const productIcon = `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M44 22c0-9 7-15 16-15s16 6 16 15" ${s(3)} fill="none"/>
  <path d="M22 50c0-18 14-30 38-30s38 12 38 30v52c0 10-8 18-18 18H40c-10 0-18-8-18-18z" fill="var(--i-mint)" ${S}/>
  <path d="M22 56c12-8 64-8 76 0" ${S} fill="none"/>
  <rect x="36" y="70" width="48" height="34" rx="10" fill="var(--i-emerald)" ${S}/>
  <path d="M44 80h32" ${s(2)}/>
  <path d="M98 66l6 2M98 82l6 2" stroke="var(--i-yellow)" stroke-width="5" stroke-linecap="round"/>
</svg>`;

export const mug = `
<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M10 18h22v16c0 5-4 8-8 8h-6c-4 0-8-3-8-8z" fill="var(--i-yellow)" ${S}/>
  <path d="M32 22h3c3 0 5 2 5 5s-2 5-5 5h-3" ${S} fill="none"/>
  <path d="M16 6c-2 3 2 5 0 8M22 6c-2 3 2 5 0 8M28 6c-2 3 2 5 0 8" ${S} fill="none"/>
</svg>`;

// Postavy pro poradu
const head = (hair, fill) => `
<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
  <path d="M10 88c2-22 14-32 30-32s28 10 30 32" fill="${fill}" ${S}/>
  <circle cx="40" cy="32" r="18" fill="var(--i-white)" ${S}/>
  ${hair}
  <circle cx="34" cy="33" r="1.8" fill="var(--i-line)"/><circle cx="46" cy="33" r="1.8" fill="var(--i-line)"/>
  <path d="M35 41c3 2 7 2 10 0" ${S} fill="none"/>
</svg>`;

export const people = {
  vyrobni: head(`<path d="M22 28c2-12 12-16 18-16s16 4 18 16c-6-4-12-6-18-6s-12 2-18 6z" fill="var(--i-line)" ${S}/>`, 'var(--i-mint)'),
  vyrobkova: head(`<path d="M22 30c0-10 8-18 18-18s18 8 18 18" ${S} fill="none"/><rect x="28" y="28" width="9" height="7" rx="2" ${S} fill="none"/><rect x="43" y="28" width="9" height="7" rx="2" ${S} fill="none"/><line x1="37" y1="31" x2="43" y2="31" ${S}/>`, 'var(--i-butter)'),
  prodejni: head(`<path d="M24 26c4-10 12-14 16-14 8 0 14 6 16 14-8-2-20-2-32 0z" fill="var(--i-yellow)" ${S}/>`, 'var(--i-lilac)'),
  marketingova: head(`<path d="M22 34c-2-14 8-22 18-22s20 8 18 22c-2-6-6-10-10-12-6 4-16 6-26 12z" fill="var(--i-purple)" ${S}/>`, 'var(--i-mint)'),
  odpovedna: head(`<path d="M22 30c0-12 10-18 18-18s18 6 18 18" ${S} fill="none"/><path d="M58 22c6 0 10 4 10 10-6 0-10-4-10-10z" fill="var(--i-emerald)" ${S}/>`, 'var(--i-emerald)')
};

export const blockIcons = {
  b1: mascotMini('happy'),
  b2: `<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M8 34h32" ${S}/><path d="M24 10v24" ${S}/><path d="M12 22l-5 10h10zM36 18l-5 10h10z" fill="var(--i-yellow)" ${S}/><path d="M12 22h24" ${S}/></svg>`,
  b3: `<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><rect x="6" y="10" width="14" height="14" rx="5" fill="var(--i-mint)" ${S}/><rect x="28" y="24" width="14" height="14" rx="5" fill="var(--i-lilac)" ${S}/><path d="M20 17h8c4 0 7 3 7 7" ${S} fill="none"/><path d="M28 31h-8c-4 0-7-3-7-7" ${S} fill="none"/></svg>`,
  b4: `<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M8 18c0-5 4-8 9-8h14c5 0 9 3 9 8v6c0 5-4 8-9 8H22l-8 6v-6c-4-1-6-4-6-8z" fill="var(--i-lilac)" ${S}/><circle cx="18" cy="21" r="1.8" fill="var(--i-line)"/><circle cx="24" cy="21" r="1.8" fill="var(--i-line)"/><circle cx="30" cy="21" r="1.8" fill="var(--i-line)"/></svg>`,
  b5: `<svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path d="M24 8l16 28H8z" fill="var(--i-mint)" ${S}/><circle cx="24" cy="26" r="4" fill="var(--i-yellow)" ${S}/></svg>`
};

export const backpack = mascot('happy');
export const hero = mascot('neutral', { extras: ['pockets'] });

export const scenes = { rain: rainScene, twoSides, megaphone, billboard };
