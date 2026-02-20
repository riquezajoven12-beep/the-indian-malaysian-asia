'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-maroon to-dark py-16 md:py-24 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-white text-3xl md:text-5xl font-bold leading-tight mb-4">Preserving Heritage.<br />Building Futures.</h1>
          <p className="font-tamil text-gold text-sm md:text-base mb-3">பாரம்பரியத்தைப் பாதுகாத்தல். எதிர்காலத்தை உருவாக்குதல்.</p>
          <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto mb-8">Your trusted source for news, education, and cultural preservation of the Indian Malaysian community.</p>
          <div className="flex gap-8 md:gap-12 justify-center flex-wrap">
            {[{ v: '2M+', l: 'Community' }, { v: '180+', l: 'Years' }, { v: '500+', l: 'Associations' }].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-display text-gold text-2xl md:text-4xl font-bold">{s.v}</div>
                <div className="text-white/60 text-xs md:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-5 py-8">
        <Link href="/news" className="block bg-gradient-to-br from-[#0D5C63] to-[#1B4332] rounded-2xl p-6 md:p-10 text-white hover:shadow-xl transition">
          <span className="bg-gold text-dark px-3 py-1 rounded text-xs font-bold">Featured</span>
          <h2 className="font-display text-xl md:text-3xl mt-3 mb-2">The Rise of Indian Malaysian Entrepreneurs</h2>
          <p className="text-white/75 text-sm md:text-base">How young Indian Malaysians are transforming the business landscape.</p>
          <span className="text-gold font-semibold mt-3 inline-block">Read More →</span>
        </Link>
      </section>

      {/* Latest News */}
      <section className="max-w-6xl mx-auto px-5 pb-10">
        <div className="flex justify-between items-end mb-6 flex-wrap gap-2">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-dark">Latest News</h2>
            <p className="font-tamil text-gold text-sm">சமீபத்திய செய்திகள்</p>
          </div>
          <Link href="/news" className="text-saffron font-semibold text-sm">View All →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80', cat: 'POLITICS', title: 'Cabinet Approves New Indian Blueprint' },
            { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', cat: 'EDUCATION', title: 'Tamil Schools See Record Enrollment' },
            { img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80', cat: 'CULTURE', title: 'Batu Caves Prepares for Thaipusam' },
          ].map(n => (
            <Link key={n.title} href="/news" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="h-44 bg-cover bg-center" style={{ backgroundImage: `url(${n.img})` }} />
              <div className="p-5">
                <span className="text-saffron text-xs font-bold tracking-wide">{n.cat}</span>
                <h3 className="font-display text-base mt-1 text-dark group-hover:text-saffron transition">{n.title}</h3>
                <span className="text-saffron text-sm mt-2 inline-block">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-gradient-to-r from-amber-50 to-cream border border-gold/40 rounded-xl p-4 mt-6 text-center text-sm">
          📰 You have <strong>3 free articles</strong> remaining. <Link href="/pricing" className="text-saffron font-semibold">Subscribe for unlimited →</Link>
        </div>
      </section>

      {/* Explore */}
      <section className="max-w-6xl mx-auto px-5 pb-12">
        <h2 className="font-display text-2xl md:text-3xl text-center mb-8 text-dark">Explore Our Community</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: '🏛️', title: 'Associations', sub: '500+ registered', tier: 'BASIC', href: '/associations' },
            { icon: '📅', title: 'Events', sub: 'Festivals & gatherings', tier: 'FREE', href: '/events' },
            { icon: '💼', title: 'Jobs', sub: 'Career opportunities', tier: 'BASIC', href: '/jobs' },
            { icon: '🛕', title: 'Temples', sub: '3,000+ temples', tier: 'FREE', href: '/temples' },
          ].map(c => (
            <Link key={c.title} href={c.href} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition">
              <div className="text-3xl md:text-4xl mb-2">{c.icon}</div>
              <h3 className="font-display text-sm md:text-base text-dark">{c.title}</h3>
              <p className="text-gray-400 text-xs md:text-sm mt-1 mb-2">{c.sub}</p>
              <span className={`text-[0.65rem] font-bold px-2 py-0.5 rounded ${c.tier === 'FREE' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>{c.tier}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F5F0E8] py-12 px-5">
        <h2 className="font-display text-2xl md:text-3xl text-center mb-8 text-dark">Choose Your Plan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Free', price: 'RM 0', features: ['3 articles/month', 'Events & Temples'], no: ['Associations', 'Job board'], btn: 'Current Plan', pop: false },
            { name: 'Basic', price: 'RM 9.90', features: ['Unlimited articles', 'Associations', 'Job board', 'Scholarships'], no: [], btn: 'Subscribe', pop: true },
            { name: 'Premium', price: 'RM 19.90', features: ['Everything in Basic', 'Exclusive content', 'Community forum', 'No ads'], no: [], btn: 'Go Premium', pop: false },
          ].map(p => (
            <div key={p.name} className={`bg-white rounded-2xl p-7 text-center relative ${p.pop ? 'border-2 border-saffron shadow-lg shadow-saffron/10' : 'border border-gray-200 shadow-sm'}`}>
              {p.pop && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-[0.65rem] font-bold px-4 py-1 rounded-full">POPULAR</div>}
              <h3 className="font-display text-xl mb-1">{p.name}</h3>
              <div className="text-2xl font-bold text-dark mb-5">{p.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="flex flex-col gap-2 mb-5 text-left text-sm">
                {p.features.map(f => <div key={f} className="text-gray-600">✓ {f}</div>)}
                {p.no.map(f => <div key={f} className="text-gray-300">✗ {f}</div>)}
              </div>
              <Link href="/subscribe" className={`block py-3 rounded-lg font-bold text-sm ${p.pop ? 'bg-saffron text-white hover:bg-orange-600' : 'border-2 border-gray-200 text-dark hover:border-saffron hover:text-saffron'} transition`}>{p.btn}</Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
