'use client';
import Link from 'next/link';

const persatuan = [
  { id: 1, name: 'Malaysian Indian Congress (MIC)', state: 'National', members: '500,000+', status: 'Active' },
  { id: 2, name: 'Hindu Sangam Malaysia', state: 'National', members: '50,000+', status: 'Active' },
  { id: 3, name: 'Tamil Foundation Malaysia', state: 'Selangor', members: '12,000', status: 'Active' },
  { id: 4, name: 'Persatuan India Muslim Selangor', state: 'Selangor', members: '3,500', status: 'Active' },
  { id: 5, name: 'Malaysian Telegu Association', state: 'KL', members: '2,800', status: 'Pending' },
];

export default function AdminPersatuan() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>🏛️ Persatuan</h1>
        <Link href="/admin/persatuan/new" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>+ New Persatuan</Link>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
            <thead><tr style={{ background: '#F8FAFC' }}>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>NAME</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATE</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>MEMBERS</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATUS</th>
            </tr></thead>
            <tbody>{persatuan.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{p.name}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{p.state}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{p.members}</td>
                <td style={{ padding: '14px 20px' }}><span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, background: p.status === 'Active' ? '#E8F5E9' : '#FFF8E1', color: p.status === 'Active' ? '#2E7D32' : '#F57F17' }}>{p.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
