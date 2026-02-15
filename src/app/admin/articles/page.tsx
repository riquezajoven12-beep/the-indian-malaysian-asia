import Link from 'next/link';

export default function AdminArticlesPage() {
  const articles = [
    { id: '1', title: 'Cabinet Approves New Indian Blueprint for Economic Empowerment', category: 'Politics', status: 'Published', date: 'Jan 20, 2026', views: 1234 },
    { id: '2', title: 'Tamil Schools See Record Enrollment in Mother Tongue Education', category: 'Education', status: 'Published', date: 'Jan 18, 2026', views: 987 },
    { id: '3', title: 'Batu Caves Prepares for Largest Thaipusam Celebration', category: 'Culture', status: 'Published', date: 'Jan 15, 2026', views: 2341 },
    { id: '4', title: 'Indian Malaysian Business Leaders Summit 2026', category: 'Business', status: 'Draft', date: 'Jan 12, 2026', views: 0 },
    { id: '5', title: 'Community Initiative Launches in Klang Valley', category: 'Community', status: 'Published', date: 'Jan 10, 2026', views: 567 },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Admin Header */}
      <header style={{ background: '#1A1A1A', padding: '15px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.9rem' }}>View Site</Link>
            <Link href="/login" style={{ color: 'white', fontSize: '0.9rem' }}>Logout</Link>
          </nav>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '250px', background: '#1A1A1A', minHeight: 'calc(100vh - 60px)', padding: '30px 0' }}>
          <nav>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📊</span> Dashboard
            </Link>
            <Link href="/admin/articles" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00' }}>
              <span>📰</span> Articles
            </Link>
            <Link href="/admin/events" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📅</span> Events
            </Link>
            <Link href="/admin/temples" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🛕</span> Temples
            </Link>
            <Link href="/admin/associations" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🏛️</span> Associations
            </Link>
            <Link href="/admin/jobs" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>💼</span> Jobs
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '30px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A' }}>📰 Articles</h1>
            <button style={{ background: 'linear-gradient(135deg, #FF6B00, #8B1538)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>+</span> New Article
            </button>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Categories</option>
              <option>Politics</option>
              <option>Business</option>
              <option>Education</option>
              <option>Culture</option>
              <option>Community</option>
            </select>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
            <input type="text" placeholder="Search articles..." style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', flex: 1 }} />
          </div>

          {/* Articles Table */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f8f8' }}>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Title</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Category</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Status</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Date</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Views</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {articles.map(function(article) {
                  return (
                    <tr key={article.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '20px', maxWidth: '300px' }}>
                        <p style={{ fontWeight: 500, color: '#1A1A1A', marginBottom: '3px' }}>{article.title}</p>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 500 }}>
                          {article.category}
                        </span>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ 
                          background: article.status === 'Published' ? '#E8F5E9' : '#FFF3E0', 
                          color: article.status === 'Published' ? '#2E7D32' : '#E65100', 
                          padding: '4px 12px', 
                          borderRadius: '15px', 
                          fontSize: '0.8rem', 
                          fontWeight: 500 
                        }}>
                          {article.status}
                        </span>
                      </td>
                      <td style={{ padding: '20px', color: '#666' }}>{article.date}</td>
                      <td style={{ padding: '20px', color: '#666' }}>{article.views.toLocaleString()}</td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Edit</button>
                          <button style={{ background: '#FFEBEE', color: '#C62828', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
            <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>Previous</button>
            <button style={{ padding: '10px 15px', border: 'none', borderRadius: '8px', background: '#FF6B00', color: 'white', cursor: 'pointer' }}>1</button>
            <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>2</button>
            <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>3</button>
            <button style={{ padding: '10px 15px', border: '1px solid #ddd', borderRadius: '8px', background: 'white', cursor: 'pointer' }}>Next</button>
          </div>
        </main>
      </div>
    </div>
  );
}
