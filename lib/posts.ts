export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  featuredImage: string;
  featuredImageAlt: string;
  datePublished?: string;
  readingTime?: string;
  eyebrow?: string;
};

export const posts: PostMeta[] = [
  {
    slug: 'the-bumpy-road-which-road-is-yours-to-travel',
    featuredImage: '/images/blog-bumpy-road.webp',
    featuredImageAlt: 'A winding dirt road through lush green jungle toward soft morning light',
    title: 'The Bumpy Road: Which Road Is Yours to Travel?',
    description: 'A reflection on meaningful discomfort, self-trust, and listening for the road that calls us more fully into life.',
    datePublished: '2026-08-24',
    readingTime: '8 min read',
    eyebrow: 'Self-trust'
  },
  {
    slug: 'psychological-flexibility-overlooked-superpower',
    featuredImage: '/images/blog-overlooked-superpower.webp',
    featuredImageAlt: 'Dew droplets on a supple green leaf in warm morning light',
    title: 'Psychological Flexibility: An Overlooked Superpower',
    description: 'Discover what psychological flexibility is, why it helps create meaningful change, and how awareness, openness, values, and Nature can help us cultivate it.',
    datePublished: '2026-08-13',
    readingTime: '9 min read',
    eyebrow: 'Psychological flexibility'
  },
  {
    slug: 'post-traumatic-growth',
    featuredImage: '/images/blog-post-traumatic-growth.webp',
    featuredImageAlt: 'Fresh fern fronds unfolding beside a moss-covered fallen tree',
    title: 'Post-Traumatic Growth: The Alchemy of the Wound',
    description: 'Post-traumatic growth is real, researched, and available. How the wound, fully honored, becomes the ground for wisdom, beauty, and a life led by your own values.',
    datePublished: '2026-07-15',
    readingTime: '6 min read',
    eyebrow: 'Trauma healing'
  },
  {
    slug: 'psychological-flexibility',
    featuredImage: '/images/blog-how-change-happens.webp',
    featuredImageAlt: 'Clear turquoise water flowing gently around smooth stones',
    title: 'Psychological Flexibility: How Change Actually Happens',
    description: 'Psychological flexibility — the heart of Acceptance and Commitment Therapy — is the capacity to stay present with difficulty while moving toward what matters. It is how change actually happens.',
    datePublished: '2026-07-15',
    readingTime: '6 min read',
    eyebrow: 'How change happens'
  }
];
