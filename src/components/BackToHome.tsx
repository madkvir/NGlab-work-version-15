import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
      Back to Home
    </Link>
  );
};

export default BackToHome;