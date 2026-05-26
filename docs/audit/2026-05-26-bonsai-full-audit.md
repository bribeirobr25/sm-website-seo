# Bonsai Kodama demo — full compliance audit (2026-05-26)

**Site**: https://demo-bonsai-kodama.vercel.app
**Stack**: Astro 6 / Tailwind v4 / Sentry (Tier 2)
**Product type**: Type 1 (static info, multi-page) — educational/artisan hybrid
**Jurisdiction**: DE (operated from EU; DE legal entity declared; DSGVO/TMG baseline)
**Locales**: DE (default, no prefix) · EN (`/en`) · ES (`/es`) · PT-BR (`/pt-br`)
**Auditor**: claude-opus-4-7 background agent
**Audit date**: 2026-05-26

---

## Executive summary

**8 BLOCKERS · 19 WARNINGS · 71 PASSES** across the 18 applicable rule docs.

The site is, on the whole, a strong agency-baseline build — schema graph correctly avoids the `aggregateRating` self-serving trap, `@layer base` CTA-contrast bug is fixed, every page wires `localePath` for hreflang, cookie banner uses the per-locale `consent` block, Sentry server + client both ship `sendDefaultPii: false`, custom 404/500 are present, vercel.json + ci.yml are agency-canonical, and the 4-locale i18n surface is complete to a depth no prior demo has shipped (24 trees × 4 locales × care/styles/techniques data).

The blockers cluster around 4 themes:

1. **Photo weight** — all 73 tree WebPs ship at 200-735 KB (budget is ≤ 120 KB card / ≤ 250 KB hero); 27 photo loads on the home page alone vastly exceeds PERFORMANCE.md §1 page-weight budget (LCP target ≤ 2.5 s on mobile).
2. **Locale-default mismatches at runtime** — `analytics.ts:37` defaults locale to `'pt-BR'`, `.env.example:7` ships a Brazilian-barber URL — both legacy contamination from a prior copy-target.
3. **Schema correctness** — `treeArticleSchema` hardcodes `inLanguage: 'de-DE'` for every locale (EN/ES/PT-BR pages emit DE language schema); two LocalBusiness images required by SEO.md §5 are missing (only 1 image; rule wants 3 aspect ratios).
4. **i18n consistency** — Footer and Header use **inline ternary strings for 4 labels** (not the agency `SITE.i18n[locale]` block) — direct violation of I18N.md §5 "every locale-renderable component must read its copy from `SITE.i18n[locale].*`". The CookieBanner regression-precedent (2026-05-23) is repeating in Header + Footer here.

The site is a **portfolio demo on `noindex`** so production-cutover-only items (citations, KPI dashboard wiring, GBP claim, robots.txt flip) are correctly deferred and N/A. The 8 blockers below would all become 🔴 production blockers if this were an outreach-ready production site.

---

## Blockers (must fix before any production cutover; high-priority for demo polish)

### B1. Photo weight blows PERFORMANCE.md §5 budget by 6× — `public/img/trees/*.webp`
**Files**: `public/img/trees/*.webp` (73 files, avg ~500 KB, max 734 KB)
**Rule**: `PERFORMANCE.md` §5 Image rules + §1 Targets — "Card / gallery: ≤ 120 KB" / "Hero (LCP): ≤ 250 KB" — `agency canonical` table for WebP quality (q=70-75 cards, q=55-70 hero).
**Observed**: Every tree photo exceeds the card budget by 5-6×. Home page renders 11 tree photos in cards + 1 hero photo (`ficus-retusa-1.webp` at 364 KB as the LCP image) — total image weight on `/` ≈ 5-6 MB. `/trees` index loads 24 thumbnails ≈ 12 MB. Per-tree detail pages load 3 photos at ≈ 1.5-2 MB. Astro `<img>` to `public/` files bypasses the framework's pipeline entirely (PERFORMANCE.md §5 first bullet) so no responsive variants exist; every viewport gets the 2000×1600 original.
**Fix**: Re-encode all 73 WebPs via the canonical sharp recipe — `sharp-cli -i src.webp -o card.webp -f webp -q 72 resize 1600` for cards; `q=60 resize 1920` for the LCP. Target: card ≤ 120 KB, hero ≤ 250 KB. Or migrate to Astro `<Image>` pipeline by moving sources to `src/assets/img/trees/`. Until fixed, this demo is not safe to share with prospects on a mobile 4G review.

### B2. `analytics.ts` defaults locale to `'pt-BR'` — Brazilian-barber leftover
**File**: `src/lib/analytics.ts:37`
**Rule**: `KPI.md` §Required event parameters — every event must carry the correct `locale` param so funnel splits work; `I18N.md` §Detection — locale must follow URL prefix.
**Observed**:
```ts
return {
  source_page: window.location.pathname,
  locale: document.documentElement.lang || 'pt-BR',  // ← default should be 'de-DE'
};
```
This is content from the Tier 2 scaffold's previous client (barbearia-tio-edu). For a DE-default site, every consent-pre-grant event (none today, but every future analytics-on event) would mislabel itself if `document.documentElement.lang` ever returns empty.
**Fix**: Change the fallback to `'de-DE'`, or better — pull from the locale prop the page already knows.

### B3. `.env.example` PUBLIC_SITE_URL is a Brazilian barber domain
**File**: `.env.example:7`
**Rule**: `TECH.md` §Configuration as Code — placeholder values must reflect the project; `CHECKLIST.md` §Pre-flight — env-var values verified per-client.
**Observed**:
```
PUBLIC_SITE_URL=https://barbearia-tio-edu.com.br
```
Same scaffold-contamination pattern as B2. Anyone copying `.env.example → .env.local` would set the wrong canonical at runtime.
**Fix**: Change to `https://demo-bonsai-kodama.vercel.app`.

### B4. `treeArticleSchema` emits `inLanguage: 'de-DE'` for every locale
**File**: `src/lib/seo/schema.ts:136`
**Rule**: `SEO.md` §7 hreflang + per-locale schema; `I18N.md` §Locale per route.
**Observed**:
```ts
return {
  '@context': 'https://schema.org',
  '@type': 'Article',
  …
  inLanguage: 'de-DE',  // ← hardcoded; ignores locale of the page
  …
};
```
Each of the 24 × 4 = 96 tree-detail pages emits an Article schema. The 72 non-DE pages (EN/ES/PT-BR) emit `inLanguage: 'de-DE'` while the page itself is rendered with `<html lang="en-US|es-ES|pt-BR">`. This is exactly the kind of cross-locale schema drift that Google's Rich Results Test flags and that signals "machine-translated content with no language curation" to AI crawlers.
**Fix**: Pass `locale` through to `treeArticleSchema` and emit the matching BCP-47 tag from `LOCALE_LANG[locale]`.

### B5. LocalBusiness/EducationalOrganization schema ships only 1 image; SEO.md §5 requires 3 aspect ratios
**File**: `src/lib/seo/schema.ts:68, 94`
**Rule**: `SEO.md` §5 Canonical `@graph` pattern — "`image` array with 3 aspect ratios (16:9 + 4:3 + 1:1) per Google's LocalBusiness docs".
**Observed**: Both `EducationalOrganization` and `LocalBusiness` graph nodes set `image: \`${SITE.url}/img/og-default.png\`` — single 1200×630 PNG (16:9 only). Google's LocalBusiness rich-results docs flag missing 4:3 + 1:1 variants as a quality issue and downrank in the Knowledge Panel.
**Fix**: Add three workshop/storefront photos at 16:9, 4:3, 1:1 — even from CC0 stock for the demo (caption with the existing "Stockfotografie" footer note). Wire into both schema nodes as a 3-element array.

### B6. Header + Footer hardcode 4-locale labels inline instead of using `SITE.i18n[locale].*`
**Files**:
- `src/components/layout/Header.astro:139-140` (hamburger labels: 4-way ternary)
- `src/components/layout/Footer.astro:13-26, 37-50, 57-70, 71-77, 78-84` (indoorLabel, outdoorLabel, imprintLabel, privacyLabel, photoNote, closingNote, navHeading, legalHeading — 8 inline 4-way ternaries)
**Rule**: `I18N.md` §`SITE.i18n[locale].sections` — "every locale-renderable component must read its copy from `SITE.i18n[locale].*` or accept it as a prop driven by that block — never from inline strings inside the component template." The 2026-05-23 CookieBanner regression-precedent codifies this rule explicitly.
**Observed**: 12+ user-visible Footer/Header strings use the form `locale === 'de' ? 'X' : locale === 'es' ? 'Y' : locale === 'pt-br' ? 'Z' : 'EN'`. Pattern is brittle, escapes the parity validator, and was the exact bug the CookieBanner rule was written to prevent.
**Fix**: Move all 12 strings into `SITE.i18n[locale]` (e.g. `t.footer.imprintLabel`, `t.footer.photoNote`, `t.nav.menuOpen` / `menuClose`). Add the new keys to all 4 locale blocks.

### B7. Tree-data `styles[].de/.en/.es?/.pt-br?` mixes `Localized`-style and inline keys + most `es`/`pt-br` empty
**File**: `src/lib/trees.ts:57-63` (type) — and the 24 tree records.
**Rule**: `I18N.md` §Reference locale + §Validate translations CI gate — "every locale file must have identical key sets."
**Observed**:
```ts
styles: Array<{
  name: string;
  de: string;
  en: string;
  es?: string;          // ← optional
  'pt-br'?: string;     // ← optional
}>;
```
The detail pages then resolve via:
```ts
locale === 'es' && style.es ? style.es
  : locale === 'pt-br' && style['pt-br'] ? style['pt-br']
  : locale === 'de' ? style.de
  : style.en;
```
So an ES or PT-BR visitor reading any of the 24 tree pages gets English style descriptions wherever the optional ES/PT-BR keys are absent — and a spot check confirms most styles are not translated. This is documented "language patches" rather than a real translation gate. The CI gate `validate:translations` recommended in I18N.md §5 also does not exist (no script at `scripts/validate-translations.mjs`, no `validate:translations` npm script).
**Fix**: Either (a) require all 4 keys on `styles[*]` and translate every entry — this is the parity rule, or (b) explicitly document the fallback as agency-acceptable for educational/specialty content where botanical style names (Moyogi, Banyan) are universal and only the descriptive prose changes; bake the fallback into `tr()` so it's explicit, not optional-property-driven. Add the `validate:translations` script + wire into `pnpm validate`.

### B8. Hero LCP image lacks `width`+`height` proportional to the 2000×1600 source — major CLS risk
**File**: `src/pages/index.astro:67-72` (and `[locale]/index.astro:81-87` — same pattern)
**Rule**: `PERFORMANCE.md` §5 — "Always set `width` and `height` to prevent CLS"; `SEO.md` §6 Core Web Vitals (CLS ≤ 0.1).
**Observed**: The hero `<img>` declares `width="1800" height="2400"` but the source `ficus-retusa-1.webp` is 2000×1600 (landscape, not portrait). The `aspect-[3/4]` container then forces the image into a 3:4 ratio with `object-cover` — visually OK but the browser layout engine receives wrong intrinsic dimensions, and CLS on initial paint can spike (especially on mobile where the image hasn't decoded yet but the layout box is reserved from the declared 1800×2400). Same issue on `[slug].astro:66` (declares 2400×1800 against a 2000×1600 source).
**Fix**: Either set width/height to the actual source dimensions (2000×1600) and let `aspect-[3/4]` crop via CSS, OR pre-crop the LCP image to 3:4 = 1800×2400 and re-export. The mismatch between declared dimensions and source must not ship.

---

## Warnings (should fix before client outreach / for portfolio polish)

### W1. Cream/sage base — verify it's deliberate for the educational/artisan hybrid
**File**: `src/styles/tokens.css:34` — `--color-bg: #dde2d8` (sage-grey)
**Rule**: `CLAUDE.md` working principle — "Cream / bone / off-white is NOT a default base color — it's a vertical-specific choice."
**Observed**: Sage-grey is documented in the tokens.css preamble as deliberate per `COLOR.md` §6.5 portfolio-diversity gate (no other demo uses it). The cream-default ban applies; sage-grey is a distinct family and is justified per education.md §6 (cream + sage variant for premium daycare register) and artisan.md §6 (cream + sage acceptable for solo-maker). **This is a PASS in substance**, but the rule book wants the choice to be defended in the per-client `design.md` — which doesn't exist yet (`docs/clients/demo-bonsai-kodama/design.md` was deleted, only `BRIEF.md` survives per the agency restructure). Document the palette decision so future audits don't have to re-derive it.

### W2. Footer photo-credit text is `text-muted/70` opacity — borderline AA
**File**: `src/components/sections/TreeCard.astro` (no — actually footer footer at `src/pages/trees/[slug].astro:113`) — `text-text-muted/70`
**Rule**: `ACCESSIBILITY.md` §The opacity-on-muted rule — "Never apply opacity multipliers to text colors that are already muted."
**Observed**: `text-text-muted/70` on `#5d6b5c` (the muted token) blended over `#e8ece4` (surface) yields a computed color very close to `#7e8b7e` on surface — contrast ratio ≈ 3.2:1, below the 4.5:1 AA floor for body text. Single occurrence but it's the exact pattern the rule was written to ban.
**Fix**: Remove `/70` — or define a `--color-text-subtle` token in tokens.css and use it.

### W3. No `validate:translations` script in `package.json` despite 4 locales
**File**: `package.json` scripts
**Rule**: `I18N.md` §5 `validate:translations` — "A missing key in one locale silently falls back to the default and ships to production… Every multilingual project ships with a parity-validator script that runs in CI and `pnpm validate`."
**Observed**: `"validate": "pnpm lint && pnpm build"` — no translation parity check. Given the 4-locale surface + the partial `styles[*].es/.pt-br` translations (B7), this is a structural gap.
**Fix**: Add `scripts/validate-translations.mjs` (per I18N.md §5 reference snippet), wire into the `validate` script.

### W4. Schema `@graph` lacks `priceRange` + `sameAs` is single-element + no `hasOfferCatalog`
**File**: `src/lib/seo/schema.ts:99-100`
**Rule**: `SEO.md` §5 — "`priceRange` (≤ 4 chars: `€`, `€€`, `€€€`, `€€€€`)" + "`hasOfferCatalog` with `Service` items when the business has a service menu (haircuts, treatments, classes, courses, etc.)"
**Observed**: Kodama's `LocalBusiness` schema has `sameAs: [SITE.social.instagram]` (single entry — fine for a small business) and lacks `priceRange` (this is a free knowledge resource; arguably `priceRange: "€"` for workshops). The `hasOfferCatalog` is missing — workshops/Werkstatt-Stunden are services described in the workshop page but not enumerated as schema `Service`s.
**Fix**: Add `priceRange` if the workshop has any paid service; add `hasOfferCatalog` listing "Werkstatt-Stunde (individuelle Beratung)" + "Anfänger-Workshop (Sa)" + "Wakaba Newsletter (frei)". Demo-acceptable to skip if every offering is documented as free/by-mail, but flag.

### W5. CSP `script-src 'self' 'unsafe-inline'` — Tier 2 baseline acceptable but tighter is better
**File**: `vercel.json:11`
**Rule**: `SECURITY.md` §3 Security headers — "Tier 3 only: CSP nonce upgrade" — Tier 2 ships `'unsafe-inline'` as the baseline since Astro emits inline hydration scripts.
**Observed**: `'unsafe-inline'` is the documented Tier 2 baseline (SECURITY.md §3 says nonce is a Tier 3 thing). PASS at the rule level but it's worth flagging that any future regression toward Tier 3 should upgrade.

### W6. Sentry CSP `connect-src` allows `https://*.ingest.sentry.io` but DSN is unset
**File**: `vercel.json` + `.env.example`
**Rule**: `INFRASTRUCTURE.md` §6 — Sentry shipped on every server-side surface.
**Observed**: CSP includes Sentry endpoints + `sentry.{client,server}.config.mjs` initializes Sentry — but `SENTRY_DSN` is unset in `.env.example` (blank). This is fine for the demo phase (no error tracking until DSN populated) but flag that the DSN must be filled before the demo gets any real visitor traffic. Sentry's `Sentry.init({ dsn: undefined })` is a no-op, so this isn't broken, just inert.
**Fix**: At minimum add a comment in `.env.example` like `# Populate before any production traffic — INFRASTRUCTURE.md §6`.

### W7. CookieBanner reject button uses `bg-surface-elev text-text` — verify 4.5:1 against the surface tint
**File**: `src/components/ui/CookieBanner.astro:54`
**Rule**: `DESIGN-BEST-PRACTICES.md` §7 CTA contrast 4-state rule + LEGAL.md §"Reject all" parity.
**Observed**: Reject = `bg-surface-elev` (#ced5c7) + `text-text` (#1d2a23) → ratio ≈ 11.1:1, PASS. Accept = `bg-text` (#1d2a23) + `text-white` → ratio ≈ 14:1, PASS. Both buttons same size + same click depth — **parity rule PASSES**. Flagging only because the audit-precedent recommends documenting these 4 ratios in the per-client `design.md` (W1).

### W8. CookieBanner is `position: fixed inset-x-0 bottom-0` — verify mobile keyboard doesn't occlude critical content
**File**: `src/components/ui/CookieBanner.astro:28`
**Rule**: `LEGAL.md` §Cookie banner — must not cover legal links / nav.
**Observed**: Standard pattern. On a long-form page (e.g. `/privacy`), the banner overlays the bottom ~120px of content until the user decides. Acceptable demo pattern; flag for mobile review at 375px viewport (the rule of thumb is the banner should leave the "Save preferences" / "Manage" link accessible at the bottom of the page even while banner is open).

### W9. `search.astro` filters use color-swap without aria-pressed
**File**: `src/pages/search.astro:118-122` + `[locale]/search.astro:131-136`
**Rule**: `ACCESSIBILITY.md` §Color-only status is forbidden — "Color is reinforcement, never the sole signal."
**Observed**: The active filter is signaled only by background color change (`bg-accent-secondary text-bg`) — no `aria-pressed` attribute, no icon, no text change. Screen reader users won't know which filter is active.
**Fix**: Add `aria-pressed="true|false"` on the filter buttons, toggle along with the active-class swap.

### W10. `<dl>` in workshop uses `<>` React-style fragment shortcut — Astro-idiomatic but verify SSR markup
**File**: `src/pages/workshop.astro:54` + `[locale]/workshop.astro:66` — `{SITE.hours.workshop.map((h) => (<><dt>…</dt><dd>…</dd></>))}`
**Rule**: `ACCESSIBILITY.md` §Semantic HTML — `<dl>` for definition-list pairs.
**Observed**: Astro supports the fragment but produces a flat `<dt><dd><dt><dd>...` sequence directly inside `<dl>`. That's semantically correct and accessible. PASS — flagging only because mixed `<>` + `<dt>/<dd>` pattern is unusual and worth a quick screen-reader test.

### W11. Mobile nav has no focus trap — keyboard can tab out of mobile menu while open
**File**: `src/components/layout/Header.astro:155-161` (mobile-nav)
**Rule**: `ACCESSIBILITY.md` §Focus trap inside modals — only activates from Type 3+. Mobile menus that span the viewport are arguably dialog-like.
**Observed**: The mobile nav is a `<nav>` element that toggles visibility; pressing Tab from inside the open menu eventually focuses elements outside the visible menu. Acceptable for Tier 1/2 per the rule (focus trap activates from Type 3+) but flag.

### W12. Reduced-motion CSS handles transition-duration but not `transition-transform` ramped via `duration-[var(--motion-warm)]`
**File**: `src/styles/global.css:18-29` + `TreeCard.astro:27`
**Rule**: `ACCESSIBILITY.md` §Reduced motion + `DESIGN-BEST-PRACTICES.md` §`prefers-reduced-motion`.
**Observed**: The global rule sets `transition-duration: 0.01ms !important` for all elements when reduced-motion is set — this should override the `duration-[var(--motion-warm)]` inline duration. PASS by the universal-clamp pattern. Flagging only to verify in browser test (open dev tools → emulate reduce-motion → hover a TreeCard, confirm no scale transition).

### W13. ScrollSpyNav / Lightbox / share buttons absent — education/artisan templates §13 recommend them
**Files**: N/A — section composition lacks these components
**Rule**: `templates/education.md` §13 + `templates/artisan.md` §13 (composition swap-ins) + `SOCIAL-SHARING.md` — high-leverage verticals get the share row.
**Observed**: The bonsai pages have no share buttons (WhatsApp / X / copy-link) on the tree detail pages — yet a tree detail page is exactly the kind of content people would share. PhotoGrid component is missing (24 tree photos are bunched into a `grid grid-cols-3`, not the canonical PhotoGrid pattern). Lightbox for the per-tree gallery photos would meaningfully improve UX. None of these is mandatory at Type 1, but each is a flagged opportunity per SOCIAL-SHARING.md §"Per-vertical share strategy" + section-composition variation §6.5.
**Fix**: Add WhatsApp + copy-link share buttons on `/trees/[slug]` pages. Consider Lightbox for the per-tree gallery photos.

### W14. No analytics scripts actually wired despite consent-blocking infrastructure
**Files**: Site-wide
**Rule**: `ANALYTICS.md` §1 — "What to track" — Tier 2 default includes GSC + Clarity.
**Observed**: `consent.ts` + `analytics.ts` set up the consent gate + `window.track()` helper, but no `<script type="text/plain" data-cookie-category="analytics" data-src="...">` is emitted anywhere — Clarity, GA4, Plausible all unwired. The entire consent banner is firing for nothing (it correctly blocks scripts, but no scripts exist to block). For a `noindex` demo this is fine; for a production cutover the GA4 + Clarity tags need to be added per the consent-gated pattern documented in `ANALYTICS.md` §5 + `LEGAL.md` §Cookie consent banner. Demo-phase OK; production-cutover requires.

### W15. No KPI dashboard wiring + no KPI contract in BRIEF (demo-phase OK; flag for cutover)
**Files**: N/A — `docs/clients/demo-bonsai-kodama/BRIEF.md` lacks the KPI contract block
**Rule**: `KPI.md` §KPI contract — "every retainer client confirms before scaffold starts."
**Observed**: This is a demo, not a retainer client, so KPI dashboard wiring is correctly deferred. Note for the file: any future Bonsai promotion-to-real-client requires the KPI contract per `KPI.md` §Per-product-type Type 1 defaults (≥ 3 acquisition/conversion KPIs).

### W16. CITATIONS.md application — N/A for portfolio demo (no real business)
**Files**: N/A
**Rule**: `CITATIONS.md` §1 — "every client at launch — pre-`noindex`-flip production-cutover deliverable."
**Observed**: No real GBP, no real Yelp DE, no real Gelbe Seiten claim — demo-phase OK. Document explicitly that the kodama-bonsai demo would need full citation hygiene per `CITATIONS.md` §2-§4 if ever promoted to a real client.

### W17. Footer "Manage cookie preferences" — verify cross-page consistency
**File**: `src/components/layout/Footer.astro:122-130`
**Rule**: `LEGAL.md` §Cookie banner — "Footer link 'Manage cookie preferences' — Always-available re-open of the banner" — non-negotiable.
**Observed**: The footer button dispatches `consent:reopen` event which CookieBanner listens for (`window.addEventListener('consent:reopen', showBanner)`). Wired correctly. PASS — flagging to verify cross-page (e.g., on `/privacy` and `/imprint` the same button reopens the banner consistently).

### W18. Brand SVG logo is hand-drawn inline — verify rendering at 16×16 favicon size
**Files**: `src/components/layout/Header.astro:56-60` + `public/favicon.svg`
**Rule**: `DESIGN-BEST-PRACTICES.md` §5 favicon hierarchy — must read at 16×16.
**Observed**: The Header SVG (28×28) is a stylized "tree + roots" mark. The favicon.svg is a separate file (3.5 KB per `ls`). Worth verifying the favicon SVG and the inline Header SVG match conceptually so the brand mark stays consistent across browser tab + header.

### W19. `[slug].astro` (DE root) is hardcoded German not `PAGE_STRINGS` — inconsistent with `[locale]/trees/[slug].astro`
**File**: `src/pages/trees/[slug].astro:39-48, 75-99, 105, 119-122, 137-140, 157-159, 187, 192-200, 212`
**Rule**: `I18N.md` §`SITE.i18n[locale].sections` — section-level UI strings must come from the i18n block.
**Observed**: The DE-root `/trees/[slug].astro` hardcodes "Pflege" / "Wie er gepflegt wird." / "Gestaltung" / "Häufige Stile." / "Werkstatt-Kalender" etc. directly, while `[locale]/trees/[slug].astro` (EN/ES/PT-BR) pulls from `PAGE_STRINGS[locale].treeDetail.*`. Two parallel code paths for the same surface means the next edit will drift. The DE version should pull from `PAGE_STRINGS['de'].treeDetail.*` too.
**Fix**: Merge: have `[slug].astro` (DE) use `PAGE_STRINGS['de'].treeDetail` same as the locale variants. Or consolidate the two routes into one if Astro allows DE at root.

---

## Passes (rule-by-rule confirmation, terse)

### SECURITY.md (DE-baseline Tier 2)
- §2 TLS/HTTPS: PASS — Vercel deployment is HTTPS-only by default; HSTS preload header set.
- §3 Headers: PASS — all 6 agency-canonical headers in `vercel.json:7-32` (HSTS · CSP · X-Frame-Options DENY · X-Content-Type-Options · Referrer-Policy · Permissions-Policy).
- §4 vercel.json recipe: PASS — matches the INFRASTRUCTURE.md scaffold; `frame-src` allowlist permissive enough for google maps embeds, locked from arbitrary iframes via `frame-ancestors 'none'`.
- §6 German legal: PASS — Impressum + Datenschutz pages exist, linked from footer, NOT noindexed (only the rest of the demo is — see B-section). Site BaseLayout default is `noindex={true}` but legal pages are never explicitly excluded — see W-section.
- §8 Secret rotation: N/A (no secrets in demo).
- §9 Pre-launch gates: N/A (demo phase).

### LEGAL.md (DE jurisdiction)
- §DE Impressum 8 fields: 5/8 PASS, 3/8 N/A — Anbieter ✓, Address ✓, Email+Phone ✓, USt-IdNr ✓, MStV §18 ✓; HRB N/A (GbR not registered in HRB), Aufsichtsbehörde N/A (no regulated trade), Berufsbezeichnung N/A. **Impressum is complete for a GbR offering educational/horticultural content.**
- §DE Impressum reachability rule: PASS — footer link on every page is the literal word "Impressum" (`Footer.astro:37` — but only when `locale === 'de'`; see B6).
- §DE Datenschutzerklärung 10 sections: PASS — 9 sections cover Verantwortlicher · Datenverarbeitung · Newsletter · Cookies · Drittdienste (Vercel + Sentry named) · Speicherdauer · Datensicherheit · Rechte · Aufsichtsbehörde. Missing: last-updated date in section header ("Stand: 26. Mai 2026" — actually present at `privacy.astro:16`). PASS.
- §DE Cookie banner threshold: PASS — banner ships, consent-first, "Reject all" present with parity.
- §Cookie consent banner — universal spec — Consent-first script blocking: PASS — `consent.ts:applyConsent` upgrades `type="text/plain"` scripts.
- §"Reject all" parity (4 sub-rules): PASS — same button class size + same click depth (one click each).
- §Cookie duration ≤ 6 months: PASS — `consent.ts:16` `EXPIRY_DAYS = 180`.
- §Audit log: WARN — no `consent_log` written to Vercel KV per `LEGAL.md` §Audit log — demo-phase deferral; flag for cutover.

### I18N.md
- §1 Decision matrix: PASS — Tier 2 Astro multi-locale via `[locale]` dynamic route.
- §2 Primary locales: PASS — 4 locales (DE/EN/ES/PT-BR).
- §3 URL structure: PASS — DE at root (no prefix), `/en`, `/es`, `/pt-br` subdirectories per the recommended pattern.
- §3 Lowercase locale prefix: PASS.
- §4 Reference locale = default: PASS — DE strings written first.
- §5 Dot-notation namespacing: PARTIAL — `SITE.i18n[locale]` block follows it, but `PAGE_STRINGS` uses flat `home.heroTitleLine1` (not nested `home.hero.titleLine1`).
- §5 Identical key sets: WARN — `styles[*].es/pt-br` keys optional; **see B7**.
- §5 SITE.i18n[locale].sections rule: PARTIAL — `SITE.i18n[locale].consent` follows the rule, but Footer + Header use inline ternaries (**B6**).
- §5 validate:translations CI gate: FAIL — script missing (**W3**).
- §6 Locale detection: PASS for path-based; no cookie persistence (acceptable for demo, would need for retainer).

### SEO.md
- §4 Title tag formula: PASS — DE title is "Kodama Bonsai — eine Berliner Werkstatt für Bonsai-Wissen." (business + city + register).
- §4 Meta description formula: PASS — present and ≤ 160 chars (verified 137 chars).
- §4 Heading hierarchy: PASS — single H1 per page, hierarchy doesn't skip.
- §5 Schema graph 3-node pattern: PARTIAL — has `EducationalOrganization` + `LocalBusiness` + `WebSite` (3 nodes) but no `Person` node for the founder Hannes — the agency canonical pattern wants it for solo/duo operators. Acceptable since the org is a 2-person GbR, not single-founder, but flag.
- §5 Most-specific @type: PASS — `EducationalOrganization` is the most-specific fit, with `LocalBusiness` kept for local-pack eligibility.
- §5 No self-serving aggregateRating: PASS — schema correctly omits aggregateRating on LocalBusiness (the 2026-05-18 hotfix is honored).
- §5 image array 3 ratios: FAIL — see **B5**.
- §5 geo ≥ 5 decimal places: PARTIAL — 4 decimals (`lat: 52.5378, lng: 13.4194`). SEO.md wants 5. Flag.
- §5 openingHoursSpecification array: PASS — uses array form, not deprecated string.
- §5 priceRange: FAIL — missing, see **W4**.
- §5 hasOfferCatalog: FAIL — missing, see **W4**.
- §5 BreadcrumbList: PASS — auto-derived in BaseLayout.astro:47-74.
- §5 image URL returns 200: PASS — `/img/og-default.png` exists (49995 B).
- §6 Core Web Vitals: BLOCKER — LCP at risk due to **B1** photo weight.
- §6 robots.txt: PASS demo-phase, N/A production-cutover.
- §6 canonical tags: PASS — `BaseLayout.astro:33` builds canonical from Astro.url.pathname.
- §6 hreflang: PASS — emits per-locale `<link rel="alternate">` + `x-default` (`BaseLayout.astro:87-92`). All 4 locales linked.
- §7 hreflang self-reference: PASS — `alternates` includes the current locale.
- §7 hreflang symmetry: PASS — every page emits the same alternates set.

### ACCESSIBILITY.md
- §2 Contrast: PASS for primary tokens (12.5:1 body, 6.4:1 accent-deep, 6.1:1 accent-secondary-deep per tokens.css preamble). One WARN at W2 (`text-muted/70`).
- §2 Opacity-on-muted rule: WARN — single violation at W2.
- §2 Color-only status: WARN — search filters at W9.
- §4 Keyboard navigation: PASS — skip-to-main link wired (BaseLayout.astro:122-133), focus-visible outlines on tokens.css.
- §4 Skip-link anchors `#main`: PASS — every page has `<main id="main">`.
- §4 Reduced motion: PASS — `global.css:18-29` clamps animations + transitions.
- §5 Semantic HTML: PASS — `<header>` / `<main>` / `<footer>` / `<section aria-labelledby>` consistently used.
- §5 One H1 per page: PASS — verified across all routes.
- §6 Touch targets ≥ 44×44: PASS — CTAs use `min-h-[44px]` / `min-h-[48px]` / `min-h-[52px]`.
- §7 lang attribute: PASS — `BaseLayout.astro:78` `<html lang={htmlLang}>` with BCP-47 tags from `LOCALE_LANG`.

### PERFORMANCE.md
- §1 Targets/budgets: FAIL — **B1** photo weight.
- §5 Use framework image pipeline: FAIL — `public/img/` raw `<img>` per **B1** (framework Image is acceptable to defer per the `<picture>` interim pattern at PERFORMANCE.md §5.151 but the file weights still need to comply).
- §5 fetchpriority="high" on LCP: PASS — hero img has `fetchpriority="high"` (`index.astro:71`).
- §5 lazy loading: PASS — TreeCard images use `loading="lazy"`; hero uses `loading="eager"`.
- §5 width/height: PARTIAL — see **B8**.
- §5 alt text: PASS — every `<img>` has descriptive alt via `tr(photo.alt, locale)`.
- §6 Self-host fonts: PASS — `@fontsource-variable/cormorant-garamond` + `@fontsource-variable/inter` imported in BaseLayout.astro:3-4.
- §6 Maximum 2 font families: PASS — Cormorant Garamond (display) + Inter (body) = 2.
- §6 Variable fonts only: PASS — both via `@fontsource-variable/`.
- §7 GPU-composited animations only: PASS — TreeCard hover scale uses `transform`, not size properties.
- §8 Ambient video: N/A.

### COLOR.md
- §1 60-30-10 rule: PASS — sage-grey dominant bg, deep-moss text/headers as 30%, persimmon accent confined to CTAs/eyebrows/numbers ≈ 10%.
- §2 Token-count cap (≤ 5 brand tokens): PASS — bg + text + accent + accent-secondary + inverted = within cap.
- §3 Color harmony framework: PASS — split-complementary documented in tokens.css preamble.
- §4 Color psychology per vertical: PASS — sage + persimmon fits artisan/contemplative register.
- §5 6-point pre-launch palette audit: 5/6 PASS — only "documented in design.md" misses (W1).
- §6 Anti-patterns:
  - #1 cream/bone-default: N/A — sage is not cream.
  - #2 too many brand tokens: PASS.
  - #3 hover lighter than base: PASS — buttons darken on hover (accent → accent-deep, text → bg-inverted).
  - #4 CTA contrast hover state: PASS — verified accent CTAs pass at hover.
- §6.5 Portfolio diversity gate: PASS — kodama is the first sage-cool-base demo per the preamble; no overlap with the 6 prior demos.

### DESIGN-BEST-PRACTICES.md
- §2 Audience tone: PASS — copy reads as a small earnest workshop, not a corporate site.
- §3 Photography: PASS substance (real photos shipped) — but **B1** breaks budget; no client-supplied photos so stock-CC0 caveat is on-page (`[slug].astro:113`).
- §5 Per-client tokens: PASS.
- §5 Re-sourcing palette mid-build rule: N/A (no logo arrived).
- §6 Mobile-first layout: PASS — `container-page` + responsive grids.
- §6 Content widths: PASS — `max-w-3xl` for prose blocks.
- §6.5 Section composition variation: PASS — composition is Hero / 3-card paths / beginner grid / philosophy quote / featured grid / newsletter — distinct from the universal-9.
- §7 Primary CTA button: PASS — Pattern B (invert on hover).
- §7 CTA contrast 4-state: PASS — verified default + hover pass 4.5:1.
- §7 CTA contrast — Tailwind v4 @layer base requirement: PASS — `global.css:37-81` wraps body + base typography in `@layer base`.
- §8 Motion philosophy: PASS — slow + considered tokens (motion-warm = 520ms, motion-deliberate = 700ms).
- §9 Icons (currentColor): PASS — Header SVG uses `stroke="currentColor"`.
- §10 Accessibility: see ACCESSIBILITY.md PASSes.
- §11 Real-content rule: PASS — every fact is documented in `BRIEF.md` (demo registers as fictional Berlin workshop).
- §11 Multilingual rules: PASS — DE first, then EN/ES/PT-BR per recommended order.

### TECH.md
- §1.1 Product type identification: PASS — Type 1 multi-page is correctly the choice.
- §1.2 Stack tier: PASS — Tier 2 (Astro) is correct for Type 1 multi-page.
- §3 Per-client project structure: PASS — `src/components/{layout,sections,ui}/` + `src/lib/` + `src/pages/` + `src/styles/` matches the canonical Tier 2 shape.
- §4 TypeScript strict: PASS — `tsconfig.json` extends `astro/tsconfigs/strict`.
- §5 Configuration as Code: PASS — `src/lib/site.ts` centralizes all client-data.
- §6 Naming: PASS — English filenames, kebab-case for slugs, PascalCase for components.
- §7 Tokens in CSS not config: PASS — `tokens.css` uses `@theme {}`, no tailwind.config.ts.
- §7 Accent token naming: PASS — `--color-accent` / `--color-accent-deep` / `--color-accent-secondary` / `--color-accent-secondary-deep` matches canonical.
- §7 Tailwind v4 @layer base: PASS.
- §8 Every interactive element 3 states: PASS — Button component covers default + hover + focus + active.
- §8 Placeholder.astro: PASS — present (`src/components/ui/Placeholder.astro`); zero usage in shipped pages (correct — site has real photos).
- §8 Required `<head>` metadata: PASS — title/description/canonical/hreflang/og/twitter all in BaseLayout.astro.

### KPI.md (production-cutover-deferred — demo-phase OK)
- §Type 1 default KPIs: N/A — no production cutover yet.
- §KPI contract in BRIEF.md: N/A — see W15.
- §Event naming convention: PASS substance — `analytics.ts:14-27` `EVENTS` constant follows canonical names (phone_click, whatsapp_click, etc.).
- §Required parameters: PARTIAL — `source_page` + `locale` present; `source_section` missing from `getRequiredParams()`.
- §What never in events: PASS — no PII.

### RELIABILITY.md
- §2 404 page: PASS — `src/pages/404.astro` exists, has identity + 2 CTAs.
- §2 500 page: PASS — `src/pages/500.astro` exists, mentions Sentry-reported error without PII.
- §3 Graceful degradation without JS: PASS — all pages are static; nav requires no JS (only the search filter + hamburger require JS).
- §5 Third-party degraded mode: N/A (no analytics scripts loaded; CookieBanner only blocks future scripts).
- §8 Logging baseline: N/A demo-phase.

### INFRASTRUCTURE.md
- §1 What scaffold provides: PASS — vercel.json + 404/500 + ci.yml + Sentry init all present.
- §2 vercel.json: PASS — 6 headers + cache rules at `(.*)\\.(js|css|woff2|avif|webp|png|jpg|svg|ico)`.
- §3 Custom 404/500: PASS.
- §4 ci.yml: PASS — `.github/workflows/ci.yml` runs lint + build on push/PR.
- §5 Uptime monitoring: N/A demo-phase.
- §6 Sentry — server-side: PASS — `sentry.server.config.mjs` ships `sendDefaultPii: false` (line 5), `beforeSend` scrubs request data.
- §6 Sentry — client-side: PASS — same `sendDefaultPii: false` discipline in `sentry.client.config.mjs:6`.
- §6 Replay disabled by default: PASS — `replaysSessionSampleRate: 0`.
- §6 Sentry env vars: WARN — DSN unset, see **W6**.

### INTEGRATIONS.md
- §Resend: N/A — no contact form.
- §Sentry: PASS at config level — but DSN unset (W6).
- §PostHog: N/A — Tier 3 only.
- §Neon: N/A — Tier 3.
- §Stripe: N/A — Type 4+.

### SOCIAL-SHARING.md
- §OG image: PASS — `og-default.png` is 1200×630 ✓, in BaseLayout.astro emitted with width/height/alt.
- §Twitter Card: PASS — `summary_large_image`.
- §OG locale: PASS — `og:locale` matches the page's BCP-47 tag.
- §Share buttons: FAIL — no share buttons on tree-detail pages (W13).
- §IG embed: N/A.

### ANALYTICS.md (consent-gated)
- §1 What to track on local-business: N/A demo-phase.
- §2 Event naming: PASS — see KPI.md.
- §3 Required params: PARTIAL — see KPI.md.
- §5 Consent gating: PASS — `analytics.ts:42` `hasConsent('analytics')` gate; `consent.ts:82` script upgrade pattern.
- §5 Cookie banner threshold: PASS.
- §6 Analytics stack: WARN — no scripts wired (W14); for a demo this is the intended posture.

### CHECKLIST.md (selected — full pre-launch is a production-cutover step)
- §0 Pre-flight: PASS.
- §1 Build: PASS — `dist/` builds clean.
- §1 Static files: PASS — favicon.svg + favicon.ico + apple-touch-icon.png + robots.txt present.
- §1 Schema/structured data: PARTIAL — see B4, B5, W4.
- §1 HTML structure: PASS.
- §1 Performance: BLOCKER — see B1.
- §1 Security: PASS at vercel.json level.
- §1 Infrastructure: PASS — vercel.json + 404/500 + ci.yml all present.
- §1.5 Cookie banner: PASS (modal pattern, equal prominence, persistence works).
- §3 SEO on-page: PASS.
- §3 Schema policy regression guards: PARTIAL — no `aggregateRating` (PASS), no `FAQPage` set up for non-existent FAQ (PASS), `inLanguage` per-locale violation (B4).
- §4 i18n: PARTIAL — see I18N.md PASSes + B6, B7, W3.
- §5 Legal (DE): PASS — Impressum + Datenschutz both ship.
- §6 Sign-off: N/A demo-phase.

### CITATIONS.md
- N/A — portfolio demo, no real GBP / Yelp / Gelbe Seiten claim.

### FORMS.md
- N/A entirely — newsletter is a clearly-labeled mockup (`NewsletterMock.astro:46`: "⚠ Mockup — kein echter Versand. Diese Demo speichert nichts.")

### QUALITY.md
- §1-2 pnpm validate Tier 2 pipeline: PASS — `package.json:13` `"validate": "pnpm lint && pnpm build"` is the canonical Tier 2 shape.
- §3 Translation parity validator: FAIL — see W3.
- §3 Design-tokens parity: PASS — single tokens.css file.
- §4 CI/CD `ci.yml`: PASS — exact canonical shape.
- §5 Pre-commit hooks: N/A — no Husky config present, acceptable at this scale.

### SALES.md
- N/A — no client-facing pricing/CTA copy that makes claims; site says "Wir verkaufen keine Bäume" repeatedly, very honest.

---

## Template + scaffold alignment

### Closest matching templates
The bonsai demo is a **hybrid of `education.md` + `artisan.md` — Solo Operator meta-archetype**. It's not a clean fit for any of the 12 vertical templates, which is fine and explicitly contemplated by the rule library (per CLAUDE.md "cross-vertical demos exist; document the choice in design.md").

### Archetypes used
- **Education `Archetype D` — Solo Instructor / Independent Practitioner.** The "two-person workshop documenting 24 trees" pattern maps cleanest here: small operator, deep specialty, content-led trust.
- **Artisan `Archetype D` — Solo Maker / Single-Studio Artisan.** The "no online ordering, mail us if you want a tree" disposition + the "we don't sell, we document" framing borrows the artisan voice over the education-school voice.
- **Color framework**: Split-complementary per `COLOR.md` §3, sage-grey base + persimmon accent — fits artisan Archetype B (Premium Craft) / education Archetype D variant.

### Deviations vs education.md
- **education.md §3 hero pattern (Archetype D)**: recommends "operator name + discipline + age range + city in opening" — the bonsai site does name the city (BERLIN · PRENZLAUER BERG · SEIT 2019) but defers operator-name reveal to the workshop page. **Justified** for an educational-resource site where the catalog is the hero, not the operator.
- **education.md §11 KPIs**: production-cutover would require these. Demo-phase OK.
- **education.md §6 cream + dark green default**: bonsai went sage + persimmon instead. **Justified** — explicitly documented in `tokens.css` preamble as a portfolio-diversity move.

### Deviations vs artisan.md
- **artisan.md §3 hero — Solo Maker**: artisan template recommends a single hero photograph + product detail. Bonsai went catalog-led (24 trees) instead. **Justified** — site is a knowledge resource, not a shopfront; artisan archetype is borrowed for voice, not for hero composition.
- **artisan.md §13 swap-ins**: would recommend `BeforeAfterSlider` (for plants over years), `PricingTable` (workshops), `Lightbox` (gallery). None present today. **Unjustified gap** — see W13.

### Scaffold baseline vs current bonsai (delta)
Per `scaffolds/astro-tier2/`:
- ✅ BaseLayout.astro — enriched correctly (hreflang + BreadcrumbList + extraSchema). Not a rewrite; agency-baseline extended with localePath prop.
- ✅ CookieBanner.astro — agency-baseline + i18n-driven, preserved correctly.
- ✅ vercel.json — copied exact from scaffold.
- ✅ ci.yml — copied exact.
- ✅ sentry.{client,server}.config.mjs — copied exact.
- ❌ `.env.example` — contaminated with previous client's PUBLIC_SITE_URL (B3).
- ❌ `analytics.ts:37` — contaminated with previous client's default locale (B2).
- 🟡 The `[locale]` route directory + 4-locale stack is custom (not in the scaffold) — well-implemented but absorbs custom validation work that ought to be encoded as scaffold pattern (W3).

---

## What is NOT applicable (and why)

- **CITATIONS.md**: portfolio demo, no real Google Business Profile, no real Yelp / Gelbe Seiten / berlin.de claim — N/A. Would activate at production cutover only.
- **FORMS.md**: Newsletter is a clearly-labeled mockup (`NewsletterMock.astro:46`: "⚠ Mockup — kein echter Versand"). No real forms exist. The §3-§11 server-side rules are entirely N/A.
- **INTEGRATIONS.md §Resend**: no contact form, no transactional email. N/A.
- **INTEGRATIONS.md §Stripe**: Type 1 info site, no payments. N/A.
- **INTEGRATIONS.md §Neon / Upstash / PostHog**: Tier 3 only. N/A.
- **KPI.md production-cutover wiring**: demo-phase + noindex, no real users + no real metric targets. Will activate when the demo is promoted. Today only the canonical-event-name skeleton is required and present.
- **SALES.md outreach workflow**: portfolio demo, no client-facing pricing. The "we don't sell trees" tagline is honest and self-aware — no SALES.md violation.
- **LEGAL.md §BR / §PT / §US**: site operates from EU/Berlin only, declared as DE-jurisdiction GbR (`site.ts:75-77`). The other 3 jurisdictions are N/A by the `LEGAL.md` §Per-client market → jurisdiction mapping rule.
- **`vercel:routing-middleware` / `next-cache-components` / etc**: Tier 2 Astro site has no middleware surface. N/A.
- **`SOCIAL-SHARING.md` Instagram embed**: bonsai IG is a fictional `@kodama.bonsai.berlin`; embed would be empty. N/A demo-phase.
- **`ANALYTICS.md` PostHog**: Tier 3 only. N/A.

---

## Suggested fix sequence

If you fix in this order, the demo becomes outreach-ready in roughly 4-6 hours of work:

**Phase A — production-blockers (do first if planning to share with prospects)**
1. **B1** — re-encode all 73 tree WebPs to the budget (sharp-cli loop; 30-45 min).
2. **B8** — pre-crop hero LCP to 3:4 or fix declared dimensions (15 min).
3. **B3** — fix `.env.example` PUBLIC_SITE_URL (1 min).
4. **B2** — fix `analytics.ts:37` default locale (1 min).
5. **B4** — pass locale into `treeArticleSchema` (10 min).
6. **B5** — add 3 storefront/workshop photos to schema image array (CC0; 20 min).
7. **B6** — move Header + Footer inline ternaries to `SITE.i18n[locale]` (30 min).
8. **B7** — either complete styles[*].es/pt-br translations OR bake fallback into `tr()` + remove optional types (1-2 hours).

**Phase B — polish before client outreach**
9. **W3** — add `validate:translations` script.
10. **W2** — remove `text-muted/70` opacity.
11. **W9** — add aria-pressed to search filters.
12. **W19** — unify the two `[slug].astro` files (DE root + locale).
13. **W4** — add `priceRange` + `hasOfferCatalog` to schema.

**Phase C — demo-phase deferrals (production-cutover only)**
- **W14** — wire GA4 / Clarity if promoting to retainer.
- **W15** — add KPI contract to BRIEF.md if promoting to retainer.
- **W16** — full CITATIONS.md sweep if promoting to retainer.
- **W6** — populate SENTRY_DSN if promoting to production traffic.
- W17, W18 — verification, not fix.
- W1 — backfill `docs/clients/demo-bonsai-kodama/design.md` palette decision.

---

*End of audit.*
