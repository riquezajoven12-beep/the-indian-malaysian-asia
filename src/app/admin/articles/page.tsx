'use client';
import Link from 'next/link';

const articles = [
  { id: 1, title: 'Cabinet Approves New Indian Blueprint', category: 'Politics', status: 'Published', date: '2026-02-20', views: 1243 },
  { id: 2, title: 'Tamil Schools See Record Enrollment', category: 'Education', status: 'Published', date: '2026-02-19', views: 892 },
  { id: 3, title: 'Batu Caves Prepares for Thaipusam', category: 'Culture', status: 'Published', date: '2026-02-18', views: 2156 },
  { id: 4, title: 'Young Indian Malaysian Entrepreneurs Rising', category: 'Business', status: 'Draft', date: '2026-02-17', views: 0 },
  { id: 5, title: 'New MIC Leadership Election Results', category: 'Politics', status: 'Published', date: '2026-02-16', views: 3421 },
];

export default function AdminArticles() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '12px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)', color: '#1A1A1A' }}>📰 Articles</h1>
        <Link href="/admin/articles/new" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem' }}>+ New Article</Link>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', boxShadow: '0 1px 8px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: '#F8FAFC' }}>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>TITLE</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>CATEGORY</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>STATUS</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>DATE</th>
                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600 }}>VIEWS</th>
              </tr>
            </thead>
            <tbody>
              {articles.map(a => (
                <tr key={a.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 20px', fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 500 }}>{a.title}</td>
                  <td style={{ padding: '14px 20px' }}><span style={{ background: '#F1F5F9', padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', color: '#475569' }}>{a.category}</span></td>
                  <td style={{ padding: '14px 20px' }}><span style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, background: a.status === 'Published' ? '#E8F5E9' : '#FFF8E1', color: a.status === 'Published' ? '#2E7D32' : '#F57F17' }}>{a.status}</span></td>
                  <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#94A3B8' }}>{a.date}</td>
                  <td style={{ padding: '14px 20px', fontSize: '0.85rem', color: '#64748B' }}>{a.views.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
