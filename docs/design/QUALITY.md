# QUALITY.md — Validation, CI/CD, and Code Quality Gates
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5), with **pipeline depth scaling by stack tier** (which follows product type per `TECH.md` §1):

- **Tier 1 stack (Type 1 single-page):** Minimum pipeline — lint + visual review reminder. No type-check (no TypeScript), no tests (no business logic).
- **Tier 2 stack (Type 1 multi-page, Type 2):** Standard pipeline — type-check + lint + parity validators + build + visual reminder. Tests optional (add when `lib/` accumulates non-trivial code).
- **Tier 3 stack (Type 3+):** Full pipeline — adds Vitest + coverage targets + bundle-budget gate. **Tests are mandatory** at Type 3+ because there's real business logic to verify.

CI/CD (GitHub Actions in Section 4) applies universally — every client repo gets `ci.yml` + `security.yml` regardless of type. Pre-commit hooks (Section 5) activate when 2+ collaborators join the project.

See `TECH.md` §1 for the product-type matrix and Section 2 of this doc for the per-tier pipeline definitions.

This is the agency-wide source of truth for code quality — what "ready to ship" means at the engineering level, the validation pipeline, CI/CD setup, coverage targets, and pre-commit hooks.

`CHECKLIST.md` is the *visual and product* gate (does it look right, does it work). This doc is the *engineering* gate (does the code itself meet standards). Both must pass before handoff.

Other standards docs reference this doc by name, never by section.

---

## Rules at a glance

- **`pnpm validate` runs the full pipeline:** type-check → lint → translation parity → design-tokens parity → test → build → visual review reminder. All steps pass before any commit goes out for review.
- **CI runs on every PR and every push to `main`** — same pipeline, no exceptions per-project.
- **Weekly `pnpm audit --prod --audit-level=high`** runs as a cron, with Slack/email alert on failure.
- **Coverage targets per area:** 80 % for `lib/` and `hooks/`, 60 % for components, 100 % for security and form-handling code.
- **No CI bypass.** Failed checks block the merge. If a check is genuinely wrong, fix the check — don't add `--no-verify` or merge anyway.
- **Pre-commit hooks** run a fast subset (`lint --changed`) locally so CI is the last line of defense, not the first.

---

## Table of contents

1. [What "validate" means](#1-what-validate-means)
2. [The `pnpm validate` pipeline](#2-the-pnpm-validate-pipeline)
3. [Parity validators — translations and design tokens](#3-parity-validators--translations-and-design-tokens)
4. [CI/CD with GitHub Actions](#4-cicd-with-github-actions)
5. [Pre-commit hooks](#5-pre-commit-hooks)
6. [Test coverage targets](#6-test-coverage-targets)
7. [Test naming convention](#7-test-naming-convention)
8. [Dependency audit policy](#8-dependency-audit-policy)
9. [Tools](#9-tools)

---

## 1. What "validate" means

A build is "validated" when it passes all of the following, in order:

1. **TypeScript strict mode** — `tsc --noEmit` returns zero errors
2. **Linting** — Biome (or ESLint) returns zero errors and zero warnings on changed files
3. **Translation parity** (multilingual sites only) — every locale has the same keys
4. **Design tokens parity** — every token referenced in components exists in `tokens.css`
5. **Tests** — unit + integration suites pass; coverage meets per-area thresholds
6. **Build** — `pnpm build` exits 0 with no warnings
7. **Visual review** — screenshots at 375 / 768 / 1280 reviewed against `CHECKLIST.md` and `DESIGN-BEST-PRACTICES.md` AI-template tells

Steps 1–6 are automatable. Step 7 is a human gate — but the validation script reminds you of it.

---

## 2. The `pnpm validate` pipeline

The pipeline scales with the project. Pick the tier that matches the stack — adding more steps than the tier needs is friction without value; skipping required steps is a gap.

### Tier 1 — Pure HTML (single landing page, no framework)

```json
{
  "scripts": {
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "build": "echo 'no build step'",
    "validate": "pnpm lint && node ./scripts/visual-validate-reminder.mjs"
  }
}
```

The smallest meaningful pipeline. There's no TypeScript, no test framework, no translation files, no token validator. Lint + visual review reminder is the whole gate.

### Tier 2 — Astro (the agency default)

```json
{
  "scripts": {
    "type-check": "astro check",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "build": "astro build",
    "validate:translations": "node ./scripts/validate-translations.mjs",
    "validate:tokens": "node ./scripts/validate-tokens.mjs",
    "validate": "pnpm type-check && pnpm lint && pnpm validate:translations && pnpm validate:tokens && pnpm build && node ./scripts/visual-validate-reminder.mjs"
  }
}
```

Adds type-check, parity validators, and a real build step. Vitest is not required at this tier (most Tier 2 sites have no business logic to test) — add it only when `lib/` accumulates non-trivial code.

### Tier 3 — Next.js (multi-page, interactive, API routes)

```json
{
  "scripts": {
    "type-check": "tsc --noEmit",
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "build": "next build",
    "validate:translations": "node ./scripts/validate-translations.mjs",
    "validate:tokens": "node ./scripts/validate-tokens.mjs",
    "validate:bundle-budget": "node ./scripts/check-bundle-budget.mjs",
    "validate": "pnpm type-check && pnpm lint && pnpm validate:translations && pnpm validate:tokens && pnpm test && pnpm build && pnpm validate:bundle-budget && node ./scripts/visual-validate-reminder.mjs"
  }
}
```

Full pipeline. Adds Vitest (mandatory at Tier 3 — there's business logic, hooks, API handlers), and the bundle-budget gate from `PERFORMANCE.md`.

### Operating rules (apply to every tier)

- **Single command.** `pnpm validate` runs everything in order. No "just skip the test step" — if a step is too slow to run pre-commit, fix the step.
- **Fail fast.** Each step exits non-zero on failure; the pipeline stops there. The first error gets your attention without 47 cascading downstream errors burying it.
- **Single-locale projects skip the translation validator.** Drop the line from the pipeline entirely — don't ship a no-op script.
- **Sites without `tokens.css` skip the token validator.** Same pattern.
- **The visual reminder is a script that prints the manual checks remaining.** It does not block the build — that's a human decision. But it ensures the visual gate is not silently forgotten.

### Picking your tier

Match the project's actual stack, not aspirations. A Tier 2 demo running the Tier 3 pipeline will look non-compliant for steps it doesn't need (no tests, no bundle budget). When the project graduates (e.g., adds API routes for a booking flow), the pipeline graduates with it.

```javascript
// scripts/visual-validate-reminder.mjs
console.log(`
  ✓ All automated checks passed.

  Visual review required before declaring done:
    1. Screenshot at 375 × 812, 768 × 1024, 1280 × 900
    2. Review each against DESIGN-BEST-PRACTICES.md AI-template tells
    3. Run the leanest free launch combo from CHECKLIST.md

  Open: http://localhost:4321
`);
```

---

## 3. Parity validators — translations and design tokens

Two custom validators catch defects that no off-the-shelf linter catches.

### Translation parity

See `I18N.md` for the full `validate:translations` script. The summary:

- Compares every locale's flattened key set against the reference locale (DE for Berlin clients, PT for Portugal clients)
- Reports missing keys (silent fallback) and extra keys (drift)
- Exits non-zero on any difference

### Design-tokens parity

A custom script that walks every `.astro` / `.tsx` / `.css` / `.module.css` file and checks every `var(--token-name)` reference against the tokens defined in `src/styles/tokens.css`. A reference to a token that doesn't exist passes Biome (it's syntactically valid CSS) but silently breaks the page.

```javascript
// scripts/validate-tokens.mjs — sketch
import fs from 'node:fs';
import { glob } from 'glob';

const tokenFile = fs.readFileSync('src/styles/tokens.css', 'utf8');
const defined = new Set([...tokenFile.matchAll(/--([\w-]+):/g)].map(m => m[1]));

const files = await glob('src/**/*.{astro,tsx,css,module.css}');
const referenced = new Set();
for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  for (const match of content.matchAll(/var\(--([\w-]+)\)/g)) {
    referenced.add(match[1]);
  }
}

const undefinedRefs = [...referenced].filter(t => !defined.has(t));
if (undefinedRefs.length) {
  console.error(`Undefined CSS tokens referenced:`, undefinedRefs);
  process.exit(1);
}
console.log(`All ${referenced.size} token references resolve to defined values.`);
```

Run both validators in CI and in `pnpm validate`. They're fast (single-pass file walk) and prevent two of the most embarrassing client-facing defects we ship.

---

## 4. CI/CD with GitHub Actions

Every client repo has two workflows in `.github/workflows/`.

> **See also:** `INFRASTRUCTURE.md` §4 has a copy-paste-ready `ci.yml` as part of the agency-template scaffold drop-in. For Type 1–2 builds, that single workflow is all that's required; Type 3 adds `security.yml` per below.

### `ci.yml` — quality gate on every PR

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm type-check
      - run: pnpm lint
      - run: pnpm validate:translations
      - run: pnpm validate:tokens
      - run: pnpm test
      - run: pnpm build
```

### `security.yml` — weekly dependency audit

```yaml
name: Security

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 0 * * 1'  # Monday 00:00 UTC

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'pnpm'
      - run: pnpm install --frozen-lockfile
      - run: pnpm audit --prod --audit-level=high
```

**Operating rules:**

- **Both workflows fail the build on error.** No "informational only" mode.
- **Vercel auto-deploy is gated by CI.** Vercel respects GitHub status checks — a failing CI prevents production deploy automatically.
- **Preview deployments still happen on PRs.** Vercel deploys the preview even if CI fails, but the PR can't merge until CI is green.
- **No CodeQL, no Snyk, no SAST.** Overkill for the agency tier. The `pnpm audit` cron catches the common case (known CVE in transitive deps).

---

## 5. Pre-commit hooks

A pre-commit hook runs a fast subset of validation locally so CI catches the slow checks. Use **Husky** or **simple-git-hooks**:

```bash
pnpm add -D simple-git-hooks lint-staged
```

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm exec lint-staged"
  },
  "lint-staged": {
    "*.{ts,tsx,astro,js,jsx}": ["biome check --write"],
    "src/i18n/**/*.json": "node ./scripts/validate-translations.mjs"
  },
  "scripts": {
    "postinstall": "simple-git-hooks"
  }
}
```

**Rules:**

- **Pre-commit runs only on staged files** — fast, < 5 s typical. The full pipeline runs in CI.
- **Pre-commit runs Biome with `--write`** — auto-fixes formatting, lint errors that can be fixed mechanically. Commits then proceed with the fixed version.
- **Translation files trigger the parity validator** because adding a key in one locale and forgetting the others is the single most common defect we ship.
- **Never `--no-verify`.** If a hook fails, fix the underlying problem. Bypassing the hook is a tomorrow-problem-creation device.

---

## 6. Test coverage targets

| Area | Coverage target | Why |
|------|-----------------|-----|
| `lib/` — business logic, formatters, helpers | **80 %** | Pure functions, easy to test, highest leverage |
| `hooks/` (Tier 3) | **80 %** | Same |
| Components | **60 %** | Visual/interactive — hard to test exhaustively; Storybook or visual regression covers the gaps |
| Security utilities (form validation, sanitization, rate limit) | **100 %** | Defect cost is highest; tests are the proof of correctness |
| Form handlers | **100 %** | Same — every form is a potential PII/security incident |
| Configs (`SITE`, translation files, token files) | **n/a** | Data, not logic |

**Reporting:**

- `pnpm test:coverage` runs Vitest with v8 coverage and outputs `coverage/index.html`
- CI uploads the coverage report as an artifact on every PR
- Per-area thresholds enforced via `vitest.config.ts`:

```typescript
export default defineConfig({
  test: {
    coverage: {
      thresholds: {
        'src/lib/**': { lines: 80, functions: 80, branches: 80, statements: 80 },
        'src/lib/security/**': { lines: 100, functions: 100, branches: 100, statements: 100 },
        'src/components/**': { lines: 60, functions: 60, branches: 60, statements: 60 },
      }
    }
  }
});
```

---

## 7. Test naming convention

Consistent across all source projects: tests describe **behavior**, not implementation.

```typescript
// CORRECT — describes the behavior under a condition
describe('SubmitContactForm', () => {
  it('should reject submission when honeypot field is filled', () => { ... });
  it('should return 429 when rate limit exceeded', () => { ... });
  it('should sanitize HTML from the message field before sending', () => { ... });
});

// WRONG — describes the code
describe('SubmitContactForm', () => {
  it('checks honeypot', () => { ... });
  it('returns 429', () => { ... });
  it('sanitize works', () => { ... });
});
```

**Pattern:** `it('should [expected behavior] when [condition]', ...)`. If the description doesn't read like a sentence, the test is testing the wrong thing.

---

## 8. Dependency audit policy

- **Weekly cron audit** via `security.yml` — catches CVEs published since last manual install
- **Audit on every PR** — a PR that adds a dep with a known high-severity CVE is blocked
- **High and critical fail the build.** Moderate and low warn but don't block.
- **`pnpm audit --fix` is opt-in, not automatic.** Verifying a security patch doesn't break production is a human decision.

When `pnpm audit` flags a dependency:

1. Read the advisory — is it actually exploitable in our usage pattern?
2. Check if a patched version exists. If yes → upgrade.
3. If no patched version → check if a replacement library exists or if removal is possible.
4. If neither → file an issue with the dependency's maintainer; document the exception in the project's `SECURITY.md` notes; reassess weekly.

Never `--audit-level=none` to hide the problem.

---

## 9. Tools

All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| Biome | Free | [biomejs.dev](https://biomejs.dev/) | Linter + formatter (replaces ESLint + Prettier). 10× faster than ESLint, single config |
| Vitest | Free | [vitest.dev](https://vitest.dev/) | Test runner with Jest-compatible API, native ESM, built-in coverage via v8 |
| GitHub Actions | Free (public repos + generous private quota) | [github.com/features/actions](https://github.com/features/actions) | CI/CD for the agency tier — no separate Jenkins/CircleCI needed |
| simple-git-hooks | Free | [github.com/toplenboren/simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) | Pre-commit hooks without Husky's ceremony |
| lint-staged | Free | [github.com/lint-staged/lint-staged](https://github.com/lint-staged/lint-staged) | Run linters only on staged files — keeps pre-commit fast |
| @vitest/coverage-v8 | Free | [vitest.dev/guide/coverage](https://vitest.dev/guide/coverage) | Coverage reports for Vitest, V8-based (no Babel) |
| Codecov | Freemium | [codecov.io](https://about.codecov.io/) | Optional — coverage tracking across PRs. Free tier covers public + small private repos |

**Order of adoption:**

1. Biome + Vitest from day one of every new project — non-negotiable
2. GitHub Actions CI as soon as the project has a remote
3. Pre-commit hooks once 2+ people contribute to the repo
4. Codecov only if coverage trends become a retainer-phase discussion point
