# Service-area display

**Source:** Research-driven (2026-05-23). Critical for trades + mobile services. Doubles as Local-SEO signal.
**Implementation:** `docs/design/components/_impl/ServiceArea.astro`.

## 1. Purpose + when to use

Displays the geographic area a business serves. Critical for:
- Trades that travel to clients (electrician, plumber, painter)
- Mobile services (mobile groomer, in-home physio, mobile mechanic, in-home tutor)
- Health home-care services
- Catering / event services

**Triple purpose:**
1. **Customer expectation setting** — "do you serve my postcode?"
2. **Local-SEO signal** — crawlable text listing all served postcodes feeds Google's geo-relevance signal
3. **Schema.org `areaServed`** — feeds Knowledge Graph + AI extraction

## 2. Variants

| Variant | Visual | Use when |
|---|---|---|
| `'postcode-grid'` (default) | Categories with postcode grid | Many postcodes (10+ per region) |
| `'list'` | Vertical list, region name + comma-separated postcodes | Fewer postcodes per region (3-8) |
| `'inline-pills'` | Pills row, all postcodes | Quick scannable reference (~10-20 total) |

## 3. Props

- `regions: { name, postcodes[], feeNote? }[]` (required)
- `eyebrow?` / `heading?` / `intro?`
- `variant?` (default `'postcode-grid'`)
- `footnote?` — fee disclaimers, exceptions
- `emitSchema?: boolean` (default `true`) — generates `Service.areaServed` JSON-LD
- `serviceName?: string` — name for the Service in schema

## 4. Content guidelines

- Group by district / suburb / city (not by random alphabetical)
- Include travel-fee notes per region where applicable ("Innenstadt: kostenlos · Außenring: +€10 Anfahrtspauschale")
- Footnote: "outside this area on request" if you genuinely accept exceptional jobs
- Berlin-specific: use Bezirk names (Mitte, Kreuzberg, Prenzlauer Berg) + the canonical 5-digit postcodes

## 5. Pairs with

- `MapEmbed.astro` — useful to embed a small map alongside (or polygon overlay if vendor supports it)
- LocalBusiness schema — extend with `areaServed` array (the component emits a separate `Service` graph; merge into existing if necessary)

## 6. Anti-patterns

- Listing only "Berlin" — defeats the Local-SEO purpose
- Vague "and surrounding areas" — be specific
- More than 50 postcodes (split into a separate `/anfahrt` or `/service-area` page)
- Stale postcodes (review every 6 months as service area evolves)
