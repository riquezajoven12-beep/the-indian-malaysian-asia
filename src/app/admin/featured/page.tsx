'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminFeaturedPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [featured, setFeatured] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get all articles
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setArticles(data);
      });
    
    // Get current featured
    fetch('/api/featured')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) setFeatured(data);
        setLoading(false);
      });
  }, []);

  const setAsFeatured = async (articleId: string) => {
    const res = await fetch('/api/featured', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ article_id: articleId }),
    });

    if (res.ok) {
      alert('Featured story updated!');
      window.location.reload();
    } else {
      alert('Error updating featured story');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '5px' }}>⭐ Featured Story</h1>
        <p style={{ color: '#666' }}>Select which article appears as the featured story on the homepage</p>
      </div>

      {/* Current Featured */}
      {featured && (
        <div style={{ background: '#fff5f0', border: '2px solid #FF6B00', padding: '25px', borderRadius: '12px', marginBottom: '30px' }}>
          <p style={{ color: '#FF6B00', fontWeight: 600, marginBottom: '10px' }}>📌 Currently Featured:</p>
          <h3 style={{ fontSize: '1.3rem', color: '#1A1A1A' }}>{featured.title}</h3>
          <p style={{ color: '#666', marginTop: '10px' }}>{featured.excerpt}</p>
        </div>
      )}

      {/* All Articles */}
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
        <div style={{ padding: '20px', borderBottom: '2px solid #eee' }}>
          <h2 style={{ fontSize: '1.2rem' }}>Select an Article</h2>
        </div>
        
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading...</p>
        ) : articles.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: '15px' }}>No articles found. Create an article first.</p>
            <Link href="/admin/articles/new" style={{ color: '#FF6B00' }}>Create Article →</Link>
          </div>
        ) : (
          <div>
            {articles.map((article: any) => (
              <div key={article.id} style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '5px' }}>
                    {featured?.id === article.id && <span style={{ color: '#FF6B00', marginRight: '10px' }}>⭐</span>}
                    {article.title}
                  </h3>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    {new Date(article.created_at).toLocaleDateString()} • {article.status}
                  </p>
                </div>
                <button
                  onClick={() => setAsFeatured(article.id)}
                  disabled={featured?.id === article.id}
                  style={{
                    background: featured?.id === article.id ? '#ccc' : '#FF6B00',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    cursor: featured?.id === article.id ? 'not-allowed' : 'pointer',
                    fontWeight: 600,
                  }}
                >
                  {featured?.id === article.id ? 'Featured' : 'Set as Featured'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
