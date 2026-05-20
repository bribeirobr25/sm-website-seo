/**
 * Content-neutral Header — scaffold default.
 * Replace per client identity. See `docs/design/_impl/components/Header.tsx`
 * for the canonical worked example (studio-booking identity).
 */

import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Header() {
  return (
    <header className="border-b border-border bg-bg/95 sticky top-0 z-30 backdrop-blur-sm">
      <div className="container-page flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label={`${SITE.name} — back to home`}
        >
          <span className="font-display text-lg text-text group-hover:text-accent transition-colors">
            {SITE.name}
          </span>
        </Link>

        <a
          href={`tel:${SITE.phone}`}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors tabular focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm px-2 py-1"
          data-event="phone_click"
          data-source-section="header"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="hidden sm:inline">{SITE.phoneDisplay}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
