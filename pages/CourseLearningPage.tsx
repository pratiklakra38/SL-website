import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

interface Module {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
  completed: boolean;
  unlocked: boolean;
  notes?: string;
  resources?: string[];
  thumbnail?: string;
}

const CourseLearningPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentModule, setCurrentModule] = useState(0);
  const [currentTab, setCurrentTab] = useState<'overview' | 'resources' | 'discussion'>('overview');
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const playerRef = useRef<any>(null);

  // Mock modules data - replace with API call
  const modules: Module[] = [
    {
      id: 1,
      title: 'Introduction to Mridanga',
      description: 'Learn the basics of mridanga and its importance in kirtan.',
      videoUrl: 'https://www.youtube.com/watch?v=_BFjimr2rrQ',
      duration: '15:30',
      order: 1,
      completed: true,
      unlocked: true,
      thumbnail: '/images/mridanga_lesson-1_preview_thumbnail.jpg',
      notes: '# Introduction to Mridanga\n\nMridanga is a traditional Indian drum used in kirtan...',
      resources: ['mridanga-basics.pdf', 'hand-position-guide.pdf'],
    },
    {
      id: 2,
      title: 'Hand Positions',
      description: 'Master the proper hand positions for playing mridanga.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '12:45',
      order: 2,
      completed: false,
      unlocked: true,
      notes: '# Hand Positions\n\nProper hand positioning is crucial for...',
      resources: ['hand-positions.pdf'],
    },
    {
      id: 3,
      title: 'Basic Strokes',
      description: 'Learn the fundamental strokes of mridanga playing.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '18:20',
      order: 3,
      completed: false,
      unlocked: true,
    },
    {
      id: 4,
      title: 'Advanced Patterns',
      description: 'Master complex rhythmic patterns.',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '20:15',
      order: 4,
      completed: false,
      unlocked: false,
    },
  ];

  const currentModuleData = modules[currentModule];
  const courseProgress = Math.round((modules.filter(m => m.completed).length / modules.length) * 100);

  useEffect(() => {
    // Load saved playback position
    const savedTime = localStorage.getItem(`course-${id}-module-${currentModuleData.id}`);
    if (savedTime) {
      setPlayedSeconds(parseFloat(savedTime));
      if (playerRef.current) {
        playerRef.current.seekTo(parseFloat(savedTime));
      }
    }
  }, [currentModule, id, currentModuleData.id]);

  const handleProgress = (state: any) => {
  const seconds = state.playedSeconds
  setPlayedSeconds(seconds)
  if (Math.floor(seconds) % 10 === 0) {
    localStorage.setItem(`course-${id}-module-${currentModuleData.id}`, seconds.toString())
  }
  const duration = playerRef.current?.getDuration() || 0
  if (duration > 0 && seconds / duration >= 0.9 && !currentModuleData.completed) {
    setIsCompleted(true)
    modules[currentModule].completed = true
  }
}


  const handleComplete = () => {
    modules[currentModule].completed = true;
    setIsCompleted(true);
    // Unlock next module
    if (currentModule < modules.length - 1) {
      modules[currentModule + 1].unlocked = true;
    }
  };

  const handleNextModule = () => {
    if (currentModule < modules.length - 1 && modules[currentModule + 1].unlocked) {
      setCurrentModule(currentModule + 1);
      setPlayedSeconds(0);
      setIsCompleted(false);
    }
  };

  const handlePreviousModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
      setPlayedSeconds(0);
      setIsCompleted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark flex">
      {/* Left Panel - Video Player */}
      <div className="flex-1 p-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
          {/* Video Player */}
          <div className="relative bg-black rounded-lg overflow-hidden mb-6" style={{ paddingTop: '56.25%' }}>
      <ReactPlayer
        ref={playerRef}
        url={currentModuleData.videoUrl}
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
        controls
        playbackRate={playbackRate}
        onProgress={handleProgress}
        light={currentModuleData.thumbnail || false}
        // 👇👇👇 FINAL FIX IS HERE 👇👇👇
        config={{
          youtube: {
            playerVars: {
              controls: 1,
              modestbranding: 1,
            },
          },
        } as any} // <- Assert the ENTIRE config object as 'any'
      />
    </div>

          {/* Video Controls */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2">
              <label className="text-gray-300 font-semibold">Speed:</label>
              <select
                value={playbackRate}
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white"
              >
                <option value={0.5}>0.5x</option>
                <option value={0.75}>0.75x</option>
                <option value={1}>1x</option>
                <option value={1.25}>1.25x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
            </div>
          </div>

          {/* Module Title & Description */}
          <h2 className="text-2xl font-bold text-white mb-2">{currentModuleData.title}</h2>
          <p className="text-gray-400 mb-6">{currentModuleData.description}</p>

          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-4">
            <button
              onClick={() => setCurrentTab('overview')}
              className={`px-4 py-2 font-semibold transition-colors ${
                currentTab === 'overview'
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setCurrentTab('resources')}
              className={`px-4 py-2 font-semibold transition-colors ${
                currentTab === 'resources'
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setCurrentTab('discussion')}
              className={`px-4 py-2 font-semibold transition-colors ${
                currentTab === 'discussion'
                  ? 'text-brand-orange border-b-2 border-brand-orange'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Discussion
            </button>
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            {currentTab === 'overview' && (
              <div className="prose prose-invert max-w-none">
                {currentModuleData.notes ? (
                  <div className="text-gray-300 whitespace-pre-line">{currentModuleData.notes}</div>
                ) : (
                  <p className="text-gray-400">No notes available for this module.</p>
                )}
              </div>
            )}
            {currentTab === 'resources' && (
              <div>
                {currentModuleData.resources && currentModuleData.resources.length > 0 ? (
                  <ul className="space-y-2">
                    {currentModuleData.resources.map((resource, idx) => (
                      <li key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <span className="text-gray-300">{resource}</span>
                        <button className="text-brand-orange hover:underline">Download</button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-400">No resources available for this module.</p>
                )}
              </div>
            )}
            {currentTab === 'discussion' && (
              <div>
                <p className="text-gray-400">Discussion feature coming soon!</p>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
            <button
              onClick={handlePreviousModule}
              disabled={currentModule === 0}
              className={`px-6 py-2 rounded-lg font-semibold transition-opacity ${
                currentModule === 0
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-brand-orange to-amber-500 text-white hover:opacity-90'
              }`}
            >
              Previous Module
            </button>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="complete"
                checked={isCompleted || currentModuleData.completed}
                onChange={handleComplete}
                className="w-5 h-5 text-brand-orange border-gray-600 rounded focus:ring-brand-orange"
              />
              <label htmlFor="complete" className="text-gray-300 font-semibold">
                Mark as Complete
              </label>
            </div>

            <button
              onClick={handleNextModule}
              disabled={currentModule === modules.length - 1 || !modules[currentModule + 1]?.unlocked}
              className={`px-6 py-2 rounded-lg font-semibold transition-opacity ${
                currentModule === modules.length - 1 || !modules[currentModule + 1]?.unlocked
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-brand-orange to-amber-500 text-white hover:opacity-90'
              }`}
            >
              Next Module
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Course Sidebar */}
      <div className="w-96 bg-gray-900 border-l border-gray-800 p-6 overflow-y-auto" style={{ maxHeight: '100vh' }}>
        <Link
          to="/learn/dashboard"
          className="inline-flex items-center text-gray-300 hover:text-brand-gold mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </Link>

        <h2 className="text-2xl font-bold text-white mb-2">Mridanga Level 1</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Course Progress</span>
            <span className="text-sm font-semibold text-white">{courseProgress}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-brand-orange to-amber-500 h-2 rounded-full transition-all"
              style={{ width: `${courseProgress}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-4">Modules</h3>
        <div className="space-y-2">
          {modules.map((module, idx) => (
            <button
              key={module.id}
              onClick={() => {
                if (module.unlocked) {
                  setCurrentModule(idx);
                  setPlayedSeconds(0);
                  setIsCompleted(module.completed);
                }
              }}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                idx === currentModule
                  ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                  : module.unlocked
                  ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                  : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {!module.unlocked && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                  {module.completed && module.unlocked && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {idx === currentModule && module.unlocked && !module.completed && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span className="font-semibold">{module.title}</span>
                </div>
                <span className="text-sm opacity-75">{module.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLearningPage;

