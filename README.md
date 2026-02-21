# Coner Waitlisting Landing Page

A modern, minimal landing page for Coner, built with React, Tailwind CSS 4, and Framer Motion.

## Features
- **Responsive Navbar**: Glass effect with active scroll states.
- **Hero Section**: High-impact headline and subtext with CRM integration indicators.
- **Animated Features**: Grid of key offerings with smooth hover interactions.
- **Functional Waitlist Form**: Integrated with Supabase for data capture.
- **Pricing Toggles**: Monthly and Annual plans with elegant cards.
- **Accordion FAQs**: Clean interaction for common questions.
- **Premium Footer**: Dark theme with social links and final CTA.

## Tech Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase

## Setup Instructions

### 1. Supabase Configuration
1. Create a project at [supabase.com](https://supabase.com).
2. Go to the SQL Editor and run the following script to create the waitlist table:

```sql
create table waitlist_responses (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  role text not null,
  current_method text,
  used_chatbot boolean default false,
  dislikes text[],
  website text,
  willing_to_pay text not null
);

-- Enable RLS (Optional/Recommended)
alter table waitlist_responses enable row level security;

-- Create policy to allow inserts from anyone (for the public waitlist)
create policy "Enable insert for everyone" on waitlist_responses 
  for insert with check (true);
```

3. Copy your **Supabase URL** and **Anon Key** from Project Settings > API.
4. Update `src/lib/supabase.js` or create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 2. Development
```bash
npm install
npm run dev
```

### 3. Deployment
The project is ready to be deployed as a static site on Vercel, Netlify, or similar platforms.
```bash
npm run build
```

## Styling Customization
The primary colors and fonts are defined in `src/index.css`.
- Primary Color: `#6C63FF`
- Secondary: `#F4F4F5`
- Fonts: Inter, Outfit
