'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewArticlePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [article, setArticle] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'community',
    status: 'draft',
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setArticle({
      ...article,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article),
      });

      if (res.ok) {
        alert('Article saved successfully!');
        router.push('/admin/articles');
      } else {
        alert('Error saving article');
      }
    } catch (error) {
      alert('Error saving article');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
          Create New Article
        </h1>
        <p style={{ color: '#666' }}>Write and publish articles for The Indian Malaysian</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            Article Title *
          </label>
          <input
            type="text"
            value={article.title}
            onChange={handleTitleChange}
            placeholder="Enter your article title"
            required
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '1.1rem',
              border: '2px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
            }}
          />
        </div>

        {/* Slug */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            URL Slug
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#666' }}>theindianmalaysian.asia/news/</span>
            <input
              type="text"
              value={article.slug}
              onChange={(e) => setArticle({ ...article, slug: e.target.value })}
              style={{
                flex: 1,
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Category & Status Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
              Category
            </label>
            <select
              value={article.category}
              onChange={(e) => setArticle({ ...article, category: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                outline: 'none',
                background: 'white',
              }}
            >
              <option value="politics">Politics</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="culture">Culture</option>
              <option value="sports">Sports</option>
              <option value="community">Community</option>
              <option value="religion">Religion</option>
              <option value="opinion">Opinion</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
              Status
            </label>
            <select
              value={article.status}
              onChange={(e) => setArticle({ ...article, status: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                outline: 'none',
                background: 'white',
              }}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        {/* Excerpt */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            Excerpt (Short Summary)
          </label>
          <textarea
            value={article.excerpt}
            onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
            placeholder="Write a brief summary of your article (1-2 sentences)"
            rows={3}
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
              resize: 'vertical',
            }}
          />
        </div>

        {/* Content */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px', color: '#333' }}>
            Article Content *
          </label>
          <textarea
            value={article.content}
            onChange={(e) => setArticle({ ...article, content: e.target.value })}
            placeholder="Write your article content here. You can use HTML tags for formatting."
            rows={15}
            required
            style={{
              width: '100%',
              padding: '15px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              outline: 'none',
              resize: 'vertical',
              fontFamily: 'monospace',
            }}
          />
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '8px' }}>
            Tip: Use &lt;p&gt;...&lt;/p&gt; for paragraphs, &lt;strong&gt;...&lt;/strong&gt; for bold, &lt;em&gt;...&lt;/em&gt; for italic
          </p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Saving...' : 'Save Article'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            style={{
              background: '#f0f0f0',
              color: '#333',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
