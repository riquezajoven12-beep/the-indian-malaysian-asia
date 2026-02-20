'use client';
import Link from 'next/link';
import { Header, Footer } from '../page';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-maroon to-dark py-16 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3">Our Story</h1>
        <p className="font-tamil text-gold text-lg mb-3">எங்கள் கதை</p>
        <p className="text-white/85 text-base md:text-lg max-w-xl mx-auto">Preserving heritage, celebrating culture, and building futures</p>
      </div>
      <div className="max-w-4xl mx-auto px-5 py-12">
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-dark mb-6">Our Mission</h2>
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border-l-4 border-saffron">
            <p className="text-gray-600 text-base leading-relaxed mb-5"><strong className="text-dark">The Indian Malaysian</strong> is dedicated to serving as the premier digital platform for news, education, and cultural preservation of the Indian Malaysian community. We believe in the power of information to connect, educate, and empower our community of over 2 million people across Malaysia.</p>
            <p className="text-gray-600 text-base leading-relaxed">Our platform provides comprehensive coverage of community news, a directory of over 500 registered associations, information on 3,000+ Hindu temples, Tamil school resources, scholarship opportunities, job listings, and much more.</p>
          </div>
        </section>
        <section className="mb-12">
          <div className="bg-gradient-to-br from-dark to-maroon p-8 md:p-12 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[{ v: '180+', l: 'Years of History' }, { v: '2.01M', l: 'Population' }, { v: '6.6%', l: 'of Malaysia' }, { v: '13', l: 'States' }].map(s => (
                <div key={s.l} className="text-center">
                  <div className="font-display text-2xl md:text-4xl font-bold text-gold">{s.v}</div>
                  <div className="text-white/60 text-xs md:text-sm mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gradient-to-br from-[#0D5C63] to-[#1B4332] p-8 md:p-12 rounded-2xl text-center">
            <h2 className="font-display text-2xl text-white mb-3">Join Our Community</h2>
            <p className="text-white/85 mb-6">Stay connected with the latest news, events, and resources.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/subscribe" className="bg-gold text-dark px-8 py-3.5 rounded-lg font-bold hover:bg-yellow-500 transition">Subscribe Now</Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white/10 transition">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
