# Video facade (lazy YouTube/Vimeo)

**Source:** [Chrome Lighthouse facades](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades) · [lite-youtube-embed](https://open-awesome.com/projects/lite-youtube-embed). Added 2026-05-23.
**Implementation:** `docs/design/components/_impl/VideoFacade.astro`.

## 1. Purpose + when to use

Performance: native YouTube/Vimeo embed loads 1.3-2.6 MB on page load. Facade renders only the poster image + play button (~15-40 KB). Iframe loads on click.

**Privacy note:** facade routes to `youtube-nocookie.com` for YouTube — but Google still receives the request on click. For full DSGVO compliance, **wrap in ConsentGate** instead of using this facade directly. This facade is the performance optimization; ConsentGate is the legal compliance layer.

**Per-vertical surfaces:**

| Vertical | Use |
|---|---|
| Gastronomy — owner-shot reels (kitchen process, harvest day) | ✅ Recommended |
| Beauty — treatment process / before/after reels | ✅ Recommended |
| Studio — class promo, instructor demos | ✅ Recommended |
| Events-hospitality — venue tour, past-event reel | ✅ Recommended |
| Health — patient testimonial (with release) | 🟡 Conditional |
| Other verticals | Skip unless real video content exists |

## 2. Props

- `videoId: string` (required) — YouTube video ID or Vimeo numeric id
- `provider?: 'youtube' | 'vimeo'` (default `'youtube'`)
- `posterSrc?: string` — defaults to YouTube `maxresdefault.jpg`
- `posterAlt: string` (required)
- `title: string` (required) — iframe a11y title
- `aspect?: '16/9' | '9/16' | '1/1' | custom` (default `'16/9'`)
- `autoplay?: boolean` (default `false`)

## 3. Performance

- Initial: ~15-40 KB (poster image + ~1 KB JS)
- On click: iframe added with `loading="lazy"` + standard YouTube/Vimeo network
- Saves ~1.25-2.5 MB on first load vs native embed

## 4. Anti-patterns

- Loading the actual iframe on page load and calling it a "facade" — defeats the point
- Autoplay on by default — violates WCAG 2.1.2 Pause/Stop/Hide + UX best practice
- Using facade outside ConsentGate on DSGVO-sensitive markets (still touches Google on click)

## 5. Pairs with

- `ConsentGate.astro` — wrap this for full legal compliance
- `Dialog.astro` — for fullscreen-modal video patterns
