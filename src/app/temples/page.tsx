'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TemplesPage() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    fetch('/api/temples')
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (Array.isArray(data)) {
          setTemples(data);
        }
        setLoading(false);
      })
      .catch(function() { 
        setLoading(false); 
      });
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link href="/news" style={{ color: 'white', textDecoration: 'none' }}>News</Link>
            <Link href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
            <Link href="/temples" style={{ color: '#FF6B00', textDecoration: 'none' }}>Temples</Link>
            <Link href="/community" style={{ color: 'white', textDecoration: 'none' }}>Community</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #D4AF37 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>Temple Finder</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Find Hindu temples across Malaysia</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading temples...</p>
        ) : temples.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>🛕</p>
            <p style={{ color: '#666', marginBottom: '20px' }}>No temples found.</p>
            <Link href="/admin/temples/new" style={{ color: '#FF6B00' }}>Add temple</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
            {temples.map(function(temple) {
              return (
                <div key={temple.id} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🛕</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '10px' }}>{temple.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>{temple.address}</p>
                  <p style={{ color: '#888', fontSize: '0.85rem' }}>{temple.city}, {temple.state}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
