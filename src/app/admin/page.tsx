'use client';
import Link from 'next/link';

const stats = [
  { label: 'Total Articles', value: '156', icon: '📰', color: '#FF6B00', bg: '#FFF3E0' },
  { label: 'Active Events', value: '12', icon: '📅', color: '#0D5C63', bg: '#E0F2F1' },
  { label: 'Temples Listed', value: '3,247', icon: '🛕', color: '#8B1538', bg: '#FCE4EC' },
  { label: 'Subscribers', value: '1,892', icon: '👥', color: '#D4AF37', bg: '#FFF8E1' },
  { label: 'Persatuan', value: '523', icon: '🏛️', color: '#1B4332', bg: '#E8F5E9' },
  { label: 'Job Listings', value: '45', icon: '💼', color: '#4A148C', bg: '#F3E5F5' },
];

const quickActions = [
  { label: 'New Article', href: '/admin/articles/new', icon: '✏️' },
  { label: 'New Event', href: '/admin/events/new', icon: '📅' },
  { label: 'New Temple', href: '/admin/temples/new', icon: '🛕' },
  { label: 'New Persatuan', href: '/admin/persatuan/new', icon: '🏛️' },
  { label: 'New Job', href: '/admin/jobs/new', icon: '💼' },
  { label: 'Manage Featured', href: '/admin/featured', icon: '⭐' },
];

const recentItems = [
  { title: 'Cabinet Approves New Indian Blueprint', type: 'Article', date: '2 hours ago', status: 'Published' },
  { title: 'Tamil Schools See Record Enrollment', type: 'Article', date: '5 hours ago', status: 'Published' },
  { title: 'Thaipusam 2026 — Batu Caves', type: 'Event', date: '1 day ago', status: 'Upcoming' },
  { title: 'Software Developer — TCS Malaysia', type: 'Job', date: '1 day ago', status: 'Active' },
  { title: 'Sri Mahamariamman Temple KL', type: 'Temple', date: '3 days ago', status: 'Verified' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: '#1A1A1A', marginBottom: '5px' }}>Dashboard</h1>
        <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Welcome back! Here&apos;s what&apos;s happening with The Indian Malaysian.</p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 170px), 1fr))', gap: '15px', marginBottom: '30px' }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: 'white', borderRadius: '12px', padding: '20px',
            boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
              <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
              <span style={{ background: s.bg, color: s.color, padding: '2px 8px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 600 }}>View</span>
            </div>
            <div style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', fontWeight: 700, color: '#1A1A1A' }}>{s.value}</div>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '15px' }}>Quick Actions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 150px), 1fr))', gap: '12px' }}>
          {quickActions.map(a => (
            <Link key={a.label} href={a.href} style={{
              background: 'white', borderRadius: '10px', padding: '16px', textAlign: 'center',
              boxShadow: '0 1px 6px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0',
              transition: '0.2s', display: 'block'
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{a.icon}</div>
              <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>{a.label}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ padding: '18px 20px', borderBottom: '1px solid #E2E8F0' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1A1A1A' }}>Recent Activity</h2>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Title</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentItems.map((item, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{item.title}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ background: '#F1F5F9', padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', color: '#475569' }}>{item.type}</span>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#94A3B8' }}>{item.date}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                      background: item.status === 'Published' ? '#E8F5E9' : item.status === 'Active' ? '#E3F2FD' : item.status === 'Verified' ? '#F3E5F5' : '#FFF8E1',
                      color: item.status === 'Published' ? '#2E7D32' : item.status === 'Active' ? '#1565C0' : item.status === 'Verified' ? '#6A1B9A' : '#F57F17'
                    }}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
