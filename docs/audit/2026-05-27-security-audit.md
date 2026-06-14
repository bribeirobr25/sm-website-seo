# Security audit — committed-files scan (2026-05-27)

## Executive summary

**0 CRITICAL · 0 HIGH · 4 MEDIUM · 4 LOW · 11 categories passing**

**Verdict: SAFE to publish on public GitHub** after the user makes deliberate choices on the four MEDIUM items (prospect-intake files + portfolio research files + agency PENDING.md backlog + sales playbook). No hard secrets were found, no API keys, no DB credentials, no real third-party tokens. Every `.env.example` is empty. Every Sentry init reads DSN from env. The only PII concerns are demo-business phone numbers that follow a vanity-year pattern and a Gmail fallback in one API route the founder already publishes intentionally.

Scope: 897 git-tracked files across docs, scaffolds, and 8 client subprojects (Astro 6 / Next.js 16). Method: pattern hunts for known key prefixes (`re_`, `sk_*`, `ghp_`, `AKIA`, hex@-DSN, `postgres://` etc.) + manual review of every `.env.example`, every `sentry.*.config.{mjs,ts}`, every `vercel.json`, the contact-form route, and the docs/audit/ tree.

---

## Critical (must fix before public)

_None._

---

## High (exploitable but not catastrophic)

_None._

---

## Medium (deliberate-choice items — fix or accept with eyes open)

### M1. Prospect-intake files name real, uncontacted businesses
**Files:** `docs/audit/cafedelcorso.md` (317 lines), `docs/audit/laudam.md` (445 lines)
**Pattern matched:** Real business names, addresses, phone numbers (`+49 951 50997040`, `0921 761919`), USt-IdNr (`DE814793979`), real reviewer names harvested from Google reviews, and `docs/audit/PENDING.md` lists both as "Not contacted. Scaffold-ready."
**Why medium:** All data is public per Impressum / Google Reviews — not a leak in legal terms. But (a) the agency's prospect pipeline becomes visible to competitors; (b) the listed prospects could reasonably feel uncomfortable discovering they were profiled as "intake-only" on a public agency repo; (c) reviewer names are reproduced verbatim, which a privacy-conscious reader might object to even though Google already exposes them.
**Fix options:**
- (Recommended) Move `cafedelcorso.md` + `laudam.md` + the "Prospects" table in `PENDING.md` to a separate private repo or to `docs/audit/private/` and add that path to `.gitignore`.
- Or: redact business names and reviewer names with a slug (`docs/audit/prospect-001-bamberg-cafe.md`).
- Or: accept the exposure and add a one-line front-matter note in each intake md confirming the data is public-source-only.

### M2. Portfolio benchmark research names real competitors
**Files:** `docs/audit/archived/demo-eiscafe-bellini-RESEARCH.md`, `docs/audit/archived/gastronomy-coffee-RESEARCH-2026-05-22.md`
**Pattern matched:** Real Berlin businesses analyzed by name (Hokey Pokey, Cuore di Vetro, Eiscafé Schober, Aldemir Eis, etc.) with voice / archetype / anti-pattern annotations.
**Why medium:** Standard agency competitive research — but published in a public repo it could be read as "Berlin's businesses ranked by us." Some of the named operators might dislike public benchmarking.
**Fix:** Either (a) accept the exposure (these are factual observations about public sites) or (b) move the `docs/audit/archived/*-RESEARCH-*.md` files to a private satellite or `.gitignore` them.

### M3. `docs/audit/PENDING.md` is the full internal agency backlog
**File:** `docs/audit/PENDING.md` (203 lines)
**Pattern matched:** Per-incident postmortem language ("Kodama regression", "6-demo invisible-CTA incident", "monoculture incident"), current TODOs against the founder by name, prospect pipeline status, pricing tier hints.
**Why medium:** A competitor reads this and learns the agency's failure modes + current state + what's broken. None of it is sensitive in a privacy sense, but it's the kind of internal Notion-page-equivalent that most agencies keep private.
**Fix:** Same options as M1 — either accept the transparency (it's a deliberate "build in public" stance) or move to `docs/audit/private/` + gitignore.

### M4. `docs/design/SALES.md` is the full agency sales playbook
**File:** `docs/design/SALES.md` (≈400 lines)
**Pattern matched:** Pricing tiers per product type with explicit floor numbers (€500–800 etc.) — these ARE consistent with the matrix already published in `CLAUDE.md`, so this isn't new exposure. Plus objection-handling responses ("How much does it cost?" → response template), cold-call scripts, retainer-tier structure, and payment-terms language.
**Why medium:** Confirmed cross-reference with root `CLAUDE.md` shows pricing is already public-facing by design. The objection-handling and script content is in the same "publicly visible playbook" register that consultancies (e.g. Basecamp, 37signals' "Shape Up") publish openly. Acceptable for a transparency-first agency — but flagged so the user makes the choice deliberately.
**Fix:** No action required if "build in public" is the intent. If not, gate `SALES.md` behind the same `private/` boundary as M1/M3.

---

## Low (informational — no action required)

### L1. Demo client phone numbers may collide with real Berlin landlines
**Files:** `clients/demo-*/src/lib/site.ts` (8 demos)
**Pattern matched:** Each demo declares a `phone` like `+49 30 4400 1987` (Eiscafé Bellini), `+49 30 2900 7311` (Bart Pomade Barber), `+49 30 6110 2018` (Atem Studio). The associated `docs/clients/demo-*/BRIEF.md` files mark these DRAFT and (for Bellini) explicitly note "year-based vanity placeholder", but the `site.ts` file itself carries no DRAFT marker and is what would render on the deployed demo.
**Why low:** Each Berlin `030 XXXX XXXX` number is technically a valid Deutsche Telekom assignment range. A real subscriber to any of these eight numbers could receive misdirected calls if a demo visitor decides to phone "Eiscafé Bellini" from the demo page. Probability is low (demos are `noindex`, traffic is essentially zero), but the consequence is unwanted calls to a stranger.
**Fix (optional):** Switch all demo phones to either (a) the explicit reserved range `+49 30 0000 XXXX` or (b) `+49 0152 28817973` (Bundesnetzagentur reserved for fiction/teaching), or (c) leave as-is and accept the de minimis exposure given the `noindex` posture.

### L2. Founder's personal Gmail is the contact-form fallback
**File:** `clients/baragency/src/pages/api/contact.ts` line 128
**Pattern matched:** `const notifyTo = import.meta.env.NOTIFICATION_EMAIL ?? 'breno.ribeirobr@gmail.com';`
**Why low:** Per audit scope, `breno.ribeirobr@gmail.com` is the user's intentional public-facing contact — already excluded from the "leak" definition. Worth one line of acknowledgment: when the repo goes public, anyone reading the source learns this Gmail is the form fallback when `NOTIFICATION_EMAIL` is unset on Vercel. A spammer could harvest it.
**Fix (optional):** Change the fallback to throw (force-fail-closed) instead of defaulting to a real address. Then the absence of `NOTIFICATION_EMAIL` becomes a deploy-time error instead of a silent email-to-personal-Gmail.

### L3. Contact-form rate limit is in-memory Map (acknowledged in code comments)
**File:** `clients/baragency/src/pages/api/contact.ts` line 8 + 27
**Pattern matched:** `const recentSubmissions = new Map<string, number>();` — comment explicitly says "in-memory; upgrade to Upstash for production volume."
**Why low:** Serverless cold-starts wipe the Map, so the 30-second rate limit becomes "30 seconds per warm container." A determined spammer can cycle through cold starts. The code is explicitly self-documenting about this gap, so it's not a hidden vulnerability — it's a known limitation the author flagged. The honeypot + min-fill-time defenses still apply.
**Fix:** Wire Upstash Redis per `INTEGRATIONS.md` §Upstash before going to production with the form (this is the scaffold-tier-3 pattern; the tier-2 scaffold acknowledges the gap).

### L4. Stale `PUBLIC_SITE_URL` placeholder in scaffold .env.example
**Files:** `scaffolds/astro-tier2/.env.example`, 6 of 7 `clients/demo-*/.env.example` files
**Pattern matched:** `PUBLIC_SITE_URL=https://barbearia-tio-edu.com.br` — this is a copy-paste leftover from a deleted reference impl. The value is a fictional `.com.br` domain (no real business is at that URL), so it's not a leak, but it's a stale artifact that misleads anyone trying to read the example.
**Fix:** Either set to empty string or set per-demo to the actual `demo-*.vercel.app` URL.

---

## Confirmed clean (verified safe)

- `.gitignore` — comprehensive (`.env`, `.env.*`, `*.pem`, `*.key`, `.vercel/`, lockfiles other than pnpm, OS junk, `.claude/settings.local.json`, all build caches). The `!.env.example` re-include is correctly scoped.
- `.env.example` files — all 9 (2 scaffolds + 7 demo clients) have empty values for every key (`SENTRY_DSN=`, `SENTRY_AUTH_TOKEN=`, `RESEND_API_KEY=`, `DATABASE_URL=`, `UPSTASH_REDIS_REST_TOKEN=`, `IP_HASH_SALT=`).
- Sentry init configs — all 16 client + scaffold `sentry.{client,server,edge}.config.{mjs,ts}` files read `dsn` from `process.env` / `import.meta.env`. No hardcoded DSNs anywhere.
- `astro.config.ts` Sentry build integrations — `project`, `authToken`, `org` all read from `process.env`.
- `vercel.json` files (10 total) — no `env` arrays with hardcoded values. Only headers (CSP, HSTS, security policies). The CSP allowlist references `https://*.ingest.sentry.io` which is a non-secret wildcard, not a DSN.
- No Resend keys (`re_…`) found anywhere outside the env-fallback comment.
- No Stripe keys (`sk_live_`, `pk_live_`, `sk_test_`) found anywhere.
- No GitHub PATs (`ghp_`, `gho_`, `ghu_`, `ghs_`) found anywhere.
- No AWS access keys (`AKIA…`) found anywhere.
- No database connection strings (`postgres://`, `mysql://`, `redis://`, `mongodb://`) found anywhere — every one is env-driven (Drizzle uses `Redis.fromEnv()` and `process.env.DATABASE_URL`).
- No `.pem`, `.key`, `.p12`, `secrets.json`, `credentials.json`, or `.env` files committed (git ls-files confirms).
- GitHub Actions workflows — clean (no `secrets.*` literals, no `env: KEY: value` with values).
- pnpm-lock.yaml files — no private-registry URLs with embedded credentials.
- DB schema (`scaffolds/nextjs-tier3/src/lib/schema.ts`) — no seed data, no fixtures, no real PII.
- `innerHTML` interpolations (3 surfaces: contact status, search results, video facade) — all consume server-controlled or build-time static data, not user input. The contact-form path explicitly `escapeHtml()`s user values before email-send (defense-in-depth).
- Brazilian CNPJ/CPF, Portuguese NIF, German USt-IdNr — all real-format strings in the repo are either marked DRAFT in BRIEF, or are template/placeholder values (`DE123456789`), or are the publicly-published Impressum value of one prospect (Cafe Del Corso `DE814793979`, also handled under M1).
- Vercel project IDs in `.vercel/project.json` — not committed (`.vercel/` is gitignored).
- License/author emails — none committed beyond the user's intentional public email.

---

## Methodology notes

- Pattern hunts run via `grep -rE` against the committed tree (excluding `node_modules/` and `dist/` automatically since they are gitignored and not in `git ls-files`).
- Some `grep -rE` invocations with broader regexes were blocked by the sandbox; I substituted narrower searches that achieved the same coverage.
- No git-log archaeology was performed — only the current-tip state was scanned. A separate audit of git history (e.g. `git log --all -p | scan…`) is recommended if the user ever rotated a secret that may have been committed and then removed.
- The reviewer-name and prospect-business data flagged under M1/M2 is technically public information (Google reviews, Impressum), so its "leak" framing is contextual, not legal.
- The contact-form code in `clients/baragency` was the only API endpoint reviewed. If the user adds more endpoints to other clients, re-run this audit.
