'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Admin Header */}
      <header style={{ background: '#1A1A1A', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }}
              className="sidebar-toggle"
            >
              ☰
            </button>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <nav style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.85rem' }}>View Site</Link>
            <Link href="/login" style={{ color: 'white', fontSize: '0.85rem' }}>Logout</Link>
          </nav>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside 
          className="admin-sidebar"
          style={{ 
            width: '250px', 
            background: '#1A1A1A', 
            minHeight: 'calc(100vh - 60px)', 
            padding: '20px 0',
            position: 'sticky',
            top: '60px',
            height: 'calc(100vh - 60px)',
            overflowY: 'auto'
          }}
        >
          <nav>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00', fontSize: '0.9rem' }}>
              📊 Dashboard
            </Link>
            <Link href="/admin/articles" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              📰 Articles
            </Link>
            <Link href="/admin/events" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              📅 Events
            </Link>
            <Link href="/admin/temples" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              🛕 Temples
            </Link>
            <Link href="/admin/associations" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              🏛️ Associations
            </Link>
            <Link href="/admin/jobs" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              💼 Jobs
            </Link>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '15px 25px' }}></div>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              👥 Users
            </Link>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              💳 Subscriptions
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '25px', minWidth: 0 }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '25px', color: '#1A1A1A' }}>Dashboard</h1>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Total Articles</p>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#FF6B00' }}>156</h2>
                </div>
                <span style={{ fontSize: '1.5rem' }}>📰</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.8rem', marginTop: '10px' }}>↑ 12 this month</p>
            </div>

            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Total Users</p>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#8B1538' }}>1,234</h2>
                </div>
                <span style={{ fontSize: '1.5rem' }}>👥</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.8rem', marginTop: '10px' }}>↑ 89 this month</p>
            </div>

            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Subscribers</p>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1B4332' }}>328</h2>
                </div>
                <span style={{ fontSize: '1.5rem' }}>⭐</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.8rem', marginTop: '10px' }}>↑ 45 this month</p>
            </div>

            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '5px' }}>Revenue</p>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#D4AF37' }}>RM 4.2K</h2>
                </div>
                <span style={{ fontSize: '1.5rem' }}>💰</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.8rem', marginTop: '10px' }}>↑ 18% vs last</p>
            </div>
          </div>

          {/* Quick Actions */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '15px', color: '#1A1A1A' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
            <Link href="/admin/articles">
              <div style={{ background: 'linear-gradient(135deg, #FF6B00, #8B1538)', padding: '20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>✏️</span>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>New Article</p>
              </div>
            </Link>
            <Link href="/admin/events">
              <div style={{ background: 'linear-gradient(135deg, #1B4332, #0D5C63)', padding: '20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>📅</span>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>New Event</p>
              </div>
            </Link>
            <Link href="/admin/temples">
              <div style={{ background: 'linear-gradient(135deg, #8B1538, #D4AF37)', padding: '20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>🛕</span>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>New Temple</p>
              </div>
            </Link>
            <Link href="/admin/jobs">
              <div style={{ background: 'linear-gradient(135deg, #0D5C63, #1A1A1A)', padding: '20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '8px' }}>💼</span>
                <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>New Job</p>
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '15px', color: '#1A1A1A' }}>Recent Activity</h2>
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            {[
              { icon: '📰', bg: '#FFF5F0', title: 'New article published', desc: 'Cabinet Approves New Blueprint', time: '2 hours ago' },
              { icon: '👤', bg: '#F0FFF5', title: 'New subscriber', desc: 'john@example.com - Basic Plan', time: '3 hours ago' },
              { icon: '📅', bg: '#F0F5FF', title: 'Event added', desc: 'Thaipusam 2026 at Batu Caves', time: '5 hours ago' },
              { icon: '🛕', bg: '#FFF5FF', title: 'Temple updated', desc: 'Sri Mahamariamman Temple', time: '1 day ago' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '15px 20px', borderBottom: i < 3 ? '1px solid #eee' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '36px', height: '36px', background: item.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>{item.icon}</span>
                  <div>
                    <p style={{ fontWeight: 600, marginBottom: '2px', fontSize: '0.9rem' }}>{item.title}</p>
                    <p style={{ color: '#888', fontSize: '0.8rem' }}>{item.desc}</p>
                  </div>
                </div>
                <span style={{ color: '#888', fontSize: '0.8rem' }}>{item.time}</span>
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .admin-sidebar {
            position: fixed;
            left: -250px;
            top: 60px;
            z-index: 99;
            transition: left 0.3s;
          }
          .admin-sidebar.open {
            left: 0;
          }
          .sidebar-toggle {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
}
