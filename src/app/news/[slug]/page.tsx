import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getArticle(slug: string) {
  const { data } = await supabase
    .from('articles')
    .select('*, category:categories(name, slug)')
    .eq('slug', slug)
    .single();
  return data;
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Article Not Found</h1>
          <Link href="/news" style={{ color: '#FF6B00' }}>← Back to News</Link>
        </div>
      </div>
    );
  }

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

      {/* Article */}
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <Link href="/news" style={{ color: '#FF6B00', textDecoration: 'none', display: 'inline-block', marginBottom: '30px' }}>
          ← Back to News
        </Link>
        
        <span style={{ background: '#FF6B00', color: 'white', padding: '6px 15px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
          {article.category?.name || 'News'}
        </span>
        
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.8rem', color: '#1A1A1A', margin: '20px 0', lineHeight: 1.3 }}>
          {article.title}
        </h1>
        
        <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '30px' }}>
          {article.excerpt}
        </p>
        
        <div style={{ color: '#888', fontSize: '0.9rem', paddingBottom: '30px', borderBottom: '1px solid #eee', marginBottom: '30px' }}>
          Published on {new Date(article.created_at).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>

        <div 
          style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}
          dangerouslySetInnerHTML={{ __html: article.content || '' }}
        />
      </article>
    </div>
  );
}
