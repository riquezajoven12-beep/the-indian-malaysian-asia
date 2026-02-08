import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  // Get the article marked as featured
  const { data, error } = await supabase
    .from('articles')
    .select('*, category:categories(name, slug)')
    .eq('is_featured', true)
    .eq('status', 'published')
    .single();

  if (error || !data) {
    // If no featured article, get the latest published article
    const { data: latest } = await supabase
      .from('articles')
      .select('*, category:categories(name, slug)')
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    return NextResponse.json(latest || null);
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { article_id } = await request.json();

  // Remove featured from all articles
  await supabase
    .from('articles')
    .update({ is_featured: false })
    .eq('is_featured', true);

  // Set new featured article
  const { data, error } = await supabase
    .from('articles')
    .update({ is_featured: true })
    .eq('id', article_id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
