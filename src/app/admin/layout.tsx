'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/admin', label: '📊 Dashboard', exact: true },
  { href: '/admin/articles', label: '📰 Articles' },
  { href: '/admin/events', label: '📅 Events' },
  { href: '/admin/temples', label: '🛕 Temples' },
  { href: '/admin/persatuan', label: '🏛️ Persatuan' },
  { href: '/admin/jobs', label: '💼 Jobs' },
  { href: '/admin/featured', label: '⭐ Featured' },
  { href: '/admin/subscribers', label: '👥 Subscribers' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sideOpen, setSideOpen] = useState(false);
  const active = (n: typeof nav[0]) => n.exact ? pathname === n.href : pathname.startsWith(n.href);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-dark sticky top-0 z-[100] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-white text-xl" onClick={() => setSideOpen(!sideOpen)}>{sideOpen ? '✕' : '☰'}</button>
          <Link href="/admin" className="font-display text-white font-extrabold text-base md:text-lg">The Indian <span className="text-saffron">Malaysian</span></Link>
          <span className="bg-saffron text-white text-[0.6rem] font-bold px-2 py-0.5 rounded">ADMIN</span>
        </div>
        <Link href="/" className="text-white/60 text-sm hover:text-white transition">← Back to Site</Link>
      </div>
      <div className="flex">
        {sideOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setSideOpen(false)} />}
        <aside className={`fixed md:static top-[52px] left-0 h-[calc(100vh-52px)] w-60 bg-white border-r border-gray-200 z-50 transition-transform duration-300 ${sideOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 overflow-y-auto flex-shrink-0`}>
          <div className="px-4 py-4 border-b border-gray-200"><p className="text-[0.65rem] text-gray-400 font-semibold uppercase tracking-wider">Management</p></div>
          <nav className="flex flex-col gap-0.5 p-2">{nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setSideOpen(false)} className={`px-4 py-2.5 rounded-lg text-sm transition ${active(n) ? 'bg-orange-50 text-saffron font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-dark'}`}>{n.label}</Link>
          ))}</nav>
        </aside>
        <main className="flex-1 p-4 md:p-8 min-w-0 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
