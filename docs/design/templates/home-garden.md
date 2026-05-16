# home-garden.md — Home & Garden Vertical Template
## Florist · Garden Center · Plant Shop · Landscaping · Lawn Care · Home Retail

**Applies to:** Home & Garden clients across product types 1–4 (per `TECH.md` §1). The vertical splits sharply: **product-sale sub-verticals** (florists, plant shops, garden retail) are often Type 4 transactional ecommerce — different stack tier (Tier 3 Next.js). **Service sub-verticals** (landscaping, lawn care, garden design) are Type 1–2 with quote forms — Tier 2 Astro. Solo florists with WhatsApp ordering can stay Type 1. Identify the sub-vertical before choosing archetype.

**Reference research:** Based on `local_business_website_benchmark_report.md` §7.7 (Giuliana Flores, Flores Online, Plantei, Cobasi, Leroy Merlin, 1-800-Flowers, The Sill, Terrain, Monrovia, TruGreen, Bloom & Wild, Interflora UK, Patch Plants, Dobbies, Chelsea Gardener).

**Use this doc as a moodboard with principles, not a layout to clone.** If two clients in the same vertical end up with the same hero pattern, the template has failed at its job.

---

## Rules at a glance

- **The vertical splits by product vs service.** Florist with online cart = Type 4 (ecommerce). Florist with WhatsApp-only orders = Type 1. Landscaper = Type 2 (quote form). Garden center with online + physical = Type 4 hybrid. **Pick the product type before the archetype.**
- **Pick one of four archetypes** before designing: **Flower/Gift Ecommerce**, **Plant Ecommerce + Care Education**, **Garden Center / Lawn Care / Landscaping Service**, or **Solo Florist / Boutique Plant Shop**. ~50 % of agency clients fall into Solo Florist or Solo Landscaper; another 30 % into Garden Center / Service.
- **Delivery / service-area clarity** is the make-or-break for flower/plant ecommerce. "Same-day delivery in Niterói + free for orders over R$80" beats "we deliver."
- **Seasonal campaigns are load-bearing.** Mother's Day, Valentine's, Father's Day, Christmas, weddings, funerals — the flower/gift sub-verticals have peak seasons that drive 40-60% of annual revenue. Surface seasonal offer at peak times.
- **Care guides matter for plants.** Plant ecommerce buyers want to know "will I kill this?" — educational content + care instructions IS the trust signal.
- **Real flower/plant photography** is mandatory. Stock generic bouquet photos are the loudest tell.
- **Quote-form clarity** for landscaping. "Free quote · response within 24h · no obligation."
- **Avoid Mother's Day-clip-art and pink-everywhere florist aesthetics** unless the brand is genuinely that direction.

### Solo-Operator meta-archetype (cross-vertical pattern)

Most agency Home & Garden clients (solo florist, neighborhood plant shop, single landscaper) are the H&G-specific implementation of the **Solo-Operator meta-archetype** in `DESIGN-BEST-PRACTICES.md` §3:

- Operator/shop name in headline ("Floricultura Cedofeita — Buquês entregues no mesmo dia")
- Portrait of operator with product (florist with bouquet, plant-shop owner with foliage, landscaper at job site)
- ONE primary CTA (order via WhatsApp / request a quote / shop now)
- Delivery / service area named explicitly
- Service list OR product categories (5–10 items, depending on sub-vertical)
- Pricing reassurance ("Orçamento gratuito" / starting prices)
- Footer with legal + delivery-area map

### Sourcing rules (apply before any visual decision)

- **Photo + favicon sourcing:** `DESIGN-BEST-PRACTICES.md` §3 — 8-tier photo + 5-tier favicon priority. **Home-and-garden-specific:** product photography is critical — florists/plant-shops with bad photos lose to those with good ones, regardless of product quality. Existing client website (tier 2) is common; Instagram (tier 4) is rich for florists/plant-shops who post daily.
- **Color palette sourcing:** `DESIGN-BEST-PRACTICES.md` §5 — 6-tier color source hierarchy. The product itself (flowers, plants) drives the palette — sample bg colors that *don't compete* with the product colors. Don't pair a sage green site with all-green plant photography (camouflage); don't pair hot pink with red roses (clash).
- **Prospect intake template:** `CHECKLIST.md` §9.

---

## Table of contents

1. [The four Home & Garden archetypes](#1-the-four-home--garden-archetypes)
2. [Information architecture per archetype](#2-information-architecture-per-archetype)
3. [Hero patterns](#3-hero-patterns)
4. [Photography direction](#4-photography-direction)
5. [Typography pairings](#5-typography-pairings)
6. [Color archetypes](#6-color-archetypes)
7. [Copy voice cues](#7-copy-voice-cues)
8. [Home-and-Garden-specific anti-patterns](#8-home-and-garden-specific-anti-patterns)
9. [Reference site annotations](#9-reference-site-annotations)
10. [Decision matrix — picking the archetype per client](#10-decision-matrix--picking-the-archetype-per-client)

---

## 1. The four Home & Garden archetypes

| Archetype | Brand priority | Primary CTA | Production cost · Product type |
|-----------|---------------|-------------|--------------------------------|
| **A. Flower/Gift Ecommerce** (Giuliana Flores, Flores Online, 1-800-Flowers, Bloom & Wild, Interflora) | Occasion-led + gifting + delivery clarity | Shop / Order | High — Type 4 ecommerce + delivery scheduling |
| **B. Plant Ecommerce + Care Education** (The Sill, Patch Plants, Plantei, Monrovia) | Education-led ecommerce + plant care | Shop / Find your plant | High — Type 4 + care guides + plant-finder quiz |
| **C. Garden Center / Lawn Care / Landscaping Service** (TruGreen, Dobbies, Chelsea Gardener, Leroy Merlin) | Service-area + service catalog + quote/visit | Get a free quote / Find a store | Medium-High — Type 2 service or Type 4 retail |
| **D. Solo Florist / Boutique Plant Shop / Solo Landscaper** (the agency's default H&G client) | Operator credibility + local delivery + WhatsApp | Order via WhatsApp / Request a quote | Low — Tier 2 build, often Type 1 (WhatsApp-led) |

**Default for new Type 1/2 clients:** Archetype D. Archetype A/B require real ecommerce infrastructure (Tier 3 Next.js).

---

## 2. Information architecture per archetype

### Archetype A — Flower/Gift Ecommerce

1. **Hero** — seasonal campaign banner (Mother's Day if May, Valentine's if Feb) + "Shop by occasion" CTA.
2. **Occasion grid** — Birthday / Anniversary / Sympathy / Get Well / Just Because — each as a card with product preview.
3. **Bestsellers** — top products as quick-shop cards with delivery-time badge.
4. **Delivery zones + cutoffs** — "Same-day in Niterói until 14h · Next-day Greater Rio · National 1-3 days."
5. **Subscriptions** — weekly/monthly flower delivery for the gift-the-everyday-moment buyer.
6. **Trust signals** — happy-customer photos, reviews, delivery guarantee.
7. **Footer** — full ecommerce chrome.

### Archetype B — Plant Ecommerce + Care Education

1. **Hero** — beautiful plant lifestyle photo + headline ("Plants that suit your light + your life") + plant-finder quiz CTA OR shop-by-difficulty CTA.
2. **Plant-finder quiz** — "How much light? How much time? Pet-friendly?" — leads to recommendations.
3. **Categories by ease/light/use** — Beginner / Low-light / Pet-safe / Air-purifying.
4. **Care guides** — top articles on watering / repotting / common problems. Education is the brand.
5. **Featured products** — with care difficulty badges (Easy / Moderate / Hard).
6. **Subscription / care reminders** — "We'll remind you when to water."
7. **Trust signals** — plant-survival guarantee, reviews, plant-parent community.
8. **Footer** — care-guide index + ecommerce chrome.

### Archetype C — Garden Center / Lawn Care / Landscaping Service

1. **Hero** — green outdoor scene (lawn, garden, before/after landscape) + headline + ONE CTA. For lawn care: "Get a free quote." For garden center: "Find your nearest store."
2. **Service categories** (for service businesses) — Lawn / Trees / Hardscape / Maintenance, each with starting-from price.
3. **Service area map** — for service businesses — areas covered.
4. **Project gallery** (landscaping) — before/after pairs.
5. **Product departments** (garden centers) — Plants / Tools / Outdoor furniture / Seasonal — each as a card.
6. **Seasonal events** (garden centers) — Christmas Wonderland, Spring Plant Festival.
7. **Quote form / store finder**.
8. **Footer** — services index + careers.

### Archetype D — Solo Florist / Boutique Plant Shop / Solo Landscaper (the agency's default)

1. **Top bar** — phone + WhatsApp + delivery area summary.
2. **Hero** — operator with product (florist with arrangement, plant-shop owner with foliage, landscaper at site) + headline naming the shop + product specialty + city. ONE CTA ("Pedir no WhatsApp" / "Solicitar orçamento").
3. **Today's arrangements / featured plants / recent projects** — gallery of current available work.
4. **Categories** — Buquês de aniversário · Casamentos · Flores fúnebres · Plantas para apartamento · etc. Typography list, not card grid.
5. **Delivery / service area** — clear map or text list of neighborhoods covered + cutoffs + fees.
6. **About / Bio** — operator paragraph + portrait.
7. **Reviews** — 3–4 verbatim quotes.
8. **Order flow** — for florists with WhatsApp: "Send the message, we send the bouquet" — explain how it works.
9. **Footer** — Impressum/Política/legal + Instagram + delivery-area map.

---

## 3. Hero patterns

### Archetype A — Flower ecommerce

- Seasonal campaign banner (peaks: Mother's Day, Valentine's, Christmas).
- Headline: "Same-day Mother's Day delivery — order by 14h."
- ONE CTA: "Shop Mother's Day."

### Archetype B — Plant ecommerce

- Beautiful plant lifestyle photo (real apartment, real plants).
- Headline: "Plants that suit your light + your life."
- ONE CTA: "Find your plant" (quiz) or "Shop now."

### Archetype C — Garden center / landscaping service

- Outdoor scene OR before/after landscape.
- Headline: "Lawn care made simple" / "Find your nearest [Garden Center]."
- ONE CTA: "Get a free quote" / "Find a store."

### Archetype D — Solo florist / plant shop / landscaper

- Operator with product / at site.
- Headline names the shop + specialty + delivery/service area ("Floricultura Cedofeita — Buquês entregues no mesmo dia no Porto").
- ONE CTA: "Pedir no WhatsApp" or "Solicitar orçamento."

---

## 4. Photography direction

### Universal Home & Garden rules

- **Real product photos.** Real flowers (the ones currently available), real plants (the ones in stock), real gardens you actually landscaped.
- **Avoid stock arrangements.** Generic "rose bouquet on white" is the catalog-stock cliché.
- **Lifestyle context for plants.** Plants *in apartments* with windows, sofas, real homes — not isolated on white.
- **Before/after for landscaping.** The transformation IS the conversion.
- **Outdoor lighting matters.** Garden photos should be in golden hour (morning/late afternoon), not harsh midday.
- **Seasonal photography** for florists — refresh quarterly for relevant occasions.

### Per-archetype photography notes

| Archetype | Photo style |
|---|---|
| A — Flower/gift ecommerce | Studio-clean product shots + lifestyle gift-moments + delivery moments |
| B — Plant ecommerce | Plants in real homes (real apartments, real windows, real light) · plant-detail close-ups · plant-finder-quiz imagery |
| C — Garden center / landscaping | Outdoor scenes · before/after landscape · seasonal department imagery · in-store activity |
| D — Solo florist/plant-shop/landscaper | Operator at work · current available arrangements (refresh weekly for florists) · real customer deliveries with consent |

---

## 5. Typography pairings

### What works in Home & Garden

| Pairing | Display | Body | Mood |
|---|---|---|---|
| **Flower-shop warmth** | Fraunces · Cormorant | Manrope · Inter | Solo florist / boutique |
| **Plant-shop calm** | Recoleta · Söhne | Inter / Manrope | Plant ecommerce — modern + calm + educational |
| **Garden-center heritage** | Tiempos · Source Serif Pro | Inter | Established garden centers (Dobbies, Chelsea Gardener) |
| **Landscaping service** | Inter Display | Inter | Service-focused, clear, professional |

### Rules

- **Never script "Floral Boutique" logos.** Wedding-vendor cliché.
- **No Comic Sans, no chalkboard fonts.** Cute-flower-shop tells.
- **Cap to two families.**

---

## 6. Color archetypes

### Archetype A — Flower/Gift Ecommerce

| Direction | Palette | Mood |
|-----------|---------|------|
| **Cream + dusty rose** | Cream bg / dark coffee text / dusty rose accent | Bloom & Wild / Giuliana Flores warmth |
| **White + brand pink** | White bg / charcoal text / brand pink accent | Modern flower ecommerce |
| **Warm cream + bold gift** | Warm cream bg / dark coffee text / saturated accent | 1-800-Flowers / occasion-led |

### Archetype B — Plant Ecommerce

| Direction | Palette | Mood |
|-----------|---------|------|
| **Beige + soft green** | Cream bg / dark green text / sage accent | The Sill / Patch Plants register |
| **Off-white + terracotta** | Off-white bg / dark brown text / terracotta accent | Garden-pot warmth |
| **Modern white + bold green** | White bg / charcoal text / saturated forest green | Modern plant ecommerce |

### Archetype C — Garden Center / Landscaping

| Direction | Palette | Mood |
|-----------|---------|------|
| **Garden-center green** | Cream bg / dark green text / saturated green accent | Dobbies/Chelsea Gardener |
| **Lawn-care service** | White bg / dark navy text / saturated green accent | TruGreen register |
| **Heritage estate** | Cream bg / dark coffee text / muted brass accent | Premium garden center |

### Archetype D — Solo Operator

| Direction | Palette | Mood |
|-----------|---------|------|
| **Florist warmth** | Cream bg / dark coffee text / dusty rose accent | Solo florist boutique |
| **Plant-shop natural** | Cream bg / dark green text / sage accent | Solo plant shop |
| **Landscaper outdoor** | Off-white bg / dark green text / warm orange accent | Solo landscaper / lawn care |

**Rules:**
- **Never hot pink for florists.** Hot pink reads bachelorette-party, not floral artistry.
- **Never bright green that competes with plant photography.** Plants ARE green — bg shouldn't compete.
- **Earth tones beat candy tones** in this vertical.
- **One brand accent maximum.**

### Default palette when the client has no brand

Per `DESIGN-BEST-PRACTICES.md` §5 — vertical-default tier 5:

| Sub-archetype | Default palette source | Sample tokens (starting point) | Why this works |
|---|---|---|---|
| **Solo florist** (Archetype D — agency default) | Cream + dark coffee + dusty rose | `--color-bg: #faf6ee`<br>`--color-text: #2a1f17`<br>`--color-accent: #c6927e` (dusty rose)<br>`--color-border: #e8ddd2` | Florist warmth without the hot-pink trap. Survives diverse flower colors (roses, lilies, tulips, peonies — all clash less with dusty rose than with bright pink). |
| **Solo plant shop / boutique plant ecommerce** (Archetype D variant) | Cream + dark green + sage | `--color-bg: #faf6ee`<br>`--color-text: #1f2e23`<br>`--color-accent: #6b8071` (sage)<br>`--color-border: #e3ddd0` | Sage = plants without competing. Earth tones complement plant photography. |
| **Solo landscaper / lawn care** (Archetype D variant) | Off-white + dark green + warm orange | `--color-bg: #fbfaf7`<br>`--color-text: #1f2e23` (forest)<br>`--color-accent: #d97757` (warm orange)<br>`--color-border: #e3e1dc` | Outdoor + action register. Orange = harvest/autumn/action without panic-red. |
| **Flower/gift ecommerce** (Archetype A) | Cream + dark coffee + brand pink | `--color-bg: #faf6ee`<br>`--color-text: #2a1f17`<br>`--color-accent: #d97757` (warm coral) OR `#e879f9` (soft pink) — choose based on positioning | Premium gifting register. Coral = warm-gift, soft pink = celebration. |
| **Plant ecommerce + care education** (Archetype B) | Cream + dark green + warm terracotta | `--color-bg: #faf6ee`<br>`--color-text: #1f2e23`<br>`--color-accent: #b15c2e` (warm terracotta)<br>`--color-border: #e3ddd0` | Patch Plants / The Sill register. Terracotta = pot/earth signal, signals "rooted in nature." |
| **Garden center chain** (Archetype C) | Cream + dark green + saturated brand green | `--color-bg: #faf6ee`<br>`--color-text: #1f2e23`<br>`--color-accent: #15803d` (forest green)<br>`--color-border: #e3ddd0` | Dobbies/Chelsea Gardener heritage. Forest green = established garden-center authority. |
| **Lawn-care service network** (Archetype C — TruGreen-style) | White + dark navy + bright green | `--color-bg: #ffffff`<br>`--color-text: #0f1419`<br>`--color-accent: #15803d` (bright green)<br>`--color-border: #e5e5e5` | Service-conversion register. Bright green CTA = lawn signal, navy = trust. |
| **Premium / heritage garden retail** (Archetype C — Terrain-style) | Cream + dark coffee + muted brass | `--color-bg: #faf6ee`<br>`--color-text: #2a1f17`<br>`--color-accent: #b08b3a` (muted brass)<br>`--color-border: #e3ddd0` | Editorial garden-retail register. Brass = vintage tool/heritage signal. |

**How to pick:** Use archetype matrix first. Then sub-vertical + product. Solo florist = dusty rose (warm without hot-pink). Solo plant shop = sage (complements plants). Landscaper = warm orange (outdoor action). Flower ecommerce = soft pink or coral (gift register). Plant ecommerce = terracotta (earth/pot). Garden center chain = forest green. Lawn-care service = bright green for CTA.

**These are starting points.** Sample existing materials before committing — especially for florists who often have existing IG aesthetic. Document tier in `design.md` §"Color tokens."

---

## 7. Copy voice cues

### What to say

- **Name the shop + product specialty + delivery area** for solo florists. "Floricultura Cedofeita — Buquês entregues no mesmo dia."
- **Specify delivery times.** "Entrega no mesmo dia até 14h" / "Same-day delivery before 2pm."
- **For plants: care difficulty.** "Easy care · low light · pet safe."
- **For landscaping: service area + response time.** "Niterói, São Gonçalo, Maricá · resposta em 24h."
- **Seasonal urgency where genuine.** "Dia das Mães — entrega garantida até 12 de maio. Encomende até 9 de maio."
- **Quantify experience.** "20 anos servindo Cedofeita."

### What never to say

- ❌ "Fresh flowers for every occasion." Universal.
- ❌ "Premium floral arrangements." Empty.
- ❌ "We bring nature to your home." Performative.
- ❌ "Your one-stop garden shop." Cliché.
- ❌ "Lawn care made easy" without specifying *how*.

---

## 8. Home-and-Garden-specific anti-patterns

| Anti-pattern | Why it fails | Better |
|---|---|---|
| **Stock "rose bouquet on white" photo** | Universally catalog-stock | Real arrangement, real photographed today, real customer-delivery photo |
| **Hot pink + script-typeface "Floral Boutique" logo** | Wedding-vendor cliché | Restrained typeface + earth-tone palette |
| **Mother's Day / Valentine's lasting on the site 11 months past peak** | Stale seasonal content reads "abandoned" | Refresh seasonal banner monthly or remove |
| **Plant photos on white isolation** | Belongs in a plant catalog, not a plant *brand* | Plants in real homes/apartments with real light |
| **"Order via website" without explaining delivery zones/fees/cutoffs** | Buyers cancel mid-cart when delivery is unclear | Delivery zones + cutoffs visible above the fold |
| **Generic landscaping photos (someone else's garden, stock)** | Buyers want to see *your* work | Before/after pairs of real projects |
| **No service area for landscaping** | Buyers outside service area waste time inquiring | Service area map or text list |
| **Endless plant filter without "show me what to buy"** | Decision paralysis kills conversion | "Plant finder quiz" or "We recommend for beginners" |
| **Pricing hidden behind "Contact for prices"** for retail | Retail buyers comparison-shop | Show prices |
| **Care difficulty hidden in product detail** | Plant buyers' top question is "will I kill it?" — surface on product card | Badge: Easy / Moderate / Hard |

---

## 9. Reference site annotations

### 9.1 Bloom & Wild — `bloomandwild.com` (Archetype A — Flower Ecommerce)

Strong flower/gifting ecommerce. Distinctive brand + delivery flow.

**Borrow:** letterbox-delivery innovation framing · subscription gifting · brand voice ("happy moments").

**Avoid:** Bloom & Wild's specific brand voice (it's signature).

### 9.2 Giuliana Flores — `giulianaflores.com.br` (Archetype A — BR Flower Ecommerce)

Strong BR flower ecommerce. Occasions + delivery + gifting + category navigation.

**Borrow:** occasion-grid IA · BR voice · WhatsApp integration · same-day delivery prominence.

**Avoid:** scale.

### 9.3 1-800-Flowers — `1800flowers.com` (Archetype A — US Flower/Gift)

Strong gifting, occasion filters, delivery timing, upsell.

**Borrow:** occasion-led navigation · delivery-time badges on products · upsell at cart.

**Avoid:** US-specific scale.

### 9.4 The Sill — `thesill.com` (Archetype B — Plant Ecommerce + Education)

Excellent plant ecommerce. Product education, filters, care guides, strong brand voice.

**Borrow:** care-guides-as-brand · plant-finder quiz · care-difficulty badges.

**Avoid:** The Sill's specific voice (signature).

### 9.5 Patch Plants — `patchplants.com` (Archetype B — UK Plant Ecommerce)

Strong plant ecommerce + care-guide benchmark. Distinctive tone.

**Borrow:** "right plant for right person" matching · care-guide depth.

**Avoid:** UK-specific tone.

### 9.6 Plantei Garden Center — `plantei.com.br` (Archetype B — BR Plant/Garden)

BR plant/garden benchmark. Product categories + care-oriented retail.

**Borrow:** BR-market category structure · care-info accessibility.

**Avoid:** category breadth.

### 9.7 TruGreen — `trugreen.com` (Archetype C — Lawn Care Service)

Strong lawn-care service conversion benchmark. Quote + service-area flows.

**Borrow:** quote-form-as-conversion · service-area entry · seasonal plans.

**Avoid:** chain scale.

### 9.8 Dobbies — `dobbies.com` (Archetype C — UK Garden Center Chain)

Garden-center chain. Ecommerce + stores + seasonal product categories.

**Borrow:** seasonal-department structure · garden-center IA.

**Avoid:** chain scale.

### 9.9 The Chelsea Gardener — `chelseagardener.com` (Archetype C — Premium Garden Center)

Premium local garden-center benchmark. Strong visual presentation.

**Borrow:** premium-garden-retail register · curated product selection.

**Avoid:** Chelsea-specific positioning.

### 9.10 Leroy Merlin Brasil — `leroymerlin.com.br` (Archetype C — Mass-Market Home/Garden)

Large home/garden retail benchmark. Product taxonomy, search, categories, omnichannel.

**Borrow:** product taxonomy depth · omnichannel store-finder.

**Avoid:** Leroy-scale operations.

### 9.11 Terrain — `shopterrain.com` (Archetype C variant — Premium Garden/Home Retail)

Premium home/garden retail. Editorial product presentation.

**Borrow:** editorial-product-pages · seasonal storytelling.

**Avoid:** Anthropologie-family aesthetic.

### 9.12 Inferred — Solo Florist / Solo Plant Shop / Solo Landscaper (Archetype D — the agency default)

No canonical worked example in §7.7 — benchmark skews to chains/ecommerce. Archetype D is the cross-vertical **Solo-Operator meta-archetype** from `DESIGN-BEST-PRACTICES.md` §3 — same pattern as `templates/trades.md` Archetype D (for landscaping / lawn care service IA — phone-led conversion + service-area emphasis) and `templates/beauty.md` Old-school barber for the boutique-shop feel (for florist / plant-shop register — warm + neighborhood-tied).

---

## 10. Decision matrix — picking the archetype per client

| If the client is… | Pick archetype | Stack tier (per `TECH.md` §1) |
|---|---|---|
| Solo florist with WhatsApp ordering | **D — Solo Florist** | Tier 2 · Type 1 |
| Solo florist with online cart + delivery | **D + light A** | Tier 3 · Type 4 |
| Boutique plant shop (single location, WhatsApp orders) | **D — Solo Plant Shop** | Tier 2 · Type 1–2 |
| Plant ecommerce (boutique online plant brand) | **B — Plant Ecommerce** | Tier 3 · Type 4 |
| Flower ecommerce (mid-tier with cart + delivery) | **A — Flower Ecommerce** | Tier 3 · Type 4 |
| Single landscaper / lawn care | **D — Solo Landscaper** | Tier 2 · Type 2 (with quote form) |
| Landscaping company (2-10 crew) | **D + light C** | Tier 2 · Type 2 |
| Garden center (single location) | **C-lite** | Tier 2 · Type 2 (with quote form or simple cart) |
| Garden center chain | **C — Garden Center Chain** | Tier 3 · Type 4 |
| Lawn-care franchise (TruGreen-style) | **C — Service Network** | Tier 3 · Type 3 |

**Default for agency cold-outreach prospects:** **Archetype D** (Solo Florist / Plant Shop / Landscaper). Cross-vertical Solo-Operator meta-archetype + real product photography + delivery/service-area clarity + WhatsApp-led conversion = a defensible solo H&G site at Tier 2, ~5–8 hrs of focused build (florists need weekly photo refresh as a retainer item).

---

*Home & Garden splits sharply by product-vs-service. Identify the type before the archetype. Skip the rose-on-white catalog photos. Show real product, real delivery area, real before/after.*
