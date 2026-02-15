import Link from 'next/link';

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Subscribe</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>Contact Us</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '10px' }}>எங்களை தொடர்பு கொள்ளுங்கள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>We would love to hear from you</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '25px' }}>Get in Touch</h2>
            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #FF6B00, #8B1538)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>📧</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Email</h3>
                <p style={{ color: '#FF6B00' }}>hello@theindianmalaysian.asia</p>
              </div>
            </div>
            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #1B4332, #0D5C63)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>📍</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Location</h3>
                <p style={{ color: '#666' }}>Kuala Lumpur, Malaysia</p>
              </div>
            </div>
            <div style={{ marginBottom: '25px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #D4AF37, #8B1538)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>🌐</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Website</h3>
                <p style={{ color: '#FF6B00' }}>www.theindianmalaysian.asia</p>
              </div>
            </div>
          </div>

          <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '25px' }}>Send a Message</h2>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Your Name</label>
              <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
              <input type="email" placeholder="Enter your email" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
              <textarea placeholder="Your message" rows={5} style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>
            <button style={{ width: '100%', background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer' }}>Send Message</button>
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
