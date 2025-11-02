
import React from 'react';
import { COURSES_DATA } from '../constants';
import CourseCard from './CourseCard';
import { Course } from '../types';
import { Link } from 'react-router-dom';

const CoursesPreview: React.FC = () => {
  const previewCourses = COURSES_DATA.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-white">Featured Courses</h2>
          <div className="mt-2 h-1 w-24 bg-brand-orange mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewCourses.map((course: Course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/courses"
            className="bg-brand-orange text-white font-bold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity transform hover:scale-105"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;
