import Link from 'next/link';

export default function NewsPage() {
  const articles = [
    { id: '1', slug: 'cabinet-blueprint', title: 'Cabinet Approves New Indian Blueprint for Economic Empowerment', excerpt: 'The government unveils comprehensive plan.', category: 'Politics', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80', date: 'January 20, 2026', color: '#FF6B00' },
    { id: '2', slug: 'tamil-schools', title: 'Tamil Schools See Record Enrollment in Mother Tongue Education', excerpt: 'Parents increasingly value Tamil language education.', category: 'Education', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', date: 'January 18, 2026', color: '#1B4332' },
    { id: '3', slug: 'thaipusam-2026', title: 'Batu Caves Prepares for Largest Thaipusam Celebration', excerpt: 'Over 1.5 million devotees expected.', category: 'Culture', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80', date: 'January 15, 2026', color: '#8B1538' },
    { id: '4', slug: 'business-leaders', title: 'Indian Malaysian Business Leaders Summit 2026', excerpt: 'Top entrepreneurs gather to discuss strategies.', category: 'Business', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', date: 'January 12, 2026', color: '#0D5C63' },
    { id: '5', slug: 'sports-achievement', title: 'Indian Malaysian Athletes Excel at Regional Games', excerpt: 'Community celebrates sporting achievements.', category: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', date: 'January 10, 2026', color: '#D4AF37' },
    { id: '6', slug: 'community-initiative', title: 'New Community Initiative Launches in Klang Valley', excerpt: 'Program aims to support families.', category: 'Community', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', date: 'January 8, 2026', color: '#FF6B00' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#FFFCF7' }}>
      <header style={{ background: '#1A1A1A', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Link href="/about" style={{ color: 'white' }}>About</Link>
            <Link href="/associations" style={{ color: 'white' }}>Associations</Link>
            <Link href="/community" style={{ color: 'white' }}>Community</Link>
            <Link href="/education" style={{ color: 'white' }}>Education</Link>
            <Link href="/events" style={{ color: 'white' }}>Events</Link>
            <Link href="/" style={{ color: 'white' }}>Home</Link>
            <Link href="/jobs" style={{ color: 'white' }}>Jobs</Link>
            <Link href="/news" style={{ color: '#FF6B00' }}>News</Link>
            <Link href="/temples" style={{ color: 'white' }}>Temples</Link>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', overflow: 'hidden', marginLeft: '10px' }}>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'white', color: '#1A1A1A', border: 'none', cursor: 'pointer' }}>EN</button>
              <button style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'transparent', color: 'white', border: 'none', cursor: 'pointer' }}>தமிழ்</button>
            </div>
            <Link href="/pricing" style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '6px', fontWeight: 600 }}>Subscribe</Link>
          </nav>
        </div>
      </header>

      <div style={{ background: 'linear-gradient(135deg, #8B1538 0%, #1A1A1A 100%)', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', color: 'white', marginBottom: '10px' }}>📰 News</h1>
        <p style={{ fontFamily: 'Noto Sans Tamil, sans-serif', color: '#D4AF37', marginBottom: '10px' }}>செய்திகள்</p>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>Latest updates from the Indian Malaysian community</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ background: '#FFF5F0', padding: '15px 25px', borderRadius: '12px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <p style={{ color: '#666', margin: 0 }}>📰 You have <strong style={{ color: '#FF6B00' }}>3 free articles</strong> remaining this month</p>
          <Link href="/pricing" style={{ color: '#FF6B00', fontWeight: 600 }}>Subscribe for unlimited access →</Link>
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <button style={{ background: '#FF6B00', color: 'white', padding: '10px 20px', borderRadius: '25px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>All</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Business</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Community</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Culture</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Education</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Politics</button>
          <button style={{ background: 'white', color: '#333', padding: '10px 20px', borderRadius: '25px', border: '1px solid #ddd', cursor: 'pointer' }}>Sports</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {articles.map(function(article) {
            return (
              <Link href={'/news/' + article.slug} key={article.id}>
                <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                  <div style={{ height: '200px', position: 'relative' }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '15px', left: '15px', background: article.color, color: 'white', padding: '5px 12px', fontSize: '0.75rem', fontWeight: 600, borderRadius: '4px' }}>{article.category.toUpperCase()}</span>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '8px' }}>{article.date}</p>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#1A1A1A', marginBottom: '10px', lineHeight: 1.4 }}>{article.title}</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '15px' }}>{article.excerpt}</p>
                    <span style={{ color: '#FF6B00', fontWeight: 600, fontSize: '0.9rem' }}>Read More →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button style={{ background: 'white', color: '#FF6B00', border: '2px solid #FF6B00', padding: '15px 40px', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer' }}>Load More Articles</button>
        </div>
      </div>

      <footer style={{ background: '#1A1A1A', padding: '40px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '15px', fontSize: '0.9rem' }}>© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
