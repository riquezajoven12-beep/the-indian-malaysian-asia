import Link from 'next/link';

export default function CommunityPage() {
  const sections = [
    { title: 'Persatuan Directory', desc: 'Find Indian Malaysian associations across the country', href: '/persatuan', icon: '🏛️', count: '500+' },
    { title: 'Temple Finder', desc: 'Locate Hindu temples, Sikh gurdwaras, and churches', href: '/temples', icon: '🛕', count: '3,000+' },
    { title: 'Events Calendar', desc: 'Upcoming festivals, gatherings, and community events', href: '/events', icon: '📅', count: '100+' },
    { title: 'Job Board', desc: 'Career opportunities within our community network', href: '/jobs', icon: '💼', count: '50+' },
  ];

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
            <Link href="/community" style={{ color: '#FF6B00', textDecoration: 'none' }}>Community</Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '15px' }}>🤝 Community Hub</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Connect with the Indian Malaysian community through our directory of associations, temples, events, and opportunities.
        </p>
      </div>

      {/* Sections Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          {sections.map((section) => (
            <Link key={section.title} href={section.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '3rem' }}>{section.icon}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1A1A1A' }}>{section.title}</h2>
                    <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>{section.count}</span>
                  </div>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>{section.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
