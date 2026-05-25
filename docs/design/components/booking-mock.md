# Booking form (with confirmation state)

**Source:** Adèle V5 build (2026-05-22). Generic pattern observed across OpenTable / Resy / Treatwell / Doctolib hosted forms. Promoted 2026-05-23.
**Implementation:** `docs/design/components/_impl/BookingMock.astro`.

## 1. Purpose + when to use

A 2-column section: left column = copy (eyebrow + H2 + body + phone fallback), right column = booking form with date + time + party + name + email + notes. On submit, form collapses + confirmation state appears with formatted summary ("Anna Schmidt · Wednesday, 28 May 2026 · 19:00 · 4 guests") and reassurance copy.

**This is named `BookingMock` because the demo version submits to nothing** — purely a UI/UX pattern demo. **For real clients in 2026**, the agency recommendation is **buy, don't build**: embed Resy / OpenTable / SevenRooms (gastronomy), Treatwell / Booksy (beauty), Doctolib (DE health) inside the canonical `ConsentGate` wrapper rather than ship a custom booking backend.

This component remains canonical as the **visual pattern** when a client genuinely needs an in-house request form (e.g., catering inquiries, custom-event tasting menus, "request a quote" flows that don't fit a third-party booking widget).

**Per-vertical surfaces:**

| Vertical | Use as in-house form? | Or use third-party? |
|---|---|---|
| Gastronomy — fine-dining tasting menu | 🟡 Only if no Resy/OpenTable contract | Resy preferred — real-time availability |
| Gastronomy — casual reservation | ❌ Use OpenTable / TheFork | — |
| Gastronomy — catering / event request | ✅ Custom form fits (no real-time slot) | — |
| Beauty — salon | ❌ Use Treatwell / Booksy | — |
| Health — clinic | ❌ Use Doctolib (DE) or Jameda | — |
| Trades — quote request | ✅ Custom form fits | — |
| Professional services — consultation request | ✅ Custom form fits | — |

## 2. HTML / accessibility structure

```html
<section id="reservation">
  <div class="grid lg:grid-cols-[1fr_1.2fr]">
    <div class="copy">
      <p class="eyebrow">…</p>
      <h2>…</h2>
      <p>…</p>
      <a href="tel:…">…</a>
    </div>
    <form id="booking-form" novalidate>
      <div id="booking-fields">
        <label><span>Date</span><input type="date" required min="…" /></label>
        <label><span>Time</span><select required>…</select></label>
        <label><span>Party</span><select required>…</select></label>
        <label><span>Name</span><input type="text" required autocomplete="name" /></label>
        <label><span>Email</span><input type="email" required autocomplete="email" /></label>
        <label><span>Notes</span><textarea rows="3"></textarea></label>
        <button type="submit">Request table</button>
        <p class="mock-note">⚠ Mockup …</p>
      </div>
      <div id="booking-success" hidden>
        <svg aria-hidden="true">…</svg>
        <p>Reservation received.</p>
        <p id="booking-summary"></p>
        <p>Confirmation body</p>
      </div>
    </form>
  </div>
</section>
```

**Accessibility:**
- Native `<input type="date">` + `<select>` — accessible by default; min/max dates set to prevent past-date selection
- `required` + `autocomplete="name"` / `autocomplete="email"` for browser fill
- Submit handler formats summary via `Intl.DateTimeFormat(document.documentElement.lang || 'de-DE')` — locale-aware
- For real submission: use `aria-busy` + `aria-live="polite"` on the success region

## 3. CSS spec

- Layout: `grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20` — form gets slightly more width than copy
- Form card: `bg-surface rounded-lg p-6 sm:p-8 border border-border shadow-elev`
- Each field: 48px min height + `bg-bg border border-border` inputs
- Submit: 52px min height + `bg-accent text-bg`

## 4. Props (frozen, demo version)

- `locale: Locale` — for i18n lookup
- Inline: `partyOptions: number[]`, `timeOptions: string[]` — easy to override per client

## 5. Real-implementation upgrade path

When promoting from `Mock` to real (in-house, not third-party):
1. Replace inline `<script>` with `<form action="/api/booking" method="POST">`
2. Add `app/api/booking/route.ts` server endpoint
3. Persist to database (Neon / Postgres per `INTEGRATIONS.md`)
4. Send confirmation email via Resend (to both customer + restaurant)
5. Generate ICS calendar attachment for the customer
6. Send Slack/SMS notification to restaurant (real-time)
7. Add honeypot + rate-limit (per `FORMS.md`)
8. Show real availability via API (block already-booked slots)
9. **For canonical agency: do NOT ship this in-house build for booking. Use Resy/OpenTable/Treatwell/Doctolib.** This upgrade path is for catering / quote / consultation flows only.

## 6. Performance constraints

- ~5 KB JS for the form state machine. Negligible.
- Native form should work without JS for graceful degradation.

## 7. Implementation pointer

Used by Adèle home as a demo. For real bookings, embed a third-party widget inside `ConsentGate` (per `consent-gate.md`).

---

## Hardcoded content warning (2026-05-23 portfolio audit)

The canonical implementation at `_impl/booking-mock.astro` (matching CamelCase filename) carries hard-coded content from the demo where this component was first promoted — specifically: Adèle restaurant — reservation form (date / time / party / name / email / notes).

**When using this component in a new demo or client build, do one of two paths:**

1. **Copy + customize** — `cp _impl/[Component].astro clients/[slug]/src/components/sections/` then edit the items/quotes/images array inline per the client's vertical. This is what the 2026-05-23 3-new-demos rebuild did for the Press component (lawyer Chambers/JUVE/WirtschaftsWoche items replaced Adèle's restaurant items). See `docs/audit/2026-05-23-portfolio-rebuild-audit.md` §2 architecture gap.
2. **Parameterize the canonical (recommended next time anyone touches this file)** — accept `items` / `quotes` / `images` as a required prop with no hard-coded fallback. Update `§3 Props` above to match. Closes audit backlog item #2 in `docs/audit/PENDING.md` §2026-05-23 portfolio-rebuild backlog.

**Why this matters:** the audit found that 6 of the 32 canonical `_impl/` components carry single-demo content (Press · BookingMock · NewsletterMock · CourseList · PhotoGrid · MenuCard). The 2026-05-23 yoga + barber demos had to *delete* most of these copies + inline equivalent markup because the hard-coded content was vertical-wrong. Parameterizing avoids that inline-rewrite cost for the next client.
