import Link from 'next/link';

export default function AdminPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ background: '#1A1A1A', padding: '15px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href="/" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>View Site</Link>
            <Link href="/login" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>Logout</Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '30px', color: '#1A1A1A' }}>Admin Dashboard</h1>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Total Articles</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF6B00', margin: 0 }}>156</p>
            <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 12 this month</p>
          </div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Total Users</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#8B1538', margin: 0 }}>1,234</p>
            <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 89 this month</p>
          </div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Subscribers</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1B4332', margin: 0 }}>328</p>
            <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 45 this month</p>
          </div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Revenue</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37', margin: 0 }}>RM 4.2K</p>
            <p style={{ color: '#2E7D32', fontSize: '0.85rem', marginTop: '10px' }}>↑ 18% vs last</p>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1A1A1A' }}>Manage Content</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '40px' }}>
          <Link href="/admin/articles" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, #FF6B00, #8B1538)', padding: '25px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>📰</p>
              <p style={{ fontWeight: 600, margin: 0 }}>Articles</p>
            </div>
          </Link>
          <Link href="/admin/events" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, #1B4332, #0D5C63)', padding: '25px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>📅</p>
              <p style={{ fontWeight: 600, margin: 0 }}>Events</p>
            </div>
          </Link>
          <Link href="/admin/temples" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, #8B1538, #D4AF37)', padding: '25px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>🛕</p>
              <p style={{ fontWeight: 600, margin: 0 }}>Temples</p>
            </div>
          </Link>
          <Link href="/admin/associations" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, #4A6FA5, #1A1A1A)', padding: '25px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>🏛️</p>
              <p style={{ fontWeight: 600, margin: 0 }}>Associations</p>
            </div>
          </Link>
          <Link href="/admin/jobs" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, #0D5C63, #1A1A1A)', padding: '25px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>💼</p>
              <p style={{ fontWeight: 600, margin: 0 }}>Jobs</p>
            </div>
          </Link>
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'linear-gradient(135deg, #666, #333)', padding: '25px 20px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
              <p style={{ fontSize: '2rem', margin: '0 0 10px 0' }}>👥</p>
              <p style={{ fontWeight: 600, margin: 0 }}>Users</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#1A1A1A' }}>Recent Activity</h2>
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ width: '40px', height: '40px', background: '#FFF5F0', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📰</span>
              <div>
                <p style={{ fontWeight: 600, margin: '0 0 3px 0' }}>New article published</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Cabinet Approves New Blueprint</p>
              </div>
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>2 hours ago</span>
          </div>
          <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ width: '40px', height: '40px', background: '#F0FFF5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👤</span>
              <div>
                <p style={{ fontWeight: 600, margin: '0 0 3px 0' }}>New subscriber</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>john@example.com - Basic Plan</p>
              </div>
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>3 hours ago</span>
          </div>
          <div style={{ padding: '20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ width: '40px', height: '40px', background: '#F0F5FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📅</span>
              <div>
                <p style={{ fontWeight: 600, margin: '0 0 3px 0' }}>Event added</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Thaipusam 2026 at Batu Caves</p>
              </div>
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>5 hours ago</span>
          </div>
          <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ width: '40px', height: '40px', background: '#FFF5FF', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛕</span>
              <div>
                <p style={{ fontWeight: 600, margin: '0 0 3px 0' }}>Temple updated</p>
                <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Sri Mahamariamman Temple</p>
              </div>
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
