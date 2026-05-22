# PORTFOLIO-BUILD-RUNBOOK.md — Vertical-Demo Build Runbook
## sm-website-seo · Reusable across all 7 portfolio builds

**Status:** Canonical runbook. Authored 2026-05-20.
**Applies to:** Every agency-portfolio demo build (gastronomy · trades · lawyer · beauty/barber · physiotherapy · salon-or-bonsai · agency-self). Re-instantiate this runbook per vertical via a dated `PORTFOLIO-BUILD-INSTANTIATION-YYYY-MM-DD-[vertical].md` sibling — never modify this file per build.
**Read first:** root `CLAUDE.md` · `docs/design/CHECKLIST.md` · `docs/design/templates/[matched-vertical].md`

---

## 0. Purpose and posture

These demos are **cold-outreach artifacts**. They are not real client builds and they are not portfolio brochures in the marketing sense. Each demo exists to:

1. Prove the agency ships an entire, rule-compliant, multilingual site end-to-end — not a Figma mock.
2. Give the agency owner a real URL to drop into the third minute of a cold call.
3. Stress-test every rule in `docs/design/` against a concrete, vertical-specific build before a paying client lands.

**Operating posture:**
- Fictional data is the rule, not the exception. No real prospect, no real address.
- Every rule in `docs/design/` is applied as if a paying client. The point of the portfolio is to demonstrate the rule library lives in code, not just in markdown.
- Demos are non-indexable indefinitely. The `noindex` flip in `CLAUDE.md` Step 4 → Step 6 never happens for these.
- One demo = one finished URL. A half-built demo is worse than no demo.

---

## 1. Open decisions — agency conventions resolved here

These eight decisions apply uniformly across all 7 builds. They were surfaced by the runbook author; the agency owner can override per-build in the instantiation doc, but the default sticks unless explicitly overridden.

### 1.1 Where demo sites live in the repo

**Decision:** `clients/[demo-slug]/` — same tree as future real clients. Slugs are prefixed with `demo-` to make the boundary obvious in directory listings (e.g. `clients/demo-eiscafe-bellini/`).

**Trade-offs considered:**
- ✅ Re-uses every scaffold convention without modification (root `CLAUDE.md` Step 3 commands work unchanged).
- ✅ A future paying-client build that happens to share a vertical can copy from a sibling demo directly — same directory layout, same imports.
- ✅ `clients/README.md` already documents the convention; no new top-level dir needs documenting.
- ❌ Mixing demos with real clients risks confusion during an audit. **Mitigation:** the `demo-` prefix is enforced in this runbook; the per-demo `docs/clients/[slug]/CLAUDE.md` opens with a banner `**STATUS: PORTFOLIO DEMO — Fictional business. Never index.**`.
- ❌ Alternative `portfolio/` or `demos/` top-level dir was considered but rejected: it forks the build conventions, requires a second `scaffolds/` target rule, and creates two places to look for past examples.

**Per-demo per-client docs path:** `docs/clients/demo-[slug]/CLAUDE.md` + `BRIEF.md` + `design.md` — yes, create them. They institutionalize the design choices for the next demo of the same vertical and serve as canonical reference. Open each with the same `**STATUS: PORTFOLIO DEMO**` banner.

### 1.2 Naming convention for fictional demo businesses

**Decision:** Names sound real. Plausible Berlin Italian-family / German-family / international names anchored to a real Berlin Bezirk. NOT generic placeholders.

**Trade-offs considered:**
- ✅ A plausible name is a stronger sales artifact than `Demo Gastronomy GmbH` — when shown to a prospect, the demo reads as "this is a real business we worked with" before the disclaimer lands. That demo-quality matters.
- ✅ Plausibility forces every other decision (copy register, palette, photography) to be coherent rather than placeholder-y.
- ❌ Plausibility risk: a real business with the same name could exist or be created later. **Mitigation:** before committing a name, run a Google search + GBP lookup + `*.de` domain check. If any of the three return a hit in the same Bezirk + vertical, pick another name. Document the negative check in the instantiation doc.
- ❌ "Demo" badge concern (§1.8) covers the residual risk that someone finds the URL and assumes it's real.

**Allowed sources:** common Italian / Turkish / Vietnamese / German surnames + Berlin Bezirk + business-type noun (`Eiscafé Bellini Prenzlauer Berg`, `Friseur Yıldız Neukölln`, `Phở Hanoi Wedding`). Do NOT use the name of an existing prospect from `docs/audit/`.

### 1.3 Image attribution convention

**Decision:** Per-demo `CREDITS.md` AS the canonical source-of-truth + an inline HTML comment above each `<img>` block with the source URL. **Both**, not either-or.

- The `CREDITS.md` lives at `clients/demo-[slug]/CREDITS.md` and lists every image file by filename → source URL → photographer → license. This is the legal artifact.
- The inline HTML comment is the developer-experience artifact — anyone reading the JSX/Astro can trace the image back to its source without leaving the file.
- **Not** a `data-source` attribute on `<img>` — that ships to production HTML and exposes the source URL to anyone inspecting the page. Source URLs stay in code comments and the `CREDITS.md`.

**Schema:**
```markdown
# CREDITS.md — Image and asset attribution
## demo-[slug]

| File | Source | Photographer | License | Verified |
|---|---|---|---|---|
| `public/img/hero-gelato-counter.jpg` | https://unsplash.com/photos/XXX | @photographer | Unsplash License | 2026-05-20 |
```

### 1.4 Deploy URL convention

**Decision:** `demo-[vertical].vercel.app` — agency-namespace prefix, vertical suffix, NOT the business name.

**Rationale:**
- The URL declares the artifact's purpose (agency demo for a vertical) without binding it to the fictional business name. If we rev the demo from one Italian gelato concept to a Vietnamese phở concept inside the same vertical slot, the URL doesn't lie.
- `eiscafe-bellini.vercel.app` would invite the assumption that there IS an Eiscafé Bellini — bad for the §1.8 disclosure rule.
- All 7 deploys share the same agency-Vercel-account, so URL-prefix consistency makes the dashboard easier to navigate.

**Mapping for the 7 builds:**

| Vertical slot | Vercel subdomain |
|---|---|
| gastronomy | `demo-gastronomy.vercel.app` |
| trades | `demo-trades.vercel.app` |
| lawyer | `demo-lawyer.vercel.app` |
| beauty / barber | `demo-beauty.vercel.app` |
| physiotherapy | `demo-physio.vercel.app` |
| salon-or-bonsai | `demo-artisan.vercel.app` (placeholder — confirm at build time) |
| agency-self | `demo-self.vercel.app` |

### 1.5 Visual validation scope

**Decision:** **Both** capture-and-review AND structured anti-pattern diff. They are different signals.

- **Capture-and-review:** 3-viewport screenshot capture (375 × 812, 768 × 1024, 1280 × 800) via Docker MCP Playwright, one set per locale (DE + EN) per page. Owner reviews. This is the subjective gate — does the demo look like a real Berlin business, or like a template?
- **Structured anti-pattern diff:** an enumerated walk through `DESIGN-BEST-PRACTICES.md` §15 AI-template-tells (`#15` if renumbered — verify by heading at run time) AND `CHECKLIST.md` §2 Visual review at three viewports vertical-scoped gates. Each tell either present (red) / fixed (green) / not-applicable (grey). This is the objective gate.

Both feed a single `VISUAL-VALIDATION.md` per demo. The runbook ships the report template (§7.3 below).

### 1.6 Per-demo `docs/clients/[slug]/` artifacts

**Decision:** Yes, create the full trio (`CLAUDE.md` · `BRIEF.md` · `design.md`) for every demo.

**Rationale:**
- The trio is the agency canonical "per-client" artifact set. Skipping it for demos creates a second-class doc convention that future real-client builds will have to learn around.
- The next demo of the same vertical (or the first real client of that vertical) pulls these as reference. Without them, the institutional learning evaporates.
- The BRIEF.md "KPI contract" block stays empty — demos have no real KPIs to wire (§4.5 below). Document explicitly with a `**Demo — KPI contract not applicable per PORTFOLIO-BUILD-RUNBOOK §4.5**` line.

### 1.7 Bilingual implementation — Astro i18n routing convention

**Decision:** Confirmed canonical per `docs/design/I18N.md`. For the 6 Astro-Tier-2 demos: built-in `astro:i18n` routing, DE at `/`, EN at `/en/`, `prefixDefaultLocale: false`. For the 1 Next.js-Tier-3 physio demo: `next-intl` with `localePrefix: 'as-needed'`, same URL shape.

**Subset of agency i18n rules that apply to demos:**

| `I18N.md` rule | Applies to demos? | Notes |
|---|---|---|
| `<html lang>` per locale | ✅ Yes | Universal |
| Locale config single source of truth (§2) | ✅ Yes | Per-client `src/i18n/config.ts` |
| Subdirectory URL structure (§3) | ✅ Yes | DE at `/`, EN at `/en/` |
| Translation file structure (§4) | ✅ Yes | Standard layout (`common.json` + `pages.json`) |
| Key naming conventions (§5) | ✅ Yes | English key names, dot-notation |
| `validate:translations` parity CI gate (§5) | ✅ Yes | Demo builds must pass too |
| Locale detection / persistence (§6) | ✅ Yes | URL-first, cookie hint, `Accept-Language` fallback |
| hreflang + canonical (§11) | ✅ Yes | Symmetric, includes `x-default` |
| Date / number / currency formatting (§8) | ✅ Yes | Hours: 24h DE, 12h EN |
| Text expansion budgets (§9) | ✅ Yes | Test at +40% DE width |
| German Sie/du choice (§12) | ✅ Yes | Document in `design.md`, one consistent register |
| German Impressum + Datenschutzerklärung | ✅ Yes (see §4.6) | DE-jurisdiction demos enforce as if production |
| Native-German review gate (translation workflow §14) | ⚠️ Partial | **Skipped for demo deploy but documented as launch requirement before any real client cold-call demo.** Recorded in the demo's `BRIEF.md` §Open questions. |
| Client-approval gate (§14 step 7) | ❌ N/A | No client to approve for a demo. Owner-only review. |

### 1.8 Demo / Beispiel badge + noindex discipline

**Decision:** Three-layer disclosure stack. All three required, no opt-outs.

1. **`<meta name="robots" content="noindex, nofollow">`** in every page `<head>`. Per scaffold default.
2. **`public/robots.txt`** ships `User-agent: *\nDisallow: /` — also per scaffold default for demo phase (`scaffolds/astro-tier2/public/robots.txt` already has this).
3. **Visible "DEMO / BEISPIEL" ribbon component** rendered at the very top of every page in both locales. Sticky 24px-tall band in the brand accent color, white text, says `DEMO · Diese Website ist ein Beispielprojekt der Agentur sm-website-seo. Kein echtes Unternehmen.` on the DE side, `DEMO · This site is a demonstration by sm-website-seo. Not a real business.` on the EN side.

**Trade-off considered:**
- The ribbon disrupts the demo aesthetic by a few pixels of vertical space.
- The cost of someone finding the URL via a screenshot leak or a copy-paste and assuming the business is real is much higher: it gets into fraud-adjacent territory if the "business" has a fake address.
- The ribbon is also a sales artifact when the owner shows the URL on a call — it pre-emptively explains the demo nature, saving the first 30 seconds of "this isn't a real business, but it shows what we'd build for you."

**Implementation note:** the ribbon is a new universal component for demo builds only. Spec lives in the instantiation doc per vertical (it can share styling but the copy is bilingual + locale-routed). Real production builds delete the ribbon when this scaffold is repurposed for a paying client.

### 1.9 Sentry and analytics for demos

**Decision:** Wired but inert. The scaffold ships Sentry server-only init and an analytics layer; for demos we keep the wiring in place but use the publicly-non-functional config so nothing fires.

- **Sentry server init:** keep `sentry.server.config.mjs` in place but set `SENTRY_DSN` to empty string in `.env.local` and on Vercel. The init module short-circuits when no DSN is set (verify in `INTEGRATIONS.md` §Sentry recipe). Result: Sentry SDK present, no events shipped.
- **Cookie banner:** ships, fully functional. Tests the consent layer end-to-end without firing any actual GA4 / Clarity scripts because no analytics tag is configured.
- **GA4 / Clarity / PostHog tags:** not added. The `analytics.ts` `window.track()` shim is in place but no provider receives events. For Tier 3 physio demo: same posture — PostHog SDK present but no project key.
- **KPI dashboards:** N/A per §4.5.

This preserves the rule-fidelity of the scaffold (an auditor looking at the code sees the consent layer, Sentry init, analytics shim — everything a real client would have) while keeping the demo a no-op for the surveillance stack.

---

## 2. Slot-fill summary — what changes per build, what does not

Use this as the build-time variable map. Everything else in the runbook is invariant.

| Variable | Value source |
|---|---|
| `[vertical]` | One of: `gastronomy` · `trades` · `lawyer` · `beauty` · `physio` · `artisan` · `agency-self` |
| `[demo-slug]` | `demo-[business-slug]` (e.g. `demo-eiscafe-bellini`) |
| `[business-name]` | Plausible fictional business name (per §1.2) |
| `[bezirk]` | One of Berlin's 12 Bezirke (e.g. Kreuzberg, Prenzlauer Berg, Neukölln, Mitte, Wedding) |
| `[archetype]` | Per the matched `templates/[vertical].md` §1 |
| `[tier]` | Tier 2 (astro-tier2) for all except physio (Tier 3 / nextjs-tier3) |
| `[primary-cta]` | `RESERVIEREN` · `TERMIN` · `ANFRAGEN` · `KONTAKT` — per vertical |
| `[deploy-url]` | `demo-[vertical].vercel.app` |

---

## 3. The six phases — invariant runbook

Each phase has: Goal · Deliverables · Verification · Rollback. Phases are sequential. Do not start phase N+1 until phase N's verification gate passes.

---

### Phase 1 — Research

**Goal:** Understand how the best 3–5 real businesses in this vertical actually speak in Berlin, so the demo copy lands as authentic Berlin small-business voice rather than agency-template voice.

**Hard rule (CRITICAL — agency anti-boilerplate posture):** No copy is lifted verbatim. The agency competes against template-boilerplate vendors; reproducing other businesses' copy would be both legally risky and the exact failure mode the agency is selling against. Research extracts **register and voice patterns** — sentence shapes, vocabulary choices, untranslated brand cues, what they call their products — never the prose itself.

#### Deliverables

1. `docs/audit/[demo-slug]-RESEARCH.md` — research log with:
   - 3–5 real Berlin businesses in the vertical, each with: URL, GBP listing URL, 1-paragraph profile, what's distinctive about their voice/positioning
   - **Register patterns observed:** Sie vs du · sentence length · use of native-language brand cues (Italian / Turkish / Vietnamese / English) · how they describe their flagship product · their hero headline pattern
   - **Anti-patterns observed:** generic phrases everyone uses (avoid these in demo copy)
   - **Place-identity cues observed:** how each business anchors to its Bezirk
   - Citations: every URL, retrieval date
2. **Reference cross-link:** the relevant section of `templates/[vertical].md` §Copy voice + §Anti-patterns. Confirm the research findings are consistent with the agency's vertical playbook; surface contradictions for owner discussion.

#### How to execute

- `WebFetch` each of the 3–5 URLs. Capture: hero headline, about-section opener, how products are categorized, footer microcopy.
- For each business: write a 4–6 line voice-summary paragraph in the research log. No prose copying.
- Confirm at least one of the businesses uses a register/voice pattern the demo will adopt. If none do, the demo is operating outside the vertical's natural voice — escalate to owner before phase 2.

#### Cross-references (rule docs that apply at this phase)

- `templates/[vertical].md` §Copy voice cues + §Anti-patterns
- `DESIGN-BEST-PRACTICES.md` §15 AI-template tells (especially the copy-voice tells — "Welcome to [Business Name]", "We pride ourselves on", etc.)
- `I18N.md` §12 German-specific rules (Sie vs du choice rule — informs the register observation)

#### Verification gate

- [ ] 3–5 businesses captured with URLs and retrieval dates
- [ ] At least one untranslated-brand-cue pattern (or absence of one) is explicitly noted per business
- [ ] At least one anti-pattern is noted (what NOT to do in this vertical's Berlin context)
- [ ] No verbatim copy in the research doc — every observation is paraphrased / patterned
- [ ] Findings either confirm or contradict `templates/[vertical].md` §Copy voice. Contradictions surfaced to owner.

#### Rollback

If research turns up fewer than 3 Berlin businesses in the vertical (rare — would only happen for a niche like high-end bonsai), broaden geographically: Berlin + Hamburg + Munich. If still < 3, escalate to owner — the vertical may not be Berlin-typical enough to justify a portfolio demo.

---

### Phase 2 — Identity + Copy

**Goal:** Lock the fictional business identity (name + Bezirk + founder name + year founded + service catalog), pick the matched template archetype, draft DE primary copy + EN secondary copy. Surface tone choices (Sie vs du; register; untranslated brand cues) for owner review BEFORE any code is written.

#### Deliverables

1. `docs/clients/[demo-slug]/BRIEF.md` — populated per `CHECKLIST.md` §9 prospect-intake template, adapted for demo. Sections:
   - Business identity: name, Bezirk, founder name, year founded, 1-sentence positioning, archetype pick (with rationale citing `templates/[vertical].md` §10 decision matrix)
   - Service catalog: 4–12 services with DRAFT prices (in € for DE, plausible Berlin price points per vertical)
   - Hours: realistic for the vertical (eis-café: seasonal — open Mar–Oct; trades: Mo–Fr 7–18; lawyer: Mo–Fr 9–18 + Sa termine; etc.)
   - **Legal jurisdiction:** DE (always — Berlin demos)
   - **Sie vs du choice:** explicit decision, citation of which §Copy voice signal drove it
   - Open questions: any DRAFT items needing owner sign-off
2. `docs/clients/[demo-slug]/design.md` — populated per `DESIGN-BEST-PRACTICES.md` §17 template:
   - Archetype pick + 2–3 alternates considered
   - Palette: from `templates/[vertical].md` §Default palette when client has no brand sub-archetype table — pick one direction, document the sub-archetype rationale (e.g. "Heritage / family restaurant" for the eis-café)
   - Typography pairing: from `templates/[vertical].md` §Typography pairings — usually Fraunces + Manrope or equivalent free pairing
   - Untranslated brand cues: list 2–4 (e.g. "Buongiorno", "Dai!", "la nonna" for an Italian gastronomy demo)
3. **DE primary copy draft** — at minimum: hero headline + 2 paragraphs about + service-catalog descriptions + 1 paragraph "Visit / Besuchen" + footer microcopy. Stored as `docs/clients/[demo-slug]/COPY-DE.md`.
4. **EN secondary copy draft** — same scope, written fresh per `I18N.md` §14 (independent rewrite, not machine translation). Stored as `COPY-EN.md`.
5. **Owner-review checkpoint** — a 1-page summary surfacing the 3 key tone decisions (Sie/du · register · untranslated cues) with 1–2 sentence rationale each, ready for owner approval. **Do not proceed to phase 3 without owner ack.**

#### How to execute

- Pick archetype using `templates/[vertical].md` §10 decision matrix.
- Pick sub-archetype using `templates/[vertical].md` §6 default-palette table (for gastronomy) or equivalent per-vertical section.
- Draft DE first (German is reference locale per `I18N.md` §4). Read aloud — does it sound like a Berlin business or like an AI translating an English brand? If the second, rewrite. Keep sentences short; use untranslated cues sparingly (2–4 per page max per `I18N.md` §5).
- Draft EN second, independently. Same content goals, different phrasing where natural. Translate the untranslated cues into untranslated cues (they stay in their native language across all locales per `I18N.md` §5).
- Run the bilingual draft past `templates/[vertical].md` §Anti-patterns one last time before committing.

#### Cross-references

- `templates/[vertical].md` §Archetypes · §IA per archetype · §Hero patterns · §Copy voice · §Anti-patterns · §Decision matrix
- `DESIGN-BEST-PRACTICES.md` §15 AI-template tells · §17 per-client `design.md` template
- `TECH.md` §20 per-client `CLAUDE.md` template (used in phase 4)
- `I18N.md` §4 reference-locale rule · §5 untranslated brand cues · §12 Sie/du · §14 translation workflow
- `LEGAL.md` §DE — confirms Impressum + Datenschutzerklärung as DE-jurisdiction mandatory artifacts
- `KPI.md` — explicitly NOT applicable; document the "Demo — KPI contract not applicable" line in `BRIEF.md`

#### Verification gate

- [ ] Archetype pick documented with rationale citing the decision matrix
- [ ] Sub-archetype palette + typography pairing documented in `design.md`
- [ ] Both DE and EN copy drafts complete and bilingual-parity-comparable
- [ ] Sie/du choice locked
- [ ] 2–4 untranslated brand cues identified
- [ ] Owner has reviewed and approved the 3 key tone decisions in writing (or has been notified async with a 24h timer)
- [ ] No DRAFT items missing from `BRIEF.md` §Open questions list

#### Rollback

If the owner pushes back on the archetype or tone, return to research and broaden the Berlin business set or pick a different sub-archetype. Do not start phase 3 sourcing imagery against a tone the owner hasn't bought into — image budget is the most expensive phase.

---

### Phase 3 — Images

**Goal:** Source ≥ 5 free-license images per demo (hero + section illustrations + gallery) from Unsplash / Pexels / Pixabay, document every source + photographer + license in `CREDITS.md`, optimize per `PERFORMANCE.md` §5 image rules.

#### Deliverables

1. `clients/[demo-slug]/public/img/` populated with: hero (3 aspect ratios per `SEO.md` schema rule — 16:9, 4:3, 1:1) + section illustrations (3–4) + gallery (4–8 photos depending on vertical). Total ≥ 5 images, expected 10–15 for visually-rich verticals (gastronomy, beauty, artisan), fewer for text-dominant verticals (lawyer, trades).
2. `clients/[demo-slug]/CREDITS.md` — per §1.3 schema. Every image file → source URL → photographer → license → verification date.
3. **OG share image** at `public/og.jpg` — 1200 × 630, < 300 KB JPG, real photo (not a logo-on-white) per `SOCIAL-SHARING.md` §OG image priority.
4. **Image-derivative pipeline applied:** each image converted to AVIF + WebP with responsive variants per `PERFORMANCE.md` §5.

#### How to execute

- For each image slot (defined per-vertical in the instantiation doc), search Unsplash + Pexels + Pixabay using the search terms documented in the instantiation doc.
- License check: Unsplash License, Pexels License, Pixabay License all permit commercial + derivative use without attribution requirement, but **the agency always attributes** in `CREDITS.md` as a discipline.
- Avoid: stock-y "studio isolated on white" food shots for gastronomy (`templates/gastronomy.md` §4 universal rules) · stock-y "diverse handshake" for trades · stock-y "concerned consultant" for lawyer. Per-vertical anti-patterns in `DESIGN-BEST-PRACTICES.md` §15.
- Lighting cohesion: pick photos with consistent color temperature (don't mix warm-tungsten and cool-daylight in the same section per `templates/gastronomy.md` §4 — applies to all verticals).
- Aspect-ratio discipline: hero gets all three (16:9, 4:3, 1:1) per `SEO.md` §5 schema rule (LocalBusiness `image` array needs three).
- Optimize: AVIF + WebP, dimensions explicit, lazy-load below the fold, `fetchpriority="high"` on the LCP image. Pipeline lives in `scaffolds/astro-tier2/` already — verify by running `pnpm build` after import.

#### Cross-references

- `DESIGN-BEST-PRACTICES.md` §3 photo + favicon priority hierarchy (note: the priority hierarchy is built for real-client builds with existing assets; for demos we explicitly drop to the lowest tier — vertical-defaults from free-license sources)
- `PERFORMANCE.md` §5 image rules + §8 ambient-video constraints (skip ambient video for demos unless the vertical template specifically calls for it; gastronomy archetype A occasionally does, but the constraints are mandatory — pause on mobile, poster image is LCP, < 2 MB total)
- `SEO.md` §5 schema image-array rule (three aspect ratios)
- `SOCIAL-SHARING.md` §OG image
- `templates/[vertical].md` §Photography direction

#### Verification gate

- [ ] ≥ 5 images sourced, all with `CREDITS.md` rows
- [ ] OG image present at `public/og.jpg`, 1200×630, < 300 KB
- [ ] Hero image has three aspect ratios for schema
- [ ] All images AVIF + WebP with responsive `<picture>` markup
- [ ] All images have explicit `width` + `height` attributes
- [ ] LCP image has `fetchpriority="high"`, no `loading="lazy"`
- [ ] Below-fold images have `loading="lazy"`
- [ ] No image is recognizably a stock cliché called out in `DESIGN-BEST-PRACTICES.md` §15 or the vertical template's anti-patterns
- [ ] Lighting cohesion verified by visual side-by-side review

#### Rollback

If Unsplash + Pexels + Pixabay don't yield 5 plausibly-realistic + license-clean images for the vertical (lawyer is a known offender — "lawyer in suit" stock looks like stock), narrow to interior-architecture or object photography (e.g. for lawyer: photograph a stack of books, a wooden door, an empty conference room — not people). For verticals where image availability is structurally low, drop image count from 10 to 5 + lean harder on typography. Document the decision in the instantiation doc.

---

### Phase 4 — Apply rules at scaffold time

**Goal:** Cross-reference every applicable rule doc against the scaffold copy before any page content is written, so the rule is encoded in the file structure rather than retrofitted later.

This phase is the canonical "checklist of every rule doc that applies." It is the heaviest phase from a documentation-cross-reference perspective and the lightest from an actual-coding perspective — most of the work is verifying the scaffold ships the rule rather than inventing it.

#### Per-rule cross-reference matrix (mandatory walk-through)

| Rule doc | Applies to demo? | What to verify / do |
|---|---|---|
| **`TECH.md` §1 Stack-tier decision** | ✅ All demos | Tier 2 (astro-tier2) for 6 of 7; Tier 3 (nextjs-tier3) for physio. Documented in `BRIEF.md`. |
| **`TECH.md` §7 Canonical tokens** | ✅ All demos | `src/styles/tokens.css` ships motion / easing / tracking / radii / neutral palette. Override the palette only; keep motion/easing/tracking/radii unchanged. |
| **`TECH.md` §20 Per-client `CLAUDE.md` template** | ✅ All demos | Populate `docs/clients/demo-[slug]/CLAUDE.md` with the §20 template — stack, commands, context, imported-components table. Open with the DEMO banner. |
| **`DESIGN-BEST-PRACTICES.md` §5 Palette sourcing** | ✅ All demos | Document tier in `design.md` §Color tokens — for demos, tier = 5 (vertical-default), per `templates/[vertical].md` §6 sub-archetype defaults. WCAG 2.2 AA contrast verified before committing tokens. |
| **`DESIGN-BEST-PRACTICES.md` §7 Components** | ✅ All demos | 8 canonical components opt-in per matched `templates/[vertical].md`. See §3.5 of this runbook for the component decision matrix. |
| **`DESIGN-BEST-PRACTICES.md` §15 Anti-AI-template tells** | ✅ All demos | Walked through in phase 6 visual-validation; flagged in `design.md` as design constraints during phase 2. |
| **`ACCESSIBILITY.md` WCAG 2.2 AA** | ✅ All demos | Contrast pass on every text/bg pair; focus rings styled in brand accent; reduced-motion respected; tap targets ≥ 44×44; one `<h1>` per page; heading hierarchy logical. Verified in phase 6. |
| **`PERFORMANCE.md` budgets** | ✅ All demos | Lighthouse ≥ 90 mobile, ≥ 95 desktop. LCP < 2.5s. CLS < 0.1. Verified in phase 6. |
| **`PERFORMANCE.md` §5 Image rules** | ✅ All demos | Applied in phase 3. Verified at build time. |
| **`PERFORMANCE.md` §8 Ambient-video constraints** | ⚠️ Conditional | If vertical template's archetype calls for ambient video (rare — only gastronomy A occasionally), all 5 constraints mandatory. Default for demos: skip ambient video to avoid the complexity. |
| **`LEGAL.md` §DE** | ✅ All Berlin demos | Impressum + Datenschutzerklärung as mandatory pages. **Use generated fictional Impressum content** marked clearly as DRAFT — see §4.6 of this runbook. Cookie banner ships (scaffold default). |
| **`LEGAL.md` §BR / §PT / §US** | ❌ N/A | Demos are Berlin-anchored only. |
| **`SEO.md` §5 Schema** | ✅ All demos | Paste-ready `@graph` from matched `templates/[vertical].md` §11.8 swapped into `src/lib/seo/schema.ts`. Validate against Google Rich Results Test + Schema.org Validator before phase 6 passes. |
| **`SEO.md` §15 Anti-patterns** | ✅ All demos | No inverted-h1 for local-biz (h1 IS the visually-primary headline). No fixed-viewport scroll-hijack. Verified in phase 6. |
| **`KPI.md`** | ❌ N/A | Demos have no real KPIs. `BRIEF.md` carries the "Demo — KPI contract not applicable per PORTFOLIO-BUILD-RUNBOOK §4.5" line. |
| **`CHECKLIST.md`** | ✅ All demos | Pre-launch master gate, demo-adapted (skip §0 client-approval items; keep all §1 technical + §2 design + §3 SEO + §4 legal + visual-review items). Run before phase 6 sign-off. |
| **`CITATIONS.md`** | ❌ N/A | Demos have no real NAP and no real GBP listing. Document the "Demo — citations N/A; in production, claim per `CITATIONS.md` §2 + §3 + per-vertical §4" line in `BRIEF.md`. |
| **`I18N.md`** | ✅ All demos | DE + EN, `prefixDefaultLocale: false`. §1.7 above details the applicable subset. |
| **`INTEGRATIONS.md` Sentry** | ✅ All demos | Server-only init wired but inert (§1.9). `send_default_pii: false` non-negotiable even when DSN empty. |
| **`INTEGRATIONS.md` Resend / Neon / Upstash / Stripe / PostHog** | ⚠️ Conditional | Only physio (Tier 3) needs Neon + Upstash + Resend (booking form + DB). All others: not applicable. |
| **`SOCIAL-SHARING.md` OG image** | ✅ All demos | OG image mandatory per phase 3. Share-button component opt-in per vertical (gastronomy + beauty: ✅; lawyer + trades: ❌ generally; physio: optional). |
| **`FORMS.md`** | ⚠️ Conditional | Only if the vertical's archetype includes a form (contact / booking / quote). Lawyer + trades + physio: yes. Gastronomy: typically no (book-platform deep-link instead). Beauty: typically no. Agency-self: yes (contact form). |
| **`INFRASTRUCTURE.md`** | ✅ All demos | Scaffold ships `vercel.json` + custom 404/500 + ci.yml. Verify in phase 5 setup. |
| **`SECURITY.md` headers** | ✅ All demos | 6 security headers in `vercel.json` per `INFRASTRUCTURE.md`. Verify in phase 6. |
| **`RELIABILITY.md`** | ⚠️ Partial | Demos skip uptime monitoring + secret rotation (no real secrets to rotate). Error handling + custom 404/500 still apply. |
| **`QUALITY.md`** | ✅ All demos | `pnpm validate` (lint + build + translation-parity) must pass clean before phase 6 sign-off. |
| **`ANALYTICS.md`** | ❌ N/A (deferred) | Per §1.9 — wired but inert. Document explicitly. |
| **`SALES.md`** | ❌ N/A (runbook artifact, not site artifact) | Not applicable at the per-demo build level. |

#### Component decision matrix — opt-in per vertical

Per `docs/design/components/_impl/README.md`, the 8 agency-canonical components are opt-in. Recommended picks per vertical (verify against each component spec sheet's §1 per-vertical applicability table before scaffolding):

| Component | gastronomy | trades | lawyer | beauty | physio | artisan | agency-self |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| HalfPillCTA | ✅ (RESERVE) | ✅ (KOSTENVORANSCHLAG) | ❌ | ✅ (TERMIN) | ✅ (TERMIN) | ⚠️ (BESTELLEN if commerce) | ✅ (KONTAKT) |
| LabelCountHeader | ✅ (MENÜ (12)) | ✅ (LEISTUNGEN (8)) | ✅ (RECHTSGEBIETE (5)) | ✅ (BEHANDLUNGEN (12)) | ✅ (BEHANDLUNGEN (8)) | ✅ (WERKSTÜCKE (24)) | ✅ (LEISTUNGEN (3)) |
| HoursInNav | ✅ (KÜCHE / BAR) | ❌ | ❌ | ✅ (SALON / WALK-IN) | ✅ (PRAXIS / NOTFALL) | ⚠️ (only if open-to-public hours) | ❌ |
| StatCallouts | ⚠️ ("seit 2014") | ✅ ("120 abgeschlossene Projekte") | ✅ ("seit 1987, 4 Anwälte") | ⚠️ | ✅ ("15 Jahre Praxis") | ✅ ("seit 1962, 3 Generationen") | ✅ ("12 Kunden, 6 Monate") |
| Section (alternating-bg) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| MarqueeCTA | ⚠️ optional | ❌ | ❌ | ⚠️ optional | ❌ | ⚠️ optional | ⚠️ optional |
| EyebrowDisplayHero | ❌ ⚠️ portfolio-only, SEO restriction | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (agency-self IS the portfolio exception) |
| SplitText | ⚠️ optional | ❌ | ❌ | ⚠️ optional | ❌ | ⚠️ optional | ⚠️ optional |

**Required universal primitives (already in every scaffold):** Button · CookieBanner · Placeholder · Header · Footer.

#### Cross-references

- All rule docs listed above
- `docs/design/components/_impl/README.md` for component opt-in convention
- Each per-component spec sheet `docs/design/components/[component].md` §1 per-vertical applicability

#### Verification gate

- [ ] Every applicable row in the cross-reference matrix has a confirmed action (✅ done · ❌ N/A documented · ⚠️ conditional documented)
- [ ] Component opt-in list locked, recorded in per-demo `CLAUDE.md` "Imported components" table per `TECH.md` §20
- [ ] Per-demo `design.md` is complete (palette, typography, components, untranslated cues, archetype, sub-archetype)
- [ ] No rule doc is silently ignored — if skipped, the skip is explicit and rationale-documented

#### Rollback

If a rule doc surfaces a constraint phase 2 didn't account for (e.g., a beauty demo wants to use the inverted-h1 hero but `SEO.md` §15 forbids it for local-biz), return to phase 2 to revise the design.md before any scaffolding.

---

### Phase 5 — Build

**Goal:** Scaffold the project, populate it with the phase 1–4 deliverables, configure i18n routing, swap in the canonical schema, deploy to Vercel.

#### Deliverables

1. `clients/[demo-slug]/` — full scaffold copy with all phase 1–4 content populated
2. `pnpm validate` clean (0 lint warnings, 0 type errors, 0 build errors, translation parity pass)
3. `vercel --prod` deploy succeeds, URL captured

#### Step-by-step (Tier 2 — adapt for Tier 3 physio per `scaffolds/nextjs-tier3/README.md`)

```bash
# Step 1 — scaffold
cp -r scaffolds/astro-tier2 clients/[demo-slug]
cd clients/[demo-slug]
pnpm install
cp .env.example .env.local       # SENTRY_DSN stays empty

# Step 2 — per-client setup (root CLAUDE.md Step 3)
# 2a. Edit package.json "name" → [demo-slug]
# 2b. Rename src/lib/site.example.ts → site.ts, populate from BRIEF.md phase-2 data
# 2c. Override src/styles/tokens.css palette per templates/[vertical].md §6 sub-archetype
# 2d. Swap src/lib/seo/schema.ts with templates/[vertical].md §11.8 @graph block
# 2e. Copy canonical components from docs/design/components/_impl/ → src/components/ui/
# 2f. Generate favicon.ico + apple-touch-icon.png via rsvg-convert per TECH.md §8
# 2g. Replace public/og.jpg with the OG image from phase 3
# 2h. Add the DEMO/BEISPIEL ribbon component (per §1.8) at the top of BaseLayout.astro

# Step 3 — i18n routing setup
# Configure astro.config.ts i18n block per I18N.md §10 Tier-2 pattern:
#   defaultLocale: 'de', locales: ['de', 'en'], routing: { prefixDefaultLocale: false }
# Create src/i18n/config.ts (single source of truth)
# Create src/i18n/locales/de/common.json + pages.json from COPY-DE.md
# Create src/i18n/locales/en/common.json + pages.json from COPY-EN.md
# Create src/pages/de/ AND src/pages/en/ trees (mirror per Astro i18n routing)
# Add scripts/validate-translations.mjs from I18N.md §5
# Wire into package.json "validate" script

# Step 4 — Legal pages (DE jurisdiction)
# Create src/pages/impressum.astro and src/pages/datenschutz.astro
# Populate with generated DRAFT content per LEGAL.md §DE (eRecht24 or Anwalt.de generator)
# Mark all entries DRAFT in a banner — these are fictional businesses
# Both pages: explicit NOT noindex (legal pages must always be crawlable per LEGAL.md)
# But the site IS noindex — so legal pages are crawlable per the file robots.txt AND
# the meta tag — for a demo, the global Disallow: / wins; no SEO concern because nothing
# is meant to index. Document this in the demo's CLAUDE.md.

# Step 5 — Schema.org integration
# Verify src/lib/seo/schema.ts has the correct vertical-specific @type
# All 8 placeholders ([BUSINESS_NAME] etc.) replaced with demo data

# Step 6 — Validate locally
pnpm validate                       # must be 0/0/0 — lint, build, translation parity

# Step 7 — Vercel deploy
vercel --prod                       # capture URL → save to deploy-log in BRIEF.md
# Verify the deployed URL has:
#   - <meta name="robots" content="noindex, nofollow"> in <head>
#   - robots.txt returning "User-agent: *\nDisallow: /"
#   - DEMO ribbon visible at top of every page
```

#### Cross-references

- root `CLAUDE.md` Step 3 (full per-client setup checklist)
- `scaffolds/astro-tier2/README.md` (post-copy steps)
- `TECH.md` §7 tokens · §8 favicon recipe · §20 per-client CLAUDE.md
- `I18N.md` §10 Tier-2 Astro pattern · §5 validate-translations script
- `LEGAL.md` §DE Impressum + Datenschutzerklärung structures
- `templates/[vertical].md` §11.8 paste-ready schema

#### Verification gate

- [ ] `pnpm validate` returns 0 errors / 0 warnings
- [ ] Site builds with empty `.env` (env-var resilience gate per `CHECKLIST.md` §1.5)
- [ ] Translation parity passes (every key in `de/` exists in `en/`, no extras either direction)
- [ ] Deployed URL responds 200, serves correct DE at `/` and EN at `/en/`
- [ ] `<meta robots noindex>` present on every page (DE + EN)
- [ ] `public/robots.txt` returns `Disallow: /`
- [ ] DEMO/BEISPIEL ribbon visible on first scroll
- [ ] `/impressum` and `/datenschutz` return 200 in DE
- [ ] OG image accessible at `/og.jpg`
- [ ] Schema validates clean against Google Rich Results Test + Schema.org Validator

#### Rollback

If `pnpm validate` fails after phase 5 setup, fix-forward — don't try to roll back partial work. Use `git status` to see exactly which files are dirty, fix the validation failures one at a time. If a translation-parity failure surfaces, it usually means a key was added to DE but not EN (or vice versa) — fix in both files and re-run.

---

### Phase 6 — Validation layer

**Goal:** Confirm every applicable rule is satisfied on the deployed URL, capture visual evidence at three viewports for owner review, gate the demo as "done."

This phase is the master quality gate. Until every checkbox passes, the demo is in flight.

#### Deliverables

1. `clients/[demo-slug]/VISUAL-VALIDATION.md` — per §1.5 the combined capture-and-review + structured anti-pattern diff report. Template at §7.3 of this runbook.
2. `clients/[demo-slug]/screenshots/` — 6 PNGs per page (375 DE, 375 EN, 768 DE, 768 EN, 1280 DE, 1280 EN). For an eis-café with 4 pages (home, menü, besuchen, kontakt), that's 24 screenshots. Compress before commit (TinyPNG or equivalent).
3. Lighthouse reports (mobile + desktop) committed as `clients/[demo-slug]/lighthouse-{mobile,desktop}.json` for the home page minimum; nice-to-have for every page.
4. `CHECKLIST.md` walk-through marked up in `VISUAL-VALIDATION.md` — every applicable item green.

#### Visual validation via Docker MCP Playwright

Run from agency root after the Vercel deploy is live:

```bash
# Pseudocode — uses Docker MCP Playwright per docs/audit/RUNBOOK-real-browser-audit.md
# Capture each page at 3 viewports × 2 locales
# Save to clients/[demo-slug]/screenshots/
#   home-de-375.png · home-de-768.png · home-de-1280.png
#   home-en-375.png · home-en-768.png · home-en-1280.png
#   (repeat for each page)
```

Each screenshot is reviewed against:

1. **`DESIGN-BEST-PRACTICES.md` §15 AI-template tells** — anti-pattern walk. Each tell is green/red/N-A. Common tells to specifically check (this is a starter list; the spec sheet is the source):
   - Hero says "Welcome to [Business Name]" → red
   - Hero has card-soup 3-tile "Our Services / Our Story / Contact Us" → red
   - h1 is Inter / Roboto / Arial sans-serif → red (must be characterful display font)
   - Pure `#000` text on pure `#fff` background → red (warm off-whites only)
   - Stock photo of clinking wine glasses (or vertical equivalent) → red
   - `Schedule a consultation` / `Get started` SaaS CTA copy → red
   - Three identical 5-star review cards → red
   - No place-identity detail (no Bezirk reference anywhere) → red
   - Inverted-h1 (huge eyebrow, small h1) on a local-biz page → red per `SEO.md` §15
   - Map iframe with no fallback rendering blank → red
2. **`CHECKLIST.md` §2 Vertical-scoped gates** — the vertical-specific checks (e.g., gastronomy needs cream not pure white; trades needs trade-navy body text; etc.)
3. **`templates/[vertical].md` §Anti-patterns** — per-vertical-specific tells

#### Functional and rule-fidelity verification

| Check | Method | Pass criterion |
|---|---|---|
| `pnpm validate` clean | local | 0 / 0 / 0 |
| Schema.org valid | https://validator.schema.org + https://search.google.com/test/rich-results | 0 errors (warnings on optional fields OK) |
| Lighthouse mobile | Lighthouse CLI or PageSpeed Insights | Perf ≥ 90 · A11y ≥ 95 · BP ≥ 90 · SEO ≥ 95 |
| Lighthouse desktop | Same | Perf ≥ 95 · A11y ≥ 95 · BP ≥ 90 · SEO ≥ 95 |
| WCAG contrast | https://contrast-grid.eightshapes.com or `axe DevTools` | Every text/bg pair ≥ 4.5:1 (body) / ≥ 3:1 (large text + UI components) |
| Bilingual parity | every `/de/` route has a `/en/` sibling AND vice versa | Manual click-through of every nav item in both locales |
| `noindex` live | `curl -s [url] \| grep noindex` (and for every page) | Returns the `<meta robots>` tag on every URL |
| `robots.txt` | `curl [url]/robots.txt` | Returns `Disallow: /` |
| DEMO ribbon visible | screenshot review | Visible at top of every page in both locales |
| OG image renders | https://www.opengraph.xyz or Meta Sharing Debugger | Real photo, 1200×630, < 300 KB, no broken image |
| Sentry inert | DevTools Network tab on deployed URL | No outbound requests to `sentry.io` (DSN is empty → SDK no-ops) |
| Cookie banner functional | DevTools Application + Network | Banner appears, no third-party requests fire before Accept, Reject persists |
| No console errors | DevTools Console | Zero `Error:` or unhandled-rejection lines on any page in any locale |
| `/impressum` + `/datenschutz` reachable | `curl -I` | 200 OK in DE |

#### Cross-references

- `CHECKLIST.md` (entire) — adapted per "demo-deferrable" tag legend at the top
- `DESIGN-BEST-PRACTICES.md` §15 AI-template tells
- `SEO.md` §5 schema validation requirements · §15 anti-patterns
- `PERFORMANCE.md` budgets
- `ACCESSIBILITY.md` WCAG 2.2 AA
- `LEGAL.md` §DE legal-page-reachability
- `INTEGRATIONS.md` Sentry verification (DSN-empty → no events fire)
- `docs/audit/RUNBOOK-real-browser-audit.md` for the Docker MCP Playwright procedure

#### Verification gate

- [ ] All rows in the functional verification matrix green
- [ ] `VISUAL-VALIDATION.md` is filled out for every page × 3 viewports × 2 locales
- [ ] Zero red rows in the AI-template-tells anti-pattern walk
- [ ] Owner has reviewed `VISUAL-VALIDATION.md` and the screenshot set, has signed off in writing (Slack / email / inline comment)
- [ ] Deploy URL is documented in `BRIEF.md` §Deploy log with the captured Vercel URL

#### Rollback

If a Lighthouse score misses target by ≥ 5 points or a contrast pair fails, do NOT mark the demo done — return to phase 5 to fix. The agency's positioning is "we ship the rules in code." A demo that misses a measurable rule is a worse sales artifact than no demo.

---

## 4. Per-phase rule cross-reference summary table

For quick lookup. Each row says "at phase N, the following rule docs need attention."

| Phase | Primary rule docs | Companion docs |
|---|---|---|
| 1 — Research | `templates/[vertical].md` §Copy voice + §Anti-patterns | `DESIGN-BEST-PRACTICES.md` §15 · `I18N.md` §12 |
| 2 — Identity + Copy | `templates/[vertical].md` §Archetypes + §IA + §Hero patterns + §Copy voice + §Decision matrix · `DESIGN-BEST-PRACTICES.md` §15 + §17 · `I18N.md` §4 + §5 + §12 + §14 | `LEGAL.md` §DE · `KPI.md` (skip) · `TECH.md` §20 |
| 3 — Images | `PERFORMANCE.md` §5 + §8 · `SEO.md` §5 · `SOCIAL-SHARING.md` §OG image · `templates/[vertical].md` §Photography | `DESIGN-BEST-PRACTICES.md` §3 + §15 |
| 4 — Apply rules | All rule docs walked through per §3.4 matrix above | `docs/design/components/_impl/README.md` |
| 5 — Build | `TECH.md` §7 + §8 + §20 · `I18N.md` §10 + §5 · `LEGAL.md` §DE · `templates/[vertical].md` §11.8 schema · `INFRASTRUCTURE.md` · `QUALITY.md` | `scaffolds/[tier]/README.md` |
| 6 — Validation | `CHECKLIST.md` (entire, demo-adapted) · `DESIGN-BEST-PRACTICES.md` §15 · `SEO.md` §5 + §15 · `PERFORMANCE.md` budgets · `ACCESSIBILITY.md` WCAG 2.2 AA | `docs/audit/RUNBOOK-real-browser-audit.md` |

---

## 5. Per-demo file map

Every demo creates the same set of artifacts in the same places. Use this as the "did I create everything" cross-check at sign-off.

### In `docs/`

- `docs/audit/PORTFOLIO-BUILD-INSTANTIATION-YYYY-MM-DD-[vertical].md` — the instantiation doc (one per build)
- `docs/audit/[demo-slug]-RESEARCH.md` — phase 1 research log
- `docs/clients/[demo-slug]/CLAUDE.md` — per-client entry point (with DEMO banner)
- `docs/clients/[demo-slug]/BRIEF.md` — business identity, scope, open questions, deploy log
- `docs/clients/[demo-slug]/design.md` — palette, typography, components, archetype, untranslated cues
- `docs/clients/[demo-slug]/COPY-DE.md` — primary-locale copy
- `docs/clients/[demo-slug]/COPY-EN.md` — secondary-locale copy

### In `clients/`

- `clients/[demo-slug]/` — full scaffold copy with content populated
- `clients/[demo-slug]/CREDITS.md` — image attribution per §1.3
- `clients/[demo-slug]/VISUAL-VALIDATION.md` — phase 6 report
- `clients/[demo-slug]/screenshots/` — 3 viewport × 2 locale × N pages PNGs
- `clients/[demo-slug]/lighthouse-{mobile,desktop}.json` — Lighthouse reports

### In `docs/audit/PENDING.md`

Add a row per demo to the agency-level backlog. Move to "Recently resolved" on phase 6 sign-off.

---

## 6. Effort budget — per build (excluding per-vertical-specific surprises)

Rough estimates for an engineer who has built one demo using this runbook. The first build (gastronomy) is heavier because it's the runbook's first instantiation. Subsequent builds should converge toward the lower bound.

| Phase | First build (gastronomy) | Subsequent builds |
|---|---|---|
| 1 — Research | 60–90 min | 45–60 min |
| 2 — Identity + Copy | 120–180 min | 90–120 min |
| 3 — Images | 90–120 min | 60–90 min |
| 4 — Apply rules | 60–90 min | 30–45 min |
| 5 — Build | 180–240 min | 120–180 min |
| 6 — Validation | 90–120 min | 60–90 min |
| **Total** | **10–14 hours** | **6–10 hours** |

Variability factors:
- Verticals with strong free-license image availability (gastronomy, beauty, artisan) are faster in phase 3
- Verticals with form-heavy archetypes (lawyer, trades, physio) need extra time in phase 5 for `FORMS.md` setup
- Physio is Tier 3 (Next.js) and includes booking flow — add 4–6 hours over Tier 2 baseline
- Bilingual review without a native-German reviewer (every demo deploys without — see §1.7) adds risk of a phrasing miss surfaced at owner-review

---

## 7. Templates

### 7.1 `RESEARCH.md` template

```markdown
# [demo-slug]-RESEARCH.md
## Phase 1 research log — [vertical]

**Build:** [demo-slug] · **Date:** YYYY-MM-DD · **Researcher:** Claude · sm-website-seo

---

## Businesses surveyed

### 1. [Real business name]
- URL: [link]
- GBP: [link]
- Retrieval date: YYYY-MM-DD
- Profile (paragraph): …
- Voice / register patterns: …
- Anti-patterns to avoid: …
- Place-identity cues: …
- What's distinctive: …

### 2 … 5. (same shape)

---

## Synthesis

### Register conclusion
[Sie vs du for the vertical · sentence-length norms · untranslated cues seen across multiple businesses]

### Template alignment / contradiction
[How findings map onto `templates/[vertical].md` §Copy voice — confirmations and conflicts]

### Owner discussion points
[Anything that surfaces a question the owner needs to weigh in on before phase 2]

---

## Citations

| URL | Retrieval date |
|---|---|
| … | … |
```

### 7.2 BRIEF.md demo-adapter banner template

Top of every `docs/clients/[demo-slug]/BRIEF.md`:

```markdown
> **STATUS: PORTFOLIO DEMO**
>
> This brief documents a fictional business built by sm-website-seo as a cold-outreach
> demonstration artifact. The business identity, address, hours, and prices are all
> invented and clearly marked DRAFT. No KPI dashboard wires (per `KPI.md` — N/A for
> demos). No citation claims (per `CITATIONS.md` — N/A for demos). No real client
> approval gate (per `I18N.md` §14 — owner-only review). See
> `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md` for the canonical demo build runbook.
```

### 7.3 `VISUAL-VALIDATION.md` template

```markdown
# VISUAL-VALIDATION.md
## [demo-slug] · Phase 6 report

**Deploy URL:** [demo-[vertical].vercel.app]
**Validation date:** YYYY-MM-DD
**Validator:** Claude · sm-website-seo

---

## Functional verification

| Check | Pass criterion | Status | Evidence |
|---|---|---|---|
| `pnpm validate` | 0 / 0 / 0 | ✅ | CI run [link] |
| Schema.org validator | 0 errors | ✅ | Screenshot |
| Lighthouse mobile | Perf ≥ 90 · A11y ≥ 95 · BP ≥ 90 · SEO ≥ 95 | ✅ | `lighthouse-mobile.json` |
| Lighthouse desktop | Perf ≥ 95 · A11y ≥ 95 · BP ≥ 90 · SEO ≥ 95 | ✅ | `lighthouse-desktop.json` |
| WCAG contrast | All pairs pass | ✅ | axe report |
| Bilingual parity | every /de/ has /en/ | ✅ | Manual nav-clicked |
| `noindex` live | meta tag on every page | ✅ | curl verification |
| `robots.txt` | `Disallow: /` | ✅ | curl verification |
| DEMO ribbon | visible on every page in both locales | ✅ | Screenshot evidence |
| OG image | real photo, 1200×630, < 300 KB | ✅ | Meta Sharing Debugger |
| Sentry inert | no outbound to sentry.io | ✅ | DevTools Network |
| Cookie banner | functional, no early requests | ✅ | DevTools |
| No console errors | 0 errors all pages | ✅ | DevTools Console |
| /impressum + /datenschutz | both 200 in DE | ✅ | curl |

---

## AI-template-tell anti-pattern walk

Per `DESIGN-BEST-PRACTICES.md` §15. Each tell: 🟢 not present · 🔴 present (must fix) · ⚪ not applicable.

| Tell | Status | Note |
|---|---|---|
| "Welcome to [Business]" hero | 🟢 | Hero copy: … |
| Card-soup 3-tile services | 🟢 | … |
| h1 in default sans-serif | 🟢 | Fraunces variable |
| Pure `#000` on `#fff` | 🟢 | warm cream bg #f7f0e5, near-black text #1f1a14 |
| Stock food on white isolation (gastronomy) | 🟢 | All gelato photos contextual |
| "Schedule a consultation" SaaS CTA | 🟢 | CTAs are "RESERVIEREN" / "RESERVE" |
| Card-soup 5-star review block | 🟢 | One pull-quote, attributed |
| No place-identity detail | 🟢 | U2 / Eberswalder Straße referenced + Bezirk in tagline |
| Inverted-h1 (eyebrow > h1) | 🟢 | h1 is largest text on hero |
| Map iframe blank fallback | 🟢 | Static map image + "in Google Maps öffnen" link |
| (per-vertical tells from `templates/[vertical].md` §Anti-patterns) | 🟢 | (enumerate) |

---

## Vertical-scoped gates

Per `CHECKLIST.md` §2 vertical-scoped gates.

| Gate | Status |
|---|---|
| Cream background (gastronomy / beauty / artisan) | ✅ |
| Half-pill sticky-edge CTA (gastronomy / beauty / health / studio) | ✅ |
| Hours surfaced in nav (gastronomy / beauty / health) | ✅ |
| (per-vertical, see CHECKLIST.md §2) | … |

---

## Screenshots

| Page | DE 375 | DE 768 | DE 1280 | EN 375 | EN 768 | EN 1280 |
|---|---|---|---|---|---|---|
| home | [link] | [link] | [link] | [link] | [link] | [link] |
| menü | [link] | [link] | [link] | [link] | [link] | [link] |
| (each page) | … | … | … | … | … | … |

---

## Owner sign-off

- [ ] Owner has reviewed all screenshots
- [ ] Owner has reviewed AI-template-tell walk
- [ ] Owner accepts the demo as production-quality
- Owner signature: ___________ Date: ___________
```

---

## 8. Done means

- Vercel URL serves the demo at `demo-[vertical].vercel.app` with `noindex` + `Disallow: /` + DEMO ribbon
- `VISUAL-VALIDATION.md` is signed off by the owner
- Backlog row moved to "Recently resolved" in `docs/audit/PENDING.md`

Move to the next vertical only after the previous demo's `VISUAL-VALIDATION.md` is signed.

---

*Build the demo. Validate the rules. Repeat seven times.*