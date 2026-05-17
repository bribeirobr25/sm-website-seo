# Reference: Solo Barber (Tier 2 / Type 1 / BR-LGPD)

**Stack:** Astro 6 + Tailwind v4 + Biome
**Vertical:** Beauty (sub-archetype: Modern urban barber, dark)
**Market:** Brazil (LGPD — Lei Geral de Proteção de Dados)
**Type:** Static info site + booking deep-link (Trinks) — no contact form, no DB.

This is one of two agency reference implementations (the other: `clients/reference-studio-booking/` — Tier 3 / Type 3 / DE-DSGVO). It exists as a canonical worked example of the agency standards library, not as a deliverable for any real client. Use it as a starting scaffold when a real barber client signs.

## Per-client docs

See `docs/clients/reference-solo-barber/`:
- `CLAUDE.md` — Claude Code session entry point
- `design.md` — design tokens, palette decisions, copy voice
- `BRIEF.md` — business context + KPI contract block

## What's wired

| Layer | Status |
|---|---|
| Tailwind v4 via `@tailwindcss/vite` + tokens in `@theme {}` | ✅ |
| Consent-first cookie banner (LGPD-aligned) | ✅ |
| Consent-gated KPI events (phone_click / whatsapp_click / booking_started / gallery_viewed / share_click) | ✅ |
| Política de Privacidade (LGPD 7-section structure) | ✅ |
| Razão Social + MEI footer disclosure | ✅ (placeholder values — owner-confirm before launch) |
| Sentry server-side (Astro middleware + SSR — `send_default_pii: false`) | ✅ — env var stubs in `.env.example` |
| OG tags + Twitter Cards | ✅ |
| ShareButton component (WhatsApp / Instagram / Copy) | ✅ |
| Schema.org `BarberShop` JSON-LD | ✅ |
| Trinks booking deep-link | ✅ (placeholder Trinks URL — replace with real client URL) |
| 404 + 500 branded pages (per `INFRASTRUCTURE.md`) | ✅ |
| `vercel.json` security headers (per `SECURITY.md`) | ✅ |
| `.github/workflows/ci.yml` (per `INFRASTRUCTURE.md`) | ✅ |
| `robots.txt` in demo state (`Disallow: /`) | ✅ — flip at production cutover |

## What's deferred (DRAFT items)

- **Real photos** — `<Placeholder>` components in hero/gallery; replace with owner-supplied real photos
- **Real legal IDs** — Razão Social / MEI / CNPJ are placeholder values; owner must confirm
- **Real phone + WhatsApp number** — placeholder `+55 11 99999-9999`
- **Real Trinks deep-link** — placeholder URL
- **Real Sentry DSN + project** — stub env vars; create real Sentry project before production
- **Visual verification** — agency has not run `pnpm dev` in a browser; per the working principle, visual verification deferred to the human reviewer

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm validate     # lint + build
```

## Production cutover checklist

Run `docs/design/CHECKLIST.md` top to bottom before flipping `noindex` off. Especially:

- `CHECKLIST.md` §Pre-flight (noindex removed, real domain, env vars set)
- `CHECKLIST.md` §Operational tests (cookie banner blocks scripts · no PII in Sentry · LGPD legal pages present · KPI events wired · share buttons render)
- `CHECKLIST.md` §Legal (Brazilian market — mandatory)
