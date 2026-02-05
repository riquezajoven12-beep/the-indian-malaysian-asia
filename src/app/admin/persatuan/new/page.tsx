'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPersatuanPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [persatuan, setPersatuan] = useState({
    name: '',
    slug: '',
    description: '',
    category: 'cultural',
    state: 'selangor',
    city: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    status: 'active',
  });

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setPersatuan({ ...persatuan, name, slug: generateSlug(name) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch('/api/persatuan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(persatuan),
      });

      if (res.ok) {
        alert('Persatuan added successfully!');
        router.push('/admin/persatuan');
      } else {
        alert('Error adding persatuan');
      }
    } catch (error) {
      alert('Error adding persatuan');
    } finally {
      setSaving(false);
    }
  };

  const states = [
    'johor', 'kedah', 'kelantan', 'melaka', 'negeri_sembilan', 
    'pahang', 'penang', 'perak', 'perlis', 'sabah', 'sarawak', 
    'selangor', 'terengganu', 'kuala_lumpur', 'labuan', 'putrajaya'
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#1A1A1A', marginBottom: '10px' }}>
        Add New Persatuan
      </h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>Register a new Indian Malaysian association</p>

      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        {/* Name */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Organization Name *</label>
          <input
            type="text"
            value={persatuan.name}
            onChange={handleNameChange}
            placeholder="e.g., Malaysian Hindu Sangam"
            required
            style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', fontSize: '1rem' }}
          />
        </div>

        {/* Category & State */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Category *</label>
            <select
              value={persatuan.category}
              onChange={(e) => setPersatuan({ ...persatuan, category: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', background: 'white' }}
            >
              <option value="national_federation">National Federation</option>
              <option value="state_federation">State Federation</option>
              <option value="professional">Professional Body</option>
              <option value="cultural">Cultural Organization</option>
              <option value="religious">Religious Organization</option>
              <option value="youth">Youth Organization</option>
              <option value="women">Women's Organization</option>
              <option value="business">Business Association</option>
              <option value="alumni">Alumni Association</option>
              <option value="welfare">Welfare/Charity</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>State *</label>
            <select
              value={persatuan.state}
              onChange={(e) => setPersatuan({ ...persatuan, state: e.target.value })}
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px', background: 'white' }}
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* City & Address */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>City</label>
            <input
              type="text"
              value={persatuan.city}
              onChange={(e) => setPersatuan({ ...persatuan, city: e.target.value })}
              placeholder="e.g., Petaling Jaya"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Address</label>
            <input
              type="text"
              value={persatuan.address}
              onChange={(e) => setPersatuan({ ...persatuan, address: e.target.value })}
              placeholder="Full address"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Phone</label>
            <input
              type="tel"
              value={persatuan.phone}
              onChange={(e) => setPersatuan({ ...persatuan, phone: e.target.value })}
              placeholder="03-1234 5678"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Email</label>
            <input
              type="email"
              value={persatuan.email}
              onChange={(e) => setPersatuan({ ...persatuan, email: e.target.value })}
              placeholder="info@example.org"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Website</label>
            <input
              type="url"
              value={persatuan.website}
              onChange={(e) => setPersatuan({ ...persatuan, website: e.target.value })}
              placeholder="https://example.org"
              style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}
            />
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Description</label>
          <textarea
            value={persatuan.description}
            onChange={(e) => setPersatuan({ ...persatuan, description: e.target.value })}
            placeholder="About this organization..."
            rows={5}
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
            }}
          >
            {saving ? 'Saving...' : 'Add Persatuan'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            style={{
              background: '#f0f0f0',
              color: '#333',
              border: 'none',
              padding: '15px 40px',
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
