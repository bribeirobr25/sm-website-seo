> **Status:** Archived 2026-05-19 (post-execution). This brief was the handoff brief from Phase 3a → Phase 3b of `UI-UX-INTEGRATION-PLAN-2026-05-18.md`. Phase 3b shipped 8 components to `clients/reference-solo-barber/src/components/` per the plan. Subsequently `CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md` Phase 1 relocated all 8 components to `docs/design/components/_impl/` and Phase 6 deleted `clients/reference-solo-barber/`. References to `clients/reference-solo-barber/` in THIS doc are historically accurate — they describe the original Phase 3b execution context. Current canonical paths: `docs/design/components/_impl/`. Read-only — do not edit.

# Phase 3b prep — Astro implementation roadmap

**Created:** 2026-05-19 as the handoff brief from Phase 3a (spec sheets done) to Phase 3b (working Astro components).

**For the next session:** this doc captures everything you need to start scaffolding the 8 components into `clients/reference-solo-barber/` without re-reading all 8 specs from scratch. Each spec sheet is the source of truth for its component; this doc is the *plan* for shipping them.

**Estimated effort for Phase 3b:** ~10-14 hrs.

---

## 1. Architectural decision recap (locked in per audit Issue 1)

**All 8 components land in `clients/reference-solo-barber/`** — no new reference client scaffold. The audit (`UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md` Issue 1) showed that creating `clients/reference-gastronomy-cafe/` would split the canonical Tier-2 scaffold. The components are the value; the scaffold is just a container. Visual-identity mismatches are handled per-component via inline-comment token swaps.

**Existing structure to extend** (verified 2026-05-19):

```
clients/reference-solo-barber/src/components/
├── layout/      ← extend with: Section.astro (alternating-bg variant), HoursInNav.astro
├── sections/    ← extend with: LabelCountHeader.astro, StatCallouts.astro, EyebrowDisplayHero.astro
└── ui/          ← extend with: HalfPillCTA.astro, MarqueeCTA.astro, SplitText.astro
```

Existing `tokens.css` to extend at `clients/reference-solo-barber/src/styles/tokens.css`. The file already uses `@theme {}` (Tailwind v4) — additions go inside the same block.

---

## 2. Tokens to add to `tokens.css` before scaffolding components

These are the **net-new tokens** the 8 components require. Reuse existing tokens (`--color-bg`, `--color-text`, `--color-accent`, `--color-accent-deep`, `--radius-full`, `--radius-md`) where possible per audit Issue 2.

```css
@theme {
  /* Motion — measured in Phase 1b across 5 sites */
  --motion-fast:        180ms;   /* button color hover, tech register */
  --motion-base:        320ms;   /* Apple house unit — nav, default scroll-reveal */
  --motion-warm:        500ms;   /* hospitality / artisan / wellness */
  --motion-deliberate:  600ms;   /* luxury / institutional */
  --motion-reveal:      800ms;   /* one-time hero entries */

  --ease-apple-smooth:  cubic-bezier(0.4, 0, 0.6, 1);
  --ease-quart:         cubic-bezier(0.7, 0, 0.3, 1);
  --ease-expo-out:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-luxe:          cubic-bezier(0.25, 0.74, 0.22, 0.99);

  --stagger-step:       20ms;

  /* Tracking */
  --tracking-display-sans:        -0.022em;
  --tracking-display-serif-caps:  0.025em;
  --tracking-body:                -0.005em;

  /* New radius variant — half-pill (the existing --radius-full already covers premium pill) */
  --radius-pill-half:  30px 0 0 30px;

  /* Optional palette extensions — only needed when demoing components in non-barber identity */
  --color-bg-cream:        #FBF8F3;
  --color-bg-charcoal:     #1D1D1D;
  --color-text-warm:       #2B1A12;
  --color-bg-alt:          #f5f5f7;   /* for alternating-section-bg's apple-light demo */
}
```

**First commit of Phase 3b should be ONLY this token block, no components.** That isolates the design-system change from the implementation noise.

---

## 3. Implementation order (priority + dependency)

| Order | Component | File path | Spec | Effort | Why this order |
|---|---|---|---|---|---|
| 1 | Half-pill CTA | `src/components/ui/HalfPillCTA.astro` | `half-pill-cta.md` | ~45 min | Highest agency-applicability (gastronomy + beauty + health + studio reservation flows). No dependencies. |
| 2 | LABEL(N) header | `src/components/sections/LabelCountHeader.astro` | `label-count-header.md` | ~30 min | Simple, no JS, used in 6+ verticals. No dependencies. |
| 3 | Hours-in-nav | `src/components/layout/HoursInNav.astro` | `hours-in-nav.md` | ~45 min | Pairs with HalfPillCTA in the gastronomy hero. No dependencies. |
| 4 | Stat callouts | `src/components/sections/StatCallouts.astro` | `stat-callouts.md` | ~45 min | Trades + professional-services. Simple grid + numbers. No dependencies. |
| 5 | Alternating section bg | `src/components/layout/Section.astro` (extend existing) | `alternating-section-bg.md` | ~30 min | One prop addition to an existing primitive. No dependencies. |
| 6 | Marquee CTA | `src/components/ui/MarqueeCTA.astro` | `marquee-cta.md` | ~1 hr | Most complex CSS — 3 layered transitions, `prefers-reduced-motion` handling. No dependencies. |
| 7 | Eyebrow + display hero | `src/components/sections/EyebrowDisplayHero.astro` | `eyebrow-display-hero.md` | ~45 min | Includes SEO-restriction build-time warning logic. No dependencies. |
| 8 | SplitText (per-character) | `src/components/ui/SplitText.astro` | `per-character-split.md` | ~1.5 hrs | Splits string into spans + sets `will-change` + `aria-label`. Optionally includes IntersectionObserver for stagger. **Most complex** — save for last; tests in isolation. |

**Cumulative effort:** ~6 hrs for the 8 components themselves.

---

## 4. Companion `_demo/` pages

Each component gets a paired `_demo/<component>.astro` page that renders it with notes for the reviewer. These demo pages also serve as the developer's local visual test surface.

Recommended convention:

```
clients/reference-solo-barber/src/pages/_demo/
├── index.astro                  ← list all 8 demos with links
├── half-pill-cta.astro
├── label-count-header.astro
├── hours-in-nav.astro
├── stat-callouts.astro
├── alternating-section-bg.astro
├── marquee-cta.astro
├── eyebrow-display-hero.astro
└── split-text.astro
```

**Why `_demo` not `demo`:** the leading underscore signals "internal — never linked from production." `robots.txt` should also `Disallow: /_demo/` for additional safety. Add to `astro.config.mjs` build exclusion if Astro's static build picks them up by default.

**Effort per demo page:** ~30 min. Total: ~4 hrs.

---

## 5. Per-vertical visual-identity comments

The components ship in solo-barber's dark+amber identity (`--color-bg: #1a1612`, `--color-accent: #d4894a`). Per the audit Issue 1 resolution, each `.astro` file should include a comment block at the top mapping the visual identity to other verticals:

```astro
---
// Half-pill sticky-edge CTA
// Spec: docs/design/components/half-pill-cta.md
//
// Visual identity (this scaffold): dark + amber
//   --color-accent: #d4894a  (Jean Souza Barber)
//   text: #f5f0e8 (cream) on amber → 4.87:1 AA ✓
//
// Per-vertical token swaps:
//   gastronomy (Haven-style):  --color-accent: #C1643B  (terracotta) on cream bg
//   beauty (peach):            --color-accent: #FFBC95  on cream bg — fails AA white-text; use dark text
//   trades (navy):             --color-accent: #042940  with white text → 14:1 AAA
//   health:                    --color-accent: <client brand> — verify contrast per CHECKLIST.md
---
```

This makes it explicit to the next dev which identity is the demo's vs. the per-client adaptation.

---

## 6. Decisions already made (don't re-litigate)

| Decision | Where it was made |
|---|---|
| All 8 components land in `reference-solo-barber`, no new scaffold | Audit Issue 1 → Plan amendment 2026-05-18 |
| Tokens use `--color-*`, `--radius-*`, `--motion-*` naming (NOT `--bg-cream`, `--radius-pill`) | Audit Issue 2 → Plan amendment 2026-05-18 |
| Tokens added inside Tailwind v4 `@theme {}` block — no `tailwind.config.ts` | TECH.md §7.3 |
| Reuse `--radius-full` (= 9999px) for premium pills; do not introduce `--radius-pill` | Audit Issue 2 |
| Ambient video (if used) requires the 5 PERFORMANCE.md §8 constraints — no exceptions | Audit Issue 4 |
| Inverted h1 (eyebrow hero) forbidden for local-business clients | Audit Issue 5 + `DESIGN-BEST-PRACTICES.md` §4 |

---

## 7. Verification gates per component

Before marking each component "done" in Phase 3b:

- [ ] `.astro` file compiles cleanly (`pnpm build` in `reference-solo-barber` succeeds)
- [ ] `_demo/<component>.astro` renders without console errors
- [ ] Required CSS custom properties documented in the spec sheet §4 are *all* present in `tokens.css`
- [ ] WCAG cross-reference from the spec sheet §2 verified — at minimum, `aria-label` where required, focus ring visible, contrast ≥ 4.5:1 body / 3:1 large
- [ ] `prefers-reduced-motion: reduce` produces a graceful static state (for animated components: MarqueeCTA, SplitText, AlternatingSection if it adds entry animations)
- [ ] Pattern survives 375 × 812 mobile viewport (visual check in DevTools)
- [ ] Inline visual-identity comment present (per §5 above)

A component that fails any gate is not done. Update the spec sheet if reality differs from what the spec assumed.

---

## 8. After Phase 3b — what's left

Once all 8 components ship, Phase 4 closes out the plan:

- [ ] `docs/audit/PENDING.md` entries: (a) 6-month audit refresh dated 2026-11-18, (b) Phase 1d follow-on trigger
- [ ] `TECH.md` §20 update: add "Imported components" field to the BRIEF.md template (Gap D from audit)
- [ ] `RUNBOOK-real-browser-audit.md` is already done (written 2026-05-19 during Phase 1c — no further work needed)

Estimated Phase 4 effort: ~2 hrs.

---

*This doc is the next-session pickup point. Open this file first when starting Phase 3b.*
