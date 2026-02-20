'use client';
import { Header, Footer } from '../page';

const jobs = [
  { title: 'Software Developer', company: 'TCS Malaysia', location: 'KL', type: 'Full-time', salary: 'RM 5,000 - 8,000' },
  { title: 'Accountant', company: 'Deloitte MY', location: 'PJ', type: 'Full-time', salary: 'RM 4,500 - 7,000' },
  { title: 'Tamil Teacher', company: 'SJK(T) Ladang Bidor', location: 'Perak', type: 'Full-time', salary: 'RM 2,800 - 4,000' },
  { title: 'Marketing Executive', company: 'Astro', location: 'Bukit Jalil', type: 'Contract', salary: 'RM 3,500 - 5,500' },
  { title: 'Nurse', company: 'KPJ Healthcare', location: 'JB', type: 'Full-time', salary: 'RM 3,000 - 5,000' },
  { title: 'Web Developer', company: 'PETRONAS ICT', location: 'KLCC', type: 'Full-time', salary: 'RM 6,000 - 10,000' },
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <div className="bg-gradient-to-br from-dark to-maroon py-14 md:py-20 px-5 text-center">
        <h1 className="font-display text-3xl md:text-5xl text-white mb-3">Job Board</h1>
        <p className="font-tamil text-gold text-base">வேலை வாய்ப்புகள்</p>
      </div>
      <div className="max-w-4xl mx-auto px-5 py-10">
        <div className="flex flex-col gap-4">
          {jobs.map(j => (
            <div key={j.title + j.company} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                <h3 className="font-display text-lg text-dark">{j.title}</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-50 text-green-700 self-start">{j.type}</span>
              </div>
              <p className="text-gray-600 text-sm font-medium">{j.company}</p>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
                <span>📍 {j.location}</span>
                <span>💰 {j.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
