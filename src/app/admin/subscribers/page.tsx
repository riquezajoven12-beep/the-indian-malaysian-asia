'use client';

const subscribers = [
  { id: 1, email: 'raj@example.com', plan: 'Premium', joined: '2026-01-15', status: 'Active' },
  { id: 2, email: 'priya@example.com', plan: 'Basic', joined: '2026-01-20', status: 'Active' },
  { id: 3, email: 'kumar@example.com', plan: 'Basic', joined: '2026-02-01', status: 'Active' },
  { id: 4, email: 'siti@example.com', plan: 'Free', joined: '2026-02-10', status: 'Active' },
  { id: 5, email: 'anand@example.com', plan: 'Premium', joined: '2025-12-05', status: 'Expired' },
];

export default function AdminSubscribers() {
  const planColors: Record<string, { bg: string; color: string }> = {
    Premium: { bg: '#F3E5F5', color: '#6A1B9A' },
    Basic: { bg: '#E3F2FD', color: '#1565C0' },
    Free: { bg: '#F1F5F9', color: '#475569' },
  };

  return (
    <div>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A', marginBottom: '10px' }}>👥 Subscribers</h1>
      <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '25px' }}>1,892 total subscribers • 1,245 Basic • 423 Premium • 224 Free</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))', gap: '15px', marginBottom: '25px' }}>
        {[
          { label: 'Monthly Revenue', value: 'RM 16,540', icon: '💰', bg: '#E8F5E9' },
          { label: 'New This Month', value: '127', icon: '📈', bg: '#E3F2FD' },
          { label: 'Churn Rate', value: '2.3%', icon: '📉', bg: '#FFF8E1' },
        ].map(s => (
          <div key={s.label} style={{ background: 'white', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>{s.icon}</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1A1A1A' }}>{s.value}</div>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '500px' }}>
            <thead><tr style={{ background: '#F8FAFC' }}>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>EMAIL</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>PLAN</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>JOINED</th>
              <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATUS</th>
            </tr></thead>
            <tbody>{subscribers.map(s => (
              <tr key={s.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{s.email}</td>
                <td style={{ padding: '14px 20px' }}><span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, background: planColors[s.plan]?.bg, color: planColors[s.plan]?.color }}>{s.plan}</span></td>
                <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#94A3B8' }}>{s.joined}</td>
                <td style={{ padding: '14px 20px' }}><span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, background: s.status === 'Active' ? '#E8F5E9' : '#FFEBEE', color: s.status === 'Active' ? '#2E7D32' : '#C62828' }}>{s.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
