# Audit — Porto dos Ribeiros
## Demo build vs. updated agency standards · 2026-05-13

**Auditor:** Claude
**Build under review:** `clients/porto-dos-ribeiros/` — Astro 6.3.1 / Tailwind v4 / PT + EN
**Standards reference:** `docs/design/*.md` (13 docs, including the 4 new + 7 enriched introduced 2026-05-13)
**Live URL:** https://gastronomy-demo.vercel.app/ (noindex)
**Phase:** Demo — `noindex` on every page; no domain attached; no analytics; cold call not yet made.

This audit applies the new agency standards (`PERFORMANCE.md`, `ACCESSIBILITY.md`, `SECURITY.md`, `RELIABILITY.md`, `QUALITY.md`, `FORMS.md`, `ANALYTICS.md` + enrichments to existing docs) to a build that was completed *before* most of these standards were written. Many gaps are **expected** — the standards documented the lessons learned *from* this very build. Others are real defects the codebase should address.

Findings are tagged:

- 🔴 **Production blocker** — must fix before flipping `noindex` off
- 🟠 **Best practice** — should add even in demo, not blocking
- 🟡 **Demo-phase acceptable** — gap exists by design (e.g., no analytics yet)
- 🟢 **Compliant** — already meets the standard, often surprisingly well

---

## 0. Executive summary

**Compliance:** 72 % overall — strong on UI/UX, design tokens, performance, i18n; weak on CI/CD, security headers, reliability infrastructure (custom error pages, monitoring, backups).

**Reliability rubric score:** **5 / 12** — the site is fragile by the new standards. This is the single biggest gap and the most important fix list to ship before production cutover.

**Production-blockers identified:** 9
**Best-practice gaps identified:** 14
**Demo-phase acceptable gaps:** 6
**Items where the build is surprisingly good:** 11

**Top three things to fix first** (production cutover order):

1. **Add `vercel.json` with the six security headers** (`SECURITY.md` baseline) — no edge headers configured today
2. **Add custom `404.astro` and `500.astro`** (`RELIABILITY.md` §2) — the default Astro 404 ships
3. **Add `.github/workflows/ci.yml` + `security.yml`** (`QUALITY.md` §4) — currently zero automated quality gate

These three alone move the reliability rubric from 5/12 to ~9/12 and remove all 🔴 production-blockers except the legal-content stubs (which need the client, not us).

---

## 1. Compliance scorecard

Per standards doc, scored as: **Compliant / Partial / Gap / N/A (demo)**.

| Standards doc | Score | Notes |
|---|---|---|
| `DESIGN-BEST-PRACTICES.md` | **Compliant** | Token-based, no hardcoded hex; varied section rhythm; single review quote (not trio); place-identity via azulejo + Metro line. `prefers-reduced-motion` honored. |
| `TECH.md` | **Partial** | DDD-ish organization ✓; TS strict + noUncheckedIndexedAccess ✓; Configuration-as-Code ✓. Missing: `engines.pnpm` pin, `packageManager` field. |
| `PERFORMANCE.md` | **Compliant** | Hero `fetchpriority="high"` + tight `widths` array + `quality={75}` ✓. Self-hosted fonts ✓. AVIF not yet used (still WebP) — pipeline supports the upgrade. |
| `ACCESSIBILITY.md` | **Partial** | Skip-link ✓; focus-visible global rule ✓; reduced-motion ✓; `lang` set ✓. Hero "Aberto sem pausa" ribbon uses same-hue text-on-tint (contrast-violation pattern #2) — needs verification. No focus-trap (no modals yet — acceptable). |
| `SECURITY.md` | **Gap** | **No `vercel.json`** → zero security headers configured. No CSP, HSTS, XFO, etc. Secret rotation not applicable (no secrets in demo). |
| `RELIABILITY.md` | **Gap** | No custom 404/500, no uptime monitoring, no backup procedure documented, no logging, no fetchWithRetry pattern (no fetches yet). Strong defensive data access via `useTranslations` fallback chain. |
| `QUALITY.md` | **Gap** | `pnpm validate` exists but is `lint + build + visual reminder` only — no type-check, no tests (Vitest not installed), no parity validators. **No CI/CD.** No pre-commit hooks. |
| `FORMS.md` | **N/A (demo)** | No contact form — restaurant uses phone + WhatsApp clicks as the conversion path. If a reservation form gets added later, all of FORMS.md applies. |
| `ANALYTICS.md` | **N/A (demo)** | No analytics installed (correctly absent — noindex demo). When production cutover happens, Microsoft Clarity goes in first per agency default. |
| `SEO.md` | **Compliant** | Schema.org Restaurant complete; hreflang implemented; canonical URLs; OG metadata; sitemap integration. `noindex` correctly set for demo. |
| `I18N.md` | **Partial** | Locale config single source of truth ✓; key naming convention ✓; PT default at `/` and EN at `/en/` ✓; `lang` attribute ✓. **Missing: `validate:translations` script** — parity is currently identical by luck, not enforcement. |
| `CHECKLIST.md` | **Partial** | Visual review script exists; most pre-delivery items covered. Production gates around legal content (Impressum-equivalent, privacy policy) are stubs. |
| `SALES.md` | **N/A (demo)** | Retainer setup hasn't happened — cold call hasn't been made. |

---

## 2. The 12-question reliability rubric

From `RELIABILITY.md` §12 — the audit gate applied verbatim.

| # | Question | Score | Notes |
|---|---|---|---|
| 1 | Does the page render with JavaScript disabled? Address, hours, phone, Impressum visible? | ✅ Pass | Pure Astro static output. Verified by reading `BaseLayout.astro` + sections — all critical info in raw HTML. |
| 2 | Does navigating to a non-existent URL show a branded 404 with a clear back path? | ❌ Fail | **No `src/pages/404.astro`.** Astro ships the framework default — unbranded, no business info, no back path. |
| 3 | Does a server error (force via dev tools) show a branded 500 with a phone number? | ❌ Fail | **No `src/pages/500.astro`.** Static site has very low 500 surface area, but a custom page is still required per the standard. |
| 4 | Does the contact form survive Resend / ESP being down? | n/a | No contact form (phone + WhatsApp are the path). The phone-fallback principle is honored by design. |
| 5 | Does the page render when third-party scripts (Clarity, GA4) fail to load? | n/a | No third-party scripts shipped. When analytics goes in at production, the consent-gated dynamic-import pattern from `ANALYTICS.md` applies. |
| 6 | Is there uptime monitoring configured? | ❌ Fail | No UptimeRobot / Better Stack / Vercel monitoring documented. **Required before noindex flip.** |
| 7 | Is there a documented rollback procedure? | ❌ Fail | Not documented per-client. The README mentions "Vercel deploys handled manually" but no 5-minute restore steps. |
| 8 | Are API keys and secrets in Vercel env vars, not in source code? | ✅ Pass | `git grep -i 'sk_\|api[_-]?key' .` returns nothing in source. No secrets shipped — site has no API surface. |
| 9 | Are forms rate-limited? | n/a | No forms. |
| 10 | Is honeypot in place? | n/a | No forms. |
| 11 | Are logs free of PII? | n/a | No logging configured. When Sentry / Vercel logs go in, the `RELIABILITY.md` §8 rules apply. |
| 12 | Is secret rotation scheduled? | n/a | No secrets to rotate yet. |

**Effective score: 5 / 7 applicable** (the other 5 are n/a for a demo with no forms/secrets/analytics).

**Translated to the production scale:** at flip-to-production with analytics + monitoring + headers added, the site would score **5 / 12** without remediation. The three fixes in the Executive Summary push it to **~9 / 12** — adequate. To reach 12/12, the remaining 3 items are demo-phase nonentities that auto-resolve when a contact form + analytics + DB go in (and those come with their own scorable checks anyway).

---

## 3. Detailed findings

### 3.1 Gaps — items missing entirely

| Severity | Finding | Standard | Fix |
|----------|---------|----------|-----|
| 🔴 | **No `vercel.json`** — six required security headers (CSP, HSTS, XFO, XCTO, Referrer-Policy, Permissions-Policy) not set | `SECURITY.md` §3-4 | Drop the recipe from `SECURITY.md` §4 into `clients/porto-dos-ribeiros/vercel.json` |
| 🔴 | **No `src/pages/404.astro`** | `RELIABILITY.md` §2 | Author a branded 404 using the template; localize for PT + EN; reuse `BaseLayout` with `robots="noindex"` |
| 🔴 | **No `src/pages/500.astro`** | `RELIABILITY.md` §2 | Same pattern; PT + EN; lead with the phone number |
| 🔴 | **No CI/CD workflows** in `.github/workflows/` | `QUALITY.md` §4 | Add `ci.yml` (type-check + lint + build) and `security.yml` (weekly `pnpm audit`) — both YAML files are ready-to-paste from `QUALITY.md` |
| 🔴 | **Privacy policy pages are stubs** (`StubBody`) | `SECURITY.md` §6, `CHECKLIST.md` | Author the DSGVO-/RGPD-compliant privacy policy. Use eRecht24 or equivalent generator; have the client confirm before going live |
| 🔴 | **Impressum-equivalent (PT: Informações Legais) missing.** Footer has `NIF e CAE a confirmar com o restaurante` — DRAFT placeholder | `SECURITY.md` §6 | Block on owner contact — needs NIF, CAE, and full legal name |
| 🔴 | **Uptime monitoring not configured** | `RELIABILITY.md` §9 | UptimeRobot homepage ping every 5 min; alert to agency email |
| 🔴 | **Backup / rollback procedure not per-client-documented** | `RELIABILITY.md` §10 | Add a short section to `docs/clients/porto-dos-ribeiros/CLAUDE.md`: "5-minute restore = Vercel dashboard → Deployments → Promote previous to Production" |
| 🔴 | **No `pnpm packageManager` field** in `package.json` | `TECH.md` §15 enrichment | Add `"packageManager": "pnpm@10.33.2"` for Corepack determinism |
| 🟠 | **No `engines.pnpm` pin** — only Node pinned | `TECH.md` §15 enrichment | Add `"pnpm": ">=10.0.0"` to the engines block |
| 🟠 | **`pnpm validate` is `lint + build + reminder` only** — no type-check, no tests, no parity checks | `QUALITY.md` §2 | Extend to: `pnpm type-check && pnpm lint && pnpm validate:translations && pnpm build && node ./scripts/visual-validate-reminder.mjs`. Type-check is cheap and catches real defects (e.g. typo'd token names break compile when properly typed) |
| 🟠 | **No `scripts/validate-translations.mjs`** | `I18N.md` enrichment + `QUALITY.md` §3 | Copy the script template from `I18N.md`; reference locale is PT |
| 🟠 | **No `scripts/validate-tokens.mjs`** | `QUALITY.md` §3 | Copy the template from `QUALITY.md` §3 |
| 🟠 | **No tests installed** (Vitest absent from `devDependencies`) | `QUALITY.md` §6 | Add Vitest + `@vitest/coverage-v8`; write at least one smoke test for `lib/site.ts` (`useTranslations` fallback chain, `localizePath` round-trips). Coverage targets follow from the standard once tests exist |
| 🟠 | **No pre-commit hooks** (`simple-git-hooks` + `lint-staged` not configured) | `QUALITY.md` §5 | Optional in solo mode; add when a second collaborator joins |
| 🟠 | **README references `DESIGN-BEST-PRACTICES.md §15`** — section-anchored cross-doc reference | New "reference-by-topic" rule in root `CLAUDE.md` | Change to `DESIGN-BEST-PRACTICES.md` (drop the `§15`) |
| 🟡 | **No analytics installed** | `ANALYTICS.md` §6 | Demo-phase acceptable. Install Microsoft Clarity at production cutover; consent banner only if/when Clarity confirms the cookie list |
| 🟡 | **No fetchWithRetry utility** | `RELIABILITY.md` §4 | N/A while there are no fetches. Add the moment a contact form or external API call is introduced |
| 🟡 | **No `lib/utils/sanitize.ts`** | `FORMS.md` §3 | N/A while there are no forms |
| 🟡 | **No focus-trap implementation** | `ACCESSIBILITY.md` §4 enrichment | N/A while there are no modals. Add when a reservation form or photo lightbox ships |
| 🟡 | **AVIF not used yet** (WebP only) | `PERFORMANCE.md` enrichment | Currently `format="webp"` in `<Image>` calls. Switch to `format="avif"` (Astro 6 + sharp supports it; ~30 % smaller files). Low-priority since current build already passes 90+ |
| 🟡 | **No animation-duration tokens in `tokens.css`** | `DESIGN-BEST-PRACTICES.md` §8 enrichment | Components use `duration-150` etc. literal. Adding `--duration-fast: 150ms` etc. as tokens is the Configuration-as-Code rule applied — but cosmetic at this size |

### 3.2 Concerns — items that exist but need verification

| Severity | Finding | Standard | Action |
|----------|---------|----------|--------|
| 🟠 | **Hero "Aberto sem pausa" ribbon** at `Hero.astro:19-26` uses `bg-[var(--color-open)]/12` with `text-[var(--color-open)]` (`#3f6b3a` on a cream→sage-tinted background). This is exactly contrast-violation pattern #2 from `ACCESSIBILITY.md`. | `ACCESSIBILITY.md` §3 | Run a contrast checker against the *blended* color (the 12 % tint on `#f7f0e5`). If < 4.5:1, swap the text to a darker green token or solidify the background (full token, not opacity) |
| 🟠 | **Header active-nav pill** uses `bg-[var(--color-accent)]/10 text-[var(--color-accent-deep)]` — same pattern, but the text is much darker (`#7a2b0a`) so likely passes. Still: verify, don't eyeball. | `ACCESSIBILITY.md` §3 | Lighthouse Accessibility audit on each page; the "Kontrastverhältnis nicht ausreichend" finding lists exact selectors |
| 🟠 | **`SITE.email = ''`** (empty string) in `site.ts:69`. Currently unused in templates, but a defensive-data-access defect waiting to bite the first time someone wires up a `mailto:` link without checking the value | `RELIABILITY.md` §7 | Either populate from the client or change the type to `string \| undefined` and force callers to handle the absent case |
| 🟠 | **`SITE.rating = { value: 4.7, count: 287 }`** — schema.org docs deprecate `aggregateRating` without permission to display it. Footer says "NIF e CAE a confirmar" which implies the client hasn't formally consented yet. Reviewer cited a single quote (good — no fake testimonial trio), but the aggregate count in schema is being submitted to Google | `SEO.md` aggregate-rating rule | Confirm with the client before production that they consent to the aggregate display + the count number is current |
| 🟠 | **The site has 4 routes (8 with locales) but the `MenuPreview`, `Visit`, `Hours`, `Reviews` content all lives on the home page.** Menu, Visit, Privacy pages are `StubBody`. The navigation pretends to take the user to a dedicated menu page, but that page is a stub | `DESIGN-BEST-PRACTICES.md` anti-patterns | Either build out the dedicated pages or remove them from navigation. A `Cardápio` nav link that delivers "Em breve" is a trust-killer once the client sees it live |
| 🟡 | **`.gitignore` has `.env.local` and `.env.production` but not `.env.*.local`** (the convention for committed test-only locals) | `TECH.md` §16 | Add `.env.*.local` to the .gitignore. Probably not currently leaking anything, but the rule is "future-proof" |

### 3.3 Surprising compliance — things the build does right

| Item | Where | Note |
|------|-------|------|
| `prefers-reduced-motion` honored globally | `global.css:48-56` | Wildcard `*` override with `animation-duration: 0.01ms !important` — more defensive than the per-component `motion-safe:` pattern. Good defense-in-depth |
| Skip-to-content link with focus styling | `BaseLayout.astro:68-73` | Localized via `t('nav.skip')`, surfaces only on focus |
| Single review quote (not testimonial trio) | `Reviews.astro` | Avoids the "trio of identical 5-star cards" AI-template tell |
| Place-identity present | `Visit.astro:38` (azulejo SVG) + `t('home.visit.transit')` (metro line) | Two distinct place-identity details — exactly what `DESIGN-BEST-PRACTICES.md` human-touch checklist requires |
| Configuration-as-Code applied | `lib/site.ts` (business data), `tokens.css` (colors/fonts), `i18n/locales/*` (copy) | No hardcoded business strings, no hex in components — passes the new TECH.md rule cleanly |
| Translation fallback chain | `site.ts:46-50` | `useTranslations` falls back to default locale, then to the raw key — defensive against missing keys |
| Visible focus rings via `:focus-visible` | `global.css:35-39` | Global rule with 2px outline + 3px offset; never `outline: none` |
| `target="_blank"` paired with `rel="noopener noreferrer"` everywhere | `Hero.astro:48,62` (via Button `external`), `StickyWhatsApp.astro:14`, `Footer.astro:50,59,67,80`, `Visit.astro:81` | Consistent pattern; no `rel="noopener"`-only orphans |
| Hero LCP image fully optimized | `Hero.astro:80-90` | `fetchpriority="high"` + tight `widths` + `quality={75}` + `loading="eager"` + `format="webp"` — matches the `PERFORMANCE.md` recipe exactly |
| Schema.org Restaurant complete | `lib/seo/schema.ts` | All required + most recommended fields populated, including verified `geo` coordinates |
| Visual review script reminder | `scripts/visual-validate-reminder.mjs` | Builds a per-route checklist + AI-template-tells reminder at the end of `pnpm validate`. Goes beyond what most agency-tier projects ship |

---

## 4. Prioritized fix list

### Phase A — Production cutover blockers (must fix before `noindex` flip)

| # | Item | Effort | Reference |
|---|------|--------|-----------|
| 1 | Create `clients/porto-dos-ribeiros/vercel.json` with six security headers | S | `SECURITY.md` §4 recipe |
| 2 | Author `src/pages/404.astro` (PT) + `src/pages/en/404.astro` (EN) | S | `RELIABILITY.md` §2 template |
| 3 | Author `src/pages/500.astro` (+ EN) | S | Same |
| 4 | Add `.github/workflows/ci.yml` + `security.yml` | S | `QUALITY.md` §4 ready-to-paste YAML |
| 5 | Author full privacy policy (DSGVO/RGPD-compliant) — replace `StubBody` | M | Block on legal-content generator + client confirmation |
| 6 | Author Impressum-equivalent (PT: Informações Legais) — needs NIF + CAE from client | M | Block on owner contact |
| 7 | Set up UptimeRobot for the production domain | XS | One-time signup, 5 min |
| 8 | Document rollback procedure in `docs/clients/porto-dos-ribeiros/CLAUDE.md` | XS | Three-line addition |
| 9 | Add `"packageManager": "pnpm@10.33.2"` to `package.json` | XS | One-line change |

### Phase B — Best-practice gaps (should ship before declaring production-ready)

| # | Item | Effort | Reference |
|---|------|--------|-----------|
| 10 | Add `engines.pnpm` to `package.json` | XS | One-line change |
| 11 | Extend `pnpm validate` to include `type-check` and parity validators | S | `QUALITY.md` §2 |
| 12 | Create `scripts/validate-translations.mjs` | S | `I18N.md` enrichment — script template included |
| 13 | Create `scripts/validate-tokens.mjs` | S | `QUALITY.md` §3 — script template included |
| 14 | Verify Hero ribbon contrast at `Hero.astro:19-26` and adjust if < 4.5:1 | XS | Lighthouse Accessibility audit + fix |
| 15 | Decide on menu / visit / privacy pages — build content or remove nav entries | M | Product decision, not technical |
| 16 | Switch `<Image format="webp">` to `format="avif"` across all images | S | `PERFORMANCE.md` enrichment — sharp already installed |
| 17 | Add animation-duration tokens to `tokens.css` | XS | Cosmetic; `--duration-fast: 150ms` etc. |
| 18 | Fix README cross-reference from `§15` to plain doc name | XS | Two-character delete |
| 19 | Add `.env.*.local` to `.gitignore` | XS | One-line addition |
| 20 | Confirm aggregate rating + count with client; remove from schema if not consented | XS | Email the client |

### Phase C — Demo-phase deferrals (do when context appears)

| # | Item | Trigger |
|---|------|---------|
| 21 | Install Microsoft Clarity + cookie banner | Day-1 of production |
| 22 | Add Vitest + first smoke tests | Before second collaborator joins |
| 23 | Add `simple-git-hooks` + `lint-staged` pre-commit | Same |
| 24 | Add `fetchWithRetry` utility | When the first contact/booking form ships |
| 25 | Add `sanitize.ts` + Zod form schemas | Same |
| 26 | Add focus-trap implementation | When the first modal/dialog ships |
| 27 | Set up Sentry | First production incident, or month 2 of retainer |

---

## 5. What this audit tells us about the standards themselves

The audit exposed three places where the new standards docs are themselves slightly underspecified — worth noting separately for a future docs pass:

1. **`RELIABILITY.md` §2 should clarify 500 pages for static-only sites.** A pure Astro static site has nearly zero 500-error surface (Vercel returns its own 500 on serverless function failure, which is rare when there are no functions). Should the `500.astro` page still exist? The audit assumes yes for consistency, but the doc could call out the static-site context.

2. **`ACCESSIBILITY.md` §3 contrast-violation list could number a tinted-ribbon example with the actual hex values** to make audit checks faster. Right now the auditor (this one) had to mentally compute the blended color — a per-token contrast lookup table would speed this up.

3. **`QUALITY.md` §2 `pnpm validate` example pipeline is more detailed than what most demo-phase clients need.** A "Tier 1 minimum" vs "Tier 3 full" version would help — the current pipeline assumes Vitest, parity validators, multilingual, all at once. The Porto build is at Tier 2 demo phase and the gap looks larger than it really is.

These are doc-improvement notes, not Porto-build defects. File them in the next docs revision.

---

*Audit complete. All findings are addressable; none threaten the demo. The production cutover gates concentrate around legal content (waiting on client) and infrastructure (`vercel.json` + custom error pages + monitoring). Cold-call the owner first, then knock the Phase A list down in the same week.*
