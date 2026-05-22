# Component spec sheets

**Created:** 2026-05-19 from the agency's 24-site UI/UX reference study (see `docs/audit/ui-ux-reference-study.md`).

**Source measurements:** `docs/audit/ui-ux-reference-study.md` (24 sites, live runtime data at 1440 × 900 + mobile re-audit at 375 for the 8 most-relevant + animation specs for 5).

## What's in here

This folder is the agency's **canonical reference for reusable UI components** derived from measured patterns in the 24-site UI/UX study. Each spec sheet is the *source of truth* for a single component:

- **Purpose** + when to use, with per-vertical surface mapping
- **HTML / a11y structure** with explicit `ACCESSIBILITY.md` cross-reference
- **CSS spec** (computed values from the source study)
- **Required CSS custom properties** + minimal standalone CSS snippet (makes the component scaffold-portable)
- **Performance constraints** (mandatory for media-heavy components)
- **Reference sites** with study §N anchors
- **Bidirectional UI_REVIEW.md cross-link**
- **Implementation pointer** to the working Astro / React file in `docs/design/components/_impl/`

## Component index

| # | Component | File | Primary vertical surface | Reference site(s) |
|---|---|---|---|---|
| 1 | Half-pill sticky-edge CTA | `half-pill-cta.md` | gastronomy · beauty · health · studio (booking/reservation flows) | Haven Annecy §15 |
| 2 | `LABEL (N)` monospace section header | `label-count-header.md` | every vertical with curated catalog (menus, services, portfolio, products) | Mily §9, T11 §19 |
| 3 | Hours-in-nav | `hours-in-nav.md` | gastronomy · beauty · health (any client with regular hours) | Haven Annecy §15 |
| 4 | Marquee-on-hover CTA | `marquee-cta.md` | boutique · artisan · beauty · wellness | Auwa §6 |
| 5 | Eyebrow-h1 + display-paragraph hero | `eyebrow-display-hero.md` | **portfolio / agency-self only** — NOT local-business clients (SEO restriction per `SEO.md` §15) | Auwa §6, Lesse §16, Juan Mora §18 |
| 6 | Big-number stat callouts | `stat-callouts.md` | trades · professional-services · agency-self | Horeca-Social §10 |
| 7 | Alternating-section-background rhythm | `alternating-section-bg.md` | any long-form landing (>5 sections) | Apple iPhone §1 |
| 8 | Per-character DOM split (letter animation) | `per-character-split.md` | solo / artisan portfolio · agency-self | Really Up There §7, Victor Furuya §21 |
| 9 | Full-bleed hero with overlay typography | `full-bleed-hero.md` | gastronomy (Heritage / Specialty) · beauty boutique · trades industrial-craft | Espressohouse · The Barn · Watch House (half-bleed variant) |
| 10 | Menu card with photography | `menu-card.md` | gastronomy ≥6-item categories · beauty services menu · pets product catalog | The Barn · Watch House · Espressohouse |

## Status

| # | Spec sheet | Status | Phase 3b impl |
|---|---|---|---|
| 1 | `half-pill-cta.md` | ✅ Drafted 2026-05-19 | ✅ `ui/HalfPillCTA.astro` 2026-05-19 |
| 2 | `label-count-header.md` | ✅ Drafted 2026-05-19 | ✅ `sections/LabelCountHeader.astro` 2026-05-19 |
| 3 | `hours-in-nav.md` | ✅ Drafted 2026-05-19 | ✅ `layout/HoursInNav.astro` 2026-05-19 |
| 4 | `marquee-cta.md` | ✅ Drafted 2026-05-19 | ✅ `ui/MarqueeCTA.astro` 2026-05-19 |
| 5 | `eyebrow-display-hero.md` | ✅ Drafted 2026-05-19 | ✅ `sections/EyebrowDisplayHero.astro` 2026-05-19 |
| 6 | `stat-callouts.md` | ✅ Drafted 2026-05-19 | ✅ `sections/StatCallouts.astro` 2026-05-19 |
| 7 | `alternating-section-bg.md` | ✅ Drafted 2026-05-19 | ✅ `layout/Section.astro` 2026-05-19 |
| 8 | `per-character-split.md` | ✅ Drafted 2026-05-19 | ✅ `ui/SplitText.astro` 2026-05-19 |

**All 8 spec sheets + all 8 component implementations are complete.** Components live at `docs/design/components/_impl/`; companion demo pages at `docs/design/components/_impl/_demo/` retain the visual-test surface. Per-client docs of the prior reference impls (the original homes of these components before the 2026-05-19 restructure relocated them here) are archived at `docs/clients/archived/reference-{solo-barber,studio-booking}/`.

## How to use these specs (for client builds)

1. **Pick the component** for the client's vertical from the index above.
2. **Read its spec sheet** — confirm the per-vertical surface fit and the WCAG requirements.
3. **Check the implementation pointer** — the working `.astro` / `.tsx` file in `docs/design/components/_impl/` is ready to copy into `clients/[slug]/src/components/`.
4. **Verify required tokens** — the spec's §"Required CSS custom properties" section lists the tokens the component consumes. Confirm the client's `tokens.css` defines them (or add them per `TECH.md` §7).
5. **Adapt visual identity** — components ship in `reference-solo-barber`'s dark+amber identity. Per-vertical token swaps (cream + terracotta for gastronomy, cream + peach for beauty, navy for trades) are documented inline in each component.

## Bidirectional use in `UI_REVIEW.md` audits

When auditing a client's existing site (in the style of `docs/design/UI_REVIEW.md`), reference these specs by file path. Example: *"Issue #3 — sticky CTA missing: adopt the half-pill sticky-edge CTA per `docs/design/components/half-pill-cta.md`."* Audit findings then point developers directly to the canonical implementation.
