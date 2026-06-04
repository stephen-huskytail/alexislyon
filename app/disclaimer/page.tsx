import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for Alexis Lyon covering coaching, licensing, crisis support, online sessions, results, external links, and intellectual property.',
  openGraph: {
    title: 'Disclaimer',
    description: 'Important boundaries for transformational coaching and online guidance.',
    images: [{ url: '/api/og?title=Disclaimer&sub=Important+Boundaries+and+Crisis+Support', width: 1200, height: 630, alt: 'Disclaimer' }]
  },
  twitter: { card: 'summary_large_image', images: ['/api/og?title=Disclaimer&sub=Important+Boundaries+and+Crisis+Support'] },
  alternates: { canonical: '/disclaimer' }
};

const sections = [
  {
    title: 'This Is Not Therapy',
    body: [
      'The services described on this website are transformational coaching, somatic guidance, nature-based healing support, education, and personal growth work. They are not psychotherapy, clinical mental health treatment, medical care, diagnosis, or crisis services.',
      'Using this website, reading its content, submitting a form, booking a consultation, or engaging in non-clinical services does not create a therapist-client relationship.'
    ]
  },
  {
    title: 'Professional Licensing',
    body: [
      'Alexis Lyon has professional clinical training and is an LMFT licensed in California. That background may inform the depth, ethics, and care of her work.',
      'Unless specifically agreed in writing through a separate clinical services arrangement, the work offered through this website is not clinical therapy and is not offered as licensed mental health treatment. Services may not be appropriate for every person, location, or circumstance.'
    ]
  },
  {
    title: 'No Guarantee of Results',
    body: [
      'Personal growth, somatic practice, nervous system work, and transformational guidance are individual processes. No specific result, outcome, timeline, symptom reduction, relationship change, health change, business outcome, or life change is promised or guaranteed.',
      'Testimonials, examples, and descriptive language on this site represent individual experiences or the intended spirit of the work and should not be interpreted as typical or guaranteed outcomes.'
    ]
  },
  {
    title: 'Telehealth and Online Sessions',
    body: [
      'Alexis may work with clients remotely or online where appropriate. Online sessions require a private location, reliable internet, and your active participation in maintaining your own safety and confidentiality.',
      'Availability and suitability of services may vary based on your location, needs, and applicable legal or professional requirements. Scheduling a consultation does not guarantee that services will be available or appropriate for your situation.'
    ]
  },
  {
    title: 'External Links',
    body: [
      'This website may link to or embed third-party tools, websites, scheduling platforms, email services, videos, payment tools, or resources. Alexis Lyon is not responsible for third-party content, privacy practices, terms, security, uptime, or accuracy.',
      'Use external links and third-party tools at your own discretion and review their policies before submitting information.'
    ]
  },
  {
    title: 'Accuracy of Information',
    body: [
      'Website content is provided in good faith for general informational and educational purposes. It may not always be complete, current, or error-free. Content may be changed, updated, or removed at any time without notice.',
      'Nothing on this website should be taken as medical, mental health, legal, financial, or other licensed professional advice.'
    ]
  },
  {
    title: 'Intellectual Property',
    body: [
      'Unless otherwise noted, the copy, structure, branding, original materials, and creative content on this website are owned by Alexis Lyon or used with permission.',
      'You may not copy, republish, sell, distribute, or adapt website materials without written permission, except for brief personal or fair-use references.'
    ]
  }
];

export default function Disclaimer() {
  return (
    <main id="page-content">
      <Nav />
      <section className="section pt-36">
        <div className="container max-w-4xl">
          <p className="eyebrow">Important boundaries</p>
          <h1 className="display mt-5 text-4xl sm:text-5xl md:text-6xl text-forest">Disclaimer</h1>
          <p className="body-large mt-6 text-mid">
            Please read this disclaimer before using this website, submitting a form, scheduling a consultation, or engaging with Alexis Lyon’s services.
          </p>

          <div className="mt-10 rounded-[2rem] border border-gold/40 bg-warm p-8 shadow-soft">
            <p className="eyebrow">If you are in crisis</p>
            <h2 className="display mt-3 text-4xl text-forest">This website is not emergency support.</h2>
            <p className="mt-5 leading-8 text-mid">
              If you are in immediate danger, call local emergency services now. If you are in the United States and experiencing a mental health crisis, call or text <strong className="text-forest">988</strong> for the Suicide & Crisis Lifeline. If you are outside the United States, contact your local emergency number or local crisis support service.
            </p>
          </div>

          <div className="mt-10 space-y-10 text-mid">
            {sections.map((section) => (
              <section key={section.title} className="rounded-[1.5rem] bg-warm p-7">
                <h2 className="display text-3xl text-forest">{section.title}</h2>
                <div className="mt-4 space-y-4 leading-8">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <div className="rounded-[1.5rem] border border-gold/30 p-7">
              <h2 className="display text-3xl text-forest">Acknowledgment</h2>
              <p className="mt-4 leading-8">
                By using this website, you acknowledge that you have read and understood this disclaimer. This disclaimer is provided for general transparency and should not be treated as legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
