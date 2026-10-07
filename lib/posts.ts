export type PostMeta = {
  slug: string;
  title: string;
  /** Card copy on /blog. Doubles as the meta description unless `metaDescription` is set. */
  description: string;
  /** SEO meta description when it should differ from the card copy. */
  metaDescription?: string;
  featuredImage: string;
  featuredImageAlt: string;
  datePublished?: string;
  /** Set when the essay was materially revised after publishing; feeds Article.dateModified. */
  dateModified?: string;
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
    // Merged 2026-10-07: "An Overlooked Superpower" (formerly /blog/psychological-flexibility-overlooked-superpower,
    // now a 301 to this URL) is the base, with two sections carried over from "How Change Actually Happens".
    slug: 'psychological-flexibility',
    featuredImage: '/images/blog-overlooked-superpower.webp',
    featuredImageAlt: 'Dew droplets on a supple green leaf in warm morning light',
    title: 'Psychological Flexibility: An Overlooked Superpower',
    description: 'Discover what psychological flexibility is, why it helps create meaningful change, and how awareness, openness, values, and Nature can help us cultivate it.',
    metaDescription: 'What psychological flexibility is, why research calls it a key pathway of change, and how awareness, openness, and values help us cultivate it.',
    datePublished: '2026-08-13',
    dateModified: '2026-10-07',
    readingTime: '10 min read',
    eyebrow: 'Psychological flexibility'
  },
  {
    slug: 'post-traumatic-growth',
    featuredImage: '/images/blog-post-traumatic-growth-alchemy.png',
    featuredImageAlt: 'A young green plant growing from moss beside flowing water at sunrise, with a ribbon of warm golden light',
    title: 'Post-Traumatic Growth: The Alchemy of Wound and Wildness',
    description: 'What needs healing, what needs reclaiming, and what becomes possible at the places where life breaks us open.',
    metaDescription: 'What is post-traumatic growth? The research, its limits, and what becomes possible when we heal the wound and reclaim the wildness.',
    datePublished: '2026-07-15',
    dateModified: '2026-10-07',
    readingTime: '13 min read',
    eyebrow: 'Trauma healing'
  }
];
