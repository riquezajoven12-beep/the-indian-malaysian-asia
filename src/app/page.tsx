'use client';

import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <div style={{
      fontFamily: "'Source Sans 3', sans-serif",
      background: '#FFFCF7',
      color: '#2D2D2D',
      lineHeight: 1.7,
      minHeight: '100vh'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)',
        color: 'white',
        padding: '8px 20px',
        fontSize: '0.85rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px'
      }}>
        <span>🪔 Celebrating Thaipusam 2026 — Community Events Across Malaysia</span>
      </div>
    </div>
  );
}
