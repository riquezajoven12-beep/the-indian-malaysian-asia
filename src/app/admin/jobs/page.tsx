import Link from 'next/link';

export default function AdminJobsPage() {
  const jobs = [
    { id: '1', title: 'Senior Software Engineer', company: 'TechCorp Solutions', location: 'Kuala Lumpur', type: 'Full Time', salary: 'RM 8-12K', status: 'Active', applications: 24 },
    { id: '2', title: 'Finance Manager', company: 'Kumar & Associates', location: 'Petaling Jaya', type: 'Full Time', salary: 'RM 10-15K', status: 'Active', applications: 18 },
    { id: '3', title: 'Tamil Language Teacher', company: 'SJK(T) Vivekananda', location: 'Brickfields, KL', type: 'Part Time', salary: 'RM 2.5-3.5K', status: 'Active', applications: 12 },
    { id: '4', title: 'Marketing Executive', company: 'Arun Marketing Sdn Bhd', location: 'Shah Alam', type: 'Full Time', salary: 'RM 4-6K', status: 'Closed', applications: 45 },
    { id: '5', title: 'HR Intern', company: 'Muthu Industries', location: 'Klang', type: 'Internship', salary: 'RM 1K', status: 'Active', applications: 8 },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Admin Header */}
      <header style={{ background: '#1A1A1A', padding: '15px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <span style={{ background: '#FF6B00', color: 'white', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>ADMIN</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'white', fontSize: '0.9rem' }}>View Site</Link>
            <Link href="/login" style={{ color: 'white', fontSize: '0.9rem' }}>Logout</Link>
          </nav>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{ width: '250px', background: '#1A1A1A', minHeight: 'calc(100vh - 60px)', padding: '30px 0' }}>
          <nav>
            <Link href="/admin" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📊</span> Dashboard
            </Link>
            <Link href="/admin/articles" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📰</span> Articles
            </Link>
            <Link href="/admin/events" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>📅</span> Events
            </Link>
            <Link href="/admin/temples" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🛕</span> Temples
            </Link>
            <Link href="/admin/associations" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: 'rgba(255,255,255,0.7)' }}>
              <span>🏛️</span> Associations
            </Link>
            <Link href="/admin/jobs" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px 30px', color: '#FF6B00', background: 'rgba(255,107,0,0.1)', borderLeft: '3px solid #FF6B00' }}>
              <span>💼</span> Jobs
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '30px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', color: '#1A1A1A' }}>💼 Jobs</h1>
            <button style={{ background: 'linear-gradient(135deg, #0D5C63, #1A1A1A)', color: 'white', padding: '12px 25px', borderRadius: '8px', fontWeight: 600, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>+</span> New Job
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Active Jobs</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2E7D32' }}>156</h2>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Total Applications</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#FF6B00' }}>1,234</h2>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Companies</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1565C0' }}>89</h2>
            </div>
            <div style={{ background: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Filled Positions</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#8B1538' }}>67</h2>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Categories</option>
              <option>IT & Technology</option>
              <option>Finance</option>
              <option>Education</option>
              <option>Marketing</option>
              <option>Healthcare</option>
            </select>
            <select style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '150px' }}>
              <option>All Status</option>
              <option>Active</option>
              <option>Closed</option>
            </select>
            <input type="text" placeholder="Search jobs..." style={{ padding: '10px 15px', border: '2px solid #ddd', borderRadius: '8px', flex: 1 }} />
          </div>

          {/* Jobs Table */}
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f8f8f8' }}>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Job Title</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Company</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Location</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Type</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Status</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Apps</th>
                  <th style={{ padding: '15px 20px', textAlign: 'left', fontWeight: 600, color: '#666' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(function(job) {
                  return (
                    <tr key={job.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '20px' }}>
                        <p style={{ fontWeight: 500, color: '#1A1A1A', marginBottom: '3px' }}>{job.title}</p>
                        <p style={{ color: '#888', fontSize: '0.85rem' }}>{job.salary}</p>
                      </td>
                      <td style={{ padding: '20px', color: '#666' }}>{job.company}</td>
                      <td style={{ padding: '20px', color: '#666' }}>{job.location}</td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ background: '#F0F5FF', color: '#4A6FA5', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 500 }}>
                          {job.type}
                        </span>
                      </td>
                      <td style={{ padding: '20px' }}>
                        <span style={{ 
                          background: job.status === 'Active' ? '#E8F5E9' : '#F5F5F5', 
                          color: job.status === 'Active' ? '#2E7D32' : '#666', 
                          padding: '4px 12px', 
                          borderRadius: '15px', 
                          fontSize: '0.8rem', 
                          fontWeight: 500 
                        }}>
                          {job.status}
                        </span>
                      </td>
                      <td style={{ padding: '20px', color: '#666', fontWeight: 600 }}>{job.applications}</td>
                      <td style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button style={{ background: '#E3F2FD', color: '#1565C0', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Edit</button>
                          <button style={{ background: '#FFEBEE', color: '#C62828', padding: '6px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontSize: '0.85rem' }}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
