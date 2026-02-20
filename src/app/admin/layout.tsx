'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const navItems = [
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (item: typeof navItems[0]) => {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#F1F5F9' }}>
      {/* Top Bar */}
      <div style={{
        background: '#1A1A1A', padding: '12px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        position: 'sticky', top: 0, zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Mobile sidebar toggle */}
          <button className="admin-sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ display: 'none', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer', padding: '4px' }}>
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <Link href="/admin" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1rem, 3vw, 1.4rem)', fontWeight: 800, color: 'white' }}>
            The Indian <span style={{ color: '#FF6B00' }}>Malaysian</span>
          </Link>
          <span style={{ background: '#FF6B00', color: 'white', padding: '2px 10px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>ADMIN</span>
        </div>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>← Back to Site</Link>
      </div>

      <div className="admin-body" style={{ display: 'flex', minHeight: 'calc(100vh - 50px)' }}>
        {/* Sidebar — Desktop always visible, Mobile overlay */}
        <>
          {/* Mobile overlay backdrop */}
          {sidebarOpen && (
            <div onClick={() => setSidebarOpen(false)} className="admin-backdrop"
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 49, display: 'none' }} />
          )}
          <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`} style={{
            width: '240px', background: 'white', borderRight: '1px solid #E2E8F0',
            padding: '20px 0', flexShrink: 0, zIndex: 50
          }}>
            <div style={{ padding: '0 15px 15px', borderBottom: '1px solid #E2E8F0', marginBottom: '10px' }}>
              <p style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Management</p>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 10px' }}>
              {navItems.map(item => (
                <Link key={item.href} href={item.href} onClick={() => setSidebarOpen(false)} style={{
                  padding: '10px 15px', borderRadius: '8px', fontSize: '0.9rem',
                  color: isActive(item) ? '#FF6B00' : '#475569',
                  background: isActive(item) ? '#FFF3E0' : 'transparent',
                  fontWeight: isActive(item) ? 600 : 400,
                  transition: '0.2s', display: 'block'
                }}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </>

        {/* Main Content */}
        <main style={{ flex: 1, padding: 'clamp(15px, 3vw, 30px)', overflowX: 'hidden' }}>
          {children}
        </main>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .admin-sidebar-toggle { display: block !important; }
          .admin-sidebar {
            position: fixed !important;
            top: 50px; left: -260px;
            height: calc(100vh - 50px);
            transition: left 0.3s ease;
            box-shadow: 2px 0 20px rgba(0,0,0,0.1);
          }
          .admin-sidebar.open { left: 0 !important; }
          .admin-backdrop { display: block !important; }
        }
        @media (min-width: 769px) {
          .admin-sidebar-toggle { display: none !important; }
          .admin-backdrop { display: none !important; }
        }
      `}</style>
    </div>
  );
}
