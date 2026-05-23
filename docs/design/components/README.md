# Component spec sheets

**Created:** 2026-05-19 from the agency's 24-site UI/UX reference study (see `docs/audit/ui-ux-reference-study.md`).
**Expanded:** 2026-05-22 (FullBleedHero, MenuCard) · 2026-05-23 (7 demo-promotion candidates + 3 infrastructure + 3 universal + 9 vertical-multiplier components → 22 new components total, library now at **32 canonical components + 6 universal primitives**).

## What's in here

This folder is the agency's **canonical reference for reusable UI components**. Each spec sheet is the *source of truth* for a single component:

- **Purpose** + when to use, with per-vertical surface mapping
- **HTML / a11y structure** with explicit `ACCESSIBILITY.md` cross-reference
- **CSS spec** (computed values from source studies)
- **Required CSS custom properties** + minimal standalone CSS snippet (makes the component scaffold-portable)
- **Performance constraints** (mandatory for media-heavy components)
- **Reference sites** with study §N anchors
- **Bidirectional UI_REVIEW.md cross-link**
- **Implementation pointer** to the working Astro / React file in `docs/design/components/_impl/`

---

## Component library — organized by tier

### Tier 0 — Universal primitives (every scaffold ships these)

Used everywhere. Specs are minimal; impl is the source of truth.

| Component | Astro impl | Purpose |
|---|---|---|
| Button | `_impl/Button.astro` + `.tsx` | Primary/secondary/ghost variants |
| CookieBanner | `_impl/CookieBanner.astro` + `.tsx` | Consent banner (locale-aware as of 2026-05-23) |
| ConsentBootstrap | `_impl/ConsentBootstrap.tsx` | Tier-3 consent state initializer |
| Placeholder | `_impl/Placeholder.astro` + `.tsx` | "DRAFT — image to be supplied" stand-in |
| ShareButton | `_impl/ShareButton.astro` + `.tsx` | WhatsApp/Facebook/X/Copy share row (per `SOCIAL-SHARING.md`) |
| Section | `_impl/Section.astro` | Alternating-bg wrapper (spec: `alternating-section-bg.md`) |

### Tier 1 — Infrastructure (foundation for many higher-tier components)

| Component | Spec | Astro impl | Primary purpose |
|---|---|---|---|
| Dialog | `dialog.md` | `_impl/Dialog.astro` | Native `<dialog>` modal primitive. Parent of Lightbox, Video modal, BookingMock confirmation |
| Accordion | `accordion.md` | `_impl/Accordion.astro` | Styled `<details>` group, zero-JS by default. Parent of FAQ |
| ConsentGate | `consent-gate.md` | `_impl/ConsentGate.astro` | DSGVO-compliant iframe wrapper. Parent of MapEmbed (Google variant), VideoFacade, IG embeds |

### Tier 2 — Universal SMB landing-page components (all 12 verticals)

| Component | Spec | Astro impl | Primary purpose |
|---|---|---|---|
| FAQ | `faq.md` | `_impl/FAQ.astro` | Accordion + `FAQPage` JSON-LD generator |
| Testimonial | `testimonial.md` | `_impl/Testimonial.astro` | Named + photographed single-card; +34% conversion lift per research |
| TeamGrid | `team-grid.md` | `_impl/TeamGrid.astro` | Staff portrait grid; #2 trust signal for beauty + health |

### Tier 3 — From the 24-site UI/UX reference study (Phase 3b)

The original 8 components measured live across 24 sites. See `docs/audit/ui-ux-reference-study.md`.

| # | Component | Spec | Astro impl | Primary vertical surface |
|---|---|---|---|---|
| 1 | Half-pill sticky-edge CTA | `half-pill-cta.md` | `_impl/HalfPillCTA.astro` | gastronomy / beauty / health / studio booking |
| 2 | `LABEL (N)` section header | `label-count-header.md` | `_impl/LabelCountHeader.astro` | every vertical with curated catalog |
| 3 | Hours-in-nav | `hours-in-nav.md` | `_impl/HoursInNav.astro` | gastronomy / beauty / health |
| 4 | Marquee-on-hover CTA | `marquee-cta.md` | `_impl/MarqueeCTA.astro` | boutique / artisan / luxury |
| 5 | Eyebrow-h1 + display-paragraph hero | `eyebrow-display-hero.md` | `_impl/EyebrowDisplayHero.astro` | **portfolio / agency-self ONLY** — blocked for SEO clients |
| 6 | Big-number stat callouts | `stat-callouts.md` | `_impl/StatCallouts.astro` | trades / professional-services / agency-self |
| 7 | Alternating-section-background | `alternating-section-bg.md` | `_impl/Section.astro` | any long-form landing |
| 8 | Per-character DOM split (`SplitText`) | `per-character-split.md` | `_impl/SplitText.astro` | solo / artisan portfolio / agency-self |

### Tier 3b — Hero + menu patterns (added 2026-05-22, gastronomy coffee research)

| Component | Spec | Astro impl | Primary use |
|---|---|---|---|
| Full-bleed hero with overlay typography | `full-bleed-hero.md` | `_impl/FullBleedHero.astro` | Photo-bg hero (Bellini, Saltlines) |
| Menu card with photography | `menu-card.md` | `_impl/MenuCard.astro` | Gastronomy ≥6-item categories |

### Tier 4 — Promotion candidates (added 2026-05-23, from gastronomy demo builds)

Originally local to a client demo, promoted to canonical with paired spec sheets.

| Component | Spec | Astro impl | Primary use | Originating client |
|---|---|---|---|---|
| Split hero (half-and-half) | `split-hero.md` | `_impl/SplitHero.astro` | Luxury / fine-dining alternative to full-bleed | Adèle |
| Course list (Roman-numeral) | `course-list.md` | `_impl/CourseList.astro` | Fine-dining tasting menu | Adèle |
| Press / awards row | `press.md` | `_impl/Press.astro` | Critic quotes for luxury / hospitality / professional services | Adèle |
| Newsletter form (with thank-you state) | `newsletter-mock.md` | `_impl/NewsletterMock.astro` | Email signup for content-cadence brands | Saltlines |
| Booking form (with confirmation state) | `booking-mock.md` | `_impl/BookingMock.astro` | Catering / quote / consultation requests (not real bookings — use Resy/Treatwell/Doctolib for that) | Adèle |
| Marquee status ticker | `wave-report-ticker.md` | `_impl/WaveReportTicker.astro` | Live-feel daily status (specialty coffee, weather-dependent) | Saltlines |
| Photo grid (bento collage) | `photo-grid.md` | `_impl/PhotoGrid.astro` | Asymmetric atmosphere shots — alternative to MenuCard | Saltlines |

### Tier 5 — Vertical multipliers (added 2026-05-23, research-driven)

Per the deep web research on common SMB UI patterns. Each component has a clear vertical-multiplier use case.

| Component | Spec | Astro impl | Verticals that need it most |
|---|---|---|---|
| Video facade | `video-facade.md` | `_impl/VideoFacade.astro` | gastronomy reels / beauty process / events / studio (any with video) |
| Map embed (privacy-respecting) | `map-embed.md` | `_impl/MapEmbed.astro` | every brick-and-mortar client |
| Lightbox image gallery | `lightbox.md` | `_impl/Lightbox.astro` | beauty / artisan / home-garden / gastronomy event galleries |
| Before/after slider | `before-after-slider.md` | `_impl/BeforeAfterSlider.astro` | trades / beauty (72% want it) / dental / derm / home-garden |
| Pricing / services table | `pricing-table.md` | `_impl/PricingTable.astro` | beauty / health / trades / studio / education |
| Trust-badge row | `trust-badge-row.md` | `_impl/TrustBadgeRow.astro` | every vertical (Innung/HWK/board cert/brand partner) |
| Service-area display | `service-area.md` | `_impl/ServiceArea.astro` | trades / mobile services / catering |
| Timeline / process steps | `timeline.md` | `_impl/Timeline.astro` | health / professional services / trades / catering |
| Scroll-spy in-page nav | `scroll-spy-nav.md` | `_impl/ScrollSpyNav.astro` | long single-page sites (Type 1 / Type 2 most common) |

---

## Status

All **32 canonical components + 6 universal primitives** have both a spec sheet AND a working implementation as of 2026-05-23.

| Library tier | Spec sheets | Astro impls | Phase |
|---|---|---|---|
| Tier 0 — Universal primitives | (impl-only) | 6 | scaffold-baseline |
| Tier 1 — Infrastructure | 3 | 3 | 2026-05-23 |
| Tier 2 — Universal SMB | 3 | 3 | 2026-05-23 |
| Tier 3 — Reference study (Phase 3b) | 8 | 8 | 2026-05-19 |
| Tier 3b — Hero + menu patterns | 2 | 2 | 2026-05-22 |
| Tier 4 — Promotion from demos | 7 | 7 | 2026-05-23 |
| Tier 5 — Vertical multipliers | 9 | 9 | 2026-05-23 |
| **Total** | **32** | **38** (incl. primitives) | — |

---

## How to use these specs (for client builds)

1. **Pick the component** for the client's vertical from the tiered index above.
2. **Read its spec sheet** — confirm the per-vertical surface fit and the WCAG requirements.
3. **Check the implementation pointer** — the working `.astro` / `.tsx` file in `_impl/` is ready to copy into `clients/[slug]/src/components/`.
4. **Verify required tokens** — the spec's §"Required CSS custom properties" section lists the tokens the component consumes. Confirm the client's `tokens.css` defines them (or add them per `TECH.md` §7).
5. **Adapt visual identity** — components ship with neutral token mapping. Per-vertical token swaps documented inline in each impl's leading comment block.

## Build dependency graph (Tier 1 → higher tiers)

```
ConsentGate ──────► MapEmbed (Google variant)
            └─────► VideoFacade (full DSGVO mode)
            └─────► Instagram / Calendly / OpenTable widget embeds

Dialog      ──────► Lightbox
            └─────► BookingMock confirmation (real impl)
            └─────► Any future Modal use case

Accordion   ──────► FAQ
```

When deciding what to build first for a new client, build Tier 1 dependencies first if any Tier 5 component needs them.

## Bidirectional use in `UI_REVIEW.md` audits

When auditing a client's existing site, reference these specs by file path. Example: *"Issue #3 — sticky CTA missing: adopt the half-pill sticky-edge CTA per `docs/design/components/half-pill-cta.md`."* Audit findings then point developers directly to the canonical implementation.

## What we explicitly do NOT have (per research 2026-05-23)

Documented anti-patterns or "skip these" decisions:

- **Generic carousel / slider** — per `DESIGN-BEST-PRACTICES.md §912` anti-pattern + research-confirmed <1% interaction past slide 1. The BeforeAfterSlider is a different beast with clear purpose.
- **Toasts / notifications** — landing-page stacks don't need transient UI; success states go in Dialog or inline form states.
- **Skeleton loaders** — Astro/Next SSG ship HTML on first paint. Only relevant in Tier-3 dashboards (Type 5, quote-per-project).
- **Breadcrumbs (visual component)** — most builds are flat 3-5 pages. Emit `BreadcrumbList` JSON-LD schema without a visual component.
- **Generic tabs** — `LABEL (N)` + alt-bg rhythm covers most use cases; tabs hide content from SEO scan.
- **SaaS pricing tiers (3-card Basic/Pro/Enterprise)** — SMB clients rarely need it. PricingTable handles services-with-prices instead.

## Buy don't build (per research 2026-05-23)

- **Map tiles** — MapTiler or OSM under ConsentGate; don't host tile servers
- **Owner reel hosting** — YouTube unlisted + VideoFacade; Vimeo Pro only if client already pays
- **Booking backend (Type 3)** — Resy / OpenTable (gastronomy), Treatwell / Booksy (beauty), Doctolib (DE health) — embed inside ConsentGate
- **Lightbox JS lib alternative** — if pressed for time, `Parvus.js` or `Pencere` both render inside native `<dialog>` and ship WCAG 2.2 AA in ~3 KB
