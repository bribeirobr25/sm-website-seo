# docs/design/components/_impl/

**Working code that backs each component spec sheet.** Each `.astro` / `.tsx` file in this directory is the canonical reference implementation for one of the **32 canonical components + 6 universal primitives** in the agency's UI/UX library. The authoritative tiered index (what each component is, which tier, build-dependency graph, skip-list) lives in **[`../README.md`](../README.md)** — this file only documents the `_impl/` directory's conventions.

## Convention

| File pattern | Purpose |
|---|---|
| `*.astro` | Tier 2 (Astro) implementation — primary form for most components |
| `*.tsx` | Tier 3 (Next.js / React) variant where applicable (CookieBanner, Button, Placeholder, ShareButton, ConsentBootstrap) |
| `_demo/*.astro` | 9 internal demo pages — render each component in solo-barber's dark+amber identity for visual review |

**Not built.** This directory is not part of any Astro/Next project's build. It's a paste-ready paste-target. When a new client scaffolds, the developer copies the components they need (per the component's spec sheet §1 per-vertical applicability) into the client's `src/components/`.

The leading underscore prefix `_impl/` follows the same convention as `_demo/`: signals "support directory, not the primary content."

## How to use

1. Open the matching spec sheet (`../[component-name].md`) — confirm per-vertical applicability, WCAG requirements, required tokens
2. Copy the implementation from this directory into your client at the appropriate path (`src/components/ui/` for Astro, `src/components/ui/` for Next.js — see each spec sheet §8 Implementation pointer)
3. Override the visual-identity comment block at the top of each file with the client's palette mapping
4. Record the import in the client's `docs/clients/[slug]/CLAUDE.md` "Imported components" table per `TECH.md` §20

## Component index

The full, current index — **32 canonical components across 6 tiers + 6 universal primitives**, with the build-dependency graph, buy-don't-build table, and skip-list — is maintained in **[`../README.md`](../README.md)** (single source of truth). To find a component's working file: open its spec sheet `../[component-name].md` §8 "Implementation pointer", which names the `.astro` / `.tsx` file here. This file is intentionally NOT a second index, to avoid the drift that left the old 8-component table stale.

## History

These components were extracted from `clients/reference-solo-barber/` and `clients/reference-studio-booking/` during the 2026-05-19 component-extraction restructure (logged in `docs/audit/private/PENDING.md` "Recently resolved"). The reference code impls were deleted in the same restructure; the working code lives here permanently as the agency-canonical source. The per-client doc shapes are preserved at `docs/clients/archived/reference-solo-barber/` + `reference-studio-booking/`.

## Drift prevention

Per the 2026-05-19 restructure rule R4: each `_impl/` file should remain byte-aligned with the values measured in its spec sheet §3 CSS spec. Quarterly drift check in PENDING.md (calendar trigger 2026-08-19) — copy each file into `scaffolds/astro-tier2/src/components/` temporary tree + `pnpm build` to confirm compilation; revert.
