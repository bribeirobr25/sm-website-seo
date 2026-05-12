# UI/UX Review — Porto dos Ribeiros, Demo v1

**Reviewer:** Claude (UI/UX audit)
**Date:** 2026-05-12
**Build under review:** `clients/porto-dos-ribeiros/` — home page only, PT (`/`) + EN (`/en/`)
**Viewports inspected:** 1280×900, 768×1024, 375×812
**Methodology:** Playwright MCP browser, full-page screenshots at each viewport, computed-style inspection, accessibility tree snapshot, console + network capture.

This review is written against `docs/design/DESIGN-BEST-PRACTICES.md`, `docs/design/SEO.md`, `docs/design/CHECKLIST.md` and the per-client `design.md` / `BRIEF.md`. It is not a checklist run (CHECKLIST.md is for pre-delivery); it is a design critique meant to guide the second pass.

---

## 0. TL;DR — fix order

| # | Issue | Severity | Effort |
|---|---|---|---|
| 1 | Map iframe renders **completely blank** — biggest visual hole on the page | 🔴 Critical | S |
| 2 | "Feijoada" menu card displays a **Jardineira photo** — fabricated content (we have no feijoada photo) | 🔴 Critical | XS |
| 3 | Mobile (<640px) has **no nav at all** — Menu/Visit links hidden, no hamburger | 🔴 Critical | S |
| 4 | Hero photo is a generic dish shot — **doesn't show the restaurant, owner, terrace, or any sense of place** | 🟠 High | M |
| 5 | Eyebrow text uses **the same color as the primary CTA** — the accent loses its job | 🟠 High | XS |
| 6 | Menu section is a **uniform 6-card grid with mismatched photo styles** (one has a Coca-Cola can in frame) | 🟠 High | M |
| 7 | Reviews are **three identical 5-star cards** — the SaaS testimonial trope, not how Google reviews look | 🟠 High | M |
| 8 | At 768px the hero headline **wraps to 6 lines** — breakpoint splits the column too narrow | 🟠 High | S |
| 9 | Every section uses the **same eyebrow + h2 + content rhythm** — reads as a page-builder, not a human-designed page | 🟡 Medium | M |
| 10 | **No "no afternoon break" emphasis** in the hero — this is the actual differentiator vs other Porto restaurants | 🟡 Medium | XS |
| 11 | Subtle **green orb behind the hero photo** is a designer-tic that adds no narrative value | 🟡 Medium | XS |
| 12 | **No sticky WhatsApp bubble** on mobile — standard restaurant conversion pattern is missing | 🟡 Medium | S |
| 13 | Reviews use unicode `★★★★★`, **no Google logo, no relative date, no avatar/verified marker** | 🟡 Medium | S |
| 14 | Footer NIF/CAE placeholders render as `[a confirmar]` — reads like a TODO, not a styled hold | 🟢 Low | XS |
| 15 | Images shipped at full PNG/JPG size (**30 MB total**) — fine for demo, blocks PageSpeed ≥90 for production | 🟢 Low | M |

Effort key: XS = ≤15 min · S = ≤1 h · M = ≤half day

---

## 1. Where it looks "made by AI"

> Per `DESIGN-BEST-PRACTICES.md` §15 (Anti-slop) and the per-client `design.md` ("What it must NOT feel like: ... generic restaurant template"), this is the most important section.

The current page has **seven AI-template tells**, ranked from most to least obvious:

### 1.1 Identical section rhythm
Every section is `eyebrow (uppercase, tracked) → h2 → body → CTA`. Hero, Hours, Menu, Reviews, Visit — same beat, four times in a row. Real restaurant sites mix in: ribbon strips, one-line breakers, irregular column splits, photo bands. **The repetition itself is the tell.**

### 1.2 The menu-as-card-grid pattern
Six dishes, identical aspect ratio, identical typographic treatment, equal grid. This is how SaaS pricing tiers are rendered, not how restaurants speak. Look at Lilia (NYC), Tartine (SF), Boia De (Miami): menu sections are **typographic lists** with prices, not a photo grid. Photo grids belong on a `/menu` sub-page or an Instagram-flavoured strip — not as the main "what we serve" content.

### 1.3 Three identical 5-star review cards
- Same height
- Same star count
- Same border + shadow
- No date
- No avatar
- No "Verified" marker
- No Google logo
- ASCII stars (`★★★★★`) rendered in the font, not as SVG

Real Google reviews vary wildly in length, mention specific dishes, have dates. The current rendering looks fabricated even though the quotes are real.

### 1.4 Subtle gradient orb behind the hero photo
`bg-[var(--color-secondary)]/10` on a `-z-10 -inset-3 rounded-3xl` div. It's a "designer-move" — a soft tinted shadow with no narrative purpose. Either replace with something with intent (an offset frame, a photo-corner ribbon, a torn-paper effect) or remove. Right now it whispers "Figma template."

### 1.5 Duplicated CTA chips
"Pedir no WhatsApp" + "Como chegar" appears in the Hero **and again** in the Visit section. Two CTA chips that look identical, in the same brand colors, ~600 vertical pixels apart. Pattern reads as wireframe filling, not as designed.

### 1.6 No place identity beyond the address
Nothing says "Porto" except the address text. No azulejo (tile) motif, no Cedofeita neighborhood callout, no hand-drawn map, no Constituição street-sign-style detail, no Portuguese typographic flourish on the EN side. The page could be for a Brazilian restaurant in any city.

### 1.7 Card photo style is inconsistent and unstaged
The 6 menu photos come from the restaurant's own gallery — but they were clearly taken on different days with phones:
- **Coxinha** card: a **Coca-Cola can dominates the right side of the frame**.
- **Empadas**: shot from a low angle through a serving display.
- **Strogonoff**: top-down shot, plate edge visible.
- **Brigadeiros**: clean studio-ish shot.

Mixing these in a uniform grid makes the inconsistency loud. Either:
- Crop each tight to the food, lose the context, OR
- Embrace the inconsistency by varying the card sizes/aspect ratios

…not both: phone-snap photos in a Pinterest-perfect grid.

---

## 2. Section-by-section critique

### 2.1 Hero (`src/components/sections/Hero.astro`)

**Working well:**
- Headline is strong copy in both languages — the "café da manhã ao jantar" / "morning coffee to dinner" framing communicates the continuous-kitchen idea without saying it.
- Phone number is `tel:` clickable, with tabular-nums and a separator dot to the rating line — clean.
- WhatsApp icon SVG inline, no font-icon dependency. Good.

**Not working:**

a) **Eyebrow color conflict.** Computed: `color: rgb(122, 43, 10)` = `--color-accent-deep` — the same hue family as the primary CTA. The eyebrow should be a quiet label, not compete for attention. Suggested patch:

```diff
- <p class="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">
+ <p class="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
```

b) **Photo subject is wrong for the hero.** The picanha shot is a real photo of the food, but for a hero we need *place* — terrace, dining room, doorway, owner behind the counter, or the street facade. Food close-ups belong in the menu strip. Right now the hero says "Brazilian food" but not "Porto" or "Porto dos Ribeiros specifically."

c) **The green orb behind the photo adds nothing.** Replace with one of:
- An offset cream-colored rectangle, slightly rotated (-2deg), behind the photo — magazine-style.
- A subtle Portuguese-tile pattern as a corner accent (1/4 of one corner).
- Nothing at all — the photo can stand alone.

d) **The hero doesn't lead with the "no afternoon break" hook.** This is the actual differentiator vs Portuguese restaurants that close 15:00–19:00. The sub-headline mentions it but it deserves either: a small ribbon badge ("Aberto sem pausa") or a one-liner sticker above the headline. Right now the message is "Brazilian food in Porto" — true but undifferentiated.

e) **At 768px the headline wraps to 6 lines.** The `md:grid-cols-[1.05fr_0.95fr]` triggers at 768 and gives the text column ~340px which can't hold "Comida brasileira no Porto, do café da manhã ao jantar" without a 6-line wrap. Either:

```diff
- <div class="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
+ <div class="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
```

…so two-column kicks in at 1024+ instead of 768. At 768 it stacks: photo above text, more breathing room.

### 2.2 Hours (`src/components/sections/Hours.astro`)

**Working well:**
- Clean two-row layout with tabular-nums prices/times.
- Both ranges visible at a glance.
- "Não fechamos à tarde" / "No afternoon break" is the supporting line.

**Not working:**

a) **The differentiator is buried.** Right now "Não fechamos à tarde" reads as a parenthetical. It should *be* the heading. Suggested restructure:

```
Eyebrow: HORÁRIO
H2: Não fechamos à tarde
Sub:    Cozinha aberta de domingo a sábado.
List:   Dom–Qui   07:00 – 22:00
        Sex–Sáb   07:00 – 24:00
```

The h2 is the surprise statement. The list is the proof. Order matters.

b) **24:00 displayed as 00:00 in the table** — currently the template substitutes `00:00` for `24:00` ("Sexta e sábado 07:00 – 00:00"). That reads as "open from 7 in the morning to midnight" but at first glance scans as "closed at midnight on Friday morning." Either render `00:00` with the next-day implied label, or keep `24:00` (more honest, and ISO-allowed).

### 2.3 Menu Preview (`src/components/sections/MenuPreview.astro`)

This section needs the deepest re-think. See §1.2 above. Two paths forward:

**Option A — Editorial menu list (recommended).** Drop the grid. Render the 6 dishes as a typographic list:

```
Pratos que voltam todo dia

Feijoada                                  prato cheio
A clássica feijoada brasileira, presença diária.
─────────────────────────────────────────────────────
Strogonoff de carne                       prato cheio
Cremoso, com arroz branco e batata palha.
─────────────────────────────────────────────────────
…
```

One photo accompanies the entire list (a single editorial shot — maybe the feijoada bowl in context), not one per dish. Page reads as a curated menu, not a catalog.

**Option B — Mixed grid with intent.** Keep photos but break the uniform-aspect rule. One "hero dish" tile at 2× size (feijoada, signature), three smaller tiles, one typographic tile that says "+ 12 more on the menu →". The asymmetry reads as designed, not auto-generated.

**Critical fix regardless of path:** drop the **Feijoada** card or its photo. We do not own a feijoada photo. The current code maps `feijoada → /images/Jardineira.png` — that's the wrong dish. Per the agency rules ("never invent client content"), this must be fixed before the demo is shown. Either:

- Remove the Feijoada item from the home preview entirely (it can return on the full menu page).
- Or rename to "Jardineira" (which we do have a photo of).
- Or leave the photo slot empty / replaced with a typographic plate.

### 2.4 Reviews (`src/components/sections/Reviews.astro`)

**Working well:**
- Three real quotes from GBP, attributions.
- Disclaimer line clarifies the source.

**Not working:**

a) **Three identical cards look fabricated.** See §1.3. Replace with:

- **One feature quote** in larger type (`text-xl`, italic Fraunces). The Max D. quote is the strongest.
- A small "Two more like this →" link below that opens an expanded section or a /reviews page.
- A **Google logo** + "4,7 ★ from 287 reviews on Google" with a real link to the GBP page.

b) **Star strip is rendered with text characters.** The font isn't always loaded; on a fallback you'd see literal `★` glyphs which can look broken. Use an SVG star icon, inline, 5 instances. Or 1 SVG + count text.

c) **No relative dates.** Real review widgets say "há 2 meses" / "2 months ago." Adding dates to the three quotes (which BRIEF.md has) would lift this section meaningfully.

### 2.5 Visit (`src/components/sections/Visit.astro`)

**Critical:** the Google Maps iframe **renders blank**. Confirmed via DOM inspection — the iframe exists at position 17,5564 with width 341×320 but `contentDocument` is cross-origin-empty. The free `?q=…&output=embed` URL works on some origins and is blocked on others. This is intermittent in production and is unreliable enough that you should not ship it.

**Fix options:**

1. **Static Google Maps image** — one HTTP call, no iframe, always renders. URL pattern: `https://maps.googleapis.com/maps/api/staticmap?center=41.166,-8.628&zoom=16&size=600x400&markers=color:red%7C41.166,-8.628&key=…`. Requires an API key but the free tier covers small demos.
2. **Static OpenStreetMap image** — no key, no quota, slightly less polish: `https://staticmap.openstreetmap.de/staticmap.php?center=41.166,-8.628&zoom=16&size=600x400&markers=41.166,-8.628,red-pushpin`.
3. **Mapbox static** — best polish, free tier 50k req/month, requires a token.
4. **Stylized location card without a map** — three lines (address, district, "5 min de Carolina Michaelis metro"), a directions CTA. No image. Honest.

My recommendation: option (4) for the demo (works always), option (1) for production once the client signs off and we have an API key in Vercel env. Both are better than the current broken iframe.

**Also:**

a) **CTAs duplicated from Hero.** "Pedir no WhatsApp" + "Como chegar" appear here exactly as in the Hero. By the third time the user sees these buttons (Hero → here → mobile sticky if added), they should look different. Suggest: in Visit, drop the "Como chegar" button (the map IS how to get there) and keep only WhatsApp. Or convert both to text links: "📞 +351 963 349 411 · 💬 WhatsApp · 📍 Direções".

b) **"Entrega em casa" boxed callout works.** Keep this — it's the one section break that doesn't repeat the eyebrow rhythm.

### 2.6 Header (`src/components/layout/Header.astro`)

**Critical at <640px:** the nav UL is `hidden sm:flex`, meaning on mobile (<640px) the header shows **logo + language switcher only**. There is no way to reach `/menu` or `/visit` from the header on a phone. Phones are >80% of restaurant site traffic.

**Fix:** add a mobile menu. Either:
- Hamburger icon → full-screen overlay (heavier).
- Inline horizontal scroll strip of nav items below the logo (lighter, restaurant-appropriate).

Inline strip is simpler and aligns with the editorial direction. Sketch:

```html
<header>
  <div class="top-row">  <!-- logo + lang -->
    <a href="/">Porto dos Ribeiros</a>
    <LangSwitcher />
  </div>
  <nav class="bottom-row overflow-x-auto sm:hidden">
    <a href="/">Início</a>
    <a href="/menu">Cardápio</a>
    <a href="/visitar">Visitar</a>
  </nav>
</header>
```

### 2.7 Footer (`src/components/layout/Footer.astro`)

**Working well:**
- Three-column structure with legal block, contact, links.
- `<address>` element used correctly.
- WhatsApp link uses `https://wa.me/...`.

**Not working:**

a) **NIF/CAE render as `[a confirmar]` plain text.** Reads as a TODO from a draft document, which is exactly what it is — but it shouldn't *look* like one. Two options:
- Hide entirely until confirmed (acceptable for demo with noindex).
- Style as muted, italic, with a leading "→" or "•" to signal it's intentional placeholder.

```diff
- NIF: [a confirmar]
- CAE: [a confirmar]
+ <em class="opacity-60">NIF e CAE — a confirmar com o restaurante</em>
```

b) **"Site por sm-website-seo" line** is in the footer. That's fine in itself but it currently has the same weight as the other footer text. Should be smaller, lighter, in the bottom corner alone. Currently it sits at the bottom of the third column, making the column visually heavier than the other two.

### 2.8 Language Switcher (`src/components/layout/LangSwitcher.astro`)

**Working well:**
- Native language names (Português, English) — per I18N.md rules.
- `aria-current="true"` on active locale.
- `hreflang` and `lang` attributes correct.

**Not working:**

a) On mobile the "Português · English" toggle takes ~140px of horizontal space, which on a 375px viewport (minus logo 145px + padding 32px) leaves nothing. Consider:

- "PT · EN" compact form on small viewports.
- Or move to a small dropdown trigger ("PT ▾") that expands.

---

## 3. Typography audit

| Element | Computed | Spec | Verdict |
|---|---|---|---|
| Body font-family | `Manrope, system-ui, ...` | Manrope | ✓ |
| H1 font-family | `Fraunces, Georgia, ...` | Fraunces | ✓ |
| H1 size (mobile) | 36 px | hero 4xl→6xl responsive | ✓ |
| H1 weight | 600 | 600 | ✓ |
| H1 letter-spacing | -0.54 px (-0.015em) | -0.015em | ✓ |
| H2 size | 30 px | 3xl→4xl | ✓ |
| Body line-height | (inherited 1.6) | 1.6 | ✓ |
| Eyebrow letter-spacing | 2.16 px (0.18em) | tracked | ✓ |
| Eyebrow color | `#7A2B0A` (deep terracotta) | **muted brown** | ✗ wrong token |
| Primary CTA height | 46 px | ≥44 px tap target | ✓ |
| Tabular-nums applied? | yes on hours/phone | required | ✓ |

**Verdict:** Typography hierarchy is solid. Fonts load (`document.fonts.check('1em Fraunces') === true`). The eyebrow color is the only typography-token mismatch and §2.1 addresses it.

**One thing missing from the design.md spec:** no typographic flourish anywhere. The doc said "at least one typographic craft detail (tracked uppercase label, pull quote, etc.)." We have tracked uppercase labels but no pull quote, no drop cap, no oversized number, no editorial flair. Adding one — e.g. a Fraunces 700 italic pull quote in the Reviews section — would help the page feel composed by a human.

---

## 4. Color audit

Tokens declared in `tokens.css`:

| Token | Value | Where used | Verdict |
|---|---|---|---|
| `--color-bg` | `#F7F0E5` cream | body bg | ✓ warm off-white |
| `--color-text` | `#1F1A14` | body text | ✓ warm near-black, not `#000` |
| `--color-text-muted` | `#6B5E4E` | descriptions, attribution | ✓ |
| `--color-accent` | `#C2410C` terracotta | primary CTA bg, focus ring, ::selection | ✓ |
| `--color-accent-deep` | `#7A2B0A` | hover, eyebrow | ✗ also being used as eyebrow color — competes with CTA |
| `--color-secondary` | `#3F6B3A` herb green | hero orb only | 🟡 used once and decoratively — token has no real job yet |
| `--color-border` | `#E5D9C5` | dividers | ✓ |

**Contrast verified:**
- Text `#1F1A14` on bg `#F7F0E5` ≈ 14.6:1 ✓ (body)
- White on `#C2410C` ≈ 4.6:1 ✓ (CTA)
- Muted `#6B5E4E` on `#F7F0E5` ≈ 4.7:1 ✓ (descriptions)

**Single fix:** retire the use of `--color-accent-deep` as the eyebrow color. Reserve it for hover/active states of the CTA only.

**Open question:** the herb-green `--color-secondary` is currently used only as the orb behind the hero photo. If we remove that orb (recommended), `--color-secondary` has no purpose. Either:
- Drop the token (one less to maintain).
- Find it a real job: e.g., the "Aberto sem pausa" ribbon, the "Vegetarian options" badge, a dish-tag for vegetarian items.

---

## 5. Spacing & layout

- Max width `max-w-5xl` (64rem ≈ 1024 px) consistent across sections. ✓
- Section vertical padding 64–80 px (`py-16 sm:py-20`) consistent. ✓
- Hero pad-top `pt-10 sm:pt-16` — feels right.
- Footer margin-top `mt-24` — generous, good.
- Card grids `gap-6` — fine.

**One observation:** every section has the same vertical padding. Cinematic editorial pages vary section padding — a hero with generous breathing room, a tight tabular hours block, then breathing room again. Consider:

- Hero: `py-24`
- Hours: `py-12` (compact, table-like)
- Menu: `py-24`
- Reviews: `py-16`
- Visit: `py-20`

The varying rhythm itself reduces "page builder" feel.

---

## 6. Motion & micro-interactions

| Check | Status |
|---|---|
| Buttons have `active:scale-95` | ✓ |
| `transition-all duration-150` on CTAs | ✓ |
| `prefers-reduced-motion` respected (CSS guard) | ✓ |
| Image `group-hover:scale-[1.03]` on menu cards | ✓ |
| `::selection` styled with accent | ✓ |
| `:focus-visible` styled with accent ring | ✓ |
| No parallax / scroll-jacking / autoplay | ✓ |

**No issues here.** Motion is restrained and per-spec. If anything, the page is *too* still — one purposeful animation (e.g., a slow fade-in on the hero photo) would add quality. Not necessary, optional.

---

## 7. Accessibility

| Check | Status | Note |
|---|---|---|
| One `<h1>` per page | ✓ | h1Count = 1 |
| Heading hierarchy h1 → h2 → h3 | ✓ | 1 h1, 4 h2, 7 h3, no skips |
| `<html lang>` set correctly | ✓ | `pt` and `en` |
| Skip link present and styled when focused | ✓ | "Pular para o conteúdo" / "Skip to content" |
| All images have `alt` | ⚠ | All present but the "Feijoada" alt describes a dish we don't have a photo of (see §1.7) |
| Decorative orb has no alt / is `div` | ✓ |
| `<address>` semantic element used | ✓ |
| `aria-label` on icon-only elements | ✓ | WhatsApp SVG has `aria-hidden="true"` and parent has `aria-label` |
| Tap targets ≥ 44 × 44 px | ✓ | Primary CTA 196 × 46 |
| Focus rings ≠ default browser outline | ✓ | Accent 2px |
| Color contrast WCAG AA (body) | ✓ | 14.6:1 |
| Star strip has accessible label | ✓ | `aria-label="5 stars"` |
| Language switcher reachable via keyboard | ✓ |

**Accessibility-blocking issues:** none.
**Accessibility-improving suggestions:**
- The Map iframe has `title="Porto dos Ribeiros on Google Maps"` — good — but since it currently renders blank, screen readers will announce "Porto dos Ribeiros on Google Maps" and find no content inside. Replace iframe per §2.5.
- Star strip `aria-label="5 stars"` is fine but for *all three* identical "5 stars" labels in a row, screen readers will hear "5 stars … 5 stars … 5 stars." Consider a single rating summary at the top of the section with `role="region" aria-label="Customer reviews"` and per-quote `aria-labels` that include the author.

---

## 8. Broken links and warnings

Confirmed via DOM walk on `/en/`:

- `/en/menu` → 404 (linked from Header, MenuPreview "See the full menu")
- `/en/visit` → 404 (linked from Header)
- `/en/privacy-policy` → 404 (linked from Footer)

PT equivalents (`/menu`, `/visitar`, `/politica-de-privacidade`) also 404. These were intentionally left for the next pass, but **a user reviewing this demo should not be able to click into a 404**. Two quick options before showing the page:

1. **Disable the links** at the header level — render the labels but as `<span>` not `<a>`, with a `cursor-not-allowed` style.
2. **Build stub pages** that say "Em breve" / "Coming soon" with the existing footer.

Option (2) is better for the cold-call moment (the owner shouldn't see a 404). Option (1) is faster.

**Console errors at load:** 2 — both 403s from the dev-server hostname allowlist (now fixed in `astro.config.mjs`). Will not occur in production.

---

## 9. Performance

| Metric | Current | Target | Verdict |
|---|---|---|---|
| Total image weight | ~30 MB | <1 MB (PageSpeed ≥90) | 🔴 Production-blocking |
| Hero image | 2.2 MB PNG | <250 KB WebP | 🔴 |
| Largest image | 4.1 MB (brigadeiros_varios.jpg) | <250 KB | 🔴 |
| Font loading | Google Fonts `display=swap` | swap | ✓ |
| Display font preload | `<link rel="preload">` for Fraunces | yes | ✓ |
| Render-blocking JS | none | none | ✓ |
| Generated HTML weight | 21 KB | <50 KB | ✓ |

**Fix path for production:**

1. Move `public/images/` contents → `src/assets/`.
2. Replace `<img src="/images/foo.png">` with Astro's `<Image>` component, which auto-emits WebP + AVIF, generates responsive `srcset`, and lazy-loads non-eager images.
3. Set `widths=[480, 768, 1280]` per image, `format="webp"`, `quality={80}`.
4. Expected outcome: <1 MB total weight, PageSpeed ≥90 achievable.

This is **not a demo-phase fix** — the demo runs noindex on `*.vercel.app` and won't be Lighthouse-scored. But it must be done before production.

---

## 10. SEO & schema

| Check | Status |
|---|---|
| One `<title>` per locale, includes city + business name | ✓ |
| Meta description present, includes city | ✓ |
| `<link rel="canonical">` per page | ✓ |
| hreflang symmetric (pt, en, x-default → pt) | ✓ |
| `og:locale` matches (`pt_BR`, `en_US`) | ✓ |
| `Restaurant` schema with all required fields | ✓ |
| `openingHoursSpecification` matches site | ✓ |
| `noindex, nofollow` on every page (demo phase) | ✓ |
| `aggregateRating` not rendered (no client confirmation yet) | ✓ correct per BRIEF.md |
| Sitemap generated | ✓ (will need exclusion for noindex pages, but fine in demo) |

**Concern:** the `geo.latitude / geo.longitude` in schema is `41.166, -8.628` — a guess, not verified against the actual GMaps pin. Before production, run the coordinates through `https://www.google.com/maps?q=R.+da+Constituição+982,+4200-196+Porto`, copy the URL coords, update `SITE.geo` in `src/lib/site.ts`. Schema.org `Restaurant` rich results depend on accurate geo.

---

## 11. Mobile review (375 px)

**The mobile experience is the most-likely-to-be-used and the weakest:**

1. **No header nav at all** (§2.6). Users can't navigate without scrolling.
2. **Hero photo takes ~60% of first viewport** — too big at 4:5 ratio. Consider 3:4 or `aspect-square`.
3. **Phone + 4.7 + 287 reviews wraps awkwardly** on the line under the CTAs.
4. **Menu section: 6 cards stacked vertically** = 6 × ~280 px = ~1700 px of vertical scroll just for menu. Suggest 2-column on mobile (already 3 on desktop, 2 on sm, 1 on xs), which would halve the scroll.
5. **Reviews stack 1-col** — fine, but the cards are still uniform-height which wastes space.
6. **Visit map is empty** — same as desktop, but on mobile it occupies less viewport which makes it less embarrassing. Still must fix.
7. **No sticky WhatsApp bubble** — common pattern (`fixed bottom-4 right-4 rounded-full bg-[green] p-3 shadow-lg`). For a delivery-driven restaurant, this is the single highest-conversion element you can add.

---

## 12. Concrete patch list (in priority order)

These are the fixes I'd make in a Round 2 build pass. Each maps to a section above.

### Round 2.A — Truth & safety (must do before any cold-call demo)

1. **Drop the Feijoada card photo** or rename to Jardineira. (§1.7, §2.3)
2. **Build stub pages** for `/menu`, `/visitar`, `/politica-de-privacidade` and EN equivalents (§8).
3. **Replace the Maps iframe** with a static map image or a no-image directions card (§2.5).

### Round 2.B — Identity & differentiation

4. **Restructure Hero**: change eyebrow color to muted, drop the green orb, swap the picanha photo for a place-photo (terrace/façade/dining room), add "Aberto sem pausa" ribbon. (§2.1)
5. **Restructure Hours**: promote "Não fechamos à tarde" to the h2. (§2.2)
6. **Re-think menu section**: pick Option A (editorial list) or Option B (asymmetric grid). (§2.3)
7. **Re-design reviews**: one feature quote + Google logo + real link to GBP, drop the trio. (§2.4)
8. **Add one Porto-specific visual detail**: azulejo motif, hand-drawn street ink wash, Constituição street sign-style label, etc. (§1.6)

### Round 2.C — Mobile parity

9. **Add mobile nav** (inline strip or hamburger). (§2.6)
10. **Add sticky WhatsApp bubble** on mobile. (§11.7)
11. **Fix tablet breakpoint** for hero: change `md:` → `lg:`. (§2.1.e)

### Round 2.D — Polish

12. **Vary section vertical padding** (Hours tighter, Hero/Menu more generous). (§5)
13. **Style or hide NIF/CAE placeholders**. (§2.7.a)
14. **Replace ASCII stars with SVG**. (§2.4.b)
15. **Find a job for `--color-secondary`** or drop the token. (§4)

### Round 2.E — Production

16. **Image pipeline**: `src/assets/` + Astro `<Image>` + WebP. (§9)
17. **Verify lat/long** in schema. (§10)
18. **Static map with API key** in Vercel env. (§2.5)
19. **Run the full `docs/design/CHECKLIST.md`** end-to-end.

---

## 13. One last thing — the human-touch checklist from the design.md

The design.md said "at least 3 of these" must be present:
- [x] Background is warm/cool off-white, not pure white — ✓ cream
- [ ] Custom `::selection` color matching brand accent — ✓ in CSS
- [ ] Focus rings styled in brand accent color — ✓
- [x] Tabular-nums on hours and prices — ✓
- [ ] At least one typographic craft detail — ✗ **missing** (no pull quote, no drop cap, no oversized number, no editorial flair)

We hit 4/5 but the missing one is the one that most signals "designed by a human." The Reviews section in particular is begging for a pull-quote treatment (oversized italicized Fraunces with leading quote-mark, indented attribution).

---

## 14. Files referenced

Screenshots captured during this review (Playwright MCP, in `.playwright-mcp/` inside the browser container):
- `pt-desktop-1280.png`
- `pt-tablet-768.png`
- `pt-mobile-375.png`
- `en-desktop-1280.png`
- `en-mobile-375.png`

If you'd like local copies for the cold-call deck, run `pnpm dev --host 0.0.0.0` and capture them from your own browser, or have me re-run the MCP screenshots and save them under `docs/clients/porto-dos-ribeiros/screenshots/`.

---

*The page works. It builds, it lints, it renders both locales correctly. But "works" is the floor, not the ceiling — and right now it has the rhythm of a page-builder, not a place-builder. Round 2 is about removing what makes it look generated and adding what makes it look chosen.*
