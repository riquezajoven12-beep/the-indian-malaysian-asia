'use client';
import Link from 'next/link';

const data = [
  { title: 'Cabinet Approves New Indian Blueprint', cat: 'Politics', status: 'Published', date: '2026-02-20', views: 1243 },
  { title: 'Tamil Schools See Record Enrollment', cat: 'Education', status: 'Published', date: '2026-02-19', views: 892 },
  { title: 'Batu Caves Prepares for Thaipusam', cat: 'Culture', status: 'Published', date: '2026-02-18', views: 2156 },
  { title: 'Young Entrepreneurs Rising', cat: 'Business', status: 'Draft', date: '2026-02-17', views: 0 },
];

export default function AdminArticles() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
        <h1 className="font-display text-xl md:text-2xl text-dark">📰 Articles</h1>
        <Link href="/admin/articles/new" className="bg-saffron text-white px-5 py-2.5 rounded-lg font-semibold text-sm">+ New Article</Link>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Title</th>
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Category</th>
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Status</th>
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Views</th>
            </tr></thead>
            <tbody>{data.map((a, i) => (
              <tr key={i} className="border-b border-gray-50">
                <td className="px-5 py-3.5 text-sm text-dark font-medium">{a.title}</td>
                <td className="px-5 py-3.5"><span className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-md">{a.cat}</span></td>
                <td className="px-5 py-3.5"><span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${a.status === 'Published' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>{a.status}</span></td>
                <td className="px-5 py-3.5 text-sm text-gray-500">{a.views}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
