# Benchmark — icreateyoursite.com

Content captured from **https://icreateyoursite.com** on **2026-06-04** via the Docker MCP browser (Playwright). One markdown file per page, capturing the page `<title>`, meta description, and the rendered body copy (headings preserved, navigation/footer chrome stripped where possible).

**Who they are:** iCreate Your Site LLC — a Miami-based web design company (founded 2015, founder Enmanuel Diaz). Sells fully-managed custom websites, SEO, AI solutions, 1-on-1 help, and enterprise builds. Multilingual team (EN/ES/PT/DE). 1,000+ sites claimed, 5-star Google rated. A direct point-of-comparison competitor to this agency.

## Analysis & what we did with it

→ **[`_analysis.md`](_analysis.md)** — competitive analysis (their model vs ours) + the impact-ranked inbound-funnel sprint plan (`F1`–`F9`). **F1–F8 were built on the agency's own site `clients/agency-breno-bar/` on 2026-06-04** (F9 deferred); see the "Implementation status" banner there, and `docs/audit/private/PENDING.md` for live backlog status.

## Scope

**Captured: 21 core pages** (marketing, service, location, founder, and policy pages). The ~75 individual blog articles in the sitemap were intentionally excluded per the agreed scope — the blog landscape is listed on `sitemap.md` (their own on-site sitemap page) for reference.

## Pages

### Core / company
| File | Page | URL |
|------|------|-----|
| [home.md](home.md) | Homepage | https://icreateyoursite.com/ |
| [about.md](about.md) | About Us / team | https://icreateyoursite.com/about/ |
| [founder.md](founder.md) | Founder — Enmanuel Diaz | https://icreateyoursite.com/website-design-company-miami/enmanuel-diaz-founder-of-icreate-your-site-llc/ |
| [services.md](services.md) | Services overview | https://icreateyoursite.com/services/ |
| [pricing.md](pricing.md) | Pricing (plans) | https://icreateyoursite.com/pricing/ |
| [portfolio.md](portfolio.md) | Portfolio gallery | https://icreateyoursite.com/portfolio/ |
| [case-studies.md](case-studies.md) | Case studies | https://icreateyoursite.com/case-studies/ |
| [contact.md](contact.md) | Contact | https://icreateyoursite.com/contact/ |
| [get-started.md](get-started.md) | Get Started | https://icreateyoursite.com/get-started/ |

### Service pages
| File | Page | URL |
|------|------|-----|
| [websites.md](websites.md) | Website Design | https://icreateyoursite.com/websites/ |
| [seo.md](seo.md) | SEO | https://icreateyoursite.com/seo/ |
| [ai.md](ai.md) | Free Website Prompt Generator (AI tool) | https://icreateyoursite.com/ai/ |
| [ai-services.md](ai-services.md) | AI Services | https://icreateyoursite.com/ai-services/ |
| [1-on-1-website-help.md](1-on-1-website-help.md) | 1-on-1 Website Help | https://icreateyoursite.com/1-on-1-website-help/ |
| [enterprise.md](enterprise.md) | Enterprise | https://icreateyoursite.com/enterprise/ |

### Location / vertical landing pages
| File | Page | URL |
|------|------|-----|
| [miami-web-design.md](miami-web-design.md) | Miami Web Design | https://icreateyoursite.com/miami-web-design/ |
| [hialeah-web-design.md](hialeah-web-design.md) | Hialeah Web Design | https://icreateyoursite.com/hialeah-web-design/ |
| [marietta-web-design.md](marietta-web-design.md) | Marietta GA Web Design | https://icreateyoursite.com/marietta-web-design/ |
| [attorney-website-design-miami.md](attorney-website-design-miami.md) | Attorney Website Design Miami | https://icreateyoursite.com/attorney-website-design-miami/ |

### Policy / utility
| File | Page | URL |
|------|------|-----|
| [refund-policy.md](refund-policy.md) | Refund Policy | https://icreateyoursite.com/refund-policy/ |
| [sitemap.md](sitemap.md) | On-site Sitemap (lists their blog) | https://icreateyoursite.com/sitemap/ |

## Capture method

- Site is server-rendered (WordPress-style HTML); content lives in the raw HTML, no JS execution needed to read it.
- For each page: `fetch()` the URL inside the live browser context, parse with `DOMParser`, walk the `<main>` (fallback `<body>`) emitting markdown headings (`#`–`######`), paragraphs, list items, and blockquotes. Consecutive duplicate lines collapsed.
- Some inline UI labels (button text like "Get Started →", star-rating glyphs, form field labels) are preserved as plain lines since they carry copy/positioning signal for a benchmark.
