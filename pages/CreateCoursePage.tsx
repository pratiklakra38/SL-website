import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateCoursePage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    thumbnail: null as File | null,
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (step < 3) {
    setStep(step + 1);
    return;
  }

  if (!formData.thumbnail) {
    alert("Please upload a thumbnail");
    return;
  }

  const instructorId = localStorage.getItem("userId");

  const form = new FormData();
  form.append("title", formData.title);
  form.append("description", formData.description);
  form.append("category", formData.category);
  form.append("level", formData.level);
  form.append("thumbnail", formData.thumbnail as Blob);
  form.append("instructorId", instructorId || "");


  try {
    const res = await fetch("http://localhost:3000/api/courses/create", {
      method: "POST",
      body: form,
      duplex: "half",
    } as any);

    const data = await res.json();

    if (!res.ok) throw new Error(data.error || "Failed to create course");

    navigate(`/mentor/course/${data.course.id}/modules`);
  } catch (err) {
    console.error(err);
    alert("Error creating course");
  }
};

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <Link
            to="/mentor/dashboard"
            className="inline-flex items-center text-gray-300 hover:text-brand-gold mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-white font-heading">Create New Course</h1>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      s === step
                        ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                        : s < step
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-800 text-gray-400 border-2 border-gray-700'
                    }`}
                  >
                    {s < step ? '✓' : s}
                  </div>
                  <span
                    className={`ml-2 font-semibold ${
                      s === step ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {s === 1 ? 'Basic Info' : s === 2 ? 'Pricing' : 'Review'}
                  </span>
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      s < step ? 'bg-green-500' : 'bg-gray-800'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Step 1: Basic Information</h2>

              <div>
                <label className="block text-gray-300 font-semibold mb-2">Course Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Mridanga Traditional Gaudiya Style – Level 1"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe what students will learn..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2">Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  required
                >
                  <option value="">Select category</option>
                  <option value="Mridanga">Mridanga</option>
                  <option value="Kartal">Kartal</option>
                  <option value="Combined">Combined</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2">Level *</label>
                <select
                  value={formData.level}
                  onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  required
                >
                  <option value="">Select level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="All Levels">All Levels</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-2">Thumbnail *</label>
                <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({ ...formData, thumbnail: e.target.files[0] });
                      }
                    }}
                    className="hidden"
                    id="thumbnail"
                    required
                  />
                  <label
                    htmlFor="thumbnail"
                    className="cursor-pointer inline-block bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Upload Thumbnail
                  </label>
                  {formData.thumbnail && (
                    <p className="mt-2 text-gray-400 text-sm">{formData.thumbnail.name}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Step 2: Pricing & Settings</h2>
              <p className="text-gray-400">Pricing configuration will be added here (currently simplified)</p>
              <p className="text-gray-400">You can set pricing after course creation.</p>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-6">Step 3: Review & Submit</h2>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 space-y-4">
                <div>
                  <span className="font-semibold text-white">Title:</span>
                  <p className="text-gray-300">{formData.title}</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Category:</span>
                  <p className="text-gray-300">{formData.category}</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Level:</span>
                  <p className="text-gray-300">{formData.level}</p>
                </div>
                <div>
                  <span className="font-semibold text-white">Description:</span>
                  <p className="text-gray-300">{formData.description}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
            <button
              type="button"
              onClick={() => step > 1 && setStep(step - 1)}
              disabled={step === 1}
              className={`px-6 py-2 rounded-lg font-semibold transition-opacity ${
                step === 1
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-800 border-2 border-gray-700 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Previous
            </button>
            <div className="flex gap-4">
              {step === 3 && (
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-800 border-2 border-gray-700 text-gray-300 font-bold rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Save as Draft
                </button>
              )}
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
              >
                {step === 3 ? 'Submit for Approval' : 'Next'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCoursePage;