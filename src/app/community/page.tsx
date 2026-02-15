import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: '#FF6B00' }}>Community</Link>
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: 'white' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: 'white' }}>Jobs</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/temples" style={{ color: 'white' }}>Temples</Link>
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Subscribe</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #0D5C63 0%, #1B4332 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🤝 Community Hub</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '10px' }}>சமூகம்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Connect, engage, and grow with the Indian Malaysian community</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '30px' }}>🌟 Explore Our Community</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '50px' }}>
          <Link href="/associations">
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '4px solid #FF6B00' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🏛️</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '10px' }}>Associations</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>500+ registered associations</p>
              <span style={{ background: '#E3F2FD', color: '#1565C0', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>BASIC</span>
            </div>
          </Link>

          <Link href="/events">
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '4px solid #1B4332' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>📅</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '10px' }}>Events</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>Festivals & gatherings</p>
              <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>FREE</span>
            </div>
          </Link>

          <Link href="/temples">
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '4px solid #8B1538' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🛕</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '10px' }}>Temples</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>3,000+ places of worship</p>
              <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>FREE</span>
            </div>
          </Link>

          <Link href="/jobs">
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '4px solid #D4AF37' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>💼</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '10px' }}>Jobs</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>Career opportunities</p>
              <span style={{ background: '#E3F2FD', color: '#1565C0', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>BASIC</span>
            </div>
          </Link>

          <Link href="/education">
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '4px solid #0D5C63' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>🎓</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '10px' }}>Education</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>Schools & scholarships</p>
              <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>FREE</span>
            </div>
          </Link>

          <Link href="/news">
            <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', borderTop: '4px solid #FF6B00' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '15px' }}>📰</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '10px' }}>News</h3>
              <p style={{ color: '#666', marginBottom: '15px' }}>Latest updates</p>
              <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 600 }}>3 FREE/MONTH</span>
            </div>
          </Link>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '50px', borderRadius: '16px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'white', marginBottom: '20px' }}>Join Our Growing Community</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>2.01M</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>Community</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>500+</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>Associations</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>3,000+</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>Temples</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>523</div>
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>Schools</div>
            </div>
          </div>
          <Link href="/subscribe" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '16px 40px', borderRadius: '8px', fontWeight: 700 }}>Subscribe to Newsletter</Link>
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
