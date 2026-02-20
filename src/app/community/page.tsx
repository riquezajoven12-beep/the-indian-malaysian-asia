'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Community Hub</h1><p className="font-tamil text-gold text-base">சமூகம்</p></div>
      <div className="max-w-6xl mx-auto px-5 py-10"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { icon: '🏛️', title: 'Associations', desc: '500+ registered associations.', href: '/associations' },
        { icon: '🛕', title: 'Temples', desc: 'Find temples from our 3,000+ directory.', href: '/temples' },
        { icon: '💼', title: 'Job Board', desc: 'Career opportunities.', href: '/jobs' },
        { icon: '🎓', title: 'Education', desc: 'Schools, scholarships, resources.', href: '/education' },
        { icon: '📅', title: 'Events', desc: 'Festivals, gatherings, conferences.', href: '/events' },
        { icon: '📰', title: 'News', desc: 'Latest community news.', href: '/news' },
      ].map(c => (
        <Link key={c.title} href={c.href} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition block">
          <div className="text-3xl mb-3">{c.icon}</div><h3 className="font-display text-lg text-dark mb-2">{c.title}</h3><p className="text-gray-500 text-sm">{c.desc}</p>
        </Link>))}</div></div>
    <Footer /></div>
  );
}
