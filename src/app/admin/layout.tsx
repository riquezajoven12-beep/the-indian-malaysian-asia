export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Admin Header */}
      <header style={{ 
        background: '#1A1A1A', 
        padding: '15px 30px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div>
          <span style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </span>
          <span style={{ color: '#888', marginLeft: '15px', fontSize: '0.9rem' }}>Admin Panel</span>
        </div>
        <a href="/" style={{ color: '#FF6B00', textDecoration: 'none' }}>← Back to Site</a>
      </header>

      {/* Admin Navigation */}
      <nav style={{ 
        background: '#2A2A2A', 
        padding: '0 30px', 
        display: 'flex', 
        gap: '30px' 
      }}>
        {[
          { name: 'Dashboard', href: '/admin' },
          { name: 'Articles', href: '/admin/articles' },
          { name: 'Events', href: '/admin/events' },
          { name: 'Persatuan', href: '/admin/persatuan' },
        ].map((item) => (
          <a 
            key={item.name}
            href={item.href} 
            style={{ 
              color: '#ccc', 
              textDecoration: 'none', 
              padding: '15px 0',
              borderBottom: '2px solid transparent',
            }}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{ padding: '30px' }}>
        {children}
      </main>
    </div>
  );
}
