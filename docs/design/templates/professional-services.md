# professional-services.md — Professional Services Vertical Template
## Lawyer · Accountant · Tax Advisor · Consultant · Insurance Broker · Financial Advisor

**Applies to:** Professional Services clients across product types 1–3 (per `TECH.md` §1). Most agency clients in this vertical are solo or small-firm operators (Tier 1–2 builds, Type 1–2 product types). Big-law/Big-4 archetypes are documented for completeness but rarely apply to agency scope.

**Reference research:** Based on `local_business_website_benchmark_report.md` §7.6 (Mattos Filho, Machado Meyer, Pinheiro Neto, Clifford Chance, Taylor Wessing, A&O Shearman, Morgan & Morgan, H&R Block, Pilot, Contabilizei, State Farm, Progressive, AXA, Porto Seguro, Deloitte).

**Use this doc as a moodboard with principles, not a layout to clone.** If two clients in the same vertical end up with the same hero pattern, the template has failed at its job — the pattern is correct, but the visual execution must differ.

---

## Rules at a glance

- **Trust is the entire conversion path.** Professional Services clients buy *competence + confidentiality*. Stock photos, vague "we deliver solutions" copy, corporate beige fog — all kill trust faster than they build it.
- **Pick one of four archetypes** before designing: **Global Big-Law Institutional**, **Productized Mid-Tier Service**, **Insurance/Financial Quote-Led**, or **Solo Practitioner Trust-Led**. ~85 % of agency clients fall into Solo Practitioner.
- **The consultation CTA is the conversion.** Not "Learn more." Professional Services sites convert when the user submits a contact form OR clicks call/email. Pick one as primary; the others are secondary.
- **Credentials must be visible above the fold for Solo Practitioner archetype.** OAB # / Anwalt-Zulassung / Bar # / CPA # / FCA registration — the actual number, not "licensed and insured." See `DESIGN-BEST-PRACTICES.md` §3 "License / certification numbers" trust-signal pattern.
- **Specialty/practice areas must be specific.** "Labor law, traffic law, criminal law" beats "comprehensive legal services." Specificity is trust; generality is template-talk.
- **Case studies and insights matter for mid-tier+, not for Solo Practitioner.** A single-practitioner site adding "thought leadership blog" with 3 posts looks more amateur than no blog at all.
- **Avoid the suit-on-stairs stock photo.** It's the loudest AI-template tell in this vertical. See §4.

### Solo-Operator meta-archetype (cross-vertical pattern)

Most agency Professional Services clients (solo lawyer in Bayreuth, small accounting practice, single insurance broker) are the Professional-Services-specific implementation of the **Solo-Operator meta-archetype** documented in `DESIGN-BEST-PRACTICES.md` §3. The IA pattern recurs across trades / health / studio / beauty:

- Operator name in headline ("Frank Laudam — Rechtsanwalt für Arbeitsrecht in Bayreuth")
- Portrait in real workspace
- ONE primary CTA (call / email / consultation request)
- Credentials signature line (Zulassung # · years in practice · spoken languages · Kammer membership)
- Service list (5–10 practice areas, not a card grid)
- Service area named explicitly
- Pricing reassurance ("Erstberatung kostenlos" / "Free initial consultation")
- Footer with legal info (Kammer #, Impressum, Datenschutz)

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Professional-Services note:** prospects typically have *no booking platform*; instead, the existing site (tier 2) is the canonical source. If no site exists, fall to LinkedIn + Kammer/Bar association profile pages (tier 3 equivalent) for headshots and credential verification. **Stock photos in this vertical are catastrophic to trust** — `<Placeholder>` is always preferable to a stock-photo headshot.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 — 6-tier color source hierarchy. Professional Services brands are often *intentionally restrained* (navy + cream + accent line) — the vertical-default tier 5 fits more often than for other verticals.
- **Prospect intake template:** `CHECKLIST.md` §9 — the canonical structure for `docs/audit/[prospect].md`. Reference: `docs/audit/laudam.md`.

---

## Table of contents

1. [The four Professional Services archetypes](#1-the-four-professional-services-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Professional-Services-specific anti-patterns](#8-professional-services-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The four Professional Services archetypes

| Archetype | Brand priority | Primary CTA | Production cost |
|-----------|---------------|-------------|-----------------|
| **A. Global Big-Law Institutional** (Clifford Chance, A&O Shearman, Pinheiro Neto) | Institutional weight, sector authority, global reach | Find a lawyer / Subscribe to insights | Highest — requires real insights pipeline + global office data + editorial team |
| **B. Productized Mid-Tier Service** (H&R Block, Pilot, Contabilizei) | Plan/pricing clarity, SaaS-like predictability | Get started / Pick a plan | Medium — clean palette + pricing tiers + simple signup flow |
| **C. Insurance/Financial Quote-Led** (State Farm, Progressive, AXA) | Product segmentation, quote in <60 seconds | Get a quote | Medium — quote calculator integration + product comparison |
| **D. Solo Practitioner Trust-Led** (the agency's default Professional Services client) | Operator credibility, single-area specialty, local trust | Call / WhatsApp / Erstberatung request | Low — the agency's standard Tier 1–2 build with credentials front-and-center |

**Default for new Type 1/2 clients:** Archetype D. The other three are documented for archetype completeness but rarely match the agency's actual prospects (solo lawyers, single-office accountants, individual brokers).

---

## 2. Information architecture per archetype

### Archetype A — Global Big-Law Institutional

Section order (top → bottom):

1. **Header bar** — minimal: logo + EXPERTISE / PEOPLE / INSIGHTS / OFFICES / CAREERS. No "Get a quote" CTA — Big Law doesn't quote-shop.
2. **Hero** — large editorial photo OR institutional statement headline. Often a global event tied to the firm's work.
3. **Featured insights** — 3-4 articles, magazine layout. Insights are the brand more than the lawyers are.
4. **Expertise grid** — practice areas as filterable taxonomy (corporate / litigation / regulatory / tax / IP / etc.) × sectors (energy / fintech / healthcare / etc.)
5. **People search** — large directory with filters. The firm's *people* are the asset.
6. **Office locations** — world map OR list. Office presence = legitimacy.
7. **Footer** — heavy: Modern Slavery Statement, Diversity & Inclusion, Pro Bono, Privacy Notice (DSGVO + CCPA + LGPD), Cookie Settings.

### Archetype B — Productized Mid-Tier Service

Section order:

1. **Hero** — value-prop headline + product preview + **ONE CTA** ("Get started" / "Pick your plan").
2. **Three-card service grid** — typical: DIY / Assisted / Full Service. Pricing visible.
3. **How it works** — 3-step illustration. Productized service expects walkthrough.
4. **Pricing table** — comparison of plans side-by-side. Tax/accounting/bookkeeping brands always have this.
5. **Trust strip** — logos of "as featured in" press, customer count ("12,000+ businesses trust us"), security badges.
6. **FAQ** — addresses tax/legal-specific objections.
7. **Footer** — lighter than Big Law but heavier than Solo. Includes regulatory disclosures + Help center.

### Archetype C — Insurance/Financial Quote-Led

Section order:

1. **Hero** — segmented quote starter: "I want a quote for: Auto / Home / Life / Health / Business" — large radio buttons + ZIP/PLZ field.
2. **Product cards** — each insurance product as its own card with starting price + "Get quote" CTA.
3. **Why us / claims data** — quantified ("Claims resolved in 24 hours on average") + customer testimonials.
4. **Find a local agent** — if hybrid model (State Farm / Porto Seguro). Skipped for pure-digital (Lemonade, Progressive).
5. **Resources** — calculators, blog posts, glossary — soft trust building between quote and purchase.
6. **Footer** — heavy regulatory chrome: license #s per state, regulatory body links, accessibility statement.

### Archetype D — Solo Practitioner Trust-Led (the agency's default)

Section order:

1. **Top bar** — phone + email + (DE/AT/CH) emergency or Notfall line if applicable.
2. **Hero** — headline naming the operator + practice area + city ("Frank Laudam — Rechtsanwalt für Arbeitsrecht in Bayreuth"). Portrait of the operator. ONE CTA ("Erstberatung anfragen").
3. **Credentials signature line** — Zulassung # · years in practice · Kammer membership · spoken languages.
4. **Practice areas** — 3–8 areas as a typography list (not a card grid). Each item one sentence + "Mehr erfahren →" link (no separate page required if Tier 1).
5. **About / Bio** — single paragraph + portrait. "Why this person, why now."
6. **Reviews / testimonials** — 3–4 verbatim client quotes (Google reviews are typical source).
7. **Contact** — short form (name + email + brief description) OR phone-only if no form. Erstberatung mention.
8. **Footer** — Impressum (German market) / Política de Privacidade (BR) / NIF + CAE (PT), Kammer registration #, Datenschutzerklärung, professional liability insurance disclosure (BRAO §51 in Germany).

---

## 3. Hero patterns

### Archetype A — Institutional editorial

- **Headline carries the moment.** Often paired with a single global-scale photo (Big Law buildings, a courtroom, an event the firm worked on).
- **No "Free consultation" CTA.** Big Law doesn't shop on price.
- Eyebrow: "Insights" or a campaign name.
- Subtle accent — often a single brand color line under the wordmark.

### Archetype B — Productized value prop

- **Headline is the offer.** "Bookkeeping that scales with you" / "Tax filing in 20 minutes."
- One large CTA ("Get started"). Sometimes paired with a smaller secondary ("See pricing").
- Product preview image to the right (laptop screenshot, dashboard mockup).
- Trust strip immediately below — press logos, customer count.

### Archetype C — Quote starter

- **Headline minimal, form maximal.** The whole point is starting a quote.
- Product type selector (radio buttons or tabs).
- ZIP / PLZ input.
- "Get my quote" CTA — primary color, large.
- Microcopy reassurance ("Free, no obligation, 60 seconds").

### Archetype D — Solo practitioner

- **Headline names the operator.** "[First] [Last] — [Discipline] in [City]" or German "Rechtsanwalt für Arbeitsrecht in Bayreuth — Frank Laudam."
- Portrait of the operator next to or below the headline. Real workspace (office, library), not a green-screen suit-on-stairs.
- Short tagline: "Praxiserfahrung seit 1998" / "20+ Jahre Arbeitsrecht."
- ONE CTA: "Erstberatung anfragen" or "Beratung vereinbaren."
- Credentials signature line immediately below — Zulassung #, years, Kammer, languages.

---

## 4. Photography direction

### Universal Professional Services rules

- **Real portrait of real operator(s), real office.** Stock-photo lawyers, accountants, advisors are universally fake-looking. The single best photo in this vertical is the practitioner sitting at their desk, in their actual office, with their actual books / files / monitor.
- **Avoid the corporate-stock kit.** Suit on stairs · handshake closeup · gavel on desk · scales of justice graphic · stethoscope-on-money. All are universally overused.
- **Print/digital props read true when authentic.** A real Kammer certificate framed on the wall, a real bookshelf with German labor-law titles, a real laptop with the firm's case-management software — all signal "this is a real person who actually does this work."
- **One environmental photo + one tight portrait** is enough for a Solo Practitioner site. More photos dilute focus.

### Per-archetype photography notes

| Archetype | Photo style |
|---|---|
| A — Global Big-Law | Editorial-grade institutional architecture, courtroom photography (real events the firm worked on), team groups in real offices. Avoid stock; commission real shoots. |
| B — Productized | Product screenshots (dashboards, mobile apps), candid customer photos (clients smiling at laptops in their actual offices/homes — staged but plausible). |
| C — Insurance/Quote-Led | Customer-life photography (family at home, owner of small business at counter). Not insurance-claim drama. Real-life moments insurance protects against. |
| D — Solo Practitioner | One environmental + one tight portrait. Real office, real books, real workspace. Avoid green-screen + studio backgrounds. |

---

## 5. Typography pairings

### What works in Professional Services

| Pairing | Display | Body | Mood |
|---|---|---|---|
| **Institutional restraint** | GT America / Söhne (if licensable) OR Inter | Inter | Mid-tier productized — clean, professional, SaaS-adjacent |
| **Heritage gravitas** | Tiempos Headline · Source Serif Pro · Lyon Display | Inter or Söhne | Big Law A · Solo Practitioner with multi-decade history |
| **Modern conversion** | Inter Display | Inter | Productized B + Insurance C — high legibility, minimal personality |
| **Solo Practitioner warmth** | Fraunces (variable) | Manrope | Solo D — same as gastronomy/beauty default, warmer than pure-Inter without being playful |

### Rules

- **Never Times New Roman or Courier.** Times reads "1990s law firm Word document." Courier reads "monospace developer humor." Both are wrong.
- **Avoid Playfair Display for Big Law.** Too wedding-blog. Stick with Tiempos, Source Serif, or Lyon for heritage feel.
- **Cap to two font families.** Display + body. No third decorative font.

---

## 6. Color archetypes

### Archetype A — Global Big-Law Institutional

| Direction | Palette | Mood |
|-----------|---------|------|
| **Heritage navy** | Deep navy bg / cream text / single accent (oxblood, deep gold) | Established institutional weight (Clifford Chance, A&O) |
| **Sterling restraint** | Off-white bg / charcoal text / single muted accent (deep teal, forest) | Modern editorial Big Law (Pinheiro Neto, Taylor Wessing) |
| **Heritage burgundy** | Cream bg / charcoal text / deep burgundy accent | Traditional Brazilian / European law firm |

### Archetype B — Productized Mid-Tier Service

| Direction | Palette | Mood |
|-----------|---------|------|
| **SaaS clean** | White bg / near-black text / single saturated accent (Pilot blue, Contabilizei green) | Modern productized — accent is product brand color |
| **Tax-season trust** | Off-white bg / charcoal text / H&R Block green accent | Mid-tier mass-market tax/accounting |

### Archetype C — Insurance/Financial Quote-Led

| Direction | Palette | Mood |
|-----------|---------|------|
| **Quote-form blue** | White bg / near-black text / corporate blue accent | Standard insurance — Progressive, State Farm |
| **Reassurance gold** | White bg / charcoal text / warm gold accent | Premium financial advisory — AXA, private wealth |

### Archetype D — Solo Practitioner

| Direction | Palette | Mood |
|-----------|---------|------|
| **Bayreuth navy** | Off-white bg / deep navy text / single accent (deep gold, oxblood) | Standard solo lawyer / Steuerberater — restraint signals competence |
| **Warm cream** | Cream bg / dark brown text / muted gold accent | GP-style approachability for accountants, family lawyers |
| **Clinical sage** | Off-white bg / dark navy text / sage accent | Modern advisory — financial planner, business consultant |

**Rules:**
- **Never red as a primary brand color** in Professional Services. Red signals emergency / claims / liability — wrong register. Reserve red for actual emergency CTAs (defense lawyer 24/7 line, accident-claim hotline).
- **Never bright neon accents.** Neon reads "fintech startup" not "fiduciary."
- **One accent maximum.** Two-accent Professional Services sites look amateur.
- **Background must accommodate readers under cognitive load.** Litigation clients, tax-deadline clients, accident clients arrive stressed. Pure white is acceptable; cream/pale gray is acceptable; saturated background tints are NOT.

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5, when the prospect has no brand guide, no existing website, no signage to sample — the palette falls to the vertical-default tier. Professional Services splits by **sub-archetype** because a solo lawyer, a multi-partner mid-tier firm, and an insurance broker demand visibly different visual codes. **For ~85 % of agency clients (Solo Practitioner, Archetype D), pick the sub-archetype by specialty:**

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Solo lawyer — labor / family / traffic / criminal** (Archetype D — most common) | Off-white + deep navy + warm gold | `--color-bg: #fbfaf7` (warm off-white)<br>`--color-text: #1a2436` (deep navy)<br>`--color-accent: #b08b3a` (warm gold)<br>`--color-border: #e3e1dc` | Reads "established, trustworthy, gravitas without stuffiness." Warm gold accent avoids the stark blue-only-corporate-law cliché. Survives a real portrait under office lighting. |
| **Solo accountant / tax advisor** (Archetype D) | Cream + dark green + warm taupe | `--color-bg: #faf6ee`<br>`--color-text: #1e2e26` (deep forest)<br>`--color-accent: #6b8071` (sage)<br>`--color-border: #e1ddd0` | Green accent ties (subtly) to the money/growth signal without being on-the-nose. Sage is calm, fitting for clients under tax-deadline stress. |
| **Solo insurance broker / financial advisor** (Archetype D, leaning toward C) | White + corporate blue + cool gray | `--color-bg: #ffffff`<br>`--color-text: #0f1419`<br>`--color-accent: #1d4ed8` (corporate blue)<br>`--color-border: #e2e8f0` | Standard fiduciary signaling. Blue accent reads "trustworthy with money." Pure white acceptable here — finance is one of the few sub-verticals where pure white reads "clean" not "cold." |
| **Mid-tier firm (2–10 partners)** (Archetype B variant) | Cream + charcoal + muted accent (deep teal) | `--color-bg: #faf8f5`<br>`--color-text: #1a1a1a`<br>`--color-accent: #0f5151` (deep teal)<br>`--color-border: #e0ddd6` | Editorial mid-tier — Taylor Wessing's color register. Reads "modern but serious." |
| **Big-Law institutional** (Archetype A — rare agency client) | Deep navy + cream + heritage gold | `--color-bg: #ffffff`<br>`--color-text: #0a1428` (heritage navy)<br>`--color-accent: #b3922f` (heritage gold)<br>`--color-border: #d8dde5` | Clifford Chance / A&O register. Documented for completeness; almost never agency scope. |
| **Insurance brokerage chain** (Archetype C) | White + brand blue + accent yellow for CTA | `--color-bg: #ffffff`<br>`--color-text: #0f1419`<br>`--color-accent: #facc15` (yellow CTA — Progressive-style)<br>`--color-secondary: #1d4ed8` (corporate blue) | Quote-form yellow CTA breaks the all-blue monotony and reads "click here to start." |

**How to pick the sub-archetype:** Use the archetype matrix in §1 first (A / B / C / D — most agency clients are D). Then the specialty. A solo labor lawyer and a solo financial planner are both Archetype D but get nothing wrong by sharing zero accent colors — *the client's anxiety level on arrival determines the right palette*. Litigation client (lawyer) needs gravitas (deep navy); financial-planning client (advisor) needs calm-confidence (sage); insurance shopper needs urgency-of-quote (yellow CTA).

**These are starting points, not deliverables.** Sample the client's existing materials before committing — even a business card or letterhead may suggest a different direction. Document the source tier in `design.md` §"Color tokens."

---

## 7. Copy voice cues

### What to say

- **Name the operator + specialty + area** in the opening. "Frank Laudam — Rechtsanwalt für Arbeitsrecht in Bayreuth" beats "Comprehensive legal services for our clients."
- **Quantify experience.** "Seit 1998 in der Praxis" / "20+ Jahre Erfahrung" / "Mehr als 500 Mandate."
- **Lead with reassurance for stressed buyers.** "Erstberatung kostenlos und unverbindlich" / "Free initial consultation, no obligation."
- **Specify languages spoken.** Especially for international markets (DE site that serves English-speaking expats benefits from "Beratung auch auf Englisch").
- **Cite credentials with numbers, not adjectives.** "Zugelassen bei der Rechtsanwaltskammer Bamberg" + Kammer # beats "Fully qualified attorney."

### What never to say

- ❌ "We deliver comprehensive solutions." Universal corporate sludge.
- ❌ "Trust the experts." Anyone has to *earn* trust; declaring it doesn't deliver it.
- ❌ "Your partner in [field]." Empty.
- ❌ "Award-winning [practice]." Unless a specific named award (and that goes in a trust strip, not the hero).
- ❌ "Excellence in [discipline]." Word salad.
- ❌ "We understand your needs." Performative empathy.

---

## 8. Professional-Services-specific anti-patterns

Beyond the generic anti-slop in `DESIGN-BEST-PRACTICES.md`:

| Anti-pattern | Why it fails | Better |
|---|---|---|
| **Stock photo of suit on stairs / handshake closeup / gavel-on-desk** | Universally overused, instantly readable as stock | Real portrait of real operator in real office. Even iPhone photos beat stock. |
| **"We deliver comprehensive solutions" hero** | Generic, no specificity | Name the actual practice area + city in the headline |
| **Practice areas as photo-card grid** | Photo-card grids belong in beauty/gastronomy. Professional Services is text-led | Service list with one-sentence descriptions, typography-only |
| **Three identical lawyer headshots** | Reads like template B-roll | Show real team or omit team photos entirely for solo |
| **"Get a free consultation" buried in footer** | The primary CTA must be above the fold | Hero CTA + sticky mobile CTA |
| **No Kammer / Bar / OAB number visible** | Trust signal explicitly required in regulated jurisdictions | Footer line + on About/Bio page |
| **Generic "Get in touch" form** | Forms in this vertical convert better with specificity | "Erstberatung anfragen" with 3 fields max (name + email + brief description) |
| **Long blog with 4 outdated posts** | Stale insights are worse than no insights | Either commit to a real publishing schedule (Big Law) or omit the blog (Solo) |
| **Three same-color buttons in a row** | Reads as template chip-soup | One primary CTA, one secondary, one ghost — visual hierarchy |
| **Live chat widget for solo practitioner** | Solo can't staff live chat; expectation gap kills trust | Phone + email + form is enough |

---

## 9. Reference site annotations

### 9.1 Mattos Filho — `mattosfilho.com.br` (Archetype A — Brazilian Big-Law)

Strong corporate-law reference. Practice areas + sectors as filterable taxonomy. Credentials + insights pipeline + global office data. **Mood:** institutional weight, editorial polish, sector-led navigation.

**Borrow:** practice-area-as-taxonomy filtering · institutional photography · multi-language EN/PT (cross-border M&A clients).

**Avoid:** complexity at this scale is appropriate for Mattos Filho's 500+ lawyer firm; copying the IA for a 1–5 person practice produces empty-shell pages.

### 9.2 Clifford Chance — `cliffordchance.com` (Archetype A — Global Big-Law)

Global-law canonical reference. Expertise / People / Insights / Offices / Careers nav. Heavy editorial pipeline.

**Borrow:** restrained typography · institutional footer chrome (Modern Slavery, D&I, Pro Bono).

**Avoid:** same scope-mismatch as Mattos Filho.

### 9.3 Pilot — `pilot.com` (Archetype B — Productized Mid-Tier)

Modern bookkeeping/accounting. SaaS-like pricing clarity. Simple value prop. Productized service UX.

**Borrow:** pricing tier card grid · "How it works" 3-step · trust strip with customer count.

**Avoid:** Pilot is a tech-enabled service with a real SaaS dashboard; small accounting practices without software don't have the same value prop.

### 9.4 Morgan & Morgan — `forthepeople.com` (Archetype B — Productized Personal-Injury)

Legal conversion benchmark. "Free case evaluation" CTA dominates. Personal-injury at scale.

**Borrow:** free-case-eval CTA pattern · trust signals (jury awards, settlement amounts) · "find your nearest office" locator.

**Avoid:** this is mass-market personal-injury volume; doesn't apply to specialty solo practitioners.

### 9.5 State Farm — `statefarm.com` (Archetype C — Insurance/Quote-Led)

Standard quote-led IA. Auto / Home / Life / Health segmented quote starter. Hybrid model (digital + local-agent).

**Borrow:** segmented quote starter UX · "find a local agent" locator · regulatory disclosure footer.

**Avoid:** State Farm has 18,000 agents and a real claims-data backbone; a solo broker can't pretend to that scale.

### 9.6 Inferred — Solo Practitioner (Archetype D — the agency default)

No canonical worked example in the benchmark (no solo-practitioner sites in §7.6 — the benchmark is biased toward scale). The IA for Archetype D is the cross-vertical **Solo-Operator meta-archetype** documented in `DESIGN-BEST-PRACTICES.md` §3 — same pattern as `templates/trades.md` Archetype D, `templates/health.md` Archetype C, `templates/studio.md` Archetype D, `templates/beauty.md` Old-school barber. Adapt the IA to Professional Services voice + credentials display.

**Reference implementation candidate:** Kanzlei F. Laudam (Bayreuth) — see `docs/audit/laudam.md`. 4.9 ★ from 102 reviews · multi-office (Bayreuth + Kulmbach + Nürnberg) · Frank Laudam practicing since 1998. If/when Laudam signs, Jean Souza Barber's pattern (warm copy + brand-sourced palette + Solo-Operator IA) provides the template for adaptation.

---

## 10. Decision matrix — picking the archetype per client

| If the client is… | Pick archetype | Stack tier (per `TECH.md` §1) |
|---|---|---|
| Solo lawyer / accountant / advisor / broker — 1 office, 1 primary practitioner | **D — Solo Practitioner** | Tier 2 (Astro) · Type 1 or 2 |
| Small firm with 2–5 partners, locally focused | **D + light B influence** — solo IA but add a small "Team" section | Tier 2 · Type 2 (with contact form) |
| Mid-tier productized service (online tax filing, app-based bookkeeping) | **B — Productized** | Tier 3 (Next.js) · Type 3+ |
| Insurance brokerage / financial advisor with quote functionality | **C — Quote-Led** | Tier 3 · Type 3+ |
| Mid-tier law firm with 10–50 lawyers, multi-office, single jurisdiction | **A-lite or D-heavy** — borrow A's restraint, drop the global-scale features | Tier 2 or Tier 3 · Type 2 |
| Big Law / global firm | **A — Institutional** | Tier 3 · Type 3+ — rarely the agency's scope |

**Default for agency cold-outreach prospects:** **Archetype D** (Solo Practitioner Trust-Led). The cross-vertical Solo-Operator meta-archetype + Professional-Services-specific photography + credentials display = a defensible solo lawyer / accountant / advisor site at Tier 2, ~5–8 hrs of focused build.

---

*Trust is the product. Show real credentials, real operator, real specialty, real city. Skip the stock photos. Lead with the Erstberatung CTA.*

---

## 11. Measurement — KPIs that matter for Professional Services

**Applies to:** every retainer-tier pro-services client at production cutover. KPI framework, naming convention, and per-tier stack selection live in `KPI.md`; this section picks the 3–5 KPIs that matter most for lawyers, accountants, advisors, and brokers and how they wire.

**Legal callout:** Pro-services confidentiality is the brand. Any client-identifying form payload (case description, matter type, finances) is server-side only — never serialize into analytics events. See `LEGAL.md` §Disclaimer + when to escalate to a real lawyer.

### 11.1 Product KPIs

| # | KPI | Bucket | Source | Target / benchmark |
|---|-----|--------|--------|---------------------|
| 1 | Consultation-request rate (Erstberatung / discovery-call form completion) | Conversion | GA4 `contact_form_completed` (consultation form) | ≥ 2% of sessions (low — premium qualifying gate) |
| 2 | Inquiry-to-matter conversion (qualified inquiry → engaged client) | Conversion (business) | CRM / manual | ≥ 35% inquiry-to-engage |
| 3 | Practice-area page split (which expertise drives inquiries) | Acquisition | GA4 `page_viewed` filtered to `/leistungen/[area]` or `/practice-areas/[area]` | Identifies the 1-2 specialties to feature |
| 4 | Credentials-page engagement (% sessions reading credentials deeply) | Conversion (trust signal) | Clarity scroll depth on `/team` or `/about` | ≥ 50% reach 75% scroll |
| 5 | Direct-traffic share (referral / word-of-mouth attribution proxy) | Acquisition | GA4 source=direct | ≥ 40% — pro services is referral-driven |

### 11.2 Per-tier stack

| Tier | Tools active | What it measures |
|---|---|---|
| Tier 1 + form endpoint (solo lawyer with discovery-call form) | GSC + Clarity + GA4 | KPIs #1, #3, #4, #5 |
| Tier 2 (Astro — most common) | GSC + Clarity + GA4 | KPIs #1, #3, #4, #5 + CRM for #2 |
| Tier 3 (firm with client-portal or productized service) | GSC + Clarity + GA4 + PostHog + Sentry | All 5 KPIs |

### 11.3 Dashboard tiles

**GA4:** conversions by event (`consultation_request_completed`) · top landing pages by practice area · source/medium attribution (direct vs organic vs referral) · device split (skews desktop for pro-services).

**Clarity:** heatmaps on consultation CTA + credentials page + practice-area pages · scroll depth on long-form credentials · recordings filtered to consultation-form abandonment.

**PostHog (Tier 3):** consultation → engaged-client funnel · practice-area-popularity ranking · referral-source cohort table.

### 11.4 Vertical-specific event names

| Event | Fires when | Required params |
|---|---|---|
| `consultation_request_started` | Erstberatung/consultation form first field focused | `practice_area_slug`, `source_page` |
| `consultation_request_completed` | Form submitted (200 from endpoint) | `practice_area_slug`, `source_page` |
| `practice_area_viewed` | Practice-area page LCP fires | `practice_area_slug` (`familienrecht` / `arbeitsrecht` / `steuerrecht` / etc.) |
| `credentials_viewed` | Credentials / Team section enters viewport | `staff_slug` |
| `case_study_viewed` | Anonymized case study section enters viewport (NO client names) | `case_study_slug` |

**Confidentiality rule:** never capture matter description, case content, financial details, or any client-identifying free-text as event parameters. The form payload travels server-side only.

### 11.5 Pre-launch verification

- [ ] All KPIs in §11.1 mapped to wired events in BRIEF.md KPI contract
- [ ] Consultation form payload never serializes case description / financial info into analytics events
- [ ] Sentry `sendDefaultPii: false` confirmed (pro-services is the highest-stakes vertical for PII leakage)
- [ ] Case studies (if any) are anonymized — no client names, redacted identifying details
- [ ] Run `CHECKLIST.md` §Operational tests for cookie banner + Sentry PII + KPI wiring + per-jurisdiction legal pages

### 11.6 Integrations applicable to Professional Services

Per `INTEGRATIONS.md`. Tier-driven defaults plus vertical-specific:

| Integration | When (tier) | Vertical-specific notes |
|---|---|---|
| **Resend** | Type 2+ (Erstberatung / consultation request) | Auto-reply confirming the request was received + expected response window |
| **Calendly** | Optional — consultation scheduling | Most solo practitioners use it; deep-link with UTM-preserve. Replaces own booking system for Tier 2 builds. |
| **Sentry** | Tier 2+ (full SDK) | Standard agency setup. `send_default_pii: false` non-negotiable — pro-services is the second-highest stakes vertical for PII (after health). |
| **PostHog** | Tier 3+ (firm with client portal / productized service) only | Consultation → engaged-client funnel; never include case content / matter description in events |
| **Neon** | Tier 3+ firm with client portal | Confidential matter data — encryption at rest mandatory. EU region for DE/PT/EU clients. |
| **Upstash** | Tier 2+ consultation form | Rate-limit 5/60s |
| **Stripe** | Type 4+ — productized service billing | Subscription for recurring services (tax filing, bookkeeping); SEPA + Pix per jurisdiction |

**Confidentiality rule:** never store matter description, case content, or client-identifying free-text in any agency-side analytics or feature-flag system. Form payload travels to CRM + email (server-side only); never replicated to PostHog or Sentry events.

### 11.7 Share strategy

Per `SOCIAL-SHARING.md` §Per-vertical share strategy: **Low leverage**.

- **Default targets:** Copy-link + LinkedIn (B2B-adjacent)
- **IG embed recommended:** ❌ No — confidentiality posture
- **Placement:** subtle Copy-link in footer · LinkedIn share on About-the-firm / Methodology pages only (not on case studies or testimonials)
- **OG image priority:** office exterior or operator portrait (with consent) at 1200×630. NOT generic stock "lawyer at desk." Real, identifiable, professional.
- **Copy-link copy:** "[Firm name] — [specialty] in [city]" — neutral

### 11.8 Schema.org variants

Use the most specific subtype:

- `LegalService` — lawyer / law firm
- `AccountingService` — accountant / bookkeeper
- `FinancialService` — financial advisor / broker
- `InsuranceAgency` — insurance broker
- `Notary` — notary public (DE / PT)
- `ProfessionalService` — generic fallback

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "[Firm name]",
  "address": { ... },
  "geo": { ... },
  "telephone": "+...",
  "areaServed": "[city]",
  "openingHoursSpecification": [...],
  "potentialAction": { "@type": "ContactAction", "target": "https://[calendly URL]" },
  "knowsAbout": ["Familienrecht", "Arbeitsrecht", "Steuerrecht"]
}
```

`knowsAbout` is critical — surfaces practice areas to Google for specialty-search ranking. Use the local-language terms (Familienrecht in DE, Direito de família in PT/BR).

### 11.9 GBP category + keyword pattern

- **GBP primary category:** `Lawyer` / `Tax preparation service` / `Accountant` / `Financial planner` / `Insurance agency` / `Notary public` (pick most specific)
- **GBP secondary categories:** specialty (a lawyer might add `Family law attorney`, `Divorce lawyer`)
- **Per-jurisdiction GBP attributes:** appointment-only, online consultations, languages spoken (very important for expat clients)
- **Keyword pattern (DE):** `[specialty] anwalt [stadt]` · `[specialty] anwalt [stadtteil]` · `[specialty] berater [stadt]`
- **Keyword pattern (BR):** `advogado [especialidade] [cidade]` · `[especialidade] advogado [bairro]`
- **Keyword pattern (PT):** `advogado [especialidade] [cidade]` · `[especialidade] [cidade]`
- **Example:** "Familienrecht Anwalt Berlin Mitte" · "Advogado tributário em São Paulo" · "Advogado de família em Lisboa"
