'use client';
import Link from 'next/link';

export default function NewPersatuan() {
  const c = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-saffron transition";
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Link href="/admin/persatuan" className="text-gray-400 text-sm">← Persatuan</Link>
        <h1 className="font-display text-xl md:text-2xl text-dark">New Persatuan</h1>
      </div>
      <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm border border-gray-100 max-w-3xl">
        <div className="flex flex-col gap-5">
          <div><label className="block text-xs font-semibold text-gray-500 mb-1">Association Name</label><input className={c} placeholder="Name..." /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div><label className="block text-xs font-semibold text-gray-500 mb-1">State</label><select className={c}>{['National', 'Selangor', 'KL', 'Penang', 'Johor', 'Perak'].map(s => <option key={s}>{s}</option>)}</select></div>
            <div><label className="block text-xs font-semibold text-gray-500 mb-1">ROS Number</label><input className={c} placeholder="Registration #" /></div>
          </div>
          <div><label className="block text-xs font-semibold text-gray-500 mb-1">Contact Email</label><input type="email" className={c} placeholder="contact@example.com" /></div>
          <div><label className="block text-xs font-semibold text-gray-500 mb-1">Description</label><textarea className={`${c} min-h-[150px] resize-y`} placeholder="About..." /></div>
          <button className="bg-saffron text-white px-6 py-3 rounded-xl font-bold text-sm self-start">Save Persatuan</button>
        </div>
      </div>
    </div>
  );
}
