# Kodama Bonsai Demo — Master Audit Report

**Date:** 2026-05-26
**Demo:** `clients/demo-bonsai-kodama/` (Tier 2, Astro 6 + Tailwind v4 + Sentry)
**Live URL:** https://demo-bonsai-kodama.vercel.app/

## How this was conducted

- **4 parallel subagents** with fresh context, one per rule area:
  1. Rules + architecture + portfolio diversity
  2. SEO + performance + i18n
  3. Security + LEGAL (DSGVO) + accessibility (WCAG 2.2 AA)
  4. UI/UX patterns + DBP + CHECKLIST.md coverage
- **Visual validation** via docker MCP browser at 1280/768/375 viewports across home, tree-detail (Pinus thunbergii), suche, werkstatt, impressum, datenschutz, einsteiger.
- All findings de-duplicated below.

## Verdict

The demo is **substantively good** — distinct palette + composition, real botanical content, working search, @layer base correctly applied — but ships **with serious gaps** that must be fixed before any production cutover. The blocker count is high because the demo was built fast in one session and a few scaffold defaults leaked through.

---

## 🔴 Blockers (8 — must fix before any further work)

### B1. OG image 404 sitewide
**Files:** `src/layouts/BaseLayout.astro:19` · `src/lib/seo/schema.ts:59`
Both reference `${SITE.url}/img/og-default.jpg` but the actual file on disk is `public/img/og-default.png`. Every page ships a broken OG image — social previews 404.

### B2. JSON-LD never emitted
**Files:** `src/lib/seo/schema.ts:40-89` (defined) · `src/layouts/BaseLayout.astro` (never imports)
`businessSchema()` is defined but `grep` finds zero call sites. No `<script type="application/ld+json">` block exists in any built HTML. Per `SEO.md §5`, structured data is required on every page. **Zero structured data anywhere.**

### B3. og:image on tree pages is a relative path
**File:** `src/pages/trees/[slug].astro:41`
Passes `tree.photos[0].src` (e.g. `/img/trees/acer-palmatum-1.jpg`) directly to BaseLayout, which forwards to `<meta property="og:image">` without prepending `SITE.url`. Open Graph requires absolute URLs. 24 tree pages broken.

### B4. Photo license metadata contradicts UI disclosure
**Files:** `src/lib/trees.ts:95-97` etc. (data) · `src/components/layout/Footer.astro:77-79` (UI) · `src/pages/trees/[slug].astro:98` (caption) · `docs/clients/demo-bonsai-kodama/CLAUDE.md:57+60`
trees.ts tags every photo `credit: 'Wikimedia Commons', license: 'CC-BY-SA'`. Everywhere else says "Unsplash CC0". CC-BY-SA requires attribution + sharealike — if shipped as-is, the demo is **technically out of license compliance**. Pick one and reconcile.

### B5. Missing per-client `design.md`
**Location:** `docs/clients/demo-bonsai-kodama/`
Only `CLAUDE.md` exists. Per `DESIGN-BEST-PRACTICES.md §17` + root `CLAUDE.md` Step 1, every demo requires `design.md`. Hard agency-rule violation.

### B6. Missing per-client `BRIEF.md`
Same location. Required by root `CLAUDE.md` Step 1. CLAUDE.md L6 references it but file doesn't exist. KPI contract + NAP block + Open questions cannot be tracked.

### B7. `bg-accent-secondary text-bg` = **2.69:1 — FAILS WCAG AA**
**Files:** `src/components/sections/TreeCard.astro:29` (Einsteiger badge) · `src/pages/suche.astro:118` + dynamic injection L94 (active filter pill + injected beginner badge) · `src/pages/trees/[slug].astro:55` (category pill)
matcha #7b8f5e on sage-grey #dde2d8 computes 2.69:1. Used on 10px uppercase semibold text — NOT large-text qualifying. Hard accessibility fail. Fix: swap to `accent-secondary-deep` (#4d6038 → 5.23:1 ✓).

### B8. 86 MB of unoptimized JPEGs
**Location:** `public/img/trees/`
84 files total (12 pool + 72 species copies + others). 38 files >1MB. Hero `acer-palmatum-1.jpg` is 1.6MB JPEG served as LCP. `PERFORMANCE.md §5` caps hero WebP at ≤250KB. Zero WebP companions. Mobile LCP will catastrophically overshoot the 2.5s budget.

---

## 🟡 Important (18)

### Schema + SEO
- **I1.** `LocalBusiness` should be `EducationalOrganization` (with `additionalType: LocalBusiness` for local-pack). Per `schema.ts:54` TODO + `SEO.md §5` most-specific-type rule.
- **I2.** 24 dynamic tree pages should have per-page schema (`Article` or `WebPage` + `BreadcrumbList`). Currently inherit only the default LocalBusiness from BaseLayout (which itself isn't emitted — B2).
- **I3.** `BreadcrumbList` missing sitewide. Per `SEO.md §5.6` auto-emit when URL has ≥1 segment.
- **I4.** `SITE.geo` lat/lng `52.5378, 13.4194` doesn't match Kollwitzstraße 76 (close to Volkspark Friedrichshain, not Kollwitzplatz). Real Kollwitzplatz ≈ `52.5366, 13.4170`. `SEO.md §5` requires ≥5 decimal places verified against Maps.

### i18n
- **I5.** EN locale half-shipped. `Locale = 'de' | 'en'` typed throughout, `trees.ts` has bilingual data, `Header.astro:21-25` links to `/en/trees`, `/en/beginners`, `/en/indoor`, `/en/outdoor`, `/en/workshop`, `/en/search` — but `src/pages/` contains ZERO EN routes. Footer links also reference `/en/*`. Documentation bomb. Per `I18N.md` — pick one: build EN routes (with hreflang) OR strip EN scaffolding.
- **I6.** Zero `hreflang` tags. Required for multilingual sites per `SEO.md §6` + `I18N.md §11`.
- **I7.** `astro.config.ts` missing `i18n` config block. Per `I18N.md §10` Tier 2 pattern.

### Performance
- **I8.** Hero `<img>` on `index.astro:66` missing `width`/`height` attributes. CLS risk per `PERFORMANCE.md §5`. `TreeCard.astro:21-27` also omits width/height (24 grid cards on `/trees`).
- **I9.** Zero use of `<Image>` from `astro:assets` anywhere. PERFORMANCE.md §5 flags as "#1 cause of PageSpeed <90."
- **I10.** 12 orphan `pool-*.jpg` files (~12 MB) committed but never referenced — `grep -rn "pool-" src/` returns zero hits.

### Legal / Cookie
- **I11.** `src/lib/consent.ts:2` comment reads "LGPD-aligned per LEGAL.md §BR + §Cookie consent banner." This is a DE site — should reference `LEGAL.md §DE` + DSGVO/TTDSG.
- **I12.** CookieBanner ships ENGLISH copy ("Your privacy" / "Accept all" / "Reject all" / "Privacy Policy") on a DE-only site. Per scaffold comment block, per-jurisdiction localization was never applied.
- **I13.** CookieBanner `/privacy-policy` href 404s (page is at `/datenschutz`).
- **I14.** Datenschutzerklärung missing §Speicherdauer (retention periods) and §Datensicherheit (TLS/access-control) — both required per `LEGAL.md §DE`.
- **I15.** Footer missing "Manage preferences" cookie-reopen link. CookieBanner registers a `consent:reopen` event listener (L104) but no link is rendered in Footer. Required per LEGAL.md §Required UI components.
- **I16.** CookieBanner has no Customize / per-category toggles (Functional/Analytics/Marketing). Required by LEGAL.md once analytics ships — the CSP at `vercel.json:16` already allowlists `googletagmanager.com`, `clarity.ms`, `google-analytics.com` so analytics intent is declared.
- **I17.** `SITE.legal.processors` list incomplete — declares only Vercel + Sentry, but CSP allowlists GA4 + Clarity. Either remove CSP allowlist (demo doesn't use them) or add `Google LLC — GA4` and `Microsoft — Clarity` with `Location: US` + Standardvertragsklauseln note.

### Accessibility
- **I18.** `text-muted #5d6b5c` on bg #dde2d8 = **4.28:1** — fails the 4.5:1 body-text floor by 0.22. Many uses are large eyebrows (pass at 3:1 large-text), but body paragraphs in `text-text-muted leading-relaxed` (e.g. `index.astro:36`, `einsteiger.astro:26`) render at 16-18px regular and fail. Fix: darken token to ~#54624f.
- **I19.** Newsletter submit + Cookie Accept use `bg-accent text-bg` = **3.63:1** — AA-large only, fails normal-text floor for the medium-weight button labels. Pin to `bg-accent-deep` (5.63:1 ✓).

### Code quality
- **I20.** `Button.astro` exists with correct hover convention but is **never imported anywhere**. All CTAs hand-rolled (which is partly why B7 + I19 exist).
- **I21.** Related-trees filter in `trees/[slug].astro:22` has duplicate `tree.category === 'both'` clause (checks `tree.category` twice, `t.category` once).
- **I22.** Hamburger menu (Header.astro:73) toggles `aria-expanded` but icon doesn't swap to X — stays as 3 lines when open.
- **I23.** Header search + hamburger touch targets below 44px on mobile (search px-3 py-2 ≈ 36px, hamburger w-10 h-10 = 40px).
- **I24.** Tokens.css contrast comments overstate ratios (accent-deep claims 6.4 → actual 5.63; accent claims 4.4 → actual 3.63; accent-secondary claims 3.4 → actual 2.69). Either correct comments or darken tokens.
- **I25.** Hero LCP image `alt="Bonsai im Studio"` hard-coded — should be `alt={featured[0].photos[0].alt[locale]}`.

---

## 🟢 Cosmetic (10)

- Dead code: `const isDe = true` (trees/[slug].astro:18), `interface Props` declared but unused
- `Locale` type redeclared in trees.ts (already exported from site.ts)
- Duplicate `id="newsletter-heading"` when NewsletterMock appears on both home + werkstatt
- `.sr-only` defined in BaseLayout `<style>` block — Tailwind already provides
- Demo banner not wrapped in semantic landmark (`<aside aria-label="Demo notice">`)
- `tracking-display-sans` token name misleading — display font is a serif (Cormorant), not sans
- `robots.txt:7` disallows `/demo/` defensively but path doesn't exist
- Tree page caption uses `text-text-muted/70` — passes contrast on bright surface but flagged anti-pattern per ACCESSIBILITY.md
- Newsletter placeholder uses `placeholder:text-inverted-text-muted/60` — opacity on already-muted token
- 404 + 500 CTAs missing explicit `focus-visible` classes (inherit global rule, OK but inconsistent with rest of codebase)

---

## ✅ What passed

- **@layer base wrap correctly applied** — CTA contrast bug from 2026-05-25 incident did NOT recur (verified in browser: Hero CTA computes #8c3e25 + #dde2d8 = 5.81:1 ✓)
- **Portfolio diversity (palette)** — sage-grey + persimmon is unique; ΔE76 vs all 6 demos ≥ 14
- **Portfolio diversity (composition)** — Kodama home (Hero → 3-path picker → 4-tree grid → philosophy → 6-tree grid → newsletter) doesn't match any other demo's section order
- **6 security headers** present + verified live (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- **Sentry `sendDefaultPii: false`** on both client + server configs with defensive `beforeSend` scrubbing
- **No XSS in `suche.astro`** — all interpolated values come from build-time `SEARCH_INDEX` (developer-authored)
- **Real-photo rule** — 12 unique CC0 photos > 5 minimum (B4 license issue notwithstanding)
- **Anti-slop check** — no lorem ipsum, no corporate filler, voicy DE copy, no AI glow / sphere decorations, single icon family, real botanical content (Akadama mixes, mekiri timing, hardiness zones)
- **`@layer base` body wrap** — global.css:37 correctly wraps body + base typography
- **Impressum** — all § 5 TMG fields present (Anbieter, Vertreten, Kontakt, USt-IdNr, V.i.S.d.P. §18 MStV, EU-ODR link)
- **Most token contrasts** — text on bg = 11.33:1 AAA · accent-deep on bg = 5.63:1 AA · accent-secondary-deep on bg = 5.23:1 AA · inverted text on inverted bg = 11.33:1 AAA
- **Reduced motion** — `prefers-reduced-motion: reduce` respected globally
- **Skip link** — present in BaseLayout, `href="#main"` matches every page's `<main id="main">`
- **Self-hosted fonts** — `@fontsource-variable/cormorant-garamond` + `inter`, no Google Fonts CDN
- **Sitemap** — `dist/sitemap-0.xml` with 34 URL entries (home + 9 static + 24 tree pages)
- **robots.txt** — `Disallow: /` correctly for demo phase
- **Mobile-first patterns** — fluid heading clamps, container-page max-width, grid sm/lg breakpoints, 52px+ CTA min-heights, hamburger at lg breakpoint
- **Photo alt text** — locale-aware `tree.photos[i].alt[locale]` with descriptive per-image alt in trees.ts

---

## Recommended fix plan

**Batch 1 — Critical (do first):**
- B1: rename `og-default.png` → `og-default.jpg` (or update path refs)
- B2: emit `businessSchema()` in BaseLayout `<head>`
- B3: fix `og:image` to use absolute URL (`new URL(tree.photos[0].src, SITE.url).toString()`)
- B4: reconcile photo license (Wikimedia OR Unsplash — pick one)
- B7: swap `accent-secondary` → `accent-secondary-deep` on 3 badge sites

**Batch 2 — Important DSGVO + i18n (next):**
- I11/I12/I13/I15/I16: fix CookieBanner — DE copy + correct privacy link + add Manage preferences in Footer
- I14: add Speicherdauer + Datensicherheit sections to Datenschutz
- I17: remove unused CSP analytics origins OR add to processors
- I5/I6/I7: pick path on EN — build routes OR strip scaffolding + add hreflang/i18n config

**Batch 3 — Per-client docs (parallel):**
- B5/B6: write design.md + BRIEF.md per templates

**Batch 4 — Performance:**
- B8: generate WebP companions for hero + key images via sharp-cli
- I8/I9: add width/height to all `<img>`; consider `<Image>` from astro:assets
- I10: delete 12 orphan pool-*.jpg files

**Batch 5 — Schema upgrade:**
- I1: swap LocalBusiness → EducationalOrganization with additionalType: LocalBusiness
- I2/I3: add per-tree-page Article + BreadcrumbList schema

**Batch 6 — Smaller polish:**
- I18/I19: adjust text-muted token + pin Newsletter/Cookie buttons to accent-deep
- I20: refactor inline CTAs to use Button.astro
- I21: fix related-trees filter
- I22: hamburger X-icon swap
- I23: bump search + hamburger touch targets
- I24: correct tokens.css contrast comments
- I25: data-driven hero alt
- All cosmetic items
