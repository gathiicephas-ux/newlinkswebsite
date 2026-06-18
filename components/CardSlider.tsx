'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blogPosts';

const AUTOPLAY_MS = 6000;

export default function CardSlider({ posts }: { posts: BlogPost[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const gap = parseFloat(getComputedStyle(track).gap) || 24;
    const firstCard = track.firstElementChild as HTMLElement | null;
    return (firstCard?.getBoundingClientRect().width || 0) + gap;
  }, []);

  const maxIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return 0;
    const s = step();
    const visible = s > 0 ? Math.max(1, Math.round(viewport.clientWidth / s)) : 1;
    return Math.max(0, posts.length - visible);
  }, [posts.length, step]);

  const goTo = useCallback((i: number) => setIndex(Math.max(0, Math.min(i, maxIndex()))), [maxIndex]);

  const restart = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex() ? 0 : i + 1));
    }, AUTOPLAY_MS);
  }, [maxIndex]);

  useEffect(() => {
    restart();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [restart]);

  const next = () => { goTo(index >= maxIndex() ? 0 : index + 1); restart(); };
  const prev = () => { goTo(index - 1); restart(); };

  return (
    <div
      className="blog-slider"
      onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
      onMouseLeave={restart}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
        if (timerRef.current) clearInterval(timerRef.current);
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        touchStartX.current = null;
        restart();
      }}
    >
      <div className="blog-slider__viewport" ref={viewportRef}>
        <div className="blog-slider__track" ref={trackRef} style={{ transform: `translateX(-${index * step()}px)` }}>
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link className="blog-card__media" href={`/blog/${post.slug}`}>
                <Image src={post.image} alt={post.imageAlt} fill sizes="320px" style={{ objectFit: 'cover' }} />
                <span className="blog-card__tag">{post.category}</span>
              </Link>
              <div className="blog-card__body">
                <span className="blog-card__meta">{post.readTime}</span>
                <h3 className="blog-card__title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <Link className="blog-card__more" href={`/blog/${post.slug}`}>
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <button className="blog-slider__arrow blog-slider__arrow--prev" type="button" aria-label="Previous articles" onClick={prev}>
        ‹
      </button>
      <button className="blog-slider__arrow blog-slider__arrow--next" type="button" aria-label="Next articles" onClick={next}>
        ›
      </button>
    </div>
  );
}
