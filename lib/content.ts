export const navItems = [
  { label: 'You Belong Here', href: '/#for-you' }, { label: 'Somatic Coaching', href: '/somatic-coaching' }, { label: 'Work With Me', href: '/#work' }, { label: 'The Becoming', href: '/the-becoming' }, { label: 'About', href: '/about' }, { label: 'Philosophy', href: '/philosophy' }, { label: 'Blog', href: '/blog' }
];
export const disclaimerText = "Coaching and transformational guidance with Alexis Lyon are not psychotherapy and are not a substitute for psychotherapy or other mental health treatment. Working together does not create a psychotherapeutic relationship, and Alexis does not act as a client's personal therapist. Alexis is a Licensed Marriage and Family Therapist in California. Her clinical background makes her a more informed coach and can enrich the work, but it does not change the nature of the coaching relationship. If you are in crisis, please contact a licensed mental health professional, call or text 988 in the US, or call your local emergency number.";
export const disclaimerFirstPerson = "My coaching and transformational guidance are not psychotherapy and are not a substitute for it. Our work together does not create a psychotherapeutic relationship, and I am not your personal therapist. My 22 years as a licensed therapist make me a more informed coach and can enrich our work, but they don't change what this relationship is. If you need therapy, I'm glad to help you find the right support.";
export const tagline = 'Healing for the wound. Reclaiming for the wildness.';
export const credentialsLine = 'MA in Counseling Psychology, specialization in Somatic Psychology · Certified Ecotherapist · Licensed Marriage and Family Therapist (California).';

// Coaching vs. therapy FAQ (Alexis's own wording, 2026-11-09 website updates doc; lawyer-guided, do not edit).
export const coachingFaqs: { question: string; paragraphs: string[] }[] = [
  {
    question: 'How is coaching different from therapy?',
    paragraphs: [
      "Coaching gives us room to go places therapy often can't: into nature, the body, myth and story, and toward the person you are becoming. There are no diagnoses or labels here, no insurance limits on what we focus on, and the work can happen from anywhere in the world, or outdoors here in Costa Rica.",
      "Behind every session are 22 years of clinical experience. My background as a licensed therapist makes me a more informed coach and can enrich our work together. But coaching is not psychotherapy, and it is not a substitute for it. Therapy is clinical treatment: it begins with an assessment, may include a diagnosis, and follows a treatment plan for mental health conditions. Coaching does not include clinical assessment, diagnosis or treatment planning. I am not your therapist, and our work does not create a psychotherapeutic relationship. If therapy would serve you better, I'm glad to help you find it."
    ]
  },
  {
    question: 'Can I do coaching alongside therapy?',
    paragraphs: [
      "Yes. Coaching can be a powerful complement to therapy, and many people find the two work beautifully together. If you have a therapist, you're welcome to keep working with them while we work together."
    ]
  }
];

// Packages (Alexis's own wording, 2026-11-09 website updates doc)
export const packagesIntro = 'Every package starts with the free 20-minute consultation. One-on-one sessions are 60 minutes.';
export const packages = [
  { name: 'The Becoming', price: '$150/month', includes: "2 online women's group sessions a month (4 to 8 members, 75 to 90 minutes each)", commitment: '3 months, billed monthly', href: '/the-becoming' },
  { name: 'Rooted', price: '$500/month', includes: '3 one-on-one sessions a month', commitment: '3 months, billed monthly, or $1,400 paid in full', href: '/connect' },
  { name: 'Immersion', price: '$650/month', includes: '4 one-on-one sessions a month (weekly)', commitment: '3 months, billed monthly, or $1,800 paid in full', href: '/connect' }
];
export const tendingLine = 'Already completed a season of work together? Continue with Tending: two one-on-one sessions a month for $350, month to month.';
export const singleSessionLine = 'Prefer a single session? One 60-minute one-on-one session is $200.';
export const checkInNote = "Between sessions, you're welcome to reach out if something comes up, and we can arrange a brief 5 to 10 minute check-in when it's truly needed. This is not a crisis service; in an emergency, please contact a licensed professional, call or text 988 in the US, or call your local emergency number.";
export const permissions = [
  'Your symptoms do not disqualify your becoming. You are allowed to want more while you are still healing.',
  'You can move toward what matters while the difficulty is still present. You do not have to wait for it to pass.',
  'Your tenderness and your fire belong in the same room. You do not have to choose between them.',
  'You do not have to abandon the wound to reclaim the wildness. Both of you are coming.',
  'You do not need to arrive here already safe. We build safety together, inside the work, at your pace.',
  'Your life can be messy and beautiful at the same time. It probably already is.'
];
export const pillars = [
  ['Safety','Safety is built inside the work, over time. Through steady presence, the nervous system learns that aliveness does not have to equal danger.'],
  ['Regulation','Regulation is not control. It is the capacity to stay connected to yourself while sensation, grief, longing, and truth move through.'],
  ['Psychological Flexibility','Awareness, openness, and active engagement create a life led by values — not by old protection strategies. Presence is both practice and destination.']
];

// The consolidated single offering — Work With Me section on the homepage
export const offering = {
  title: 'Transformational Guidance',
  subtitle: 'One-on-one work for the threshold you are standing in.',
  body: 'Sustained, integrative work that weaves together the somatic, the psychological, the spiritual, and the natural world — grounded in 22 years of trauma-informed clinical depth and offered in service of your transformation.',
  lead: 'Every relationship is built to fit you. Depending on what you need, our work together may include:',
  includes: [
    ['Somatic depth work', 'slow, precise sessions with the body and nervous system, where insight becomes lived capacity rather than an idea'],
    ['Nervous system regulation', 'building the felt experience of safety, from wherever you are starting'],
    ['Psychological flexibility', 'learning to move toward what matters while difficulty is still present'],
    ['Nature-based sessions', 'available in person on the Pacific coast of Costa Rica, where the natural world becomes co-regulator'],
    ['The healing relationship itself', 'unconditional acceptance, presence, curiosity, and compassion, week after week']
  ],
  close: 'We find the right rhythm together in your free consultation.'
};

export const becomingGroup = {
  title: 'The Becoming — Women\'s Group',
  body: 'An intimate group of 4–8 women gathering regularly to do real inner work in community. We work with the body, the nervous system, the stories we carry, the dreams we are reaching toward, and the wounds we are learning to alchemize into wisdom.',
  format: '75–90 min · Online by video · Min. 3-month commitment',
  price: '$150/month · Two online group sessions a month',
  href: '/the-becoming'
};

export const availabilityText = 'Sessions are available weekday mornings, Pacific time. Some evening availability may be possible — including for The Becoming women\'s group. Please inquire when you connect.';

// The four healing-relationship cards — full treatment lives on /philosophy
export const relationshipCards = [
  { label: 'Witnessing', desc: 'You are seen without being assessed. Nothing about you is a problem to be solved.', img: '/images/card-witnessing.jpg', pos: 'center top' },
  { label: 'Co-regulating', desc: 'Your nervous system borrows steadiness from mine until it remembers its own.', img: '/images/card-coregulating-v2.jpg', pos: 'center 22%' },
  { label: 'Practicing presence', desc: 'We stay here, together, in the only moment that is ever actually real.', img: '/images/card-presence.jpg', pos: 'center top' },
  { label: 'Returning to truth', desc: 'Again and again, back to what your body already knows.', img: '/images/card-truth.jpg', pos: 'center 46%' }
];

export const values = ['Beauty','Balance','Growth','Truth','Dignity'];
export const recognitions = ['You carry a wound that has never been fully witnessed — and you are ready to move through it, not around it.','You sense a part of yourself that was put away long ago — wild, potent, fierce — and you want it back.','You are done waiting to be "healed enough" to pursue the life your soul is calling you toward.','You long for self-trust and self-love that does not collapse when things get hard.','You want your dreams held with the same care as your wounds.','You are ready for a guide who can hold both your tenderness and your fire.'];
export const meta = {
  about: 'About Alexis Lyon — Trauma-Informed Transformational Guide',
  philosophy: 'Philosophy — The Foundation of the Work',
  blog: 'Blog — Writing on Healing, Growth & the Nervous System',
  connect: 'Schedule a Free Consultation'
};
