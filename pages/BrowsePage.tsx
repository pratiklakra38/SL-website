import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { COURSES_DATA } from '../constants';
import { Course } from '../types';

const BrowsePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Mridanga' | 'Kartal' | 'Combined' | 'Orientation'>('All');

  const filters: ('All' | 'Mridanga' | 'Kartal' | 'Combined' | 'Orientation')[] = ['All', 'Mridanga', 'Kartal', 'Combined', 'Orientation'];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      const matchesFilter = activeFilter === 'All' || course.category === activeFilter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || course.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  const levelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  return (
    <div className="py-20 md:py-28 bg-gradient-dark min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-white">Browse Courses</h1>
          <p className="mt-4 text-gray-400 text-lg">Discover our complete catalog of spiritual learning courses</p>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-700'
              }`}
            >
              {filter === 'All' ? 'All Courses' : filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCourses.map((course: Course) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-brand-orange hover:shadow-xl transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative">
                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                {course.discount && (
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                    {course.discount}
                  </span>
                )}
                {course.isFeatured && (
                  <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-white mb-2 h-14">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-4 flex-grow h-20 overflow-hidden">{course.description}</p>

                <div className="text-xs text-gray-400 mb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span>👤</span>
                    <span>Ajay Gauranga Das</span>
                  </div>
                  <div className={`flex items-center gap-2 font-semibold ${levelColor(course.level)}`}>
                    <span>●</span>
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400 border-t border-b border-gray-700 py-2 my-2">
                  <span>⏱ {course.duration}</span>
                  <span>📚 {course.lessons} lessons</span>
                </div>

                <div className="flex items-baseline gap-2 mt-2 mb-4">
                  <span className="text-2xl font-bold text-white">{course.price}</span>
                  {course.originalPrice && (
                    <span className="text-base text-gray-500 line-through">{course.originalPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No courses found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;

