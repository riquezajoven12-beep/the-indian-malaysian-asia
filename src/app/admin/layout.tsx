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
    redirect('/login?redirect=/admin');
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();

  if (!profile || !['admin', 'editor', 'contributor'].includes(profile.role)) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar userRole={profile.role} />
      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
