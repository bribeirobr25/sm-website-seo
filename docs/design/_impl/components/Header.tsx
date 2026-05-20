'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';

const NAV_ITEMS = [
  { label: 'Kurse', href: '/kurse' },
  { label: 'Stundenplan', href: '/stundenplan' },
  { label: 'Probestunde', href: '/trial' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  function handleNavClick(label: string) {
    track(EVENTS.NAV_LINK_CLICK, { source_section: 'header', nav_label: label });
    setOpen(false);
  }

  function handleCtaClick() {
    track(EVENTS.CTA_CLICK, { source_section: 'header', cta_label: 'probestunde' });
  }

  return (
    <header className="sticky top-0 z-30 bg-bg/90 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl text-text hover:text-accent transition-colors"
          aria-label={`${SITE.name} — Startseite`}
        >
          {SITE.shortName}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Hauptnavigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleNavClick(item.label)}
              className="text-sm text-text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/trial"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center px-5 py-2.5 min-h-[44px] text-sm font-medium rounded-md bg-accent text-bg hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {SITE.trial.label}
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-text hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation mobil"
          className="md:hidden border-t border-border bg-surface"
        >
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.label)}
                className="py-3 px-2 text-text hover:text-accent hover:bg-bg rounded transition-colors min-h-[44px] flex items-center"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/trial"
              onClick={handleCtaClick}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 min-h-[48px] text-base font-medium rounded-md bg-accent text-bg hover:bg-accent-deep transition-colors"
            >
              {SITE.trial.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
