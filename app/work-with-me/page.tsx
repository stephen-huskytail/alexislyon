import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { JsonLd } from '@/components/JsonLd';
import { Footer } from '@/components/Footer';
import { disclaimerText, meta } from '@/lib/content';

export const metadata: Metadata = {
  title: meta.work,
  description: 'Private-pay transformational coaching, somatic depth work, and nature-based healing with Alexis Lyon.',
  alternates: { canonical: '/work-with-me' },
  openGraph: {
    title: 'Work With Alexis Lyon — Somatic Coaching & Healing',
    description: 'Private-pay transformational coaching, somatic depth work, and nature-based healing.',
    images: [{ url: '/api/og?title=Work+With+Alexis&sub=Transformational+Coaching', width: 1200, height: 630, alt: 'Work With Alexis' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Work+With+Alexis&sub=Transformational+Coaching'] }
};

const serviceJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Transformational Coaching with Alexis Lyon',
    url: 'https://alexislyon.com/work-with-me',
    description: 'Private-pay transformational coaching, somatic depth work, and nature-based healing support with Alexis Lyon.',
    provider: { '@type': 'Person', name: 'Alexis Lyon', url: 'https://alexislyon.com' },
    areaServed: ['Worldwide', 'Costa Rica'],
    serviceType: 'Transformational coaching and somatic depth work',
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: 'https://alexislyon.com/connect', availableLanguage: 'en' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Free 20-Minute Consultation',
        url: 'https://alexislyon.com/connect',
        availability: 'https://schema.org/InStock',
        priceSpecification: { '@type': 'PriceSpecification', price: 0, priceCurrency: 'USD', description: 'Free initial consultation — no commitment required' }
      },
      {
        '@type': 'Offer',
        name: 'Individual Session',
        url: 'https://alexislyon.com/connect',
        availability: 'https://schema.org/InStock',
        priceSpecification: { '@type': 'PriceSpecification', price: 175, priceCurrency: 'USD', description: 'New client rate — 55-minute session via secure telehealth' }
      },
      {
        '@type': 'Offer',
        name: "The Becoming — Women's Group",
        url: 'https://alexislyon.com/connect',
        availability: 'https://schema.org/InStock',
        priceSpecification: { '@type': 'PriceSpecification', price: 50, priceCurrency: 'USD', description: "Women's group session — 75–90 minutes, 3×/month or every other week" }
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does transformational coaching cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Individual sessions are $175 for new clients. Sliding scale $100–175 is available for ongoing current clients. The Becoming Women\'s Group is $50/session (approximately $100–150/month). All new client relationships begin with a free 20-minute consultation.' }
      },
      {
        '@type': 'Question',
        name: 'What is the session format?',
        acceptedAnswer: { '@type': 'Answer', text: 'Individual sessions are 55 minutes via secure telehealth, every other week or 3×/month. Nature-based sessions are 90 minutes in person on the Pacific coast of Costa Rica. Group sessions are 75–90 minutes, minimum 3-month commitment.' }
      },
      {
        '@type': 'Question',
        name: 'Is this work available worldwide?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. All individual and group sessions are available via secure telehealth to clients worldwide. In-person nature-based sessions are available on the Pacific coast of Costa Rica by arrangement.' }
      }
    ]
  }
];

const individualOfferings = [
  {
    title: 'Transformational Guidance',
    subtitle: 'For women ready to heal the wound, reclaim the wildness, and learn the body-level experience of self-trust.',
    body: 'Sustained, integrative one-on-one work that weaves together the somatic, the psychological, the spiritual, and the natural world. We move at the pace your nervous system can metabolize — building safety, regulation, and psychological flexibility over time. This is the long game: the slow, profound work of learning to inhabit yourself fully and trust what you find there.',
    what: 'Nervous system regulation as a daily, lived capacity. Psychological flexibility — the ability to stay present with difficulty while moving toward what matters. Self-trust that does not collapse when things get hard. The story of your life, rewritten from soul outward.',
    format: '55-minute sessions via secure telehealth · Every other week or 3×/month',
    price: '$175/session (new clients) · Sliding scale $100–175 for ongoing current clients',
    image: '/images/card-truth.jpg',
    alt: 'Alexis opening into truth and reclaimed aliveness in a natural landscape.',
    position: 'center 34%'
  },
  {
    title: 'Somatic Depth Work',
    subtitle: 'Slow, precise sessions with the body and nervous system — where insight becomes lived capacity, not just an idea.',
    body: 'Your nervous system holds what your mind cannot yet articulate — and it also holds the capacity for its own healing. Somatic work means we listen to the body as a living intelligence, work with it directly through sensation and breath, and create the conditions where regulation happens in felt experience rather than concept. This is how deep, lasting change actually occurs.',
    what: null,
    format: '55-minute sessions via secure telehealth · Integrated into ongoing guidance work or as standalone sessions',
    price: 'Same as Transformational Guidance',
    image: '/images/card-coregulating.jpg',
    alt: 'A grounding body-based co-regulation practice in the grass.',
    position: 'center 42%'
  },
  {
    title: 'Nature-Based Sessions',
    subtitle: 'For clients in Costa Rica: nature as co-regulator, living presence, and the oldest healing force on earth.',
    body: 'The natural world is one of the most powerful nervous system regulators available to us — and one of the most underused. Research confirms what our bodies already know: time in nature downregulates the stress response, restores capacity for presence, and reconnects us to something larger than our own suffering. When we bring healing into the natural world, we bring the most ancient co-regulator into the room.',
    what: null,
    format: '90-minute sessions · In person · Pacific coast of Costa Rica · Location by arrangement',
    price: 'To be discussed at consultation',
    image: '/images/alexis-field-wide.jpg',
    alt: 'Alexis in a wide, green natural field that supports rhythm, integration, and return.',
    position: 'center 45%'
  }
];

const groupWork = {
  title: 'The Becoming — Women\'s Group',
  subtitle: 'A small, closed group for women ready to go deeper — into themselves, their lives, and the kind of sisterhood that actually nourishes.',
  body: 'An intimate group of 4–8 women gathering regularly to do real inner work in community. We work with the body, the nervous system, the stories we carry, the dreams we are reaching toward, and the wounds we are learning to alchemize into wisdom. Healing happens in relationship — and women healing in honest community with each other is some of the most powerful medicine available.',
  whatWeWorkWith: [
    'Learning to trust yourself — in your body, your knowing, your choices',
    'Nervous system regulation and psychological flexibility as daily, embodied practices',
    'The wound and the wildness — what needs healing, and what needs reclaiming',
    'Your values and the life your soul is calling you toward',
    'Rewriting the stories you inherited about what you are worth and what is possible',
    'The alchemy of women in honest community with each other'
  ],
  groups: [
    { label: 'Daytime group', detail: 'Timing confirmed based on members\' availability' },
    { label: 'Evening group', detail: 'Approximately 6:00–8:00 PM Pacific (8:00–10:00 PM Costa Rica time)' }
  ],
  format: '75–90 minutes per session · 3×/month or every other week · Via secure telehealth · Minimum 3-month commitment',
  price: '$50/session · Approximately $100–150/month',
  starting: 'August 2026 — exact date confirmed with group members',
  cta: 'Currently forming — inquire to reserve your spot. This group is by personal invitation; please mention your interest in the consultation form.'
};

export default function Work() {
  return (
    <main id="page-content">
      <JsonLd data={serviceJsonLd} />
      <Nav />

      {/* Hero */}
      <section className="section dark-section dark pt-36">
        <div className="container">
          <p className="eyebrow">Work with Alexis</p>
          <h1 className="display mt-5 max-w-4xl text-4xl sm:text-5xl md:text-6xl">Transformational guidance for the wound and the wildness.</h1>
          <p className="body-large mt-7 max-w-3xl">
            All new client relationships begin with a free 20-minute consultation. Sessions are private-pay. Telehealth for global clients. Nature-based options available on the Pacific coast of Costa Rica.
          </p>
        </div>
      </section>

      {/* Individual Offerings */}
      <section className="section bg-warm">
        <div className="container space-y-3">
          {individualOfferings.map(({ title, subtitle, body, what, format, price, image, alt, position }) => (
            <article className="overflow-hidden rounded-[2rem] border border-warm-dk bg-cream shadow-soft" key={title}>
              <div className="grid lg:grid-cols-[2fr_3fr]">
                <div className="relative min-h-[300px]">
                  <Image src={image} alt={alt} fill className="object-cover" style={{ objectPosition: position }} sizes="(max-width:1024px) 100vw, 40vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-forest/20 lg:bg-gradient-to-l" />
                </div>
                <div className="border-l-4 border-gold p-8 lg:p-10">
                  <h2 className="display text-3xl text-forest">{title}</h2>
                  <p className="mt-3 font-medium italic text-mid">{subtitle}</p>
                  <p className="mt-5 leading-8 text-mid">{body}</p>
                  {what && (
                    <div className="mt-5 rounded-2xl bg-warm p-5">
                      <p className="eyebrow text-forest">What we build together</p>
                      <p className="mt-3 leading-8 text-mid">{what}</p>
                    </div>
                  )}
                  <div className="mt-6 border-t border-warm-dk pt-5 grid gap-2 sm:grid-cols-2 text-sm text-mid">
                    <p><span className="font-medium text-forest">Format:</span> {format}</p>
                    <p><span className="font-medium text-forest">Investment:</span> {price}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="container mt-10">
          <p className="rounded-2xl bg-cream p-6 text-sm leading-7 text-mid">{disclaimerText}</p>
        </div>
      </section>

      {/* Women's Group */}
      <section id="womens-group" className="section dark-section dark">
        <div className="container">
          <p className="eyebrow">Group Work</p>
          <h2 className="display mt-5 max-w-4xl text-5xl">{groupWork.title}</h2>
          <p className="body-large mt-6 max-w-3xl italic">{groupWork.subtitle}</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="leading-8">{groupWork.body}</p>
              <div className="mt-8">
                <p className="eyebrow">What we work with</p>
                <ul className="mt-5 space-y-3">
                  {groupWork.whatWeWorkWith.map((item) => (
                    <li key={item} className="flex gap-3 leading-7"><span className="text-gold-lt mt-1 shrink-0">◆</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 rounded-2xl border border-gold/30 bg-cream/5 p-6 italic leading-8">{groupWork.cta}</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
                <p className="eyebrow">Two Groups Available</p>
                {groupWork.groups.map(({ label, detail }) => (
                  <div key={label} className="mt-4">
                    <p className="font-medium">{label}</p>
                    <p className="mt-1 text-sm text-cream/70">{detail}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-cream/15 bg-cream/5 p-6 space-y-3 text-sm leading-7">
                <p><span className="font-medium">Format:</span> {groupWork.format}</p>
                <p><span className="font-medium">Investment:</span> {groupWork.price}</p>
                <p><span className="font-medium">Starting:</span> {groupWork.starting}</p>
                <p className="text-sm text-cream/70">Group + individual sessions available, or group as your primary container.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Summary */}
      <section className="section bg-warm">
        <div className="container max-w-3xl">
          <p className="eyebrow">Investment</p>
          <h2 className="display mt-5 text-5xl text-forest">Begin with a free 20-minute consultation.</h2>
          <div className="mt-8 rounded-2xl bg-cream p-8 space-y-5 text-mid leading-8">
            <p>I offer transformational coaching and guidance — not therapy or clinical mental health treatment. What makes this work different from most coaching is the foundation it stands on: 22 years of clinical training and experience in somatic, holistic, and nature-based healing.</p>
            <div className="grid gap-6 sm:grid-cols-2 pt-2">
              <div>
                <p className="eyebrow text-forest">Individual Sessions</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>◆ $175/session — new clients</li>
                  <li>◆ Sliding scale $100–175 — ongoing current clients</li>
                </ul>
              </div>
              <div>
                <p className="eyebrow text-forest">Women's Group</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>◆ $50/session</li>
                  <li>◆ Approximately $100–150/month</li>
                </ul>
              </div>
            </div>
            <p className="italic text-sm border-t border-warm-dk pt-5">All new client relationships begin with a free 20-minute consultation. If financial circumstances are a genuine barrier, please bring that into our initial conversation.</p>
          </div>
          <Link className="btn btn-forest mt-8" href="/connect">Schedule a Free Consultation</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
