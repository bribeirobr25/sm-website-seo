# KPI.md — Product KPIs + Measurement Framework
## Small Business Website + SEO + Google Business Agency

**Applies to:** every production cutover (all product types 1–5, all stack tiers 1–3). Demo-phase sites with `noindex` skip this layer entirely — no real users, no KPIs.

The agency's deliverable shifts from *"a website"* to *"a website with measured outcomes."* This doc is the source of truth for **which KPIs we instrument, how we name events, and which dashboard the client opens on day one.** Per-vertical specifics live in each template's §11 Measurement subsection; this doc encodes the framework those templates plug into.

**Why this doc exists:** the deleted Jean + Porto builds had GBP + analytics in the architecture but no KPI contract. The owner couldn't answer "is this website earning its monthly fee?" — and neither could the agency. Without KPIs, every project is a one-time build. With them, every project is recurring revenue.

---

## Rules at a glance

- **Every production site ships with at least 3 KPIs wired** before the `noindex` flip. No KPIs = no production launch.
- **KPIs are agreed at scaffold time, not retrofitted.** The per-client `BRIEF.md` includes a "KPI contract" block (which KPIs, which dashboard, who reads it).
- **Per-product-type defaults exist** — see §Per-product-type KPI defaults. The vertical template's §11 overrides with vertical-specific picks.
- **Event names follow a fixed convention** — see §Event naming convention. Inconsistency across clients is the #1 reason cross-client analysis fails.
- **Analytics stack is tier-driven, not preference-driven** — Tier 2 = Microsoft Clarity primary, Tier 3 = PostHog primary, GA4 cross-stack as marketing-attribution baseline regardless of tier. See `ANALYTICS.md` §Stack selection per tier.
- **All tracking is consent-gated** per `LEGAL.md` §Cookie consent banner. No KPI event fires before the user opts in to the matching category.
- **No PII in event payloads.** Names, emails, phone numbers, addresses, free-text input never travel through GA4/PostHog/Clarity. The event records that a conversion happened, not who.
- **Retainer-tier clients get a monthly KPI report** — recipe in §Retainer reporting cadence.

---

## Table of contents

- KPI taxonomy — the 4 buckets
- Per-product-type KPI defaults
- Per-vertical KPI overlay (pointer)
- Event naming convention
- Required event parameters
- What never goes in an event (PII)
- Stack selection — which tool, which KPIs
- Dashboard recipes
- KPI contract — the per-client BRIEF.md block
- Pre-launch verification (operational tests)
- Retainer reporting cadence
- Cross-references

---

## KPI taxonomy — the 4 buckets

Every KPI an agency client sees fits one of four buckets. This is the agency-wide vocabulary; templates use it; the BRIEF.md uses it; the monthly report uses it.

| Bucket | Question it answers | Example KPIs |
|---|---|---|
| **Acquisition** | Are people finding the site? | Organic sessions / direct sessions / GBP profile views / referral clicks |
| **Conversion** | Of those who find it, who acts? | Phone-call click rate · WhatsApp click rate · Book-now CTR · Contact-form completion rate · Booking-platform-handoff rate |
| **Retention** | Are users coming back? Are clients returning? | Returning-visitor rate · Repeat-booking rate (Type 3) · Newsletter signups · Saved-to-WhatsApp rate |
| **Health** | Is the site doing its job operationally? | LCP / CLS / INP · Error rate · Uptime · Form-submission failure rate · Sentry-issue count |

**Pattern:** every per-vertical KPI list mixes from these 4 buckets. A purely conversion-focused list is incomplete; a purely health-focused list misses the business. Agency rule: **at least one KPI per bucket** for Tier 2+ retainer clients.

### Bucket weights per product type

Not every bucket carries equal weight. Use this default per type:

| Product type | Acquisition | Conversion | Retention | Health |
|---|---|---|---|---|
| Type 1 (Static info) | **Heavy** — most of the value is reach | Light — phone/WhatsApp clicks only | None (no return-user loop) | Medium |
| Type 2 (+ contact form) | Heavy | **Heavy** — form is the conversion | Light (return-visitors) | Medium |
| Type 3 (+ booking) | Medium | **Heavy** — booking is the conversion | **Heavy** — repeat bookings are the retainer story | Medium |
| Type 4 (+ transactional) | Medium | **Heavy** | **Heavy** — repeat orders, AOV, LTV | **Heavy** — payment errors are revenue-immediate |
| Type 5 (Application) | Light | Medium | **Heavy** — DAU/MAU, churn | **Heavy** — uptime/errors are existential |

---

## Per-product-type KPI defaults

These are the *minimum* KPIs every site of that type ships with. Vertical templates layer per-vertical KPIs on top via their §11 Measurement subsection.

### Type 1 — Static info site (single page or multi-page, no system)

| # | KPI | Bucket | Source | Target / benchmark |
|---|---|---|---|---|
| 1 | Monthly organic sessions | Acquisition | GSC + GA4 | Vertical-dependent; growth trend > flat |
| 2 | GBP profile views (linked) | Acquisition | GBP Insights | Growth trend > flat |
| 3 | Phone-click rate (tel: clicks ÷ sessions) | Conversion | GA4 / Clarity (event: `phone_click`) | ≥ 5% on mobile sessions |
| 4 | WhatsApp-click rate (wa.me clicks ÷ sessions) | Conversion | GA4 / Clarity (event: `whatsapp_click`) | Service-business dependent |
| 5 | Mobile LCP (p75) | Health | Vercel Analytics / PageSpeed Insights | < 2.5s |

### Type 2 — Info + contact form

Inherits Type 1 plus:

| # | KPI | Bucket | Source | Target / benchmark |
|---|---|---|---|---|
| 6 | Contact-form completion rate | Conversion | GA4 / Clarity (events: `contact_form_started` → `contact_form_completed`) | ≥ 30% start-to-complete |
| 7 | Contact-form failure rate (server-side) | Health | Sentry + custom event `contact_form_failed` | < 2% of attempts |
| 8 | Form-source breakdown (which page / CTA drove the submission) | Conversion | GA4 with `source_page` parameter | — |

### Type 3 — Info + booking / appointment system

Inherits Types 1–2 plus:

| # | KPI | Bucket | Source | Target / benchmark |
|---|---|---|---|---|
| 9 | Booking-completion rate (start-to-finish funnel) | Conversion | PostHog funnel (events: `booking_started` → `booking_slot_selected` → `booking_completed`) | ≥ 40% start-to-complete |
| 10 | Repeat-booking rate (clients booking ≥ 2× in 90 days) | Retention | PostHog cohort | Vertical-dependent |
| 11 | No-show rate (booked but didn't attend) | Health (business) | Booking platform integration | < 10% |
| 12 | Slot-utilization rate (booked slots ÷ available slots) | Conversion | PostHog + booking platform | ≥ 60% peak hours |

### Type 4 — Info + transactional (orders, payments)

Inherits Types 1–3 plus:

| # | KPI | Bucket | Source | Target / benchmark |
|---|---|---|---|---|
| 13 | Cart-completion rate (cart-to-paid funnel) | Conversion | PostHog funnel | ≥ 60% |
| 14 | Average Order Value (AOV) | Conversion | Stripe + GA4 ecommerce | Vertical-dependent |
| 15 | Payment-failure rate | Health | Stripe + Sentry | < 1% |
| 16 | Repeat-order rate (within 90 days) | Retention | PostHog cohort + Stripe customer ID | Vertical-dependent |

### Type 5 — Application

Inherits Types 1–4 plus:

| # | KPI | Bucket | Source | Target / benchmark |
|---|---|---|---|---|
| 17 | DAU / MAU | Retention | PostHog (event: `app_session_started`) | Vertical-dependent |
| 18 | Churn rate | Retention | PostHog cohort | < 5%/month |
| 19 | Activation rate (new sign-ups reaching key action within 7d) | Retention | PostHog funnel | ≥ 40% |
| 20 | Uptime | Health | Better Stack / UptimeRobot | ≥ 99.9% |

**Rule:** the per-client BRIEF.md picks **3–5** KPIs from the applicable list. More is not better — clients ignore dashboards with > 6 metrics.

---

## Per-vertical KPI overlay (pointer)

Per-product-type defaults are the floor. Each vertical template's **§11 Measurement** subsection lists the 3–5 KPIs that matter most for that vertical, drawing from the type defaults AND adding vertical-specific picks:

| Vertical | See template | Key vertical-specific KPIs |
|---|---|---|
| Gastronomy | `templates/gastronomy.md` §11 | Weekly reservations · Menu-CTA click rate · Returning-diner rate · IG-driven traffic share |
| Beauty | `templates/beauty.md` §11 | Booking-platform handoff rate (Trinks/Booksy/Treatwell) · Staff-utilization · No-show rate · Repeat-client rate |
| Trades | `templates/trades.md` §11 | Lead-quote conversion · Response-time-to-quote · Phone-vs-form split |
| Health | `templates/health.md` §11 | Doctolib/Zocdoc handoff · No-show rate · Referral-source split · GBP-driven appointments |
| Studio | `templates/studio.md` §11 | Trial → paid conversion · Class-fill rate · MRR · Mindbody/ClassPass handoff |
| Pro Services | `templates/professional-services.md` §11 | Consultation-request rate · Matter-completion rate · Confidentiality-tier source split |
| Pets | `templates/pets.md` §11 | Appointment-booking rate · Petlove handoff · IG-driven traffic |
| Automotive | `templates/automotive.md` §11 | Quote-request rate · Insurance-job split · WhatsApp-CTA rate |
| Education | `templates/education.md` §11 | Trial → enrollment · Retention by cohort · Superprof/Preply handoff |
| Events | `templates/events-hospitality.md` §11 | Inquiry-to-booking rate · IG-driven inquiry · Booking value (event size) |
| Home & Garden | `templates/home-garden.md` §11 | Order-completion rate · Delivery on-time rate · IG-driven traffic (florists) |
| Artisan | `templates/artisan.md` §11 | Order-completion rate · Repeat-order rate · AOV · IG-driven traffic |

If a per-vertical template's §11 is missing or empty, treat it as a Batch 2 gap and log in PENDING.md.

---

## Event naming convention

**Format:** `snake_case`. Verbs in past tense. Object + action.

| Pattern | Example | Notes |
|---|---|---|
| `<object>_<action>` | `phone_click`, `whatsapp_click`, `booking_completed`, `contact_form_submitted` | Past tense for completed actions |
| `<object>_<state>` | `booking_started`, `cart_abandoned`, `video_paused` | State-of-the-world events |
| `<feature>_viewed` | `menu_viewed`, `pricing_viewed`, `gallery_viewed` | Engagement-tier events |
| `<error>_failed` | `contact_form_failed`, `booking_failed`, `payment_failed` | Always paired with a non-failed counterpart |

**Rules:**

- **No client names in event names.** Same event names across clients, so cross-client analysis works. (`barber_booking_completed` is wrong; `booking_completed` with a `business_slug` param is right.)
- **No camelCase, no kebab-case, no spaces.** snake_case only.
- **No verbs in present tense.** `phone_click` ✓ · `phone_clicking` ✗ · `click_phone` ✗
- **Counterpart pairs.** If you ship `contact_form_completed`, ship `contact_form_started` too — otherwise the funnel is invisible.
- **Funnel events follow the same order across verticals.** `<flow>_started` → intermediate steps → `<flow>_completed` OR `<flow>_failed`.

### Canonical event names — agency-wide

These names mean the same thing across every vertical, every client. Add to the list when a new conversion type is introduced; do not invent per-client variants.

| Event | Fires when | Required parameters |
|---|---|---|
| `page_viewed` | Implicit on page load (GA4 default) | `page_path`, `locale` |
| `phone_click` | User taps a `tel:` link | `source_section` (hero / contact / sticky), `source_page` |
| `whatsapp_click` | User taps a `wa.me` link | `source_section`, `source_page` |
| `email_click` | User taps a `mailto:` link | `source_section`, `source_page` |
| `map_click` | User taps the map embed or Google Maps link | `source_section`, `source_page` |
| `cta_click` | Primary CTA button activated (catch-all for hero/section/footer CTAs) | `cta_label`, `source_section`, `source_page` |
| `nav_link_click` | User clicks a header / footer nav link | `link_label`, `link_destination` |
| `booking_started` | User opens booking flow (modal, deep-link to platform, embedded form) | `source_section`, `service_slug` (optional) |
| `booking_slot_selected` | User picks a date/time slot | `service_slug`, `slot_iso` (NO PII) |
| `booking_completed` | Booking confirmation received | `service_slug`, `booking_platform` (`trinks`, `booksy`, `treatwell`, `direct`, etc.) |
| `booking_failed` | Booking attempt errored | `error_code`, `error_step` |
| `contact_form_started` | First field of the contact form receives focus | `form_id`, `source_page` |
| `contact_form_completed` | Form submitted successfully (server returned 200) | `form_id`, `source_page` |
| `contact_form_failed` | Form submission returned non-2xx | `error_code`, `form_id` |
| `gallery_viewed` | User scrolls 50%+ through gallery / lightbox opens | `image_count` |
| `menu_viewed` | Gastronomy: menu section enters viewport ≥ 50% | `menu_section` (e.g., `mains`, `desserts`) |
| `share_click` | User taps a share button | `share_target` (`whatsapp` / `facebook` / `instagram` / `x` / `copy_link`), `source_page` |
| `consent_given` | User accepts cookie banner | `categories` JSON (no PII) |
| `consent_rejected` | User rejects cookie banner | — |

**Tier 1 (no JS framework):** events fired via inline event handlers + `window.dataLayer.push` (GA4) or `clarity('event', ...)` (Clarity). No package needed beyond the analytics snippet.

**Tier 2 / 3:** events fired via a centralized `src/lib/analytics.ts` helper that wraps consent-gating + sends to GA4 / PostHog / Clarity uniformly. Pattern in `ANALYTICS.md` §Event firing pattern.

---

## Required event parameters

Every event SHOULD carry these parameters where applicable. They unlock segmentation in dashboards.

| Parameter | Type | Why |
|---|---|---|
| `source_page` | string (path) | Which page fired this event (`/`, `/services`, `/menu`, etc.) |
| `source_section` | string | Which section of the page (`hero`, `contact`, `sticky_cta`, `footer`) |
| `locale` | string | `de`, `en`, `pt-BR`, `pt-PT` — for multilingual sites |
| `device_category` | string (auto) | `mobile`, `tablet`, `desktop` — GA4/PostHog set this automatically |
| `consent_version` | int | Which consent record this event was fired under (matches `LEGAL.md` re-consent flow) |

`source_section` is the most under-used and most valuable — it answers "is the hero CTA or the sticky-mobile CTA driving conversions?" Without it, all `phone_click` events collapse into one number.

---

## What never goes in an event (PII)

Per `LEGAL.md` §Rules at a glance + agency rule. The event records *that* a conversion happened, not *who*.

| Never include | Why |
|---|---|
| Names, full names, first names | PII under DSGVO / LGPD / CCPA |
| Email addresses | PII |
| Phone numbers | PII |
| Postal addresses | PII |
| Free-text form input (message field, name field, custom-question field) | Treats as PII regardless of content |
| User IDs that link to identifiable accounts | Pseudonymous IDs OK if not linkable; raw IDs not |
| IP addresses | PII — analytics tools collect anyway; do not duplicate into event payload |
| Authorization headers, session tokens, cookies | Security + PII |
| Anything inside a form field that captures user input | PII |

**Allowed identifiers:**

- `business_slug` — agency-side identifier (`jean-souza-barber`, `cafe-del-corso`) — describes the client, not the user
- `service_slug` — what service was selected (`corte`, `barba`, `cabelo`) — describes the offering, not the user
- `session_id` — ephemeral, generated via `crypto.randomUUID()` and stored only in `sessionStorage` (vanishes on tab close)
- `consent_record_id` — UUID tied to the consent record, not to the user's identity

---

## Stack selection — which tool, which KPIs

The agency runs three (Tier 2) or four (Tier 3) analytics streams. Each tool has a specific job; tools do not overlap.

| Tool | Role | Active on tier | KPIs measured |
|---|---|---|---|
| **Google Search Console** | Organic search visibility — what queries surface the site, click-through rates from SERPs | All tiers (no JS — no consent needed) | Acquisition |
| **Microsoft Clarity** | Behavior — heatmaps, session recordings, rage clicks, dead clicks | Tier 2 (agency default for retainer) · Tier 3 (paired with PostHog) | Conversion (CTA observability) + Health (UX friction) |
| **GA4** | Marketing attribution — sessions, sources, conversions tied to ads / campaigns / referrals | All tiers when client wants marketing attribution | Acquisition + Conversion (top-of-funnel) |
| **PostHog** | Product — funnels, cohorts, retention, custom dashboards, event-level analysis | Tier 3 primary (any product-type with auth or repeat-engagement) | Conversion (full funnel) + Retention (cohorts) |

### Tier 2 stack (Astro)

**Default:** GSC + Clarity. Add GA4 if client wants marketing attribution. Skip PostHog — Tier 2 sites don't typically have auth/repeat-engagement to justify the funnel layer.

### Tier 3 stack (Next.js)

**Default:** GSC + Clarity + GA4 + PostHog. PostHog is primary for product-KPI analysis; Clarity continues to provide heatmaps/recordings; GA4 stays for marketing attribution; GSC stays for search.

### "Skip analytics entirely" — when

- Demo phase (`noindex` set) — no real users; analytics with consent banner creates regulatory exposure with no upside
- Single-page Tier 1 with no forms, no booking, no shop, and client explicitly wants minimal complexity — phone/WhatsApp clicks are observable from GBP Insights alone; agency may decline to instrument

---

## Dashboard recipes

The agency builds **one dashboard per client per tool** at production cutover. Each dashboard answers the questions in the KPI contract (see §KPI contract — the per-client BRIEF.md block). The client receives links to all dashboards in the handoff email.

### GA4 — agency starter dashboard

Build via "Explore" → custom report. Default tiles:

1. **Sessions by source/medium** — acquisition split (organic / direct / referral / paid)
2. **Conversions by event** — `phone_click` / `whatsapp_click` / `contact_form_completed` / `booking_completed` counts
3. **Conversion-rate funnel** (if Type 2+) — `contact_form_started` → `contact_form_completed` ratio
4. **Top landing pages** — which page is the entry point for converters
5. **Device split** — mobile vs desktop conversion rates
6. **Page experience (LCP/CLS/INP)** — Web Vitals tile

### Microsoft Clarity — agency starter dashboard

Default tiles (Clarity ships these out of the box; agency confirms they're enabled):

1. **Recordings** — filter by rage clicks + dead clicks + JavaScript errors
2. **Heatmaps** — homepage, services page, contact page, top-2 vertical-specific pages
3. **Scroll depth** — by page
4. **Click maps** — by page

### PostHog — agency starter dashboard (Tier 3 only)

1. **Funnel: booking flow** — `booking_started` → `booking_slot_selected` → `booking_completed` (with drop-off %)
2. **Cohort: returning bookers** — users with `booking_completed` ≥ 2× in 90 days
3. **Retention table** — week-over-week return rate
4. **Conversion-by-source** — landing page → conversion rate matrix
5. **Event volume trend** — daily counts of agency-canonical events, last 30 days

### GBP / Google Search Console — not a custom dashboard

GBP Insights and GSC are read directly in their native interfaces. Agency includes screenshots in the monthly KPI report (see §Retainer reporting cadence) but does not build a custom dashboard for them.

---

## KPI contract — the per-client BRIEF.md block

Every client `BRIEF.md` includes a "KPI contract" block at scaffold time. The block is the locked-in agreement between agency and client on what success looks like.

```markdown
## KPI contract

**Defined at:** [YYYY-MM-DD]
**Reviewed at:** [YYYY-MM-DD or "not yet reviewed"]

### KPIs we track
1. [KPI name] — [target] — [data source]
2. [KPI name] — [target] — [data source]
3. [KPI name] — [target] — [data source]
4. [KPI name] — [target] — [data source]  (optional)
5. [KPI name] — [target] — [data source]  (optional)

### Dashboards
- GA4: [link to custom dashboard]
- Clarity: [link to project]
- PostHog (Tier 3 only): [link to project]
- GBP Insights: [link]
- GSC: [link]

### Who reads which dashboard
- **Daily quick-check:** [GBP Insights · phone calls + profile views]
- **Weekly business review:** [GA4 · Conversion-rate funnel + top landing pages]
- **Monthly retainer report:** [agency-supplied PDF — see §Retainer reporting cadence]

### Review cadence
- Agency sends monthly KPI report on [day of month]
- Client + agency review quarterly: [first Monday of Apr/Jul/Oct/Jan]
- KPI list revisited at 6-month mark (add/remove based on what mattered vs what got ignored)
```

The KPI contract block is **owner-confirmed** before scaffold work begins. Agency does not invent targets — they're agreed in conversation, written down, signed off.

---

## Pre-launch verification (operational tests)

Captured in `CHECKLIST.md` §Operational tests under "KPI / event wiring tests"; mirrored here for completeness.

- [ ] Each agency-canonical event the BRIEF.md lists is wired and confirmed firing — open DevTools → Network → filter for `google-analytics`, `clarity.ms`, `posthog.com` → trigger the event manually → confirm payload sent
- [ ] No PII in any event payload — inspect any `payload` field; confirm no email/name/phone/free-text
- [ ] Consent gate is honored — open in fresh private window; confirm zero events fire before Accept is clicked
- [ ] Event names match the canonical names list — diff `src/lib/analytics.ts` against the §Event naming convention table
- [ ] Required parameters present — every event includes `source_page` + `source_section` (and `locale` for multilingual sites)
- [ ] Dashboards exist + are accessible to the client — confirm by logging into the client's Google account (or sharing access) and opening each one
- [ ] Funnel-style events have a counterpart `_failed` event wired (`booking_failed`, `contact_form_failed`)
- [ ] Trigger `consent_given` and `consent_rejected` events — confirm they fire when banner is accepted/rejected

---

## Retainer reporting cadence

The monthly KPI report is the agency's recurring deliverable for retainer-tier clients. Cadence rule: **one report per calendar month**, delivered by the 5th business day, covering the prior month.

### Report structure (1-2 pages)

1. **Headline number** — the one KPI the client cares about most (booking count, lead count, sessions — picked from the KPI contract)
2. **3-KPI scorecard** — month-over-month change with trend arrows
3. **Top finding** — one specific insight from the data ("All booking conversions came from mobile this month" / "GBP profile views spiked 40% after the new photo set went up")
4. **Action item** — one specific recommendation the agency commits to in the next 30 days
5. **Data appendix** — screenshots from GA4 + Clarity + PostHog + GBP + GSC, raw numbers

### Tools for generating the report

| Tool | Purpose | Cost |
|---|---|---|
| Google Looker Studio | Connects GA4 + GSC; freemium template generator | Free |
| PostHog "Insights → Notebooks" | Tier 3 — embed funnels + cohorts in a shareable notebook | Free at agency scale |
| Manual PDF (Pages / Canva / Google Slides) | When the client wants a polished deliverable rather than a dashboard link | Free |

**Rule:** the monthly report is NOT a dump of all numbers. It's headline + scorecard + finding + action. Dumping numbers makes the report unread and undermines the retainer.

---

## Cross-references

- `ANALYTICS.md` §Stack selection per tier — implementation pattern for the GSC + Clarity + GA4 + PostHog stack
- `ANALYTICS.md` §Consent gating — script-blocking pattern that every KPI event respects
- `LEGAL.md` §Cookie consent banner — universal spec — what the consent gate enforces
- `LEGAL.md` §Rules at a glance — no PII in event payloads (this doc enforces at the event-design layer)
- `INFRASTRUCTURE.md` §Error tracking — Sentry captures `*_failed` events at the server-error layer
- `CHECKLIST.md` §Operational tests — KPI-event-wiring tests fire at pre-launch
- `FORMS.md` — form events (`contact_form_started/completed/failed`) wire from form-helper components
- `SALES.md` §Retainer pricing — the KPI report is the retainer's recurring deliverable
- `SEO.md` — GSC is the search-acquisition stream; aligns with KPI bucket §Acquisition
- Per-vertical templates — each `§11 Measurement` subsection picks 3–5 KPIs from this framework with vertical-specific adjustments
