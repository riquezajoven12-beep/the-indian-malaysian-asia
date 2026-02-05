'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  slug: string;
  start_date: string;
  location: string;
  event_type: string;
  status: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setEvents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
            Events
          </h1>
          <p style={{ color: '#666' }}>Manage community events and festivals</p>
        </div>
        <Link
          href="/admin/events/new"
          style={{
            background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            fontWeight: 600,
            borderRadius: '8px',
          }}
        >
          + New Event
        </Link>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        {loading ? (
          <p style={{ padding: '40px', textAlign: 'center', color: '#666' }}>Loading events...</p>
        ) : events.length === 0 ? (
          <div style={{ padding: '60px', textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', marginBottom: '10px' }}>📅</p>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '20px' }}>No events yet</p>
            <Link
              href="/admin/events/new"
              style={{
                background: '#FF6B00',
                color: 'white',
                padding: '12px 25px',
                textDecoration: 'none',
                borderRadius: '6px',
              }}
            >
              Create your first event
            </Link>
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f8f8', borderBottom: '2px solid #eee' }}>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Event</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Date</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Location</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Type</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Status</th>
                <th style={{ textAlign: 'left', padding: '15px 20px', fontWeight: 600 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px 20px' }}><strong>{event.title}</strong></td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>
                    {new Date(event.start_date).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '15px 20px', color: '#666' }}>{event.location}</td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{
                      background: '#e3f2fd',
                      color: '#1565c0',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                    }}>
                      {event.event_type}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <span style={{
                      background: event.status === 'upcoming' ? '#d4edda' : '#f8d7da',
                      color: event.status === 'upcoming' ? '#155724' : '#721c24',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                    }}>
                      {event.status}
                    </span>
                  </td>
                  <td style={{ padding: '15px 20px' }}>
                    <a href={`/events/${event.slug}`} style={{ color: '#FF6B00', marginRight: '15px' }}>View</a>
                    <a href={`/admin/events/${event.id}/edit`} style={{ color: '#0066cc' }}>Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
