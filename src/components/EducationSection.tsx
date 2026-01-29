import Link from 'next/link';
import { BookOpen, GraduationCap, Briefcase, Building2 } from 'lucide-react';

const educationItems = [
  {
    icon: BookOpen,
    title: 'Tamil Schools',
    description: 'Directory of 523 Tamil schools across Malaysia with enrollment information and academic resources.',
    link: '/education/schools',
    linkText: 'Explore Schools',
  },
  {
    icon: GraduationCap,
    title: 'Scholarships',
    description: 'Comprehensive database of scholarships available to Indian Malaysian students for local and overseas education.',
    link: '/education/scholarships',
    linkText: 'Find Scholarships',
  },
  {
    icon: Briefcase,
    title: 'Career Development',
    description: 'Professional development programs, mentorship opportunities, and job placement assistance.',
    link: '/education/careers',
    linkText: 'View Programs',
  },
  {
    icon: Building2,
    title: 'Cultural Studies',
    description: 'Learn Tamil language, classical arts, history, and religious studies through online and community courses.',
    link: '/education/cultural',
    linkText: 'Start Learning',
  },
];

export default function EducationSection() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-[15rem] font-tamil text-white/[0.03] whitespace-nowrap pointer-events-none">
        கல்வி
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Education Hub
          </h2>
          <p className="text-white/70 text-lg max-w-2xl">
            Empowering the next generation through quality education, scholarships, and skill development programs.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educationItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-gold group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-saffron to-gold flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-5">
                {item.description}
              </p>
              <Link
                href={item.link}
                className="text-gold font-semibold text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                {item.linkText} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
