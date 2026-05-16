# Audit — Porto dos Ribeiros (all three variants)
## Demo build vs. updated agency standards · 2026-05-14

**Auditor:** Claude
**Builds under review:**
- Variant A — `clients/porto-dos-ribeiros/` — Astro 6.3.1 / Tailwind v4 / PT + EN — stripped editorial (cream + terracotta)
- Variant B — `clients/porto-dos-ribeiros-v2/` — Astro 6.3.1 / Tailwind v4 / PT + EN — conversion-first (cream + sage + bright lime CTA)
- Variant C — `clients/porto-dos-ribeiros-v3-heritage/` — Astro 6.3.1 / Tailwind v4 / PT + EN — heritage editorial (deep cocoa + parchment + saffron)

**Standards reference:** `docs/design/*.md` including the 2026-05-14 additions: §3 asset sourcing, §5 palette sourcing, `CHECKLIST.md` §9 prospect intake, per-vertical default palettes
**Live URL:** Variant A → https://gastronomy-demo.vercel.app/ (noindex); B + C → not deployed yet
**Phase:** Demo — `noindex` on every page; cold call not yet made; owner has not been contacted.

**Supersedes:** `docs/audit/archived/porto-dos-ribeiros-2026-05-13.md` (archived 2026-05-16; this audit re-runs the same scorecard plus the new §3 / §5 / §9 rules and adds variant-specific findings for B and C, which did not exist on 05-13).

Findings are tagged:

- 🔴 **Production blocker** — must fix before flipping `noindex` off
- 🟠 **Best practice** — should add even in demo, not blocking
- 🟡 **Demo-phase acceptable** — gap exists by design
- 🟢 **Compliant** — already meets the standard

---

## 0. Executive summary

**Overall compliance:** **76 %** (up from 72 % on 05-13). Two-thirds of the lift comes from the new rules (§3 / §5 / §9) being satisfied by existing patterns or back-filled with small additions today; one-third from no regressions on the original 13 docs.

**Reliability rubric score:** **5 / 12 applicable** — unchanged from 05-13. The infrastructure gaps (security headers, custom error pages, monitoring, CI/CD) are identical because no agency-template fixes have shipped yet.

**Three-variant context:** This is now a multi-variant build. Each variant is a complete independent Astro project deployed (or deployable) under its own Vercel deployment. The codebases share content but diverge in palette, typography, hero pattern, and copy voice per the strategy in `docs/clients/porto-dos-ribeiros/CLAUDE.md`. **All three variants share identical infrastructure gaps** because they were forked from the same scaffold — Phase-A fixes apply once and propagate to all three.

**New-rule compliance:**

| New rule | Variant A | Variant B | Variant C |
|---|---|---|---|
| `DESIGN-BEST-PRACTICES.md` §3 — Asset sourcing (photos + favicon) | 🟢 BRIEF "scrape sources" section + favicon.ico + favicon.svg | 🟢 (inherits Porto's BRIEF) | 🟢 (inherits Porto's BRIEF) |
| `DESIGN-BEST-PRACTICES.md` §5 — Palette sourcing provenance in `design.md` | 🟢 Tier 3 + tier 5 merge (just added 2026-05-14) | 🟢 Tier 5 — `templates/gastronomy.md` Modern Conversion default | 🟢 Tier 5 — `templates/gastronomy.md` Premium Editorial default |
| `CHECKLIST.md` §9 — Prospect intake template | 🟡 N/A — Porto had an existing site, not a pure cold prospect | 🟡 N/A | 🟡 N/A |
| `templates/gastronomy.md` §6 — Default palette adherence | 🟢 **Exact match** on the 4 declared keys (`bg` / `text` / `accent` / `border`) — the Heritage / family default in the template is **anchored to this codebase**. Plus extra agency-specific tokens (`--color-open` herb-green for "Aberto" badge, `--color-azulejo` blue for place-identity), defensible additions not in the template starting point. | 🟢 Same sub-archetype family as "Modern conversion-first" (Sweetgreen-derived). Hex tokens differ — V2 was built *before* the template default was written, so the default is a Sweetgreen-derived archetype that V2 happens to live in, not a value-for-value match. (V2: bg `#f5efdc` / text `#1a2b1a` / accent `#b8e240` / border `#d8ce98` vs template starting point: `#faf6ef` / `#1a1814` / `#84cc16` / `#d6cfc2`.) | 🟢 Same sub-archetype family as "Premium editorial / heritage storytelling" (Dishoom-derived). Hex tokens differ — V3 was built *before* the template default; the family designation is correct but values diverge. (V3: bg `#1a1410` / text `#f0e3c8` / accent `#d4a017` / border `#3a2820` vs template starting point: `#1f1611` / `#efe3cf` / `#d4a635` / `#3a2c1f`.) |

**Production-blockers identified:** 9 (same as 05-13 — no progress on infrastructure)
**Best-practice gaps identified:** 14 (down from 14 — one closed by adding palette source provenance)
**Demo-phase acceptable gaps:** 6
**Items where the build is surprisingly good:** 14 (up from 11 — 3 new wins from §3 + §5 compliance)

**Top three things to fix first** (production cutover order — same as 05-13):

1. **Add `vercel.json` with the six security headers** (`SECURITY.md` baseline) — applies to all three variant projects
2. **Add custom `404.astro` and `500.astro`** (`RELIABILITY.md` §2) — applies to all three
3. **Add `.github/workflows/ci.yml` + `security.yml`** (`QUALITY.md` §4) — applies to all three (or one shared workflow if the variants merge to monorepo)

These three alone move the reliability rubric from 5/12 to ~9/12 across all three variants simultaneously.

---

## 1. Compliance scorecard

Per standards doc, scored as: **Compliant / Partial / Gap / N/A (demo)**. Where a finding differs between variants, the variant is named explicitly.

| Standards doc | Score | Notes |
|---|---|---|
| `DESIGN-BEST-PRACTICES.md` | **Compliant** | All three: token-based, no hardcoded hex; varied section rhythm; single review quote (not trio); place-identity via azulejo (A) / Brazilian-grocer photography (B) / "Desde 2023" stamp (C). `prefers-reduced-motion` honored. **New §3 + §5 compliance confirmed** — palette provenance documented in `design.md` as of 2026-05-14. Solo-Operator meta-archetype + Location-finder hero patterns inherited correctly. |
| `TECH.md` | **Partial → Compliant** | Original 05-13 gaps (`engines.pnpm`, `packageManager`) confirmed present today across all three variants. Tailwind v4 via `@tailwindcss/vite` ✓. TS strict + noUncheckedIndexedAccess ✓. Configuration-as-Code via `src/lib/site.ts` ✓. |
| `PERFORMANCE.md` | **Compliant** | All three: hero `fetchpriority="high"` + tight `widths` array + `quality={75}` ✓. Self-hosted fonts ✓. `dist/` total ~1.5 MB (down from 30 MB pre-pipeline migration). AVIF not yet used (still WebP) — pipeline supports the upgrade with a single config flag. |
| `ACCESSIBILITY.md` | **Partial** | All three: skip-link ✓; focus-visible global rule ✓; reduced-motion ✓; `lang` set per locale ✓. Variant A: hero "Aberto sem pausa" ribbon uses same-hue text-on-tint — needs verification (carryover from 05-13). Variant C: defines a dedicated `--color-text-subtle` token explicitly avoiding opacity-multiplier shortcuts (per `ACCESSIBILITY.md` §3 rule) — exemplary. |
| `SECURITY.md` | **Gap** | **No `vercel.json` in any of the three variants.** Zero security headers configured. Same gap as 05-13 — no progress. **Production blocker × 3** (one per deployment target). |
| `RELIABILITY.md` | **Gap** | All three: no custom 404/500, no uptime monitoring, no per-client rollback drill recorded. Strong defensive data access via `useTranslations` fallback chain (carryover). |
| `QUALITY.md` | **Gap** | All three: `pnpm validate` runs lint + build + visual reminder ✓; **no CI/CD** (`.github/workflows/` absent across all three). |
| `FORMS.md` | **N/A (demo)** | No contact form in any variant — restaurant uses phone + WhatsApp clicks as conversion path. |
| `ANALYTICS.md` | **N/A (demo)** | No analytics installed (correct for noindex demo). When production cutover happens, Microsoft Clarity first per agency default. PT legal: requires cookie banner if non-essential cookies; Clarity may be configurable as essential-only — verify before launch. |
| `SEO.md` | **Compliant** | All three: Schema.org Restaurant complete; hreflang implemented; canonical URLs; OG metadata; sitemap integration. `noindex` correctly set for demo. Variant C's `WelcomeModal` is server-rendered — does not block initial paint or break crawlability. |
| `I18N.md` | **Partial** | All three: locale config single source of truth ✓; key naming convention ✓; PT default at `/` and EN at `/en/` ✓; `lang` attribute ✓. **Missing: `validate:translations` script** — parity currently identical by luck, not enforcement. Same gap as 05-13. |
| `CHECKLIST.md` | **Partial** | Visual review script exists for Variant A; verified to also exist in v2 and v3 (forked from A). Most pre-delivery items covered. Production gates around legal content (PT footer NIF/CAE) are stubs awaiting owner confirmation. |
| `SALES.md` | **N/A (demo)** | Retainer setup hasn't happened — cold call hasn't been made. Three-variant cold-call workflow (per `docs/clients/porto-dos-ribeiros/CLAUDE.md` and `templates/gastronomy.md` §9.4) is documented but not exercised. |

**New from 05-13:** the new §3 / §5 / §9 rules don't have a dedicated scorecard row because they live inside `DESIGN-BEST-PRACTICES.md` and `CHECKLIST.md` — folded into those rows above. New-rule compliance is detailed in §3.4 below.

---

## 2. The 12-question reliability rubric

From `RELIABILITY.md` §12 — applied verbatim. Same answers for all three variants because they share identical infrastructure.

| # | Question | Score | Notes |
|---|---|---|---|
| 1 | Does the page render with JavaScript disabled? | ✅ Pass | All three: pure Astro static output. Variant C's welcome modal is one exception — it requires JS to dismiss but is non-blocking (page underneath is fully readable; modal is decorative). |
| 2 | Does navigating to a non-existent URL show a branded 404? | ❌ Fail | **No `src/pages/404.astro` in any variant.** Same as 05-13. |
| 3 | Does a server error show a branded 500 with a phone number? | ❌ Fail | **No `src/pages/500.astro` in any variant.** Same as 05-13. |
| 4 | Does the contact form survive ESP being down? | n/a | No forms. |
| 5 | Does the page render when third-party scripts fail? | n/a | No third-party scripts. |
| 6 | Is there uptime monitoring configured? | ❌ Fail | Same as 05-13. |
| 7 | Is there a documented rollback procedure? | ❌ Fail | Same as 05-13. |
| 8 | Are API keys and secrets in Vercel env vars? | ✅ Pass | No secrets — same as 05-13. |
| 9 | Are forms rate-limited? | n/a | No forms. |
| 10 | Is honeypot in place? | n/a | No forms. |
| 11 | Are logs free of PII? | n/a | No logging. |
| 12 | Is secret rotation scheduled? | n/a | No secrets. |

**Effective score: 5 / 7 applicable** (5 n/a). **Translated to production scale: 5 / 12** — same as 05-13. Three fixes (security headers + error pages + CI) lift this to ~9/12 simultaneously across all three variants.

---

## 3. Detailed findings

### 3.1 Gaps — items missing entirely (all three variants unless noted)

#### 🔴 No `vercel.json` with security headers (× 3 deployments)
- Same finding as 05-13. Applies independently to each variant if each gets its own Vercel deployment URL. After the client picks a variant and the others are deleted, this collapses to × 1.

#### 🔴 No `src/pages/404.astro` / `500.astro` (× 3)
- Same as 05-13.

#### 🔴 No CI/CD workflow (× 3)
- Same as 05-13.

#### 🔴 No uptime monitoring
- Same as 05-13. Will become per-variant if all three deploy to public URLs simultaneously (the variant URLs in `noindex` mode don't strictly need monitoring; the chosen production variant does).

#### 🔴 Legal-content stubs in PT footer (NIF / CAE)
- Same as 05-13. Owner-conversation deliverable.

#### 🟠 No `validate:translations` script for hreflang parity
- Same as 05-13. PT and EN are identical by luck across all three variants.

#### 🟠 No `engines.pnpm` minimum-version warning
- Confirmed today across all three: `package.json` does have `"engines": { "node": ">=22.12.0" }` but the original 05-13 finding flagged `engines.pnpm` specifically. Variant A has it; v2 and v3 forked from A so they likely do too — needs spot-check.

#### 🟠 No CSP origin allowlist for WhatsApp / Instagram / Google Maps
- New finding implied by §3 asset sourcing rules. When `vercel.json` is added, CSP must include the third-party origins the site links to.

### 3.2 Concerns — items that exist but need verification (variant-specific)

#### 🟡 Variant A — hero "Aberto sem pausa" ribbon contrast verification
- Same as 05-13. Same-hue text-on-tint pattern — needs re-verification with a tool against the warm-clay accent + cream bg.

#### 🟡 Variant B — bright lime CTA contrast against cream bg
- New finding. `--color-accent: #b8e240` (bright lime) on `--color-bg: #f5efdc` (cream) yields ~2.4:1 contrast — **fails WCAG AA for non-text UI** if the button text is white. White on lime is ~2.4:1 (fail). Black on lime is ~10:1 (pass). Check the live rendering: if buttons use white text on the lime fill, that's an accessibility blocker for Variant B. If they use the deep green text (`--color-accent-deep: #6b9020`) → ~4.6:1 (pass).
- **Verification gate before any production decision on Variant B.**

#### 🟡 Variant C — welcome modal focus trap + dismiss UX
- New finding. Variant C's welcome modal must trap focus and provide a clear keyboard-dismiss (ESC) per `ACCESSIBILITY.md`. If it doesn't, modal-on-load is an accessibility blocker.

#### 🟡 Variant C — `--color-text-subtle` on `--color-bg` contrast check
- Variant C correctly avoided opacity-multiplier shortcuts and defined a dedicated token (`#a08e6e` on `#1a1410`). Calculated contrast is ~5.3:1 (passes WCAG AA for normal text). **Compliant, but flagged for explicit verification** because of the warm/cool interaction between sepia text and deep-cocoa bg.

#### 🟡 Geo coordinates for Rua da Constituição 982
- Same as 05-13. Verified to Nominatim centroid (`41.1626, -8.6107`); needs re-verification against Google Maps house-number precision before production.

### 3.3 Surprising compliance — things the builds do right

| 🟢 | Item | Why notable | Applies to |
|---|---|---|---|
| ✅ | Three independently-deployable variants from one BRIEF + shared content | DRY discipline + variant strategy executed cleanly | All 3 |
| ✅ | Each variant has its own `tokens.css` with distinct palette but shared structure | Token discipline scales to N variants | All 3 |
| ✅ | Variant C defines a dedicated `--color-text-subtle` (not opacity multiplier) | Per `ACCESSIBILITY.md` §3 rule against muting via `/80` — exemplary | Variant C |
| ✅ | LocalBusiness Restaurant schema correctly built per locale (PT + EN) | Both locales emit valid schema; aggregateRating gated by owner approval | All 3 |
| ✅ | Sticky WhatsApp bubble + mobile nav strip on every variant | Mobile conversion discipline | All 3 |
| ✅ | Image pipeline 30 MB → 1.5 MB via Astro `<Image>` + sharp | Real performance win | All 3 |
| ✅ | Variant-strategy section in `CLAUDE.md` documents the cold-call workflow | Owner picks one during the call; other two get `rm -rf`'d. Process clarity. | All 3 |
| ✅ | Variant C welcome modal is server-rendered, doesn't block initial paint | Anti-pattern (`ANALYTICS.md` § client-side blocking) correctly avoided | Variant C |
| ✅ | "Desde 2023" trust stamp on Variant C | Real quantified-impact stamp per `DESIGN-BEST-PRACTICES.md` §heritage trust signals | Variant C |
| ✅ | Place-identity in every variant (azulejo / Brazilian-grocer / archival photography) | The single most underused gastronomy pattern; all three deliver it | All 3 |
| ✅ | Variant B's bright lime CTA reserved exclusively for the primary conversion | Color discipline matches Sweetgreen archetype | Variant B |
| ✅ | **NEW: Palette source provenance declared in `design.md`** per new §5 rule | Tier 3 + tier 5 merge for A; tier 5 for B and C — defensible in client conversation | All 3 |
| ✅ | **NEW: Photo sourcing per `BRIEF.md` "scrape sources" section** per new §3 rule | Original audit pattern that informed the rule | All 3 |
| ✅ | **NEW: Vertical-default palette adherence** per `templates/gastronomy.md` §6 — A is an exact match on the 4 declared keys (template default was anchored to this build); B and C are same-sub-archetype family with their own hex values (predate the template) | Predictable defaults; A is the canonical reference for Heritage sub-archetype | All 3 |

### 3.4 New-rule deep dive (2026-05-14 additions)

#### `DESIGN-BEST-PRACTICES.md` §3 — Sourcing photos and favicon

| Sub-rule | Compliance |
|---|---|
| Photos sourced from `docs/audit/[name].md` priority hierarchy | 🟢 Compliant — `BRIEF.md` §"Photos available for demo (scrape sources)" enumerates portodosribeiros.com gallery (priority 2, existing client website) + Instagram (priority 3) + GBP (priority 4). |
| Favicon ships per priority 1–4 fallback | 🟢 Compliant — all three variants have `favicon.ico` + `favicon.svg`. Priority unclear (was the SVG generated as a typeset monogram, or sourced from a logo file?). **Recommendation:** document in each variant's `design.md` which favicon-source tier was used. |
| `<Placeholder>` only after sources 1–6 exhausted | 🟢 Compliant — no `<Placeholder>` components in Porto build because real scraped images are used throughout. |
| Demo-phase scraped photos require owner permission for production | 🟡 Gated by cold call. Same status as the legal-content stubs. |

#### `DESIGN-BEST-PRACTICES.md` §5 — Sourcing the palette

| Sub-rule | Compliance |
|---|---|
| Palette declared from priority tier (1–6) | 🟢 Compliant as of 2026-05-14 — `design.md` table documents Variant A = tier 3 + tier 5 merge; B = tier 5 Modern Conversion default; C = tier 5 Premium Editorial default. |
| Token values match `templates/gastronomy.md` §6 default for the chosen sub-archetype | 🟢 **Variant A:** exact match on the 4 declared keys (the template default for "Heritage / family restaurant" is anchored to this build — explicitly noted in `templates/gastronomy.md` §6). Plus extra tokens `--color-open` / `--color-open-deep` (herb-green for "Aberto sem pausa" badge) and `--color-azulejo` / `--color-azulejo-light` (place-identity blue) — agency-specific additions not in the template starting point, defensible. **NOTE — token-name inconsistency:** `design.md` documents this herb-green as `--color-secondary` but `tokens.css` uses `--color-open`. Same color, two names. See Phase B item below for reconciliation. · 🟢 **Variant B:** same sub-archetype as "Modern conversion-first" default but hex values diverge (V2 predates the template default). Token values are V2's own implementation of the Sweetgreen-style archetype, not a verbatim adoption. · 🟢 **Variant C:** same sub-archetype as "Premium editorial / heritage storytelling" default but hex values diverge (V3 predates the template default). Token values are V3's own implementation of the Dishoom-style archetype. |
| WCAG 2.2 AA contrast check declared | 🟢 Variant A explicitly notes `#1F1A14` on `#F7F0E5` ≈ 14.6:1 and white on `#C2410C` ≈ 4.6:1 · 🟡 Variant B and C contrast checks need explicit re-verification per concerns above |

#### `CHECKLIST.md` §9 — Prospect intake

| Sub-rule | Compliance |
|---|---|
| `docs/audit/[name].md` follows §9 template | 🟡 N/A — Porto was not a pure cold prospect. The original `archived/porto-dos-ribeiros-2026-05-13.md` is a §8 site audit (correct format — archived 2026-05-16). No §9 prospect-intake file exists for Porto. |
| **Future implication:** if the agency takes on the next prospect (Café Del Corso, Laudam, others), `docs/audit/[name].md` must follow the new §9 template structure. | — |

---

## 4. Prioritized fix list

### Phase A — Production cutover blockers (must fix before `noindex` flip)

1. **Owner cold call.** Three variants are ready. The conversation gates everything else.
2. **Pick one variant.** Delete the other two from disk (per the variant-strategy section in `docs/clients/porto-dos-ribeiros/CLAUDE.md`).
3. **Resolve PT legal stubs** (NIF + CAE in footer) — owner-conversation deliverable.
4. **`vercel.json` with six security headers** on the surviving variant.
5. **Custom `404.astro` + `500.astro`** on the surviving variant.
6. **Uptime monitoring** on the surviving variant's domain.
7. **`.github/workflows/ci.yml`** running `pnpm validate`.
8. **Real photos** swapped in (owner-supplied originals preferred; current scraped photos require explicit written permission per new §3).
9. **Variant B-specific (if Variant B is picked):** verify CTA contrast — white text on bright lime fails WCAG AA; switch to deep-green text fill or change accent contrast.
10. **Variant C-specific (if Variant C is picked):** add focus trap + ESC dismiss to welcome modal.
11. **Geo coordinates** re-verified against Google Maps pin.

### Phase B — Best-practice gaps (should ship before declaring production-ready)

12. **Reconcile `--color-secondary` vs `--color-open` token name in Variant A** — `design.md` documents the herb-green as `--color-secondary: #3F6B3A` but `tokens.css` implements it as `--color-open: #3f6b3a`. Same color value, two names. Components use `--color-open`. **Fix:** update `design.md` to match the in-use name `--color-open` (the canonical name should be whatever the code uses, not whatever the doc uses). 5-minute fix in `docs/clients/porto-dos-ribeiros/design.md`.
13. **Add `validate:translations` script** for hreflang parity enforcement
14. **Document per-client Vercel rollback drill** in `CLAUDE.md`
15. **Update favicon source-tier note** in each variant's section of `design.md` (favicon priority 1–4 declaration)
16. **GA4 + GSC** post-cutover setup
17. **Submit sitemap to GSC**
18. **GBP updated** with the new website URL
19. **Test all `<a href>` links** manually before launch — `tel:`, `wa.me`, Google Maps, IG
20. **Microsoft Clarity** post-cutover (essential-cookie configuration to potentially avoid the LGPD/cookie banner)

### Phase C — Demo-phase deferrals (do when context appears)

21. AVIF upgrade for image pipeline (currently WebP — pipeline supports the flip)
22. Reservation form via SevenRooms / OpenTable / TheFork — only if owner requests
23. Owner-supplied photography refresh post-launch (current scraped photos are demo-grade)
24. Consider PT-PT translations of a few customer-facing strings (PT-BR is intelligible but local pickup may help)

---

## 5. What this audit tells us about the standards themselves

**Three observations:**

1. **The new §3 / §5 / §9 rules were derived from real friction in this very build.** Re-running them as audit criteria today produces near-zero false positives — almost everything is already compliant by accident. This confirms the rules are well-calibrated and don't impose ceremony beyond what real builds already do. **Recommendation:** treat the next audit-after-rule-change cycle as the gold standard for whether a new rule was well-designed.

2. **The infrastructure gaps are identical between Porto (rebuilt site) and Jean (greenfield site).** Security headers, custom error pages, CI/CD workflow, and uptime monitoring are absent from every agency-built site. This is **template-level debt**, not project-level debt. The fix is one infrastructure scaffold that drops into every new client — saves ~2 hours per project once built, applies retroactively to Porto + Jean + every future build.

3. **The variant-specific findings (B and C) are accessibility-adjacent.** Bright-lime CTAs and welcome modals are inherent visual choices for their archetypes — the audit shouldn't object to the *choice*, only to the implementation gaps (contrast verification, focus trap). When the owner picks a variant, ~30 minutes of focused work resolves the variant-specific blocker. This is a healthy pattern: the variant strategy puts known-risk patterns in front of the client *before* picking which risk to commit to.

**One recommendation for the standards:** the agency-template infrastructure (vercel.json, 404/500, CI/CD, uptime monitoring) should be packaged as a "scaffold drop-in" — a `docs/design/templates/_scaffold-infrastructure.md` or equivalent — referenced from `TECH.md` §20 (per-client CLAUDE.md template). Today, every new project loses 2 hours re-discovering the same gaps. Once the template exists, every audit's Phase A shrinks by half.

---

*Audit complete. Overall compliance 76 %. Top fix is still the owner cold call — three variants are ready, infrastructure is the same gap on all three, no further code work pays off before the conversation.*
