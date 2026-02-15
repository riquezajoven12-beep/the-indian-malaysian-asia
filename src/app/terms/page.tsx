import Link from 'next/link';

export default function TermsPage() {
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
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', marginBottom: '30px' }}>Terms of Service</h1>
        <p style={{ color: '#888', marginBottom: '40px' }}>Last updated: January 1, 2026</p>

        <div style={{ lineHeight: 1.9, color: '#444' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '20px' }}>By accessing and using The Indian Malaysian website, you accept and agree to be bound by the terms and provisions of this agreement.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>2. Subscription Services</h2>
          <p style={{ marginBottom: '20px' }}>Some features of our service require a paid subscription. By subscribing, you agree to pay the applicable fees and authorize us to charge your payment method on a recurring basis.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>3. User Conduct</h2>
          <p style={{ marginBottom: '20px' }}>You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>4. Intellectual Property</h2>
          <p style={{ marginBottom: '20px' }}>All content on this website, including text, graphics, logos, and images, is the property of The Indian Malaysian and is protected by copyright laws.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>5. Limitation of Liability</h2>
          <p style={{ marginBottom: '20px' }}>The Indian Malaysian shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>

          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>6. Contact</h2>
          <p style={{ marginBottom: '20px' }}>For any questions regarding these Terms of Service, please contact us at hello@theindianmalaysian.asia</p>
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
