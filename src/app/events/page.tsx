'use client';
import { Header, Footer } from '../page';

const events = [
  { title: 'Thaipusam 2026', date: 'Feb 11, 2026', location: 'Batu Caves, Selangor', desc: 'Annual Hindu festival celebrated with kavadi processions.', tag: 'Festival' },
  { title: 'Tamil New Year Celebration', date: 'Apr 14, 2026', location: 'Multiple locations', desc: 'Celebrate the Tamil New Year with cultural performances.', tag: 'Cultural' },
  { title: 'Indian Business Summit 2026', date: 'Mar 15, 2026', location: 'Sunway Convention Centre', desc: 'Networking and business opportunities for Indian Malaysian entrepreneurs.', tag: 'Business' },
  { title: 'Deepavali Open House', date: 'Oct 20, 2026', location: 'KLCC, Kuala Lumpur', desc: 'National Deepavali celebration with open house.', tag: 'Festival' },
  { title: 'Tamil Literary Conference', date: 'May 8, 2026', location: 'University of Malaya', desc: 'Academic conference on Tamil literature and language preservation.', tag: 'Education' },
  { title: 'Community Health Camp', date: 'Mar 22, 2026', location: 'Brickfields, KL', desc: 'Free health screening and wellness talks for the community.', tag: 'Health' },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3">Events</h1>
        <p className="font-tamil text-gold text-base">நிகழ்வுகள்</p>
      </div>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(e => (
            <div key={e.title} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition border border-gray-100">
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <span className="bg-saffron/10 text-saffron text-xs font-bold px-3 py-1 rounded-full">{e.tag}</span>
                <span className="text-gray-400 text-sm">{e.date}</span>
              </div>
              <h3 className="font-display text-lg text-dark mb-2">{e.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{e.desc}</p>
              <div className="text-gray-400 text-sm">📍 {e.location}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
