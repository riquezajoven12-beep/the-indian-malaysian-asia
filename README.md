# The Indian Malaysian - CMS Platform

A comprehensive news portal, education hub, and cultural association website for the Indian Malaysian community.

**Domain:** theindianmalaysian.my

## Features

- News Portal with categories and rich text editing
- Events Calendar for community events
- Persatuan Directory with 500+ associations
- Temple Finder for Hindu temples, gurdwaras, and churches  
- Education Hub with Tamil schools and scholarships
- Admin Panel with user roles
- Newsletter subscription
- Multi-language support (English, BM, Tamil)

## Tech Stack

- Next.js 14 (App Router)
- Supabase (PostgreSQL + Auth + Storage)
- Tailwind CSS
- Vercel deployment

## Quick Start

### 1. Set Up Supabase

1. Create account at supabase.com
2. Create new project (Singapore region)
3. Run supabase-schema.sql in SQL Editor
4. Copy API keys from Settings > API

### 2. Create Storage Buckets

In Supabase Storage, create public buckets:
- avatars, articles, events, persatuan, temples, media

### 3. Configure Environment

Create .env.local:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
SUPABASE_SERVICE_ROLE_KEY=your-secret
NEXT_PUBLIC_SITE_URL=https://theindianmalaysian.my
```

### 4. Install and Run

```bash
npm install
npm run dev
```

### 5. Create Admin User

In Supabase Auth, create user then run:
```sql
UPDATE public.profiles SET role = 'admin' WHERE email = 'your@email.com';
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Domain Setup

1. Register theindianmalaysian.my at mynic.my or Exabytes
2. In Vercel, add domain
3. Add DNS records at registrar

## User Roles

- Admin: Full access
- Editor: Manage all content
- Contributor: Create draft articles
- Member: View and subscribe

## License

Copyright 2026 The Indian Malaysian
