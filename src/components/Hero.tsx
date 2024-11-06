import React from 'react';
import { ArrowRight, CreditCard, Play } from 'lucide-react';
import AdvantageCards from './AdvantageCards';
import Particles from './Particles';
import Divider from './Divider';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-green-500/20 rounded-full filter blur-3xl" />
        <Particles />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-20 sm:pt-24 md:pt-32">
        <div className="space-y-4 sm:space-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight select-none px-4">
            Unlock the possibilities
            <div className="my-2">
              <div className="inline-block bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text">
                NeuroGen Lab
              </div>
            </div>
            AI in your Business
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 select-none">
            Transform your business with cutting-edge AI solutions. Experience the power of
            intelligent automation and data-driven decision making.
          </p>

          <div className="flex flex-col items-center space-y-6 mt-8 sm:mt-12 px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:animate-glow flex items-center justify-center gap-2 text-base sm:text-lg font-semibold select-none">
                Get Started Free
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 hover:border-emerald-400 transition-colors text-base sm:text-lg font-semibold flex items-center justify-center gap-2 select-none">
                Watch Demo
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform fill-current" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-400 select-none">
                <CreditCard className="w-4 h-4" />
                <span className="text-xs sm:text-sm">No credit card required!</span>
              </div>
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-emerald-400/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://i.ibb.co/tzHKBpr/image.png"
                  alt="AI Technology Expert"
                  className="w-full h-full object-cover select-none"
                />
              </div>
              
              <div className="mt-12 w-full">
                <Divider />
              </div>
              
              <div className="text-center mt-12 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent select-none">
                  Here you should add a description of our advantages
                </h2>
                <p className="mt-4 text-gray-400 text-base sm:text-lg select-none">
                  Provide Descriptions, Get Instant AI-Generated Content
                </p>
              </div>
            </div>
          </div>

          {/* Advantage Cards */}
          <div className="px-4">
            <AdvantageCards />
          </div>
          
          <div className="mt-12 w-full">
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;