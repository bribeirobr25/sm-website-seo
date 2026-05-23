# Map embed (privacy-respecting)

**Source:** [drakkar.one embed map without Google](https://drakkar.one/blog/embed-map-without-google/) · [devowl GDPR-compliant Maps](https://devowl.io/gdpr-compliant/google-maps/). Added 2026-05-23.
**Implementation:** `docs/design/components/_impl/MapEmbed.astro`.

## 1. Purpose + when to use

Display location on a map. **Three provider variants:**

1. **`openstreetmap`** (default, recommended) — OpenStreetMap's free embed. EU servers, no consent prompt strictly required. Quality acceptable for most SMB clients.
2. **`maptiler`** — Better-quality tiles, requires API key (free tier generous, EU region). Self-hosted iframe = no third-party-cookie issue.
3. **`google`** — Best quality + Google Maps integration. **Requires ConsentGate wrapper** per DSGVO. Component throws a placeholder notice if used standalone.

**Per-vertical:** every brick-and-mortar client needs a map. Gastronomy, beauty, health, trades, retail — all 12 verticals when there's a physical location.

## 2. Props

- `lat: number` (required)
- `lng: number` (required)
- `zoom?: number` (default `15`)
- `markerLabel?: string` — caption + external link to OSM
- `title: string` (required) — iframe a11y
- `provider?: 'openstreetmap' | 'maptiler' | 'google'` (default `'openstreetmap'`)
- `maptilerKey?: string` — required if `provider='maptiler'`
- `googleEmbedUrl?: string` — required if `provider='google'`
- `aspect?: string` (default `'16/9'`)
- `height?: string` — override aspect with fixed height

## 3. Recommendation by client tier

| Client tier | Recommended provider |
|---|---|
| Type 1 static info | `openstreetmap` (free, zero consent) |
| Type 2 contact form | `openstreetmap` or `maptiler` |
| Type 3 booking | `maptiler` or `google` (with ConsentGate) |
| Type 4/5 transactional | `google` + ConsentGate (best UX) |

## 4. DSGVO note

- OpenStreetMap embed: hosted at `openstreetmap.org` (EU). No cookies set, no DPA required.
- MapTiler: pick the EU region in the API key config. No third-party cookies if you proxy through your own iframe.
- Google Maps: full DSGVO consent required (BGH Cookie Ruling 2020). Always wrap in `ConsentGate`.

## 5. Pairs with

- `ConsentGate.astro` — wrap for Google variant
- `lib/seo/schema.ts` — should already emit `geo` coordinates in the LocalBusiness graph

## 6. Performance

- Iframe `loading="lazy"` (component default)
- Reserved aspect-ratio prevents CLS
- No JS for OSM / MapTiler variants
