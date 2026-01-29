import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if already subscribed
    const { data: existing } = await supabaseAdmin
      .from('subscribers')
      .select('id, is_active')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.is_active) {
        return NextResponse.json(
          { message: 'Already subscribed' },
          { status: 200 }
        );
      } else {
        // Reactivate subscription
        await supabaseAdmin
          .from('subscribers')
          .update({ is_active: true, unsubscribed_at: null })
          .eq('id', existing.id);
        
        return NextResponse.json({ message: 'Subscription reactivated' });
      }
    }

    // Create new subscription
    const { error } = await supabaseAdmin
      .from('subscribers')
      .insert([{ email }]);

    if (error) throw error;

    return NextResponse.json({ message: 'Successfully subscribed' });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 }
    );
  }
}
