import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Coaching, wellness, telehealth, results, crisis, and website disclaimer for Alexis Lyon.'
};

const sections = [
  {
    title: 'Transformational coaching and guidance — not therapy',
    body: [
      'The services described on this website are transformational coaching, somatic guidance, nature-based healing support, education, and personal growth work. They are not psychotherapy, clinical mental health treatment, medical care, diagnosis, or crisis services.',
      'Alexis Lyon’s clinical background and LMFT experience may inform the depth and integrity of this work, but engaging with this website or booking non-clinical services does not create a therapist-client relationship.'
    ]
  },
  {
    title: 'No medical, mental health, or legal advice',
    body: [
      'Website content is for general informational and educational purposes only. It is not a substitute for professional medical, mental health, psychiatric, legal, financial, or other licensed professional advice.',
      'Always seek the advice of qualified professionals regarding medical or mental health conditions, medications, diagnosis, treatment decisions, legal questions, or other specialized concerns.'
    ]
  },
  {
    title: 'Crisis and emergency support',
    body: [
      'This website and its contact forms are not monitored for emergencies and should not be used for crisis communication. If you are in immediate danger, call local emergency services now.',
      'If you are in the United States and experiencing a mental health crisis, call or text 988 for the Suicide & Crisis Lifeline. If you are outside the United States, contact your local emergency number or a local crisis support service.'
    ]
  },
  {
    title: 'Telehealth, location, and scope of services',
    body: [
      'Alexis may work with clients remotely and globally where appropriate. The availability, scope, and suitability of services can vary based on your location, needs, and applicable laws or professional requirements.',
      'Submitting a form or scheduling a consultation does not guarantee that services are appropriate, available, or accepted for your situation.'
    ]
  },
  {
    title: 'Results are not guaranteed',
    body: [
      'Personal growth, nervous system work, somatic practice, and transformational guidance are highly individual. No specific outcome, timeline, symptom change, relationship change, income change, health result, or life result is promised or guaranteed.',
      'Testimonials, examples, or descriptive language on this site reflect individual experiences or intended qualities of the work and should not be interpreted as typical or guaranteed results.'
    ]
  },
  {
    title: 'Informed participation',
    body: [
      'Somatic, reflective, emotional, and nature-based practices may bring up strong sensations, memories, feelings, or insights. You are responsible for listening to your body, honoring your limits, and seeking additional professional support when needed.',
      'Participation in coaching or guidance is voluntary, and you may pause, decline, or stop any practice that does not feel appropriate for you.'
    ]
  },
  {
    title: 'Website information and availability',
    body: [
      'The content on this website is provided in good faith, but it may not always be complete, current, or free from errors. Website content may be changed, updated, or removed at any time without notice.',
      'The website may occasionally be unavailable due to maintenance, third-party service issues, internet outages, or other technical causes.'
    ]
  },
  {
    title: 'External links and third-party tools',
    body: [
      'This website may link to or embed third-party tools such as scheduling platforms, email services, video platforms, analytics tools, or payment services. Alexis is not responsible for third-party websites, policies, content, uptime, or data practices.',
      'Use third-party links and tools at your own discretion and review their terms and privacy policies before submitting information.'
    ]
  },
  {
    title: 'Intellectual property',
    body: [
      'Unless otherwise noted, website copy, structure, branding, and original materials are owned by Alexis Lyon or used with permission. You may not copy, republish, sell, or distribute site materials without written permission, except for brief personal or fair-use references.'
    ]
  },
  {
    title: 'Limitation of liability',
    body: [
      'To the fullest extent permitted by law, Alexis Lyon is not liable for damages or losses arising from your use of this website, reliance on website content, use of third-party links or tools, or participation in services except where liability cannot be excluded under applicable law.'
    ]
  }
];

export default function Disclaimer() {
  return (
    <main>
      <Nav />
      <section className="section pt-36">
        <div className="container max-w-4xl">
          <p className="eyebrow">Important boundaries</p>
          <h1 className="display mt-5 text-6xl text-forest">Disclaimer</h1>
          <p className="body-large mt-6 text-mid">
            Please read this disclaimer before using this website, submitting a form, scheduling a consultation, or engaging with Alexis Lyon’s services.
          </p>
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
