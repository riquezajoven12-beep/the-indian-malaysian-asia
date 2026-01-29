'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Globe } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'News', href: '/news' },
  { name: 'Our Roots', href: '/roots' },
  { name: 'Education', href: '/education' },
  { name: 'Religion & Culture', href: '/religion' },
  { name: 'Persatuan', href: '/persatuan' },
  { name: 'Events', href: '/events' },
  { name: 'Community', href: '/community' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-maroon to-charcoal text-white py-2 px-5 text-sm flex justify-center items-center gap-4">
        <span>🪔 Celebrating Thaipusam 2026 — Community Events Across Malaysia</span>
        <span className="text-tamil opacity-90">தைப்பூசம் 2026 கொண்டாட்டம்</span>
      </div>

      {/* Main Navigation */}
      <header className="bg-warm-white border-b border-gold/30 sticky top-0 z-50 backdrop-blur-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Row */}
          <div className="flex justify-between items-center py-5 border-b border-gold/30">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="font-display text-2xl lg:text-3xl font-extrabold text-charcoal tracking-tight">
                The Indian <span className="text-saffron">Malaysian</span>
              </span>
              <span className="text-tamil text-sm text-maroon tracking-widest">
                மலேசிய இந்தியர்கள்
              </span>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-700 hover:text-saffron transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-saffron transition-colors hidden sm:block">
                <Globe className="w-5 h-5" />
              </button>
              <Link href="/subscribe" className="btn-primary hidden md:block text-sm">
                SUBSCRIBE
              </Link>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center gap-8 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gold/30 py-4">
            <div className="px-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-cream hover:text-saffron transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/subscribe"
                className="block py-3 px-4 bg-saffron text-white text-center mt-4"
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
