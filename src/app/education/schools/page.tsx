'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  type: string;
}

export default function SchoolsPage() {
  const [schools, setSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterState, setFilterState] = useState('all');

  useEffect(() => {
    fetch('/api/schools')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setSchools(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredSchools = filterState === 'all' ? schools : schools.filter(s => s.state === filterState);

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
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #FF6B00 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🏫 Tamil Schools Directory</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>523 Tamil schools across Malaysia preserving our language and heritage</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <Link href="/education" style={{ color: '#FF6B00', textDecoration: 'none', marginBottom: '30px', display: 'inline-block' }}>← Back to Education</Link>
        
        {/* Filter */}
        <div style={{ marginBottom: '30px' }}>
          <select
            value={filterState}
            onChange={(e) => setFilterState(e.target.value)}
            style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', minWidth: '200px' }}
          >
            <option value="all">All States</option>
            <option value="selangor">Selangor</option>
            <option value="kuala_lumpur">Kuala Lumpur</option>
            <option value="penang">Penang</option>
            <option value="johor">Johor</option>
            <option value="perak">Perak</option>
          </select>
        </div>

        {/* Schools Grid */}
        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading schools...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {filteredSchools.map((school) => (
              <div key={school.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '8px' }}>{school.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>{school.address}</p>
                <p style={{ color: '#888', fontSize: '0.85rem' }}>{school.city}, {school.state?.replace('_', ' ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
