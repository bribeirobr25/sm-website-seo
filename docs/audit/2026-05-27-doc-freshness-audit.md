# Doc freshness audit (2026-05-27)

Sweep of every `.md` under `docs/`, root `CLAUDE.md` / `README.md`, all `docs/clients/*/`, `clients/*/README.md`, and `scaffolds/*/README.md` against the actual code in `scaffolds/`, `clients/`, and `docs/design/_impl/`.

## Executive summary

**~11 stale references · 4 cross-doc broken links · 6 version-drift items · 4 gaps**

Most-impactful items:

1. Root `CLAUDE.md` and `clients/README.md` still say "8 canonical + 5 universal primitives" — actual library is **32 + 6** (per `docs/design/components/README.md` and the live `_impl/` listing).
2. `docs/design/TECH.md` says "Astro 5.2+" in 2 places — every scaffold, every demo, and the rest of `TECH.md` itself is on Astro 6.
3. Agency-breno-bar exists in `docs/clients/` and `clients/` but the root `CLAUDE.md` "Current client roster" still says "No active paying client builds" and never names the agency self-build.
4. `docs/design/templates/gastronomy.md` §10.6 points at `docs/clients/archived/porto-dos-ribeiros/` — that directory does not exist (only `reference-solo-barber/` + `reference-studio-booking/`).
5. `docs/design/UI_REVIEW.md` is the 2026-05-12 Porto dos Ribeiros review — Porto is deleted, the doc has no successor, and it's the only file in `docs/design/` that references a code path that no longer exists.

---

## Critical (blocks current accuracy)

### F1. Root CLAUDE.md "Current client roster" stale
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/CLAUDE.md` §"Current client roster" (lines 267–279)
**Issue**: Says "**No active paying client builds**" and the only listed builds are the two archived `reference-*` doc bundles. `clients/agency-breno-bar/` (built 2026-05-27, live at agency-breno-bar.vercel.app) and the 7 portfolio demos (`demo-{bonsai-kodama,eiscafe-bellini,coffee-saltlines,restaurant-adele,lawyer-sander-voss,yoga-atem-studio,barber-bart-pomade}`) are not named anywhere in the section. `PENDING.md` knows about all of them; the canonical entry point doesn't.
**Suggested fix**: Replace with a "Portfolio demos (7) + agency self-build (1) — no paying clients yet" block; cross-link to `PENDING.md` §"Agency state at a glance."

### F2. Component count drift — "8 canonical" vs actual 32
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/CLAUDE.md` lines 204 + 261 · `/Users/simonekugler/Desktop/sm-website-seo/clients/README.md` line 38
**Issue**: Both files say "8 canonical components + 5 universal primitives". The live library at `docs/design/components/_impl/` has **32 canonical + 6 universal primitives** (matches `docs/design/components/README.md` line 4 and the root CLAUDE.md doc-table row at line 104 — which is internally inconsistent with its own line 204).
**Suggested fix**: Update both "8 + 5" mentions to "32 + 6" and the descriptor "(8 from the 24-site UI/UX reference study)" to reflect the 2026-05-23 expansion batches.

### F3. Astro version drift in TECH.md
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/TECH.md` §2 Tech stack reference (lines 181, 192) + §15 Dependency management (line 1229)
**Issue**: 3 mentions of "Astro 5.2+" / "Astro 5" while §15.5 (line 1259), §17 (line 1462), §20 template (line 1540) all say Astro 6. Every scaffold + every demo has `"astro": "^6.0.0"`.
**Suggested fix**: Replace "Astro 5.2+" with "Astro 6" and "Astro 5 image pipeline" with "Astro 6 image pipeline."

### F4. CLAUDE.md root §"How to start" Step 2 — Astro 5+ drift
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/CLAUDE.md` line 160
**Issue**: Decision tree says "Multi-page static → Astro 5+ + Tailwind v4 (Tier 2)". Should be Astro 6.
**Suggested fix**: "Astro 5+" → "Astro 6".

### F5. Broken archive path in gastronomy.md
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/templates/gastronomy.md` line 433
**Issue**: References `docs/clients/archived/porto-dos-ribeiros/` for the three-variant cold-call worked example. That directory does not exist (only `archived/reference-solo-barber/` + `archived/reference-studio-booking/` + `archived/README.md`). Per `PENDING.md`, the Porto dos Ribeiros docs were among "Jean Souza Barbearia + Porto dos Ribeiros 3 variants deleted from `clients/` on 2026-05-16" — the per-client docs appear to have been deleted too, contradicting root CLAUDE.md line 277 ("archived at `docs/clients/archived/` for historical reference").
**Suggested fix**: Either restore the archived Porto docs OR remove the §10.6 paragraph and reword to describe the cold-call pattern without the dead worked-example link.

### F6. Missing docs/clients/agency-breno-bar/ — gap E (already known)
**Doc**: `docs/clients/agency-breno-bar/` directory **(verified present at scan time — CLAUDE.md, BRIEF.md, design.md all exist)**
**Issue**: Re-check from the task prompt: the directory DOES exist with all three files. This is no longer a gap. Removing from the audit-action list. (Caller said "main thread is handling it" — looks already handled.)
**Suggested fix**: None — verify and close.

### F7. `docs/design/UI_REVIEW.md` references deleted client
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/UI_REVIEW.md` lines 1–5 + 517
**Issue**: This entire doc is a 2026-05-12 review of `clients/porto-dos-ribeiros/` which was deleted 2026-05-16. The doc was never archived to `docs/audit/archived/` despite being a snapshot of a deleted build. It's the ONLY file under `docs/design/` (a "standards" directory) that critiques a single dead client — every other doc is a rule.
**Suggested fix**: Move to `docs/audit/archived/2026-05-12-porto-dos-ribeiros-uiux-review.md` with the archive-banner convention (matches the 2026-05-26 archived-file moves already in PENDING).

---

## Warnings (worth fixing soon)

### W1. PENDING.md "Active client builds: none paying" vs new agency build
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/audit/PENDING.md` line 13
**Issue**: Says "Active client builds: none paying. **7 portfolio demos live**" — does not mention agency-breno-bar (the 8th internal build, shipped 2026-05-27). The 2026-05-27 entry is in "Recently resolved" but the summary line at the top is stale.
**Suggested fix**: Update summary to "7 portfolio demos + 1 agency self-build live (8 total internal Vercel deployments)."

### W2. Root CLAUDE.md doc table row for `docs/design/components/_impl/`
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/CLAUDE.md` line 261
**Issue**: Says "the 8 from the 24-site UI/UX reference study + 5 universal primitives". The 24-site study only produced 8 of the 32 components; the working principle should mention the 32-total library, not just the 8-component subset, to match the doc table at line 104.
**Suggested fix**: Reword to "import from the 32-component canonical library (`docs/design/components/_impl/`) + 6 universal primitives."

### W3. `clients/README.md` references stale paths
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/clients/README.md` lines 38 + 39
**Issue**: "8 canonical components + 5 universal primitives" (drift, same as F2) + reference to "the two prior reference impls (deleted as code; archived as docs)" — fine, but the per-client doc archives section lists only the 2 reference-* — does not mention that 7 demo-* and 1 agency-* per-client doc dirs are now active in `docs/clients/`.
**Suggested fix**: Mention the 8 active per-client doc dirs as "live examples of populated doc sets" alongside the 2 read-only references.

### W4. TECH.md §1.1 footnote "ships in the 2026-05-18 SEO depth work Batch 2"
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/TECH.md` line 58
**Issue**: Future-tense footnote — "_Note: `CITATIONS.md` ships in the 2026-05-18 SEO depth work Batch 2._" Per PENDING.md Recently resolved (2026-05-18), it shipped. The temporal-deferral language is stale.
**Suggested fix**: Strike the footnote or restate as "Already shipped — see `CITATIONS.md`."

### W5. Stale "StickyMobileCta" follow-up tracking
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/TECH.md` line 819
**Issue**: Refers the reader to PENDING.md for a `StickyMobileCta.astro` follow-up, but PENDING.md no longer lists it — the 2026-05-19 restructure note (line 124) claims the "zombie `clients/jean-souza-barber` + `StickyMobileCta` refs cleaned in TECH.md/DESIGN-BEST-PRACTICES.md/beauty.md". TECH.md still has the dangling reference. Either the cleanup missed this line OR the component is genuinely a tracked deferred item and PENDING needs it.
**Suggested fix**: Verify intent — either drop the line from TECH.md or re-add a tracked entry in PENDING.md "Agency-template / standards work."

### W6. KPI.md example uses deleted client slug
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/KPI.md` line 262
**Issue**: Example "`business_slug` — agency-side identifier (`jean-souza-barber`, `cafe-del-corso`)" — Jean Souza was deleted 2026-05-16. Cafe Del Corso is intake-only (no slug yet).
**Suggested fix**: Replace with `demo-bonsai-kodama` + `agency-breno-bar` (live slugs).

### W7. Citation.md mentions reference-solo-barber as live example
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/CITATIONS.md` line 115
**Issue**: "The agency's reference impl (`reference-solo-barber/`) uses the booking-deep-link pattern" — `clients/reference-solo-barber/` was deleted 2026-05-19.
**Suggested fix**: Either point at `docs/clients/archived/reference-solo-barber/` (the doc archive) OR at `clients/demo-barber-bart-pomade/` (which is the live Beauty/Barber example).

### W8. `_impl/README.md` describes extraction-from-reference history but doesn't update for 2026-05-26 scaffold backports
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/_impl/README.md`
**Issue**: §History block describes the 2026-05-19 byte-identical extraction from `clients/reference-*/`. Since then, several `_impl/` files (BaseLayout.astro, CookieBanner.astro, consent.ts, Footer.astro, schema.astro.ts) have been upgraded via the 2026-05-26 Kodama-bonsai backport (per PENDING.md). The README still reads as if `_impl/` is byte-identical to the deleted reference-impl source.
**Suggested fix**: Add a "Subsequent updates" subsection noting the 2026-05-26 backport (locale-driven CookieBanner, hreflang, JSON-LD, BreadcrumbList — same upgrades documented in scaffold §"What the scaffolds ship").

---

## Nice-to-have (cosmetic)

### N1. PENDING.md "7-demo portfolio" header line stale
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/audit/PENDING.md` line 3
**Issue**: "Last updated: 2026-05-26 — **7-demo portfolio + audit-sweep closure**." Since then, agency-breno-bar shipped (entry in Recently resolved). Header summary not bumped.
**Suggested fix**: Bump to 2026-05-27 with breno-bar headline.

### N2. agency-breno-bar `public/robots.txt` "Disallow: /demo/" line
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/clients/agency-breno-bar/public/robots.txt` line 7
**Issue**: `Disallow: /demo/` — the comment in line 3 says `/_demo/` (with underscore prefix per the agency convention). Either the comment is wrong or the rule line is wrong; one of the two needs to align.
**Suggested fix**: Reconcile comment vs rule. Probably should be `Disallow: /_demo/` everywhere.

### N3. `_impl/config/package.{astro,nextjs}.json` retain reference- names
**Doc**: `/Users/simonekugler/Desktop/sm-website-seo/docs/design/_impl/config/package.astro.json` line 2 · `package.nextjs.json` line 2
**Issue**: Both still have `"name": "reference-solo-barber"` / `"reference-studio-booking"` — these are paste-target configs, so the names are placeholders, but they could plausibly mislead a future agent into thinking the references are alive.
**Suggested fix**: Either rename to `"name": "client-slug-placeholder"` (signals "edit me") or add a JSDoc-style comment on first line explaining the placeholder convention.

### N4. SEO.md / I18N.md / TECH.md mention bonsai/breno-bar inconsistently
**Doc**: I18N.md §17 (4 mentions of bonsai-kodama as worked example) · SEO.md (hreflang example uses bonsai) · TECH.md §11 (also bonsai)
**Issue**: agency-breno-bar is now a 3-locale Tier-2 build with `output: static + Vercel adapter for the lone SSR /api/contact endpoint` — a different and arguably more agency-canonical i18n pattern than bonsai (which uses translation-as-merge for 4 locales × 24 data entries). Neither I18N.md §17 nor SEO.md §7 mentions agency-breno-bar as a second worked example. No urgency, but the agency's own site would be a stronger primary example than a fictional demo.
**Suggested fix**: Add agency-breno-bar as a second "Worked example" pointer in I18N.md §17 and SEO.md §7 hreflang subsection where appropriate.

### N5. Internal inconsistency on `docs/clients/archived/` membership
**Doc**: Root CLAUDE.md line 277 says "archived at `docs/clients/archived/` for historical reference" referring to Jean + Porto. Archive directory only contains README + 2 reference-* dirs.
**Issue**: Per CLAUDE.md and PENDING.md, the Jean + Porto per-client docs should be present in archive. They aren't. Either the docs were deleted (and the CLAUDE.md sentence is stale) or never archived (claim is false). Same root cause as F5.
**Suggested fix**: Pick one — restore the archives OR remove the false claim.

---

## Confirmed correct (terse — clean docs audit)

- `docs/design/SEO.md` — version-current, all internal cross-refs resolve, §8.4 review-playbook expansion lands as PENDING.md described
- `docs/design/LEGAL.md` — clean
- `docs/design/CITATIONS.md` — clean (except W7 single-line nit)
- `docs/design/KPI.md` — clean (except W6 single-line nit)
- `docs/design/CHECKLIST.md` — Guards 4/6/8/9 referenced by PENDING.md all present
- `docs/design/SECURITY.md` — clean (stubs to LEGAL.md as documented)
- `docs/design/PERFORMANCE.md` — clean
- `docs/design/ACCESSIBILITY.md` — clean
- `docs/design/RELIABILITY.md` — clean
- `docs/design/QUALITY.md` — clean
- `docs/design/INFRASTRUCTURE.md` — clean
- `docs/design/INTEGRATIONS.md` — clean
- `docs/design/FORMS.md` — clean
- `docs/design/ANALYTICS.md` — canonical-source declaration matches KPI.md
- `docs/design/SOCIAL-SHARING.md` — clean
- `docs/design/COLOR.md` — §6.5 portfolio-diversity gate references match live demos
- `docs/design/DESIGN-BEST-PRACTICES.md` — §6.5 + §7 Tailwind @layer-base both match scaffolds
- `docs/design/I18N.md` — §17 patterns all verified live in scaffolds/astro-tier2/ + agency-breno-bar + bonsai
- `docs/design/SALES.md` — clean
- `docs/design/components/README.md` — 32 + 6 count correct, build-dependency graph accurate
- All 12 `docs/design/templates/*.md` (except gastronomy.md F5)
- All 9 `docs/clients/demo-*/CLAUDE.md` + `docs/clients/agency-breno-bar/CLAUDE.md` — version-current
- `docs/clients/demo-bonsai-kodama/CLAUDE.md` — explicitly notes "4-locale build" so the stale "EN routes not built" claim flagged in the task prompt has already been resolved (CLAUDE.md line 28 says 134 routes × 4 locales)
- `scaffolds/astro-tier2/README.md`, `scaffolds/nextjs-tier3/README.md`, `scaffolds/README.md` — version-current (Astro 6 + Next 16 throughout)
- `docs/audit/cafedelcorso.md`, `docs/audit/laudam.md` — intake docs, unchanged + still valid
- `docs/audit/RUNBOOK-real-browser-audit.md` — methodology doc, unchanged
- `docs/audit/ui-ux-reference-study.md` — measurement baseline doc, unchanged
- All 5 files in `docs/audit/archived/` — read-only as expected
- `docs/design/_impl/README.md` — content is correct, only the history-completeness nit (W8)
- `docs/design/components/_impl/README.md` — clean
