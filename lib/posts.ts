export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  readingTime: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
};

export const posts: PostMeta[] = [
  {
    slug: 'post-traumatic-growth',
    title: 'Post-Traumatic Growth: The Alchemy of the Wound',
    description: 'Post-traumatic growth is real, researched, and available. How the wound, fully honored, becomes the ground for wisdom, beauty, and a life led by your own values.',
    datePublished: '2026-07-15',
    readingTime: '6 min read',
    eyebrow: 'Trauma healing',
    image: '/images/nature/post-traumatic-growth.webp',
    imageAlt: 'New green shoots emerging from a dark forest floor in warm morning light'
  },
  {
    slug: 'psychological-flexibility',
    title: 'Psychological Flexibility: How Change Actually Happens',
    description: 'Psychological flexibility — the heart of Acceptance and Commitment Therapy — is the capacity to stay present with difficulty while moving toward what matters. It is how change actually happens.',
    datePublished: '2026-07-15',
    readingTime: '6 min read',
    eyebrow: 'How change happens',
    image: '/images/nature/psychological-flexibility.webp',
    imageAlt: 'Morning light opening across a misty tropical rainforest valley'
  }
];
