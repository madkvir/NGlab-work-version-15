"use client";
import React, { useState } from "react";
import { Phone, Mail, Linkedin, MapPin, MessageCircle, ChevronDown } from "lucide-react";
import NewsletterForm from "./form/NewsletterForm";
// import { Link, useRouter, usePathname } from "../i18n/routing";
import { footerTranslations } from "../locales/translations";
import getPageLangUnit from "../utils/getPageLangUnit";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Footer: React.FC = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const router = useRouter();
  const location = usePathname();
  const language = getPageLangUnit(footerTranslations);
  const t =
    footerTranslations[language as keyof typeof footerTranslations] || footerTranslations.en;

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
            <p className="text-gray-400 text-sm text-center md:text-left">{t.companyDescription}</p>
          </div>

          {/* Navigation and Contact Info Grid */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div>
              <button
                onClick={() => setIsNavigationOpen(!isNavigationOpen)}
                className="w-full flex items-center justify-between md:hidden mb-4"
              >
                <h3 className="text-lg font-semibold">{t.navigation.title}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 transition-transform ${
                    isNavigationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className="hidden md:block text-lg font-semibold mb-4">{t.navigation.title}</h3>
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
                    {t.navigation.links.pricing}
                  </a>
                </li>
                <li>
                  <Link href="/guide" className="text-gray-400 hover:text-white transition-colors">
                    {t.navigation.links.guide}
                  </Link>
                </li>
                <li>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavigation(e, "faq")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.navigation.links.faq}
                  </a>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t.navigation.links.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    {t.navigation.links.blog}
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
                <h3 className="text-lg font-semibold">{t.contactUs.title}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-emerald-400 transition-transform ${
                    isContactOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <h3 className="hidden md:block text-lg font-semibold mb-4">{t.contactUs.title}</h3>
              <ul
                className={`space-y-3 flex flex-col items-center md:items-start overflow-hidden transition-all duration-300 md:h-auto ${
                  isContactOpen ? "h-auto opacity-100" : "h-0 md:h-auto opacity-0 md:opacity-100"
                }`}
              >
                <li>
                  <a
                    href={`tel:${t.contactUs.phone}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5 text-emerald-400" />
                    {t.contactUs.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${t.contactUs.email}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-5 h-5 text-emerald-400" />
                    {t.contactUs.email}
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
                    {t.contactUs.whatsApp}
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
                    {t.contactUs.linkedIn}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-400">
                    {t.contactUs.address.street}
                    <br />
                    {t.contactUs.address.city}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              {t.newsletter.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 text-center md:text-left">
              {t.newsletter.description}
            </p>
            <div className="relative">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-900/50 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.legalLinks.termsOfService}
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.legalLinks.privacyPolicy}
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.legalLinks.cookiePolicy}
            </Link>
            <Link
              href="/impressum"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.legalLinks.impressum}
            </Link>
            <Link
              href="/responsible-ai-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.legalLinks.responsibleAiPolicy}
            </Link>
            <Link
              href="/disclaimer"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.legalLinks.disclaimer}
            </Link>
          </div>
          <p className="text-gray-400 text-sm text-center">
            {t.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
