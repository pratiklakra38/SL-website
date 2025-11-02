# Image and Video Upload Guide

## Where to Upload Files

### 📸 Course Thumbnails (for CourseCard)

**Location:** `/public/images/course-thumbnails/`

**Steps to Upload:**
1. Create a folder structure: `public/images/course-thumbnails/`
2. Upload your thumbnail images (JPG, PNG, or WebP format)
3. Recommended size: **800x450 pixels** (16:9 aspect ratio)
4. Maximum file size: **2MB per image**
5. Naming convention: Use descriptive names like `mridanga-level-1.jpg`

**How to Update in Code:**
- Update `constants.ts` file
- Find the course in `COURSES_DATA` array
- Change the `thumbnail` property from placeholder URL to your local path:

```typescript
{
  id: 1,
  title: 'Mridanga Traditional Gaudiya Style – Level 1',
  thumbnail: '/images/course-thumbnails/mridanga-level-1.jpg', // Update this
  // ... other properties
}
```

---

### 🎥 Video Files (for Course Modules)

**Location:** Two options available:

#### Option 1: Local Storage (Development)
**Folder:** `/public/videos/course-modules/`

**Steps:**
1. Create folder: `public/videos/course-modules/`
2. Upload video files (MP4, WebM, or OGG format)
3. Recommended format: **MP4 (H.264 codec)**
4. Maximum file size: **500MB per video** (as configured in UploadModulesPage)

#### Option 2: Cloud Storage (Production - Recommended)
**Services:** Firebase Storage, AWS S3, or Cloudinary

**For Firebase Storage (recommended):**
1. Set up Firebase Storage in your project
2. Upload videos through the mentor dashboard: `/mentor/course/:id/modules`
3. The system will automatically store the video URL in the database

**How to Update:**
- Videos are uploaded through the **Upload Modules Page** (`/mentor/course/:id/modules`)
- Go to Mentor Dashboard → Select Course → Click "Modules" → Add Module → Upload Video
- The video URL will be automatically saved when you submit the module

---

### 📋 Current Implementation

**Course Thumbnails:**
- Currently using placeholder images from `picsum.photos`
- Located in: `constants.ts` → `COURSES_DATA` array
- Example: `thumbnail: 'https://picsum.photos/seed/mridanga1/800/450'`

**Videos:**
- Currently using placeholder YouTube URLs
- Located in: `pages/CourseLearningPage.tsx` → `modules` array
- Example: `videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'`

---

### 🔄 Migration Steps

#### To Replace Course Thumbnails:

1. **Upload Images:**
   ```bash
   # Create directory if it doesn't exist
   mkdir -p public/images/course-thumbnails
   
   # Copy your thumbnail images to this folder
   # Example: mridanga-level-1.jpg, kartal-level-2.jpg, etc.
   ```

2. **Update constants.ts:**
   ```typescript
   export const COURSES_DATA: Course[] = [
     {
       id: 1,
       title: 'Mridanga Traditional Gaudiya Style – Level 1',
       thumbnail: '/images/course-thumbnails/mridanga-level-1.jpg', // Changed
       // ... rest of the course data
     },
     // ... other courses
   ];
   ```

#### To Replace Video URLs:

1. **For Local Videos:**
   - Upload videos to `/public/videos/course-modules/`
   - In `CourseLearningPage.tsx`, update module videoUrl:
   ```typescript
   videoUrl: '/videos/course-modules/introduction-to-mridanga.mp4'
   ```

2. **For Cloud Storage (Firebase/Cloudinary):**
   - Upload through the mentor dashboard interface
   - Or update the database directly with the cloud storage URL

---

### 📁 Recommended Folder Structure

```
public/
├── images/
│   ├── course-thumbnails/     ← Course card images go here
│   │   ├── mridanga-level-1.jpg
│   │   ├── mridanga-level-2.jpg
│   │   └── kartal-level-1.jpg
│   └── ...
├── videos/
│   └── course-modules/        ← Video files go here (if using local storage)
│       ├── module-1-intro.mp4
│       ├── module-2-hand-positions.mp4
│       └── ...
└── ...
```

---

### 💡 Tips

1. **Image Optimization:**
   - Use WebP format for better compression
   - Compress images before uploading (use tools like TinyPNG)
   - Maintain consistent aspect ratio (16:9 for thumbnails)

2. **Video Optimization:**
   - Use H.264 codec for best browser compatibility
   - Consider multiple quality levels (720p, 1080p)
   - For large videos, consider using a CDN or video hosting service

3. **Production Setup:**
   - Don't commit large video files to git
   - Use `.gitignore` to exclude video files
   - Set up automated backups for uploaded content

---

### 🚀 Quick Reference

| Asset Type | Location | Format | Max Size | Update Method |
|------------|----------|--------|----------|---------------|
| Course Thumbnails | `/public/images/course-thumbnails/` | JPG/PNG/WebP | 2MB | Edit `constants.ts` |
| Module Videos | `/public/videos/course-modules/` or Cloud Storage | MP4/WebM | 500MB | Upload via Mentor Dashboard |

---

**Note:** For production environments, it's highly recommended to use cloud storage services (Firebase Storage, AWS S3, or Cloudinary) instead of local file storage for better performance and scalability.

