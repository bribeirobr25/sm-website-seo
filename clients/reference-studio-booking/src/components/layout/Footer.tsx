'use client';

import Link from 'next/link';
import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';

/**
 * Footer with DSGVO Impressum + Datenschutz links + manage-cookies trigger.
 * Re-open of cookie banner is fired via a custom event picked up by CookieBanner.
 * Per LEGAL.md §Cookie consent banner — manage-preferences re-open.
 */

export function Footer() {
  function openCookiePrefs() {
    window.dispatchEvent(new Event('consent:reopen'));
  }

  function handlePhone() {
    track(EVENTS.PHONE_CLICK, { source_section: 'footer' });
  }
  function handleEmail() {
    track(EVENTS.EMAIL_CLICK, { source_section: 'footer' });
  }

  return (
    <footer className="bg-surface-elev border-t border-border mt-12">
      <div className="container-page py-12 md:py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-text">{SITE.name}</p>
          <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-md">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-text-muted">
            {SITE.address.street}
            <br />
            {SITE.address.postalCode} {SITE.address.city}
          </p>
          <p className="mt-4 text-sm">
            <a
              href={`tel:${SITE.phone}`}
              onClick={handlePhone}
              className="text-text hover:text-accent transition-colors"
            >
              {SITE.phoneDisplay}
            </a>
            <span className="mx-2 text-text-muted">·</span>
            <a
              href={`mailto:${SITE.email}`}
              onClick={handleEmail}
              className="text-text hover:text-accent transition-colors"
            >
              {SITE.email}
            </a>
          </p>
        </div>

        <div>
          <p className="font-display text-base text-text mb-3">Studio</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/kurse" className="text-text-muted hover:text-accent transition-colors">
                Kurse
              </Link>
            </li>
            <li>
              <Link href="/stundenplan" className="text-text-muted hover:text-accent transition-colors">
                Stundenplan
              </Link>
            </li>
            <li>
              <Link href="/trial" className="text-text-muted hover:text-accent transition-colors">
                Probestunde
              </Link>
            </li>
            {SITE.social.instagram && (
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="font-display text-base text-text mb-3">Rechtliches</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/impressum" className="text-text-muted hover:text-accent transition-colors">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="text-text-muted hover:text-accent transition-colors">
                Datenschutzerklärung
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={openCookiePrefs}
                className="text-text-muted hover:text-accent transition-colors text-left underline-offset-2 hover:underline"
              >
                Cookie-Einstellungen ändern
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-text-muted">
          <p>
            Inhaberin: {SITE.legal.legalName} · USt-IdNr.: {SITE.legal.ustIdNr}
          </p>
          <p>
            © {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
