'use client';
import { Header, Footer } from '@/components/layout';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-cream"><Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center"><h1 className="font-display text-3xl md:text-5xl text-white mb-3">Education</h1><p className="font-tamil text-gold text-base">கல்வி</p></div>
      <div className="max-w-6xl mx-auto px-5 py-10"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { icon: '🏫', title: 'Tamil Schools (SJK-T)', desc: 'Directory of 524 Tamil vernacular schools.', count: '524 schools' },
        { icon: '🎓', title: 'Scholarships', desc: 'Scholarship opportunities for students.', count: '45 active' },
        { icon: '📚', title: 'Universities', desc: 'Higher education pathways.', count: '20+ institutions' },
        { icon: '💡', title: 'Skills Training', desc: 'Vocational and technical programs.', count: '30+ programs' },
        { icon: '🌐', title: 'Online Learning', desc: 'Digital education resources.', count: 'Free access' },
        { icon: '👶', title: 'Early Childhood', desc: 'Preschool and kindergarten resources.', count: '200+ centers' },
      ].map(c => (
        <div key={c.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">{c.icon}</div><h3 className="font-display text-lg text-dark mb-2">{c.title}</h3>
          <p className="text-gray-500 text-sm mb-3">{c.desc}</p><span className="text-saffron text-xs font-bold">{c.count}</span>
        </div>))}</div></div>
    <Footer /></div>
  );
}
