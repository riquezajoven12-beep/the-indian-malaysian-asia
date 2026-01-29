'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Building2, 
  Image, 
  Settings,
  Users,
  BookOpen,
  Church,
  LogOut
} from 'lucide-react';

interface AdminSidebarProps {
  userRole: string;
}

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, roles: ['admin', 'editor', 'contributor'] },
  { name: 'Articles', href: '/admin/articles', icon: FileText, roles: ['admin', 'editor', 'contributor'] },
  { name: 'Events', href: '/admin/events', icon: Calendar, roles: ['admin', 'editor'] },
  { name: 'Persatuan', href: '/admin/persatuan', icon: Building2, roles: ['admin', 'editor'] },
  { name: 'Temples', href: '/admin/temples', icon: Church, roles: ['admin', 'editor'] },
  { name: 'Schools', href: '/admin/schools', icon: BookOpen, roles: ['admin', 'editor'] },
  { name: 'Media', href: '/admin/media', icon: Image, roles: ['admin', 'editor', 'contributor'] },
  { name: 'Users', href: '/admin/users', icon: Users, roles: ['admin'] },
  { name: 'Settings', href: '/admin/settings', icon: Settings, roles: ['admin'] },
];

export default function AdminSidebar({ userRole }: AdminSidebarProps) {
  const pathname = usePathname();
  const filteredNav = navItems.filter(item => item.roles.includes(userRole));

  return (
    <aside className="admin-sidebar">
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="block">
          <span className="font-display text-xl font-bold text-white">
            The Indian <span className="text-saffron">Malaysian</span>
          </span>
          <span className="text-xs text-white/50 block mt-1">Admin Panel</span>
        </Link>
      </div>

      <nav className="py-6">
        {filteredNav.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`admin-nav-item ${isActive ? 'active' : ''}`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
        <Link href="/" className="admin-nav-item text-sm">
          <LogOut className="w-4 h-4" />
          Back to Site
        </Link>
      </div>
    </aside>
  );
}
