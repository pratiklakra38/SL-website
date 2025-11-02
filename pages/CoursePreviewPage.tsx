import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';

const CoursePreviewPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = COURSES_DATA.find(c => c.id.toString() === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Course Not Found</h1>
          <Link to="/browse" className="text-brand-orange hover:underline">Back to Browse</Link>
        </div>
      </div>
    );
  }

  const levelColor =
    course.level === 'Beginner' ? 'bg-green-900 text-green-300 border-green-700' :
    course.level === 'Intermediate' ? 'bg-yellow-900 text-yellow-300 border-yellow-700' :
    course.level === 'Advanced' ? 'bg-red-900 text-red-300 border-red-700' : 'bg-blue-900 text-blue-300 border-blue-700';

  return (
    <div className="min-h-screen bg-gradient-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/browse" className="inline-flex items-center text-gray-300 hover:text-brand-gold mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              {course.title}
            </h1>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${levelColor}`}>
                {course.level}
              </span>
              <span className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300">
                {course.category}
              </span>
              {course.isFeatured && (
                <span className="px-3 py-1 bg-yellow-900 border border-yellow-700 text-yellow-300 rounded-full text-sm font-semibold">
                  ⭐ Featured
                </span>
              )}
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">About This Course</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{course.description}</p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Master foundational techniques and hand positions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Learn authentic Gaudiya Vaishnava traditions
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Practice with guided exercises and feedback
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Join a supportive community of learners
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{course.originalPrice}</span>
                  )}
                </div>
                {course.discount && (
                  <span className="inline-block bg-red-600 text-white text-sm font-bold px-3 py-1 rounded mb-4">
                    {course.discount}
                  </span>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400">Duration</span>
                  <span className="font-semibold text-white">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400">Lessons</span>
                  <span className="font-semibold text-white">{course.lessons}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-400">Level</span>
                  <span className="font-semibold text-white">{course.level}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Category</span>
                  <span className="font-semibold text-white">{course.category}</span>
                </div>
              </div>

              <Link
                to="/login"
                className="w-full bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity text-center block mb-4"
              >
                Enroll Now
              </Link>

              <button className="w-full bg-gray-800 border-2 border-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
                Add to Wishlist
              </button>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 text-center">
                  🔒 30-day money-back guarantee
                </p>
                <p className="text-sm text-gray-400 text-center mt-2">
                  📱 Lifetime access on all devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePreviewPage;

