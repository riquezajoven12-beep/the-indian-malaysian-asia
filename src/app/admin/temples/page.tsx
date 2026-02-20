'use client';
import Link from 'next/link';

export default function AdminTemples() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="font-display text-xl md:text-2xl text-dark">🛕 Temples</h1>
        <Link href="/admin/temples/new" className="bg-saffron text-white px-5 py-2.5 rounded-lg font-semibold text-sm">+ New Temple</Link>
      </div>
      <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 text-center text-gray-400">
        <p className="text-4xl mb-3">🛕</p>
        <p>No temple entries yet. Click the button above to add your first one.</p>
      </div>
    </div>
  );
}
