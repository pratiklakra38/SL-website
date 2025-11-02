import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import supabase from './server/supabaseClient';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BrowsePage from './pages/BrowsePage';
import CoursePreviewPage from './pages/CoursePreviewPage';
import StudentDashboard from './pages/StudentDashboard';
import CourseLearningPage from './pages/CourseLearningPage';
import MentorDashboard from './pages/MentorDashboard';
import CreateCoursePage from './pages/CreateCoursePage';
import UploadModulesPage from './pages/UploadModulesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { pathname } = useLocation();
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isDashboardPage = pathname.startsWith('/learn') || pathname.startsWith('/mentor');

  return (
    <>
      <ScrollToTop />
      <div className={`bg-gradient-dark text-gray-200 min-h-screen font-sans ${!isAuthPage ? 'bg-devotional-pattern bg-repeat' : ''}`}>
        {!isAuthPage && !isDashboardPage && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/course/:slug" element={<CoursePreviewPage />} />
            <Route path="/learn/dashboard" element={<StudentDashboard />} />
            <Route path="/learn/course/:id" element={<CourseLearningPage />} />
            <Route path="/mentor/dashboard" element={<MentorDashboard />} />
            <Route path="/mentor/course/create" element={<CreateCoursePage />} />
            <Route path="/mentor/course/:id/modules" element={<UploadModulesPage />} />
          </Routes>
        </main>
        {!isAuthPage && !isDashboardPage && <Footer />}
      </div>
    </>
  );
};

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
