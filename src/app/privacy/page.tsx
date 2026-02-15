import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/contact" style={{ color: 'white' }}>Contact</Link>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', marginBottom: '30px' }}>Privacy Policy</h1>
        <p style={{ color: '#888', marginBottom: '40px' }}>Last updated: January 1, 2026</p>

        <div style={{ lineHeight: 1.9, color: '#444' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '20px' }}>We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support. This may include your name, email address, and payment information.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>2. How We Use Your Information</h2>
          <p style={{ marginBottom: '20px' }}>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>3. Information Sharing</h2>
          <p style={{ marginBottom: '20px' }}>We do not share your personal information with third parties except as described in this policy. We may share information with service providers who perform services on our behalf.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>4. Data Security</h2>
          <p style={{ marginBottom: '20px' }}>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>5. Contact Us</h2>
          <p style={{ marginBottom: '20px' }}>If you have any questions about this Privacy Policy, please contact us at hello@theindianmalaysian.asia</p>
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
