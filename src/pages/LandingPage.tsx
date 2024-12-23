import React from 'react';
import { Newspaper } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="flex justify-center mb-6">
          <Newspaper className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">News Feed Organizer</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Stay informed with personalized news updates, organized by your interests
        </p>
        <button
          onClick={onGetStarted}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium 
            hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}