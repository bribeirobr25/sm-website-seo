# SEO.md — SEO Best Practices
## Small Business Website + Google Business Profile Agency

**Applies to:** All client projects. This is the agency's complete SEO execution guide — strategy, technical implementation, Google Business Profile, and measurement.

**Companion documents:**
- `DESIGN-BEST-PRACTICES.md` — visual and UX standards
- `TECH.md` — stack, code organization, metadata implementation patterns

**Source research:**
- GTM Skills SEO Engine v2 (SKILL.md + RESEARCH.md + CODING_DICTIONARY.md) — keyword strategy, content methodology, AEO/AI search, measurement
- diBoaS platform (`lib/seo/`) — metadata factory, sitemap, structured data implementation patterns

---

## Table of contents

1. [Local SEO first principles](#1-local-seo-first-principles)
2. [Keyword research for local businesses](#2-keyword-research-for-local-businesses)
3. [Intent classification and SERP analysis](#3-intent-classification-and-serp-analysis)
4. [On-page SEO implementation](#4-on-page-seo-implementation)
5. [Schema.org structured data](#5-schemaorg-structured-data)
6. [Technical SEO standards](#6-technical-seo-standards)
7. [Multilingual and local language SEO](#7-multilingual-and-local-language-seo)
8. [Google Business Profile optimization](#8-google-business-profile-optimization)
9. [Content strategy for landing pages](#9-content-strategy-for-landing-pages)
10. [AI search visibility (AEO)](#10-ai-search-visibility-aeo)
11. [Metadata implementation patterns](#11-metadata-implementation-patterns)
12. [Sitemap and crawlability](#12-sitemap-and-crawlability)
13. [Measurement and reporting](#13-measurement-and-reporting)
14. [Delivery SEO checklist](#14-delivery-seo-checklist)
15. [Anti-patterns — never do these](#15-anti-patterns--never-do-these)

---

## 1. Local SEO first principles

### The local business SERP reality

Local searches behave differently from informational searches. Understanding this shapes everything.

**For "restaurant Prenzlauer Berg" or "Zahnarzt Mitte Berlin":**
- The Local Pack (Google Maps + 3 business listings) appears above all organic results
- Local Pack clicks = high intent — the searcher is ready to contact or visit
- Organic website links appear below the Local Pack and still get clicks
- AI Overviews rarely appear for local transactional queries (AIO trigger rate: <2% for navigational/transactional intent)

**Intent classification for local searches:**

| Query type | Intent | Click likelihood | Primary target |
|------------|--------|-----------------|----------------|
| `[service] [city/neighborhood]` | Local/Navigational | Very high | Google Business Profile + website |
| `best [service] near me` | Commercial | High | Local Pack + review sites |
| `[business name]` | Navigational | Very high | Website + GBP |
| `how much does [service] cost [city]` | Investigative | Medium | Website content |
| `is [business] open on Sunday` | Informational | Medium-Low | GBP (Knowledge Panel) |

**Strategic implication:** For most local businesses, Google Business Profile optimization has higher ROI than website SEO alone. The two must be treated as a system, not independently.

### The three-layer local SEO system

```
Layer 1 — Google Business Profile
  → Appears in Local Pack (map + 3 results)
  → Answers: address, hours, phone, reviews, photos
  → Highest visibility for local intent searches

Layer 2 — Website
  → Validates and reinforces the GBP listing
  → Captures searchers who click through to learn more
  → Ranks for specific service + location long-tail queries
  → Essential for trust (a business with no website looks suspicious)

Layer 3 — External mentions
  → Review sites (Google, Yelp, TripAdvisor, Jameda, etc.)
  → Local directories (Gelbe Seiten, Das Örtliche for Germany)
  → NAP (Name-Address-Phone) consistency across all platforms
```

All three layers must be consistent. Inconsistent NAP data across sources confuses Google and hurts local rankings.

---

## 2. Keyword research for local businesses

### Local keyword formula

The core pattern for local business keywords:

```
[Service / product] + [City or neighborhood]
[Service] + [near me]
[Business type] + [City]
[Adjective] + [Service] + [City]

Examples:
→ Friseur Prenzlauer Berg
→ Zahnarzt Mitte Berlin
→ bestes italienisches Restaurant Kreuzberg
→ Physiotherapie Schöneberg
→ wedding photographer Berlin
→ Nagel Studio Neukölln
```

### Research workflow for each client (simplified)

1. **Start with the obvious.** What would a customer who doesn't know this business type into Google? Ask the client: "When a new customer finds you, what did they search for?" Their answer is often more accurate than any tool.

2. **Check Google autocomplete.** Type the service + city into Google (incognito) and note every autocomplete suggestion. These are real queries.

3. **Check People Also Ask.** Run the main keyword and capture every PAA question. These become FAQ section content on the website.

4. **Check Google Business Profile insights.** If the client already has a GBP, the "Searches" tab shows what queries are finding them. This is ground truth (BC-1 equivalent).

5. **Check Google Search Console.** If the client has an existing website with GSC connected, the queries report shows what's already driving impressions. Prioritize keywords where the site already appears on page 2–3 (quick wins).

6. **Triangulate volume.** Use at least two tools (Ahrefs + Semrush) for volume estimates. Tool data has 48–62% error rates versus real GSC data — never use a point estimate. Report as a range.

### Volume triangulation rules (from SEO research)

Tools have known biases:

| Tool | Bias | Correction |
|------|------|-----------|
| Google Keyword Planner | Overestimates ~91% of the time | Divide by 1.5–2× |
| Ahrefs | Underestimates | Multiply by 1.3–1.5× |
| Semrush | Slight overestimate | Use at face value |
| Google Search Console | Ground truth | No correction needed (BC-1) |

**Always report as a range:** "~200–400 searches/month (medium confidence)" — never a single number.

### Keyword priority scoring for local sites

Score each target keyword before building content around it:

| Factor | High value (5) | Low value (1) |
|--------|---------------|---------------|
| ICP match | Exact customer type | Tangential audience |
| Purchase intent | "book appointment", "open Sunday" | "history of dentistry" |
| Volume confidence | High-confidence (2+ tools agree) | Single source |
| Competition | Local businesses only in top-10 | National chains dominating |
| Local pack present | Yes (our target) | No (less local intent) |

Score ≥ 15/25 → worth optimizing. Below 15 → deprioritize.

### Local keyword tiers

Organize keywords into three tiers per client:

**Tier 1 — Primary (optimize everything for these):**
Maximum 3 keywords. These are what the business is fundamentally known for.
`Friseur Berlin Mitte`, `Hairstylist Mitte`, `Haarschnitt Berlin Mitte`

**Tier 2 — Secondary (support with FAQ/service sections):**
5–10 keywords. Specific services, neighborhoods, or related searches.
`Balayage Mitte`, `Herrenschnitt Berlin`, `Friseur in der Nähe Alexanderplatz`

**Tier 3 — Long-tail (capture with natural copy):**
Any number. These appear naturally in well-written content.
`guter Friseur für lockiges Haar Berlin`, `Friseur Mitte Preise`, `Friseur Mitte Erfahrungen`

---

## 3. Intent classification and SERP analysis

### Run the SERP verification loop before building any page

Before writing a single word or building any section, run this for every Tier 1 keyword:

```
1. Open an incognito browser
2. Set location to Berlin (or the client's city) in Google settings
3. Search the keyword
4. Record:
   - Is there a Local Pack (map + business listings)? YES/NO
   - Are there AI Overviews? (rare for local) YES/NO
   - What kind of pages are in the top 10? (websites, directories, review sites)
   - What do the top 3 website titles say?
   - What does the top-ranked page do well?
   - What is missing from all top results?
5. Classify:
   - Click-likely (transactional, local pack present) → optimize for conversions
   - Click-rare (informational, AIO present) → optimize for visibility + fragments
```

### For local business keywords, almost all are click-likely

Local + transactional queries (restaurant, doctor, salon) have:
- Low AI Overview presence (<2% trigger rate)
- High Local Pack presence
- High click-through rates when searcher intent matches

This means for most local clients: **optimize for conversions, not AI citation**.

Exception: Informational queries ("how much does dental implant cost Germany") have higher AIO risk. For these, write structured answers (see [Section 10](#10-ai-search-visibility-aeo)).

---

## 4. On-page SEO implementation

### Title tag formula for local business pages

```
Primary keyword — Business Name (City/Neighborhood optional)

Examples:
Friseur in Berlin Mitte | Studio Marie
Italian Restaurant in Kreuzberg — Bella Vita Berlin
Zahnarzt Prenzlauer Berg — Dr. Müller Zahnarztpraxis
```

**Rules:**
- 50–60 characters maximum (check in SERP preview tool)
- Primary keyword first
- Business name at the end (brand signal)
- Never duplicate the same title across pages
- Never keyword-stuff: "Friseur Berlin Friseur Berlin Mitte günstig" is spam

### Meta description formula

```
[What they do] in [location]. [Trust signal or differentiator]. [CTA].

Examples:
"Moderne Friseur-Erfahrungen im Herzen von Berlin Mitte. Über 200 Bewertungen ⭐⭐⭐⭐⭐. Termin online buchen."
"Authentic Italian cuisine in the heart of Kreuzberg, Berlin. Fresh pasta daily. Reserve your table."
"Zahnarzt in Prenzlauer Berg — schmerzfreie Behandlung, moderne Technik. Jetzt Termin vereinbaren."
```

**Rules:**
- 140–160 characters maximum
- Include city/neighborhood (local signal)
- One clear CTA
- Unique per page
- Does NOT directly affect rankings, but dramatically affects click-through rate

### Heading hierarchy

```html
<h1>Friseur Berlin Mitte — Studio Marie</h1>          <!-- One per page. Business + primary keyword. -->

<h2>Unsere Dienstleistungen</h2>                       <!-- Section titles -->
<h2>Über uns</h2>
<h2>Preise</h2>
<h2>Häufig gestellte Fragen</h2>
<h2>Kontakt und Öffnungszeiten</h2>

<h3>Damen Haarschnitt</h3>                             <!-- Sub-sections within h2 -->
<h3>Herren Haarschnitt</h3>
<h3>Balayage und Highlights</h3>
```

**Rules:**
- One `<h1>` per page — the business name + primary keyword
- Never skip heading levels (h1 → h3 without h2)
- Headings should include natural variations of the target keywords, not forced repetitions
- Every section should answer a question the customer might have

### Keyword placement rules

Natural placement matters more than keyword density. Target keywords should appear in:

1. `<title>` tag
2. `<meta description>`
3. `<h1>` heading
4. First paragraph of the hero/intro section
5. At least one `<h2>` subheading
6. `alt` text of the hero image
7. The URL slug (if multi-page site)
8. LocalBusiness schema (name, description, address fields)

**Never count keyword density.** Never repeat keywords unnaturally. If it reads awkwardly, rewrite.

### URL structure

```
Tier 1 (single page):  https://client.de/
Tier 2 (multi-page):   https://client.de/leistungen/
                       https://client.de/ueber-uns/
                       https://client.de/kontakt/
                       https://client.de/galerie/

Rules:
- Lowercase only
- Hyphens between words (not underscores)
- German URLs use German words: /kontakt/ not /contact/
- No special characters or umlauts in URLs (use: /ueber-uns/ not /über-uns/)
- Short and descriptive: /zahnarztleistungen/ not /unsere-zahnmedizinischen-leistungen-und-behandlungen/
```

---

## 5. Schema.org structured data

### Required for every local business site

LocalBusiness schema is the most important structured data for local SEO. Add in the `<head>` as `<script type="application/ld+json">`.

### Base LocalBusiness template

```json
{
  "@context": "https://schema.org",
  "@type": "[BUSINESS_TYPE]",
  "@id": "https://[client-domain]/#business",
  "name": "[Exact business name as registered]",
  "image": [
    "https://[client-domain]/images/storefront.webp",
    "https://[client-domain]/images/interior.webp"
  ],
  "description": "[2-3 sentence description. Include primary service and location.]",
  "url": "https://[client-domain]",
  "telephone": "+49-30-[number]",
  "email": "[info@domain.de]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street name and number]",
    "addressLocality": "[City]",
    "addressRegion": "[State/Bundesland — e.g., Berlin]",
    "postalCode": "[ZIP]",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": [exact latitude],
    "longitude": [exact longitude]
  },
  "hasMap": "https://maps.google.com/?cid=[Google Maps CID]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "€€",
  "servesCuisine": "[only for restaurants]",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.google.com/maps/place/[business-name]",
    "https://www.instagram.com/[handle]",
    "https://www.facebook.com/[handle]"
  ]
}
```

**Get the exact lat/long:** Open Google Maps, right-click the business location, copy the coordinates. Never approximate.

**If Google Maps isn't reachable (no key, no UI, demo phase) — fall back to OSM Nominatim** for a verified centroid. Free, no auth, no quota for small queries. Triangulate two ways to catch outliers:

```bash
# 1) Search the street + postal code
curl "https://nominatim.openstreetmap.org/search?street=982+Rua+da+Constituição&city=Porto&postalcode=4200-196&country=Portugal&format=jsonv2&limit=3"

# 2) Search the postal code alone
curl "https://nominatim.openstreetmap.org/search?q=4200-196+Porto+Portugal&format=jsonv2&limit=2"
```

If the two results agree within ~50 m, that centroid is good enough for the demo. Note in the source code (e.g. `lib/site.ts`) the verification date and the source — never leave a guessed coordinate without a comment. Before going to production, re-verify against the actual Google Maps pin (drop a pin → right-click → copy coordinates → paste).

**Get the Google Maps CID:** Open the GBP listing in Google Maps, the URL contains `cid=[number]`. Use that for `hasMap`.

### @type selection by business category

| Business | @type |
|----------|-------|
| Restaurant / Café | `Restaurant` |
| Bar / Pub | `BarOrPub` |
| Coffee shop | `CafeOrCoffeeShop` |
| Hair salon / Barbershop | `HairSalon` |
| Beauty salon / Nails | `BeautySalon` |
| Spa / Wellness | `DaySpa` |
| Gym / Fitness studio | `ExerciseGym` |
| Yoga / Pilates | `SportsActivityLocation` |
| Dental clinic | `Dentist` |
| Medical practice | `MedicalClinic` |
| Physiotherapy | `Physiotherapy` |
| Tattoo studio | `TattooParlor` |
| Hotel | `Hotel` |
| Hostel | `Hostel` |
| Bed and breakfast | `BedAndBreakfast` |
| Retail store (general) | `Store` |
| Clothing store | `ClothingStore` |
| Bookstore | `BookStore` |
| Florist | `Florist` |
| Plumber / Electrician | `HomeAndConstructionBusiness` |
| Law firm | `LegalService` |
| Accounting | `AccountingService` |
| Real estate | `RealEstateAgent` |
| Generic local business | `LocalBusiness` |

### Aggregate rating — only use with real data

Only include `aggregateRating` if you have real, verifiable review data. Pull from Google Maps reviews with the client's consent. Never invent or estimate.

Update rating data every time you update the site (monthly at minimum).

### FAQ schema — add when the page has a FAQ section

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie viel kostet ein Haarschnitt bei Studio Marie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Damenhaarschnitt ab €45, Herrenhaarschnitt ab €30. Komplette Preisliste auf unserer Preisseite."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich online einen Termin buchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Termine können direkt über unsere Website oder telefonisch unter +49 30 12345678 gebucht werden."
      }
    }
  ]
}
```

**Rules:**
- Match FAQ schema exactly to visible FAQ content on the page (Google penalizes mismatches)
- Keep answers concise: 40–60 words per answer (optimal for AI extraction too)
- Use real questions that customers actually ask (pull from GBP Q&A or client's inquiry emails)

### BreadcrumbList schema for multi-page sites

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[client-domain]/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Leistungen",
      "item": "https://[client-domain]/leistungen/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Balayage",
      "item": "https://[client-domain]/leistungen/balayage/"
    }
  ]
}
```

### Validation — always validate before delivery

Run every schema implementation through:
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema.org Validator:** https://validator.schema.org

Fix all errors before going live. Warnings are acceptable but document them.

---

## 6. Technical SEO standards

### Core Web Vitals targets

Run every client site through Google PageSpeed Insights before delivery. These are the thresholds (check Google's documentation for current values — they evolve):

| Metric | Target (Good) |
|--------|--------------|
| LCP (Largest Contentful Paint) | ≤ 2.5 seconds |
| INP (Interaction to Next Paint) | ≤ 200 milliseconds |
| CLS (Cumulative Layout Shift) | ≤ 0.1 |

**Mobile is the priority.** Google uses mobile-first indexing. A site that scores 95 on desktop but 60 on mobile is not SEO-ready.

**Common fixes for local business sites:**
- Hero image too large (convert to WebP, reduce to max 1920px wide)
- Google Fonts blocking render (add `display=swap`, preload)
- No explicit `width` and `height` on images (causes CLS)
- Third-party scripts loading synchronously (use `async` or `defer`)
- Google Maps iframe causing CLS (use static image with link as fallback on mobile)

### Required technical elements

Every site must have:

```
robots.txt          → Allow all crawlers, link to sitemap
sitemap.xml         → All indexable URLs with correct priorities
canonical tags      → Prevent duplicate content issues
hreflang tags       → Required for multilingual sites
lang attribute      → <html lang="de"> (match primary language)
```

**`robots.txt` for local business sites:**
```
User-agent: *
Allow: /

Sitemap: https://[client-domain]/sitemap.xml
```

**Never disallow crawlers on client sites.** No legitimate local business needs to hide from Google.

**Noindex for demo/preview deployments:**
While on a Vercel preview URL (before the real domain is live), add to the `<head>`:
```html
<meta name="robots" content="noindex, nofollow">
```
Remove this completely when the real domain goes live.

### Redirect strategy

When a client has an old site being replaced:

1. Audit the old site's Google-indexed pages (check GSC or use a crawler)
2. Map every old URL to its new equivalent
3. Implement 301 redirects (permanent) — not 302 (temporary)
4. Never delete pages that have backlinks or GSC clicks without redirecting them

```
# In vercel.json
{
  "redirects": [
    {
      "source": "/alte-seite",
      "destination": "/neue-seite",
      "permanent": true
    }
  ]
}
```

### Canonical tags

Every page must declare its canonical URL to prevent duplicate content:

```html
<link rel="canonical" href="https://[client-domain]/[page-path]" />
```

For single-language sites: canonical always points to the page itself.
For multilingual sites: canonical points to the primary language version, plus add hreflang tags.

---

## 7. Multilingual and local language SEO

### hreflang implementation

Required for any site serving content in multiple languages. Tells Google which version to show to which user.

```html
<!-- In <head> of every language version -->
<link rel="alternate" hreflang="de" href="https://client.de/" />
<link rel="alternate" hreflang="en" href="https://client.de/en/" />
<link rel="alternate" hreflang="pt-BR" href="https://client.de/pt-br/" />
<link rel="alternate" hreflang="x-default" href="https://client.de/" />
```

**Rules (75% of implementations have errors — avoid these):**
- Every page must link to ALL language versions, including itself (self-referencing is required)
- The relationship is symmetric: if `/de/` links to `/en/`, then `/en/` must also link back to `/de/`
- Use valid ISO language codes: `de` (German), `en` (English), `pt-BR` (Brazilian Portuguese), `fr` (French)
- `x-default` = the page shown when no other locale matches (usually the primary language or a language selector)
- Never use IP-based auto-redirect — Google can't crawl all versions if you redirect their bot

### URL structure for multilingual

Subdirectories are the recommended approach:
```
https://client.de/           → German (primary)
https://client.de/en/        → English
https://client.de/pt-br/     → Brazilian Portuguese
```

Never use separate domains per language for small clients (requires building authority from scratch on each domain).

### Language-specific keyword research

**Never translate English keywords as a proxy for German, Portuguese, or other language keywords.** Search behavior, colloquialisms, and competitive landscapes differ per market.

Research each language independently:
- German queries: use German Google (google.de), search in German
- Brazilian Portuguese: use Brazilian Google (google.com.br), search in PT-BR
- Check local autocomplete suggestions — they reflect actual user behavior

### Content in the primary language first

Write and optimize for the primary language (usually German for Berlin clients). Then adapt (not word-for-word translate) for secondary languages. Check that adapted versions also include the local city/neighborhood naturally.

---

## 8. Google Business Profile optimization

### Why GBP often matters more than the website

For local businesses:
- 46% of all Google searches have local intent
- The Local Pack (3 business listings + map) appears above organic results
- Users looking for a nearby business frequently click the GBP listing directly — without ever reaching the website
- GBP is free — the ROI is exceptional

**GBP optimization is a core deliverable, not an add-on.**

### GBP setup checklist (for new or unclaimed profiles)

- [ ] Verify business ownership (Google sends a postcard with a verification code to the business address)
- [ ] Business name exactly matches the registered business name (no keyword stuffing in the name field)
- [ ] Category: Choose the most specific primary category available, then 2–4 secondary categories
- [ ] Full address: Street, number, ZIP, city (exact format as used everywhere else)
- [ ] Phone number: Include country code (+49 for Germany)
- [ ] Website URL: Link to the client's main website (or the new site we're building)
- [ ] Service area: Set if the business serves customers at their location (plumber, delivery, etc.)
- [ ] Hours: Complete and accurate. Set special hours for holidays.
- [ ] Description: 750-character business description with primary keyword and location
- [ ] Services: Add all individual services with descriptions and prices where applicable
- [ ] Products: Add if the business sells physical products
- [ ] Attributes: Add all relevant attributes (Wi-Fi, accessible, parking, etc.)

### Photo optimization (the highest-impact GBP action)

Google's own data: Businesses with photos receive 42% more direction requests and 35% more website clicks.

**Minimum photo set per business:**
- Logo (transparent background PNG)
- Cover photo (1920×1080px, the main header image)
- Exterior photo (the storefront from street level, day and night if possible)
- Interior photos (3–5 showing the actual space)
- Product/service photos (5–10 showing what they actually offer)
- Team photo (the owner or team, adds trust)

**Photo technical requirements:**
- Format: JPG or PNG (Google compresses anyway, but start with high quality)
- Minimum size: 720×720px
- Maximum size: 5MB
- Name photos descriptively before uploading: `friseur-studio-marie-berlin-mitte-interior.jpg` (not `IMG_4523.jpg`)

**Important:** Google's algorithm now automatically selects which photos to display prominently. If a client reports their photos look wrong (other businesses' photos showing, cropped incorrectly, or reordered unexpectedly) — this is a known Google bug that occurs during algorithm updates. Do not delete and re-upload photos during these periods, as it can disrupt indexing. Wait for Google to fix it automatically.

**Video (optional but high impact):**
- 30 seconds maximum
- Minimum 720p resolution
- Show the space, the team, or a service in action

### Reviews — the most important ranking factor

Google's local ranking algorithm weighs: relevance, distance, and prominence. Reviews directly affect prominence.

**Review strategy:**
1. Set up the "Ask for a review" direct link: In GBP, go to "Get more reviews" → copy the short link (e.g., `g.page/[business-name]/review`)
2. Put this link everywhere: WhatsApp follow-up messages, email signatures, business cards, a QR code at the point of sale
3. Respond to every review — both positive and negative — within 48 hours
4. Never offer incentives for reviews (violates Google's policy and can result in suspension)
5. Never post fake reviews (severe penalty risk including delisting)

**Responding to negative reviews:**
- Acknowledge the issue without being defensive
- Offer to resolve it ("Please contact us directly at [phone]")
- Keep responses professional — future customers read them too
- Never argue or get emotional

### GBP posts — weekly updates via the Publications hub

All posts now live in a unified **Publications hub** in the GBP dashboard. Post at least once per week:

| Post type | Use case | Frequency |
|-----------|---------|-----------|
| What's new | General updates, new services, news | Weekly |
| Offer | Discounts, promotions — now displayed prominently with "Limited Time Offer" tag | When applicable |
| Event | Open days, workshops, special events | When applicable |
| Product | New product highlights | When applicable |

**Post format:**
- 100–300 words (sweet spot for engagement)
- Include one image (1200×900px recommended)
- Add a CTA button where relevant (Book, Call, Learn more)
- Include a location signal naturally ("at our Berlin Mitte studio")
- Offer posts can now be scheduled in advance — use this for holidays and peak seasons

### WhatsApp contact (new GBP feature)

Businesses can now add a WhatsApp number directly to their GBP listing. For clients who use WhatsApp for bookings or inquiries (common for Brazilian community businesses and informal service businesses), add this:
- In GBP dashboard → Contact → Add WhatsApp number
- Use the same number shown on the website
- This replaces the old Business Chat feature (which was removed in mid-2024)

### Profile Strength meter

GBP now shows a **Profile Strength** indicator. Keep it in the green zone:
- Complete all fields: name, address, phone, website, hours, description, services, attributes
- Upload a minimum photo set (see Photo optimization section above)
- Add at least one post per week
- Respond to reviews

### Q&A section (removed November 2025)

Google removed the Q&A feature from GBP in November 2025. **Do not** attempt to set up or pre-populate Q&A for new clients — the feature no longer exists. Instead, add FAQ content directly to the website and use FAQPage schema to make it visible in search results.

### GBP category optimization

The primary category is the most important ranking signal in the Local Pack. Choose carefully:

```
DO choose: The most specific category that accurately describes the business
DO add: Secondary categories for additional services
DON'T add: Categories that don't apply (inflates impressions but kills relevance)
DON'T stuff: The business name field with keywords

Examples:
Hair salon → "Friseursalon" (primary) + "Haarpflege" + "Barbier" (secondary)
Restaurant → "Italienisches Restaurant" (primary) + "Pizzeria" + "Restaurant" (secondary)
Dentist → "Zahnarztpraxis" (primary) + "Kieferorthopäde" if applicable (secondary)
```

---

## 9. Content strategy for landing pages

### For local businesses: every visitor is effectively BOFU

In traditional SEO strategy, traffic comes from all funnel stages. For local businesses, the funnel is collapsed:

- A person searching "Friseur Berlin Mitte" is ready to book an appointment
- A person searching "Zahnarzt Prenzlauer Berg" needs a dentist now (or soon)
- A person searching "Italian restaurant near Oranienburger Str" is choosing where to eat tonight

**Implication:** Every piece of content on a local business landing page should support the conversion decision (contact, book, visit), not just inform.

### Section content priorities

Rank page sections by their contribution to the conversion decision:

| Section | Conversion value | Content focus |
|---------|-----------------|---------------|
| Hero | Critical | Business name + what they do + location + CTA |
| Services | High | What exactly is offered, with prices or price ranges |
| Trust signals | High | Real reviews, years in business, certifications |
| About / story | Medium | Why this business, who runs it, personal touch |
| Gallery | Medium | Real photos of the actual business and work |
| FAQ | Medium-High | Answers questions that prevent a booking |
| Contact / hours | Critical | Must be findable without scrolling on mobile |

### FAQ content from keyword research

The People Also Ask questions for each Tier 1 keyword are your FAQ content:

1. Run the primary keyword in Google (incognito)
2. Click on every PAA question to expand it and trigger more questions
3. Record all questions that a potential customer of this business would realistically ask
4. Write concise answers (40–60 words each — optimal for both humans and AI extraction)
5. Build these into the FAQ section of the page
6. Add FAQPage schema

**Examples for a hair salon:**
- "Wie viel kostet ein Haarschnitt in Berlin Mitte?" → pricing answer
- "Brauche ich einen Termin beim Friseur?" → booking answer
- "Welche Friseur in Berlin Mitte hat am Samstag geöffnet?" → hours answer
- "Was ist Balayage?" → service explanation

### Never invent content or claims

**From the SEO research:** Content that fabricates metrics, capabilities, or facts is detected by both Google and increasingly by AI citation systems. It also damages the client's reputation.

Rules:
- Never invent review counts or ratings
- Never invent "years of experience" without confirming with the client
- Never invent certifications or awards the business doesn't have
- Never use stock photos as if they are the actual business
- Hours, prices, and services must be confirmed by the client before publishing

### Content freshness

AI-cited content is 25.7% fresher than average organic results. For local businesses, keeping content current matters:
- Update hours whenever they change (seasonal, holidays)
- Update prices at least annually
- Refresh the hero image seasonally if possible
- Add new Google reviews to the testimonials section quarterly

---

## 10. AI search visibility (AEO)

### The reality for local businesses

AI Overviews rarely appear for local transactional queries (< 2% of local + navigational intent queries). For most local business clients, AI search optimization is not the primary focus.

However, AI visibility matters for:
- Price and cost queries ("wie viel kostet Physiotherapie Berlin")
- Comparison queries ("beste Zahnarztpraxis Mitte Berlin")
- Educational queries ("wann sollte ich zum Zahnarzt gehen")

### When AI optimization is relevant for local clients

**High AIO risk (prioritize AI-optimized structure):**
- Queries with 7+ words
- Question-format queries ("how", "what", "why", "when")
- Informational intent (not directly transactional)

**Low AIO risk (traditional SEO is enough):**
- Short queries (3 words or fewer)
- Direct service + city queries
- Navigational queries (business name)

### Fragment-based content structure (for FAQ and About sections)

When writing answers to informational questions — including FAQ items — use this structure:

```
[40–60 word direct answer to the question]

[2–3 sentences of supporting detail, evidence, or context]

[Optional: a concrete example or next step]
```

This structure is optimized for:
- Human readability (answer-first)
- AI extraction (self-contained blocks)
- Featured snippets (if the query is simple enough)

**Example for a physiotherapy practice:**

Question: "Wie viele Behandlungen brauche ich beim Physiotherapeuten?"

Good answer (40–60 word direct response):
> "Die Anzahl der Behandlungen hängt vom Krankheitsbild ab. Bei akuten Beschwerden werden oft 6–10 Einheiten empfohlen. Chronische Erkrankungen können mehr Sitzungen erfordern. Ihr Therapeut legt nach der Erstuntersuchung einen individuellen Behandlungsplan fest."

Then the remaining detail can follow in normal prose.

### Schema as an AI legibility layer

From empirical research (730 AI citations, Feb 2026): Generic schema has no independent effect on AI citation probability. BUT:

**What does move citation probability:**
- Organic ranking position (strongest predictor — earn a top-10 ranking first)
- FAQ schema with real, specific questions and concise answers
- LocalBusiness schema with complete, accurate attributes
- Being cited on third-party review sites (Google Reviews, Yelp, TripAdvisor)

**Operational implication:** For local businesses, invest in:
1. Quality content + technical SEO first (earn the rankings)
2. LocalBusiness schema with complete data
3. FAQ schema with real questions
4. GBP optimization (brand mentions, reviews)

---

## 11. Metadata implementation patterns

### SEO constants file — one source of truth per client

Create a single constants file that holds all SEO configuration for a client. Reference it from all page templates. Never hardcode SEO values in individual template files.

**For Astro projects (`src/lib/seo.ts`):**
```typescript
export const SEO = {
  siteName: 'Studio Marie',
  siteUrl: 'https://studio-marie-berlin.de',
  defaultTitle: 'Friseur Berlin Mitte | Studio Marie',
  titleTemplate: (page: string) => `${page} | Studio Marie`,
  defaultDescription: 'Friseur in Berlin Mitte — moderne Haarpflege für Damen und Herren. Online Termin buchen.',
  defaultImage: '/images/og-image.jpg',
  locale: 'de_DE',
  language: 'de',
  twitterHandle: '@studiomarie',
} as const;

export const PAGE_SEO = {
  home: {
    title: 'Friseur Berlin Mitte | Studio Marie',
    description: 'Friseur in Berlin Mitte — moderne Haarpflege für Damen und Herren. Über 200 Bewertungen ⭐⭐⭐⭐⭐. Termin online buchen.',
    keywords: ['Friseur Berlin Mitte', 'Friseur Mitte', 'Hairstylist Berlin'],
  },
  services: {
    title: 'Leistungen & Preise | Studio Marie Friseur Berlin Mitte',
    description: 'Alle Friseurleistungen bei Studio Marie: Damenschnitt, Herrenschnitt, Balayage, Coloration und mehr. Preise einsehen.',
    keywords: ['Friseur Leistungen Berlin', 'Haarschnitt Preise Berlin Mitte'],
  },
  // ... one entry per page
} as const;
```

**For Next.js projects (`src/lib/seo/constants.ts`):**
Adapt the diBoaS pattern — `SEO_DEFAULTS` for site-wide config, `PAGE_SEO_CONFIG` for per-page overrides. Every page calls `generateMetadata()` using this config. See diBoaS `metadata-factory.ts` for the full factory pattern.

### BaseLayout metadata (Astro)

```astro
---
// src/layouts/BaseLayout.astro
import { SEO } from '../lib/seo';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
}

const {
  title = SEO.defaultTitle,
  description = SEO.defaultDescription,
  image = SEO.defaultImage,
  noindex = false
} = Astro.props;

const canonicalUrl = new URL(Astro.url.pathname, SEO.siteUrl).href;
const ogImage = new URL(image, SEO.siteUrl).href;
---

<html lang={SEO.language}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <meta name="description" content={description} />
  {noindex && <meta name="robots" content="noindex, nofollow" />}
  <link rel="canonical" href={canonicalUrl} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:locale" content={SEO.locale} />
  <meta property="og:site_name" content={SEO.siteName} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

  <!-- Fonts (preload the display font) -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
```

### Open Graph image

Every client site needs a default OG image (shown when the link is shared on WhatsApp, Facebook, etc.):
- Size: 1200×630px
- Contains: Business name, city, and ideally a real photo of the business
- Format: JPG (broader support) or PNG
- Saved at: `/public/images/og-image.jpg`

Do NOT use a generic placeholder as the OG image. It's the first visual impression when someone shares the link.

---

## 12. Sitemap and crawlability

### Sitemap for Astro

Use `@astrojs/sitemap` — it automatically generates `sitemap.xml` from all pages.

```typescript
// astro.config.ts
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://[client-domain]',
  integrations: [sitemap()],
});
```

For multi-language sites, use the i18n sitemap option to include all locale variants with alternates.

### Sitemap for Next.js

Create `src/app/sitemap.ts` (see the diBoaS implementation as the reference pattern):

```typescript
// src/app/sitemap.ts
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://[client-domain]';

const PAGE_PRIORITIES: Record<string, number> = {
  '/': 1.0,
  '/leistungen': 0.9,
  '/ueber-uns': 0.8,
  '/galerie': 0.7,
  '/kontakt': 0.9,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(PAGE_PRIORITIES).map(([path, priority]) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority,
  }));
}
```

### Priority guidelines

| Page | Priority | Rationale |
|------|---------|-----------|
| Home / landing | 1.0 | Primary entry point |
| Contact | 0.9 | Conversion critical |
| Services | 0.9 | Primary search target |
| About | 0.8 | Trust signal |
| Gallery | 0.7 | Supporting content |
| Legal / Impressum | 0.3 | Required but low value |

### Submit sitemap to Google Search Console

After going live:
1. Add the property in Google Search Console (verify via DNS TXT record or HTML file)
2. Go to Sitemaps → Enter `sitemap.xml` → Submit
3. Monitor "Coverage" for indexing errors weekly in the first month

---

## 13. Measurement and reporting

### The "dark local funnel" reality

For local businesses, attribution is even harder than for digital businesses:
- A customer finds the business on Google Maps, calls directly from the Knowledge Panel — no website visit
- A customer reads reviews on Google, then walks in — zero digital tracking
- A customer finds the website via Google, then calls — phone call attribution

This means organic traffic metrics alone dramatically undercount SEO impact for local businesses.

### Minimum viable measurement stack

**Free tools that every client must have configured:**

| Tool | What it measures | Setup |
|------|-----------------|-------|
| Google Search Console | Organic impressions, clicks, queries, indexing errors | Verify via DNS or HTML tag |
| Google Business Profile Insights | Profile views, direction requests, calls from GBP, photo views | Available in GBP dashboard |
| Google Analytics 4 | Website traffic, sessions, conversions, page performance | Add GA4 tag to all pages |

Setup all three tools before going live. Do not deliver a site without GSC and GA4 configured.

### Key metrics to track per client

**Monthly report (send to client):**

| Metric | Source | Meaning |
|--------|--------|---------|
| Organic clicks (website) | Google Search Console | People visiting the site from Google |
| Organic impressions | GSC | How often the site appears in search results |
| Average position | GSC | Where the site ranks for its keywords |
| GBP Profile views | GBP Insights | How often the GBP listing was shown |
| Direction requests | GBP Insights | People navigating to the business from GBP |
| Phone calls from GBP | GBP Insights | Calls made directly from the listing |
| Top queries | GSC | What keywords are driving traffic |

### Interpreting the dark local funnel

If a client says "we're getting more customers but I don't see it in website analytics," check:
- GBP direction requests (up = people navigating to the business)
- GBP calls from listing (up = people calling without visiting the website)
- GSC impressions (up even if clicks are flat = ranking is improving)

This is the equivalent of the "AEO win" pattern — organic visibility increasing even when direct clicks don't.

### Pivot thresholds — when to escalate

| Signal | Threshold | Action |
|--------|-----------|--------|
| No GSC impressions after 6 weeks | 0 impressions | Check indexing: is the sitemap submitted? Are pages indexed? |
| Organic traffic drops sharply | > 20% month-over-month | Check for algorithm updates, index issues, or site errors |
| GBP listing suspended | Immediate | Respond to Google's verification request, contact support |
| Ranking drops for primary keyword | Drop > 5 positions | Review page content, check for competitor improvements |
| Contact form stops working | Immediate | Critical — check server and notify client |

### Time-to-results expectations for local SEO

Set expectations with clients before starting:

| Scenario | Timeline |
|----------|---------|
| New website for an existing business with GBP | 4–8 weeks to see first ranking improvements |
| GBP optimization (new or updated) | 2–4 weeks to see Local Pack movement |
| New website for a brand new business | 3–6 months to build initial authority |
| Existing site with technical issues fixed | 2–6 weeks after fixes are live |

SEO is not instant. Set this expectation in writing before signing any client.

---

## 14. Delivery SEO checklist

Run this before every client delivery. No exceptions.

### Technical

- [ ] `<html lang>` set correctly
- [ ] One `<h1>` per page
- [ ] Heading hierarchy is logical (no skipped levels)
- [ ] All images have descriptive `alt` text
- [ ] Decorative images have `alt=""`
- [ ] `<link rel="canonical">` on every page
- [ ] `robots.txt` in place (no accidental `Disallow: /`)
- [ ] `sitemap.xml` generated and correct
- [ ] `noindex` tags removed from all pages (was on demo, must be removed)
- [ ] Security headers configured in `vercel.json`
- [ ] No broken links (check with a link checker or manual test)

### On-page SEO

- [ ] Every page has a unique `<title>` (50–60 characters)
- [ ] Every page has a unique `<meta description>` (140–160 characters)
- [ ] Primary keyword appears in: title, h1, first paragraph, at least one h2
- [ ] URL slugs are clean, lowercase, hyphenated, and use the page's primary language
- [ ] Phone number uses `<a href="tel:+49...">` (clickable on mobile)
- [ ] Address uses `<address>` element and links to Google Maps
- [ ] Opening hours use `<time>` element

### Schema.org

- [ ] LocalBusiness schema present with correct `@type`
- [ ] Schema validated with Google Rich Results Test (zero errors)
- [ ] Latitude/longitude verified against actual Google Maps location
- [ ] Opening hours match what's on the website and GBP
- [ ] `aggregateRating` only included if pulled from real review data
- [ ] FAQPage schema matches visible FAQ content exactly

### Performance

- [ ] PageSpeed Insights mobile score ≥ 90
- [ ] All images converted to WebP
- [ ] Hero/LCP image does NOT have `loading="lazy"`
- [ ] All below-fold images have `loading="lazy"`
- [ ] All images have explicit `width` and `height` attributes
- [ ] Google Fonts use `display=swap`
- [ ] No render-blocking scripts

### Measurement

- [ ] Google Search Console property verified
- [ ] Sitemap submitted to GSC
- [ ] Google Analytics 4 tag firing correctly (test in GA4 debugger)
- [ ] Google Business Profile updated with website URL
- [ ] GBP hours match website hours

### German market legal (mandatory)

- [ ] Impressum page present and complete (full name, address, email, phone, Handelsregisternummer if applicable)
- [ ] Datenschutzerklärung (DSGVO-compliant privacy policy) present
- [ ] Cookie banner only if using tracking cookies — not needed for functional cookies only
- [ ] Legal pages are NOT set to `noindex`

---

## 15. Anti-patterns — never do these

### SEO anti-patterns

- **Keyword stuffing the business name in GBP.** "Studio Marie — bester Friseur Berlin" is a violation of Google's guidelines. Use the real business name only.
- **Buying Google reviews or using a review exchange.** Grounds for GBP suspension. Reviews must be earned.
- **Setting up GBP with a fake address.** Home businesses without a physical storefront must select "service area" and hide the address, not fabricate one.
- **Leaving a GBP profile inactive for 60+ days.** Google may auto-remove profiles with no activity. Schedule at least one post per month minimum even during slow periods.
- **Ignoring map pin fraud.** Competitors can maliciously move a business's Google Maps pin using "Suggest an edit." Monitor monthly: search the client's business name, check that the pin is in the correct location. If moved, log into Google (not the GBP account) and reposition the pin to the correct location using "Suggest an edit" → "Edit map location."
- **Using the same title and description on every page.** Every page needs unique metadata.
- **Hiding text or links for search engines.** White text on white background, display:none, etc. Immediate penalty risk.
- **Creating multiple GBP listings for one location.** Merge or delete duplicates — multiple listings confuse Google and dilute authority.
- **Going live on a temporary domain without noindex.** Search engines will index the preview URL and create duplicate content.
- **Promising specific ranking positions to clients.** No one can guarantee a #1 ranking. Sell outcome visibility (more calls, more direction requests, better presence) not rank positions.
- **Ignoring competitor reviews and mentions.** Local SEO is competitive. Monitor what competitors are doing.
- **Building backlinks with spammy link schemes.** Focus on natural mentions (local press, directories, partners) only. Buying links is a penalty risk.

### Content anti-patterns

- **Stock photos presented as the actual business.** Destroys trust and misleads users.
- **Invented reviews or testimonials.** Never. Pull from real Google reviews with client consent.
- **Outdated information left on the site.** Wrong hours, discontinued services, old prices. Schedule quarterly content audits.
- **Lorem ipsum or placeholder text in production.** Zero tolerance. Content must be real before going live.
- **Duplicate content across client sites.** The agency's templates are a starting point. Every client page must have client-specific content.

### Measurement anti-patterns

- **Reporting only website traffic when GBP drives most leads.** Always include GBP insights in reporting.
- **Panicking at traffic drops after algorithm updates.** Wait 60–90 days before pivoting. Google updates take time to fully roll out.
- **Confusing impressions with traffic.** Impressions = how often the page appeared in search. Clicks = how often someone actually visited. Both matter, for different reasons.
- **Setting up GA4 without testing it.** Confirm events are firing correctly before delivering. A broken analytics setup is worse than no analytics.

---

*Organic visibility compounds over time. Deliver something worth ranking for, and maintain it.*
