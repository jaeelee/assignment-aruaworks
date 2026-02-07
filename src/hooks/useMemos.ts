import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import type { Memo } from "../lib/supabase";

async function fetchMemos(): Promise<Memo[]> {
  const url = import.meta.env.VITE_SUPABASE_URL;
  if (!url?.trim()) {
    throw new Error("SUPABASE_URL is not set");
  }
  const { data, error } = await supabase
    .from("memos")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    if (error.code === "PGRST116" || error.message?.includes("relation")) {
      throw new Error("Failed to fetch memos");
    }
    throw error;
  }
  return (data ?? []) as Memo[];
}

export function useMemos() {
  return useQuery({
    queryKey: ["memos"],
    queryFn: fetchMemos,
    staleTime: 60 * 1000,
  });
}

export function formatRelativeTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const days = Math.floor(diffMs / (24 * 60 * 60 * 1000));
  if (days === 0) return "오늘";
  if (days < 7) return `${days}일 전`;
  if (days < 30) return `${Math.floor(days / 7)}주 전`;
  return `${Math.floor(days / 30)}개월 전`;
}
