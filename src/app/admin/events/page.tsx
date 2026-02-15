import Link from 'next/link';

export default function AdminEventsPage() {
  const events = [
    { id: '1', title: 'Thaipusam 2026', category: 'Festival', date: 'Feb 11, 2026', location: 'Batu Caves, Selangor', status: 'Upcoming' },
    { id: '2', title: 'Tamil New Year Cultural Show', category: 'Cultural', date: 'Feb 28, 2026', location: 'KLCC Convention Centre', status: 'Upcoming' },
    { id: '3', title: 'Indian Malaysian Business Summit', category: 'Community', date: 'Mar 15, 2026', location: 'Hilton Kuala Lumpur', status: 'Upcoming' },
    { id: '4', title: 'Puthandu - Tamil New Year', category: 'Festival', date: 'Apr 14, 2026', location: 'Various Locations', status: 'Upcoming' },
    { id: '5', title: 'Deepavali Celebration 2025', category: 'Festival', date: 'Nov 1, 2025', location: 'Nationwide', status: 'Past' },
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
            <Link href="/admin/events" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00' }}>
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
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A' }}>📅 Events</h1>
            <button style={{ background: 'linear-gradient(135deg, #1B4332, #0D5C63)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>+</span> New Event
            </button>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Categories</option>
              <option>Festival</option>
              <option>Cultural</option>
              <option>Community</option>
              <option>Religious</option>
            </select>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Status</option>
              <option>Upcoming</option>
              <option>Past</option>
            </select>
            <input type="text" placeholder="Search events..." style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', flex: 1 }} />
          </div>

          {/* Events Table */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f8f8' }}>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Event</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Category</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Date</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Location</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Status</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map(function(event) {
                  return (
                    <tr key={event.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '20px' }}>
                        <p style={{ fontWeight: 500, color: '#1A1A1A' }}>{event.title}</p>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ background: '#F0FFF5', color: '#1B4332', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 500 }}>
                          {event.category}
                        </span>
                      </td>
                      <td style={{ padding: '20px', color: '#666' }}>{event.date}</td>
                      <td style={{ padding: '20px', color: '#666' }}>{event.location}</td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ 
                          background: event.status === 'Upcoming' ? '#E3F2FD' : '#F5F5F5', 
                          color: event.status === 'Upcoming' ? '#1565C0' : '#666', 
                          padding: '4px 12px', 
                          borderRadius: '15px', 
                          fontSize: '0.8rem', 
                          fontWeight: 500 
                        }}>
                          {event.status}
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
