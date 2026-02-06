'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewSchoolPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [school, setSchool] = useState({
    name: '',
    address: '',
    city: '',
    state: 'selangor',
    phone: '',
    type: 'primary',
  });

  const states = ['johor', 'kedah', 'kelantan', 'melaka', 'negeri_sembilan', 'pahang', 'penang', 'perak', 'perlis', 'sabah', 'sarawak', 'selangor', 'terengganu', 'kuala_lumpur', 'labuan', 'putrajaya'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/schools', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(school) });
      if (res.ok) { alert('School added!'); router.push('/admin/schools'); }
      else alert('Error');
    } catch { alert('Error'); }
    finally { setSaving(false); }
  };

  return (
    <div style={{ maxWidth: '700px' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>🏫 Add New School</h1>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>School Name *</label>
          <input type="text" value={school.name} onChange={(e) => setSchool({ ...school, name: e.target.value })} required style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>City</label>
            <input type="text" value={school.city} onChange={(e) => setSchool({ ...school, city: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>State</label>
            <select value={school.state} onChange={(e) => setSchool({ ...school, state: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}>
              {states.map(s => <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
            </select>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Address</label>
          <input type="text" value={school.address} onChange={(e) => setSchool({ ...school, address: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
        </div>
        <button type="submit" disabled={saving} style={{ background: '#FF6B00', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', fontWeight: 600 }}>{saving ? 'Saving...' : 'Add School'}</button>
      </form>
    </div>
  );
}
