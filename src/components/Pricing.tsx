import React from 'react';
import { Check, Sparkles, Wrench, Boxes } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Divider from './Divider';
import GlowingButton from './common/GlowingButton';

const Pricing = () => {
  const navigate = useNavigate();

  const handleContactSales = () => {
    navigate('/contacts');
  };

  return (
    <section id="pricing" className="py-5 -mt-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-block px-5 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm mb-5">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-semibold">
              PRICING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Choose Your AI Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start with 500 free tokens to test our platform capabilities
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* Custom Development */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-gray-900/90 rounded-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Wrench className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white">Custom Development</h3>
                  <p className="text-gray-400 mt-2">Tailored AI Solutions</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-400">Starting from</span>
                  <div className="text-2xl font-bold text-white mt-1">Custom Quote</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Custom AI model development</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Dedicated development team</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Unique business logic implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Custom integrations & API development</span>
                </li>
              </ul>

              <GlowingButton onClick={handleContactSales}>
                Contact Sales
              </GlowingButton>
            </div>
          </div>

          {/* Platform Access */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-gray-900/90 rounded-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <Boxes className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white">Platform Access</h3>
                  <p className="text-gray-400 mt-2">Full Suite of AI Tools</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-400">Monthly</span>
                  <div className="text-2xl font-bold text-white mt-1">€499</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Access to all platform features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Unlimited AI generations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">All integrations included</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">Priority support</span>
                </li>
              </ul>

              <GlowingButton to="/signup">
                Get Started
              </GlowingButton>
            </div>
          </div>
        </div>

        {/* Free Trial Banner */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gray-900/90 rounded-xl p-8 text-center">
              <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Start Free Trial</h3>
              <p className="text-gray-400 mb-6">
                Get 500 tokens to test our platform's capabilities with no commitment
              </p>
              <GlowingButton to="/signup">
                Try for Free
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;