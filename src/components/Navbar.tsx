import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  CreditCard
} from 'lucide-react';
import Logo from './Logo';
import ToolsMenu from './ToolsMenu';
import { tools } from './ToolsMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setOpacity(1);
        setIsScrolled(false);
      } else {
        const newOpacity = Math.min(1, currentScrollY / 200);
        setOpacity(newOpacity);
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      style={{ opacity }}
      className={`fixed w-full z-50 transition-all duration-1000 ease-in-out border-b border-gray-900/50
        ${isScrolled ? 'bg-[#0B0F19]/95 backdrop-blur-sm py-2 sm:py-4 shadow-lg' : 'bg-transparent py-3 sm:py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {/* Pages Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-1 group">
                Pages
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#0B0F19]/95 backdrop-blur-sm rounded-lg border border-gray-900/50 py-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="/guide" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  Guide
                </a>
                <a href="/blog" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  Blog
                </a>
                <a href="/about-us" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  About US
                </a>
                <a href="/roadmap" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  Roadmap
                </a>
                <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  FAQ
                </a>
                <a href="/terms" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  Terms & Policy
                </a>
                <a href="/privacy" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  Privacy Policy
                </a>
              </div>
            </div>

            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
              Pricing
            </a>
            <a href="/contacts" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
              Contacts
            </a>
            <a href="/signin" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
              Sign In
            </a>
            <div className="flex items-center space-x-2">
              <button className="bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white px-4 lg:px-6 py-2 rounded-lg transition-all hover:animate-glow text-sm lg:text-base">
                Sign Up Free
              </button>
              <div className="relative group">
                <button className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                  <Menu className="w-5 h-5" />
                </button>
                <ToolsMenu />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[57px] bg-[#0B0F19] z-50 overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Welcome Section */}
              <div className="text-lg font-semibold text-white mb-4">Welcome</div>

              {/* Pages Section */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                  className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-base">Pages</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isSubmenuOpen ? 'rotate-90' : ''}`} />
                </button>
                
                {isSubmenuOpen && (
                  <div className="pl-4 space-y-3">
                    <a href="/guide" className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">Guide</a>
                    <a href="/blog" className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">Blog</a>
                    <a href="/team" className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">Team</a>
                    <a href="/roadmap" className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">Roadmap</a>
                    <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">FAQ</a>
                    <a href="/terms" className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">Terms & Policy</a>
                    <a href="/privacy" className="block text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105">Privacy Policy</a>
                  </div>
                )}
              </div>

              {/* Main Navigation */}
              <div className="space-y-4">
                <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <CreditCard className="w-5 h-5" />
                  <span>Pricing</span>
                </a>
                <a href="/signin" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105">
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Sign In</span>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-800 my-4"></div>

              {/* Tools Grid */}
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 relative"
                  >
                    <div className="text-gray-400 hover:text-emerald-400 transition-colors">
                      {tool.icon}
                    </div>
                    <span className="mt-2 text-xs text-gray-400 text-center line-clamp-2">
                      {tool.name}
                    </span>
                    {tool.hot && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                        Hot
                      </span>
                    )}
                    {tool.coming && (
                      <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] px-1 py-0.5 rounded-full">
                        Coming
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Sign Up Button */}
              <button className="w-full bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white px-6 py-3 rounded-lg transition-all hover:animate-glow text-base font-semibold">
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;