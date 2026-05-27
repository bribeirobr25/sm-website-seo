# breno-bar — per-client CLAUDE.md

**Status:** AGENCY-SELF marketing site. This is the agency's own studio website — not a paying-client demo.
Live URL: https://agency-breno-bar.vercel.app (noindex until legal DRAFT items resolve).

**Inherits:** repo-root `CLAUDE.md` and every rule in `docs/design/`. No matching per-vertical template — the agency itself is `professional-services` with an Apple-inspired premium register that's deliberately distinct from every other demo built on the same library.

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 2 product (info + contact form). The single SSR endpoint at `/api/contact` is the form-submission handler; everything else is static.
- **Adapter:** `@astrojs/vercel` with `output: 'static'` — Astro pre-renders all marketing pages and the Vercel adapter routes the lone SSR endpoint to Fluid Compute.
- **Email send:** Resend (EU servers). `RESEND_API_KEY` env-var gates send; without it the endpoint returns 503 and the form renders a friendly "Service temporarily unavailable" — see `src/pages/api/contact.ts`.
- **Display font:** Inter Variable (one family handles both display + body via the opsz axis, mimicking Apple's SF Pro Display/Text). Self-hosted via `@fontsource-variable/inter`.
- **Schema.org:** `ProfessionalService` + `Person` (founder) + `WebSite` 3-node @graph. `priceRange: '€€'`, `hasOfferCatalog` lists 4 Service entries. Per-portfolio `CreativeWork` schema on each detail page, locale-aware `inLanguage`.
- **Languages:** **3-locale build.** EN at root (default) · DE at `/de/` · pt-BR at `/pt-br/`. Locale switcher dropdown in Header. Browser-locale auto-detect on the EN home only (`navigator.language` → redirect to matching variant, once per session, sessionStorage `lc` flag).
- **Jurisdiction:** DE (DSGVO + § 5 TMG); founder is Berlin-based Einzelunternehmer.

## Common commands

```bash
cd clients/agency-breno-bar
pnpm install
pnpm dev                                                  # http://localhost:4321
pnpm validate                                             # lint + 32+125-key translation parity + build
pnpm build                                                # 51 static + 1 SSR (api/contact)
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes
```

## Page tree (51 static + 1 SSR — 3 locales × 17 pages-per-locale + lone endpoint)

EN at root · DE at `/de/...` · pt-BR at `/pt-br/...`:

- `/` — Apple-style hero + stats strip (10 / 6 / 4) + 4-tile alternating-dark services + 3 featured portfolio + about teaser + dark-bg CTA
- `/services` — overview of 4 services (alternating dark/light tiles)
- `/services/[slug]` × 4 — Website · SEO · Google Business Profile · Social Media
- `/portfolio` — 9-entry grid (6 internal demos + diBoaS + bible-tt + myPlanny)
- `/portfolio/[slug]` × 9 — case-study with hero screenshot + stack/vertical/services aside + 3 related
- `/about` — workshop ethos (4 sections)
- `/contact` — Resend-wired form + alternatives (email, LinkedIn, X)
- `/privacy` — DSGVO 9-section template + dedicated `Contact form` section explaining the Resend flow + 12-month inquiry retention
- `/imprint` — § 5 TMG template
- `/404`, `/500` — Apple-clean error pages
- `/api/contact` (SSR-only) — POST endpoint; honeypot + 5 s min-fill-time + IP-keyed rate limit + HTML-escape + Reply-To + auto-confirmation

## Configuration-as-Code

- `src/lib/site.ts` — trilingual `SITE.i18n` (32 keys × 3 locales) + brand identity + legal + processors list
- `src/lib/page-strings.ts` — `PAGE_STRINGS` per-page content (125 keys × 3 locales)
- `src/lib/portfolio.ts` — 9 entries × trilingual `imageAlt` + `shortDescription` + `longDescription`. `featured: true` on 3 entries (bonsai-kodama, restaurant-adele, yoga-atem-studio) — home grid surfaces those three.
- `src/lib/services.ts` — service-slug taxonomy + portfolio cross-references
- `src/lib/seo/schema.ts` — `businessSchema()` + `portfolioCaseSchema()`
- `src/styles/tokens.css` — Apple-inspired palette (#fbfbfd / #1d1d1f / #0071e3) + 22-px radii + Apple-restrained shadows
- `src/styles/global.css` — Inter-tuned typography + reveal-on-scroll (`animation-timeline: view()`) + bg-hero-gradient + bg-noise utilities

## Validation gates

- `scripts/validate-translations.mjs` — verifies key-set parity across 3 locales for both `SITE.i18n` and `PAGE_STRINGS`. Chained into `pnpm validate`. 32 i18n keys + 125 page-strings keys = 157 keys × 3 locales.
- `scripts/optimize-portfolio.mjs` — re-encodes thum.io thumbnails to 16:10 hero (1600×1000) WebP at q=78. Idempotent. 9 portfolio entries currently at 441 KB total (`PERFORMANCE.md §5` budget ≤ 250 KB each, ≤ 80 KB for cards-only).

## DRAFT items requiring owner sign-off before production traffic

Before flipping `noindex` to allow indexing:

| Field | Location | Status |
|---|---|---|
| Berlin Anmeldung address (street + Bezirk + PLZ) | `src/lib/site.ts` `address.*` | DRAFT |
| USt-IdNr (Finanzamt nach Anmeldung) | `src/lib/site.ts` `legal.taxId` | DRAFT |
| Domain — real `breno-bar.com` with MX + Resend verification | Vercel Domains + Resend dashboard | DRAFT |
| Resend `RESEND_API_KEY` + `RESEND_FROM` env vars | Vercel project env vars | DRAFT (form returns 503 until set) |

The phone number was intentionally removed (`phone: null`, `dataControllerPhone: null`). Agency operates email-first.

## Imported components

The agency site uses no canonical components from `docs/design/components/_impl/` directly. All page sections are inline + bespoke to give the Apple register its distinct visual identity. The 4 universal scaffold primitives ARE used:

| Component | Source | Notes |
|---|---|---|
| `BaseLayout` | scaffold (extended) | Trilingual hreflang via `LOCALES` iteration; auto-emits BreadcrumbList + per-page schema. Skip-link + locale-detect script inlined here. |
| `Header` | scaffold (rewritten) | Locale switcher dropdown (EN/DE/PT, 3 entries — distinct from bonsai's 4-locale variant). Apple-clean "Start a project" pill CTA. |
| `Footer` | scaffold (rewritten) | 4-column layout. "Manage preferences" + Cookie reopen via `consent:reopen` event. |
| `CookieBanner` | scaffold (unchanged) | Locale-driven consent strings from `SITE.i18n[locale].consent`. |

The scaffold's `DemoBanner` was deliberately REMOVED from `BaseLayout.astro` for the agency build — the demo-disclosure pattern (`BEISPIEL — Demo-Website von sm-website-seo. ...`) doesn't apply to the agency's own marketing site.

## Per-client i18n conventions

- **Reference locale:** EN (root). Validation pivots on EN.
- **Registers:** EN "we"/"you" (international premium); DE `du` (informal — Apple.com/DE uses Sie but the SMB target reads as too formal); pt-BR `você`.
- **Hreflang:** every page emits 3 alternates + `x-default` → EN root.
- **URL prefix:** `LOCALE_PREFIX.en = ''` (root); `LOCALE_PREFIX.de = '/de'`; `LOCALE_PREFIX['pt-br'] = '/pt-br'`.

## Demo discipline

- `noindex` until DRAFT items resolve. Per root `CLAUDE.md` "Demo discipline" rule.
- `robots.txt` ships as `Disallow: /` (scaffold default). Flip at production cutover.
- Sentry `sendDefaultPii: false` enforced in `sentry.{client,server}.config.mjs`.
