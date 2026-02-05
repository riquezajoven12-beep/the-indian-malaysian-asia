'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary_range: string;
  created_at: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      {/* Header */}
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0D5C63 0%, #1B4332 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'white', marginBottom: '10px' }}>💼 Job Board</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Career opportunities within the Indian Malaysian community</p>
      </div>

      {/* Jobs List */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '60px', color: '#666' }}>Loading jobs...</p>
        ) : jobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '12px' }}>
            <p style={{ fontSize: '3rem', marginBottom: '15px' }}>💼</p>
            <p style={{ color: '#666', marginBottom: '20px' }}>No job listings yet. Check back soon!</p>
            <Link href="/contact" style={{ color: '#FF6B00' }}>Post a job →</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {jobs.map((job) => (
              <div key={job.id} style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '8px' }}>{job.title}</h3>
                    <p style={{ color: '#666', marginBottom: '5px' }}>{job.company}</p>
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>📍 {job.location}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ background: '#e3f2fd', color: '#1565c0', padding: '5px 12px', borderRadius: '20px', fontSize: '0.85rem' }}>{job.type}</span>
                    {job.salary_range && <p style={{ color: '#FF6B00', fontWeight: 600, marginTop: '10px' }}>{job.salary_range}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
