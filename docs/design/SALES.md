# SALES.md — Client Acquisition and Relationship Guide
## Outreach Workflow · Pricing · Contracts · Handoff

**Applies to:** All product types (1–5). Pricing tiers in Section 4 are organized by product type (see `TECH.md` §1 for the product-type matrix). Outreach + handoff workflows are universal.

**Covers:** How to find clients, how to pitch, how to close, what to charge, how to manage the relationship, and how to hand off cleanly.

---

## Table of contents

1. [Finding prospects](#1-finding-prospects)
2. [The demo-first workflow](#2-the-demo-first-workflow)
3. [The pitch call](#3-the-pitch-call)
4. [Pricing and proposals](#4-pricing-and-proposals)
5. [The free portfolio clients](#5-the-free-portfolio-clients)
6. [Agreements and contracts](#6-agreements-and-contracts)
7. [Project kickoff](#7-project-kickoff)
8. [Client communication](#8-client-communication)
9. [Delivery and handoff](#9-delivery-and-handoff)
10. [Monthly retainer work](#10-monthly-retainer-work)
11. [Anti-patterns](#11-anti-patterns)

---

## 1. Finding prospects

### What to look for

A good prospect has **at least two of these three signals:**

1. **Weak or missing website** — no site, or a site that looks like 2010 (Flash-style, bad mobile, tiny text)
2. **Incomplete Google Business Profile** — missing photos, no hours, no description, no posts, zero or few reviews
3. **Active on Instagram but nowhere else** — they're clearly trying to reach customers but their Google presence is invisible

### Where to find them in Berlin

- **Google Maps searches:** Type `Friseur Neukölln`, `Physiotherapie Mitte`, `Nagelstudio Kreuzberg`, etc. Look at listings with few/no photos, old websites, or no website at all.
- **Walking or cycling through neighborhoods** — look for shops with handwritten signs or no digital presence visible
- **Brazilian community:** Brazilian restaurants, hair salons, cleaning services, personal trainers targeting the community
- **Instagram** — small Berlin businesses posting in German or Portuguese with no link in bio or a dead link
- **Friends and acquaintances** — the easiest first clients

### Qualifying checklist (before building the demo)

- [ ] The business has a physical location in Berlin (or nearby)
- [ ] The business is clearly operating (open, has customers, not closing)
- [ ] The owner is likely a decision-maker (not a franchise or large chain)
- [ ] Their current web presence has clear, fixable problems
- [ ] You can pull enough public information to build a convincing demo (name, address, services, photos from Google/Instagram)

### Niches to prioritize

These convert better and produce better-looking portfolios:

| Niche | Why |
|-------|-----|
| Hair salons / barbershops | Visually interesting, owners care about image, easy to photograph |
| Restaurants / cafés | High intent searches, owners understand that online = reservations |
| Fitness / yoga / pilates | Booking-heavy, communities, existing Instagram audiences |
| Beauty / nails / aesthetics | Visual, price-sensitive but see ROI quickly in bookings |
| Brazilian community businesses | Bar's native language = massive trust advantage |
| Physiotherapy / wellness | Trust-sensitive, reviews matter enormously |

**Avoid for now:** Chains, franchises, businesses in industries requiring complex compliance (finance, legal, healthcare), businesses with very low online search intent.

---

## 2. The demo-first workflow

### Why this works

Traditional agency pitch: "Hi, I'm a web developer, would you like a website?"
Demo-first pitch: "Hi, I already built a version of your website. Want to see it?"

The owner sees a finished product, not a promise. The mental leap from "I need to trust this stranger" to "I can see what this would look like" is eliminated.

### Building the demo

**Time target:** 2–4 hours per demo for a standard landing page.

**What to use:**
- Business name, address, phone, hours from Google Maps / GBP
- Service descriptions from their GBP listing or Instagram
- Photos from their Google Maps listing or Instagram (clearly labeled as sourced from their public profiles — you're not stealing, you're previewing what their site could look like)
- Reviews from Google Maps (2–3 real ones)
- Their logo if available (if not, use a placeholder with their name in the display font)

**What NOT to do:**
- Don't invent services, prices, or claims they haven't made
- Don't use random stock photos as if they're the real business
- Don't make up reviews

**Deploy to Vercel:**
```bash
vercel --prod
# Gets a [name].vercel.app URL
# Add noindex meta tag to all pages
```

**Test before calling:**
- Load on your phone
- Check all links work (phone, map)
- Check text is readable
- Make sure it looks professional

### Finding the owner's phone number

- Google Maps listing (often shows the business phone)
- Their Instagram bio or about section
- Their existing website (footer or contact page)
- Calling the business directly and asking for the owner/manager

### Legal note on cold calling in Germany

§7 UWG applies to B2B cold calls. The rule is nuanced for small businesses:
- Calling a business owner (B2B) is in a grey zone — not explicitly prohibited but requires "presumed interest"
- If your service is directly relevant to their business (a website agency calling a business with a bad website), it can be argued as legitimate
- Email first, then call, is lower risk
- Walk-in introduction at the business location is zero legal risk and often more effective
- Never call private individuals (B2C) without explicit prior consent

**Practical approach:** Email or walk-in → follow up by phone after initial contact.

---

## 3. The pitch call

### The script (keep it under 3 minutes before showing the demo)

```
"Olá, ich bin [Name]. Ich bin Webentwickler und arbeite mit kleinen Berliner
Unternehmen zusammen.

Ich habe Ihr Geschäft bei Google gefunden — ich mache das, ich schaue mir
Unternehmen an, die ich interessant finde — und habe einfach mal eine
Version Ihrer Webseite gebaut, um zu zeigen, wie es aussehen könnte.

Es dauert eine Minute, können Sie kurz auf Ihr Handy schauen? Ich schicke
Ihnen den Link."

[Send the URL]

"Das ist natürlich nicht fertig — das sind Ihre echten Informationen, aber
die Fotos und Texte müssten noch von Ihnen kommen. Die Idee ist:
schnell ladend, auf dem Handy gut, und die Leute finden Sie bei Google."
```

Same approach in English for expat-oriented businesses. In Portuguese for Brazilian community businesses — the language switch alone doubles conversion rate.

### Common objections and responses

| Objection | Response |
|-----------|----------|
| "We already have a website" | "I know — I looked at it. May I show you what a faster, mobile-friendly version would look like?" |
| "We don't need a website" | "Most of your customers find you on Google Maps. A website makes you look more legitimate and helps you rank higher. Let me show you what your profile would look like." |
| "How much does it cost?" | "It depends on what you need. The basic version starts at €500. But first — does what you see look like something worth doing?" |
| "I need to think about it" | "Of course. I'll leave the demo URL with you. Can we set a time to talk again this week?" |
| "I handle all of that myself" | "Great — then this would be easy for you to take over and manage. I'd just build it and show you how it works." |

### When to give up

If after 2 follow-ups (call + email) there's no response, move on. Don't chase.

---

## 4. Pricing and proposals

### Pricing philosophy

- Never compete on price — you're not the cheapest option, you're the most personal option
- Always quote a range, not a fixed price (gives you room to scope down if needed)
- Always separate one-time from recurring (plant the retainer seed from day one)
- Charge for the value (more leads, more credibility, better Google ranking), not the hours

### Standard pricing — by product type

Pricing is organized by the product types defined in `TECH.md` §1. Always quote a range, not a fixed price, and always pair one-time work with a retainer recommendation.

| Product type | What it is | One-time | Monthly retainer |
|--------------|------------|----------|------------------|
| **Type 1 — Static info (single page)** | Landing only. Phone / WhatsApp / maps CTAs. No forms, no DB. | **€500–800** | €150–300 |
| **Type 1 — Static info (multi-page, 3–5 pages)** | Multi-page info. Astro static. Blog/news if needed. | **€800–1.500** | €150–300 |
| **Type 2 — Info + contact** | Static info + contact / newsletter / inquiry form (emails the owner, no DB). | **€1.200–2.000** | €200–400 |
| **Type 3 — Info + booking** | DB-backed booking / appointment / reservation system. Real-time availability, confirmations. | **€2.500–5.000** | €300–600 |
| **Type 4 — Info + transactional** | Online ordering, payments, fulfillment tracking. PCI-relevant. | **€4.000–8.000** | €400–800 |
| **Type 5 — Custom application** | Auth, user accounts, multi-role dashboards. Marketing is a sub-component. | **Quote per project** | **Quote per project** |

### Standalone services and add-ons

| Deliverable | Range | Notes |
|------------|-------|-------|
| **GBP setup + optimization** | €150–300 | Standalone — independent of website project |
| **GBP + Type 1 website bundle** | €700–1.200 | Combined setup, discounted vs separate |
| **Multilingual add-on** (+ 1 language) | +€200–400 | Per additional language on top of primary |
| **Existing-site audit** (any type) | €300–600 | Full audit against agency standards using `CHECKLIST.md` §8 template — deliverable is `docs/audit/[client]-[date].md` |
| **Migration to retainer** (third-party site → ours) | €500–1.000 | Includes audit + recommendation report; rebuild quoted separately by product type |
| **Performance / accessibility / SEO emergency fix** | €200–500 | Targeted PageSpeed or Lighthouse score recovery, scoped to one site |

### Retainer scope by product type

| Type | What the retainer covers |
|------|-------------------------|
| Type 1 | GBP posts (2–4/mo), review responses, hours/photo updates, minor copy edits, monthly GSC + Clarity report |
| Type 2 | Type 1 + ESP delivery monitoring (Resend dashboard check, bounce review), form-submission triage |
| Type 3 | Type 2 + booking-system monitoring, schedule edits, capacity adjustments, no-show analysis |
| Type 4 | Type 3 + payment reconciliation, refund handling escalations, inventory updates |
| Type 5 | Quote per project — usually includes feature work, bug fixes, and on-call response in addition to the lighter-tier items |

### Pricing rules

- Always quote the product type explicitly in the proposal — clients should know what they're getting (and not getting)
- **Don't quote Type 3 prices for what is actually Type 2.** A "booking form that emails me" is Type 2, not Type 3. A real booking system with availability state is Type 3
- **A "simple booking" that requires the owner to manually deconflict by email is Type 2 wrapped in optimistic framing.** Be honest with the client about which they're getting
- For new clients, **default to recommending Type 1 first.** Most local businesses do not need a system — phone + WhatsApp covers 90 % of inbound. Upsell to Type 2+ only when the client has a real volume problem the lower type can't solve

### How to present the proposal

Keep it simple. A short email with:
1. What you'll build (one paragraph)
2. What's included (bullet list, max 6 items)
3. What you need from them (photos, content, domain access)
4. The price (one-time + optional retainer)
5. Timeline
6. How to say yes (reply to this email)

No 10-page PDF. No proposal software. Keep friction to zero.

### Payment terms

- 50% upfront before starting
- 50% on delivery (before handing over credentials/domain)
- Monthly retainer: invoice at the start of each month, pay within 7 days
- Accept bank transfer (SEPA). Stripe or Paypal for international clients.

---

## 5. The free portfolio clients

### Who to approach

People you know personally who run a business: friends, family, former colleagues, acquaintances. NOT total strangers — this is a relationship-based service for the portfolio stage.

### What to offer

"I'm starting a web agency and I want to build a portfolio. I'll build you a professional website for free — you only pay for the domain (around €12/year). All I ask is that you give me honest feedback and let me use the site in my portfolio."

### What they pay for

- Domain registration (≈ €10–15/year for `.de`, registered in their name at a registrar they control)
- Any third-party tools they choose (booking system, etc.)
- Nothing else

### What you get

- A real site in production with real traffic
- A before/after story to show future clients
- A real person to reference ("I built [Name]'s site, you can call them")
- Metrics after 60–90 days (GBP impressions, direction requests, calls)

### The 3–5 portfolio target

Aim for diversity:
- At least one restaurant or café (visually impressive)
- At least one service business (clinic, physio, tradesperson — shows it works for less photogenic businesses)
- At least one bilingual site (DE+EN or DE+PT-BR — shows multilingual capability)
- At least one with a GBP optimization story (before/after screenshots from GBP insights)

---

## 6. Agreements and contracts

### Minimum written agreement (even for free portfolio clients)

A simple email works. Confirm in writing:
- What you'll build and what's out of scope
- Who owns the domain (client)
- Who owns the code (client, after final payment)
- That you can use it in your portfolio
- Payment terms (for paid clients)
- What happens if the project stalls (your time is limited)

For paid clients, use a simple 1-page agreement. Don't use a lawyer template that scares them. Keep it in German for German-speaking clients.

### Domain ownership rule

**The client always owns their domain.** You manage the DNS during setup, but the domain is registered in their name at a registrar they have access to. Never register a client domain in your own account.

Why: If the relationship ends, they should be able to take their domain and move on without your involvement.

### Code and hosting

- Code: open source / client-owned after final payment (you can keep a copy for reference)
- Hosting: Vercel account — either agency account (you manage) or client account (you set up, they own). Discuss upfront.
- For retainer clients: you manage the Vercel account (makes updates easier). Include hosting management in the retainer price.

---

## 7. Project kickoff

### What to collect from the client before starting

Send a simple list by email or WhatsApp:

```
For the website, I need from you:

1. Your business name (exactly as you want it on the site)
2. Your address (street + number + ZIP + city)
3. Your phone number (with country code: +49...)
4. Your email address (for the contact form)
5. Your opening hours (every day, including closed days)
6. Photos of your business (exterior, interior, products/services)
   — 10–20 photos, from your phone is fine
7. Your logo (if you have one — any format is fine)
8. A short description of what you do (3–5 sentences in your own words)
9. Your main services (list with prices if you share them publicly)
10. 2–3 Google reviews you like (I'll use real ones from your profile)
11. Your Instagram handle (if you have one)
12. Your Google Business Profile link (if you have one)
```

### What to do before the client sends anything

- Set up the project folder structure
- Scaffold the stack (Tier 1/2/3 per decision matrix)
- Create all doc files (`CLAUDE.md`, `design.md`, `BRIEF.md`)
- Make the design decisions (font, color palette, aesthetic direction)
- Do the competitor research (2–3 similar businesses in the same area)

---

## 8. Client communication

### Golden rules

- **WhatsApp for quick questions.** Most Berlin SME owners prefer it.
- **Email for decisions, agreements, and anything that needs a paper trail.**
- **Never go more than 48 hours without a response** during an active project.
- **Use the client's language.** German clients get German. Brazilian clients get Portuguese.
- **Keep updates short.** "The site is live at [URL]. Two things I need from you: [X] and [Y]." Not a 500-word status report.

### Managing scope creep

When a client asks for something outside the agreed scope:
- Acknowledge it positively: "Great idea — that's definitely possible."
- Then scope it: "That would be an additional €[X] and [Y] days. Want me to add it?"
- Never say yes to out-of-scope work without pricing it.

### Dealing with delays (client side)

Most project delays are caused by clients not sending content. After 2 weeks of no response:
- Send one WhatsApp: "Checking in — I have everything ready on my side. Once you send [X], I can finish the site this week."
- After another week: put the project on hold, send an email explaining this, and move on to other work.
- Bill for time already spent if the delay is more than 4 weeks.

---

## 9. Delivery and handoff

### Before handing over

- Run the full `CHECKLIST.md` from top to bottom
- Test on an actual phone
- Submit the sitemap to Google Search Console
- Update the GBP with the new website URL
- Publish the first GBP post announcing the new site

### What to hand over

1. **Live URL** (on their domain, HTTPS active)
2. **Google Search Console access** — add them as owner, yourself as manager
3. **GA4 access** — add them as administrator
4. **GBP access** — ensure they are the primary owner
5. **Vercel access** — if they'll manage their own hosting (add as team member)
6. **A 5-minute walkthrough** — show them how to update hours, upload photos, and respond to reviews on GBP. Do this over WhatsApp video or a short video recording.
7. **The invoice** for the remaining 50%

### After delivery

- Follow up after 30 days: "How's the site working for you? I can check your Google Search Console and see how things are performing."
- After 60–90 days: send a small report with GBP impressions, direction requests, calls. This is the before/after for your portfolio AND it opens the retainer conversation.
- Ask for a Google review from the client on your (future) agency GBP.

---

## 10. Monthly retainer work

### What's included (standard retainer)

- 2–4 GBP posts per month (What's new, offers, events)
- Respond to new Google reviews (draft + client approves)
- Update hours for holidays/special events
- Monthly GSC check: ranking changes, indexing errors, new opportunities
- Monthly **Microsoft Clarity** review (heatmaps, rage clicks, session recordings — see SECURITY.md/PERFORMANCE.md tools sections for the broader tool kit). Free, no traffic cap, installed once at go-live. Surfaces what users actually do on the site so retainer recommendations are data-driven.
- Minor website updates (text changes, new photo, price update) — max 2 hours included
- Short monthly report (5 bullet points, not a 10-page PDF)

### What triggers additional billing

- New pages or major redesign
- New language added to the site
- New service/product section
- Technical integrations (booking system, new form)

### Monthly retainer report template (send via email/WhatsApp)

```
[Business Name] — Monthly Report [Month Year]

Google Business Profile:
- Profile views: [X] (up/down X% vs last month)
- Direction requests: [X]
- Phone calls from GBP: [X]
- New reviews: [X] (current rating: [X.X]/5)

Website (Google Search Console):
- Organic clicks: [X]
- Impressions: [X]
- Top 3 search queries: [query 1], [query 2], [query 3]

User behavior (Microsoft Clarity):
- Sessions: [X]
- Rage clicks / dead clicks: [X]
- Top page by attention: [page]
- One actionable insight: [e.g. "users scroll past the menu section without clicking — try moving the WhatsApp CTA above the fold"]

What I did this month:
- [GBP post 1]
- [GBP post 2]
- [Website update]

Next month:
- [Planned post/update]
- [Any flagged opportunity]
```

---

## 11. Anti-patterns

- **Don't build sites for clients who won't give you content.** Content takes time to collect. If they're unresponsive before you start, they'll be worse once you've started.
- **Don't underquote just to get the job.** A €200 landing page is 20 hours of work at €10/hour. Underpricing trains clients to expect low rates and attracts clients who don't value the work.
- **Don't register client domains in your own account.** When the relationship ends, it becomes a legal and practical nightmare.
- **Don't promise first-page Google rankings.** Promise better visibility, more calls, more direction requests — all of which you can actually influence.
- **Don't skip the upfront payment.** "I'll pay when it's done" = very high risk of non-payment. 50% upfront is standard and non-negotiable.
- **Don't accept payment in trade** ("I'll do free haircuts for you"). You're running a business.
- **Don't build on Wix, Squarespace, or WordPress for new clients.** You can't control the performance, the updates will be messy, and the output isn't yours to be proud of.
- **Don't take every client.** If the budget conversation is painful, if they don't respect your time, if they're asking for things that would embarrass you in your portfolio — decline gracefully. "I don't think I'm the right fit for this project."

---

*The demo makes them believe. The results make them stay.*
