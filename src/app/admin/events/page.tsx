import Link from 'next/link';

export default function AdminEventsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#1A1A1A', padding: '15px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href="/" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <Link href="/admin" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>Dashboard</Link>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
          <h1 style={{ fontSize: '2rem', color: '#1A1A1A', margin: 0 }}>📅 Events</h1>
          <button style={{ background: 'linear-gradient(135deg, #1B4332, #0D5C63)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ New Event</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { title: 'Thaipusam 2026', category: 'Festival', date: 'Feb 11, 2026', location: 'Batu Caves, Selangor' },
            { title: 'Tamil New Year Cultural Show', category: 'Cultural', date: 'Feb 28, 2026', location: 'KLCC Convention Centre' },
            { title: 'Indian Malaysian Business Summit', category: 'Business', date: 'Mar 15, 2026', location: 'Hilton Kuala Lumpur' },
          ].map((event, index) => (
            <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem' }}>{event.title}</h3>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px', color: '#666', fontSize: '0.9rem' }}>
                <span style={{ background: '#F0FFF5', color: '#1B4332', padding: '3px 10px', borderRadius: '10px', fontSize: '0.75rem' }}>{event.category}</span>
                <span>📅 {event.date}</span>
                <span>📍 {event.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FFEBEE', color: '#C62828', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Delete</button>
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
