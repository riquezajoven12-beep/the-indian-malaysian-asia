'use client';
import { Header, Footer } from '../page';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white">Privacy Policy</h1>
      </div>
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4"><strong>Last updated:</strong> February 2026</p>
          <p className="text-gray-600 leading-relaxed mb-4">The Indian Malaysian (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website theindianmalaysian.asia.</p>
          <h3 className="font-display text-lg text-dark mt-6 mb-3">Information We Collect</h3>
          <p className="text-gray-600 leading-relaxed mb-4">We may collect personal information such as your name, email address, and subscription preferences when you register for an account or subscribe to our services.</p>
          <h3 className="font-display text-lg text-dark mt-6 mb-3">How We Use Your Information</h3>
          <p className="text-gray-600 leading-relaxed mb-4">We use the information we collect to provide and improve our services, send newsletters and updates, and communicate with you about your account.</p>
          <h3 className="font-display text-lg text-dark mt-6 mb-3">Contact Us</h3>
          <p className="text-gray-600 leading-relaxed">If you have questions about this Privacy Policy, please contact us at privacy@theindianmalaysian.asia.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
