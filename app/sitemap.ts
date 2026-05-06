import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://alexislyon.com'; return ['', '/about','/work-with-me','/the-foundation','/connect','/privacy-policy','/disclaimer'].map((p)=>({url:base+p,lastModified:new Date(),changeFrequency:'monthly' as const,priority:p===''?1:.7})); }
