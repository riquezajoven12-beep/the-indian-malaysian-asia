'use client';
import { useState } from 'react';
import { Header, Footer } from '@/components/layout';

const associations = [
  { name: 'Malaysian Indian Congress (MIC)', state: 'National', category: 'Political', members: '500,000+' },
  { name: 'Hindu Sangam Malaysia', state: 'National', category: 'Religious', members: '50,000+' },
  { name: 'Tamil Foundation Malaysia', state: 'Selangor', category: 'Cultural', members: '12,000' },
  { name: 'Malaysian Indian Business Council', state: 'KL', category: 'Business', members: '8,500' },
  { name: 'Federation of Indian NGOs (FINO)', state: 'National', category: 'NGO', members: '200+ orgs' },
];

export default function AssociationsPage() {
  const [search, setSearch] = useState('');
  const filtered = associations.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Associations</h1><p className="font-tamil text-gold text-base">சங்கங்கள்</p></div>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron mb-8" placeholder="Search associations..." value={search} onChange={e => setSearch(e.target.value)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{filtered.map(a => (
          <div key={a.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2"><h3 className="font-display text-base text-dark">🏛️ {a.name}</h3><span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">{a.category}</span></div>
            <p className="text-gray-500 text-sm">📍 {a.state} · 👥 {a.members}</p>
          </div>))}</div>
      </div>
    <Footer /></div>
  );
}
