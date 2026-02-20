'use client';
import Link from 'next/link';

export default function NewTemple() {
  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#F8FAFC', outline: 'none' };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <Link href="/admin/temples" style={{ color: '#94A3B8', fontSize: '0.9rem' }}>← Temples</Link>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>New Temple</h1>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 4vw, 35px)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Temple Name</label><input style={inputStyle} placeholder="Temple name..." /></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>State</label>
              <select style={inputStyle}>{['Selangor','Kuala Lumpur','Penang','Johor','Perak','Negeri Sembilan','Kedah','Kelantan','Pahang','Terengganu','Perlis','Melaka','Sabah','Sarawak'].map(s => <option key={s}>{s}</option>)}</select></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Type</label>
              <select style={inputStyle}><option>Hindu</option><option>Sikh</option><option>Buddhist</option><option>Other</option></select></div>
          </div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Address</label><textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} placeholder="Full address..." /></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '20px' }}>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Latitude</label><input style={inputStyle} placeholder="3.1234" /></div>
            <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Longitude</label><input style={inputStyle} placeholder="101.6789" /></div>
          </div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Image URL</label><input style={inputStyle} placeholder="https://..." /></div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Description</label><textarea style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }} placeholder="Temple history and details..." /></div>
          <button style={{ background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', alignSelf: 'flex-start' }}>Add Temple</button>
        </div>
      </div>
    </div>
  );
}
