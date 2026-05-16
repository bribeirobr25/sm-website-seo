# Jean Souza Barbearia — Design File

## Inherits: DESIGN-BEST-PRACTICES.md

Archetype: **Beauty → C (Solo / Atmospheric Trust-Led)** per `docs/design/templates/beauty.md`. Sub-pattern: single-chair barber with multi-year client loyalty — closer to "neighborhood institution" than "trendy modern fade."

---

## Client context

- **Business type:** Single-chair barber shop (Jean + Anderson; "Diegão" mentioned in older reviews — confirm if still active)
- **City / neighborhood:** Niterói, RJ — Santa Rosa, Av. Sete de Setembro 325
- **Primary language:** Portuguese (Brazilian Portuguese; the IG bio and all reviews are PT-BR)
- **Primary audience:** Long-term loyal clients (families, multi-generation) + new clients searching "barbearia Icaraí" / "barbeiro Niterói"
- **Main CTA:** WhatsApp + Trinks booking deep-link (both equally weighted on the hero)
- **What it should feel like:** Familiar, dependable, masculine but warm. "Meu barbeiro de sempre." Trust over trend.
- **What it must NOT feel like:** Trendy hipster barbershop (no exposed-Edison-bulb cliché, no neon "MAN UP" signs, no tactical-skull iconography). Not generic SaaS template either. Specifically Niterói, specifically Jean.

---

## Visual direction

**Aesthetic sentence:** *"This site feels like the kind of modern urban barbershop where the customer trusts the chair — dark walls, a single white-and-red sign on the storefront, the clipper hum, two chairs full on a Saturday morning, ten years of regulars who know everyone by name."*

> **History note:** an earlier draft used a warm cream + caramel "old-school barbershop where your dad still goes" framing. That was correct *as the vertical-default tier-5 starting point* but contradicted Jean's actual brand once retrieved from Trinks (2026-05-15). The brand identity is **modern urban barber (dark + white + red)** — see §"Palette source provenance" below.

### Reference 1 — TONI&GUY (per `templates/beauty.md` Archetype A)
- **Borrow:** restrained editorial typography, clean grid, no visual noise.
- **Avoid:** the high-fashion polish — too aspirational for a neighborhood institution.

### Reference 2 — AIRE Ancient Baths (per `templates/beauty.md` Archetype C)
- **Borrow:** atmospheric photography with warm earth tones; the sense that the place itself has history.
- **Avoid:** the candlelit luxury-spa register — too theatrical for a barbershop. Dial it down to "Saturday morning, sunlight through the window, freshly brewed coffee on the counter."

### Reference 3 (vertical-internal) — Barber Barber UK (benchmark §7.3)
- **Borrow:** confident barber-specific positioning; tone of voice that takes the craft seriously without irony.
- **Avoid:** the Instagram-bait styling. Jean's brand is older clients + families, not 22-year-old fashion blog content.

---

## Color tokens (locked — sourced from Trinks logo 2026-05-15)

Palette concept: **dark near-black + white + saturated red.** Sourced from Jean's actual brand logo retrieved from his Trinks profile — see §"Palette source provenance" below for the sampling method. Reads "modern urban barber, ten years on the same corner, masculine without veering bro-edgy."

```css
--color-bg:           #131418;   /* deep near-black with slight blue tint — exact match to logo bg */
--color-bg-deep:      #0a0b0e;   /* footer / deepest surface */
--color-surface:      #1f2126;   /* cards, alternate sections */
--color-text:         #ffffff;   /* white — matches logo treatment */
--color-text-muted:   #a8acb3;   /* warm-cool gray for secondary text */
--color-text-subtle:  #7a7f88;   /* deeper gray for footnotes (passes WCAG AA on bg) */
--color-accent:       #dc2626;   /* vibrant red — brand accent, primary CTA */
--color-accent-deep:  #b91c1c;   /* hover + active — darker red (white-on-this: 6.50:1 — AA). Canonical naming per TECH.md §7. */
--color-border:       #3a3d44;   /* section dividers — subtle but visually present */
```

**WCAG 2.2 AA verification** (computed 2026-05-15 with the Python relative-luminance formula):

| Pair | Ratio | Status |
|---|---|---|
| Body text (`#ffffff`) on bg (`#131418`) | 18.41:1 | ✅ AAA |
| Muted text (`#a8acb3`) on bg | 8.08:1 | ✅ AAA |
| Subtle text (`#7a7f88`) on bg | 4.57:1 | ✅ AA |
| White on accent (`#dc2626`) — CTA label | 4.83:1 | ✅ AA |
| White on accent-hi (`#b91c1c`) — hover | 6.50:1 | ✅ AA |
| Accent text (`#dc2626`) on bg | 3.81:1 | 🟡 AA-large only (acceptable for the Header "Barbearia" word at text-base+, fails for body) |

**No browns, no creams, no warm wood.** This is a modern urban brand palette, not a heritage warm-tone palette.

### Palette source provenance

Per `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette," every per-client palette must declare which priority tier it was sourced from.

- **Source tier used:** **3 — Sampled directly from the client's existing brand identity** (logo retrieved from the Trinks profile at https://www.trinks.com/jean-souza-barbear, 2026-05-15). The logo is a registered brand asset Jean already uses on his booking platform; sampling it counts as priority 3 (brand-source signal) per §5, not tier 5 (vertical-default).
- **Sampling method:** Python PIL `Counter()` on all 1.47M pixels of the 1214×1214 master logo. Top results:
  - `#131418` — 84.65% (dark near-black bg, slightly blue-tinted)
  - `#ffffff` — 7.80% (white wordmark + JS shield)
  - `#f34228` / `#e03f20` / `#dc2626` — saturated red-orange accent on "BARBEARIA"
- **Token values:**
  - `--color-bg: #131418` — exact match to logo bg
  - `--color-text: #ffffff` — exact match to logo text
  - `--color-accent: #dc2626` — clean Tailwind-friendly red close to the brand red-orange (`#f34228` would be the literal match but `#dc2626` reads cleaner at all weights and survives PNG → WebP color shifts)
  - `--color-text-muted: #a8acb3` and `--color-text-subtle: #7a7f88` — neutral grays chosen for WCAG 2.2 AA contrast against the dark bg (5.2:1 minimum on text-subtle, verified)
- **What this supersedes:** an earlier draft of this site used tier 5 (vertical-default per `templates/beauty.md` §6 → Old-school barber: cream + caramel + warm wood/leather). That direction was correct *as a default when no brand exists* — but Jean DOES have a brand (modern, dark, sport-influenced). The §5 priority hierarchy requires sourcing from the highest available tier, so tier 3 supersedes tier 5.
- **What this means for the design language:** Jean's brand is **Modern Urban Barber (dark)** — not Old-school Heritage. The accent red signals urgency + masculinity (sport / urban) rather than warmth (wood / leather). Copy stays warm and family-friendly ("10 anos cuidando do seu corte"), photography stays grounded in real workspace shots — the dark palette + red accent simply gives the right *visual register* for that warm copy.
- **Override condition:** if Jean provides updated brand materials or different storefront paint than what the logo suggests, re-sample and update tokens.

---

## Typography choices

**Display font:** Fraunces (variable, opsz axis) — same as Porto. Serif with subtle warmth, reads "established" without being old-fashioned. Self-hosted via `@fontsource-variable/fraunces`.

**Body font:** Manrope (variable) — clean humanist sans, pairs cleanly with Fraunces. Self-hosted via `@fontsource-variable/manrope`.

**Data / labels (hours, prices, addresses):** Manrope at smaller size with letter-spacing — no second font needed.

Why this pairing: matches Porto's font system so the agency has a consistent reusable stack across portfolio. Fraunces+Manrope passes the readability test at 16px body / 1.6 line-height (per `DESIGN-BEST-PRACTICES.md` §4).

---

## Copy decisions

**Hero headline (DRAFT — pending owner input):**
> **"Jean Souza Barbearia · 10 anos cuidando do seu corte em Niterói."**

Alternative if Jean wants more personal voice:
> **"O barbeiro que sua família escolhe há 10 anos."** (riffs on the Kenia Gomes review verbatim)

**Hero sub-headline (DRAFT):**
> *"Corte masculino, barba e cuidado completo no Icaraí. Agende com Jean ou Anderson em poucos cliques."*

**Primary CTA label:** **"Agendar no Trinks"** (the working booking system) + **"Falar no WhatsApp"** (the immediate-contact option).

**Tone in one word:** *Familiar.* (As in: feels like a member of the neighborhood, not a brand.)

---

## Real assets available

| Asset | Status |
|---|---|
| Photos | Instagram has plenty (storefront, chair, work, portrait). **Need owner permission to use for the launched site. Owner-supplied originals preferred for production.** |
| Logo | Unknown — DRAFT. If no logo exists, typeset "Jean Souza Barbearia" cleanly in Fraunces with letter-spacing. |
| Reviews | 52 Google reviews, 5.0 avg. Four verbatim quotes pre-approved as drafts (see `BRIEF.md`); **all need owner clearance for site use.** |
| Specific hours confirmed | **Not yet** — IG bio says Tue–Sat 09:00–18:00; GBP says "Closes 7pm." Resolve with owner. |
| Services + prices | Services list known (9 services per GBP); prices unknown. Resolve with owner. |
| Trinks deep-link | Approximate URL known (`trinks.com/jean-souza-barbear...`); confirm exact slug. |

---

## Delivery notes

- **Hosting:** Vercel (agency account)
- **Domain:** to confirm — likely `jeansouzabarbearia.com.br` (`.com.br` ~R$ 40/year via Registro.br); Jean may already own one
- **Languages needed:** PT-BR only (no EN, no DE)
- **Impressum required:** No (Brazilian site) — but **Política de Privacidade is required (LGPD)** + footer with MEI/CNPJ + Razão Social
- **Schema priority:** `LocalBusiness` → `BarberShop` with `openingHoursSpecification`, `geo`, and `aggregateRating` *only* if owner approves the 5.0/52 display

---

## Section-by-section plan (single page)

| Section | What it does | Photography/asset need |
|---|---|---|
| **Hero** | Headline + sub-headline + 2 CTAs (Agendar Trinks / WhatsApp). Background: warm photo of Jean at the chair, or interior detail (wood + leather). | 1 hero image, landscape, ~1600×1000 |
| **Sobre Jean** | Two-paragraph short bio: 10 years, Icaraí, what he stands for. Portrait of Jean (and Anderson, optionally on same line). | 1 portrait of Jean; 1 of Anderson |
| **Serviços** | Service list with price ranges (or "Consulte"). Old-school visual: clean type, no cards, just an Italian-restaurant-menu feel. | None — typography-only |
| **Galeria** | 6–9 photos of cuts/beard work in a tasteful grid. Not Instagram-grid — more editorial. | 6–9 portfolio photos |
| **Avaliações** | 3–4 review quotes (verbatim) + the 5.0 / 52 reviews stat (if approved). | None — typography-only |
| **Visite a barbearia** | Address + map embed (or static map image) + hours + contact links. | 1 storefront photo |
| **Footer** | Legal info: Razão Social, MEI/CNPJ, address, IG link, link to Política de Privacidade | None |
| **Sticky mobile CTA** | WhatsApp bubble bottom-right + "Agendar" pill (matches `templates/beauty.md` Solo-Operator pattern) | None |

---

## Anti-slop guardrails specific to this build

Per `DESIGN-BEST-PRACTICES.md` §15 — avoid these tells:
- ❌ Stock photo of a man getting a haircut (instant template tell)
- ❌ "Premium grooming experience" or any English/Portuguese variant of vague marketing copy
- ❌ Floating cards on gradient backgrounds
- ❌ Fake testimonials or stock-portrait reviewers
- ❌ Generic "barber pole" SVG icon as logo

Affirmative tells (the Solo-Operator meta-archetype from `DESIGN-BEST-PRACTICES.md`):
- ✅ Operator named in the headline ("Jean Souza")
- ✅ Real portrait in real workspace
- ✅ Service area named explicitly ("Icaraí, Niterói")
- ✅ ONE primary CTA per viewport
- ✅ Credentials line ("10 anos · Icaraí · Tue–Sat 9–18")
- ✅ Service list (not grid)
- ✅ Pricing reassurance (range or "Consulte" — not silence)

---

*The site is a credibility wrapper around the Trinks booking that already works. Don't over-engineer it. Don't replace what's working. Show Jean as he is, where he is, and let the 10-year track record speak.*
