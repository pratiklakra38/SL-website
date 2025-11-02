import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { handleSignUp, handleSignIn } from "./routes/auth"

dotenv.config()

export function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.post("/api/auth/signup", handleSignUp)
  app.post("/api/auth/login", handleSignIn)
  app.get("/api/test", handleTest)
  app.get("/api/users", fetchUsers)

  return app
}



// TESTING SUPABASE CONNECTION
import { supabase } from "./supabaseService"

const handleTest = async (req, res) => {
  const { data, error } = await supabase.from("testing").select("*")
  if (error) return res.status(500).json({ error: error.message })
  res.json({ data })
}

const fetchUsers = async (req, res) => {
  const { data, error } = await supabase.auth.admin.listUsers()
  if (error) return res.status(500).json({ error: error.message })
  const emails = data.users.map(user => user.email)
  res.json({ emails })
}
