import Link from 'next/link';

export default function EducationPage() {
  const sections = [
    { title: 'Tamil Schools', desc: 'Directory of 523 Tamil schools across Malaysia', href: '/education/schools', icon: '🏫', color: '#8B1538' },
    { title: 'Scholarships', desc: 'Financial aid and scholarship opportunities for students', href: '/education/scholarships', icon: '🎓', color: '#1B4332' },
    { title: 'Online Courses', desc: 'Learn Tamil language, culture, and heritage online', href: '/education/courses', icon: '💻', color: '#0D5C63' },
    { title: 'Career Resources', desc: 'Job search tips, resume help, and career guidance', href: '/jobs', icon: '📈', color: '#D4AF37' },
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
            <Link href="/education" style={{ color: '#FF6B00', textDecoration: 'none' }}>Education</Link>
            <Link href="/community" style={{ color: 'white', textDecoration: 'none' }}>Community</Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '80px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '15px' }}>📚 Education Hub</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Empowering the Indian Malaysian community through education, from Tamil schools to scholarships and career development.
        </p>
      </div>

      {/* Stats */}
      <div style={{ background: '#1A1A1A', padding: '40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', textAlign: 'center' }}>
          {[
            { number: '523', label: 'Tamil Schools' },
            { number: '50+', label: 'Scholarships' },
            { number: '10K+', label: 'Students Supported' },
            { number: '100+', label: 'Online Courses' },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: '#D4AF37' }}>{stat.number}</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
          {sections.map((section) => (
            <Link key={section.title} href={section.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '35px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', borderLeft: `4px solid ${section.color}` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{section.icon}</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1A1A1A', marginBottom: '10px' }}>{section.title}</h2>
                <p style={{ color: '#666', lineHeight: 1.6 }}>{section.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
