import Link from 'next/link';

export default function AdminTemplesPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5', fontFamily: 'system-ui, sans-serif' }}>
      <header style={{ background: '#1A1A1A', padding: '15px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href="/" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <Link href="/admin" style={{ color: 'white', fontSize: '0.9rem', textDecoration: 'none' }}>Dashboard</Link>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
          <h1 style={{ fontSize: '2rem', color: '#1A1A1A', margin: 0 }}>🛕 Temples</h1>
          <button style={{ background: 'linear-gradient(135deg, #8B1538, #D4AF37)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>+ New Temple</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '30px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 5px 0' }}>Total</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#FF6B00', margin: 0 }}>3,247</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 5px 0' }}>Verified</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#2E7D32', margin: 0 }}>2,891</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center' }}>
            <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 5px 0' }}>Pending</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#E65100', margin: 0 }}>356</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {[
            { name: 'Sri Mahamariamman Temple', type: 'Hindu Temple', state: 'Kuala Lumpur', verified: true },
            { name: 'Batu Caves Temple', type: 'Hindu Temple', state: 'Selangor', verified: true },
            { name: 'Gurdwara Sahib Petaling Jaya', type: 'Sikh Gurdwara', state: 'Selangor', verified: true },
          ].map((temple, index) => (
            <div key={index} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{temple.name}</h3>
                <span style={{ background: temple.verified ? '#E8F5E9' : '#FFF3E0', color: temple.verified ? '#2E7D32' : '#E65100', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>
                  {temple.verified ? '✓ Verified' : 'Pending'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px', color: '#666', fontSize: '0.9rem' }}>
                <span>{temple.type}</span>
                <span>📍 {temple.state}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Edit</button>
                <button style={{ background: '#FFEBEE', color: '#C62828', padding: '8px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>Delete</button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/admin" style={{ color: '#FF6B00', fontWeight: 600, textDecoration: 'none' }}>← Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
