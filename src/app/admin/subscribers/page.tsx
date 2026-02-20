'use client';

const subs = [
  { email: 'raj@example.com', plan: 'Premium', joined: '2026-01-15', status: 'Active' },
  { email: 'priya@example.com', plan: 'Basic', joined: '2026-01-20', status: 'Active' },
  { email: 'kumar@example.com', plan: 'Basic', joined: '2026-02-01', status: 'Active' },
  { email: 'siti@example.com', plan: 'Free', joined: '2026-02-10', status: 'Active' },
  { email: 'anand@example.com', plan: 'Premium', joined: '2025-12-05', status: 'Expired' },
];

export default function AdminSubscribers() {
  return (
    <div>
      <h1 className="font-display text-xl md:text-2xl text-dark mb-2">👥 Subscribers</h1>
      <p className="text-gray-400 text-sm mb-6">1,892 total subscribers</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Monthly Revenue', value: 'RM 16,540', icon: '💰' },
          { label: 'New This Month', value: '127', icon: '📈' },
          { label: 'Churn Rate', value: '2.3%', icon: '📉' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="text-xl mb-1">{s.icon}</div>
            <div className="text-lg font-bold text-dark">{s.value}</div>
            <div className="text-gray-400 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead><tr className="bg-gray-50">
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Email</th>
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Plan</th>
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Joined</th>
              <th className="text-left px-5 py-3 text-[0.7rem] text-gray-400 font-semibold uppercase">Status</th>
            </tr></thead>
            <tbody>{subs.map((s, i) => (
              <tr key={i} className="border-b border-gray-50">
                <td className="px-5 py-3.5 text-sm text-dark font-medium">{s.email}</td>
                <td className="px-5 py-3.5"><span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${s.plan === 'Premium' ? 'bg-purple-50 text-purple-700' : s.plan === 'Basic' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-500'}`}>{s.plan}</span></td>
                <td className="px-5 py-3.5 text-xs text-gray-400">{s.joined}</td>
                <td className="px-5 py-3.5"><span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${s.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{s.status}</span></td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
