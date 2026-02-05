'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Scholarship {
  id: string;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  description: string;
}

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/scholarships')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setScholarships(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🎓 Scholarships</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Financial aid opportunities for Indian Malaysian students</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <Link href="/education" style={{ color: '#FF6B00', textDecoration: 'none', marginBottom: '30px', display: 'inline-block' }}>← Back to Education</Link>

        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading scholarships...</p>
        ) : scholarships.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>🎓</p>
            <p style={{ color: '#666' }}>No scholarships listed yet. Check back soon!</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {scholarships.map((s) => (
              <div key={s.id} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#1A1A1A' }}>{s.name}</h3>
                  <span style={{ background: '#d4edda', color: '#155724', padding: '5px 15px', borderRadius: '20px', fontWeight: 600 }}>{s.amount}</span>
                </div>
                <p style={{ color: '#666', marginBottom: '10px' }}>By {s.provider}</p>
                <p style={{ color: '#333', lineHeight: 1.6, marginBottom: '15px' }}>{s.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <span style={{ color: '#888', fontSize: '0.9rem' }}>Deadline: {new Date(s.deadline).toLocaleDateString()}</span>
                  <a href="#" style={{ color: '#FF6B00', fontWeight: 600 }}>Apply Now →</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
