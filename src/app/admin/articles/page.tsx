'use client';
import Link from 'next/link';

export default function AdminArticlesPage() {
  const articles = [
    { id: '1', title: 'Cabinet Approves New Indian Blueprint', category: 'Politics', status: 'Published', date: 'Jan 20', views: 1234 },
    { id: '2', title: 'Tamil Schools See Record Enrollment', category: 'Education', status: 'Published', date: 'Jan 18', views: 987 },
    { id: '3', title: 'Batu Caves Prepares for Thaipusam', category: 'Culture', status: 'Published', date: 'Jan 15', views: 2341 },
    { id: '4', title: 'Business Summit 2026', category: 'Business', status: 'Draft', date: 'Jan 12', views: 0 },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <header style={{ background: '#1A1A1A', padding: '15px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <Link href="/" style={{ color: 'white', fontSize: '0.85rem' }}>View Site</Link>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        <aside style={{ width: '250px', background: '#1A1A1A', minHeight: 'calc(100vh - 60px)', padding: '20px 0' }} className="admin-sidebar">
          <nav>
            <Link href="/admin" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📊 Dashboard</Link>
            <Link href="/admin/articles" style={{ display: 'block', padding: '12px 25px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00', fontSize: '0.9rem' }}>📰 Articles</Link>
            <Link href="/admin/events" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📅 Events</Link>
            <Link href="/admin/temples" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>🛕 Temples</Link>
            <Link href="/admin/associations" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>🏛️ Associations</Link>
            <Link href="/admin/jobs" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>💼 Jobs</Link>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '25px', minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#1A1A1A' }}>📰 Articles</h1>
            <button style={{ background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>+ New Article</button>
          </div>

          {/* Mobile Cards View */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {articles.map((article) => (
              <div key={article.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '1rem', flex: 1, minWidth: '200px' }}>{article.title}</h3>
                  <span style={{ 
                    background: article.status === 'Published' ? '#E8F5E9' : '#FFF3E0', 
                    color: article.status === 'Published' ? '#2E7D32' : '#E65100', 
                    padding: '4px 10px', 
                    borderRadius: '15px', 
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}>
                    {article.status}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px' }}>
                  <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem' }}>{article.category}</span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>{article.date}</span>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>{article.views} views</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '8px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', flex: 1 }}>Edit</button>
                  <button style={{ background: '#FFEBEE', color: '#C62828', padding: '8px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', flex: 1 }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .admin-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
}
