'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data)) setEvents(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link href="/news" style={{ color: 'white', textDecoration: 'none' }}>News</Link>
            <Link href="/events" style={{ color: '#FF6B00', textDecoration: 'none' }}>Events</Link>
            <Link href="/education" style={{ color: 'white', textDecoration: 'none' }}>Education</Link>
            <Link href="/community" style={{ color: 'white', textDecoration: 'none' }}>Community</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>📅 Events Calendar</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)' }}>Festivals, gatherings, and community events</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading events...</p>
        ) : events.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>📅</p>
            <p style={{ color: '#666', marginBottom: '20px' }}>No events scheduled yet.</p>
            <Link href="/admin/events/new" style={{ color: '#FF6B00' }}>Add event (Admin) →</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {events.map((event: any) => (
              <div key={event.id} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', display: 'flex', gap: '25px' }}>
                <div style={{ background: '#FF6B00', color: 'white', padding: '15px 20px', borderRadius: '8px', textAlign: 'center', minWidth: '80px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{new Date(event.start_date).getDate()}</div>
                  <div style={{ fontSize: '0.85rem' }}>{new Date(event.start_date).toLocaleString('default', { month: 'short' })}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '8px' }}>{event.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '5px' }}>📍 {event.location}</p>
                  <span style={{ background: '#e3f2fd', color: '#1565c0', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem' }}>{event.event_type}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
