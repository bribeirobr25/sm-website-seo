# Kodama Bonsai — BRIEF.md

**Status:** PORTFOLIO DEMO. All content fictional.

## 1. Business identity

- **Name:** Kodama Bonsai
- **Short name:** Kodama
- **Legal entity:** Kodama Bonsai GbR (DRAFT — fictional)
- **Founded:** 2019
- **Founders:** Hannes Wakabayashi (Bonsai-Meister-Ausbildung Saitama 2014-2018) · Marlene Reuter (Forstwissenschaft TU Berlin)
- **Tagline (DE):** "24 Bäume. Eine Werkstatt. Eine Wissenssammlung."
- **Tagline (EN):** "24 trees. One workshop. One knowledge garden."

## 2. Contact

- **Address:** Kollwitzstraße 76, 10435 Berlin · Prenzlauer Berg (DRAFT — fictional exact street; near Kollwitzplatz)
- **Phone:** +49 30 9009 9142 (DRAFT)
- **Email:** hallo@kodama-bonsai.de (DRAFT)
- **Data controller email:** datenschutz@kodama-bonsai.de (DRAFT)

## 3. Hours (Werkstatt — by appointment)

- Mo: closed
- Di–Fr: 14:00–19:00 (afternoon + early evening)
- Sa: 10:00–17:00 (workshops + open hours)
- So: closed

## 4. Services + pricing

This demo has no pricing — Kodama is an information service, not a commercial offering. At retainer-time, a Workshops/Stunden price list would be added under `/preise`.

Possible pricing structure (post-conversion):
- Group workshop "Erster Bonsai" (jeden zweiten Samstag) — DRAFT
- Werkstatt-Stunde (individual session by appointment) — DRAFT
- Newsletter — free

## 5. Team

| Name | Role |
|---|---|
| Hannes Wakabayashi | Co-founder, head bonsai practitioner, content authority |
| Marlene Reuter | Co-founder, forest-science background, photography + content |

Plus rotating volunteer support.

## 6. KPI contract

**Status:** DEMO. If converted to retainer:
- **Acquisition:** GBP profile views (target: 400/mo) + organic Berlin "Bonsai Werkstatt" queries (target: 1200/mo)
- **Conversion:** Wakaba newsletter signups (target: 25/mo) + Werkstatt-Stunde email enquiries (target: 8/mo)
- **Retention:** Newsletter open-rate ≥ 35% + workshop repeat-attendance ≥ 40%
- **Health:** GBP review-count delta 30d + workshop NPS

Tier-2 stack: GA4 + GSC + Clarity. PostHog optional.

## 7. NAP canonical

```
Kodama Bonsai
Kollwitzstraße 76
10435 Berlin
+49 30 9009 9142
```

**Country:** DE
**Owner-confirmed:** N (fictional)
**Last NAP-consistency audit:** N/A (demo)

## 8. Open questions / DRAFT items

- [ ] Real address (currently "Kollwitzstraße 76" is plausible but fictional)
- [ ] Real phone + email + USt-IdNr
- [ ] Real photography — workshop interior, founders, real bonsai specimens vs Unsplash pool
- [ ] Real botanical verification on 2 DRAFT species: Chloroleucon tortum (cold tolerance + cuttings rate) · Serissa japonica (cuttings success rate)
- [ ] Pricing structure for Workshops + Werkstatt-Stunden (currently no pricing)
- [ ] Newsletter backend decision (Brevo / Mailjet / ConvertKit — must be EU-hosted per DSGVO)
- [ ] EN locale routes — full bilingual or DE-only? Currently DE-only with EN data ready in `trees.ts`
- [ ] geo lat/lng precision: current `52.5378, 13.4194` is approximate; verify against actual Kollwitzplatz pin (~52.5366, 13.4170)

## 9. Citation priority

**Universal:**
- Google Business Profile
- Apple Maps
- Bing Places
- Facebook Page
- Instagram

**Vertical-specific (bonsai/horticulture):**
- berlin.de Branchenbuch
- Bonsai Club Deutschland (BCD) member-finder
- meinestadt.de
- Yelp DE (low priority)

**Skip:**
- Sellwerk (3-month auto-renewal trap)
- 11880 (telesales pressure)
- Generic plant-care directories

## 10. Content authority

24 species documented at `src/lib/trees.ts`. Each entry: DE+EN intro, 6-field care (sun/soil/water/fert/temp/pruning), 3 common styles, 2-4 techniques (with period + minimum age), 1 propagation block (method + period + post-care), 3 photos.

Climate-calibrated for Berlin Hardiness Zone 7b. Olea europaea explicitly flagged as needing frost-free winter shelter.

Sourced from agency-internal bonsai-horticulture knowledge 2026-05-26; cross-reference against bonsaiempire.com / bonsaimirai.com / herons.co.uk before publishing as authoritative.
