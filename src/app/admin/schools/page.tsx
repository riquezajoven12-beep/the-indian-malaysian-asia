'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminSchoolsPage() {
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/schools')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data)) setSchools(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '5px' }}>🏫 Tamil Schools</h1>
          <p style={{ color: '#666' }}>Manage Tamil schools directory</p>
        </div>
        <Link href="/admin/schools/new" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          + Add School
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading...</p>
        ) : schools.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>🏫</p>
            <p style={{ color: '#666', marginBottom: '20px' }}>No schools added yet</p>
            <Link href="/admin/schools/new" style={{ color: '#FF6B00' }}>Add your first school →</Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f8f8', borderBottom: '2px solid #eee' }}>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>School Name</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Location</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school: any) => (
                <tr key={school.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 20px' }}><strong>{school.name}</strong></td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>{school.city}, {school.state}</td>
                  <td style={{ padding: '15px 20px' }}>
                    <Link href={`/admin/schools/${school.id}/edit`} style={{ color: '#0066cc' }}>Edit</Link>
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
