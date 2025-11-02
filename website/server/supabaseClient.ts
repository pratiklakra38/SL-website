import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient('https://your-project-id.supabase.co', 'your-anon-key');

export default supabase;