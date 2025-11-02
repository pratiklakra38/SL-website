import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()

const PORT = 5000
const SUPABASE_URL = process.env.SUPABASE_URL!
const SUPABASE_KEY = process.env.SUPABASE_ADMIN_KEY!

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)