'use client';
import Link from 'next/link';

const jobs = [
  { id: 1, title: 'Software Developer', company: 'TCS Malaysia', location: 'Kuala Lumpur', type: 'Full-time', status: 'Active' },
  { id: 2, title: 'Accountant', company: 'Deloitte MY', location: 'PJ, Selangor', type: 'Full-time', status: 'Active' },
  { id: 3, title: 'Tamil Teacher', company: 'SJK(T) Ladang', location: 'Perak', type: 'Full-time', status: 'Active' },
  { id: 4, title: 'Marketing Executive', company: 'Astro', location: 'Bukit Jalil, KL', type: 'Contract', status: 'Expired' },
];

export default function AdminJobs() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>💼 Jobs</h1>
        <Link href="/admin/jobs/new" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>+ New Job</Link>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead><tr style={{ background: '#F8FAFC' }}>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>POSITION</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>COMPANY</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>LOCATION</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>TYPE</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATUS</th>
            </tr></thead>
            <tbody>{jobs.map(j => (
              <tr key={j.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{j.title}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{j.company}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{j.location}</td>
                <td style={{ padding: '14px 20px' }}><span style={{ background: '#F1F5F9', padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', color: '#475569' }}>{j.type}</span></td>
                <td style={{ padding: '14px 20px' }}><span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, background: j.status === 'Active' ? '#E8F5E9' : '#FFEBEE', color: j.status === 'Active' ? '#2E7D32' : '#C62828' }}>{j.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
