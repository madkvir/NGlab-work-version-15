import React from 'react';
import { Sparkles } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center">
    <div className="flex items-center">
      <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
      <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent ml-2">
        NeuroGen Lab
      </span>
    </div>
  </div>
);

export default Logo;