'use client';
import { Header, Footer } from '@/components/layout';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white">Privacy Policy</h1></div>
      <div className="max-w-3xl mx-auto px-5 py-10"><div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
        <p className="text-gray-600 leading-relaxed mb-4"><strong>Last updated:</strong> February 2026</p>
        <p className="text-gray-600 leading-relaxed mb-4">The Indian Malaysian is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.</p>
        <h3 className="font-display text-lg text-dark mt-6 mb-3">Information We Collect</h3>
        <p className="text-gray-600 leading-relaxed mb-4">We may collect personal information such as your name, email address, and subscription preferences.</p>
        <h3 className="font-display text-lg text-dark mt-6 mb-3">Contact Us</h3>
        <p className="text-gray-600 leading-relaxed">Questions? Contact us at privacy@theindianmalaysian.asia.</p>
      </div></div>
    <Footer /></div>
  );
}
