import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Memo = {
  id: string;
  username: string;
  title: string | null;
  author: string | null;
  work_title: string;
  content: string;
  created_at: string;
  likes_count: number;
  comments_count: number;
};
