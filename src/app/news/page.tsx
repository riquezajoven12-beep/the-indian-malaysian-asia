'use client';
import Link from 'next/link';
import { Header, Footer } from '../page';

const articles = [
  { img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80', cat: 'POLITICS', title: 'Cabinet Approves New Indian Blueprint', excerpt: 'The Malaysian cabinet has approved a comprehensive development blueprint for the Indian community...', date: 'Feb 20, 2026' },
  { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', cat: 'EDUCATION', title: 'Tamil Schools See Record Enrollment', excerpt: 'SJK(T) schools across Malaysia report record enrollment numbers for the 2026 academic year...', date: 'Feb 19, 2026' },
  { img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80', cat: 'CULTURE', title: 'Batu Caves Prepares for Thaipusam', excerpt: 'Preparations are underway for the annual Thaipusam celebration at Batu Caves...', date: 'Feb 18, 2026' },
  { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', cat: 'BUSINESS', title: 'Young Indian Malaysian Entrepreneurs Rising', excerpt: 'A new generation of Indian Malaysian entrepreneurs is making waves in the tech sector...', date: 'Feb 17, 2026' },
  { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', cat: 'COMMUNITY', title: 'New MIC Leadership Election Results', excerpt: 'MIC elects new leadership to guide the party into the next general election...', date: 'Feb 16, 2026' },
  { img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80', cat: 'EDUCATION', title: 'Scholarship Opportunities for Indian Students', excerpt: 'Multiple scholarship programs now open for Indian Malaysian students pursuing higher education...', date: 'Feb 15, 2026' },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3">Latest News</h1>
        <p className="font-tamil text-gold text-base">சமீபத்திய செய்திகள்</p>
      </div>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(a => (
            <div key={a.title} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${a.img})` }} />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-saffron text-xs font-bold tracking-wide">{a.cat}</span>
                  <span className="text-gray-400 text-xs">{a.date}</span>
                </div>
                <h3 className="font-display text-lg text-dark group-hover:text-saffron transition mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{a.excerpt}</p>
                <span className="text-saffron text-sm font-semibold">Read More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
