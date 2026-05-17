# Reference: Studio with Booking (Tier 3 / Type 3 / DE-DSGVO)

**Stack:** Next.js 16 + Tailwind v4 + Drizzle ORM + Neon (Postgres) + Sentry + PostHog + Resend + Upstash + Biome
**Vertical:** Studio (yoga / pilates boutique — Archetype C sub-archetype)
**Market:** Germany (DSGVO + Impressum)
**Type:** Info + own DB-backed trial-signup flow + Mindbody deep-link for paid classes

This is one of two agency reference implementations (the other: `clients/reference-solo-barber/` — Tier 2 / Type 1 / BR-LGPD). Together they cover the spread of the agency stack — Tier 2 + Tier 3, BR + DE jurisdictions, simple + complex.

## Per-client docs

See `docs/clients/reference-studio-booking/`:
- `CLAUDE.md` — Claude Code session entry point
- `design.md` — design tokens, palette, copy voice
- `BRIEF.md` — business context + KPI contract block

## What's wired

| Layer | Status |
|---|---|
| Tailwind v4 via PostCSS plugin + `@theme {}` in CSS | ✅ |
| DSGVO-aligned consent banner (Impressum + Datenschutzerklärung) | ✅ |
| PostHog product analytics (EU region · opt-out-by-default · consent-gated) | ✅ |
| Microsoft Clarity + GA4 (Tier 3 full stack) | ✅ |
| Sentry full SDK (`@sentry/nextjs` — client + server + edge · `send_default_pii: false`) | ✅ |
| Resend transactional email (trial-signup confirmation + calendar `.ics`) | ✅ |
| Upstash rate-limit (5/60s per IP-hash on `/api/trial`) | ✅ |
| Neon serverless Postgres + Drizzle ORM | ✅ — schema + connection pattern |
| Trial-signup booking endpoint (own DB, no Mindbody dependency) | ✅ |
| Mindbody/ClassPass deep-link for paid classes (placeholder URL) | ✅ |
| OG tags + Twitter Cards + dynamic OG image scaffolding | ✅ |
| ShareButton (WhatsApp + Instagram + Copy) | ✅ |
| Schema.org `YogaStudio` JSON-LD | ✅ |
| 404 + 500 branded pages | ✅ |
| `vercel.json` 6 security headers + EU-specific CSP origins | ✅ |
| GitHub Actions CI | ✅ |
| DSGVO Impressum (TMG §5 — 8 required fields) | ✅ (placeholder values) |
| DSGVO Datenschutzerklärung (10-section structure) | ✅ |
| `robots.txt` in demo state | ✅ |

## What's deferred (DRAFT items)

- **Real photos** — `<Placeholder>` components in hero + classes + instructor portraits + visit; replace with owner-supplied
- **Real legal IDs** — Handelsregister (HRB), USt-IdNr placeholder; owner-confirm
- **Real phone + email** — placeholder `+49 30 1234 5678` / `hallo@studio-sereno-yoga.de`
- **Real Mindbody URL** — placeholder slug
- **Real env vars** — Sentry DSN, PostHog key, Neon DATABASE_URL, Upstash credentials, Resend API key — stub `.env.example` only
- **`pnpm install` + `pnpm build`** — not run yet; first execution to be done by reviewer
- **Visual / browser verification** — deferred to the human reviewer per the working principle

## Local development

```bash
pnpm install

# Set required env vars (or use Vercel Dev for parity)
cp .env.example .env

# Generate + apply DB migrations (requires real DATABASE_URL to a Neon project)
pnpm db:generate
pnpm db:migrate

# Run dev server
pnpm dev          # http://localhost:3000

# Validate before commit
pnpm validate     # lint + typecheck + build
```

## Production cutover checklist

Run `docs/design/CHECKLIST.md` top to bottom before flipping `noindex` off. Especially:

- `CHECKLIST.md` §Pre-flight + §Operational tests
- `CHECKLIST.md` §Legal (German market — mandatory)
- `CHECKLIST.md` §Integration health checks (Resend · Stripe N/A · Neon · Upstash)
- DSGVO Impressum + Datenschutzerklärung — owner-confirmed legal IDs
- All third-party processors named in Datenschutzerklärung §5
