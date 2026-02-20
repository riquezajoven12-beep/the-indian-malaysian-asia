'use client';
import Link from 'next/link';

const temples = [
  { id: 1, name: 'Sri Mahamariamman Temple', location: 'Kuala Lumpur', type: 'Hindu', status: 'Verified' },
  { id: 2, name: 'Batu Caves Temple', location: 'Selangor', type: 'Hindu', status: 'Verified' },
  { id: 3, name: 'Arulmigu Balathandayuthapani Temple', location: 'Penang', type: 'Hindu', status: 'Verified' },
  { id: 4, name: 'Sri Kandaswamy Temple', location: 'Brickfields, KL', type: 'Hindu', status: 'Pending' },
  { id: 5, name: 'Gurdwara Sahib Petaling Jaya', location: 'PJ, Selangor', type: 'Sikh', status: 'Verified' },
];

export default function AdminTemples() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>🛕 Temples</h1>
        <Link href="/admin/temples/new" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>+ New Temple</Link>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
            <thead><tr style={{ background: '#F8FAFC' }}>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>NAME</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>LOCATION</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>TYPE</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATUS</th>
            </tr></thead>
            <tbody>{temples.map(t => (
              <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{t.name}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{t.location}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{t.type}</td>
                <td style={{ padding: '14px 20px' }}><span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, background: t.status === 'Verified' ? '#E8F5E9' : '#FFF8E1', color: t.status === 'Verified' ? '#2E7D32' : '#F57F17' }}>{t.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
