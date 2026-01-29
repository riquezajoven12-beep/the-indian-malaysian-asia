import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    redirect('/');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  const userRole = (profile as { role: string } | null)?.role || 'member';

  if (!['admin', 'editor', 'contributor'].includes(userRole)) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar userRole={userRole} />
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
