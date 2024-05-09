import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = process.env.SUPABASE_KEY
const SUPABASE_URL = process.env.SUPABASE_URL
// const supabaseKey = process.env.SUPABASE_KEY

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return supabase
}
export default useSupabase;