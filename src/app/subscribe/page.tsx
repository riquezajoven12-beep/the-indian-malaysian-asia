'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      {/* Header */}
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #FF6B00 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '15px' }}>Subscribe to Our Newsletter</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Get the latest news, events, and stories from the Indian Malaysian community delivered to your inbox.
        </p>
      </div>

      {/* Form */}
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '60px 20px' }}>
        {success ? (
          <div style={{ background: 'white', padding: '50px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🎉</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: '15px', color: '#1A1A1A' }}>You're Subscribed!</h2>
            <p style={{ color: '#666', marginBottom: '25px' }}>Thank you for subscribing. You'll receive our next newsletter soon.</p>
            <Link href="/" style={{ background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: '25px', textAlign: 'center' }}>Join Our Community</h2>
            
            {error && (
              <div style={{ background: '#fee', color: '#c00', padding: '12px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
                {error}
              </div>
            )}

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Email Address *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '16px',
                background: loading ? '#ccc' : 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
              }}
            >
              {loading ? 'Subscribing...' : 'Subscribe Now'}
            </button>

            <p style={{ color: '#888', fontSize: '0.85rem', textAlign: 'center', marginTop: '20px' }}>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        )}

        {/* Benefits */}
        <div style={{ marginTop: '40px' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', marginBottom: '20px', textAlign: 'center' }}>What You'll Get</h3>
          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              { icon: '📰', text: 'Weekly news roundup' },
              { icon: '📅', text: 'Upcoming events & festivals' },
              { icon: '🎓', text: 'Education & scholarship updates' },
              { icon: '💼', text: 'Job opportunities' },
            ].map((item) => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'white', padding: '15px 20px', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <span style={{ color: '#444' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
