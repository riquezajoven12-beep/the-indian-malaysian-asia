'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewEventPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [event, setEvent] = useState({
    title: '',
    slug: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
    address: '',
    event_type: 'cultural',
    status: 'upcoming',
  });

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setEvent({ ...event, title, slug: generateSlug(title) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });

      if (res.ok) {
        alert('Event created successfully!');
        router.push('/admin/events');
      } else {
        alert('Error creating event');
      }
    } catch (error) {
      alert('Error creating event');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
        Create New Event
      </h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Add a new community event or festival</p>

      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        {/* Title */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Event Title *</label>
          <input
            type="text"
            value={event.title}
            onChange={handleTitleChange}
            placeholder="e.g., Thaipusam Festival 2026"
            required
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
          />
        </div>

        {/* Slug */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>URL Slug</label>
          <input
            type="text"
            value={event.slug}
            onChange={(e) => setEvent({ ...event, slug: e.target.value })}
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
          />
        </div>

        {/* Date Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Start Date *</label>
            <input
              type="datetime-local"
              value={event.start_date}
              onChange={(e) => setEvent({ ...event, start_date: e.target.value })}
              required
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>End Date</label>
            <input
              type="datetime-local"
              value={event.end_date}
              onChange={(e) => setEvent({ ...event, end_date: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* Location */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Location/Venue *</label>
          <input
            type="text"
            value={event.location}
            onChange={(e) => setEvent({ ...event, location: e.target.value })}
            placeholder="e.g., Batu Caves, Selangor"
            required
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
          />
        </div>

        {/* Address */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Full Address</label>
          <input
            type="text"
            value={event.address}
            onChange={(e) => setEvent({ ...event, address: e.target.value })}
            placeholder="Full address for Google Maps"
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
          />
        </div>

        {/* Type & Status */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Event Type</label>
            <select
              value={event.event_type}
              onChange={(e) => setEvent({ ...event, event_type: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', background: 'white' }}
            >
              <option value="religious">Religious Festival</option>
              <option value="cultural">Cultural Event</option>
              <option value="education">Education</option>
              <option value="business">Business/Networking</option>
              <option value="community">Community Gathering</option>
              <option value="sports">Sports</option>
              <option value="charity">Charity</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Status</label>
            <select
              value={event.status}
              onChange={(e) => setEvent({ ...event, status: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', background: 'white' }}
            >
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Description</label>
          <textarea
            value={event.description}
            onChange={(e) => setEvent({ ...event, description: e.target.value })}
            placeholder="Describe the event..."
            rows={6}
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', resize: 'vertical' }}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? 'Saving...' : 'Create Event'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            style={{
              background: '#f0f0f0',
              color: '#333',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
