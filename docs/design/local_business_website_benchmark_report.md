# Local Business Website Benchmark Report

**Regions:** Brazil, United States, Europe  
**Focus:** real business/operator websites, with aggregators separated into an appendix  
**Date:** 2026-05-14  
**Purpose:** benchmark website structure, UI/UX, SEO, conversion, trust, performance readiness, regional fit, and anti-slop design quality for local businesses and service brands.

---

## 1. Executive summary

This report consolidates the research into a practical benchmark framework for local-business websites across **Brazil**, the **United States**, and **Europe**.

The main correction from earlier research is important: **aggregators and marketplaces are not the same as real business/operator websites**. iFood, DoorDash, Treatwell, Zocdoc, Angi, Doctolib, ClassPass, and similar platforms are useful for understanding discovery, filtering, reviews, and booking expectations, but they should not be treated as brand or website benchmarks for a standalone restaurant, salon, clinic, tradesperson, studio, or local service business.

The final report uses **12 categories** and keeps **repair/specialty services merged into Trades / Home Services** to avoid category sprawl. Because apparently even a benchmark can become a hydra if no one takes away its spreadsheet privileges.

### Recommended benchmark logic

Use two kinds of examples:

| Benchmark type | Purpose |
|---|---|
| **Scale / traffic reference** | Learn from known, high-reach operators with mature conversion flows and location structures. |
| **Design / UX reference** | Learn from more distinctive, polished, anti-generic sites with stronger brand and interaction quality. |

A good final website should combine both: the **clarity and conversion discipline** of scale leaders with the **brand specificity and taste** of design leaders.

### Important calibration — read before scoping any client

The 180+ websites in this report are **reference quality, not deliverable scope.** Mayo Clinic, Equinox, Big Mamma, AIRE Ancient Baths, Pimlico Plumbers, and Sweetgreen are studied for *patterns* — information architecture, conversion flow, trust signals, photography discipline. None of them are realistic outputs for an agency build at the typical sm-website-seo price tier.

The agency's typical client is a **solo operator or small-team local business** with a €500–€8.000 one-time budget (see `SALES.md` §4). Their site is the *solo-operator subset* of the benchmark archetypes — the same IA logic and trust patterns, scaled down to a single-page or small-multi-page Astro build (Tier 1–2 per `TECH.md` §1).

Use this report as follows:

| Question | Where to look |
|---|---|
| What's possible in this vertical at world-class scale? | This report, §7.x for the matching category |
| What archetype best fits *this specific prospect*? | `docs/design/templates/<vertical>.md` — see §7 cross-references |
| What price tier and product type matches their scope? | `docs/design/SALES.md` §4 + `docs/design/TECH.md` §1 |
| What deliverable must we ship before launch? | `docs/design/CHECKLIST.md` |

If a prospect points at Mayo or Equinox and asks "build me that," the answer is: "we build the *Solo-Operator archetype* (per `templates/health.md` Archetype C or `templates/studio.md` Archetype D) using the same trust and IA logic. Here's the price for that version."

Templates currently exist for **5 of the 12 categories** in this report: Gastronomy, Trades, Beauty, Health, Fitness & Studios. The other 7 (Professional Services, Home & Garden, Artisan, Pets, Automotive, Education, Events & Hospitality) are benchmark-only — build a template **only when a prospect in that vertical signs**, never speculatively.

---

## 2. Scope and methodology

### Included

This report focuses on:

- Real business/operator websites
- Chains and franchises
- Premium independent businesses
- Clinic, vet, salon, gym, and hospitality networks
- Retail/ecommerce operators where they match the category
- Useful regional examples across Brazil, US, and Europe

### Excluded from main benchmark

Aggregators, directories, marketplaces, and booking platforms are moved to the appendix. They are still useful, just not as direct business-site benchmarks.

### Selection criteria

Each benchmark website was selected because it offers at least one of the following:

- Clear service or product presentation
- Strong booking, ordering, quote, or inquiry flow
- Good local/location UX
- Strong mobile UX
- Trust-building elements
- Strong category fit
- Recognizable brand scale or high-quality design
- Useful pattern for small and medium businesses
- Good anti-slop reference: real photography, specific copy, and non-generic identity

### Important caveat

This is a benchmark research report, **not a mathematically perfect traffic ranking**. Public traffic data is fragmented, especially for trades, clinics, salons, studios, and local independent businesses. For those categories, the stronger benchmark is often a franchise, chain, premium independent, or clinic network with a well-developed site.

---

## 3. Source-backed baseline notes

These are the baseline facts that should guide any future audit or final recommendations.

| Area | Baseline |
|---|---|
| **Core Web Vitals** | Google/web.dev defines good thresholds as **LCP ≤ 2.5s**, **INP ≤ 200ms**, and **CLS ≤ 0.1**. Source: [web.dev Web Vitals](https://web.dev/articles/vitals). |
| **Accessibility** | WebAIM's 2026 Million report found common detectable issues across homepages, including low contrast text, missing alt text, missing form labels, empty links, and empty buttons. Source: [WebAIM Million 2026](https://webaim.org/projects/million/). |
| **European Accessibility Act** | The European Accessibility Act came into effect on **28 June 2025**. Source: [AccessibleEU](https://accessible-eu-centre.ec.europa.eu/content-corner/news/eaa-comes-effect-june-2025-are-you-ready-2025-01-31_en). |
| **Brazil Pix** | Brazil's Central Bank describes Pix as an easy, fast, affordable, safe, and versatile payment/transfer solution for users and businesses. Source: [Banco Central do Brasil - Pix](https://www.bcb.gov.br/en/financialstability/pix_en). |

Avoid unsupported claims like “red buttons convert 20% better,” “video heroes increase conversion by 138%,” or “new 2026 Core Web Vitals thresholds are stricter.” Those belong in the swamp unless backed by a credible source.

---

## 4. Final category structure

| # | Category | Includes |
|---:|---|---|
| 1 | **Gastronomy** | Restaurants, cafés, bakeries, bars, delis, food chains |
| 2 | **Trades / Home Services** | Plumber, electrician, locksmith, handyman, cleaning, pest control, appliance repair, phone repair, tailoring, shoe/watch repair |
| 3 | **Beauty & Aesthetics** | Salons, barbers, spas, nails, waxing, laser, skincare, massage |
| 4 | **Health** | Clinics, dental, physiotherapy, diagnostics, hospitals, therapy |
| 5 | **Fitness & Studios** | Gyms, yoga, pilates, dance, martial arts, music schools |
| 6 | **Professional Services** | Lawyers, accountants, consultants, insurance brokers, financial advisors |
| 7 | **Home & Garden** | Florists, garden centers, plant shops, bonsai, landscaping, home/garden retail |
| 8 | **Artisan & Creative Retail** | Jewelry, ceramics, clay, handmade goods, galleries, craft studios |
| 9 | **Pets** | Vets, grooming, pet shops, pet daycare, trainers |
| 10 | **Automotive** | Repair, detailing, tire shops, car wash, auto glass, rental, driving schools |
| 11 | **Education & Kids** | Daycare, tutoring, language schools, coding schools, music lessons |
| 12 | **Events & Hospitality** | Hotels, venues, photographers, caterers, wedding/event planners |

---

## 5. Evaluation criteria

Use the same criteria for every website. Consistency is what turns a pile of links into research, a miracle humans occasionally permit.

| Criterion | What to check |
|---|---|
| **Performance** | Mobile load speed, Core Web Vitals, image optimization, JavaScript bloat, caching/CDN readiness |
| **Security** | HTTPS, SSL/TLS quality, security headers, privacy/cookie handling, visible trust signals |
| **SEO & keywords** | Title/meta, service/category keywords, location pages, schema, indexability, internal links |
| **UI/UX design** | Navigation, hierarchy, responsiveness, layout clarity, readability, visual flow |
| **Conversion** | Path to book, call, order, reserve, quote, buy, schedule, or find a location |
| **Trust** | Reviews, credentials, awards, certifications, guarantees, team photos, real premises photos |
| **Mobile UX** | Sticky CTA, WhatsApp/call buttons, tap targets, map integration, short forms |
| **Accessibility** | Contrast, alt text, headings, form labels, keyboard navigation, visible focus states |
| **Anti-slop design** | Real photography, specific copy, original brand system, no generic template sludge |
| **Regional fit** | Brazil: WhatsApp/Pix/mobile. US: reviews/near-me/insurance/pricing. Europe: GDPR/multilingual/privacy. |

---

## 6. Regional UX non-negotiables

### Brazil

| Requirement | Why it matters |
|---|---|
| **WhatsApp-first contact** | Critical for trades, beauty, clinics, florists, studios, events, and small local services. |
| **Pix visibility** | Important for ecommerce, deposits, appointments, subscriptions, and service payments. |
| **Mobile-first design** | Many users will discover and act on mobile. Fast load and sticky CTA matter. |
| **Instagram integration** | Especially important for gastronomy, beauty, artisans, studios, florists, and events. |
| **Local trust** | Google reviews, maps, service area, real photos, and location pages matter heavily. |

### United States

| Requirement | Why it matters |
|---|---|
| **Review visibility** | Google/Yelp-style expectations shape trust, especially for local services. |
| **Near-me SEO** | Crucial for trades, healthcare, gyms, automotive, beauty, pets, and education. |
| **Quote/booking flow** | Users expect fast online action, not a form that feels like applying for citizenship. |
| **Franchise-local pages** | Important for chains and franchises with many branches. |
| **Payment/insurance clarity** | Especially important for healthcare, dental, automotive, and professional services. |

### Europe

| Requirement | Why it matters |
|---|---|
| **GDPR/cookie clarity** | Must be handled cleanly and not block the entire experience like a legal barricade. |
| **Accessibility readiness** | European Accessibility Act increases the practical importance of accessible digital services. |
| **Multilingual support** | Important for cross-border brands, tourism, healthcare, hospitality, and education. |
| **Privacy trust** | Critical for health, legal, education, finance, and booking-heavy businesses. |
| **Editorial design quality** | Premium European hospitality, gastronomy, beauty, and artisan sites often set strong visual standards. |

---

# 7. Benchmark tables by category

Each table uses the format:

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|

---

## 7.1 Gastronomy

**Subcategories:** restaurant, café, bakery, bar, deli, food chain.

> **Template available:** [`templates/gastronomy.md`](templates/gastronomy.md) — 3 archetypes (Big Mamma Immersive · Sweetgreen Conversion · Dishoom Heritage) + Porto dos Ribeiros reference implementations. Use the template for scoping conversations and IA decisions; use this section for additional structural references.

### Category UX checklist

- Menu is easy to read on mobile
- Food photography is real and appetizing
- Opening hours and locations are obvious
- Reservations, delivery, pickup, or ordering are available quickly
- Dietary/allergen information is accessible where relevant
- Reviews, press, awards, or social proof are visible
- The site feels specific to the brand, not like “restaurant template number 842”

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Madero | [restaurantemadero.com.br](https://www.restaurantemadero.com.br/) | Food chain | Strong chain UX: menus, restaurants, reservations, delivery, loyalty/cashback, and brand consistency. |
| Brazil | Coco Bambu | [cocobambu.com](https://www.cocobambu.com/) | Restaurant chain | Useful for large restaurant location UX, menu browsing, reservation/order flows, and family/group dining positioning. |
| Brazil | Coffee Lab | [coffeelab.com.br](https://coffeelab.com.br/) | Premium independent café | Strong boutique coffee positioning, personality, education, and product storytelling. |
| Brazil | D.O.M. Restaurante | [domrestaurante.com.br](https://domrestaurante.com.br/) | Premium independent restaurant | High-end editorial restaurant reference with distinctive culinary positioning. |
| Brazil | Benjamin A Padaria | [benjaminapadaria.com.br](https://benjaminapadaria.com.br/) | Bakery/café chain | Useful bakery/café reference for product-led browsing, local brand warmth, and retail food presentation. |
| US | Sweetgreen | [sweetgreen.com](https://www.sweetgreen.com/) | Fast-casual chain | Excellent ordering, menu clarity, locations, app integration, rewards, and modern food-brand UX. |
| US | Chipotle | [chipotle.com](https://www.chipotle.com/) | Fast-casual chain | Strong customization and direct order conversion flow. |
| US | Starbucks | [starbucks.com](https://www.starbucks.com/) | Coffee chain | Best-in-class loyalty/app ecosystem, product browsing, store finder, and seasonal campaigns. |
| US | Shake Shack | [shakeshack.com](https://shakeshack.com/) | Food chain | Good fast-casual brand, location UX, menu clarity, and digital ordering. |
| US | Blue Bottle Coffee | [bluebottlecoffee.com](https://bluebottlecoffee.com/) | Coffee chain / ecommerce | Premium coffee/ecommerce hybrid with product education, subscriptions, and strong photography. |
| Europe | Big Mamma Group | [bigmammagroup.com](https://www.bigmammagroup.com/) | Restaurant group | Excellent anti-slop reference: bold identity, restaurant pages, city/location navigation, booking, and memorable brand personality. |
| Europe | Dishoom | [dishoom.com](https://www.dishoom.com/) | Premium restaurant group | Strong hospitality storytelling, reservations, shop integration, and distinct editorial style. |
| Europe | Pret A Manger | [pret.com](https://www.pret.com/) | Café/food chain | Useful chain benchmark for menu, subscriptions, locations, app, and brand consistency. |
| Europe | GAIL's Bakery | [gailsbread.co.uk](https://gailsbread.co.uk/) | Bakery/café chain | Good bakery/café benchmark for visual warmth, products, local shops, and community feel. |
| Europe | Joe & The Juice | [joejuice.com](https://www.joejuice.com/) | Café/juice chain | Strong youth-oriented branding, product browsing, locations, and app/order ecosystem. |

### Best study targets

| Need | Best examples |
|---|---|
| Scale/conversion | Sweetgreen, Chipotle, Starbucks, Madero, Pret |
| Brand/design | Big Mamma, Dishoom, Coffee Lab, D.O.M., Blue Bottle |
| Bakery/café reference | GAIL's, Benjamin A Padaria, Blue Bottle, Coffee Lab |

---

## 7.2 Trades / Home Services

**Subcategories:** plumber, electrician, locksmith, handyman, cleaning, pest control, appliance repair, phone repair, tailoring, shoe/watch repair.

> **Template available:** [`templates/trades.md`](templates/trades.md) — 4 archetypes (Banham Heritage Craft · Pimlico/Roto-Rooter Conversion Chain · Insurance-Backed Network · **Solo-Operator** as agency default for ~95% of trades clients). Phone-first conversion patterns and license/guarantee trust signals are codified there.

### Category UX checklist

- Emergency CTA above the fold
- Sticky mobile call/WhatsApp button
- Short quote or booking form
- Service area clearly listed
- Licenses, guarantees, warranties, or insurance shown
- Reviews/testimonials visible
- Real technician/team photos where possible
- Pricing or diagnostic fee explained if possible
- Specialty repair pages show turnaround time and warranty

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Porto Seguro Serviços | [portoseguro.com.br/servicos](https://www.portoseguro.com.br/servicos) | Service network | Strong Brazilian home-service reference: repairs, scheduling, insurance-backed trust, service categories. |
| Brazil | Doutor Resolve | [doutorresolve.com.br](https://www.doutorresolve.com.br/) | Franchise/service chain | Useful for home repair, electrical, hydraulic, painting, and general maintenance UX. |
| Brazil | Nasa Manutenção | [nasamanutencao.com.br](https://nasamanutencao.com.br/) | Local service operator | Practical local operator reference for electrical and hydraulic services. |
| Brazil | Chaveiro do Paulista | [chaveirodopaulista.com.br](https://chaveirodopaulista.com.br/) | Local locksmith | Locksmith benchmark for urgent local intent, phone/WhatsApp behavior, and service-area clarity. |
| Brazil | iPlace | [iplace.com.br](https://www.iplace.com.br/) | Retail/service operator | Useful specialty repair benchmark for device support and service-oriented retail. |
| US | Roto-Rooter | [rotorooter.com](https://www.rotorooter.com/) | National service chain | Excellent emergency-service UX: phone CTA, scheduling, local pages, trust messaging, 24/7 positioning. |
| US | Mr. Electric | [mrelectric.com](https://mrelectric.com/) | Franchise | Strong electrician-specific benchmark with local pages, service categories, and quote CTAs. |
| US | Mr. Rooter | [mrrooter.com](https://www.mrrooter.com/) | Franchise | Plumbing benchmark with franchise-local structure and service category architecture. |
| US | Benjamin Franklin Plumbing | [benjaminfranklinplumbing.com](https://www.benjaminfranklinplumbing.com/) | Franchise | Useful for guarantee-led service messaging and trust-forward home-service UX. |
| US | uBreakiFix by Asurion | [ubreakifix.com](https://www.ubreakifix.com/) | Specialty repair chain | Strong device-repair benchmark: service menu, locations, appointment/drop-off flow, warranty messaging. |
| Europe | Pimlico | [pimlicoplumbers.com](https://www.pimlicoplumbers.com/) | Premium local service brand | Strong UK trades benchmark for plumbing, heating, electrical, emergency service, and trust-first branding. |
| Europe | Dyno | [dyno.com](https://www.dyno.com/) | Service network | Useful for plumbing, drains, electrics, emergency booking, and service segmentation. |
| Europe | Banham | [banham.co.uk](https://www.banham.co.uk/) | Locksmith/security services | Good locksmith and security benchmark with premium trust positioning. |
| Europe | Aspect | [aspect.co.uk](https://www.aspect.co.uk/) | Multi-service trades operator | Useful London-focused trades benchmark with broad service pages and local intent. |
| Europe | Timpson | [timpson.co.uk](https://www.timpson.co.uk/) | Specialty service chain | Strong specialty-services reference: keys, shoe repairs, dry cleaning, photo services, location finder. |

### Best study targets

| Need | Best examples |
|---|---|
| Emergency/service conversion | Roto-Rooter, Pimlico, Dyno, Porto Seguro Serviços |
| Specialty repair | uBreakiFix, Timpson, iPlace |
| Franchise/local page structure | Mr. Electric, Mr. Rooter, Benjamin Franklin Plumbing |

---

## 7.3 Beauty & Aesthetics

**Subcategories:** hair salon, barber, spa, nails, waxing, laser, skincare, massage.

> **Template available:** [`templates/beauty.md`](templates/beauty.md) — 3 archetypes (TONI&GUY Editorial · Drybar Service Chain · AIRE Atmospheric). Booking-first IA, staff profiles, before/after photography rules, and pricing/menu patterns codified there.

### Category UX checklist

- Services menu is clear
- Prices or consultation expectations are visible
- Booking is easy and preferably embedded
- Staff profiles explain specialties
- Before/after content is used responsibly where relevant
- Reviews/social proof are visible
- Memberships/packages are explained
- Instagram and real photography support the brand

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | LACES and Hair | [lacesandhair.com.br](https://www.lacesandhair.com.br/) | Premium salon chain | Strong “slow beauty” positioning, premium brand, editorial visuals, and distinctive identity. |
| Brazil | Studio W | [studiow.com.br](https://studiow.com.br/) | Premium salon chain | Strong upscale salon reference with service positioning and local brand authority. |
| Brazil | Jacques Janine | [jacquesjanine.com.br](https://jacquesjanine.com.br/) | Salon chain/franchise | Useful Brazilian salon network reference for units, services, and brand consistency. |
| Brazil | Espaçolaser | [espacolaser.com.br](https://espacolaser.com.br/) | Aesthetic service chain | Conversion-focused benchmark for laser/aesthetic services, packages, and lead capture. |
| Brazil | Beleza Natural | [belezanatural.com.br](https://www.belezanatural.com.br/) | Beauty chain | Strong segment-specific beauty brand with clear audience positioning. |
| US | Drybar Shops | [drybarshops.com](https://www.drybarshops.com/) | Salon franchise | Service-specific salon benchmark for blowout services, locations, booking, and brand consistency. |
| US | European Wax Center | [waxcenter.com](https://waxcenter.com/) | Aesthetic service chain | Strong booking, service menu, membership, and location UX. |
| US | Great Clips | [greatclips.com](https://www.greatclips.com/) | Haircut chain | Useful mass-market chain reference with online check-in and location-first UX. |
| US | Sport Clips | [sportclips.com](https://sportclips.com/) | Haircut/barber chain | Good franchise reference for local pages, check-in, and service clarity. |
| US | Massage Envy | [massageenvy.com](https://www.massageenvy.com/) | Massage/spa chain | Strong membership, services, location finder, and wellness positioning. |
| Europe | TONI&GUY | [toniandguy.com](https://toniandguy.com/) | Global salon chain | Strong salon-brand benchmark with fashion/editorial positioning and location navigation. |
| Europe | Rush Hair | [rush.co.uk](https://www.rush.co.uk/) | Salon chain | Useful UK salon benchmark for booking, local salon pages, and service presentation. |
| Europe | AIRE Ancient Baths | [beaire.com](https://beaire.com/) | Premium spa/wellness brand | Excellent spa/wellness benchmark with atmospheric design and strong visual identity. |
| Europe | Barber Barber | [barberbarber.com](https://barberbarber.com/) | Barber brand | Distinctive barber positioning, tone, and visual identity. |
| Europe | Headmasters | [headmasters.com](https://www.headmasters.com/) | Salon chain | Useful salon-chain reference for services, booking, locations, and promotions. |

### Best study targets

| Need | Best examples |
|---|---|
| Premium beauty brand | LACES and Hair, AIRE, TONI&GUY, Studio W |
| Conversion/service booking | European Wax Center, Drybar Shops, Great Clips |
| Distinctive identity | Barber Barber, LACES and Hair, AIRE |

---

## 7.4 Health

**Subcategories:** general clinic, dental, physiotherapy, diagnostics, dermatology, hospital.

> **Template available:** [`templates/health.md`](templates/health.md) — 3 archetypes (Mayo/Einstein/Cleveland Content Authority · Aspen-style Conversion Chain · **Solo Practitioner** as agency default for ~85% of health clients). License/credentials patterns, DSGVO/HIPAA/LGPD compliance notes, and trust-over-visual rules codified there.

### Category UX checklist

- Specialties and credentials visible
- Booking or appointment request is clear
- Insurance/payment information is visible where relevant
- Patient portal link is easy to find
- Location pages include hours, directions, services
- Privacy and consent are handled seriously
- Emergency/urgent care routes are obvious where relevant
- Tone should reduce anxiety, not create a bureaucratic migraine

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Hospital Israelita Albert Einstein | [einstein.br](https://www.einstein.br/) | Hospital/health network | Strong health benchmark for appointments, exams, patient navigation, trust, and clinical authority. |
| Brazil | Hospital Sírio-Libanês | [hospitalsiriolibanes.org.br](https://hospitalsiriolibanes.org.br/) | Premium hospital | Strong premium hospital benchmark with patient services, specialties, international care, and institutional trust. |
| Brazil | Fleury | [fleury.com.br](https://www.fleury.com.br/) | Diagnostics clinic network | Excellent diagnostics UX for scheduling, results, locations, and patient services. |
| Brazil | Dasa | [dasa.com.br](https://dasa.com.br/) | Diagnostics/healthcare group | Large health group benchmark for exams, brands, and patient navigation. |
| Brazil | OdontoCompany | [odontocompany.com](https://odontocompany.com/) | Dental chain | Useful dental-chain benchmark for services, units, and appointment conversion. |
| US | Mayo Clinic | [mayoclinic.org](https://www.mayoclinic.org/) | Hospital/health network | Trust/content benchmark for conditions, treatments, doctors, patient navigation, and health education. |
| US | Cleveland Clinic | [my.clevelandclinic.org](https://my.clevelandclinic.org/) | Hospital/health network | Strong healthcare content hierarchy, patient navigation, and care discovery. |
| US | One Medical | [onemedical.com](https://www.onemedical.com/) | Clinic network | Modern primary-care UX with membership framing, appointment flows, and clean information design. |
| US | Aspen Dental | [aspendental.com](https://www.aspendental.com/) | Dental chain | Good dental conversion benchmark with local pages, services, appointment CTA, and financing/payment clarity. |
| US | ATI Physical Therapy | [atipt.com](https://www.atipt.com/) | Physiotherapy network | Useful physio benchmark for services, locations, appointment flow, and care-path explanation. |
| Europe | Nuffield Health | [nuffieldhealth.com](https://www.nuffieldhealth.com/) | Healthcare/fitness network | Hybrid healthcare/wellbeing benchmark with hospitals, clinics, gyms, treatments, and complex navigation. |
| Europe | Bupa UK | [bupa.co.uk](https://www.bupa.co.uk/) | Healthcare/insurance provider | Strong healthcare and insurance UX for services, products, care paths, and trust. |
| Europe | Bupa Dental Care | [bupa.co.uk/dental](https://www.bupa.co.uk/dental/dental-care) | Dental network | Useful dental-specific benchmark for treatments, locations, and appointments. |
| Europe | Helios | [helios-gesundheit.de](https://www.helios-gesundheit.de/) | Hospital group | German hospital-group reference for medical services, locations, and trust. |
| Europe | Ascenti | [ascenti.co.uk](https://www.ascenti.co.uk/) | Physiotherapy network | Useful physiotherapy benchmark for service explanations, booking, and patient education. |

### Best study targets

| Need | Best examples |
|---|---|
| Trust/content | Mayo Clinic, Cleveland Clinic, Einstein, Sírio-Libanês |
| Diagnostics | Fleury, Dasa |
| Dental/physio conversion | Aspen Dental, OdontoCompany, Bupa Dental, ATI, Ascenti |

---

## 7.5 Fitness & Studios

**Subcategories:** gym, yoga, pilates, cycling, dance, martial arts, music school.

> **Template available:** [`templates/studio.md`](templates/studio.md) — 4 archetypes (Equinox Premium Editorial · Smart Fit/Planet Fitness Mass-Market · Hotpod Yoga Boutique Atmospheric · **Solo Instructor / Single Studio** as agency default for ~70% of studio clients). Class-as-product framing, schedule visibility rules, and first-class-free conventions codified there.

### Category UX checklist

- Membership plans are clear
- Trial/intro CTA is visible
- Class schedules are easy to browse
- Instructor/teacher profiles are visible where relevant
- Locations are easy to find
- App integration is clear for chains
- Photos/video show the real space and class energy

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Smart Fit | [smartfit.com.br](https://www.smartfit.com.br/) | Gym chain | Strong mass-market gym benchmark for plan selection, location search, and sign-up conversion. |
| Brazil | Bio Ritmo | [bioritmo.com.br](https://www.bioritmo.com.br/) | Premium gym chain | Good premium gym reference for class offerings, units, memberships, and brand energy. |
| Brazil | Bodytech | [bodytech.com.br](https://www.bodytech.com.br/) | Fitness club chain | Useful premium fitness-club benchmark for unit pages, plans, and broader wellness positioning. |
| Brazil | Cia Athletica | [ciaathletica.com.br](https://ciaathletica.com.br/) | Fitness/sports club | Useful sports-club benchmark for broad facilities and membership communication. |
| Brazil | School of Rock Brasil | [schoolofrock.com.br](https://www.schoolofrock.com.br/) | Music school chain | Strong music-school benchmark for programs, locations, trials, and parent/student conversion. |
| US | Equinox | [equinox.com](https://www.equinox.com/) | Premium fitness chain | Premium/luxury fitness reference with strong brand, photography, membership positioning, and aspiration. |
| US | Planet Fitness | [planetfitness.com](https://www.planetfitness.com/) | Gym chain | Strong mass-market gym benchmark for pricing, locations, and friendly conversion. |
| US | CorePower Yoga | [corepoweryoga.com](https://www.corepoweryoga.com/) | Yoga studio chain | Good class-booking benchmark with studio schedules, locations, class types, and memberships. |
| US | Orangetheory | [orangetheory.com](https://www.orangetheory.com/) | Fitness studio chain | Useful class-based studio benchmark with trial CTAs, locations, and program explanation. |
| US | Barry's | [barrys.com](https://www.barrys.com/) | Boutique fitness studio | Strong premium studio benchmark with distinctive brand identity and class booking. |
| Europe | PureGym | [puregym.com](https://www.puregym.com/) | Gym chain | Strong budget-gym conversion benchmark with memberships, locations, and app-first framing. |
| Europe | Basic-Fit | [basic-fit.com](https://www.basic-fit.com/) | Gym chain | Pan-European gym benchmark for pricing, locations, app, and memberships. |
| Europe | Barry's | [barrys.com](https://www.barrys.com/) | Boutique fitness studio | Premium boutique fitness reference with location-specific class booking. |
| Europe | Hotpod Yoga | [hotpodyoga.com](https://hotpodyoga.com/) | Yoga studio/franchise | Boutique yoga benchmark with franchise structure and class/location clarity. |
| Europe | Pineapple Dance Studios | [pineapple.uk.com](https://www.pineapple.uk.com/) | Dance studio | Dance-studio benchmark for classes, schedules, and community history. |

### Best study targets

| Need | Best examples |
|---|---|
| Mass conversion | Smart Fit, Planet Fitness, PureGym, Basic-Fit |
| Premium brand | Equinox, Barry's, Bio Ritmo |
| Studio/class UX | CorePower Yoga, Hotpod Yoga, Pineapple Dance Studios, School of Rock |

---

## 7.6 Professional Services

**Subcategories:** lawyers, accountants, tax advisors, consultants, insurance brokers, financial advisors.

> **No template yet** — benchmark-only category. Build a vertical template (using the 10-section format from `templates/gastronomy.md`) only when a Professional Services prospect signs. Until then, use the references below + the Solo-Operator meta-archetype in `DESIGN-BEST-PRACTICES.md` for scoping.

### Category UX checklist

- Expertise/practice areas are specific
- Team profiles build trust
- Consultation CTA is low-friction
- Case studies, insights, or proof are included
- Credentials, awards, memberships, or certifications are visible
- Contact forms are short and clear
- Insurance/financial services should make quote/product paths obvious
- Avoid corporate beige fog and “we deliver solutions” sludge

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Mattos Filho | [mattosfilho.com.br](https://www.mattosfilho.com.br/) | Law firm | Strong corporate law reference with practice areas, credentials, insights, and polished institutional design. |
| Brazil | Machado Meyer | [machadomeyer.com.br](https://www.machadomeyer.com.br/) | Law firm | Useful law-firm benchmark for modern typography, practice areas, lawyers, and credibility. |
| Brazil | Pinheiro Neto Advogados | [pinheironeto.com.br](https://www.pinheironeto.com.br/) | Law firm | Top-tier law-firm reference for sectors, professionals, and institutional trust. |
| Brazil | Contabilizei | [contabilizei.com.br](https://www.contabilizei.com.br/) | Accounting services | Strong accounting/SMB finance conversion benchmark with pricing, plans, and productized service UX. |
| Brazil | Porto Seguro | [portoseguro.com.br](https://www.portoseguro.com.br/) | Insurance/financial services | Useful insurance/service benchmark with product segmentation, quote paths, and trusted brand structure. |
| US | Morgan & Morgan | [forthepeople.com](https://www.forthepeople.com/) | Law firm | Strong legal conversion benchmark with free case evaluation, local/national positioning, and trust signals. |
| US | H&R Block | [hrblock.com](https://www.hrblock.com/) | Tax/accounting services | Excellent tax service benchmark with online, in-person, business, bookkeeping, and office-finder flows. |
| US | Pilot | [pilot.com](https://pilot.com/) | Accounting/bookkeeping services | Modern bookkeeping/accounting benchmark with SaaS-like pricing clarity and simple value proposition. |
| US | State Farm | [statefarm.com](https://www.statefarm.com/) | Insurance provider | Strong quote, product segmentation, local-agent, and trust benchmark. |
| US | Progressive | [progressive.com](https://www.progressive.com/) | Insurance provider | Strong insurance quote UX and product comparison structure. |
| Europe | Clifford Chance | [cliffordchance.com](https://www.cliffordchance.com/home.html) | Law firm | Global law-firm benchmark for expertise, people, offices, insights, and professional trust. |
| Europe | Taylor Wessing | [taylorwessing.com](https://www.taylorwessing.com/en/) | Law firm | Strong professional-services UX with modern insight-driven structure and sector clarity. |
| Europe | A&O Shearman | [aoshearman.com](https://www.aoshearman.com/) | Law firm | Large law-firm benchmark for global professional credibility. |
| Europe | Deloitte UK | [deloitte.com/uk](https://www.deloitte.com/uk/en.html) | Consultancy/professional services | Useful for sectors, insights, services, and lead-generation architecture. |
| Europe | AXA | [axa.com](https://www.axa.com/) | Insurance/financial services | Insurance benchmark for global product/service hierarchy and trust. |

### Best study targets

| Need | Best examples |
|---|---|
| Legal trust | Mattos Filho, Machado Meyer, Clifford Chance, Taylor Wessing |
| Conversion/service productization | H&R Block, Contabilizei, Pilot |
| Insurance/quote UX | Porto Seguro, State Farm, Progressive, AXA |

---

## 7.7 Home & Garden

**Subcategories:** florists, garden centers, plant shops, bonsai, landscaping, lawn care, garden/home retail.

> **No template yet** — benchmark-only category. Florists/plant shops are Type 1–2 builds (info + WhatsApp); landscaping is Type 2 (info + quote form). Build a vertical template only when a Home & Garden prospect signs.

### Category UX checklist

- Product photography is strong
- Delivery/service area is clear
- Same-day or scheduled delivery is visible where relevant
- Seasonal campaigns are easy to find
- Plant/product care information is useful
- Ecommerce filters are helpful
- WhatsApp or inquiry CTA is visible for Brazil/local service providers

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Giuliana Flores | [giulianaflores.com.br](https://www.giulianaflores.com.br/) | Florist/ecommerce | Strong flower ecommerce benchmark for occasions, delivery, gifting, and category navigation. |
| Brazil | Flores Online | [floresonline.com.br](https://www.floresonline.com.br/) | Florist/ecommerce | Good florist reference for delivery-first flow, gifting, and product browsing. |
| Brazil | Plantei Garden Center | [plantei.com.br](https://www.plantei.com.br/) | Garden ecommerce | Useful plant/garden ecommerce benchmark with product categories and care-oriented retail. |
| Brazil | Cobasi | [cobasi.com.br](https://www.cobasi.com.br/) | Pet/garden retail | Useful hybrid retail benchmark for pet/garden goods, ecommerce, stores, and services. |
| Brazil | Leroy Merlin Brasil | [leroymerlin.com.br](https://www.leroymerlin.com.br/) | Home/garden retail | Large home/garden benchmark for product taxonomy, search, categories, and omnichannel UX. |
| US | 1-800-Flowers | [1800flowers.com](https://www.1800flowers.com/) | Flower/gift ecommerce | Strong gifting, occasion filters, delivery timing, and upsell benchmark. |
| US | The Sill | [thesill.com](https://www.thesill.com/) | Plant ecommerce | Excellent plant ecommerce with product education, filters, care guides, and strong brand voice. |
| US | Terrain | [shopterrain.com](https://www.shopterrain.com/) | Premium garden/home retail | Good premium home/garden retail benchmark with editorial product presentation. |
| US | Monrovia | [monrovia.com](https://www.monrovia.com/) | Plant nursery/catalog | Useful plant catalog and education benchmark. |
| US | TruGreen | [trugreen.com](https://www.trugreen.com/) | Lawn care service | Strong lawn-care service conversion benchmark with quote and service-area flows. |
| Europe | Bloom & Wild | [bloomandwild.com](https://www.bloomandwild.com/) | Flower ecommerce | Strong flower/gifting ecommerce UX with distinctive brand and delivery flow. |
| Europe | Interflora UK | [interflora.co.uk](https://www.interflora.co.uk/) | Florist network | Useful occasion-led navigation, delivery-date UX, gifts/plants, and international flower delivery. |
| Europe | Patch Plants | [patchplants.com](https://www.patchplants.com/) | Plant ecommerce | Strong plant ecommerce and care-guide benchmark with distinctive tone. |
| Europe | Dobbies | [dobbies.com](https://www.dobbies.com/) | Garden center chain | Garden-center chain reference for ecommerce, stores, and seasonal product categories. |
| Europe | The Chelsea Gardener | [chelseagardener.com](https://www.chelseagardener.com/) | Premium garden center | Premium local garden-center benchmark with strong visual presentation. |

### Best study targets

| Need | Best examples |
|---|---|
| Florist/gifting | Giuliana Flores, Flores Online, 1-800-Flowers, Bloom & Wild, Interflora |
| Plant ecommerce | The Sill, Patch Plants, Plantei |
| Garden/home retail | Leroy Merlin, Terrain, Dobbies |

---

## 7.8 Artisan & Creative Retail

**Subcategories:** jewelry, ceramics, pottery, clay studios, handmade goods, galleries, craft shops.

> **No template yet** — benchmark-only category. Often crosses into Type 4 (transactional ecommerce) if the artisan sells online — different stack tier, different pricing. Build a template only when an Artisan prospect signs.

### Category UX checklist

- Materials and craftsmanship are explained
- Product photography shows scale, texture, and use
- Maker/artist story is visible
- Custom orders or commissions have a clear route
- Ecommerce is easy but still feels premium
- Origin/provenance builds trust
- Avoid generic AI-looking product grids and soulless copy

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | H.Stern | [hstern.com.br](https://www.hstern.com.br/) | Premium jewelry brand | Strong luxury jewelry benchmark for product presentation, brand heritage, and premium ecommerce. |
| Brazil | Vivara | [vivara.com.br](https://www.vivara.com.br/) | Jewelry chain/ecommerce | Useful jewelry retail benchmark with product categories, campaigns, and ecommerce flows. |
| Brazil | Monte Carlo | [montecarlo.com.br](https://www.montecarlo.com.br/) | Jewelry chain/ecommerce | Jewelry benchmark for collections, gifting, product filtering, and retail/ecommerce UX. |
| Brazil | SouQ Store | [souqstore.com.br](https://www.souqstore.com.br/) | Artisan/decor retail | Strong visual retail reference with cultural/decor positioning and ecommerce structure. |
| Brazil | Tok&Stok | [tokstok.com.br](https://www.tokstok.com.br/) | Design/home retail | Useful product taxonomy and visual merchandising benchmark for decor/design retail. |
| US | Heath Ceramics | [heathceramics.com](https://www.heathceramics.com/) | Ceramics/artisan retail | Excellent craft storytelling, product design, photography, and premium ecommerce benchmark. |
| US | East Fork | [eastfork.com](https://eastfork.com/) | Pottery/ceramics brand | Strong pottery/community/ecommerce reference with distinctive voice. |
| US | Catbird | [catbirdnyc.com](https://www.catbirdnyc.com/) | Jewelry brand | Good jewelry benchmark with strong brand personality and product storytelling. |
| US | Tiffany & Co. | [tiffany.com](https://www.tiffany.com/) | Luxury jewelry brand | Luxury jewelry benchmark for product presentation, gifting, and premium ecommerce. |
| US | David Yurman | [davidyurman.com](https://www.davidyurman.com/) | Premium jewelry brand | Strong premium jewelry UX and collection architecture reference. |
| Europe | Royal Copenhagen | [royalcopenhagen.com](https://www.royalcopenhagen.com/) | Porcelain/craft brand | Strong heritage craft benchmark with product collections and story. |
| Europe | Pandora | [pandora.net](https://www.pandora.net/) | Jewelry brand | Global jewelry ecommerce benchmark with product personalization and gifting. |
| Europe | Monica Vinader | [monicavinader.com](https://www.monicavinader.com/) | Contemporary jewelry brand | Strong contemporary jewelry benchmark with clean UX and product storytelling. |
| Europe | Emma Bridgewater | [emmabridgewater.co.uk](https://www.emmabridgewater.co.uk/) | Pottery/homeware brand | Excellent blend of heritage storytelling, personalization, and ecommerce. |
| Europe | Manufactum | [manufactum.de](https://www.manufactum.de/) | Artisan/quality goods retail | Strong anti-slop benchmark: editorial product descriptions, provenance, craft, and durable-goods positioning. |

### Best study targets

| Need | Best examples |
|---|---|
| Craft/story | Heath Ceramics, East Fork, Manufactum, Royal Copenhagen |
| Jewelry ecommerce | H.Stern, Vivara, Catbird, Tiffany, Monica Vinader |
| Anti-slop visual identity | Heath Ceramics, Manufactum, SouQ, Emma Bridgewater |

---

## 7.9 Pets

**Subcategories:** veterinary clinics, grooming, daycare, boarding, training, pet retail.

> **No template yet** — benchmark-only category. Vet/grooming/daycare are close architectural relatives of `templates/health.md` (Solo Practitioner) and `templates/beauty.md` (Service Chain) — adapt those archetypes when a Pets prospect signs.

### Category UX checklist

- Emergency contact is obvious for vets
- Booking flow is easy
- Services and pricing/requirements are clear
- Staff photos and credentials build trust
- Pet photography feels warm, not stock-stiff
- Vaccination/health requirements are visible for daycare/boarding/grooming
- Product/service bundles and subscriptions are clear for retail

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Petz | [petz.com.br](https://www.petz.com.br/) | Pet retail/services chain | Strong pet retail and services benchmark with ecommerce, stores, grooming, and pet-health ecosystem. |
| Brazil | Cobasi | [cobasi.com.br](https://www.cobasi.com.br/) | Pet/garden retail chain | Useful pet retail benchmark with stores, services, ecommerce, and category depth. |
| Brazil | Petlove | [petlove.com.br](https://www.petlove.com.br/) | Pet ecommerce/services | Strong pet ecommerce and subscription benchmark. |
| Brazil | Seres | [seres.vet](https://seres.vet/) | Veterinary clinic network | Strong vet benchmark with online scheduling, health services, emergency guidance, and trust. |
| US | Petco | [petco.com](https://www.petco.com/) | Pet retail/services chain | Pet retail/services benchmark for ecommerce, stores, grooming, vet services, and loyalty. |
| US | PetSmart | [petsmart.com](https://www.petsmart.com/) | Pet retail/services chain | Strong pet retail, grooming, training, and service booking reference. |
| US | Banfield Pet Hospital | [banfield.com](https://www.banfield.com/) | Vet clinic chain | Veterinary chain benchmark with wellness plans, locations, and appointment flow. |
| US | VCA Animal Hospitals | [vcahospitals.com](https://vcahospitals.com/) | Vet clinic network | Veterinary network benchmark for local hospital pages and service information. |
| US | Bond Vet | [bondvet.com](https://bondvet.com/) | Premium vet clinic network | Strong premium vet benchmark with modern brand, warm tone, booking, and trust-building. |
| Europe | Pets at Home | [petsathome.com](https://www.petsathome.com/) | Pet retail/services chain | UK pet retail/services benchmark with products, grooming, vet services, and store UX. |
| Europe | zooplus | [zooplus.com](https://www.zooplus.com/) | Pet ecommerce | Large pet ecommerce reference for product taxonomy, subscriptions, and offers. |
| Europe | Fressnapf | [fressnapf.de](https://www.fressnapf.de/) | Pet retail chain | German pet retail benchmark with ecommerce, stores, and pet services. |
| Europe | AniCura | [anicura.com](https://www.anicura.com/) | Veterinary group | Pan-European vet-group benchmark with scalable clinic and trust structure. |
| Europe | Medivet | [medivetgroup.com](https://www.medivetgroup.com/) | Vet clinic network | UK vet network benchmark for practice finder, services, emergency/out-of-hours routing. |

### Best study targets

| Need | Best examples |
|---|---|
| Vet trust | Seres, Bond Vet, Banfield, VCA, AniCura, Medivet |
| Pet retail/services | Petz, Cobasi, Petco, PetSmart, Pets at Home |
| Ecommerce/subscription | Petlove, zooplus, Fressnapf |

---

## 7.10 Automotive

**Subcategories:** repair, detailing, tires, car wash, auto glass, rental, driving school.

> **No template yet** — benchmark-only category. Auto repair/glass is a close architectural relative of `templates/trades.md` (Conversion Chain or Solo-Operator) — phone-first CTA, service area, warranty messaging. Adapt that template when an Automotive prospect signs.

### Category UX checklist

- Service categories are clear
- Online booking or quote is available
- Locations and opening hours are visible
- Vehicle lookup tools are useful where relevant
- Warranty/guarantee is clear
- Financing/payment options appear where relevant
- Before/after photography is strong for detailing/bodywork
- Emergency/mobile service is obvious where relevant

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Localiza | [localiza.com](https://www.localiza.com/brasil/pt-br) | Car rental chain | Strong booking and location UX for vehicle rental. |
| Brazil | Unidas | [unidas.com.br](https://www.unidas.com.br/) | Car rental/leasing chain | Useful automotive rental/leasing benchmark for booking and fleet/product structure. |
| Brazil | DPaschoal | [dpaschoal.com.br](https://www.dpaschoal.com.br/) | Tire/auto service chain | Strong auto-service benchmark for tires, services, appointments, and product/service search. |
| Brazil | DryWash | [drywash.com.br](https://drywash.com.br/) | Car wash/detailing chain | Useful detailing/car wash benchmark with service presentation and environmental positioning. |
| US | Safelite | [safelite.com](https://www.safelite.com/) | Auto glass service network | Excellent quote/scheduling benchmark with mobile service, locations, insurance/payment help, and warranty messaging. |
| US | Jiffy Lube | [jiffylube.com](https://www.jiffylube.com/) | Auto service chain | Quick-service automotive benchmark with locations, services, coupons, and maintenance flows. |
| US | Firestone Complete Auto Care | [firestonecompleteautocare.com](https://www.firestonecompleteautocare.com/) | Auto repair/tire chain | Strong repair/tire/service benchmark with vehicle/service lookup and appointment UX. |
| US | Midas | [midas.com](https://www.midas.com/) | Auto repair franchise | Useful franchise benchmark for service pages, offers, appointments, and warranty/trust messaging. |
| US | Caliber Collision | [caliber.com](https://www.caliber.com/) | Collision repair network | Collision/body repair benchmark with estimate, locations, claims support, and service explanation. |
| Europe | Kwik Fit | [kwik-fit.com](https://www.kwik-fit.com/) | Tire/auto service chain | Strong tire/service benchmark with vehicle lookup, fitting, appointments, and local centers. |
| Europe | Halfords | [halfords.com](https://www.halfords.com/) | Auto/bike retail/services | Auto/bike service and retail benchmark with appointment/product/service flows. |
| Europe | Autoglass | [autoglass.co.uk](https://www.autoglass.co.uk/) | Auto glass service network | Strong auto-glass repair/replacement benchmark with booking and mobile service UX. |
| Europe | Euromaster | [euromaster.com](https://www.euromaster.com/) | Tire/auto service chain | European tire/service benchmark with regional locations and service segmentation. |
| Europe | Sixt | [sixt.com](https://www.sixt.com/) | Car rental brand | Strong global rental benchmark with fast booking and location UX. |

### Best study targets

| Need | Best examples |
|---|---|
| Service booking/quote | Safelite, Kwik Fit, Firestone, DPaschoal |
| Rental UX | Localiza, Unidas, Sixt |
| Repair/bodywork trust | Caliber, Midas, Autoglass |

---

## 7.11 Education & Kids

**Subcategories:** daycare, tutoring, language schools, coding schools, music lessons, after-school programs.

> **No template yet** — benchmark-only category. Single-instructor music/language lessons map to `templates/studio.md` (Solo Instructor archetype); daycare/tutoring centers are closer to `templates/health.md` (Solo Practitioner trust patterns + parent-trust messaging). Adapt when an Education prospect signs.

### Category UX checklist

- Programs are organized by age/level
- Parent/student trust signals are visible
- Teacher/staff credentials are clear
- Trial class, consultation, or placement test CTA is obvious
- Locations are easy to search
- Safety policies are visible for children
- Schedules and pricing are clear where possible
- Tone should feel trustworthy, not like a brochure that escaped from 2007

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Wizard | [wizard.com.br](https://www.wizard.com.br/) | Language school chain | Strong language-school benchmark with course pages, units, and lead capture. |
| Brazil | CNA | [cna.com.br](https://www.cna.com.br/) | Language school chain | Useful language-school chain benchmark with courses, location pages, and enrollment flow. |
| Brazil | Cultura Inglesa | [culturainglesa.com.br](https://www.culturainglesa.com.br/) | Language school | Strong education reference with course structure and brand authority. |
| Brazil | Kumon Brasil | [kumon.com.br](https://www.kumon.com.br/) | Tutoring franchise | Tutoring/franchise benchmark with parent-focused messaging and location structure. |
| Brazil | Maple Bear Brasil | [maplebear.com.br](https://www.maplebear.com.br/) | School/franchise network | School/franchise education benchmark with institutional trust and unit structure. |
| US | Mathnasium | [mathnasium.com](https://www.mathnasium.com/) | Tutoring franchise | Strong tutoring benchmark with local centers, programs, assessments, and parent conversion. |
| US | Kumon US | [kumon.com](https://www.kumon.com/) | Tutoring franchise | Tutoring benchmark with age/program explanations and center finder. |
| US | The Goddard School | [goddardschool.com](https://www.goddardschool.com/) | Preschool/daycare franchise | Strong childcare benchmark for parent trust, school finder, programs, and safety messaging. |
| US | KinderCare | [kindercare.com](https://www.kindercare.com/) | Childcare network | Strong daycare benchmark for center locator, programs, family trust, and enrollment. |
| US | Sylvan Learning | [sylvanlearning.com](https://www.sylvanlearning.com/) | Tutoring/education services | Useful education services benchmark for programs, assessments, and local centers. |
| Europe | Bright Horizons UK | [brighthorizons.co.uk](https://www.brighthorizons.co.uk/) | Nursery/childcare network | Strong childcare/nursery benchmark for parent discovery, trust, and location UX. |
| Europe | EF Education First | [ef.com](https://www.ef.com/) | Language/travel education | Strong multilingual education benchmark with program/product architecture and immersive positioning. |
| Europe | Berlitz | [berlitz.com](https://www.berlitz.com/) | Language school | Language-school benchmark with courses, assessment, global locations, and clear program flows. |
| Europe | British Council | [britishcouncil.org](https://www.britishcouncil.org/) | Education/culture organization | Strong language/education reference with global content, courses, and institutional trust. |
| Europe | Stagecoach Performing Arts | [stagecoach.co.uk](https://www.stagecoach.co.uk/) | Performing arts school network | Kids performing-arts benchmark with classes, age groups, local schools, and parent-facing copy. |

### Best study targets

| Need | Best examples |
|---|---|
| Parent trust | KinderCare, Goddard, Bright Horizons, Maple Bear |
| Tutoring/local conversion | Mathnasium, Kumon, Sylvan |
| Language/multilingual education | Wizard, CNA, Cultura Inglesa, EF, Berlitz |

---

## 7.12 Events & Hospitality

**Subcategories:** hotels, event venues, wedding venues, caterers, photographers, event planners.

> **No template yet** — benchmark-only category. Photographers/event planners map to a solo-operator archetype; venues need gallery-first IA closer to `templates/gastronomy.md` (Heritage Editorial). Often crosses into Type 3 (booking-DB) if availability calendars are required. Adapt when an Events prospect signs.

### Category UX checklist

- Gallery-first presentation
- Packages, capacity, and venue details are easy to find
- Availability/inquiry form is low-friction
- Location and accessibility are visible
- Reviews, press, awards, or past events build trust
- Video/virtual tours help for venues/hotels
- Photography quality is non-negotiable
- Design should sell the atmosphere, not just list amenities like a storage unit

### Benchmark websites

| Region | Business | URL | Type | Why benchmark it |
|---|---|---|---|---|
| Brazil | Fasano | [fasano.com.br](https://www.fasano.com.br/) | Luxury hospitality group | Premium hotel/hospitality benchmark for luxury positioning, photography, and booking. |
| Brazil | Hotel Unique | [hotelunique.com](https://www.hotelunique.com/) | Boutique/luxury hotel | Strong design-led hotel reference with distinctive architecture and atmosphere. |
| Brazil | Casa Petra | [casapetra.com.br](https://www.casapetra.com.br/) | Event/wedding venue | Useful event/wedding venue benchmark for galleries, event structure, and inquiry flow. |
| Brazil | Grupo Bisutti | [bisutti.com.br](https://www.bisutti.com.br/) | Event venue group | Event group benchmark with multiple venues and event-package UX. |
| Brazil | Buffet França | [buffetfranca.com.br](https://www.buffetfranca.com.br/) | Catering/events | Catering/event benchmark for menus, event types, and inquiry. |
| US | Marriott | [marriott.com](https://www.marriott.com/) | Hotel group | Large-scale hotel booking benchmark with locations, loyalty, search, and booking engine. |
| US | Four Seasons | [fourseasons.com](https://www.fourseasons.com/) | Luxury hotel group | Luxury hospitality benchmark with strong photography, destination pages, and booking. |
| US | Arlo Hotels | [arlohotels.com](https://arlohotels.com/) | Boutique hotel group | Experiential boutique hotel benchmark with neighborhood/location storytelling. |
| US | Great Performances | [greatperformances.com](https://www.greatperformances.com/) | Catering/events | Catering and events benchmark for services, venues, and visual storytelling. |
| US | Wolfgang Puck Catering | [wolfgangpuckcatering.com](https://wolfgangpuckcatering.com/) | Premium catering/events | Premium catering/event benchmark with brand trust and event inquiry flow. |
| Europe | Accor | [all.accor.com](https://all.accor.com/) | Hotel group | Large hotel booking benchmark with loyalty, destinations, brands, and booking UX. |
| Europe | The Hoxton | [thehoxton.com](https://thehoxton.com/) | Boutique hotel group | Strong boutique hospitality benchmark with local culture, rooms, events, and brand tone. |
| Europe | Soho House | [sohohouse.com](https://www.sohohouse.com/) | Members club/hospitality | Hospitality/community reference with premium positioning and location storytelling. |
| Europe | citizenM | [citizenm.com](https://www.citizenm.com/) | Boutique hotel chain | Strong playful hotel benchmark with fast booking, strong identity, and app-linked hospitality. |
| Europe | Hedsor House | [hedsor.com](https://www.hedsor.com/) | Event/wedding venue | Strong event/wedding venue benchmark with galleries, capacity, packages, and inquiry structure. |

### Best study targets

| Need | Best examples |
|---|---|
| Luxury hospitality | Fasano, Four Seasons, Soho House |
| Boutique hotel UX | Hotel Unique, Arlo, The Hoxton, citizenM |
| Events/weddings/catering | Casa Petra, Bisutti, Hedsor House, Great Performances, Wolfgang Puck Catering |

---

# 8. Traffic/scale references vs design/UX references

This matrix separates “big and useful” from “beautiful and useful.” Sometimes they overlap. Often they don’t, because the universe enjoys paperwork.

| Category | Scale / operational references | Design / UX references |
|---|---|---|
| Gastronomy | Starbucks, Chipotle, Madero, Pret, McDonald's Brasil | Big Mamma, Dishoom, Coffee Lab, D.O.M., Blue Bottle |
| Trades / Home Services | Roto-Rooter, Mr. Electric, Porto Seguro Serviços, Dyno | Pimlico, Banham, uBreakiFix, Timpson |
| Beauty & Aesthetics | Great Clips, European Wax Center, Espaçolaser, Massage Envy | LACES and Hair, AIRE, TONI&GUY, Barber Barber |
| Health | Mayo Clinic, Cleveland Clinic, Einstein, Nuffield Health | One Medical, Fleury, Sírio-Libanês, Bupa Dental, Ascenti |
| Fitness & Studios | Smart Fit, Planet Fitness, PureGym, Basic-Fit | Equinox, Barry's, Bio Ritmo, Hotpod Yoga |
| Professional Services | H&R Block, State Farm, Progressive, Porto Seguro | Mattos Filho, Machado Meyer, Taylor Wessing, Clifford Chance, Pilot |
| Home & Garden | 1-800-Flowers, Interflora, Leroy Merlin, Cobasi | The Sill, Bloom & Wild, Patch Plants, Terrain, Chelsea Gardener |
| Artisan & Creative Retail | Vivara, Pandora, Tiffany, Tok&Stok | Heath Ceramics, East Fork, Manufactum, Emma Bridgewater, H.Stern |
| Pets | Petco, PetSmart, Petz, Cobasi, Pets at Home | Bond Vet, Seres, AniCura, Medivet |
| Automotive | Safelite, Jiffy Lube, Localiza, Kwik Fit | DryWash, Caliber, Autoglass, DPaschoal |
| Education & Kids | Kumon, Mathnasium, KinderCare, Wizard, EF | Maple Bear, Bright Horizons, Stagecoach, Cultura Inglesa |
| Events & Hospitality | Marriott, Accor, Fasano, Four Seasons | The Hoxton, citizenM, Hotel Unique, Hedsor House, Casa Petra |

---

# 9. Universal design pattern library

| Pattern | Most effective categories | Notes |
|---|---|---|
| **Sticky mobile CTA** | Trades, Beauty, Health, Pets, Automotive, Events | Call, WhatsApp, book, quote, or inquire. Do not bury the money button. |
| **Location-first navigation** | Chains, clinics, gyms, restaurants, schools, pet services | Essential for multi-location brands. |
| **Service cards with pricing** | Beauty, Trades, Automotive, Pets, Education | Pricing transparency reduces hesitation. Where fixed pricing is impossible, explain quote logic. |
| **Staff/instructor profiles** | Beauty, Health, Fitness, Education, Pets, Professional Services | Trust is often person-to-person before it is brand-to-person. |
| **Before/after proof** | Beauty, dental, home services, automotive detailing, repair | Strong visual proof, but avoid manipulative or medically risky presentation. |
| **Gallery-first design** | Gastronomy, Events, Florists, Artisans, Hospitality | When the product is visual/experiential, the gallery leads. |
| **Emergency CTA** | Locksmith, plumber, electrician, vet, auto glass, towing | Must be above fold and clickable on mobile. |
| **Embedded booking calendar** | Health, Beauty, Fitness, Education, Pets | Better than sending users into a cold third-party void, unless the third-party UX is excellent. |
| **WhatsApp CTA** | Brazil, especially local services | Should open with a useful pre-filled message where possible. |
| **Multilingual/privacy UX** | Europe, tourism, health, education, hospitality | Language and privacy clarity can be conversion features, not just compliance chores. |
| **Membership/subscription framing** | Fitness, Beauty, Pets, Education, Coffee/Food | Good for repeat purchase and retention. Explain benefits clearly. |
| **Care guides / educational content** | Home & Garden, Pets, Health, Education, Artisan | Helps SEO and trust. Also prevents users from doing dumb things to plants, pets, and themselves. |

---

# 10. Scoring framework

Use this scorecard for a deeper audit of selected examples. Do **not** audit every site unless your idea of fun is drowning in tabs.

Recommended sample: **2–3 websites per category**.

| Criterion | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Performance | Very slow / poor CWV | Basic optimization | Mostly passes CWV | Strong CWV and fast mobile |
| Security | HTTP or major issues | HTTPS only | HTTPS + basic headers | HTTPS + strong headers/privacy |
| SEO | Weak/no metadata | Basic metadata | Good metadata + local pages | Schema + strong local/category SEO |
| UI/UX | Confusing | Functional | Good | Excellent |
| Conversion | More than 5 steps | 4–5 steps | 2–3 steps | 1–2 steps |
| Trust | Weak/no proof | One trust element | Several trust elements | Reviews, credentials, photos, guarantees |
| Mobile UX | Poor | Responsive only | Responsive + clear CTA | Mobile-first with sticky CTA |
| Accessibility | Major failures | Some fixes | Mostly compliant | Strong WCAG alignment |
| Anti-slop design | Generic template | Some personality | Distinctive elements | Strong original identity |
| Regional fit | Ignored | Partial | Good | Excellent |

**Total score:** 0–30

| Score range | Interpretation |
|---|---|
| 0–10 | Weak. Useful mostly as a cautionary tale. |
| 11–18 | Functional but forgettable. Typical small-business internet porridge. |
| 19–23 | Solid. Worth studying. |
| 24–27 | Strong benchmark. |
| 28–30 | Best-in-class. Probably has a team and budget, the suspicious luxury of functioning well. |

---

# 11. Recommended audit tools

| Audit type | Tool | Free label | Official link | Best for |
|---|---|---:|---|---|
| Performance | PageSpeed Insights | Free | [pagespeed.web.dev](https://pagespeed.web.dev/) | Core Web Vitals and quick diagnostics |
| Performance | Lighthouse | Free | [developer.chrome.com/docs/lighthouse](https://developer.chrome.com/docs/lighthouse/overview) | Performance, accessibility, SEO, best practices |
| Performance | WebPageTest | Freemium | [webpagetest.org](https://www.webpagetest.org/) | Waterfall and deeper performance debugging |
| Performance | GTmetrix | Freemium | [gtmetrix.com](https://gtmetrix.com/) | Performance reports and monitoring |
| Security | SSL Labs | Free | [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/) | TLS/SSL configuration |
| Security | SecurityHeaders.com | Free | [securityheaders.com](https://securityheaders.com/) | HTTP security headers |
| Security | MDN HTTP Observatory | Free | [developer.mozilla.org/observatory](https://developer.mozilla.org/en-US/observatory) | Security headers and configuration |
| Security | Internet.nl | Free | [internet.nl](https://internet.nl/) | HTTPS, DNSSEC, IPv6, mail standards |
| Security | Google Safe Browsing Status | Free | [transparencyreport.google.com/safe-browsing/search](https://transparencyreport.google.com/safe-browsing/search) | Unsafe-site status |
| SEO | Google Search Console | Free | [search.google.com/search-console](https://search.google.com/search-console/about) | Indexing, queries, sitemap, Core Web Vitals for owned sites |
| SEO | Bing Webmaster Tools | Free | [bing.com/webmasters](https://www.bing.com/webmasters/home) | Bing indexing and SEO diagnostics |
| SEO | Rich Results Test | Free | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) | Structured data eligibility |
| SEO | Schema Markup Validator | Free | [validator.schema.org](https://validator.schema.org/) | Schema.org validation |
| SEO | Ahrefs Webmaster Tools | Freemium | [ahrefs.com/webmaster-tools](https://ahrefs.com/webmaster-tools) | Audits/backlinks for verified sites |
| SEO | Semrush Keyword Magic Tool | Freemium | [semrush.com/analytics/keywordmagic](https://www.semrush.com/analytics/keywordmagic/) | Keyword research |
| Accessibility | WAVE | Free | [wave.webaim.org](https://wave.webaim.org/) | Accessibility review |
| Accessibility | axe DevTools | Freemium | [deque.com/axe/devtools](https://www.deque.com/axe/devtools/) | Browser accessibility testing |
| Accessibility | Stark | Freemium | [getstark.co](https://www.getstark.co/) | Design accessibility checks |
| Responsive layout | Responsively App | Free | [responsively.app](https://responsively.app/) | Multi-device responsive checks |
| Responsive layout | BrowserStack | Free trial / paid | [browserstack.com](https://www.browserstack.com/) | Real browser/device testing |
| Behavior after launch | Microsoft Clarity | Free | [clarity.microsoft.com](https://clarity.microsoft.com/) | Heatmaps, recordings, rage clicks |
| Behavior after launch | Hotjar | Freemium | [hotjar.com](https://www.hotjar.com/) | Heatmaps, recordings, surveys |
| Design research | Mobbin | Freemium | [mobbin.com](https://mobbin.com/) | UI pattern research |
| Design research | Awwwards | Free browsing / paid | [awwwards.com](https://www.awwwards.com/) | Visual/design inspiration |
| Design research | Baymard Institute | Limited free / paid | [baymard.com](https://baymard.com/) | Research-backed UX patterns |
| Design research | Laws of UX | Free | [lawsofux.com](https://lawsofux.com/) | UX principles |
| Design research | Component Gallery | Free | [component.gallery](https://component.gallery/) | Component references |

---

# 12. Aggregator and platform appendix

These platforms are useful for **market context**, not the main real-business benchmark. Use them to study discovery, filtering, reviews, booking, maps, and mobile behavior.

| Category | Brazil | United States | Europe |
|---|---|---|---|
| Gastronomy | iFood, TheFork, Google Maps, TripAdvisor | DoorDash, OpenTable, Resy, Yelp, Google Maps | TheFork, Just Eat, Deliveroo, Lieferando, Google Maps, TripAdvisor |
| Trades | GetNinjas, Habitissimo, Triider, Google Maps | Angi, Thumbtack, HomeAdvisor, Yelp, TaskRabbit | Checkatrade, MyBuilder, MyHammer, TaskRabbit, TrustATrader |
| Beauty | Trinks, AppBarber, Fresha, Google Maps | Booksy, Vagaro, StyleSeat, Yelp | Treatwell, Fresha, Planity, Salonkee |
| Health | Doctoralia, Google Maps | Zocdoc, Healthgrades, Google Maps | Doctolib, Jameda, Google Maps |
| Fitness / Studio | ClassPass, Wellhub, Mindbody, Google Maps | ClassPass, Mindbody, Yelp, Google Maps | ClassPass, Urban Sports Club, Eversports, Mindbody |
| Home & Garden | Marketplace florists, Google Maps | Houzz, Thumbtack, Google Maps | Houzz, Checkatrade-style platforms, Google Maps |
| Pets | DogHero/Pet-care platforms, Google Maps | Rover, Wag, Google Maps | Rover, TrustedHousesitters, Google Maps |
| Events | Casamentos.com.br, venue directories | The Knot, WeddingWire, Yelp | Bridebook, Hitched, venue directories |
| Education | Superprof, Preply, Google Maps | Preply, Wyzant, Outschool | Preply, italki, Superprof |

### How to use aggregators

Use aggregators to understand:

- Filter taxonomy
- Review presentation
- Map/list layouts
- Booking expectations
- Search terms users expect
- Mobile-first discovery patterns
- Trust and verification mechanics

Do **not** use aggregators to define:

- Brand identity
- Standalone service-page structure
- Photography style
- Original copy tone
- Local business storytelling

---

# 13. Suggested deep-audit shortlist

For a practical next step, select these sites for deeper performance/security/SEO/accessibility review.

| Category | Brazil | US | Europe |
|---|---|---|---|
| Gastronomy | Madero, Coffee Lab | Sweetgreen, Chipotle | Big Mamma, Dishoom |
| Trades | Porto Seguro Serviços, Doutor Resolve | Roto-Rooter, uBreakiFix | Pimlico, Timpson |
| Beauty | LACES and Hair, Espaçolaser | Drybar Shops, European Wax Center | AIRE, TONI&GUY |
| Health | Fleury, Sírio-Libanês | One Medical, Aspen Dental | Nuffield Health, Bupa Dental |
| Fitness | Smart Fit, Bio Ritmo | Equinox, CorePower Yoga | PureGym, Hotpod Yoga |
| Professional | Contabilizei, Machado Meyer | H&R Block, Pilot | Taylor Wessing, Clifford Chance |
| Home & Garden | Giuliana Flores, Plantei | The Sill, 1-800-Flowers | Bloom & Wild, Patch Plants |
| Artisan | H.Stern, SouQ | Heath Ceramics, Catbird | Manufactum, Emma Bridgewater |
| Pets | Seres, Petz | Bond Vet, Banfield | Medivet, AniCura |
| Automotive | DPaschoal, Localiza | Safelite, Firestone | Kwik Fit, Autoglass |
| Education | Wizard, Kumon Brasil | Mathnasium, KinderCare | EF, Bright Horizons |
| Events | Fasano, Casa Petra | Arlo, Four Seasons | The Hoxton, Hedsor House |

---

# 14. Final recommendations for building a new local business website

## 14.1 Start with the region

| Region | Build priority |
|---|---|
| Brazil | WhatsApp, Pix, mobile-first CTA, Instagram, local trust, fast loading. |
| United States | Reviews, local SEO, booking/quote flow, payment/insurance clarity, franchise-local pages. |
| Europe | GDPR/cookie UX, multilingual support, accessibility readiness, privacy trust, editorial quality. |

## 14.2 Start with the user’s intent

Most local-business visitors want one of these:

- Book an appointment
- Call now
- Request a quote
- Order food/products
- Reserve a table
- Find a location
- Check pricing
- Confirm trust
- See real work/photos
- Understand whether the business solves their exact problem

The homepage should make the top action obvious within seconds. If the visitor has to solve a little puzzle, the website has failed. People already have puzzles. They call them “forms.”

## 14.3 Use two references per category

Pick:

1. A **scale/reference leader** for structure and conversion.
2. A **design/UX leader** for brand and anti-slop quality.

Example:

| Category | Scale reference | Design reference |
|---|---|---|
| Restaurant | Sweetgreen | Big Mamma |
| Trades | Roto-Rooter | Pimlico |
| Beauty | European Wax Center | AIRE |
| Health | Mayo Clinic | One Medical |
| Studio | PureGym | Equinox |

## 14.4 Build the minimum strong local-business structure

Recommended base structure:

```text
Home
Services / Menu / Products
Locations / Service Area
Booking / Order / Quote
About / Team
Reviews / Results / Gallery
Pricing / Plans / Packages
FAQ
Contact
Legal / Privacy / Accessibility
```

Adjust by category:

| Category | Add |
|---|---|
| Gastronomy | Menu, reservations, delivery/pickup, catering, dietary info |
| Trades | Emergency CTA, quote form, service areas, licenses, guarantees |
| Beauty | Service menu, pricing, staff, booking, before/after, cancellation policy |
| Health | Specialties, providers, insurance/payment, patient portal, privacy |
| Fitness | Schedule, memberships, trial class, instructors, app |
| Professional | Practice areas, credentials, case studies, consultation CTA |
| Home & Garden | Product categories, delivery area, care guides, seasonal collections |
| Artisan | Maker story, materials, custom orders, ecommerce, provenance |
| Pets | Emergency info, booking, vaccinations/requirements, staff, packages |
| Automotive | Vehicle lookup, services, warranty, booking, financing/payment |
| Education | Programs by age/level, staff, safety, trial/enrollment CTA |
| Events | Galleries, capacity, packages, inquiry, virtual tour, availability |

## 14.5 Anti-slop design rules

A site starts feeling generic when it uses:

- Vague copy like “premium solutions for modern lifestyles”
- Stock photos that could represent any business on Earth
- Overused gradients and floating cards
- Fake dashboards or fake testimonials
- No local proof
- No real team, place, product, or service detail
- No specific reason to trust the business

Better approach:

| Weak | Strong |
|---|---|
| “We provide quality services.” | “Emergency locksmith in São Paulo, 24/7, average arrival estimate shown before booking.” |
| “Book now.” | “Book a haircut at our Jardins unit.” |
| Stock photo of smiling person | Real staff, real space, real work, real food, real before/after |
| Generic service page | Service page with pricing/estimate range, process, FAQ, reviews, local CTA |
| Template brand | Distinct typography, color, photography, tone, and proof |

---

# 15. Closing note

The best website is not automatically the prettiest one. It is the one that helps the visitor quickly understand:

1. What the business does.
2. Whether it is trustworthy.
3. What action to take next.
4. Why this business is different from every other identical-looking tab they opened.

Beauty matters. Speed matters. Trust matters. Conversion matters. Regional behavior matters. Ignore any one of them and the website becomes another sad rectangle in the browser cemetery.

