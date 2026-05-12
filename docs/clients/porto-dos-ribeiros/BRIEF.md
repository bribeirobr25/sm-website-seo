# BRIEF — Porto dos Ribeiros — Comida Brasileira

**Status:** Demo phase — not yet contacted. All facts below sourced from public data unless marked CONFIRMED.

---

## Business identity

| Field | Value | Source |
|---|---|---|
| Legal / display name | Porto dos Ribeiros — Comida Brasileira (also styled "Cafe & Restaurante") | GBP + own site |
| Category | Brazilian restaurant + café + bar | Restaurant Guru |
| Address | R. da Constituição 982, 4200-196 Porto, Portugal | GBP |
| Phone / WhatsApp | +351 963 349 411 (same number for both) | GBP + own site |
| Email | unknown — DRAFT | — |
| Owner name(s) | unknown — DRAFT | — |
| NIF / CAE | unknown — DRAFT (required for PT legal footer) | — |

## Online presence

| Channel | URL | Note |
|---|---|---|
| Website (current) | https://portodosribeiros.com | Functional but minimal: WhatsApp ordering, dish gallery, no hours, no prices |
| Instagram | https://instagram.com/portodosribeiros | ~2.4K followers; brand voice is here (PT-BR) |
| Facebook | facebook.com/Porto-dos-Ribeiros | 536 likes / 798 visits |
| Google Business | 4.7★ from 287 reviews | Strong reputation, no website link yet |

## Hours — **DISCREPANCY, needs owner confirmation**

Canonical source (use until told otherwise): **Instagram bio.**

| Day | Hours |
|---|---|
| Sun–Thu | 07:00 – 22:00 |
| Fri–Sat | 07:00 – 24:00 |

⚠ Bio emphasizes **"Não fechamos à tarde"** — kitchen runs continuously, no afternoon break. This is a differentiator vs Portuguese restaurants that close 15:00–19:00 and worth showing on the hero.

Conflicts noted:
- Placejoys lists 09:00 start and a Sunday 20:00 close — **older data, ignore**.
- GBP today shows "Closes 10 pm" — consistent with 22:00 weekday close.

## Menu (DRAFT — assembled from gallery + reviews + aggregator copy)

**Pratos principais**
- Feijoada (frequently named in reviews as the signature)
- Strogonoff (carne)
- Picanha
- Jardineira
- Prato do dia (daily special)

**Salgados / petiscos**
- Coxinha
- Empadas variadas
- Pastel de feira
- Tortinha de frango com Catupiry

**Doces**
- Brigadeiros
- Bolo de camadas / bolo fatia
- Casadinhos de goiabada

**Café e bebidas**
- Café (espresso + filtrado)
- Cerveja, vinho
- Happy hour (mentioned, no times confirmed)

**Único preço público encontrado:** arroz com guisado de carne — €6,50. Faixa de preço geral: €5–15 por pessoa (GBP).

→ **Owner must confirm full menu + prices before production.** Demo will show 6–8 representative dishes with "a partir de €X" placeholders or pricing dropped entirely.

## Service options (CONFIRMED via GBP)

- Outdoor seating (terrace)
- Vegetarian options
- Wi-Fi
- Delivery (WhatsApp) — free up to 3 km, minimum €13 order
- Beyond 3 km: surcharge calculated
- Free transport (capacity: 4 people) for orders €30+ within 3 km, subject to availability
- Indoor seating is limited — outdoor terrace is the named asset

## Audience — three groups

1. **Brazilian diaspora in Porto** — primary loyal base. Speak to homesickness, "feels like family," dishes you can't find elsewhere. Voice: PT-BR, warm, informal.
2. **Portuguese locals around Constituição** — daily café crowd + lunch (prato do dia). Off-tourist-path is a positive. PT-BR voice is intelligible to them; the Brazilian identity is the differentiator, not a barrier.
3. **English-speaking tourists** — reviews repeatedly say "stumbled across this place," "tired of the same menu." Real conversion opportunity. EN site mandatory.

## Differentiators to lead with

1. **Continuous kitchen** — no afternoon break, rare in Porto.
2. **Brazilian feijoada and stroganoff** — both named in Top reviews.
3. **Owner-operated, "feels like family"** — quote from review.
4. **Café + restaurant + delivery in one** — morning coffee through late dinner.
5. **4.7★ from 287 reviews** — trust signal worth showing prominently.

## Approved review quotes (verbatim from GBP — pending client clearance for site use)

> "From the very first visit, this Brazilian restaurant completely stole our hearts. It's not just a place to eat — it feels like family."
> — Max D.

> "Very nice Brazilian food. We tried the stroganoff, feijoada (Brazilian beef stew) — both were very good and presented nicely. Owners and servers are attentive."
> — Marilynn

> "We were lucky enough to stay nearby and stumbled across this place… easy to get tired of the same menu items through Porto, this place was [different]."
> — Natalie Tinecheff

Schema.org `aggregateRating` will only be rendered if the owner confirms display; otherwise we show the star count as plain visual without structured data (per SEO.md rule on unverified ratings).

## Photos available for demo (scrape sources)

- portodosribeiros.com gallery — 11 dish photos (Picanha ×2, Strogonoff, Jardineira ×2, Empadas, Coxinha, Tortinha, bolos, Brigadeiros ×2)
- Instagram `@portodosribeiros` — mix of dishes + dining room (need manual download, unauthenticated scrape blocked)
- GBP photo set — dining room, exterior of Rua da Constituição 982, food

Demo currently uses two of these images on the home page — `picanha.png` (hero) and `strogonoff.png` (menu feature). All 12 dish photos sit in `src/assets/images/` and go through Astro's image pipeline (`<Image>` component + sharp), which emits responsive WebP at build time (typical 2 MB source → 50–200 KB output per width). Total `dist/` is 1.5 MB, down from ~30 MB pre-migration. **Still to do before production:** swap scraped photos for owner-supplied originals; the pipeline is wired so this becomes a file replacement, not a code change.

## Portugal legal requirements (ETA: confirm with client)

Different from German market — no Impressum, no Datenschutzerklärung. Required for PT:

1. **Footer block** with legal name, NIF, CAE, address — equivalent to Impressum, less strict.
2. **Livro de reclamações electrónico** link: `https://www.livroreclamacoes.pt/inicio` — mandatory for any business serving the public in Portugal.
3. **Política de privacidade** — required if any data collected (contact form, GA4, cookies).
4. **Cookie banner** — only if non-functional cookies. GA4 with IP anonymization may avoid the banner; confirm before launch.

## Scope decisions for the demo

- **Stack:** Astro 5 + Tailwind v4 (Tier 2)
- **Locales:** PT (default, BR voice) at `/`, EN at `/en/`
- **Pages:** Home + Menu + Visitar/Visit (map + hours + delivery) + Política de privacidade
- **Primary CTA:** WhatsApp (+351 963 349 411) — secondary: Call, Directions
- **Schema:** `Restaurant` with full `openingHoursSpecification`, `geo` (verified 2026-05-13 via OSM Nominatim — `41.1626, -8.6107`, re-verify against the actual Google Maps pin before production), `servesCuisine: "Brazilian"`, `priceRange: "€"`
- **noindex on every page** until owner commits

## Open questions for the cold call

1. Confirm hours (Sun–Thu 07–22 / Fri–Sat 07–24 — IG bio).
2. Get full menu with prices.
3. NIF + CAE for the legal footer.
4. Approve use of three review quotes shown above.
5. Email address for the contact form recipient.
6. Logo file in vector or high-res raster, if one exists.
7. Whether they want online reservations or stick with WhatsApp.
8. Photo permissions — can we use their IG/site photos for the launched site, or do they have originals?

## Next steps

1. Draft `design.md` + per-client `CLAUDE.md` (done in this same commit batch).
2. **STOP — review with user before scaffolding any code.**
3. Scaffold Astro project at `clients/porto-dos-ribeiros/`.
4. Build PT + EN pages with placeholder content tagged DRAFT where unconfirmed.
5. Hand demo + cold-call talking points to user.
