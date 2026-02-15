import Link from 'next/link';

export default function EventsPage() {
  const events = [
    { id: '1', title: 'Thaipusam 2026', date: '11', month: 'FEB', year: '2026', category: 'Festival', location: 'Batu Caves, Selangor', time: '6:00 AM onwards', description: 'Join millions of devotees for the largest Thaipusam celebration.', gradient: 'linear-gradient(135deg, #FF6B00, #8B1538)' },
    { id: '2', title: 'Tamil New Year Cultural Show', date: '28', month: 'FEB', year: '2026', category: 'Cultural', location: 'KLCC Convention Centre', time: '7:00 PM - 10:00 PM', description: 'An evening of classical dance, music performances.', gradient: 'linear-gradient(135deg, #D4AF37, #8B1538)' },
    { id: '3', title: 'Indian Malaysian Business Summit 2026', date: '15', month: 'MAR', year: '2026', category: 'Community', location: 'Hilton Kuala Lumpur', time: '9:00 AM - 5:00 PM', description: 'Annual gathering of business leaders and entrepreneurs.', gradient: 'linear-gradient(135deg, #1B4332, #0D5C63)' },
    { id: '4', title: 'Puthandu - Tamil New Year', date: '14', month: 'APR', year: '2026', category: 'Festival', location: 'Various Locations', time: 'All Day', description: 'Celebrate the Tamil New Year with traditional rituals.', gradient: 'linear-gradient(135deg, #8B1538, #1A1A1A)' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: '#FF6B00' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: 'white' }}>Jobs</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/temples" style={{ color: 'white' }}>Temples</Link>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden', marginLeft: '10px' }}>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'white', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>EN</button>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>தமிழ்</button>
            </div>
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Subscribe</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>📅 Events Calendar</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '10px' }}>நிகழ்வுகள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Community festivals, cultural celebrations, and gatherings</p>
        <span style={{ display: 'inline-block', marginTop: '15px', background: '#E8F5E9', color: '#2E7D32', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>🆓 FREE ACCESS</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '25px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>All Events</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Community</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Cultural</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Festivals</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Religious</button>
        </div>

        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', marginBottom: '25px', color: '#1A1A1A' }}>🔥 Upcoming Events</h2>

        <div style={{ display: 'grid', gap: '25px', marginBottom: '50px' }}>
          {events.map(function(event) {
            const categoryColors: Record<string, { bg: string; color: string }> = {
              'Festival': { bg: '#FFF5F0', color: '#FF6B00' },
              'Cultural': { bg: '#F0F5FF', color: '#4A6FA5' },
              'Community': { bg: '#F0FFF5', color: '#1B4332' },
              'Religious': { bg: '#FFF5FF', color: '#8B1538' },
            };
            const badge = categoryColors[event.category] || { bg: '#FFF5F0', color: '#FF6B00' };

            return (
              <div key={event.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: '200px 1fr', alignItems: 'stretch' }}>
                <div style={{ background: event.gradient, padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>{event.date}</div>
                  <div style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>{event.month}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '5px' }}>{event.year}</div>
                </div>
                <div style={{ padding: '25px' }}>
                  <span style={{ background: badge.bg, color: badge.color, padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>{event.category.toUpperCase()}</span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1A1A1A', margin: '15px 0 10px', lineHeight: 1.3 }}>{event.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '15px' }}>{event.description}</p>
                  <div style={{ display: 'flex', gap: '20px', color: '#888', fontSize: '0.9rem' }}>
                    <span>📍 {event.location}</span>
                    <span>⏰ {event.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'white', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '15px' }}>Have an event to share?</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>Submit your community event to be featured on our calendar.</p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#FF6B00', color: 'white', padding: '14px 35px', borderRadius: '8px', fontWeight: 700 }}>+ Submit Event</Link>
        </div>
      </div>

      <footer style={{ background: '#1A1A1A', padding: '40px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', fontSize: '0.9rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
