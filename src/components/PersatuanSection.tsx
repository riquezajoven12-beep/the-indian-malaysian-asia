import Link from 'next/link';
import { Building2, ScrollText, Scale, Heart, Palette, Users } from 'lucide-react';
import type { Persatuan } from '@/types/database';

interface PersatuanSectionProps {
  persatuan: Persatuan[];
}

const defaultPersatuan = [
  { icon: Building2, name: 'Malaysian Hindu Sangam', type: 'National Federation' },
  { icon: ScrollText, name: 'Tamil Foundation Malaysia', type: 'Cultural Organization' },
  { icon: Scale, name: 'Malaysian Indian Lawyers Association', type: 'Professional Body' },
  { icon: Heart, name: 'Indian Medical Association Malaysia', type: 'Professional Body' },
  { icon: Palette, name: 'Temple of Fine Arts', type: 'Cultural Organization' },
  { icon: Users, name: 'Selangor Indian Association', type: 'State Federation' },
];

export default function PersatuanSection({ persatuan }: PersatuanSectionProps) {
  const displayPersatuan = persatuan.length > 0 
    ? persatuan.map((p, i) => ({
        icon: [Building2, ScrollText, Scale, Heart, Palette, Users][i % 6],
        name: p.name,
        type: p.category?.replace('_', ' ') || 'Organization',
      }))
    : defaultPersatuan;

  return (
    <section className="py-20 bg-maroon">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-3 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-5">
            Persatuan and Associations
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            Connect with over 500 registered Indian associations across Malaysia. From state-level federations to local community groups, these organizations serve as the backbone of our community social support network.
          </p>
          <Link href="/persatuan" className="btn-gold inline-block">
            JOIN A PERSATUAN
          </Link>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {displayPersatuan.map((item) => (
            <div
              key={item.name}
              className="bg-white/10 border border-white/20 p-6 flex items-center gap-5 transition-all hover:bg-white/15 hover:translate-x-1 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-charcoal" />
              </div>
              <div>
                <h4 className="text-white font-medium">{item.name}</h4>
                <span className="text-white/60 text-sm">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: '2.01M', label: 'Population (2024)' },
            { number: '6.6%', label: 'of Malaysia' },
            { number: '523', label: 'Tamil Schools' },
            { number: '3,000+', label: 'Hindu Temples' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-bold text-gold">{stat.number}</div>
              <div className="text-white/70 text-sm uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
