'use client';
import { useState } from 'react';
import { Header, Footer } from '@/components/layout';

const associations = [
  { name: 'Malaysian Indian Congress (MIC)', state: 'National', category: 'Political', members: '500,000+' },
  { name: 'Hindu Sangam Malaysia', state: 'National', category: 'Religious', members: '50,000+' },
  { name: 'Tamil Foundation Malaysia', state: 'Selangor', category: 'Cultural', members: '12,000' },
];

export default function PersatuanPage() {
  const [search, setSearch] = useState('');
  const filtered = associations.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Persatuan</h1><p className="font-tamil text-gold text-base">சங்கங்கள்</p></div>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron mb-8" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{filtered.map(a => (
          <div key={a.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-display text-base text-dark mb-1">🏛️ {a.name}</h3>
            <p className="text-gray-500 text-sm">📍 {a.state} · 👥 {a.members}</p>
          </div>))}</div>
      </div>
    <Footer /></div>
  );
}
