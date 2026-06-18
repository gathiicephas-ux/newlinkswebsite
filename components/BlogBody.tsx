import type { BlogBlock } from '@/lib/blogPosts';

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.type === 'p') {
          return <p key={i} style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: block.text }} />;
        }
        if (block.type === 'h3') {
          return (
            <h3 key={i} style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '1.25rem', marginTop: 22 }}>
              {block.text}
            </h3>
          );
        }
        if (block.type === 'ol') {
          return (
            <ol key={i} style={{ margin: '18px 0 18px 22px', listStyle: 'decimal', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {block.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ol>
          );
        }
        if (block.type === 'ul') {
          return (
            <ul key={i} style={{ margin: '14px 0 14px 22px', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {block.items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
        }
        return null;
      })}
    </>
  );
}
