# artisan.md — Artisan & Creative Retail Vertical Template
## Jewelry · Ceramics · Pottery · Handmade Goods · Galleries · Craft Shops

**Applies to:** Artisan & Creative Retail clients across product types 1–4 (per `TECH.md` §1). This vertical splits into **product-sale** (jewelry brands, ceramics shops, handmade goods) → Type 4 transactional ecommerce, Tier 3 Next.js OR Astro+Shopify integration; and **gallery/commission-based** (artists, makers with commission flow) → Type 2, Tier 2. Pure single-maker shops with WhatsApp/Instagram orders can stay Type 1.

**Reference research:** Based on `local_business_website_benchmark_report.md` §7.8 (H.Stern, Vivara, Monte Carlo, SouQ, Tok&Stok, Heath Ceramics, East Fork, Catbird, Tiffany, David Yurman, Royal Copenhagen, Pandora, Monica Vinader, Emma Bridgewater, Manufactum).

**Use this doc as a moodboard with principles, not a layout to clone.** If two clients in the same vertical end up with the same hero pattern, the template has failed at its job.

---

## Rules at a glance

- **The product is the maker + the craft + the materials.** Pure ecommerce-template product grids fail in this vertical because the *story* IS the price differentiation. Without provenance, an artisan ceramic is just an expensive bowl.
- **Pick one of four archetypes** before designing: **Luxury Jewelry Brand**, **Premium Craft / Pottery Storytelling**, **Modern Artisan Ecommerce + Voice**, or **Solo Maker / Single-Studio Artisan**. ~50 % of agency clients fall into Solo Maker; another 30 % into Modern Artisan.
- **The conversion is product purchase OR commission inquiry.** Pure-product brands convert through cart; commission-based makers convert through inquiry forms (size + customization + budget + delivery date).
- **Materials + craftsmanship explained** is mandatory. "Sterling silver, hand-stamped, made in São Paulo" beats "high-quality silver necklace."
- **Maker/artist story is visible.** Founder photo + workshop photos + the human is *the brand*. Generic "About us" with stock photos kills the price premium.
- **Origin/provenance builds trust.** Where it's made, by whom, with what materials. The exact opposite of fast-fashion "shipped from anywhere."
- **Real product photography** is the conversion. Scale, texture, hand, light. Stock product-on-white can work for *some* sub-archetypes (mass-jewelry chains) but kills the price premium for artisans.
- **Avoid the AI-generated product-grid aesthetic.** Identical-aspect-ratio thumbnails on a white grid with one-word titles reads "drop-ship." Vary aspect ratios, include process shots, name the materials.

### Solo-Operator meta-archetype (cross-vertical pattern)

Most agency Artisan clients (solo jeweler, single-studio potter, individual maker) are the Artisan-specific implementation of the **Solo-Operator meta-archetype** in `DESIGN-BEST-PRACTICES.md` §3:

- Maker name in headline ("Maria Aguiar — Cerâmica artesanal em Niterói")
- Portrait of the maker at the bench / wheel / workshop
- ONE primary CTA (shop / commission inquiry / WhatsApp)
- Credentials signature line (years working in craft + materials + studio location + commissions undertaken)
- Product or service list (categories or styles)
- Materials + process explainer
- Studio location named explicitly
- Pricing reassurance OR transparent product prices

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Artisan-specific:** existing client website (tier 2) is common (makers often have an existing site or Etsy shop). Instagram (tier 4) is the richest source for solo makers — they post process + product daily. Etsy/Shopify product galleries are tier 3 alternatives.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 — 6-tier color source hierarchy. The product itself drives the palette — sample colors that complement (don't compete with) the dominant material/glaze/metal tones in the maker's work.
- **Prospect intake template:** `CHECKLIST.md` §9.

---

## Table of contents

1. [The four Artisan archetypes](#1-the-four-artisan-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Artisan-specific anti-patterns](#8-artisan-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The four Artisan archetypes

| Archetype | Brand priority | Primary CTA | Production cost · Product type |
|-----------|---------------|-------------|--------------------------------|
| **A. Luxury Jewelry Brand** (Tiffany, David Yurman, H.Stern, Cartier) | Heritage + collection storytelling + product as object | Discover / Shop collection | Highest — full ecommerce + heritage editorial + appointment booking |
| **B. Premium Craft / Pottery Storytelling** (Heath Ceramics, East Fork, Manufactum, Royal Copenhagen) | Materials + maker + design philosophy | Shop / Explore the collection | High — ecommerce + editorial + workshop tours |
| **C. Modern Artisan Ecommerce + Voice** (Catbird, Monica Vinader, Emma Bridgewater) | Distinctive brand voice + craft + community | Shop / Personalize | High — ecommerce + personalization + community features |
| **D. Solo Maker / Single-Studio Artisan** (the agency's default Artisan client) | Maker credibility + materials + commission flow | Shop / Commission inquiry / WhatsApp | Low-Medium — Tier 2 build (or Tier 3 if cart) |

**Default for new Type 1/2 clients:** Archetype D. Archetypes A/B/C all require real ecommerce infrastructure.

---

## 2. Information architecture per archetype

### Archetype A — Luxury Jewelry Brand

1. **Hero** — single iconic product OR campaign visual + brand wordmark + ONE CTA ("Shop the collection" / "Discover").
2. **Collection grid** — current campaign collections (each as editorial card with rich photography).
3. **Heritage storytelling** — founder, history, signature designs.
4. **Material craftsmanship** — diamonds, gold sourcing, atelier process.
5. **Appointment booking** — for high-touch consultations.
6. **Bridal / engagement** — typically a dedicated section.
7. **Trust signals** — heritage timeline, master craftsmen, certifications.
8. **Footer** — corporate luxury chrome: stores, careers, sustainability, responsible sourcing.

### Archetype B — Premium Craft / Pottery Storytelling

1. **Hero** — beautiful product-in-use lifestyle + headline ("Stoneware for everyday rituals") + ONE CTA ("Shop").
2. **Collections by use** — Tableware / Vases / Wedding registry / Limited editions.
3. **Founder/maker story** — large editorial section. The maker IS the brand.
4. **Materials + process** — clay sourcing, glaze recipes, kiln process.
5. **Workshop tours / events** — community events at the studio.
6. **Press + features** — Architectural Digest, New York Times, design publications.
7. **Wedding registry** — high-leverage for craft brands.
8. **Footer** — about + workshops + retail locations + careers.

### Archetype C — Modern Artisan Ecommerce + Voice

1. **Hero** — distinctive brand voice photo + headline ("Jewelry handmade in Brooklyn since 2004") + ONE CTA ("Shop new arrivals").
2. **Personalization** — customizable rings, engraving, bespoke design.
3. **Category navigation** — by style + by collection + by gift.
4. **Brand voice content** — blog, founder posts, Brooklyn/Lisbon/London neighborhood culture.
5. **Community** — customer photos with the product (consent-cleared), Instagram integration.
6. **Wedding bands / engagement** (for jewelry) — typically a dedicated section.
7. **Trust + repair guarantee** — care, repair, lifetime services.
8. **Footer** — about + journal + customer care + stores.

### Archetype D — Solo Maker / Single-Studio Artisan (the agency's default)

1. **Top bar** — phone + WhatsApp + Instagram link.
2. **Hero** — maker at work OR signature finished piece + headline naming the maker + craft + studio location. ONE CTA ("Shop" if cart, "Encomendar uma peça" if commission, "WhatsApp" if WhatsApp-led).
3. **Maker bio + workshop** — single editorial section. Portrait + 1 paragraph about journey + workshop photo.
4. **Materials + process** — Honest explanation of what materials, what techniques, what's bespoke vs ready-made.
5. **Available now / Recent work** — 6–12 photographs of current available work (refresh weekly).
6. **Commission flow** (if applicable) — "Want something custom? Here's how." 4-step explainer.
7. **Care guide** — how to care for handmade ceramics / jewelry / textiles.
8. **Reviews / testimonials** — verbatim customer quotes + recent purchase photos (consent).
9. **Order / commission inquiry** — direct WhatsApp link OR contact form OR cart.
10. **Footer** — Impressum/Política/legal + Instagram + studio location + open-studio hours if applicable.

---

## 3. Hero patterns

### Archetype A — Luxury jewelry

- Single iconic piece on solid color OR campaign visual.
- Headline minimal: brand wordmark or campaign name.
- ONE CTA: "Shop the collection" or "Discover."
- Subtlety + restraint.

### Archetype B — Premium craft

- Product-in-use lifestyle (Heath bowl on a real table, East Fork mug being held).
- Headline: "Stoneware for everyday rituals" / "Made in Asheville, made for living."
- ONE CTA: "Shop."

### Archetype C — Modern artisan

- Distinctive brand-voice photo (Catbird's Brooklyn-shop interior, Monica Vinader's portrait).
- Headline reflects voice: "Brooklyn-made jewelry since 2004."
- ONE CTA: "Shop new arrivals."

### Archetype D — Solo maker

- Maker at work OR single signature piece.
- Headline names the maker + craft + studio location ("Maria Aguiar — Cerâmica artesanal em Niterói").
- ONE CTA: "Encomendar uma peça" / "Shop available work" / "WhatsApp."
- Credentials signature line below.

---

## 4. Photography direction

### Universal Artisan rules

- **Show scale, texture, hand.** A photo of a ring on white background tells you nothing about size; a photo on a real hand tells you everything.
- **Show process.** Wheel-throwing, hammer-stamping, kiln-firing, hand-cutting — the *making* IS the value differentiation.
- **Show lifestyle context.** The bowl on a table with food. The necklace on a person. The vase in a room.
- **Show the maker.** Founder portrait in the workshop is high-leverage. Not stock "smiling craftswoman."
- **Avoid pure-ecommerce product-on-white** for premium artisans. White isolation reads "drop-ship catalog," which kills the price premium.

### Per-archetype photography notes

| Archetype | Photo style |
|---|---|
| A — Luxury jewelry | Editorial campaign shoots · iconic product photography · founder/heritage assets · models with product |
| B — Premium craft | Lifestyle (in real homes, with real food) · process (wheel, kiln) · founder/team · materials |
| C — Modern artisan | Brand-voice character shoots · customer photos with product (consent) · neighborhood/community shots |
| D — Solo maker | Maker at workshop · process close-ups · finished pieces in good light · lifestyle when feasible |

---

## 5. Typography pairings

### What works in Artisan

| Pairing | Display | Body | Mood |
|---|---|---|---|
| **Luxury heritage** | Tiempos · Lyon · GT Sectra | Inter | Tiffany/Cartier/H.Stern register |
| **Modern craft** | Söhne / Reckless | Söhne / Inter | Heath Ceramics / East Fork modern |
| **Modern artisan voice** | Monica Vinader-style sans · Catbird's serif | Inter | Brand-led modern jewelry |
| **Solo maker warm** | Cormorant · Fraunces | Manrope | Hand-feel, warmth, craft register |

### Rules

- **Never decorative script "Handmade with Love" fonts.** Etsy-amateur cliché.
- **Never Times Roman or Arial.** Anti-craft.
- **Avoid all-caps everywhere** — over-italicized "BRAND" wordmarks read commodity.
- **Cap to two families.**

---

## 6. Color archetypes

### Archetype A — Luxury Jewelry

| Direction | Palette | Mood |
|-----------|---------|------|
| **Tiffany legacy** | Off-white bg / charcoal text / Tiffany blue accent | The canonical luxury jewelry — owned by Tiffany |
| **Cartier red** | Cream bg / dark coffee text / Cartier red accent | Heritage luxury |
| **Modern luxury neutral** | Cream bg / charcoal text / warm brass accent | David Yurman / modern luxury |

### Archetype B — Premium Craft

| Direction | Palette | Mood |
|-----------|---------|------|
| **Heath neutral** | Off-white bg / charcoal text / single warm accent (terracotta, sage) | Heath Ceramics modern-craft |
| **East Fork warm** | Cream bg / dark coffee text / signature pottery glaze accent | East Fork warmth |
| **Royal Copenhagen blue** | Off-white bg / dark navy text / signature porcelain blue accent | Heritage porcelain |

### Archetype C — Modern Artisan

| Direction | Palette | Mood |
|-----------|---------|------|
| **Brooklyn warm** | Off-white bg / charcoal text / warm brass accent | Catbird-style |
| **Modern jewelry neutral** | Off-white bg / charcoal text / dusty rose accent | Monica Vinader, soft femininity |
| **Heritage pottery** | Cream bg / dark coffee text / signature glaze accent | Emma Bridgewater warmth |

### Archetype D — Solo Maker

| Direction | Palette | Mood |
|-----------|---------|------|
| **Ceramicist warm** | Off-white bg / dark coffee text / terracotta or earth-tone accent | Solo potter / ceramicist |
| **Jeweler refined** | Cream bg / charcoal text / brass or warm gold accent | Solo jeweler |
| **Textile/print maker** | Cream bg / dark coffee text / warm accent matched to maker's signature colors | Solo textile/printmaker |

**Rules:**
- **Sample from the work.** Artisan products have inherent colors (clay, glaze, metal, fiber). Pick palette colors that complement, not compete.
- **Never bright commercial colors** for solo artisans. Saturation = mass-market; restraint = handmade.
- **Earth tones, neutrals, single warm accents** beat any kind of "fun" palette in this vertical.
- **One brand accent maximum.**

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5 — vertical-default tier 5:

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Solo ceramicist / potter** (Archetype D — agency default) | Off-white + dark coffee + terracotta | `--color-bg: #fbf8f3`<br>`--color-text: #2a1f17`<br>`--color-accent: #b15c2e` (terracotta)<br>`--color-border: #e3ddd0` | Earth-tone register matching clay/kiln aesthetic. Survives diverse glaze-color photography. |
| **Solo jeweler** (Archetype D variant) | Cream + charcoal + warm brass | `--color-bg: #faf6ee`<br>`--color-text: #1a1a1a`<br>`--color-accent: #b08b3a` (warm brass)<br>`--color-border: #e3ddd0` | Brass ties (subtly) to metal/findings aesthetic. Cream lifts the white-metal pieces without competing. |
| **Solo textile / fiber artist** (Archetype D variant) | Cream + dark coffee + dusty rose | `--color-bg: #faf6ee`<br>`--color-text: #2a1f17`<br>`--color-accent: #c6927e` (dusty rose)<br>`--color-border: #e8ddd2` | Warm textile register. Dusty rose = handweaving / dye warmth. |
| **Solo woodworker / leather** (Archetype D variant) | Cream + dark coffee + warm wood-brown | `--color-bg: #faf6ee`<br>`--color-text: #2a1f17`<br>`--color-accent: #8b5e34` (warm caramel)<br>`--color-border: #e3ddd0` | Wood/leather register. Matches grain/tanning aesthetic. |
| **Premium craft brand** (Archetype B — Heath Ceramics-style) | Off-white + charcoal + single accent | `--color-bg: #fafaf8`<br>`--color-text: #1a1a1a`<br>`--color-accent: #b08b3a` (warm brass) OR signature glaze color from the maker's work<br>`--color-border: #e3e1dc` | Modern editorial craft. Pure white acceptable here — premium craft uses negative space confidently. |
| **Modern artisan ecommerce** (Archetype C) | Off-white + charcoal + brand-color | `--color-bg: #fafaf8`<br>`--color-text: #1a1a1a`<br>`--color-accent: <sampled from existing brand>`<br>`--color-border: #e3e1dc` | Most modern artisan brands have existing identity to sample. |
| **Luxury jewelry** (Archetype A) | Off-white + charcoal + signature accent | `--color-bg: #fafaf8`<br>`--color-text: #1a1a1a`<br>`--color-accent: <heritage brand color>`<br>`--color-border: #e3e1dc` | Heritage restraint. Rarely agency scope (luxury jewelry has in-house design teams). |
| **Heritage pottery / homeware** (Royal Copenhagen, Emma Bridgewater) | Cream + dark coffee + signature glaze accent | `--color-bg: #faf6ee`<br>`--color-text: #2a1f17`<br>`--color-accent: <signature glaze color>`<br>`--color-border: #e3ddd0` | Heritage signal. Glaze color ties to product. |

**How to pick:** Use archetype matrix first. Then dominant material in maker's work. Ceramics = terracotta. Jewelry = brass. Textiles = dusty rose. Wood = warm caramel. Glass = soft blue. The palette echoes the materials.

**These are starting points.** Sample existing brand materials and the maker's work before committing. Document tier in `design.md` §"Color tokens."

---

## 7. Copy voice cues

### What to say

- **Name the maker + craft + studio location** for solo. "Maria Aguiar — Cerâmica artesanal em Niterói. Desde 2018."
- **Specify materials.** "Argila local da Mantiqueira, esmaltes vitrificados sem chumbo" beats "high-quality ceramics."
- **Quantify experience.** "20 anos no torno" / "Atendendo a Cedofeita desde 1998."
- **Describe process.** "Cada peça é única — torneada à mão e queimada a 1280°C."
- **Disclose timing.** "Encomendas custom: 4-6 semanas. Peças disponíveis: envio em 3-5 dias."
- **Care + warranty.** "Lave à mão · evite mudanças bruscas de temperatura. Quebrou? Reparamos."

### What never to say

- ❌ "Handmade with love." Etsy cliché.
- ❌ "Crafted to perfection." Empty.
- ❌ "Made with passion." Performative.
- ❌ "Unique pieces for unique people." Cliché.
- ❌ "Bespoke" overused without specifics about what's actually bespoke.
- ❌ "Premium quality" without naming the actual materials/process.

---

## 8. Artisan-specific anti-patterns

| Anti-pattern | Why it fails | Better |
|---|---|---|
| **Product photos on pure white isolation only** | Reads "drop-ship catalog" — kills price premium | Mix: white-bg detail shots + lifestyle context + process shots |
| **"Handmade with love" / heart icon everywhere** | Etsy-amateur cliché | Restrained language: "Made by hand in [studio location]" |
| **Script "Handmade Boutique" logo** | Wedding-vendor amateur tell | Restrained serif or clean sans |
| **No materials specified** | Buyers paying premium prices want to know what they're buying | Materials list per product + on About page |
| **No maker visible** | The maker IS the brand for solo artisans | Founder portrait + workshop photo |
| **Stock workshop photos** | Buyers can spot stock craftsperson photos | Real workshop, real tools, real hands |
| **AI-generated product grids** | Reads as drop-ship | Vary aspect ratios, include process shots, name materials |
| **"Bespoke" used everywhere without specifying** | Empty marketing word | Be specific: "Custom engraving available" / "Made-to-order in 4 weeks" |
| **No care guide** | Handmade items need different care than commercial; buyers want to know | Care guide page + brief care note per product |
| **No commission inquiry flow** | Solo makers often do commissions; surfacing as "Contact for custom" loses leads | Explicit commission flow with timeline + budget tiers |

---

## 9. Reference site annotations

### 9.1 Heath Ceramics — `heathceramics.com` (Archetype B — Premium Craft)

Excellent craft storytelling, product design, photography, premium ecommerce.

**Borrow:** lifestyle product photography · founder/history storytelling · workshop tours.

**Avoid:** Heath's 70-year heritage is specific to Heath.

### 9.2 East Fork — `eastfork.com` (Archetype B — Pottery/Ceramics Brand)

Strong pottery + community + ecommerce. Distinctive voice.

**Borrow:** "Made in [location]" prominence · seasonal-color releases · founder voice in copy.

**Avoid:** East Fork-specific brand voice.

### 9.3 Catbird — `catbirdnyc.com` (Archetype C — Modern Jewelry)

Good jewelry brand with strong personality and product storytelling.

**Borrow:** Brooklyn-shop neighborhood culture · wedding-band journey storytelling · community photos.

**Avoid:** Catbird-specific voice.

### 9.4 Tiffany & Co. — `tiffany.com` (Archetype A — Luxury Jewelry)

Luxury jewelry benchmark. Product presentation, gifting, premium ecommerce.

**Borrow:** product presentation discipline · gifting categories · appointment booking.

**Avoid:** scale + heritage.

### 9.5 David Yurman — `davidyurman.com` (Archetype A — Premium Jewelry)

Strong premium jewelry UX + collection architecture reference.

**Borrow:** collection-grid structure · model photography.

**Avoid:** brand scale.

### 9.6 H.Stern — `hstern.com.br` (Archetype A — BR Luxury Jewelry)

Strong luxury BR jewelry. Product presentation, brand heritage, premium ecommerce.

**Borrow:** BR-market luxury register · heritage storytelling.

**Avoid:** brand scale.

### 9.7 Royal Copenhagen — `royalcopenhagen.com` (Archetype B — Heritage Craft)

Strong heritage craft. Product collections + story.

**Borrow:** collection-as-editorial · craftsmanship transparency.

**Avoid:** 250+ year heritage is specific.

### 9.8 Pandora — `pandora.net` (Archetype A variant — Global Jewelry Ecommerce)

Global jewelry ecommerce + product personalization + gifting.

**Borrow:** personalization UX patterns · gift-finder.

**Avoid:** mass-market scale.

### 9.9 Monica Vinader — `monicavinader.com` (Archetype C — Contemporary Jewelry)

Strong contemporary jewelry. Clean UX + product storytelling.

**Borrow:** modern-jewelry register · personalization/engraving flow.

**Avoid:** Monica Vinader specific brand voice.

### 9.10 Emma Bridgewater — `emmabridgewater.co.uk` (Archetype B/C hybrid — Pottery/Homeware)

Excellent blend of heritage storytelling, personalization, and ecommerce.

**Borrow:** personalization integration · heritage-but-modern voice.

**Avoid:** Emma Bridgewater specific brand.

### 9.11 Manufactum — `manufactum.de` (Archetype B — Artisan/Quality Goods Retail)

Strong anti-slop benchmark. Editorial product descriptions, provenance, craft, durable-goods positioning.

**Borrow:** product-as-editorial copy · provenance disclosure · "Why we still make things this way" voice.

**Avoid:** Manufactum-scale curation across categories.

### 9.12 Inferred — Solo Maker / Single-Studio Artisan (Archetype D — the agency default)

No canonical worked example in §7.8 — benchmark skews to brands. Archetype D is the cross-vertical **Solo-Operator meta-archetype** from `DESIGN-BEST-PRACTICES.md` §3 adapted to product-led conversion + commission flow. Closest IA pattern: `templates/beauty.md` Old-school barber (boutique-studio register — warm, neighborhood-tied, single-maker brand). For commission-only artisans without ecommerce, `templates/professional-services.md` Archetype D inquiry flow is also a useful reference.

---

## 10. Decision matrix — picking the archetype per client

| If the client is… | Pick archetype | Stack tier (per `TECH.md` §1) |
|---|---|---|
| Solo ceramicist with WhatsApp/Instagram orders | **D — Solo Maker** | Tier 2 · Type 1 |
| Solo ceramicist with online cart | **D + light B** | Tier 3 · Type 4 |
| Solo jeweler / fiber artist / textile maker | **D — Solo Maker** | Tier 2 · Type 1–2 |
| Boutique pottery brand (2–10 employees, with own line) | **B-lite** | Tier 3 · Type 4 |
| Premium craft brand (Heath/East Fork register) | **B — Premium Craft** | Tier 3 · Type 4 |
| Modern artisan jewelry brand (Catbird/Monica Vinader register) | **C — Modern Artisan** | Tier 3 · Type 4 |
| Luxury jewelry brand | **A — Luxury** | Tier 3 · Type 4+ — almost always out of agency scope |
| Heritage pottery/homeware (Royal Copenhagen-style) | **B — Heritage Craft** | Tier 3 · Type 4 |
| Gallery / art space | **D variant** | Tier 2 · Type 1–2 |

**Default for agency cold-outreach prospects:** **Archetype D** (Solo Maker / Single-Studio Artisan). Cross-vertical Solo-Operator meta-archetype + maker-at-work photography + materials/process explainer + commission inquiry flow OR WhatsApp orders = a defensible solo artisan site at Tier 2 (or Tier 3 if cart needed), ~6–10 hrs of focused build.

---

*Artisan is a craft-led vertical built on the maker + materials + process. Skip the "handmade with love" + heart-icons. Lead with the maker + the studio + the materials. Real workshop, real hands, real story.*
