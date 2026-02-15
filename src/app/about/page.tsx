import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: '#FF6B00' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
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

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', color: 'white', marginBottom: '15px' }}>Our Story</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', fontSize: '1.3rem', marginBottom: '15px' }}>எங்கள் கதை</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Preserving heritage, celebrating culture, and building futures</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#1A1A1A', marginBottom: '25px' }}>Our Mission</h2>
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', borderLeft: '4px solid #FF6B00' }}>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.9, marginBottom: '20px' }}>
              <strong>The Indian Malaysian</strong> is dedicated to serving as the premier digital platform for news, education, and cultural preservation of the Indian Malaysian community. We believe in the power of information to connect, educate, and empower our community of over 2 million people across Malaysia.
            </p>
            <p style={{ color: '#444', fontSize: '1.1rem', lineHeight: 1.9 }}>
              Our platform provides comprehensive coverage of community news, a directory of over 500 registered associations, information on 3,000+ Hindu temples, Tamil school resources, scholarship opportunities, job listings, and much more.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '50px', borderRadius: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#D4AF37' }}>180+</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Years of History</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#D4AF37' }}>2.01M</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Population</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#D4AF37' }}>6.6%</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>of Malaysia</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#D4AF37' }}>13</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>States</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div style={{ background: 'linear-gradient(135deg, #0D5C63 0%, #1B4332 100%)', padding: '50px', borderRadius: '16px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: 'white', marginBottom: '15px' }}>Join Our Community</h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '30px' }}>Stay connected with the latest news, events, and resources.</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <Link href="/subscribe" style={{ background: '#D4AF37', color: '#1A1A1A', padding: '16px 35px', borderRadius: '8px', fontWeight: 700 }}>Subscribe Now</Link>
              <Link href="/contact" style={{ background: 'transparent', color: 'white', padding: '16px 35px', borderRadius: '8px', fontWeight: 700, border: '2px solid white' }}>Contact Us</Link>
            </div>
          </div>
        </section>
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
