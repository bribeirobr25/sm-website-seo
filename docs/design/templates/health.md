# health.md — Health Vertical Template
## Clinic · Dental · Physio · Aesthetic · Specialist Practice

**Applies to:** Health clients across product types 1–3 (per `TECH.md` §1). Most local health practices land at Type 1 (info + phone CTA) or Type 2 (info + appointment-request form).

**Reference audit:** 2026-05-13. Three sites analyzed at 1280 / 768 / 375 viewports — Mayo Clinic (US), Hospital Albert Einstein (BR), Cleveland Clinic (US). Full per-site notes in §9. Aspen Dental was on the reference list but geo-blocked — substituted with Cleveland Clinic; the inferred Conversion-Chain pattern (Archetype B) is described from the trades / beauty analogues.

**Use this doc as a moodboard with principles, not a layout to clone.** Health is a **high-trust, low-vanity** vertical. The strongest signals are credentials, clarity, and accessibility — not visual fireworks. A health site that "looks like a SaaS startup" loses every trust point it gains in design polish.

---

## Rules at a glance

- **Trust is everything.** Health buyers are evaluating *whether you can be trusted with their body*. Every design choice should reinforce competence over creativity.
- **Information architecture IS the brand.** Major hospital sites (Mayo, Cleveland, Einstein) are content-authority systems first, brand identities second. The A-Z condition browser or service-specialty grid is the primary navigation pattern.
- **Three primary user intents drive the homepage:** (1) find a provider/specialist, (2) get directions or location info, (3) book an appointment / request consultation. Surface all three above the fold or in the very first scroll.
- **Pick the archetype to the client's scale.** Solo practitioner → C. Multi-location clinic chain → B. Major hospital / academic medical center → A.
- **Real clinical photography only.** Stock-photo doctors-pointing-at-clipboards are visible from orbit. The cost of authentic photography is the cost of doing health work right.
- **Insurance / payment clarity matters.** "Accepts Medicare / SUS / TK / Aetna" is a load-bearing CTA-adjacent trust signal in many markets.
- **Accessibility is a contract, not a feature.** Health users include people in pain, with vision impairment, with cognitive load. WCAG 2.2 AA is the floor; aim higher where possible (`ACCESSIBILITY.md`).
- **DSGVO / HIPAA / LGPD constraints apply.** Health is one of the highest-regulation verticals for consent + data handling. See `SECURITY.md` for headers, `FORMS.md` for patient-data form handling.

---

## Table of contents

1. [The three health archetypes](#1-the-three-health-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Health-specific anti-patterns](#8-health-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The three health archetypes

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Content Authority Major-Hospital** | Information architecture, breadth of specialties, geographic reach, research credibility | Find a provider · Schedule appointment | Highest — requires a content library + provider directory + locations infrastructure |
| **B. Conversion Chain Clinic/Dental** | Frictionless booking, multi-location coverage, insurance clarity, same-day availability | Book online · Find a clinic | Medium — needs booking integration + location finder + insurance acceptance prominent |
| **C. Solo Practitioner Trust-Led** | Real doctor face, real credentials, real area covered, personal voice | Call · Book consultation | Low — the agency's default for most local Berlin / Lisbon health clients |

**Default for new local health clients:** Archetype C (stripped down). Use B only if the client has 2+ locations and online booking. A is for major hospital systems — out of agency scope.

---

## 2. Information architecture per archetype

### Archetype A — Content Authority Major-Hospital (Mayo, Einstein, Cleveland)

1. **Top utility bar** — small links: Patient Portal · MyChart · Donate · Careers · Language Switcher
2. **Primary nav** — Care / Health Library / Research / Education / Locations
3. **Hero** — clinical photography (often a real patient + doctor) + headline ("We're here when you need us — for every care in the world") + one CTA (Request Appointment / Find a Provider)
4. **3-card primary-intent grid** — Our Providers · Locations · Appointments (icons + names + CTAs)
5. **Health Library** — major information block: A-Z conditions, search bar, treatment categories. The library is sometimes the entire reason the user came.
6. **Get Care / Live Healthier / Need Help?** — three columns of intent-grouped resources
7. **Why Choose [Hospital]?** — credentials block (multi-year #1 ranking, research output, patient satisfaction scores)
8. **Locations** — geographic card grid (Hospital in [Region 1] · Hospital in [Region 2] · International)
9. **Featured care areas** — list of specialties (oncology, cardiology, etc.) — long, structured, scannable
10. **For Providers** — separate B2B section (referrals, careers, clinical trials)
11. **News & research** — published research updates, news stories
12. **Donations / philanthropy banner** — non-profit positioning
13. **Footer** — 4-column corporate (Patients · Medical Professionals · Researchers · Charitable Care)

### Archetype B — Conversion Chain Clinic/Dental

1. **Top utility bar** — phone number + opening hours + insurance acceptance (e.g., "We accept most insurance")
2. **Service-category nav** — Dental / Cleaning / Cosmetic / Implants / Emergency
3. **Hero** — friendly clinical photo (often a smiling patient post-treatment) + headline + zip-code/location search + ONE CTA in accent color ("Schedule appointment" or "Find a clinic near you")
4. **Promotional ribbon** — "New patient special: $X exam + X-ray" or "No insurance? We have payment plans."
5. **Service grid** — 4-6 cards (Cleaning / Whitening / Crowns / Implants / Orthodontics / Emergency) with photo + name + brief + CTA
6. **Insurance & financing** — explicit block listing accepted insurance + financing options
7. **Same-day availability** — calendar widget showing next-available slots if applicable
8. **Why Us** — bulleted credentials (Years in business / Number of patients served / 5-star rating average)
9. **Reviews / testimonials** — Google reviews, branded patient stories
10. **Locations** — multi-location grid with map + addresses + click-to-book per location
11. **Newsletter** — health tips opt-in
12. **Footer** — 4-column with patient resources + careers + corporate

### Archetype C — Solo Practitioner Trust-Led (the agency's default health client)

The vast majority of local health clients we'll get (dentist, GP, physio, dermatologist) look like this. The IA is intentionally clean.

1. **Top bar** — phone + WhatsApp + booking link as the only chrome
2. **Hero** — headline naming the doctor + the specialty + the area ("Dr. Ana Silva — Médica de família em Cedofeita") + portrait of the doctor in a professional setting + ONE primary CTA (Book / Call)
3. **About the doctor** — credentials block (medical degree institution, years practising, specialisations, languages spoken). Real photo + real CV.
4. **Services offered** — list of 5–10 services or treatments, not cards. Just clear text.
5. **Patient information** — what to expect on a first visit, what to bring, fee structure or insurance acceptance
6. **Location & hours** — address + map link + opening hours + transit info
7. **Booking** — embedded calendar widget (Doctolib, Calendly, or similar) OR clear phone CTA with operating hours
8. **Footer** — minimal: legal info (license number, professional body registration), privacy policy, contact

No condition library. No "academic medical center" tone. No fundraising callouts. The trust comes from the doctor being clearly visible as a real person with real credentials.

---

## 3. Hero patterns

### Archetype A — Patient-care editorial

- **Headline that names the relationship** — "We're here when you need us — for every care in the world" / "Healing starts here" / "Transforming your care"
- **Real clinical photography** — a doctor + a patient in interaction, not staged. Soft natural light, dignified composition.
- **Single appointment CTA** — "Request Appointment" rendered in the brand accent color
- **Search bar prominent** — for conditions, treatments, providers. The user comes with a specific concern; surface the search.
- **No promotional ribbons** — the brand competes on quality, not on price

### Archetype B — Conversion-chain clinic

- **Friendly, approachable headline** — "Smile with confidence" / "A healthier mouth in 60 minutes" — outcome-led, not credential-led
- **Zip-code / location finder** as the primary CTA — "Find a [Chain] near you"
- **Promotional banner** — "New patient: $59 exam + X-ray" or equivalent
- **Insurance signal in hero** — "Most major insurance accepted" or specific carrier logos
- **Booking-flow hint** — "Book online in 2 minutes"

### Archetype C — Solo practitioner

- **Headline = doctor + specialty + area** ("Dr. Ana Silva · Médica de Família · Cedofeita / Dra. Maria Lopes · Dentista em Cascais")
- **Portrait of the doctor** in their consulting room, not in front of a generic background
- **ONE CTA** in the brand color — "Marcar consulta" / "Book appointment" / "Schedule consultation"
- **Phone number visible below CTA**
- **Credential signature line** below the portrait — "Médico CRM 12345 · Especialidade [X] · 12 anos de experiência"
- **Spoken languages** if relevant (Berlin: "Konsultation auf Deutsch, English und Português")

---

## 4. Photography direction

### Universal health rules

- **The subject is real people in real care contexts.** Real doctor + real patient + real clinical setting. No stock.
- **Soft natural light is the universal grammar of health photography.** Avoid harsh shadows, hard backlighting, overdone bokeh.
- **Diversity is intentional, not Photoshopped.** If the practice serves a diverse community, show the actual community. If not, don't fake it.
- **Patient consent in writing** for any image that includes a patient. Health imagery has higher consent / privacy standards than other verticals.
- **No "doctor pointing at clipboard" stock pose.** No "stethoscope on white background." No "concerned doctor looking thoughtfully off-camera."

### Per-archetype photography notes

| Archetype | Photo style |
|-----------|------------|
| A — Content Authority | Documentary clinical photography · doctor + patient interactions · operating rooms in soft light · real architecture of the hospital · large-scale + dignified |
| B — Conversion Chain | Friendly + approachable · smiling post-treatment patients · clinical spaces with daylight · diverse and bright |
| C — Solo Practitioner | Single portrait of the doctor in consulting room · real environment (not white-background studio) · one diagnostic-tool visible (stethoscope, dental chair, physio table) to ground the scene |

---

## 5. Typography pairings

### What works in health

Health rejects fashion-magazine drama and conversion-shoutiness equally. The typography must read as **competent, clear, accessible.**

**Tier 1 pairings:**

| Display | Body | Archetype fit |
|---------|------|---------------|
| **Inter / Söhne / Calibre** (medium weight, no italic) | **Inter / Söhne** | A — content authority, B — conversion chain |
| **Fraunces** (regular weight, no italic) | **Inter / Manrope** | C — solo practitioner (warm + trustworthy without being clinical-cold) |
| **GT America / Söhne** | **GT America Mono** for credential lists | A — research-led academic hospital |

**Operating rules:**

- **No italic for body content** in health. Italic reads as decorative; in clinical contexts it suggests rather than asserts.
- **No bold uppercase headlines** above 24px. Health is not fashion; uppercase at headline scale reads as urgent shouting, which is appropriate for trades emergencies but wrong for clinics.
- **Tabular figures mandatory** for phone numbers, license numbers, fee structures, opening hours.
- **Line height for medical content body** should be relaxed (1.6+) — health content is often read by users in cognitive load or in pain. Generous line height reduces parse friction.

---

## 6. Color archetypes

### Archetype A — Content Authority

| Direction | Palette | Mood |
|-----------|---------|------|
| **Deep navy + clinical white** | Deep navy bg / white cards / near-black text / single saturated blue accent for CTAs | Mayo Clinic — institutional + trusted |
| **Royal blue + soft white** | Royal blue header / off-white body / dark navy text / red accent for emergency callouts | Einstein — patient-care premium |
| **Sage + cream** | Soft sage bg / cream text / deep forest accent | Modern hospital / wellness-leaning |

### Archetype B — Conversion Chain Clinic

| Direction | Palette | Mood |
|-----------|---------|------|
| **Friendly blue** | White bg / light blue accent / brand color for CTAs (often coral, orange, or red) | Dental chain feel — approachable |
| **Mint clinical** | White bg / mint accent / dark teal text | Aesthetic clinic, modern |
| **Coral health** | White bg / coral CTA / soft beige secondary | Women's health, dermatology |

### Archetype C — Solo Practitioner

| Direction | Palette | Mood |
|-----------|---------|------|
| **Clean blue** | White bg / dark navy text / muted blue accent | Standard medical professional — no surprises |
| **Warm earth** | Cream bg / dark brown text / sage accent | GP / family doctor — warm and approachable |
| **Soft pastel** | Off-white bg / muted pastel accent (mint, lavender, peach) | Specialty clinics (pediatrics, women's health) — calm + reassuring |

**Rules:**

- **No pure red as a primary brand color** in health. Red signals emergency / blood / warning. Reserve it for emergency CTAs only ("Call 112 / 911 / 192").
- **Bright neon accents are forbidden.** Health requires gravitas; bright neon reads as crypto-startup or fitness, not medicine.
- **One brand accent maximum.** Health sites that use three or four accent colors look amateur.
- **Background brightness must accommodate readers in low-vision conditions.** Pure white is acceptable; cream / pale gray is acceptable; dark themes need extra contrast budget.

---

## 7. Copy voice cues

### What to say

- **The doctor's full credentials** — degree institution, year qualified, specializations, professional body memberships. "Dr. Ana Silva, MD, Universidade do Porto 2008, Especialista em Medicina Familiar, Ordem dos Médicos #12345"
- **Specific service names** with treatment context — "Crown placement (porcelain or zirconia)" beats "Crowns"
- **Treatment duration estimates** — "Initial consultation: 45 minutes. Most fillings: 30 minutes. Crowns: 2-3 visits."
- **Insurance / payment clarity** — "Accepts SUS / private insurance: [list]. Direct private fees available on request. Payment plans via [provider]."
- **Patient-information practicality** — "First visit: bring ID, insurance card, current medications list. Arrive 15 min early for paperwork."
- **Languages spoken** — for international markets ("Konsultation auf Deutsch, English, Português")
- **Wheelchair access / accessibility** — explicit when applicable

### What never to say

- "Caring, compassionate care" (boilerplate; says nothing)
- "Family-friendly practice" (vague claim)
- "State-of-the-art equipment" (industry-standard; provides no differentiation)
- "Award-winning doctor" without naming the award
- "Years of experience" without the number
- "Trusted by thousands of patients" (unverifiable; would you prefer the dentist trusted by hundreds?)
- "Smile makeover" / "Mommy makeover" / "Sculpt your new body" (cosmetic anti-pattern; reads as predatory)
- Any phrase that could appear unchanged on any clinic site of any kind

---

## 8. Health-specific anti-patterns

Beyond the generic anti-slop in `DESIGN-BEST-PRACTICES.md`:

| Anti-pattern | Why it's a tell | Fix |
|--------------|----------------|-----|
| **Stock photo of doctor pointing at clipboard** | The single most overused stock image in health. Universally fake. | Real photo of the actual doctor. Even iPhone photos beat stock. |
| **Stock "diverse care team" photo** — same Getty set across thousands of sites | Detectable, faked-feeling | Real staff photo OR no team section |
| **"State-of-the-art equipment" claims** without naming the equipment | Empty positioning | Name the specific tech ("CEREC same-day crowns / Digital X-ray Vatech / 3M scanners") or omit |
| **Stethoscope on white background** | Universally stock | Photo of the actual clinical setting |
| **"Award-winning"** without naming the award | Hollow trust | Name the award + year (Top Doctor 2024 by [publication]) or omit |
| **Before/after photo of two different people** | Reads as fake even when both are real | Same patient, same lighting, same angle, written consent. Health has even higher consent requirements than beauty. |
| **Generic "Welcome to [Clinic Name]"** as h1 | Same problem as every vertical | Replace with doctor + specialty + area |
| **Inspirational mission statement as the hero copy** ("Caring for our community since...") | Generic, lacks specifics | Name the doctor, the specialty, what makes the practice distinctive |
| **Cosmetic-procedure pressure copy** ("Get the smile you deserve!" / "Confidence starts with a new you!") | Predatory, low-trust | Outcome-led without urgency: "Veneers · 2-visit process · Custom-shade match" |
| **Hidden pricing combined with high-pressure consultation** ("Schedule your free consultation today!") | Bait-and-switch perception | Publish fee ranges where possible. "Initial consultation: free / €60. Treatment fees provided in writing after consultation." |
| **"Easy financing!"** with prominent buy-now-pay-later banners | Predatory positioning | Mention financing as one option among several, not the lead with exclamation |
| **Patient-portal login as the primary header CTA** for a new-patient acquisition site | Confuses returning vs new-patient flows | New patients see "Book first appointment"; returning patients see a discreet "Patient Portal" in the top utility bar |
| **No license number anywhere on the site** | Legal compliance concern in many jurisdictions + trust signal missed | License number in footer (sometimes legally required per page) |
| **Cookie banner with hidden "Reject"** | DSGVO violation + health privacy double-down | Reject and Accept buttons must be equal weight and same prominence (see `SECURITY.md`) |
| **Generic body-language stock** ("woman holding her stomach in pain") | Reads as ad-network creative | Editorial photography of the doctor's actual practice, or icon illustrations instead of stock |

---

## 9. Reference site annotations

### 9.1 Mayo Clinic — `mayoclinic.org` (Archetype A)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **"The world's best hospital" title** in the page title — bold positioning anchored to Newsweek ranking, used unapologetically
- **Hero is restrained** — clinical operating-room photo + "Transforming your care" headline + ONE "Request appointment" CTA. No promotional ribbon.
- **A-Z condition browser** below the hero — letters A through Z as a clickable index. This is the user's actual entry path: "I have [condition], what does Mayo do for it?"
- **"Healing starts here"** secondary block with photo of a masked clinician — soft framing, dignified
- **"World-class care for global patients"** — international services positioned prominently. Mayo is a destination hospital.
- **Locations as a 4-card geographic grid** — Arizona / Florida / Minnesota / Healthcare London — signals scale + reach
- **"Featured care areas"** — 2-column list of specialties (Bone marrow transplant, Brain cancer, etc.) — scannable, structured
- **"There's still time! Triple My Impact"** — fundraising banner — surfaces non-profit status + recurring donor relationship
- **4-column footer** with Patients / Medical Professionals / Researchers / Charitable Care & Financial Assistance — every audience has its own track

**What we'd borrow:**

- The A-Z condition browser pattern for clinics with broad specialty offerings
- The locations grid pattern for any multi-location health client
- The "world-class care for X patients" framing for clinics that serve specific populations (expats, international patients, etc.)

**What we wouldn't:**

- The fundraising banner — exclusive to non-profit hospital systems
- The 4-audience footer split — most agency clients have one audience (patients)

### 9.2 Hospital Albert Einstein — `einstein.br` (Archetype A)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **"Saiba tudo que o Einstein..."** — same content-authority pattern as Mayo but in Brazilian Portuguese
- **4-action card grid** above the hero — quick-access tiles (probably scheduling, results, telemedicine, info)
- **"Serviços para você" with 3 cards** — Telemedicina / Check-up Anual / Vacinas — specific services as the primary offer
- **"Especialidades Médicas"** — medical specialties grid with portrait photos of doctors
- **"Glossário de Saúde"** — same A-Z health glossary pattern as Mayo (in blue ribbon)
- **"Trabalhe no Einstein"** with portrait — careers integration in the body of the homepage
- **"Unidades"** — multi-location section with facility photos
- **"Saúde e Bem-Estar"** — wellness content cards
- **3-column blue footer** with corporate categories

**What we'd borrow:**

- The 4-action quick-access tile pattern for high-frequency intent capture (scheduling / results / contact)
- The medical-specialty grid with doctor portraits
- The wellness-content cards approach for clinics with content strategy

**What we wouldn't:**

- The full hospital-system breadth — most agency clients don't have specialty diversity to fill an A-Z

### 9.3 Cleveland Clinic — `my.clevelandclinic.org` (Archetype A)

**Audit date:** 2026-05-13. Captured at 1280 / 768 / 375.

**What makes it work:**

- **"We're here when you need us — for every care in the world"** hero copy — relationship-led, scope-broad
- **3-card primary-intent grid** above-the-fold: Our Providers · Locations & Directions · Appointments — the three user intents surfaced as equal-weight cards with icons
- **Big blue "Health Library" tile** — primary information architecture entrance
- **3-column Get Care · Live Healthier · Need Help?** — intent grouping into three life-stage categories
- **"Why Choose Cleveland Clinic?"** with 4 icon-led trust pillars
- **"Cleveland Clinic Care Near You"** — geographic spread across Ohio, Florida, Abu Dhabi, Canada
- **"For Providers"** — separate B2B section with multi-item accordion (Institutes & Departments, Nursing, Careers, Refer a Patient, ConsultQD, Education, Research)

**What we'd borrow:**

- The icon-led 3-card primary intent grid — more accessible / scannable than text-heavy patterns
- The Get Care / Live Healthier / Need Help? intent grouping for content-rich health sites
- The B2B/B2C dual-track footer pattern for any clinic that also accepts referrals

**What we wouldn't:**

- The 4-region location grid — agency clients are usually single-region

### 9.4 Inferred — Aspen Dental and similar conversion-chain clinics (Archetype B)

**Note:** Aspen Dental was geo-blocked during the audit (Amazon CloudFront restricted access from our IP). The Conversion-Chain pattern is described inferentially from the trades / beauty analogues and from observable patterns at similar dental chains.

**The pattern is structurally identical to trades Archetype B (Pimlico / Roto-Rooter), translated to clinical context:**

- Top utility bar with phone + insurance acceptance + opening hours
- Service-category nav (Dental / Cleaning / Cosmetic / Implants / Emergency)
- Friendly clinical hero photo + zip-code finder
- Promotional ribbon ("New patient: $59 exam + X-ray")
- Service grid with photo + name + brief + CTA per service
- Insurance & financing block — explicit accepted-insurance list + payment plans
- Same-day availability hint
- Reviews carousel
- Multi-location grid
- Footer with patient resources + careers

**Defining differences from Archetype A:**

- Sells appointment-booking conversion, not content authority
- Insurance acceptance is a load-bearing trust signal, not optional
- Promotional pricing is acceptable (it's accepted dental-chain language)
- Phone number prominent at the top, like trades

---

## 10. Decision matrix — picking the archetype per client

| Question | If yes → | If no → |
|----------|----------|---------|
| Is the client a solo practitioner / 2-doctor partnership? | **Archetype C** (default for most agency health clients) | Continue |
| Does the client have a research arm or academic-medical-center affiliation? | Archetype A — content authority | Continue |
| Does the client run 3+ locations with a unified booking system? | Archetype B — conversion chain | Continue |
| Is the client primarily aesthetic / cosmetic? | Archetype B with **wellness-soft** color treatment (mint / coral) — avoid hard-conversion language | — |
| Is the client a specialty (cardiology, oncology, etc.) practice? | Archetype C — but with a stronger condition-explanation page set | — |
| Is the client a dental chain with insurance integrations? | Archetype B | — |
| Single-location dentist / GP / physio? | Archetype C | — |

**The agency's reality:** ~85 % of health clients in Berlin / Lisbon / Brazil will be Archetype C (solo practitioner or 2-doctor practice). Build the muscle for C first; A is reserved for hospital systems (rare); B is for clinic chains with at least 3 locations and online booking.

---

*The vertical template is a moodboard. The per-client `design.md` is the choice. Never copy the layout — copy the discipline.*
