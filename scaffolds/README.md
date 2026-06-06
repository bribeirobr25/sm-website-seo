# scaffolds/

**Install-ready agency starter trees.** Copy ONE of these to `clients/[slug]/` per root `CLAUDE.md` Step 3 when starting a new client.

## What's here

| Scaffold | Tier | Use when |
|---|---|---|
| [`astro-tier2/`](./astro-tier2/) | Tier 2 — Astro 6 + Tailwind v4 + Sentry | Type 1 static info site · Type 2 info + contact form. **Default for typical Berlin SMB clients** (Friseur, Café, Werkstatt, Praxis) |
| [`nextjs-tier3/`](./nextjs-tier3/) | Tier 3 — Next.js 16 + Tailwind v4 + Drizzle + Neon + Upstash + Resend + Sentry + PostHog | Type 3 booking with DB · Type 4 transactional with payments · Type 5 application with auth |

Decision tree: `docs/design/TECH.md` §1.

## How to use

```bash
# Pick ONE scaffold per client
cp -r scaffolds/astro-tier2 clients/[client-slug]
cd clients/[client-slug]
pnpm install
cp .env.example .env.local                  # populate with real keys
pnpm dev
```

Then follow the scaffold's own `README.md` for the per-client setup steps (rename `site.ts`, override palette, declare imported components in `docs/clients/[slug]/CLAUDE.md`).

## What scaffolds are NOT

- **Not reference impls.** The reference impls (deleted 2026-05-19 via the 2026-05-19 restructure) had per-client palette + content baked in. These scaffolds are content-neutral starters. Archived per-client docs at `docs/clients/archived/reference-solo-barber/` and `docs/clients/archived/reference-studio-booking/` retain the canonical worked-example shapes.
- **Not where you put client code.** `clients/[slug]/` is where your client builds live. `scaffolds/` is where you copy FROM. They are NOT interchangeable.

## What the scaffolds ship (so you don't have to add them)

- **Tailwind v4 + `@layer base` body wrap** (added 2026-05-25 after a 6-demo invisible-CTA incident). The body rule + base typography are wrapped in `@layer base { ... }` so `.text-bg` / `.text-X` utilities aren't shadowed by the body's inherited color. **Do not unwrap** — see `docs/design/DESIGN-BEST-PRACTICES.md` §7 "CTA contrast — Tailwind v4 @layer base requirement" for the incident.
- **`@fontsource-variable` fonts** — no Google Fonts CDN
- **`vercel.json` with 6 security headers** + immutable cache (Astro only)
- **Sentry `sendDefaultPii: false`** (mandatory per LEGAL.md)
- **Cookie banner + consent layer** (consent-first, "Reject all" parity)
- **`.github/workflows/ci.yml`** running `pnpm validate`
- **Required public files** — `favicon.svg` / `favicon.ico` / `apple-touch-icon.png` / `robots.txt Disallow: /` / `og-default.png`
- **Per-tier integrations** — Astro: Sentry only. Next.js: + Drizzle/Neon/Upstash/Resend/PostHog (all consent-gated, EU regions)

## Scaffold purity — what must NOT land here

> Per the 2026-05-19 restructure §7 R17:

These scaffolds must remain **content-neutral, token-neutral, version-pinned**. Per a quarterly scaffold-purity audit (PENDING.md, calendar trigger 2026-08-19):

- ❌ Client-specific copy (`<h1>Café del Corso</h1>`) — only placeholder text
- ❌ Client-specific palette (`--color-bg: #1a1612`) — only the neutral default in `tokens.css` / `globals.css`
- ❌ Client photos — `Placeholder` components only
- ❌ Client domain — `https://example.com` in configs
- ❌ Client-specific Drizzle schemas — `lib/schema.ts` keeps a generic example
- ❌ Per-vertical JSON-LD subtype — `lib/seo/schema.ts` ships `LocalBusiness` placeholder; per-vertical subtypes pulled from `docs/design/templates/[vertical].md` §11.8 at scaffold time

If you find any of the above creeping in: revert. The scaffold's job is to be the same install-ready surface for every future client, not to encode any particular client's identity.

## After copying — required setup

See `docs/design/CHECKLIST.md` §0 Pre-flight for the per-client setup steps before going live. The checklist covers:
- Real `SITE` data with DRAFT-resolution discipline
- Per-jurisdiction legal compliance (DSGVO/LGPD/RGPD/CCPA)
- `noindex` → `index` flip at production cutover
- Domain configuration
- Sitemap submission to GSC
- GBP wiring

## Canonical components

The 32 canonical components + 6 universal primitives live at `docs/design/components/_impl/` (authoritative tiered index: `docs/design/components/README.md`). Scaffolds do NOT auto-include the 32 — each client opts in per the matching `docs/design/components/[component].md` §1 per-vertical applicability table. Declare the chosen imports in the per-client `docs/clients/[slug]/CLAUDE.md` "Imported components" table per `TECH.md` §20.

## Build validation gate

Per the 2026-05-19 restructure §7 R1 — these scaffolds REPLACE the deleted reference impls as the agency's build-validation surface. Quarterly cadence (calendar trigger 2026-08-19): re-run `pnpm install && pnpm build` on both scaffolds to catch dep-bump regressions before they affect new client work.
