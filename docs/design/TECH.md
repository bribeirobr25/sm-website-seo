# TECH.md — Tech Best Practices
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5).

- **Universal at every type:** Configuration as Code, naming conventions, file-size discipline, the 3× rule, DDD-flavored organization, TypeScript strict mode, the `engines` pin, deployment workflow.
- **Activates at Type 3+:** Service-agnostic abstraction patterns (Section 5), where the project actually has an external service to abstract (Resend, Stripe, etc.). For Type 1-2, the abstraction overhead isn't worth the cost.

Section 1 below is the **product-type-then-stack decision matrix** — read it before scoping any new project. Each client project inherits these standards; project-specific overrides go in the client's own `CLAUDE.md`.

**Source projects:** bible-tt (Next.js 16, DDD, static-first), MyPlanny/retail-store (React 19, Vite 6, Zustand, Zod), diBoaS (Next.js 16, Turborepo, full-stack).

**Read this before starting any client project.**

---

## Table of contents

1. [Product type and stack decision](#1-product-type-and-stack-decision)
2. [Tech stack reference](#2-tech-stack-reference)
3. [Project structure](#3-project-structure)
4. [TypeScript standards](#4-typescript-standards)
5. [Code organization principles](#5-code-organization-principles)
6. [Naming conventions](#6-naming-conventions)
7. [CSS and design token standards](#7-css-and-design-token-standards)
8. [Component standards](#8-component-standards)
9. [SEO standards](#9-seo-standards)
10. [Performance standards](#10-performance-standards)
11. [i18n and multilingual sites](#11-i18n-and-multilingual-sites)
12. [Security baseline](#12-security-baseline)
13. [Error handling](#13-error-handling)
14. [Testing](#14-testing)
15. [Dependency management](#15-dependency-management)
16. [Git and commit discipline](#16-git-and-commit-discipline)
17. [Deployment](#17-deployment)
18. [Technical debt policy](#18-technical-debt-policy)
19. [Anti-patterns — never do these](#19-anti-patterns--never-do-these)
20. [Per-client CLAUDE.md template](#20-per-client-claudemd-template)

---

## 1. Product type and stack decision

Two decisions, in order. **Product type first** (what the project does), then **stack tier** (the technology that delivers it). The standards activation map (Section 1.3) follows from the product type, not the stack — a Type 1 info site and a Type 3 booking system have very different applicable rules even if both run on Astro.

### 1.1 Product types — the agency's service catalog

| Type | Name | What it is | Typical examples |
|------|------|------------|------------------|
| **1** | **Static info** | Landing or multi-page site with information only. CTAs are phone, WhatsApp, maps. **No forms, no DB, no server logic.** | Restaurant info + phone CTA · Barber info-only · Clinic info + call to book · Trade business presence |
| **2** | **Info + contact** | Type 1 + a contact / newsletter / waitlist form that emails the owner via an ESP. **No DB.** | Restaurant + reservation request form · Studio + class inquiry form · Clinic + appointment request (email-handed-off, not real-time) |
| **3** | **Info + booking** | Type 1 + a booking / appointment / table-reservation system with **DB-backed state**. Real-time availability, multiple sessions, confirmations. | Restaurant + live table booking · Barber + slot reservation · Studio + class schedule with capacity · Clinic + appointment system |
| **4** | **Info + transactional** | Type 1 + online ordering, payment, fulfillment tracking. **PCI-relevant.** | Restaurant + delivery / takeaway ordering · Retail + online catalog · Studio + class purchases |
| **5** | **Application** | Custom application with auth, user accounts, multi-role, dashboards. Marketing landing is a sub-component, not the whole product. | Todo / task system · Member portal · Loyalty program backend · Admin tooling |

### 1.2 Stack tier follows from product type

| Product type | Stack tier (default) | Stack tier (acceptable alternative) |
|--------------|----------------------|--------------------------------------|
| Type 1 (Static info, single page) | Tier 1 — Pure HTML | Tier 2 — Astro |
| Type 1 (Static info, multi-page) | Tier 2 — Astro | — |
| Type 2 (Info + contact) | Tier 2 — Astro + serverless endpoint | Tier 3 — Next.js (only if other Type-3 features arrive soon) |
| Type 3 (Info + booking) | Tier 3 — Next.js | Tier 2 — Astro + many endpoints (acceptable only for small scope) |
| Type 4 (Info + transactional) | Tier 3 — Next.js + payment stack | — |
| Type 5 (Application) | Tier 3 — Next.js + auth + DB | — |

**Rule:** Default to the simplest stack that fulfills the product type. A Type 1 restaurant does not need Next.js. A Type 3 booking system does not need Astro stretched past its sweet spot. Over-engineering wastes time and hurts performance.

### 1.3 Standards activation map — what applies at which type

Some standards are universal (apply to every project). Others activate from a specific product type onward. The table below is the canonical activation matrix.

#### Universal core — applies to all types (1–5)

| Standard | Why it's universal |
|----------|-------------------|
| `DESIGN-BEST-PRACTICES.md` | Every project has a UI |
| `PERFORMANCE.md` (budgets, image rules, font rules, animation perf) | Every page has Core Web Vitals |
| `ACCESSIBILITY.md` | WCAG 2.2 AA is a contract, not a feature |
| `SEO.md` | Every project is findable on Google |
| `I18N.md` `lang` attribute + locale config | Even single-language sites need `lang` |
| `SECURITY.md` baseline (TLS, 6 headers, no-secrets-in-code, Impressum) | Every site must ship these |
| `RELIABILITY.md` core (404, JS-disabled fallback, defensive data, backup/DR) | Every site can fail; every site needs to recover |
| `TECH.md` (Configuration as Code, naming, 3× rule, file-size discipline, engines pin) | Engineering hygiene applies everywhere |
| `QUALITY.md` `pnpm validate` exists (pipeline depth scales) | Every project has a "ready to ship" gate |
| `CHECKLIST.md` | Every project goes through pre-delivery review |

#### Scoped activation — applies from a specific type onward

| Capability | Activates at | Lives in |
|------------|-------------|----------|
| Form validation / sanitization / honeypot / rate limit | **Type 2+** | `FORMS.md` §2-4 |
| `fetchWithRetry` + exponential backoff | **Type 2+** | `RELIABILITY.md` §4 |
| ESP fallback / form recovery / phone-number redundancy | **Type 2+** | `RELIABILITY.md` §5, §11 |
| Idempotency keys | **Type 2+** | `FORMS.md` §5 |
| Secret rotation cadence (90-day) | **Type 2+** | `SECURITY.md` §8 |
| Application logging | **Type 2+ at production**, mandatory at Type 3+ | `RELIABILITY.md` §8 |
| Uptime monitoring | All types at production cutover | `RELIABILITY.md` §9 |
| Analytics events beyond GSC | All types at production cutover | `ANALYTICS.md` |
| Email enumeration prevention | **Type 3+** | `FORMS.md` §6 |
| DOMPurify / rich-text handling | **Type 3+** | `FORMS.md` §7 |
| Error boundaries (3 layers) | **Type 3+** (Tier 3 stack) | `RELIABILITY.md` §6 |
| Per-route JS bundle budget (300KB) | **Type 3+** (Tier 3 stack) | `PERFORMANCE.md` §1 |
| CSP nonce pattern | **Type 3+** | `SECURITY.md` §3 upgrade |
| Encryption at rest (AES-256-GCM) + HMAC blind index | **Type 3+** with stored PII | `SECURITY.md` (referenced; not yet detailed) |
| Service-agnostic abstraction layer (provider patterns) | **Type 3+** | `TECH.md` Section 5 |
| Vitest tests + coverage targets | **Type 3+** mandatory | `QUALITY.md` §6 |
| Payment idempotency, refund handling, PCI considerations | **Type 4 only** | Not yet documented (expand when first Type 4 client appears) |
| Auth, session security, GDPR data subject rights, multi-role access | **Type 5 only** | Not yet documented (expand when first Type 5 client appears) |

**How to read this table:** when scoping a project, look up the product type, then check which scoped capabilities activate. Anything not listed for that type is *not in scope* — don't build form retry logic for a Type 1 info site.

### 1.4 The audit angle

The activation matrix doubles as the audit baseline. A Type 1 site that "fails" the FORMS.md gates isn't failing — those gates don't apply. A Type 3 site that "passes" Type 1 gates is barely halfway. The auditor declares the product type first, then scores only the applicable standards.

See `CHECKLIST.md` §8 for the audit template.

---

## 2. Tech stack reference

### Standard agency stack per tier

**Tier 1 — Pure HTML (single landing page)**

| Layer | Choice |
|-------|--------|
| Markup | HTML5 |
| Styling | Tailwind CSS v4 (via CDN for demos; via PostCSS for production) |
| Scripting | Vanilla JS — no framework |
| Icons | Lucide (SVG sprite or inline SVGs) |
| Fonts | Google Fonts (max 2 families, `display=swap`) |
| Hosting | Vercel (static HTML deploy) |
| Package manager | pnpm (if any build step is needed) |

**Tier 2 — Astro (multi-page static)**

| Layer | Choice |
|-------|--------|
| Framework | Astro 5.2+ |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` plugin |
| Scripting | Vanilla JS via Astro `<script>` islands |
| Icons | Lucide (as Astro components or inline SVG) |
| Content | Markdown / MDX via Astro Content Collections |
| Testing | Vitest (unit) |
| Linting | Biome |
| Hosting | Vercel |
| Package manager | pnpm |

> **Tailwind v4 setup:** Use `@tailwindcss/vite` in `vite.plugins` — NOT the old `@astrojs/tailwind` integration (deprecated for v4). Run `npx astro add tailwind` on Astro 5.2+ and it wires this automatically. Tokens go in CSS with `@theme {}`, not in `tailwind.config.ts`. Import Tailwind in your base CSS with `@import "tailwindcss"`.

**Tier 3 — Next.js (dynamic features)**

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Validation | Zod 4 |
| Icons | Lucide React |
| Email / forms | Resend (transactional), React Hook Form |
| Analytics | Vercel Analytics (privacy-respecting, no cookies) |
| Error tracking | Sentry (when warranted) |
| Testing | Vitest + React Testing Library, Playwright (E2E) |
| Linting | Biome |
| Hosting | Vercel |
| Package manager | pnpm |

### What is always the same across all tiers

- **Package manager:** pnpm. Never npm. Never yarn.
- **Styling:** Tailwind CSS. No CSS-in-JS.
- **Icons:** Lucide. One icon library per project. Never mix.
- **Hosting:** Vercel (free tier for client demos, paid plan after client commits).
- **Linting:** Biome (replaces ESLint + Prettier with a single fast tool).
- **Commits:** Atomic, English messages, no auto-push.

---

## 3. Project structure

### Agency-level structure

```
sm-website-seo/
├── docs/
│   ├── design/
│   │   ├── DESIGN-BEST-PRACTICES.md   ← UI/UX standards (this project's design bible)
│   │   └── TECH.md                    ← This file
│   └── clients/
│       └── [client-slug]/             ← Per-client docs
│           ├── CLAUDE.md              ← Claude Code entry point for this client
│           ├── design.md              ← Per-client design decisions
│           └── BRIEF.md               ← Business context, contacts, scope
├── clients/
│   └── [client-slug]/                 ← Client project source code
│       └── (see per-client structure below)
└── shared/
    ├── templates/                     ← Reusable HTML/Astro/Next.js templates
    │   ├── landing-html/              ← Tier 1 pure HTML template
    │   ├── landing-astro/             ← Tier 2 Astro template
    │   └── landing-next/              ← Tier 3 Next.js template
    └── components/                    ← Shared Astro/React components
        ├── ContactBlock.astro
        ├── HoursTable.astro
        ├── ReviewCard.astro
        └── MapEmbed.astro
```

### Per-client project structure (Tier 2 — Astro)

```
clients/[client-slug]/
├── CLAUDE.md                          ← Claude Code session entry point
├── package.json
├── astro.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── biome.json
├── public/
│   ├── favicon.svg
│   ├── images/                        ← Real business photos (WebP, optimized)
│   └── fonts/                         ← Self-hosted fonts (if not using Google Fonts CDN)
└── src/
    ├── assets/
    │   └── logo.svg
    ├── components/
    │   ├── layout/
    │   │   ├── Header.astro
    │   │   └── Footer.astro
    │   ├── sections/
    │   │   ├── Hero.astro
    │   │   ├── Services.astro
    │   │   ├── About.astro
    │   │   ├── Gallery.astro
    │   │   ├── Testimonials.astro
    │   │   └── Contact.astro
    │   └── ui/
    │       ├── Button.astro
    │       ├── HoursTable.astro
    │       ├── ReviewCard.astro
    │       └── MapEmbed.astro
    ├── layouts/
    │   └── BaseLayout.astro            ← <html>, <head>, SEO meta, fonts
    ├── pages/
    │   ├── index.astro                 ← Landing page (or root of multi-page site)
    │   ├── services.astro              ← (if multi-page)
    │   └── contact.astro              ← (if multi-page)
    ├── content/
    │   └── config.ts                   ← Astro Content Collections schema
    └── styles/
        ├── tokens.css                  ← CSS custom properties (colors, fonts, spacing)
        └── global.css                  ← Reset, base styles, typography
```

### Per-client project structure (Tier 3 — Next.js)

```
clients/[client-slug]/
├── CLAUDE.md
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── biome.json
├── public/
│   ├── favicon.svg
│   └── images/
└── src/
    ├── app/
    │   ├── layout.tsx                  ← Root layout: html, body, fonts, metadata
    │   ├── page.tsx                    ← Home / landing
    │   ├── globals.css                 ← Tokens + reset
    │   └── api/
    │       └── contact/route.ts        ← Contact form endpoint (if needed)
    ├── components/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    └── lib/
        └── metadata.ts                 ← Shared generateMetadata helper
```

---

## 4. TypeScript standards

### Always use strict mode

Every TypeScript project (Tier 2 and Tier 3) must have these settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true
  }
}
```

### Rules

- **Never `any`.** If you cannot type something, narrow the type or use `unknown` + a type guard.
- **Never `// @ts-ignore` or `// @ts-expect-error`.** Fix the underlying problem.
- **Use `type` imports** for type-only dependencies: `import type { ContactFormData } from './schema'`.
- **Prefer `interface` for object shapes**, `type` for unions, intersections, and computed types.
- **No `enum`.** Use string literal unions: `type ButtonVariant = 'primary' | 'secondary'`.
- **Path aliases.** Configure `@/*` → `src/*` in `tsconfig.json`. Never use relative paths that climb more than one level (`../../`).

### Zod for form validation (Tier 3 only)

When handling user input (contact forms, booking), validate at the API boundary with Zod:

```typescript
// src/lib/schemas/contact.ts
import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
```

- Same schema used for client-side form validation and server-side API validation.
- Never trust client-sent data on the server without re-validating.

---

## 5. Code organization principles

### Domain-Driven Design (adapted for small sites)

All three source projects use DDD. For landing pages the principle simplifies to:

**Organize by what, not by type.**

```
// CORRECT — organized by section/concern
components/sections/Hero.astro
components/sections/Services.astro
components/sections/Contact.astro

// WRONG — organized by technical type
components/layout/Hero.astro
components/typography/Heading.astro
components/inputs/Form.astro
```

### Layers that must stay separated

| Layer | What goes here | What must NOT go here |
|-------|---------------|----------------------|
| `components/ui/` | Reusable primitives (Button, Card, HoursTable) | Business logic, API calls |
| `components/sections/` | Page sections (Hero, Services) | Shared primitives |
| `components/layout/` | Header, Footer, BaseLayout | Page-specific content |
| `lib/` | Utilities, metadata helpers, schemas | Components, UI |
| `app/` or `pages/` | Routing, page composition | Business logic |

### Configuration as Code — the no-hardcoded-values rule

**Every value that could plausibly change is configuration, not a literal.** This is the unifying principle behind the more specific "no hardcoded X" rules scattered across the docs:

| Value type | Lives in | Read in components via |
|------------|----------|------------------------|
| Colors / fonts / spacing | `src/styles/tokens.css` | `var(--color-accent)` (see `DESIGN-BEST-PRACTICES.md`) |
| User-facing copy | Translation JSON files | `t('key')` (see `I18N.md`) — required on multilingual sites |
| Business data (name, phone, address, hours, social, NIF) | `src/lib/site.ts` (`SITE` export) | `SITE.phone`, `SITE.hours[day]` |
| Prices, rates, computed numbers | `src/lib/<domain>/constants.ts` | Named export, never a literal in JSX |
| External URLs (maps, complaints book, registrar) | `SITE.urls.<name>` | `SITE.urls.complaints` |
| API endpoints, env-dependent URLs | `import.meta.env.PUBLIC_*` / `process.env.*` | Via a config wrapper, never raw `process.env` in components |
| Image paths | `src/lib/assets.ts` `ASSET_PATHS` export (multi-page sites) | `ASSET_PATHS.heroes.home` |
| Feature flags | `import.meta.env.PUBLIC_FEATURE_*` | Boolean coerced in a `lib/flags.ts` helper |

**The rule of thumb:** if a value would need to change for a different client, locale, environment, or business decision — and you'd have to edit *more than one file* — it's hardcoded. Centralize it.

**The exception:** structural literals that *are* the semantic content (HTML tag names, ARIA role values, route slugs that match user expectations) are not configuration. Don't make `<h1>` configurable.

### The 3× rule

> First occurrence: write inline. Second: tolerate duplication. Third: extract to a shared component.

Applied to the agency:
- First client needs a "review card" → write it inline in that client's project.
- Second client needs a similar review card → copy it.
- Third client needs one → extract to `shared/components/ReviewCard.astro` and import across all three.

### File-size discipline — consistency over forced splits

Recommended file sizes are guidelines, not hard limits:

| Layer | Recommended | Hard limit |
|-------|-------------|-----------|
| Components | ~150 lines | 300 |
| Services / utilities | ~200 lines | 400 |
| Configs / data files | unlimited | unlimited |

**Consistency is the priority** — a 280-line component that stays coherent and respects DRY is better than two 140-line components that duplicate logic or break cohesion. Split when it genuinely improves clarity or reuse. Don't split just to hit a line count. The 3× rule above is the real trigger for extraction, not file length.

### Component scope (never inside another component)

**Never define a component inside another component.** This was the #1 source of bugs in the source projects. Define every component at module (file) scope.

```typescript
// CORRECT
function Hero() { return <section>...</section>; }
function Services() { return <section>...</section>; }

// WRONG — Services re-created on every Hero render
function Hero() {
  function Services() { return <section>...</section>; } // BUG
  return <><Services /></>;
}
```

---

## 6. Naming conventions

### Language

**All code is in English.** German, Portuguese, or other language labels exist only in content files (`.md`, `.astro` template strings, i18n JSON). No German or Portuguese variable names, function names, or comments in source code.

```typescript
// CORRECT
const openingHours = { monday: '09:00-18:00' };
const isMenuOpen = false;

// WRONG
const Öffnungszeiten = { Montag: '09:00-18:00' };
const menuAberto = false;
```

### Naming patterns

| Entity | Convention | Example |
|--------|-----------|---------|
| Components (Astro/React) | PascalCase | `HeroSection`, `ReviewCard`, `ContactForm` |
| Files (components) | PascalCase | `HeroSection.astro`, `ReviewCard.tsx` |
| Files (utilities, lib) | camelCase | `generateMetadata.ts`, `contactSchema.ts` |
| CSS custom properties | kebab-case | `--color-accent`, `--font-display` |
| CSS utility classes | kebab-case | `.contact-block`, `.hours-table` |
| Constants | SCREAMING_SNAKE_CASE | `BUSINESS_PHONE`, `MAX_MESSAGE_LENGTH` |
| TypeScript types | PascalCase | `ContactFormData`, `BusinessHours` |
| Route segments (Next.js) | kebab-case directories | `app/about-us/page.tsx` |
| Client project slugs | kebab-case | `clients/bella-vita-berlin/` |

### File naming rules

```
// Name by what it IS, not how it looks or where it appears
HeroSection.astro      ← what it IS (a hero section)
ContactBlock.astro     ← what it IS
ReviewCard.astro       ← what it IS

// Not:
BigBox.astro           ← how it LOOKS
TopArea.astro          ← where it APPEARS
Component1.astro       ← meaningless number
```

---

## 7. CSS and design token standards

### Token file is the single source of truth

Every client project has one file that defines all CSS custom properties. No hardcoded hex, pixel, or font values anywhere else.

**`src/styles/tokens.css`:**

```css
:root {
  /* Colors */
  --color-bg:          #f9f7f4;      /* warm off-white */
  --color-surface:     #ffffff;
  --color-text:        #1a1814;      /* near-black */
  --color-text-muted:  #6b6560;
  --color-accent:      #c04a1e;      /* client brand color */
  --color-border:      #e5e0da;

  /* Typography */
  --font-display:      'Playfair Display', Georgia, serif;
  --font-body:         'Outfit', system-ui, sans-serif;

  /* Spacing */
  --section-padding:   clamp(4rem, 8vw, 8rem);
  --container-width:   min(1200px, calc(100% - 2 * var(--side-padding)));
  --side-padding:      clamp(1rem, 5vw, 3rem);
}
```

**Rules:**
- **Never hardcode hex colors in components.** Always reference `var(--color-accent)`.
- **Never hardcode pixel sizes for sections.** Use token variables.
- **Never pure #000 or #FFF** for text or background — derive from palette.
- **Per-client customization:** Each client overrides tokens in their own `tokens.css`. Templates use neutral variable names.

### Tailwind and CSS custom properties together

Tailwind v4 uses CSS custom properties natively. Configure the palette in `tailwind.config.ts` to reference client tokens:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        accent:     'var(--color-accent)',
        bg:         'var(--color-bg)',
        surface:    'var(--color-surface)',
        textPrimary:'var(--color-text)',
        textMuted:  'var(--color-text-muted)',
        border:     'var(--color-border)',
      },
    },
  },
};
```

Then in templates: `bg-accent`, `text-textPrimary`, `border-border`. Never `bg-[#c04a1e]`.

---

## 8. Component standards

### Every interactive element needs all three states

```html
<!-- Button minimum requirements -->
<button
  class="
    /* base */        px-6 py-3 rounded-full font-bold text-white bg-accent
    /* hover */       hover:brightness-110
    /* active */      active:scale-95
    /* focus */       focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
    /* transition */  transition-all duration-150
    /* disabled */    disabled:opacity-50 disabled:cursor-not-allowed
  "
>
  Call now
</button>
```

Missing any of these states is a bug, not a stylistic choice.

### CTA buttons — one primary per section

Never have two competing primary CTA buttons in the same visual area. Pick one. The other becomes secondary (outline or ghost style).

### Semantic HTML elements

| Use case | Element |
|----------|---------|
| Phone number | `<a href="tel:+49...">` |
| Email | `<a href="mailto:...">` |
| Physical address | `<address>` |
| Business hours | `<table>` with `<time>` |
| Map link | `<a href="https://maps.google.com/?q=...">` |
| Navigation | `<nav>` with `<ul><li><a>` |
| Page sections | `<section aria-labelledby="section-heading-id">` |
| Main content | `<main>` |
| Site header | `<header>` |
| Site footer | `<footer>` |

Never use `<div>` for anything that has a semantic equivalent.

### Required `<head>` metadata per page

```html
<!-- Required for every page -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>[Business Name] — [Service] in [City]</title>
<meta name="description" content="[Concise 150-char description with business name, service, city]" />
<link rel="canonical" href="https://[client-domain]/[page]" />
<html lang="de">                <!-- or pt, en — match primary language -->

<!-- Open Graph (for link previews) -->
<meta property="og:title" content="[Business Name]" />
<meta property="og:description" content="[Same as meta description]" />
<meta property="og:image" content="https://[client-domain]/og-image.jpg" />
<meta property="og:url" content="https://[client-domain]/" />
<meta property="og:type" content="website" />

<!-- Favicon -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
```

### Image component — always use the framework's pipeline in production

Raw `<img src="/images/foo.png">` against files in `public/` works but ships the originals unchanged. A 2 MB hero PNG sinks PageSpeed and blows the <500 KB total page weight target. For any client site that is going to production, images must go through the framework's image pipeline so they emit WebP/AVIF, responsive `srcset`, and explicit `width`/`height` to prevent CLS.

**Astro projects (the common case):**

```astro
---
import { Image } from 'astro:assets';
import heroImg from '../assets/hero.jpg';
---

<Image
  src={heroImg}
  alt="Interior of [Business Name] — [one specific detail]"
  widths={[480, 768, 1280]}
  sizes="(max-width: 768px) 100vw, 1280px"
  format="webp"
  quality={80}
  loading="eager"
/>
```

Required setup:
- Images live in `src/assets/`, not `public/images/`. Only public/ for files that must be served as-is (favicons, robots.txt, OG share image at a stable URL).
- `pnpm.onlyBuiltDependencies` in `package.json` includes `"sharp"` so the optimizer compiles.
- The hero image (LCP) uses `loading="eager"`. Every other image uses `loading="lazy"`.

**Demo-phase exception:** during the cold-call demo stage it's acceptable to keep scraped images in `public/images/` to move fast (the demo is noindex and won't be Lighthouse-scored). The migration to `src/assets/` is a hard gate before going to production — listed in `CHECKLIST.md`.

### Map component — never raw `?output=embed`

The "free" Google Maps embed URL pattern (`https://www.google.com/maps?q=…&output=embed`) renders blank intermittently on production origins. Three patterns, in order of preference (also documented in `DESIGN-BEST-PRACTICES.md` §7):

1. **Static map image + Maps link** — generate once, commit to `public/images/`, link the image to the live Google Maps URL. No runtime dependency, no key, always renders.
2. **Official Google Maps Embed API with key** — `https://www.google.com/maps/embed/v1/place?key=$PUBLIC_GOOGLE_MAPS_KEY&q=…`. Key goes in Vercel env (`PUBLIC_GOOGLE_MAPS_KEY`), never in source.
3. **No map, styled location card** — three lines (address, district, nearest transit) + a directions CTA. Often the best answer.

Pattern (1) wired into Astro:

```astro
---
import staticMap from '../assets/map.webp';
import { Image } from 'astro:assets';

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${
  encodeURIComponent(SITE.fullAddress)
}`;
---
<a href={mapsHref} target="_blank" rel="noopener" class="block">
  <Image src={staticMap} alt={`Map showing ${SITE.name} at ${SITE.address.street}`}
         widths={[400, 800]} format="webp" quality={75} />
</a>
```

---

## 9. SEO standards

SEO is a core deliverable of every project — not an afterthought.

### On-page SEO checklist (per page)

- [ ] `<title>` is unique, 50–60 characters, includes business name + primary keyword + city
- [ ] `<meta description>` is unique, 140–160 characters, action-oriented, includes city
- [ ] `<html lang>` is set to the correct language code
- [ ] One `<h1>` per page (the business name or primary service + city)
- [ ] Heading hierarchy is logical: `h1` → `h2` → `h3`, no skipped levels
- [ ] All images have descriptive `alt` text (not "image1.jpg")
- [ ] `<link rel="canonical">` is set on every page
- [ ] Page loads in under 3 seconds on mobile (PageSpeed Insights ≥ 90)
- [ ] No broken links (validate before delivery)
- [ ] URL slugs are human-readable and in the page's primary language

### Local SEO — schema.org markup

Every local business site must include `LocalBusiness` schema. Add in the `<head>` or as a `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Business Name]",
  "image": "https://[domain]/images/storefront.jpg",
  "telephone": "+49-30-12345678",
  "email": "info@[domain]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street + Number]",
    "addressLocality": "[City]",
    "postalCode": "[ZIP]",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.5200,
    "longitude": 13.4050
  },
  "url": "https://[domain]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/[...]",
    "https://www.instagram.com/[handle]"
  ]
}
```

**Use the correct `@type`:**

See `SEO.md` Section 5 for the full `@type` reference table covering 20+ business categories (restaurant, salon, dentist, gym, hotel, etc.).

### Sitemap

Every multi-page site needs a sitemap. For Astro, use `@astrojs/sitemap`. For Next.js, add `app/sitemap.ts`. For pure HTML, create `sitemap.xml` manually.

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://[client-domain]/sitemap.xml
```

Never disallow crawlers on client sites. Demo pages (Vercel preview URLs) should set `<meta name="robots" content="noindex">` to prevent indexing before the real domain is live.

---

## 10. Performance standards

Performance standards live in **`PERFORMANCE.md`** — targets, demo-vs-production scores, LCP breakdown diagnostic, image rules, font self-hosting recipe, animation rules, and the tools list.

This doc cross-references it by name only; section structure inside `PERFORMANCE.md` is free to evolve without breaking references here.

---

## 11. i18n and multilingual sites

### DE + EN is the standard for Berlin clients

Most Berlin client sites need at minimum **German + English**. German serves the local market; English serves expats, tourists, and international visitors — a significant portion of Berlin's population. The full implementation guide is in `I18N.md`. Key decisions here:

- **German is the primary language.** Root URL (`/`) serves German. English at `/en/`.
- **Brazilian Portuguese** is added for clients explicitly serving the Brazilian community.
- **i18n is decided at project start**, not retrofitted. Retrofitting is expensive.
- Read `I18N.md` for the full implementation pattern per stack tier.

### Approach per stack

**Tier 1 (Pure HTML):** Separate HTML files per language with `hreflang` links. Simple, no build step.

```html
<!-- In the German page <head> -->
<link rel="alternate" hreflang="de" href="https://client.de/" />
<link rel="alternate" hreflang="en" href="https://client.de/en/" />
<link rel="alternate" hreflang="pt-BR" href="https://client.de/pt-br/" />
```

**Tier 2 (Astro):** Use Astro's built-in i18n routing (`/de/`, `/en/`, `/pt-br/`) with a JSON translation file per locale.

**Tier 3 (Next.js):** Use `next-intl` (same library as bible-tt) with URL-based locale routing.

### Rules

- **Primary language first.** The root URL (`/`) serves the client's primary language. Other languages are at `/en/`, `/pt-br/`, etc.
- **All user-facing strings go through the translation system.** No hardcoded text in templates for multilingual sites.
- **Code is always in English.** Translation strings live in JSON files only.
- **Text expansion:** German is ~30% longer than English. Portuguese is ~20% longer. Test all text-heavy components in the longest language.
- **Dates and numbers:** Format using the locale. German: `15.04.2026`. English: `April 15, 2026`. Portuguese: `15 de abril de 2026`.
- **Phone numbers:** Format in local style. Germany: `+49 30 123 456 78`. Include the country code for international accessibility.

### hreflang is required for multilingual sites

Missing `hreflang` = Google indexes duplicate content. Every page that exists in multiple languages must declare all versions.

---

## 12. Security baseline

Security standards live in **`SECURITY.md`** — TLS configuration, the six required security headers, the `vercel.json` recipe, contact-form hardening, German legal requirements, malware/blacklist monitoring, and the pre-launch security gates.

This doc cross-references it by name only; section structure inside `SECURITY.md` is free to evolve without breaking references here.

---

## 13. Error handling

### Principles (from source projects)

- **Return `null` for missing content** — don't throw. Let the caller decide.
- **Validate at boundaries** — URL params, form inputs, API responses. Trust nothing from the outside.
- **No silent failures** — log or display. If content is missing, show an empty state, not a broken layout.
- **Errors should help, not blame** — "We couldn't send your message. Please try calling us directly." not "Error 500."

### Error states every site must handle

| Scenario | Handling |
|----------|---------|
| Contact form submission fails | Inline error message + phone number as fallback |
| Map embed blocked (browser) | Fallback: static map image + Google Maps link |
| Image fails to load | `onerror` fallback or CSS background color placeholder |
| JavaScript disabled | Core content (address, phone, hours) must be accessible without JS |
| Slow connection | Progressive loading — text renders before images |

### No JS dependency for critical info

Phone number, address, and opening hours must be in static HTML — not rendered by JavaScript. If JS fails, the visitor can still contact the business.

---

## 14. Testing

### What to test per tier

**Tier 1 (Pure HTML):** No automated tests. Manual checklist (see DESIGN-BEST-PRACTICES.md delivery checklist).

**Tier 2 (Astro):** Unit tests for utility functions and schema validation with Vitest. No component tests needed for static Astro components.

**Tier 3 (Next.js):** Vitest for API routes, utility functions, and Zod schemas. Playwright E2E for critical flows (contact form submission, booking flow). No unit tests for simple presentational components.

### Test naming convention (from source projects)

```typescript
// Pattern: "should [expected] when [condition]"
it('should return null when chapter file does not exist', () => { ... });
it('should reject form submission when email is invalid', () => { ... });
it('should display error message when server returns 500', () => { ... });
```

### Always run before declaring done

```bash
pnpm lint          # Biome linting (zero warnings policy)
pnpm type-check    # TypeScript (if Tier 2 or 3)
pnpm test:run      # Vitest unit tests (if any)
pnpm build         # Production build (always — catches TypeScript and Astro/Next.js errors)
```

---

## 15. Dependency management

### Principle from source projects

> Every dependency is a liability. Minimize, justify, and audit.

### Before adding any dependency

Ask three questions:
1. Can this be done with native browser APIs or existing deps?
2. Is this dependency actively maintained (check GitHub — last commit, issues, downloads)?
3. What is the bundle size impact? (Check bundlephobia.com)

### Standard allowed dependencies per tier

**Tier 1 (HTML):** Zero npm dependencies. Tailwind via CDN for demos only. Production uses PostCSS build with pnpm.

**Tier 2 (Astro):** Astro core, `@tailwindcss/vite`, Biome, Vitest, Lucide, `@astrojs/sitemap`. (Native image optimization is built into Astro 5 — no separate image package needed.)

**Tier 3 (Next.js):** Next.js, React, Tailwind, Zod, Lucide React, Biome, Vitest, Playwright, `next-intl` (if multilingual), Resend (if contact form), Vercel Analytics.

### Never add without discussion

- Another UI framework alongside Tailwind
- A second icon library
- A state management library for a landing page
- jQuery or any other global DOM library
- A full animation library (Framer Motion) for a site with one or two simple animations — use CSS keyframes instead

### Lockfile

Always commit `pnpm-lock.yaml`. It ensures reproducible builds across machines. Never gitignore it.

### Pin Node and pnpm versions in `package.json`

Every client's `package.json` must declare an `engines` field so Vercel, CI, and local dev all agree on which Node and pnpm to use. A version mismatch between local and CI is one of the most common ways "works on my machine" appears.

```json
{
  "engines": {
    "node": ">=22.12.0",
    "pnpm": ">=10.0.0"
  },
  "packageManager": "pnpm@10.33.2"
}
```

Astro 6 requires Node ≥ 22.12 — Node 20 will fail the build. The `packageManager` field (Corepack standard) pins the exact pnpm version; the `engines` block is the floor.

---

## 16. Git and commit discipline

### These rules are consistent across all source projects and apply here too

1. **Never auto-commit or auto-push.** Manage commits manually. Report what's ready; don't run `git commit` or `git push` unless explicitly asked.

2. **Atomic commits.** One logical change per commit. Each commit should build and work in isolation.

3. **English commit messages.** Imperative mood, present tense.

```bash
# CORRECT
git commit -m "Add contact form with server-side validation"
git commit -m "Optimize hero image to WebP"
git commit -m "Fix phone number formatting for German locale"

# WRONG
git commit -m "changes"
git commit -m "various fixes and improvements"
git commit -m "Kontaktformular hinzugefügt"   # Not English
```

4. **Small, focused changes.** When in doubt, do less and ask for confirmation.

5. **Branch per client, never work on main.** Main branch = production-ready code only.

```bash
# Branch structure
main                    ← stable, deployed or deployable
clients/bella-vita      ← work in progress for this client
clients/dr-muller       ← work in progress for this client
```

6. **Never commit secrets.** API keys, passwords, email credentials must be environment variables. Add `.env` to `.gitignore` immediately when creating a project.

7. **`.gitignore` must always include:**

```
.env
.env.local
.env.*.local
node_modules/
.next/
dist/
.astro/
.vercel/
.DS_Store
```

---

## 17. Deployment

### Vercel workflow

**Demo phase (pre-client approval):**
1. Deploy to Vercel on the default `vercel.app` subdomain.
2. Add `<meta name="robots" content="noindex, nofollow">` to all pages (prevents Google indexing the demo).
3. Share the Vercel preview URL with the client.
4. Never use real client domain on a demo deployment.

**Production phase (after client commits):**
1. Remove the `noindex` meta tag.
2. Add the client's custom domain in Vercel project settings.
3. Point client's DNS to Vercel (update A record / CNAME in domain registrar).
4. Vercel automatically provisions HTTPS via Let's Encrypt.
5. Test the live domain: links, phone numbers, map, form submission.
6. Run PageSpeed Insights on the live domain (not Vercel preview).

### `vercel.json` per client (Astro / HTML)

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

### Environment variables

- Set in Vercel project settings (not in code).
- Prefix client-side variables with `PUBLIC_` (Astro) or `NEXT_PUBLIC_` (Next.js).
- Document all required variables in the project's `CLAUDE.md` under "Environment variables".
- Never log environment variables — even in development.

### Domains

- Register domains via a registrar the client controls (not the agency).
- Client owns their domain, always. The agency only manages the DNS settings during setup.
- Recommend `.de` for German-market businesses, `.com` for international positioning.

---

## 18. Technical debt policy

### Acceptable debt

- Hardcoded temporary values clearly marked with a comment and removal condition: `// TODO: replace with CMS when client upgrades`
- Inline CSS for one-off print or edge cases where Tailwind classes get unwieldy
- Manual `sitemap.xml` instead of generated, for pure HTML projects

### Never acceptable

- `any` types in TypeScript
- Secrets or credentials committed to the repo
- Missing `alt` text on images
- Missing Impressum or Datenschutzerklärung on German-market sites
- Unoptimized images above 200KB in production
- `console.log` statements in production code
- Components defined inside other components
- Hardcoded hex colors in components (use CSS custom properties)
- Direct `localStorage` / `sessionStorage` calls without abstraction (Tier 3 only)

### Debt markers

Tag debt with a searchable comment so it can be found and fixed later:

```typescript
// TEMP: Using static hours until client confirms seasonal schedule
const HOURS = { ... };

// TODO-CMS: Move to Sanity when client upgrades to content management plan
const services = [...];

// CLEANUP: Remove when booking system is integrated in Phase 2
const BOOKING_URL = 'https://calendly.com/client';
```

---

## 19. Anti-patterns — never do these

Synthesized from anti-pattern lists across all three source projects, adapted for the agency context.

### Architecture anti-patterns

- Never use Next.js for a simple static landing page (overkill)
- Never define a component inside another component
- Never import CSS as a module in a project using Tailwind
- Never call `localStorage` directly — abstract it if you need it
- Never hardcode client-specific data (phone, address, hours) in shared templates
- Never mix icon libraries within one project
- Never leave `console.log` in production code

### Code anti-patterns

- Never use `any` in TypeScript
- Never introduce `// @ts-ignore`
- Never write German variable names (`Öffnungszeiten`, `Kontakt`)
- Never use `enum` — use string literal unions
- Never skip `alt` text on images
- Never use `<div>` where a semantic element (`<nav>`, `<address>`, `<button>`, `<a>`) applies
- Never make a phone number non-clickable on mobile

### Performance anti-patterns

- Never commit unoptimized JPG/PNG photos (convert to WebP, compress)
- Never import a full icon library and use 3 icons (tree-shake or use SVG sprites)
- Never use render-blocking fonts without `display=swap`
- Never animate `width`, `height`, `top`, `left`, or `margin` (causes layout thrashing)
- Never use a parallax scroll effect on mobile
- **Never use the raw `https://www.google.com/maps?q=…&output=embed` iframe.** It renders blank intermittently on production origins. Use a static map image, the keyed Embed API, or a no-map location card. See §8 Map component.
- Never reference raw images from `public/` in production builds — use the framework image pipeline (`src/assets/` + `<Image>` in Astro) so output is WebP + responsive

### UI / IA anti-patterns

- Never hide the main navigation on mobile with `hidden sm:flex` (or similar) without providing a hamburger or inline-strip replacement — that leaves the header on a 375 px screen with no way to reach the linked pages
- Never link from the header or footer to a route that doesn't exist yet — every link must resolve. Build a one-line "Em breve / Coming soon" stub before the link goes live
- Never paste the exact same `<Button variant="primary">` chip into two sections of the same page unchanged — the second appearance should look visibly different (longer label, floating icon-only variant, inline text link)
- Never put two CTAs of equal weight in the same hero block (one primary + one secondary is fine; two oranges is wireframe)
- Never label a photo as "[dish/service X]" when the file actually shows something else — that's evidence fabrication even when the words are real. If you don't own a photo of X, drop the card or relabel honestly

### Dev environment anti-patterns

- Never assume `pnpm dev` will be reachable from a Docker-based browser MCP at `127.0.0.1` — that's the container's loopback. Bind with `--host 0.0.0.0` and reach via `host.docker.internal:<port>` from the container.
- When using `host.docker.internal`, Vite blocks the host by default. Add it to `vite.server.allowedHosts` in `astro.config.mjs` for dev only:

  ```js
  vite: {
    server: {
      allowedHosts: ['host.docker.internal', 'localhost', '127.0.0.1'],
    },
  },
  ```

  This is a dev-time concern and doesn't affect production builds. The setting is read by Vite, not by Astro's production build.

- **`sharp` must be a direct dependency, not just listed in `pnpm.onlyBuiltDependencies`.** Astro 6's image pipeline resolves `sharp` as a peer of your project, not transitively through Astro. The first symptom is a build error `MissingSharp: Could not find Sharp.` (production) or a 500 from `/_image` (dev). Fix:

  ```bash
  pnpm add sharp
  # Keep the build-allowance too so the native binary always compiles:
  # package.json → "pnpm": { "onlyBuiltDependencies": ["esbuild", "sharp"] }
  ```

- **Killing stale `astro dev` processes can be silently incomplete.** `pkill -f "astro dev"` does not always match the process command line `node /path/to/astro.mjs dev …`. When a port appears occupied or `/_image` returns 500 despite a fresh restart, three things to check:

  ```bash
  ps aux | grep "astro" | grep -v grep   # list survivors
  kill -9 <PID> <PID> ...                  # kill by PID
  ps aux | grep "astro" | grep -v grep    # confirm 0
  ```

  Symptom that exposes it: you "restart" dev, the new process binds to 4324 because 4321–4323 are still held by zombies, and your browser still hits the old binary that doesn't have the latest `pnpm add` results.

### SEO anti-patterns

- Never use the same `<title>` across multiple pages
- Never skip `<meta description>` on any page
- Never leave `<html>` without a `lang` attribute
- Never have two `<h1>` tags on one page
- Never skip `<link rel="canonical">` on multilingual or paginated sites
- Never go live without Impressum and Datenschutzerklärung on German-market sites

### Security anti-patterns

- Never put API keys, email credentials, or secrets in source code
- Never trust client-submitted form data without server-side validation
- Never use `dangerouslySetInnerHTML` with user-provided content without sanitization
- Never disable HTTPS

---

## 20. Per-client CLAUDE.md template

Create this file at `clients/[client-slug]/CLAUDE.md` at the start of every new client project.

```markdown
# CLAUDE.md — [Client Business Name]

## Product type and stack

- **Product type:** [1 — Static info / 2 — Info + contact / 3 — Info + booking / 4 — Info + transactional / 5 — Application]
- **Stack tier:** [Tier 1 — HTML / Tier 2 — Astro / Tier 3 — Next.js]
- **Phase:** [Demo / Production / Retainer]

See root `CLAUDE.md` product-type matrix and `docs/design/TECH.md` §1 for the activation map (which standards docs apply at this type).

## What this project is

[Business name] — [one sentence description]. [City + neighborhood].
Stack: [HTML / Astro / Next.js]. Hosting: Vercel.
Live at: [client domain or Vercel preview URL].

## Standards inheritance

This project inherits all standards from:
- `docs/design/DESIGN-BEST-PRACTICES.md` — UI/UX, typography, color, motion, anti-slop
- `docs/design/TECH.md` — stack, code organization, Configuration-as-Code, naming, deployment
- `docs/design/PERFORMANCE.md` — perf budgets, image rules, font self-hosting, LCP diagnostic
- `docs/design/ACCESSIBILITY.md` — WCAG 2.2 AA, contrast, keyboard, focus trap, reduced motion
- `docs/design/SECURITY.md` — TLS, headers, contact-form hardening, secret rotation, German legal
- `docs/design/RELIABILITY.md` — error handling, recovery, third-party degraded mode, monitoring, backup
- `docs/design/QUALITY.md` — `pnpm validate` pipeline (pick the tier), CI/CD, coverage targets
- `docs/design/FORMS.md` — form validation, sanitization, honeypot, rate limit, idempotency (if forms present)
- `docs/design/ANALYTICS.md` — event tracking, consent gating, retainer reporting
- `docs/design/SEO.md` — local SEO, schema, GBP integration
- `docs/design/I18N.md` — multilingual setup, translation parity validator
- `docs/design/CHECKLIST.md` — master pre-delivery gate + leanest free launch combo

Per-client overrides and additions are listed below.

## Tech stack

- Framework: [HTML / Astro 6 / Next.js 16]
- Styling: Tailwind CSS v4 (with `@theme {}` token block in `src/styles/tokens.css`)
- Language: [TypeScript strict + `noUncheckedIndexedAccess` / HTML only]
- Fonts: self-hosted via `@fontsource-variable/*` (see `PERFORMANCE.md`)
- Icons: Lucide / inline SVG
- Hosting: Vercel
- Package manager: pnpm (pinned via `packageManager` field)
- Linting: Biome

### `package.json` minimum scaffold

```json
{
  "engines": {
    "node": ">=22.12.0",
    "pnpm": ">=10.0.0"
  },
  "packageManager": "pnpm@10.33.2"
}
```

The full scripts block depends on tier — see `QUALITY.md` §2 for the Tier 1 / Tier 2 / Tier 3 `pnpm validate` pipelines.

## Quick commands

```bash
pnpm dev          # Dev server (http://localhost:4321 for Astro, :3000 for Next.js)
pnpm dev:host     # Same, bound to 0.0.0.0 (for Docker MCP browser via host.docker.internal)
pnpm build        # Production build
pnpm lint         # Biome linting
pnpm preview      # Preview production build locally
pnpm validate     # Full validation pipeline (tier-appropriate; see QUALITY.md)
```

## Project structure

[Link to or describe the key directories for this client]

## Business context

- Business name:
- Type (restaurant / clinic / salon / ...):
- City / neighborhood:
- Primary language: [DE / EN / PT-BR]
- Additional languages: [if any]
- Primary CTA: [Call / WhatsApp / Book / Directions]
- Target audience:
- Google Business Profile URL:

## Design decisions

See `docs/clients/[client-slug]/design.md` for aesthetic direction, color tokens, font choices, and approved copy. Structure defined in `DESIGN-BEST-PRACTICES.md` per-client design file section.

## Environment variables

| Variable | Purpose | Where to set |
|----------|---------|--------------|
| `RESEND_API_KEY` | Email delivery for contact form (if applicable) | Vercel project settings |
| `CONTACT_EMAIL` | Recipient for form submissions | Vercel project settings |
| `UPSTASH_REDIS_REST_URL` | Rate limiting (if applicable) | Vercel project settings |
| `UPSTASH_REDIS_REST_TOKEN` | Same | Vercel project settings |

Secret rotation cadence: 90 days for API keys and encryption secrets (see `SECURITY.md`).

## Reliability — restore procedure

5-minute restore from Vercel rollback:
1. Vercel dashboard → project → Deployments
2. Find the last known-good deployment
3. Click `⋯` → Promote to Production
4. Verify the production URL serves the rolled-back version

Documented per `RELIABILITY.md` §10. Update with any per-client variants (e.g., DB restore steps if Neon/Supabase is in the stack).

## Uptime monitoring

[UptimeRobot / Better Stack] monitor pinging the homepage every 5 min. Alerts to [agency email + WhatsApp].
Set up before flipping `noindex` off — see `RELIABILITY.md` §9.

## Delivery checklist

Run `docs/design/CHECKLIST.md` top to bottom — that's the master gate. Per-client items:
- [ ] [Anything client-specific, e.g. NIF/CAE confirmed, reviewed legal pages]

## How to work on this project

- Don't auto-commit or auto-push. Manage commits manually.
- Atomic commits with English messages.
- Run `pnpm validate` before declaring any change done — that's the engineering gate; `CHECKLIST.md` is the product gate. Both must pass.
- Write the plan first for any multi-step change. Get approval. Then execute.
```

---

*Stack serves the client. The client serves their customers. Design for the customer, not the demo.*
