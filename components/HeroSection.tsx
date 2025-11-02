
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const scrollToTestimonials = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
             <div className="absolute inset-0 bg-brand-dark bg-opacity-50 z-0"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Text Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center bg-gray-800/50 rounded-full py-1 px-4 mb-4 border border-gray-700">
                             <svg className="w-5 h-5 text-brand-gold mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className="text-sm font-semibold text-gray-300">Trusted by 1.5M+ Students Worldwide</span>
                        </div>
                        <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-brand-orange leading-tight">
                            Spreading the Joy of Kirtan Through Traditional Rhythms
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Learn the Sacred Art of Mridanga & Kartal from ISKCON's Traditional Gaudiya Style
                        </p>
                        <p className="mt-6 text-base text-gray-400 max-w-xl mx-auto lg:mx-0">
                             Content is everywhere. We provide what is rare — An Unmatched, Community-Driven Learning Experience with peer learning, personalized feedback, doubt sessions, and global alumni network.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/login" className="bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-4 px-8 rounded-lg text-lg hover:opacity-90 transition-opacity transform hover:scale-105">
                                Start Learning →
                            </Link>
                            <button onClick={scrollToTestimonials} className="bg-transparent border-2 border-gray-500 text-gray-300 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-800 hover:border-gray-700 transition-all">
                                See Our Impact ↓
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="relative flex justify-center">
                        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                            <div className="absolute inset-0 bg-brand-orange rounded-full blur-3xl opacity-30"></div>
                            <img
                                src="/images/hero_ajay.jpg"
                                alt="Ajay Gauranga Das with Mridanga"
                                className="relative w-full h-full object-cover rounded-full border-4 border-brand-gold/50 shadow-2xl shadow-brand-orange/20"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;