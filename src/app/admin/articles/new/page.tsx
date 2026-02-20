'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NewArticle() {
  const [form, setForm] = useState({ title: '', category: 'Politics', content: '', image_url: '', status: 'Draft' });

  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#F8FAFC', outline: 'none' };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <Link href="/admin/articles" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>← Articles</Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>New Article</h1>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 4vw, 35px)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Title</label>
            <input style={inputStyle} placeholder="Article title..." value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Category</label>
              <select style={inputStyle} value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                {['Politics', 'Education', 'Culture', 'Business', 'Sports', 'Community'].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Status</label>
              <select style={inputStyle} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
                <option>Draft</option><option>Published</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Image URL</label>
            <input style={inputStyle} placeholder="https://..." value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Content</label>
            <textarea style={{ ...inputStyle, minHeight: '200px', resize: 'vertical' }} placeholder="Write your article..." value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} />
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button style={{ background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem' }}>Publish Article</button>
            <button style={{ background: '#F1F5F9', color: '#475569', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem' }}>Save Draft</button>
          </div>
        </div>
      </div>
    </div>
  );
}
