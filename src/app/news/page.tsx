'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: { name: string; slug: string };
  created_at: string;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { name: 'All', slug: 'all' },
    { name: 'Politics', slug: 'politics' },
    { name: 'Business', slug: 'business' },
    { name: 'Education', slug: 'education' },
    { name: 'Culture', slug: 'culture' },
    { name: 'Sports', slug: 'sports' },
  ];

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(a => a.category?.slug === activeCategory);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      {/* Header */}
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '30px' }}>
            {['News', 'Events', 'Education', 'Community'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} style={{ color: 'white', textDecoration: 'none' }}>{item}</Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Page Title */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #FF6B00 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>Latest News</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>Stay informed with the Indian Malaysian community</p>
      </div>

      {/* Category Filter */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '30px 40px' }}>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              style={{
                padding: '10px 25px',
                border: 'none',
                borderRadius: '25px',
                background: activeCategory === cat.slug ? '#FF6B00' : '#f0f0f0',
                color: activeCategory === cat.slug ? 'white' : '#333',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {loading ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '60px' }}>Loading articles...</p>
        ) : filteredArticles.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '60px' }}>No articles found in this category.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                  <div style={{ height: '200px', background: 'linear-gradient(135deg, #8B1538, #FF6B00)' }} />
                  <div style={{ padding: '25px' }}>
                    <span style={{ background: '#FF6B00', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {article.category?.name || 'News'}
                    </span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#1A1A1A', margin: '15px 0 10px', lineHeight: 1.4 }}>
                      {article.title}
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6 }}>{article.excerpt}</p>
                    <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '15px' }}>
                      {new Date(article.created_at).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
