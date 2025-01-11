import { UserPlus, Database, Settings, Rocket, TrendingUp, ArrowRight, Play } from "lucide-react";
import Divider from "./Divider";

const HowItWorks = () => {
  return (
    <section className="py-5 md:py-5 mt-16 md:mt-0">
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

        {/* Rest of the component remains unchanged */}
      </div>
    </section>
  );
};

export default HowItWorks;
