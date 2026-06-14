import * as Sentry from '@sentry/astro';
/**
 * Website-scan endpoint (F3b), POST /api/site-scan  { url }
 *
 * Returns PageSpeed (Google PSI) category scores plus a light server-side check
 * of HTTPS, security headers (per SECURITY.md), and obvious pre-consent trackers
 * (a GDPR hint, NOT legal advice).
 *
 * Graceful degradation: PSI works keyless at low quota; set PAGESPEED_API_KEY
 * for headroom. If PSI is unreachable we still return the header/tracker checks
 * so the tool is never fully dead. No URL is persisted.
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const RATE_LIMIT_MS = 15_000;
const recent = new Map<string, number>();

const SECURITY_HEADERS = [
  'strict-transport-security',
  'content-security-policy',
  'x-content-type-options',
  'x-frame-options',
  'referrer-policy',
  'permissions-policy',
];

const TRACKER_SIGNATURES = [
  'googletagmanager.com',
  'google-analytics.com',
  'connect.facebook.net',
  'hotjar.com',
  'clarity.ms',
];

function clientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = clientIp(request);
    const now = Date.now();
    if (now - (recent.get(ip) ?? 0) < RATE_LIMIT_MS) {
      return json({ error: 'Too many requests. Please wait a moment.' }, 429);
    }

    let body: { url?: string };
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid request body.' }, 400);
    }

    const raw = String(body.url ?? '').trim();
    let target: URL;
    try {
      target = new URL(raw);
    } catch {
      return json({ error: 'A valid URL (https://…) is required.' }, 400);
    }
    if (target.protocol !== 'https:' && target.protocol !== 'http:') {
      return json({ error: 'Only http/https URLs are supported.' }, 400);
    }
    if (raw.length > 2048) {
      return json({ error: 'URL is too long.' }, 400);
    }

    recent.set(ip, now);

    // --- Google PSI (PageSpeed) ---
    const key = import.meta.env.PAGESPEED_API_KEY;
    const psiUrl = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
    psiUrl.searchParams.set('url', target.toString());
    psiUrl.searchParams.set('strategy', 'mobile');
    for (const c of ['performance', 'seo', 'accessibility', 'best-practices']) {
      psiUrl.searchParams.append('category', c);
    }
    if (key) psiUrl.searchParams.set('key', key);

    const scores: Record<string, number | null> = {
      performance: null,
      seo: null,
      accessibility: null,
      bestPractices: null,
    };
    let psiOk = false;
    try {
      const psiRes = await fetch(psiUrl.toString(), { signal: AbortSignal.timeout(55_000) });
      if (psiRes.ok) {
        const data = await psiRes.json();
        const cats = data?.lighthouseResult?.categories ?? {};
        const pct = (v: unknown) => (typeof v === 'number' ? Math.round(v * 100) : null);
        scores.performance = pct(cats.performance?.score);
        scores.seo = pct(cats.seo?.score);
        scores.accessibility = pct(cats.accessibility?.score);
        scores.bestPractices = pct(cats['best-practices']?.score);
        psiOk = true;
      }
    } catch {
      // PSI unreachable, fall through with header/tracker checks only.
    }

    // --- Server-side header + tracker check ---
    let https = target.protocol === 'https:';
    const missingHeaders: string[] = [...SECURITY_HEADERS];
    const trackers: string[] = [];
    try {
      const pageRes = await fetch(target.toString(), {
        redirect: 'follow',
        signal: AbortSignal.timeout(15_000),
        headers: { 'User-Agent': 'baragency-site-scan/1.0 (+https://bar-agency.vercel.app)' },
      });
      https = pageRes.url.startsWith('https:');
      for (const h of SECURITY_HEADERS) {
        if (pageRes.headers.has(h)) {
          const idx = missingHeaders.indexOf(h);
          if (idx >= 0) missingHeaders.splice(idx, 1);
        }
      }
      const html = (await pageRes.text()).slice(0, 500_000);
      for (const sig of TRACKER_SIGNATURES) {
        if (html.includes(sig)) trackers.push(sig);
      }
    } catch {
      // Page fetch failed, return what PSI gave us, if anything.
      if (!psiOk) {
        return json({ error: 'Could not reach that site. Check the URL and try again.' }, 502);
      }
    }

    return json(
      {
        ok: true,
        psiOk,
        scores,
        https,
        securityHeaders: {
          present: SECURITY_HEADERS.length - missingHeaders.length,
          total: SECURITY_HEADERS.length,
          missing: missingHeaders,
        },
        trackers,
      },
      200,
    );
  } catch (err) {
    Sentry.captureException(err, { tags: { source: 'site-scan' } });
    return json({ error: 'Server error. Please try again.' }, 500);
  }
};
