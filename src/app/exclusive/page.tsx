import Link from 'next/link';

export default function ExclusivePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/exclusive" style={{ color: '#D4AF37' }}>Exclusive</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/pricing" style={{ background: '#D4AF37', color: '#1A1A1A', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Upgrade</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #8B1538 50%, #1A1A1A 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>👑 Exclusive Content</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>பிரத்யேக உள்ளடக்கம்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Premium members only content and resources</p>
        <span style={{ display: 'inline-block', marginTop: '15px', background: 'linear-gradient(135deg, #FFF8E1, #FFE082)', color: '#F57F17', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>👑 PREMIUM SUBSCRIPTION REQUIRED</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Paywall Notice */}
        <div style={{ background: 'linear-gradient(135deg, #FFF8E1, #FFE082)', border: '2px solid #D4AF37', padding: '50px', borderRadius: '16px', textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>👑</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A', marginBottom: '15px' }}>Premium Subscription Required</h2>
          <p style={{ color: '#666', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px', lineHeight: 1.8 }}>
            Unlock exclusive in-depth articles, behind-the-scenes content, expert interviews, downloadable resources, and access to our community forum. Join our premium members today!
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pricing" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #8B1538, #1A1A1A)', color: 'white', padding: '16px 40px', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem' }}>
              Upgrade for RM 19.90/month
            </Link>
            <Link href="/login" style={{ display: 'inline-block', background: 'white', color: '#1A1A1A', padding: '16px 40px', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', border: '2px solid #ddd' }}>
              Already Premium? Login
            </Link>
          </div>
        </div>

        {/* Preview of Premium Content (Blurred) */}
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '30px' }}>What Premium Members Get</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '50px' }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📝</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Exclusive Articles</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>In-depth investigative pieces and expert analysis not available anywhere else</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎙️</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Expert Interviews</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Conversations with community leaders, entrepreneurs, and influencers</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💬</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Community Forum</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Connect with other premium members and participate in discussions</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📥</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Downloadable Resources</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>PDF guides, templates, and educational materials</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🚫</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Ad-Free Experience</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Enjoy our content without any advertisements or interruptions</p>
          </div>

          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Early Access</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Be the first to access new features and content</p>
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
