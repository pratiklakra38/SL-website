import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'student' | 'mentor'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("Login success:", result);

      const { full_name, email: userEmail, role } = result.data;

      // Save user data to localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: full_name,
          email: userEmail,
          role,
        })
      );

      navigate(
        role === "student" ? "/learn/dashboard" : "/mentor/dashboard",
        { state: { fullName: full_name, email: userEmail } }
      );
    } else {
      alert(result.error || "Login failed");
    }
  } catch (err) {
    console.error(err);
    alert("An error occurred while logging in");
  }
};


  const handleGoogleAuth = () => {
    // Google auth placeholder
    if (userType === 'student') {
      navigate('/learn/dashboard');
    } else {
      navigate('/mentor/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-gray-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back to Home */}
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-brand-gold mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        {/* Welcome Section */}
        <h1 className="text-4xl font-bold text-white mb-2 font-heading">Welcome Back</h1>
        <p className="text-gray-400 mb-8">Sign in to continue your spiritual journey</p>

        {/* Role Selection */}
        <div className="flex bg-gray-800 rounded-lg p-1 mb-6">
          <button
            onClick={() => setUserType('student')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
              userType === 'student'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setUserType('mentor')}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-all ${
              userType === 'mentor'
                ? 'bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Mentor
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-orange to-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-700"></div>
          <span className="px-4 text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-700"></div>
        </div>

        {/* Google Auth */}
        <button
          onClick={handleGoogleAuth}
          className="w-full bg-gray-800 border border-gray-700 text-gray-300 font-semibold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        {/* Sign Up Link */}
        <div className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-brand-orange font-semibold hover:underline">
            Sign Up
          </Link>
        </div>

        {/* Terms & Privacy */}
        <p className="mt-8 text-center text-sm text-gray-500">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-brand-orange hover:underline">
            Terms & Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

