import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/dashboard" style={{ color: '#FF6B00' }}>Dashboard</Link>
            <Link href="/login" style={{ color: 'white' }}>Logout</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', marginBottom: '10px' }}>Welcome back!</h1>
            <p style={{ color: '#666' }}>Manage your account and subscription</p>
          </div>
          <span style={{ background: '#E3F2FD', color: '#1565C0', padding: '8px 20px', borderRadius: '20px', fontWeight: 600 }}>⭐ BASIC MEMBER</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '40px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📰</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Articles Read</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FF6B00' }}>12</div>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>This month</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>❤️</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Saved Items</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#8B1538' }}>5</div>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>Articles & Events</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>📅</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Member Since</h3>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1B4332' }}>Jan 2026</div>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>1 month</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '25px' }}>Account Settings</h2>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name</label>
              <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
              <input type="email" defaultValue="john@example.com" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
            </div>
            <button style={{ background: '#FF6B00', color: 'white', padding: '14px 30px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Save Changes</button>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '30px', borderRadius: '16px', color: 'white' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px' }}>Subscription</h2>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '5px' }}>Basic Plan</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#D4AF37' }}>RM 9.90/mo</div>
            </div>
            <p style={{ opacity: 0.8, marginBottom: '20px', fontSize: '0.9rem' }}>Next billing: Feb 15, 2026</p>
            <Link href="/pricing" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '12px 25px', borderRadius: '8px', fontWeight: 600 }}>Upgrade to Premium</Link>
          </div>
        </div>
      </div>

      <footer style={{ background: '#1A1A1A', padding: '40px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', fontSize: '0.9rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
