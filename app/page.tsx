import Link from 'next/link';
import Image from 'next/image';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { ForestBodyForm } from '@/components/ForestBodyForm';
import { JsonLd } from '@/components/JsonLd';
import { disclaimerText, offerings, offeringsDetail, permissions, pillars, recognitions, values } from '@/lib/content';

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alexis Lyon',
    url: 'https://alexislyon.com',
    description: 'Transformational guidance rooted in somatic depth, nervous system regulation, psychological flexibility, nature-based healing, and self-trust.',
    inLanguage: 'en-US',
    publisher: { '@type': 'Person', name: 'Alexis Lyon' }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alexis Lyon',
    url: 'https://alexislyon.com',
    image: 'https://alexislyon.com/images/alexis-portrait.jpg',
    jobTitle: 'Transformational Guide and Somatic Healer',
    description: 'Transformational guide and healer based on the Pacific coast of Costa Rica, serving clients globally through telehealth.',
    hasCredential: 'Licensed Marriage and Family Therapist, California',
    knowsAbout: ['Somatic depth work', 'Nervous system regulation', 'Psychological flexibility', 'Nature-based healing', 'Self-trust', 'Transformational coaching'],
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    areaServed: ['Worldwide', 'Costa Rica'],
    sameAs: []
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
        name: 'How much does a session cost?',
        acceptedAnswer: { '@type': 'Answer', text: 'Individual sessions are $175 for new clients. Sliding scale $100–175 is available for ongoing current clients. The Women\'s Group is $50/session. All new client relationships begin with a free 20-minute consultation.' }
      },
      {
        '@type': 'Question',
        name: 'Where are sessions held?',
        acceptedAnswer: { '@type': 'Answer', text: 'Sessions are held via secure telehealth for clients worldwide. Nature-based sessions are available in person on the Pacific coast of Costa Rica by arrangement.' }
      },
      {
        '@type': 'Question',
        name: 'When is Alexis available?',
        acceptedAnswer: { '@type': 'Answer', text: 'New client availability begins August 1, 2026. Session hours are 9:00 AM–1:45 PM Costa Rica time (CST). Summer hours: 8:00 AM–12:45 PM Pacific. Winter hours: 7:00 AM–11:45 AM Pacific.' }
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
          <Reveal><p className="eyebrow">Alexis Lyon · Transformational Guide & Healer</p></Reveal>
          <Reveal delay={0.12}><h1 className="display mt-8 max-w-5xl text-4xl sm:text-6xl md:text-8xl">There is a part of you that needs <em className="gold">healing</em>. And a part of you that needs <em className="gold">reclaiming</em>.</h1></Reveal>
          <Reveal delay={0.24}><p className="body-large mt-8 max-w-3xl">I hold space for the wound that carries grief and the wildness that has been waiting to come home — all rooted from soul.</p></Reveal>
          <Reveal delay={0.36}><div className="mt-10 flex flex-wrap gap-4"><Link className="btn btn-gold" href="/connect">Begin the Conversation</Link><Link className="btn btn-ghost" href="#for-you">Is This For You?</Link></div></Reveal>
        </div>
      </section>

      <section id="strip" className="section bg-warm"><div className="container text-center"><p className="display mx-auto max-w-4xl text-5xl text-forest">I help people who want to learn how to trust themselves.</p><p className="body-large mx-auto mt-6 max-w-3xl text-mid">Through a healing relationship grounded in somatic depth, nervous system regulation, psychological flexibility, and unconditional presence.</p></div></section>

      <section id="for-you" className="section"><div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><Reveal><div><p className="eyebrow">You belong here if</p><h2 className="display mt-5 text-5xl text-forest">Something in you needs healing. And something in you is ready to be reclaimed.</h2><p className="body-large mt-7 text-mid">There are two things alive in you right now — and they need different things. One is tender. The other is charged. Both are welcome here. Reunited, we find your True Self.</p><div className="mt-8 grid grid-cols-2 gap-3"><div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="/images/card-presence.jpg" alt="Tender presence — hands at heart" fill className="object-cover" /></div><div className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src="/images/card-truth.jpg" alt="Reclaiming wildness — arms open wide" fill className="object-cover" /></div></div></div></Reveal><div className="grid gap-4 md:grid-cols-2">{recognitions.map((r, i) => <Reveal key={r} delay={i * 0.03}><div className="card h-full"><span className="text-gold">◆</span><p className="mt-4 leading-8">{r}</p></div></Reveal>)}</div></div></section>

      <section id="permission" className="section bg-rose text-cream"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><Reveal><div><p className="eyebrow !text-gold-lt">A different kind of permission</p><h2 className="display mt-5 text-6xl">You do not have to be finished to begin.</h2></div></Reveal><div><p className="body-large text-cream/85">A damaging myth in the healing world is that growth must wait for wholeness. Psychological flexibility is not the reward at the end of healing. It is what makes the journey possible.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{permissions.map((p) => <p key={p} className="rounded-2xl bg-cream/10 p-4">{p}</p>)}</div></div></div></section>

      <section id="wound-wild" className="section bg-warm"><div className="container"><Reveal><p className="eyebrow">The wound & the wildness</p><h2 className="display mt-5 max-w-3xl text-5xl text-forest">Two territories. Two kinds of homecoming. One You.</h2><p className="body-large mt-6 max-w-4xl text-mid">Some of what you carry needs healing. Some of what you carry needs reclaiming. Learning to tell the difference is itself a form of self-trust.</p></Reveal><div className="mt-12 grid gap-1 md:grid-cols-2"><div className="card bg-cream"><p className="eyebrow">What needs healing</p><h3 className="display mt-5 text-4xl text-forest">The Wound</h3><p className="mt-5 leading-8 text-mid">The wound is what happened to you. It asks for witnessing, compassion, grief, and the kind of presence that says: I see you.</p></div><div className="card bg-cream"><p className="eyebrow">What needs reclaiming</p><h3 className="display mt-5 text-4xl text-forest">The Wildness</h3><p className="mt-5 leading-8 text-mid">The wildness is not what happened to you. It is the power, truth, and fierce knowing that learned it was not welcome — and wants to come home.</p></div></div></div></section>

      <section id="foundation" className="section dark-section dark"><div className="container"><Reveal><p className="eyebrow">The Foundation</p><h2 className="display mt-5 max-w-4xl text-5xl">Resilient bodies and nervous systems capable of dynamic, generative, regulated beingness.</h2></Reveal><div className="mt-12 grid gap-1 md:grid-cols-3">{pillars.map(([t, d]) => <div key={t} className="border border-cream/15 bg-cream/5 p-8"><h3 className="display text-3xl text-gold-lt">{t}</h3><p className="mt-5 leading-8">{d}</p></div>)}</div></div></section>

      <section id="change" className="section"><div className="container grid gap-12 lg:grid-cols-2"><Reveal><div><p className="eyebrow">How change actually happens</p><h2 className="display mt-5 text-5xl text-forest">Awareness. Openness. Active engagement.</h2><p className="body-large mt-7 text-mid">Psychological flexibility is the capacity to stay present with difficulty while continuing to move toward what matters.</p></div></Reveal><blockquote className="rounded-[2rem] bg-warm p-10"><p className="display text-3xl italic leading-relaxed text-forest">“Stop asking what box you fit in. Start asking what helps you grow.”</p><cite className="mt-5 block text-sm uppercase tracking-[.2em] text-mid">Steven C. Hayes, ACT</cite></blockquote></div></section>

      <section id="alchemy" className="section dark-section dark"><div className="container text-center"><p className="eyebrow mx-auto w-fit">Post-traumatic growth</p><h2 className="display mt-5 text-5xl">The alchemy begins where the wound is honored and the wildness is free.</h2><div className="mt-9 flex flex-wrap justify-center gap-3">{values.map((v) => <span key={v} className="rounded-full border border-gold-lt/40 px-5 py-3 text-gold-lt">{v}</span>)}</div></div></section>

      <section id="relationship" className="section"><div className="container"><p className="eyebrow">The healing relationship</p><h2 className="display mt-5 max-w-3xl text-5xl text-forest">The relationship is the medicine.</h2><div className="mt-10 grid gap-1 md:grid-cols-4">{[{label:'Witnessing',img:'/images/card-witnessing.jpg'},{label:'Co-regulating',img:'/images/card-coregulating.jpg'},{label:'Practicing presence',img:'/images/card-presence.jpg'},{label:'Returning to truth',img:'/images/card-truth.jpg'}].map(({label,img}) => <div className="overflow-hidden rounded-2xl" key={label}><div className="relative h-64 w-full"><Image src={img} alt={label} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 25vw" /></div><div className="bg-cream p-6"><h3 className="display text-2xl text-forest">{label}</h3></div></div>)}</div></div></section>

      <section id="the-work" className="section bg-warm"><div className="container"><p className="eyebrow">Experience the work</p><h2 className="display mt-5 text-5xl text-forest">Holistic. Somatic. Nature-based.</h2><div className="mt-10 grid gap-1 md:grid-cols-3">{offerings.map(([t, d]) => <div className="card bg-cream" key={t}><h3 className="display text-3xl text-forest">{t}</h3><p className="mt-5 leading-8 text-mid">{d}</p></div>)}</div></div></section>

      <section id="about" className="section"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="relative min-h-[420px] rounded-t-full overflow-hidden shadow-soft"><Image src="/images/alexis-home-about.jpg" alt="Alexis Lyon" fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 40vw" /></div><div><p className="eyebrow">About Alexis</p><h2 className="display mt-5 text-5xl text-forest">22 years of clinical depth, held in a wider field of soul, nature, and becoming.</h2><p className="body-large mt-7 text-mid">Alexis Lyon is based on the Pacific coast of Costa Rica and serves clients globally through telehealth. Her California LMFT background informs the depth of the work, while the current offering is transformational coaching and guidance — not therapy.</p><Link className="btn btn-forest mt-8" href="/about">Read More</Link></div></div></section>

      <section id="soul-story" className="relative section overflow-hidden"><div className="absolute inset-0"><Image src="/images/soul-story-bg.webp" alt="Wild grasses and leaves in soft morning light" fill className="object-cover object-center" sizes="100vw" /></div><div className="absolute inset-0 bg-forest/50" /><div className="container relative text-center text-cream"><p className="eyebrow mx-auto w-fit !text-gold-lt">Soul & story</p><h2 className="display mt-5 text-5xl">Rewriting the narrative from soul outward.</h2><div className="mt-8 flex flex-wrap justify-center gap-3">{['Soul', 'Spiritual', 'Mystical', 'Emotional', 'Mental', 'Body'].map((x) => <span className="rounded-full border border-cream/40 bg-cream/10 px-5 py-3 text-cream" key={x}>{x}</span>)}</div></div></section>

      <section id="experience" className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Forest Body Activation</p><h2 className="display mt-5 text-5xl text-forest">A guided doorway into the work.</h2><p className="body-large mt-6 text-mid">A guided meditation to help you find your way home to your body — and the three practices I will leave you with to take into your daily life.</p></div><div className="rounded-[2rem] bg-forest p-8 text-cream"><div className="relative w-full" style={{paddingTop:'56.25%'}}><iframe src="https://customer-ztqqgp1me9w0o1u1.cloudflarestream.com/d33dccdea5f1a8572569f5301b9cabaf/iframe?poster=%2Fimages%2Fforest-body-cover.webp" loading="lazy" className="absolute inset-0 h-full w-full rounded-2xl border-0" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div><ForestBodyForm /></div></div></section>

      <section id="offerings" className="section dark-section dark"><div className="container"><p className="eyebrow">Work with me</p><h2 className="display mt-5 text-5xl">Private-pay transformational guidance for the threshold you are standing in.</h2><div className="mt-10 grid gap-1 md:grid-cols-2 lg:grid-cols-4">{offeringsDetail.map(([t, d, format, price]) => <div className="border border-cream/15 bg-cream/5 p-8 flex flex-col" key={t}><h3 className="display text-2xl text-gold-lt">{t}</h3><p className="mt-4 leading-8 flex-1">{d}</p><p className="mt-6 text-xs leading-6 text-cream/60 border-t border-cream/10 pt-4">{format}</p><p className="mt-3 text-sm font-medium text-gold-lt">{price}</p></div>)}</div><p className="mt-8 rounded-2xl bg-cream/5 p-5 text-sm leading-7">{disclaimerText}</p></div></section>

      <section id="investment" className="section bg-warm"><div className="container max-w-3xl text-center"><p className="eyebrow mx-auto w-fit">Investment</p><h2 className="display mt-5 text-5xl text-forest">Begin with a free 20-minute consultation.</h2><div className="mt-8 text-left rounded-2xl bg-cream p-8 space-y-4 text-mid leading-8"><p>I offer transformational coaching and guidance — not therapy or clinical mental health treatment. What makes this work different from most coaching is the foundation it stands on: 22 years of clinical training and experience in somatic, holistic, and nature-based healing.</p><div className="grid gap-6 sm:grid-cols-2 mt-6"><div><p className="eyebrow text-forest">Individual Sessions</p><ul className="mt-3 space-y-2"><li>◆ $175/session — new clients</li><li>◆ Sliding scale $100–175 — ongoing current clients</li></ul></div><div><p className="eyebrow text-forest">Women's Group</p><ul className="mt-3 space-y-2"><li>◆ $50/session</li><li>◆ Approximately $100–150/month</li></ul></div></div><p className="text-sm italic">All new client relationships begin with a free 20-minute consultation. If financial circumstances are a genuine barrier, please bring that into our initial conversation.</p></div><Link className="btn btn-forest mt-8" href="/connect">Schedule a Free Consultation</Link></div></section>

      <section id="testimonial" className="section dark-section dark"><div className="container max-w-4xl text-center"><p className="display text-4xl italic leading-relaxed">“Alexis holds tenderness and fire with the same steady presence.”</p></div></section>

      <section id="connect" className="section"><div className="container grid gap-12 lg:grid-cols-2"><div><p className="eyebrow">Let’s connect</p><h2 className="display mt-5 text-5xl text-forest">Begin the conversation.</h2><p className="body-large mt-6 text-mid">Share what is calling you here. Alexis reads every message personally and responds within 48 hours.</p><ul className="mt-6 space-y-2 text-mid text-sm leading-7"><li>◆ Tell Alexis what you are looking for</li><li>◆ She will respond and share the right next step</li><li>◆ A free 20-minute consultation follows if aligned</li></ul></div><div><ContactForm /></div></div></section>
      <Footer />
    </main>
  );
}
