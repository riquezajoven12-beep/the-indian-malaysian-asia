'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TemplesPage() {
  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');
  const [filterState, setFilterState] = useState('all');

  useEffect(function() {
    fetch('/api/temples')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (Array.isArray(data)) {
          setTemples(data);
        }
        setLoading(false);
      })
      .catch(function() {
        setLoading(false);
      });
  }, []);

  function getFilteredTemples() {
    return temples.filter(function(temple) {
      var typeMatch = filterType === 'all' || temple.type === filterType;
      var stateMatch = filterState === 'all' || temple.state === filterState;
      return typeMatch && stateMatch;
    });
  }

  function getTempleIcon(type) {
    if (type === 'hindu_temple') return '🛕';
    if (type === 'sikh_gurdwara') return '🙏';
    if (type === 'church') return '⛪';
    return '🛕';
  }

  function formatState(state) {
    if (!state) return '';
    return state.replace(/_/g, ' ').replace(/\b\w/g, function(l) {
      return l.toUpperCase();
    });
  }

  var filteredTemples = getFilteredTemples();

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px' }}>
            <Link href="/news" style={{ color: 'white', textDecoration: 'none' }}>News</Link>
            <Link href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
            <Link href="/temples" style={{ color: '#FF6B00', textDecoration: 'none' }}>Temples</Link>
            <Link href="/community" style={{ color: 'white', textDecoration: 'none' }}>Community</Link>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #D4AF37 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>🛕 Temple Finder</h1>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Find Hindu temples, Sikh gurdwaras, and churches across Malaysia</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', flexWrap: 'wrap' }}>
          <select
            value={filterType}
            onChange={function(e) { setFilterType(e.target.value); }}
            style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px', fontSize: '1rem', cursor: 'pointer' }}
          >
            <option value="all">All Types</option>
            <option value="hindu_temple">Hindu Temples</option>
            <option value="sikh_gurdwara">Sikh Gurdwaras</option>
            <option value="church">Churches</option>
          </select>

          <select
            value={filterState}
            onChange={function(e) { setFilterState(e.target.value); }}
            style={{ padding: '12px 20px', border: '2px solid #ddd', borderRadius: '8px', background: 'white', minWidth: '200px', fontSize: '1rem', cursor: 'pointer' }}
          >
            <option value="all">All States</option>
            <option value="selangor">Selangor</option>
            <option value="kuala_lumpur">Kuala Lumpur</option>
            <option value="penang">Penang</option>
            <option value="johor">Johor</option>
            <option value="perak">Perak</option>
            <option value="negeri_sembilan">Negeri Sembilan</option>
            <option value="melaka">Melaka</option>
            <option value="kedah">Kedah</option>
            <option value="pahang">Pahang</option>
            <option value="terengganu">Terengganu</option>
            <option value="kelantan">Kelantan</option>
            <option value="sabah">Sabah</option>
            <option value="sarawak">Sarawak</option>
          </select>

          {(filterType !== 'all' || filterState !== 'all') && (
            <button
              onClick={function() { setFilterType('all'); setFilterState('all'); }}
              style={{ padding: '12px 20px', border: 'none', borderRadius: '8px', background: '#f0f0f0', color: '#666', cursor: 'pointer', fontSize: '1rem' }}
            >
              Clear Filters
            </button>
          )}
        </div>

        <p style={{ color: '#666', marginBottom: '20px' }}>
          Showing {filteredTemples.length} {filteredTemples.length === 1 ? 'result' : 'results'}
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛕</div>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Loading temples...</p>
          </div>
        ) : filteredTemples.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: 'white', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛕</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#1A1A1A', marginBottom: '10px' }}>No temples found</h2>
            <p style={{ color: '#666', marginBottom: '25px' }}>Try adjusting your filters or add a new temple.</p>
            <Link href="/admin/temples/new" style={{ display: 'inline-block', background: '#FF6B00', color: 'white', padding: '12px 30px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>
              + Add Temple
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '25px' }}>
            {filteredTemples.map(function(temple) {
              return (
                <div key={temple.id} style={{ background: 'white', padding: '25px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                    <div style={{ fontSize: '2.5rem' }}>{getTempleIcon(temple.type)}</div>
                    <span style={{ background: '#FFF5F0', color: '#FF6B00', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {temple.type ? temple.type.replace(/_/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); }) : 'Temple'}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.3 }}>{temple.name}</h3>
                  {temple.address && (
                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '8px', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span>📍</span>
                      <span>{temple.address}</span>
                    </p>
                  )}
                  <p style={{ color: '#888', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>🏛️</span>
                    <span>{temple.city}{temple.city && temple.state ? ', ' : ''}{formatState(temple.state)}</span>
                  </p>
                  {temple.phone && (
                    <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>📞</span>
                      <span>{temple.phone}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', borderRadius: '16px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'white', marginBottom: '15px' }}>Know a temple not listed here?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '25px' }}>Help us grow our directory by adding temples in your area.</p>
          <Link href="/admin/temples/new" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '14px 35px', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '1rem' }}>
            + Add a Temple
          </Link>
        </div>
      </div>

      <footer style={{ background: '#1A1A1A', padding: '40px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white', textDecoration: 'none' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', fontSize: '0.9rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
