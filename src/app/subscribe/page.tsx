import Link from 'next/link';

export default function SubscribePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/pricing" style={{ color: 'white' }}>Pricing</Link>
            <Link href="/login" style={{ color: 'white' }}>Login</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '10px' }}>Complete Your Subscription</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>You are one step away from unlimited access</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Plan Summary */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px' }}>Basic Plan</h2>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#FF6B00', marginBottom: '20px' }}>RM 9.90<span style={{ fontSize: '1rem', color: '#888' }}>/month</span></div>
            <ul style={{ marginBottom: '30px' }}>
              <li style={{ padding: '10px 0', color: '#444' }}>✓ Unlimited articles</li>
              <li style={{ padding: '10px 0', color: '#444' }}>✓ Associations directory</li>
              <li style={{ padding: '10px 0', color: '#444' }}>✓ Full job board access</li>
              <li style={{ padding: '10px 0', color: '#444' }}>✓ Scholarships database</li>
              <li style={{ padding: '10px 0', color: '#444' }}>✓ Save favorites</li>
            </ul>
            <Link href="/pricing" style={{ color: '#FF6B00', fontWeight: 600 }}>Change Plan</Link>
          </div>

          {/* Payment Form */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '20px' }}>Payment Details</h2>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Expiry Date</label>
                <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>CVV</label>
                <input type="text" placeholder="123" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
              </div>
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Name on Card</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }} />
            </div>

            <button style={{ width: '100%', background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '16px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
              Subscribe Now - RM 9.90/month
            </button>

            <p style={{ textAlign: 'center', color: '#888', fontSize: '0.85rem', marginTop: '15px' }}>🔒 Secured by SSL encryption</p>
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
