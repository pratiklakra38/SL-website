import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Module {
  id: number;
  title: string;
  description: string;
  order: number;
  videoUrl: string;
  notes: string;
  resources: string[];
  isPreview: boolean;
}

const UploadModulesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: 'Introduction to Mridanga',
      description: 'Learn the basics',
      order: 1,
      videoUrl: '',
      notes: '',
      resources: [],
      isPreview: true,
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    video: null as File | null,
    notes: '',
    resources: [] as File[],
    isPreview: false,
    uploadProgress: 0,
  });

  const handleAddModule = () => {
    setEditingModule(null);
    setFormData({
      title: '',
      description: '',
      video: null,
      notes: '',
      resources: [],
      isPreview: false,
      uploadProgress: 0,
    });
    setShowModal(true);
  };

  const handleEditModule = (module: Module) => {
    setEditingModule(module);
    setFormData({
      title: module.title,
      description: module.description,
      video: null,
      notes: module.notes || '',
      resources: [],
      isPreview: module.isPreview,
      uploadProgress: 0,
    });
    setShowModal(true);
  };

  const handleSaveModule = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.video) {
      alert('Title and video are required');
      return;
    }

    // Simulate video upload
    setFormData({ ...formData, uploadProgress: 50 });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ ...formData, uploadProgress: 100 });

    const newModule: Module = {
      id: editingModule?.id || modules.length + 1,
      title: formData.title,
      description: formData.description,
      order: editingModule?.order || modules.length + 1,
      videoUrl: 'uploaded-video-url', // Replace with actual uploaded URL
      notes: formData.notes,
      resources: formData.resources.map((f) => f.name),
      isPreview: formData.isPreview,
    };

    if (editingModule) {
      setModules(modules.map((m) => (m.id === editingModule.id ? newModule : m)));
    } else {
      setModules([...modules, newModule]);
    }

    setShowModal(false);
    setFormData({
      title: '',
      description: '',
      video: null,
      notes: '',
      resources: [],
      isPreview: false,
      uploadProgress: 0,
    });
  };

  const handleReorder = (dragIndex: number, dropIndex: number) => {
    const newModules = [...modules];
    const [removed] = newModules.splice(dragIndex, 1);
    newModules.splice(dropIndex, 0, removed);
    newModules.forEach((m, idx) => {
      m.order = idx + 1;
    });
    setModules(newModules);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
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
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white font-heading mb-2">Course Modules</h1>
              <p className="text-gray-400">Manage modules for your course</p>
            </div>
            <button
              onClick={handleAddModule}
              className="bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Add Module
            </button>
          </div>
        </div>

        {/* Modules List */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Existing Modules</h2>
          {modules.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No modules yet. Click "Add Module" to get started.</p>
          ) : (
            <div className="space-y-4">
              {modules
                .sort((a, b) => a.order - b.order)
                .map((module, idx) => (
                  <div
                    key={module.id}
                    className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex items-center justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-orange to-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                        {module.order}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white">{module.title}</h3>
                        <p className="text-sm text-gray-400">{module.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          {module.isPreview && (
                            <span className="text-xs bg-green-900 text-green-300 border border-green-700 px-2 py-1 rounded">
                              Preview
                            </span>
                          )}
                          <span className="text-xs text-gray-400">
                            {module.videoUrl ? 'Video uploaded' : 'No video'}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditModule(module)}
                        className="px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Add/Edit Module Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {editingModule ? 'Edit Module' : 'Add New Module'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSaveModule} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Module Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Introduction to Mridanga"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what students will learn in this module..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Video Upload *</label>
                  <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          if (e.target.files[0].size > 500 * 1024 * 1024) {
                            alert('Video file must be less than 500MB');
                            return;
                          }
                          setFormData({ ...formData, video: e.target.files[0] });
                        }
                      }}
                      className="hidden"
                      id="video-upload"
                      required={!editingModule}
                    />
                    <label
                      htmlFor="video-upload"
                      className="cursor-pointer inline-block bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Upload Video (MP4, max 500MB)
                    </label>
                    {formData.video && (
                      <p className="mt-2 text-gray-400 text-sm">{formData.video.name}</p>
                    )}
                    {formData.uploadProgress > 0 && formData.uploadProgress < 100 && (
                      <div className="mt-4">
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-brand-orange to-amber-500 h-2 rounded-full transition-all"
                            style={{ width: `${formData.uploadProgress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-400 mt-2">Uploading... {formData.uploadProgress}%</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Module Notes (Markdown)</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="# Module Notes\n\nAdd detailed notes for this module..."
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Resources (Files)</label>
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      if (e.target.files) {
                        setFormData({
                          ...formData,
                          resources: Array.from(e.target.files),
                        });
                      }
                    }}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                  {formData.resources.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {formData.resources.map((file, idx) => (
                        <li key={idx} className="text-sm text-gray-400">{file.name}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="isPreview"
                    checked={formData.isPreview}
                    onChange={(e) => setFormData({ ...formData, isPreview: e.target.checked })}
                    className="w-4 h-4 text-brand-orange border-gray-600 rounded focus:ring-brand-orange mr-2"
                  />
                  <label htmlFor="isPreview" className="text-gray-300 font-semibold">
                    Is Preview? (Free access for all users)
                  </label>
                </div>

                <div className="flex justify-end gap-4 pt-6 border-t border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-gray-800 border-2 border-gray-700 text-gray-300 font-bold rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Save Module
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadModulesPage;

