# ANALYTICS.md — Event Tracking, Consent, and Retainer Reporting
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5).

- **Demo phase:** Skip entirely. `noindex` demo sites have no real users to track and adding cookies before consent is configured creates a DSGVO/LGPD violation.
- **Production cutover for all types:** Google Search Console (mandatory) + Microsoft Clarity (agency default for retainer clients). Cookie consent banner required if any tracking cookie is dropped (`LEGAL.md` §Cookie consent banner — universal spec).
- **Tier 2 stack default:** GSC + Clarity + GA4 (when marketing attribution wanted). PostHog is not added on Tier 2 — the funnel/cohort layer pays off only when there's auth or repeat-engagement to analyze.
- **Tier 3 stack default:** GSC + Clarity + GA4 + **PostHog** (product analytics — funnels, cohorts, retention). PostHog is the primary product-KPI surface on Tier 3+.
- **Type 1 (Static info):** GSC + Clarity is enough. GA4 only if the client explicitly asks for it.
- **Type 2+ (Forms):** Add form-event tracking — `contact_form_completed`, `contact_form_failed`. Events fire client-side and respect consent gate.
- **Type 3+ (Booking / DB-backed):** Add funnel events — `booking_started`, `booking_completed`, etc. (per `FORMS.md` §1 lifecycle). Server-side logging via `RELIABILITY.md` §8 complements but doesn't replace user-side analytics. PostHog funnels visualize the conversion path.
- **Type 4+ (Transactional):** Conversion funnel + revenue attribution. GA4 enhanced ecommerce becomes worth the setup cost at this type. PostHog cohorts track repeat-purchase / AOV / LTV.

See `TECH.md` §1 for the product-type matrix.

This is the agency-wide source of truth for analytics — what to track on a local-business site, how to name events, how to stay DSGVO-safe, and how the data feeds the monthly retainer report.

Other standards docs reference this doc by name, never by section.

---

## Rules at a glance

- **Three marketing streams + one product stream (Tier 3+):** Google Search Console (organic search), Microsoft Clarity (behavior), GA4 (sessions/conversions/marketing attribution) for every retainer build; **PostHog** added on Tier 3+ for product analytics (funnels, cohorts, retention). Skip all for true demo-phase sites.
- **Stack is tier-driven, not preference-driven.** See §Stack selection per tier — Tier 2 stops at Clarity + GA4; Tier 3 adds PostHog.
- **Consent gating is mandatory** for any tracking that drops a cookie or fingerprints. No script tag loads before consent — per `LEGAL.md` §Cookie consent banner — universal spec.
- **Event names are `{feature}_{action}` in snake_case**, past tense for completed actions. **The canonical agency-wide event names live in `KPI.md` §Event naming convention** — match those names exactly, do not invent variants.
- **Every event includes `locale`, `source_page`, `source_section`** (see `KPI.md` §Required event parameters).
- **No PII in any event.** No emails, no names, no phone numbers, no free-text form input. Per `LEGAL.md` §Rules at a glance.
- **Page views are automatic; everything else is explicit.** No "auto-track all clicks" — that produces noise, not signal.
- **The monthly retainer report draws from this stack.** If a metric isn't trackable from GSC + Clarity + GA4 + (Tier 3 only) PostHog + GBP Insights, it doesn't go in the report. See `KPI.md` §Retainer reporting cadence.

---

## Table of contents

1. [What to track on a local-business site](#1-what-to-track-on-a-local-business-site)
2. [Event naming convention](#2-event-naming-convention)
3. [Required parameters](#3-required-parameters)
4. [What never goes in an event](#4-what-never-goes-in-an-event)
5. [Consent gating (DSGVO/GDPR/LGPD)](#5-consent-gating-dsgvogdprlgpd)
6. [Analytics stack](#6-analytics-stack)
7. [Stack selection per tier](#7-stack-selection-per-tier)
8. [Retainer reporting hooks](#8-retainer-reporting-hooks)
9. [Common events for local-business sites](#9-common-events-for-local-business-sites)
10. [Tools](#10-tools)

---

## 1. What to track on a local-business site

The temptation is to track everything. The right amount for a local-business site is **about 8 events**. More than that produces a dashboard nobody reads.

The minimum useful set:

| Event | Why |
|-------|-----|
| `page_view` | Sessions, top pages — automatic, doesn't need an explicit handler |
| `cta_click` | Did the primary action (call, WhatsApp, directions, reservation link) actually get clicked? |
| `phone_link_clicked` | Specific instrumentation for `tel:` clicks — most local-business conversions |
| `whatsapp_link_clicked` | Same for `wa.me/…` links |
| `directions_link_clicked` | Same for Google Maps "Open in Maps" links |
| `contact_form_submission_success` | Form completion |
| `contact_form_submission_failure` | Form completion blocked (rate-limit, validation, ESP failure) |
| `scroll_to_section` | Once per session per section, fires when section enters viewport (which sections people actually read) |

What NOT to track:

- Every button hover
- Every focus event
- Every input change
- Every micro-interaction
- The same intent under three different event names
- Anything that's just "we have an idea about this maybe" — wait until the question is real

The retainer reporting (Section 7) flows naturally from this set.

---

## 2. Event naming convention

`{feature}_{action}` in snake_case, past tense for completed actions.

| Pattern | Example |
|---------|---------|
| `{feature}_started` | `dream_simulation_started`, `waitlist_form_started` |
| `{feature}_completed` | `contact_form_completed`, `booking_completed` |
| `{feature}_failed` | `contact_form_failed`, `payment_failed` |
| `{feature}_cancelled` | `contact_form_cancelled` |
| `{element}_clicked` | `phone_link_clicked`, `cta_button_clicked` |
| `{element}_viewed` | `services_section_viewed`, `menu_pdf_viewed` |
| `{element}_changed` | `language_changed`, `date_picker_changed` |
| `{element}_copied` | `referral_link_copied` |
| `{element}_shared` | `share_completed` (with `platform` parameter) |
| `{element}_downloaded` | `menu_pdf_downloaded` |

**Rules:**

1. **snake_case, lowercase, no spaces, no camelCase.** GA4 / Clarity normalize differently — pick one and stick to it.
2. **Past tense for completed actions** — `submitted`, not `submit`; `clicked`, not `click`. The event represents something that happened, not an instruction.
3. **Prefix by feature area** so the dashboard can group: `contact_*`, `menu_*`, `booking_*`, `nav_*`.
4. **Constants in code, never string literals at call site:**

```typescript
// src/lib/analytics/events.ts
export const CONTACT_EVENTS = {
  FORM_STARTED: 'contact_form_started',
  FORM_COMPLETED: 'contact_form_completed',
  FORM_FAILED: 'contact_form_failed',
  PHONE_CLICKED: 'phone_link_clicked',
  WHATSAPP_CLICKED: 'whatsapp_link_clicked',
} as const;

// At call site
track(CONTACT_EVENTS.PHONE_CLICKED, { locale, timestamp: Date.now() });
```

This makes renames mechanical and prevents the eight-variants-of-the-same-event problem.

---

## 3. Required parameters

Every event ships with at minimum:

```typescript
{
  locale: 'de' | 'en' | 'pt-BR',
  timestamp: number,    // Date.now()
}
```

Plus event-specific parameters where they aid analysis:

| Event | Parameters |
|-------|-----------|
| `cta_button_clicked` | `cta_label`, `section`, `position` |
| `language_changed` | `from_locale`, `to_locale` |
| `share_completed` | `platform` (`whatsapp` / `email` / `twitter` / etc.), `content_type` |
| `contact_form_completed` | `locale`, `timestamp` only — never the form contents |
| `scroll_to_section` | `section_id` |

**Keep parameters minimal.** Only include what answers a question you'll actually ask. A parameter you add "in case it's useful later" creates noise and analytics-cost without value.

---

## 4. What never goes in an event

Never. Not encrypted, not hashed, not "just on the server side."

- **Email addresses.** Even hashed — there are too many ways to leak them.
- **Phone numbers.** Same.
- **Full names.** Same.
- **Postal codes more specific than the city level.**
- **Full IP addresses.** Use Google's IP anonymization or zero out the last octet.
- **Form bodies / message contents.**
- **Cookies, session tokens, auth tokens.**
- **URL query parameters that contain any of the above** (filter the URL before sending to GA4).

If you need to correlate events for the same anonymous user, use a **session-only ID** (`crypto.randomUUID()` stored in `sessionStorage`) that disappears when the browser tab closes. Don't persist user IDs to `localStorage` — that's tracking, and tracking needs consent.

---

## 5. Consent gating (DSGVO/GDPR/LGPD)

The German and Brazilian markets enforce this aggressively. Failure to consent-gate is a DSGVO/LGPD violation with real fines. The full banner spec lives in `LEGAL.md` §Cookie consent banner — universal spec; this section covers the analytics-stack-specific consent recipes.

### The contract

1. **No tracking script loads until explicit consent.** Not "lazy-loaded;" not in the DOM at all.
2. **Consent is opt-in, not opt-out.** A pre-checked "I accept" box is a violation.
3. **"Reject all" is as prominent as "Accept all".** Same size, same visual weight, same click target.
4. **Refusing consent does not block site functionality.** Phone, address, contact form, hours — all work without consent.
5. **Consent is versioned.** Re-prompt when the policy changes.
6. **The user can revoke consent.** A footer link "Cookie-Einstellungen ändern" must always be present.

### The implementation

```typescript
// Pseudo-code — adapt per stack
function loadAnalytics() {
  if (!hasAnalyticsConsent()) return;

  // Dynamic import — script tag is not in the page until this fires
  import('clarity-js').then(({ init }) => {
    init({ projectId: 'CLARITY_ID', respect: { dnt: true } });
  });
}

// Listen for consent events
window.addEventListener('consent:given', loadAnalytics);

// On initial load
if (hasAnalyticsConsent()) loadAnalytics();
```

**Storage:** consent stored in an `HttpOnly` cookie with `sameSite: 'strict'` and `secure: true` in production. Contains JSON: `{ analytics: boolean, version: number, timestamp: number }`.

**`respect: { dnt: true }`** honors the browser's "Do Not Track" header — even with consent, DNT means no tracking. This is best-practice and DSGVO-aligned.

### Per-tool consent recipes

Each analytics tool needs a tool-specific consent-gating pattern. The common rule: **no script tag loads before consent**.

#### Microsoft Clarity

```typescript
function loadClarity() {
  if (!hasConsent('analytics')) return;
  // Inject Clarity tag dynamically — not present in DOM until consent
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r); t.async=1; t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
}
```

Privacy-first config in Clarity dashboard: enable IP anonymization + disable form-field recording.

#### GA4

```typescript
function loadGA4() {
  if (!hasConsent('analytics')) return;
  // gtag.js loads only after consent
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXX';
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX', {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}
```

#### PostHog (Tier 3+ only)

PostHog has a built-in consent-gate via its `opt_in_capturing` / `opt_out_capturing` API. **Initialize PostHog with `opt_out_capturing_by_default: true`** so it stays inert until the user opts in.

```typescript
import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
  opt_out_capturing_by_default: true,    // ← non-negotiable — inert until consent
  disable_session_recording: true,        // ← default; enable only if explicitly justified
  capture_pageview: false,                // ← we control page-view firing manually
  persistence: 'memory',                  // ← no localStorage / no cookie until consent
  property_blacklist: ['$ip', '$initial_referrer', '$referrer'],
});

function loadPostHog() {
  if (!hasConsent('analytics')) return;
  posthog.opt_in_capturing();             // ← upgrades to localStorage + cookies
  posthog.set_config({ persistence: 'localStorage+cookie' });
}
```

The `persistence: 'memory'` pre-consent state means PostHog tracks event names in-memory only — they fire on consent (no cookies, no `localStorage`). If consent is rejected, those in-memory events are discarded on tab close.

#### Server-side / no-cookie analytics

Pure server-side analytics (Vercel Analytics in privacy mode, Plausible, Fathom, server-logged conversions) don't drop cookies and don't require consent. They're a valid path for Tier 1 sites that want minimal complexity.

### When you don't need a cookie banner

You can skip the banner entirely if the site uses **zero non-functional cookies**. That means:

- No GA4 (it sets `_ga` cookies)
- No Clarity (it sets `_clck`, `_clsk`)
- No Facebook pixel, no Hotjar, no anything

Pure server-side analytics (e.g., Vercel Analytics in privacy mode, Plausible, Fathom) don't drop cookies and don't require consent. For the demo phase and many production retainer clients, **this is the right answer**. No banner is friction-free for users and DSGVO-trivial.

If you do introduce a cookie banner, every condition above must be honored.

---

## 6. Analytics stack

Three streams. Pick the ones that match the client's actual needs — don't ship all three by default.

### Google Search Console (always)

- **What it gives you:** organic search impressions, clicks, query → page mapping, indexing health, Core Web Vitals from real users.
- **Cookies:** none on the client site.
- **Consent:** not required (server-side, no JS on the client site).
- **Cost:** free.
- **Set up:** verify the property before launch; submit `sitemap.xml`.

### Microsoft Clarity (default for retainer clients)

- **What it gives you:** heatmaps, session recordings, rage clicks, dead clicks, scroll depth.
- **Cookies:** `_clck`, `_clsk` (first-party, expiry ~1 year).
- **Consent:** required in DE/EU.
- **Cost:** free forever, no traffic limit.
- **Set up:** install after consent is granted; `respect: { dnt: true }`.

### Google Analytics 4 (when marketing attribution wanted)

- **What it gives you:** sessions, conversions, attribution, audience demographics.
- **Cookies:** `_ga`, `_ga_<container>` (first-party, expiry ~2 years).
- **Consent:** required.
- **Cost:** free up to 10M events/month.
- **Set up:** ship GA4 when the client cares about source/medium attribution (which ads, which referrers, which campaigns drove the conversion). Configure with `anonymize_ip: true` and disable advertising features.

### PostHog (Tier 3+ — product analytics primary)

- **What it gives you:** funnels (conversion path step-by-step), cohorts (user segments over time), retention tables (week-over-week return), feature flags, session replay (optional, off by default).
- **Cookies:** `ph_*` cookies + `localStorage` (after opt-in only).
- **Consent:** required. Initialize with `opt_out_capturing_by_default: true` — see §Per-tool consent recipes.
- **Cost:** free up to 1M events/month + 5K session recordings. Agency client volume is well below this.
- **Set up:** Tier 3 only — pays off when there's a real funnel (booking, sign-up, checkout) or repeat-engagement to analyze. Tier 2 sites typically don't need PostHog; Clarity heatmaps + GA4 conversions cover them.
- **Data region:** EU instance for DE/PT/EU-resident clients; US instance for US-only clients (`api_host` URL differs per region).

**The agency default:**
- Demo phase: nothing (skip the cookie banner question entirely).
- Tier 2 production: GSC + Clarity + GA4 (when marketing attribution wanted), with a cookie banner.
- Tier 3 production: GSC + Clarity + GA4 + PostHog, with a cookie banner.

---

## 7. Stack selection per tier

The decision tree below answers "what tools do I install for this client?" deterministically. The agency does not negotiate the stack per client — the tier determines it, and the client confirms.

### Decision tree

```
START
  │
  ├─ Is this site in demo phase (noindex)?
  │   └─ YES → install NOTHING (no analytics, no banner) → STOP
  │
  ├─ What tier is this site?
  │   ├─ Tier 1 (pure static HTML, no framework, no forms)
  │   │   → install GSC (server-side, no consent needed)
  │   │   → optionally Clarity if retainer-tier (light footprint)
  │   │   → skip GA4 unless client explicitly requests
  │   │   → skip PostHog (no surface to analyze)
  │   │
  │   ├─ Tier 1 with form endpoint (HTML + serverless function)
  │   │   → install GSC + Clarity (default for retainer)
  │   │   → install GA4 if marketing attribution wanted
  │   │   → skip PostHog (still no repeat-engagement to justify)
  │   │
  │   ├─ Tier 2 (Astro — most common)
  │   │   → install GSC + Clarity (always for retainer)
  │   │   → install GA4 if marketing attribution wanted
  │   │   → skip PostHog (Clarity + GA4 covers Tier 2 needs)
  │   │
  │   └─ Tier 3 (Next.js — booking / DB / auth)
  │       → install GSC + Clarity + GA4 + PostHog (all four)
  │       → PostHog is the product-KPI primary
  │       → Sentry also wired per `INFRASTRUCTURE.md` §Error tracking
  │
  └─ Cookie banner required?
      ├─ Any of Clarity / GA4 / PostHog active → YES (consent-first)
      ├─ Only GSC + server-side analytics → NO banner needed
      └─ See `LEGAL.md` §Cookie consent banner for the spec
```

### Stack matrix

| Tier / Type | GSC | Clarity | GA4 | PostHog | Sentry (server) | Banner required? |
|---|---|---|---|---|---|---|
| Tier 1 pure-static | ✅ | optional | optional | ❌ | ❌ (no surface) | only if Clarity/GA4 on |
| Tier 1 + form endpoint | ✅ | ✅ default | optional | ❌ | ✅ on function | yes |
| Tier 2 (Astro) | ✅ | ✅ default | optional | ❌ | ✅ full SDK | yes |
| Tier 3 (Next.js) | ✅ | ✅ | ✅ | ✅ default | ✅ full SDK | yes |
| Type 4 transactional | ✅ | ✅ | ✅ | ✅ | ✅ + payment events | yes |
| Type 5 application | ✅ | ✅ | ✅ | ✅ primary | ✅ + auth events | yes |

**Rule:** if the client wants a tool outside what the tier specifies, treat it as a custom scope item — additional setup time, additional retainer line item. The default stack is the default for a reason.

---

## 8. Retainer reporting hooks

Each monthly retainer report draws from these three streams. See `SALES.md` for the report template; this section documents how each line maps to a data source.

| Report line | Source |
|-------------|--------|
| **GBP profile views** | Google Business Profile insights (separate from website analytics) |
| **GBP direction requests** | GBP insights |
| **GBP phone calls** | GBP insights |
| **New Google reviews** | GBP insights (manual count) |
| **Organic clicks** | GSC → Performance → Clicks |
| **Organic impressions** | GSC → Performance → Impressions |
| **Top 3 search queries** | GSC → Performance → Queries (filter to last 30 days) |
| **Clarity sessions** | Clarity dashboard |
| **Rage clicks / dead clicks** | Clarity → Dashboard → Smart Events |
| **Top page by attention** | Clarity → Heatmaps → page-by-page |
| **Actionable insight** | Manual — one observation per month |
| **CTA clicks** (if instrumented) | GA4 (if set up) → Events → `cta_button_clicked` |
| **Form submissions** | GA4 → `contact_form_completed`, OR Vercel Logs (count successful POSTs to `/api/contact`) |

The report should fit in ~10 sentences for the client. The dashboard exists for the agency; the report exists for the client. Different audiences, different density.

---

## 9. Common events for local-business sites

Drop these into every retainer client as a starter set. Trim or extend per client.

### Page-level

```typescript
track('page_viewed', { locale, timestamp, page: window.location.pathname });
```

Most of the value comes from GA4's automatic page-view tracking — only emit explicitly if you don't have GA4 and want Clarity-side correlation.

### Navigation

```typescript
track('nav_link_clicked', { locale, timestamp, link: 'menu' | 'visit' | 'contact' });
track('language_changed', { locale, timestamp, from_locale, to_locale });
```

### CTA clicks

```typescript
track('phone_link_clicked', { locale, timestamp, position: 'header' | 'hero' | 'footer' | 'sticky_cta' });
track('whatsapp_link_clicked', { locale, timestamp, position: ... });
track('directions_link_clicked', { locale, timestamp });
track('reservation_link_clicked', { locale, timestamp, provider: 'thefork' | 'opentable' | 'direct' });
track('menu_pdf_downloaded', { locale, timestamp });
```

### Contact form

```typescript
track('contact_form_started', { locale, timestamp });
track('contact_form_submitted', { locale, timestamp });        // client-side: form sent
track('contact_form_success', { locale, timestamp });          // client-side: 200 received
track('contact_form_failed', { locale, timestamp, reason: 'validation' | 'rate_limit' | 'server' });
```

### Section visibility (Clarity does this automatically — only emit explicitly for GA4 funnels)

```typescript
track('section_viewed', { locale, timestamp, section_id: 'menu' | 'visit' | 'reviews' });
```

Use IntersectionObserver with `threshold: 0.5` and `once: true` to fire each section exactly once per page view.

---

## 10. Tools

All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| Google Search Console | Free | [search.google.com/search-console](https://search.google.com/search-console/) | Organic search visibility, indexing health. Mandatory on every production site. |
| Microsoft Clarity | Free (forever, no traffic limit) | [clarity.microsoft.com](https://clarity.microsoft.com/) | Heatmaps + session recordings + rage clicks. Best free behavior-analytics tool available. |
| Google Analytics 4 | Free (up to 10M events/mo) | [analytics.google.com](https://analytics.google.com/) | Sessions, conversions, marketing attribution. Use when client cares about source/medium. |
| PostHog | Free (1M events/mo + 5K session recordings) | [posthog.com](https://posthog.com/) | Tier 3 product analytics — funnels, cohorts, retention. EU instance for DE/PT clients (`eu.i.posthog.com`); US instance for US clients. |
| Vercel Analytics | Free (basic tier on Hobby plan) | [vercel.com/docs/analytics](https://vercel.com/docs/analytics) | Real-user Core Web Vitals + page views; privacy-friendly (no cookies on basic tier). |
| Plausible | Freemium | [plausible.io](https://plausible.io/) | Privacy-first GA4 alternative — no cookies, no consent banner needed. Paid; mention to clients who explicitly want cookieless. |
| Fathom Analytics | Freemium | [usefathom.com](https://usefathom.com/) | Same niche as Plausible. |
| GBP Insights | Free (built into GBP) | [business.google.com](https://business.google.com/) | Profile views, direction requests, phone calls — **drives most of the retainer report** for local businesses. |

**Recommended starter stack per tier:**

| Tier | Day one (free) | At retainer signup | At Tier 3 upgrade |
|---|---|---|---|
| **Tier 1 / 2** | GSC + GBP Insights + Vercel Analytics | + Microsoft Clarity + GA4 (if marketing attribution wanted) | n/a |
| **Tier 3** | GSC + GBP Insights + Vercel Analytics | + Microsoft Clarity + GA4 | + PostHog (product analytics primary) + Sentry full SDK (`INFRASTRUCTURE.md` §Error tracking) |

Skip Plausible/Fathom unless the client specifically asks for cookieless analytics. Clarity covers behavior, GSC covers search, GBP insights covers conversions, GA4 covers marketing attribution, PostHog covers product funnels — that's the agency stack.
