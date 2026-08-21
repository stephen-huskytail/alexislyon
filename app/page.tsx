import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { ForestBodyForm } from '@/components/ForestBodyForm';
import { JsonLd } from '@/components/JsonLd';
import { availabilityText, becomingGroup, disclaimerText, offering, permissions, recognitions } from '@/lib/content';

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alexis Lyon',
    url: 'https://alexislyon.com',
    description: 'Trauma-informed transformational guidance rooted in somatic depth, nervous system regulation, psychological flexibility, nature-based healing, self-trust, and self-love.',
    inLanguage: 'en-US',
    publisher: { '@type': 'Person', name: 'Alexis Lyon' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexis Lyon',
    url: 'https://alexislyon.com',
    image: 'https://alexislyon.com/images/alexis-portrait.jpg',
    jobTitle: 'Trauma-Informed Transformational Guide and Somatic Healer',
    description: 'Trauma-informed transformational guide and healer based on the Pacific coast of Costa Rica, serving clients globally through telehealth.',
    hasCredential: 'Licensed Marriage and Family Therapist, California',
    knowsAbout: ['Somatic depth work', 'Nervous system regulation', 'Psychological flexibility', 'Nature-based healing', 'Self-trust', 'Transformational coaching'],
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    areaServed: ['Worldwide', 'Costa Rica'],
    sameAs: []
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Transformational Guidance with Alexis Lyon',
    url: 'https://alexislyon.com/#work',
    description: 'Sustained, integrative one-on-one work weaving the somatic, the psychological, the spiritual, and the natural world — grounded in 22 years of trauma-informed clinical depth.',
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
        name: 'Transformational Guidance — Monthly Package',
        url: 'https://alexislyon.com/connect',
        availability: 'https://schema.org/InStock',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, maxPrice: 1000, priceCurrency: 'USD', description: 'Monthly packages depending on depth and frequency of support' }
      },
      {
        '@type': 'Offer',
        name: "The Becoming — Women's Group",
        url: 'https://alexislyon.com/connect',
        availability: 'https://schema.org/InStock',
        priceSpecification: { '@type': 'PriceSpecification', price: 50, priceCurrency: 'USD', description: "Women's group session — 75–90 minutes, approximately $100–150/month" }
      }
    ]
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this therapy?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. The services offered are transformational coaching and guidance, not therapy or clinical mental health treatment. Alexis Lyon holds a California LMFT license, but the work offered through this site is not clinical therapy.' }
      },
      {
        '@type': 'Question',
        name: 'How much does it cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Transformational Guidance packages range from $100–$1,000 per month, depending on the depth and frequency of support. The Becoming Women\'s Group is $50/session, approximately $100–150/month. Every relationship begins with a free 20-minute consultation.' }
      },
      {
        '@type': 'Question',
        name: 'Where are sessions held?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sessions are held via secure telehealth for clients worldwide. Nature-based sessions are available in person on the Pacific coast of Costa Rica by arrangement.' }
      },
      {
        '@type': 'Question',
        name: 'When is Alexis available?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sessions are available weekday mornings, Pacific time. Some evening availability may be possible, including for The Becoming women\'s group — please inquire when you connect.' }
      }
    ]
  }
];

export default function Home() {
  return (
    <main id="page-content">
      <JsonLd data={homeJsonLd} />
      <Nav />
      <section id="hero" className="dark-section dark relative flex min-h-screen items-center overflow-hidden bg-forest-orbs">
        <div className="orb left-[8%] top-[18%] h-44 w-44 bg-gold/20" />
        <div className="orb bottom-[12%] right-[10%] h-64 w-64 bg-sage-lt/20" />
        <div className="container relative pt-24">
          <Reveal><p className="eyebrow">Alexis Lyon · Trauma-Informed Transformational Guidance & Healing</p></Reveal>
          <Reveal delay={0.12}><h1 className="display mt-8 max-w-5xl text-4xl sm:text-6xl md:text-8xl">There is a part of you that needs <em className="gold">healing</em>. And a part of you that needs <em className="gold">reclaiming</em>.</h1></Reveal>
          <Reveal delay={0.24}><p className="mt-8 max-w-3xl text-[1.32rem] leading-[1.9]">I hold space for the wound that carries grief and the wildness that is waiting to come home.</p></Reveal>
          <Reveal delay={0.36}><div className="mt-10 flex flex-wrap gap-4"><Link className="btn btn-gold" href="/connect">Begin the Conversation</Link><Link className="btn btn-ghost" href="#for-you">You Belong Here</Link></div></Reveal>
        </div>
      </section>

      <section id="strip" className="section bg-warm"><div className="container text-center"><p className="display mx-auto max-w-4xl text-5xl text-forest">I help people who want to learn how to trust and love themselves.</p><p className="body-large mx-auto mt-6 max-w-3xl text-mid">Through a healing relationship grounded in somatic depth, nervous system regulation, psychological flexibility, and unconditional presence — we create a rhythm of safety and trust together.</p><p className="mx-auto mt-5 max-w-3xl text-sm uppercase tracking-[.18em] text-sage">Backed by 22 years of trauma-informed clinical depth</p></div></section>

      <section id="for-you" className="section"><div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><Reveal><div><p className="eyebrow">You belong here</p><h2 className="display mt-5 text-5xl text-forest">Something in you needs healing. And something in you is ready to be reclaimed.</h2><p className="body-large mt-7 text-mid">There are two things alive in you right now — and they need different things. One is tender and carries grief. The other is charged and has been waiting a long time. Both are welcome here. You are welcome here — all of you, exactly as you arrive.</p><div className="mt-8 grid grid-cols-2 gap-3"><div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="/images/card-presence.jpg" alt="Tender presence — hands at heart" fill className="object-cover" /></div><div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="/images/card-truth.jpg" alt="Reclaiming wildness — arms open wide" fill className="object-cover" style={{objectPosition:'center 32%'}} /></div></div></div></Reveal><div><div className="grid gap-4 md:grid-cols-2">{recognitions.map((r, i) => <Reveal key={r} delay={i * 0.03}><div className="card h-full"><span className="text-gold">◆</span><p className="mt-4 leading-8">{r}</p></div></Reveal>)}</div><div className="mt-10 text-center md:text-left"><Link className="btn btn-forest" href="/connect">This sounds like me. Let&rsquo;s talk.</Link></div></div></div></section>

      <section id="permission" className="section bg-rose text-cream"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><Reveal><div><p className="eyebrow !text-gold-lt">A different kind of permission</p><h2 className="display mt-5 text-6xl">You do not have to be finished to begin.</h2></div></Reveal><div><p className="body-large text-cream/85">You may have been told — or told yourself — that you need to finish healing before you are allowed to start living. That the wound must close before the dream can open. I want to say this to you clearly: that is not true. You can be exactly where you are and take real steps toward the life you long for. Both. At the same time. Starting now.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{permissions.map((p) => <p key={p} className="rounded-2xl bg-cream/10 p-4">{p}</p>)}</div><p className="display mt-9 text-3xl italic text-cream">&ldquo;You are worth the effort. You always were.&rdquo;</p><div className="mt-9"><Link className="btn btn-gold" href="/connect">I&rsquo;m ready to begin.</Link></div></div></div></section>

      <section id="wound-wild" className="section bg-warm"><div className="container"><Reveal><p className="eyebrow">The wound & the wildness</p><h2 className="display mt-5 max-w-3xl text-5xl text-forest">Two territories. Two kinds of homecoming. One You.</h2><p className="body-large mt-6 max-w-4xl text-mid">Some of what you carry needs healing. Some of what you carry needs reclaiming. Learning to tell the difference is itself a form of self-trust and self-love.</p></Reveal><div className="mt-12 grid gap-1 md:grid-cols-2"><div className="card bg-cream"><p className="eyebrow">What needs healing</p><h3 className="display mt-5 text-4xl text-forest">The Wound</h3><p className="mt-5 leading-8 text-mid">The wound is what happened to you. It asks for witnessing, compassion, grief, and the kind of presence that says: I see you.</p></div><div className="card bg-cream"><p className="eyebrow">What needs reclaiming</p><h3 className="display mt-5 text-4xl text-forest">The Wildness</h3><p className="mt-5 leading-8 text-mid">The wildness is not what happened to you. It is the power, truth, and fierce knowing that learned it was not welcome — and wants to come home.</p></div></div></div></section>

      <section id="relationship" className="section"><div className="container max-w-4xl text-center"><p className="eyebrow mx-auto w-fit">The healing relationship</p><h2 className="display mt-5 text-5xl text-forest">The relationship is the medicine.</h2><p className="body-large mt-6 text-mid">Most of what wounds us happens in relationship. So it follows that healing happens in relationship too — inside a living field of unconditional acceptance, steady presence, and real compassion.</p><Link className="btn btn-forest mt-8" href="/philosophy">The Philosophy Behind the Work</Link></div></section>

      <section id="natural-world" className="section bg-warm"><div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]"><div className="lg:order-2"><Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft"><Image src="/images/sunset-tree-landscape.webp" alt="A tree silhouetted against a warm sunset sky" fill className="object-cover" sizes="(max-width: 1023px) 100vw, 55vw" /></div></Reveal></div><div className="lg:order-1"><Reveal delay={0.12}><div><p className="eyebrow">Rooted in the natural world</p><h2 className="display mt-5 text-5xl text-forest">The natural world remembers the way home.</h2><p className="body-large mt-6 text-mid">In its rhythms, spaciousness, and quiet presence, the natural world offers a gentle reminder that you belong to something larger — and that your body can find its own way back to ground.</p></div></Reveal></div></div></section>

      <section id="about" className="section bg-warm"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="relative min-h-[420px] rounded-t-full overflow-hidden shadow-soft"><Image src="/images/alexis-home-about.jpg" alt="Alexis Lyon" fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 40vw" /></div><div><p className="eyebrow">You are the heroine of this story</p><h2 className="display mt-5 text-5xl text-forest">22 years of clinical depth — in service of your becoming.</h2><div className="mt-7 space-y-5 leading-8 text-mid"><p className="italic">I am so glad you are here.</p><p>You have probably been carrying this for a while. The sense that something in you is waiting. That you have done the work, read the books, made the progress — and still, something deeper is calling and you are not sure how to answer it.</p><p>I have spent 22 years sitting with people at exactly this threshold. Nearly two decades of that was with foster youth and families — people whose nervous systems had been shaped by profound rupture, who found their way back to themselves against real odds. They taught me what I now know for certain: the resilience and courage you need is already in you. It reveals itself when it is met with unconditional acceptance, kindness, curiosity, and respect.</p><p>That is what I am here to offer you. Not a technique applied to you. A relationship built with you — grounded in 22 years of trauma-informed clinical training and depth, and offered in service of one thing: your transformation.</p><p>I know what it is to feel overwhelmed and far from yourself. I also know the particular quality of arriving home. I work somatically because I have felt in my own body what it means to move from dysregulation to ground. I bring in the natural world because it has been my most reliable co-regulator. And I hold space for the spiritual and the mystical alongside the psychological, because I have found the deepest healing happens when all of you is welcome in the room.</p><p className="italic">You are the heroine of this story. I am simply the guide who has walked this territory before — and who is ready, right now, to walk it with you.</p></div><div className="mt-8 rounded-2xl bg-cream p-5 text-center text-xs uppercase tracking-[.16em] leading-6 text-sage"><p>22 years clinical experience · Trauma-informed · Somatic &amp; nature-based · California LMFT background</p><p className="mt-1 text-mid">Currently based on the Pacific coast of Costa Rica · Serving clients globally via telehealth</p></div><Link className="btn btn-forest mt-8" href="/connect">Let&rsquo;s Begin — Free 20-Minute Consultation</Link></div></div></section>

      <section id="experience" className="section"><div className="container grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow">Forest Body Activation</p><h2 className="display mt-5 text-5xl text-forest">A guided doorway into the work.</h2><p className="body-large mt-6 text-mid">A guided meditation to help you find your way home to your body — and the three practices I will leave you with to take into your daily life.</p><Link className="btn btn-forest mt-8 hidden lg:inline-flex" href="/connect">Ready for more? Let&rsquo;s talk.</Link></div><div className="relative overflow-hidden rounded-[2rem] bg-forest text-cream shadow-soft"><div className="relative aspect-[16/7] min-h-[180px]"><Image src="/images/forest-body-cover.webp" alt="Forest Body Activation meditation cover" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /><div className="absolute inset-0 bg-forest/35" /><div className="absolute inset-0 flex items-center justify-center"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/70 bg-forest/65 text-cream shadow-soft" aria-hidden="true"><svg viewBox="0 0 24 24" className="h-7 w-7 fill-current"><path d="M8 5v14l11-7z" /></svg></div></div><div className="absolute bottom-4 left-5 rounded-full bg-forest/75 px-3 py-1 text-[.65rem] font-medium uppercase tracking-[.16em] text-gold-lt">Audio meditation</div></div><div className="relative p-6 sm:p-8"><div className="flex items-center gap-4"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-cream/10 text-gold-lt" aria-hidden="true"><svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M8 5v14l11-7z" /></svg></div><div><p className="text-xs font-medium uppercase tracking-[.2em] text-gold-lt">Audio practice</p><p className="mt-1 text-sm text-cream/75">16-minute guided meditation · delivered to your inbox</p></div></div><div className="mt-7 border-t border-cream/15 pt-6"><h3 className="display text-3xl text-cream">Receive the Forest Body Activation.</h3><p className="mt-3 max-w-xl leading-7 text-cream/80">Enter your email and Alexis will send the audio download directly to you.</p><ForestBodyForm /></div></div></div><Link className="btn btn-forest lg:hidden justify-self-start" href="/connect">Ready for more? Let&rsquo;s talk.</Link></div></section>

      <section id="work" className="section dark-section dark"><div className="container"><p className="eyebrow">Work with me</p><h2 className="display mt-5 max-w-4xl text-5xl">The depth of 22 years of clinical training, offered in a container built for transformation.</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] border border-cream/15 bg-cream/5 p-8 lg:p-10">
            <h3 className="display text-3xl text-gold-lt">{offering.title}</h3>
            <p className="mt-3 italic text-cream/80">{offering.subtitle}</p>
            <p className="mt-5 leading-8">{offering.body}</p>
            <p className="mt-5 leading-8">{offering.lead}</p>
            <ul className="mt-5 space-y-3">
              {offering.includes.map(([t, d]) => <li key={t} className="flex gap-3 leading-7"><span className="mt-1 shrink-0 text-gold-lt">◆</span><span><span className="font-medium text-cream">{t}</span> — {d}</span></li>)}
            </ul>
            <p className="mt-6 italic text-cream/80">{offering.close}</p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[2rem] border border-cream/15 bg-cream/5 p-8">
              <h3 className="display text-2xl text-gold-lt">{becomingGroup.title}</h3>
              <p className="mt-4 leading-8">{becomingGroup.body}</p>
              <p className="mt-5 border-t border-cream/10 pt-4 text-xs leading-6 text-cream/60">{becomingGroup.format}</p>
              <p className="mt-2 text-sm font-medium text-gold-lt">{becomingGroup.price}</p>
            </div>
            <div className="rounded-[2rem] border border-cream/15 bg-cream/5 p-8">
              <p className="eyebrow">Session availability</p>
              <p className="mt-4 leading-8">{availabilityText}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-[2rem] bg-cream/10 p-8 lg:p-10">
          <p className="eyebrow">Investment</p>
          <p className="mt-5 leading-8">Transformational Guidance packages range from <span className="font-medium text-gold-lt">$100–$1,000 per month</span>, depending on the depth and frequency of support you are looking for. Rather than a menu, we build the right container for you — together, in conversation.</p>
          <p className="mt-4 leading-8">The Becoming — Women&rsquo;s Group: $50 per session, approximately $100–150 per month.</p>
          <p className="mt-4 leading-8 italic">Every relationship begins with a free 20-minute consultation. If financial circumstances are a genuine barrier, please bring that into our first conversation — I would rather find a way than have you not reach out.</p>
          <Link className="btn btn-gold mt-7" href="/connect">Schedule Your Free Consultation</Link>
        </div>
        <p className="mt-8 rounded-2xl bg-cream/5 p-5 text-sm leading-7">{disclaimerText}</p>
      </div></section>

      <section id="testimonial" className="section bg-warm"><div className="container max-w-4xl text-center"><p className="display text-4xl italic leading-relaxed text-forest">&ldquo;Alexis holds tenderness and fire with the same steady presence.&rdquo;</p></div></section>

      <section id="connect" className="section"><div className="container grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Let&rsquo;s connect</p><h2 className="display mt-5 text-5xl text-forest">Begin the conversation.</h2><p className="body-large mt-6 text-mid">Share what is calling you here. Alexis reads every message personally and responds within 48 hours.</p><ul className="mt-6 space-y-2 text-mid text-sm leading-7"><li>◆ Tell Alexis what you are looking for</li><li>◆ She will respond and share the right next step</li><li>◆ A free 20-minute consultation follows if aligned</li></ul></div><div><ContactForm /></div></div></section>
      <Footer />
    </main>
  );
}
