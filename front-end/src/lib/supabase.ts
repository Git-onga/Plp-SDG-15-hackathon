import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  avatar_url?: string | null;
  eco_points: number;
  badge_survival: number;
  badge_volunteer: number;
  badge_funding: number;
  created_at: string;
  role: "student" | "organization" | "volunteer";
  progress_level: number;
  updated_at: string;
};

export type Activity = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string; // e.g., 'cleanup', 'planting', 'recycling'
  points_earned: number;
  location: string | null;
  image_url: string | null;
  visibility: "public" | "private";
  created_at: string;
  profiles?: Profile;
};

export type Park = {
  id: string;
  name: string;
  description: string;
  location: string;
  image_url: string;
  category: string;
  created_at: string;
};

export type Contribution = {
  id: string;
  user_id: string;
  type: string;
  description: string;
  impact: string | null;
  created_at: string;
};
