'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Persatuan {
  id: string;
  name: string;
  slug: string;
  category: string;
  state: string;
  status: string;
}

export default function PersatuanPage() {
  const [persatuanList, setPersatuanList] = useState<Persatuan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/persatuan')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPersatuanList(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
            Persatuan Directory
          </h1>
          <p style={{ color: '#666' }}>Manage Indian Malaysian associations and organizations</p>
        </div>
        <Link
          href="/admin/persatuan/new"
          style={{
            background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            fontWeight: 600,
            borderRadius: '8px',
          }}
        >
          + Add Persatuan
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading...</p>
        ) : persatuanList.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', marginBottom: '10px' }}>🏛️</p>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>No persatuan registered yet</p>
            <Link
              href="/admin/persatuan/new"
              style={{
                background: '#FF6B00',
                color: 'white',
                padding: '12px 25px',
                textDecoration: 'none',
                borderRadius: '6px',
              }}
            >
              Add first persatuan
            </Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f8f8', borderBottom: '2px solid #eee' }}>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Name</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Category</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>State</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Status</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {persatuanList.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 20px' }}><strong>{item.name}</strong></td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>{item.category}</td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>{item.state}</td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{
                      background: item.status === 'active' ? '#d4edda' : '#f8d7da',
                      color: item.status === 'active' ? '#155724' : '#721c24',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                    }}>
                      {item.status}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <a href={`/persatuan/${item.slug}`} style={{ color: '#FF6B00', marginRight: '15px' }}>View</a>
                    <a href={`/admin/persatuan/${item.id}/edit`} style={{ color: '#0066cc' }}>Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
