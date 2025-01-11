"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import SolutionsMenu from "./SolutionsMenu";
import { useClickOutside } from "./hooks/useClickOutside";
import { useScrollLock } from "./hooks/useScrollLock";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const location = usePathname();

  useClickOutside<HTMLDivElement | HTMLButtonElement>(
    [menuRef, buttonRef],
    () => setIsMenuOpen(false),
    isMenuOpen
  );
  useScrollLock(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setOpacity(1);
        setIsScrolled(false);
      } else {
        const newOpacity = Math.max(0.95, Math.min(1, 1 - (currentScrollY - 50) / 150));
        setOpacity(newOpacity);
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location !== "/") {
      const url = `/#${encodeURIComponent(id)}`;
      router.push(url);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-900/50 ${
          isScrolled ? "bg-[#0B0F19]/95 backdrop-blur-sm py-3" : "bg-transparent py-4"
        }`}
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* For Dealership Button */}
              <div className="relative">
                <button
                  className="text-sm px-4 py-2 bg-gray-800/80 hover:bg-gray-800/60 text-gray-400 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-not-allowed"
                  disabled
                >
                  For Dealership
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-[11px] px-2 py-0.5 rounded-full transform rotate-12">
                    Coming
                  </span>
                </button>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="relative text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-1 group animate-pulse-slow">
                  <span className="relative">
                    Solutions
                    <span className="absolute -top-1 -right-2 flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <SolutionsMenu />
              </div>

              {/* Pages Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-1 group">
                  Pages
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0B0F19]/95 backdrop-blur-sm rounded-lg border border-gray-900/50 py-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/guide"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Guide
                  </Link>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavClick(e, "faq")}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    FAQ
                  </a>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    About US
                  </Link>
                </div>
              </div>

              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Pricing
              </a>
              <Link
                href="/contacts"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contacts
              </Link>
              <Link
                href="/signin"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Link>

              <div className="flex items-center space-x-2">
                <Link
                  href="/signup"
                  className="bg-gradient-to-r from-emerald-400 to-green-300 hover:from-emerald-500 hover:to-green-400 text-white px-4 lg:px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] text-sm lg:text-base"
                >
                  Sign Up Free
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors flex items-center gap-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-sm">Solutions</span>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-[72px] bg-[#0B0F19]/95 backdrop-blur-md z-40 overflow-y-auto"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <SolutionsMenu isMobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
