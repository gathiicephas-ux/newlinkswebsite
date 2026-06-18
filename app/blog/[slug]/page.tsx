import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import AvatarCallout from '@/components/AvatarCallout';
import BlogBody from '@/components/BlogBody';
import { blogPosts, getPostBySlug } from '@/lib/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` }
  };
}

const CTA_BY_SLUG: Record<string, string> = {
  'breakdown-accident-first-hour': 'Need an assessment after an accident?',
  'gps-tagged-digital-reports': 'See how a Links digital report looks.',
  'inside-a-links-inspection': 'Ready for an inspection?',
  'speed-up-insurance-claims': 'Get an independent valuation for your claim.',
  'pre-purchase-inspection-used-car': 'Book a pre-purchase inspection before you commit.'
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <Reveal>
            <span className="blog-card__tag" style={{ position: 'static', display: 'inline-block', marginBottom: 14 }}>
              {post.category}
            </span>
            <h1 className="section-title" style={{ fontSize: 'clamp(1.9rem,4.5vw,2.7rem)' }}>{post.title}</h1>
            <p className="muted" style={{ marginTop: 8, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '.04em', fontWeight: 600 }}>
              {post.dateLabel} · {post.readTime}
            </p>
            <div className="media-frame" style={{ margin: '26px 0' }}>
              <Image src={post.image} alt={post.imageAlt} width={760} height={428} style={{ width: '100%', height: 'auto' }} priority />
            </div>
            <p className="lead" style={{ maxWidth: 'none' }}>{post.excerpt}</p>
            <BlogBody blocks={post.body} />
            <AvatarCallout>
              {CTA_BY_SLUG[post.slug]} <Link href="/book-valuation">Book a Valuation</Link>
            </AvatarCallout>
          </Reveal>
        </div>
      </article>

      <section className="section bg-offwhite" style={{ paddingTop: 0 }}>
        <div className="container">
          <h3 className="section-title" style={{ fontSize: '1.4rem', marginBottom: 18 }}>More Insights</h3>
          <div className="cards-3">
            {blogPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((p) => (
                <article className="blog-card" key={p.slug}>
                  <Link className="blog-card__media" href={`/blog/${p.slug}`}>
                    <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <span className="blog-card__tag">{p.category}</span>
                  </Link>
                  <div className="blog-card__body">
                    <span className="blog-card__meta">{p.readTime}</span>
                    <h3 className="blog-card__title"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                    <Link className="blog-card__more" href={`/blog/${p.slug}`}>Read Article →</Link>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark cta-close" style={{ background: 'var(--dark-2)' }}>
        <div className="container">
          <h2 className="section-title">Start With a Valuation You Can Trust</h2>
          <p>
            Whether you&rsquo;re financing, insuring, buying, or managing a fleet — Links delivers independent
            valuations trusted by Kenya&rsquo;s top institutions.
          </p>
          <div className="cta-close__btns">
            <Link className="btn btn--primary" href="/book-valuation">Book a Valuation</Link>
            <Link className="btn btn--ghost" href="/contact">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
