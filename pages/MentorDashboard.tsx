import React from 'react';
import { Link } from 'react-router-dom';

const MentorDashboard: React.FC = () => {
  // Mock data - replace with API call
  const stats = {
    totalCourses: 8,
    totalStudents: 1243,
  };

  const myCourses = [
    {
      id: 1,
      title: 'Mridanga Traditional Gaudiya Style – Level 1',
      thumbnail: 'https://picsum.photos/seed/mridanga1/200/150',
      students: 456,
      status: 'Published',
      statusColor: 'bg-green-900 text-green-300 border border-green-700',
    },
    {
      id: 2,
      title: 'Kartal Level 1 – Hand Techniques',
      thumbnail: 'https://picsum.photos/seed/kartal1/200/150',
      students: 234,
      status: 'Published',
      statusColor: 'bg-green-900 text-green-300 border border-green-700',
    },
    {
      id: 3,
      title: 'Advanced Mridanga Techniques',
      thumbnail: 'https://picsum.photos/seed/advanced/200/150',
      students: 89,
      status: 'Pending Approval',
      statusColor: 'bg-yellow-900 text-yellow-300 border border-yellow-700',
    },
    {
      id: 4,
      title: 'Kirtan Masterclass',
      thumbnail: 'https://picsum.photos/seed/masterclass/200/150',
      students: 0,
      status: 'Draft',
      statusColor: 'bg-gray-700 text-gray-300 border border-gray-600',
    },
  ];

  const recentActivity = [
    { type: 'enrollment', message: 'Madhav Krishna Das enrolled in Mridanga Level 1', time: '2 hours ago' },
    { type: 'quiz', message: '5 students completed Module 2 quiz', time: '4 hours ago' },
    { type: 'review', message: 'New 5-star review for Kartal Level 1', time: '1 day ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white font-heading mb-2">Mentor Dashboard</h1>
            <p className="text-gray-400">Manage your courses and track student progress</p>
          </div>
          <Link
            to="/mentor/course/create"
            className="bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Create New Course
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-1">Total Courses</p>
                <p className="text-4xl font-bold text-white">{stats.totalCourses}</p>
              </div>
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-1">Total Students</p>
                <p className="text-4xl font-bold text-white">{stats.totalStudents.toLocaleString()}</p>
              </div>
              <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Courses Table */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">My Courses</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-gray-300 font-semibold">Thumbnail</th>
                      <th className="text-left py-3 text-gray-300 font-semibold">Title</th>
                      <th className="text-left py-3 text-gray-300 font-semibold">Students</th>
                      <th className="text-left py-3 text-gray-300 font-semibold">Status</th>
                      <th className="text-left py-3 text-gray-300 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myCourses.map((course) => (
                      <tr key={course.id} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                        <td className="py-4">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-16 h-12 object-cover rounded"
                          />
                        </td>
                        <td className="py-4">
                          <p className="font-semibold text-white">{course.title}</p>
                        </td>
                        <td className="py-4 text-gray-400">{course.students}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.statusColor}`}>
                            {course.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex gap-2">
                            <button className="text-brand-orange hover:underline text-sm">Edit</button>
                            <Link
                              to={`/mentor/course/${course.id}/modules`}
                              className="text-brand-orange hover:underline text-sm"
                            >
                              Modules
                            </Link>
                            <button className="text-brand-orange hover:underline text-sm">Analytics</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions & Recent Activity */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/mentor/course/create"
                  className="block w-full bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity text-center"
                >
                  Create New Course
                </Link>
                <button className="block w-full bg-gray-800 border-2 border-gray-700 text-gray-300 font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  Upload Module
                </button>
                <button className="block w-full bg-gray-800 border-2 border-gray-700 text-gray-300 font-bold py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                  Create Quiz
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, idx) => (
                  <div key={idx} className="pb-4 border-b border-gray-700 last:border-0">
                    <p className="text-gray-300 text-sm mb-1">{activity.message}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;

