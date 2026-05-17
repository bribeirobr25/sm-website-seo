# beauty.md — Beauty Vertical Template
## Salon · Barber · Spa · Aesthetic Clinic

**Applies to:** Beauty clients across product types 1–4 (per `TECH.md` §1). The template captures patterns common to high-performing beauty sites; per-client `design.md` then makes specific choices on top of this foundation.

**Reference audit:** 2026-05-13. Three sites analyzed at 1280 / 768 / 375 viewports — TONI&GUY, Drybar Shops, AIRE Ancient Baths. Full per-site notes in §9.

**Use this doc as a moodboard with principles, not a layout to clone.** Beauty is a portfolio-driven vertical — the photography subject is *people*, the result IS the brand. A beauty site that copies a gastronomy layout fails; a beauty site that copies *another* beauty site fails harder.

---

## Rules at a glance

- **The product is the work on the customer.** Beauty isn't food, isn't a place — it's the visible transformation. Portrait photography of real clients / models showing real results carries the brand. Without it, the site is generic.
- **Pick one of three archetypes** before designing: **Editorial Portfolio**, **Service Chain Conversion**, or **Atmospheric Sensory Premium**. Each has radically different photography rules, CTA hierarchy, and typography.
- **Booking is the conversion path** — not "Learn more," not "Order." Beauty sites convert when the user picks a service + date + stylist and confirms. Make that flow visible in the hero.
- **The service catalog needs a portfolio.** "We offer haircuts" is invisible; "THE MANHATTAN · THE MAI TAI · THE COSMO" with photos is a service catalog. Drybar's naming convention is the canonical example.
- **Trust signals are different from gastronomy.** Beauty buyers want licensure, training pedigree, before-after evidence, press validation. Reviews matter, but credentials do too.
- **Stock beauty photography is visible from orbit.** Generic blonde-with-perfect-highlights, rocks-and-candles spa stock, "stylist holding scissors" pose — these are the loudest AI-template tells in this vertical.
- **Before / after photos** are powerful but require real client consent in writing AND must be the same person. Cross-faded "before from one client, after from another" is fraud-adjacent and looks fake.

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Beauty-specific: try Trinks / Booksy / Treatwell / Fresha profile pages FIRST** (tier 3) — these booking platforms are WebFetch-accessible and host the canonical master logo + structured business data. Instagram (tier 4) is the richest portfolio source once you accept manual download (IG blocks unauthenticated WebFetch). **Before-after photos require explicit written consent regardless of source.** Worked example: Jean Souza Barber's Trinks page yielded a 1214×1214 logo + corrected hours + address landmark in one WebFetch call.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette" — 6-tier color source hierarchy. Beauty studios often have *strong existing identity in IG feed grade* (priority 4); sample before falling to vertical default (priority 5).
- **Prospect intake template:** `CHECKLIST.md` §9 — the canonical structure for `docs/audit/[prospect].md`.

---

## Table of contents

1. [The three beauty archetypes](#1-the-three-beauty-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Beauty-specific anti-patterns](#8-beauty-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The three beauty archetypes

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Editorial Portfolio Fashion** | Aesthetic credibility, fashion-magazine reference | Book / Shop | High — requires real fashion-quality portrait photography + restrained design |
| **B. Service Chain Conversion** | Frictionless booking, multi-location coverage, service catalog clarity | Book now | Medium — needs a strong accent color + clean portrait shots + booking integration |
| **C. Atmospheric Sensory Premium** | Sensory mood, spa/wellness positioning, premium feel | Reserve experience | Highest — atmospheric photography is hard, requires real venue with real lighting design |

**Default for small local salons / barbers:** Archetype A (stripped down) or B (if the client takes online bookings via Fresha / Treatwell / Booksy). Archetype C only fits real spa/wellness clients with a venue worth photographing in low light.

> **Cross-vertical pattern:** Single-chair barber / one-stylist salon builds are the beauty-specific implementation of the **Solo-Operator meta-archetype** documented in `DESIGN-BEST-PRACTICES.md` §3 (the same IA pattern recurs in `templates/trades.md` Archetype D, `templates/health.md` Archetype C, `templates/studio.md` Archetype D). Reference implementation: `clients/jean-souza-barber/` (single-chair barber, 10-year retention, scaled-down Archetype A).

---

## 2. Information architecture per archetype

### Archetype A — Editorial Portfolio Fashion

1. **Hero** — bold uppercase headline (often single-statement: "PROFESSIONAL HAIRCARE, CURATED FOR YOU") + monochrome portrait of a model. Two CTAs max (Book + Shop).
2. **Repetition / rhythm block** — "EDUCATION. EDUCATION. EDUCATION." pattern. Big type as design element.
3. **Service portfolio / portrait grid** — different looks or services rendered as styled portraits.
4. **Education / academy / brand story** — credibility through training and lineage.
5. **Salon locator** — find-a-salon CTA prominent.
6. **Newsletter community** — "Join the community" or equivalent — built for opt-in early.
7. **Footer** — 3-column corporate (brand / social / company), app store buttons if applicable.

### Archetype B — Service Chain Conversion

1. **Hero** — full-bleed photo of a real customer + stylist OR a service result, with a promotional banner ("$50 GIFT CARD"). Single strong CTA in accent color (Book Now / Find a Location).
2. **Why-us trio** — three-card row (Book / Watch / Join Membership) with photos + CTAs. Quick service-positioning summary.
3. **Service catalog as portfolio** — named services with portrait photos. Drybar's "THE STYLES" with named blowout types (Manhattan, Mai Tai, Cosmo) is canonical.
4. **Secondary actions row** — three cards: franchising / locations / new shops. Equal-weight CTAs.
5. **Brand family / sister brands** — strip of related brand logos (Drybar / Lash / Radiant Waxing).
6. **Newsletter + app download** — sign-up form + app store badges.
7. **Footer** — 4-column corporate.

### Archetype C — Atmospheric Sensory Premium

1. **Cookie consent / accept** — multi-option (Reject All / Customize / Allow All) — equal weight, DSGVO-aligned.
2. **Hero** — italic-emphasis headline ("DISCOVER A UNIQUE *EXPERIENCE*") with body copy explaining the brand mythology. No image-led hero — the words carry the moment.
3. **Press validation strip** — pull-quote from major publications (Vogue, Condé Nast, etc.) in the upper-third of the page.
4. **Two-card primary actions** — BOOK + GIFT side-by-side with atmospheric low-light photography in each card. Italic-emphasis CTA text ("BOOK THE PERFECT AIRE *Experience*").
5. **Corporate gifting / B2B** — separate beige-bg block targeting corporate buyers.
6. **In-house magazine** — "AIRE *Magazine*" or equivalent editorial content section. Links to articles.
7. **Press logos carousel** — horizontal scroll of media logos.
8. **Newsletter signup** — "WHERE *relaxation* BEGINS" — location + email, italic emphasis.
9. **Footer** — minimal text links, restrained.

---

## 3. Hero patterns

### Archetype A — Headline-led, portrait-supported

- **Single declarative headline in bold uppercase sans-serif.** ("PROFESSIONAL HAIRCARE, CURATED FOR YOU")
- **Monochrome portrait** of a model on the right (or full-bleed behind text). The portrait IS the product reference.
- **Two CTAs maximum** — `BOOK ONLINE` + `SHOP ONLINE` (outline button style, not filled).
- **No bright accent color.** Monochrome restraint signals premium.
- **Newsletter modal can sit on top of hero** as the first interaction — TONI&GUY does this.

### Archetype B — Promotion-led, single bright CTA

- **Yellow / accent-color promotional banner** as the upper hero. Often time-limited offers ("$50 GIFT CARD + COMPLIMENTARY ADD-ON").
- **Photo of real customer with stylist** — relationship-led photography, not isolated model.
- **Cursive italic script** for emotional brand voice ("give the gift of great hair").
- **One primary CTA in accent color** ("FIND A LOCATION" / "BOOK NOW").
- **Carousel hint** — left/right arrows visible suggesting multiple hero variants (rotating promotions).

### Archetype C — Editorial paragraph hero

- **Italic-emphasis headline** with one word italicized for atmosphere ("DISCOVER A UNIQUE *EXPERIENCE*").
- **Body paragraph below the headline** — full prose introducing the brand mythology. ~3-4 sentences.
- **Press quote integrated into hero** — pull-quote from major publication as part of the first-impression read.
- **No bright CTA above the fold.** The user is invited to read first, then choose to book.
- **Italic serif as a recurring brand voice marker** — "Experience" / "relaxation" / "ritual" — italicized words operate as signature touches.

---

## 4. Photography direction

### Universal beauty rules

- **The subject is a PERSON.** Not a place, not a tool, not an abstract texture. Beauty is portfolio work — the result on a real human shows what the business does.
- **Hair / skin / nails must be visible and the focus.** Not the background.
- **Light direction matters.** Salon photography wants soft front light (catches highlights); spa photography wants warm low light (signals sensory). Mixing them looks confused.
- **No stock "stylist holding scissors" pose.** Customers can spot stock from the first frame.
- **Before / after** is powerful but: same person, same angle, same lighting, written consent. Anything else is fraud-adjacent.
- **Consistent palette across the photo set.** All hair shots warm-balanced or all cool-balanced — never both. Stylists shoot under different lights on different days; the colorist's job at edit time is to unify.

### Per-archetype photography notes

| Archetype | Photo style |
|-----------|------------|
| A — Editorial | Black-and-white or muted color · close-up portraits, single subject · fashion magazine quality · neutral background · model holding still |
| B — Conversion | Bright natural light · real customers (visible smiles, real interactions) · stylist + client both in frame · color-saturated · friendly + accessible |
| C — Atmospheric | Low warm light · candlelit / pool light · texture-led (skin in water, hands on tablet) · soft focus possible · cinematic moody · subjects often partly silhouetted |

---

## 5. Typography pairings

### What works in beauty

Beauty has TWO competing typography traditions:

- **Fashion-magazine sans-serif** — bold uppercase, tight tracking, capable of carrying entire headlines. Drives Archetype A.
- **Editorial serif with italic emphasis** — italic words as signature flourishes ("Experience", "Magazine"). Drives Archetype C.

Archetype B sits between, often using both — cursive script for brand voice + bold sans-serif for product names.

**Tier 1 pairings (proven in the audit):**

| Display | Body | Archetype fit |
|---------|------|---------------|
| **Inter / Söhne / Founders Grotesk** (bold uppercase) | **Inter / Söhne** | A — fashion editorial |
| **Cursive script** (Drybar's custom cursive — substitute Allura, Dancing Script, or Reey on a budget) + **Sans uppercase** for headings | **Inter** | B — service chain |
| **Roman serif with italic** (Fraunces, Tiempos, GT Sectra) | **Inter / Söhne** | C — atmospheric premium — italic emphasis on key words |
| **Display serif** (Domaine Display, Playfair Display free) | **Söhne / Inter** | C — magazine editorial spa |

**Operating rules:**

- **Maximum 2 font families** per project (cursive script counts as one if used).
- **Italic emphasis is a defining design choice** for Archetype C — commit to it. Sprinkling italic on random words reads as accidental.
- **Bold uppercase tracked tracking** (`tracking-[0.04em]` to `tracking-[0.08em]` on display sizes) is the Archetype A signature. Without tracking, bold uppercase looks shouty; with tracking, it looks confident.
- **Cursive script ONLY on small key brand words** ("Glowing", "drybar") — never for body or headlines. Cursive at small size = elegance; cursive at large size = wedding-invitation parody.

---

## 6. Color archetypes

### Archetype A — Editorial Portfolio

| Direction | Palette | Mood |
|-----------|---------|------|
| **Monochrome editorial** | Black bg + white text + grayscale photography + maybe one selective color | Fashion-magazine confident (TONI&GUY) |
| **Soft monochrome** | Warm off-white bg + near-black text + selective accent in muted rose/sand | Female-leaning premium, less aggressive than full B&W |
| **Architectural** | Concrete gray bg + warm white text + single saturated accent (oxblood, deep teal) | Modern unisex barber / studio |

### Archetype B — Service Chain Conversion

| Direction | Palette | Mood |
|-----------|---------|------|
| **Yellow-bright** | Bright yellow accent + warm white bg + near-black text | Friendly, accessible chain (Drybar) |
| **Coral-fresh** | Coral / peach accent + cream bg + near-black text | Female-leaning friendly |
| **Mint-modern** | Mint / sage accent + cream bg + dark green text | Clinical-but-friendly (aesthetic clinics, spas) |

### Archetype C — Atmospheric Sensory Premium

| Direction | Palette | Mood |
|-----------|---------|------|
| **Dark gold / sensory** | Deep brown bg + parchment text + warm gold accent | Spa, hammam, premium wellness (AIRE) |
| **Deep forest / botanical** | Forest green bg + cream text + brass accent | Botanical apothecary, eco-premium |
| **Charcoal noir** | Near-black bg + bone text + warm copper accent | Premium barber, tattoo studio |

**Rules:**
- **Never pure white background** for atmospheric or editorial beauty (Archetype C, A). Pure white kills the moodiness Archetype C needs and the photo richness Archetype A needs.
- **The accent color is the booking CTA.** Reserve it. Don't spread it on dividers or eyebrows.
- **Skin tones in photography must read true** — over-warming or over-cooling the photo color grade distorts the work. Color-grade photos against the brand bg, not in isolation.

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette," when the prospect has no brand guide, no existing website, and no consistent Instagram color grade — the palette falls to the vertical-default tier. Beauty splits by **sub-archetype** because a barber, a salon, and a spa demand visibly different color worlds even though all three sit in this vertical:

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Old-school barber** (solo or two-chair, multi-year retention) | Warm wood + leather + brass + cream paper | `--color-bg: #fdfbf7` (warm cream)<br>`--color-text: #2a1f17` (deep coffee)<br>`--color-accent: #8b5e34` (warm caramel)<br>`--color-border: #e1d4c0` (warm beige) | Mirrors the actual materials inside a traditional barbershop. Avoids the hipster-fade trap (Edison bulbs, neon, tactical-skull). |
| **Modern barber / unisex studio** | Concrete + bone + oxblood | `--color-bg: #f5f3f0` (bone)<br>`--color-text: #1a1a1a`<br>`--color-accent: #6b1f1f` (oxblood)<br>`--color-border: #d8d4ce` | Architectural Archetype A sub-variant. Reads contemporary without being trendy. |
| **Modern urban barber (dark)** — sport-influenced, masculine, multi-year retention with modern brand | Black + white + red (saturated sport-red) | `--color-bg: #131418` (near-black, slightly blue-tinted)<br>`--color-text: #ffffff`<br>`--color-accent: #dc2626` (vibrant red)<br>`--color-text-muted: #a8acb3`<br>`--color-text-subtle: #7a7f88` (for footnotes — passes WCAG AA on bg) | Dark-mode-by-design. Reads "modern, urban, established neighborhood pillar without veering hipster-fade." Use when the client's actual brand (logo, signage, IG grade) is dark + white + saturated red. Reference: `clients/jean-souza-barber/` — palette sampled directly from Jean's existing logo (§5 tier 3). The accent red is the same energy signal as a fire-engine truck or sport jersey; pair with warm family-friendly copy to avoid edgy-bro register. |
| **Salon (women's hair, color specialist)** | Cream + blush + warm gold | `--color-bg: #fbf6f0`<br>`--color-text: #2c1f1f`<br>`--color-accent: #b8946a` (warm gold)<br>`--color-text-muted: #8a6e5f` | Female-leaning premium, soft, photographically forgiving for hair work. |
| **Day spa / aesthetic clinic** | Sage + stone + soft water | `--color-bg: #f4f1ec` (warm stone)<br>`--color-text: #2d3530`<br>`--color-accent: #6b8071` (sage)<br>`--color-border: #d8d2c8` | Clinical-but-warm, signals wellness without going full minty-cliché. Mint-modern (Archetype B) is the alternative if the client is more clinical than spa. |
| **Premium / atmospheric spa** | Deep cocoa + parchment + warm gold | `--color-bg: #1f1611` (deep cocoa)<br>`--color-text: #efe3cf` (parchment)<br>`--color-accent: #c89a4f` (warm gold) | Direct adaptation of AIRE Ancient Baths' palette. Only use when the venue itself has the atmospheric lighting to back it up — wrong choice for a fluorescent-lit suburban salon. |
| **Nail / lash / aesthetic studio** | Cream + dusty rose + soft black | `--color-bg: #faf5f1`<br>`--color-text: #2a1f25`<br>`--color-accent: #c6927e` (dusty rose) | Friendly female-leaning without going hot-pink trendy. Holds up against close-up nail photography (which is high-saturation by default). |

**How to pick the sub-archetype:** Use the same trigger as `templates/beauty.md` §1 archetype matrix — what is the client's actual offering, who is the actual customer, what does their physical space look like in the GBP photos? A 60-year-old single-chair barber and a Marylebone blowdry bar are both "Beauty" but get nothing wrong by sharing zero color tokens.

**These are starting points, not deliverables.** Once tokens are in `tokens.css`, run them against the client's storefront photo (sample with a color picker) and adjust by 5–15 % to harmonize. Document the adjustment in `design.md` §"Color tokens" with the source tier you used (priority 3 = sampled from storefront; priority 5 = vertical-default starting point + adjustment).

---

## 7. Copy voice cues

### What to say

- **Specific service names** — "The Manhattan blowout" beats "premium blowout"; "60-minute Egyptian ritual" beats "deluxe massage." Specificity signals real expertise.
- **Real founder / stylist credentials** when they exist. "Sasha studied at Vidal Sassoon Academy 2008" is a real signal. "Award-winning team" is not.
- **Italic emphasis on a single key word** per headline (Archetype C signature) — "the perfect AIRE *Experience*" / "WHERE *relaxation* begins."
- **Service prices visible** — beauty buyers are price-sensitive. Hiding prices behind "call for pricing" loses leads. Show base prices for top 3 services in the menu.
- **Booking lead time mentioned** if relevant — "Book 2 weeks ahead for weekends" sets expectations.
- **License / certification number** in footer (where local law requires) — Cosmetology License #, Massage Therapy License #, Esthetician #.

### What never to say

- "Award-winning" without naming the award (the #1 beauty-template tell)
- "Pamper yourself" / "Indulge in luxury" / "Unwind from your busy day"
- "Our team of experts" / "Highly skilled stylists" (vague claims)
- "Personalized service" (every salon claims this; it means nothing)
- "Boutique experience" (translated: "we're small")
- "Welcome to [Salon Name]" as the hero headline
- "Book your appointment today!" with exclamation — beauty buyers respond to confidence, not urgency
- Any phrase that could appear unchanged on any salon site of any kind

---

## 8. Beauty-specific anti-patterns

Beyond the generic anti-slop in `DESIGN-BEST-PRACTICES.md`:

| Anti-pattern | Why it's a tell | Fix |
|--------------|----------------|-----|
| **Generic blonde-with-pristine-highlights stock photo** | The single most overused stock image in beauty. Pinterest is full of it. | Real photo of a real client (with consent). Even iPhone photos beat stock. |
| **"Stylist holding scissors" pose** | Direct quote from stock photography sites. Customers spot it instantly. | Photo of stylist mid-cut, working, focused — not posed |
| **Spa stock kit** (rocks · candles · folded towels · orchid · cucumber slices) | The visual cliché kit of "wellness." Indistinguishable across 10,000 sites. | Photo of the actual venue with its actual lighting. AIRE photographs the room you'll be in, not the cliché kit |
| **Before/after composite of two different people** | Reads as fake even when both photos are real | Same person, same angle, same lighting, dated. Written consent required |
| **Identical "diverse team" stock photo set** | The same Getty diversity set appears across thousands of sites — Black woman + Asian man + Latina woman + white woman in matching uniforms | Real staff photos OR no team page (small salons don't need one) |
| **"Award-winning stylists"** without naming the award | Hollow credibility | Name the award (Best of Berlin 2024, L'Oréal Color Trophy finalist, etc.) or omit |
| **Cursive script as the body font** | Wedding-invitation parody | Cursive only on small brand-flourish words ("Glowing"); use a real body font elsewhere |
| **Five-photo carousel as the hero** | Hospitality-template default. Slow to load, doesn't communicate anything specific | Single hero image OR headline-only hero (Archetype C) |
| **Hidden prices ("Call for pricing")** | Costs more leads than it converts hesitant buyers — most users won't call | Publish base prices for the top 3-5 services; add "Custom quotes for X+ services" if needed |
| **Booking that requires phone call** when competitors offer online | Beauty buyers strongly prefer online booking. Fresha / Treatwell / Booksy / Mindbody integration is table stakes | Integrate the booking platform OR explicitly position phone-only as an offering ("we take time with each client — call to book") |
| **Generic "Welcome to [Salon Name]"** as h1 | Same as gastronomy version — could be any salon | Replace with the actual service positioning or a place-rooted opener |
| **All-color before/after with no skin-tone matching** | Lighting or color grade differences make even legitimate before/after photos look fake | Color-grade matched, lighting matched, single edit pass on the full set |
| **Inspirational hairstyle Pinterest collage** as the "menu" | Lifts other people's work; copyright risk; doesn't show what THIS salon delivers | Photos of your own work only. If new salon: smaller portfolio, real |

---

## 9. Reference site annotations

### 9.1 TONI&GUY — `toniandguy.com` (Archetype A)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Repetition rhythm** ("EDUCATION. EDUCATION. EDUCATION.") — bold uppercase repetition as a deliberate compositional device. Most beauty sites would never do this; it signals editorial confidence.
- **Monochrome restraint** — black background, white text, B&W or muted photography. No bright accent color anywhere. The discipline IS the brand statement.
- **Portrait photography as the entire content layer.** Three sections of the page are basically just portraits with text overlay. Nothing else.
- **Education / academy emphasis** — they sell the training expertise as much as the service. Signals "we know what we're doing" without saying it.
- **"Join the community" newsletter modal at the top of the page** — captures email before the user even scrolls. Aggressive but tasteful within the editorial frame.
- **"Find a Salon" CTA prominent** as the main locator action — chain logic. No specific salon URL on the homepage; this is the brand layer.

**What we'd borrow:**

- The repetition rhythm pattern for a hero variant
- The monochrome editorial restraint when the client has fashion-grade photos
- The "education" angle for clients with real training pedigree (stylist who trained at Vidal Sassoon, etc.)

**What we wouldn't:**

- The full-aggression newsletter modal on a small local salon — feels mismatched for a 2-chair Kreuzberg studio
- The pure-monochrome treatment if the client doesn't have fashion-magazine-quality photography to back it up

### 9.2 Drybar Shops — `drybarshops.com` (Archetype B)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Yellow as the entire brand identity** — every CTA, every accent, every promotional banner is yellow. The yellow is the brand. Customers thinking "I want a blowout" think "Drybar" because "yellow."
- **"THE STYLES" service catalog with named portraits** — "The Manhattan," "The Mai Tai," "The Cosmo," "The Cosmo-Tai." Naming services like cocktails is the conversion-conversion: the user picks a NAME they want, not a service. Genius.
- **Service-positioning ribbon** — "NO CUTS. NO COLOR. JUST BLOWOUTS." A single sentence telling the user what the business does and doesn't do. Most beauty sites take 3 paragraphs to say less.
- **Cursive script for emotional brand voice** — "drybar" logo cursive, "Glowing" footer mark cursive. Used SPARINGLY (twice on the page). Elegant, not parody.
- **Three-card primary navigation row** — Book / How We Wow / Become a Barfly (membership). Equal-weight CTAs, three different conversion paths surfaced upfront.
- **Aggressive promotional layer** — gift-card offer banner + newsletter modal + cookie banner all stack on first load. The user lands in three layers of marketing. **This is on the line of acceptable; for a small local salon, dial it down.**

**What we'd borrow:**

- The named-service portfolio pattern ("The Manhattan / Mai Tai / Cosmo") — applies to ANY beauty client with multiple service variants. Names beat generic descriptions every time.
- The yellow-as-brand-identity discipline when the client has a strong single brand color
- The "NO CUTS. NO COLOR. JUST BLOWOUTS." service-positioning ribbon — single-sentence clarity. Every beauty client should have one of these.

**What we wouldn't:**

- Three-layer popup assault on first load — Drybar can survive this because their brand is strong enough; a new local salon would scare users away
- Multiple sister-brand logos in the footer — only relevant for an actual brand family

### 9.3 AIRE Ancient Baths — `beaire.com` (Archetype C)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Italic-as-brand-voice** — every key headline uses italic emphasis on a single word: "AIRE *Experience*" / "moment of complete *relaxation*" / "WHERE *relaxation* BEGINS" / "AIRE *Magazine*." Once you see the pattern, you can't unsee it. That's the signature.
- **Editorial paragraph hero** — no flashy CTA above the fold. Three paragraphs of brand mythology ("AIRE spaces are temples dedicated to the relaxation of body and mind...") + a press quote from Condé Nast Traveler. The user reads first, then decides to book. Patient design.
- **Press validation strip** — Time Out, Vogue, Glamour, Hello, Travel, Bazaar logos in a horizontal scroll. For a premium service, third-party validation is more credible than any internal claim.
- **"AIRE Magazine"** — they publish editorial content adjacent to the brand. "Best Couple's Massage in Chicago" article. This is content-marketing for premium positioning; not feasible for a small salon, but the *idea* (an editorial blog) is borrowable.
- **Corporate gifting prominent** — separate beige-bg block targeting corporate buyers. AIRE serves both individuals and corporate gift-buying — both surfaced.
- **Multi-location locator integrated into newsletter signup** — "Choose your location" → "Enter your email." Location-aware from the first interaction.
- **Cookie banner with three equal-weight buttons** (Reject All / Customize / Allow All) — DSGVO-aligned, no dark patterns.

**What we'd borrow:**

- The italic-emphasis brand-voice pattern — works for any premium beauty client with a story
- The press-quote validation when real press exists ("As seen in TimeOut Berlin 2023")
- The patient editorial-paragraph hero for clients with a real story (founded 1987, founder's narrative, distinctive cultural roots)
- The corporate gifting angle for high-ticket services that B2B buyers consider

**What we wouldn't:**

- The full magazine integration — way too much content infrastructure for a small client
- Multi-location locator if the client is a single venue

---

## 10. Decision matrix — picking the archetype per client

| Question | If yes → | If no → |
|----------|----------|---------|
| Does the client have real fashion-quality portrait photography? | Archetype A — editorial portfolio | Continue (do not fake portfolio with stock) |
| Does the client take online bookings (Fresha / Treatwell / Booksy / Mindbody / Calendly)? | Archetype B — conversion-first | Continue |
| Does the client have a real venue with cinematic / sensory lighting? | Archetype C — atmospheric premium | Continue |
| Is the client a small local single-venue with limited brand assets? | **Archetype B stripped down** — booking is the priority, the rest is photography of real work | — |
| Multi-location chain or franchise? | Archetype B (conversion) or A (premium chain) | Same |
| Spa / hammam / wellness retreat? | Archetype C natively | — |
| Aesthetic clinic / dermatology / injectables? | Archetype A (premium-clinical) or B (conversion-clinical) | Continue |

**The honest middle case:** most small Berlin / Lisbon / Brazilian-community salon clients land in **a stripped-down version of Archetype B** with online booking, named services, and 5–10 photos of real client work. That's the default starting point for most beauty work. Archetypes A and C require either fashion-grade assets (A) or venue/photography investment (C) to justify the production cost.

---

*The vertical template is a moodboard. The per-client `design.md` is the choice. Never copy the layout — copy the discipline.*

---

## 11. Measurement — KPIs that matter for Beauty

**Applies to:** every retainer-tier beauty client at production cutover. KPI framework, naming convention, and per-tier stack selection live in `KPI.md`; this section picks the 3–5 KPIs that matter most for salons, barbers, spas, and aesthetic clinics and how they wire.

### 11.1 Product KPIs

| # | KPI | Bucket | Source | Target / benchmark |
|---|-----|--------|--------|---------------------|
| 1 | Booking-platform handoff rate (Trinks/Booksy/Treatwell deep-link clicks) | Conversion | GA4 `booking_started` (when click fires) | ≥ 8% of sessions |
| 2 | Staff-utilization rate (booked slots ÷ available slots) | Conversion (business) | Booking platform integration | ≥ 65% peak hours, ≥ 40% off-peak |
| 3 | No-show rate | Health (business) | Booking platform | < 10% — anything higher reduces effective utilization |
| 4 | Repeat-client rate (2+ bookings within 90 days) | Retention | Booking platform / PostHog cohort (Tier 3) | ≥ 35% by month 3 |
| 5 | Real-work gallery engagement (% sessions viewing before/after gallery) | Conversion (trust signal) | GA4 / Clarity `gallery_viewed` | ≥ 40% of sessions |

### 11.2 Per-tier stack

| Tier | Tools active | What it measures |
|---|---|---|
| Tier 1 + booking deep-link only | GSC + Clarity + GA4 | KPIs #1, #5 (booking platform owns #2, #3, #4) |
| Tier 2 (Astro — most common) | GSC + Clarity + GA4 | KPIs #1, #5 + booking-platform data for #2/#3/#4 |
| Tier 3 (own booking system) | GSC + Clarity + GA4 + PostHog + Sentry | All 5 KPIs with cohort-based repeat-client analysis |

### 11.3 Dashboard tiles

**GA4:** conversions by event (`booking_started`, `gallery_viewed`, `phone_click`) · top landing pages (service pages vs home) · device split (overwhelmingly mobile) · source/medium for booking starts.

**Clarity:** heatmaps on service pages + gallery + booking CTA · rage clicks on broken Trinks/Booksy embeds · scroll depth on long-form service descriptions.

**PostHog (Tier 3):** booking funnel (`booking_started` → `slot_selected` → `booking_completed`) · repeat-client cohort table · staff-utilization by day-of-week · service-popularity ranking.

### 11.4 Vertical-specific event names

| Event | Fires when | Required params |
|---|---|---|
| `booking_started` | Trinks/Booksy/Treatwell deep-link clicked OR own booking modal opens | `provider` (`trinks` / `booksy` / `treatwell` / `direct`), `service_slug`, `source_section` |
| `service_viewed` | Service description section ≥ 50% in viewport | `service_slug` (`corte`, `manicure`, `coloracao`, etc.), `source_page` |
| `gallery_viewed` | Before/after gallery scrolled ≥ 50% or lightbox opened | `image_count`, `source_page` |
| `staff_profile_viewed` | Staff/team member profile section enters viewport | `staff_slug` |
| `pricing_viewed` | Price list section enters viewport | `source_page` |

### 11.5 Pre-launch verification

- [ ] All KPIs in §11.1 mapped to wired events in BRIEF.md KPI contract
- [ ] Booking-platform UTM parameters preserved (`?utm_source=site&utm_medium=cta&utm_campaign=booking`)
- [ ] Trinks/Booksy/Treatwell handoff returns user to correct page on cancel
- [ ] Service-slug values match booking-platform service IDs (allows joined analysis)
- [ ] Run `CHECKLIST.md` §Operational tests for cookie banner + Sentry PII + KPI wiring

### 11.6 Integrations applicable to Beauty

Per `INTEGRATIONS.md`. Tier-driven defaults plus vertical-specific:

| Integration | When (tier) | Vertical-specific notes |
|---|---|---|
| **Booking platform** (Trinks BR / Booksy / Treatwell / Mindbody) | Every tier — deep-link primary | Per `DESIGN-BEST-PRACTICES.md` booking-platform tier-3 elevation rule. UTM-preserve handoff. |
| **Resend** | Type 2+ (own confirmation flow only) | Most beauty clients use the booking platform's own emails — skip Resend unless own booking. |
| **Sentry** | Tier 2+ (full SDK) | Standard agency setup; useful for catching broken Trinks deep-links via `dead_link_clicked` Sentry events. |
| **PostHog** | Tier 3+ (own booking) only | Booking funnel, staff utilization, repeat-client cohort. |
| **Neon** | Tier 3+ own booking | Appointments table, customer table (encrypted PII). |
| **Upstash** | Tier 2+ booking form | Rate-limit booking-form attempts (10/60s — higher than contact form, beauty clients book in bursts). |
| **Stripe** | Type 4 only — rare (loyalty cards, gift cards) | Subscriptions for membership-based salons; Pix for BR. |

### 11.7 Share strategy

Per `SOCIAL-SHARING.md` §Per-vertical share strategy: **Very high leverage**.

- **Default targets:** WhatsApp + Instagram + Copy-link + Facebook
- **IG embed recommended:** ✅ Yes — before/after gallery is the dominant trust+share driver
- **Placement:** inline share row in gallery section · sticky bottom-of-page share on mobile · footer fallback
- **OG image priority:** real-work hero shot (1200×630, < 300 KB JPG). Not the salon logo on white.
- **WhatsApp share copy:** "[Salon name] — [neighborhood]. [signature service]." — under 80 chars before URL
- **IG bio-link UTM:** `?utm_source=instagram&utm_medium=bio_link&utm_campaign=salon_profile`

### 11.8 Schema.org variants

Use the most specific subtype:

- `BeautySalon` — general beauty / aesthetic
- `HairSalon` — hair-focused
- `BarberShop` — barber-specific
- `NailSalon` — nails-only
- `DaySpa` — wellness, treatments, longer-duration

```json
{
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "[Business name]",
  "address": { "@type": "PostalAddress", "streetAddress": "...", "addressLocality": "[City]", "postalCode": "...", "addressCountry": "[DE/PT/BR]" },
  "geo": { "@type": "GeoCoordinates", "latitude": ..., "longitude": ... },
  "telephone": "+...",
  "priceRange": "€€",
  "openingHoursSpecification": [...],
  "potentialAction": { "@type": "ReserveAction", "target": "https://[trinks/booksy URL]" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": 52 }
}
```

`potentialAction` wraps the booking deep-link, signaling to Google that booking is available.

### 11.9 GBP category + keyword pattern

- **GBP primary category:** `Hair Salon` / `Beauty Salon` / `Barber shop` / `Nail Salon` / `Day Spa` (pick most specific)
- **GBP secondary categories:** related services (e.g., barber may add `Men's Hair Salon`, `Shaving service`)
- **Per-jurisdiction GBP attributes:** wheelchair-accessible, online appointments, walk-ins (varies), LGBTQ+-friendly
- **Keyword pattern (DE):** `[service] [stadtteil]` · `bester barber in [bezirk]` · `[service] termin online`
- **Keyword pattern (BR):** `[serviço] em [bairro]` · `melhor [profissão] em [cidade]`
- **Keyword pattern (PT):** `[serviço] em [cidade]` · `melhor [profissão] [bairro]`
- **Example:** "Männerfriseur Mitte" · "Barbearia em Icaraí" · "Cabeleireiro Bairro Alto"
