# CHECKLIST.md — Master Pre-Delivery Checklist
## Run this before going live on every client project

**Pull from:** DESIGN-BEST-PRACTICES.md, TECH.md, SEO.md, I18N.md
**Run in order.** Fix every failure before delivering.

---

## 0. Pre-flight

- [ ] Client has reviewed and approved all content (copy, hours, prices, photos)
- [ ] `noindex` meta tag is **removed** from all pages
- [ ] Real domain is configured (not `vercel.app`)
- [ ] HTTPS is active (Vercel provisions automatically)
- [ ] All environment variables set in Vercel project settings (not in code)

---

## 1. Technical

### Build
- [ ] `pnpm lint` passes with zero warnings
- [ ] `pnpm build` completes without errors
- [ ] No `console.log` statements in production code
- [ ] No `any` TypeScript types, no `// @ts-ignore`

### HTML structure
- [ ] One `<h1>` per page
- [ ] Heading hierarchy is logical: `h1` → `h2` → `h3`, no levels skipped
- [ ] `<html lang>` attribute set correctly on every page (`de`, `en`, `pt-BR`)
- [ ] `<meta charset="UTF-8">` and `<meta name="viewport">` present
- [ ] `<address>` element used for contact info block
- [ ] `<a href="tel:+49...">` for phone (not plain text)
- [ ] `<a href="mailto:...">` for email (if shown)
- [ ] `<time>` used for hours where applicable
- [ ] No `<div>` used where a semantic element applies (`<nav>`, `<main>`, `<footer>`, etc.)

### Performance
- [ ] PageSpeed Insights **mobile score ≥ 90** (run on live domain, not preview)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Hero/LCP image does **not** have `loading="lazy"`
- [ ] Hero/LCP image **has `fetchpriority="high"`** (not set by Astro `<Image>` by default — see TECH.md §10)
- [ ] All below-fold images have `loading="lazy"`
- [ ] All images have explicit `width` and `height` attributes (prevents CLS)
- [ ] All images converted to **WebP** format
- [ ] Hero image max 1920px wide; section images max 800px
- [ ] No unoptimized images above 200KB
- [ ] Image `widths` array has at least one variant within ~25 % of the actual displayed width × DPR (avoids browser over-picking)
- [ ] Image `quality` set to 75 for photos (default 80 wastes ~10 % bytes for no visible gain)
- [ ] **Zero `fonts.googleapis.com` or `fonts.gstatic.com` references** in the rendered HTML — all fonts self-hosted via `@fontsource-variable/*` or equivalent
- [ ] `font-display: swap` on every `@font-face` (fontsource sets this by default — verify)
- [ ] Display font's LCP-element subset preloaded (optional but worth ~100–200 ms LCP)
- [ ] No render-blocking scripts
- [ ] If LCP > 2.5 s, **read the LCP breakdown** in PageSpeed — `Element render delay` is the dominant lever in our builds; almost always means render-blocking fonts or CSS above the LCP element

### Security
- [ ] Security headers configured in `vercel.json` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- [ ] No API keys, credentials, or secrets in source code or committed `.env` files
- [ ] Contact form (if present): server-side validation with Zod, honeypot field, rate limiting
- [ ] `dangerouslySetInnerHTML` not used with user-provided content

### Infrastructure
- [ ] `robots.txt` present and allows all crawlers
- [ ] `sitemap.xml` generated and correct
- [ ] `vercel.json` has correct `buildCommand`, `outputDirectory`, security headers
- [ ] `.gitignore` includes `.env`, `node_modules/`, `.next/`, `dist/`, `.astro/`, `.vercel/`
- [ ] `pnpm-lock.yaml` committed

---

## 2. Design and UX

### Visual review at three viewports (mandatory)
- [ ] **Screenshots captured** at 375 × 812, 768 × 1024, and 1280 × 900 — for every page, for every locale
- [ ] All screenshots reviewed against `DESIGN-BEST-PRACTICES.md` §15 **AI-template tells** subsection — zero present
- [ ] Hero headline does not wrap to more than 3 lines at 768 px (the 768 breakpoint trap)
- [ ] At 375 px, every top-level navigation destination is reachable from the header (no `hidden sm:flex` orphans)
- [ ] At 375 px, sticky service-CTA bubble (WhatsApp / Call) is present for service businesses

### Visual quality
- [ ] No stock photos passed off as the actual business
- [ ] At least one real photo of the physical business used prominently
- [ ] **Every image alt text matches the photo's actual subject** — no image labeled "Feijoada" if the photo shows Jardineira, no card labeled "[dish X]" without owning a photo of [dish X]
- [ ] No pure `#000` or `#FFF` for body text or background
- [ ] All color tokens defined in one CSS file (`tokens.css`); no hardcoded hex in components
- [ ] **Eyebrow / kicker text does not use the same hue as the primary CTA** (the accent color is reserved for the call to action — see DESIGN §5)
- [ ] Maximum 3 font families; display font is characterful (not Inter/Roboto/Arial)
- [ ] No mixed icon families; no emoji used as UI icons
- [ ] **Star ratings rendered as SVG icons**, not unicode `★` characters (DESIGN §9)
- [ ] No AI glow, gradient orbs, or decorative sparkles
- [ ] No card soup (every section has distinct visual weight)
- [ ] **Section rhythm varies** — not the same `eyebrow → h2 → content → CTA` pattern repeated 3+ times in a row (DESIGN §6)
- [ ] **Primary CTA does not appear unchanged in two sections** — second appearance differs in shape/label/variant (DESIGN §7 CTA repetition)
- [ ] Hero section answers: **what** the business does, **where** it is, **how to contact**

### Typography
- [ ] Body text minimum 16px
- [ ] Line height on body: 1.6 (not default 1.0)
- [ ] Phone numbers and hours use `tabular-nums` or mono font
- [ ] No letter-spacing issues on labels

### Interaction
- [ ] Every interactive element has a `hover:` state
- [ ] Every interactive element has `focus-visible:ring-2` focus ring (styled, not browser default)
- [ ] Buttons have `active:scale-95` press feedback
- [ ] All animations use `transform` / `opacity` only (no `width`, `height`, `margin`)
- [ ] No animation exceeds 400ms
- [ ] No linear easing on any animation
- [ ] `prefers-reduced-motion` respected

### Accessibility
- [ ] Text/background contrast ≥ 4.5:1 for body text (checked with a contrast tool)
- [ ] Large text (≥ 24px bold) contrast ≥ 3:1
- [ ] CTA buttons contrast ≥ 4.5:1
- [ ] All images have descriptive `alt` text; decorative images have `alt=""`
- [ ] All tap targets ≥ 44×44px on mobile
- [ ] Tab through the page — every interactive element is reachable without a mouse
- [ ] No `outline: none` without a styled replacement

### Mobile
- [ ] Tested on an **actual mobile device** (not just DevTools)
- [ ] Tested at 375px, 768px, and 1280px viewports
- [ ] Hero text fits without overflow at 375px
- [ ] Primary CTA button is thumb-reachable on mobile
- [ ] Body text readable without zooming (minimum 16px)
- [ ] Hamburger menu (if used) has a close button and traps focus when open
- [ ] Map links open the Google Maps app (`https://maps.google.com/?q=...`)

### Content
- [ ] No lorem ipsum anywhere
- [ ] No invented reviews or testimonials (only real ones, client-approved)
- [ ] No fabricated certifications, awards, or years of experience
- [ ] **No fabricated photo-label pairings** — no image labeled as [dish/service X] unless the file actually depicts X
- [ ] **No header or footer link goes to a 404** — every link in the chrome resolves; if a route isn't built yet, stub it with a one-line "Coming soon" page or remove the link
- [ ] **Map block renders content** — not a blank iframe; if using the free Google embed (`?output=embed`) replace with static image, keyed Embed API, or a no-map location card (DESIGN §7)
- [ ] Phone number in international format (`+49 30 ...` for Berlin)
- [ ] Hours confirmed with client and formatted correctly (24h for DE, 12h for EN)
- [ ] Primary CTA is one action, clearly dominant
- [ ] No corporate filler copy ("We are dedicated to...", "Our passion is...")
- [ ] "Welcome to [Business Name]!" is not the hero headline

### Human touch — hygiene (check all)
- [ ] Background is warm/cool off-white, not pure white
- [ ] Custom `::selection` color matching brand accent
- [ ] Focus rings styled in brand accent color
- [ ] Tabular-nums on hours and prices

### Human touch — required craft (both must be present)
- [ ] **One typographic flourish** — oversized italic pull-quote, drop cap, oversized stat, tracked-uppercase ribbon, or hand-set price list. Tabular-nums does not count (that's hygiene). The flourish must read as a deliberate compositional decision (DESIGN §14)
- [ ] **One place-identity detail** — beyond the address text, one element signals the city/neighborhood: U-Bahn line dot, Kiez name as a kicker, azulejo (tile) corner accent, regional motif tied to the cuisine. One detail only — overdoing it is the opposite mistake (DESIGN §14)

---

## 3. SEO

### On-page
- [ ] Every page has a unique `<title>` (50–60 characters, includes business name + keyword + city)
- [ ] Every page has a unique `<meta name="description">` (140–160 characters, includes city, has CTA)
- [ ] `<link rel="canonical">` on every page
- [ ] URL slugs are lowercase, hyphenated, in the page's primary language
- [ ] No broken links (all phone, map, social, WhatsApp links tested)

### Schema.org
- [ ] `LocalBusiness` schema (correct `@type` for the business category) present in `<head>`
- [ ] Schema validated with **Google Rich Results Test** (zero errors)
- [ ] Latitude/longitude verified against actual Google Maps pin location
- [ ] Opening hours in schema match website and GBP exactly
- [ ] `aggregateRating` only present if pulled from real, verified review data
- [ ] `FAQPage` schema matches visible FAQ content exactly (if FAQ section present)

### Crawlability
- [ ] `sitemap.xml` submitted to **Google Search Console**
- [ ] GSC property verified (DNS TXT record or HTML tag)
- [ ] GA4 tag firing correctly (tested in GA4 debugger/DebugView)

### Local
- [ ] **Google Business Profile updated** with the new website URL
- [ ] GBP hours match website hours exactly
- [ ] GBP phone number matches website phone number exactly
- [ ] GBP address matches website address exactly (NAP consistency)

---

## 4. Internationalization (multilingual sites only)

- [ ] `<html lang>` is correct BCP 47 code per page (`de`, `en`, `pt-BR`)
- [ ] `hreflang` tags present and **symmetric** on every page (every version links to all other versions)
- [ ] `x-default` hreflang included, points to primary locale URL
- [ ] `og:locale` matches current page locale (`de_DE`, `en_US`, `pt_BR`)
- [ ] Language switcher visible in header, showing **native language names** (Deutsch, English, Português)
- [ ] Translation key parity check passes (`pnpm validate:translations`)
- [ ] No raw translation keys visible in the UI on any locale
- [ ] All translations reviewed and approved by client (or a native speaker)
- [ ] German: `Sie`/`du` choice consistent throughout
- [ ] German: all nouns capitalized
- [ ] Hours formatted correctly per locale (24h for DE/PT, 12h for EN)
- [ ] Prices formatted correctly per locale (`45,00 €` for DE, `€45.00` for EN)
- [ ] All components tested in the **longest language** (German) at 375px — no overflow

---

## 5. Legal (German market — mandatory)

- [ ] **Impressum page** present, reachable within 2 clicks from any page (usually in footer)
- [ ] Impressum contains: full legal name, street address (not PO box), email, phone
- [ ] Impressum reviewed and confirmed by client
- [ ] **Datenschutzerklärung** (privacy policy) present, DSGVO-compliant
- [ ] Privacy policy lists all data processors (GA4, contact form email provider, etc.)
- [ ] Cookie banner only if using tracking/non-functional cookies (not required for GA4 with IP anonymization if properly configured)
- [ ] Legal pages are **not** set to `noindex`

---

## 6. Sign-off

- [ ] All items above checked and passing
- [ ] Client has done a final review and given written approval (email is fine)
- [ ] Domain is live and HTTPS is working
- [ ] First GBP post published after launch (announce the new website)
- [ ] Client knows how to contact you for future updates
- [ ] Retainer or next-step conversation had with client

---

*Every item on this list has saved real time or prevented a real problem. Don't skip it.*
