'use client';
import Link from 'next/link';

const events = [
  { id: 1, title: 'Thaipusam 2026 — Batu Caves', date: '2026-02-11', location: 'Batu Caves, Selangor', status: 'Upcoming' },
  { id: 2, title: 'Deepavali Celebration KL', date: '2026-10-20', location: 'KLCC, Kuala Lumpur', status: 'Upcoming' },
  { id: 3, title: 'Tamil New Year Carnival', date: '2026-04-14', location: 'Penang', status: 'Upcoming' },
  { id: 4, title: 'Indian Business Summit 2026', date: '2026-03-15', location: 'Sunway Convention Centre', status: 'Upcoming' },
];

export default function AdminEvents() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>📅 Events</h1>
        <Link href="/admin/events/new" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>+ New Event</Link>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '550px' }}>
            <thead><tr style={{ background: '#F8FAFC' }}>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>EVENT</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>DATE</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>LOCATION</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATUS</th>
            </tr></thead>
            <tbody>{events.map(e => (
              <tr key={e.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{e.title}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{e.date}</td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{e.location}</td>
                <td style={{ padding: '14px 20px' }}><span style={{ background: '#FFF8E1', color: '#F57F17', padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>{e.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
