'use client';
import Link from 'next/link';

export default function AdminJobsPage() {
  const jobs = [
    { id: '1', title: 'Senior Software Engineer', company: 'TechCorp Solutions', location: 'Kuala Lumpur', type: 'Full Time', applications: 24 },
    { id: '2', title: 'Finance Manager', company: 'Kumar & Associates', location: 'Petaling Jaya', type: 'Full Time', applications: 18 },
    { id: '3', title: 'Tamil Language Teacher', company: 'SJK(T) Vivekananda', location: 'Brickfields', type: 'Part Time', applications: 12 },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <header style={{ background: '#1A1A1A', padding: '15px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <Link href="/" style={{ color: 'white', fontSize: '0.85rem' }}>View Site</Link>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        <aside style={{ width: '250px', background: '#1A1A1A', minHeight: 'calc(100vh - 60px)', padding: '20px 0' }} className="admin-sidebar">
          <nav>
            <Link href="/admin" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📊 Dashboard</Link>
            <Link href="/admin/articles" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📰 Articles</Link>
            <Link href="/admin/events" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>📅 Events</Link>
            <Link href="/admin/temples" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>🛕 Temples</Link>
            <Link href="/admin/associations" style={{ display: 'block', padding: '12px 25px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>🏛️ Associations</Link>
            <Link href="/admin/jobs" style={{ display: 'block', padding: '12px 25px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00', fontSize: '0.9rem' }}>💼 Jobs</Link>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '25px', minWidth: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '15px' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#1A1A1A' }}>💼 Jobs</h1>
            <button style={{ background: 'linear-gradient(135deg, #0D5C63, #1A1A1A)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>+ New Job</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', marginBottom: '25px' }}>
            <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ color: '#888', fontSize: '0.8rem' }}>Active</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2E7D32' }}>156</h2>
            </div>
            <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ color: '#888', fontSize: '0.8rem' }}>Applications</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF6B00' }}>1,234</h2>
            </div>
            <div style={{ background: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
              <p style={{ color: '#888', fontSize: '0.8rem' }}>Companies</p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1565C0' }}>89</h2>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {jobs.map((job) => (
              <div key={job.id} style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '5px' }}>{job.title}</h3>
                    <p style={{ color: '#666', fontSize: '0.85rem' }}>{job.company}</p>
                  </div>
                  <span style={{ background: '#F0F5FF', color: '#4A6FA5', padding: '4px 10px', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 600 }}>{job.type}</span>
                </div>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '15px', color: '#666', fontSize: '0.85rem' }}>
                  <span>📍 {job.location}</span>
                  <span>📋 {job.applications} applications</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '8px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', flex: 1 }}>Edit</button>
                  <button style={{ background: '#FFEBEE', color: '#C62828', padding: '8px 15px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem', flex: 1 }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`@media (max-width: 768px) { .admin-sidebar { display: none; } }`}</style>
    </div>
  );
}
