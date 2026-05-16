# pets.md — Pets Vertical Template
## Veterinary · Grooming · Daycare · Boarding · Training · Pet Retail

**Applies to:** Pets clients across product types 1–4 (per `TECH.md` §1). Vet/grooming/daycare are close architectural relatives of `templates/health.md` (Solo Practitioner) and `templates/beauty.md` (Service Chain) — adapt those IA patterns to pet-specific photography + vaccination/health-requirement displays. Pet retail with ecommerce is Type 4 (different stack tier — usually Tier 3 Next.js).

**Reference research:** Based on `local_business_website_benchmark_report.md` §7.9 (Petz, Cobasi, Petlove, Seres, Petco, PetSmart, Banfield, VCA, Bond Vet, Pets at Home, zooplus, Fressnapf, AniCura, Medivet).

**Use this doc as a moodboard with principles, not a layout to clone.** If two clients in the same vertical end up with the same hero pattern, the template has failed at its job — the pattern is correct, but the visual execution must differ.

---

## Rules at a glance

- **The product is the relationship between humans and their pets.** Photography that shows pets without humans (or vice-versa) misses the emotional core. Photography of stiff, posed pets reads like stock and kills trust faster than placeholders.
- **Pick one of four archetypes** before designing: **Premium Vet Network**, **Pet Retail/Services Chain**, **Solo Vet / Single-Location Groomer**, or **Daycare/Boarding/Training**. ~75 % of agency Pets clients fall into Solo Vet or Single-Location Groomer.
- **The booking flow is the conversion path.** For vets: appointment scheduling. For groomers: appointment + size/breed pre-screening. For daycare: vaccination upload + trial day booking. For retail: cart / subscription.
- **Vaccination and health requirements are load-bearing trust signals** for daycare/boarding/grooming. Surface them above the fold; hiding them creates friction during booking.
- **Emergency contact is mandatory** for vet clients. After-hours emergency line OR explicit "Closed — emergency? Call [number]" must be visible.
- **Avoid stock pet photography.** Generic golden retriever in a field is the loudest tell. Real customer pets, real owner-pet moments, even smartphone-quality, beat stock.
- **Pricing transparency reduces lead-time.** Pet-services buyers comparison-shop. "Starting from $X" or full menu published beats "Contact for quote."

### Solo-Operator meta-archetype (cross-vertical pattern)

Most agency Pets clients (single-vet clinic, single-chair groomer, owner-operated daycare) are the Pets-specific implementation of the **Solo-Operator meta-archetype** in `DESIGN-BEST-PRACTICES.md` §3. The IA recurs across trades/health/studio/beauty/professional-services:

- Operator name in headline ("Dr. Maria Santos — Veterinária em Icaraí")
- Portrait of the operator with a pet (theirs or a customer's, with consent)
- ONE primary CTA (book appointment / WhatsApp / call)
- Credentials signature line (CRMV # / RCVS # / Tierärztekammer Zulassung + years + specialties)
- Service list (5–10 services, not a card grid)
- Vaccination requirements + intake form linked
- Service area named explicitly
- Pricing reassurance (consultation starting price)
- Footer with legal info + practice registration #

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Pets-specific:** customer pet photos are the strongest asset but require **written consent** for any photo that includes a pet's name, breed, or owner. Booking platforms (Petlove · Cobasi-style local platforms) are tier 3 alternatives. Instagram is tier 4 — pet salons/vets post daily, manual download works.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 — 6-tier color source hierarchy. Pet brands often have *no formal brand*; vertical-default tier 5 is common.
- **Prospect intake template:** `CHECKLIST.md` §9.

---

## Table of contents

1. [The four Pets archetypes](#1-the-four-pets-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Pets-specific anti-patterns](#8-pets-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The four Pets archetypes

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Premium Vet Network** (Bond Vet, AniCura, Banfield) | Modern brand, warm clinical confidence, multi-location convenience | Book appointment | Medium — clean palette + real photography + booking integration |
| **B. Pet Retail/Services Chain** (Petz, Cobasi, Petco, PetSmart, Pets at Home) | Product/services ecosystem, loyalty, omnichannel | Shop / Find a store / Book services | High — full ecommerce + store finder + service booking |
| **C. Solo Vet / Single-Location Groomer** (the agency's default Pets client) | Operator credibility, real animals, single-location intimacy | Book appointment / WhatsApp | Low — Tier 2 build with real customer-pet photos |
| **D. Daycare / Boarding / Training** | Safety, trust, parent-of-pet reassurance | Schedule trial day / Inquire | Medium — gallery-first + vaccination intake + trial-day flow |

**Default for new Type 1/2 clients:** Archetype C. Archetype A is mid-tier+; B requires real ecommerce; D requires real facility photos.

---

## 2. Information architecture per archetype

### Archetype A — Premium Vet Network

1. **Hero** — photo of a pet with a real vet (consent-cleared) + headline ("Modern veterinary care, designed around your dog"). ONE CTA ("Book your visit").
2. **Service categories** — Wellness / Sick visits / Surgery / Dental / Specialty. Each as a card with start-price.
3. **Locations map** — clinics on a map + filterable list.
4. **Wellness plans** — subscription/membership tier card grid (monthly plans for routine care).
5. **Vet profiles** — directory with photos + bios + specialties + languages.
6. **Trust signals** — accreditation badges (AAHA in US, equivalent EU), insurance partnerships, customer reviews.
7. **Footer** — Impressum/legal + careers + emergency line.

### Archetype B — Pet Retail/Services Chain

1. **Hero** — promotional banner (seasonal offer) + product carousel.
2. **Category navigation** — Dog / Cat / Bird / Fish / Reptile — with subcategories.
3. **Services strip** — Grooming / Vet / Training / Daycare / Pharmacy as service cards.
4. **Subscription/auto-ship** — "Save 10% on repeat orders" — Chewy/Petlove pattern.
5. **Loyalty program** — earn-and-redeem rewards.
6. **Store finder** — for omnichannel chains.
7. **Help center + footer** — full ecommerce chrome.

### Archetype C — Solo Vet / Single-Location Groomer (the agency's default)

1. **Top bar** — phone + WhatsApp + (vets) emergency line.
2. **Hero** — photo of the vet/groomer with a customer pet (consent-cleared) + headline naming the operator + specialty + city. ONE CTA ("Book appointment" / "Agendar pelo WhatsApp").
3. **Credentials signature line** — CRMV # / Tierärztekammer Zulassung · years · specialties · spoken languages.
4. **Services + prices** — typography list (not card grid). For groomers: list breeds/sizes with starting prices.
5. **About / Bio** — single paragraph + portrait. "Why this clinic, this groomer, why now."
6. **Vaccination requirements** (for groomers, daycare, boarding) — clear list with intake-form link.
7. **Reviews / testimonials** — 3–4 verbatim quotes (Google reviews typical).
8. **Visit / hours** — address + map link + hours.
9. **Footer** — Impressum/Política/legal + practice registration # + emergency contact reminder.

### Archetype D — Daycare / Boarding / Training

1. **Hero** — photo of pets *playing together* in the facility + headline ("Where your dog actually wants to be") + ONE CTA ("Schedule trial day").
2. **Facility gallery** — large photo grid of indoor + outdoor play areas, sleeping crates, eating area. Real facility, no stock.
3. **Daily schedule** — "Here's what a day looks like." Walks · play · meals · rest. Builds parent-of-pet confidence.
4. **Requirements** — vaccination + temperament test + age + spay/neuter status. Visible early, not buried.
5. **Pricing + packages** — day rates + multi-day discounts + monthly memberships.
6. **Staff profiles** — handlers + trainers + on-site vet if available.
7. **Trial-day flow** — booking form with pet name + breed + photo upload + vaccination upload.
8. **Reviews + photos from real customers** — Instagram-style social proof.
9. **Footer** — Impressum/legal + emergency contact.

---

## 3. Hero patterns

### Archetype A — Modern vet network

- Photo of a relaxed pet with a real vet in scrubs (not white-coat-stock).
- Eyebrow: "Modern Veterinary Care" or campaign name.
- Headline: warm but clinical ("Care designed around your dog").
- ONE CTA: "Book your visit" — primary brand color, large.

### Archetype B — Retail/services chain

- Hero rotator (seasonal offer / new product / loyalty signup).
- Headline matches current campaign.
- CTA varies: "Shop now" / "Find a store" / "Join Rewards."

### Archetype C — Solo vet / groomer

- Photo of the operator + pet (real customer pet with consent).
- Headline names the operator + specialty + city ("Dr. Maria Santos — Veterinária em Icaraí").
- Eyebrow: city or neighborhood + "Desde [year]."
- ONE CTA: "Agendar pelo WhatsApp" / "Book appointment."
- Credentials signature line below.

### Archetype D — Daycare/boarding

- Photo of pets playing together (group shot, real facility).
- Headline addresses pet-parent anxiety: "Where your dog actually wants to be" / "A second home for your pet."
- ONE CTA: "Schedule trial day."

---

## 4. Photography direction

### Universal Pets rules

- **Real pets only.** Customer pets with consent. No stock golden retrievers in fields, no stock fluffy white cats on white backgrounds.
- **Pets + humans together.** The emotional product is the relationship. A pet alone reads as catalog inventory; pet + owner reads as care.
- **Operator + pet** is the highest-leverage portrait. Vet examining a dog. Groomer at the clipper. Trainer with a leash.
- **Real facility, real lighting.** Even iPhone photos beat staged studio shots. Real exam room, real grooming station, real play yard.
- **Consent in writing** for any photo with a recognizable pet (breed + collar + tag visible). Customer pet photos require photo release.

### Per-archetype photography notes

| Archetype | Photo style |
|---|---|
| A — Premium vet network | Editorial pet portraiture · vet-with-pet candid · clean clinic interior · consent-cleared customer pets |
| B — Retail/chain | Product photography (clean, white-bg ecommerce-standard) + lifestyle photography (pets using products in homes) — clearly separated, not mixed |
| C — Solo vet/groomer | One environmental portrait (operator + customer pet) + one tight portrait (operator alone). Real customer pets — consent. |
| D — Daycare/boarding | Facility gallery: indoor play, outdoor play, sleeping crates, eating area. Pets *together* and *moving* — energy, not static. |

---

## 5. Typography pairings

### What works in Pets

| Pairing | Display | Body | Mood |
|---|---|---|---|
| **Premium vet warmth** | Source Serif Pro · Tiempos | Inter | Modern vet (Bond Vet) — clinical but warm |
| **Solo vet/groomer** | Fraunces · Cormorant | Inter / Manrope | Standard solo — warm professionalism |
| **Retail playfulness** | Inter Display / Söhne | Inter | Retail chain — high legibility, friendly |
| **Daycare/boarding fun** | Fraunces or Recoleta | Manrope | Approachable warmth, kid-and-pet-parent feel |

### Rules

- **Never Comic Sans, never Curlz, never Quicksand.** Pet vertical attracts cute-typography clichés. Resist.
- **Avoid script fonts.** "Pawfect Pet Salon" in scriptface is the visual equivalent of nails on a chalkboard.
- **Cap to two font families.** Display + body.

---

## 6. Color archetypes

### Archetype A — Premium Vet Network

| Direction | Palette | Mood |
|-----------|---------|------|
| **Modern warmth** | Off-white bg / dark navy text / muted teal accent | Bond Vet · modern clinical warmth |
| **Heritage trust** | Cream bg / dark green text / warm brass accent | Established vet network |

### Archetype B — Retail/Services Chain

| Direction | Palette | Mood |
|-----------|---------|------|
| **Bright playful** | White bg / charcoal text / orange/yellow accent | Petz, Cobasi, Petco — friendly mass-market |
| **Trust-blue retail** | White bg / navy text / red accent | PetSmart-style chain |

### Archetype C — Solo Vet / Groomer (the agency's default)

| Direction | Palette | Mood |
|-----------|---------|------|
| **Warm vet cream** | Cream bg / dark coffee text / sage accent | Family-vet warmth |
| **Clinical sage** | Off-white bg / dark green text / sage accent | Standard solo vet |
| **Groomer warmth** | Cream bg / dark brown text / dusty rose accent | Pet salon / boutique groomer |

### Archetype D — Daycare/Boarding

| Direction | Palette | Mood |
|-----------|---------|------|
| **Playful daycare** | Cream bg / dark navy text / orange/coral accent | Friendly, energetic, "your dog will love it" |
| **Trust-led boarding** | Off-white bg / dark green text / warm gold accent | Premium boarding, calm + safe |

**Rules:**
- **Never bright pink for vet clients.** Reads bachelorette-party, not animal-health.
- **Never neon for any pet sub-archetype.** Pets vertical needs warmth, not energy-drink aesthetic.
- **One brand accent maximum.**

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5, when the prospect has no brand guide, no existing website, no signage to sample — fall to vertical-default tier. Pets splits by **sub-archetype**:

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Solo vet / family veterinarian** (Archetype C — agency default) | Cream + dark green + sage | `--color-bg: #faf7f0`<br>`--color-text: #1f2a23` (deep forest)<br>`--color-accent: #6b8a72` (sage)<br>`--color-border: #e3ddd0` | Green ties (subtly) to health/nature/growth. Warm cream avoids the cold clinical white that scares anxious pet parents. |
| **Solo groomer / pet salon** (Archetype C variant) | Cream + dark brown + dusty rose | `--color-bg: #faf6f0`<br>`--color-text: #2c1f1f`<br>`--color-accent: #c6927e` (dusty rose)<br>`--color-border: #e8ddd2` | Beauty-vertical-adjacent palette — softer, warmer, signals "pet salon as small luxury." Avoids the hot-pink trap. |
| **Daycare / boarding** (Archetype D) | Cream + dark navy + warm coral | `--color-bg: #faf7f0`<br>`--color-text: #1a2436`<br>`--color-accent: #d97757` (warm coral)<br>`--color-border: #e3ddd0` | Coral reads "energetic, playful, your dog will love it" without going neon. Navy text grounds the energy. |
| **Premium vet network** (Archetype A) | Off-white + dark navy + muted teal | `--color-bg: #f8faf9`<br>`--color-text: #1a2436`<br>`--color-accent: #4a8085` (muted teal)<br>`--color-border: #e0e5e3` | Bond Vet register — modern clinical warmth. Muted teal reads "wellness brand" without veering into spa-cliché. |
| **Pet retail/services chain** (Archetype B) | White + charcoal + bright accent | `--color-bg: #ffffff`<br>`--color-text: #1a1a1a`<br>`--color-accent: #ea580c` (bright orange — Petz-style)<br>`--color-border: #e5e5e5` | Mass-market friendly. Orange = friendly, accessible. Pure white acceptable for retail. |
| **Pet training / behaviorist** (Archetype C–D hybrid) | Cream + dark navy + warm taupe | `--color-bg: #faf6ef`<br>`--color-text: #1a2436`<br>`--color-accent: #a07a52` (warm taupe)<br>`--color-border: #e5ddd0` | Calm, professional, "patience and method" register. Avoids excitement colors — training is patient work. |

**How to pick:** Use archetype matrix first. Then specialty + customer-anxiety level. A solo vet treating sick pets needs calm-clinical (sage). A daycare welcoming healthy dogs needs energetic-friendly (coral). A premium grooming salon needs salon-warmth (dusty rose).

**These are starting points.** Sample existing business cards, signage, IG feed before committing. Document tier in `design.md` §"Color tokens."

---

## 7. Copy voice cues

### What to say

- **Address pet parents as parents.** "Your dog deserves..." / "We treat your cat like family." (Not over-the-top — measured warmth.)
- **Name the breed-specialty if applicable.** "Cat-friendly clinic" / "Large-breed specialist" / "Senior pet wellness."
- **Quantify experience or trust signal.** "10+ years caring for Icaraí's pets" / "200+ five-star reviews."
- **Emergency reassurance for vets.** "Mon–Fri 8–18. After hours: [emergency line]."
- **Vaccination requirements upfront for daycare/boarding/grooming.** Lists, not buried prose.

### What never to say

- ❌ "Pawfectly" / "Pawsome" / "Fur-ever" / "Doggone good." Cute-pet wordplay is universally cringe.
- ❌ "Our pets are family." Empty.
- ❌ "Premium pet care services." Generic.
- ❌ "Trust us with your furry friend." Performative.
- ❌ "Award-winning veterinary care" without naming the specific award.

---

## 8. Pets-specific anti-patterns

| Anti-pattern | Why it fails | Better |
|---|---|---|
| **Stock golden retriever / stock fluffy cat** | Universally fake; pet owners spot it instantly | Real customer pet with consent OR Placeholder |
| **Pet without human in the hero** | Misses the emotional product (the relationship) | Owner-pet or vet-pet pairing |
| **Cute-typography ("Pawfect Pet Salon" in script)** | Cringes at first read | Restrained serif or clean sans + warm copy |
| **"Schedule appointment" CTA with no booking flow visible** | Friction — buyer doesn't know what's behind the button | Show booking flow: pick service → pick date → pick time |
| **Vaccination requirements buried in FAQ** | Daycare/grooming bookings fail when requirements surprise the buyer | List requirements above the fold + intake form linked |
| **No emergency line for vet sites** | Pet parents arrive in panic — site without emergency contact loses trust instantly | Emergency line in top bar + footer reminder |
| **Generic stock playgroup photo for daycare** | Daycare buyers want to see *the actual facility* | Real facility photos OR Placeholder |
| **Pricing hidden behind "contact us"** | Pet-services buyers comparison-shop | Starting prices visible per service |
| **Endless trip through Cat / Dog / Bird / Reptile filter for solo vet** | Solo vet doesn't have 6 species silos | Match nav to actual practice (one or two species at most) |
| **Loyalty program for solo vet** | Out of scope; trust-builder is the operator | Skip; let referrals build naturally |

---

## 9. Reference site annotations

### 9.1 Bond Vet — `bondvet.com` (Archetype A — Premium Vet Network)

Strong premium vet benchmark. Modern brand. Warm tone. Booking flow + trust-building. Membership tiers.

**Borrow:** photography style (modern, consent-cleared customer pets) · membership card grid · vet directory with bios.

**Avoid:** Bond Vet is venture-funded multi-location; the IA assumes scale a solo vet doesn't have.

### 9.2 Seres — `seres.vet` (Archetype A — Brazilian Vet Network)

Strong BR vet benchmark. Online scheduling + emergency guidance + trust elements.

**Borrow:** scheduling UX · emergency-line prominence · BR voice + Portuguese accessibility.

**Avoid:** chain-scale features.

### 9.3 Petz — `petz.com.br` (Archetype B — Pet Retail/Services Chain)

Strongest BR retail/services pet benchmark. Ecommerce + stores + grooming + vet services + pet-health ecosystem.

**Borrow:** category navigation · service strip · loyalty/subscription flows.

**Avoid:** scope mismatch — Petz has 100+ stores; solo pet businesses can't pretend to that ecosystem.

### 9.4 AniCura — `anicura.com` (Archetype A — Pan-European Vet Network)

European vet-group reference. Scalable clinic + trust structure across multi-country.

**Borrow:** multi-language pattern · clinic-finder UX.

**Avoid:** organizational scale.

### 9.5 Medivet — `medivetgroup.com` (Archetype A — UK Vet Network)

UK vet network. Practice finder + services + emergency/out-of-hours routing.

**Borrow:** out-of-hours emergency routing pattern (24/7 emergency partnership disclosed).

**Avoid:** scale.

### 9.6 Inferred — Solo Vet / Single-Chair Groomer (Archetype C — the agency default)

No canonical worked example in §7.9 — the benchmark skews to chains. The IA for Archetype C is the cross-vertical **Solo-Operator meta-archetype** documented in `DESIGN-BEST-PRACTICES.md` §3 — same pattern as `templates/health.md` Archetype C, `templates/beauty.md` Old-school barber, `templates/professional-services.md` Archetype D. Adapt to Pets photography (real customer pets with consent) + species-specific vaccination/requirement displays.

---

## 10. Decision matrix — picking the archetype per client

| If the client is… | Pick archetype | Stack tier (per `TECH.md` §1) |
|---|---|---|
| Solo vet — 1 clinic, 1 primary vet | **C — Solo Vet** | Tier 2 · Type 2 (booking inquiry form) |
| Single-chair groomer / pet salon | **C — Solo Groomer** | Tier 2 · Type 2 |
| Daycare / boarding / training facility (1 location) | **D — Daycare/Boarding** | Tier 2 or 3 · Type 2 (with photo upload + vaccination intake) |
| Multi-location vet network (3–20 clinics) | **A — Premium Vet Network** | Tier 3 · Type 3 (booking DB) |
| Pet retail chain (with ecommerce + services) | **B — Retail/Services** | Tier 3 · Type 4 (transactional) |
| Trainer / behaviorist (services only, no facility) | **C variant** | Tier 2 · Type 1–2 |

**Default for agency cold-outreach prospects:** **Archetype C** (Solo Vet / Single-Location Groomer). The cross-vertical Solo-Operator meta-archetype + Pets-specific photography (real customer pets) + vaccination-requirement displays + emergency-line prominence = a defensible solo vet/groomer site at Tier 2, ~5–8 hrs of focused build.

---

*Pets is a trust-led vertical built on real animals + real owners + real operators. Skip the stock pets. Lead with the booking. Show the credentials.*
