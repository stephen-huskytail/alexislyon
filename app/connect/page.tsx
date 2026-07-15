import type { Metadata } from 'next';
import Image from 'next/image';
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
  return (
    <main id="page-content">
      <JsonLd data={connectJsonLd} />
      <Nav />
      <section className="section pt-36">
        <div className="container grid gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Connect</p>
            <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-forest">Begin the conversation.</h1>
            <p className="body-large mt-7 text-mid">Reach out for a free 20-minute conversation. If the work feels aligned, Alexis will share the next step.</p>
            <div className="mt-8"><ContactForm /></div>
          </div>

          <aside className="space-y-5">
            {/* Session Availability */}
            <div className="rounded-[2rem] bg-forest p-8 text-cream">
              <p className="eyebrow !text-gold-lt">Session Availability</p>
              <h3 className="display mt-4 text-2xl text-gold-lt">Now booking</h3>
              <p className="mt-5 text-sm leading-7">Sessions are available weekday mornings, Pacific time. Some evening availability may be possible — including for The Becoming women&rsquo;s group. Please inquire when you connect.</p>
              <p className="mt-6 text-xs text-cream/50 leading-6">All sessions via secure telehealth. Nature-based sessions in person on the Pacific coast of Costa Rica by arrangement.</p>
            </div>

            {/* Portrait */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft">
              <Image src="/images/alexis-portrait.jpg" alt="Alexis Lyon" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw, 40vw" />
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
