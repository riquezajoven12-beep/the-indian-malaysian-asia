'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [featured, setFeatured] = useState<any>(null);

  useEffect(() => {
    fetch('/api/featured')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.id) setFeatured(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: '#FFFCF7', color: '#2D2D2D', lineHeight: 1.7 }}>
      {/* Announcement Bar */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', color: 'white', padding: '8px 20px', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
        <span>🪔 Celebrating Thaipusam 2026 — Community Events Across Malaysia</span>
        <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", opacity: 0.9 }}>தைப்பூசம் 2026 கொண்டாட்டம்</span>
      </div>

      {/* Header */}
      <header style={{ background: '#FFFCF7', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 800, color: '#1A1A1A' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <br />
              <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1rem', color: '#8B1538', letterSpacing: '2px' }}>
                மலேசிய இந்தியர்கள்
              </span>
            </Link>
            {/* SUBSCRIBE BUTTON - NOW WORKS */}
            <Link href="/subscribe" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', border: 'none', padding: '12px 28px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'none' }}>
              SUBSCRIBE
            </Link>
          </div>
          
          {/* Navigation */}
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '18px 0' }}>
            <Link href="/" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Home</Link>
            <Link href="/news" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>News</Link>
            <Link href="/about" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Our Roots</Link>
            <Link href="/education" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Education</Link>
            <Link href="/temples" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Religion & Culture</Link>
            <Link href="/persatuan" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Persatuan</Link>
            <Link href="/events" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Events</Link>
            <Link href="/community" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Community</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #FF6B00 100%)', minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
              Preserving Heritage.<br />
              <span style={{ color: '#F4D03F' }}>Building Futures.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '40px', maxWidth: '500px' }}>
              Your trusted source for news, education, and cultural preservation of the Indian Malaysian community. Connecting 2 million voices across the nation.
            </p>
            <div style={{ display: 'flex', gap: '50px' }}>
              {[
                { number: '2M+', label: 'Community Members' },
                { number: '180+', label: 'Years of History' },
                { number: '500+', label: 'Registered Persatuan' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>{stat.number}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>{stat.label}</div>
                </d
