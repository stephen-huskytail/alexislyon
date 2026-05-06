import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { disclaimerText, offerings, permissions, pillars, recognitions, values } from '@/lib/content';

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
    jobTitle: 'Transformational Guide and Somatic Healer',
    description: 'Transformational guide and healer based on the Pacific coast of Costa Rica, serving clients globally through telehealth.',
    hasCredential: 'Licensed Marriage and Family Therapist, California',
    knowsAbout: ['Somatic depth work', 'Nervous system regulation', 'Psychological flexibility', 'Nature-based healing', 'Self-trust', 'Transformational coaching'],
    address: { '@type': 'PostalAddress', addressCountry: 'CR' },
    areaServed: ['Worldwide', 'Costa Rica'],
    sameAs: ['https://alexislyon.com']
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
          <Reveal delay={0.12}><h1 className="display mt-8 max-w-5xl text-6xl md:text-8xl">There is a part of you that needs <em className="gold">healing</em>. And a part of you that needs <em className="gold">reclaiming</em>.</h1></Reveal>
          <Reveal delay={0.24}><p className="body-large mt-8 max-w-3xl">I hold space for the wound that carries grief and the wildness that has been waiting to come home — all rooted from soul.</p></Reveal>
          <Reveal delay={0.36}><div className="mt-10 flex flex-wrap gap-4"><Link className="btn btn-gold" href="/connect">Begin the Conversation</Link><Link className="btn btn-ghost" href="#for-you">Is This For You?</Link></div></Reveal>
        </div>
      </section>

      <section id="strip" className="section bg-warm"><div className="container text-center"><p className="display mx-auto max-w-4xl text-5xl text-forest">I help people who want to learn how to trust themselves.</p><p className="body-large mx-auto mt-6 max-w-3xl text-mid">Through a healing relationship grounded in somatic depth, nervous system regulation, psychological flexibility, and unconditional presence.</p></div></section>

      <section id="for-you" className="section"><div className="container grid gap-14 lg:grid-cols-[.85fr_1.15fr]"><Reveal><div><p className="eyebrow">You belong here if</p><h2 className="display mt-5 text-5xl text-forest">Something in you needs healing. And something in you is ready to be reclaimed.</h2><p className="body-large mt-7 text-mid">There are two things alive in you right now — and they need different things. One is tender. The other is charged. Both are welcome here.</p></div></Reveal><div className="grid gap-4 md:grid-cols-2">{recognitions.map((r, i) => <Reveal key={r} delay={i * 0.03}><div className="card h-full"><span className="text-gold">◆</span><p className="mt-4 leading-8">{r}</p></div></Reveal>)}</div></div></section>

      <section id="permission" className="section bg-rose text-cream"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr]"><Reveal><div><p className="eyebrow !text-gold-lt">A different kind of permission</p><h2 className="display mt-5 text-6xl">You do not have to be finished to begin.</h2></div></Reveal><div><p className="body-large text-cream/85">The most damaging myth in the healing world is that growth must wait for wholeness. Psychological flexibility is not the reward at the end of healing. It is what makes the journey possible.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{permissions.map((p) => <p key={p} className="rounded-2xl bg-cream/10 p-4">{p}</p>)}</div></div></div></section>

      <section id="wound-wild" className="section bg-warm"><div className="container"><Reveal><p className="eyebrow">The wound & the wildness</p><h2 className="display mt-5 max-w-3xl text-5xl text-forest">Two territories. Two kinds of homecoming.</h2><p className="body-large mt-6 max-w-4xl text-mid">Some of what you carry needs healing. Some of what you carry needs reclaiming. Learning to tell the difference is itself a form of self-trust.</p></Reveal><div className="mt-12 grid gap-1 md:grid-cols-2"><div className="card bg-cream"><p className="eyebrow">What needs healing</p><h3 className="display mt-5 text-4xl text-forest">The Wound</h3><p className="mt-5 leading-8 text-mid">The wound is what happened to you. It asks for witnessing, compassion, grief, and the kind of presence that says: I see you.</p></div><div className="card bg-cream"><p className="eyebrow">What needs reclaiming</p><h3 className="display mt-5 text-4xl text-forest">The Wildness</h3><p className="mt-5 leading-8 text-mid">The wildness is not what happened to you. It is the power, truth, and fierce knowing that learned it was not welcome — and wants to come home.</p></div></div></div></section>

      <section id="foundation" className="section dark-section dark"><div className="container"><Reveal><p className="eyebrow">The Foundation</p><h2 className="display mt-5 max-w-4xl text-5xl">Resilient bodies and nervous systems capable of dynamic, generative, regulated beingness.</h2></Reveal><div className="mt-12 grid gap-1 md:grid-cols-3">{pillars.map(([t, d]) => <div key={t} className="border border-cream/15 bg-cream/5 p-8"><h3 className="display text-3xl text-gold-lt">{t}</h3><p className="mt-5 leading-8">{d}</p></div>)}</div></div></section>

      <section id="change" className="section"><div className="container grid gap-12 lg:grid-cols-2"><Reveal><div><p className="eyebrow">How change actually happens</p><h2 className="display mt-5 text-5xl text-forest">Awareness. Openness. Active engagement.</h2><p className="body-large mt-7 text-mid">Psychological flexibility is the capacity to stay present with difficulty while continuing to move toward what matters.</p></div></Reveal><blockquote className="rounded-[2rem] bg-warm p-10"><p className="display text-3xl italic leading-relaxed text-forest">“Stop asking what box you fit in. Start asking what helps you grow.”</p><cite className="mt-5 block text-sm uppercase tracking-[.2em] text-mid">Steven C. Hayes, ACT</cite></blockquote></div></section>

      <section id="alchemy" className="section dark-section dark"><div className="container text-center"><p className="eyebrow mx-auto w-fit">Post-traumatic growth</p><h2 className="display mt-5 text-5xl">The alchemy begins where the wound is honored and the wildness is free.</h2><div className="mt-9 flex flex-wrap justify-center gap-3">{values.map((v) => <span key={v} className="rounded-full border border-gold-lt/40 px-5 py-3 text-gold-lt">{v}</span>)}</div></div></section>

      <section id="relationship" className="section"><div className="container"><p className="eyebrow">The healing relationship</p><h2 className="display mt-5 max-w-3xl text-5xl text-forest">The relationship is the medicine.</h2><div className="mt-10 grid gap-1 md:grid-cols-4">{['Witnessing', 'Co-regulating', 'Practicing presence', 'Returning to truth'].map((s, i) => <div className="card" key={s}><span className="text-gold">0{i + 1}</span><h3 className="display mt-4 text-3xl text-forest">{s}</h3></div>)}</div></div></section>

      <section id="the-work" className="section bg-warm"><div className="container"><p className="eyebrow">Experience the work</p><h2 className="display mt-5 text-5xl text-forest">Holistic. Somatic. Nature-based.</h2><div className="mt-10 grid gap-1 md:grid-cols-3">{offerings.map(([t, d]) => <div className="card bg-cream" key={t}><h3 className="display text-3xl text-forest">{t}</h3><p className="mt-5 leading-8 text-mid">{d}</p></div>)}</div></div></section>

      <section id="about" className="section"><div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="min-h-[420px] rounded-t-full bg-warm shadow-soft flex items-center justify-center text-forest"><span className="font-display text-7xl">AL</span></div><div><p className="eyebrow">About Alexis</p><h2 className="display mt-5 text-5xl text-forest">22 years of clinical depth, held in a wider field of soul, nature, and becoming.</h2><p className="body-large mt-7 text-mid">Alexis Lyon is based on the Pacific coast of Costa Rica and serves clients globally through telehealth. Her California LMFT background informs the depth of the work, while the current offering is transformational coaching and guidance — not therapy.</p><Link className="btn btn-forest mt-8" href="/about">Read More</Link></div></div></section>

      <section id="soul-story" className="section bg-warm"><div className="container text-center"><p className="eyebrow mx-auto w-fit">Soul & story</p><h2 className="display mt-5 text-5xl text-forest">Rewriting the narrative from soul outward.</h2><div className="mt-8 flex flex-wrap justify-center gap-3">{['Soul', 'Spiritual', 'Mystical', 'Emotional', 'Mental', 'Body'].map((x) => <span className="rounded-full bg-cream px-5 py-3 text-forest" key={x}>{x}</span>)}</div></div></section>

      <section id="experience" className="section"><div className="container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Forest Body Activation</p><h2 className="display mt-5 text-5xl text-forest">A guided doorway into the work.</h2><p className="body-large mt-6 text-mid">Video and audio links will be added when Alexis provides final media. The design is ready for a click-to-load embed and lead magnet delivery.</p></div><div className="rounded-[2rem] bg-forest p-8 text-cream"><div className="aspect-video rounded-2xl border border-cream/20 bg-cream/10 flex items-center justify-center"><span className="text-gold-lt">▶ Video placeholder</span></div><form className="mt-6 flex gap-3 max-sm:flex-col"><input placeholder="Email for the audio download" /><button className="btn btn-gold shrink-0" type="button">Receive Audio</button></form></div></div></section>

      <section id="offerings" className="section dark-section dark"><div className="container"><p className="eyebrow">Work with me</p><h2 className="display mt-5 text-5xl">Private-pay transformational guidance for the threshold you are standing in.</h2><div className="mt-10 grid gap-1 md:grid-cols-3">{offerings.map(([t, d]) => <div className="border border-cream/15 bg-cream/5 p-8" key={t}><h3 className="display text-3xl text-gold-lt">{t}</h3><p className="mt-5 leading-8">{d}</p></div>)}</div><p className="mt-8 rounded-2xl bg-cream/5 p-5 text-sm leading-7">{disclaimerText}</p></div></section>

      <section id="investment" className="section bg-warm"><div className="container max-w-3xl text-center"><p className="eyebrow mx-auto w-fit">Investment</p><h2 className="display mt-5 text-5xl text-forest">Begin with a free 20-minute consultation.</h2><p className="body-large mt-6 text-mid">Session pricing and package details can be finalized with Alexis. The site is structured for one clear consultation-first conversion path.</p><Link className="btn btn-forest mt-8" href="/connect">Schedule a Free Consultation</Link></div></section>

      <section id="testimonial" className="section dark-section dark"><div className="container max-w-4xl text-center"><p className="display text-4xl italic leading-relaxed">“Alexis holds tenderness and fire with the same steady presence.”</p><p className="mt-6 text-cream/60">Placeholder testimonial — replace with approved client language.</p></div></section>

      <section id="connect" className="section"><div className="container grid gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><p className="eyebrow">Let’s connect</p><h2 className="display mt-5 text-5xl text-forest">Begin the conversation.</h2><p className="body-large mt-6 text-mid">Share what is calling you here. Alexis will respond within 48 hours.</p><div className="mt-8"><ContactForm /></div></div><aside className="rounded-[2rem] bg-warm p-8"><h3 className="display text-3xl text-forest">Free consultation</h3><p className="mt-4 leading-8 text-mid">Calendly will be embedded here once the booking URL is provided.</p><Link className="btn btn-forest mt-7" href="/connect">Open Connect Page</Link></aside></div></section>
      <Footer />
    </main>
  );
}
