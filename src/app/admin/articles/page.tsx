'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  status: string;
  created_at: string;
  category?: { name: string };
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
            Articles
          </h1>
          <p style={{ color: '#666' }}>Manage your news articles and blog posts</p>
        </div>
        <Link
          href="/admin/articles/new"
          style={{
            background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            fontWeight: 600,
            borderRadius: '8px',
          }}
        >
          + New Article
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading articles...</p>
        ) : articles.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>No articles yet</p>
            <Link
              href="/admin/articles/new"
              style={{
                background: '#FF6B00',
                color: 'white',
                padding: '12px 25px',
                textDecoration: 'none',
                borderRadius: '6px',
              }}
            >
              Create your first article
            </Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f8f8', borderBottom: '2px solid #eee' }}>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600, color: '#333' }}>Title</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600, color: '#333' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600, color: '#333' }}>Status</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600, color: '#333' }}>Date</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600, color: '#333' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 20px' }}>
                    <strong>{article.title}</strong>
                  </td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>
                    {article.category?.name || '-'}
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        background: article.status === 'published' ? '#d4edda' : '#fff3cd',
                        color: article.status === 'published' ? '#155724' : '#856404',
                      }}
                    >
                      {article.status}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>
                    {new Date(article.created_at).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <Link
                      href={`/news/${article.slug}`}
                      style={{ color: '#FF6B00', textDecoration: 'none', marginRight: '15px' }}
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/articles/${article.id}/edit`}
                      style={{ color: '#0066cc', textDecoration: 'none' }}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
