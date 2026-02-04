export default function HomePage() {
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
            <div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', fontWeight: 800, color: '#1A1A1A' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <br />
              <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1rem', color: '#8B1538', letterSpacing: '2px' }}>
                மலேசிய இந்தியர்கள்
              </span>
            </div>
            <button style={{ background: 'linear-gradient(135deg, #FF6B00 0%, #8B1538 100%)', color: 'white', border: 'none', padding: '12px 28px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>
              SUBSCRIBE
            </button>
          </div>
          <nav style={{ display: 'flex', justifyContent: 'center', gap: '40px', padding: '18px 0' }}>
            {['Home', 'News', 'Our Roots', 'Education', 'Religion & Culture', 'Persatuan', 'Events', 'Community'].map((item) => (
              <a key={item} href="#" style={{ color: '#2D2D2D', fontWeight: 500, fontSize: '0.95rem', textDecoration: 'none' }}>{item}</a>
            ))}
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
              {[
                { number: '2M+', label: 'Community Members' },
                { number: '180+', label: 'Years of History' },
                { number: '500+', label: 'Registered Persatuan' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', fontWeight: 700, color: '#F4D03F', lineHeight: 1 }}>{stat.number}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', padding: '40px', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-15px', left: '30px', background: '#D4AF37', color: '#1A1A1A', padding: '8px 20px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              Featured Story
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'white', marginBottom: '20px', lineHeight: 1.3 }}>
              The Rise of Indian Malaysian Entrepreneurs: A New Generation of Business Leaders
            </h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '25px', fontSize: '1rem' }}>
              How young Indian Malaysians are transforming the business landscape while staying connected to their cultural roots.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #FF6B00, #D4AF37)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600 }}>K</div>
                <span style={{ color: 'white', fontWeight: 500 }}>Kavitha Subramaniam</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>January 21, 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', paddingBottom: '20px', borderBottom: '2px solid rgba(212, 175, 55, 0.3)' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: '#1A1A1A', position: 'relative' }}>Latest News</h2>
            <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.1rem', color: '#8B1538', marginTop: '8px' }}>சமீபத்திய செய்திகள்</p>
          </div>
          <a href="#" style={{ color: '#FF6B00', fontWeight: 600, textDecoration: 'none' }}>View All News →</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {[
            { title: 'Cabinet Approves New Indian Blueprint for Economic Empowerment', category: 'Politics', color: '#8B1538', author: 'R. Anand', time: '2 hours ago' },
            { title: 'Tamil Schools See Record Enrollment as Interest in Mother Tongue Education Grows', category: 'Education', color: '#1B4332', author: 'S. Parvathi', time: '5 hours ago' },
            { title: 'Batu Caves Prepares for Largest Thaipusam Celebration in Southeast Asia', category: 'Culture', color: '#D4AF37', author: 'M. Kumar', time: 'Yesterday' },
          ].map((article, index) => (
            <div key={index} style={{ background: 'white', border: '1px solid rgba(212, 175, 55, 0.3)', overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ height: '220px', background: `linear-gradient(135deg, ${article.color}, #0D5C63)`, position: 'relative' }}>
                <span style={{ position: 'absolute', top: '15px', left: '15px', background: '#FF6B00', color: 'white', padding: '6px 15px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>{article.category}</span>
              </div>
              <div style={{ padding: '25px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px', lineHeight: 1.4 }}>{article.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#5A5A5A' }}>
                  <span>By {article.author}</span>
                  <span>{article.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Stats */}
      <section style={{ background: '#1A1A1A', padding: '60px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          {[
            { number: '2.01M', label: 'Population (2024)' },
            { number: '6.6%', label: 'of Malaysia' },
            { number: '523', label: 'Tamil Schools' },
            { number: '3,000+', label: 'Hindu Temples' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', fontWeight: 700, color: '#D4AF37', lineHeight: 1 }}>{stat.number}</div>
              <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: 'linear-gradient(135deg, #1B4332 0%, #0D5C63 100%)', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'white', marginBottom: '15px' }}>Stay Connected</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem', marginBottom: '40px' }}>
            Subscribe to receive the latest news, events, and stories from the Indian Malaysian community delivered to your inbox weekly.
          </p>
          <div style={{ display: 'flex', gap: '15px', maxWidth: '550px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{ flex: 1, padding: '18px 25px', border: '2px solid rgba(255, 255, 255, 0.3)', background: 'rgba(255, 255, 255, 0.1)', color: 'white', fontSize: '1rem' }}
            />
            <button style={{ background: '#D4AF37', color: '#1A1A1A', border: 'none', padding: '18px 40px', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', letterSpacing: '1px' }}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1A1A1A', padding: '80px 0 30px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '50px', marginBottom: '60px' }}>
            <div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
                The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
              </span>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '20px' }}>
                Your trusted source for news, education, and cultural preservation of the Indian Malaysian community since 2024.
              </p>
            </div>
            {[
              { title: 'News', links: ['Politics', 'Business', 'Education', 'Culture', 'Sports'] },
              { title: 'Community', links: ['Persatuan Directory', 'Temple Finder', 'Events Calendar', 'Job Board'] },
              { title: 'Education', links: ['Tamil Schools', 'Scholarships', 'Online Courses', 'Career Resources'] },
              { title: 'About', links: ['Our Story', 'Editorial Team', 'Advertise', 'Contact Us'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 style={{ color: 'white', fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', marginBottom: '25px', paddingBottom: '15px', borderBottom: '2px solid #D4AF37', display: 'inline-block' }}>{col.title}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link} style={{ marginBottom: '12px' }}>
                      <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem', textDecoration: 'none' }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '30px' }}>
              <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
