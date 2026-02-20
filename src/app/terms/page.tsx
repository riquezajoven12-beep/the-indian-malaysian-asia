'use client';
import { Header, Footer } from '@/components/layout';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white">Terms of Service</h1></div>
      <div className="max-w-3xl mx-auto px-5 py-10"><div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
        <p className="text-gray-600 leading-relaxed mb-4"><strong>Last updated:</strong> February 2026</p>
        <p className="text-gray-600 leading-relaxed mb-4">By accessing The Indian Malaysian website, you agree to these Terms of Service.</p>
        <h3 className="font-display text-lg text-dark mt-6 mb-3">Subscription Plans</h3>
        <p className="text-gray-600 leading-relaxed mb-4">We offer Free, Basic (RM 9.90/month), and Premium (RM 19.90/month) tiers.</p>
        <h3 className="font-display text-lg text-dark mt-6 mb-3">Content Usage</h3>
        <p className="text-gray-600 leading-relaxed">All content is protected by copyright. Do not reproduce without permission.</p>
      </div></div>
    <Footer /></div>
  );
}
