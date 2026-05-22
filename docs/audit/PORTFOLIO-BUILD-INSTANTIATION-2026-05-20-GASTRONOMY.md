# PORTFOLIO-BUILD-INSTANTIATION-2026-05-20-GASTRONOMY.md
## Gastronomy Demo — Berlin Eis-Café

**Build slot:** Gastronomy (slot 1 of 7)
**Tier:** Tier 2 (Astro 6 / Tailwind v4 / Sentry inert per runbook §1.9)
**Deploy URL:** `demo-gastronomy.vercel.app`
**Locales:** DE primary, EN secondary
**Instantiation date:** 2026-05-20
**Runbook reference:** `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md`

This doc instantiates the runbook for the first build. Every variable in the runbook §2 slot-fill summary is locked here.

---

## 1. Business identity — three options for owner pick

All three are fictional, Berlin-anchored, Italian-family eis-café concepts. The lean toward Italian-family + neighborhood-anchor is per gastronomy template §6 sub-archetype "Heritage / family restaurant" (the strongest plausibility-to-budget ratio: warm cream + terracotta palette, owner-portrait moment, Italian untranslated cues for heritage signal, all achievable with free-license imagery).

Each option includes the §1.2 plausibility check (Google + GBP + `*.de` domain). The check is intentionally lightweight — Claude can search Google in subsequent turns to confirm before commit. The names below were generated against the rule that no real Berlin business with the same name + Bezirk should appear in the first page of search results.

### Option A — **Eiscafé Bellini** · Prenzlauer Berg

- **Bezirk:** Prenzlauer Berg (Kollwitzkiez subzone — Knaackstraße / Husemannstraße area)
- **Positioning:** "Drei Generationen Familieneis, in Berlin seit 1987 — handgemacht jeden Morgen."
- **Founder:** Giulia Bellini (granddaughter of the original 1987 founders Tommaso + Rosa Bellini who came from Treviso)
- **Why this works:** Prenzlauer Berg is the most internationally-visible Berlin Bezirk for café culture — when shown to a prospect, the demo lands as "this is a place I know"
- **Naming plausibility:** "Bellini" is a common Italian surname (also a famous Veneto-region cocktail) — believable as a family name. The 1987 date predates the wall fall, which is a credible "we've been here through the changes" hook.

### Option B — **Gelateria di Lichtenberg** · Friedrichshain (NOT Lichtenberg)

- **Bezirk:** Friedrichshain (Boxhagener Platz area)
- **Positioning:** "Gelato alla siciliana — Granita, Brioche con Gelato, Cassata. Aus Catania, in Berlin seit 2014."
- **Founder:** Marco Sinatra (from Catania, Sicilia)
- **Why this works:** the name plays on the typical Berliner-misnaming pattern (a Friedrichshain business named "di Lichtenberg" because the family lived in Lichtenberg first when they arrived in Berlin in 2014). It's a place-identity story embedded in the name — visible to anyone who knows the city, invisible to anyone who doesn't.
- **Naming plausibility:** "Sinatra" exists as a common Sicilian surname (the singer's family was Sicilian). 2014 is the post-2010 wave of Italian migration to Berlin — credible founding date.
- **Risk:** the name might confuse non-Berliners; the play-on-misnaming may not land.

### Option C — **Cremeria Anhalt** · Kreuzberg

- **Bezirk:** Kreuzberg (Bergmannstraße area)
- **Positioning:** "Cremeria im Bergmannkiez. Vegan oder klassisch. Saisonal aus der Region."
- **Founder:** Aaron Anhalt (German-Italian, mother from Bologna)
- **Why this works:** the "Anhalt" name carries a Berlin-specific echo (Anhalter Bahnhof — historic Berlin landmark). A German-Italian founder is a more modern, less stereotyped story than the "we came from Italy in [year]" trope. Vegan-or-classic positioning hits the current Berlin gelato market (Hokey Pokey, Caramello, etc.).
- **Naming plausibility:** "Cremeria" is the Italian term for an artisanal ice cream shop (different register from "Gelateria" or "Eiscafé") — uncommon enough in Berlin to feel distinctive, common enough in Italian Wikipedia to be believable.
- **Risk:** "Anhalt" might read as a brand name rather than a surname; uncommon as a personal surname.

### Recommended pick

**Option A — Eiscafé Bellini, Prenzlauer Berg.**

- Cleanest archetype fit (Heritage / family restaurant per gastronomy template §6 sub-archetype default palette).
- Cleanest plausibility (no risky naming joke, no compound-cultural-identity claim that could land wrong).
- Strongest place-identity signal (Prenzlauer Berg as Berlin's most-photographed café Bezirk is the strongest "this looks like a Berlin business" hook).
- Strongest demo-quality (three-generation story gives the about page real material; 1987 date enables a "since 1987" stat callout per §7 below).

Lock-in awaiting owner ack. If owner prefers B or C, swap the §3 / §4 / §5 / §7 instantiation values accordingly — the runbook is identity-agnostic.

---

## 2. Research targets — Phase 1 sources

Five real Berlin gelaterias to WebFetch in phase 1. Each pick is justified for the voice and archetype patterns we want to absorb (and the anti-patterns we want to avoid).

| Pick | URL | Why this business |
|---|---|---|
| **Hokey Pokey** | https://www.hokey-pokey.de/ | The benchmark modern Berlin gelato spot (Prenzlauer Berg). Strong place-identity (Stargarder Straße is in their voice). Sometimes-too-long-queue social proof. Modern register, English-friendly. Captures the contemporary Berlin gelato-shop voice. |
| **Caramello** | https://www.caramello-eis.de/ | Vegan-leaning gelato in Kreuzberg + Neukölln + Schöneberg — multi-location. Shows how a small chain handles "place identity" per Bezirk on a single site. Often-cited contemporary voice. |
| **Anhalt Genuss (Markthalle Neun)** | https://markthalleneun.de/ | Not a gelateria per se but the gold standard for Berlin food brand voice — Markthalle Neun's tenant pages and brand copy show the Berlin-food register at its most studied. |
| **Eis Aldo (Lichtenberg / Karlshorst)** | https://www.eis-aldo.de/ | Old-school neighborhood gelateria. Founded 1990s. Heavy family-history voice. Visual reference for what "Heritage / family restaurant" sub-archetype looks like when done by a real owner, not a brand. |
| **Eismanufaktur Berlin** | https://www.eismanufaktur-berlin.de/ | Branding-forward Mitte business. Cleaner site, photo-driven, more conversion-led. Counterweight to Eis Aldo — shows what NOT to lean into for the Heritage archetype we picked. |

Three of the five (Hokey Pokey, Caramello, Eis Aldo) are sufficient for phase 1 verification gate. The other two are bonus signal.

**Expected research findings to confirm:**
- Berlin gelato voice mixes Italian untranslated cues (`gelato`, `granita`, `cassata`, `brioche con gelato`, `affogato`) with German functional copy
- Hours are seasonal — most close Nov-Feb (or open weekends only). This is the place-identity detail the demo absolutely must include (`März bis Oktober` or `Sommer-Saison`)
- "Selbstgemacht / Handgemacht / Hausgemacht" is universal — table-stakes, not a differentiator
- Sourcing claims ("aus der Region" / "Bio-Milch von …") are common in higher-end shops
- Sie vs du: split. Hokey Pokey leans du (younger audience), Eis Aldo leans Sie (older neighborhood clientele). Our demo (Bellini, Heritage archetype) should lean **Sie** — heritage register, three-generation story, audience is families and older neighborhood.

---

## 3. Archetype selection

Per `templates/gastronomy.md` §1 + §10 decision matrix.

**Picked:** Archetype A — Immersive Brand Editorial · **stripped-down variant** per §10 "honest middle case."

**Decision-matrix walk:**

| Question | Answer | Implication |
|---|---|---|
| Reservations as primary conversion? | No (eis-cafés are walk-in) | Not pure A |
| Takeaway / delivery / fast-casual? | Partial — eis-bar is walk-up, but the seated tables are core | Not pure B |
| Heritage story (≥ 10 years, family-run, distinctive)? | Yes — three generations, 1987 | Pushes toward A or C |
| Single-location small budget? | Yes (demo, no client budget) | Strip down to A — keep headline-led hero + interior photography + single CTA, skip editorial sections |
| Multi-location chain? | No | A confirmed |

**Final read:** "Most single-location agency clients land in a stripped-down version of Archetype A" per gastronomy template §10. We adopt that pattern exactly. NOT pure Archetype A (no full editorial / news section, no welcome modal) and NOT Archetype C (no welcome modal, no dark theatrical palette). The Eis Aldo + Hokey Pokey blend in the §2 references is the visual target.

**Sub-archetype per `gastronomy.md` §6:** "Heritage / family restaurant" — `--color-bg: #f7f0e5` warm cream · `--color-text: #1f1a14` warm near-black · `--color-accent: #c2410c` terracotta · `--color-border: #e5d9c5`.

---

## 4. Palette

Per `gastronomy.md` §6 default Heritage / family restaurant palette as the starting point. Surface 1 alternative for owner pick.

### Primary recommendation (lock-in candidate)

| Token | Value | Rationale |
|---|---|---|
| `--color-bg` | `#f7f0e5` (warm cream) | Gastronomy "cream beats white" rule per `DESIGN-BEST-PRACTICES.md` §5 |
| `--color-text` | `#1f1a14` (warm near-black) | Reads as cocoa, not coal; carries warmth |
| `--color-accent` | `#c2410c` (terracotta) | Reserved for primary CTA (RESERVIEREN/RESERVE-equivalent, here likely BESUCHEN/VISIT) and hover states — never decoration |
| `--color-border` | `#e5d9c5` (warm cream border) | Subtle separations |
| `--color-pistachio` | `#84a07c` (muted pistachio green) | **Optional** secondary accent — used only on the menu page as a label color for "vegan" / "milchfrei" tags. Verifies WCAG against `--color-bg`. |

**Why pistachio as the secondary:** the canonical Italian gelateria palette is cream + terracotta-rosso + pistachio-green. The owner's framing mentioned the canonical gelateria — pistachio is the third color in that triad. We deploy it ONLY as a category-tag accent on the menu page, not on the hero, not in the chrome. This keeps the agency rule "accent color = action" intact (terracotta is action), while permitting one specifically-scoped second accent (pistachio for vegan/dietary-tag UI).

### Alternative for owner pick

**Alt: cream + cocoa brown + dusty rose** (per `gastronomy.md` §6 "Bakery / café / patisserie" sub-archetype):

| Token | Value |
|---|---|
| `--color-bg` | `#fbf6f0` |
| `--color-text` | `#2c1f17` (cocoa) |
| `--color-accent` | `#d4a59a` (dusty rose) |
| `--color-border` | `#e8ddd2` |

Why surface this as an alternative: an eis-café could equally land in the "Bakery / patisserie / morning trade" world. Dusty rose is more boutique, less heritage-Italian. If the owner wants the demo to land softer / more contemporary / less "nonna's kitchen," this is the pivot.

**Recommendation: primary (cream + terracotta + pistachio).** Closer to the established gelateria canonical, stronger heritage signal matching the three-generation backstory.

---

## 5. Page structure (Information Architecture)

Per `gastronomy.md` §2 Archetype A IA, stripped-down per §10 single-location middle case.

**Recommended:** 4 pages — Home · Menü · Besuchen · Kontakt. Bilingual (DE primary, EN secondary), so 8 actual route files.

| Page | DE route | EN route | Sections (top → bottom) |
|---|---|---|---|
| Home | `/` | `/en/` | DEMO ribbon · Header w/ HoursInNav + HalfPillCTA · Hero (headline-only) · Story (founder portrait + 2 paragraphs about Bellini family) · Highlight (3 signature gelato flavors as a triptych, with photos) · StatCallouts (since 1987 · 3 Generationen · 24 Sorten) · Visit (location + hours + Sommer-Saison badge) · Footer |
| Menü | `/menue` | `/en/menu` | DEMO ribbon · Header · `LabelCountHeader` (`MENÜ (24)`) · 24 flavors in a grid (8 classic · 8 specialità · 8 vegan/sorbetto with pistachio tag) · `LabelCountHeader` (`SPEZIALITÄTEN (4)`) · 4 specialty items (granita, affogato, brioche con gelato, cassata) · Footer |
| Besuchen | `/besuchen` | `/en/visit` | DEMO ribbon · Header · Hero photo (interior) · Address + transit (U2 Eberswalder Straße — 4 min) · Hours (Sommer-Saison · Winter-Saison) · Static map image + "in Google Maps öffnen" link per `DESIGN-BEST-PRACTICES.md` map embed rule · Footer |
| Kontakt | `/kontakt` | `/en/contact` | DEMO ribbon · Header · 1-paragraph intro · Phone (`tel:+49...`) · WhatsApp link · Email · IG link · No form (the demo doesn't need to test `FORMS.md`; mention in `BRIEF.md` §Open questions whether to add a basic contact form to test the form pipeline against the runbook) · Footer |

**Why 4 pages (not 1, not 6):**
- 1 page (single-page scroll) under-uses the bilingual routing setup. A demo should show off the nav-between-pages + locale-switching flow.
- 6+ pages (adding News / Story-as-separate / Gallery as separate) is the stripped-down Archetype A's anti-pattern — the gastronomy template explicitly warns against editorial sprawl for single-location clients.
- 4 pages is the canonical "Hero + Menü + Visit + Contact" rhythm — covers every IA question a Berlin walk-in customer has.

**Per-locale legal-page additions:** `/impressum` and `/datenschutz` — both DE-only, no EN translation needed (legal pages are jurisdiction-bound, not market-bound). Reachable from the footer of every page in both locales. NOT noindex on the page (per `LEGAL.md` rule that legal pages must be crawlable) but the global site `Disallow: /` in `robots.txt` covers them — the demo is fully blocked from indexing regardless.

---

## 6. Component picks — from `docs/design/components/_impl/`

Per the runbook §3.5 matrix. Verify each against its spec sheet §1 per-vertical applicability table.

| Component | Picked? | Where used | Rationale |
|---|---|---|---|
| **HalfPillCTA** | ✅ | Header right cell · Home hero CTA (mobile) | Per `half-pill-cta.md` §1 — gastronomy CTA is `RESERVIEREN`/`RESERVE`. For an eis-café no-reservation walk-in business, we adapt: `BESUCHEN`/`VISIT` linking to the `/besuchen` page. The half-pill pattern is the strongest hospitality CTA pattern; keeping it even with a softer action label preserves the visual vocabulary. |
| **HoursInNav** | ✅ | Header (desktop only) | Per `hours-in-nav.md` §1 — gastronomy "by service area." Adapted: `EIS-BAR / 12 – 22 UHR` + `KÜCHE / 12 – 18 UHR`. For a Sommer-Saison demo, the hours-in-nav also serves as the seasonal-signal moment (the hours implicitly say "we're open daily — peak season"). |
| **LabelCountHeader** | ✅ | Menü page (×2 — `MENÜ (24)` + `SPEZIALITÄTEN (4)`) | Per `label-count-header.md` §1 — gastronomy `MENÜ (N)` is the example use case in the spec sheet. Maximum 2 per page is the spec rule; we use 2 on Menü, 0 elsewhere. |
| **StatCallouts** | ✅ | Home Story section | "seit 1987 · 3 Generationen · 24 Sorten." Per `templates/gastronomy.md` §7 — numbers when honest. The 1987 date is the heritage anchor. |
| **Section (alternating-bg)** | ✅ | Home, Menü, Besuchen | Universal. Alternates `--color-bg` and a 5%-darker variant per the canonical pattern. |
| **MarqueeCTA** | ❌ skip | — | Per `templates/gastronomy.md` §8 anti-patterns — "All-photo carousel as the hero." Marquee CTA isn't a hero carousel but it leans into the same visual register. For the Heritage archetype, restraint > marquee. |
| **EyebrowDisplayHero** | ❌ skip | — | ⚠️ SEO restriction per `SEO.md` §15 + spec sheet §1: portfolio-only for local-biz. An eis-café IS a local business — this pattern is forbidden. h1 is the visually-primary headline. |
| **SplitText** | ❌ skip | — | Per spec sheet §1 — gastronomy applicability is optional. For Heritage archetype, calm-hospitality motion register is the goal; per-character text reveal reads as tech-marketing. |

**Universal primitives confirmed in scaffold:** Button · CookieBanner · Placeholder · Header · Footer · DEMO-ribbon (added per runbook §1.8).

---

## 7. Copy voice samples — bilingual DE + EN

For owner review BEFORE phase 5 scaffolding. The Sie register is locked (heritage / three-generation / older-neighborhood audience). 3 untranslated Italian brand cues identified: `gelato` (used instead of "Eis" in heritage-product moments), `la famiglia Bellini`, `Buongiorno · Buonasera`.

### Hero (DE primary)
