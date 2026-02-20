'use client';

export default function AdminFeatured() {
  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#F8FAFC', outline: 'none' };
  return (
    <div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A', marginBottom: '25px' }}>⭐ Featured Story Manager</h1>

      <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 4vw, 35px)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', maxWidth: '800px', marginBottom: '25px' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '15px' }}>Current Featured Story</h2>
        <div style={{ background: 'linear-gradient(135deg, #0D5C63, #1B4332)', borderRadius: '12px', padding: '25px', color: 'white', marginBottom: '20px' }}>
          <span style={{ background: '#D4AF37', color: '#1A1A1A', padding: '3px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>FEATURED</span>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginTop: '10px' }}>The Rise of Indian Malaysian Entrepreneurs</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '6px' }}>How young Indian Malaysians are transforming the business landscape.</p>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 4vw, 35px)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600, color: '#475569', marginBottom: '15px' }}>Update Featured Story</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Title</label><input style={inputStyle} defaultValue="The Rise of Indian Malaysian Entrepreneurs" /></div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Subtitle</label><input style={inputStyle} defaultValue="How young Indian Malaysians are transforming the business landscape." /></div>
          <div><label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Link URL</label><input style={inputStyle} defaultValue="/news" /></div>
          <button style={{ background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', alignSelf: 'flex-start' }}>Update Featured</button>
        </div>
      </div>
    </div>
  );
}
