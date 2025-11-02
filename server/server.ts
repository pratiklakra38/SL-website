import express from "express"
import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

const PORT = 5000
const SUPABASE_URL = process.env.SUPABASE_URL!
const SUPABASE_KEY = process.env.SUPABASE_ADMIN_KEY!

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)



app.get("/", (req, res) => {
  res.send("Server running ✅")
})

app.get("/testsupabase", async (req, res) => {
  const { data, error } = await supabase.from("testing").select("*").limit(1)
  if (error) return res.status(500).json({ error: error.message })
  res.json({ data })
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
