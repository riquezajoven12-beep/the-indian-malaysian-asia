'use client';

export default function AdminFeatured() {
  const c = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-saffron transition";
  return (<div>
    <h1 className="font-display text-xl md:text-2xl text-dark mb-6">⭐ Featured Story</h1>
    <div className="bg-gradient-to-br from-[#0D5C63] to-[#1B4332] rounded-xl p-6 text-white mb-6 max-w-3xl">
      <span className="bg-gold text-dark text-[0.65rem] font-bold px-3 py-1 rounded">FEATURED</span>
      <h3 className="font-display text-xl mt-3">The Rise of Indian Malaysian Entrepreneurs</h3>
      <p className="text-white/70 text-sm mt-2">How young Indian Malaysians are transforming the business landscape.</p>
    </div>
    <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm border border-gray-100 max-w-3xl"><div className="flex flex-col gap-5">
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Title</label><input className={c} defaultValue="The Rise of Indian Malaysian Entrepreneurs" /></div>
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Subtitle</label><input className={c} defaultValue="How young Indian Malaysians are transforming the business landscape." /></div>
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Link</label><input className={c} defaultValue="/news" /></div>
      <button className="bg-saffron text-white px-6 py-3 rounded-xl font-bold text-sm self-start">Update</button>
    </div></div>
  </div>);
}
