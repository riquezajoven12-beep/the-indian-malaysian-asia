import Link from 'next/link';

export default function AdminTemplesPage() {
  const temples = [
    { id: '1', name: 'Sri Mahamariamman Temple', type: 'Hindu Temple', state: 'Kuala Lumpur', address: '163, Jalan Tun H.S. Lee', verified: true },
    { id: '2', name: 'Batu Caves Temple', type: 'Hindu Temple', state: 'Selangor', address: 'Gombak, Batu Caves', verified: true },
    { id: '3', name: 'Sri Maha Mariamman Devasthanam', type: 'Hindu Temple', state: 'Penang', address: 'Queen Street, George Town', verified: true },
    { id: '4', name: 'Gurdwara Sahib Petaling Jaya', type: 'Sikh Gurdwara', state: 'Selangor', address: 'Jalan Gasing, PJ', verified: true },
    { id: '5', name: 'Arulmigu Sri Rajakaliamman Glass Temple', type: 'Hindu Temple', state: 'Johor', address: 'Jalan Temenggong Ahmad', verified: false },
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
            <Link href="/admin/temples" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00' }}>
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
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A' }}>🛕 Temples</h1>
            <button style={{ background: 'linear-gradient(135deg, #8B1538, #D4AF37)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>+</span> New Temple
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Total Temples</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#FF6B00' }}>3,247</h2>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Verified</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2E7D32' }}>2,891</h2>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Pending Review</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#E65100' }}>356</h2>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Types</option>
              <option>Hindu Temple</option>
              <option>Sikh Gurdwara</option>
              <option>Church</option>
            </select>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All States</option>
              <option>Kuala Lumpur</option>
              <option>Selangor</option>
              <option>Penang</option>
              <option>Johor</option>
            </select>
            <input type="text" placeholder="Search temples..." style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', flex: 1 }} />
          </div>

          {/* Temples Table */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f8f8' }}>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Temple Name</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Type</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>State</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Address</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Status</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {temples.map(function(temple) {
                  return (
                    <tr key={temple.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '20px' }}>
                        <p style={{ fontWeight: 500, color: '#1A1A1A' }}>{temple.name}</p>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 500 }}>
                          {temple.type}
                        </span>
                      </td>
                      <td style={{ padding: '20px', color: '#666' }}>{temple.state}</td>
                      <td style={{ padding: '20px', color: '#666', maxWidth: '200px' }}>{temple.address}</td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ 
                          background: temple.verified ? '#E8F5E9' : '#FFF3E0', 
                          color: temple.verified ? '#2E7D32' : '#E65100', 
                          padding: '4px 12px', 
                          borderRadius: '15px', 
                          fontSize: '0.8rem', 
                          fontWeight: 500 
                        }}>
                          {temple.verified ? '✓ Verified' : 'Pending'}
                        </span>
                      </td>
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
