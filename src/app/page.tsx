'use client';
import Link from 'next/link';
import { useState } from 'react';

/* ============================================================
   SHARED HEADER — mobile‑responsive with hamburger menu
   ============================================================ */
function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
    { href: '/events', label: 'Events' },
    { href: '/temples', label: 'Temples' },
    { href: '/education', label: 'Education' },
    { href: '/community', label: 'Community' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <>
      {/* Thaipusam Banner */}
      <div style={{ background: 'linear-gradient(90deg, #8B1538, #D4AF37)', padding: '8px 20px', textAlign: 'center', fontSize: '0.9rem', color: 'white' }}>
        🪔 Celebrating Thaipusam 2026
      </div>

      <header style={{ background: '#1A1A1A', padding: '15px 20px', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', fontWeight: 800, color: 'white', whiteSpace: 'nowrap' }}>
              The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
            </Link>
            <div style={{ fontFamily: "'Noto Sans Tamil', sans-serif", color: '#D4AF37', fontSize: '0.7rem' }}>மலேசிய இந்தியர்கள்</div>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '20px', alignItems: 'center', fontSize: '0.95rem' }}>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.85)', transition: '0.2s' }}>{l.label}</Link>
            ))}
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>SUBSCRIBE</Link>
          </nav>

          {/* Hamburger */}
          <button className="hamburger-btn" onClick={() => setOpen(!open)} aria-label="Menu"
            style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer', zIndex: 1001 }}>
            <span style={{ width: 24, height: 2, background: 'white', display: 'block', borderRadius: 2, transition: '0.3s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span style={{ width: 24, height: 2, background: 'white', display: 'block', borderRadius: 2, transition: '0.3s', opacity: open ? 0 : 1 }} />
            <span style={{ width: 24, height: 2, background: 'white', display: 'block', borderRadius: 2, transition: '0.3s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile Fullscreen Overlay */}
        {open && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.97)', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '18px', animation: 'fadeIn .3s ease' }}>
            <button onClick={() => setOpen(false)} style={{ position: 'absolute', top: 20, right: 20, color: 'white', fontSize: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
            <Link href="/" onClick={() => setOpen(false)} style={{ color: 'white', fontSize: '1.3rem', fontWeight: 500 }}>Home</Link>
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: 'white', fontSize: '1.3rem', fontWeight: 500 }}>{l.label}</Link>
            ))}
            <Link href="/associations" onClick={() => setOpen(false)} style={{ color: 'white', fontSize: '1.3rem', fontWeight: 500 }}>Associations</Link>
            <Link href="/jobs" onClick={() => setOpen(false)} style={{ color: 'white', fontSize: '1.3rem', fontWeight: 500 }}>Jobs</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} style={{ background: '#FF6B00', color: 'white', padding: '14px 40px', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', marginTop: '10px' }}>SUBSCRIBE</Link>
          </div>
        )}
      </header>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

/* ============================================================
   SHARED FOOTER — responsive grid
   ============================================================ */
function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', padding: '50px 20px 30px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px', marginBottom: '30px' }}>
          <div>
            <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span></Link>
            <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '10px', fontSize: '0.9rem', lineHeight: 1.6 }}>Your trusted source for news, education, and cultural preservation.</p>
          </div>
          <div>
            <h4 style={{ color: '#D4AF37', fontWeight: 600, marginBottom: '12px', fontSize: '0.9rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>About</Link>
              <Link href="/news" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>News</Link>
              <Link href="/events" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Events</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#D4AF37', fontWeight: 600, marginBottom: '12px', fontSize: '0.9rem' }}>Community</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/temples" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Temples</Link>
              <Link href="/associations" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Associations</Link>
              <Link href="/jobs" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Jobs</Link>
            </div>
          </div>
          <div>
            <h4 style={{ color: '#D4AF37', fontWeight: 600, marginBottom: '12px', fontSize: '0.9rem' }}>Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Privacy</Link>
              <Link href="/terms" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Terms</Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Contact</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <Header />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #1A1A1A 0%, #8B1538 50%, #1A1A1A 100%)',
        padding: 'clamp(50px, 10vw, 100px) 20px',
        textAlign: 'center', position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 6vw, 3.5rem)', color: 'white', marginBottom: '15px', lineHeight: 1.2 }}>
            Preserving Heritage.<br />Building Futures.
          </h1>
          <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", color: '#D4AF37', fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)', marginBottom: '12px' }}>
            பாரம்பரியத்தைப் பாதுகாத்தல். எதிர்காலத்தை உருவாக்குதல்.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)', maxWidth: '600px', margin: '0 auto 35px' }}>
            Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.
          </p>
          <div style={{ display: 'flex', gap: 'clamp(15px, 4vw, 40px)', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[{ v: '2M+', l: 'Community' }, { v: '180+', l: 'Years' }, { v: '500+', l: 'Associations' }].map(s => (
              <div key={s.l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, color: '#D4AF37' }}>{s.v}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <Link href="/news" style={{ display: 'block', background: 'linear-gradient(135deg, #0D5C63, #1B4332)', borderRadius: '16px', padding: 'clamp(25px, 5vw, 40px)', color: 'white' }}>
          <span style={{ background: '#D4AF37', color: '#1A1A1A', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '12px' }}>Featured</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', marginBottom: '10px' }}>The Rise of Indian Malaysian Entrepreneurs</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}>How young Indian Malaysians are transforming the business landscape.</p>
          <span style={{ color: '#D4AF37', marginTop: '12px', display: 'inline-block', fontWeight: 600 }}>Read More →</span>
        </Link>
      </section>

      {/* LATEST NEWS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', color: '#1A1A1A' }}>Latest News</h2>
            <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", color: '#D4AF37', fontSize: '0.85rem' }}>சமீபத்திய செய்திகள்</p>
          </div>
          <Link href="/news" style={{ color: '#FF6B00', fontWeight: 600 }}>View All →</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '25px' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80', cat: 'POLITICS', title: 'Cabinet Approves New Indian Blueprint' },
            { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', cat: 'EDUCATION', title: 'Tamil Schools See Record Enrollment' },
            { img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80', cat: 'CULTURE', title: 'Batu Caves Prepares for Thaipusam' },
          ].map(n => (
            <Link key={n.title} href="/news" style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: '0.3s' }}>
              <div style={{ height: '180px', backgroundImage: `url(${n.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ padding: '18px' }}>
                <span style={{ color: '#FF6B00', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>{n.cat}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', marginTop: '6px', color: '#1A1A1A' }}>{n.title}</h3>
                <span style={{ color: '#FF6B00', fontSize: '0.9rem', marginTop: '10px', display: 'inline-block' }}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Article limit notice */}
        <div style={{ background: 'linear-gradient(90deg, #FFF8E1, #FFFCF7)', border: '1px solid #D4AF37', borderRadius: '10px', padding: '14px 20px', marginTop: '25px', textAlign: 'center', fontSize: '0.95rem' }}>
          📰 You have <strong>3 free articles</strong> remaining. <Link href="/pricing" style={{ color: '#FF6B00', fontWeight: 600 }}>Subscribe for unlimited →</Link>
        </div>
      </section>

      {/* EXPLORE COMMUNITY */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px 50px' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', textAlign: 'center', marginBottom: '30px', color: '#1A1A1A' }}>Explore Our Community</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '20px' }}>
          {[
            { icon: '🏛️', title: 'Associations', sub: '500+ registered', tier: 'BASIC', href: '/associations' },
            { icon: '📅', title: 'Events', sub: 'Festivals & gatherings', tier: 'FREE', href: '/events' },
            { icon: '💼', title: 'Jobs', sub: 'Career opportunities', tier: 'BASIC', href: '/jobs' },
            { icon: '🛕', title: 'Temples', sub: '3,000+ temples', tier: 'FREE', href: '/temples' },
          ].map(c => (
            <Link key={c.title} href={c.href} style={{
              background: 'white', borderRadius: '12px', padding: '25px', textAlign: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)', border: '1px solid #eee', transition: '0.3s'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{c.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', color: '#1A1A1A' }}>{c.title}</h3>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '6px 0 10px' }}>{c.sub}</p>
              <span style={{ background: c.tier === 'FREE' ? '#E8F5E9' : '#FFF3E0', color: c.tier === 'FREE' ? '#2E7D32' : '#E65100', padding: '3px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>{c.tier}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section style={{ background: '#F5F0E8', padding: '50px 20px' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', textAlign: 'center', marginBottom: '30px', color: '#1A1A1A' }}>Choose Your Plan</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '25px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { name: 'Free', price: 'RM 0', features: ['3 articles/month', 'Events & Temples'], no: ['Associations', 'Job board'], btn: 'Current', primary: false },
            { name: 'Basic', price: 'RM 9.90', features: ['Unlimited articles', 'Associations', 'Job board', 'Scholarships'], no: [], btn: 'Subscribe', primary: true, pop: true },
            { name: 'Premium', price: 'RM 19.90', features: ['Everything in Basic', 'Exclusive content', 'Community forum', 'No ads'], no: [], btn: 'Go Premium', primary: false },
          ].map(p => (
            <div key={p.name} style={{
              background: 'white', borderRadius: '16px', padding: '30px 25px', textAlign: 'center',
              border: p.pop ? '2px solid #FF6B00' : '1px solid #ddd', position: 'relative',
              boxShadow: p.pop ? '0 8px 30px rgba(255,107,0,0.15)' : '0 2px 12px rgba(0,0,0,0.06)'
            }}>
              {p.pop && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#FF6B00', color: 'white', padding: '3px 16px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700 }}>POPULAR</div>}
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginBottom: '5px' }}>{p.name}</h3>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '20px' }}>{p.price}<span style={{ fontSize: '0.9rem', fontWeight: 400, color: '#888' }}>/mo</span></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', textAlign: 'left' }}>
                {p.features.map(f => <div key={f} style={{ fontSize: '0.9rem', color: '#444' }}>✓ {f}</div>)}
                {p.no.map(f => <div key={f} style={{ fontSize: '0.9rem', color: '#ccc' }}>✗ {f}</div>)}
              </div>
              <Link href="/subscribe" style={{
                display: 'block', padding: '12px', borderRadius: '8px', fontWeight: 700,
                background: p.primary ? '#FF6B00' : 'transparent',
                color: p.primary ? 'white' : '#1A1A1A',
                border: p.primary ? 'none' : '2px solid #ddd'
              }}>{p.btn}</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
