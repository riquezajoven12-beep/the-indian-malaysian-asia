import Link from 'next/link';

export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: 'white' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: 'white' }}>Jobs</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/temples" style={{ color: 'white' }}>Temples</Link>
            <Link href="/login" style={{ color: 'white' }}>Login</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #FF6B00 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '15px' }}>Choose Your Plan</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '15px' }}>உங்கள் திட்டத்தைத் தேர்வு செய்யுங்கள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem' }}>Unlock the full potential of The Indian Malaysian</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '60px' }}>
          {/* Free */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🆓</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '10px' }}>Free</h2>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '5px' }}>RM 0</div>
            <p style={{ color: '#888', marginBottom: '30px' }}>per month</p>
            <ul style={{ textAlign: 'left', marginBottom: '30px' }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ News headlines</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ 3 full articles per month</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Temple finder (3,000+)</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Events calendar</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Education hub</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#ccc' }}>✗ Associations directory</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#ccc' }}>✗ Job board access</li>
              <li style={{ padding: '12px 0', color: '#ccc' }}>✗ Scholarships database</li>
            </ul>
            <span style={{ display: 'inline-block', background: '#f0f0f0', color: '#666', padding: '14px 40px', borderRadius: '8px', fontWeight: 600 }}>Current Plan</span>
          </div>

          {/* Basic */}
          <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '40px', borderRadius: '16px', textAlign: 'center', color: 'white', position: 'relative', transform: 'scale(1.05)', zIndex: 10 }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#D4AF37', color: '#1A1A1A', padding: '6px 20px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700 }}>MOST POPULAR</div>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⭐</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '10px' }}>Basic</h2>
            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '5px' }}>RM 9.90</div>
            <p style={{ opacity: 0.8, marginBottom: '30px' }}>per month</p>
            <ul style={{ textAlign: 'left', marginBottom: '30px' }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Everything in Free</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Unlimited articles</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Associations directory (500+)</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Full job board access</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Scholarships database</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Save favorites</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.2)', opacity: 0.5 }}>✗ Exclusive content</li>
              <li style={{ padding: '12px 0', opacity: 0.5 }}>✗ Community forum</li>
            </ul>
            <Link href="/subscribe" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '14px 40px', borderRadius: '8px', fontWeight: 700 }}>Subscribe Now</Link>
          </div>

          {/* Premium */}
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>👑</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '10px' }}>Premium</h2>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '5px' }}>RM 19.90</div>
            <p style={{ color: '#888', marginBottom: '30px' }}>per month</p>
            <ul style={{ textAlign: 'left', marginBottom: '30px' }}>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Everything in Basic</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Exclusive content</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Community forum access</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Downloadable resources</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ No advertisements</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Early access to features</li>
              <li style={{ padding: '12px 0', borderBottom: '1px solid #eee', color: '#444' }}>✓ Priority support</li>
              <li style={{ padding: '12px 0', color: '#444' }}>✓ Member badge</li>
            </ul>
            <Link href="/subscribe" style={{ display: 'inline-block', background: '#FF6B00', color: 'white', padding: '14px 40px', borderRadius: '8px', fontWeight: 700 }}>Go Premium</Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '10px' }}>Can I cancel anytime?</h3>
            <p style={{ color: '#666' }}>Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.</p>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', marginBottom: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '10px' }}>What payment methods do you accept?</h3>
            <p style={{ color: '#666' }}>We accept credit cards, debit cards, FPX, and e-wallets including Touch n Go and GrabPay.</p>
          </div>
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '10px' }}>Is there a free trial?</h3>
            <p style={{ color: '#666' }}>Yes! New subscribers get a 7-day free trial for both Basic and Premium plans.</p>
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
