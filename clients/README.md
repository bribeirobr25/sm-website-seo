# clients/

**This directory is where client builds live.** It is intentionally otherwise empty by design — the canonical agency assets live at `docs/design/_impl/` + `docs/design/components/_impl/` + `scaffolds/`, not here.

## How to populate this directory

**Scaffold from `scaffolds/`** per root `CLAUDE.md` Step 3:

```bash
cp -r scaffolds/astro-tier2 clients/[client-slug]      # Tier 2 (Astro) — default for most Berlin SMB clients
# OR
cp -r scaffolds/nextjs-tier3 clients/[client-slug]     # Tier 3 (Next.js) — booking with DB, transactional, application
```

Then follow the scaffold's `README.md` for the per-client setup steps (rename `package.json`, populate `site.ts` from `site.example.ts`, override the palette per `docs/design/templates/[vertical].md`, declare imported canonical components in `docs/clients/[slug]/CLAUDE.md` per `TECH.md` §20).

## `clients/` vs `scaffolds/` — they are NOT interchangeable

- **`scaffolds/`** is where you copy **FROM** — install-ready, content-neutral, token-neutral starters that must remain pure. Adding client-specific content to a scaffold degrades it for every future client (audit cadence: quarterly per `docs/audit/PENDING.md`).
- **`clients/[slug]/`** is where you copy **TO** — your client builds live here. Each gets its own palette, content, photos, domain.

If you find yourself wondering "should this go in `clients/` or `scaffolds/`?" the answer is: client-specific data goes in `clients/[slug]/`. The scaffold is a template.

## Per-client doc archives

The two prior reference impls (deleted as code; archived as docs) demonstrate what a fully-populated per-client `CLAUDE.md` + `BRIEF.md` + `design.md` look like:

- `docs/clients/archived/reference-solo-barber/` — Tier 2 / BR-LGPD worked example (single-chair barber, Astro)
- `docs/clients/archived/reference-studio-booking/` — Tier 3 / DE-DSGVO worked example (yoga studio with own booking flow, Next.js)

Read these BEFORE drafting your first real `docs/clients/[slug]/` doc set — they show the DRAFT-resolution discipline + KPI contract + Canonical NAP block + processor list structure.

## Reference / further reading

- Root `CLAUDE.md` §How to start a new client project — the canonical workflow
- `scaffolds/README.md` — what's in each scaffold + the "must NOT be in this scaffold" purity constraints
- `docs/design/components/_impl/README.md` — the 8 canonical components + 5 universal primitives
- `docs/design/_impl/README.md` — non-component canonical assets (lib, legal pages, configs, Sentry)
- `docs/audit/PENDING.md` — agency-level backlog aggregator + historical "Recently resolved" log of how this architecture emerged
