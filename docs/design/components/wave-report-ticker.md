# Marquee status ticker

**Source:** Saltlines V4 build (2026-05-22). Wave-report pattern observed across surf/coffee/weather sites. Promoted 2026-05-23.
**Implementation:** `docs/design/components/_impl/WaveReportTicker.astro`.

## 1. Purpose + when to use

A horizontally scrolling status line in brand accent. Reads as a live ticker (sunrise time · today's bean · weather · open hours · staff on shift). Pauses on hover, respects `prefers-reduced-motion`.

**This is a niche / signature component** — recommend only when the brand has a "status" or "today" angle worth surfacing.

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Gastronomy — café / specialty coffee with rotating bean | ✅ Recommended | "Today's bean," "sunrise time" feels live |
| Gastronomy — bakery with daily output | ✅ Recommended | "Just out of the oven · …" |
| Surf / beach / outdoor business | ✅ Recommended | "Wave height · wind · temperature" |
| Beauty — salon | ❌ Avoid | No "today's" content — reads gimmicky |
| Health — clinic | ❌ Avoid | Wrong register entirely |
| Professional services | ❌ Avoid | Wrong register |
| Trades | 🟡 Conditional | Only if there's a daily/weather angle ("today's job · …") |

**When NOT to use:** brands without a daily-changing dimension. The component's whole point is "this feels alive" — without daily content it reads as cheap motion.

## 2. HTML / accessibility structure

```html
<section class="ticker" aria-label="Today's status report">
  <div class="ticker-track" aria-hidden="true">
    <span>06:32 SUNRISE · BONANZA OAXACA · 14°C SPREE …</span>
    <span>06:32 SUNRISE · BONANZA OAXACA · 14°C SPREE …</span>
  </div>
  <p class="sr-only">06:32 sunrise. Bonanza Oaxaca medium roast. Spree water 14 degrees …</p>
</section>
```

**Accessibility:**
- Animated `<span>`s are `aria-hidden="true"` (decorative duplicate for scroll loop)
- Screen-reader content lives in `<p class="sr-only">` — same text, no animation
- `prefers-reduced-motion: reduce` → CSS sets `animation: none` + `flex-wrap: wrap; justify-content: center` so content is still readable, just static and wrapped
- Pauses on hover so visitors can read entries
- The whole section has an `aria-label` so screen readers announce its purpose

## 3. CSS spec

```css
.ticker {
  overflow: hidden;
  padding-block: 0.625rem;
  background: var(--color-accent);
  color: var(--color-bg);
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-block: 1px solid var(--color-accent-deep);
}
.ticker-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  animation: ticker-scroll 45s linear infinite;
}
.ticker:hover .ticker-track {
  animation-play-state: paused;
}
@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .ticker-track { animation: none; transform: none; flex-wrap: wrap; justify-content: center; }
}
```

## 4. Props (frozen)

- `locale: Locale` — for i18n lookup
- Inline `items: string[]` — the status lines
- Implementation duplicates the items once (`[...items, ...items]`) so the CSS animation loops seamlessly

## 5. Content guidelines

- 5-8 short status entries
- ALL CAPS / monospace / brand-accent color — reads as instrumentation, not marketing
- Update via a CMS or build-time data fetch in production; static for demo
- Include at least one weather / time / sensor-style entry to anchor the "live" feel

## 6. Anti-patterns

- Marketing slogans in the ticker ("BEST COFFEE IN BERLIN · COME VISIT") — kills the signature live-feel
- More than 8 entries — feed becomes noise
- Carousel-style fade transitions — defeats the point; horizontal scroll IS the design

## 7. Implementation pointer

Used by Saltlines home. Niche; promote per-client only when the brand has the daily-content angle to support it.
