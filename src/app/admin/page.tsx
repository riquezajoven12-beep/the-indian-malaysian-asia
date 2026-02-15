import Link from 'next/link';

export default function AdminPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Admin Header */}
      <header style={{ background: '#1A1A1A', padding: '15px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.9rem' }}>View Site</Link>
            <Link href="/login" style={{ color: 'white', fontSize: '0.9rem' }}>Logout</Link>
          </nav>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '250px', background: '#1A1A1A', minHeight: 'calc(100vh - 60px)', padding: '30px 0' }}>
          <nav>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00' }}>
              <span>📊</span> Dashboard
            </Link>
            <Link href="/admin/articles" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📰</span> Articles
            </Link>
            <Link href="/admin/events" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📅</span> Events
            </Link>
            <Link href="/admin/temples" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🛕</span> Temples
            </Link>
            <Link href="/admin/associations" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🏛️</span> Associations
            </Link>
            <Link href="/admin/jobs" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>💼</span> Jobs
            </Link>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 30px' }}></div>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>👥</span> Users
            </Link>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>💳</span> Subscriptions
            </Link>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>⚙️</span> Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '30px 40px' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '30px', color: '#1A1A1A' }}>Dashboard</h1>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Total Articles</p>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF6B00' }}>156</h2>
                </div>
                <span style={{ fontSize: '2rem' }}>📰</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 12 this month</p>
            </div>

            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Total Users</p>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#8B1538' }}>1,234</h2>
                </div>
                <span style={{ fontSize: '2rem' }}>👥</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 89 this month</p>
            </div>

            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Subscribers</p>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1B4332' }}>328</h2>
                </div>
                <span style={{ fontSize: '2rem' }}>⭐</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 45 this month</p>
            </div>

            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Revenue</p>
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>RM 4.2K</h2>
                </div>
                <span style={{ fontSize: '2rem' }}>💰</span>
              </div>
              <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 18% vs last month</p>
            </div>
          </div>

          {/* Quick Actions */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px', color: '#1A1A1A' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
            <Link href="/admin/articles">
              <div style={{ background: 'linear-gradient(135deg, #FF6B00, #8B1538)', padding: '25px', borderRadius: '12px', color: 'white', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>✏️</span>
                <p style={{ fontWeight: 600 }}>New Article</p>
              </div>
            </Link>
            <Link href="/admin/events">
              <div style={{ background: 'linear-gradient(135deg, #1B4332, #0D5C63)', padding: '25px', borderRadius: '12px', color: 'white', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>📅</span>
                <p style={{ fontWeight: 600 }}>New Event</p>
              </div>
            </Link>
            <Link href="/admin/temples">
              <div style={{ background: 'linear-gradient(135deg, #8B1538, #D4AF37)', padding: '25px', borderRadius: '12px', color: 'white', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🛕</span>
                <p style={{ fontWeight: 600 }}>New Temple</p>
              </div>
            </Link>
            <Link href="/admin/jobs">
              <div style={{ background: 'linear-gradient(135deg, #0D5C63, #1A1A1A)', padding: '25px', borderRadius: '12px', color: 'white', textAlign: 'center', cursor: 'pointer' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>💼</span>
                <p style={{ fontWeight: 600 }}>New Job</p>
              </div>
            </Link>
          </div>

          {/* Recent Activity */}
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px', color: '#1A1A1A' }}>Recent Activity</h2>
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ width: '40px', height: '40px', background: '#FFF5F0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📰</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '3px' }}>New article published</p>
                  <p style={{ color: '#888', fontSize: '0.85rem' }}>Cabinet Approves New Indian Blueprint</p>
                </div>
              </div>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>2 hours ago</span>
            </div>
            <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ width: '40px', height: '40px', background: '#F0FFF5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '3px' }}>New subscriber</p>
                  <p style={{ color: '#888', fontSize: '0.85rem' }}>john@example.com - Basic Plan</p>
                </div>
              </div>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>3 hours ago</span>
            </div>
            <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ width: '40px', height: '40px', background: '#F0F5FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📅</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '3px' }}>Event added</p>
                  <p style={{ color: '#888', fontSize: '0.85rem' }}>Thaipusam 2026 at Batu Caves</p>
                </div>
              </div>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>5 hours ago</span>
            </div>
            <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ width: '40px', height: '40px', background: '#FFF5FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛕</span>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: '3px' }}>Temple updated</p>
                  <p style={{ color: '#888', fontSize: '0.85rem' }}>Sri Mahamariamman Temple details updated</p>
                </div>
              </div>
              <span style={{ color: '#888', fontSize: '0.85rem' }}>1 day ago</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
