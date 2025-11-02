
import React, { useState, useMemo } from 'react';
import { COURSES_DATA } from '../constants';
import CourseCard from '../components/CourseCard';
import { Course } from '../types';

const CoursesPage: React.FC = () => {
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

    return (
        <div className="py-20 md:py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-brand-orange">Premium Courses</h1>
                </div>

                <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Search courses... (⌘K)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-gold"
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
                                className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${activeFilter === filter ? 'bg-brand-orange text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            >
                                {filter === 'All' ? 'All Courses' : filter}
                            </button>
                        ))}
                    </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredCourses.map((course: Course) => (
                        <CourseCard key={course.id} course={course} />
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

export default CoursesPage;
