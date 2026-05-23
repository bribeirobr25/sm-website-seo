# Consent gate (privacy-respecting iframe wrapper)

**Source:** [devowl GDPR-compliant embeds](https://devowl.io/gdpr-compliant/google-maps/) · [drakkar.one map embed without Google](https://drakkar.one/blog/embed-map-without-google/). Added 2026-05-23 as the foundation for Map/Video/Instagram embeds.
**Implementation:** `docs/design/components/_impl/ConsentGate.astro`.

## 1. Purpose + when to use

DSGVO / RGPD / LGPD non-negotiable wrapper for any third-party iframe that sets cookies / processes IP addresses on load (Google Maps, YouTube/Vimeo, Instagram embed, Calendly, OpenTable widget, etc.).

Renders a placeholder + "Load X" button on first paint. On click: records that consent was granted (optionally persisted to localStorage), then swaps the placeholder for the actual iframe.

**Required for ALL DE clients** with Maps, YouTube/Vimeo, or Instagram embeds. Per `LEGAL.md §DE — DSGVO`: pre-consent loading of any third-party that sets cookies = legal violation.

**Parent of:**
- `MapEmbed.astro` (OpenStreetMap / MapTiler / Google Maps)
- `VideoFacade.astro` (YouTube / Vimeo)
- Instagram embed
- Calendly / OpenTable widget embeds
- Any other third-party iframe with PII / cookie implications

## 2. HTML / accessibility structure

```html
<div class="consent-gate" data-provider="google-maps" data-src="…" data-title="…">
  <div data-placeholder>
    <img src="map-poster.jpg" alt="" loading="lazy" /> <!-- optional -->
    <div class="overlay">
      <div class="card">
        <p>This map is loaded from Google Maps.</p>
        <p class="consequence">Loading the map means Google can set cookies and process your IP address.</p>
        <a href="/datenschutz">Privacy policy →</a>
        <div class="actions">
          <button data-load>Load Google Maps</button>
          <label><input type="checkbox" data-remember /> Always load Google Maps</label>
        </div>
      </div>
    </div>
  </div>
  <!-- on click, an <iframe> is inserted here -->
</div>
```

**Accessibility:**
- Placeholder image alt is empty by default (decorative) — the overlay copy provides full context
- Button is a real `<button type="button">` — keyboard-accessible
- Checkbox is a real `<label><input type="checkbox">` — keyboard-accessible
- `aspect-ratio` CSS sets the iframe's reserved height so there's no CLS (cumulative layout shift) when the iframe loads

## 3. Props (frozen)

- `provider: string` (required) — key for consent persistence (e.g., `'google-maps'`, `'youtube'`, `'instagram'`)
- `providerLabel: string` — human name for UI copy
- `src: string` (required) — iframe src on consent
- `title: string` (required) — iframe title for a11y
- `aspect?: string` (default `'16/9'`) — CSS aspect-ratio value
- `placeholderSrc?: string` — poster image (optional but recommended for video)
- `placeholderAlt?: string`
- `width?: string | number` (default `1280`)
- `height?: string | number` (default `720`)
- `sandbox?: string` — defaults to safe set; YouTube needs different (`allow-scripts allow-same-origin`)
- `allow?: string` — required for YouTube/Vimeo (`autoplay; clipboard-write; encrypted-media; picture-in-picture`)
- `privacyHref?: string` — link to your `/datenschutz` page
- `copy: { bodyTemplate, consequenceTemplate, loadButtonTemplate, privacyLinkLabel?, rememberLabel? }` — i18n-injected copy

## 4. Persistence

- Per-provider consent stored in `localStorage['consent.embeds.v1']` as `{ "google-maps": true, "youtube": false }`
- Visitor can accept the map but reject YouTube — granular control
- If localStorage is blocked (private browsing, strict cookie settings), consent is in-session only — click "Load" loads, but next visit re-prompts
- Reset via the footer "Manage cookie preferences" link → call `localStorage.removeItem('consent.embeds.v1')` from the cookie banner's `consent:reopen` handler

## 5. Performance constraints

- Zero third-party network requests on first paint — the iframe doesn't exist in the DOM until consent
- Placeholder image is lazy-loaded
- Iframe gets `loading="lazy"` after insertion (defers iframe network when it's still off-screen)

## 6. Legal sources

- `LEGAL.md §DE — DSGVO` — embed consent requirement
- BGH (German Federal Court of Justice) Cookie ruling Mai 2020 — pre-consent loading of third-party-cookied resources unlawful
- Bavarian Court 2022 — Google Fonts embed without consent = €100 damages per visitor

## 7. Anti-patterns

- Loading the iframe on page load and showing the consent banner alongside it — already in violation by then
- Hiding consent gate behind a tiny "i" icon — must be prominent + readable
- Defaulting "Always load" checkbox to checked — coercive consent ≠ valid consent under DSGVO
