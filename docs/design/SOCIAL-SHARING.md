# SOCIAL-SHARING.md — Share, OG, and Embed Patterns
## Small Business Website + SEO + Google Business Agency

**Applies to:** every production cutover (all product types 1–5). The vertical templates' §11 Share strategy subsection decides **how prominent** sharing is per vertical — this doc encodes **what to ship and how to ship it**.

The user-facing distribution of a local-business site happens through five channels: **WhatsApp · Facebook · Instagram · X · Copy-paste link**. Each has a different audience, a different friction profile, and a different per-vertical leverage. This doc covers the share-button component (what we ship), the OG metadata (what gets unfurled when shared), and the Instagram embed pattern (when reasonable).

**Why this doc exists:** when a user shares a restaurant page on WhatsApp, the link should unfurl into a clean preview — restaurant name, photo, address, one-line description. When that preview is broken or absent, the share looks like spam and conversion drops 70%+. The cost of correct OG tags is 10 minutes; the cost of bad OG tags is invisible — friends don't click, owner never knows.

---

## Rules at a glance

- **Every production site ships OG + Twitter Card tags.** Non-negotiable. `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`, `twitter:card`, `twitter:image`. See §Open Graph + Twitter Cards.
- **OG image is a real photo, not a logo on white.** Logo-on-white is the AI-template tell of OG cards. Use a hero photo at 1200×630 with a small logo overlay.
- **OG image is < 300 KB.** WhatsApp, Facebook, X all have a hard fetch timeout — large images fail to unfurl silently.
- **Share buttons are consent-free.** They open a URL with the share intent — no third-party scripts, no tracking pixels, no Facebook SDK / Instagram SDK / X SDK. We never ship a Facebook Share Button that requires the FB SDK.
- **Copy-paste is always present.** Same prominence as the other share targets. It's the most-used share channel for service businesses (Berliners share restaurants by pasting the link into WhatsApp / Signal / iMessage groups, not via OS share sheet).
- **The Instagram channel is asymmetric** — IG drives **inbound** traffic to the site (via bio link), the site cannot drive shares **to** IG (IG has no shareable URL intent). The site's IG strategy is **embed + UTMs + a content cadence**, not "Share to Instagram."
- **Share events are tracked with the canonical `share_click` event** per `KPI.md` §Event naming convention — `share_target` parameter distinguishes channels.
- **Per-vertical leverage varies wildly** (per the plan §5 matrix): gastronomy / beauty / events / artisan are high-leverage (~30–40% of traffic share-driven); trades / health / pro-services are low-leverage (referral + GBP dominate). The component is the same; the prominence isn't.

---

## Table of contents

- Open Graph + Twitter Cards — what every site ships
- Share-button component — spec
- Per-channel share intents (URLs)
- Instagram — the asymmetric channel
- Per-vertical share strategy (pointer)
- Privacy + consent posture
- Pre-launch verification
- Cross-references

---

## Open Graph + Twitter Cards — what every site ships

Every page in production includes the following meta tags. Set them via the `metadata.ts` helper (Tier 2+) or inline in `BaseLayout.astro` (Tier 1).

### Required tags

```html
<!-- Page-specific -->
<meta property="og:title" content="[Page-specific title — usually same as <title>]" />
<meta property="og:description" content="[150-200 chars — same as meta description, written to entice click]" />
<meta property="og:image" content="https://[domain]/og/[page-slug].jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="[Alt text describing the image]" />
<meta property="og:url" content="https://[domain]/[page-path]" />
<meta property="og:type" content="website" />  <!-- or "article" for blog posts, "restaurant" for gastronomy if Schema.org-rich -->
<meta property="og:site_name" content="[Business name]" />
<meta property="og:locale" content="de_DE" />  <!-- or pt_BR / pt_PT / en_US per page locale -->

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[same as og:title]" />
<meta name="twitter:description" content="[same as og:description]" />
<meta name="twitter:image" content="https://[domain]/og/[page-slug].jpg" />
<meta name="twitter:image:alt" content="[Alt text]" />
<!-- Optional: -->
<meta name="twitter:site" content="@[business-handle]" />
```

### OG image generation

| Approach | When to use | Effort |
|---|---|---|
| **Hand-crafted per page** (Figma export, single image per important page) | Single landing page, or top 3-5 pages | 30 min × pages |
| **Page-specific OG image** (homepage = hero photo, services pages = service photo) | Multi-page sites with strong per-page imagery | 1-2 hrs setup |
| **Dynamic OG image** (`/og/[slug].jpg` generated on the fly via Vercel OG / `@vercel/og`) | Tier 2+ with > 10 pages; blog posts | 2-3 hrs setup, scales free |
| **Single default OG image** (one image used everywhere) | Acceptable for Type 1 single-page; weak for multi-page | 15 min |

#### Dynamic OG image with `@vercel/og` (Tier 2 Astro example)

```typescript
// src/pages/og/[slug].png.ts (Astro endpoint)
import { ImageResponse } from '@vercel/og';
import { getEntry } from 'astro:content';

export async function GET({ params }: { params: { slug: string } }) {
  const page = await getEntry('pages', params.slug);

  return new ImageResponse(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: '#fafaf5',
          padding: '60px',
        },
        children: [
          { type: 'h1', props: { style: { fontSize: '64px', color: '#1a1a1a' }, children: page.data.title } },
          { type: 'p', props: { style: { fontSize: '32px', color: '#6b6b6b' }, children: page.data.description } },
          { type: 'div', props: { style: { marginTop: 'auto', fontSize: '24px' }, children: '[business-name]' } },
        ],
      },
    },
    { width: 1200, height: 630 }
  );
}
```

### Image size + format

- **Dimensions:** 1200×630 (1.91:1 ratio — the WhatsApp / Facebook / X consensus)
- **Format:** JPG preferred (WhatsApp's preview cache prefers JPG over PNG; smaller payload too)
- **Quality:** 75-80
- **File size:** < 300 KB — hard ceiling

### Validation

Use these to confirm OG tags work in the wild:

| Tool | URL | What it checks |
|---|---|---|
| **Meta Sharing Debugger** | https://developers.facebook.com/tools/debug/ | Facebook + WhatsApp (they share the cache) |
| **X Card Validator** | https://cards-dev.twitter.com/validator (legacy) — or post the URL in a private draft to preview | X-specific rendering |
| **LinkedIn Post Inspector** | https://www.linkedin.com/post-inspector/ | LinkedIn (some agency-side prospect outreach happens here) |
| **opengraph.xyz** | https://www.opengraph.xyz | Aggregated multi-platform preview, free |

**Critical:** after launching, **re-scrape the URL** in the Meta debugger to bust the WhatsApp/FB cache. WhatsApp caches the OG image for ~30 days; if you launch with broken OG and fix it later, the broken preview keeps appearing in WhatsApp until you force a re-scrape.

---

## Share-button component — spec

The `<ShareButton>` component is a thin, JS-light client-side component that opens the native share URL for the chosen target. No third-party SDK. No tracking pixel. No consent gate (the button itself drops no cookies — only the user's chosen target might).

### Component contract

```typescript
// src/components/ShareButton.astro (Tier 2 Astro)
// Props:
interface Props {
  url: string;          // canonical URL of the page being shared (typically the current page)
  title: string;        // page title (used in share intent text)
  source: string;       // analytics source_section: 'hero' | 'sticky_cta' | 'footer' | 'inline'
  targets?: Array<'whatsapp' | 'facebook' | 'twitter' | 'instagram' | 'copy_link'>;
  // Default targets: all 5
}
```

The component renders 5 icon-buttons by default (or the subset specified in `targets`). Each fires the canonical `share_click` event with `share_target` + `source_page` + `source_section` parameters per `KPI.md` §Event naming convention.

### Visual + accessibility requirements

- **Tap target ≥ 44×44px** per `ACCESSIBILITY.md`
- **`aria-label`** on every icon button (`aria-label="Compartilhar no WhatsApp"`, etc. — localize per page locale)
- **Visible label on hover** (tooltip / tooltip-like text)
- **Icons are SVGs**, not webfonts. Inline SVG for performance; one SVG per channel.
- **No brand-color enforcement.** Use the agency client's accent color, not WhatsApp green / Facebook blue. The site's brand stays consistent; the icons indicate channel.
- **Copy-link icon shows a confirmation** ("Copied!") for 1.5s after activation — see §Copy-link recipe.

### Component skeleton (Astro example)

```astro
---
// src/components/ShareButton.astro
interface Props {
  url: string;
  title: string;
  source: string;
  targets?: Array<'whatsapp' | 'facebook' | 'twitter' | 'instagram' | 'copy_link'>;
}

const { url, title, source, targets = ['whatsapp', 'facebook', 'twitter', 'instagram', 'copy_link'] } = Astro.props;
const encUrl = encodeURIComponent(url);
const encTitle = encodeURIComponent(title);
---

<div class="flex gap-2 items-center" data-share-source={source} data-share-url={url}>
  {targets.includes('whatsapp') && (
    <a href={`https://wa.me/?text=${encTitle}%20${encUrl}`}
       target="_blank" rel="noopener"
       class="share-btn"
       aria-label="Compartilhar no WhatsApp"
       data-target="whatsapp">
      <!-- WhatsApp SVG inline -->
    </a>
  )}

  {targets.includes('facebook') && (
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encUrl}`}
       target="_blank" rel="noopener"
       class="share-btn"
       aria-label="Compartilhar no Facebook"
       data-target="facebook">
      <!-- Facebook SVG inline -->
    </a>
  )}

  {targets.includes('twitter') && (
    <a href={`https://x.com/intent/post?text=${encTitle}&url=${encUrl}`}
       target="_blank" rel="noopener"
       class="share-btn"
       aria-label="Compartilhar no X"
       data-target="twitter">
      <!-- X SVG inline -->
    </a>
  )}

  {targets.includes('instagram') && (
    <!-- IG has no share URL intent — render as "Copy link for Instagram" or omit -->
    <button class="share-btn"
            aria-label="Copiar link para Instagram"
            data-target="instagram"
            data-copy-link={url}>
      <!-- Instagram SVG inline -->
    </button>
  )}

  {targets.includes('copy_link') && (
    <button class="share-btn"
            aria-label="Copiar link"
            data-target="copy_link"
            data-copy-link={url}>
      <!-- Copy link SVG inline -->
    </button>
  )}
</div>

<script>
  document.querySelectorAll('[data-share-source]').forEach((container) => {
    const source = container.getAttribute('data-share-source');
    const url = container.getAttribute('data-share-url');

    container.querySelectorAll('[data-target]').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const target = btn.getAttribute('data-target');

        // Copy-to-clipboard for copy_link + instagram
        if (target === 'copy_link' || target === 'instagram') {
          e.preventDefault();
          await navigator.clipboard.writeText(url);
          const original = btn.innerHTML;
          btn.innerHTML = '<span>Copied!</span>';
          setTimeout(() => { btn.innerHTML = original; }, 1500);
        }

        // Fire canonical analytics event
        if (window.track) {
          window.track('share_click', {
            share_target: target,
            source_section: source,
            source_page: window.location.pathname,
          });
        }
      });
    });
  });
</script>
```

### Locale-aware aria-labels

Per `I18N.md`. The aria-label, the "Copied!" confirmation, and the share-intent text are all localized:

| Locale | "Share on WhatsApp" | "Copy link" | "Copied!" |
|---|---|---|---|
| `de` | "Auf WhatsApp teilen" | "Link kopieren" | "Kopiert!" |
| `en` | "Share on WhatsApp" | "Copy link" | "Copied!" |
| `pt-BR` | "Compartilhar no WhatsApp" | "Copiar link" | "Copiado!" |
| `pt-PT` | "Partilhar no WhatsApp" | "Copiar ligação" | "Copiado!" |

---

## Per-channel share intents (URLs)

The exact URL format for each channel's share intent. Use these verbatim — every channel changes its URL format every few years, and broken share intents fail silently.

| Channel | Share-intent URL (use `encodeURIComponent` on dynamic parts) |
|---|---|
| **WhatsApp** | `https://wa.me/?text=[encoded title]%20[encoded url]` |
| **Facebook** | `https://www.facebook.com/sharer/sharer.php?u=[encoded url]` |
| **X (Twitter)** | `https://x.com/intent/post?text=[encoded title]&url=[encoded url]` |
| **LinkedIn** (optional) | `https://www.linkedin.com/sharing/share-offsite/?url=[encoded url]` |
| **Email** (optional) | `mailto:?subject=[encoded title]&body=[encoded title]%20[encoded url]` |
| **Telegram** (optional, BR community) | `https://t.me/share/url?url=[encoded url]&text=[encoded title]` |
| **Instagram** | **No share URL.** Use copy-link fallback (see below). |
| **Copy link** | `navigator.clipboard.writeText([url])` — no URL, JS-only |

### WhatsApp deep-link nuance

`https://wa.me/?text=...` opens WhatsApp with the share intent and lets the user pick a contact. If the page is also a WhatsApp CTA target (Type 2+ contact via WhatsApp), the URL format differs:

- **WhatsApp share intent** (let user pick recipient): `https://wa.me/?text=[message]` — no phone number
- **WhatsApp CTA** (open chat with the business): `https://wa.me/[full international phone number]?text=[message]`

The agency convention: `<ShareButton>` always uses the share intent (no phone); the business-contact `<WhatsAppButton>` uses the full number. Two different components, same domain.

### Instagram — no share URL fallback

Instagram does not expose a `share` URL intent (as of 2026). The user CAN:

1. Tap "Copy link for Instagram" (which the `<ShareButton>` component renders as a copy-paste with an Instagram-icon label)
2. Open Instagram, paste the link as a story / DM / bio

Agency convention: don't omit Instagram from the share button row — render an Instagram-icon button that copies the link. The user knows what to do with it.

---

## Instagram — the asymmetric channel

Instagram is **inbound** for local-business sites: IG drives traffic to the site via the bio link. The site cannot drive shares back to IG. This means the IG "strategy" for a site is three things:

1. **Bio-link UTMs** — every IG bio link uses `?utm_source=instagram&utm_medium=bio_link&utm_campaign=[campaign-slug]`. This lets GA4 attribute traffic correctly.
2. **Optional IG embed** on the site — for IG-heavy verticals (florists, gastronomy, beauty, events, artisan, photographers), embed a single IG post in the Gallery / Sobre / Contato section to signal "follow us here for daily content."
3. **Content cadence in the BRIEF.md retainer** — agency retainer for IG-heavy clients includes "1 post per week from the site's gallery / news content" as a deliverable. The site supplies the photo + caption; the client posts from their account.

### IG bio-link UTM convention

Every IG bio link uses the agency canonical UTM:

```
https://[domain]/?utm_source=instagram&utm_medium=bio_link&utm_campaign=profile
```

For per-campaign IG link rotations (e.g., "winter menu launch"):

```
https://[domain]/menu?utm_source=instagram&utm_medium=bio_link&utm_campaign=winter_menu_2026
```

GA4 + PostHog will then show the IG-driven session count cleanly. The `KPI.md` IG-driven-traffic KPI sources from this.

### Optional: IG embed pattern

When the per-vertical template recommends an IG embed (Gallery section for IG-heavy verticals), the recipe:

#### Native IG embed (lazy-loaded, consent-aware)

```html
<!-- DO NOT use the official Instagram embed script directly — it loads a heavy SDK -->
<!-- Instead, use a lazy-loaded blockquote that ONLY loads the SDK on user opt-in -->

<blockquote class="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/[post-id]/"
            data-instgrm-captioned
            style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width: 540px; min-width: 326px; padding: 0;">
  <a href="https://www.instagram.com/p/[post-id]/" target="_blank" rel="noopener">
    View post on Instagram
  </a>
</blockquote>

<script type="text/plain"
        data-cookie-category="functional"
        data-src="//www.instagram.com/embed.js"
        async></script>
```

Per `LEGAL.md` §Cookie consent banner — universal spec, the script is `type="text/plain"` until the user grants consent in the "Functional" category. Pre-consent, the user sees a plain `<a>` link to Instagram (degrades gracefully).

#### Cheaper alternative — screenshot + link

For most agency clients, a **screenshot of the IG post + a link to the live post** is preferred:

- Zero third-party scripts → no consent issue
- Faster page load
- No risk of IG embed breaking on a future IG SDK update
- Identical conversion (user clicks link, opens IG)

Agency default: screenshot-and-link unless the client specifically wants the live embed.

---

## Per-vertical share strategy (pointer)

Per-vertical leverage varies wildly (per the plan §Per-vertical layer relevance matrix). Each vertical template's **§11.7 Share strategy** subsection covers:

| Vertical | Share leverage | Default targets | IG embed recommended? |
|---|---|---|---|
| Gastronomy | Very high | WhatsApp + IG + Copy-paste + Facebook | ✅ Yes (food photos drive shares) |
| Beauty | Very high | WhatsApp + IG + Copy-paste + Facebook | ✅ Yes (before/after, real client work) |
| Trades | Low | WhatsApp + Copy-paste (only) | ❌ No (B2C trade work doesn't share well on IG) |
| Health | Low | Copy-paste only (no public sharing — PII context) | ❌ No |
| Studio | High | WhatsApp + IG + Copy-paste | ✅ Yes (class atmosphere, transformation) |
| Pro Services | Low | Copy-paste + LinkedIn (B2B-adjacent) | ❌ No (confidentiality) |
| Pets | Medium | WhatsApp + IG + Copy-paste | ✅ Yes (real pets) |
| Automotive | Low | WhatsApp + Copy-paste | ❌ No |
| Education | Medium | WhatsApp + Copy-paste + Facebook (parents) | ❌ No (minors caution) |
| Events | Very high | WhatsApp + IG + Copy-paste + Facebook + Pinterest | ✅ Yes (portfolio shares) |
| Home & Garden | High (florists especially) | WhatsApp + IG + Copy-paste | ✅ Yes (florists / plants) |
| Artisan | High | WhatsApp + IG + Copy-paste | ✅ Yes (maker, materials, process) |

The per-vertical §11.7 subsection (Batch 3 work) elaborates: what to share, when to share, what the share-button placement should be.

---

## Privacy + consent posture

The share-button component itself is consent-free — clicking it opens a URL with a share intent. No third-party scripts fire; no cookies drop. The user is then in WhatsApp / Facebook / X — those platforms' privacy postures are out of scope.

**Where consent enters the picture:**

| Surface | Consent required? |
|---|---|
| Share button itself (click → open URL) | ❌ No — no cookies, no scripts |
| `share_click` analytics event | ✅ Yes — fires through the consent-gated analytics stack (`KPI.md` + `LEGAL.md`) |
| Instagram embed (live, with SDK) | ✅ Yes — `type="text/plain"` script-blocking pattern, Functional category |
| Instagram screenshot + link (agency default) | ❌ No |
| OG image / OG tags | ❌ No — server-rendered HTML, no cookies |

### Data-processor disclosure (Privacy Policy)

The share button itself does not require a Privacy Policy entry (no third-party scripts run on the agency site). However:

- If the IG live embed is enabled → add Instagram as a data processor under "Who we share with" (per `LEGAL.md` §Privacy Policy — common cross-jurisdiction structure)
- The `share_click` analytics event routes through the existing analytics stack — already disclosed via the GA4 / PostHog / Clarity entries
- Linking out to social platforms is **not** sharing — the user makes that decision

---

## Pre-launch verification

(Captured in `CHECKLIST.md` §Operational tests under "Social + sharing tests"; mirrored here for completeness.)

- [ ] OG tags present on every indexed page — `<meta property="og:*">` set via `metadata.ts` or `BaseLayout.astro`
- [ ] OG image < 300 KB and 1200×630 (or aspect ratio close enough)
- [ ] OG image is a real photo (not a logo on white background)
- [ ] OG image alt text set
- [ ] Twitter Card tags present (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- [ ] Meta Sharing Debugger ([developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)) re-scraped the production URL (clears WhatsApp/FB cache)
- [ ] X Card preview renders correctly when URL pasted into X compose
- [ ] WhatsApp share renders preview (test by pasting URL into WhatsApp Web compose)
- [ ] Share-button component renders 5 targets per vertical default (or matching template §11.7 set)
- [ ] Each share-button click opens the correct intent URL
- [ ] `share_click` event fires with `share_target` + `source_page` + `source_section` parameters
- [ ] Copy-link button shows "Copied!" confirmation
- [ ] Locale-correct aria-labels in every locale shipped
- [ ] Instagram embed (if any) is the consent-gated `type="text/plain"` pattern, OR a screenshot+link substitute
- [ ] IG bio-link UTMs set per the canonical convention (`?utm_source=instagram&utm_medium=bio_link&utm_campaign=...`)
- [ ] Run `CHECKLIST.md` §Operational tests for cookie banner + KPI wiring (share_click is in the canonical events list)

---

## Cross-references

- `LEGAL.md` §Cookie consent banner — universal spec — script-blocking pattern for IG embed
- `LEGAL.md` §Privacy Policy — adds Instagram processor entry when live embed is used
- `KPI.md` §Event naming convention — canonical `share_click` event
- `KPI.md` §Required event parameters — `source_page`, `source_section` for share-button placement analysis
- `ANALYTICS.md` §Stack selection per tier — analytics tools that receive the `share_click` event
- `I18N.md` — locale-aware aria-labels and share-intent text
- `ACCESSIBILITY.md` — tap-target sizing for share buttons
- `PERFORMANCE.md` — OG image weight (< 300 KB rule)
- `TECH.md` §Per-client project structure — where the `ShareButton` component lives in the agency-canonical layout
- Per-vertical templates (§11.7 Share strategy — added in Batch 3 work)
