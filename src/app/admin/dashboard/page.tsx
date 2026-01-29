import { createServerClient } from '@/lib/supabase';
import { FileText, Calendar, Building2, Users, Eye, TrendingUp } from 'lucide-react';
import Link from 'next/link';

async function getDashboardStats() {
  const supabase = createServerClient();

  const [articles, events, persatuan, subscribers] = await Promise.all([
    supabase.from('articles').select('id, status', { count: 'exact' }),
    supabase.from('events').select('id', { count: 'exact' }).eq('status', 'upcoming'),
    supabase.from('persatuan').select('id', { count: 'exact' }),
    supabase.from('subscribers').select('id', { count: 'exact' }).eq('is_active', true),
  ]);

  const publishedCount = articles.data 
    ? articles.data.filter((a: { status: string }) => a.status === 'published').length 
    : 0;

  const { data: recentArticles } = await supabase
    .from('articles')
    .select('id, title, slug, status, created_at')
    .order('created_at', { ascending: false })
    .limit(5);

  return {
    totalArticles: articles.count || 0,
    publishedArticles: publishedCount,
    upcomingEvents: events.count || 0,
    totalPersatuan: persatuan.count || 0,
    activeSubscribers: subscribers.count || 0,
    recentArticles: recentArticles || [],
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const statCards = [
    { label: 'Total Articles', value: stats.totalArticles, icon: FileText, color: 'bg-orange-500' },
    { label: 'Published', value: stats.publishedArticles, icon: Eye, color: 'bg-green-500' },
    { label: 'Upcoming Events', value: stats.upcomingEvents, icon: Calendar, color: 'bg-teal-600' },
    { label: 'Persatuan', value: stats.totalPersatuan, icon: Building2, color: 'bg-red-800' },
    { label: 'Subscribers', value: stats.activeSubscribers, icon: Users, color: 'bg-yellow-600' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here is what is happening with your site.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Articles</h2>
            <Link href="/admin/articles" className="text-orange-500 text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {stats.recentArticles.length > 0 ? (
              stats.recentArticles.map((article: { id: string; title: string; status: string }) => (
                <div key={article.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <h3 className="font-medium text-gray-900">{article.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">No articles yet. Create your first article!</p>
            )}
          </div>
          <Link
            href="/admin/articles/new"
            className="mt-6 block w-full text-center bg-gradient-to-r from-orange-500 to-red-800 text-white py-3 font-semibold"
          >
            Create New Article
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'New Article', href: '/admin/articles/new', icon: FileText },
              { label: 'New Event', href: '/admin/events/new', icon: Calendar },
              { label: 'Add Persatuan', href: '/admin/persatuan/new', icon: Building2 },
              { label: 'View Media', href: '/admin/media', icon: Users },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors"
              >
                <action.icon className="w-5 h-5 text-orange-500" />
                <span className="font-medium">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
