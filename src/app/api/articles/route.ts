import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, slug, excerpt, content, category, status } = body;

    // Get category ID
    const { data: categoryData } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', category)
      .single();

    // Get first profile as author (you can improve this later with auth)
    const { data: profileData } = await supabase
      .from('profiles')
      .select('id')
      .limit(1)
      .single();

    // Insert article
    const { data, error } = await supabase
      .from('articles')
      .insert({
        title,
        slug,
        excerpt,
        content,
        status,
        category_id: categoryData?.id,
        author_id: profileData?.id,
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting article:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, article: data });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*, category:categories(name, slug)')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
