import { supabase } from "../supabaseService"

export async function handleSignUp(req, res) {
  const { email, password, fullName, role } = req.body

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
  })

  if (signUpError) return res.status(400).json({ error: signUpError.message })

  const user = signUpData.user
  if (!user) return res.status(500).json({ error: "User not returned from signup" })

  const { error: profileError } = await supabase.from("profiles").insert([
    { 
      id: user.id,
      full_name: fullName,
      role: role || "student"
    },
  ])

  if (profileError) return res.status(400).json({ error: profileError.message })

  res.json({ message: "Signup successful", user })
}

export async function handleSignIn(req, res) {
  const { email, password } = req.body

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return res.status(400).json({ error: error.message })

  const user = data.user
  if (!user) return res.status(500).json({ error: "User not returned from login" })

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .single()

  if (profileError) return res.status(400).json({ error: profileError.message })

  res.json({
    data: {
      email: user.email,
      full_name: profile?.full_name || "User",
      role: profile?.role || "student",
    },
  })
}