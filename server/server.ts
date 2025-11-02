import express from "express"
import { createClient } from "@supabase/supabase-js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ADMIN_KEY!
)

// app.get("/", (req, res) => {
//   res.send("Server running ✅")
// })

// app.get("/testsupabase", async (req, res) => {
//   const { data, error } = await supabase.from("testing").select("*").limit(1)
//   if (error) return res.status(500).json({ error: error.message })
//   res.json({ data })
// })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

setInterval(() => {}, 1000)
