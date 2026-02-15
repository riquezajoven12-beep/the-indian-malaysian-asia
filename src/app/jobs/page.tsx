import Link from 'next/link';

export default function JobsPage() {
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
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: 'white' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: '#FF6B00' }}>Jobs</Link>
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

      <div style={{ background: 'linear-gradient(135deg, #0D5C63 0%, #1A1A1A 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>💼 Job Board</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '10px' }}>வேலைவாய்ப்புகள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Career opportunities from community businesses and organizations</p>
        <span style={{ display: 'inline-block', marginTop: '15px', background: '#E3F2FD', color: '#1565C0', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>⭐ BASIC SUBSCRIPTION REQUIRED</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Paywall Notice */}
        <div style={{ background: 'linear-gradient(135deg, #FFF8E1, #FFE082)', border: '2px solid #D4AF37', padding: '40px', borderRadius: '16px', textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔒</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '15px' }}>Basic Subscription Required</h2>
          <p style={{ color: '#666', marginBottom: '25px', maxWidth: '500px', margin: '0 auto 25px' }}>
            Access our job board featuring opportunities from community businesses. Find positions in accounting, healthcare, IT, education, and more.
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
              <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '180px' }}>
                <option>All Categories</option>
              </select>
              <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '180px' }}>
                <option>All Locations</option>
              </select>
              <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '180px' }}>
                <option>Job Type</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>FULL TIME</span>
                    <span style={{ background: '#F0F5FF', color: '#4A6FA5', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>IT</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '8px' }}>Senior Software Engineer</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '12px' }}>TechCorp Solutions Sdn Bhd</p>
                  <div style={{ display: 'flex', gap: '20px', color: '#888', fontSize: '0.9rem' }}>
                    <span>📍 Kuala Lumpur</span>
                    <span>💰 RM 8,000 - RM 12,000</span>
                  </div>
                </div>
                <button style={{ background: '#FF6B00', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none' }}>Apply Now</button>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>FULL TIME</span>
                    <span style={{ background: '#F0FFF5', color: '#1B4332', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>ACCOUNTING</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '8px' }}>Finance Manager</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '12px' }}>Kumar & Associates</p>
                  <div style={{ display: 'flex', gap: '20px', color: '#888', fontSize: '0.9rem' }}>
                    <span>📍 Petaling Jaya</span>
                    <span>💰 RM 10,000 - RM 15,000</span>
                  </div>
                </div>
                <button style={{ background: '#FF6B00', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none' }}>Apply Now</button>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '1fr auto', gap: '20px', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ background: '#FFFAF0', color: '#D4AF37', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>PART TIME</span>
                    <span style={{ background: '#FFF5FF', color: '#8B1538', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>EDUCATION</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '8px' }}>Tamil Language Teacher</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '12px' }}>SJK(T) Vivekananda</p>
                  <div style={{ display: 'flex', gap: '20px', color: '#888', fontSize: '0.9rem' }}>
                    <span>📍 Brickfields, KL</span>
                    <span>💰 RM 2,500 - RM 3,500</span>
                  </div>
                </div>
                <button style={{ background: '#FF6B00', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none' }}>Apply Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Employer CTA */}
        <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'white', marginBottom: '15px' }}>Looking to Hire?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px' }}>Post your job listing and reach qualified candidates from the community.</p>
            <Link href="/contact" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '14px 30px', borderRadius: '8px', fontWeight: 700 }}>Post a Job</Link>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #0D5C63 0%, #1B4332 100%)', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: 'white', marginBottom: '15px' }}>Career Resources</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px' }}>Resume tips, interview prep, and career guidance for job seekers.</p>
            <Link href="/education" style={{ display: 'inline-block', background: 'white', color: '#1B4332', padding: '14px 30px', borderRadius: '8px', fontWeight: 700 }}>Learn More</Link>
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
