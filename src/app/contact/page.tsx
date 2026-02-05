'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // In production, you'd send this to your API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      {/* Header */}
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0D5C63 0%, #1B4332 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>Contact Us</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>We'd love to hear from you</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px' }}>
        {sent ? (
          <div style={{ background: 'white', padding: '50px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>✅</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '15px' }}>Message Sent!</h2>
            <p style={{ color: '#666', marginBottom: '25px' }}>Thank you for reaching out. We'll get back to you soon.</p>
            <button onClick={() => setSent(false)} style={{ background: '#FF6B00', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', cursor: 'pointer' }}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Your Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Email Address *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Subject *</label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              style={{
                width: '100%',
                padding: '15px',
                background: sending ? '#ccc' : 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: sending ? 'not-allowed' : 'pointer',
              }}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
