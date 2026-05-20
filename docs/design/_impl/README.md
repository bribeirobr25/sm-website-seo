# docs/design/_impl/

**Canonical working code for the non-component agency assets** — lib utilities, layouts, app primitives, legal pages, page errors, configs. Distilled from the reference impls (`clients/reference-solo-barber/` Tier 2 + `clients/reference-studio-booking/` Tier 3) on 2026-05-19 per `CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md`.

For canonical UI **components** (the 8 from the 24-site reference study + 5 universal primitives), see `docs/design/components/_impl/`.

## Convention

**Not built.** This directory is not part of any Astro/Next project's build. It's a paste-ready paste-target. When a new client scaffolds, the developer copies the files they need from here.

The leading underscore prefix `_impl/` signals "support directory, not the primary content" (same convention as `_demo/`).

## Subdirectories

| Path | Holds | Tier |
|---|---|---|
| `lib/` | `consent.ts` · `analytics.ts` (Astro) / `analytics.nextjs.ts` · `db.ts` · `schema.ts` · `ratelimit.ts` · `resend.ts` · `posthog.ts` · `seo/schema.astro.ts` · `seo/schema.nextjs.ts` | universal + Tier-3 specifics |
| `layouts/` | `BaseLayout.astro` | Tier 2 |
| `components/` | `Footer.astro` · `Header.astro` · `Footer.tsx` · `Header.tsx` (LAYOUT components, not UI components — UI components are in `docs/design/components/_impl/`) | both |
| `app/` | `layout.tsx` · `error.tsx` · `not-found.tsx` · `legal/impressum.tsx` · `legal/datenschutz.tsx` · `api/trial/route.ts` | Tier 3 |
| `pages/` | `404.astro` · `500.astro` · `politica-de-privacidade.astro` | Tier 2 |
| `styles/` | `global.css` (Astro) · `globals.css` (Next.js) · `tokens.canonical.css` (executable form of TECH.md §7) | both |
| `config/` | All root-level configs renamed per tier: `astro.config.ts` · `next.config.ts` · `instrumentation.ts` · `drizzle.config.ts` · `vercel.{astro,nextjs}.json` · `sentry.*.config.{ts,mjs}` · `package.{astro,nextjs}.json` · `tsconfig.{astro,nextjs}.json` · `biome.json` · `postcss.config.mjs` · `ci.yml` · `env.{astro,nextjs}.example` · `.gitignore` · `.nvmrc.{astro,nextjs}` | both, tier-disambiguated |

## How to use

Each scaffold (`scaffolds/astro-tier2/` and `scaffolds/nextjs-tier3/`) already pulls the universal subset of these files at install-time. For files the scaffolds don't include — typically because they're per-vertical or per-jurisdiction — copy from here into the client directory at scaffold time.

Examples:
- **DE-DSGVO client (Tier 3):** copy `app/legal/{impressum,datenschutz}.tsx` into `clients/[slug]/src/app/{impressum,datenschutz}/page.tsx`
- **BR-LGPD client (Tier 2):** copy `pages/politica-de-privacidade.astro` into `clients/[slug]/src/pages/politica-de-privacidade.astro`
- **Tier 3 with a contact form:** copy `app/api/trial/route.ts` into `clients/[slug]/src/app/api/[your-endpoint]/route.ts` and adapt (see `FORMS.md` for the embedded worked example)

## What's at `app/api/trial/route.ts`

The canonical Tier-3 form-endpoint pattern: Zod validation + honeypot + Upstash rate-limit + Drizzle insert + Resend confirmation + Sentry capture. Also embedded as a fenced code block in `FORMS.md` per `CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md` §7 R2 (redundancy against `_impl/` loss). The most asymmetric-pain artifact in the plan — its loss would be most painful because no end-to-end worked example exists elsewhere.

## What's at `styles/tokens.canonical.css`

The executable form of `TECH.md` §7 token canon — motion (×5) · easing (×4) · tracking (×3) · radii (×5) · base palette placeholders. The leading JSDoc binds it explicitly to `TECH.md` §7 as the canonical source — if they diverge, TECH.md wins.

## What's at `app/legal/{impressum,datenschutz}.tsx`

Canonical DE-DSGVO legal page templates — 8-section Impressum (TMG §5) + 10-section Datenschutzerklärung. Adapt per client. The shape is canonical; client-specific data (legal entity, USt-IdNr, controller contact, processors) comes from `SITE.legal`.

## History

These files were extracted from `clients/reference-solo-barber/` and `clients/reference-studio-booking/` on 2026-05-19. Before the restructuring, this code lived only in the reference impls — which had per-client palette + content baked in, making the patterns hard to extract cleanly. The Phase 1 extraction produced byte-identical copies of every canonical asset; Phase 6 deleted the originals once extraction was verified.

## Cross-references

Working files cited in standards docs:
- `INTEGRATIONS.md` §Sentry → `_impl/config/sentry.*.config.{ts,mjs}` + `instrumentation.ts`
- `INTEGRATIONS.md` §Neon → `_impl/lib/db.ts` + `schema.ts`
- `INTEGRATIONS.md` §Upstash → `_impl/lib/ratelimit.ts`
- `INTEGRATIONS.md` §Resend → `_impl/lib/resend.ts`
- `INTEGRATIONS.md` §PostHog → `_impl/lib/posthog.ts`
- `INTEGRATIONS.md` §Lazy initialization → `_impl/lib/{db,ratelimit,resend}.ts`
- `LEGAL.md` §DE → `_impl/app/legal/{impressum,datenschutz}.tsx`
- `LEGAL.md` §BR → `_impl/pages/politica-de-privacidade.astro`
- `LEGAL.md` §Cookie consent banner → `docs/design/components/_impl/CookieBanner.{astro,tsx}`
- `FORMS.md` §form-endpoint pattern → `_impl/app/api/trial/route.ts` (also embedded as fenced code block in the doc itself)
- `INFRASTRUCTURE.md` §vercel.json → `_impl/config/vercel.{astro,nextjs}.json`
- `SEO.md` §5 → `_impl/lib/seo/schema.{astro,nextjs}.ts`
- `TECH.md` §7 → `_impl/styles/tokens.canonical.css`
