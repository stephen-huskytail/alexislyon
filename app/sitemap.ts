import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alexislyon.com';
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${base}/connect`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/philosophy`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/blog`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.datePublished ? new Date(`${p.datePublished}T12:00:00Z`) : lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.6
    })),
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 }
  ];
}
