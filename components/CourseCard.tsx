
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const levelColor =
    course.level === 'Beginner' ? 'text-green-400' :
    course.level === 'Intermediate' ? 'text-yellow-400' :
    course.level === 'Advanced' ? 'text-red-400' : 'text-blue-400';

  const levelIcon =
    course.level === 'Beginner' ? '🟢' :
    course.level === 'Intermediate' ? '🟡' :
    course.level === 'Advanced' ? '🔴' : '🔵';

  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/10 transform hover:-translate-y-2 flex flex-col">
      <div className="relative">
        <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
        {course.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">{course.discount}</span>
        )}
        {course.isFeatured && (
          <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">Featured</span>
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
            <div className={`flex items-center gap-2 font-semibold ${levelColor}`}>
                <span>{levelIcon}</span>
                <span>{course.level}</span>
            </div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-300 border-t border-b border-gray-700 py-2 my-2">
          <span>⏱ {course.duration}</span>
          <span>📚 {course.lessons} lessons</span>
        </div>

        <div className="flex items-baseline gap-2 mt-2 mb-4">
          <span className="text-2xl font-bold text-white">{course.price}</span>
          {course.originalPrice && (
            <span className="text-base text-gray-500 line-through">{course.originalPrice}</span>
          )}
        </div>
        
        <Link to="/login" className="mt-auto w-full text-center bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-all duration-300">
            View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
