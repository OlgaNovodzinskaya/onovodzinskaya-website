import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);

export default supabase;

export const getAllFlats = async <T>() => {
  const { data, error } = await supabase.from("flats").select("*");

  if (error) throw error;

  return data;
};
