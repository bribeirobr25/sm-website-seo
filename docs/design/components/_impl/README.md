# docs/design/components/_impl/

**Working code that backs each component spec sheet.** Each `.astro` / `.tsx` file in this directory is the canonical reference implementation for one of the 8 components in the agency's UI/UX library.

## Convention

| File pattern | Purpose |
|---|---|
| `*.astro` | Tier 2 (Astro) implementation — primary form for most components |
| `*.tsx` | Tier 3 (Next.js / React) variant where applicable (CookieBanner, Button, Placeholder, ShareButton, ConsentBootstrap) |
| `_demo/*.astro` | 9 internal demo pages — render each component in solo-barber's dark+amber identity for visual review |

**Not built.** This directory is not part of any Astro/Next project's build. It's a paste-ready paste-target. When a new client scaffolds, the developer copies the components they need (per the component's spec sheet §1 per-vertical applicability) into the client's `src/components/`.

The leading underscore prefix `_impl/` follows the same convention as `_demo/`: signals "support directory, not the primary content."

## How to use

1. Open the matching spec sheet (`../[component-name].md`) — confirm per-vertical applicability, WCAG requirements, required tokens
2. Copy the implementation from this directory into your client at the appropriate path (`src/components/ui/` for Astro, `src/components/ui/` for Next.js — see each spec sheet §8 Implementation pointer)
3. Override the visual-identity comment block at the top of each file with the client's palette mapping
4. Record the import in the client's `docs/clients/[slug]/CLAUDE.md` "Imported components" table per `TECH.md` §20

## Component index — 8 canonical + 5 universal primitives

### 8 agency-canonical components

| Component | Astro | React (Tier 3) | Spec |
|---|---|---|---|
| Half-pill CTA | `HalfPillCTA.astro` | — | `../half-pill-cta.md` |
| LABEL(N) header | `LabelCountHeader.astro` | — | `../label-count-header.md` |
| Hours-in-nav | `HoursInNav.astro` | — | `../hours-in-nav.md` |
| Stat callouts | `StatCallouts.astro` | — | `../stat-callouts.md` |
| Alternating section bg | `Section.astro` | — | `../alternating-section-bg.md` |
| Marquee CTA | `MarqueeCTA.astro` | — | `../marquee-cta.md` |
| Eyebrow display hero ⚠ | `EyebrowDisplayHero.astro` | — | `../eyebrow-display-hero.md` |
| SplitText | `SplitText.astro` | — | `../per-character-split.md` |

### 5 universal primitives (no individual spec sheet — they are the agency baseline)

| Primitive | Astro | React | Notes |
|---|---|---|---|
| Button | `Button.astro` | `Button.tsx` | Variants: primary / secondary / ghost. Darken-on-hover only (WCAG). |
| CookieBanner | `CookieBanner.astro` | `CookieBanner.tsx` | Consent-first, "Reject all" parity per `LEGAL.md` §Cookie consent banner |
| ConsentBootstrap | — | `ConsentBootstrap.tsx` | Tier 3 only — PostHog mount + consent re-apply on page reloads |
| Placeholder | `Placeholder.astro` | `Placeholder.tsx` | DRAFT-tagged slot for real photos at scaffold time |
| ShareButton | `ShareButton.astro` | `ShareButton.tsx` | WhatsApp / Facebook / X / IG / Copy-link per `SOCIAL-SHARING.md` |

## History

These components were extracted from `clients/reference-solo-barber/` and `clients/reference-studio-booking/` on 2026-05-19 per `docs/audit/the 2026-05-19 restructure` Phase 1. The reference impls were deleted in Phase 6 of the same plan; the working code lives here permanently as the agency-canonical source.

## Drift prevention

Per the 2026-05-19 restructure §7 R4: each `_impl/` file should remain byte-aligned with the values measured in its spec sheet §3 CSS spec. Quarterly drift check in PENDING.md (calendar trigger 2026-08-19) — copy each file into `scaffolds/astro-tier2/src/components/` temporary tree + `pnpm build` to confirm compilation; revert.
