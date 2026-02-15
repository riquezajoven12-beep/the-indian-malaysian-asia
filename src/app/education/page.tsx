import Link from 'next/link';

export default function EducationPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/education" style={{ color: '#FF6B00' }}>Education</Link>
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

      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #D4AF37 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🎓 Education</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>கல்வி</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Tamil schools, scholarships, and educational resources</p>
        <span style={{ display: 'inline-block', marginTop: '15px', background: '#E8F5E9', color: '#2E7D32', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>🆓 FREE ACCESS</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '60px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderTop: '4px solid #FF6B00' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#FF6B00' }}>523</div>
            <div style={{ color: '#666', fontSize: '0.95rem', marginTop: '5px' }}>Tamil Schools</div>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderTop: '4px solid #8B1538' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#8B1538' }}>85K+</div>
            <div style={{ color: '#666', fontSize: '0.95rem', marginTop: '5px' }}>Students Enrolled</div>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderTop: '4px solid #1B4332' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#1B4332' }}>150+</div>
            <div style={{ color: '#666', fontSize: '0.95rem', marginTop: '5px' }}>Scholarships</div>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderTop: '4px solid #D4AF37' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#D4AF37' }}>180+</div>
            <div style={{ color: '#666', fontSize: '0.95rem', marginTop: '5px' }}>Years Heritage</div>
          </div>
        </div>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '30px', color: '#1A1A1A' }}>📚 Education Resources</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginBottom: '50px' }}>
          <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderLeft: '4px solid #FF6B00' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏫</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '15px', color: '#1A1A1A' }}>Tamil Schools Directory</h3>
            <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.7 }}>Find Tamil primary and secondary schools across all 13 states in Malaysia.</p>
            <span style={{ color: '#FF6B00', fontWeight: 600 }}>Browse Schools →</span>
          </div>

          <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderLeft: '4px solid #8B1538' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎓</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '15px', color: '#1A1A1A' }}>Scholarships & Grants</h3>
            <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.7 }}>Discover scholarship opportunities for Indian Malaysian students.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#FF6B00', fontWeight: 600 }}>Find Scholarships →</span>
              <span style={{ background: '#E3F2FD', color: '#1565C0', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 600 }}>BASIC</span>
            </div>
          </div>

          <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderLeft: '4px solid #1B4332' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💼</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '15px', color: '#1A1A1A' }}>Career Resources</h3>
            <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.7 }}>Access career guidance and professional development opportunities.</p>
            <Link href="/jobs" style={{ color: '#FF6B00', fontWeight: 600 }}>Explore Careers →</Link>
          </div>

          <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderLeft: '4px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📖</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '15px', color: '#1A1A1A' }}>Tamil Language Resources</h3>
            <p style={{ color: '#666', marginBottom: '20px', lineHeight: 1.7 }}>Learn and preserve the Tamil language with online courses.</p>
            <span style={{ color: '#FF6B00', fontWeight: 600 }}>Start Learning →</span>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '50px', borderRadius: '16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'white', marginBottom: '15px' }}>Preserving Our Mother Tongue</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '20px' }}>
                Tamil education in Malaysia has a rich history spanning over 180 years. Today, 523 Tamil schools continue to preserve our language and culture for future generations.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '5rem', marginBottom: '15px' }}>📚</div>
              <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1.5rem', color: '#D4AF37' }}>கல்வியே கண்கள்</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>Education is the eyes</p>
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
