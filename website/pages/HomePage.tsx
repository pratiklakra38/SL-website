
import React from 'react';
import HeroSection from '../components/HeroSection';
import CoursesPreview from '../components/CoursesPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AboutPreview from '../components/AboutPreview';
import TrustSection from '../components/TrustSection';
import MediaShowcase from '../components/MediaShowcase';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <TrustSection />
      <CoursesPreview />
      <AboutPreview />
      <MediaShowcase />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
