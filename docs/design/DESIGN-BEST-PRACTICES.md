# UI/UX Design Best Practices
## Web Agency — Local Business Landing Pages

**Applies to:** All product types (1–5) — this is the universal UI/UX core. Every client gets a dedicated design file that inherits these rules and extends them with project-specific tokens, palette, and copy decisions. See `TECH.md` §1 for the product-type matrix.

**Read this before building any page for any client.**

**Source projects:** bible-tt, MyPlanny (retail-store), Maresia (Signal-to-Scale)

**Companion documents:**
- `TECH.md` — stack decisions, code organization, naming conventions, deployment workflow
- `SEO.md` — on-page SEO, schema markup, Google Business Profile optimization
- `I18N.md` — multilingual setup, DE/EN/PT-BR rules, locale formatting

---

## Table of contents

1. [The product-feeling question](#1-the-product-feeling-question)
2. [Audience and context](#2-audience-and-context)
3. [Visual direction](#3-visual-direction)
4. [Typography system](#4-typography-system)
5. [Color system](#5-color-system)
6. [Layout and spacing](#6-layout-and-spacing)
6.5. [Section composition variation (portfolio-diversity gate)](#65-section-composition-variation-portfolio-diversity-gate) — *added 2026-05-23*
7. [Component patterns](#7-component-patterns)
8. [Motion and interaction](#8-motion-and-interaction)
9. [Icons](#9-icons)
10. [Accessibility](#10-accessibility)
11. [Content and copy rules](#11-content-and-copy-rules)
12. [States and edge cases](#12-states-and-edge-cases)
13. [Mobile-first rules](#13-mobile-first-rules)
14. [Human touch checklist](#14-human-touch-checklist)
15. [Anti-slop checklist](#15-anti-slop-checklist)
16. [Build rules](#16-build-rules)
17. [Per-client design file structure](#17-per-client-design-file-structure)

---

## 1. The product-feeling question

**Answer this for every client before touching any code or color.**

Every local business website has one job: make someone who found the business online trust it enough to take action (call, book, walk in, send a message).

Ask three questions per client:

1. **What should a visitor feel within 3 seconds of landing?**
   Examples: "this place is legit", "this is exactly what I was looking for", "I want to go here"

2. **What is the one action that matters most on this page?**
   Pick exactly one. Phone call, WhatsApp message, booking, or directions. The rest is supporting context.

3. **What must this page NOT feel like?**
   Generic template. Outdated. Cheap. Confusing.

Write the answers down. They govern every design decision that follows.

**What every local business page must include above the fold:**
- Business name (clear, not buried)
- What they do (one line)
- Where they are (city/neighborhood)
- Primary CTA (clickable phone or action button)

**What every local business page must include somewhere:**
- Clickable phone number (`tel:`)
- Clickable address (links to Google Maps)
- Opening hours
- WhatsApp link if applicable (`https://wa.me/`)
- A trust signal (reviews, years in business, photos of the real place)

---

## 2. Audience and context

**Who sees these pages:**
- People who searched Google for the business type + city
- People who found the business on Google Maps and clicked "website"
- People who got the link via word of mouth
- The business owner themselves, on their phone

**Their context of arrival:**
- Usually on mobile (expect 60–70% mobile traffic for local businesses)
- Usually mid-task: looking for a specific thing, in a hurry
- Low patience: if the first screen doesn't answer their question, they leave

**Pain they are solving:**
- Is this business real and open?
- Is it the right fit for what I need?
- How do I contact them right now?

**Design implication:** Every design decision should reduce time-to-answer for those three questions. Not time-to-be-impressed. Time-to-answer.

---

## 3. Visual direction

### Per-client aesthetic

Each client gets its own aesthetic direction. Do not reuse the same look across clients.

**Before starting any client:**
1. Study their existing visual identity (colors, logo, photos, social media)
2. Visit 2-3 competitor websites in the same city and sector
3. Pick a direction that is distinctly different from the competitors and consistent with the client's identity
4. Write one sentence: "This site should feel like ___"

### Aesthetic archetypes for local businesses

Use these as starting points, not templates:

| Sector | Strong aesthetic directions |
|--------|-----------------------------|
| Restaurant / café | Warm editorial, photography-led, tactile (paper/wood textures). Three sub-archetypes: Immersive Brand Editorial · Modern Conversion-First · Heritage Storytelling — see `docs/design/templates/gastronomy.md` |
| Clinic / physio / dentist | Clean, clinical white, confidence, trust signals prominent |
| Fitness / yoga / wellness | Energetic or calm (pick one), bold typography, motion |
| Salon / beauty / tattoo | Personality-forward, dark or saturated, portfolio-led |
| Retail / boutique | Soft, lifestyle, product photography forward |
| Tradesperson / services | Direct, minimal, trust-first (reviews, certifications) |

### Per-vertical templates

For deeper per-vertical guidance with reference-site analysis, see `docs/design/templates/<vertical>.md`:

**Core 5 (built first — most common agency verticals):**
- `templates/gastronomy.md` — three archetypes (Big Mamma · Sweetgreen · Dishoom) + Porto dos Ribeiros reference implementations
- `templates/beauty.md` — three archetypes (TONI&GUY · Drybar Shops · AIRE Ancient Baths) + Jean Souza Barber reference implementation (Modern urban barber dark sub-archetype)
- `templates/trades.md` — four archetypes (Pimlico · Roto-Rooter · Banham + solo-operator default)
- `templates/health.md` — three archetypes (Mayo Clinic · Einstein · Cleveland Clinic + Solo Practitioner default)
- `templates/studio.md` — four archetypes (Equinox · Smart Fit · Hotpod Yoga + Solo Instructor default)

**Extended 7 (added 2026-05-16 — full coverage across the benchmark's 12 categories):**
- `templates/professional-services.md` — four archetypes (Big Law · Productized · Quote-Led · Solo Practitioner Trust-Led)
- `templates/pets.md` — four archetypes (Premium Vet Network · Pet Retail Chain · Solo Vet/Groomer · Daycare/Boarding)
- `templates/automotive.md` — four archetypes (Conversion-Chain · Tire/Service Specialty · Detailing/Collision · Solo Mechanic)
- `templates/education.md` — four archetypes (Premium Daycare · Tutoring Franchise · Language School · Solo Instructor)
- `templates/events-hospitality.md` — four archetypes (Luxury Hospitality · Boutique Hotel · Event/Wedding Venue · Solo Photographer/Planner)
- `templates/home-garden.md` — four archetypes (Flower Ecommerce · Plant Ecommerce · Garden/Lawn Service · Solo Florist/Plant Shop/Landscaper)
- `templates/artisan.md` — four archetypes (Luxury Jewelry · Premium Craft · Modern Artisan · Solo Maker)

**Templates are moodboards, not layouts.** The vertical template captures the *principles* across multiple top-tier reference sites — photography rules, typography pairings, color archetypes, IA patterns, vertical-specific anti-patterns. The per-client `design.md` then makes the specific choices on top of those principles. **Never copy a reference layout** — if two clients in the same vertical end up with the same hero, the template has failed its job. The pattern is correct; the visual execution must differ.

### The Solo-Operator meta-archetype (cross-vertical)

Across trades, health, and studio templates, the same archetype recurs as the agency's most common client profile: a **single-person or two-person business with no chain identity**. It deserves recognition as a meta-archetype because the same patterns apply regardless of vertical:

- Headline names the operator + the discipline + the area ("João — Eletricista em Cedofeita" / "Dr. Ana Silva — Médica de Família em Cedofeita" / "Sara Pilates · Mitte Berlin")
- Portrait of the operator in their actual workspace (not in front of a generic background)
- ONE primary CTA — call / WhatsApp / book first visit
- Credentials signature line — license number + years + key certifications + spoken languages
- Service list (5–10 bullets), not a card grid
- Service area named explicitly (one line of text, no map iframe needed)
- Pricing reassurance — single statement ("Orçamento gratuito" / "Free first consultation")
- Footer with legal info (license/registration number) and minimal links

The cross-vertical implementation is the same; only the photography style, typography weight, and color archetype change per vertical. ~70-95 % of agency clients fall into this pattern, regardless of industry.

### Location-finder hero (cross-vertical conversion pattern)

For any place-based multi-location client (trades chain, health network, gym chain), the hero almost always includes a **postcode / zip / city search** as the primary or secondary CTA. The pattern appears in Pimlico (UK postcode), Roto-Rooter (US zip), Smart Fit (BR city dropdown), Cleveland Clinic (region selector), and Mayo Clinic (locations grid). Surface area before service catalog — "do you cover me" is the user's first question.

### Forbidden visual directions for local businesses

- Generic SaaS dashboard aesthetic (the client is not a startup)
- Stock-photo-heavy hero with no real business photos
- AI glow, gradient orbs, or tech-bro sphere effects
- Parchment, stained glass, or nostalgic clip-art (unless it is genuinely the brand)
- Heavy animations on every scroll (slows the page, annoys mobile users)
- Five-column grids on mobile (it will break)
- **Fixed-viewport SPA / scroll-hijacked navigation** — measured anti-pattern from `docs/audit/ui-ux-reference-study.md` §4 Aircenter, §9 Hubtown, §11 Marvell, §21 Victor Furuya. These pages render at a fixed `100vh` and use JS to translate/cross-fade panels in place rather than letting the document scroll. They look cinematic on referral traffic but destroy organic search: crawlers see one viewport of content, deep-linking breaks, browser back/forward is hostile, Core Web Vitals (especially CLS during programmatic transforms) collapse. **Acceptable only when SEO is explicitly deprioritized in `BRIEF.md`** (a portfolio site, an invite-only experience, a referral-driven luxury brand). For any local-business client whose acquisition channel includes Google search — **forbidden, no exceptions.** Cross-reference: `SEO.md` §Tech SEO anti-patterns.

### The real-photo rule

**Paying clients:** Every site must use at least one real photo of the actual business (exterior, interior, product, or team). Stock photos are visible from orbit and destroy trust for local businesses. If the client has no photos, the first deliverable is a photo shoot or at minimum using their Google Maps / Instagram photos.

**Portfolio demos (no real business):** Demos must STILL ship with real photographs — not gradient placeholders, not SVG decorations, not "Photo to follow" captioned squares. Use **CC0-licensed stock from Unsplash / Pexels** matched to the vertical aesthetic. The minimum-viable count is **5 photos per demo**: 1 Hero + 4 supporting (gallery / About / location / service / detail). Wire them as `<img src="/img/photo/*.jpg">` under the demo's `public/img/photo/` directory and caption with a small italic "⚠ Stock photography (Unsplash CC0) — real images to follow" so visitors understand the demo register.

**Hard rule** (added 2026-05-25 — agency audit gate): **No demo or paying-client site may ship with zero photographs.** If you have built a Hero + sections and the only `<img>` is `og-default.png`, the build is incomplete. Photography is not a "phase 2" deliverable; it is a phase-1 part of "ship."

**Why this rule exists:** the 3 portfolio demos shipped 2026-05-23 (Sander & Voss / Atem / Bart & Pomade) used SVG mandalas + barber-pole stripe patterns + gradient bento tiles in place of real photography. The user flagged this immediately on first review. Typography-led design is fine for the Hero text block — but a 10-section page with zero photographs reads as a wireframe, not a site. **Real photography is the difference between "design study" and "real site."**

**Sourcing recipe (demos):**
1. Identify 5 photo roles per demo: Hero · About · Gallery × 2 · Detail/Texture.
2. Search Unsplash for each role using the demo's vertical + aesthetic register (e.g. "empty yoga studio wood floor" / "vintage barbershop chair" / "law firm boardroom").
3. Verify each download is a valid JPEG (`file public/img/photo/*.jpg | grep -v JPEG` should output nothing).
4. Wire with `<img src="/img/photo/X.jpg" alt="..." loading="lazy" decoding="async" class="...object-cover" />`.
5. Footer or section caption credits "Stock photography · Unsplash CC0" so license provenance is on-record.
6. Document the 5 photo IDs + photographers in `docs/clients/<demo-slug>/CREDITS.md` for future replacement.

### Demo / asset data discipline (added 2026-05-23, audit-driven)

When sourcing images programmatically (Unsplash IDs, curl + URL templates, etc.) — for demo builds AND for real clients before final photography arrives — three failure modes have caused real shipped bugs and must be caught at commit time:

1. **Verify the download isn't a 404 saved as `.jpg`.** A typo'd Unsplash photo ID returns a 29-byte HTML error response that `curl -o photo.jpg` happily writes as a "jpg." Verify after every batch:
   ```bash
   file public/img/*.jpg | grep -v "JPEG image data"   # any output = a non-JPEG file
   ```
   Caught the Adèle V5 `team-chef.jpg` bug — Chef de Cuisine portrait was an HTML 404 saved with a `.jpg` extension; visible as a broken image on production.

2. **Verify distinct files for distinct subjects.** Curling two different Unsplash IDs to two different filenames can silently produce duplicates if both IDs return the same image (Unsplash redirects, hotlinking changes, mid-session migrations). Check md5 sums after a team-photo / staff-portrait batch:
   ```bash
   md5 -q public/img/team-*.jpg | sort | uniq -c | sort -rn | head -3   # any count > 1 = dupe
   ```
   Caught the Adèle V5 `team-sous.jpg` = `team-sommelier.jpg` bug — same person shown for two different team members.

3. **Cross-check `tagline` / `meta description` / OG against page content.** Editorial copy lives in 3+ places (Hero H1 + page body + `SITE.i18n[locale].tagline` used by meta + OG). Drift between them produces "meta says X, page says Y" — search-result snippet and social preview misrepresent the site. After every menu / copy edit:
   ```bash
   grep -E "tagline|shortTagline" src/lib/site.ts
   grep -E "Gänge|courses|Sorten" src/pages/index.astro | head -5
   # diff the numerals / signature terms
   ```
   Caught the Adèle V5 tagline contradiction — `tagline: 'Drei Gänge'` while every page said "Fünf Gänge."

These three checks now belong in `CHECKLIST.md §1 Static files in public/` (image integrity) and `CHECKLIST.md §HTML structure` (tagline parity) as pre-launch gates.

### Sourcing photos and favicon from the prospect intake

Every prospect lands with a `docs/audit/[name].md` intake file (see `CHECKLIST.md` §9 for the template). That file lists every reachable image source — Instagram, Google Business Profile, Facebook, existing website, Trinks/Treatwell/Booksy profile pages, TripAdvisor, Yelp. **During scaffold, photos must be pulled from those sources in declared priority order. `<Placeholder>` components are a last-resort fallback, not a default.**

#### Source priority for body photography

| Priority | Source | When to use |
|---|---|---|
| 1 | **Owner-supplied originals** (file transfer, USB drop, Drive folder) | Production launch — always preferred. Photo quality and licensing are unambiguous. |
| 2 | **Existing client website gallery** (if any) | Demo phase. Already-public photos the client controls. Migrate to Astro `<Image>` pipeline; never link to raw `public/` originals in production. |
| 3 | **Industry-specific booking-platform profile pages** (Trinks · Booksy · Treatwell · Fresha · Mindbody · ClassPass · Glofox · Doctolib · Zocdoc · Resy · OpenTable · TheFork) | **Try this FIRST when the vertical uses a booking platform** (beauty, health, studio, and some gastronomy clients). These pages are typically WebFetch-accessible (server-rendered HTML, no SPA blocker) and frequently expose: master logo at a predictable CDN URL, structured business data (corrected hours, address with landmarks, services), payment methods. Worked example: Jean Souza Barber's Trinks page yielded a 1214×1214 master logo via `cloudfront.net/Estabelecimentos/[ID]/original/logo_[ID].jpg` + 4 data corrections in one WebFetch call (2026-05-15). |
| 4 | **Instagram public posts** (`https://instagram.com/[handle]`) | Demo phase, with manual download by the human operator. **Do not attempt automated scraping** — Instagram blocks unauthenticated requests and aggressive scraping triggers account-level rate limits that affect the prospect. |
| 5 | **Google Business Profile photo set** | Demo phase, manual download via Google Maps. Use the highest-resolution variant available. Not API-accessible without OAuth. |
| 6 | **Facebook page** (`facebook.com/[handle]/photos`) | Demo phase, manual download. SPA-rendered — automated extraction reliably blocked. Lower quality than IG in most cases. |
| 7 | **TripAdvisor / Yelp / HappyCow / vertical review platforms** | Last-resort scraped sources. Verify image licensing before reuse. |
| 8 | **`<Placeholder>` component** (dashed border + italic label) | Only when no source above is reachable. Must be paired with an explicit "Photos to fetch from sources" instruction block in `BRIEF.md` so the human knows exactly what to download next. |

**Why booking-platform pages outrank Instagram + GBP for accessibility:**

- Trinks / Booksy / Treatwell / Mindbody / Doctolib host the *business's own brand assets* (logo, hero photo, service-list photos) on **predictable CDN URLs with stable HTML scaffolding** — WebFetch returns the raw data.
- Instagram, Facebook, and Google Maps render content client-side via SPA frameworks — WebFetch retrieves either an empty shell or base64 placeholders. The "tier 3 Instagram" entry that existed in earlier versions of this hierarchy was a *theoretical* tier-3 source; in practice it's tier 4+ because of automated-access blocking.
- For verticals that use booking platforms (beauty, health, fitness/studio, some gastronomy), the booking platform IS the brand's most-curated public profile — by definition it has the canonical logo + accurate operating data.

**Cold-call demo vs. production:** scraped/manually-downloaded photos are acceptable for the `noindex` demo phase per `TECH.md` §3. Production launch requires owner-supplied originals OR owner's explicit written permission to use the demo photos. Document the decision in `BRIEF.md` §Open questions.

#### Source priority for favicon

The favicon is mandatory — never ship a build with `<link rel="icon">` pointing to a missing file. Source it in this order:

| Priority | Source | Format |
|---|---|---|
| 1 | **Client-supplied logo file** (SVG preferred, PNG ≥ 256 px fallback) | `/public/favicon.svg` + `apple-touch-icon.png` (180 × 180) |
| 2 | **Booking-platform master logo** (Trinks / Booksy / Treatwell / Mindbody / Doctolib profile pages) | WebFetch the profile page → extract the CDN URL → download the `/original/` size variant (most platforms use `[size]/logo_[ID].(jpg|png)` URL pattern; the `original` size is often available even when the platform displays a 120×120 thumbnail). Crop to JS-shield-style if the logo has a wordmark too long to render at 16×16. Worked example: Jean Souza Barber's Trinks logo retrieved at 1214×1214 (2026-05-15). |
| 3 | **Instagram profile avatar** (sometimes a vector logo, sometimes a portrait crop) | Manual download → optimize → `/public/favicon.png` (multi-size or 32 × 32). IG blocks automated extraction. |
| 4 | **Distinctive crop of a real photo** (storefront sign, signature dish, hero portrait) | Crop to a 1:1 detail that reads at 16 × 16 — usually a single letter or icon-like element |
| 5 | **Typeset monogram** in the brand's display font and accent color | Generate an inline SVG: business initials in the brand's display typeface, on `--color-bg`, in `--color-accent`. Hand-tuned letter-spacing. Commit as `/public/favicon.svg`. |

Priority 4 (typeset monogram) is the always-available fallback. It works for any business with a name, in any vertical, and stays consistent with the brand palette. **It is never acceptable to ship a build referencing `/favicon.png` if that file doesn't exist** — the missing-icon flash hurts trust on the first paint.

#### Workflow during scaffold

1. **Read `docs/audit/[name].md`** before any code. Enumerate every URL it contains under "online presence."
2. **Attempt each source in priority order.** For automated sources, use `WebFetch` first. For sources known to block (Instagram, Cloudflare-protected pages), skip automation and add a manual-download instruction to `BRIEF.md` §"Photos to fetch from sources."
3. **Generate the favicon from the highest-priority available source.** If no source above priority 4 is reachable, generate the typeset monogram inline-SVG variant before any other component code is written.
4. **Document every gap.** Each unreachable source goes into `BRIEF.md` with the exact URL, the reason it was blocked, and the manual instruction for the human operator.
5. **Only then** place `<Placeholder>` components where no real photo is yet on disk. Each placeholder must name the specific photo it expects ("Foto do Jean na cadeira" — not "Foto") so the human knows what to capture.

### Vertical-specific photography rules

Different verticals have different photo grammars. Get them wrong and the page reads as a template from the wrong industry.

| Vertical | Always | Never |
|----------|--------|-------|
| **Gastronomy** | Food in context — on the table, with hands, in the room, with real lighting | Food on pure-white background, studio-isolated, hard shadows (that's ecommerce convention) |
| **Clinic / health** | Clean spaces, real staff in real uniforms, calm lighting | Stock-photo doctors pointing at clipboards |
| **Fitness / studio** | Real members mid-class, varied body types, real instructors | Stock-photo gym influencers in identical poses |
| **Beauty / salon** | Real before-after, real chairs, real interior | Generic blonde models with pristine highlights |
| **Trades / services** | Real workmanship close-up, real vans, real team in working clothes | Stock-photo handymen with crossed arms |

The gastronomy "food in context" rule deserves emphasis because it's the most-violated: a food photo on white isolation belongs to a marketplace listing, not a restaurant brand. Always show food where the diner will encounter it.

### Heritage and trust-signal patterns

Beyond Impressum (the legal floor — see `SECURITY.md`), three signal categories build trust further. Use what's true for the client; never invent.

- **Quantified impact stamps:** "25 million meals served" / "Since 1987" / "47 seats" / "B Corp Certified" / "Living Wage Employer." A circular stamp graphic with the number is high-leverage. The number must be real and verifiable.
- **Sustainability / supply-chain transparency:** Modern Slavery Statement (UK legal requirement for businesses > £36M turnover; voluntary trust signal for smaller), supplier list, organic / fair-trade certifications. Surface them in the footer, not the hero.
- **License / certification numbers** (highest leverage in beauty, health, trades): Cosmetology License #, Massage Therapy License #, Esthetician #, Medical License #, Master Electrician License #, GasSafe / TÜV / equivalent national-body certifications. Show the number, not just the claim. Footer is the standard location; legal sites may require it on every page.
- **Press validation:** pull-quote from a real publication ("As seen in TimeOut Berlin 2023") + logo strip of media that has covered the client. Only works with real press; faking it is detectable and damaging.
- **Editorial moments wrapping legal touchpoints:** the cookie consent / welcome modal can be a designed brand moment instead of a generic banner. Dishoom turns the cookie consent into a vintage-poster welcome. Only do this if the brand has narrative strength — half-effort makes it worse than a plain banner.

---

## 4. Typography system

### Three-font maximum

Every site uses a maximum of three font roles. Pick them from the categories below.

| Role | Purpose | Examples |
|------|---------|---------|
| **Display** | Business name, hero headline, section titles | Playfair Display, Fraunces, Cormorant Garamond, Syne, Cabinet Grotesk |
| **Body** | Paragraphs, descriptions, labels, nav | Outfit, Plus Jakarta Sans, DM Sans, Figtree |
| **Data / Mono** | Hours, phone numbers, addresses, prices | DM Mono, Geist Mono, JetBrains Mono |

**Rules:**
- Display: characterful and memorable. Not Inter. Not Roboto. Not Arial.
- Body: clean and readable at 16px on mobile. Optionally the same sans as display if the display font is a sans.
- Data: only use mono for hours, phone, and address blocks. Don't over-use it.
- Never exceed three font families. Two is often better.
- Never mix two different serifs or two different monos.

### Type scale (mobile-first baseline)

| Token | Size | Use |
|-------|------|-----|
| xs | 12px | Legal text, fine print only |
| sm | 14px | Secondary labels, captions |
| base | 16px | Body copy — minimum for prose |
| lg | 18px | Subheadings, lead text |
| xl | 20px | Section headings |
| 2xl | 24px | Page section titles |
| 3xl–5xl | 30–48px | Hero headline |

Desktop increases display sizes by one step. Never reduce below 14px for any user-facing prose. 12px only for legal or structural micro-labels.

### Typography rules

- **Line height:** Headings 1.1–1.25. Body 1.6. Never use default (1.0) on any prose.
- **Letter spacing:** Large display (hero): `tracking-tight`. Uppercase structural labels: `tracking-widest`. Body: default.
- **Measured tracking ranges** (added 2026-05-19, grounded in `docs/audit/ui-ux-reference-study.md` §Cross-site synthesis):
  - **Display sans, large (≥ 50px):** `letter-spacing: -0.022em` (≈ -2.2 % of size). The "premium tech" signature. Measured across Apple §1 (-1.5 %), Auwa §6, Juan Mora §18 (-3.7 %), Fourmula §22 (-3.0 %), Victor Furuya §21 (-5.0 %). Use the TECH.md §7 token `--tracking-display-sans`.
  - **Display serif, uppercase:** `letter-spacing: +0.025em` (≈ +2.5 % positive). The "premium classical" signature. Measured at Flyward §13, Aircenter §4. Positive on uppercase serif reads as "certified / heritage"; negative on uppercase sans reads as "modern / consumer." Use the token `--tracking-display-serif-caps`.
  - **Display serif, sentence-case:** `letter-spacing: 0` — let the typeface do the work.
  - **Body:** `letter-spacing: -0.005em` (Apple's quiet body tightening). Use the token `--tracking-body`.
- **Tabular numbers:** Use `tabular-nums` or a mono font on phone numbers, prices, and hours. Proportional digits misalign in these contexts.
- **Minimum weight:** 400 on body. 500 on display. Never use 300 on anything the user needs to read quickly.
- **Never:** more than 65 characters per line on body text (set `max-width` on prose containers).
- **Inverted h1/h2 hierarchy — HARD RESTRICTION** (added 2026-05-19). Three sites in the UI/UX reference study (§6 Auwa, §16 Lesse, §18 Juan Mora) ship a 12-15px tracked-uppercase `h1` as an "eyebrow label" and let the visual hero be a 32-60px paragraph or h2. Visually it reads "considered" — but the h1 is the most-indexed element on the page for SEO, and an eyebrow h1 hands away the primary keyword target. **Permitted only when SEO is explicitly deprioritized in `BRIEF.md`** (portfolio, agency-self, referral-only luxury). **For local-business clients (gastronomy, beauty, trades, health, studio, professional-services, pets, automotive, education, events-hospitality, home-garden, artisan) — forbidden.** The h1 must be the visually primary headline AND carry the primary SEO keyword (e.g., `Physiotherapie Prenzlauer Berg`, `Friseur Mitte`, `Café in Kreuzberg`). Cross-reference: `SEO.md` §On-page SEO.
- **Mono font for catalog / portfolio labels** (added 2026-05-19). Three sites in the study independently use a monospace face for section headers that count or label curated items: Mily Group §9 (`PRODUCTS (5)`), T11 §19 (`OFFLIMITS FESTIVAL`, `PORTFOLIO [21]`), Hubtown §8. The mono reads as "directory / curated index / system reference." Adopt as an optional pattern in any template that lists menu sections, service categories, project portfolios, or product collections. Free options: JetBrains Mono, IBM Plex Mono, Commit Mono, Geist Mono.

---

## 5. Color system

> **Cross-doc note (added 2026-05-22):** This section owns **sourcing** — *where* the palette comes from (logo → photo → owner pref → vertical default → re-source mid-build). The **proportional + harmony + token-count + audit** rules live in [`docs/design/COLOR.md`](./COLOR.md) — read both. Per-vertical recipes live in `docs/design/templates/[vertical].md §6 Color archetypes`. Three docs, three concerns, no duplication.

### Per-client tokens

Every client project defines its color tokens in one place (a CSS file or Tailwind config). Hardcoded hex values are forbidden in components and templates.

Minimum tokens per client:

```css
--color-bg          /* Page background — never pure #FFF */
--color-surface     /* Cards, sections */
--color-text        /* Primary body text — never pure #000 */
--color-text-muted  /* Secondary text, metadata */
--color-accent      /* CTA buttons, links, highlights */
--color-border      /* Dividers, card borders */
```

### Color rules

- **Cream beats white for hospitality / artisan / beauty** (added 2026-05-19). Measured across 5 awarded sites in `docs/audit/ui-ux-reference-study.md` §Cross-site synthesis: Watch House `#F9F4EE` (§5), Auwa `#F7F5EE` (§6), Haven `#FFFAF7` (§15), Juan Mora `#FAF6EF` (§18), Kindred `#FBF8F5` (§20). All five are in the warm 92-100 L\* range, hue 80-95 (yellow-to-peach axis). **Pure white reads as "tech product"; cream reads as "considered hospitality."** Default to `--color-bg-cream` (defined in `TECH.md` §7) for gastronomy, beauty, artisan, and any solo-practitioner portfolio. The dark equivalents — `--color-bg-charcoal: #1D1D1D` (warmer than pure black, OLED-friendly) and `--color-bg-night: #020A18` (luxury nighttime) — apply only when the dark sub-archetype is documented in the per-vertical template.
- **Warm body text beats pure-black** for material-led brands (added 2026-05-19). Measured across `docs/audit/ui-ux-reference-study.md` §9 Mily (`#2C1A11`), §13 Flyward (`#3D2D20`), §15 Haven (`#2B1A12`): when the client's product is a *material* (coffee, leather, wood, stone, food, fabric, paper), body text in a deep warm-brown rather than pure black gives the page atmospheric warmth that no other single token does. Use `--color-text-warm` from `TECH.md` §7. **The same hex must also be the primary CTA background** for token discipline (Flyward demonstrates: `body { color: #3D2D20 }` AND `.btn-primary { background: #3D2D20 }` — one hex, two roles). Friendly dark-grey variant `--color-text-warm-grey: #333` (Juan Mora, Awwwards) works for portfolio/agency-self where warmth-without-material is wanted.
- **Never pure black (#000) or pure white (#FFF)** as a page background or body text. Use near-black and warm or cool off-white derived from the client's brand palette. **Two documented exceptions** apply:
  1. **Tier-1/2/3 brand-source override** — when the client's actual brand uses pure white or pure black (sampled per §5 priority hierarchy), the brand source supersedes this rule. Example: a modern-urban barber whose tier-3 brand source is `#ffffff` text on `#131418` bg — pure white text is the actual brand identity, documented in the client's own `design.md`. (Worked example pattern in `docs/design/templates/beauty.md` §6 "Modern urban barber (dark)" archetype.)
  2. **Conversion-driven mass-market sub-archetype exception** — pure white bg is acceptable for high-volume conversion-led chains where catalog clarity outranks warmth (Safelite, Firestone, Mathnasium, OneMedical, Petz retail, TruGreen). Each per-vertical template's §6 "Default palette" subsection documents which sub-archetypes legitimately use pure white with rationale. Outside these documented sub-archetypes, default to near-white (`#fafafa`, `#fbfaf7`, etc.).
- **One dominant accent color** per site. Used on: primary CTA button, active states, links. Not sprinkled on every element.
- **Accent reserved for the call to action.** Eyebrow text, kickers, tracked-uppercase labels, and section dividers must NOT use the same hue as the primary CTA. If your eyebrow and your button are the same color, the eyebrow steals attention from the action. Use `--color-text-muted` for eyebrows and labels.
- **Never apply opacity multipliers to text colors that are already muted.** `text-[var(--color-text-muted)]/80` reads as "subtly subtler" in design intent but mathematically drops contrast below the WCAG AA 4.5:1 floor every time, because `--color-text-muted` is itself already calibrated to sit just above that floor. If you genuinely need lower-emphasis text than the muted token provides, define a new dedicated `--color-text-subtle` token with a contrast-checked value — don't compose it from opacity. Lighthouse's accessibility audit catches this on every site that does it.
- **Decorative tokens must do real work.** Every token in the palette must appear on at least two distinct, non-decorative surfaces (CTA + focus ring, label + badge, etc.). A token that exists only to tint a single ornamental shape is dead weight — either find it a real job or delete the token.
- **Color-only status indicators are forbidden.** A button being red means nothing to a colorblind user without also having a label or icon.
- **Gradient rule:** One subtle gradient allowed (background or hero). Never more than two gradient stops. No "AI glow" radial gradients. No rainbow gradients.
- **No dark mode.** Local business sites are not productivity tools. Light mode only, unless the client's brand is explicitly dark (tattoo studio, nightclub, modern urban barber — see `templates/beauty.md` §6 for the "Modern urban barber (dark)" sub-archetype as a worked example).

  **Per-vertical dark-mode coverage** (audited 2026-05-15):

  | Vertical | Dark variant exists? | Where |
  |---|---|---|
  | Beauty | ✅ Yes | `templates/beauty.md` §6 → "Modern urban barber (dark)" — black + white + saturated red |
  | Gastronomy | ✅ Yes | `templates/gastronomy.md` §6 → "Premium editorial / heritage storytelling" — deep cocoa + parchment + saffron (Dishoom-derived) |
  | Studio | ✅ Yes | `templates/studio.md` §6 → "Premium luxury studio" — near-black + bone + brushed brass (Equinox-derived) |
  | Trades | ❌ Intentionally none | Trades is utility-color-driven (red/yellow emergency, navy professional). Dark mode in trades reads "underground / shady" — wrong trust register for plumbers, electricians, locksmiths. |
  | Health | ❌ Intentionally none | Health requires anxiety-reducing register. Dark mode reads "clinical horror / underground clinic" — wrong trust register. Mental-health niche *might* benefit from soft dark in the future but is not a current need. |

  When a future prospect's brand demands dark mode in a vertical that currently has "none," add a new sub-archetype to that template's §6 rather than retrofitting the existing palette. Follow the pattern beauty.md used 2026-05-15 (cite the client as reference implementation).
- **Contrast:** Every text/background combination must pass WCAG 2.2 AA (4.5:1 for body text, 3:1 for large text and UI components). Check with a contrast checker before delivering.
- **Lighter-on-hover is a WCAG anti-pattern when text is white on a tinted button.** If your accent button uses white-on-`#dc2626` (4.83:1 — passes AA), and the hover state lightens to `#ef4444`, the contrast drops to 3.76:1 — *fails AA for body-size text*. **Darken-on-hover always preserves or improves contrast.** Canonical convention: `--color-accent` (rest) + `--color-accent-deep` (hover/active, darker). Reserve `--color-accent-hi`-style "lighter" variants only for *text* accents on a dark background, never for button fills. Worked example: Jean Souza Barber's tokens were corrected mid-build from `#ef4444` hover (3.76:1 AA-large only) to `#b91c1c` hover (6.50:1 — comfortably AA).

### Sourcing the palette

The agency's typical client is a solo operator with no brand guide, no design system, and a logo that may or may not exist. The palette must be **sourced**, not invented. Use this priority order, top-down — only fall to the next tier when the higher one has no signal.

| Priority | Source | What to extract |
|---|---|---|
| 1 | **Client brand guide** (formal style guide if one exists — rare for small local businesses) | Primary, secondary, neutrals — already specified. Treat as authoritative. |
| 2 | **Existing client website** | Sample the dominant background, primary text, primary CTA, secondary surfaces. Use a color picker against live screenshots — never eyeball from memory. |
| 3 | **Client signage and storefront photo** (from `docs/audit/[name].md` GBP photo set or Instagram exterior shots) | Real-world colors that customers already associate with the business — the awning paint, the menu board, the chair upholstery. These are the brand whether the owner thinks of them that way or not. |
| 3.5 | **Color-as-material — sample directly from the product** (added 2026-05-19) | For clients whose product *is* a material (a stonemason's stone, a baker's bread, a florist's stem-green, a coffee roaster's bean), open a high-resolution photo of the finished work in a color picker, RGB-pick the dominant hue, lighten 5-10 %, desaturate 5-10 %. That value becomes the brand accent. Measured precedents: Marvell §11 (`#B1A781` = cut sandstone), Mily §9 (`#2C1A11` = antler/leather), Haven §15 (`#C1643B` = roasted coffee / terracotta brick), Kindred §20 implicit (`#FBF8F5` cream = unwashed linen). **Slots between tiers 3 and 4** because the source signal (the actual product photograph) is closer-to-source than IG curation but harder to extract than direct signage observation. |
| 4 | **Instagram feed** (`@[handle]`) | If the IG feed has a consistent color grade (most curated accounts do), extract from a 9-grid average. The IG feed IS the brand for most small businesses with no other materials. |
| 5 | **Vertical-default palette** per `templates/[vertical].md` "Default palette when client has no brand" subsection | Vertical-archetype defaults backed by reference-site analysis. Apply only when sources 1–4 yield no consistent signal. |
| 6 | **First-principles from the aesthetic sentence** in `design.md` (the "this site feels like ___" line) | Last-resort construction. If the aesthetic sentence describes "warm wood, leather, brass," derive the palette from that material vocabulary. |

**The construction rule** (after source is identified):

1. Pick the **dominant brand color** from the highest-priority available source.
2. Build one **lighter** and one **darker** variant of it (for hover states, surface tints, deep accents). **Note:** if the dominant brand color is the *button fill* with white text on it, use the *darker* variant for hover (per "Color rules" — lighter-on-hover is a WCAG anti-pattern).
3. Choose a **neutral family** (warm cream / cool gray / true off-white) that matches the brand temperature. Never mix warm and cool neutrals in the same site.
4. Choose **one accent** — either a complementary color or a saturated version of the primary. Reserve it for CTAs and active states only (§Color rules above).
5. Cap the palette at **4–5 distinct colors** total. Every token in `tokens.css` must do real work (§Color rules — "Decorative tokens must do real work").

### Re-sourcing the palette mid-build

**The §5 priority hierarchy is enforced throughout the build, not just at scaffold time.** A higher-priority signal can arrive after tokens.css and components are already in place — and when it does, the palette must be re-sourced and updated. This is not optional; the hierarchy is what makes the palette defensible in a client conversation.

Common mid-build re-sourcing triggers:

| Trigger | Effect |
|---|---|
| Logo retrieved from a booking-platform profile (Trinks / Booksy / Treatwell / Mindbody / Doctolib) via WebFetch | Tier 3 source arrives. Sample the logo's dominant colors. If they differ from the current tokens, re-source. |
| Owner sends brand guide / color palette via email or attachment | Tier 1 source arrives. Replace whatever tier the build was using. |
| Owner-supplied photo set arrives (production photo shoot or USB drop) | Re-sample tier 3 from the actual storefront/interior colors, not just the logo. |
| Manual download of Instagram feed reveals a consistent color grade | Tier 4 source arrives. May upgrade or refine the palette. |

**Worked example:** Jean Souza Barber was scaffolded with the tier-5 vertical-default (cream + caramel "Old-school barber") because no higher-priority source was reachable at scaffold time. Mid-build (2026-05-15), a WebFetch on the Trinks profile retrieved Jean's master logo — revealing that the actual brand is dark + white + red. Tier 3 (brand-sourced) supersedes tier 5 (vertical-default), so the palette was re-sampled with Python PIL `Counter()` against the logo, tokens.css was rewritten, design.md provenance updated to declare tier 3, and a new "Modern urban barber (dark)" sub-archetype was added to `templates/beauty.md` §6 codifying the pattern for future clients.

**The cost of NOT re-sourcing:** the site visually contradicts the client's actual brand. The client opens the demo URL on the cold call and the *first thing* they see is wrong colors. The mid-build re-source costs ~30-45 min and is always worth it.

**Document the re-sourcing in `design.md` §"Palette source provenance"** with: the trigger, the new tier, the date, and what was superseded. This is what makes the palette defensible 6 months later when a new agency member reads the file.

**Document the source in `design.md`.** The "Color tokens" section must name which priority tier the palette came from. A reviewer (or future-you) reading `design.md` should be able to tell whether the tokens were extracted from the client's storefront photo, derived from a vertical default, or invented from the aesthetic sentence. Without that provenance, the palette can't be defended in a client conversation.

---

## 6. Layout and spacing

### Mobile-first layout

Design at 375px first. Then check at 768px and 1280px. If the mobile version is right, the desktop version usually improves naturally.

### Content widths

| Context | Max width |
|---------|-----------|
| Hero text block | 640px |
| Body prose | 680px |
| Section content | max-w-3xl (768px) |
| Full-bleed image | no limit |
| Page container | max-w-5xl (1024px) with side padding |

### Spacing scale

Use Tailwind's default or a consistent 4px base unit. Between sections: `space-y-16` to `space-y-24`. Within sections: `space-y-6` to `space-y-10`. Inside cards/components: `gap-3` to `gap-6`.

### Section rhythm — vary it deliberately

A page where every section uses the same vertical padding and the same internal cadence (eyebrow → h2 → content → CTA, four times in a row) reads as page-builder output, not as a designed page. Vary at least two things across sections:

- **Vertical padding** — give the hero generous breathing room (`py-24`), then compress an information-dense block like Hours (`py-12`), then breathe again. The varying rhythm itself signals craft.
- **Eyebrow presence** — not every section needs an uppercase tracked kicker. Drop it on at least one section.
- **Background treatment** — alternate `--color-bg` and `--color-surface` so adjacent sections don't blur together, but don't alternate every single section (chequerboard reads as a template too).
- **Content density** — one section can be a single sentence + photo, another a list, another a grid. If they all have headers + paragraphs + cards, the page feels generated.

If a competent human designer would not put the same wrapper around every section in a magazine layout, neither should you.

### The 768 px breakpoint trap

Tailwind's `md:` prefix kicks in at 768 px. A common mistake is to flip the hero from single-column to two-column at `md:`, which gives the text column ~340 px and forces the headline to wrap into 5–6 lines. Two safer patterns:

- Stack at 768, split only at `lg:` (1024+) — the hero gets to breathe through the tablet range.
- Or keep a two-column split but make the text column dominant (`md:grid-cols-[2fr_1fr]`) so a long headline still has room.

Always check the headline at 768 px before declaring a hero done. If it wraps into more than 3 lines, the breakpoint is wrong.

### Local business page section order (recommended)

1. **Hero** — name, what they do, location, primary CTA
2. **Trust bar** — reviews count, years in business, certifications, or "featured in"
3. **Services** — 3–6 services max, scannable, with brief descriptions
4. **About / team** — human, not corporate
5. **Gallery** — real photos, not stock
6. **Testimonials** — real names, real words (never invented)
7. **Contact / CTA** — map embed, clickable phone, hours, form or WhatsApp

### Layout rules

- Maximum 2-column grid on mobile. Single column is usually better.
- Never more than 3 columns on any page section. Local business pages are not feature matrices.
- No card soup — if every section is a card with equal weight, nothing is important.
- Hierarchy via typography and spacing first, colored boxes second.
- No nested cards.
- Progressive disclosure for secondary info (hours, FAQ) via `<details>` or accordions.

---

## 6.5. Section composition variation (portfolio-diversity gate)

**Rule (mandatory for every demo + every client landing page):** A page's section composition (which canonical components, in which order) MUST NOT match any prior client/demo in the agency portfolio 1:1. The agency component library has 32 components in 6 tiers (`docs/design/components/README.md`) precisely so each project picks a *different* subset.

### Why the rule exists

The 2026-05-23 portfolio review found that all 3 new demos (Sander & Voss, Atem Studio, Bart & Pomade) used the same 9-section composition: `Hero → preview cards → About + StatCallouts → Team grid → Timeline → Testimonial → FAQ → MapEmbed → CTA footer`. Vertical differentiation showed up only in copy + typography — the page *architecture* was identical. On a homepage demo grid this reads "one studio built six sites with one template."

### Audit before scaffolding

Run this before writing `index.astro`:

```bash
# From repo root — list every demo's section composition for comparison.
for d in clients/demo-*/src/pages/index.astro; do
  client=$(basename $(dirname $(dirname $(dirname $d))))
  echo "=== $client ==="
  grep -oE "^import (\w+) from '@/components/sections/" $d | awk '{print $2}' | sort | uniq
done
```

If your proposed composition uses ≥ 6 components in the same order as any existing demo, REWORK it before writing the page.

### Per-demo composition rule (3-axis variation)

For every new demo, vary on at least **3 of 4 axes** relative to the most-similar existing demo:

1. **Section count** — does this demo have 6 sections, 10, or 14? Avoid every demo at exactly 9.
2. **Section identity** — pick from the 32-component library, NOT just the universal 9 (Hero/preview/About/team/timeline/testimonial/FAQ/map/CTA). Per-vertical templates §13 list the *recommended* swap-ins (e.g., yoga = CourseList + VideoFacade + Lightbox; barber = BeforeAfterSlider + PricingTable + BookingMock; lawyer = Press + TrustBadgeRow + Accordion-process).
3. **Section order** — Hero comes first by definition, but everything else is fluid. Don't always go About → Team → Timeline. A barber demo can lead with services + pricing; a yoga demo can lead with the schedule + video; a lawyer demo can lead with recognitions + press.
4. **Section visual treatment** — same canonical component, different visual register. TeamGrid as 2×2 large bio cards (lawyer) ≠ TeamGrid as 4-column small chips (yoga) ≠ TeamGrid as horizontal scroll with full portraits (barber).

### Universal-9 anti-pattern (don't ship this composition)

| # | Section | Why it became default |
|---|---|---|
| 1 | Hero | Mandatory |
| 2 | MenuPreview / services preview | First "what we sell" beat |
| 3 | About + StatCallouts | First "who we are" beat |
| 4 | TeamGrid (4-column) | First "trust" beat |
| 5 | Timeline (4 steps) | Process explanation |
| 6 | Testimonial (single card) | Social proof |
| 7 | FAQ (single accordion) | Objection handling |
| 8 | MapEmbed | Address proof |
| 9 | CTA footer | Conversion |

**If you write this exact 9-section composition, you have violated this rule.** At minimum: change the order, drop 2 sections, add 2 vertical-specific sections from the library. Better: change the count entirely (some demos should have 6 sections, others 12).

### Per-vertical recommended swap-ins

See per-vertical template `§13 Composition variation` for the canonical alternatives per vertical (added 2026-05-23). Each template lists 3 valid orderings and the vertical-specific components that should DISPLACE universal-9 items (not add to them).

---

## 7. Component patterns

### Primary CTA button

```html
<!-- Pill or rounded-xl, accent color, high contrast text -->
<a href="tel:+49..." class="inline-flex items-center gap-2 px-6 py-3 rounded-full
  bg-[--color-accent] text-white font-bold text-base shadow-sm
  hover:brightness-110 active:scale-95 transition-all duration-150
  focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2">
  📞 Call now
</a>
```

One primary CTA per section. Repeating it is fine; competing CTAs ("Call now" vs "Book online" vs "Learn more" in the same visual area) is not.

**Border-radius convention** (added 2026-05-19, grounded in `docs/audit/ui-ux-reference-study.md` §Cross-site synthesis §3 the-pill-arms-race): always use `var(--radius-full)` (= 9999px) for the premium pill. The agency standard is one value, not the escalating series observed in the wild (Apple 980 → Fourmula 1317 → Horeca 1440 → Flyward 1600 — all functionally identical). For utility / filter chips, use `var(--radius-md)` (= 8px) (SweepingCorp §14 chip pattern). Do not introduce a new `--radius-pill` token; reuse the existing `--radius-full`.

### Half-pill sticky-edge CTA (hospitality / beauty / health / studio reservation pattern)

A measured pattern from `ui-ux-reference-study.md` §15 Haven Annecy: a high-emphasis "RESERVE / BOOK NOW" button rendered as a *half-pill* — rounded on the left side, square on the right — sitting in the top-right of the nav row. The visual reads as "a tab sticking in from the right edge of the viewport."

**Important implementation note (corrected in Phase 1b runtime read):** Haven's button is **NOT `position: fixed`**. It's `position: static` inside the top-nav row's right cell. The half-pill shape (`border-radius: 30px 0 0 30px`) does *all* the work; the optical illusion of "edge tab" comes from the radius, not from sticky positioning.

```html
<!-- Half-pill sticky-feel CTA — visual only, position is static -->
<a href="/book" class="inline-flex items-center gap-2 px-6 py-3
  bg-[--color-accent] text-white font-bold text-base
  hover:bg-[--color-accent-deep]
  motion-safe:transition-[background-color] duration-500 ease-[var(--ease-quart)]
  focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2"
  style="border-radius: var(--radius-pill-half)">
  RESERVE
</a>
```

`--radius-pill-half: 30px 0 0 30px` (defined in `TECH.md` §7). Per-vertical CTA verb: gastronomy = `RESERVE`, beauty = `BOOK`, health = `TERMIN`, studio = `JOIN`, trades = `QUOTE`. Component spec lands in `docs/design/components/` (Phase 3a).

### Marquee-on-hover CTA (boutique / artisan / beauty interaction pattern)

A measured pattern from `ui-ux-reference-study.md` §6 Auwa with all three layers fully decoded by Phase 1b runtime probe. The CTA label *appears to repeat itself*: hovering swaps the visible text with an identical duplicate while a background fill slides up from the bottom. Costs ~6 lines of CSS, registers as luxury polish.

Three coordinated transitions, all sharing the same duration (500 ms) and easing (`cubic-bezier(0.7, 0, 0.3, 1)`, the `--ease-quart` token):
1. Outer button color: rest → hover via `transition: color 0.5s var(--ease-quart)`
2. Background fill layer: `transform: scaleY(0)` at rest, `transform-origin: bottom`; on hover `scaleY(1)` over 500ms
3. Inner label column: contains two copies of the label stacked; on hover the column `translateY(-100%)` so the duplicate replaces the original

See `docs/design/components/marquee-cta.md` (Phase 3a) for the full HTML + CSS recipe and per-vertical surface mapping.

### CTA repetition — vary on the second appearance

The same WhatsApp/call/booking action appearing on the page two or three times is good for conversion. The same **button visually** repeated unchanged across sections is bad for design — by the third time the user sees an identical orange pill, the page reads as a wireframe. Rule:

- The first appearance (Hero) is the canonical, fully styled primary button.
- The second appearance (Visit/Contact section, or sticky mobile bubble) must look **different enough to be distinguishable**: a longer label, an icon-only floating button, an inline text link with arrow, or a quieter outline variant. Same destination, different shape.

If you find yourself pasting the exact same `<Button variant="primary">…</Button>` two or three times in a single page, stop and reconsider.

### CTA contrast — all 4 states must pass WCAG 2.2 AA (added 2026-05-25)

Every interactive button — primary, secondary, ghost, custom inline CTA — must maintain WCAG 2.2 AA contrast in **all four states**: default, hover, focus, and active. The single most common production bug surfaced repeatedly across the agency's 7 portfolio demos is **hover states that decrease contrast** by darkening the background without updating the text color, producing a "dark bg + dark text" muddy unreadable state.

**Hard rule:** the text/background contrast ratio at hover state must be **≥ default-state contrast OR ≥ 4.5:1**, whichever is lower. Hover may make the button "feel pressed" but must never reduce readability.

**Forbidden patterns** (audit-gate failures):

```html
<!-- ❌ Filled accent → darken on hover, text unchanged → muddy dark-on-dark -->
<a class="bg-accent text-bg hover:bg-accent-deep">…</a>
<!-- If --color-accent is a medium-tone, bg-accent + text-bg + hover→accent-deep
     often yields ~5:1 default but ~3:1 hover. WCAG fail. -->

<!-- ❌ Light text on tinted accent that's barely 3:1 in default -->
<a class="bg-accent text-text">…</a>
<!-- Yoga V1 bug: terracotta bg + dark aubergine text = 3.2:1 (FAIL AA). -->

<!-- ❌ Hover-only color swap that destroys contrast -->
<a class="bg-text text-bg hover:bg-accent-deep">…</a>
<!-- On dark-themed sites: hover swaps from "bone bg + black text" (16:1) to
     "dark-gold bg + black text" (~5:1). Passes AA mathematically but reads
     as visually broken because perceived luminance drops sharply. -->
```

**Approved patterns** (use one of these, then verify contrast in dev with browser tools):

```html
<!-- ✅ Pattern A: invariant text color across states -->
<a class="bg-text text-white hover:bg-accent-deep hover:text-white">…</a>
<!-- White text constant; bg darkens but text stays high-contrast. -->

<!-- ✅ Pattern B: invert on hover (most defensive) -->
<a class="bg-accent text-bg hover:bg-text hover:text-bg">…</a>
<!-- Both states use bg=light/text=dark or bg=dark/text=light. No risk. -->

<!-- ✅ Pattern C: brightness/opacity hover (no color shift) -->
<a class="bg-accent text-bg hover:brightness-110 active:scale-95">…</a>
<!-- The original example from §7 above. Recommended for filled-accent CTAs. -->

<!-- ✅ Pattern D: outline → fill on hover -->
<a class="border border-text text-text hover:bg-text hover:text-bg">…</a>
<!-- Default: outlined text-color, hover: filled. Both states ≥ 7:1. -->
```

**Pre-launch verification gate** (mandatory before any demo or production deploy):

1. Open every page in the dev server. For every visible CTA / button:
2. **Default state**: check text vs bg with the browser dev tools color picker. Ratio ≥ 4.5:1 (or ≥ 3:1 if font ≥ 18px / 14px bold).
3. **Hover state**: hover the cursor, repeat. Ratio must NOT drop below default by more than 1:1 AND must stay ≥ 4.5:1.
4. **Focus state**: Tab to the button. The focus ring must be visible at ≥ 3:1 contrast against the surrounding background.
5. **Active state**: click + hold. Usually inherits hover, but verify if customized.

Document the 4 contrast ratios per CTA in `design.md` §2 (Color decisions) for paying clients. For demos, screenshot one Hero CTA at default + hover and store under `/docs/audit/<demo>-cta-contrast.png`.

**Why this rule exists:** an internal audit on 2026-05-25 found 11 broken CTAs across 3 demos (Sander & Voss / Atem / Bart & Pomade) — including the yoga primary Button which failed AA in its DEFAULT state at 3.0:1 (terracotta + lilac). The demos shipped to production, and the bug was only caught by the user during review. The hover-state-darkens-without-text-update pattern is so easy to write that linting alone doesn't catch it; only conscious 4-state verification does.

### CTA contrast — Tailwind v4 @layer base requirement (root cause, added 2026-05-25 after diagnosis)

**Background — the silent bug that hid behind the 2026-05-25 audit:** After fixing the 11 broken CTA classes, browser-inspection re-audit revealed that **every primary CTA across all 6 portfolio demos still rendered with WRONG colors** — for example, the lawyer's "Leistungen ansehen" button (class `bg-text text-white`) computed `color: rgb(11, 42, 31)` (forest green) on a forest-green background — INVISIBLE text. The user reported "dark on dark" was real; the class string was correct, but a deeper CSS cascade issue was silently destroying every color utility.

**Root cause:** All 6 demos had `body { color: var(--color-text); }` declared as an **unlayered** rule in `src/styles/global.css`. Per the CSS @layer cascade rules, **unlayered rules win over any layered rules regardless of specificity** ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)). Tailwind v4 emits all utility classes inside `@layer utilities`. Inherited `color` from the unlayered body rule cascaded into every descendant and overrode `.text-bg`, `.text-white`, `.text-accent` etc., even when those utilities were direct matches on the element.

Empirical verification (run in production browser):
```js
// Lawyer Hero primary CTA (.bg-text.text-white)
getComputedStyle(button).color === 'rgb(11, 42, 31)';  // FOREST — not white. INVISIBLE on forest bg.
// Body rule sets inherited color = var(--color-text) = forest, beats .text-white in @layer utilities.
```

**The fix:** Wrap the body rule + all base typography in `@layer base { ... }`. This places body inside the cascade ABOVE @layer utilities, so utility classes correctly override. Verified across all 6 demos 2026-05-25 — every CTA now computes its expected color.

```css
/* clients/<demo>/src/styles/global.css */
@layer base {
  body {
    color: var(--color-text);
    background-color: var(--color-bg);
    /* ... */
  }
  h1, h2, h3, h4 { /* ... */ }
  a { color: inherit; text-decoration: none; }
  /* ... */
}
```

**Both agency scaffolds (`scaffolds/astro-tier2/src/styles/global.css` + `scaffolds/nextjs-tier3/src/app/globals.css`) ship this fix as of 2026-05-25.** Any new client scaffolded from them inherits the correct behavior. If you ever copy a global.css from a pre-2026-05-25 codebase, double-check that body is INSIDE `@layer base`.

**Pre-launch verification (mandatory — added to CHECKLIST.md):** open every page in a real browser, open dev tools, hover the cursor over a primary CTA, and verify the computed `color` matches the intended hex from `tokens.css`. Do not trust the class string alone — Tailwind v4 cascade bugs are invisible at the class-string level.

### WhatsApp button

Always open in a new tab. Pre-fill message when possible:
```html
<a href="https://wa.me/49..." target="_blank" rel="noopener"
  class="...">WhatsApp</a>
```

### Contact info block

```html
<address class="not-italic space-y-2">
  <a href="tel:+49..." class="flex items-center gap-2">...</a>
  <a href="https://maps.google.com/?q=..." target="_blank" class="flex items-center gap-2">...</a>
  <p class="flex items-center gap-2"><!-- Hours --></p>
</address>
```

Use `<address>` semantically. Use `<a href="tel:">` not `<p>` for phone numbers.

### Map embed — never use the raw `?output=embed` iframe

The "free" Google Maps embed URL pattern `https://www.google.com/maps?q=…&output=embed` is **unreliable in production**. It renders blank intermittently depending on origin, referrer policy, and Google's anti-scraping heuristics. We have shipped sites where the map area is a 320 px empty box on the live URL, which is the most embarrassing possible visual hole in the contact section.

Three patterns, in order of preference:

1. **Static map image + link (default for most clients).** One HTTP request, always renders. No API key needed for the OpenStreetMap variant.

   ```html
   <a href="https://maps.google.com/?q=..." target="_blank" rel="noopener">
     <img src="/images/map.webp"
          width="800" height="500"
          loading="lazy"
          alt="Map showing [Business Name] at [Address]" />
   </a>
   ```

   Generate the map image once with the Google Static Maps API (`https://maps.googleapis.com/maps/api/staticmap?...`) or the free OSM equivalent. Commit the image to `public/images/`.

2. **Official Google Maps Embed API with key.** If the client wants the interactive map, use the keyed Embed API (`https://www.google.com/maps/embed/v1/place?key=…`), not the unauthenticated `?output=embed` URL. Store the API key in Vercel env, not in source.

3. **No map, styled location card.** Three lines (address, district, nearest transit), a directions CTA. Often the best answer on mobile.

### Location card pattern (when no map)

```html
<aside class="rounded-xl border border-[--color-border] p-6 space-y-3">
  <p class="font-semibold">[Address line 1]</p>
  <p class="text-sm text-[--color-text-muted]">[District] · 5 min from [Transit stop]</p>
  <a href="https://maps.google.com/?q=..." target="_blank" rel="noopener"
     class="inline-flex items-center gap-2 underline">Open in Google Maps →</a>
</aside>
```

### Review section — feature one quote, not a trio of identical cards

The most common AI-template tell in this category is **three equally weighted testimonial cards side-by-side, each with five filled stars, no dates, no avatars**. It reads as a SaaS landing page, not as a restaurant or salon. The cards always end up the same height because the quotes are trimmed to the same length, which is itself a signal of fabrication even when the quotes are real.

Better structure for local-business review sections:

1. **One feature quote**, large, italic, with a real attribution and a relative date.
2. **A trust strip** beside or below it: total rating + count + Google logo + link to the GBP profile.
3. **Optionally:** a "more reviews →" link to the full GBP page, or a small carousel of two more quotes with **visibly different lengths** so it reads as real.

```html
<section aria-labelledby="reviews-heading" class="...">
  <p class="text-xs uppercase tracking-[0.18em] text-[--color-text-muted]">
    Reviews
  </p>
  <h2 id="reviews-heading" class="...">What people say</h2>

  <blockquote class="mt-10 max-w-2xl">
    <p class="font-display text-2xl leading-snug italic">
      “[Real quote in 2–4 sentences, kept long enough to feel real]”
    </p>
    <footer class="mt-4 text-sm text-[--color-text-muted]">
      — [First name] [Last initial], [relative date, e.g. "2 months ago"]
    </footer>
  </blockquote>

  <div class="mt-8 flex items-center gap-3 text-sm">
    <!-- SVG five-star rating; see §9 -->
    <span class="font-semibold tabular-nums">4.7</span>
    <span class="text-[--color-text-muted]">·</span>
    <span class="text-[--color-text-muted]">287 reviews on</span>
    <!-- Google G logo SVG -->
    <a href="[GBP URL]" target="_blank" rel="noopener" class="underline">Google</a>
  </div>
</section>
```

**Rules:**

- Never fabricate reviews. Pull from the client's verified Google Business Profile with their consent.
- **Never put `aggregateRating` on the business's own `LocalBusiness` schema** (or any subtype — `Restaurant`, `HairSalon`, `Dentist`, etc.). Self-serving rating on own LocalBusiness is policy-banned per `SEO.md` §5.3. SERP stars come from the GBP listing, not on-site schema. Visible on-page ratings (a "4.9 ★" element rendered in HTML) are a separate UI concern and are allowed when the value is real + owner-approved.
- Stars must be SVG icons, not unicode `★` — see §9.
- If three quotes are wanted, give them **different lengths** (2 lines, 4 lines, 1 line) so the section doesn't read as a fabricated trio.

### Hours table

```html
<table class="tabular-nums text-sm">
  <tr><td>Monday–Friday</td><td>09:00–18:00</td></tr>
  <tr><td>Saturday</td><td>10:00–16:00</td></tr>
  <tr><td>Sunday</td><td>Closed</td></tr>
</table>
```

Use mono or tabular-nums on the time column so the colon aligns.

### Navigation

For a single-page landing: no navigation needed if sections are well-ordered. If needed, a simple sticky top bar with business name + CTA button on the right.

For multi-page sites: keep it simple. Max 5 items. No mega menus. Mobile: hamburger is acceptable if the nav items are 4+.

**Hard rule — no hidden nav without a replacement.** Class lists like `hidden sm:flex` on a navigation `<ul>` mean that on mobile (<640 px) there is no way to reach the linked pages from the header at all. This is the single most common mobile regression in Astro/Tailwind starters. Every Header component must satisfy one of:

- All nav links remain visible at 375 px (acceptable when there are ≤3 short labels).
- A hamburger button replaces the nav at <640 px, with a working close button and focus trap.
- An inline horizontal scrolling strip below the logo carries the same links at <640 px.

Test by loading the page at 375 px and checking that every page in the IA is reachable from the chrome.

**No link should go to a 404.** If the route doesn't exist yet, either remove the link from the header for now or build a 1-line stub page (`Em breve` / `Coming soon`) so the navigation is honest. A header that links into the void destroys the demo more than any visual flaw.

### Sticky service-CTA bubble (mobile)

For service businesses where conversion = "contact us right now" (restaurants, salons, clinics, tradespeople), add a sticky floating button bottom-right on mobile linked to the primary action (usually WhatsApp).

```html
<a href="https://wa.me/..." target="_blank" rel="noopener"
   class="fixed bottom-4 right-4 z-40 rounded-full bg-[--color-accent] p-4 shadow-lg
          lg:hidden focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2"
   aria-label="Order on WhatsApp">
  <!-- WhatsApp SVG, 24px, currentColor white -->
</a>
```

- Always on `lg:hidden` (desktop already shows a CTA in the header).
- Always above z-index 30, below modal dialogs (>z-50).
- Always has `aria-label`; the icon alone is not enough.
- Counts as the "second appearance" of the CTA per the repetition rule above — so the Hero button can be a wide labelled pill, the sticky bubble can be the round icon-only version.

---

## 8. Motion and interaction

### Philosophy

Local business landing pages are not apps. Motion should be minimal and purposeful. Every animation must earn its place by serving the user, not impressing them.

### Required on every interactive element

- `hover:` state (color shift, brightness, or shadow)
- `focus-visible:ring-2` with brand accent color
- `active:scale-95` on buttons and CTA links
- `transition-all duration-150` or `transition-colors duration-150`

### Duration scale (canonical)

Pick from this scale. Don't invent new durations. **As of 2026-05-19 the scale aligns with the measured motion tokens in `TECH.md` §7** — derived from runtime probes of Apple, Auwa, Haven, Aircenter, Really Up There (`docs/audit/ui-ux-reference-study.md` §11 Motion recipes).

| Token | Duration | TECH.md token | Use for | Brand register |
|-------|----------|---|---|---|
| Fast | 180 ms | `--motion-fast` | Hover, focus, button press feedback, fast text-only color hover | Tech / SaaS / agency-self |
| Base | 320 ms | `--motion-base` | Standard scroll-reveal, nav color, small reveals | Apple house unit — fits most brand registers |
| Warm | 500 ms | `--motion-warm` | Marquee CTAs, hospitality color hovers, calm settles | Gastronomy / beauty / wellness / artisan |
| Deliberate | 600 ms | `--motion-deliberate` | Luxury / institutional color hovers | Real estate / luxury / regulated trades |
| Reveal | 800 ms | `--motion-reveal` | One-time hero entries, ribbon drops | Statement reveals only — not ongoing interactions |

**Easing curves — pick by brand register, not by feel.** Use the measured tokens (defined in `TECH.md` §7):
- `--ease-apple-smooth` (`cubic-bezier(0.4, 0, 0.6, 1)`) — default ease-in-out for tech / agency-self
- `--ease-quart` (`cubic-bezier(0.7, 0, 0.3, 1)`) — marquee CTAs, paced symmetrical transitions
- `--ease-expo-out` (`cubic-bezier(0.16, 1, 0.3, 1)`) — settles into place; image lifts, card hovers
- `--ease-luxe` (`cubic-bezier(0.25, 0.74, 0.22, 0.99)`) — deliberate, long tail; luxury/institutional

**Stagger cascade — 20ms inter-item rule.** When items in a list (menu sections, project tiles, FAQ accordion, lineup) reveal together, stagger them by 20ms each: `delay: calc(var(--base-delay) + var(--stagger-step) * var(--i))`. Apple's house pattern (measured across the iPhone-lineup search dropdown).

### Allowed motion

| Element | Animation |
|---------|-----------|
| Hero section on load | Subtle fade-in, 300 ms, ease-out |
| Section reveal on scroll | Fade up (opacity + translateY), staggered, 300 ms |
| Button press | `active:scale-95`, instant |
| Hover on cards | Subtle shadow lift, 150 ms |
| Image on hover (gallery) | Scale 1.02, 200 ms |
| Modal open/close | Fade + scale 0.95→1, 500 ms ease-out |

### `prefers-reduced-motion` is mandatory, not optional

Every animation must be wrapped in a `prefers-reduced-motion: no-preference` query, OR use a tool (Framer Motion, Astro `<ViewTransitions>`) that handles it for you. A site that doesn't honor this preference is broken for users with vestibular disorders, migraine triggers, or simply a preference for stillness.

```css
/* CORRECT — animation only runs when user has not requested reduced motion */
@media (prefers-reduced-motion: no-preference) {
  .fade-in { animation: fadeIn 300ms ease-out; }
}

/* WRONG — animation runs for everyone, ignoring system preference */
.fade-in { animation: fadeIn 300ms ease-out; }
```

For Tailwind v4 the equivalent utility is `motion-safe:animate-fade-in`. Use `motion-safe:` on every animation-related utility. Use `motion-reduce:` to express any fallback instant state.

**The audit gate:** in macOS System Settings → Accessibility → Display → "Reduce motion" ON, then visit every page. Nothing should move on scroll, hover, or load — the page should still be fully functional and visually coherent.

### Motion bans

- Never linear easing (feels robotic) — use `ease-out` as the default. Two specific exceptions documented in `ui-ux-reference-study.md` §11: (1) Apple's stagger cascade uses linear because each item is delay-staggered rather than eased; (2) one-time SVG draw-in keyframes (Haven §15 `drawSVG` 1407ms linear) can use linear for the same reason.
- ~~Never exceed 500 ms on any single transition~~ → **Updated 2026-05-19:** 500ms is the default ceiling, but two extensions apply: (a) `--motion-deliberate` (600ms) for luxury/institutional registers (Aircenter §4 uses 600ms); (b) `--motion-reveal` (800ms) for one-time hero entries only (Apple ribbon-drop, Really Up There clip-path tile reveal). Recurring interactions still cap at 500ms.
- Never animate every scroll event (parallax, etc.) — mobile users will hate it and `prefers-reduced-motion` users will see a broken page
- ~~Never autoplay video or audio~~ → **Updated 2026-05-19:** **Autoplay audio is still always forbidden.** **Autoplay-muted ambient video is permitted as a measured premium-hospitality pattern (Watch House §5, Auwa §6, Kindred §20 in `ui-ux-reference-study.md`) ONLY when all five constraints in `PERFORMANCE.md` §8 ship simultaneously** (conditional load, `preload="none"`, deferred autoplay, poster-as-LCP, ≤ 2 MB / ≤ 5 s / ≤ 720p, mobile pause). Without all five, autoplay video stays banned.
- Never decorative animation (sparkles, confetti, bouncing)

### Performance implication

Animations must not block the page load or cause layout shift. Use `transform` and `opacity` only (GPU-composited). Never animate `width`, `height`, `top`, `left`, or `margin`.

---

## 9. Icons

### Library

Use one icon library per project. Recommended: **Lucide** (Lucide React for React/Next.js projects, or Lucide as SVG sprite for static HTML). Fallback: Heroicons.

**Never mix icon families. Never use emoji as UI icons.**

### Sizing

| Context | Size |
|---------|------|
| Inline with text | 16–18px |
| Button icon | 16–20px |
| Section feature icon | 24–32px |
| Contact info icon | 20px |

### Stroke weight

Always 1.5px–2px. Match across all icons on the page.

### Rule

Icons in contact info, services, and nav must be `aria-hidden="true"` — the text label carries the meaning. Icons that convey meaning without text (icon-only buttons) need `aria-label`.

### Star ratings — never unicode

Do not render review/rating stars with the unicode `★` (U+2605) glyph. Reasons:

- Color and weight are governed by the loaded font; fallback fonts render an outlined or boxed glyph that looks broken
- Cannot be sized independently of the surrounding text
- Cannot show partial fills (4.7 ★ cannot show a 70% fifth star)
- Screen readers may announce as "black star black star black star" instead of a rating

Use inline SVG icons (Lucide `Star` / `StarHalf`) or a single SVG of five stars with an opacity-masked overlay for the partial fill. Wrap the group in `<div role="img" aria-label="4.7 out of 5 stars">` and hide the SVG instances from a11y with `aria-hidden="true"`.

---

## 10. Accessibility

Accessibility standards live in **`ACCESSIBILITY.md`** — WCAG 2.2 AA contract, contrast rules and the opacity-on-muted gotcha, the six common contrast-violation hotspots, keyboard navigation, semantic HTML, touch targets, language attribute, and the tools list.

This doc cross-references it by name only; section structure inside `ACCESSIBILITY.md` is free to evolve without breaking references here.

---

## 11. Content and copy rules

### The real-content rule

**Never deliver a site with lorem ipsum.** Every piece of copy must be real content from or about the actual business. If the client hasn't provided it, ask before writing placeholder text — or write draft copy that sounds like a real business and label it as "DRAFT — confirm with client".

### Tone per business type

| Business | Tone |
|----------|------|
| Restaurant / café | Warm, welcoming, sensory ("come hungry") |
| Clinic / healthcare | Calm, trustworthy, clear, no jargon |
| Fitness / wellness | Energetic or serene (pick one, not both) |
| Salon / beauty | Personality-forward, confident |
| Tradesperson | Direct, no-nonsense, proof of work |

### Voice rules (universal)

- Short sentences. Under 20 words preferred.
- Imperative mood for CTAs: "Call us", "Book your table", "Get directions" — not "You can call us to schedule"
- No corporate filler: "We are dedicated to providing…", "We pride ourselves on…", "Our passion is…"
- No exclamation marks in body copy. One maximum in the hero CTA.
- Second person: "your" not "the customer's"
- **Period-terminated CTAs and short phrases — an optional brand-voice signature** (added 2026-05-19). Four sites in `docs/audit/ui-ux-reference-study.md` independently use a full-stop at the end of short CTA labels and headline phrases: Watch House §5 (`Shop.` · `Visit us.` · `Menu.` · brand tagline `Modern Coffee.`), Laurenti §17 (`Digital.\nDesign to move.`), Apple iPhone copy (`Privacy. That's iPhone.`), Fourmula §22 (`Your catalog, instantly re-shot.` · `On-brand visuals.\nMade by AI.`). The period turns a CTA from a verb-imperative into a complete utterance — reads as "considered" rather than "shouted." Use sparingly: pick one (CTAs *or* taglines, not both) and apply it consistently. Particularly suits gastronomy boutique, beauty, artisan, and agency-self templates; less natural in trades / health where directness is preferred.

### What must never be invented

- Reviews and testimonials (only use real ones with client consent)
- Certifications, awards, or accreditations the business doesn't hold
- Photos of the place that are stock photos presented as the actual business
- Opening hours that are guessed — always confirm with the client

### Multilingual rules (DE/PT/EN)

When a client serves a multilingual audience, the primary language is the client's main customer language. Key contact info (phone, hours, address, CTA) should be repeated in all relevant languages in the footer or a language toggle.

German labels: use correct German, not anglicisms. "Öffnungszeiten" not "Opening Hours" on a German-primary site.

---

## 12. States and edge cases

Every component must account for these states even on a static landing page:

| State | Treatment |
|-------|-----------|
| **No JavaScript** | Core content and contact info must be accessible. No JS-only critical paths. |
| **Slow connection** | Images use `loading="lazy"` except the hero. Avoid render-blocking fonts. |
| **Long business name** | Test at longest expected name. Truncate in nav/header if needed. |
| **Closed today** | Hours display should not suggest the business is open on a day it's closed. |
| **No reviews yet** | Don't show a review section with zero stars. Hide until reviews exist. |
| **Single-service business** | Services section becomes an "About our service" section. Don't repeat the same info twice. |
| **Missing photos** | Never use stock photos as the hero. Use a color block with the business name instead. |
| **Map embed blocked** | Fallback to static image with address text and Google Maps link. |

---

## 13. Mobile-first rules

### The mobile test

Before any client delivery, load the page on an actual phone (not just DevTools). Check:
- Does the hero text fit without overflow?
- Is the CTA button thumb-reachable (bottom half of screen)?
- Can you read all body text without zooming?
- Do all tap targets hit 44px?
- Does the page load in under 3 seconds on a 4G connection?

### Key mobile-specific decisions

- **Phone number:** Use `<a href="tel:">`. Tapping it should dial directly.
- **Map:** Link to Google Maps app, not just an address. Use `https://maps.google.com/?q=` with the full address encoded.
- **WhatsApp:** Use `https://wa.me/` with country code. Pre-fill the message if possible.
- **Images:** Use `srcset` or just size images appropriately. A 3000px hero image on mobile is unacceptable.
- **Navigation — real nav, not hidden nav.** The single worst mobile bug is `class="hidden sm:flex"` on a navigation list without a hamburger or inline strip replacement. The header then shows only the logo on mobile, and there is no way to reach the menu or contact page. Every Header component must check: at 375 px, can a thumb reach every top-level destination? If using a hamburger menu, it must have a close button and trap focus when open.
- **Sticky service CTA bubble.** For any service business with a primary call-or-message action (restaurant ordering, salon booking, clinic appointment), add a sticky floating button bottom-right on mobile that links to WhatsApp (or `tel:` for phone-first businesses). Single highest-conversion element you can add. Pattern: `fixed bottom-4 right-4 rounded-full p-3 shadow-lg bg-[--color-accent] z-40`. Hide on `lg:` where the header CTA is already visible.
- **Font size:** Minimum 16px on body text (iOS auto-zooms on inputs smaller than 16px — annoying).

---

## 14. Human touch checklist

The hygiene items below are baseline — they should all be checked. The two **required craft items** at the bottom are the ones that most signal "designed by a human" rather than "assembled by a template." A site that hits all the hygiene items but skips the craft items will still feel generic.

### Hygiene — check every item

- [ ] Page background is not pure white — uses a warm, cool, or tinted off-white appropriate to the brand
- [ ] Body text is not pure black — uses a dark neutral that feels softer on screen
- [ ] Fonts are deliberately chosen, not default sans-serif
- [ ] At least one real business photo used prominently
- [ ] Button has `active:scale-95` press feedback
- [ ] All hover states feel intentional, not just "underline appears"
- [ ] Focus rings are styled in the brand accent color, not browser default blue
- [ ] Custom `::selection` color set to brand accent
- [ ] Hours are formatted correctly (24h for German/PT sites, 12h for English/US)
- [ ] Phone number is formatted in local style (e.g. +49 30 123 456 for Berlin)
- [ ] Footer includes the business registration or imprint if required by local law (Germany: Impressum + DSGVO; Portugal: NIF/CAE + livro de reclamações)

### Required craft items — both must be present

- [ ] **One typographic flourish** somewhere on the page: an oversized italic pull-quote in the testimonials, a drop cap on the About paragraph, an oversized stat ("4.7 ★" set at h1 weight beside the reviews), a tracked-uppercase ribbon over the headline, a hand-set price list. Tabular-nums alone does not count — that's hygiene. The flourish must read as a deliberate compositional decision, not as default styling.
- [ ] **One place-identity detail** that says where the business is, beyond the address text. For a Berlin client: the U-Bahn line as a colored dot near the address, a Kiez name treated as a label, a hand-drawn fragment of the street. For a Portugal client: an azulejo (tile) corner accent, the district name as a kicker, the Tram 22 line. For Brazil: a regional motif tied to the cuisine. **One** detail is enough — overdoing it (flags everywhere, samba dancers, Brandenburger Tor outlines) is the opposite mistake.

---

## 15. Anti-slop checklist

Run after every build. Reject and fix if any of these are present.

### AI-template tells — the seven that look generated

These are the pattern-level tells that make a page read as assembled-by-machine rather than designed-by-someone. Found in real audits of our own first drafts. Each one in isolation is forgivable; three or more on a single page and the design will be perceived as AI output regardless of the actual content quality.

- [ ] **Identical section rhythm repeated 3+ times** — every section uses the same `eyebrow (uppercase tracked) → h2 → body → CTA` cadence. The repetition itself is the tell. Fix: vary section padding, drop the eyebrow on at least one section, change content density (see §6).
- [ ] **Menu / services rendered as a uniform photo-card grid** — six equal-aspect cards with identical typography. The SaaS pricing-table pattern. Real restaurants and service businesses use editorial menus (typographic lists with prices, one or two feature photos) — not catalog grids. Photo grids belong on a sub-page or as an Instagram-flavoured strip, not as the main "what we serve" content.
- [ ] **Trio of identical 5-star review cards** — equal height, same star count, no dates, no avatars, no Google logo, ASCII or unicode stars. The corporate testimonial trope. See §7 review section pattern.
- [ ] **Decorative gradient or tinted orb behind the hero photo** — a soft tinted shape with no narrative purpose ("designer move"). Either give the decoration a real job (offset frame referencing the brand, a tile motif for a Porto restaurant, a torn-paper edge), or remove it.
- [ ] **CTA chips duplicated unchanged across sections** — the same primary button appearing in the Hero and again in Visit/Contact, identical styling, ~600 px apart. Reads as wireframe filling. See "CTA repetition" in §7.
- [ ] **No place-identity detail anywhere** — nothing beyond the address text says where this business is. No district name as a label, no transit line callout, no regional motif, no street-fragment illustration. The page could be for the same business in any city. One place-identity detail is required per the human-touch craft items in §14.
- [ ] **Photo style inconsistent inside a uniform grid** — phone-snap photos with mixed lighting, angles, and incidental props (a Coca-Cola can in the corner of a coxinha shot, a serving display visible behind one dish, a clean studio shot beside an over-the-shoulder shot) placed inside a Pinterest-perfect uniform-aspect grid. Either crop tightly to the subject in every photo or break out of the uniform grid (asymmetric tiles, varied aspect ratios).

### Visual slop

- [ ] Stock photo hero presenting fictional people as the real team
- [ ] Pure white (#FFF) background with pure black (#000) text
- [ ] Five equally weighted CTA buttons competing for attention
- [ ] Mixed icon families or inconsistent icon weights
- [ ] Emoji used as section icons
- [ ] AI glow / gradient orb / tech-bro sphere on any surface
- [ ] Same template layout used across multiple clients with only text swapped
- [ ] Card soup — everything is a card with the same visual weight
- [ ] Three different sans-serif fonts imported for no reason
- [ ] Excessive border-radius making everything look like a toddler app
- [ ] Hero section that doesn't answer: what, where, and how to contact
- [ ] **All-photo carousel as the hero** — the "hospitality template default." Adds load weight without communicating anything specific; the user sees motion but doesn't know what the place actually is. Use a single hero image OR headline-only hero. Carousels go below the fold if at all.
- [ ] **More than one promotional overlay on first page load** — a cookie banner + a newsletter modal + a discount popup all stacking on landing reads as desperate marketing. **One overlay max on first load**: either the cookie consent (DSGVO-required) OR a newsletter modal (after dismiss) OR a promotional banner (inline in the page chrome, not as overlay). Drybar Shops exemplifies the *opposite* — landing produces three layers of marketing simultaneously, which is acceptable only for brands strong enough to survive it. New clients are not.

### Typography slop

- [ ] Default Inter / Roboto / Arial as the primary display font
- [ ] Same font size for the hero headline and body copy
- [ ] Phone number in proportional font (digits misalign)
- [ ] Line height at default (1.0) on body text (unreadable)
- [ ] No letter-spacing on all-caps labels

### Interaction slop

- [ ] Missing hover state on any button or link
- [ ] Missing focus-visible ring
- [ ] No tap feedback on mobile (active state)
- [ ] Linear easing on any animation
- [ ] Animations over 400ms
- [ ] Parallax scroll effects (kills mobile performance)
- [ ] Non-functional map (just a decorative image with no link)

### Content slop

- [ ] Lorem ipsum anywhere
- [ ] Invented reviews or testimonials
- [ ] Stock photos passed off as the actual business
- [ ] Business hours that are wrong or guessed
- [ ] Phone number not clickable
- [ ] Address not linked to Google Maps
- [ ] "Welcome to [Business Name]!" as the hero headline
- [ ] **Image labeled as dish/service X when the photo is actually of something else** — e.g., a Jardineira photo placed in a card labeled "Feijoada" because we have no Feijoada photo. This is fabrication of evidence even when the words are true. If we don't own a photo of X, either drop the X card or label it correctly (whatever the photo actually shows).
- [ ] **Any header or footer link that goes to a 404** — every link in the chrome must resolve. During demo, a one-line "Em breve / Coming soon" stub is acceptable. **In production, stubs are forbidden.**
- [ ] **Production navigation must not link to stub pages.** A `Menu` / `Cardápio` / `Services` nav item that resolves to a "Coming soon" page is a trust-killer the moment the client (or a real customer) sees it live. Two acceptable resolutions before production cutover: (a) build out the real page content, or (b) remove the nav link entirely and let the home-page section carry that information. There is no third option.
- [ ] **Map iframe renders blank** — see §7. The `?output=embed` URL is unreliable and routinely produces a blank box on production origins. Switch to a static map image or a no-map location card.

### Quality issues

- [ ] Text contrast below 4.5:1
- [ ] Tap targets below 44×44px
- [ ] Page title (browser tab) is generic ("Home" or "index.html")
- [ ] Missing meta description
- [ ] Images without alt text
- [ ] No `lang` attribute on `<html>`
- [ ] No Impressum link on German-market sites (legal requirement)
- [ ] Page load above 3 seconds on mobile (check with PageSpeed Insights)

### Anti-slop reference set — calibrate taste

The §15 anti-slop checklist is the *negative* set — patterns to avoid. The references below are the *positive* set — where to look for taste, real product UI, and design heuristics so the page reads as human-made.

| Reference | Free label | Link | Best for |
|-----------|-----------|------|----------|
| Mobbin | Freemium | [mobbin.com](https://mobbin.com/) | Real product UI patterns, onboarding, pricing, checkout, dashboards. Free tier shows thumbnails; full access is paid. |
| Awwwards | Free browsing / paid membership | [awwwards.com](https://www.awwwards.com/) | Visual inspiration, experimental layouts, interaction ideas. Useful sparingly — over-indexing on Awwwards leads to "designer site" feel that's wrong for local business |
| Laws of UX | Free | [lawsofux.com](https://lawsofux.com/) | UX psychology principles and design heuristics — Hick's law, Fitts's law, Jakob's law, etc. Calibrates *why* something feels right |
| Baymard Institute | Freemium | [baymard.com](https://baymard.com/) | Research-backed UX patterns, especially ecommerce. Free plan exposes a slice; full database is paid |
| Page Flows | Free trial | [pageflows.com](https://pageflows.com/) | User-flow recordings of real apps. Useful for booking/contact flow design |
| Design System Gallery | Free | [designsystem.gallery](https://designsystem.gallery/) | Real design systems from real brands — color, typography, component decisions in context |
| The Component Gallery | Free | [component.gallery](https://component.gallery/) | Component patterns lifted from real design systems — buttons, forms, tables, dialogs |

**How to use these without copying:** browse 3–5 references in the same vertical (e.g. three restaurant sites + two studio sites) before designing each section. Look at what feels native to the business type. Then close the references and design from the gestalt — never copy a specific layout.

---

## 16. Build rules

### Token source of truth

Every client project has one CSS file (or Tailwind config) that defines all color, font, and spacing tokens. No hardcoded hex or pixel values in templates or components.

### Reuse first

Before writing new CSS or a new component, check if an existing pattern covers it. The goal is speed and consistency — you are building 10-20 client sites, not one-off art projects.

### File structure (per client)

```
/client-name/
  index.html           (or Next.js / Astro pages)
  /assets/
    /images/           (real business photos, optimized)
    /fonts/            (if self-hosted)
  /css/ (or styles/)
    tokens.css         (color, font, spacing variables)
    base.css           (reset, body, typography)
    components.css     (buttons, cards, contact block)
    layout.css         (sections, grid, spacing)
  /js/ (if needed)
    main.js            (minimal — nav toggle, form)
```

### Performance rules

Performance standards live in **`PERFORMANCE.md`** — budgets, image rules, font self-hosting, LCP diagnostic, and the tools list. Stack-tier decisions stay in `TECH.md` §1.

### Visual review — mandatory before declaring done

A build is not done because `pnpm build` succeeds. It is done after a human (or browser MCP) has seen the rendered page at three viewports and the screenshots have been reviewed against this document.

For every page, for every locale, capture and inspect:

| Viewport | Width × Height | Why |
|---|---|---|
| Mobile | 375 × 812 | Most traffic for local-business sites. Check headline overflow, nav reachability, sticky CTA bubble, tap targets |
| Tablet | 768 × 1024 | The 768 breakpoint trap (see §6) — hero column splits often choke text here |
| Desktop | 1280 × 900 | The polish viewport — section rhythm, photo treatment, footer balance |

For multilingual sites, all three viewports × every locale. German pages run 30–40% longer than English; if you only review the English version at 375 px, the German wrap will surprise you in production.

Recommended workflow (when working with Claude Code):

```bash
pnpm dev --host 0.0.0.0          # bind to all interfaces so MCP browser can reach
# Then in Claude Code:
# browser_navigate http://host.docker.internal:4321/
# browser_resize 1280 900 → browser_take_screenshot fullPage:true
# browser_resize 768 1024 → screenshot
# browser_resize 375 812 → screenshot
# Repeat for /en/ etc.
```

If Vite rejects the host, add it to `vite.server.allowedHosts` in `astro.config.mjs` (dev-only, see `TECH.md`).

Run all six (or twelve, for bilingual) screenshots against the **AI-template tells** in §15 before signing off the build.

### Before delivery checklist

- [ ] Tested on actual mobile device (not just DevTools)
- [ ] Tested at 375px, 768px, and 1280px viewports (screenshots captured for every page × every locale)
- [ ] All links work (phone, map, social, WhatsApp) **and no header/footer link goes to a 404**
- [ ] **Every image labeled as dish/service X actually depicts X** (no photo-label fabrication)
- [ ] **Map block renders content** — not a blank iframe (see §7)
- [ ] All images have alt text
- [ ] `<title>` and `<meta name="description">` are set with real business content
- [ ] `lang` attribute on `<html>`
- [ ] PageSpeed Insights mobile score ≥ 90
- [ ] Impressum / legal links present (Germany: required by law; Portugal: NIF + CAE + livro de reclamações)
- [ ] Anti-slop checklist clean — including the **AI-template tells** subsection
- [ ] Human touch checklist: all hygiene items + **both required craft items** present (typographic flourish + place-identity detail)

---

## 17. Per-client design file structure

When starting a new client, create a design file at `/clients/[client-name]/design.md` that inherits these rules and adds:

```markdown
# [Client Name] Design File

## Inherits: DESIGN-BEST-PRACTICES.md

## Client context
- Business type:
- City / neighborhood:
- Primary language:
- Primary audience:
- Main CTA:
- What it should feel like:
- What it must NOT feel like:

## Visual direction
- Aesthetic sentence: "This site feels like ___"
- Reference 1 (competitor or inspiration): borrow ___, avoid ___
- Reference 2: borrow ___, avoid ___

## Color tokens
- --color-bg:
- --color-surface:
- --color-text:
- --color-text-muted:
- --color-accent:
- --color-border:

## Typography choices
- Display font:
- Body font:
- Data font (if needed):

## Copy decisions
- Hero headline:
- Hero sub-headline:
- Primary CTA label:
- Tone in one word:

## Real assets available
- Photos: yes / no / which
- Logo: format, on which backgrounds
- Reviews: source, count, approved
- Specific hours confirmed: yes / no

## Delivery notes
- Hosting: Vercel / Netlify / custom
- Domain: confirmed / pending
- Languages needed:
- Impressum required: yes (DE) / no
```

---

*When in doubt: the visitor has 5 seconds to find what they need. Design for them, not for the demo.*
