import { supabase } from "../supabaseService.js"
import fs from "fs"

export async function createCourse(req, res) {
  console.log("Body:", req.body);
  console.log("File:", req.file);

  try {
    const { title, description, category, level, instructorId } = req.body
    const thumbnailFile = req.file

    if (!title || !category || !level || !instructorId)
      return res.status(400).json({ error: "Missing required fields" })

    if (!thumbnailFile)
      return res.status(400).json({ error: "Thumbnail file missing" })

    const filePath = `courses/${Date.now()}_${thumbnailFile.originalname}`

    console.log("Uploading to Supabase storage...");
    const { error: uploadError } = await supabase.storage
      .from("course-thumbnails")
      .upload(filePath, fs.readFileSync(thumbnailFile.path), {
        contentType: thumbnailFile.mimetype,
      })

    console.log("Upload error:", uploadError);

    fs.unlinkSync(thumbnailFile.path)

    if (uploadError) return res.status(400).json({ error: uploadError.message })

    const thumbnailUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/course-thumbnails/${filePath}`

    console.log("Inserting into courses table...");
    const { data, error } = await supabase
      .from("courses")
      .insert([
        {
          title,
          description,
          category,
          level,
          thumbnail_url: thumbnailUrl,
          instructor_id: instructorId,
        },
      ])
      .select()
      .single()

    console.log("Insert error:", error);

    if (error) return res.status(400).json({ error: error.message })

    res.json({ message: "Course created successfully", course: data })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export async function getCourses(req, res) {
  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*, profiles(full_name)")

    if (error) return res.status(400).json({ error: error.message })

    res.json({ courses: data })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export async function getCourseById(req, res) {
  try {
    const { id } = req.params

    const { data, error } = await supabase
      .from("courses")
      .select("*, profiles(full_name)")
      .eq("id", id)
      .single()

    if (error) return res.status(400).json({ error: error.message })

    res.json({ course: data })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
