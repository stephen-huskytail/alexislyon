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
    title: 'Psychological Flexibility: An Overlooked Superpower',
    description: 'Discover what psychological flexibility is, why it helps create meaningful change, and how awareness, openness, values, and Nature can help us cultivate it.'
  }
];
