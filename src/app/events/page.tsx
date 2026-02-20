'use client';
import { Header, Footer } from '@/components/layout';

const events = [
  { title: 'Thaipusam 2026', date: 'Feb 11, 2026', location: 'Batu Caves, Selangor', desc: 'Annual Hindu festival with kavadi processions.', tag: 'Festival' },
  { title: 'Tamil New Year', date: 'Apr 14, 2026', location: 'Multiple locations', desc: 'Celebrate Tamil New Year with cultural performances.', tag: 'Cultural' },
  { title: 'Indian Business Summit', date: 'Mar 15, 2026', location: 'Sunway Convention Centre', desc: 'Networking for Indian Malaysian entrepreneurs.', tag: 'Business' },
  { title: 'Deepavali Open House', date: 'Oct 20, 2026', location: 'KLCC, KL', desc: 'National Deepavali celebration.', tag: 'Festival' },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Events</h1><p className="font-tamil text-gold text-base">நிகழ்வுகள்</p></div>
      <div className="max-w-6xl mx-auto px-5 py-10"><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{events.map(e => (
        <div key={e.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-3 flex-wrap gap-2"><span className="bg-saffron/10 text-saffron text-xs font-bold px-3 py-1 rounded-full">{e.tag}</span><span className="text-gray-400 text-sm">{e.date}</span></div>
          <h3 className="font-display text-lg text-dark mb-2">{e.title}</h3><p className="text-gray-500 text-sm mb-3">{e.desc}</p><div className="text-gray-400 text-sm">📍 {e.location}</div>
        </div>))}</div></div>
    <Footer /></div>
  );
}
