export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          role: 'admin' | 'editor' | 'contributor' | 'member';
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          role?: 'admin' | 'editor' | 'contributor' | 'member';
          bio?: string | null;
        };
        Update: {
          full_name?: string | null;
          avatar_url?: string | null;
          role?: 'admin' | 'editor' | 'contributor' | 'member';
          bio?: string | null;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          name_tamil: string | null;
          slug: string;
          description: string | null;
          color: string;
          parent_id: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          name: string;
          name_tamil?: string | null;
          slug: string;
          description?: string | null;
          color?: string;
          parent_id?: string | null;
          sort_order?: number;
        };
        Update: {
          name?: string;
          name_tamil?: string | null;
          slug?: string;
          description?: string | null;
          color?: string;
          parent_id?: string | null;
          sort_order?: number;
        };
      };
      articles: {
        Row: {
          id: string;
          title: string;
          title_tamil: string | null;
          slug: string;
          excerpt: string | null;
          content: string;
          featured_image: string | null;
          category_id: string | null;
          author_id: string | null;
          status: 'draft' | 'published' | 'archived';
          is_featured: boolean;
          view_count: number;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          title_tamil?: string | null;
          slug: string;
          excerpt?: string | null;
          content: string;
          featured_image?: string | null;
          category_id?: string | null;
          author_id?: string | null;
          status?: 'draft' | 'published' | 'archived';
          is_featured?: boolean;
        };
        Update: {
          title?: string;
          title_tamil?: string | null;
          slug?: string;
          excerpt?: string | null;
          content?: string;
          featured_image?: string | null;
          category_id?: string | null;
          status?: 'draft' | 'published' | 'archived';
          is_featured?: boolean;
          published_at?: string | null;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          title_tamil: string | null;
          slug: string;
          description: string | null;
          content: string | null;
          featured_image: string | null;
          event_type: 'religious' | 'cultural' | 'education' | 'business' | 'community' | 'sports';
          start_date: string;
          end_date: string | null;
          location: string | null;
          location_address: string | null;
          location_map_url: string | null;
          organizer_id: string | null;
          organizer_name: string | null;
          contact_email: string | null;
          contact_phone: string | null;
          registration_url: string | null;
          is_featured: boolean;
          status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          title_tamil?: string | null;
          slug: string;
          description?: string | null;
          content?: string | null;
          featured_image?: string | null;
          event_type: 'religious' | 'cultural' | 'education' | 'business' | 'community' | 'sports';
          start_date: string;
          end_date?: string | null;
          location?: string | null;
          location_address?: string | null;
          location_map_url?: string | null;
          organizer_name?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          registration_url?: string | null;
          is_featured?: boolean;
          status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
        };
        Update: {
          title?: string;
          title_tamil?: string | null;
          slug?: string;
          description?: string | null;
          content?: string | null;
          featured_image?: string | null;
          event_type?: 'religious' | 'cultural' | 'education' | 'business' | 'community' | 'sports';
          start_date?: string;
          end_date?: string | null;
          location?: string | null;
          location_address?: string | null;
          location_map_url?: string | null;
          organizer_name?: string | null;
          contact_email?: string | null;
          contact_phone?: string | null;
          registration_url?: string | null;
          is_featured?: boolean;
          status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
        };
      };
      persatuan: {
        Row: {
          id: string;
          name: string;
          name_tamil: string | null;
          slug: string;
          description: string | null;
          logo_url: string | null;
          category: 'national' | 'state' | 'professional' | 'cultural' | 'religious' | 'youth' | 'women' | 'welfare';
          founded_year: number | null;
          registration_number: string | null;
          address: string | null;
          city: string | null;
          state: string | null;
          postcode: string | null;
          phone: string | null;
          email: string | null;
          website: string | null;
          facebook_url: string | null;
          president_name: string | null;
          secretary_name: string | null;
          member_count: number | null;
          is_verified: boolean;
          is_featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          name_tamil?: string | null;
          slug: string;
          description?: string | null;
          logo_url?: string | null;
          category: 'national' | 'state' | 'professional' | 'cultural' | 'religious' | 'youth' | 'women' | 'welfare';
          founded_year?: number | null;
          registration_number?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          postcode?: string | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          facebook_url?: string | null;
          president_name?: string | null;
          secretary_name?: string | null;
          member_count?: number | null;
          is_verified?: boolean;
          is_featured?: boolean;
        };
        Update: {
          name?: string;
          name_tamil?: string | null;
          slug?: string;
          description?: string | null;
          logo_url?: string | null;
          category?: 'national' | 'state' | 'professional' | 'cultural' | 'religious' | 'youth' | 'women' | 'welfare';
          founded_year?: number | null;
          registration_number?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          postcode?: string | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          facebook_url?: string | null;
          president_name?: string | null;
          secretary_name?: string | null;
          member_count?: number | null;
          is_verified?: boolean;
          is_featured?: boolean;
        };
      };
      temples: {
        Row: {
          id: string;
          name: string;
          name_tamil: string | null;
          slug: string;
          religion: 'hindu' | 'sikh' | 'christian' | 'buddhist' | 'other';
          deity: string | null;
          description: string | null;
          history: string | null;
          image_url: string | null;
          address: string | null;
          city: string | null;
          state: string | null;
          postcode: string | null;
          latitude: number | null;
          longitude: number | null;
          phone: string | null;
          email: string | null;
          website: string | null;
          opening_hours: string | null;
          festivals: string[] | null;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          name_tamil?: string | null;
          slug: string;
          religion: 'hindu' | 'sikh' | 'christian' | 'buddhist' | 'other';
          deity?: string | null;
          description?: string | null;
          history?: string | null;
          image_url?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          postcode?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          opening_hours?: string | null;
          festivals?: string[] | null;
          is_verified?: boolean;
        };
        Update: {
          name?: string;
          name_tamil?: string | null;
          slug?: string;
          religion?: 'hindu' | 'sikh' | 'christian' | 'buddhist' | 'other';
          deity?: string | null;
          description?: string | null;
          history?: string | null;
          image_url?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          postcode?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          opening_hours?: string | null;
          festivals?: string[] | null;
          is_verified?: boolean;
        };
      };
      schools: {
        Row: {
          id: string;
          name: string;
          name_tamil: string | null;
          slug: string;
          school_type: 'primary' | 'secondary' | 'private' | 'tuition';
          code: string | null;
          address: string | null;
          city: string | null;
          state: string | null;
          postcode: string | null;
          latitude: number | null;
          longitude: number | null;
          phone: string | null;
          email: string | null;
          website: string | null;
          principal_name: string | null;
          student_count: number | null;
          teacher_count: number | null;
          established_year: number | null;
          facilities: string[] | null;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          name_tamil?: string | null;
          slug: string;
          school_type: 'primary' | 'secondary' | 'private' | 'tuition';
          code?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          postcode?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          principal_name?: string | null;
          student_count?: number | null;
          teacher_count?: number | null;
          established_year?: number | null;
          facilities?: string[] | null;
          is_verified?: boolean;
        };
        Update: {
          name?: string;
          name_tamil?: string | null;
          slug?: string;
          school_type?: 'primary' | 'secondary' | 'private' | 'tuition';
          code?: string | null;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          postcode?: string | null;
          latitude?: number | null;
          longitude?: number | null;
          phone?: string | null;
          email?: string | null;
          website?: string | null;
          principal_name?: string | null;
          student_count?: number | null;
          teacher_count?: number | null;
          established_year?: number | null;
          facilities?: string[] | null;
          is_verified?: boolean;
        };
      };
      scholarships: {
        Row: {
          id: string;
          name: string;
          provider: string;
          description: string | null;
          eligibility: string | null;
          amount: string | null;
          deadline: string | null;
          application_url: string | null;
          category: 'undergraduate' | 'postgraduate' | 'vocational' | 'study_abroad' | 'merit' | 'need_based';
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          name: string;
          provider: string;
          description?: string | null;
          eligibility?: string | null;
          amount?: string | null;
          deadline?: string | null;
          application_url?: string | null;
          category: 'undergraduate' | 'postgraduate' | 'vocational' | 'study_abroad' | 'merit' | 'need_based';
          is_active?: boolean;
        };
        Update: {
          name?: string;
          provider?: string;
          description?: string | null;
          eligibility?: string | null;
          amount?: string | null;
          deadline?: string | null;
          application_url?: string | null;
          category?: 'undergraduate' | 'postgraduate' | 'vocational' | 'study_abroad' | 'merit' | 'need_based';
          is_active?: boolean;
        };
      };
      subscribers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          is_active: boolean;
          subscribed_at: string;
          unsubscribed_at: string | null;
        };
        Insert: {
          email: string;
          name?: string | null;
          is_active?: boolean;
        };
        Update: {
          is_active?: boolean;
          unsubscribed_at?: string | null;
        };
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          subject?: string | null;
          message: string;
        };
        Update: {
          is_read?: boolean;
        };
      };
      media: {
        Row: {
          id: string;
          filename: string;
          original_filename: string | null;
          file_path: string;
          file_type: string | null;
          file_size: number | null;
          width: number | null;
          height: number | null;
          alt_text: string | null;
          caption: string | null;
          uploaded_by: string | null;
          created_at: string;
        };
        Insert: {
          filename: string;
          original_filename?: string | null;
          file_path: string;
          file_type?: string | null;
          file_size?: number | null;
          width?: number | null;
          height?: number | null;
          alt_text?: string | null;
          caption?: string | null;
          uploaded_by?: string | null;
        };
        Update: {
          alt_text?: string | null;
          caption?: string | null;
        };
      };
      site_settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          updated_at: string;
        };
        Insert: {
          key: string;
          value: Json;
        };
        Update: {
          value?: Json;
        };
      };
    };
  };
}

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type Article = Database['public']['Tables']['articles']['Row'];
export type Category = Database['public']['Tables']['categories']['Row'];
export type Event = Database['public']['Tables']['events']['Row'];
export type Persatuan = Database['public']['Tables']['persatuan']['Row'];
export type Temple = Database['public']['Tables']['temples']['Row'];
export type School = Database['public']['Tables']['schools']['Row'];
export type Scholarship = Database['public']['Tables']['scholarships']['Row'];

// Extended types with relations
export type ArticleWithRelations = Article & {
  category: Category | null;
  author: Profile | null;
};

export type EventWithRelations = Event & {
  organizer: Profile | null;
};
