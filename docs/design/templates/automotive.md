# automotive.md — Automotive Vertical Template
## Auto Glass · Tires · Repair · Detailing · Car Wash · Rental · Driving School

**Applies to:** Automotive clients across product types 1–3 (per `TECH.md` §1). Auto repair/glass/tires are close architectural relatives of `templates/trades.md` (Conversion Chain or Solo-Operator) — phone-first CTA, service area, warranty messaging. Rental is a different beast (booking-driven, Type 3+). Detailing is gallery-led (before/after photography is the conversion).

**Reference research:** Based on `local_business_website_benchmark_report.md` §7.10 (Safelite, Jiffy Lube, Firestone, Midas, Caliber Collision, Localiza, Unidas, DPaschoal, DryWash, Kwik Fit, Halfords, Autoglass, Euromaster, Sixt).

**Use this doc as a moodboard with principles, not a layout to clone.** If two clients in the same vertical end up with the same hero pattern, the template has failed at its job — the pattern is correct, but the visual execution must differ.

---

## Rules at a glance

- **The conversion is phone OR quote-form, depending on sub-vertical.** Auto-glass + emergency repair = phone. Tires + scheduled maintenance = vehicle-lookup + appointment. Detailing = gallery + WhatsApp inquiry. Rental = full booking flow with date pickers.
- **Pick one of four archetypes** before designing: **Conversion-Chain Network** (Safelite, Jiffy Lube), **Tire/Service Specialty Chain** (Firestone, Kwik Fit), **Detailing/Collision Gallery-Led**, or **Solo Mechanic / Single-Bay Shop**. ~70 % of agency clients fall into Solo Mechanic.
- **Vehicle lookup tools are load-bearing** for tire/service chains. "Enter your VIN / make / model" → filters services and parts. Generic "What service do you need?" without vehicle context loses the conversion.
- **Warranty + guarantee is mandatory above the fold** for repair/glass/collision. Specific terms ("Lifetime warranty on glass" / "12-month parts & labor warranty") beat vague "Quality guaranteed."
- **Before/after photography is the conversion** for detailing and collision. Single-image-only hero fails; you need the *change*.
- **Insurance/financing clarity** is the differentiator for collision and tire/major-repair. "We work with all major insurers" + specific logos.
- **Avoid the "smiling mechanic with thumbs-up" stock photo.** It's the auto-vertical equivalent of suit-on-stairs.

### Solo-Operator meta-archetype (cross-vertical pattern)

Most agency Automotive clients (single-bay mechanic, local detailer, family-owned tire shop) are the Automotive-specific implementation of the **Solo-Operator meta-archetype** in `DESIGN-BEST-PRACTICES.md` §3:

- Operator/shop name in headline ("João's Mecânica — 25 anos em Niterói")
- Portrait of the operator at the workbench / with the vehicle
- ONE primary CTA (call / WhatsApp / quote request)
- Credentials signature line (years in business + certifications + brands serviced + spoken languages)
- Service list (5–10 services, not a card grid)
- Service area named explicitly
- Pricing reassurance ("Orçamento gratuito" / "Free estimate")
- Footer with legal + insurance partner logos

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Automotive-specific:** vehicle photos (before/after for detailing/collision) are the highest-leverage asset and almost always require real customer cars with consent. Existing client website (tier 2) is more common in this vertical than booking platforms. **Stock photos of generic cars are catastrophic** — buyers want to see *the work this shop has actually done*.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 — 6-tier color source hierarchy. Auto businesses often have van/signage paint colors (tier 3 storefront/signage) — sample these before defaulting.
- **Prospect intake template:** `CHECKLIST.md` §9.

---

## Table of contents

1. [The four Automotive archetypes](#1-the-four-automotive-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Automotive-specific anti-patterns](#8-automotive-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The four Automotive archetypes

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Conversion-Chain Network** (Safelite, Jiffy Lube, Autoglass) | Speed + scale + insurance integration | Get a quote / Schedule service | High — quote integration + insurance APIs + 1000+ location SEO |
| **B. Tire/Service Specialty Chain** (Firestone, Kwik Fit, DPaschoal, Euromaster) | Vehicle lookup + product/service catalog | Find tires for your car / Book appointment | High — vehicle DB + service catalog + appointment system |
| **C. Detailing / Collision Gallery-Led** (Caliber, DryWash) | Before/after proof + insurance work | Get an estimate | Medium — gallery-first + estimate form |
| **D. Solo Mechanic / Single-Bay Shop** (the agency's default Automotive client) | Operator credibility + brands serviced + community trust | Call / WhatsApp / quote | Low — Tier 2 build, phone-first |

**Default for new Type 1/2 clients:** Archetype D. The others require chain-scale infrastructure or transactional flows.

---

## 2. Information architecture per archetype

### Archetype A — Conversion-Chain Network

1. **Hero** — vehicle-type / service-type selector ("Auto glass / Mobile / Insurance claim") + ZIP/PLZ input + "Get my quote" CTA.
2. **Service categories** — Auto glass / ADAS calibration / Mobile service — each as a card with starting info.
3. **Insurance partner logos** — strip showing accepted insurers (Allianz, AXA, HUK, Geico, Allstate — region-dependent).
4. **How it works** — 3 steps: Quote → Schedule → We come to you (or you come to us).
5. **Location finder** — service-area map.
6. **Warranty + guarantee** — lifetime glass warranty / craftsmanship guarantee.
7. **Footer** — heavy: licenses, fleet partnerships, accessibility, careers.

### Archetype B — Tire/Service Specialty Chain

1. **Hero** — vehicle lookup tool ("Enter your make + model + year" or "License plate / VIN") + featured offer.
2. **Service categories** — Tires / Brakes / Oil / Suspension / Diagnostics — each as a card.
3. **Tire catalog** (if applicable) — search/filter by size, brand, price.
4. **Appointment scheduler** — date + location + service.
5. **Promotions / seasonal** — winter tires, summer service.
6. **Locations** — store finder with map.
7. **Footer** — manufacturer warranty info + accessibility + careers.

### Archetype C — Detailing / Collision Gallery-Led

1. **Hero** — before/after slider OR large impressive transformation photo + headline ("Showroom finish in 4 hours") + ONE CTA ("Get an estimate").
2. **Gallery** — large grid of before/after pairs. Real customer cars. Multi-photo per project.
3. **Services + packages** — Detail packages (Basic / Premium / Showroom) with starting prices.
4. **Process** — "What we do" walkthrough — builds confidence pre-estimate.
5. **Insurance / claims** (collision only) — accepted insurers + claims-process explainer.
6. **Reviews** — 3–4 verbatim quotes.
7. **Estimate form** — vehicle info + service desired + photo upload.
8. **Footer** — Impressum/legal + insurance partnerships.

### Archetype D — Solo Mechanic / Single-Bay Shop (the agency's default)

1. **Top bar** — phone + WhatsApp + hours + (emergency repair) 24h tow line.
2. **Hero** — photo of the shop or operator at work + headline naming the shop + brands serviced + city ("Mecânica do João — Especialista em Toyota e Honda · Niterói"). ONE CTA ("WhatsApp para orçamento").
3. **Credentials signature line** — years in business + certifications (ASE / IMI / EuroMaster certified) + brands serviced + languages.
4. **Services + brands serviced** — typography list (not card grid). Brand-specialist mechanics list specific brands prominently.
5. **About / Bio** — single paragraph + portrait of operator at the bay.
6. **Reviews** — 3–4 verbatim quotes from Google.
7. **Visit / hours** — address + map + hours.
8. **Footer** — Impressum/Política/legal + insurance partner logos if applicable.

---

## 3. Hero patterns

### Archetype A — Quote-form chain

- **Quote-form hero.** Selector + ZIP/PLZ + CTA dominates.
- Headline minimal: "Auto glass repair done right" / "Safelite repair, Safelite replace."
- Insurance reassurance microcopy below CTA: "We handle the insurance claim for you."

### Archetype B — Vehicle-lookup chain

- **Vehicle lookup is the hero.** Make + model + year inputs OR license-plate field + CTA.
- Headline + value-prop: "Find the right tires for your car in 60 seconds."
- Promotional banner secondary.

### Archetype C — Before/after gallery

- **Transformation photo is the hero.** Before/after slider OR single dramatic transformation shot.
- Headline: outcome-focused ("Showroom finish in 4 hours" / "Insurance claims handled end-to-end").
- ONE CTA: "Get an estimate."

### Archetype D — Solo mechanic

- **Operator/shop photo is the hero.** Real shop floor, real cars, real operator at work.
- Headline names the shop + specialty + city.
- ONE CTA: "WhatsApp" or "Ligar agora."
- Credentials line below.

---

## 4. Photography direction

### Universal Automotive rules

- **Real vehicles, real customer work.** Stock cars (especially the generic luxury car in front of a city skyline) read instantly fake.
- **Before/after consent.** Customer car photos (especially with visible license plates) require photo release. Crop or blur plates.
- **Real shop floor / bay / lot.** Not stock garage photos.
- **Operator in real workwear, real hands-on tasks.** Not white-shirt-with-thumbs-up.
- **Real tools, real equipment, real branded products** if relevant (Castrol oil, Continental tires).

### Per-archetype photography notes

| Archetype | Photo style |
|---|---|
| A — Conversion-Chain | Vehicle service in progress · technician at work · mobile-service van arriving |
| B — Tire/Service Specialty | Tire warehouse · service bay · branded products · technician at lift |
| C — Detailing/Collision | Before/after pairs (paired tightly) · process shots (clay bar, polish pad, paint booth) · final reveal |
| D — Solo Mechanic | One shop-floor environmental photo · one tight operator portrait · 3–5 examples of work |

---

## 5. Typography pairings

### What works in Automotive

| Pairing | Display | Body | Mood |
|---|---|---|---|
| **Conversion-chain clean** | Inter Display | Inter | High-volume chains — Safelite/Jiffy Lube — legibility-first |
| **Tire-chain workhorse** | Söhne (if licensable) / Inter | Inter | Firestone/Kwik Fit — clean, technical, professional |
| **Detailing premium** | Fraunces / Tiempos | Inter | Premium detailing — Showroom-finish positioning |
| **Solo mechanic friendly** | Fraunces / Manrope-display | Manrope | Standard solo build — warm + competent |

### Rules

- **Never decorative racing fonts (Ethnocentric, Speedee, Eurostile).** They read 1990s body-kit shop, not professional mechanic.
- **Never neon-edged "racing" type.** Anti-pattern.
- **Cap to two families.**

---

## 6. Color archetypes

### Archetype A — Conversion-Chain Network

| Direction | Palette | Mood |
|-----------|---------|------|
| **Safety yellow + black** | White bg / charcoal text / safety yellow accent | Safelite-style emergency-ready |
| **Trust blue + red** | White bg / navy text / red accent | Trust-led + urgency for booking |

### Archetype B — Tire/Service Chain

| Direction | Palette | Mood |
|-----------|---------|------|
| **Heritage red** | White bg / charcoal text / Firestone-red accent | Mass-market tire chain |
| **European tire trust** | White bg / navy text / yellow/orange accent | Kwik Fit / Euromaster register |

### Archetype C — Detailing/Collision

| Direction | Palette | Mood |
|-----------|---------|------|
| **Showroom premium** | Near-black bg / cream text / single bright accent (chrome silver, deep gold) | Premium detailing |
| **Collision trust** | White bg / navy text / orange accent | Caliber-style insurance + craftsmanship |

### Archetype D — Solo Mechanic

| Direction | Palette | Mood |
|-----------|---------|------|
| **Workshop warmth** | Off-white bg / charcoal text / safety orange accent | Standard solo — "ready to help" |
| **Brand-specialist navy** | Off-white bg / navy text / brand-accent (e.g., Honda red, Toyota red, BMW blue) | Brand-specialist mechanic |
| **Eco-friendly sage** | Cream bg / dark green text / sage accent | Hybrid/EV specialist |

**Rules:**
- **Never neon green / electric blue** unless it's the literal brand color of a brand being specialized in.
- **Safety orange + yellow + red are all viable** as accent — emergency/urgency reads correctly in this vertical (unlike health/legal).
- **One brand accent maximum** for Solo Mechanic.

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5 — vertical-default tier 5:

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Solo mechanic / general repair** (Archetype D — agency default) | Off-white + charcoal + safety orange | `--color-bg: #fafaf8`<br>`--color-text: #1a1a1a` (charcoal)<br>`--color-accent: #ea580c` (safety orange)<br>`--color-border: #e3e3df` | Reads "ready to help, no-nonsense." Safety orange = trade-vertical sibling. Survives photos of dirty work and real shop floors. |
| **Brand-specialist mechanic** (Archetype D — brand-themed) | Off-white + brand color + accent | Sample from the brand being specialized in (Toyota red, BMW blue, Mercedes silver, etc.) | Brand-specialty signal upfront. Buyers searching "BMW specialist Niterói" decode the brand color before reading. |
| **Auto detailer / car wash** (Archetype C variant) | Near-black + bone + chrome silver accent | `--color-bg: #1a1a1a` (near-black)<br>`--color-text: #ebe2d3` (bone)<br>`--color-accent: #c0c0c0` (chrome silver)<br>`--color-border: #2a2a2a` | Showroom-finish register. Dark mode = premium detailing positioning. Avoid for generic mechanics — this is for detailing specifically. |
| **Auto glass / mobile service** (Archetype A variant) | White + safety yellow + black | `--color-bg: #ffffff`<br>`--color-text: #0f1419`<br>`--color-accent: #facc15` (safety yellow)<br>`--color-border: #e5e5e5` | Safelite-style emergency signaling. Yellow = construction-zone urgency, reads "we'll be there fast." |
| **Tire/service specialty** (Archetype B) | White + navy + heritage red | `--color-bg: #ffffff`<br>`--color-text: #0f1419` (navy)<br>`--color-accent: #b91c1c` (heritage red)<br>`--color-border: #e5e5e5` | Firestone/Kwik Fit register. Pure white acceptable — tire chains optimize for catalog clarity. |
| **Collision repair** (Archetype C) | White + navy + orange | `--color-bg: #ffffff`<br>`--color-text: #1a2436`<br>`--color-accent: #ea580c` (warm orange)<br>`--color-border: #e2e8f0` | Caliber-style. Insurance trust + craftsmanship signal. Orange reads "we'll handle it" without panic-red. |
| **Driving school** | Cream + navy + warm yellow | `--color-bg: #faf7ee`<br>`--color-text: #1a2436`<br>`--color-accent: #f59e0b` (warm yellow)<br>`--color-border: #e5e0d0` | Friendly + safe + approachable for nervous new drivers. Yellow ties (subtly) to safety signaling. |

**How to pick:** Use archetype matrix first. Then service type. Solo mechanic = orange (action). Auto glass = yellow (urgent). Detailing = chrome (premium). Tire chain = red (heritage retail). Brand-specialist = sample the brand.

**These are starting points.** Sample existing van wraps, shop signage, branded uniforms before committing. Document tier in `design.md` §"Color tokens."

---

## 7. Copy voice cues

### What to say

- **Name the brands serviced** (for solo mechanics). "Especialista em Toyota, Honda e Hyundai" beats "We service all makes."
- **Quantify experience.** "25 anos em Niterói" / "Atendendo Cedofeita desde 1998."
- **Quantify warranty.** "12 meses de garantia em peças e mão de obra." Specific numbers > vague "Quality work."
- **List insurance partners** for collision/glass. "Trabalhamos com Porto Seguro, SulAmérica, Bradesco Seguro."
- **Surface emergency** for auto glass / breakdown service: "Serviço de emergência 24h."
- **Pricing reassurance.** "Orçamento gratuito" / "Diagnóstico sem compromisso."

### What never to say

- ❌ "Quality service guaranteed." Generic, unverifiable.
- ❌ "Trust the experts." Performative.
- ❌ "We treat your car like our own." Cliché.
- ❌ "Comprehensive automotive solutions." Word salad.
- ❌ "Award-winning service" without naming the specific award.

---

## 8. Automotive-specific anti-patterns

| Anti-pattern | Why it fails | Better |
|---|---|---|
| **Stock photo of luxury car in front of city skyline** | Universally fake; real shops don't photograph that way | Real shop floor + real customer cars (with consent + plate-blur) |
| **Stock mechanic with thumbs-up + crossed arms** | The auto-vertical equivalent of suit-on-stairs | Real operator at the lift, in workwear, in the shop |
| **Racing-typography logo (Ethnocentric, Eurostile)** | Reads 1990s body-kit shop | Restrained sans or warm serif |
| **"Schedule service" CTA without service-type or vehicle context** | Friction — buyer doesn't know what's behind the button | Multi-step: pick service → pick vehicle → pick date |
| **No warranty terms visible** | Buyers expect warranty for repair/glass/tires | Specific terms above the fold or in trust strip |
| **Insurance logos missing** for collision/glass | Top buyer-question for these sub-verticals is "does my insurance cover this?" | Logo strip + "we handle the claim" microcopy |
| **No before/after photos for detailing** | Detailing buyers buy the transformation, not the description | Multiple before/after pairs |
| **Plate visible in customer car photos** | Privacy issue + consent issue | Blur or crop plates |
| **Generic "Contact us" form** | Conversion-killer in vertical with phone-led buyers | "Solicitar orçamento" with vehicle info fields |
| **Endless service grid without vehicle filter** | Service-relevance is vehicle-dependent | Vehicle lookup at top filters services |

---

## 9. Reference site annotations

### 9.1 Safelite — `safelite.com` (Archetype A — Conversion-Chain)

Canonical auto-glass reference. Mobile service, locations, insurance, warranty messaging, quote/scheduling flow.

**Borrow:** quote-form hero · insurance partner logos · mobile-service value prop · warranty terms specifically named.

**Avoid:** Safelite has 7000+ locations and integrated insurance APIs; solo glass shops can't pretend to that.

### 9.2 Jiffy Lube — `jiffylube.com` (Archetype A — Quick-Service Chain)

Quick-service auto benchmark. Locations + services + coupons + maintenance schedules.

**Borrow:** services-as-cards · "find a location" prominence · seasonal-maintenance reminders.

**Avoid:** chain-scale features.

### 9.3 Firestone Complete Auto Care — `firestonecompleteautocare.com` (Archetype B — Tire/Service Chain)

Strong repair/tire/service. Vehicle/service lookup + appointment UX.

**Borrow:** vehicle-lookup-as-hero · tire catalog UX · appointment scheduler.

**Avoid:** chain-scale.

### 9.4 Caliber Collision — `caliber.com` (Archetype C — Collision Repair Network)

Collision/body repair. Estimate + locations + claims support + service explanation.

**Borrow:** estimate-form UX · "we handle the claim" reassurance · process-walkthrough.

**Avoid:** chain-scale.

### 9.5 DPaschoal — `dpaschoal.com.br` (Archetype B — BR Tire/Service Chain)

Strong BR auto-service. Tires, services, appointments, vehicle search.

**Borrow:** BR voice · WhatsApp integration · service-vehicle pairing.

**Avoid:** chain-scale.

### 9.6 DryWash — `drywash.com.br` (Archetype C — Detailing/Car Wash Chain)

BR detailing benchmark. Service presentation + environmental positioning (water-conservation tech).

**Borrow:** before/after pattern · environmental/eco messaging where genuine.

**Avoid:** chain-scale.

### 9.7 Sixt — `sixt.com` (Archetype A — Rental, documented for completeness)

Global rental reference. Fast booking + location UX.

**Borrow:** booking-flow UX (vehicles + dates + insurance options).

**Avoid:** rental is a different sub-vertical with fleet-management requirements outside agency scope.

### 9.8 Inferred — Solo Mechanic / Single-Bay Shop (Archetype D — the agency default)

No canonical worked example in §7.10 — the benchmark skews to chains. Archetype D is the cross-vertical **Solo-Operator meta-archetype** from `DESIGN-BEST-PRACTICES.md` §3 — same pattern as `templates/trades.md` Archetype D. Adapt to Automotive specifics: brand-specialty disclosure, real shop floor + customer-car photography, insurance-partner logos if applicable.

---

## 10. Decision matrix — picking the archetype per client

| If the client is… | Pick archetype | Stack tier (per `TECH.md` §1) |
|---|---|---|
| Single-bay mechanic, owner-operated | **D — Solo Mechanic** | Tier 2 · Type 1–2 |
| Brand-specialist mechanic (e.g., BMW only, Toyota only) | **D + brand-themed palette** | Tier 2 · Type 2 |
| Detailing shop, gallery-led | **C — Detailing Gallery-Led** | Tier 2 · Type 2 (with estimate form) |
| Collision repair, insurance-driven | **C — Collision** | Tier 2 or 3 · Type 2–3 |
| Tire/service chain with vehicle DB | **B — Tire/Service Chain** | Tier 3 · Type 3 |
| Auto glass / mobile service chain | **A — Conversion-Chain** | Tier 3 · Type 3 |
| Car rental | (out of scope — booking-DB requirements + fleet management) | Tier 3 · Type 3+ |
| Driving school | **D variant** | Tier 2 · Type 2 |

**Default for agency cold-outreach prospects:** **Archetype D** (Solo Mechanic / Single-Bay Shop). Cross-vertical Solo-Operator meta-archetype + Automotive-specific brand-specialty disclosure + real customer-car photography (with consent + plate blur) + warranty/insurance trust signals = a defensible solo mechanic site at Tier 2, ~6–8 hrs of focused build.

---

*Automotive is a trust-led vertical built on real shop floors + real cars + real warranties. Skip the stock luxury cars. Lead with the brand specialty. Show the warranty.*

---

## 11. Measurement — KPIs that matter for Automotive

**Applies to:** every retainer-tier automotive client at production cutover. KPI framework, naming convention, and per-tier stack selection live in `KPI.md`; this section picks the 3–5 KPIs that matter most for mechanics, body shops, and detailers and how they wire.

### 11.1 Product KPIs

| # | KPI | Bucket | Source | Target / benchmark |
|---|-----|--------|--------|---------------------|
| 1 | Quote-request rate (form + WhatsApp combined) | Conversion | GA4 `contact_form_completed` + `whatsapp_click` | ≥ 4% of sessions |
| 2 | Phone-click rate (emergency / breakdown sessions) | Conversion | GA4 `phone_click` | ≥ 6% of mobile sessions (high — breakdown urgency) |
| 3 | Brand-specialty page split (BMW page vs Audi page vs Mercedes page) | Acquisition | GA4 `page_viewed` filtered to `/marken/[brand]` | Tracks which specialty drives traffic |
| 4 | Service-area-based lead share (neighborhood/postcode driving leads) | Acquisition | GA4 + GSC location data | Identifies the 1-2 catchment areas to double down on |
| 5 | Warranty-page engagement (% sessions that viewed warranty page) | Conversion (trust signal) | GA4 `page_viewed` /garantie or /warranty | ≥ 15% — high engagement = differentiator working |

### 11.2 Per-tier stack

| Tier | Tools active | What it measures |
|---|---|---|
| Tier 1 + form endpoint (quote form only) | GSC + Clarity + GA4 | KPIs #1, #2, #3, #5 |
| Tier 2 (Astro — most common for solo mechanics) | GSC + Clarity + GA4 | All 5 KPIs except cohort retention |
| Tier 3 (multi-bay shop with appointment system) | GSC + Clarity + GA4 + PostHog + Sentry | All 5 KPIs + repeat-customer cohort |

### 11.3 Dashboard tiles

**GA4:** conversions by event (`phone_click`, `whatsapp_click`, `contact_form_completed`) · top landing pages (often brand-specialty pages) · device split (high mobile share for breakdowns) · source/medium for quote requests.

**Clarity:** heatmaps on brand-specialty pages + warranty page · rage clicks on phone-number display · recordings filtered to quote-form abandonment.

**PostHog (Tier 3):** quote → appointment funnel · returning-customer cohort (insurance jobs vs cash) · appointment-day-of-week heatmap.

### 11.4 Vertical-specific event names

| Event | Fires when | Required params |
|---|---|---|
| `quote_form_started` | Quote-form first field focused | `source_page`, `service_category` (`bodywork`, `service`, `tires`, etc.) |
| `quote_form_completed` | Quote submitted (200 from endpoint) | `service_category`, `source_page` |
| `brand_page_viewed` | Brand-specialty page LCP fires | `brand_slug` (`bmw`, `audi`, `mercedes`, `vw`) |
| `warranty_page_viewed` | Warranty page LCP fires | `source_page` (which entry route) |
| `emergency_call_clicked` | Phone number in emergency banner clicked | `source_section` (`hero` / `emergency_banner` / `footer`) |

### 11.5 Pre-launch verification

- [ ] All KPIs in §11.1 mapped to wired events in BRIEF.md KPI contract
- [ ] Brand-specialty page paths normalized (`/marken/[brand]`) so GA4 can group
- [ ] Service-area page paths captured (`/standort/[city-or-postcode]`)
- [ ] Phone link wraps in tap-target ≥ 44px (high mobile-emergency click volume)
- [ ] Run `CHECKLIST.md` §Operational tests for cookie banner + Sentry PII + KPI wiring

### 11.6 Integrations applicable to Automotive

Per `INTEGRATIONS.md`. Tier-driven defaults plus vertical-specific:

| Integration | When (tier) | Vertical-specific notes |
|---|---|---|
| **Resend** | Type 2+ (quote request form) | Auto-reply confirming quote-request received + expected response window (24-48h typical) |
| **Sentry** | Tier 2+ (full SDK) · Tier 1 form endpoint | Standard agency setup |
| **Upstash** | Tier 2+ quote form | Rate-limit 5/60s (lower than trades — automotive less emergency-driven) |
| **PostHog** | Tier 3+ multi-bay shop with appointment system only | Quote → appointment funnel, response-time distribution |
| **Neon** | Tier 3+ multi-bay shop appointment system | Quote requests, appointment schedule |
| **Insurance API** (optional) | Type 3+ shops doing DRP work | Direct integration with insurance companies' booking systems (out of scope for typical agency build; document as future-state) |
| **Calendly** (optional) | Tier 2+ appointment-based shops | Service-only operators (oil change, tire rotation) often use Calendly deep-link instead of own booking |

### 11.7 Share strategy

Per `SOCIAL-SHARING.md` §Per-vertical share strategy: **Low leverage**.

- **Default targets:** WhatsApp + Copy-link
- **IG embed recommended:** ❌ No — automotive work shares poorly on IG (audience self-selects)
- **Placement:** subtle inline share row in footer · NOT in hero (hero space goes to phone CTA + brand-specialty disclosure)
- **OG image priority:** clean shop-floor shot or branded service van (1200×630). Avoid stock-luxury-car photos; show the real shop.
- **WhatsApp share copy:** "[Shop name] — [brand specialty] in [city]. [Phone]." — number in share text accelerates referrals
- **Customer-car photos:** require signed consent + plate blur per `LEGAL.md`. Never share customer-car photos to social without consent.

### 11.8 Schema.org variants

Use the most specific subtype:

- `AutoRepair` — general mechanic
- `AutoBodyShop` — bodywork / collision
- `TireShop` — tire-focused
- `MotorcycleRepair` — motorcycle / scooter
- `AutoPartsStore` — parts retail (rare in agency scope)

```json
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "[Shop name]",
  "address": { ... },
  "geo": { ... },
  "telephone": "+...",
  "openingHoursSpecification": [...],
  "areaServed": ["[city]", "[neighborhood1]"],
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inspektion" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bremsen-Service" } }
  ],
  "potentialAction": { "@type": "ContactAction", "target": "tel:+..." }
}
```

`makesOffer` lists the specific services — improves long-tail ranking ("[brand] Bremsen-Service [city]").

### 11.9 GBP category + keyword pattern

- **GBP primary category:** `Auto repair shop` / `Auto body shop` / `Tire shop` / `Car dealer` (pick most specific)
- **GBP secondary categories:** brand specialty (`BMW dealer`, `Audi dealer`), service category (`Brake shop`, `Oil change service`)
- **Per-jurisdiction GBP attributes:** wheelchair-accessible parking, on-site services, online estimates, free estimates
- **Keyword pattern (DE):** `[brand] werkstatt [stadt]` · `kfz werkstatt [stadtteil]` · `[brand] reparatur [stadt]`
- **Keyword pattern (BR):** `oficina [marca] em [cidade]` · `[serviço] carro [bairro]`
- **Keyword pattern (PT):** `oficina [marca] em [cidade]` · `[serviço] automóvel [bairro]`
- **Example:** "BMW Werkstatt Mitte" · "Oficina Volkswagen em São Paulo" · "Mecânico em Lisboa"
