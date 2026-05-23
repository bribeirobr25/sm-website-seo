# Pricing / services table

**Source:** Research-driven (2026-05-23). "Hidden pricing kills bookings in beauty + health" — observed across salon/clinic teardowns.
**Implementation:** `docs/design/components/_impl/PricingTable.astro`.

## 1. Purpose + when to use

A services or treatments list with prices. Categorized rows: name + optional description + price + optional duration + optional CTA per row.

**This is NOT a 3-card "Basic / Pro / Enterprise" SaaS pricing layout.** That pattern (PricingTiers) is not built — SMB clients rarely need it.

**Per-vertical surfaces:**

| Vertical | Use | Note |
|---|---|---|
| Beauty — salon | ✅ Critical | Hidden pricing kills bookings |
| Health — clinic, dental | ✅ Recommended | Show base prices, "ab €X" / "from €X" for variable |
| Trades | ✅ Recommended | Callout fees, hourly rates, fixed-price packages |
| Gastronomy — fine-dining | ✅ Recommended | Tasting menu + wine pairing pricing |
| Gastronomy — casual | ❌ Skip (menu cards already include prices) | — |
| Studio — fitness, yoga, dance | ✅ Recommended | Class pass / membership pricing |
| Education — tutoring | ✅ Recommended | Per-hour, package, group pricing |
| Pets — grooming, vet | ✅ Recommended | Per-breed / per-service pricing |

## 2. Props

- `categories: PricingCategory[]` (required) — each `{ label, intro?, items[] }`
- `items[]`: `{ name, description?, price, duration?, ctaHref?, ctaLabel?, badge? }`
- `heading?` / `eyebrow?` / `intro?`
- `footnote?` — disclaimers ("Preise inkl. MwSt", "Cancellation up to 24h before")
- `showDuration?: boolean` (default `true`)

## 3. Content guidelines

- Use real prices — "Auf Anfrage / On request" is acceptable for highly variable services, but reads weaker than "ab €X"
- Group into logical categories (≤6 categories ideal)
- Each row: 1-line description max (longer = move to a detail page)
- Badge sparingly — "Beliebt" / "Neu" on max 1-2 rows per category
- Footnote MUST disclose VAT inclusion + cancellation policy if applicable

## 4. Anti-patterns

- "Call for pricing" on every row (kills conversion — show base prices)
- More than 30 rows total (split into sub-pages by service area)
- Mixing currency / units inconsistently
- Promising "from €" prices that don't reflect typical bookings (set realistic expectations)

## 5. Schema notes

- Optional: emit `Offer` schema for each priced item (extends LocalBusiness `makesOffer`)
- For services with bookable URLs (Treatwell, Doctolib slot deep-links): use `Offer` + `priceSpecification`
