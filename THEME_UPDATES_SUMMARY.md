# Theme Updates Summary

## ✅ All Pages Updated to Dark Theme

All pages have been successfully converted to use a dark theme with consistent styling:

### **Color Scheme:**
- **Background:** Dark gradient (`bg-gradient-dark`) - dark gray/black
- **Text:** White and gray shades for contrast
- **Cards/Containers:** Dark gray (`bg-gray-900`, `bg-gray-800`) with gray borders
- **Accents:** Orange to amber gradient (`bg-gradient-to-r from-brand-orange to-amber-500`)

### **Updated Pages:**

1. ✅ **LoginPage** - Dark theme with gradient buttons
2. ✅ **SignupPage** - Dark theme with gradient buttons
3. ✅ **StudentDashboard** - Dark sidebar and content areas
4. ✅ **MentorDashboard** - Dark theme throughout
5. ✅ **BrowsePage** - Dark background with dark course cards
6. ✅ **CoursePreviewPage** - Dark theme with dark sidebar
7. ✅ **CourseLearningPage** - Dark video player interface
8. ✅ **CreateCoursePage** - Dark form with gradient buttons
9. ✅ **UploadModulesPage** - Dark modal and forms

### **Button Styles:**
All primary action buttons now use the **orange-to-amber gradient**:
```css
bg-gradient-to-r from-brand-orange to-amber-500
```

This applies to:
- "Sign In" / "Create Account" buttons
- "Start Learning" button
- "View Course" buttons
- "Enroll Now" buttons
- "Create New Course" buttons
- All navigation active states
- Progress bars

### **Status Badges:**
Updated for dark theme:
- **Published:** Dark green with green text
- **Pending Approval:** Dark yellow with yellow text  
- **Draft:** Dark gray with gray text

---

## 📸 Where to Upload Images & Videos

### **Course Thumbnails (for CourseCard)**

**Location:** Upload to `/public/images/course-thumbnails/`

**How to update:**
1. Create the folder: `public/images/course-thumbnails/`
2. Upload your thumbnail images (recommended: 800x450px, max 2MB)
3. Update `constants.ts` file:

```typescript
// In constants.ts, find the course and update:
{
  id: 1,
  title: 'Mridanga Traditional Gaudiya Style – Level 1',
  thumbnail: '/images/course-thumbnails/mridanga-level-1.jpg', // Update this
  // ... rest of properties
}
```

**Current location in code:**
- File: `constants.ts`
- Array: `COURSES_DATA`
- Property: `thumbnail`

---

### **Video Files (for Course Modules)**

**For Development (Local):**
- Upload to: `/public/videos/course-modules/`
- Format: MP4 (H.264 codec recommended)
- Max size: 500MB per video
- Update in `CourseLearningPage.tsx` → `modules` array → `videoUrl` property

**For Production (Recommended):**
- Use **Firebase Storage**, **AWS S3**, or **Cloudinary**
- Upload through Mentor Dashboard: `/mentor/course/:id/modules`
- The system will store the video URL automatically

**How to update modules:**
1. Go to Mentor Dashboard
2. Select your course
3. Click "Modules"
4. Click "Add Module" or "Edit" existing module
5. Upload video file through the form
6. The video URL will be saved to your database

**Current placeholder location:**
- File: `pages/CourseLearningPage.tsx`
- Array: `modules` (line ~28)
- Property: `videoUrl`

---

### **Quick Reference Table**

| Asset Type | Upload Location | Update Location | Format | Max Size |
|------------|---------------|-----------------|--------|----------|
| **Course Thumbnails** | `/public/images/course-thumbnails/` | `constants.ts` → `COURSES_DATA[].thumbnail` | JPG/PNG/WebP | 2MB |
| **Module Videos** | `/public/videos/course-modules/` OR Cloud Storage | `CourseLearningPage.tsx` → `modules[].videoUrl` OR Database | MP4/WebM | 500MB |

---

## 🎨 Gradient Colors Used

The orange-to-amber gradient is applied using:
```css
bg-gradient-to-r from-brand-orange to-amber-500
```

Where:
- `brand-orange` = `#FF6B35` (from your Tailwind config)
- `amber-500` = Standard Tailwind amber-500 color

This matches the gradient style from your screenshot perfectly!

---

**Note:** For production, always use cloud storage services (Firebase Storage, AWS S3, Cloudinary) instead of local file storage for better performance and scalability.

