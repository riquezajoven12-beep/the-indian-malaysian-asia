'use client';
import Link from 'next/link';
import { useState } from 'react';

/* ─────────────── HEADER ─────────────── */
export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
    { href: '/events', label: 'Events' },
    { href: '/temples', label: 'Temples' },
    { href: '/education', label: 'Education' },
    { href: '/community', label: 'Community' },
    { href: '/login', label: 'Login' },
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-maroon to-gold text-white text-center text-sm py-2 px-4">🪔 Celebrating Thaipusam 2026</div>
      <header className="bg-dark sticky top-0 z-[100] px-4 py-3 md:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <Link href="/" className="font-display text-white font-extrabold text-xl md:text-2xl">The Indian <span className="text-saffron">Malaysian</span></Link>
            <div className="font-tamil text-gold text-[0.65rem]">மலேசிய இந்தியர்கள்</div>
          </div>
          <nav className="hidden lg:flex items-center gap-5 text-sm">
            {links.map(l => <Link key={l.href} href={l.href} className="text-white/80 hover:text-white transition">{l.label}</Link>)}
            <Link href="/pricing" className="bg-saffron text-white px-5 py-2.5 rounded-md font-semibold hover:bg-orange-600 transition">SUBSCRIBE</Link>
          </nav>
          <button className="lg:hidden flex flex-col gap-[5px] p-2 z-[101]" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`block w-6 h-[2px] bg-white rounded transition-transform ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-white rounded transition-transform ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
        {open && (
          <div className="fixed inset-0 bg-black/95 z-[99] flex flex-col items-center justify-center gap-5 animate-[fadeIn_0.3s_ease]">
            <button onClick={() => setOpen(false)} className="absolute top-5 right-5 text-white text-3xl">✕</button>
            <Link href="/" onClick={() => setOpen(false)} className="text-white text-xl font-medium">Home</Link>
            {links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white text-xl font-medium">{l.label}</Link>)}
            <Link href="/associations" onClick={() => setOpen(false)} className="text-white text-xl font-medium">Associations</Link>
            <Link href="/jobs" onClick={() => setOpen(false)} className="text-white text-xl font-medium">Jobs</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="bg-saffron text-white px-10 py-3.5 rounded-lg font-bold text-lg mt-3">SUBSCRIBE</Link>
          </div>
        )}
      </header>
    </>
  );
}

/* ─────────────── FOOTER ─────────────── */
export function Footer() {
  return (
    <footer className="bg-dark px-5 pt-12 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="font-display text-white font-extrabold text-lg">The Indian <span className="text-saffron">Malaysian</span></Link>
            <p className="text-white/50 mt-2 text-sm leading-relaxed">Your trusted source for news, education, and cultural preservation.</p>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-3 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="text-white/60 text-sm hover:text-white transition">About</Link>
              <Link href="/news" className="text-white/60 text-sm hover:text-white transition">News</Link>
              <Link href="/events" className="text-white/60 text-sm hover:text-white transition">Events</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-3 text-sm">Community</h4>
            <div className="flex flex-col gap-2">
              <Link href="/temples" className="text-white/60 text-sm hover:text-white transition">Temples</Link>
              <Link href="/associations" className="text-white/60 text-sm hover:text-white transition">Associations</Link>
              <Link href="/jobs" className="text-white/60 text-sm hover:text-white transition">Jobs</Link>
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold mb-3 text-sm">Legal</h4>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-white/60 text-sm hover:text-white transition">Privacy</Link>
              <Link href="/terms" className="text-white/60 text-sm hover:text-white transition">Terms</Link>
              <Link href="/contact" className="text-white/60 text-sm hover:text-white transition">Contact</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 text-center">
          <p className="text-white/40 text-sm">© 2026 The Indian Malaysian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
