import Link from 'next/link';
import { format } from 'date-fns';
import { MapPin } from 'lucide-react';
import type { Event } from '@/types/database';

interface EventsSectionProps {
  events: Event[];
}

const defaultEvents = [
  {
    id: '1',
    title: 'Thaipusam Festival 2026',
    slug: 'thaipusam-2026',
    start_date: '2026-02-11',
    location: 'Batu Caves, Selangor',
    event_type: 'religious',
  },
  {
    id: '2',
    title: 'Tamil Language Conference 2026',
    slug: 'tamil-language-conference-2026',
    start_date: '2026-02-15',
    location: 'Kuala Lumpur Convention Centre',
    event_type: 'education',
  },
  {
    id: '3',
    title: 'Malaysian Indian Business Summit',
    slug: 'indian-business-summit-2026',
    start_date: '2026-03-28',
    location: 'Putrajaya International Convention Centre',
    event_type: 'business',
  },
];

const eventTypeLabels: Record<string, string> = {
  religious: 'Religious Festival',
  cultural: 'Cultural Event',
  education: 'Education',
  business: 'Business',
  community: 'Community',
  sports: 'Sports',
};

export default function EventsSection({ events }: EventsSectionProps) {
  const displayEvents = events.length > 0 ? events : defaultEvents;

  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="text-tamil text-lg text-maroon mt-2">நிகழ்வுகள்</p>
          </div>
          <Link href="/events" className="text-saffron font-semibold hover:gap-4 flex items-center gap-2 transition-all">
            View Calendar →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayEvents.map((event) => {
            const eventDate = new Date(event.start_date);
            return (
              <Link href={`/events/${event.slug}`} key={event.id} className="card overflow-hidden group">
                <div className="bg-gradient-to-br from-saffron to-maroon text-white p-6 text-center">
                  <div className="font-display text-5xl font-bold">{format(eventDate, 'd')}</div>
                  <div className="text-sm uppercase tracking-widest">{format(eventDate, 'MMMM')}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-maroon transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </p>
                  <span className="inline-block bg-cream text-maroon px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {eventTypeLabels[event.event_type] || event.event_type}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
