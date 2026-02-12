import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: string;
  author_name?: string;
  image_url?: string;
  image_alt?: string;
  status: 'draft' | 'published';
  is_premium: boolean;
  created_at: string;
  updated_at?: string;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  category: string;
  date: string;
  time?: string;
  location: string;
  venue?: string;
  image_url?: string;
  organizer?: string;
  contact_email?: string;
  contact_phone?: string;
  status: 'upcoming' | 'past' | 'cancelled';
  created_at: string;
}

export interface Temple {
  id: string;
  name: string;
  type: 'hindu_temple' | 'sikh_gurdwara' | 'church';
  address: string;
  city: string;
  state: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  image_url?: string;
  latitude?: number;
  longitude?: number;
  created_at: string;
}

export interface Association {
  id: string;
  name: string;
  category: string;
  description?: string;
  address?: string;
  city: string;
  state: string;
  phone?: string;
  email?: string;
  website?: string;
  established_year?: number;
  registration_number?: string;
  image_url?: string;
  created_at: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  category: string;
  location: string;
  job_type: 'full_time' | 'part_time' | 'contract' | 'internship';
  salary_min?: number;
  salary_max?: number;
  description: string;
  requirements?: string;
  contact_email: string;
  contact_phone?: string;
  status: 'active' | 'closed';
  created_at: string;
  expires_at?: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  subscription_tier: 'free' | 'basic' | 'premium';
  subscription_status: 'active' | 'cancelled' | 'expired';
  subscription_expires_at?: string;
  articles_read_this_month: number;
  created_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  full_name?: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed';
}

// Helper Functions
export async function getArticles(limit = 10, status = 'published') {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', status)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return data || [];
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }
  return data;
}

export async function getEvents(status = 'upcoming', limit = 10) {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('status', status)
    .order('date', { ascending: true })
    .limit(limit);

  if (error) {
    console.error('Error fetching events:', error);
    return [];
  }
  return data || [];
}

export async function getTemples(state?: string, type?: string, limit = 20) {
  let query = supabase
    .from('temples')
    .select('*')
    .order('name', { ascending: true })
    .limit(limit);

  if (state) {
    query = query.eq('state', state);
  }
  if (type) {
    query = query.eq('type', type);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching temples:', error);
    return [];
  }
  return data || [];
}

export async function getAssociations(category?: string, state?: string, limit = 20) {
  let query = supabase
    .from('associations')
    .select('*')
    .order('name', { ascending: true })
    .limit(limit);

  if (category) {
    query = query.eq('category', category);
  }
  if (state) {
    query = query.eq('state', state);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching associations:', error);
    return [];
  }
  return data || [];
}

export async function getJobs(category?: string, location?: string, jobType?: string, limit = 20) {
  let query = supabase
    .from('jobs')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (category) {
    query = query.eq('category', category);
  }
  if (location) {
    query = query.eq('location', location);
  }
  if (jobType) {
    query = query.eq('job_type', jobType);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
  return data || [];
}

export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('subscription_tier, subscription_status, subscription_expires_at, articles_read_this_month')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user subscription:', error);
    return null;
  }
  return data;
}

export async function incrementArticleRead(userId: string) {
  const { error } = await supabase.rpc('increment_articles_read', { user_id: userId });
  
  if (error) {
    console.error('Error incrementing article read count:', error);
  }
}

export async function addSubscriber(email: string, fullName?: string) {
  const { data, error } = await supabase
    .from('subscribers')
    .insert([{ email, full_name: fullName, status: 'active' }])
    .select()
    .single();

  if (error) {
    console.error('Error adding subscriber:', error);
    return null;
  }
  return data;
}

export default supabase;
