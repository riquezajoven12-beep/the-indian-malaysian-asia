import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ fontFamily: 'Source Sans 3, sans-serif', background: '#FFFCF7', color: '#2D2D2D', lineHeight: 1.7 }}>
      
      {/* Announcement Bar */}
      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', color: 'white', padding: '10px 20px', fontSize: '0.85rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
        <span>🪔 Celebrating Thaipusam 2026 — Community Events Across Malaysia</span>
        <span style={{ fontFamily: 'Noto Sans Tamil, sans-serif', opacity: 0.9 }}>தைப்பூசம் 2026 கொண்டாட்டம்</span>
      </div>

      {/* Header */}
      <header style={{ background: '#FFFCF7', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <Link href="/">
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 800, color: '#1A1A1A' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <br />
              <span style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1rem', color: '#8B1538', letterSpacing: '2px' }}>
                மலேசிய இந்தியர்கள்
              </span>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', background: '#f0f0f0', borderRadius: '20px', overflow: 'hidden' }}>
                <button style={{ padding: '6px 12px', fontSize: '0.85rem', background: '#FF6B00', color: 'white', border: 'none' }}>EN</button>
                <button style={{ padding: '6px 12px', fontSize: '0.85rem', background: 'transparent', color: '#666', border: 'none' }}>தமிழ்</button>
              </div>
              <Link href="/login" style={{ color: '#666', fontWeight: 500 }}>Login</Link>
              <Link href="/pricing" style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', padding: '12px 28px', fontWeight: 600, fontSize: '0.9rem', borderRadius: '4px' }}>
                SUBSCRIBE
              </Link>
            </div>
          </div>
          
          {/* Navigation - Alphabetical Order */}
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '35px', padding: '18px 0' }}>
            <Link href="/about" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>About</Link>
            <Link href="/associations" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>Associations <span style={{ fontSize: '0.7rem', background: '#E3F2FD', color: '#1565C0', padding: '2px 6px', borderRadius: '10px', marginLeft: '5px' }}>BASIC</span></Link>
            <Link href="/community" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>Community</Link>
            <Link href="/education" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>Education</Link>
            <Link href="/events" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>Events</Link>
            <Link href="/" style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.95rem' }}>Home</Link>
            <Link href="/jobs" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>Jobs <span style={{ fontSize: '0.7rem', background: '#E3F2FD', color: '#1565C0', padding: '2px 6px', borderRadius: '10px', marginLeft: '5px' }}>BASIC</span></Link>
            <Link href="/news" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>News</Link>
            <Link href="/temples" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem' }}>Temples</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #FF6B00 100%)', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '4rem', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '30px' }}>
              Preserving Heritage.<br />
              <span style={{ color: '#F4D03F' }}>Building Futures.</span>
            </h1>
            <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', fontSize: '1.1rem', marginBottom: '15px' }}>
              பாரம்பரியத்தைப் பாதுகாத்தல். எதிர்காலத்தை உருவாக்குதல்.
            </p>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '40px', maxWidth: '500px' }}>
              Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.
            </p>
            <div style={{ display: 'flex', gap: '50px' }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>2M+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Community</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>180+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Years</div>
              </div>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>500+</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Associations</div>
              </div>
            </div>
          </div>

          <Link href="/news">
            <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '40px', position: 'relative', borderRadius: '12px' }}>
              <span style={{ position: 'absolute', top: '-15px', left: '30px', background: '#D4AF37', color: '#1A1A1A', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Featured Story</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: 'white', marginBottom: '20px', lineHeight: 1.3 }}>
                The Rise of Indian Malaysian Entrepreneurs
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '25px', fontSize: '1rem' }}>
                How young Indian Malaysians are transforming the business landscape while staying connected to their cultural roots.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <span style={{ color: 'white', fontWeight: 500 }}>Kavitha S.</span>
                <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>Jan 21, 2026</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest News */}
      <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', paddingBottom: '20px', borderBottom: '2px solid rgba(212, 175, 55, 0.3)' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 700, color: '#1A1A1A' }}>Latest News</h2>
            <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1.1rem', color: '#8B1538', marginTop: '8px' }}>சமீபத்திய செய்திகள்</p>
          </div>
          <Link href="/news" style={{ color: '#FF6B00', fontWeight: 600 }}>View All News →</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <Link href="/news">
            <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', borderRadius: '12px' }}>
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80" alt="Parliament" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', borderRadius: '4px' }}>Politics</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Cabinet Approves New Indian Blueprint</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>The government unveils comprehensive plan to boost opportunities.</p>
                <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 600 }}>Read More →</span>
              </div>
            </div>
          </Link>

          <Link href="/news">
            <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', borderRadius: '12px' }}>
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" alt="Education" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#1B4332', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', borderRadius: '4px' }}>Education</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Tamil Schools See Record Enrollment</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>Parents increasingly value Tamil language education.</p>
                <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 600 }}>Read More →</span>
              </div>
            </div>
          </Link>

          <Link href="/news">
            <div style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', borderRadius: '12px' }}>
              <div style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80" alt="Thaipusam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#8B1538', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', borderRadius: '4px' }}>Culture</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>Batu Caves Prepares for Thaipusam</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>Over 1.5 million devotees expected to attend.</p>
                <span style={{ fontSize: '0.85rem', color: '#FF6B00', fontWeight: 600 }}>Read More →</span>
              </div>
            </div>
          </Link>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', padding: '20px', background: '#FFF5F0', borderRadius: '12px' }}>
          <p style={{ color: '#666' }}>📰 You have <strong style={{ color: '#FF6B00' }}>3 free articles</strong> remaining this month. <Link href="/pricing" style={{ color: '#FF6B00', fontWeight: 600 }}>Subscribe for unlimited access →</Link></p>
        </div>
      </section>

      {/* Quick Links - Alphabetical */}
      <section style={{ background: '#f8f8f8', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', textAlign: 'center', marginBottom: '15px' }}>Explore Our Community</h2>
          <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', textAlign: 'center', color: '#8B1538', marginBottom: '50px' }}>எங்கள் சமூகத்தை ஆராயுங்கள்</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
            <Link href="/associations">
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid #8B1538' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏛️</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Associations</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>500+ registered</p>
                <span style={{ display: 'inline-block', marginTop: '10px', background: '#E3F2FD', color: '#1565C0', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 600 }}>BASIC</span>
              </div>
            </Link>

            <Link href="/events">
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid #1B4332' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📅</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Events</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Festivals & gatherings</p>
                <span style={{ display: 'inline-block', marginTop: '10px', background: '#E8F5E9', color: '#2E7D32', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 600 }}>FREE</span>
              </div>
            </Link>

            <Link href="/jobs">
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid #D4AF37' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💼</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Jobs</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Career opportunities</p>
                <span style={{ display: 'inline-block', marginTop: '10px', background: '#E3F2FD', color: '#1565C0', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 600 }}>BASIC</span>
              </div>
            </Link>

            <Link href="/temples">
              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', borderLeft: '4px solid #FF6B00' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🛕</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '8px' }}>Temples</h3>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>3,000+ temples</p>
                <span style={{ display: 'inline-block', marginTop: '10px', background: '#E8F5E9', color: '#2E7D32', padding: '3px 8px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 600 }}>FREE</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section style={{ padding: '80px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', textAlign: 'center', marginBottom: '15px' }}>Choose Your Plan</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '50px' }}>Unlock the full potential of The Indian Malaysian</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>🆓</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '10px' }}>Free</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '20px' }}>RM 0<span style={{ fontSize: '1rem', color: '#888' }}>/month</span></div>
            <ul style={{ textAlign: 'left', marginBottom: '30px', color: '#666' }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ 3 articles/month</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ Events calendar</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ Temple finder</li>
              <li style={{ padding: '10px 0', color: '#ccc' }}>✗ Associations</li>
              <li style={{ padding: '10px 0', color: '#ccc' }}>✗ Job board</li>
            </ul>
            <span style={{ display: 'inline-block', background: '#f0f0f0', color: '#666', padding: '12px 30px', borderRadius: '8px' }}>Current Plan</span>
          </div>

          <div style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 100%)', padding: '40px', borderRadius: '16px', textAlign: 'center', color: 'white', position: 'relative', transform: 'scale(1.05)' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#D4AF37', color: '#1A1A1A', padding: '5px 15px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>MOST POPULAR</div>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>⭐</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '10px' }}>Basic</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px' }}>RM 9.90<span style={{ fontSize: '1rem', opacity: 0.8 }}>/month</span></div>
            <ul style={{ textAlign: 'left', marginBottom: '30px', opacity: 0.9 }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Unlimited articles</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Associations directory</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Full job board</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>✓ Scholarships</li>
              <li style={{ padding: '10px 0' }}>✓ Save favorites</li>
            </ul>
            <Link href="/subscribe" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '14px 40px', borderRadius: '8px', fontWeight: 700 }}>Subscribe Now</Link>
          </div>

          <div style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 2px 15px rgba(0,0,0,0.08)', textAlign: 'center', border: '2px solid #D4AF37' }}>
            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>👑</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', marginBottom: '10px' }}>Premium</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '20px' }}>RM 19.90<span style={{ fontSize: '1rem', color: '#888' }}>/month</span></div>
            <ul style={{ textAlign: 'left', marginBottom: '30px', color: '#666' }}>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ Everything in Basic</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ Exclusive content</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ Community forum</li>
              <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>✓ No advertisements</li>
              <li style={{ padding: '10px 0' }}>✓ Early access</li>
            </ul>
            <Link href="/subscribe" style={{ display: 'inline-block', background: '#FF6B00', color: 'white', padding: '14px 40px', borderRadius: '8px', fontWeight: 700 }}>Go Premium</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#1A1A1A', padding: '80px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>2.01M</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Population</div>
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
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Temples</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '100px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', color: 'white', marginBottom: '15px' }}>Stay Connected</h2>
          <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '20px' }}>எங்களுடன் இணைந்திருங்கள்</p>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginBottom: '40px' }}>
            Subscribe to receive the latest news, events, and stories from the Indian Malaysian community.
          </p>
          <Link href="/subscribe" style={{ display: 'inline-block', background: '#D4AF37', color: '#1A1A1A', padding: '18px 50px', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '1px', borderRadius: '4px' }}>
            SUBSCRIBE NOW
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1A1A1A', padding: '80px 0 30px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '50px', marginBottom: '60px' }}>
            <div>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', fontSize: '0.9rem', marginTop: '5px' }}>மலேசிய இந்தியர்கள்</p>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '20px' }}>
                Your trusted source for news, education, and cultural preservation since 2024.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>About</h4>
              <ul>
                <li style={{ marginBottom: '12px' }}><Link href="/about" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Our Story</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/contact" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Contact</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/pricing" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>Community</h4>
              <ul>
                <li style={{ marginBottom: '12px' }}><Link href="/associations" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Associations</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/events" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Events</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/jobs" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Jobs</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/temples" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Temples</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>Education</h4>
              <ul>
                <li style={{ marginBottom: '12px' }}><Link href="/education" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Schools</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/education" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Scholarships</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>News</h4>
              <ul>
                <li style={{ marginBottom: '12px' }}><Link href="/news" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Latest</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/news" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Politics</Link></li>
                <li style={{ marginBottom: '12px' }}><Link href="/news" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>Culture</Link></li>
              </ul>
            </div>
          </div>
          <div style={{ paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <Link href="/privacy" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>Privacy</Link>
              <Link href="/terms" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
