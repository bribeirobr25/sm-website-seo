#!/usr/bin/env node
// Validation step 2 of 2: code checks have passed.
// Now do the visual review — required before declaring any build "done"
// per `docs/design/CHECKLIST.md` and `docs/design/DESIGN-BEST-PRACTICES.md` §16.

const PAGES = [
  { path: '/', label: 'PT home' },
  { path: '/menu', label: 'PT menu (stub)' },
  { path: '/visitar', label: 'PT visit (stub)' },
  { path: '/politica-de-privacidade', label: 'PT privacy (stub)' },
  { path: '/en/', label: 'EN home' },
  { path: '/en/menu', label: 'EN menu (stub)' },
  { path: '/en/visit', label: 'EN visit (stub)' },
  { path: '/en/privacy-policy', label: 'EN privacy (stub)' },
];

const VIEWPORTS = [
  { w: 375, h: 812, label: 'mobile' },
  { w: 768, h: 1024, label: 'tablet' },
  { w: 1280, h: 900, label: 'desktop' },
];

const G = '\x1b[32m';
const Y = '\x1b[33m';
const D = '\x1b[2m';
const R = '\x1b[0m';
const B = '\x1b[1m';

console.log(`\n${G}✓${R} Lint + build passed.\n`);
console.log(`${B}Step 2 — visual validation (required before declaring done)${R}\n`);
console.log(
  `${D}1. Start the dev server bound to all interfaces (so Docker MCP browser can reach it):${R}`,
);
console.log(`     pnpm dev:host\n`);
console.log(
  `${D}2. With the dev server running, capture screenshots at each viewport for each page:${R}\n`,
);

for (const page of PAGES) {
  console.log(`   ${Y}${page.label}${R}  ${D}→ http://host.docker.internal:4321${page.path}${R}`);
}

console.log('');
console.log(`${D}3. At each URL, walk through the three viewports:${R}`);
for (const v of VIEWPORTS) {
  console.log(`     • ${v.label.padEnd(7)} ${v.w} × ${v.h}`);
}

console.log(
  `\n${B}What to check in every screenshot (DESIGN-BEST-PRACTICES.md §15 — AI-template tells):${R}`,
);
const TELLS = [
  'Identical section rhythm repeated 3+ times',
  'Menu rendered as uniform photo-card grid',
  'Trio of identical 5-star review cards',
  'Decorative gradient orb behind hero',
  'CTA chips duplicated unchanged across sections',
  'No place-identity detail anywhere',
  'Photo style inconsistent inside a uniform grid',
  'Header link going to a 404',
  'Map block renders blank',
  'Image labeled as dish X when photo shows something else',
];
for (const t of TELLS) {
  console.log(`   ${D}□${R} ${t}`);
}

console.log(
  `\n${D}Reference: docs/design/CHECKLIST.md §2 — visual review at three viewports.${R}\n`,
);
