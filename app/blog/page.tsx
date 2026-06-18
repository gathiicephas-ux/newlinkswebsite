import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import AvatarCallout from '@/components/AvatarCallout';
import { blogPosts } from '@/lib/blogPosts';

export const metadata: Metadata = {
  title: 'Links Insights — Vehicle Valuation Advice & News',
  description: 'Practical guidance on vehicle valuation, insurance claims, bank collateral, and pre-purchase inspections from Kenya\'s leading valuation authority.',
  alternates: { canonical: '/blog' }
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-dark" style={{ paddingBlock: 64 }}>
        <div className="container">
          <span className="eyebrow">Links Insights</span>
          <h1 className="display" style={{ color: '#fff', fontSize: 'clamp(2.4rem,5vw,3.6rem)' }}>Straight Talk on Vehicle Valuation</h1>
          <p className="lead" style={{ marginTop: 14 }}>
            Practical, field-tested guidance from the team that values over a million vehicles a year — for owners,
            buyers, fleet managers, and finance professionals across Kenya.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <AvatarCallout>
              <b>Curated by the Links Team</b>
              Practical, field-tested advice — not theory.
            </AvatarCallout>
          </div>

          <Reveal className="cards-3">
            <>
              {blogPosts.map((post) => (
                <article className="blog-card" key={post.slug} style={{ flex: 'none' }}>
                  <Link className="blog-card__media" href={`/blog/${post.slug}`}>
                    <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <span className="blog-card__tag">{post.category}</span>
                  </Link>
                  <div className="blog-card__body">
                    <span className="blog-card__meta">{post.dateLabel} · {post.readTime}</span>
                    <h3 className="blog-card__title"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <Link className="blog-card__more" href={`/blog/${post.slug}`}>Read Article →</Link>
                  </div>
                </article>
              ))}
            </>
          </Reveal>
        </div>
      </section>
    </>
  );
}
