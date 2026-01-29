import Link from 'next/link';
import { format } from 'date-fns';
import type { ArticleWithRelations } from '@/types/database';

interface NewsSectionProps {
  articles: ArticleWithRelations[];
}

export default function NewsSection({ articles }: NewsSectionProps) {
  // Sample articles if none from database
  const displayArticles = articles.length > 0 ? articles : [
    {
      id: '1',
      title: 'Cabinet Approves New Indian Blueprint for Economic Empowerment',
      slug: 'cabinet-approves-indian-blueprint',
      excerpt: 'The government has unveiled a comprehensive 10-year plan aimed at addressing socioeconomic challenges faced by the Indian community.',
      category: { name: 'Politics', color: '#8B1538' },
      author: { full_name: 'R. Anand' },
      published_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Tamil Schools See Record Enrollment as Interest in Mother Tongue Education Grows',
      slug: 'tamil-schools-record-enrollment',
      excerpt: 'National Tamil school enrollment has increased by 15% this year, reflecting renewed interest in cultural education.',
      category: { name: 'Education', color: '#1B4332' },
      author: { full_name: 'S. Parvathi' },
      published_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Batu Caves Prepares for Largest Thaipusam Celebration in Southeast Asia',
      slug: 'batu-caves-thaipusam-preparation',
      excerpt: 'Authorities expect over 1.5 million devotees as preparations intensify for the annual pilgrimage.',
      category: { name: 'Culture', color: '#D4AF37' },
      author: { full_name: 'M. Kumar' },
      published_at: new Date().toISOString(),
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12 pb-5 border-b-2 border-gold/30">
        <div>
          <h2 className="section-title">Latest News</h2>
          <p className="text-tamil text-lg text-maroon mt-2">சமீபத்திய செய்திகள்</p>
        </div>
        <Link href="/news" className="text-saffron font-semibold hover:gap-4 flex items-center gap-2 transition-all">
          View All News →
        </Link>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayArticles.map((article, index) => (
          <article 
            key={article.id} 
            className="card overflow-hidden cursor-pointer group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image Placeholder */}
            <div 
              className="h-56 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${article.category?.color || '#0D5C63'}, ${index % 2 === 0 ? '#1B4332' : '#8B1538'})`,
              }}
            >
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='3' fill='%23D4AF37'/%3E%3C/svg%3E")`,
                  backgroundSize: '40px 40px',
                }}
              />
              <span 
                className="absolute top-4 left-4 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white"
                style={{ backgroundColor: article.category?.color || '#FF6B00' }}
              >
                {article.category?.name || 'News'}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-charcoal mb-3 leading-tight group-hover:text-maroon transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>By {article.author?.full_name || 'Staff'}</span>
                <span>
                  {article.published_at 
                    ? format(new Date(article.published_at), 'MMM d, yyyy')
                    : 'Today'}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
