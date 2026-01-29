import { createServerClient } from '@/lib/supabase';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import RootsSection from '@/components/RootsSection';
import EducationSection from '@/components/EducationSection';
import ReligionSection from '@/components/ReligionSection';
import PersatuanSection from '@/components/PersatuanSection';
import EventsSection from '@/components/EventsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

async function getHomePageData() {
  const supabase = createServerClient();

  // Fetch featured articles
  const { data: articles } = await supabase
    .from('articles')
    .select(`
      *,
      category:categories(*),
      author:profiles(*)
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(6);

  // Fetch upcoming events
  const { data: events } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'upcoming')
    .gte('start_date', new Date().toISOString())
    .order('start_date', { ascending: true })
    .limit(3);

  // Fetch featured persatuan
  const { data: persatuan } = await supabase
    .from('persatuan')
    .select('*')
    .eq('is_featured', true)
    .limit(6);

  return { articles, events, persatuan };
}

export default async function HomePage() {
  const { articles, events, persatuan } = await getHomePageData();

  return (
    <>
      <Header />
      <main>
        <Hero featuredArticle={articles?.[0]} />
        <NewsSection articles={articles?.slice(1) || []} />
        <RootsSection />
        <EducationSection />
        <ReligionSection />
        <PersatuanSection persatuan={persatuan || []} />
        <EventsSection events={events || []} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
