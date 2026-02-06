import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      {/* Header with Navigation */}
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link href="/news" style={{ color: 'white', textDecoration: 'none' }}>News</Link>
            <Link href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
            <Link href="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
            <Link href="/community" style={{ color: 'white', textDecoration: 'none' }}>Community</Link>
            <Link href="/about" style={{ color: '#FF6B00', textDecoration: 'none' }}>About</Link>
            <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '15px' }}>Our Story</h1>
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", color: '#D4AF37', fontSize: '1.2rem' }}>எங்கள் கதை</p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ background: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#1A1A1A', marginBottom: '20px' }}>About The Indian Malaysian</h2>
          
          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
            The Indian Malaysian is a comprehensive digital platform dedicated to serving the 2 million strong Indian Malaysian community. 
            Founded in 2024, we aim to be the trusted source for news, education, and cultural preservation.
          </p>

          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>
            Our mission is to connect, inform, and empower Indian Malaysians across the nation. From breaking news to educational resources, 
            from community events to heritage preservation, we strive to be the voice of our community.
          </p>

          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1A1A1A', margin: '40px 0 20px' }}>Our Mission</h3>
          <ul style={{ color: '#444', lineHeight: 2, paddingLeft: '20px' }}>
            <li>Provide accurate and timely news coverage relevant to Indian Malaysians</li>
            <li>Preserve and promote Tamil language and Indian cultural heritage</li>
            <li>Support educational advancement through scholarships and resources</li>
            <li>Connect community members through our directory of associations</li>
            <li>Celebrate the achievements and contributions of Indian Malaysians</li>
          </ul>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #eee' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: '15px' }}>Contact Us</h3>
            <p style={{ color: '#666' }}>Have a story to share? Want to contribute? We'd love to hear from you.</p>
            <p style={{ color: '#666', marginTop: '10px' }}>
              Email: <a href="mailto:hello@theindianmalaysian.asia" style={{ color: '#FF6B00' }}>hello@theindianmalaysian.asia</a>
            </p>
            <Link href="/contact" style={{ display: 'inline-block', marginTop: '20px', background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', padding: '12px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
              Get in Touch →
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
          {[
            { title: 'Editorial Team', href: '/about', icon: '👥' },
            { title: 'Advertise', href: '/contact', icon: '📢' },
            { title: 'Contact Us', href: '/contact', icon: '✉️' },
          ].map((item) => (
            <Link key={item.title} href={item.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.icon}</div>
                <h4 style={{ color: '#1A1A1A' }}>{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
