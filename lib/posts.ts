export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished?: string;
  readingTime?: string;
  eyebrow?: string;
};

export const posts: PostMeta[] = [
  {
    slug: 'post-traumatic-growth',
    title: 'Post-Traumatic Growth: The Alchemy of the Wound',
    description: 'Post-traumatic growth is real, researched, and available. How the wound, fully honored, becomes the ground for wisdom, beauty, and a life led by your own values.',
    datePublished: '2026-07-15',
    readingTime: '6 min read',
    eyebrow: 'Trauma healing'
  },
  {
    slug: 'psychological-flexibility',
    title: 'Psychological Flexibility: How Change Actually Happens',
    description: 'Psychological flexibility — the heart of Acceptance and Commitment Therapy — is the capacity to stay present with difficulty while moving toward what matters. It is how change actually happens.',
    datePublished: '2026-07-15',
    readingTime: '6 min read',
    eyebrow: 'How change happens'
  },
  {
    slug: 'psychological-flexibility-overlooked-superpower',
    title: 'Psychological Flexibility: An Overlooked Superpower',
    description: 'Discover what psychological flexibility is, why it helps create meaningful change, and how awareness, openness, values, and Nature can help us cultivate it.',
    datePublished: '2026-08-13',
    readingTime: '9 min read',
    eyebrow: 'How change happens'
  }
];
