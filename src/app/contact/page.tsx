'use client';
import { Header, Footer } from '@/components/layout';

export default function ContactPage() {
  const i = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-saffron transition";
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Contact Us</h1><p className="font-tamil text-gold text-base">தொடர்பு கொள்ளுங்கள்</p></div>
      <div className="max-w-2xl mx-auto px-5 py-10"><div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100"><div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><label className="block text-sm font-semibold text-gray-500 mb-1">Name</label><input className={i} placeholder="Your name" /></div><div><label className="block text-sm font-semibold text-gray-500 mb-1">Email</label><input type="email" className={i} placeholder="your@email.com" /></div></div>
        <div><label className="block text-sm font-semibold text-gray-500 mb-1">Subject</label><input className={i} placeholder="How can we help?" /></div>
        <div><label className="block text-sm font-semibold text-gray-500 mb-1">Message</label><textarea className={`${i} min-h-[150px] resize-y`} placeholder="Your message..." /></div>
        <button className="bg-saffron text-white py-3.5 rounded-xl font-bold hover:bg-orange-600 transition">Send Message</button>
      </div></div></div>
    <Footer /></div>
  );
}
