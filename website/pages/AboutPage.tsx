
import React from 'react';
import AboutMentor from '../components/AboutMentor';
import ContactSection from '../components/ContactSection';
import MediaShowcase from '../components/MediaShowcase';

const MissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);
const VisionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);
const ValuesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);


const AboutPage: React.FC = () => {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-brand-orange">About Ajay Gauranga Das</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Preserving the Sacred Art of Kirtan for Future Generations
          </p>
        </div>

        <AboutMentor />

        <div className="mt-20 md:mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 text-center">
                <div className="flex justify-center mb-4"><MissionIcon/></div>
                <h3 className="text-2xl font-bold text-brand-gold mb-2">🎯 Mission</h3>
                <p className="text-gray-300">To preserve and propagate the traditional Gaudiya Vaishnava musical heritage through accessible, high-quality online education.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 text-center">
                <div className="flex justify-center mb-4"><VisionIcon/></div>
                <h3 className="text-2xl font-bold text-brand-gold mb-2">💫 Vision</h3>
                <p className="text-gray-300">A global community of skilled kirtan musicians who maintain the authenticity of devotional music traditions.</p>
            </div>
             <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 text-center">
                <div className="flex justify-center mb-4"><ValuesIcon/></div>
                <h3 className="text-2xl font-bold text-brand-gold mb-2">❤️ Values</h3>
                <p className="text-gray-300">Tradition, Devotion, Community, Excellence, Accessibility.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-28"><MediaShowcase /></div>

        <div className="mt-20 md:mt-28"><ContactSection /></div>
      </div>
    </div>
  );
};

export default AboutPage;
