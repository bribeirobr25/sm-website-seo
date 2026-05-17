# studio.md — Studio Vertical Template
## Gym · Yoga · Pilates · Dance · Martial Arts · Boxing

**Applies to:** Studio clients across product types 1–3 (per `TECH.md` §1). Most studios land at Type 2 (info + class booking via Mindbody / ClassPass / Calendly) or Type 3 (booking + member portal).

**Reference audit:** 2026-05-13. Three sites analyzed at 1280 / 768 / 375 viewports — Equinox (US premium luxury), Smart Fit (Brazil mass-market), Hotpod Yoga (UK boutique atmospheric). Full per-site notes in §9. Planet Fitness was on the reference list but bot-blocked (Cloudflare challenge) — substituted with Smart Fit; same mass-market value-fitness archetype.

**Use this doc as a moodboard with principles, not a layout to clone.** Studios span the widest design vocabulary of any vertical — from Equinox's dark fashion-magazine to Smart Fit's yellow-and-black accessibility to Hotpod's purple sensory immersion. The archetype you pick is more consequential here than in any other vertical.

---

## Rules at a glance

- **The class IS the product.** Studios sell experiences (HIIT class, hot yoga, pilates session), not memberships. Photography of the actual class in progress carries the brand. Membership pricing is a downstream conversion.
- **Pick the archetype to the client's positioning.** Premium luxury → A. Mass-market value → B. Boutique sensory → C. Solo instructor or 2-person studio → D.
- **Class schedule visibility is load-bearing.** "When can I come?" is one of the top three user questions. Surface the schedule (or "next available class" indicator) above the fold or in the very first scroll.
- **Booking is the primary conversion path.** Phone CTAs work for trades; studios live on online booking. Mindbody, ClassPass, Glofox, MoveGB, or native are table stakes.
- **Real class photography only.** Stock fitness models in identical gym poses are visible from orbit. The actual class in your actual studio with your actual members is the single highest-leverage trust photography.
- **Multi-pricing-tier transparency** for chains/gyms (Plano Smart, Plano Fit, Plano Black). For boutique studios, drop-in vs class-pack vs unlimited pricing matters.
- **First-class-free / intro offer** is industry-standard. Surface it above the fold for any archetype below premium.

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Studio-specific: try Mindbody / ClassPass / Glofox / MoveGB profile pages FIRST** (tier 3) — these booking platforms are WebFetch-accessible and host the canonical logo + class schedule + studio data. **Mid-class photography is the conversion** — Instagram (tier 4) is usually the richest portfolio source for that, accepted via manual download.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette" — 6-tier color source hierarchy. Boutique studios often have a strong existing brand (priority 1 or 2); solo instructors usually fall to vertical-default (priority 5).
- **Prospect intake template:** `CHECKLIST.md` §9 — the canonical structure for `docs/audit/[prospect].md`.

---

## Table of contents

1. [The four studio archetypes](#1-the-four-studio-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Studio-specific anti-patterns](#8-studio-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The four studio archetypes

Studio has **four** archetypes rather than three because the design vocabulary spans further than any other vertical.

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Premium Editorial Luxury** | Lifestyle positioning, fashion-magazine aesthetic, exclusivity | Join now (high-tier membership) | Highest — needs editorial-quality photography + dark palette + strong typography |
| **B. Mass-Market Value Conversion** | Plan transparency, scale ("largest network"), location coverage | Sign up / Find a location | Medium — needs pricing-plan grid + location finder + utilitarian palette |
| **C. Boutique Atmospheric** | Sensory class experience, immersive environment, community feel | Book a class (often first class free) | Medium-high — needs atmospheric class photography + soft palette + sensory copy |
| **D. Solo Instructor / Single Studio** | Personal voice, real instructor face, class schedule | Book / Try first class | Low — the agency's default for most local studio clients |

**Default for new local studio clients:** Archetype D (stripped down). Use C for boutique studios with strong sensory branding. B for any multi-location chain client. A is for premium clubs — out of typical agency scope.

---

## 2. Information architecture per archetype

### Archetype A — Premium Editorial Luxury (Equinox)

1. **Top utility bar** — "Find a Club" + "Join Now" buttons in the brand accent
2. **Hero** — dark cinematic photography of a club interior or aspirational member portrait + restrained headline ("It's Not Fitness. It's Life.") + ONE high-tier-membership CTA
3. **Promotional banner if applicable** — limited-time membership offer ("THE EQUINOX SALE") with explicit dollar/value commitment
4. **One Membership, Limitless Potential** — value proposition block with editorial photography
5. **Where Luxury and Fitness Meet** — brand-positioning block
6. **Signature Classes** — class taxonomy showcasing premium offerings
7. **Personal Training** — premium service-tier callout
8. **The Spa at Equinox** — adjacent-service positioning (the club is bigger than fitness)
9. **Equinox+ (digital product)** — companion app / subscription tier
10. **Referral / loyalty banner** — member-acquisition mechanic
11. **Newsletter signup with full address fields** — premium-conversion data capture
12. **Dark footer** with corporate categories

### Archetype B — Mass-Market Value Conversion (Smart Fit)

1. **Top utility bar** — Login / Join Now / Language toggle / Search
2. **Hero** — friendly headline ("Seu corpo é mais do que um número na balança") + promotional ribbon ("SAIBA MAIS") + photo of gym interior (real members, daylight) + accent-color CTA
3. **Location finder** ("Encontre a academia mais próxima") with postcode / city search
4. **Heritage scale signal** — "Venha treinar na maior rede de academias da América Latina" (largest network in Latin America)
5. **Pricing plans grid** — 3 cards (Plano Black / Plano Fit / Plano Smart) with full feature lists + INSCREVER-SE CTAs per plan
6. **Experience showcase** — 3-image grid of actual gym interiors
7. **Class types** — 3-card row of group class options
8. **App promotion** — companion app with download buttons + visual mockup
9. **Additional products** — 3-card row of upsells (personal training, programs, apparel)
10. **News & content** — 3-card editorial section
11. **Dark footer** with multi-column corporate categories

### Archetype C — Boutique Atmospheric (Hotpod Yoga)

1. **Top bar** — minimal: logo + "Find a class" CTA
2. **Hero** — soft atmospheric photo (slight blur, mood lighting) + dual statement ("For yoga first-timers. / And yoga all-the-timers.") with italic emphasis + ONE "Find a class" CTA
3. **Sensory intro paragraph** — body copy describing the experience ("A yoga class that takes your million miler from the everyday right to your doormat")
4. **Class taxonomy** — 3-card row showcasing class types with icons + names + brief descriptions
5. **Customer testimonials** — pull-quotes from real members in italic
6. **"A class for every level. A flow for every feeling."** — secondary positioning statement
7. **Calm minds. Heads for business.** — corporate / B2B angle if applicable
8. **Teacher training / certification** — "Get qualified the Hotpod way" — franchise expansion angle
9. **App promo** — booking app integration
10. **Class types reference** — 3-card row, deeper
11. **Footer** — minimal with social + legal links

### Archetype D — Solo Instructor / Single Studio (the agency's default studio client)

> **Cross-vertical pattern:** This archetype is the studio-specific implementation of the **Solo-Operator meta-archetype** documented in `DESIGN-BEST-PRACTICES.md` §3 — the same IA pattern recurs across `templates/trades.md` Archetype D and `templates/health.md` Archetype C. ~70 % of studio clients fall into this pattern.

1. **Top bar** — phone + book online link
2. **Hero** — headline naming the instructor + the discipline + the area ("Sara Pilates · Mitte Berlin") + portrait of instructor in the studio + ONE CTA ("Book your first class — 50% off")
3. **About the instructor** — credentials (certifications, years teaching, training pedigree)
4. **Class types** — list of 4–6 classes offered (Mat Pilates, Reformer, Pre-Natal, etc.)
5. **Class schedule** — embedded calendar OR week-view table with times + spaces remaining
6. **Pricing** — drop-in / 10-class pack / unlimited monthly (3 tiers max)
7. **First-class offer** — surfaced separately ("First class free / 50% off intro week")
8. **Location + how to find us** — address + parking / transit + studio photo
9. **Footer** — minimal: legal info, license/certification, social

No location-finder grid (single studio). No app promo (Calendly link or Mindbody embed is enough). No teacher-training callout. Most solo studios land at 8 sections.

---

## 3. Hero patterns

### Archetype A — Lifestyle editorial

- **Dark cinematic photography** of an interior or aspirational member portrait — fashion-magazine quality
- **Brand tagline as headline** — "It's Not Fitness. It's Life." — positioning over feature
- **No price visible** — premium positioning hides price behind "Join Now" click
- **Restrained typography** — serif or modern sans, no shouting
- **Single CTA in cream-on-dark** — high contrast but restrained

### Archetype B — Value conversion

- **Promotional offer banner** — visible savings ("THE EQUINOX SALE: $X off") or value commitment
- **Friendly headline** — body-positive or community-led ("Your body is more than a number on the scale")
- **Real gym interior photo** — bright, daylight, real members in frame
- **Yellow / bright accent CTA** — "INSCREVER-SE" / "JOIN NOW" / "SIGN UP" prominent
- **Location finder embedded in hero** — postcode/zip search as the secondary action
- **Plans hint visible** below hero — "3 plans from $X/month"

### Archetype C — Boutique sensory

- **Soft atmospheric photography** — slight blur or mood lighting, subject not fully in focus
- **Dual statement headline** — "For [type 1]. / And [type 2]." pattern (Hotpod's "first-timers / all-the-timers")
- **Italic emphasis** on key words — "all-the-*timers*" — typographic flourish
- **ONE CTA in soft pill** — "Find a class" / "Book your trial" — never urgent
- **Sensory copy** — paragraph below describing how it FEELS, not what it IS

### Archetype D — Solo instructor

- **Headline = instructor + discipline + area** ("Sara · Pilates · Berlin Mitte")
- **Portrait of the instructor** mid-class or in the studio (not posed in front of a generic background)
- **ONE primary CTA** — "Book first class" with offer ("50% off intro week" visible)
- **Phone number visible below CTA** for non-online bookers
- **Certifications signature line** — "Yoga Alliance RYT-500 · 8 years teaching"
- **Languages spoken** for international markets

---

## 4. Photography direction

### Universal studio rules

- **The subject is the class in motion.** Not a static gym, not a posed instructor — the experience of attending. Real class, real members, mid-movement.
- **Lighting matters per archetype.** A wants dramatic + cinematic. B wants bright + accessible. C wants soft + atmospheric. D wants real-room natural light.
- **Diversity is intentional, not Photoshopped.** Show the actual community that attends.
- **Avoid the "fitness model alone in empty gym" stock pose.** Studios are communal; show the community.
- **Class photography over equipment photography.** Photos of empty weights / yoga mats / treadmills are less compelling than photos of those things in use.

### Per-archetype photography notes

| Archetype | Photo style |
|-----------|------------|
| A — Premium | Dark cinematic interiors · aspirational portraits · fashion-magazine grade · soft warm light through windows · selective focus |
| B — Mass-Market | Bright daylight gym interiors · real members in mid-workout · varied body types visible · genuine smiles · color-saturated |
| C — Boutique | Atmospheric class in session · soft-focus moments · candlelight or steam (yoga / sauna) · sensory mood · slight blur acceptable |
| D — Solo Instructor | One real photo of the instructor in their actual studio · class in progress (with member consent) · authentic warmth |

---

## 5. Typography pairings

### What works in studio

Studio is the vertical with the **widest typography vocabulary** — premium clubs use serif editorial, value gyms use bold sans, boutique studios use italic serif emphasis.

**Tier 1 pairings:**

| Display | Body | Archetype fit |
|---------|------|---------------|
| **GT Sectra / Domaine Display** (premium serif) | **Söhne / GT America** | A — premium editorial |
| **Inter / Söhne** (bold uppercase) | **Inter** | B — mass-market value (utility-led) |
| **Fraunces** (italic emphasis) | **Inter / Manrope** | C — boutique sensory (italic for the brand voice) |
| **Fraunces / Tiempos** (regular) | **Inter** | D — solo instructor (warm, professional, no shouting) |

**Operating rules:**

- **Italic emphasis is the Archetype C signature** — "all-the-*timers*" / "every *feeling*" — commit to it if you choose C
- **No cursive script anywhere in studio.** Even boutique studios should avoid wedding-invitation parody.
- **Tabular figures for class times, prices, and schedules** — class schedules look broken if "7:00" and "10:00" don't align
- **Display sizes can be aggressive** in Archetype A (Equinox uses 80+ pt for headlines). For C, restrain to 48-60 pt to preserve the sensory mood.

---

## 6. Color archetypes

### Archetype A — Premium Editorial Luxury

| Direction | Palette | Mood |
|-----------|---------|------|
| **Dark club** | Near-black bg / cream text / brass accent | Equinox — luxury performance |
| **Charcoal modern** | Charcoal bg / off-white text / single saturated accent (oxblood, deep teal) | Premium urban gym |
| **Forest premium** | Deep forest bg / cream text / brass accent | Wellness club / mountain resort |

### Archetype B — Mass-Market Value Conversion

| Direction | Palette | Mood |
|-----------|---------|------|
| **Yellow + black** | White bg / black text / bright YELLOW CTAs | Smart Fit — accessible, energetic |
| **Purple + magenta** | White bg / dark purple text / magenta accent | Planet-Fitness-style mass-market |
| **Red + navy** | White bg / navy primary / red CTAs | Sporty utility, traditional fitness |

### Archetype C — Boutique Atmospheric

| Direction | Palette | Mood |
|-----------|---------|------|
| **Sensory purple** | Deep purple / lavender / cream | Hotpod Yoga — immersive sensory |
| **Spa green** | Sage / cream / soft gold | Pilates / wellness studio |
| **Studio blush** | Blush pink / cream / dark espresso | Modern feminine yoga / barre studio |
| **Charcoal restraint** | Charcoal / bone / single warm accent | Modern boxing or martial-arts boutique |

### Archetype D — Solo Instructor

| Direction | Palette | Mood |
|-----------|---------|------|
| **Warm minimal** | Cream bg / dark brown text / single warm accent | Approachable, "your instructor next door" |
| **Studio earth** | Off-white bg / dark green text / clay accent | Yoga / pilates with sustainability angle |
| **Clean modern** | White bg / dark navy text / muted blue accent | Personal trainer, professional |

**Rules:**

- **No pure red as the dominant brand color** for studio (red signals urgency / fitness-magazine energy that's wrong for most studio archetypes outside Archetype B)
- **Boutique studios should pick a SINGLE atmospheric color and commit** — purple, sage, blush, or charcoal. Two-color boutique palettes look indecisive.
- **Solo instructor (D) should NOT use bright accent colors.** "Your trusted yoga teacher" doesn't shout in lime.

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette," when the prospect has no brand guide, no studio signage, no consistent IG color grade — the palette falls to the vertical-default tier. Studio splits by **sub-archetype** because a solo yoga instructor, a HIIT boutique, and a mass-market gym demand completely different visual codes. **For ~70 % of agency studio clients (Solo Instructor / Single Studio, Archetype D), pick the sub-archetype by discipline:**

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Solo yoga / pilates instructor** (Archetype D — the agency default) | Cream + sage + warm terracotta | `--color-bg: #faf6ef` (cream)<br>`--color-text: #2a2620`<br>`--color-accent: #6b8071` (sage)<br>`--color-secondary: #b15c2e` (warm terracotta, sparingly)<br>`--color-border: #e5dfd0` | Reads "grounded, mindful, breathwork." Sage is the yoga-studio standard without going full mint-cliché. Terracotta secondary signals "warm body movement" — drop into thumbnail icons or breathwork-section heading. |
| **Solo personal trainer / strength coach** (Archetype D — more energetic) | Off-white + charcoal + signal yellow | `--color-bg: #fafaf8`<br>`--color-text: #1a1a1a` (charcoal)<br>`--color-accent: #f59e0b` (signal yellow — energy)<br>`--color-border: #e3e3df` | More energetic than yoga, less aggressive than mass-market gym. Yellow accent reads "let's go" without shouting. Works for a 1:1 trainer brand where the body of the client is the proof. |
| **Solo dance / movement instructor** (Archetype D — performance specialty) | Soft black + bone + dusty rose | `--color-bg: #f5f1ec` (bone)<br>`--color-text: #1a1418` (soft black)<br>`--color-accent: #c6927e` (dusty rose)<br>`--color-border: #ddd6cd` | Performance-art register. Bone-on-soft-black reads "stage, intentional, expressive." Dusty rose lifts it from austere to inviting. Works for ballet, contemporary, ballroom, jazz. |
| **Boutique sensory studio** (Archetype C — Hotpod / barre / sound bath / specialty) | Single deep saturated brand color + cream + brass | `--color-bg: #faf5ed` (cream)<br>`--color-text: #2a1f17`<br>`--color-accent: #6b1f3a` (deep wine — or whatever brand color the studio commits to: emerald, deep purple, oxblood)<br>`--color-secondary: #b8946a` (brass, sparingly) | Boutique studios live on a single deep brand color (Hotpod's pink, a hot-yoga's saturated coral, a sound-bath's deep purple). Pick the deep color first, build cream + brass around it. The deep color is non-negotiable; pick it before any other tokens. |
| **Mass-market gym chain** (Archetype B — Smart Fit / Planet Fitness / PureGym) | High-saturation primary + white + black | `--color-bg: #ffffff`<br>`--color-text: #0a0a0a`<br>`--color-accent: #facc15` (Smart Fit yellow — or whatever the chain commits to)<br>`--color-secondary: #1a1a1a` (deep black for energetic contrast)<br>`--color-border: #e5e5e5` | High-contrast value-conversion register. The single high-saturation primary is the brand — yellow (Smart Fit), purple (Planet Fitness), red (Basic-Fit). Pure white acceptable; mass-market gyms optimize for visual loudness over warmth. |
| **Premium luxury studio** (Archetype A — Equinox / Barry's) | Near-black + bone + brushed brass | `--color-bg: #1a1a1a` (near-black)<br>`--color-text: #ebe2d3` (bone)<br>`--color-accent: #c89a4f` (brushed brass)<br>`--color-border: #2a2a2a` | Premium-fitness register. Dark-mode by design. Brass-not-gold avoids the cheap-luxury trap. Works only when the venue itself has the aesthetic (Equinox-grade lighting, real photography). Wrong choice for a strip-mall pilates studio claiming premium. |

**How to pick the sub-archetype:** Use the archetype matrix in `templates/studio.md` §1 (A / B / C / D) first. Then the discipline itself. A solo yoga instructor and a solo strength coach are both Archetype D but get nothing wrong by sharing zero accent colors — *the energy level of the discipline determines the right palette*. Yoga is calm (sage); strength is direct (yellow); dance is expressive (rose).

**Mass-market and boutique chains:** if the prospect is a franchisee of an existing chain (Anytime Fitness, F45, Pure Barre, etc.), the chain brand colors are non-negotiable. Sample from the franchise brand guide (priority 1) — these defaults don't apply.

**These are starting points, not deliverables.** Once tokens are in `tokens.css`, sample the client's actual class photography against the bg color — a yoga photo against a saturated purple bg creates optical clashes that sage avoids. Document the source tier in `design.md` §"Color tokens."

---

## 7. Copy voice cues

### What to say

- **The class types explicit** — "Vinyasa Flow / Yin Yoga / Restorative" beats "Various yoga classes"
- **Class duration** — "60-minute classes / 75-minute Power" — buyers plan their day
- **Skill level matrix** — "All levels welcome / Beginner-friendly / Advanced practitioners only"
- **What to bring / wear** — "Bring a mat or rent one for €2 / Wear comfortable, non-restrictive clothing"
- **First-time offer prominent** — "First class free / 50% off intro week / Try us for 7 days"
- **Pricing transparency** — drop-in / 10-class pack / unlimited monthly, three tiers visible
- **Instructor credentials** — "Yoga Alliance RYT-500 / Pilates Method Alliance certified / 10 years teaching"
- **Real testimonial quotes** with first name + photo where consented
- **Schedule preview** — "Classes daily, including 7am and 7pm slots"

### What never to say

- "Transform your life!" (vague + pressure-led)
- "Get the body you've always wanted!" (body-shaming undertone)
- "Limited spots available!" with exclamation marks (false urgency)
- "All fitness levels welcome" without saying HOW (specifics matter)
- "Award-winning instructors" without naming the award
- "Years of experience" without the number
- "Family of fitness" / "Our gym family" (generic and corny)
- "Find your zen" / "Feel the burn" / "Crush your goals" (cliché copy)
- Generic "Welcome to [Studio Name]" as h1

---

## 8. Studio-specific anti-patterns

Beyond the generic anti-slop in `DESIGN-BEST-PRACTICES.md`:

| Anti-pattern | Why it's a tell | Fix |
|--------------|----------------|-----|
| **Stock fitness model alone in empty gym** | The single most overused stock image in studios. Universally fake. | Real photo of real class with real members (with consent). Phone photo beats stock. |
| **"Crush your goals" / "Find your zen"** in hero copy | Cliché copy across thousands of fitness sites | Specific positioning: "60-minute Mat Pilates classes for office workers" / "Hot yoga in a 40°C immersive pod" |
| **Pricing hidden behind "Contact us"** | Costs leads — fitness buyers comparison-shop on price | Publish at minimum the drop-in / monthly tier. Premium clubs (Archetype A) can hide details but should show entry price |
| **Schedule on a separate page with no preview** | Buyers want to know "can I come Wednesday at 7am" before clicking | Show this week's schedule preview on the homepage, even if abbreviated |
| **"Cancel anytime, no commitment"** as the lead | Defensive selling | Lead with what you offer, not what you don't lock in |
| **No first-class offer visible** | Industry standard; absence signals weak conversion focus | Surface "First class free" or intro-week pricing prominently |
| **Carousel of 5 different "transformation" before/after shots** | Diet-and-fitness-industry sketchy | Skip transformation photos entirely OR use real consented client stories with full text testimonials |
| **Generic "expert instructors" with no names or photos** | Vague | Real instructor portraits + names + certifications |
| **Class names with empty hype** ("EXTREME BURN" / "POWER CRUSH") | Mass-market gimmick | Specific class names: "Hot Vinyasa 60", "Reformer Pilates", "Strength + Conditioning" |
| **App promotion as the primary hero CTA** | Buyers are evaluating the GYM, not the app | Class booking is primary; app promotion is secondary block |
| **"Free trial!"** when there's a credit-card requirement | Bait-and-switch perception | Either truly free (no CC required) or "First class €5, no commitment" — honest positioning |
| **Equipment list as the brand pitch** ("We have Peloton bikes, treadmills, free weights...") | Equipment commodity; experience is the brand | Mention notable equipment as a credential, but lead with the class experience |
| **"Open 24/7"** prominently for a boutique studio | Mismatched signal — 24/7 is a value-gym position | Mass-market only. Boutique studios should show schedule, not all-hours access |

---

## 9. Reference site annotations

### 9.1 Equinox — `equinox.com` (Archetype A)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **"It's Not Fitness. It's Life."** brand tagline — positioning at the lifestyle level, not the activity level. Equinox is selling a way of being, not a gym membership.
- **Dark cinematic photography** of club interiors and aspirational member portraits. The photography alone tells you it's premium before any price is mentioned.
- **"THE EQUINOX SALE"** with explicit dollar commitment ($X off, X months of free X) — even premium clubs use promotional anchoring, just rendered in restrained type
- **"Where Luxury and Fitness Meet"** positioning block — the brand is explicit about hybrid luxury+fitness identity
- **Signature Classes** — premium class taxonomy as a differentiation lever
- **The Spa at Equinox** — adjacent-service positioning expands beyond the gym
- **Equinox+ (digital subscription)** — companion product, signals scale and reach beyond physical clubs
- **Member referral mechanic** ("Refer a friend") — community-led acquisition
- **Newsletter with full first/last name + zip fields** — premium conversion data capture (vs Smart Fit's anonymous email)
- **Dark restrained footer** — corporate without being shouty

**What we'd borrow:**

- The brand-tagline-over-feature headline pattern for premium clients
- The "adjacent service" positioning (spa, app, training) for studios with multiple offerings
- The restrained editorial photography style when the client can afford it

**What we wouldn't:**

- The aggressive sale banner — Equinox can survive this; small studios cheapen themselves by mimicking
- The full app product line — small studios don't have an app to promote

### 9.2 Smart Fit — `smartfit.com.br` (Archetype B)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **"Seu corpo é mais do que um número na balança"** — body-positive hero copy. Modern fitness positioning that explicitly rejects diet-culture vocabulary.
- **Location finder embedded in hero** with city search — "where do you train?" answered immediately
- **"Maior rede de academias da América Latina"** — scale heritage signal as a trust mechanism
- **Three pricing plans grid** with full feature bullets — Plano Black / Plano Fit / Plano Smart, each with its own INSCREVER-SE CTA. Transparency wins.
- **"Smart Fit Body"** named program — value plan with a named identity rather than just generic membership
- **3-card "Experiência Smart Fit"** — actual gym interior photos (real lighting, real equipment, no stock models)
- **App promotion** with download buttons + 3 bullet features — companion app integration
- **3-card "Additional products and services"** — upsells (apparel, programs, personal training) — gym-as-platform positioning
- **Yellow + black palette** — accessible, energetic, mass-market signal
- **"Smart Fit News"** content cards — content marketing as engagement layer
- **Dark footer** with extensive corporate hierarchy

**What we'd borrow:**

- The three-pricing-plans grid pattern with feature lists per plan — works for any subscription-led studio
- The hero location-finder for any multi-location studio
- The body-positive hero copy framing — modern fitness language

**What we wouldn't:**

- The full upsell-stack (apparel, programs, personal training as separate products) — overkill for small clients
- The scale heritage signal if the client isn't actually the largest

### 9.3 Hotpod Yoga — `hotpodyoga.com` (Archetype C)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **Deep purple + lavender + cream palette** — sensory immersive feel, signals the heated-pod yoga experience visually
- **Dual hero statement** — "For yoga first-timers. / And yoga all-the-timers." — addresses two audiences at once with italic emphasis
- **Atmospheric photography** with slight blur — sensory, dream-like, hot-yoga-pod aesthetic
- **Sensory copy** — "A yoga class that takes your million miler from the everyday right to your doormat" — feeling-led, not feature-led
- **3-card class taxonomy** with icons + names + brief descriptions
- **Customer testimonial pull-quotes** in italic — community voice
- **"A class for every level. A flow for every feeling."** — secondary positioning statement, intent-led
- **"Calm minds. Heads for business."** — corporate / B2B angle
- **"Get qualified the Hotpod way."** — teacher training as a sub-product, franchise expansion mechanic
- **"Your Hotpod feeling, on your phone."** — app promo with download buttons
- **Soft pill CTAs** — never urgent, always inviting

**What we'd borrow:**

- The dual-statement hero pattern ("For [type 1]. / And [type 2].") for studios with multiple audience segments
- The italic-emphasis brand voice for any sensory / immersive studio
- The class taxonomy as a homepage section pattern
- The "feel" copy approach — describing the experience, not the workout

**What we wouldn't:**

- The teacher-training callout for a non-franchise studio
- The full atmospheric photography production for clients with iPhone-quality assets

---

## 10. Decision matrix — picking the archetype per client

| Question | If yes → | If no → |
|----------|----------|---------|
| Is the client a single instructor or 2-person studio? | **Archetype D** (default for most agency studio clients) | Continue |
| Does the client position as premium / luxury / lifestyle? | Archetype A — premium editorial | Continue |
| Does the client run 3+ locations with subscription tiers? | Archetype B — mass-market conversion | Continue |
| Does the client have a sensory/immersive distinctive experience (hot yoga, sauna+yoga, contrast therapy, sound bath, etc.)? | Archetype C — boutique atmospheric | — |
| Is the client a yoga / pilates / barre boutique? | Usually C or D | — |
| Is the client a CrossFit / HIIT / boxing gym? | Usually B (value chain) or D (single box) — rarely A | — |
| Is the client a corporate gym / wellness program? | Archetype B with corporate B2B angle | — |
| Does the client offer teacher training / certifications? | Archetype C (franchise expansion) | — |

**The agency's reality:** ~70 % of studio clients in Berlin / Lisbon / Brazil will be Archetype D (solo instructor or 2-person studio). ~20 % will be Archetype C (boutique yoga / pilates / barre / hot studios with distinctive sensory positioning). ~10 % Archetype B (small-chain budget gyms). Archetype A is mostly aspirational — premium clubs rarely hire a small agency.

---

*The vertical template is a moodboard. The per-client `design.md` is the choice. Never copy the layout — copy the discipline.*

---

## 11. Measurement — KPIs that matter for Studio

**Applies to:** every retainer-tier studio client at production cutover. KPI framework, naming convention, and per-tier stack selection live in `KPI.md`; this section picks the 3–5 KPIs that matter most for fitness studios, yoga/pilates/barre boutiques, and CrossFit boxes and how they wire.

### 11.1 Product KPIs

| # | KPI | Bucket | Source | Target / benchmark |
|---|-----|--------|--------|---------------------|
| 1 | Trial → paid conversion (free/intro class → first paid class or membership) | Conversion | PostHog funnel (Tier 3) + Mindbody/ClassPass platform data | ≥ 40% trial-to-paid |
| 2 | Class-fill rate (booked spots ÷ available spots) | Conversion (business) | Mindbody / Glofox / Booksy | ≥ 75% prime time, ≥ 50% off-peak |
| 3 | MRR (Monthly Recurring Revenue) | Conversion (business) | Mindbody / Stripe subscriptions | Track trend — flat-to-down for 2mo = retainer escalation trigger |
| 4 | Member retention (active month-over-month) | Retention | PostHog cohort + Mindbody data | ≥ 85% MoM for established cohorts |
| 5 | Mindbody/ClassPass/Glofox handoff rate (booking platform click rate) | Conversion | GA4 `booking_started` | ≥ 6% of sessions |

### 11.2 Per-tier stack

| Tier | Tools active | What it measures |
|---|---|---|
| Tier 1 + booking deep-link only | GSC + Clarity + GA4 | KPIs #5 (booking platform owns #1, #2, #3, #4) |
| Tier 2 (Astro — most common for solo instructors) | GSC + Clarity + GA4 | KPI #5 + booking-platform data for #1-#4 |
| Tier 3 (studio with own booking + member portal) | GSC + Clarity + GA4 + PostHog + Sentry + Stripe | All 5 KPIs with cohort retention via PostHog |

### 11.3 Dashboard tiles

**GA4:** conversions by event (`booking_started`, `trial_signup_completed`) · top landing pages (schedule page vs home) · source/medium for trial signups · device split.

**Clarity:** heatmaps on schedule + class detail + instructor profiles · scroll depth on long-form pricing/membership pages · recordings filtered to trial-form abandonment.

**PostHog (Tier 3):** trial → paid funnel · monthly retention cohort table · class-fill heatmap (day × time) · member-LTV ranking by acquisition source.

### 11.4 Vertical-specific event names

| Event | Fires when | Required params |
|---|---|---|
| `booking_started` | Mindbody/ClassPass/Glofox deep-link clicked OR own booking modal opens | `provider` (`mindbody` / `classpass` / `glofox` / `direct`), `class_slug`, `source_section` |
| `trial_signup_started` | Trial-class form first field focused | `trial_type` (`intro_class` / `free_week` / `private_consult`), `source_page` |
| `trial_signup_completed` | Trial form submitted (200 from endpoint) | `trial_type`, `class_slug` |
| `class_viewed` | Class detail section enters viewport | `class_slug` (`hatha_yoga`, `crossfit_strength`, etc.), `instructor_slug` |
| `instructor_profile_viewed` | Instructor profile section enters viewport | `instructor_slug` |
| `pricing_viewed` | Pricing/membership table section enters viewport | `source_page` |

### 11.5 Pre-launch verification

- [ ] All KPIs in §11.1 mapped to wired events in BRIEF.md KPI contract
- [ ] Booking-platform UTMs preserved across handoff
- [ ] Class-slug and instructor-slug values match booking-platform IDs (allows joined analysis)
- [ ] Trial form payload never serializes student name/email into analytics events
- [ ] PostHog EU region selected for DE/PT clients
- [ ] Run `CHECKLIST.md` §Operational tests for cookie banner + Sentry PII + KPI wiring

### 11.6 Integrations applicable to Studio

Per `INTEGRATIONS.md`. Tier-driven defaults plus vertical-specific:

| Integration | When (tier) | Vertical-specific notes |
|---|---|---|
| **Booking platform** (Mindbody / ClassPass / Glofox / Booksy) | Every tier — deep-link primary | Per `DESIGN-BEST-PRACTICES.md` booking-platform tier-3 elevation. UTM-preserve handoff. |
| **Resend** | Type 2+ (own trial-signup confirmation) | Confirmation + calendar `.ics` for trial class. Booking platform owns confirmations for paid bookings. |
| **Sentry** | Tier 2+ (full SDK) | Standard agency setup |
| **PostHog** | Tier 3+ (own booking + member portal) only | Trial-to-paid funnel, monthly retention cohort, class-fill heatmap |
| **Neon** | Tier 3+ — studios with own booking DB | Members table, bookings table, attendance records (encrypted PII) |
| **Upstash** | Tier 2+ trial-signup form | Rate-limit 10/60s (studios get class-launch traffic spikes) |
| **Stripe** | Tier 3+ Type 4 — membership subscriptions | Subscription billing for studios with own membership system; SEPA + Pix per jurisdiction |

### 11.7 Share strategy

Per `SOCIAL-SHARING.md` §Per-vertical share strategy: **High leverage**.

- **Default targets:** WhatsApp + Instagram + Copy-link + (optional) Facebook
- **IG embed recommended:** ✅ Yes — class atmosphere, transformations, instructor moments drive shares
- **Placement:** inline in class-detail pages · sticky bottom-of-page share on mobile · footer fallback
- **OG image priority:** real class-in-session photo at 1200×630 (with consent). NOT stock fitness models.
- **WhatsApp share copy:** "[Studio name] — [discipline] in [neighborhood]. Try a class." — invite framing, under 80 chars

### 11.8 Schema.org variants

Use the most specific subtype:

- `ExerciseGym` — generic gym
- `YogaStudio` — yoga-focused
- `SportsActivityLocation` — generic fallback
- `HealthClub` — full-service club with multiple disciplines

```json
{
  "@context": "https://schema.org",
  "@type": "YogaStudio",
  "name": "[Studio name]",
  "address": { ... },
  "geo": { ... },
  "telephone": "+...",
  "openingHoursSpecification": [...],
  "potentialAction": { "@type": "ReserveAction", "target": "https://[mindbody URL]" },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Changing rooms" },
    { "@type": "LocationFeatureSpecification", "name": "Showers" },
    { "@type": "LocationFeatureSpecification", "name": "Mat storage" }
  ],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": 120 }
}
```

### 11.9 GBP category + keyword pattern

- **GBP primary category:** `Yoga studio` / `Gym` / `Pilates studio` / `Barre studio` / `CrossFit gym` (pick most specific)
- **GBP secondary categories:** related disciplines (a yoga studio may add `Meditation center`, `Pilates studio` if cross-discipline)
- **Per-jurisdiction GBP attributes:** wheelchair-accessible, online appointments, LGBTQ+-friendly, free trial available
- **Keyword pattern (DE):** `[discipline] [stadtteil]` · `[discipline] studio in [bezirk]` · `[discipline] probestunde [stadt]`
- **Keyword pattern (BR):** `[modalidade] em [bairro]` · `aula experimental [modalidade] [cidade]`
- **Keyword pattern (PT):** `[modalidade] em [cidade]` · `[modalidade] aula experimental [bairro]`
- **Example:** "Yoga Mitte" · "Pilates Probestunde Charlottenburg" · "Yoga em Copacabana"
