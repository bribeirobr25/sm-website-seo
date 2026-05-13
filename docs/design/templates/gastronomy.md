# gastronomy.md — Gastronomy Vertical Template
## Restaurant · Café · Bar · Deli

**Applies to:** Gastronomy clients across product types 1–4 (per `TECH.md` §1). The template captures patterns common to high-performing gastronomy sites; per-client `design.md` then makes specific choices on top of this foundation.

**Reference audit:** 2026-05-13. Three sites analyzed at 1280 / 768 / 375 viewports — Big Mamma Group, Sweetgreen, Dishoom. Full per-site notes in §9.

**Use this doc as a moodboard with principles, not a layout to clone.** If two clients in the same vertical end up with the same hero pattern, the template has failed at its job — the pattern is correct, but the visual execution must differ.

---

## Rules at a glance

- **The product is rarely the food alone.** It's the *place + people + food* trio. Photography that shows food on white isolation belongs to ecommerce, not gastronomy. Show food in context — on the table, with hands, in the room, with the lighting the diner sees.
- **Pick one of three archetypes** before designing: **Immersive Brand Editorial**, **Modern Conversion-First**, or **Heritage Storytelling**. Each has different CTA hierarchies, photography rules, and copy tones. Mixing two produces incoherence.
- **The first CTA is the conversion path** — not "Learn more." Restaurant sites convert in three ways: *order* (delivery / takeaway), *book a table*, or *visit/call*. Pick one as primary; the others are secondary.
- **Typography carries the brand more than color does.** A serif with character (Fraunces, Ogg, GT Sectra, Reckless, Tiempos) is the single highest-leverage design decision. Default sans-serif (Inter, Roboto) signals "generic restaurant template."
- **Multi-location is not multi-page-of-the-same-thing.** Each location gets its own identity — photography, character, story. Resist the "card grid of identical locations."
- **Outsource the transactional layer.** Booking → SevenRooms, OpenTable, TheFork. Ordering → Toast, Square, Olo. The site owns the brand; the platforms own the cart. (Exception: Type 3+ clients building their own booking — see `FORMS.md`.)
- **Place identity is not optional.** A gastronomy site without one place-identity detail (district name, transit line, neighborhood landmark, regional motif tied to cuisine) reads as generic. One detail is enough — see `DESIGN-BEST-PRACTICES.md` human-touch checklist.

---

## Table of contents

1. [The three gastronomy archetypes](#1-the-three-gastronomy-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Gastronomy-specific anti-patterns](#8-gastronomy-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The three gastronomy archetypes

Every gastronomy site we audit lands in one of three patterns. Pick one consciously per client — they have different CTA hierarchies and different production costs.

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Immersive Brand Editorial** | Story / place / atmosphere | Book a table | High — requires great photography + custom typography |
| **B. Modern Conversion-First** | Product clarity, frictionless ordering | Order now | Medium — clean palette + good food photography |
| **C. Heritage Storytelling** | Narrative, history, cultural rootedness | Discover / Visit | Highest — requires editorial copywriting + heritage assets |

**Default for new Type 1/2 clients:** Archetype A (premium feel) or B (conversion focus) — pick based on whether the client takes reservations (A) or orders (B). Archetype C requires real heritage assets; don't fake it.

---

## 2. Information architecture per archetype

### Archetype A — Immersive Brand Editorial

Section order (top → bottom):

1. **Hero** — headline-only or interior photo + headline. No hero CTA above the fold; let the brand land first.
2. **Restaurants / Locations** — each as a distinct identity (photo + name + address + Book/Menu links). NOT a card grid of identical thumbnails.
3. **News / Editorial** — feature articles, recent moments, magazine-style content. Optional but distinguishing.
4. **Newsletter signup** — opt-in with GDPR-compliant checkbox.
5. **Footer** — full corporate-level chrome: legal info, accessibility, modern slavery statement (UK/EU), B Corp / sustainability certifications, sister-brand links.

### Archetype B — Modern Conversion-First

Section order:

1. **Hero** — single food/dish photo, full-bleed. Eyebrow + headline + **one primary CTA** ("Order Now" / "Find a location near you").
2. **Negative space** — generous breathing room before the next section. Confidence through restraint.
3. **B2B / catering / corporate** — secondary revenue stream surfaced (not buried in nav).
4. **Content tie-in** — TikTok / Instagram / brand content section. Modern brands integrate social content as page sections, not just footer icons.
5. **Newsletter + app downloads** — both side by side. Mobile-first conversion vehicles.
6. **Footer** — heavier columns: About / Social / Support / Legal.

### Archetype C — Heritage Storytelling

Section order:

1. **Welcome modal / poster** — optional but characteristic. Treats the site visit as entering a place. Cookie consent can be wrapped into this welcome moment.
2. **Hero** — dark theatrical or warm parchment. Often a quote, an opening line, a place name. Restraint over volume.
3. **Editorial intro** — interior photo + circular detail photo + narrative copy block. Magazine-style.
4. **Locations as editorial entries** — each restaurant is a paragraph or a small image-text spread, NOT a card.
5. **Brand promise / social impact** — quantified ("25 million meals served"), heritage-rooted ("From Bombay with love").
6. **Editorial body** — alternating text/image juxtapositions in irregular rhythm. Cookbook layouts. Magazine spreads.
7. **Footer** — restrained, mostly text, no heavy chrome.

---

## 3. Hero patterns

### Archetype A — Headline-led, image-supported

- **No image-first hero.** The headline carries the moment.
- **Headline in italic display serif**, centered, with substantial negative space above.
- **No hero CTA** above the fold. The CTAs live in the page chrome (top nav: Book a table) and the restaurant cards below.
- Optional: a subtle audio cue toggle (Big Mamma uses `Toggle sound` button) for ambient soundscape — only if it's actually distinctive.

### Archetype B — Photo-led, CTA-led

- **Single food photo, full-bleed.** Not stock. The actual product as a customer sees it on the table, in real lighting.
- **Eyebrow (small tracked caps)** — context-setting micro-copy ("GIVE YOUR FORK A BREAK").
- **Headline below the eyebrow** — short, product-launch framing ("Wraps are here").
- **One primary CTA in the brand accent color** — high contrast against the background.
- **Repeat the CTA in the top nav** — same color, same word ("Order"). Color = action; never spread accent across decoration.

### Archetype C — Editorial poster

- **Welcome modal as the opener** (optional but signature) — designed like a vintage postcard, magazine cover, or newspaper clipping. Includes the cookie/legal consent inside the design.
- **Below the modal: dark theatrical or pale parchment field.** Headline is a place-statement ("From Bombay with Love" / "Welcome").
- **No flashy CTA.** Discoverability is rewarded; the user is invited to explore.

---

## 4. Photography direction

### Universal rules for gastronomy

- **Never food on white background, studio-isolated, with hard shadows.** That's ecommerce stock — it kills the warmth.
- **Always show context.** Hand reaching in. Glass beside the plate. Soft natural light. Diners in soft focus. The room.
- **Color cohesion with the brand palette.** Food colors should echo (or contrast in a planned way) the site's color tokens.
- **No mismatched lighting styles** across photos in the same section. If half the photos are warm-tungsten and half are cool-daylight, the page reads as cobbled-together.
- **Real photos of the actual restaurant.** Stock food = AI-template tell #1 in this vertical. Even a phone photo of the actual dining room beats stock.

### Per-archetype photography notes

| Archetype | Photo style |
|-----------|------------|
| A — Immersive | Interior + atmosphere + people in motion. Wide shots. Cinematic. Lighting is part of the brand. |
| B — Conversion | Single dish, contextual, top-down or 3/4 angle. Props that reinforce the brand colors. Visually appetizing in 1 second. |
| C — Heritage | Mixed scales — sepia historical photos, current restaurant interiors, food in classical compositions. The photo grammar of a coffee-table cookbook. |

---

## 5. Typography pairings

### What works in gastronomy

The headline font carries the brand. A characterful display serif lifts a generic restaurant into "a place." The body font carries readability — it should never compete.

**Tier 1 pairings (proven in the audit):**

| Display | Body | Archetype fit |
|---------|------|---------------|
| **Fraunces** (variable) | **Manrope / Inter** | A, B — works for both editorial and conversion. The agency's current default. |
| **Reckless / Domaine** (paid) | **Söhne / Neue Haas** | A — premium editorial |
| **GT Sectra** (paid) | **GT America** | A — editorial-modern |
| **Ogg / Ogg Italic** (paid) | **Söhne / Inter** | A — confident italic display |
| **Tiempos** (paid) | **Founders Grotesk** | C — heritage with modernity |
| **Playfair Display** (free) | **Lato / Source Sans** | C — heritage on a budget |

**Operating rules:**

- **Maximum 2 font families** per project. Display + body. The variable axis of one family is enough for weight variation.
- **Italic should be a deliberate design choice, not decoration.** Big Mamma uses italic for the main hero headline (the brand voice is intimate, lyrical). If you choose italic, commit — sprinkling italic on one heading and not another reads as accidental.
- **Never default sans-serif as the display font.** Inter as a body is fine; Inter as the h1 is the single biggest "AI-template" tell in this vertical.
- **Tracked-uppercase eyebrows** (`tracking-[0.16em]`) work universally in gastronomy. They give breathing room around the headline.

---

## 6. Color archetypes

Each archetype has 2–3 known-good color directions. Per-client `design.md` picks one and modifies the saturation / temperature to match the brand.

### Archetype A — Immersive Brand Editorial

| Direction | Palette | Mood |
|-----------|---------|------|
| **Wine cellar** | Deep burgundy / brown bg + cream text + warm white surface + ochre accent | Italian, hospitable, intimate (Big Mamma) |
| **Botanical** | Forest green bg + cream + brass accent | Nordic / botanical / fine-dining |
| **Modernist** | Charcoal bg + warm white + single saturated accent (oxblood, cobalt, mustard) | Architectural, urban, design-forward |

### Archetype B — Modern Conversion-First

| Direction | Palette | Mood |
|-----------|---------|------|
| **Health-positioning** | Pale cream bg + sage / olive secondary + bright lime accent CTA | Fresh, modern, wellness (Sweetgreen) |
| **Bright-utilitarian** | Off-white bg + black text + bright single accent (red / yellow / orange) | Direct, energetic, takeaway |
| **Soft-modern** | Warm beige bg + dark olive + muted terracotta accent | Brunch-café feel, friendly modern |

### Archetype C — Heritage Storytelling

| Direction | Palette | Mood |
|-----------|---------|------|
| **Spice and parchment** | Black bg + parchment cream + saffron / paprika / curry accents | Indian / heritage / cookbook (Dishoom) |
| **Old-world tavern** | Deep oxblood / brown + cream + brass + ivory | French / Italian heritage |
| **Coastal heritage** | Indigo / navy + bone + brass accent | Portuguese / Mediterranean coastal |

**Rules:**
- **Never pure white background** for gastronomy. Warm off-whites (cream, parchment, bone) carry food photography better.
- **Never pure black text** on cream. Slightly warm near-black (`#1a1814` etc.) is softer for body copy.
- **The accent color is the conversion path.** Reserve it for the primary CTA. Spreading it on eyebrows, dividers, or decorative elements dilutes the call to action — see `DESIGN-BEST-PRACTICES.md` color rules.

---

## 7. Copy voice cues

### What to say

- **Place-rooted opening lines.** "From Bombay with love" / "È la storia di una squadra" / "From R. da Constituição, Porto" — connect the brand to a specific somewhere. Generic "Welcome to [Restaurant Name]" is the laziest possible opener and the #1 AI-template tell in this vertical.
- **Specific dish names, not categories.** "Picanha grelhada na pedra" beats "premium steak." "House biryani, slow-cooked overnight" beats "signature dish."
- **Numbers when honest.** "25 million meals served," "since 1987," "47 seats" — quantified detail carries trust. Don't invent the numbers.
- **The owner / founder voice, sparingly.** A signed line in the about section ("— Pedro, head chef") adds a human anchor. Overdone (every paragraph signed) becomes saccharine.
- **Multi-language native, not afterthought.** If the brand has Italian roots, leave "tutti quanti" / "con amore" / "la squadra" untranslated. Heritage clues belong in their native language.

### What never to say

- "Welcome to [Restaurant Name]" as the hero headline
- "We pride ourselves on..." (about page boilerplate)
- "The perfect place for..." (vague positioning)
- "Award-winning" without naming the actual award
- "Family-run since [year]" if it's not literally true
- Any phrase that could appear unchanged on any restaurant site of the same cuisine type
- "Book your reservation" — say "Book a table" (every premium reference uses the simpler version)

---

## 8. Gastronomy-specific anti-patterns

These are AI-template tells *specific to the gastronomy vertical* — beyond the generic anti-slop in `DESIGN-BEST-PRACTICES.md`.

| Anti-pattern | Why it's a tell | Fix |
|--------------|----------------|-----|
| **Food shots on pure white isolation** | Ecommerce convention, not restaurant convention. Kills the warmth that food sites need. | Show food in context — on the table, with hands, with the room's lighting. |
| **Three-card grid of identical chef portraits** | The "meet the team" trio. Reads as Marriott corporate. | Single portrait of the founder/chef with a quote; or skip entirely. |
| **"Award-winning" without the award name** | Hollow trust signal. | Name the award (Bib Gourmand, Michelin, TripAdvisor Travelers' Choice 2024) or omit the claim. |
| **Stock photo of clinking wine glasses** | The single most overused stock image in gastronomy. | A real photo of your own table setting, or no photo. |
| **Map iframe with no fallback** | `?output=embed` Google Maps frequently renders blank. See `DESIGN-BEST-PRACTICES.md` map embed rule. | Use a static map image or a location card with "Open in Google Maps →" link. |
| **"Our story" as the page title** | The single most generic about-section heading in existence. | "From [Place] with love" / "How [Founder] started" / "The story of [Restaurant]" — anything specific. |
| **Hero headline "Authentic Italian cuisine in Berlin"** (or equivalent generic) | Category-and-location formula. Generates from a template. | Use the actual restaurant name's tagline, or a quote from a review, or a place-statement. |
| **All-photo carousel as the hero** | "Hospitality template default." Adds load weight without communicating anything specific. | Single hero image OR headline-only hero. Carousels go below the fold if at all. |
| **Trio of identical 5-star Google review cards** | Already in the generic anti-slop list; especially egregious in gastronomy where one well-chosen quote outperforms three card-soup quotes. | Feature one pull-quote with the author's name + date + Google logo. Link to "See more on Google" for the rest. |
| **Reservation form on the homepage** | Adds friction at the wrong moment. Most people will click the booking-platform link anyway. | Use a "Book a table" CTA that opens SevenRooms / OpenTable / TheFork. Build a custom form only for Type 3+ clients with real booking-system requirements. |
| **Hero CTA "Schedule a consultation" / "Get started"** | SaaS-template language leaking into gastronomy. | Use a hospitality CTA: "Book a table" / "Order now" / "Visit us" / "See the menu." |
| **Generic "Welcome to [Restaurant Name]" as h1** | Same as above — could be any restaurant. | Replace with a place-rooted opening line. |

---

## 9. Reference site annotations

### 9.1 Big Mamma Group — `bigmammagroup.com` (Archetype A)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Italian-language brand cues** (untranslated): "È la storia di una squadra" / "tutti quanti" / "Squadra" / "AUGURI" / "Dai!" submit button. Heritage signal at the typographic level.
- **Headline-only hero** — no image, no CTA, ~50 % of the hero is dark negative space. Confidence at the architectural level.
- **Restaurants as personality, not inventory.** Each location has photography that captures its actual interior — Circolo Popolare in Barcelona vs Pink Mamma in Paris look like *different restaurants*, not the same template with name swapped.
- **Locations include "Opening the 12th of June" countdown** — anticipation as content.
- **External integrations:** menus on `menu.bigmammagroup.com/<slug>`, bookings on SevenRooms. The brand site never tries to render a menu PDF or a booking form inline.
- **Multi-language switcher in the header** (en / fr / de / es / it) — five locales, natively accessible.
- **Footer trust signals:** B Corp certified, Modern Slavery Statement (UK legal requirement), Digital Accessibility statement, separate links to each sister-brand (Gloria Osteria, Circolo Popolare, etc.).
- **Cookie banner with 3 equal-weight buttons** (Accept / Preferences / Decline) — DSGVO-aligned, no dark patterns.

**What we'd borrow for Porto dos Ribeiros:**

- The headline-only hero pattern (currently Porto leads with hero image — A could substitute)
- The Italian-language brand cues approach (Porto could leave Brazilian Portuguese phrases untranslated in the EN site for heritage cue)
- The B Corp / accessibility / sustainability trust signals in the footer (currently absent)

**What we wouldn't:**

- The 30+ restaurant scroll-through is for a chain. Single-restaurant clients don't have that inventory.

### 9.2 Sweetgreen — `sweetgreen.com` (Archetype B)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Three-color palette discipline.** Cream + sage + bright lime accent. No fourth color anywhere. The accent is reserved entirely for the Order button.
- **Product launch framing.** "Wraps are here" treats a menu item like a product drop. The eyebrow ("GIVE YOUR FORK A BREAK") provides voice; the headline provides news; the CTA provides conversion. All three in 6 inches of vertical space.
- **The hero food photo is contextual** — wraps on a pink plate, hand reaching in, glass of green drink, second plate in soft focus. Real meal, not isolation.
- **Massive negative space below the hero.** ~600px of empty cream before the next section. Confidence over density.
- **B2B / Sweetgreen for Work surfaced on the homepage**, not buried in the nav. Real revenue stream gets real real estate.
- **TikTok content tie-in as a section** ("Step inside the sweetgreen kitchen") — modern brand approach: social content lives in the page, not just as footer icons.
- **Order flow forces location selection first.** `/menu` redirects to `/locations` with Pickup / Delivery / Outpost tabs. Conversion-first IA: you can't see menu prices without committing to a location.
- **App downloads are first-class footer real estate** — iOS / Android side-by-side. Mobile-first conversion strategy made explicit.

**What we'd borrow:**

- The three-color discipline (color reserved for action)
- The product-launch framing for menu changes / specials (per-client retainer pattern: every monthly post is framed as a product launch, not "we have new things")
- The hero contextual food photography rule

**What we wouldn't:**

- The massive negative space requires brand confidence the client may not have on day one. Use sparingly.
- The location-first order flow is overkill for single-restaurant clients.

### 9.3 Dishoom — `dishoom.com` (Archetype C)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Welcome modal as a postcard.** The visit feels like opening a hardback book. Cookie/legal consent wrapped into a vintage-poster design — the boring legal moment becomes part of the brand experience.
- **Editorial spreads.** Text and image are interleaved at irregular rhythm (not card grids). The page reads like a magazine, not a directory.
- **Vintage typographic identity.** Multiple serif weights, italic emphasis, classical proportions. Looks expensive without using pure premium fonts.
- **Quantified social impact: "25 MILLION MEALS"** — a circular stamp graphic that turns charity into a trust signal. The number is the proof.
- **Place-rooted promise.** "From Bombay with Love" is everywhere — on the title bar, in the footer, woven into the body copy. The brand promise carries through.
- **Heritage photography mix.** Sepia historical photos + current restaurant interiors + food in classical composition. The photo grammar is consistent across the spread.
- **Multi-location as editorial.** Each restaurant has its own page; the homepage lists them as text entries with small images, not card grids.
- **Long-tail scroll.** The homepage is ~11000px tall — a magazine, not a brochure. The site rewards exploration.

**What we'd borrow:**

- The welcome modal pattern for clients with strong narrative (e.g., a family-run restaurant with a real founder story)
- The quantified social impact stamp pattern (Porto could surface "X years on R. da Constituição")
- The "From [Place] with Love" formula for brand promise

**What we wouldn't:**

- The 11000px scroll is for an established brand with content to fill it. Small clients should resist the temptation to fake editorial depth.
- The welcome modal is an extra page-load gesture; only use when the narrative is strong enough to justify it.

### 9.4 Reference implementations — Porto dos Ribeiros variants

Our own client work doubles as worked examples of each archetype, stripped down to a single-location restaurant. Use these as the **starting scaffold** for new gastronomy clients — same business data, three different visual directions — rather than starting any new build from scratch.

| Archetype | Directory | What to copy when starting a new gastronomy client |
|-----------|-----------|-----------------------------------------------------|
| **A — stripped editorial** | `clients/porto-dos-ribeiros/` | The safe-default starting point. Two-column hero, single review quote, footer brand motto in italic, azulejo place-identity SVG, conservative palette. Single nav item (logo doubles as home link). |
| **B — modern conversion-first** | `clients/porto-dos-ribeiros-v2/` | When the client takes orders / does delivery / has volume. Full-bleed photo hero with dark gradient + single accent CTA, three-column menu card grid, delivery-first Visit section, "Salve nosso WhatsApp" subscribe footer block. |
| **C — heritage editorial** | `clients/porto-dos-ribeiros-v3-heritage/` | When the client has a real story (year of founding, founder presence, distinctive cultural roots). Dark theatrical palette + parchment text, native `<dialog>` welcome modal with vintage-postcard styling + sessionStorage dismissal, alternating editorial menu spreads, circular "Since [year]" stamp in Reviews, multi-paragraph Visit narrative. |

**Each variant is a complete independent Astro project.** Same content layer (`lib/site.ts`, schema, image assets, business data) — different visual layer (tokens, hero, header, footer, section components, copy voice).

**The cold-call pattern** for these three variants is documented in `SALES.md` §3 (The pitch call).

---

## 10. Decision matrix — picking the archetype per client

Use this matrix during the per-client scoping conversation, before any design work begins.

| Question | If yes → | If no → |
|----------|----------|---------|
| Does the client take reservations as the primary conversion? | Archetype A (Book a table front-and-center) | Continue |
| Does the client primarily do takeaway / delivery / fast-casual? | Archetype B (Order CTA front-and-center) | Continue |
| Does the client have a real heritage story (≥ 10 years, family-run, distinctive cultural roots, charitable mission)? | Archetype C (storytelling) | Default A or B per the answers above |
| Is the client a single-location with a small budget? | **A — but stripped down**: skip the editorial sections, keep the headline-led hero and the restaurant-as-personality treatment | Same |
| Multi-location chain (3+)? | Archetype A natively, B if conversion-first | Same |

**The honest middle case:** most single-location agency clients land in **a stripped-down version of Archetype A** with a strong headline-led hero, real interior photography, and a single CTA. That's the Porto dos Ribeiros pattern, and it's the default starting point for most gastronomy work. Archetypes B and C require either a real conversion engine or a real narrative to justify the production cost.

---

*The vertical template is a moodboard. The per-client `design.md` is the choice. Never copy the layout — copy the discipline.*
