# Runbook — auditing sites that block the headless MCP browser

**When to use this runbook**

The MCP Docker Playwright browser is launched as headless Chromium. Some sites detect this and block. The audit work in `ui-ux-reference-study.md` and follow-on additions cannot use the MCP browser for these sites. This runbook is the agency's fallback workflow for measuring them manually.

**Symptoms that mean the MCP browser is blocked:**

| Site behavior | Likely cause |
|---|---|
| Page title stays `"Just a moment…"` after 15-30 s wait | Cloudflare Bot Fight Mode or Turnstile challenge |
| `net::ERR_HTTP2_PROTOCOL_ERROR` on navigation | HTTP/2 fingerprinting against headless Chrome's TLS handshake |
| `403 Forbidden` immediately on navigation | Akamai or PerimeterX bot rule |
| Empty `<body>` after page-load, no console errors | JavaScript challenge that requires real-browser execution |

If the MCP browser hits any of the above three times in a row (with at least one 15 s wait), stop. Switch to this runbook.

**Known-blocked sites encountered to date:**

| Site | Date observed | Block type |
|---|---|---|
| `hba.com` | 2026-05-18 | Cloudflare "Just a moment…" challenge |
| `eclettica.bulgari.com` | 2026-05-18 | HTTP/2 fingerprinting (`ERR_HTTP2_PROTOCOL_ERROR`) |

---

## The manual workflow

### Step 1 — Open the site in real Chrome

Use a regular browser session, not headless. Cloudflare and most fingerprint walls let a human pass on the first interaction. If the site shows a "Verify you're human" checkbox, click it.

### Step 2 — Wait for the page to render fully

Scroll once from top to bottom so any lazy-loaded images, fonts, and below-fold sections initialize. Wait ~5 s after the bottom of the page before inspecting.

### Step 3 — Open DevTools and paste the inspector script

`Cmd+Option+I` (macOS) or `F12` (Windows/Linux) → Console tab. Paste this script and press Enter:

```js
(() => {
  const cs = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return { selector: sel, found: false };
    const c = getComputedStyle(el);
    return {
      selector: sel,
      text: (el.innerText || '').slice(0, 100),
      fontFamily: c.fontFamily,
      fontSize: c.fontSize,
      fontWeight: c.fontWeight,
      lineHeight: c.lineHeight,
      letterSpacing: c.letterSpacing,
      color: c.color,
      backgroundColor: c.backgroundColor,
      textTransform: c.textTransform,
      borderRadius: c.borderRadius
    };
  };
  const ctas = Array.from(document.querySelectorAll('a, button'))
    .filter(a => { const t = (a.innerText || '').trim(); return t.length > 2 && t.length < 50; })
    .slice(0, 8)
    .map(a => {
      const c = getComputedStyle(a);
      return {
        text: a.innerText.trim().slice(0, 40),
        bg: c.backgroundColor,
        color: c.color,
        borderRadius: c.borderRadius,
        padding: c.padding,
        fontSize: c.fontSize,
        fontWeight: c.fontWeight,
        textTransform: c.textTransform,
        letterSpacing: c.letterSpacing
      };
    });
  return JSON.stringify({
    title: document.title,
    lang: document.documentElement.lang,
    bodyBg: getComputedStyle(document.body).backgroundColor,
    body: cs('body'),
    nav: cs('nav, header'),
    h1: cs('h1'),
    h2: cs('h2'),
    h3: cs('h3'),
    p: cs('p'),
    fontFaces: Array.from(document.fonts).filter(f => f.status === 'loaded').map(f => ({ family: f.family, weight: f.weight, style: f.style })),
    videoCount: document.querySelectorAll('video').length,
    sectionCount: document.querySelectorAll('section').length,
    h1Text: (document.querySelector('h1') || {}).innerText,
    h2Texts: Array.from(document.querySelectorAll('h2')).slice(0, 8).map(h => h.innerText.slice(0, 80)),
    ctas,
    hasGsap: !!window.gsap,
    hasFramer: !!window.Framer,
    hasThree: !!window.THREE,
    hasCanvas: !!document.querySelector('canvas'),
    pageHeight: document.documentElement.scrollHeight,
    viewport: { w: window.innerWidth, h: window.innerHeight }
  }, null, 2);
})()
```

The console returns a JSON string. Right-click → "Copy string contents."

### Step 4 — Resize the window and re-run for mobile

Resize the browser to ~375 × 667 (or open DevTools' device emulator → iPhone SE), reload, and re-run the script. The mobile read goes into a `### Mobile (375)` block in the entry.

### Step 5 — Paste into the study entry

Open `docs/audit/ui-ux-reference-study.md`. Find the existing placeholder entry for the site. Replace the `> ⚠️ Inspection blocked` block with the actual entry, structured the same as the unblocked entries in the study (Typography table, Color & body, CTAs, Layout & motion, What to steal, Caveats).

Mark the entry footer: *Measured manually 2026-MM-DD per `RUNBOOK-real-browser-audit.md` — MCP browser blocked at the time.*

### Step 6 — Update the amendment log

Add a row to the amendment log at the top of `ui-ux-reference-study.md`:

```md
| 2026-MM-DD | Phase 1c manual completion | `hba.com` and `eclettica.bulgari.com` measured manually per RUNBOOK; placeholder entries replaced |
```

---

## When to *not* use this runbook

Don't bypass the MCP browser block for every site. The runbook is for sites the agency considers high-value reference material (luxury brands, fashion labels, top-juried award winners). For low-relevance sites that block, simply skip them and note the block in the entry footer — the agency's typical clients are small Berlin businesses, not Bulgari, and the audit value of an unmeasured luxury brand is marginal.

Decision rule: **manually unblock if and only if the site is one of the 8 templates' canonical reference set** (i.e., it would land in a vertical template's §9 if measured). Otherwise, log the block and move on.

---

## Maintenance

- **Add new known-blocked sites** to the table above whenever a fresh audit hits a block. The growing list helps the next session decide quickly whether to retry the MCP browser or jump straight to manual.
- **Re-test annually:** bot-mitigation rules change. A site blocked in 2026 may be MCP-accessible in 2027.

*Runbook authored 2026-05-19 as part of UI-UX-INTEGRATION-PLAN Phase 4 (executed early due to Phase 1c blocking outcome).*
