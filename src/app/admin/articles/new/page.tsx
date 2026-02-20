'use client';
import Link from 'next/link';

export default function NewArticle() {
  const c = "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm outline-none focus:border-saffron transition";
  return (<div>
    <div className="flex items-center gap-3 mb-6"><Link href="/admin/articles" className="text-gray-400 text-sm">← Articles</Link><h1 className="font-display text-xl md:text-2xl text-dark">New Article</h1></div>
    <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm border border-gray-100 max-w-3xl"><div className="flex flex-col gap-5">
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Title</label><input className={c} placeholder="Article title..." /></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><label className="block text-xs font-semibold text-gray-500 mb-1">Category</label><select className={c}>{['Politics','Education','Culture','Business','Sports','Community'].map(o=><option key={o}>{o}</option>)}</select></div><div><label className="block text-xs font-semibold text-gray-500 mb-1">Status</label><select className={c}><option>Draft</option><option>Published</option></select></div></div>
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Image URL</label><input className={c} placeholder="https://..." /></div>
      <div><label className="block text-xs font-semibold text-gray-500 mb-1">Content</label><textarea className={`${c} min-h-[200px] resize-y`} placeholder="Write your article..." /></div>
      <div className="flex gap-3"><button className="bg-saffron text-white px-6 py-3 rounded-xl font-bold text-sm">Publish</button><button className="bg-gray-100 text-gray-500 px-6 py-3 rounded-xl font-bold text-sm">Save Draft</button></div>
    </div></div>
  </div>);
}
