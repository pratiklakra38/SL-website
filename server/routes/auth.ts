import { supabase } from "../supabaseService"

export async function handleTestSupabase(req, res) {
  const { data, error } = await supabase.from("testing").select("*").limit(1)
  if (error) return res.status(500).json({ error: error.message })
  res.json({ data })
}

export async function handleSignUp(req, res) {
  const { email, password } = req.body
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) return res.status(400).json({ error: error.message })
  res.json({ data })
}

export async function handleSignIn(req, res) {
  const { email, password } = req.body
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return res.status(400).json({ error: error.message })
  res.json({ data })
}