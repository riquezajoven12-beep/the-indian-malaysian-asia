import Link from 'next/link';

export default function AdminPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <header style={{ background: '#1A1A1A', padding: '15px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.9rem' }}>View Site</Link>
            <Link href="/login" style={{ color: 'white', fontSize: '0.9rem' }}>Logout</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '30px' }}>Admin Dashboard</h1>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Total Articles</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF6B00' }}>156</div>
          </div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Total Users</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#8B1538' }}>1,234</div>
          </div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Subscribers</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1B4332' }}>328</div>
          </div>
          <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>Monthly Revenue</div>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>RM 4.2K</div>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px' }}>Content Management</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
          <Link href="/admin/articles">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📰</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Articles</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage news articles</p>
            </div>
          </Link>

          <Link href="/admin/events">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📅</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Events</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage events</p>
            </div>
          </Link>

          <Link href="/admin/temples">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🛕</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Temples</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage temples</p>
            </div>
          </Link>

          <Link href="/admin/associations">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏛️</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Associations</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage associations</p>
            </div>
          </Link>

          <Link href="/admin/jobs">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💼</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Jobs</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage job listings</p>
            </div>
          </Link>

          <Link href="/admin/users">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>👥</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Users</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage users</p>
            </div>
          </Link>

          <Link href="/admin/subscribers">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💳</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Subscribers</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Manage subscriptions</p>
            </div>
          </Link>

          <Link href="/admin/settings">
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚙️</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Settings</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>Site settings</p>
            </div>
          </Link>
        </div>

        {/* Recent Activity */}
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px' }}>Recent Activity</h2>
        <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <div style={{ padding: '15px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: 600 }}>New article published:</span> Cabinet Approves New Indian Blueprint
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>2 hours ago</span>
          </div>
          <div style={{ padding: '15px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: 600 }}>New subscriber:</span> john@example.com (Basic Plan)
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>3 hours ago</span>
          </div>
          <div style={{ padding: '15px 20px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: 600 }}>Event added:</span> Thaipusam 2026
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>5 hours ago</span>
          </div>
          <div style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontWeight: 600 }}>New user registered:</span> priya@example.com
            </div>
            <span style={{ color: '#888', fontSize: '0.85rem' }}>6 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
