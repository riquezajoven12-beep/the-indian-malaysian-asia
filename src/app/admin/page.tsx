import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: '2.5rem', 
        color: '#1A1A1A', 
        marginBottom: '10px' 
      }}>
        Dashboard
      </h1>
      <p style={{ color: '#666', marginBottom: '40px' }}>
        Welcome to The Indian Malaysian admin panel
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '25px' 
      }}>
        {/* Articles Card */}
        <Link href="/admin/articles" style={{ textDecoration: 'none' }}>
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📝</div>
            <h3 style={{ color: '#1A1A1A', marginBottom: '5px' }}>Articles</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Create and manage news articles</p>
          </div>
        </Link>

        {/* Events Card */}
        <Link href="/admin/events" style={{ textDecoration: 'none' }}>
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>📅</div>
            <h3 style={{ color: '#1A1A1A', marginBottom: '5px' }}>Events</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Manage community events</p>
          </div>
        </Link>

        {/* Persatuan Card */}
        <Link href="/admin/persatuan" style={{ textDecoration: 'none' }}>
          <div style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '12px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🏛️</div>
            <h3 style={{ color: '#1A1A1A', marginBottom: '5px' }}>Persatuan</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Manage associations directory</p>
          </div>
        </Link>
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#1A1A1A', marginBottom: '20px' }}>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link 
            href="/admin/articles/new"
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
              color: 'white',
              padding: '15px 30px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
            }}
          >
            + New Article
          </Link>
          <Link 
            href="/"
            style={{
              background: '#eee',
              color: '#333',
              padding: '15px 30px',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
            }}
          >
            View Website
          </Link>
        </div>
      </div>
    </div>
  );
}
