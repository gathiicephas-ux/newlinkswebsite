import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogPosts';

const BASE = 'https://www.linksvaluers.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/branches`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/clients`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/faqs`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/book-valuation`, changeFrequency: 'monthly', priority: 0.9 }
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticPages, ...blogPages];
}
