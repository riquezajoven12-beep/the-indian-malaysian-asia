'use client';
import { Header, Footer } from '../page';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white">Terms of Service</h1>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4"><strong>Last updated:</strong> February 2026</p>
          <p className="text-gray-600 leading-relaxed mb-4">By accessing and using The Indian Malaysian website, you accept and agree to be bound by these Terms of Service.</p>
          <h3 className="font-display text-lg text-dark mt-6 mb-3">Subscription Plans</h3>
          <p className="text-gray-600 leading-relaxed mb-4">We offer Free, Basic (RM 9.90/month), and Premium (RM 19.90/month) subscription tiers. Features and access levels vary by plan.</p>
          <h3 className="font-display text-lg text-dark mt-6 mb-3">Content Usage</h3>
          <p className="text-gray-600 leading-relaxed mb-4">All content published on The Indian Malaysian is protected by copyright. You may not reproduce, distribute, or commercially exploit any content without our express written permission.</p>
          <h3 className="font-display text-lg text-dark mt-6 mb-3">User Conduct</h3>
          <p className="text-gray-600 leading-relaxed">Users agree to use the platform respectfully and not to post content that is harmful, discriminatory, or violates any applicable laws.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
