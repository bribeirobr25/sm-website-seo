# Timeline / process steps

**Source:** Research-driven (2026-05-23). "How it works" answers the booking objection on service-business landing pages.
**Implementation:** `docs/design/components/_impl/Timeline.astro`.

## 1. Purpose + when to use

3-5 numbered process steps: marker (number / Roman / icon) + step title + 1-sentence description. Horizontal on desktop, vertical on mobile.

**Per-vertical:**

| Vertical | Use | Example steps |
|---|---|---|
| Health — clinic, dental | ✅ Critical | "Termin buchen" → "Erstgespräch" → "Behandlung" → "Nachsorge" |
| Beauty — premium salon | ✅ Recommended | "Beratung" → "Color test" → "Color + cut" → "Pflege" |
| Trades | ✅ Critical | "Anfrage" → "Vor-Ort-Termin" → "Kostenvoranschlag" → "Ausführung" → "Garantie" |
| Professional services | ✅ Critical | "Erstgespräch" → "Mandatsannahme" → "Bearbeitung" → "Rechnungsstellung" |
| Education | ✅ Recommended | "Probestunde" → "Lernplan" → "Wöchentliche Stunden" → "Halbjahres-Review" |
| Gastronomy — catering | ✅ Recommended | "Anfrage" → "Menübesprechung" → "Verkostung" → "Event" |
| Studio | 🟡 Conditional | If membership has a clear onboarding |
| Other | Skip |

## 2. Props

- `steps: { number?, title, description, icon? }[]` (required, 3-5 recommended)
- `eyebrow?` / `heading?` / `intro?`
- `orientation?: 'horizontal' | 'vertical'` (default `'horizontal'`)
- `numbering?: 'arabic' | 'roman' | 'icon'` (default `'arabic'`)

## 3. Content guidelines

- **3-5 steps maximum** — 6+ becomes a checklist, not a process
- Each step: action verb + noun + result
- Description: 1 sentence (15 words max)
- Use customer-facing language ("Sie wählen ein Datum") not internal jargon ("Initial CRM entry")
- If the process has decision branches, simplify to the most common path

## 4. Visual notes

- Marker is a circle with the number/icon — agency-accent color border
- Horizontal variant: `grid md:grid-cols-3 lg:grid-cols-5` — wraps to vertical on mobile naturally
- Vertical variant: connecting line between markers (CSS pseudo-element)

## 5. Anti-patterns

- "Step 1: visit our website" — meta-recursive, useless
- Pretending complexity ("12 steps to the perfect cut") — pad reduces credibility
- Marketing claims as steps ("Step 3: be amazed!") — process steps are functional
- Hidden cost steps (omit "Step 5: Pay 50% upfront" and surprise customers later)

## 6. Schema notes

- Optional: emit `HowTo` schema for procedural content (rare for SMB, more for DIY guides)
- For trades: pair with `Service` schema (the Timeline describes how the Service is delivered)
