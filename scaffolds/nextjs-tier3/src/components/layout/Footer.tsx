/**
 * Content-neutral Footer — scaffold default.
 * Replace per client identity + per-jurisdiction legal disclosure
 * (Impressum + Datenschutz for DE; Privacy + Razão Social for BR;
 * Privacy + NIF/CAE for PT; Privacy + Your Privacy Choices for US).
 * See `docs/design/_impl/components/Footer.tsx` for the canonical
 * Tier-3 DE-DSGVO worked example.
 */

import Link from 'next/link';
import type { Route } from 'next';
import { SITE } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg mt-16">
      <div className="container-page py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <p className="font-display text-lg text-text">{SITE.name}</p>
            <p className="text-sm text-text-muted leading-relaxed">{SITE.tagline}</p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="uppercase tracking-wider text-text-muted text-xs">Contact</p>
            <p>
              <a
                href={`tel:${SITE.phone}`}
                className="text-text hover:text-accent transition-colors tabular"
                data-event="phone_click"
                data-source-section="footer"
              >
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="text-text hover:text-accent transition-colors"
              >
                {SITE.email}
              </a>
            </p>
            <p className="text-text-muted">
              {SITE.address.street}, {SITE.address.city}
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="uppercase tracking-wider text-text-muted text-xs">Legal</p>
            {/* TODO: add per-jurisdiction legal links per docs/design/LEGAL.md mapping */}
            <p>
              <Link
                href={'/privacy-policy' as Route}
                className="text-text-muted hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-xs text-text-muted">
          © {currentYear} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
