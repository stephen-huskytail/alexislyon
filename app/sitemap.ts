import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alexislyon.com';
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${base}/work-with-me`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/connect`, lastModified, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/the-foundation`, lastModified, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified, changeFrequency: 'yearly' as const, priority: 0.3 }
  ];
}
