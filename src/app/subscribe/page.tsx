'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function SubscribePage() {
  const i = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron transition";
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Subscribe</h1><p className="text-white/80">Unlock full access</p></div>
      <div className="max-w-lg mx-auto px-5 py-10"><div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100"><div className="flex flex-col gap-5">
        <div><label className="block text-sm font-semibold text-gray-500 mb-1">Full Name</label><input className={i} placeholder="Your full name" /></div>
        <div><label className="block text-sm font-semibold text-gray-500 mb-1">Email</label><input type="email" className={i} placeholder="your@email.com" /></div>
        <div><label className="block text-sm font-semibold text-gray-500 mb-1">Plan</label><select className={i}><option>Basic — RM 9.90/mo</option><option>Premium — RM 19.90/mo</option></select></div>
        <button className="bg-saffron text-white py-3.5 rounded-xl font-bold hover:bg-orange-600 transition">Subscribe Now</button>
        <p className="text-gray-400 text-xs text-center">By subscribing you agree to our <Link href="/terms" className="text-saffron">Terms</Link> and <Link href="/privacy" className="text-saffron">Privacy Policy</Link>.</p>
      </div></div></div>
    <Footer /></div>
  );
}
