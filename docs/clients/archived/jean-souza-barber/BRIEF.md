# BRIEF — Jean Souza Barbearia

**Status:** Portfolio engagement — owner verbally agreed. Domain-cost-only build. All facts below sourced from public data (GBP, Instagram, Trinks) unless marked **CONFIRMED**. Owner conversation pending to confirm DRAFT items.

---

## Business identity

| Field | Value | Source |
|---|---|---|
| Display name | Jean Souza Barbearia (also "Jean Souza Barber" on GBP) | GBP + Instagram |
| Category | Barber shop (single chair + second barber Anderson) | GBP |
| Address | Av. Sete de Setembro, 325 (ao lado do A7 Crossfit) — Icaraí, Niterói — RJ, 24230-251 | Trinks (2026-05-15 — confirmed neighborhood is **Icaraí** not Santa Rosa, and provided landmark) |
| Phone / WhatsApp | +55 21 97552-9808 (assume same number; CONFIRM with owner) | GBP |
| Email | unknown — DRAFT | — |
| Owner name | Jean Souza | reviews + IG bio |
| Second barber | Anderson (named in multiple reviews); "Diegão" also mentioned | reviews |
| MEI / CNPJ | unknown — DRAFT (required for site footer + LGPD) | — |
| Years in business | 10+ years in Icaraí / Niterói | IG bio + reviews ("sou cliente há 10 anos") |

## Online presence

| Channel | URL | Note |
|---|---|---|
| Website (current) | none known | Greenfield build — this is the first website |
| Instagram | https://instagram.com/jeansouzabarbearia | 2.5K+ followers — primary brand voice + photo source |
| Facebook | Jean Souza Barbearia (580+ followers) | Lower priority |
| Trinks booking page | https://www.trinks.com/jean-souza-barbear (confirm exact slug) | Working booking system, 10 years of customer use — **do NOT replace, deep-link to it** |
| Google Business | 5.0★ from 52 reviews | Perfect rating, all 5★ except one outlier — exceptional trust signal |

## Hours (CONFIRMED via Trinks profile 2026-05-15)

| Day | Hours |
|---|---|
| Mon | Closed |
| Tue | 09:00 – 19:00 |
| Wed | 09:00 – 19:00 |
| Thu | 09:00 – 19:00 |
| Fri | 09:00 – 19:00 |
| Sat | 09:00 – 15:00 |
| Sun | Closed |

Trinks (the booking platform Jean himself uses) is the authoritative source — it shows Tue-Fri **19:00** (resolves the prior IG bio 18:00 vs GBP 19:00 discrepancy) and Sat **15:00** (shorter day). Now reflected in `src/lib/site.ts`.

## Services (DRAFT — assembled from GBP services list)

Per GBP services: **Beard trim · Shave · Straight razor shave · Old-school barber shop · Scissor cut · Haircut · Children's cuts · Head shave · Buzz cut.**

→ **Owner must confirm full service list + prices before production.** Currently no public price is known. Common BR barber price range for reference: R$ 40–80 per cut, R$ 25–50 for beard.

## Audience — two groups

1. **Long-term loyal clients (primary)** — reviews show 10-year retention, families with multiple generations using Jean ("meus filhos cortam com ele desde pequenos há 10 anos"). Voice: warm, familiar, family-friendly. The site must reinforce *"meu barbeiro de sempre"* feeling, not chase trendy hipster aesthetics.
2. **New clients in Icaraí/Niterói** — searching "barbearia Icaraí," "barbeiro Niterói," "corte masculino Niterói." Voice: trust signals up front (5.0/52 reviews, 10+ years, photo of Jean), service list, easy booking.

## Differentiators to lead with

1. **5.0★ from 52 Google reviews** — only one outlier in 52, otherwise perfect. Show prominently.
2. **10+ years in Icaraí** — long-tenure trust signal. Reviews repeatedly cite this.
3. **Family-friendly** — "meus filhos cortam com Jean desde pequenos" — verbatim from a review. Differentiates from younger-hipster barbers.
4. **Two barbers, one location** — Jean + Anderson. Reviews praise both. Optional: "Diegão" if still active.
5. **Trinks booking already works** — keep the existing flow; the site is a credibility wrapper, not a system replacement.

## Approved review quotes (verbatim from Google — pending owner clearance for site use)

> "Corto meu cabelo com Jean a pelo menos uns 3 anos e não largo de jeito nenhum. Digo para todos do meu convívio que ele é o Messi dos cortes."
> — Thiago Souza · 7 months ago · 5/5

> "Meus filhos adoram o corte com Jean. Desde pequenos são fiéis a ele a mais de 10 anos."
> — Kenia Gomes · 7 months ago · 5/5

> "Serviço excelente. Jean é o tipo de barbeiro que vc não larga mais. Desse que vc muda de cidade mas não muda de barbeiro."
> — Fillipe Matias · 7 months ago · 5/5

> "Excelente atendimento e ambiente impecável! A equipe é muito profissional, pontual e atenciosa! Recomendo!!!"
> — Raoni Rangel · 7 months ago · 5/5

`aggregateRating` schema (5.0 · 52 reviews) **only rendered if owner approves display.** Otherwise show the star count as plain visual without structured data (per SEO.md rule on unverified ratings).

## Photos available for the build

| Source | Status | Use case |
|---|---|---|
| **Trinks profile master logo** (1214×1214 PNG) | ✅ **RETRIEVED 2026-05-15** via WebFetch — saved to `public/images/logo.png` + `src/assets/images/logo.png` | Header (cropped shield), OG share image, favicon (shield-derived) |
| Instagram `@jeansouzabarbearia` | ❌ Blocked for unauth WebFetch — manual download required | Hero photo, portrait of Jean, work portfolio (cuts + fades), interior shots |
| GBP photo set | ❌ Not URL-fetchable — manual download via Google Maps | Storefront, interior alternates |
| Facebook page | ❌ Blocked (SPA) | Lower-quality fallback if other sources fail |
| Owner-supplied originals | **Requested — pending owner conversation** | Production launch (replace any scraped photos) |

**Required for demo deploy:** at minimum, a hero photo of Jean at the chair + 4–6 portfolio cuts + 1 storefront. Instagram has all of these — confirm permission to use during owner conversation, or wait for owner-supplied originals.

### Photos to fetch from sources — manual download checklist

> Per `DESIGN-BEST-PRACTICES.md` §3 "Sourcing photos and favicon from the prospect intake," the agency scaffold prefers real photos from real sources before falling back to `<Placeholder>` components. **Logo: ✅ retrieved automatically from Trinks** (full 1214×1214 master, currently wired into Header + OG image + favicons). **All other slots remain placeholders** because Instagram + GBP + Facebook are blocked for unauthenticated extraction. The **user (Breno) needs to manually download** the following slots from the sources listed; drop the originals into `clients/jean-souza-barber/src/assets/images/`, and the matching `<Placeholder>` components swap to Astro `<Image>` per slot.

| Slot in the build | Status | Source URL | What to capture | Target filename |
|---|---|---|---|---|
| Logo (full) + shield crop | ✅ **DONE** (2026-05-15) | Trinks profile (cloudfront) | High-res master logo | `logo.png` + `logo-shield.png` |
| Hero — large portrait | 📥 Pending | https://instagram.com/jeansouzabarbearia | Highest-quality portrait of Jean at the chair, mid-cut or relaxed. Vertical/portrait orientation preferred. | `hero-jean.jpg` |
| Sobre — Jean portrait | 📥 Pending | Same IG | Different angle than hero — head-and-shoulders against the shop interior | `portrait-jean.jpg` |
| Sobre — Anderson portrait | 📥 Pending | Same IG (search posts tagged with Anderson) | Head-and-shoulders, similar lighting to Jean's | `portrait-anderson.jpg` |
| Galeria — 6 portfolio shots | 📥 Pending | Same IG | Mix: 3 finished-cut detail shots + 1 beard work + 1 interior + 1 fachada | `cut-1.jpg` through `cut-3.jpg`, `beard-1.jpg`, `interior-1.jpg`, `fachada-1.jpg` |
| Visitar — storefront | 📥 Pending | Same IG or GBP photo set | Wide exterior shot of the door with the shop sign | `fachada-wide.jpg` |

### Source URLs to attempt (in priority order)

1. **Instagram (primary)** — https://instagram.com/jeansouzabarbearia · 2.5K followers, ~estimated 200+ posts. Manual download per post via right-click "Save image as" or via a desktop IG client. Do NOT use automated scraping tools — Instagram blocks them and may impact Jean's account.
2. **Google Business Profile** — Search "Jean Souza Barber Niterói" on Google Maps, expand the photo set, save each photo manually. Highest-resolution variant available via right-click on the lightbox image.
3. **Facebook** — `facebook.com/Jeansouzathebarber` (580 followers per audit). Likely lower quality than IG but worth a sweep.
4. **Trinks profile page** — `trinks.com/jean-souza-barbear...` (exact slug pending). Usually has a verified storefront photo.

### What's already in place — typeset monogram favicon

Per the priority-4 fallback in `DESIGN-BEST-PRACTICES.md` §3, the favicon is a typeset "JS" monogram in the brand palette (italic serif on warm cream, caramel-brown letterforms), committed at `clients/jean-souza-barber/public/favicon.svg`. **Replace with a real logo once Jean confirms whether one exists** (open question #8 in the owner conversation).

## Brazil legal requirements (LGPD — confirm with owner)

Different from German market — no Impressum, but real legal requirements apply:

1. **Footer block** with legal business name + MEI (or CNPJ) + address — equivalent to Brazilian "Razão Social" disclosure. **Required from owner.**
2. **Política de Privacidade** — required if any data collected (analytics, contact form, WhatsApp click tracking, cookies). LGPD has real penalties — this is non-negotiable for a public-facing site.
3. **Cookie banner** — only if non-functional cookies. GA4 with IP anonymization may avoid the banner; confirm before launch (same rule as Porto's `BRIEF.md`).
4. **Data Controller contact** — owner email for data subject requests (Art. 18 LGPD).

## Scope decisions (LOCKED 2026-05-14)

- **Product type:** **1 — Static info site**, deep-link to existing Trinks for booking.
- **Stack:** Astro 6 + Tailwind v4 (Tier 2).
- **Pages:** Single page (Hero · Sobre · Serviços · Galeria · Avaliações · Endereço/Horas · CTA) + `/politica-de-privacidade`.
- **Locale:** PT-BR only.
- **Primary CTA:** WhatsApp (`https://wa.me/5521975529808`) + "Agendar pelo Trinks" deep-link.
- **Secondary CTA:** Tap-to-call (`tel:+5521975529808`) + Directions (Google Maps).
- **Schema:** `LocalBusiness` + `BarberShop` with `openingHoursSpecification`, `geo`, `priceRange: "$$"` (placeholder until owner confirms).
- **noindex during build** — flip off only after owner approves the live URL.

## Open questions for the owner conversation

1. Confirm hours (Tue–Sat 09–18 — IG bio).
2. Get full service list with prices (or explicit decision to omit prices).
3. MEI or CNPJ number + legal business name (Razão Social) for the footer.
4. Email address for the LGPD data-controller contact.
5. Approve use of the four review quotes above.
6. Approve display of `5.0★ · 52 reviews` (Google AggregateRating) on the site.
7. Photo permissions — use IG photos for the launched site, or wait for owner-supplied originals?
8. Logo file in vector or high-res raster, if one exists. (If not, we can typeset "Jean Souza Barbearia" cleanly.)
9. Domain — does Jean own a `.com.br` already, or do we register a fresh one (`jeansouzabarbearia.com.br` ~R$ 40/year)?
10. Trinks deep-link URL — confirm exact booking-page URL.
11. Anderson + (if active) Diegão — include them on the site? Photos + names?
12. Any service Jean wants featured above others (signature cut, kids cuts, beard work)?

## Next steps

1. Draft `design.md` + per-client `CLAUDE.md` (this commit batch).
2. **STOP — owner conversation with Jean to resolve the 12 questions above.**
3. Scaffold Astro project at `clients/jean-souza-barber/`.
4. Build single-page PT-BR site with placeholder content tagged DRAFT where unconfirmed.
5. Deploy demo to Vercel preview, share with Jean.
6. Replace DRAFT content with confirmed answers + owner-supplied photos.
7. Connect domain, flip `noindex` off, submit sitemap to GSC, update GBP with website URL.
