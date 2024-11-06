import React, { useEffect, useState } from 'react';
import { ArrowRight, CreditCard, Send } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer
      id="footer"
      className={`relative mt-20 border-t border-gray-900/50 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              NeuroGen Lab
            </span>
            <p className="mt-4 text-gray-400">
              Transforming businesses with cutting-edge AI solutions and intelligent automation.
            </p>
          </div>

          {/* Pages */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <a href="/signin" className="text-gray-400 hover:text-white transition-colors">
                  Sign In
                </a>
              </li>
              <li>
                <a href="/signup" className="text-gray-400 hover:text-white transition-colors group inline-flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@neurogenlab.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@neurogenlab.com
                </a>
              </li>
              <li className="text-gray-400">
                123 AI Street
                <br />
                Tech Valley, CA 94025
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-2">2000+ Our clients are subscribed</p>
            <p className="text-gray-400 text-sm mb-4">Around the World</p>
            
            <form onSubmit={handleSubmit} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full bg-gray-900/90 text-white text-sm px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white p-2 rounded-r-lg transition-all hover:animate-glow"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-900/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NeuroGen Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;