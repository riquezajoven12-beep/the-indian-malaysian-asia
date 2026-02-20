'use client';
import Link from 'next/link';

export default function NewJob() {
  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#F8FAFC', outline: 'none' };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <Link href="/admin/jobs" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>← Jobs</Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>New Job Listing</h1>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 4vw, 35px)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Job Title</label><input style={inputStyle} placeholder="Job title..." /></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Company</label><input style={inputStyle} placeholder="Company name..." /></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Location</label><input style={inputStyle} placeholder="City, State..." /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Type</label>
              <select style={inputStyle}><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option></select></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Salary Range</label><input style={inputStyle} placeholder="e.g. RM 3,000 - RM 5,000" /></div>
          </div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Description</label><textarea style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} placeholder="Job description and requirements..." /></div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Apply URL</label><input style={inputStyle} placeholder="https://..." /></div>
          <button style={{ background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', alignSelf: 'flex-start' }}>Post Job</button>
        </div>
      </div>
    </div>
  );
}
