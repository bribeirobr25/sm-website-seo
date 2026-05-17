import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';
import { yogaStudioSchema } from '@/lib/seo/schema';
import { ConsentBootstrap } from '@/components/ui/ConsentBootstrap';
import { CookieBanner } from '@/components/ui/CookieBanner';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
  // Demo phase: noindex defaults to true via robots
  robots: { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE.url,
    title: SITE.name,
    description: SITE.tagline,
    siteName: SITE.name,
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.tagline,
    images: ['/og-default.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = JSON.stringify(yogaStudioSchema());

  return (
    <html lang={SITE.locale}>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires this */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />

        {/*
          Analytics tags — consent-gated via type="text/plain" pattern.
          The CookieBanner script upgrades these to live scripts on consent.
        */}
        <script
          type="text/plain"
          data-cookie-category="analytics"
          data-src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
          async
        />
        <script
          type="text/plain"
          data-cookie-category="analytics"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: inline gtag init
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function () { window.dataLayer.push(arguments); };
              window.gtag('js', new Date());
              window.gtag('config', 'G-XXXXXX', {
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false,
              });
            `,
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:z-50"
        >
          Zum Inhalt springen
        </a>
        {children}
        <ConsentBootstrap />
        <CookieBanner />
      </body>
    </html>
  );
}
