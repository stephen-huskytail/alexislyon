import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/Footer';
import { disclaimerText, offerings, meta } from '@/lib/content';

export const metadata: Metadata = {
  title: meta.work,
  description: 'Private-pay transformational coaching, somatic depth work, and nature-based healing with Alexis Lyon.',
  openGraph: {
    title: 'Work With Alexis',
    description: 'Private-pay transformational coaching, somatic depth work, and nature-based healing.',
    images: [
      {
        url: '/api/og?title=Work+With+Alexis&sub=Transformational+Coaching',
        width: 1200,
        height: 630,
        alt: 'Work With Alexis'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/api/og?title=Work+With+Alexis&sub=Transformational+Coaching']
  }
};

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Transformational Coaching with Alexis Lyon',
  url: 'https://alexislyon.com/work-with-me',
  description: 'Private-pay transformational coaching, somatic depth work, and nature-based healing support with Alexis Lyon.',
  provider: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
  areaServed: ['Worldwide', 'Costa Rica'],
  serviceType: 'Transformational coaching and somatic depth work',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://alexislyon.com/connect',
    availableLanguage: 'en'
  },
  offers: {
    '@type': 'Offer',
    url: 'https://alexislyon.com/connect',
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: 0,
      priceCurrency: 'USD',
      description: 'Free 20-minute consultation'
    }
  }
};

const offeringVisuals: Record<string, { image: string; alt: string; position: string }> = {
  'Transformational Guidance': {
    image: '/images/card-truth.jpg',
    alt: 'Alexis opening into truth and reclaimed aliveness in a natural landscape.',
    position: 'center 34%'
  },
  'Somatic Depth Work': {
    image: '/images/card-coregulating.jpg',
    alt: 'A grounding body-based co-regulation practice in the grass.',
    position: 'center 42%'
  },
  'Nature-Based Sessions': {
    image: '/images/alexis-field-wide.jpg',
    alt: 'Alexis in a wide, green natural field that supports rhythm, integration, and return.',
    position: 'center 45%'
  }
};

export default function Work() {
  return (
    <main id="page-content">
      <JsonLd data={serviceJsonLd} />
      <Nav />
      <section className="section dark-section dark pt-36">
        <div className="container">
          <p className="eyebrow">Work with Alexis</p>
          <h1 className="display mt-5 max-w-4xl text-6xl">
            Transformational guidance for the wound and the wildness.
          </h1>
          <p className="body-large mt-7 max-w-3xl">
            All new client relationships begin with a free 20-minute consultation. Sessions are private-pay, telehealth-based for global clients, with nature-based options in Costa Rica.
          </p>
        </div>
      </section>
      <section className="section bg-warm">
        <div className="container grid gap-3 md:grid-cols-3">
          {offerings.map(([title, description]) => {
            const visual = offeringVisuals[title];

            return (
              <article className="overflow-hidden rounded-[2rem] border border-warm-dk bg-cream shadow-soft transition duration-300 hover:-translate-y-1" key={title}>
                <div className="relative h-64 w-full">
                  <Image
                    src={visual.image}
                    alt={visual.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: visual.position }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/35 via-transparent to-transparent" />
                </div>
                <div className="border-t-4 border-gold p-8">
                  <h2 className="display text-3xl text-forest">{title}</h2>
                  <p className="mt-5 leading-8 text-mid">{description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="container mt-10">
          <p className="rounded-2xl bg-cream p-6 text-sm leading-7 text-mid">{disclaimerText}</p>
          <Link className="btn btn-forest mt-8" href="/connect">Schedule a Free Consultation</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
