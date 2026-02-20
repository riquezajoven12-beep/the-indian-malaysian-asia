'use client';
import Link from 'next/link';

const stats = [
  { label: 'Total Articles', value: '156', icon: '📰' },
  { label: 'Active Events', value: '12', icon: '📅' },
  { label: 'Temples Listed', value: '3,247', icon: '🛕' },
  { label: 'Subscribers', value: '1,892', icon: '👥' },
  { label: 'Persatuan', value: '523', icon: '🏛️' },
  { label: 'Job Listings', value: '45', icon: '💼' },
];

const recent = [
  { title: 'Cabinet Approves New Indian Blueprint', type: 'Article', date: '2 hours ago', status: 'Published' },
  { title: 'Tamil Schools See Record Enrollment', type: 'Article', date: '5 hours ago', status: 'Published' },
  { title: 'Thaipusam 2026 — Batu Caves', type: 'Event', date: '1 day ago', status: 'Upcoming' },
  { title: 'Software Developer — TCS Malaysia', type: 'Job', date: '1 day ago', status: 'Active' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8"><h1 className="font-display text-2xl md:text-3xl text-dark mb-1">Dashboard</h1><p className="text-gray-400 text-sm">Welcome back! Here&apos;s what&apos;s happening.</p></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">{stats.map(s => (
        <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"><div className="text-2xl mb-2">{s.icon}</div><div className="text-xl font-bold text-dark">{s.value}</div><div className="text-gray-400 text-xs">{s.label}</div></div>
      ))}</div>
      <div className="mb-8"><h2 className="text-sm font-semibold text-dark mb-4">Quick Actions</h2><div className="grid grid-cols-3 md:grid-cols-6 gap-3">{[
        { label: 'New Article', href: '/admin/articles/new', icon: '✏️' },
        { label: 'New Event', href: '/admin/events/new', icon: '📅' },
        { label: 'New Temple', href: '/admin/temples/new', icon: '🛕' },
        { label: 'New Persatuan', href: '/admin/persatuan/new', icon: '🏛️' },
        { label: 'New Job', href: '/admin/jobs/new', icon: '💼' },
        { label: 'Featured', href: '/admin/featured', icon: '⭐' },
      ].map(a => (<Link key={a.label} href={a.href} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition"><div className="text-2xl mb-1">{a.icon}</div><div className="text-xs text-gray-500 font-medium">{a.label}</div></Link>))}</div></div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"><div className="px-5 py-4 border-b border-gray-100"><h2 className="text-sm font-semibold text-dark">Recent Activity</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[500px]"><thead><tr className="bg-gray-50"><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Title</th><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Type</th><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Date</th><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Status</th></tr></thead>
      <tbody>{recent.map((r, i) => (<tr key={i} className="border-b border-gray-50"><td className="px-5 py-3.5 text-sm text-dark font-medium">{r.title}</td><td className="px-5 py-3.5"><span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-md">{r.type}</span></td><td className="px-5 py-3.5 text-xs text-gray-400">{r.date}</td><td className="px-5 py-3.5"><span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${r.status==='Published'?'bg-green-50 text-green-700':r.status==='Active'?'bg-blue-50 text-blue-700':'bg-amber-50 text-amber-700'}`}>{r.status}</span></td></tr>))}</tbody></table></div></div>
    </div>
  );
}
