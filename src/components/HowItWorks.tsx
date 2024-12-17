import React from 'react';
import { UserPlus, Database, Settings, Rocket, TrendingUp, ArrowRight, Play } from 'lucide-react';
import Divider from './Divider';

const steps = [
  {
    number: 1,
    title: 'Registration',
    description: 'Quick setup of your account with essential business details.',
    icon: <UserPlus className="w-6 h-6" />
  },
  {
    number: 2,
    title: 'Knowledge Base Setup',
    description: 'Import your existing content and configure AI learning parameters.',
    icon: <Database className="w-6 h-6" />
  },
  {
    number: 3,
    title: 'Integration Configuration',
    description: 'Connect with your preferred platforms and communication channels.',
    icon: <Settings className="w-6 h-6" />
  },
  {
    number: 4,
    title: 'Production Launch',
    description: 'Deploy your AI solution with our expert guidance and support.',
    icon: <Rocket className="w-6 h-6" />
  },
  {
    number: 5,
    title: 'Success & ROI',
    description: 'Monitor performance metrics and optimize for better results.',
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const HowItWorks = () => {
  return (
    <section className="py-5 md:py-5 -mt-24 md:mt-0">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-block px-5 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm mb-5">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-semibold">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Guide Our AI to Create Your Success
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our proven implementation process to transform your business with AI
          </p>
        </div>

        {/* Steps with Connecting Lines */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Curved Lines */}
          <div className="hidden lg:block absolute inset-0 w-full h-full" style={{ top: '50px' }}>
            <svg
              className="w-full h-full"
              preserveAspectRatio="none"
              viewBox="0 0 1200 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100,50 C300,50 300,250 500,250 C700,250 700,50 900,50 C1100,50 1100,250 1300,250"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="6 6"
                className="animate-dash"
              />
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-20'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-5 transition-transform duration-500 hover:scale-110 hover:bg-emerald-500/20">
                  <div className="text-emerald-400">
                    {step.icon}
                  </div>
                </div>

                <span className="text-sm font-semibold text-emerald-400 mb-2">
                  Step {step.number}
                </span>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative w-full group bg-gray-900/90 text-white px-5 py-3 rounded-lg transition-all hover:animate-glow flex items-center justify-center gap-2 text-base font-semibold">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="relative group w-full sm:w-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative w-full group bg-gray-900/90 text-white px-5 py-3 rounded-lg transition-all hover:animate-glow flex items-center justify-center gap-2 text-base font-semibold">
              Watch Demo
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
            </button>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-5">
          <Divider />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;