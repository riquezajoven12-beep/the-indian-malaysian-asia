import { createServerClient } from '@/lib/supabase';
import Link from 'next/link';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { format } from 'date-fns';

async function getArticles() {
  const supabase = createServerClient();
  
  const { data: articles } = await supabase
    .from('articles')
    .select(`
      *,
      category:categories(name, color),
      author:profiles(full_name)
    `)
    .order('created_at', { ascending: false });

  return articles || [];
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-charcoal">Articles</h1>
          <p className="text-gray-600 mt-1">Manage your news articles and blog posts</p>
        </div>
        <Link href="/admin/articles/new" className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Article
        </Link>
      </div>

      <div className="admin-card">
        {articles.length > 0 ? (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article: any) => (
                <tr key={article.id}>
                  <td>
                    <div className="font-medium text-charcoal max-w-xs truncate">
                      {article.title}
                    </div>
                  </td>
                  <td>
                    {article.category && (
                      <span 
                        className="px-3 py-1 text-xs font-medium text-white rounded"
                        style={{ backgroundColor: article.category.color }}
                      >
                        {article.category.name}
                      </span>
                    )}
                  </td>
                  <td className="text-gray-600">{article.author?.full_name || 'Unknown'}</td>
                  <td>
                    <span className={`status-badge status-${article.status}`}>
                      {article.status}
                    </span>
                  </td>
                  <td className="text-gray-500 text-sm">
                    {format(new Date(article.created_at), 'MMM d, yyyy')}
                  </td>
                  <td>
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/news/${article.slug}`}
                        className="p-2 text-gray-500 hover:text-teal transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/admin/articles/${article.id}/edit`}
                        className="p-2 text-gray-500 hover:text-saffron transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button
                        className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">No articles yet</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first article</p>
            <Link href="/admin/articles/new" className="btn-primary inline-flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Create Article
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function FileText(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" x2="8" y1="13" y2="13"/>
      <line x1="16" x2="8" y1="17" y2="17"/>
      <line x1="10" x2="8" y1="9" y2="9"/>
    </svg>
  );
}
