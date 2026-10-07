import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { disclaimerText } from '@/lib/content';

// Built 2026-10-07 from Alexis's "Website Updates — Developer Handoff" (Oct 6, 2026), section 2.
// Schedule + start dates supplied by Stephen on 2026-10-07. See docs/website-updates-2026-10-07.md.

const SITE_URL = 'https://alexislyon.com';
const PAGE_PATH = '/the-becoming';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = 'The Becoming: An Online Women’s Group with Alexis Lyon';
const PAGE_DESCRIPTION =
  'An intimate online women’s group for 4–8 women. Somatic, trauma-informed group coaching for healing the wound and reclaiming the wildness.';
const OG_IMAGE = '/api/og?title=The+Becoming&sub=An+Online+Women%27s+Group';
const HERO_IMAGE = '/images/becoming-hero.webp';
const CONNECT_URL = '/connect?interest=becoming';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'The Becoming — an online women’s group with Alexis Lyon' }]
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] }
};

const details: [string, string][] = [
  ['Group size', '4–8 women'],
  ['Session length', '75–90 minutes'],
  ['Format', 'Online by video'],
  ['Commitment', 'Minimum 3 months'],
  ['Investment', '$50 per session (about $100–150 per month)'],
  ['Schedule', 'Thursday evenings or Fridays at midday, Pacific time · Three sessions per month'],
  ['Next circle begins', 'November 2026 or March 2027 · Now forming — inquire to join']
];

const faqs = [
  {
    question: 'Is The Becoming group therapy?',
    answer:
      'No. The Becoming is a coaching and growth group, not group therapy or clinical treatment. It is not designed for crisis support. If you need therapy, I am glad to help you think about where to find it.'
  },
  {
    question: 'Do I have to share everything?',
    answer: 'No. You choose what you share and when. Witnessing is part of the work too.'
  },
  {
    question: 'Why a three-month commitment?',
    answer:
      'Trust takes time. A steady group gives everyone’s nervous system the chance to settle, and that is where the deeper work becomes possible.'
  },
  {
    question: 'Can I join from anywhere?',
    answer:
      'Yes. The circle meets online by video, so women can join from anywhere in the world. Sessions are scheduled in Pacific time.'
  },
  {
    question: 'Can I do individual work alongside the group?',
    answer: 'Yes. Some women pair The Becoming with one-on-one Transformational Guidance or somatic coaching.'
  },
  {
    question: 'How do I join?',
    answer:
      'Reach out through the connect page. We’ll have a free 20-minute conversation to make sure the circle is a good fit for you.'
  }
];

const becomingJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: PAGE_TITLE,
    url: PAGE_URL,
    description: PAGE_DESCRIPTION,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'Alexis Lyon' },
    about: { '@id': `${PAGE_URL}#service` },
    primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE_URL}${HERO_IMAGE}` },
    author: { '@type': 'Person', name: 'Alexis Lyon', url: SITE_URL }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'The Becoming — Online Women’s Group',
    serviceType: 'Trauma-informed group coaching',
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    provider: {
      '@type': 'Person',
      name: 'Alexis Lyon',
      url: SITE_URL,
      jobTitle: 'Transformational Guide and Somatic Healing Coach',
      hasCredential: 'Licensed Marriage and Family Therapist, California'
    },
    audience: { '@type': 'Audience', audienceType: 'Women' },
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'Online video sessions',
      serviceUrl: `${SITE_URL}${CONNECT_URL}`,
      availableLanguage: 'en'
    },
    offers: {
      '@type': 'Offer',
      name: 'The Becoming — Women’s Group',
      url: PAGE_URL,
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: 50,
        priceCurrency: 'USD',
        unitText: 'session',
        description: '$50 per session, about $100–150 per month; minimum three-month commitment'
      }
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'The Becoming', item: PAGE_URL }
    ]
  }
];

// Shared editorial helpers (same vocabulary as /somatic-coaching).
const inlineLink = 'font-medium text-forest underline decoration-gold underline-offset-4 hover:text-sage';
const h2 = 'display mt-6 text-balance text-4xl text-forest sm:text-5xl';
const copy = 'space-y-6 text-[1.0625rem] leading-[1.8] text-dark/80 sm:text-lg sm:leading-[1.85]';
const deck = 'display mt-6 text-pretty text-2xl leading-[1.35] text-forest/90 sm:text-[1.75rem]';
const split = 'container max-w-[40rem] lg:max-w-none lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-start lg:gap-20';
const rail = 'mb-9 lg:sticky lg:top-28 lg:mb-0';

function Rule({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-px w-12 bg-gold ${className}`} />;
}

function Key({ children }: { children: React.ReactNode }) {
  return <p className="display text-pretty border-l-2 border-gold py-1 pl-6 text-[1.7rem] leading-[1.25] text-forest sm:text-[2.1rem]">{children}</p>;
}

export default function TheBecoming() {
  return (
    <main id="page-content">
      <JsonLd data={becomingJsonLd} />
      <Nav />

      <section id="hero" className="dark-section dark relative flex min-h-[82vh] items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="A sheltered forest clearing at first light on the Pacific coast of Costa Rica, tall trees ringing soft green ground"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-forest/45" aria-hidden="true" />
        <div className="container relative pb-16 pt-32">
          <Reveal><p className="eyebrow">An online women’s group</p></Reveal>
          <Reveal delay={0.12}>
            <h1 className="display mt-8 max-w-4xl text-5xl sm:text-7xl md:text-8xl">The Becoming</h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="display mt-6 max-w-3xl text-2xl italic leading-snug sm:text-3xl">An online women’s group for healing the wound and reclaiming the wildness.</p>
          </Reveal>
          <Reveal delay={0.36}>
            <p className="mt-8 text-xs uppercase tracking-[.18em] text-cream/75 sm:text-sm">4–8 women · Online by video · $50 per session</p>
            <div className="mt-8"><Link className="btn btn-gold" href={CONNECT_URL}>Ask About The Becoming&nbsp;→</Link></div>
          </Reveal>
        </div>
      </section>

      <section id="not-alone" className="section">
        <div className="container max-w-3xl text-center">
          <Rule className="mx-auto" />
          <h2 className={h2}>You were never meant to do this alone.</h2>
          <div className={`mx-auto mt-8 max-w-[40rem] text-left ${copy}`}>
            <p>So much of what wounds us happens in relationship. And so much of what heals us happens there too.</p>
            <p>The Becoming is a small group of women who gather regularly to do real inner work, together. Not a class. Not a lecture. A living circle where you get to be witnessed, and to witness others, as you heal what needs healing and reclaim what wants to come home.</p>
          </div>
        </div>
      </section>

      <section id="the-circle" className="section bg-warm">
        <div className={split}>
          <div className={rail}>
            <Rule />
            <h2 className={h2}>What happens in the circle</h2>
            <p className={deck}>Each gathering weaves together:</p>
            <Reveal delay={0.12}>
              <div className="relative mt-9 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft lg:aspect-[5/4]">
                <Image
                  src="/images/becoming-circle.webp"
                  alt="A cluster of pale wildflowers of different heights growing close together on a green hillside above the Pacific at golden hour"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) min(calc(100vw - 3rem), 40rem), 450px"
                />
              </div>
            </Reveal>
          </div>
          <ul className={`${copy} !space-y-4`}>
            {[
              ['The body.', 'Somatic practices that help you feel what is moving in you, and stay with it.'],
              ['The nervous system.', 'Learning, in real time and in good company, what safety feels like from the inside.'],
              ['The stories we carry.', 'The ones handed to us, and the ones we are ready to rewrite.'],
              ['The dreams we are reaching toward.', 'Held with the same care as the wounds.'],
              ['Alchemy.', 'The slow work of turning what hurt us into wisdom we can live from.']
            ].map(([lead, rest]) => (
              <li key={lead} className="rounded-b-[1.5rem] border-t-[3px] border-gold bg-cream p-6 sm:p-7">
                <span className="display block text-[1.6rem] leading-tight text-forest sm:text-[1.85rem]">{lead}</span>
                <span className="mt-2 block">{rest}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why-a-womens-group" className="section">
        <div className={split}>
          <div className={rail}>
            <Rule />
            <h2 className={h2}>Why a women’s group</h2>
            <Reveal delay={0.12}>
              <div className="relative mt-9 aspect-[16/10] overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src="/images/becoming-wildness.webp"
                  alt="A flock of white egrets lifting into warm evening light from a calm estuary on the Costa Rican Pacific coast"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) min(calc(100vw - 3rem), 40rem), 450px"
                />
              </div>
            </Reveal>
          </div>
          <div className={copy}>
            <p>Many women learned early to be good, agreeable, and easy to be around. To make themselves smaller so others could stay comfortable. Our anger, desire, intensity, and voice often went underground.</p>
            <p>In a circle of women doing the same work, something shifts. You see your own wildness reflected in someone else and recognize it. You watch another woman tend a wound you thought only you carried.</p>
            <Key>Belonging stops requiring you to disappear.</Key>
          </div>
        </div>
      </section>

      <section id="is-it-for-you" className="section bg-warm">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Rule className="mx-auto" />
            <h2 className={h2}>Is The Becoming for you?</h2>
            <p className="mt-7 text-pretty text-[1.0625rem] leading-[1.8] text-dark/80 sm:text-lg sm:leading-[1.85]">This group may be a fit if you:</p>
          </div>
          <ul className={`mx-auto mt-11 grid max-w-5xl gap-4 sm:grid-cols-2 ${copy} !space-y-0`}>
            {[
              'Want depth and real connection, not another self-improvement program',
              'Are ready to be seen, at your own pace',
              'Sense there is more of you waiting to be lived',
              'Long for community with women who are also doing their inner work',
              'Can commit to showing up for three months'
            ].map((item, index, all) => (
              <li key={item} className={`rounded-b-[1.5rem] border-t-[3px] border-gold bg-cream p-7 sm:p-8 ${index === all.length - 1 ? 'sm:col-span-2 sm:text-center' : ''}`}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="details" className="section dark-section !bg-forest-orbs">
        <div className={split}>
          <div className={rail}>
            <Rule className="!bg-gold-lt" />
            <h2 className={`${h2} !text-cream`}>The details</h2>
            <p className="mt-9 text-[1.0625rem] leading-[1.8] text-cream/85 sm:text-lg">If cost is a genuine barrier, please bring that into our first conversation. I would rather find a way than have you not reach out.</p>
            <Link className="btn btn-gold mt-8" href={CONNECT_URL}>Ask About The Becoming&nbsp;→</Link>
          </div>
          <dl className="divide-y divide-cream/15 rounded-[2rem] border border-cream/15 bg-cream/5 px-7 sm:px-9">
            {details.map(([term, value]) => (
              <div key={term} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-xs uppercase tracking-[.18em] text-gold-lt sm:pt-1">{term}</dt>
                <dd className="text-[1.0625rem] leading-[1.7] text-cream sm:text-lg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="your-guide" className="section">
        <div className={split}>
          <div className={rail}>
            <div className="relative mx-auto aspect-[3/4] w-64 overflow-hidden rounded-t-full shadow-soft sm:w-80 lg:mx-0 lg:w-full lg:max-w-[22rem]">
              <Image
                src="/images/alexis-about-portrait.jpg"
                alt="Alexis Lyon, transformational guide and somatic healing coach"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1023px) 320px, 352px"
              />
            </div>
            <p className="mt-5 text-center text-xs uppercase tracking-[.18em] text-sage lg:text-left">Alexis Lyon</p>
          </div>
          <div>
            <Rule />
            <h2 className={h2}>About your guide</h2>
            <div className={`mt-8 ${copy}`}>
              <p>I’m Alexis Lyon, a transformational guide and somatic healing coach with 22 years of trauma-informed clinical experience as a California LMFT. I hold this circle with the same care I bring to individual work: steady, unhurried, and welcoming of all of you.</p>
              <p><Link className={inlineLink} href="/about">More about me →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-warm">
        <div className={split}>
          <div className={rail}>
            <p className="eyebrow">Questions</p>
            <h2 className={h2}>Frequently asked questions</h2>
          </div>
          <div>
            <div className="border-t border-warm-dk">
              {faqs.map(({ question, answer }, index) => (
                <details key={question} className="group border-b border-warm-dk" open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                    <h3 className="display text-2xl leading-tight text-forest sm:text-[1.75rem]">{question}</h3>
                    <span
                      aria-hidden="true"
                      className="relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest/30 transition-colors before:absolute before:h-px before:w-3 before:bg-forest after:absolute after:h-3 after:w-px after:bg-forest after:transition-transform group-open:border-forest group-open:after:scale-y-0 group-hover:border-forest"
                    />
                  </summary>
                  <p className="pb-7 pr-2 text-[1.0625rem] leading-[1.8] text-dark/80 sm:pr-14">
                    {question === 'How do I join?' ? (
                      <>
                        Reach out through the <Link className={inlineLink} href={CONNECT_URL}>connect page</Link>. We’ll have a free 20-minute conversation to make sure the circle is a good fit for you.
                      </>
                    ) : (
                      answer
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="begin" className="section relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/soul-story-bg.webp" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-forest/65" aria-hidden="true" />
        <div className="container relative max-w-3xl text-center text-cream">
          <h2 className="display text-4xl sm:text-5xl">Come as you are. Leave a little more yourself.</h2>
          <Link className="btn btn-gold mt-8" href={CONNECT_URL}>Ask About Joining The Becoming&nbsp;→</Link>
          <p className="mx-auto mt-12 max-w-2xl rounded-2xl bg-forest/60 p-5 text-left text-sm leading-7 text-cream/80">{disclaimerText}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
