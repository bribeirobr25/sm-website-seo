# sm-website-seo

**Agency monorepo** — small-business website + Google Business Profile + SEO services for Berlin SMBs (and occasionally Portugal + Brazil). Internal docs + canonical components + scaffolds, plus a `clients/` folder for active builds.

## Start here

→ **[`CLAUDE.md`](./CLAUDE.md)** is the master entry point. It documents:
- The agency's three services (website / GBP / SEO) + five product types + three stack tiers
- The cold-outreach business model
- The standards-doc map (21 rules docs under `docs/design/`)
- The "how to start a new client project" workflow

Every Claude Code session for client or agency-template work should read it first.

## Repo layout

```
CLAUDE.md                       Master entry point — start here
docs/
├── audit/                      Cross-client backlog + research
│   ├── PENDING.md              Agency-level backlog aggregator (public stub → private/)
│   ├── ui-ux-reference-study.md  Measured 24-site UI/UX research
│   ├── RUNBOOK-real-browser-audit.md  Manual workflow for headless-blocked sites
│   ├── archived/               Read-only historical audits (anti-pattern references)
│   └── private/                (gitignored) backlog + prospect intakes + research
├── benchmark/                  Competitor analysis + inbound-funnel roadmap (e.g. icreateyoursite.com)
├── clients/
│   └── archived/               Read-only worked examples of populated per-client docs
├── design/                     21 standards docs + 12 vertical templates + canonical impls
│   ├── *.md                    TECH · DESIGN-BEST-PRACTICES · SEO · LEGAL · KPI · …
│   ├── templates/              12 per-vertical templates (gastronomy / beauty / trades / …)
│   ├── components/             32 component spec sheets + 6 universal primitives
│   │   └── _impl/              Working Astro + React implementations
│   ├── _impl/                  Non-component canonical code (lib · layouts · configs · legal pages)
│   └── local_business_website_benchmark_report.md  12-vertical benchmark research
scaffolds/                      Install-ready content-neutral starters — copy FROM here
├── astro-tier2/                Tier 2 (Astro 6 + Tailwind v4 + Sentry)
└── nextjs-tier3/               Tier 3 (Next.js 16 + Drizzle + Neon + Upstash + Resend + Sentry)
clients/                        Active client builds land here — empty by design at rest
└── README.md                   clients/ vs scaffolds/ convention
```

## Quick "start a new client" recipe

```bash
cp -r scaffolds/astro-tier2 clients/[client-slug]       # or nextjs-tier3 for Type 3+
cd clients/[client-slug]
pnpm install
pnpm dev
```

Then follow the scaffold's `README.md` for the per-client setup steps (rename `package.json`, populate `site.ts` from `site.example.ts`, override palette per the matching `docs/design/templates/[vertical].md`, declare imported canonical components per `TECH.md` §20). Full walkthrough in `CLAUDE.md` §"How to start a new client project."

## Stack tiers — pick the right one

| Tier | Stack | Use when |
|---|---|---|
| Tier 1 | HTML + Tailwind + vanilla JS | Single landing page · Type 1 only |
| **Tier 2** | **Astro 6 + Tailwind v4 + Sentry** | **Default for most Berlin SMB clients** — Type 1 (static info) or Type 2 (info + contact form) |
| Tier 3 | Next.js 16 + Drizzle + Neon + Upstash + Resend + Sentry + PostHog | Type 3 (booking with DB) · Type 4 (transactional with payments) · Type 5 (application) |

Decision tree in `docs/design/TECH.md` §1.

## Languages

Bar is trilingual (DE / EN / PT-BR). Most Berlin clients need DE + EN; Brazilian community businesses also need PT-BR. Legal compliance is mapped per-jurisdiction in `docs/design/LEGAL.md`: 🇩🇪 DSGVO + Impressum · 🇧🇷 LGPD + Razão Social/CNPJ · 🇵🇹 RGPD + NIF/CAE/Livro de Reclamações · 🇺🇸 CCPA/CPRA + GPC.

## Tooling baseline

- **pnpm** everywhere (never npm, never yarn) — pinned via `packageManager`
- **Node ≥ 22.12.0** for Tier 2 builds (Astro 6); Tier 3 uses its bundled toolchain
- **Biome** for lint + format (no ESLint, no Prettier)
- **Tailwind v4** with `@theme {}` token block in CSS — no `tailwind.config.ts`
- **Vercel** for hosting (free tier sufficient for demo phase)

## Conventions

- **Never auto-commit or auto-push.** Stage changes, report what's ready, wait for instruction.
- **Atomic commits.** English, imperative, one logical change per commit.
- **pnpm validate** before declaring done (= lint + build + manual visual review).
- **Never invent client content.** Owner-confirmed or labeled DRAFT.
- All other working principles documented in `CLAUDE.md` §"Working principles."
