'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-deep-green to-teal relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10L60 40H90L65 58L75 88L50 70L25 88L35 58L10 40H40Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Subscribe to receive the latest news, events, and stories from the Indian Malaysian community delivered to your inbox weekly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 border-2 border-white/30 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
            required
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-gold disabled:opacity-50"
          >
            {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-gold">Thank you for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-300">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
