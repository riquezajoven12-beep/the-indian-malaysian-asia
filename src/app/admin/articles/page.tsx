import Link from 'next/link';

export default function AdminArticlesPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ background: '#1A1A1A', padding: '15px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href="/" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>View Site</Link>
            <Link href="/admin" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>Dashboard</Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
          <h1 style={{ fontSize: '2rem', color: '#1A1A1A', margin: 0 }}>📰 Articles</h1>
          <button style={{ background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}>+ New Article</button>
        </div>

        {/* Articles List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { title: 'Cabinet Approves New Indian Blueprint', category: 'Politics', status: 'Published', date: 'Jan 20, 2026', views: 1234 },
            { title: 'Tamil Schools See Record Enrollment', category: 'Education', status: 'Published', date: 'Jan 18, 2026', views: 987 },
            { title: 'Batu Caves Prepares for Thaipusam', category: 'Culture', status: 'Published', date: 'Jan 15, 2026', views: 2341 },
            { title: 'Indian Malaysian Business Summit 2026', category: 'Business', status: 'Draft', date: 'Jan 12, 2026', views: 0 },
            { title: 'Community Initiative Launches in Klang', category: 'Community', status: 'Published', date: 'Jan 10, 2026', views: 567 },
          ].map((article, index) => (
            <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: '#1A1A1A' }}>{article.title}</h3>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 500 }}>{article.category}</span>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>{article.date}</span>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>{article.views} views</span>
                  </div>
                </div>
                <span style={{ 
                  background: article.status === 'Published' ? '#E8F5E9' : '#FFF3E0', 
                  color: article.status === 'Published' ? '#2E7D32' : '#E65100', 
                  padding: '5px 12px', 
                  borderRadius: '15px', 
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  {article.status}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Edit</button>
                <button style={{ background: '#FFEBEE', color: '#C62828', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 500 }}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/admin" style={{ color: '#FF6B00', fontWeight: 600, textDecoration: 'none' }}>← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
