import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const navigate = useNavigate();

  // Mock data - replace with actual data from API
  const userName = 'Ojas Verma';
  const userEmail = 'ojasverma01@gmail.com';
  const userImage = '/images/student.jpg';

  const mockCourses = [
    {
      id: 1,
      title: 'Mridanga Traditional Gaudiya Style – Level 1',
      thumbnail: '/images/mrindanga lesson-1 .jpg',
      progress: 65,
      lastViewed: 'Module 5: Advanced Strokes',
    },
    {
      id: 2,
      title: 'Kartal Level 1 – Hand Techniques',
      thumbnail: 'images/kartal-lesson-1.jpg',
      progress: 40,
      lastViewed: 'Module 3: Basic Patterns',
    },
  ];

  const recommendedCourses = [
    {
      id: 3,
      title: 'Mridanga Level 2 – Intermediate Patterns',
      thumbnail: '/images/mridanga-lesson-2.jpg',
      level: 'Intermediate',
    },
    {
      id: 4,
      title: 'Traditional Gaudiya Style – Complete Module',
      thumbnail: 'https://picsum.photos/seed/gaudiya/300/200',
      level: 'All Levels',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 fixed h-screen overflow-y-auto">
        <div className="flex flex-col items-center mb-8 pb-8 border-b border-gray-800">
          <img
            src={userImage}
            alt={userName}
            className="w-20 h-20 rounded-full mb-4 border-2 border-gray-700"
          />
          <h3 className="font-bold text-white text-lg">{userName}</h3>
          <p className="text-sm text-gray-400">{userEmail}</p>
        </div>

        <nav className="space-y-2">
          <button
            onClick={() => setActiveMenu('dashboard')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === 'dashboard'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </button>
          <button
            onClick={() => setActiveMenu('my-courses')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === 'my-courses'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            My Courses
          </button>
          <button
            onClick={() => setActiveMenu('browse')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === 'browse'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Browse Courses
          </button>
          <button
            onClick={() => setActiveMenu('progress')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === 'progress'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            My Progress
          </button>
          <button
            onClick={() => setActiveMenu('certificates')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === 'certificates'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Certificates
          </button>
          <button
            onClick={() => setActiveMenu('settings')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === 'settings'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 text-gray-300 hover:bg-gray-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-brand-orange to-amber-500 rounded-lg p-8 mb-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userName}!</h1>
            <p className="text-white/90">Continue your spiritual learning journey</p>
          </div>

          {/* Continue Learning */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Continue Learning</h2>
            {mockCourses.length > 0 && (
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={mockCourses[0].thumbnail}
                    alt={mockCourses[0].title}
                    className="w-full md:w-64 h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{mockCourses[0].title}</h3>
                    <p className="text-gray-400 mb-4">{mockCourses[0].lastViewed}</p>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm font-semibold text-white">{mockCourses[0].progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-brand-orange to-amber-500 h-2 rounded-full transition-all"
                          style={{ width: `${mockCourses[0].progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link
                      to={`/learn/course/${mockCourses[0].id}`}
                      className="inline-block bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Resume
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* My Courses */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">My Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Progress</span>
                        <span className="text-sm font-semibold text-white">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-brand-orange to-amber-500 h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <Link
                      to={`/learn/course/${course.id}`}
                      className="block w-full text-center bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended Courses */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">{course.level}</p>
                    <Link
                      to={`/course/${course.id}`}
                      className="block w-full text-center bg-transparent border-2 border-brand-orange text-brand-orange font-bold py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-brand-orange hover:to-amber-500 hover:text-white transition-all"
                    >
                      View Course
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

