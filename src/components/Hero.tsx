import Link from 'next/link';
import { format } from 'date-fns';
import type { ArticleWithRelations } from '@/types/database';

interface HeroProps {
  featuredArticle?: ArticleWithRelations | null;
}

export default function Hero({ featuredArticle }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-charcoal via-maroon to-saffron min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 15L45 15L37 23L40 33L30 27L20 33L23 23L15 15L25 15Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
            Preserving Heritage.
            <br />
            <span className="text-gold-light">Building Futures.</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-lg">
            Your trusted source for news, education, and cultural preservation of the Indian Malaysian community. Connecting 2 million voices across the nation.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold-light">2M+</div>
              <div className="text-sm text-white/80 uppercase tracking-widest mt-1">Community Members</div>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold-light">180+</div>
              <div className="text-sm text-white/80 uppercase tracking-widest mt-1">Years of History</div>
            </div>
            <div>
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold-light">500+</div>
              <div className="text-sm text-white/80 uppercase tracking-widest mt-1">Registered Persatuan</div>
            </div>
          </div>
        </div>

        {/* Featured Article Card */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-10 relative">
            <span className="absolute -top-4 left-8 bg-gold text-charcoal px-5 py-2 text-xs font-bold tracking-widest uppercase">
              Featured Story
            </span>

            {featuredArticle ? (
              <>
                <h2 className="font-display text-2xl lg:text-3xl text-white mb-5 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-white/80 mb-6">
                  {featuredArticle.excerpt || 'Read the latest featured story from The Indian Malaysian.'}
                </p>
                <div className="flex justify-between items-center pt-5 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-white font-semibold">
                      {featuredArticle.author?.full_name?.[0] || 'A'}
                    </div>
                    <span className="text-white font-medium">
                      {featuredArticle.author?.full_name || 'Anonymous'}
                    </span>
                  </div>
                  <span className="text-white/60 text-sm">
                    {featuredArticle.published_at 
                      ? format(new Date(featuredArticle.published_at), 'MMMM d, yyyy')
                      : 'Recent'}
                  </span>
                </div>
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="mt-6 inline-block text-gold hover:text-gold-light transition-colors font-semibold"
                >
                  Read More →
                </Link>
              </>
            ) : (
              <>
                <h2 className="font-display text-2xl lg:text-3xl text-white mb-5 leading-tight">
                  The Rise of Indian Malaysian Entrepreneurs: A New Generation of Business Leaders
                </h2>
                <p className="text-white/80 mb-6">
                  How young Indian Malaysians are transforming the business landscape while staying connected to their cultural roots.
                </p>
                <div className="flex justify-between items-center pt-5 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-white font-semibold">
                      K
                    </div>
                    <span className="text-white font-medium">Kavitha Subramaniam</span>
                  </div>
                  <span className="text-white/60 text-sm">January 21, 2026</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
