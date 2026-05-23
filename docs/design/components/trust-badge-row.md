# Trust-badge row

**Source:** Research-driven (2026-05-23). Universal trust-signal convention across SMB landing pages.
**Implementation:** `docs/design/components/_impl/TrustBadgeRow.astro`.

## 1. Purpose + when to use

Compact strip of accreditation / insurance / award / brand-partner logos. Greyscale at rest, color on hover. Universal trust signal.

**Distinct from:**
- `Press.astro` — Press is critic-quote+rating rich attribution; TrustBadgeRow is logo strip
- `TeamGrid.astro` — TeamGrid is people; TrustBadgeRow is organizations

**Per-vertical content:**

| Vertical | Typical badges |
|---|---|
| Trades — Handwerker | Innung, Handwerkskammer (HWK), Meisterbetrieb, IHK, insurer (Haftpflicht) |
| Health — clinic, dental | Board certifications, KZV/KV (Germany), insurance affiliations, specialty associations |
| Beauty — salon | L'Oréal Color Specialist, Wella Master Color, Olaplex, brand partners |
| Gastronomy — fine-dining | Press logos (Tagesspiegel, Berliner Morgenpost), Bib Gourmand, Slow Food |
| Education | Certifications (Cambridge English, Goethe Institut, IB World) |
| Automotive | TÜV, ATU partner, manufacturer-authorized (BMW, VW), insurer |
| Pets — vet, grooming | Tierärztekammer, certifying bodies, breed-association partnerships |
| Professional services | Bar association, RIBA, ICAEW, certifications |

## 2. Props

- `badges: { src, alt, href?, caption? }[]` (required) — 3-8 ideal
- `eyebrow?` / `heading?`
- `maxHeight?: number` (default `40` px) — uniform scale
- `variant?: 'greyscale' | 'color'` (default `'greyscale'`)
- `layout?: 'wrap' | 'scroll'` (default `'wrap'`)

## 3. Asset guidelines

- **SVG strongly preferred** for greyscale uniformity (CSS `filter: grayscale(1)` works perfectly)
- Logos must be at least 80px wide source-resolution
- Background: prefer logos with transparent bg (no white box around)
- Use the organization's official logo per their brand guidelines
- For greyscale variant: convert color to greyscale via CSS, not pre-baked greyscale assets (lets color-on-hover work)

## 4. Linkage

- Each badge should link to verifiable source (Innung directory entry, certification page, brand partner page) where possible
- `rel="noopener noreferrer"` on external links
- `target="_blank"` — opening certifications in same tab loses the visitor

## 5. Anti-patterns

- Generic stock-photo "trust" icons (badges, shields) — reads as scam
- More than 8 badges (becomes noise — pick the 4-6 strongest)
- Badges client doesn't actually have (legal liability + Google policy)
- Wrong sizes — mismatched heights destroy the row's tidiness; the `maxHeight` prop enforces uniformity

## 6. Performance

- All logos `loading="lazy"` (typically below the fold)
- SVG logos: ~1-3 KB each
- Total weight: ~20 KB for a 6-badge row
