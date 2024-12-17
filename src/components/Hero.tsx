import React from 'react';
import { ArrowRight, CreditCard, Play } from 'lucide-react';
import AdvantageCards from './AdvantageCards';
import Divider from './Divider';
import GlowingButton from './common/GlowingButton';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0B0F19]">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto pt-8 sm:pt-24 md:pt-32">
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
              <GlowingButton 
                to="/contacts"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Free
              </GlowingButton>

              <GlowingButton 
                variant="secondary"
                size="lg"
                icon={<Play className="w-5 h-5" />}
                onClick={() => {}}
              >
                Watch Demo
              </GlowingButton>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-400 select-none">
                <CreditCard className="w-4 h-4" />
                <span className="text-xs sm:text-sm">No credit card required!</span>
              </div>
              {/* Rest of the Hero component remains unchanged */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;