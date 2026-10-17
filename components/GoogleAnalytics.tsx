'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID, trackLead } from '@/lib/analytics';

export function GoogleAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0 || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('mailto:')) return trackLead('email');
      if (href.startsWith('tel:')) return trackLead('phone');

      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin && url.pathname.replace(/\/$/, '') === '/connect') {
          trackLead('form');
        }
      } catch {
        // Ignore non-URL links without changing navigation.
      }
    };

    // Capture runs before Next Link handles navigation; no default action changes.
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return (
    <>
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            allow_google_signals: false,
            allow_ad_personalization_signals: false
          });
        `}
      </Script>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
