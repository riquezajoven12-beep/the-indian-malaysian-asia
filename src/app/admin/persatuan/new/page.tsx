'use client';
import Link from 'next/link';

export default function NewPersatuan() {
  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#F8FAFC', outline: 'none' };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <Link href="/admin/persatuan" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>← Persatuan</Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>New Persatuan</h1>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 4vw, 35px)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Association Name</label><input style={inputStyle} placeholder="Persatuan name..." /></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>State</label>
              <select style={inputStyle}>{['National','Selangor','Kuala Lumpur','Penang','Johor','Perak','Negeri Sembilan','Kedah','Kelantan','Pahang','Terengganu','Perlis','Melaka','Sabah','Sarawak'].map(s => <option key={s}>{s}</option>)}</select></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>ROS Number</label><input style={inputStyle} placeholder="Registration number..." /></div>
          </div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Contact Email</label><input type="email" style={inputStyle} placeholder="contact@example.com" /></div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Description</label><textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="About this association..." /></div>
          <button style={{ background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', alignSelf: 'flex-start' }}>Add Persatuan</button>
        </div>
      </div>
    </div>
  );
}
