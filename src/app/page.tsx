'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'Source Sans 3, sans-serif', background: '#FFFCF7', color: '#2D2D2D', lineHeight: 1.7 }}>
      
      {/* Announcement Bar */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', color: 'white', padding: '10px 20px', fontSize: '0.85rem', textAlign: 'center' }}>
        <span>🪔 Celebrating Thaipusam 2026</span>
      </div>

      {/* Header */}
      <header style={{ background: '#FFFCF7', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '15px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/">
              <div>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: '#1A1A1A' }}>
                  The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
                </span>
                <br />
                <span style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '0.8rem', color: '#8B1538' }}>
                  மலேசிய இந்தியர்கள்
                </span>
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ display: 'none', background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', padding: '5px' }}
              className="mobile-menu-btn"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Desktop Nav */}
            <nav className="desktop-nav" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
              <Link href="/about" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.9rem' }}>About</Link>
              <Link href="/news" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.9rem' }}>News</Link>
              <Link href="/events" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.9rem' }}>Events</Link>
              <Link href="/temples" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.9rem' }}>Temples</Link>
              <Link href="/education" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.9rem' }}>Education</Link>
              <Link href="/community" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.9rem' }}>Community</Link>
              <Link href="/login" style={{ color: '#666', fontWeight: 500 }}>Login</Link>
              <Link href="/pricing" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', padding: '10px 20px', fontWeight: 600, fontSize: '0.85rem', borderRadius: '4px' }}>
                SUBSCRIBE
              </Link>
            </nav>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Link href="/about" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>About</Link>
                <Link href="/news" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>News</Link>
                <Link href="/events" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>Events</Link>
                <Link href="/temples" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>Temples</Link>
                <Link href="/education" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>Education</Link>
                <Link href="/community" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>Community</Link>
                <Link href="/associations" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>Associations</Link>
                <Link href="/jobs" style={{ color: '#2D2D2D', fontWeight: 500, padding: '10px 0' }}>Jobs</Link>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <Link href="/login" style={{ flex: 1, textAlign: 'center', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}>Login</Link>
                  <Link href="/pricing" style={{ flex: 1, textAlign: 'center', padding: '12px', background: '#FF6B00', color: 'white', borderRadius: '8px', fontWeight: 600 }}>Subscribe</Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #FF6B00 100%)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '40px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
                Preserving Heritage.<br />
                <span style={{ color: '#F4D03F' }}>Building Futures.</span>
              </h1>
              <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', fontSize: '1rem', marginBottom: '15px' }}>
                பாரம்பரியத்தைப் பாதுகாத்தல். எதிர்காலத்தை உருவாக்குதல்.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '30px' }}>
                Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.
              </p>
              <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#F4D03F' }}>2M+</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>Community</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#F4D03F' }}>180+</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>Years</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#F4D03F' }}>500+</div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>Associations</div>
                </div>
              </div>
            </div>

            <Link href="/news" style={{ display: 'block' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '30px', borderRadius: '12px', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '-12px', left: '20px', background: '#D4AF37', color: '#1A1A1A', padding: '6px 15px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Featured</span>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: 'white', marginBottom: '15px', lineHeight: 1.3 }}>
                  The Rise of Indian Malaysian Entrepreneurs
                </h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '20px', fontSize: '0.95rem' }}>
                  How young Indian Malaysians are transforming the business landscape.
                </p>
                <span style={{ color: '#D4AF37', fontWeight: 600 }}>Read More →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '60px 20px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#1A1A1A' }}>Latest News</h2>
            <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1rem', color: '#8B1538' }}>சமீபத்திய செய்திகள்</p>
          </div>
          <Link href="/news" style={{ color: '#FF6B00', fontWeight: 600 }}>View All →</Link>
        </div>
        
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          {[
            { title: 'Cabinet Approves New Indian Blueprint', cat: 'Politics', color: '#FF6B00', img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80' },
            { title: 'Tamil Schools See Record Enrollment', cat: 'Education', color: '#1B4332', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80' },
            { title: 'Batu Caves Prepares for Thaipusam', cat: 'Culture', color: '#8B1538', img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80' },
          ].map((article, i) => (
            <Link href="/news" key={i}>
              <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', borderRadius: '12px' }}>
                <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                  <img src={article.img} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: article.color, color: 'white', padding: '4px 12px', fontSize: '0.7rem', fontWeight: 600, borderRadius: '4px' }}>{article.cat.toUpperCase()}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '10px', lineHeight: 1.4 }}>{article.title}</h3>
                  <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 600 }}>Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center', padding: '15px', background: '#FFF5F0', borderRadius: '12px' }}>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>📰 You have <strong style={{ color: '#FF6B00' }}>3 free articles</strong> remaining. <Link href="/pricing" style={{ color: '#FF6B00', fontWeight: 600 }}>Subscribe for unlimited →</Link></p>
        </div>
      </section>

      {/* Quick Links */}
      <section style={{ background: '#f8f8f8', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>Explore Our Community</h2>
          
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { icon: '🏛️', title: 'Associations', desc: '500+ registered', href: '/associations', badge: 'BASIC', badgeColor: '#1565C0' },
              { icon: '📅', title: 'Events', desc: 'Festivals & gatherings', href: '/events', badge: 'FREE', badgeColor: '#2E7D32' },
              { icon: '💼', title: 'Jobs', desc: 'Career opportunities', href: '/jobs', badge: 'BASIC', badgeColor: '#1565C0' },
              { icon: '🛕', title: 'Temples', desc: '3,000+ temples', href: '/temples', badge: 'FREE', badgeColor: '#2E7D32' },
            ].map((item, i) => (
              <Link href={item.href} key={i}>
                <div style={{ background: 'white', padding: '25px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#1A1A1A', marginBottom: '5px' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '10px' }}>{item.desc}</p>
                  <span style={{ display: 'inline-block', background: item.badgeColor === '#2E7D32' ? '#E8F5E9' : '#E3F2FD', color: item.badgeColor, padding: '3px 8px', borderRadius: '10px', fontSize: '0.65rem', fontWeight: 600 }}>{item.badge}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', textAlign: 'center', marginBottom: '40px' }}>Choose Your Plan</h2>
        
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
          {/* Free */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Free</h3>
            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px' }}>RM 0<span style={{ fontSize: '0.9rem', color: '#888' }}>/mo</span></div>
            <ul style={{ textAlign: 'left', marginBottom: '25px', fontSize: '0.9rem' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>✓ 3 articles/month</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>✓ Events & Temples</li>
              <li style={{ padding: '8px 0', color: '#ccc' }}>✗ Associations</li>
              <li style={{ padding: '8px 0', color: '#ccc' }}>✗ Job board</li>
            </ul>
            <span style={{ display: 'inline-block', background: '#f0f0f0', color: '#666', padding: '10px 25px', borderRadius: '8px' }}>Current</span>
          </div>

          {/* Basic */}
          <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '30px', borderRadius: '16px', textAlign: 'center', color: 'white', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#D4AF37', color: '#1A1A1A', padding: '4px 12px', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 700 }}>POPULAR</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Basic</h3>
            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px' }}>RM 9.90<span style={{ fontSize: '0.9rem', opacity: 0.8 }}>/mo</span></div>
            <ul style={{ textAlign: 'left', marginBottom: '25px', fontSize: '0.9rem' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Unlimited articles</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Associations</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Job board</li>
              <li style={{ padding: '8px 0' }}>✓ Scholarships</li>
            </ul>
            <Link href="/subscribe" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '10px 25px', borderRadius: '8px', fontWeight: 700 }}>Subscribe</Link>
          </div>

          {/* Premium */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '10px' }}>Premium</h3>
            <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px' }}>RM 19.90<span style={{ fontSize: '0.9rem', color: '#888' }}>/mo</span></div>
            <ul style={{ textAlign: 'left', marginBottom: '25px', fontSize: '0.9rem' }}>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>✓ Everything in Basic</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>✓ Exclusive content</li>
              <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>✓ Community forum</li>
              <li style={{ padding: '8px 0' }}>✓ No ads</li>
            </ul>
            <Link href="/subscribe" style={{ display: 'inline-block', background: '#FF6B00', color: 'white', padding: '10px 25px', borderRadius: '8px', fontWeight: 700 }}>Go Premium</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1A1A1A', padding: '60px 20px 30px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '40px' }}>
            <div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', marginTop: '15px' }}>
                Your trusted source for news, education, and cultural preservation.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>About</Link>
                <Link href="/news" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>News</Link>
                <Link href="/events" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Events</Link>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>Community</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/temples" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Temples</Link>
                <Link href="/associations" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Associations</Link>
                <Link href="/jobs" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Jobs</Link>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '15px' }}>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Privacy</Link>
                <Link href="/terms" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Terms</Link>
                <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Contact</Link>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Button Styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}
