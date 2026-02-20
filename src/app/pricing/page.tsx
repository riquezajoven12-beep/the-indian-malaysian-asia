'use client';
import Link from 'next/link';
import { Header, Footer } from '../page';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3">Pricing</h1>
        <p className="text-white/80">Choose the plan that works for you</p>
      </div>
      <div className="max-w-4xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: 'Free', price: 'RM 0', features: ['3 articles/month', 'Events calendar', 'Temple directory'], no: ['Associations directory', 'Job board', 'Scholarships'], btn: 'Current Plan', pop: false },
            { name: 'Basic', price: 'RM 9.90', features: ['Unlimited articles', 'Associations directory', 'Job board', 'Scholarship listings', 'Email newsletter'], no: [], btn: 'Subscribe', pop: true },
            { name: 'Premium', price: 'RM 19.90', features: ['Everything in Basic', 'Exclusive content', 'Community forum access', 'Ad-free experience', 'Priority support'], no: [], btn: 'Go Premium', pop: false },
          ].map(p => (
            <div key={p.name} className={`bg-white rounded-2xl p-7 text-center relative ${p.pop ? 'border-2 border-saffron shadow-lg shadow-saffron/10 scale-105' : 'border border-gray-200 shadow-sm'}`}>
              {p.pop && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-saffron text-white text-[0.65rem] font-bold px-4 py-1 rounded-full">POPULAR</div>}
              <h3 className="font-display text-xl mb-1">{p.name}</h3>
              <div className="text-3xl font-bold text-dark mb-5">{p.price}<span className="text-sm font-normal text-gray-400">/mo</span></div>
              <div className="flex flex-col gap-2 mb-6 text-left text-sm">
                {p.features.map(f => <div key={f} className="text-gray-600">✓ {f}</div>)}
                {p.no.map(f => <div key={f} className="text-gray-300">✗ {f}</div>)}
              </div>
              <Link href="/subscribe" className={`block py-3 rounded-lg font-bold text-sm ${p.pop ? 'bg-saffron text-white hover:bg-orange-600' : 'border-2 border-gray-200 text-dark hover:border-saffron hover:text-saffron'} transition`}>{p.btn}</Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
