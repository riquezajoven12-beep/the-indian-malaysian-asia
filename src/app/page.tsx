'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [featured, setFeatured] = useState(null);

  useEffect(function fetchFeatured() {
    fetch('/api/featured')
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (data && data.id) {
          setFeatured(data);
        }
      })
      .catch(function() {
        // ignore errors
      });
  }, []);

  var featuredTitle = featured && featured.title ? featured.title : 'The Rise of Indian Malaysian Entrepreneurs: A New Generation of Business Leaders';
  var featuredExcerpt = featured && featured.excerpt ? featured.excerpt : 'How young Indian Malaysians are transforming the business landscape while staying connected to their cultural roots.';
  var featuredAuthor = featured && featured.author_name ? featured.author_name : 'Kavitha Subramaniam';
  var featuredInitial = featured && featured.author_name ? featured.author_name.charAt(0) : 'K';
  var featuredLink = featured && featured.slug ? '/news/' + featured.slug : '/news';

  return (
    <div style={{ fontFamily: 'Source Sans 3, sans-serif', background: '#FFFCF7', color: '#2D2D2D', lineHeight: 1.7 }}>
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', color: 'white', padding: '8px 20px', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
        <span>🪔 Celebrating Thaipusam 2026 — Community Events Across Malaysia</span>
        <span style={{ fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.9 }}>தைப்பூசம் 2026 கொண்டாட்டம்</span>
      </div>

      <header style={{ background: '#FFFCF7', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 800, color: '#1A1A1A' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <br />
              <span style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1rem', color: '#8B1538', letterSpacing: '2px' }}>
                மலேசிய இந்தியர்கள்
              </span>
            </Link>
            <Link href="/subscribe" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', padding: '12px 28px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
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

      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #FF6B00 100%)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
              Preserving Heritage.<br />
              <span style={{ color: '#F4D03F' }}>Building Futures.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '40px', maxWidth: '500px' }}>
              Your trusted source for news, education, and cultural preservation of the Indian Malaysian community. Connecting 2 million voices across the nation.
            </p>
            <div style={{ display: 'flex', gap: '50px' }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>2M+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Community Members</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>180+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Years of History</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Registered Persatuan</div>
              </div>
            </div>
          </div>
          <Link href={featuredLink} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '40px', position: 'relative', cursor: 'pointer' }}>
              <span style={{ position: 'absolute', top: '-15px', left: '30px', background: '#D4AF37', color: '#1A1A1A', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Featured Story</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'white', marginBottom: '20px', lineHeight: 1.3 }}>{featuredTitle}</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '25px', fontSize: '1rem' }}>{featuredExcerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #FF6B00, #D4AF37)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>{featuredInitial}</div>
                  <span style={{ color: 'white', fontWeight: 500 }}>{featuredAuthor}</span>
                </div>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>January 21, 2026</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', paddingBottom: '20px', borderBottom: '2px solid rgba(212, 175, 55, 0.3)' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#1A1A1A' }}>Latest News</h2>
            <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1.1rem', color: '#8B1538', marginTop: '8px' }}>சமீபத்திய செய்திகள்</p>
          </div>
          <Link href="/news" style={{ color: '#FF6B00', fontWeight: 600, textDecoration: 'none' }}>View All News →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <Link href="/news/cabinet-approves-blueprint" style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ height: '220px', background: 'linear-gradient(135deg, #8B1538, #0D5C63)', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>Politics</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Cabinet Approves New Indian Blueprint for Economic Empowerment</h3>
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
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Tamil Schools See Record Enrollment as Interest in Mother Tongue Education Grows</h3>
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
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Batu Caves Prepares for Largest Thaipusam Celebration in Southeast Asia</h3>
                <span style={{ fontSize: '0.85rem', color: '#5A5A5A' }}>Read More →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ background: '#f8f8f8', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', textAlign: 'center', marginBottom: '50px' }}>Explore Our Community</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
            <Link href="/temples" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛕</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Find a Temple</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>3,000+ temples across Malaysia</p>
              </div>
            </Link>
            <Link href="/persatuan" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏛️</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Persatuan Directory</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>500+ registered associations</p>
              </div>
            </Link>
            <Link href="/events" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📅</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Upcoming Events</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Festivals & community gatherings</p>
              </div>
            </Link>
            <Link href="/education/schools" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏫</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Tamil Schools</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>523 schools nationwide</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#1A1A1A', padding: '60px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>2.01M</div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Population (2024)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>6.6%</div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>of Malaysia</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>523</div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Tamil Schools</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>3,000+</div>
            <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Hindu Temples</div>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '15px' }}>Stay Connected</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginBottom: '40px' }}>Subscribe to receive the latest news, events, and stories from the Indian Malaysian community.</p>
          <Link href="/subscribe" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '18px 50px', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px', textDecoration: 'none' }}>SUBSCRIBE NOW</Link>
        </div>
      </section>

      <footer style={{ background: '#1A1A1A', padding: '80px 0 30px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '50px', marginBottom: '60px' }}>
            <div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></span>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '20px' }}>Your trusted source for news, education, and cultural preservation of the Indian Malaysian community since 2024.</p>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>News</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><Link href="/news?category=politics" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Politics</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/news?category=business" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Business</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/news?category=education" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Education</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/news?category=culture" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Culture</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>Community</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><Link href="/persatuan" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Persatuan Directory</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/temples" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Temple Finder</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/events" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Events Calendar</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/jobs" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Job Board</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>Education</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><Link href="/education/schools" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Tamil Schools</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/education/scholarships" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Scholarships</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/education" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Online Courses</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>About</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}><Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Our Story</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <Link href="/privacy" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
