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

  const { data: recentArticles } = await supabase
    .from('articles')
    .select('id, title, slug, status, created_at, author:profiles(full_name)')
    .order('created_at', { ascending: false })
    .limit(5);

  return {
    totalArticles: articles.count || 0,
    publishedArticles: articles.data?.filter(a => a.status === 'published').length || 0,
    upcomingEvents: events.count || 0,
    totalPersatuan: persatuan.count || 0,
    activeSubscribers: subscribers.count || 0,
    recentArticles: recentArticles || [],
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const statCards = [
    { label: 'Total Articles', value: stats.totalArticles, icon: FileText, color: 'bg-saffron' },
    { label: 'Published', value: stats.publishedArticles, icon: Eye, color: 'bg-green-500' },
    { label: 'Upcoming Events', value: stats.upcomingEvents, icon: Calendar, color: 'bg-teal' },
    { label: 'Persatuan', value: stats.totalPersatuan, icon: Building2, color: 'bg-maroon' },
    { label: 'Subscribers', value: stats.activeSubscribers, icon: Users, color: 'bg-gold' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-charcoal">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here is what is happening with your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {statCards.map((stat) => (
          <div key={stat.label} className="admin-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-3xl font-display font-bold text-charcoal">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Articles */}
        <div className="admin-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-display font-semibold">Recent Articles</h2>
            <Link href="/admin/articles" className="text-saffron text-sm font-medium">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {stats.recentArticles.length > 0 ? (
              stats.recentArticles.map((article: any) => (
                <div key={article.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <h3 className="font-medium text-charcoal">{article.title}</h3>
                    <p className="text-sm text-gray-500">
                      By {article.author?.full_name || 'Unknown'}
                    </p>
                  </div>
                  <span className={`status-badge ${article.status === 'published' ? 'status-published' : 'status-draft'}`}>
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
            className="btn-primary w-full text-center mt-6 block"
          >
            Create New Article
          </Link>
        </div>

        {/* Quick Actions */}
        <div className="admin-card">
          <h2 className="text-xl font-display font-semibold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'New Article', href: '/admin/articles/new', icon: FileText },
              { label: 'New Event', href: '/admin/events/new', icon: Calendar },
              { label: 'Add Persatuan', href: '/admin/persatuan/new', icon: Building2 },
              { label: 'Upload Media', href: '/admin/media', icon: Users },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-saffron hover:bg-saffron/5 transition-colors"
              >
                <action.icon className="w-5 h-5 text-saffron" />
                <span className="font-medium">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
