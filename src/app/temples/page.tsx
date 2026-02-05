'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Temple {
  id: string;
  name: string;
  slug: string;
  type: string;
  address: string;
  city: string;
  state: string;
}

export default function TemplesPage() {
  const [temples, setTemples] = useState<Temple[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');
  const [filterState, setFilterState] = useState('all');

  const types = ['all', 'hindu_temple', 'sikh_gurdwara', 'church'];
  const states = ['all', 'selangor', 'kuala_lumpur', 'penang', 'johor', 'perak', 'negeri_sembilan'];

  useEffect(() => {
    fetch('/api/temples')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setTemples(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredTemples = temples.filter(t => {
    if (filterType !== 'all' && t.type !== filterType) return false;
    if (filterState !== 'all' && t.state !== filterState) return false;
    return true;
  });

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
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #D4AF37 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🛕 Temple Finder</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Find Hindu temples, Sikh gurdwaras, and Indian churches across Malaysia</p>
      </div>

      {/* Filters */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px' }}
          >
            <option value="all">All Types</option>
            <option value="hindu_temple">Hindu Temples</option>
            <option value="sikh_gurdwara">Sikh Gurdwaras</option>
            <option value="church">Churches</option>
          </select>
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px' }}
          >
            <option value="all">All States</option>
            {states.slice(1).map(s => (
              <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
            ))}
          </select>
        </div>

        {/* Results */}
        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading temples...</p>
        ) : filteredTemples.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>🛕</p>
            <p style={{ color: '#666' }}>No temples found. Try adjusting your filters.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
            {filteredTemples.map((temple) => (
              <div key={temple.id} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                  {temple.type === 'hindu_temple' ? '🛕' : temple.type === 'sikh_gurdwara' ? '🙏' : '⛪'}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '10px' }}>{temple.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>{temple.address}</p>
                <p style={{ color: '#888', fontSize: '0.85rem' }}>{temple.city}, {temple.state?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
