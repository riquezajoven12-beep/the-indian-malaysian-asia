'use client';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function LoginPage() {
  const i = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron transition";
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="flex items-center justify-center py-16 px-5"><div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 w-full max-w-md">
        <div className="text-center mb-8"><h1 className="font-display text-2xl text-dark mb-2">Welcome Back</h1><p className="text-gray-500 text-sm">Sign in to The Indian Malaysian</p></div>
        <div className="flex flex-col gap-5">
          <div><label className="block text-sm font-semibold text-gray-500 mb-1">Email</label><input type="email" className={i} placeholder="your@email.com" /></div>
          <div><label className="block text-sm font-semibold text-gray-500 mb-1">Password</label><input type="password" className={i} placeholder="••••••••" /></div>
          <button className="bg-saffron text-white py-3.5 rounded-xl font-bold hover:bg-orange-600 transition">Sign In</button>
          <div className="text-center text-sm text-gray-500">No account? <Link href="/subscribe" className="text-saffron font-semibold">Subscribe</Link></div>
        </div>
      </div></div>
    <Footer /></div>
  );
}
