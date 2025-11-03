import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import multer from "multer";
import { handleSignUp, handleSignIn } from "./routes/auth"
import { createCourse, getCourses, getCourseById } from "./routes/courses";

dotenv.config()

const upload = multer({ dest: "uploads/" });

export function createServer() 
{
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // AUTH ROUTES
  app.post("/api/auth/signup", handleSignUp)
  app.post("/api/auth/login", handleSignIn)

  // COURSE ROUTES
  app.post("/api/courses/create", upload.single("thumbnail"), createCourse)
  app.get("/api/courses/courses", getCourses)
  app.get("/api/courses/coursebyid", getCourseById)

  // TESTING ROUTES
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
