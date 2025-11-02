import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { handleSignUp, handleSignIn, handleTestSupabase } from "./routes/auth"

dotenv.config()

export function createServer() {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get("/api/testsupabase", handleTestSupabase)
  app.post("/api/auth/signup", handleSignUp)
  app.post("/api/auth/login", handleSignIn)

  return app
}