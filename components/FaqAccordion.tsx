'use client';

import { useState } from 'react';

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  key: string;
  label: string;
  items: FaqItem[];
}

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  const [activeCat, setActiveCat] = useState(categories[0]?.key ?? '');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  function toggleItem(id: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <>
      <div className="faq-tabs reveal in">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`faq-tab${activeCat === cat.key ? ' is-active' : ''}`}
            onClick={() => setActiveCat(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {categories.map((cat) => (
        <div key={cat.key} className={`faq-cat${activeCat === cat.key ? ' is-active' : ''}`}>
          {cat.items.map((item, i) => {
            const id = `${cat.key}-${i}`;
            const isOpen = openItems.has(id);
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={id}>
                <button className="faq-q" aria-expanded={isOpen} onClick={() => toggleItem(id)}>
                  {item.q}
                  <span className="plus" />
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? '600px' : '0' }}>
                  <div className="faq-a__inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}
