import Link from 'next/link';

export default function AdminDashboard() {
  const sections = [
    // Content Management
    { title: 'Articles', desc: 'Create and manage news articles', href: '/admin/articles', icon: '📝', count: 'News & Blog' },
    { title: 'Events', desc: 'Manage community events and festivals', href: '/admin/events', icon: '📅', count: 'Calendar' },
    { title: 'Persatuan', desc: 'Manage associations directory', href: '/admin/persatuan', icon: '🏛️', count: 'Directory' },
    { title: 'Temples', desc: 'Manage temple listings', href: '/admin/temples', icon: '🛕', count: 'Religious' },
    
    // Education
    { title: 'Schools', desc: 'Manage Tamil schools directory', href: '/admin/schools', icon: '🏫', count: 'Education' },
    { title: 'Scholarships', desc: 'Manage scholarship listings', href: '/admin/scholarships', icon: '🎓', count: 'Education' },
    
    // Community
    { title: 'Jobs', desc: 'Manage job board listings', href: '/admin/jobs', icon: '💼', count: 'Careers' },
    
    // Site Management
    { title: 'Subscribers', desc: 'View newsletter subscribers', href: '/admin/subscribers', icon: '📧', count: 'Marketing' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
          Admin Dashboard
        </h1>
        <p style={{ color: '#666' }}>Welcome! Manage all content for The Indian Malaysian website.</p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {[
          { label: 'Articles', value: '—', color: '#FF6B00' },
          { label: 'Events', value: '—', color: '#1B4332' },
          { label: 'Persatuan', value: '—', color: '#8B1538' },
          { label: 'Temples', value: '—', color: '#D4AF37' },
        ].map((stat) => (
          <div key={stat.label} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderTop: `4px solid ${stat.color}` }}>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '5px' }}>{stat.label}</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#1A1A1A' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Management Sections */}
      <h2 style={{ fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #eee' }}>
        Content Management
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {sections.slice(0, 4).map((section) => (
          <Link key={section.title} href={section.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                <span style={{ background: '#f0f0f0', color: '#666', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem' }}>{section.count}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '5px' }}>{section.title}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>{section.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Education Section */}
      <h2 style={{ fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #eee' }}>
        Education Management
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {sections.slice(4, 6).map((section) => (
          <Link key={section.title} href={section.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                <span style={{ background: '#f0f0f0', color: '#666', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem' }}>{section.count}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '5px' }}>{section.title}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>{section.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Community Section */}
      <h2 style={{ fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #eee' }}>
        Community & Marketing
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }}>
        {sections.slice(6).map((section) => (
          <Link key={section.title} href={section.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>{section.icon}</span>
                <span style={{ background: '#f0f0f0', color: '#666', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem' }}>{section.count}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '5px' }}>{section.title}</h3>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>{section.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 style={{ fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #eee' }}>
        Quick Actions
      </h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <Link href="/admin/articles/new" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          + New Article
        </Link>
        <Link href="/admin/events/new" style={{ background: '#1B4332', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          + New Event
        </Link>
        <Link href="/admin/persatuan/new" style={{ background: '#8B1538', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          + Add Persatuan
        </Link>
        <Link href="/admin/temples/new" style={{ background: '#D4AF37', color: '#1A1A1A', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          + Add Temple
        </Link>
        <Link href="/admin/jobs/new" style={{ background: '#0D5C63', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          + Post Job
        </Link>
        <Link href="/" style={{ background: '#f0f0f0', color: '#333', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
          View Website →
        </Link>
      </div>
    </div>
  );
}
