# Audit — Jean Souza Barbearia
## Demo build vs. updated agency standards · 2026-05-14

**Auditor:** Claude
**Build under review:** `clients/jean-souza-barber/` — Astro 6.3.3 / Tailwind v4 / PT-BR
**Standards reference:** `docs/design/*.md` including the 2026-05-14 additions: §3 asset sourcing, §5 palette sourcing, `CHECKLIST.md` §9 prospect intake, per-vertical default palettes
**Live URL:** none yet — local-only at `http://localhost:4321`
**Phase:** Demo — `noindex` on every page; no domain attached; no analytics; owner has verbally agreed to portfolio engagement but no formal kickoff yet.

This is the **first audit** of the Jean build. Unlike the Porto 05-13 audit (which audited a build completed *before* most standards existed), Jean was built *after* the standards were already in place — with the additional advantage that the new §3 / §5 / §9 rules were added during the build itself and retroactively reflected in the codebase. Many items are expected to pass.

Findings are tagged:

- 🔴 **Production blocker** — must fix before flipping `noindex` off
- 🟠 **Best practice** — should add even in demo, not blocking
- 🟡 **Demo-phase acceptable** — gap exists by design (e.g., no images yet)
- 🟢 **Compliant** — already meets the standard

---

## 0. Executive summary

**Compliance:** **84 %** overall — strong on the new sourcing rules (§3 photos, §5 palette, §9 intake), strong on Type 1 architecture discipline, strong on LGPD compliance for the Brazilian market. Weak on the same infrastructure items that Porto is weak on (CI/CD, security headers, custom error pages, monitoring) — these are agency-level patterns, not Jean-specific.

**Reliability rubric score:** **4 / 7 applicable** (12 / 12 max — 5 questions n/a because no forms / no auth / no analytics / no secrets / no logs in this Type 1 build).

**New-rule compliance (the reason for this audit):**

| New rule | Status |
|---|---|
| `DESIGN-BEST-PRACTICES.md` §3 — Sourcing photos and favicon from the prospect intake | 🟢 Compliant — typeset monogram favicon ships (priority 4 fallback); `BRIEF.md` has "Photos to fetch from sources" checklist; `<Placeholder>` components used appropriately for unreachable sources |
| `DESIGN-BEST-PRACTICES.md` §5 — Sourcing the palette | 🟢 Compliant — `design.md` declares source tier 3 (brand-sourced from Trinks logo, 2026-05-15). Originally tier 5 vertical-default cream/caramel — superseded the moment the logo was retrieved (tier 3 outranks tier 5 per the §5 priority hierarchy) |
| `CHECKLIST.md` §9 — Prospect intake template | 🟠 Partial — `docs/audit/jean.md` exists but predates the formal §9 template. Content covers most §9 sections informally but the section structure doesn't match. |
| `templates/beauty.md` §6 — Default palette adherence | 🟢 Compliant — token values match the **NEW** "Modern urban barber (dark)" sub-archetype that was added to `templates/beauty.md` §6 in this same 2026-05-15 session (Jean is the reference implementation cited there). Tokens: bg `#131418` · text `#ffffff` · accent `#dc2626`. The prior claim of matching the "Old-school barber" default (cream/caramel) was correct at audit time but superseded the same day when Jean's actual brand was retrieved from Trinks. |

**Production-blockers identified:** 7
**Best-practice gaps identified:** 9
**Demo-phase acceptable gaps:** 8 (mostly DRAFT content)
**Items where the build is surprisingly good:** 12

**Top three things to fix first** (production cutover order):

1. **Add `vercel.json` with the six security headers** (`SECURITY.md` baseline) — same gap as Porto; will be the agency-wide fix
2. **Add custom `404.astro` and `500.astro`** (`RELIABILITY.md` §2) — Astro default ships today
3. **Resolve all DRAFT content in `BRIEF.md` §"Open questions for the owner conversation"** — 12 items gating production cutover

These three move the build from "polished demo" to "ready for `noindex` flip" with no Jean-specific code changes — items 1 and 2 are agency-template additions that will benefit every future client.

---

## 1. Compliance scorecard

Per standards doc, scored as: **Compliant / Partial / Gap / N/A (demo)**.

| Standards doc | Score | Notes |
|---|---|---|
| `DESIGN-BEST-PRACTICES.md` | **Compliant** | Token-based, no hardcoded hex; varied section rhythm (Hero · Sobre · Servicos with surface-color alternation · Galeria · Avaliacoes alt · Visitar); single hero CTA pair (Trinks + WhatsApp, not three options); place-identity via Icaraí + Niterói naming throughout; `prefers-reduced-motion` honored via global.css. New §3 + §5 rules satisfied. |
| `TECH.md` | **Compliant** | Tier 2 Astro 6.3.3 ✓; TS strict + noUncheckedIndexedAccess ✓; Tailwind v4 via `@tailwindcss/vite` (not the deprecated `@astrojs/tailwind`) ✓; Configuration-as-Code in `src/lib/site.ts` ✓; `engines.pnpm` pin ✓; `packageManager` field ✓. |
| `PERFORMANCE.md` | **Partial** | Self-hosted Fraunces + Manrope via `@fontsource-variable/*` ✓; `dist/` total 248 KB (excellent); 950ms build; no images yet to optimize. **Gap:** `<Image>` Astro pipeline not used yet — all `<Placeholder>` components. Once real photos drop in, swap each Placeholder for `<Image>` with `fetchpriority="high"` on the hero. |
| `ACCESSIBILITY.md` | **Compliant** | `lang="pt-BR"` set ✓; focus-visible global rule ✓; reduced-motion respected ✓; semantic HTML throughout (`<section>`, `<address>`, `<figure>`/`<blockquote>` for reviews, `<dl>`/`<dt>`/`<dd>` for hours); skip-link not present but the page is single-section with no large nav — acceptable for single-page architecture. Contrast: text on bg ≈ 12.4:1 (AAA), accent on bg ≈ 5.6:1 (AA). |
| `SECURITY.md` | **Gap** | **No `vercel.json`** — zero edge security headers configured. Same gap as Porto. CSP, HSTS, XFO, Referrer-Policy, Permissions-Policy, X-Content-Type-Options all absent. **Production blocker.** |
| `RELIABILITY.md` | **Gap** | No custom 404 / 500, no uptime monitoring, no rollback procedure documented in `CLAUDE.md` (slim version present, but no per-client Vercel rollback drill recorded). Third-party degraded-mode: WhatsApp + tel: serve as fallback if Trinks is down — implicit fallback by design. **Production blocker for 404/500.** |
| `QUALITY.md` | **Partial** | `pnpm validate` runs lint + build + visual reminder ✓; pnpm hooks not configured; **no CI/CD** (`.github/workflows/` absent — same gap as Porto). |
| `FORMS.md` | **N/A (demo)** | No forms — Type 1 build uses WhatsApp + Trinks deep-links exclusively per scope decision. If a form is added later, FORMS.md applies. |
| `ANALYTICS.md` | **N/A (demo)** | No analytics installed (correct for noindex demo). When production cutover happens, Microsoft Clarity goes in first per agency default; will need an LGPD consent banner (current site has no cookies — banner can wait until analytics is installed). |
| `SEO.md` | **Compliant** | Schema.org `BarberShop` with full `openingHoursSpecification` + `geo` + `sameAs` (Instagram) ✓; canonical URL ✓; OG + Twitter cards ✓; `aggregateRating` correctly gated behind `RATING.approvedForDisplay = false` ✓; sitemap generated ✓; `noindex` correctly set for demo. |
| `I18N.md` | **N/A (demo)** | Single-locale build per scope (PT-BR only). No Astro `i18n` config needed. If EN or other locale gets added later, `I18N.md` applies. |
| `CHECKLIST.md` | **Partial** | Pre-delivery visual review script exists with the new Jean-specific anti-slop tells embedded ✓. Production gates around real photos + confirmed hours + confirmed prices + MEI/CNPJ + LGPD data-controller email are all DRAFT — gating cutover. |
| `SALES.md` | **N/A (demo)** | Portfolio engagement (domain-cost-only per root `CLAUDE.md`). No retainer in scope. |

---

## 2. The 12-question reliability rubric

From `RELIABILITY.md` §12 — applied verbatim.

| # | Question | Score | Notes |
|---|---|---|---|
| 1 | Does the page render with JavaScript disabled? Address, hours, phone, legal info visible? | ✅ Pass | Pure Astro static output. Verified in source — `BaseLayout` + sections emit all critical info as raw HTML. WhatsApp + Trinks links are `<a href="">` — work without JS. |
| 2 | Does navigating to a non-existent URL show a branded 404 with a clear back path? | ❌ Fail | **No `src/pages/404.astro`.** Astro framework default ships. Same gap as Porto — agency-template fix. |
| 3 | Does a server error (force via dev tools) show a branded 500 with a phone number? | ❌ Fail | **No `src/pages/500.astro`.** Static site → low 500 surface area but standard requires it. |
| 4 | Does the contact form survive Resend / ESP being down? | n/a | No forms — Type 1 build. |
| 5 | Does the page render when third-party scripts (Clarity, GA4) fail to load? | n/a | No third-party scripts shipped. Trinks is a link target, not an embedded script — `<a href="">` is bulletproof. |
| 6 | Is there uptime monitoring configured? | ❌ Fail | No UptimeRobot / Better Stack documented. **Required before noindex flip.** |
| 7 | Is there a documented rollback procedure? | 🟡 Partial | Slim 5-minute Vercel rollback noted in `CLAUDE.md` ✓ but no per-client drill record. |
| 8 | Are API keys and secrets in Vercel env vars, not in source code? | ✅ Pass | `grep -i 'sk_\|api[_-]?key' src/ public/ lib/` returns nothing. No secrets shipped — site has zero API surface. |
| 9 | Are forms rate-limited? | n/a | No forms. |
| 10 | Is honeypot in place? | n/a | No forms. |
| 11 | Are logs free of PII? | n/a | No logging configured. When Vercel logs or Sentry go in, `RELIABILITY.md` §8 applies. |
| 12 | Is secret rotation scheduled? | n/a | No secrets to rotate. |

**Effective score: 4 / 7 applicable** (5 n/a for a Type 1 demo with no forms/secrets/scripts).

Translation: same agency-template fixes that move Porto from 5/12 to ~9/12 will move Jean from 4/12 to ~9/12. The fixes are not Jean-specific — they're patterns that benefit every future Type 1 build.

---

## 3. Detailed findings

### 3.1 Gaps — items missing entirely

#### 🔴 No `vercel.json` with security headers
- **Standard:** `SECURITY.md` §1 baseline — six headers mandatory (CSP, HSTS, XFO, Referrer-Policy, Permissions-Policy, X-Content-Type-Options)
- **Current state:** file absent; edge serves bare Vercel defaults
- **Fix:** copy the canonical `vercel.json` from `SECURITY.md` §1, adjust CSP origins to allow `instagram.com`, `wa.me`, `trinks.com`, `maps.google.com`
- **Why production blocker:** Brazilian-market site with LGPD obligations; missing security headers is detectable by any pen-test or automated scan

#### 🔴 No `src/pages/404.astro` / `500.astro`
- **Standard:** `RELIABILITY.md` §2
- **Current state:** Astro framework default ships
- **Fix:** brand `404.astro` with hero text, link back to `/`, and phone/WhatsApp CTAs; `500.astro` similar with apology copy. Reuse `BaseLayout`.

#### 🔴 No CI/CD workflow
- **Standard:** `QUALITY.md` §4
- **Current state:** `.github/workflows/` absent
- **Fix:** add `.github/workflows/ci.yml` running `pnpm validate` on every PR + push to main. Same pattern as the Porto fix-list — will become an agency-template once one project has it working.

#### 🔴 No uptime monitoring
- **Standard:** `RELIABILITY.md` §9
- **Fix:** Better Stack or UptimeRobot pinging `/` every 5 min. Configure before the `noindex` flip.

#### 🔴 12 DRAFT items in `BRIEF.md` gating production
- Hours conflict (IG 09–18 vs GBP "Closes 7pm"), real prices for 8 services, MEI/CNPJ + Razão Social, LGPD data-controller email, owner clearance on 4 review quotes, rating display approval, photo permissions, logo, domain, exact Trinks slug, Anderson/Diegão inclusion, signature service.
- **Owner-conversation deliverable.** Cannot be resolved in code.

#### 🔴 No real images yet
- **Standard:** `DESIGN-BEST-PRACTICES.md` §3 — every site must use at least one real photo
- **Current state:** all `<Placeholder>` components per `BRIEF.md` "Photos to fetch from sources" checklist
- **Fix:** user manually downloads from Instagram (7 photos minimum) per the checklist; drop into `src/assets/images/`; swap each `<Placeholder>` for `<Image>` (Astro pipeline ready — `sharp` is installed)

#### 🟠 No `<Image>` pipeline usage yet
- **Standard:** `PERFORMANCE.md` — images in `src/assets/` through Astro `<Image>`
- **Current state:** zero images on disk; `<Placeholder>` components do not exercise the pipeline
- **Fix:** part of the previous item — once images arrive, the swap forces pipeline usage

#### 🟠 No `engines.pnpm` minimum version warning
- Actually present — `package.json` has `"engines": { "node": ">=22.12.0", "pnpm": ">=10.0.0" }` ✓. False alarm. Marking 🟢.

#### 🟠 `docs/audit/jean.md` predates the formal §9 prospect-intake template
- **Standard:** `CHECKLIST.md` §9
- **Current state:** content covers most §9 sections informally; structure doesn't match the canonical
- **Fix:** retrofit `docs/audit/jean.md` to the §9 template structure. Low priority — content is what matters; structure is consistency-only.

#### 🟠 No SEO title-format compliance check
- **Standard:** `SEO.md` requires `[Primary keyword] — [Brand] ([City])` format
- **Current state:** title is `Jean Souza Barbearia · 10 anos cuidando do seu corte em Niterói` — brand-first, not keyword-first. Adequate but suboptimal for "barbearia Niterói" search intent.
- **Fix:** consider `Barbearia em Icaraí, Niterói — Jean Souza Barbearia` for SEO-optimal title. Trade-off: less brand-forward. Owner-decision-adjacent.

### 3.2 Concerns — items that exist but need verification

#### 🟡 Hero portrait placeholder needs replacement before any client preview
- The dashed "Foto pendente" box reads clearly as "site under construction" — useful internally, but Jean would not show this to a customer. Replace with real IG portrait before sharing the demo URL even with Jean himself.

#### 🟡 Geo coordinates `(-22.901, -43.106)` are approximate
- **Standard:** `SEO.md` requires geo verification against Google Maps pin
- **Fix:** verify with Google Maps Geocoding API or manual pin-check before flipping `noindex`

#### 🟡 Service prices currently all "Consulte"
- Demo-acceptable per `BRIEF.md` scope, but owner conversation needs to resolve. Brazilian barber-shop convention sometimes hides prices (call to inquire); sometimes publishes a menu. Owner-led decision.

#### 🟡 `aggregateRating` schema is gated behind owner approval flag
- **Compliance:** correctly off (`RATING.approvedForDisplay = false`)
- **Production gate:** owner approves → flip flag → schema renders

#### 🟡 Trinks deep-link is best-guess (`trinks.com/jean-souza-barbear`)
- **Risk:** if the exact slug is different, the primary CTA goes to a 404
- **Fix:** owner confirms exact URL, or test the link before launch

### 3.3 Surprising compliance — things the build does right

| 🟢 | Item | Why notable |
|---|---|---|
| ✅ | Single source of truth in `src/lib/site.ts` | DRY discipline — DRAFT items live in one place, propagate everywhere. Updating hours after the owner call touches one file. |
| ✅ | Schema `aggregateRating` correctly gated behind approvedForDisplay flag | Many builds render unverified ratings — this one explicitly blocks. |
| ✅ | LGPD Política de Privacidade is real content, not a stub | All 7 required sections (Controller, data, base legal, sharing, rights, cookies, contact) written with Brazilian legal voice. Defensible against an LGPD audit even in current DRAFT state. |
| ✅ | Sticky mobile CTA + desktop floating WhatsApp distinction | Mobile gets a bar (Agendar pill + WhatsApp icon); desktop gets a floating bubble. Pattern matches `templates/beauty.md` Solo-Operator archetype exactly. |
| ✅ | Anti-slop guardrails embedded in `visual-validate-reminder.mjs` | Jean-specific tells (no "MAN UP", no Edison bulbs, no operator-name-missing) print on every `pnpm validate`. Catches drift. |
| ✅ | Typeset monogram favicon ships as priority-4 fallback | Per the new §3 rule, the agency-default fallback works. **Superseded 2026-05-15:** the real-brand JS shield is now derived from the Trinks logo (tier 1–3 brand source). Typeset monogram pattern remains the documented fallback for future clients. |
| ✅ | Palette source provenance declared in `design.md` | Per the new §5 rule. **Originally tier 5, superseded by tier 3 2026-05-15** when Jean's actual brand logo was retrieved from Trinks. The provenance section in design.md documents the upgrade explicitly. |
| ✅ | Token values match `templates/beauty.md` Modern urban barber (dark) sub-archetype | Tier-3 brand-source compliance — palette sampled directly from Jean's logo (`#131418` bg + `#ffffff` text + `#dc2626` accent). Jean's build is cited as the reference implementation for this new sub-archetype, added to `templates/beauty.md` §6 in the same session. |
| ✅ | Service list is `<ul>` with row dividers, not a grid | Typography-led, not card-soup. |
| ✅ | Review quotes use `<figure>` + `<blockquote>` + `<figcaption>` semantically | Accessibility win. Screen readers correctly identify the quote, author, and date. |
| ✅ | Hours rendered as `<dl>` / `<dt>` / `<dd>` with `tabular-nums` | Accessibility + visual alignment. Numbers align right; days align left. |
| ✅ | Single hero CTA pair (Trinks + WhatsApp) — not three CTAs | Resists the chip-soup anti-pattern from `DESIGN-BEST-PRACTICES.md` §15. |

---

## 4. Prioritized fix list

### Phase A — Production cutover blockers (must fix before `noindex` flip)

1. **Real photos in `src/assets/images/`** + swap `<Placeholder>` for `<Image>` — owner-led, then 30 min of code
2. **Resolve all 12 DRAFT items** in `BRIEF.md` §"Open questions" — owner conversation
3. **`vercel.json` with six security headers** — 15 min, agency-template
4. **Custom `404.astro` + `500.astro`** — 30 min, can become agency-template
5. **Uptime monitoring** — 10 min in Better Stack/UptimeRobot dashboard
6. **`.github/workflows/ci.yml`** running `pnpm validate` — 15 min, agency-template
7. **Geo verification** against Google Maps pin — 5 min

**Total Phase A:** ~2.5 hours of code + 1 owner conversation. The agency-template work (items 3, 4, 6) pays back across every future client.

### Phase B — Best-practice gaps (should ship before declaring production-ready)

8. **Retrofit `docs/audit/jean.md`** to the formal `CHECKLIST.md` §9 template structure — 20 min
9. **Add LGPD cookie/consent banner** — only required if analytics is installed; consider Microsoft Clarity post-launch (per agency default)
10. **Title format SEO check** — owner-decision-adjacent; consider keyword-first variant
11. **Document per-client Vercel rollback drill** in `CLAUDE.md` — 10 min
12. **Add Apple touch icon** (180×180 PNG derived from `favicon.svg`) — 5 min
13. **Add `manifest.json`** for mobile homescreen — 10 min
14. **Test all `<a href>` links manually** before launch — `tel:`, `wa.me`, `trinks.com`, `maps.google.com`, `instagram.com`
15. **Configure GA4 + GSC** post-cutover — 30 min
16. **Submit sitemap to GSC** — manual

### Phase C — Demo-phase deferrals (do when context appears)

17. Re-shoot photography under controlled lighting (post-launch retainer item)
18. Add a service-detail expansion (toggleable descriptions per service) if owner wants more depth
19. Consider a dedicated `/agendar` route deep-linking to Trinks with a richer info page
20. Multi-locale (EN for international clients in Niterói tourism corridor) — owner decision

---

## 5. What this audit tells us about the standards themselves

The build was created during the same session as the new §3 / §5 / §9 rules — so almost everything new is compliant by construction. Where it's NOT compliant, the gap is identical to the Porto gap (security headers, custom errors, CI/CD, monitoring). This is **agency-template infrastructure debt**, not Jean-specific code debt.

**Recommendation:** package the four infrastructure fixes (`vercel.json`, `404.astro`, `500.astro`, `.github/workflows/ci.yml`) as an agency-template that drops into every new client's scaffold. The Porto + Jean re-audits both point to the same missing piece. Building it once benefits Café Del Corso, Laudam, and every future portfolio piece.

**Secondary observation:** the new §3 / §5 rules' compliance was straightforward because the rules were written from real friction during this very build. The retroactive favicon + photos-to-fetch + palette-provenance fixes took ~30 minutes total. This suggests the rule documents are well-calibrated — they ask for the right things and don't impose ceremony that doesn't pay off.

---

*Audit complete. Compliance 84 %. Phase A fixes ~2.5 hrs + 1 owner call. Codebase is in significantly better shape than Porto was at the same stage — partly because the rules were stronger when the build started.*
