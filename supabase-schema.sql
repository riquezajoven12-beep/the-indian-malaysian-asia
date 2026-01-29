-- ============================================
-- THE INDIAN MALAYSIAN - DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. USERS & PROFILES
-- ============================================

CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'member' CHECK (role IN ('admin', 'editor', 'contributor', 'member')),
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 2. CATEGORIES
-- ============================================

CREATE TABLE public.categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    name_tamil TEXT,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    color TEXT DEFAULT '#FF6B00',
    parent_id UUID REFERENCES public.categories(id),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Categories are viewable by everyone" ON public.categories
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage categories" ON public.categories
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor'))
    );

-- Insert default categories
INSERT INTO public.categories (name, name_tamil, slug, description, color) VALUES
    ('News', 'செய்திகள்', 'news', 'Latest news and updates', '#FF6B00'),
    ('Politics', 'அரசியல்', 'politics', 'Political news and analysis', '#8B1538'),
    ('Education', 'கல்வி', 'education', 'Education news and resources', '#1B4332'),
    ('Culture', 'கலாச்சாரம்', 'culture', 'Cultural events and heritage', '#D4AF37'),
    ('Business', 'வணிகம்', 'business', 'Business and economy', '#0D5C63'),
    ('Sports', 'விளையாட்டு', 'sports', 'Sports news and achievements', '#4A4A4A'),
    ('Religion', 'மதம்', 'religion', 'Religious events and teachings', '#8B1538'),
    ('Community', 'சமூகம்', 'community', 'Community stories and initiatives', '#FF6B00');

-- ============================================
-- 3. ARTICLES (News Portal)
-- ============================================

CREATE TABLE public.articles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    title_tamil TEXT,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    featured_image TEXT,
    category_id UUID REFERENCES public.categories(id),
    author_id UUID REFERENCES public.profiles(id),
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    is_featured BOOLEAN DEFAULT FALSE,
    view_count INTEGER DEFAULT 0,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Published articles are viewable by everyone" ON public.articles
    FOR SELECT USING (status = 'published' OR author_id = auth.uid());

CREATE POLICY "Authors can create articles" ON public.articles
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor', 'contributor'))
    );

CREATE POLICY "Authors can update own articles" ON public.articles
    FOR UPDATE USING (
        author_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor'))
    );

CREATE POLICY "Admins can delete articles" ON public.articles
    FOR DELETE USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

-- Index for faster queries
CREATE INDEX idx_articles_status ON public.articles(status);
CREATE INDEX idx_articles_category ON public.articles(category_id);
CREATE INDEX idx_articles_published_at ON public.articles(published_at DESC);

-- ============================================
-- 4. EVENTS
-- ============================================

CREATE TABLE public.events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    title_tamil TEXT,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    content TEXT,
    featured_image TEXT,
    event_type TEXT CHECK (event_type IN ('religious', 'cultural', 'education', 'business', 'community', 'sports')),
    start_date TIMESTAMPTZ NOT NULL,
    end_date TIMESTAMPTZ,
    location TEXT,
    location_address TEXT,
    location_map_url TEXT,
    organizer_id UUID REFERENCES public.profiles(id),
    organizer_name TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    registration_url TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    status TEXT DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are viewable by everyone" ON public.events
    FOR SELECT USING (true);

CREATE POLICY "Editors can manage events" ON public.events
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor'))
    );

-- ============================================
-- 5. PERSATUAN (Associations)
-- ============================================

CREATE TABLE public.persatuan (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    name_tamil TEXT,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    logo_url TEXT,
    category TEXT CHECK (category IN ('national', 'state', 'professional', 'cultural', 'religious', 'youth', 'women', 'welfare')),
    founded_year INTEGER,
    registration_number TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postcode TEXT,
    phone TEXT,
    email TEXT,
    website TEXT,
    facebook_url TEXT,
    president_name TEXT,
    secretary_name TEXT,
    member_count INTEGER,
    is_verified BOOLEAN DEFAULT FALSE,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.persatuan ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Persatuan are viewable by everyone" ON public.persatuan
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage persatuan" ON public.persatuan
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor'))
    );

-- Insert sample persatuan
INSERT INTO public.persatuan (name, name_tamil, slug, category, description, state, is_verified, is_featured) VALUES
    ('Malaysian Hindu Sangam', 'மலேசிய இந்து சங்கம்', 'malaysian-hindu-sangam', 'national', 'National federation representing Hindu community interests', 'Selangor', true, true),
    ('Tamil Foundation Malaysia', 'தமிழ் அறக்கட்டளை மலேசியா', 'tamil-foundation-malaysia', 'cultural', 'Promoting Tamil language and culture', 'Kuala Lumpur', true, true),
    ('Malaysian Indian Lawyers Association', 'மலேசிய இந்திய வழக்கறிஞர் சங்கம்', 'mila', 'professional', 'Professional body for Indian lawyers', 'Kuala Lumpur', true, true),
    ('Temple of Fine Arts', 'கலைக் கோவில்', 'temple-of-fine-arts', 'cultural', 'Premier institution for Indian classical arts', 'Kuala Lumpur', true, true),
    ('Selangor Indian Association', 'சிலாங்கூர் இந்திய சங்கம்', 'selangor-indian-association', 'state', 'State-level Indian association', 'Selangor', true, true);

-- ============================================
-- 6. TEMPLES & RELIGIOUS PLACES
-- ============================================

CREATE TABLE public.temples (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    name_tamil TEXT,
    slug TEXT UNIQUE NOT NULL,
    religion TEXT CHECK (religion IN ('hindu', 'sikh', 'christian', 'buddhist', 'other')),
    deity TEXT,
    description TEXT,
    history TEXT,
    image_url TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postcode TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    phone TEXT,
    email TEXT,
    website TEXT,
    opening_hours TEXT,
    festivals TEXT[],
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.temples ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Temples are viewable by everyone" ON public.temples
    FOR SELECT USING (true);

CREATE POLICY "Admins can manage temples" ON public.temples
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor'))
    );

-- ============================================
-- 7. EDUCATION - TAMIL SCHOOLS
-- ============================================

CREATE TABLE public.schools (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    name_tamil TEXT,
    slug TEXT UNIQUE NOT NULL,
    school_type TEXT CHECK (school_type IN ('primary', 'secondary', 'private', 'tuition')),
    code TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postcode TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    phone TEXT,
    email TEXT,
    website TEXT,
    principal_name TEXT,
    student_count INTEGER,
    teacher_count INTEGER,
    established_year INTEGER,
    facilities TEXT[],
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Schools are viewable by everyone" ON public.schools
    FOR SELECT USING (true);

-- ============================================
-- 8. SCHOLARSHIPS
-- ============================================

CREATE TABLE public.scholarships (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    provider TEXT NOT NULL,
    description TEXT,
    eligibility TEXT,
    amount TEXT,
    deadline TIMESTAMPTZ,
    application_url TEXT,
    category TEXT CHECK (category IN ('undergraduate', 'postgraduate', 'vocational', 'study_abroad', 'merit', 'need_based')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.scholarships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Scholarships are viewable by everyone" ON public.scholarships
    FOR SELECT USING (is_active = true);

-- ============================================
-- 9. NEWSLETTER SUBSCRIBERS
-- ============================================

CREATE TABLE public.subscribers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    subscribed_at TIMESTAMPTZ DEFAULT NOW(),
    unsubscribed_at TIMESTAMPTZ
);

ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view subscribers" ON public.subscribers
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Anyone can subscribe" ON public.subscribers
    FOR INSERT WITH CHECK (true);

-- ============================================
-- 10. CONTACT MESSAGES
-- ============================================

CREATE TABLE public.contact_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view messages" ON public.contact_messages
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

CREATE POLICY "Anyone can send messages" ON public.contact_messages
    FOR INSERT WITH CHECK (true);

-- ============================================
-- 11. MEDIA LIBRARY
-- ============================================

CREATE TABLE public.media (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    filename TEXT NOT NULL,
    original_filename TEXT,
    file_path TEXT NOT NULL,
    file_type TEXT,
    file_size INTEGER,
    width INTEGER,
    height INTEGER,
    alt_text TEXT,
    caption TEXT,
    uploaded_by UUID REFERENCES public.profiles(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Media is viewable by everyone" ON public.media
    FOR SELECT USING (true);

CREATE POLICY "Editors can upload media" ON public.media
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('admin', 'editor', 'contributor'))
    );

-- ============================================
-- 12. SITE SETTINGS
-- ============================================

CREATE TABLE public.site_settings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value JSONB,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Settings are viewable by everyone" ON public.site_settings
    FOR SELECT USING (true);

CREATE POLICY "Admins can update settings" ON public.site_settings
    FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

-- Insert default settings
INSERT INTO public.site_settings (key, value) VALUES
    ('site_name', '"The Indian Malaysian"'),
    ('site_name_tamil', '"மலேசிய இந்தியர்கள்"'),
    ('tagline', '"Preserving Heritage. Building Futures."'),
    ('contact_email', '"admin@theindianmalaysian.my"'),
    ('social_facebook', '"https://facebook.com/theindianmalaysian"'),
    ('social_twitter', '"https://twitter.com/indianmalaysian"'),
    ('social_instagram', '"https://instagram.com/theindianmalaysian"'),
    ('social_youtube', '"https://youtube.com/@theindianmalaysian"');

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to all tables with updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON public.articles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at BEFORE UPDATE ON public.events
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_persatuan_updated_at BEFORE UPDATE ON public.persatuan
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_temples_updated_at BEFORE UPDATE ON public.temples
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_schools_updated_at BEFORE UPDATE ON public.schools
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE BUCKETS (Run separately in Supabase Dashboard)
-- ============================================
-- Create these buckets in Supabase Storage:
-- 1. 'avatars' - for user profile pictures
-- 2. 'articles' - for article featured images
-- 3. 'events' - for event images
-- 4. 'persatuan' - for association logos
-- 5. 'temples' - for temple images
-- 6. 'media' - for general media library

-- Set bucket policies to allow public read access
