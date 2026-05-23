# Newsletter signup form (with thank-you state)

**Source:** Saltlines V4 build (2026-05-22). Generic pattern observed across coffee/beauty/retail. Promoted 2026-05-23.
**Implementation:** `docs/design/components/_impl/NewsletterMock.astro`.

## 1. Purpose + when to use

A horizontal section: left column = copy (eyebrow + H2 + body), right column = email form (single field + submit button). On submit, fields collapse + thank-you state appears in place with confirmation copy + ⚠ demo marker.

**This is named `NewsletterMock` because the demo version submits to nothing** — purely a UI/UX pattern + state demo. **For real clients**, wire the submit handler to Resend / ConvertKit / Mailchimp per `INTEGRATIONS.md` and remove the `Mock` suffix.

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Gastronomy — café / coffee shop / weekly-changing menu | ✅ Recommended | "Daily wave report," "this week's bake," "what's on the chalkboard" |
| Beauty — salon / spa | 🟡 Conditional | Only with a real content cadence (monthly skincare tip, etc.) |
| Health — clinic | ❌ Avoid | Marketing emails from a clinic feel intrusive; use SMS appointment reminders instead |
| Retail / artisan | ✅ Recommended | Drop announcements, new collections |
| Events-hospitality | ✅ Recommended | Event calendar + early-bird ticketing |

**When NOT to use:** clients without a real content production cadence — empty newsletters kill subscriptions. Confirm at scaffold time: "Will you actually send something at least monthly?"

## 2. HTML / accessibility structure

```html
<section>
  <div class="grid lg:grid-cols-2">
    <div class="copy">
      <p class="eyebrow">Newsletter</p>
      <h2>…</h2>
      <p>…</p>
    </div>
    <form id="newsletter-form">
      <div id="newsletter-fields">
        <label>
          <span>Email</span>
          <input type="email" name="email" required autocomplete="email" />
        </label>
        <button type="submit">Subscribe</button>
        <p class="consent-note">…</p>
      </div>
      <div id="newsletter-success" hidden>
        <svg aria-hidden="true">…</svg>
        <p>Thank-you message</p>
      </div>
    </form>
  </div>
</section>
```

**Accessibility:**
- `<label>` wraps input — implicit association
- `required` + `autocomplete="email"` + `type="email"` — native browser validation + fill
- Submit reveals success state via `classList.toggle('hidden')` — keep both states in the DOM (announce-able to screen readers via aria-live="polite" wrapper if real-time announcement matters)
- For real submission: wire `aria-busy` during pending, `aria-live="polite"` on the success message

## 3. CSS spec

- Layout: 2-col grid on desktop, stack on mobile
- Form card: `bg-surface rounded-lg p-6 sm:p-8 border border-border shadow-card`
- Submit button: full-width within form (`w-full`), uses `bg-accent-secondary` for Saltlines (sunset gold) — overridable per brand
- Min input height: 48px (tap target per `ACCESSIBILITY.md §touch targets`)

## 4. Props (frozen, demo version)

- `locale: Locale` — for i18n lookup (title, body, button label, consent note, thank-you copy)
- For canonical adoption: should accept `onSubmit` handler URL + `mockMode?: boolean`

## 5. Real-implementation upgrade path

When promoting from `Mock` to real:
1. Replace inline `<script>` with `<form action="/api/newsletter/subscribe" method="POST">` for progressive-enhancement-first
2. Add `app/api/newsletter/subscribe/route.ts` (Tier 3) or `pages/api/newsletter.ts` (Tier 2 + Vercel functions)
3. Wire Resend / ConvertKit / Mailchimp client per `INTEGRATIONS.md`
4. Add honeypot field (per `FORMS.md §3 Honeypot`)
5. Add rate-limit (per `FORMS.md §4 Rate limit`)
6. Add `noindex` to the thank-you page (or use in-place state as the demo does)
7. **DSGVO requirement**: explicit consent checkbox if marketing-emails are not strictly transactional (most cases)

## 6. Performance constraints

- ~3 KB JS for the thank-you-state toggle. Negligible.
- For real submission: keep the form `<form action>` natively HTTP-postable so progressive enhancement works without JS.

## 7. Implementation pointer

Used by Saltlines home as a demo. Real-version reference impl: not yet built; clients should follow the upgrade path above.
