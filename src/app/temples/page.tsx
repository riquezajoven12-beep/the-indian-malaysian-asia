import Link from 'next/link';

export default function TemplesPage() {
  const temples = [
    { id: '1', name: 'Sri Mahamariamman Temple', type: 'hindu_temple', address: '163, Jalan Tun H.S. Lee', state: 'Kuala Lumpur', phone: '03-2078 5323' },
    { id: '2', name: 'Batu Caves Temple', type: 'hindu_temple', address: 'Gombak, Batu Caves', state: 'Selangor', phone: '' },
    { id: '3', name: 'Sri Maha Mariamman Devasthanam', type: 'hindu_temple', address: 'Queen Street, George Town', state: 'Penang', phone: '' },
    { id: '4', name: 'Gurdwara Sahib Petaling Jaya', type: 'sikh_gurdwara', address: 'Jalan Gasing, Petaling Jaya', state: 'Selangor', phone: '' },
    { id: '5', name: 'Arulmigu Sri Rajakaliamman Glass Temple', type: 'hindu_temple', address: 'Jalan Temenggong Ahmad', state: 'Johor', phone: '' },
    { id: '6', name: 'St. Marys Cathedral', type: 'church', address: 'Jalan Raja, City Centre', state: 'Kuala Lumpur', phone: '' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: 'white' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: 'white' }}>Jobs</Link>
            <Link href="/news" style={{ color: 'white' }}>News</Link>
            <Link href="/temples" style={{ color: '#FF6B00' }}>Temples</Link>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden', marginLeft: '10px' }}>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'white', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>EN</button>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>தமிழ்</button>
            </div>
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Subscribe</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #D4AF37 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🛕 Temple Finder</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: 'rgba(255,255,255,0.9)', marginBottom: '10px' }}>கோயில்களை கண்டறியுங்கள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Find Hindu temples, Sikh gurdwaras, and churches across Malaysia</p>
        <span style={{ display: 'inline-block', marginTop: '15px', background: '#E8F5E9', color: '#2E7D32', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>🆓 FREE ACCESS</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px', fontSize: '1rem' }}>
            <option value="">All Types</option>
            <option value="hindu_temple">Hindu Temples</option>
            <option value="sikh_gurdwara">Sikh Gurdwaras</option>
            <option value="church">Churches</option>
          </select>
          <select style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px', fontSize: '1rem' }}>
            <option value="">All States</option>
            <option value="selangor">Selangor</option>
            <option value="kuala_lumpur">Kuala Lumpur</option>
            <option value="penang">Penang</option>
            <option value="johor">Johor</option>
            <option value="perak">Perak</option>
          </select>
          <button style={{ padding: '12px 25px', background: '#FF6B00', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Search</button>
        </div>

        <p style={{ color: '#666', marginBottom: '25px' }}>Showing {temples.length} temples</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          {temples.map(function(temple) {
            const typeLabel = temple.type === 'hindu_temple' ? 'Hindu Temple' : temple.type === 'sikh_gurdwara' ? 'Sikh Gurdwara' : 'Church';
            const typeEmoji = temple.type === 'hindu_temple' ? '🛕' : temple.type === 'sikh_gurdwara' ? '🙏' : '⛪';
            const badgeBg = temple.type === 'hindu_temple' ? '#FFF5F0' : temple.type === 'sikh_gurdwara' ? '#F0F5FF' : '#F5F0FF';
            const badgeColor = temple.type === 'hindu_temple' ? '#FF6B00' : temple.type === 'sikh_gurdwara' ? '#4A6FA5' : '#6B4A9E';
            
            return (
              <div key={temple.id} style={{ background: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                  <div style={{ fontSize: '2.5rem' }}>{typeEmoji}</div>
                  <span style={{ background: badgeBg, color: badgeColor, padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>{typeLabel}</span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.3 }}>{temple.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px' }}>📍 {temple.address}</p>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>🏛️ {temple.state}</p>
                {temple.phone && <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '8px' }}>📞 {temple.phone}</p>}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', borderRadius: '16px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'white', marginBottom: '15px' }}>Know a temple not listed here?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px' }}>Help us grow our directory by adding temples in your area.</p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '14px 35px', borderRadius: '8px', fontWeight: 700 }}>+ Add a Temple</Link>
        </div>
      </div>

      <footer style={{ background: '#1A1A1A', padding: '40px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', fontSize: '0.9rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
