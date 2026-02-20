'use client';
import Link from 'next/link';

const data = [
  { title: 'Thaipusam 2026', date: '2026-02-11', loc: 'Batu Caves', status: 'Upcoming' },
  { title: 'Deepavali', date: '2026-10-20', loc: 'KLCC', status: 'Upcoming' },
  { title: 'Tamil New Year', date: '2026-04-14', loc: 'Penang', status: 'Upcoming' },
];

export default function AdminEvents() {
  return (<div>
    <div className="flex justify-between items-center mb-6 flex-wrap gap-3"><h1 className="font-display text-xl md:text-2xl text-dark">📅 Events</h1><Link href="/admin/events/new" className="bg-saffron text-white px-5 py-2.5 rounded-lg font-semibold text-sm">+ New Event</Link></div>
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full min-w-[500px]"><thead><tr className="bg-gray-50"><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Event</th><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Date</th><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Location</th><th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Status</th></tr></thead>
    <tbody>{data.map((e, i) => (<tr key={i} className="border-b border-gray-50"><td className="px-5 py-3.5 text-sm text-dark font-medium">{e.title}</td><td className="px-5 py-3.5 text-xs text-gray-400">{e.date}</td><td className="px-5 py-3.5 text-xs text-gray-400">{e.loc}</td><td className="px-5 py-3.5"><span className="bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-md">{e.status}</span></td></tr>))}</tbody></table></div></div>
  </div>);
}
