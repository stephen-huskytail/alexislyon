import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { Reveal } from '@/components/Reveal';
import { disclaimerText } from '@/lib/content';

const SITE_URL = 'https://alexislyon.com';
const PAGE_PATH = '/somatic-coaching';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = 'Somatic Coaching Online with Alexis Lyon';
const PAGE_DESCRIPTION =
  'Trauma-informed somatic coaching, online worldwide. Regulate your nervous system, heal the wound, and reclaim the wildness in you.';
const OG_IMAGE = '/api/og?title=Somatic+Coaching&sub=For+the+Wound+and+the+Wildness';
const HERO_IMAGE = '/images/somatic-coaching-hero.webp';

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Somatic Coaching for the Wound and the Wildness',
    description: 'Trauma-informed somatic coaching with Alexis Lyon. Online worldwide, and in person on the Pacific coast of Costa Rica.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Somatic Coaching — Alexis Lyon' }]
  },
  twitter: { card: 'summary_large_image', images: [OG_IMAGE] }
};

const faqs = [
  {
    question: 'Is somatic coaching the same as therapy or psychotherapy?',
    answer:
      'No. Somatic coaching is not therapy, and it is not psychotherapy. I do not diagnose or treat mental health conditions, and this work does not create a therapeutic relationship. My clinical background informs the depth and pace of how I listen, but what we do together is coaching. If you are looking for therapy, I am glad to help you think about where to find it.'
  },
  {
    question: 'What is somatic coaching?',
    answer:
      'Somatic coaching is a body-centered approach to growth and transformation. Rather than working only with thoughts or the stories we tell, we also pay attention to the nervous system, sensation, emotion, impulse, patterns of protection, and the places where you feel most alive. Through somatic awareness, nervous system regulation, and psychological flexibility, you develop a greater capacity to stay present with yourself.'
  },
  {
    question: 'How is somatic coaching different from somatic therapy?',
    answer:
      'Somatic therapy is clinical treatment from a licensed clinician. It can diagnose and treat trauma and other mental health conditions. Somatic coaching is not treatment. It uses body-based awareness in service of self-trust, choice, and aliveness for people who are ready for growth work. My clinical background informs how carefully the space is held. What we do together is coaching.'
  },
  {
    question: 'Can somatic coaching work online?',
    answer:
      'Yes. Online somatic coaching happens by video, with you in your own space. Your body is right there with you, which often makes it easier to carry what we practice into daily life.'
  },
  {
    question: 'What happens in a somatic coaching session?',
    answer:
      'There is no formula. We listen, notice, and experiment. A session may begin with what is happening in your body — sensation, breath, impulse — and stay with what that response is protecting, what it needs, and what wants to move. You set the pace. Nothing is forced.'
  },
  {
    question: 'What does trauma-informed somatic coaching mean?',
    answer:
      'It means we go at the pace of your nervous system. You stay in charge of what we explore. We build enough relationship and safety to tend what has been wounded, and to make room for what wants to live, without pushing past what you can stay present for.'
  },
  {
    question: 'How do I get started?',
    answer:
      'Begin with a free 20-minute consultation. We’ll talk about what you are hoping for and whether this work is a fit.'
  }
];

const somaticCoachingJsonLd = [
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
    name: 'Somatic Coaching with Alexis Lyon',
    serviceType: 'Somatic coaching',
    description:
      'Trauma-informed somatic coaching that works with breath, posture, sensation, and the nervous system to regulate, witness the wound, and reclaim the wildness. Online worldwide and in person on the Pacific coast of Costa Rica.',
    url: PAGE_URL,
    provider: {
      '@type': 'Person',
      name: 'Alexis Lyon',
      url: SITE_URL,
      jobTitle: 'Transformational Guide and Somatic Healing Coach',
      hasCredential: 'Licensed Marriage and Family Therapist, California'
    },
    areaServed: ['Worldwide', 'Costa Rica'],
    availableChannel: {
      '@type': 'ServiceChannel',
      name: 'Online video sessions',
      serviceUrl: `${SITE_URL}/connect`,
      availableLanguage: 'en'
    },
    offers: {
      '@type': 'Offer',
      name: 'Free 20-Minute Consultation',
      url: `${SITE_URL}/connect`,
      availability: 'https://schema.org/InStock',
      priceSpecification: { '@type': 'PriceSpecification', price: 0, priceCurrency: 'USD', description: 'Free initial consultation — no commitment required' }
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
      { '@type': 'ListItem', position: 2, name: 'Somatic Coaching', item: PAGE_URL }
    ]
  }
];

const inlineLink = 'font-medium text-forest underline decoration-gold underline-offset-4 hover:text-sage';
const prose = 'mt-7 space-y-5 leading-8 text-mid';
const h2 = 'display mt-5 text-4xl text-forest sm:text-5xl';

export default function SomaticCoaching() {
  return (
    <main id="page-content">
      <JsonLd data={somaticCoachingJsonLd} />
      <Nav />

      <section id="hero" className="dark-section dark relative flex min-h-[82vh] items-center overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="First light over green rainforest sloping down to a calm Pacific bay on the coast of Costa Rica"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/75 to-forest/45" aria-hidden="true" />
        <div className="container relative pb-16 pt-32">
          <Reveal><p className="eyebrow">Online somatic coaching</p></Reveal>
          <Reveal delay={0.12}>
            <h1 className="display mt-8 max-w-4xl text-5xl sm:text-7xl md:text-8xl">Somatic Coaching</h1>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="display mt-6 max-w-3xl text-2xl italic leading-snug sm:text-3xl">For the wound and the wildness.</p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="mt-10"><Link className="btn btn-gold" href="/connect">Schedule Your Free Consultation&nbsp;→</Link></div>
            <p className="mt-6 text-xs uppercase tracking-[.18em] text-cream/75 sm:text-sm">Free · 20 minutes · Online worldwide</p>
          </Reveal>
        </div>
      </section>

      <section id="wound-and-the-wildness" className="section">
        <div className="container max-w-3xl">
          <h2 className={h2}>Somatic Coaching for the Wound and the Wildness</h2>
          <div className={prose}>
            <p className="font-medium text-dark">What needs healing? What needs reclaiming? And what becomes possible when we learn to stay with ourselves long enough to hear the difference?</p>
            <p>Somatic coaching is a body-centered approach to growth and transformation. Rather than working only with our thoughts or the stories we tell about our lives, we also pay attention to what is happening underneath them—in the nervous system, sensations, emotions, impulses, patterns of protection, and places where we feel most alive.</p>
            <p>Because the body carries more than our wounds.</p>
            <p>It also carries our vitality.</p>
            <div className="space-y-2 font-medium text-dark">
              <p>Our anger.</p>
              <p>Our desire.</p>
              <p>Our creativity.</p>
              <p>Our sensitivity.</p>
              <p>Our capacity to protect and love fiercely.</p>
              <p>Our voice.</p>
              <p>Our Eros.</p>
              <p>Our life force.</p>
            </div>
            <p>Sometimes these parts of us have been buried, suppressed, or exiled because at some point it didn’t feel safe—or possible—to fully inhabit them.</p>
            <p>And sometimes what has been wounded and what has gone wild or underground have become so intimately intertwined that we cannot immediately tell which is which.</p>
            <p>This is where the work becomes interesting.</p>
            <p className="font-medium text-dark">Some of what we carry needs healing. Some of what we have lost contact with needs reclaiming. And some parts of us may need both.</p>
            <p>Somatic coaching creates a space to slow down, listen more closely, and develop the embodied discernment to discover what is actually being asked of you.</p>
          </div>
        </div>
      </section>

      <section id="what-is-somatic-coaching" className="section bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
          <div>
            <h2 className={h2}>What Is Somatic Coaching?</h2>
            <div className={prose}>
              <p><em>Somatic</em> means “of the body.”</p>
              <p>Somatic coaching recognizes that meaningful change doesn’t happen through insight alone. We can understand ourselves extraordinarily well and still find our bodies responding from patterns that developed long before we had words for them.</p>
              <p>You might <em>know</em> that you’re safe and still feel yourself bracing.</p>
              <p>You might <em>know</em> that you want to speak and feel your throat tighten.</p>
              <p>You might understand that you don’t have to please everyone and still feel the almost automatic impulse to accommodate.</p>
              <p>Or you might sense tremendous passion, anger, desire, creativity, or life force moving through you and not quite know what to do with its intensity.</p>
              <p>Rather than treating these responses as problems to eliminate, somatic coaching invites curiosity.</p>
              <div className="space-y-2 font-medium text-dark">
                <p>What is happening in my body right now?</p>
                <p>What is this response protecting?</p>
                <p>What does it need?</p>
                <p>What wants to move?</p>
                <p>What needs tending—and what wants to be set free?</p>
              </div>
              <p>Through somatic awareness, nervous-system support, psychological flexibility, and embodied inquiry, we begin developing a different kind of relationship with ourselves.</p>
              <p>Not necessarily one in which we never become activated, afraid, overwhelmed, or uncertain.</p>
              <p>But one in which we have greater capacity to stay present with ourselves when we do.</p>
            </div>
          </div>
          <Reveal delay={0.12}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft lg:sticky lg:top-28">
              <Image
                src="/images/somatic-coaching-body.webp"
                alt="Dew on fern fronds in soft morning light inside a green rainforest"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) calc(100vw - 3rem), 45vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="healing-the-wound" className="section">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className={h2}>Healing the Wound. Reclaiming the Wildness.</h2>
            <div className={prose}>
              <p>I often think about this work through two interconnected territories: <strong className="font-medium text-dark">the wound and the wildness.</strong></p>
              <p>The wound is where we have been hurt.</p>
              <p>It includes the experiences and relationships that overwhelmed us, frightened us, disconnected us from ourselves, or taught us that some aspect of who we are was not safe or welcome.</p>
              <p>These places may need compassion, grieving, protection, witnessing, boundaries, relationship, time, or repair.</p>
              <p>The wildness is the living material within us that continues reaching toward expression, relationship, creation, truth, love, and life.</p>
              <p>Sometimes our wildness is obvious.</p>
              <p>Sometimes it has gone underground.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/somatic-coaching-wound.webp"
                alt="A still, sheltered forest pool at dawn reflecting soft green canopy"
                fill
                className="object-cover"
                sizes="(max-width: 767px) calc(100vw - 3rem), 560px"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] shadow-soft">
              <Image
                src="/images/somatic-coaching-wildness.webp"
                alt="A Pacific wave breaking against a green Costa Rican shore at golden hour"
                fill
                className="object-cover"
                sizes="(max-width: 767px) calc(100vw - 3rem), 560px"
              />
            </div>
          </div>
          <div className={`max-w-3xl ${prose}`}>
            <div className="space-y-2">
              <p>Perhaps there wasn’t room in your family for your anger.</p>
              <p>Perhaps your sensitivity was treated as weakness.</p>
              <p>Perhaps your desire was inconvenient.</p>
              <p>Perhaps your intensity was “too much.”</p>
              <p>Perhaps belonging required you to become exceptionally good at anticipating what everyone else needed.</p>
            </div>
            <p>We adapt because human beings need safety, attachment, and belonging.</p>
            <p>And sometimes those adaptations become so familiar that we forget there was ever another way of being.</p>
            <p>But what goes underground does not necessarily disappear.</p>
            <p>Sometimes there is still <strong className="font-medium text-dark">sacred fire in the wound—life force waiting to be reclaimed.</strong></p>
            <p>And sometimes when we begin reclaiming something vital, we encounter the wound wrapped around it.</p>
            <p>This is why I don’t see healing and reclaiming as two separate roads.</p>
            <p className="display text-3xl italic text-forest">They dance.</p>
            <div className="space-y-2">
              <p>We tend something wounded and discover more life underneath it.</p>
              <p>We reclaim something vital and encounter an old fear asking for compassion.</p>
              <p>We offer that fear some care, and suddenly another piece of ourselves becomes available.</p>
            </div>
            <p>Around and around.</p>
          </div>
        </div>
      </section>

      <section id="nervous-system-regulation" className="section bg-warm">
        <div className="container max-w-3xl">
          <h2 className={h2}>Nervous System Regulation Is Not About Becoming Less</h2>
          <div className={prose}>
            <p>Somatic work is often associated with <strong className="font-medium text-dark">nervous system regulation</strong>, and this can be an important part of the work.</p>
            <p>But regulation does not have to mean becoming calm all the time.</p>
            <p>And it does not have to mean making yourself smaller, quieter, less emotional, or less intense.</p>
            <p>I think of regulation more as developing the capacity to remain in relationship with ourselves through a wider range of human experience.</p>
            <div className="space-y-2">
              <p>To feel activation without immediately being consumed by it.</p>
              <p>To notice fear without automatically organizing our lives around avoiding it.</p>
              <p>To experience anger without either suppressing it or allowing it to take over.</p>
              <p>To feel desire without immediately judging it.</p>
              <p>To experience intensity and become curious about what it carries.</p>
            </div>
            <div className="space-y-2">
              <p>Sometimes our nervous systems need settling.</p>
              <p>Sometimes they need movement.</p>
              <p>Sometimes they need protection, rest, expression, connection, grieving, boundaries, or play.</p>
            </div>
            <p className="font-medium text-dark">Different tools are needed for different jobs.</p>
            <p>The work is not simply learning how to calm yourself down.</p>
            <p>It is developing enough relationship with your body to begin discerning what this particular moment is asking of you.</p>
          </div>
        </div>
      </section>

      <section id="hold-more" className="section">
        <div className="container max-w-3xl">
          <h2 className={h2}>Learning to Hold More of Who You Are</h2>
          <div className={prose}>
            <p>One of the questions at the heart of my work is:</p>
            <p className="font-medium text-dark">What if growth doesn’t require us to become less of ourselves, but more capable of inhabiting who we are?</p>
            <p>Holding more does not mean indulging every impulse.</p>
            <p>It also doesn’t mean suppressing what feels inconvenient.</p>
            <p>It means developing the capacity to feel what is moving through us, listen to it, take responsibility for it, and have greater choice about how we bring it into relationship with the world.</p>
            <p>This might mean learning to hold your anger without becoming ashamed of it or wielding it against another person.</p>
            <p>It might mean discovering that underneath anxiety is a boundary you haven’t allowed yourself to name.</p>
            <p>It might mean recognizing that what you have called “too much” is partly passion, sensitivity, creativity, sexuality, conviction, or desire.</p>
            <p>It might mean grieving the years you spent making yourself smaller.</p>
            <p>Or realizing that something you have been trying desperately to heal isn’t entirely a wound.</p>
            <p>Some of it may be <strong className="font-medium text-dark">you</strong>.</p>
            <p>And it wants to come home.</p>
          </div>
        </div>
      </section>

      <section id="who-this-supports" className="section bg-warm">
        <div className="container max-w-3xl">
          <h2 className={h2}>Somatic Coaching Can Support You If…</h2>
          <div className={prose}>
            <p>You may be drawn to somatic coaching if you have done a great deal of thinking, processing, therapy, or personal-development work and still sense that something deeper wants your attention.</p>
            <div className="space-y-2">
              <p>Maybe you understand your patterns intellectually but continue experiencing them in your body.</p>
              <p>Maybe you’re navigating a transition, relationship change, creative threshold, burnout, loss, or a period when the identity that once fit you no longer does.</p>
              <p>Maybe you are learning to trust yourself after years of overriding your own signals.</p>
              <p>Maybe you’re exploring your relationship with anger, boundaries, desire, sensitivity, sexuality, passion, purpose, or intensity.</p>
            </div>
            <p>Or perhaps nothing is dramatically “wrong.”</p>
            <p>You simply sense that there is <strong className="font-medium text-dark">more of you available to live.</strong></p>
            <p>Somatic coaching can offer a relational space to explore that territory—not by imposing an answer about who you should become, but by helping you listen more deeply for what is already moving within you.</p>
          </div>
        </div>
      </section>

      <section id="self-trust" className="section">
        <div className="container max-w-3xl">
          <h2 className={h2}>From Self-Protection to Self-Trust</h2>
          <div className={prose}>
            <p>Many of the strategies we eventually want to change began as intelligent adaptations.</p>
            <div className="space-y-2">
              <p>We learned to please.</p>
              <p>To perform.</p>
              <p>To disappear.</p>
              <p>To stay vigilant.</p>
              <p>To disconnect.</p>
              <p>To control.</p>
              <p>To keep moving.</p>
              <p>To anticipate.</p>
              <p>To become extraordinarily competent.</p>
            </div>
            <p>These strategies may have helped us maintain connection, belonging, or safety.</p>
            <p>Somatic coaching isn’t about shaming those adaptations or ripping them away.</p>
            <p>We can meet them with respect.</p>
            <p>And then, slowly, we can begin asking whether they are still required.</p>
            <div className="space-y-2 font-medium text-dark">
              <p>Is this response coming from what is happening now—or from what my body learned to expect then?</p>
              <p>What happens if I don’t automatically abandon myself here?</p>
              <p>What becomes possible when I trust myself enough to stay?</p>
            </div>
            <p>Over time, the goal is not perfect regulation.</p>
            <div className="space-y-2">
              <p>It is greater choice.</p>
              <p>Greater psychological flexibility.</p>
              <p>Greater capacity to remain with ourselves.</p>
            </div>
            <p>And, from there, a more embodied kind of self-trust.</p>
          </div>
        </div>
      </section>

      <section id="psychological-flexibility" className="section bg-warm">
        <div className="container max-w-3xl">
          <h2 className={h2}>Somatic Coaching and Psychological Flexibility</h2>
          <div className={prose}>
            <p>
              <Link className={inlineLink} href="/blog/psychological-flexibility-overlooked-superpower">Psychological flexibility</Link> is the capacity to remain present with our internal experience while continuing to move toward what matters.
            </p>
            <p>This is deeply connected to somatic work.</p>
            <p>Because sometimes the meaningful road does not feel comfortable.</p>
            <p>Fear can accompany something that is wrong for us.</p>
            <p>And fear can accompany something that matters tremendously.</p>
            <p>Discomfort can be a signal to stop.</p>
            <p>And discomfort can arise because we are stepping beyond a pattern that once kept us contained.</p>
            <p>Our task isn’t to override the body.</p>
            <p>Nor is it to assume that every uncomfortable sensation means <em>no</em>.</p>
            <p>We learn to listen more closely.</p>
            <p>To develop discernment.</p>
            <p>To recognize the difference between forcing ourselves through something and moving toward something meaningful while offering ourselves care along the way.</p>
            <p>This is where self-trust becomes embodied rather than conceptual.</p>
            <p>
              I write about telling those roads apart in <Link className={inlineLink} href="/blog/the-bumpy-road-which-road-is-yours-to-travel">The Bumpy Road: Which Road Is Yours to Travel?</Link>
            </p>
          </div>
        </div>
      </section>

      <section id="aliveness" className="section">
        <div className="container max-w-3xl">
          <h2 className={h2}>Somatic Coaching for Aliveness, Purpose, and Meaning</h2>
          <div className={prose}>
            <p>Healing matters.</p>
            <p>But I don’t believe the purpose of this work is simply to become less symptomatic.</p>
            <p>As more of our energy becomes available—energy that may have been occupied by suppressing, protecting, performing, defending, or abandoning parts of ourselves—we may begin wondering:</p>
            <p className="font-medium text-dark">What wants to happen with this life force?</p>
            <div className="space-y-2">
              <p>What do I want to create?</p>
              <p>How do I want to love?</p>
              <p>What relationships feel reciprocal and alive?</p>
              <p>What does my anger want to protect?</p>
              <p>What does my longing tell me?</p>
              <p>What is mine to contribute?</p>
              <p>What kind of life actually feels like mine?</p>
            </div>
            <p>Purpose does not always arrive as an answer.</p>
            <p>Sometimes it emerges as we become increasingly available to our own lives.</p>
            <p>Something lost becomes something found.</p>
            <p>Something new feels strangely remembered.</p>
            <p>And we begin recognizing ourselves again.</p>
            <div className="space-y-1">
              <p className="display text-3xl italic text-forest">Oh.</p>
              <p className="display text-3xl italic text-forest">There I am.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="online-somatic-coaching" className="section bg-warm">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
          <div>
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
            <p className="mt-4 text-center lg:text-left"><Link className={inlineLink} href="/about">More about me →</Link></p>
          </div>
          <div>
            <h2 className={h2}>Online Somatic Coaching</h2>
            <div className={prose}>
              <p>I offer <strong className="font-medium text-dark">online somatic coaching</strong> for adults seeking a body-centered, psychologically informed approach to personal growth, self-trust, life transitions, relationships, purpose, and greater aliveness.</p>
              <p>
                My approach draws from more than two decades of work in the helping professions and is informed by somatic awareness, ecotherapy, psychological flexibility, trauma-informed practice, and a deep respect for the intelligence of the <Link className={inlineLink} href="/#natural-world">natural world</Link>.
              </p>
              <p>This is not a formula.</p>
              <p>I don’t believe there is one correct way to heal, reclaim yourself, or become more fully alive.</p>
              <p>Instead, our work is relational and exploratory.</p>
              <div className="space-y-2">
                <p>We listen.</p>
                <p>We notice.</p>
                <p>We experiment.</p>
                <p>We tend what has been wounded.</p>
                <p>We make room for what wants to live.</p>
              </div>
              <p>And we develop the capacity to stay with ourselves long enough to discern the difference.</p>
            </div>
          </div>
        </div>
        <div className="container mt-12 grid grid-cols-2 gap-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/somatic-coaching-online.webp"
              alt="A quiet, sunlit corner of a home with a linen armchair beside an open window"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 50vw, 40vw"
            />
          </div>
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/somatic-coaching-costa-rica.webp"
              alt="A footpath through Costa Rican rainforest opening toward the Pacific ocean"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 50vw, 40vw"
            />
          </div>
        </div>
        <div className="container mt-12">
          <div className="rounded-[2rem] bg-forest p-8 text-cream lg:p-10">
            <p className="eyebrow !text-gold-lt">How we begin</p>
            <div className="mt-5 max-w-3xl space-y-4 leading-8 text-cream/85">
              <p>Sessions are held by video. We build the right container together rather than from a menu. Packages range from $100–$1,000 per month, depending on the depth and frequency of support you are looking for.</p>
              <p>If you are in or visiting Costa Rica, I also offer in-person, nature-based sessions on the Pacific coast.</p>
            </div>
            <Link className="btn btn-gold mt-7" href="/connect">Schedule Your Free Consultation&nbsp;→</Link>
          </div>
        </div>
      </section>

      <section id="wound-and-wildness" className="section">
        <div className="container max-w-3xl">
          <h2 className={h2}>Wound and Wildness</h2>
          <div className={prose}>
            <p>There is a question I return to again and again:</p>
            <div className="space-y-2 font-medium text-dark">
              <p>What here needs healing?</p>
              <p>What here needs reclaiming?</p>
              <p>And what might become possible if I stay with myself long enough to hear the difference?</p>
            </div>
            <p>Sometimes there is pain asking to be tended.</p>
            <p>Sometimes there is wildness asking to come home.</p>
            <p>And sometimes they are wrapped around the same root.</p>
            <p>This is the territory I love working in.</p>
            <p>Not toward becoming a perfected version of yourself.</p>
            <p>But toward becoming increasingly capable of inhabiting your own life—with greater choice, self-trust, relationship, purpose, and aliveness.</p>
            <p className="font-medium text-dark">The alchemy begins where the wound is honored and the wildness is free.</p>
            <p>
              I write about that meeting place in <Link className={inlineLink} href="/blog/post-traumatic-growth">Post-Traumatic Growth: The Alchemy of Wound and Wildness</Link>.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-warm">
        <div className="container max-w-4xl">
          <p className="eyebrow">Questions</p>
          <h2 className={h2}>Frequently asked questions</h2>
          <p className="body-large mt-6 text-mid">Coaching is not therapy, and it is not psychotherapy. I do not diagnose or treat.</p>
          <div className="mt-8 divide-y divide-warm-dk">
            {faqs.map(({ question, answer }) => (
              <div key={question} className="py-7">
                <h3 className="display text-2xl text-forest sm:text-3xl">{question}</h3>
                <p className="mt-3 leading-8 text-mid">
                  {question === 'How do I get started?' ? (
                    <>
                      Begin with a <Link className={inlineLink} href="/connect">free 20-minute consultation</Link>. We’ll talk about what you are hoping for and whether this work is a fit.
                    </>
                  ) : (
                    answer
                  )}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-2xl bg-cream p-5 text-sm leading-7 text-mid">{disclaimerText}</p>
        </div>
      </section>

      <section id="begin" className="section relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/soul-story-bg.webp" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        <div className="absolute inset-0 bg-forest/65" aria-hidden="true" />
        <div className="container relative max-w-3xl text-center text-cream">
          <h2 className="display text-4xl sm:text-5xl">Begin with a conversation.</h2>
          <p className="body-large mx-auto mt-6 max-w-2xl text-cream/85">The consultation is free, 20 minutes, and online. We’ll listen for what you are hoping for, and whether this work is a fit.</p>
          <Link className="btn btn-gold mt-8" href="/connect">Schedule Your Free Consultation&nbsp;→</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
