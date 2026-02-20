'use client';
import { useState } from 'react';
import { Header, Footer } from '../page';

const temples = [
  { name: 'Sri Mahamariamman Temple', location: 'Kuala Lumpur', state: 'KL', type: 'Hindu', est: '1873' },
  { name: 'Batu Caves Temple', location: 'Gombak, Selangor', state: 'Selangor', type: 'Hindu', est: '1891' },
  { name: 'Arulmigu Balathandayuthapani Temple', location: 'George Town, Penang', state: 'Penang', type: 'Hindu', est: '1850' },
  { name: 'Sri Kandaswamy Temple', location: 'Brickfields, KL', state: 'KL', type: 'Hindu', est: '1902' },
  { name: 'Gurdwara Sahib Petaling Jaya', location: 'PJ, Selangor', state: 'Selangor', type: 'Sikh', est: '1962' },
  { name: 'Sri Subramaniar Temple', location: 'Batu Caves', state: 'Selangor', type: 'Hindu', est: '1891' },
  { name: 'Nagara Thendayuthapani Temple', location: 'Johor Bahru', state: 'Johor', type: 'Hindu', est: '1922' },
  { name: 'Sri Maha Kaliamman Temple', location: 'Ipoh', state: 'Perak', type: 'Hindu', est: '1895' },
];

export default function TemplesPage() {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('All');
  const states = ['All', ...new Set(temples.map(t => t.state))];
  const filtered = temples.filter(t =>
    (stateFilter === 'All' || t.state === stateFilter) &&
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3">Temple Finder</h1>
        <p className="font-tamil text-gold text-base">கோயில்கள்</p>
        <p className="text-white/80 text-sm mt-2">Discover 3,000+ temples across Malaysia</p>
      </div>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron transition" placeholder="Search temples..." value={search} onChange={e => setSearch(e.target.value)} />
          <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron transition" value={stateFilter} onChange={e => setStateFilter(e.target.value)}>
            {states.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(t => (
            <div key={t.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="font-display text-base text-dark">🛕 {t.name}</h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700">{t.type}</span>
              </div>
              <p className="text-gray-500 text-sm">📍 {t.location}</p>
              <p className="text-gray-400 text-xs mt-1">Est. {t.est}</p>
            </div>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-gray-400 py-10">No temples found matching your criteria.</p>}
      </div>
      <Footer />
    </div>
  );
}
