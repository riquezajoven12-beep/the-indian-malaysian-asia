'use client';
import Link from 'next/link';

export default function NewEvent() {
  const c = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-saffron transition";
  return (<div>
    <div className="flex items-center gap-3 mb-6"><Link href="/admin/events" className="text-gray-400 text-sm">← Events</Link><h1 className="font-display text-xl md:text-2xl text-dark">New Event</h1></div>
    <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm border border-gray-100 max-w-3xl"><div className="flex flex-col gap-5">
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Title</label><input className={c} placeholder="Event title..." /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><label className="block text-xs font-semibold text-gray-500 mb-1">Date</label><input type="date" className={c} /></div><div><label className="block text-xs font-semibold text-gray-500 mb-1">Location</label><input className={c} placeholder="Location..." /></div></div>
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Description</label><textarea className={`${c} min-h-[150px] resize-y`} placeholder="Details..." /></div>
      <button className="bg-saffron text-white px-6 py-3 rounded-xl font-bold text-sm self-start">Create Event</button>
    </div></div>
  </div>);
}
