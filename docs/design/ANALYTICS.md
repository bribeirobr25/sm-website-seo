# ANALYTICS.md — Event Tracking, Consent, and Retainer Reporting
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5).

- **Demo phase:** Skip entirely. `noindex` demo sites have no real users to track and adding cookies before consent is configured creates a DSGVO violation.
- **Production cutover for all types:** Google Search Console (mandatory) + Microsoft Clarity (agency default for retainer clients). Cookie consent banner required if any tracking cookie is dropped.
- **Type 1 (Static info):** GSC + Clarity is enough. GA4 only if the client explicitly asks for it.
- **Type 2+ (Forms):** Add form-event tracking — `contact_form_completed`, `contact_form_failed`. Events fire client-side and respect consent gate.
- **Type 3+ (Booking / DB-backed):** Add funnel events — `booking_started`, `booking_completed`, etc. (per `FORMS.md` §1 lifecycle). Server-side logging via `RELIABILITY.md` §8 complements but doesn't replace user-side analytics.
- **Type 4+ (Transactional):** Conversion funnel + revenue attribution. GA4 enhanced ecommerce becomes worth the setup cost at this type.

See `TECH.md` §1 for the product-type matrix.

This is the agency-wide source of truth for analytics — what to track on a local-business site, how to name events, how to stay DSGVO-safe, and how the data feeds the monthly retainer report.

Other standards docs reference this doc by name, never by section.

---

## Rules at a glance

- **Three analytics streams, no more:** Google Search Console (organic search), Microsoft Clarity (behavior), GA4 *only if the client wants it* (sessions/conversions). Skip all three for true demo-phase sites.
- **Consent gating is mandatory** for any tracking that drops a cookie or fingerprints. No script tag loads before consent.
- **Event names are `{feature}_{action}` in snake_case**, past tense for completed actions (`contact_form_submission_success`, not `submitContactForm`).
- **Every event includes `locale` and `timestamp`.** Always.
- **No PII in any event.** No emails, no names, no phone numbers. Hash if you need correlation; omit if not.
- **Page views are automatic; everything else is explicit.** No "auto-track all clicks" — that produces noise, not signal.
- **The monthly retainer report draws from these three streams.** If a metric isn't trackable from them, it doesn't go in the report.

---

## Table of contents

1. [What to track on a local-business site](#1-what-to-track-on-a-local-business-site)
2. [Event naming convention](#2-event-naming-convention)
3. [Required parameters](#3-required-parameters)
4. [What never goes in an event](#4-what-never-goes-in-an-event)
5. [Consent gating (DSGVO/GDPR)](#5-consent-gating-dsgvogdpr)
6. [Analytics stack](#6-analytics-stack)
7. [Retainer reporting hooks](#7-retainer-reporting-hooks)
8. [Common events for local-business sites](#8-common-events-for-local-business-sites)
9. [Tools](#9-tools)

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

## 5. Consent gating (DSGVO/GDPR)

The German market enforces this aggressively. Failure to consent-gate is a DSGVO violation with real fines.

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

### Google Analytics 4 (only when the client asks for it)

- **What it gives you:** sessions, conversions, attribution, audience demographics.
- **Cookies:** `_ga`, `_ga_<container>` (first-party, expiry ~2 years).
- **Consent:** required.
- **Cost:** free up to 10M events/month.
- **Set up:** only ship GA4 when the client has a specific question it answers. For a typical 5-page local-business site, GSC + Clarity already tell you everything actionable.

**The agency default:**
- Demo phase: nothing (skip the cookie banner question entirely).
- Production phase: GSC + Clarity, with a cookie banner.
- GA4 only when justified.

---

## 7. Retainer reporting hooks

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

## 8. Common events for local-business sites

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

## 9. Tools

All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| Google Search Console | Free | [search.google.com/search-console](https://search.google.com/search-console/) | Organic search visibility, indexing health. Mandatory on every production site. |
| Microsoft Clarity | Free (forever, no traffic limit) | [clarity.microsoft.com](https://clarity.microsoft.com/) | Heatmaps + session recordings + rage clicks. Best free behavior-analytics tool available. |
| Google Analytics 4 | Free (up to 10M events/mo) | [analytics.google.com](https://analytics.google.com/) | Sessions, conversions, attribution. Use only when justified. |
| Vercel Analytics | Free (basic tier on Hobby plan) | [vercel.com/docs/analytics](https://vercel.com/docs/analytics) | Real-user Core Web Vitals + page views; privacy-friendly (no cookies on basic tier). |
| Plausible | Freemium | [plausible.io](https://plausible.io/) | Privacy-first GA4 alternative — no cookies, no consent banner needed. Paid; mention to clients who explicitly want cookieless. |
| Fathom Analytics | Freemium | [usefathom.com](https://usefathom.com/) | Same niche as Plausible. |
| GBP Insights | Free (built into GBP) | [business.google.com](https://business.google.com/) | Profile views, direction requests, phone calls — **drives most of the retainer report** for local businesses. |

**Recommended starter stack for a typical local-business client:**

1. **GSC + GBP insights** — day one
2. **Microsoft Clarity** — when the client commits to retainer
3. **Vercel Analytics** — free with hosting; gives Core Web Vitals
4. **GA4** — only when justified

Skip Plausible/Fathom unless the client specifically asks for cookieless analytics. Clarity covers behavior, GSC covers search, GBP insights covers conversions — that's the local-business stack.
