import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { meta } from '@/lib/content';

export const metadata: Metadata = {
  title: meta.connect,
  description: 'Schedule a free 20-minute consultation with Alexis Lyon or send a private inquiry.',
  alternates: { canonical: '/connect' },
  openGraph: {
    title: 'Schedule a Free Consultation — Alexis Lyon',
    description: 'Begin with a free 20-minute conversation. If the work feels aligned, Alexis will share the next step.',
    images: [{ url: '/api/og?title=Connect+With+Alexis&sub=Schedule+a+Free+Consultation', width: 1200, height: 630, alt: 'Connect With Alexis' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Connect+With+Alexis&sub=Schedule+a+Free+Consultation'] }
};

const connectJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Connect With Alexis Lyon',
  url: 'https://alexislyon.com/connect',
  description: 'Schedule a free 20-minute consultation with Alexis Lyon or send a private inquiry about transformational coaching and somatic depth work.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', url: 'https://alexislyon.com' },
  author: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' }
};

export default function Connect() {
  const calendly = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main id="page-content">
      <JsonLd data={connectJsonLd} />
      <Nav />
      <section className="section pt-36">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Connect</p>
            <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-forest">Schedule a free consultation.</h1>
            <p className="body-large mt-7 text-mid">Begin with a 20-minute conversation. If the work feels aligned, Alexis will share the next step.</p>
            <div className="mt-8"><ContactForm /></div>
          </div>

          <aside className="space-y-5">
            {/* Calendly */}
            <div className="rounded-[2rem] bg-warm p-8">
              <h2 className="display text-3xl text-forest">Book a Consultation</h2>
              {calendly ? (
                <iframe title="Schedule with Alexis Lyon" src={calendly} className="mt-6 h-[700px] w-full rounded-2xl bg-cream" />
              ) : (
                <p className="mt-5 leading-8 text-mid">Calendly booking coming soon — use the contact form to reach Alexis directly.</p>
              )}
            </div>

            {/* Session Availability */}
            <div className="rounded-[2rem] bg-forest p-8 text-cream">
              <p className="eyebrow !text-gold-lt">Session Availability</p>
              <h3 className="display mt-4 text-2xl text-gold-lt">Starting August 1, 2026</h3>
              <div className="mt-5 space-y-4 text-sm leading-7">
                <div>
                  <p className="font-medium">Costa Rica time</p>
                  <p className="text-cream/70">9:00 AM – 1:45 PM (CST)</p>
                </div>
                <div>
                  <p className="font-medium">Summer hours (Aug – Oct)</p>
                  <p className="text-cream/70">8:00 AM – 12:45 PM Pacific</p>
                </div>
                <div>
                  <p className="font-medium">Winter hours (Nov onward)</p>
                  <p className="text-cream/70">7:00 AM – 11:45 AM Pacific</p>
                </div>
              </div>
              <p className="mt-6 text-xs text-cream/50 leading-6">All sessions via secure telehealth. Evening availability may be possible for Women's Group — inquire when connecting.</p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
