"use client";
import React, { useState } from "react";
import { Phone, Mail, Linkedin, MapPin, MessageCircle, ChevronDown } from "lucide-react";
import NewsletterForm from "./form/NewsletterForm";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Footer: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const router = useRouter();
  const location = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location !== "/") {
      const url = `/?scrollTo=${encodeURIComponent(id)}`;
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
    <footer className="relative mt-10 border-t border-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 flex flex-col items-center md:items-start md:pl-12">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/NG.svg"
                alt="NeuroGen Lab Logo"
                className="sm:w-[50px] md:w-[110px] lg:w-[140px]"
              />
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Transforming businesses with cutting-edge AI solutions and intelligent automation.
            </p>
          </div>

          {/* Navigation and Contact Info Grid */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div>
              <button
                onClick={() => setIsNavigationOpen(!isNavigationOpen)}
                className="w-full flex items-center justify-between md:hidden mb-4"
              >
                <h3 className="text-lg font-semibold">Navigation</h3>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 transition-transform ${
                    isNavigationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className="hidden md:block text-lg font-semibold mb-4">Navigation</h3>
              <ul
                className={`space-y-2 flex flex-col items-center md:items-start overflow-hidden transition-all duration-300 md:h-auto ${
                  isNavigationOpen ? "h-auto opacity-100" : "h-0 md:h-auto opacity-0 md:opacity-100"
                }`}
              >
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleNavigation(e, "pricing")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <Link href="/guide" className="text-gray-400 hover:text-white transition-colors">
                    Guide
                  </Link>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavigation(e, "faq")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About US
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="w-full flex items-center justify-between md:hidden mb-4"
              >
                <h3 className="text-lg font-semibold">Contact Us</h3>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 transition-transform ${
                    isContactOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className="hidden md:block text-lg font-semibold mb-4">Contact Us</h3>
              <ul
                className={`space-y-3 flex flex-col items-center md:items-start overflow-hidden transition-all duration-300 md:h-auto ${
                  isContactOpen ? "h-auto opacity-100" : "h-0 md:h-auto opacity-0 md:opacity-100"
                }`}
              >
                <li>
                  <a
                    href="tel:+49 (0) 30 123456789"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                    +49 (0) 30 123456789
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:office@neurogenlab.de"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5 text-emerald-400" />
                    office@neurogenlab.de
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/neurogen-lab/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5 text-emerald-400" />
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2 text-center md:text-left">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-400">
                    Gartenweg 2<br />
                    16515 Oranienburg, Germany
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <div className="relative">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col items-center pt-8 border-t border-gray-900/50">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/responsible-ai-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Responsible AI Policy
            </Link>
            <Link
              href="/disclaimer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Disclaimer
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} NeuroGen Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
