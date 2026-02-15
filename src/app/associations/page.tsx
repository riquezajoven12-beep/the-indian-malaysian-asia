import Link from 'next/link';

export default function AssociationsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: '#FF6B00' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: 'white' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: 'white' }}>Jobs</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/temples" style={{ color: 'white' }}>Temples</Link>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden', marginLeft: '10px' }}>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'white', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>EN</button>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>தமிழ்</button>
            </div>
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Subscribe</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🏛️ Associations Directory</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '10px' }}>சங்கங்கள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>500+ registered Indian Malaysian associations across Malaysia</p>
        <span style={{ display: 'inline-block', marginTop: '15px', background: '#E3F2FD', color: '#1565C0', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>⭐ BASIC SUBSCRIPTION REQUIRED</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Paywall Notice */}
        <div style={{ background: 'linear-gradient(135deg, #FFF8E1, #FFE082)', border: '2px solid #D4AF37', padding: '40px', borderRadius: '16px', textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔒</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '15px' }}>Basic Subscription Required</h2>
          <p style={{ color: '#666', marginBottom: '25px', maxWidth: '500px', margin: '0 auto 25px' }}>
            Access our comprehensive directory of 500+ Indian Malaysian associations with a Basic subscription. Connect with welfare organizations, cultural groups, professional networks, and more.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '14px 35px', borderRadius: '8px', fontWeight: 700 }}>
              Subscribe for RM 9.90/month
            </Link>
            <Link href="/login" style={{ display: 'inline-block', background: 'white', color: '#1A1A1A', padding: '14px 35px', borderRadius: '8px', fontWeight: 700, border: '2px solid #ddd' }}>
              Already a member? Login
            </Link>
          </div>
        </div>

        {/* Preview Content (Blurred) */}
        <div style={{ position: 'relative' }}>
          <div style={{ filter: 'blur(5px)', pointerEvents: 'none' }}>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
              <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px' }}>
                <option>All Categories</option>
              </select>
              <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px' }}>
                <option>All States</option>
              </select>
              <input type="text" placeholder="Search by name..." style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', minWidth: '250px' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>WELFARE</span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Est. 1945</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '12px' }}>Malaysian Indian Congress (MIC)</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '15px' }}>The largest Indian political party in Malaysia, representing community interests.</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>📍 Kuala Lumpur</p>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ background: '#F0F5FF', color: '#4A6FA5', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>CULTURAL</span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Est. 1936</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '12px' }}>Tamil Nesan Sangam</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '15px' }}>Dedicated to preserving Tamil language, literature, and cultural heritage.</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>📍 Selangor</p>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ background: '#F0FFF5', color: '#1B4332', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>PROFESSIONAL</span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Est. 1982</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '12px' }}>Malaysian Indian Business Association</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '15px' }}>Supporting Indian entrepreneurs and businesses through networking.</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>📍 Kuala Lumpur</p>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ background: '#FFF5FF', color: '#8B1538', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>WOMEN</span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>Est. 1971</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '12px' }}>Malaysian Indian Women Association</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '15px' }}>Empowering Indian Malaysian women through education and support.</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>📍 Penang</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div style={{ marginTop: '60px', background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '30px', textAlign: 'center' }}>What You Get with Basic Subscription</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏛️</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '10px' }}>500+ Associations</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Full access to our comprehensive directory</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💼</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '10px' }}>Job Board Access</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Browse all career opportunities</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📰</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '10px' }}>Unlimited Articles</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Read all news without limits</p>
            </div>
          </div>
        </div>
      </div>

      <footer style={{ background: '#1A1A1A', padding: '40px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', fontSize: '0.9rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
