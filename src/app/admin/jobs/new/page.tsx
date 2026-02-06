'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewJobPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [job, setJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    salary_range: '',
    description: '',
    contact_email: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(job) });
      if (res.ok) { alert('Job posted!'); router.push('/admin/jobs'); }
      else alert('Error');
    } catch { alert('Error'); }
    finally { setSaving(false); }
  };

  return (
    <div style={{ maxWidth: '700px' }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>💼 Post New Job</h1>
      <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '12px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Job Title *</label>
          <input type="text" value={job.title} onChange={(e) => setJob({ ...job, title: e.target.value })} required placeholder="e.g., Software Engineer" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Company *</label>
            <input type="text" value={job.company} onChange={(e) => setJob({ ...job, company: e.target.value })} required style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Location</label>
            <input type="text" value={job.location} onChange={(e) => setJob({ ...job, location: e.target.value })} placeholder="e.g., Kuala Lumpur" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Job Type</label>
            <select value={job.type} onChange={(e) => setJob({ ...job, type: e.target.value })} style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }}>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Salary Range</label>
            <input type="text" value={job.salary_range} onChange={(e) => setJob({ ...job, salary_range: e.target.value })} placeholder="e.g., RM 5,000 - 8,000" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Description</label>
          <textarea value={job.description} onChange={(e) => setJob({ ...job, description: e.target.value })} rows={5} placeholder="Job description and requirements..." style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: '8px' }}>Contact Email</label>
          <input type="email" value={job.contact_email} onChange={(e) => setJob({ ...job, contact_email: e.target.value })} placeholder="hr@company.com" style={{ width: '100%', padding: '12px', border: '2px solid #ddd', borderRadius: '8px' }} />
        </div>
        <button type="submit" disabled={saving} style={{ background: '#FF6B00', color: 'white', border: 'none', padding: '12px 30px', borderRadius: '8px', fontWeight: 600 }}>{saving ? 'Posting...' : 'Post Job'}</button>
      </form>
    </div>
  );
}
