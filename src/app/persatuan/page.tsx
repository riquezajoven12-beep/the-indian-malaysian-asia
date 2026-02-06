'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PersatuanPage() {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/persatuan')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data)) setList(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link href="/news" style={{ color: 'white', textDecoration: 'none' }}>News</Link>
            <Link href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
            <Link href="/community" style={{ color: 'white', textDecoration: 'none' }}>Community</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🏛️ Persatuan Directory</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)' }}>500+ Indian Malaysian associations across the country</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading...</p>
        ) : list.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>🏛️</p>
            <p style={{ color: '#666', marginBottom: '20px' }}>No persatuan listed yet.</p>
            <Link href="/admin/persatuan/new" style={{ color: '#FF6B00' }}>Add persatuan (Admin) →</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {list.map((item: any) => (
              <div key={item.id} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>{item.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>📍 {item.city}, {item.state}</p>
                <span style={{ background: '#f0f0f0', color: '#666', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>{item.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
