'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [featured, setFeatured] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(function() {
    fetch('/api/featured')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (data && data.id) {
          setFeatured(data);
        }
      })
      .catch(function(err) {
        console.log('Featured fetch error');
      });

    fetch('/api/articles?limit=3')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (Array.isArray(data)) {
          setArticles(data);
        }
      })
      .catch(function(err) {
        console.log('Articles fetch error');
      });
  }, []);

  function getFeaturedTitle() {
    if (featured && featured.title) {
      return featured.title;
    }
    return 'The Rise of Indian Malaysian Entrepreneurs: A New Generation of Business Leaders';
  }

  function getFeaturedExcerpt() {
    if (featured && featured.excerpt) {
      return featured.excerpt;
    }
    return 'How young Indian Malaysians are transforming the business landscape while staying connected to their cultural roots.';
  }

  function getFeaturedAuthor() {
    if (featured && featured.author_name) {
      return featured.author_name;
    }
    return 'Kavitha Subramaniam';
  }

  function getFeaturedInitial() {
    if (featured && featured.author_name) {
      return featured.author_name.charAt(0);
    }
    return 'K';
  }

  function getFeaturedDate() {
    if (featured && featured.created_at) {
      return new Date(featured.created_at).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    return 'January 21, 2026';
  }

  function getFeaturedLink() {
    if (featured && featured.slug) {
      return '/news/' + featured.slug;
    }
    return '/news';
  }

  return (
    <div style={{ fontFamily: "'Source Sans 3', sans-serif", background: '#FFFCF7', color: '#2D2D2D', lineHeight: 1.7 }}>
      {/* Announcement Bar */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', color: 'white', padding: '8px 20px', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
        <span>🪔 Celebrating Thaipusam 2026 — Community Events Across Malaysia</span>
        <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", opacity: 0.9 }}>தைப்பூசம் 2026 கொண்டாட்டம்</span>
      </div>

      {/* Header */}
      <header style={{ background: '#FFFCF7', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 800, color: '#1A1A1A' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <br />
              <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1rem', color: '#8B1538', letterSpacing: '2px' }}>
                மலேசிய இந்தியர்கள்
              </span>
            </Link>
            <Link href="/subscribe" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', border: 'none', padding: '12px 28px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'none' }}>
              SUBSCRIBE
            </Link>
          </div>
          
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '18px 0' }}>
            <Link href="/" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Home</Link>
            <Link href="/news" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>News</Link>
            <Link href="/about" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Our Roots</Link>
            <Link href="/education" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Education</Link>
            <Link href="/temples" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Religion & Culture</Link>
            <Link href="/persatuan" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Persatuan</Link>
            <Link href="/events" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Events</Link>
            <Link href="/community" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>Community</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #FF6B00 100%)', minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
              Preserving Heritage.<br />
              <span style={{ color: '#F4D03F' }}>Building Futures.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '40px', maxWidth: '500px' }}>
              Your trusted source for news, education, and cultural preservation of the Indian Malaysian community. Connecting 2 million voices across the nation.
            </p>
            <div style={{ display: 'flex', gap: '50px' }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>2M+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Community Members</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>180+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Years of History</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Registered Persatuan</div>
              </div>
            </div>
          </div>

          {/* Dynamic Featured Story */}
          <Link href={getFeaturedLink()} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '40px', position: 'relative', cursor: 'pointer' }}>
              <span style={{ position: 'absolute', top: '-15px', left: '30px', background: '#D4AF37', color: '#1A1A1A', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                Featured Story
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'white', marginBottom: '20px', lineHeight: 1.3 }}>
                {getFeaturedTitle()}
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '25px', fontSize: '1rem' }}>
                {getFeaturedExcerpt()}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #FF6B00, #D4AF37)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>
                    {getFeaturedInitial()}
                  </div>
                  <span style={{ color: 'white', fontWeight: 500 }}>{getFeaturedAuthor()}</span>
                </div>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>{getFeaturedDate()}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest News Section - Dynamic */}
      <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', paddingBottom: '20px', borderBottom: '2px solid rgba(212, 175, 55, 0.3)' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: '#1A1A1A', position: 'relative' }}>Latest News</h2>
            <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.1rem', color: '#8B1538', marginTop: '8px' }}>சமீபத்திய செய்திகள்</p>
          </div>
          <Link href="/news" style={{ color: '#FF6B00', fontWeight: 600, textDecoration: 'none' }}>View All News →</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {articles.length > 0 ? (
            articles.map(function(article, index) {
              var colors = ['linear-gradient(135deg, #8B1538, #0D5C63)', 'linear-gradient(135deg, #1B4332, #D4AF37)', 'linear-gradient(135deg, #FF6B00, #8B1538)'];
              return (
                <Link key={article.id || index} href={'/news/' + (article.slug || '')} style={{ textDecoration: 'none' }}>
                  <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', cursor: 'pointer' }}>
                    <div style={{ height: '220px', background: colors[index % 3], position: 'relative' }}>
                      <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                        {article.category || 'News'}
                      </span>
                    </div>
                    <div style={{ padding: '25px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>
                        {article.title}
                      </h3>
                      <span style={{ fontSize: '0.85rem', color: '#5A5A5A' }}>Read More →</span>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <>
              <Link href="/news/cabinet-approves-blueprint" style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ height: '220px', background: 'linear-gradient(135deg, #8B1538, #0D5C63)', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Politics</span>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Cabinet Approves New Indian Blueprint for Economic Empowerment</h3>
                    <span style={{ fontSize: '0.85rem', color: '#5A5A5A' }}>Read More →</span>
                  </div>
                </div>
              </Link>
              <Link href="/news/tamil-schools-record-enrollment" style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ height: '220px', background: 'linear-gradient(135deg, #1B4332, #D4AF37)', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Education</span>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Tamil Schools See Record Enrollment as Interest in Mother Tongue Education Grows</h3>
                    <span style={{ fontSize: '0.85rem', color: '#5A5A5A' }}>Read More →</span>
                  </div>
                </div>
              </Link>
              <Link href="/news/batu-caves-thaipusam" style={{ textDecoration: 'none' }}>
                <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', cursor: 'pointer' }}>
                  <div style={{ height: '220px', background: 'linear-gradient(135deg, #FF6B00, #8B1538)', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Culture</span>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Batu Caves
