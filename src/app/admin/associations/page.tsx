import Link from 'next/link';

export default function AdminAssociationsPage() {
  const associations = [
    { id: '1', name: 'Malaysian Indian Congress (MIC)', category: 'Welfare', state: 'Kuala Lumpur', established: '1946', members: '500K+' },
    { id: '2', name: 'Tamil Nesan Sangam', category: 'Cultural', state: 'Selangor', established: '1936', members: '5,000' },
    { id: '3', name: 'Malaysian Indian Business Association', category: 'Professional', state: 'Kuala Lumpur', established: '1982', members: '2,500' },
    { id: '4', name: 'Malaysian Indian Women Association', category: 'Women', state: 'Penang', established: '1971', members: '8,000' },
    { id: '5', name: 'Indian Youth Council Malaysia', category: 'Youth', state: 'Selangor', established: '1995', members: '15,000' },
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
            <Link href="/admin/articles" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📰</span> Articles
            </Link>
            <Link href="/admin/events" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📅</span> Events
            </Link>
            <Link href="/admin/temples" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🛕</span> Temples
            </Link>
            <Link href="/admin/associations" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00' }}>
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
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A' }}>🏛️ Associations</h1>
            <button style={{ background: 'linear-gradient(135deg, #8B1538, #1A1A1A)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>+</span> New Association
            </button>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Categories</option>
              <option>Welfare</option>
              <option>Cultural</option>
              <option>Professional</option>
              <option>Women</option>
              <option>Youth</option>
            </select>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All States</option>
              <option>Kuala Lumpur</option>
              <option>Selangor</option>
              <option>Penang</option>
              <option>Johor</option>
            </select>
            <input type="text" placeholder="Search associations..." style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', flex: 1 }} />
          </div>

          {/* Associations Table */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f8f8' }}>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Association Name</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Category</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>State</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Established</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Members</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {associations.map(function(assoc) {
                  const categoryColors: Record<string, { bg: string; color: string }> = {
                    'Welfare': { bg: '#FFF5F0', color: '#FF6B00' },
                    'Cultural': { bg: '#F0F5FF', color: '#4A6FA5' },
                    'Professional': { bg: '#F0FFF5', color: '#1B4332' },
                    'Women': { bg: '#FFF5FF', color: '#8B1538' },
                    'Youth': { bg: '#FFFAF0', color: '#D4AF37' },
                  };
                  const catStyle = categoryColors[assoc.category] || { bg: '#f0f0f0', color: '#666' };

                  return (
                    <tr key={assoc.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '20px' }}>
                        <p style={{ fontWeight: 500, color: '#1A1A1A' }}>{assoc.name}</p>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ background: catStyle.bg, color: catStyle.color, padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 500 }}>
                          {assoc.category}
                        </span>
                      </td>
                      <td style={{ padding: '20px', color: '#666' }}>{assoc.state}</td>
                      <td style={{ padding: '20px', color: '#666' }}>{assoc.established}</td>
                      <td style={{ padding: '20px', color: '#666' }}>{assoc.members}</td>
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
        </main>
      </div>
    </div>
  );
}
