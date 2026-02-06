import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: '🏠' },
    { name: 'Articles', href: '/admin/articles', icon: '📝' },
    { name: 'Events', href: '/admin/events', icon: '📅' },
    { name: 'Persatuan', href: '/admin/persatuan', icon: '🏛️' },
    { name: 'Temples', href: '/admin/temples', icon: '🛕' },
    { name: 'Schools', href: '/admin/schools', icon: '🏫' },
    { name: 'Scholarships', href: '/admin/scholarships', icon: '🎓' },
    { name: 'Jobs', href: '/admin/jobs', icon: '💼' },
    { name: 'Subscribers', href: '/admin/subscribers', icon: '📧' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', background: '#1A1A1A', color: 'white', position: 'fixed', height: '100vh', overflowY: 'auto' }}>
        {/* Logo */}
        <div style={{ padding: '25px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </span>
            <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '5px' }}>Admin Panel</p>
          </Link>
        </div>

        {/* Navigation */}
        <nav style={{ padding: '20px 0' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 20px',
                color: '#ccc',
                textDecoration: 'none',
                fontSize: '0.95rem',
                borderLeft: '3px solid transparent',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#888', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← Back to Website
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: '250px', background: '#f5f5f5', minHeight: '100vh' }}>
        {/* Top Bar */}
        <header style={{ background: 'white', padding: '15px 30px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1rem', color: '#666' }}>Content Management System</h2>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link href="/admin/articles/new" style={{ background: '#FF6B00', color: 'white', padding: '8px 20px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              + New Article
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <div style={{ padding: '30px' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
