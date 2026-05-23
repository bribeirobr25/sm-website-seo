# FAQ section + FAQPage schema

**Source:** Research-driven (2026-05-23). `CHECKLIST.md §401` + `SEO.md §FAQ schema (AI-extraction signal; no SERP feature in 2026)`. Added 2026-05-23.
**Implementation:** `docs/design/components/_impl/FAQ.astro`.

## 1. Purpose + when to use

A composed section: header + Accordion + auto-generated `FAQPage` JSON-LD from the same item list. Guarantees the structured data matches the rendered content exactly (the rich-result requirement Google enforces, and the AI-extraction signal that survived the 2026 rich-result deprecation).

**Per-vertical:** every vertical benefits — every reviewed agency template ships one. Priority:

| Vertical | FAQ priority | Why |
|---|---|---|
| Health — clinic | ✅ Critical | Insurance / hours / procedures questions are 50% of inbound |
| Professional services | ✅ Critical | "How much does it cost," "How long does it take" |
| Beauty — salon | ✅ Critical | "Do you take walk-ins," "How long for color," "Patch test policy" |
| Trades | ✅ Critical | Service area, callout fee, warranty, payment terms |
| Education — tutoring | ✅ Critical | Trial lesson, group vs 1:1, cancellation |
| Gastronomy — fine-dining | ✅ Recommended | Dress code, dietary accommodations, group size, allergies |
| Gastronomy — casual | 🟡 Conditional | Hours + reservations usually covered in nav/footer; FAQ optional |
| Pets — vet | ✅ Critical | Emergency hours, vaccinations, payment, insurance |
| Events-hospitality | ✅ Critical | Cancellation, weather contingency, group capacity |

## 2. HTML / accessibility structure

```html
<section aria-labelledby="faq-heading">
  <header>
    <p class="eyebrow">Häufige Fragen</p>
    <h2 id="faq-heading">FAQ</h2>
    <p>Optional intro.</p>
  </header>
  <!-- Accordion (see accordion.md) -->
  <div class="accordion" data-accordion-group="faq" data-single-open="true">
    <details><summary>…</summary><div><p>…</p></div></details>
    <!-- more -->
  </div>
  <script type="application/ld+json">
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": […] }
  </script>
</section>
```

**Accessibility:**
- Per `accordion.md` — native `<details>`/`<summary>` handles state announcement
- Section has `aria-labelledby` pointing to the H2
- JSON-LD is inserted via `is:inline` Astro directive (no hydration, raw script tag)

## 3. Props (frozen)

- `items: { question: string; answer: string }[]` (required)
- `heading?: string`
- `eyebrow?: string`
- `intro?: string`
- `singleOpen?: boolean` (default `false`)
- `variant?: 'bordered' | 'flush'` (default `'flush'`)
- `emitSchema?: boolean` (default `true`) — set false if another script on the page already emits `FAQPage` to avoid duplicate schema

## 4. Schema rules (mandatory)

- Each question text in the schema MUST match the rendered `<summary>` text exactly
- Each answer text in the schema MUST match the rendered `<p>` text exactly
- No HTML in answers (the spec accepts plain text; HTML in answers risks SERP/AI mis-parsing)
- Minimum 3 Q&A pairs to render — fewer doesn't justify the schema overhead
- Maximum ~15 Q&A pairs — past that, restructure (multi-page knowledge base)

Per `CHECKLIST.md §401`: SERP rich result deprecated 2026-05-07, markup is now an AI-extraction signal (LLM Overviews, ChatGPT, Perplexity). Schema still worth emitting.

## 5. Content guidelines

- Use real customer questions (from inbox / Google Q&A on GBP / call notes)
- Answer concisely — 2-4 sentences per answer
- Avoid marketing voice — direct, factual, useful
- Update at least quarterly

## 6. Pairs with

- `Accordion.astro` — the underlying component
- `lib/seo/schema.ts` — extend to register the `FAQPage` graph alongside the Restaurant/CafeOrCoffeeShop/Person graphs

## 7. Anti-patterns

- Inventing questions to pad the section
- Hiding crucial conversion copy (hours, location, pricing) inside FAQ — these belong above the fold
- Schema that doesn't match the visible text — Google penalty risk for inconsistent structured data
- More than 15 questions — restructure as a multi-page knowledge base
