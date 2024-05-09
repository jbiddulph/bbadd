import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlbWFmZWhwb2tua2Jlamxia3NhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNTI2Nzk4MywiZXhwIjoyMDMwODQzOTgzfQ.4NfTOLlIv1qCs_wBP2bt0i1SbyYV84h6HVp55oV2s54"
const SUPABASE_URL = 'https://qemafehpoknkbejlbksa.supabase.co'
// const supabaseKey = process.env.SUPABASE_KEY

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return supabase
}
export default useSupabase;