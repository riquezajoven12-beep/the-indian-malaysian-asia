'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewTemplePage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [temple, setTemple] = useState({
    name: '',
    slug: '',
    type: 'hindu_temple',
    address: '',
    city: '',
    state: 'selangor',
    phone: '',
    description: '',
  });

  const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/temples', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(temple),
      });
      if (res.ok) {
        alert('Temple added successfully!');
        router.push('/admin/temples');
      } else {
        alert('Error adding temple');
      }
    } catch (error) {
      alert('Error adding temple');
    } finally {
      setSaving(false);
    }
  };

  const states = ['johor', 'kedah', 'kelantan', 'melaka', 'negeri_sembilan', 'pahang', 'penang', 'perak', 'perlis', 'sabah', 'sarawak', 'selangor', 'terengganu', 'kuala_lumpur', 'labuan', 'putrajaya'];

  return (
    <div style={{ maxWidth: '700px' }}>
      <h1 style={{ fontSize: '1.8rem', color: '#1A1A1A', marginBottom: '5px' }}>🛕 Add New Temple</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Add a temple, gurdwara, or church to the directory</p>

      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Temple Name *</label>
          <input
            type="text"
            value={temple.name}
            onChange={(e) => setTemple({ ...temple, name: e.target.value, slug: generateSlug(e.target.value) })}
            placeholder="e.g., Sri Maha Mariamman Temple"
            required
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Type *</label>
            <select
              value={temple.type}
              onChange={(e) => setTemple({ ...temple, type: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', background: 'white' }}
            >
              <option value="hindu_temple">Hindu Temple</option>
              <option value="sikh_gurdwara">Sikh Gurdwara</option>
              <option value="church">Church</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>State *</label>
            <select
              value={temple.state}
              onChange={(e) => setTemple({ ...temple, state: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', background: 'white' }}
            >
              {states.map(s => (
                <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Address</label>
            <input
              type="text"
              value={temple.address}
              onChange={(e) => setTemple({ ...temple, address: e.target.value })}
              placeholder="Full address"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>City</label>
            <input
              type="text"
              value={temple.city}
              onChange={(e) => setTemple({ ...temple, city: e.target.value })}
              placeholder="e.g., Petaling Jaya"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Phone</label>
          <input
            type="tel"
            value={temple.phone}
            onChange={(e) => setTemple({ ...temple, phone: e.target.value })}
            placeholder="03-1234 5678"
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Description</label>
          <textarea
            value={temple.description}
            onChange={(e) => setTemple({ ...temple, description: e.target.value })}
            placeholder="Brief description of the temple..."
            rows={4}
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button type="submit" disabled={saving} style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1 }}>
            {saving ? 'Saving...' : 'Add Temple'}
          </button>
          <button type="button" onClick={() => router.back()} style={{ background: '#f0f0f0', color: '#333', border: 'none', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
