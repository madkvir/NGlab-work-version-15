"use client";
import { useEffect, useState } from "react";
import { ArrowRight, CreditCard, Play } from "lucide-react";
import AdvantageCards from "./AdvantageCards";
import Particles from "./Particles";
import Divider from "./Divider";
import { heroTranslations } from "../locales/translations";
import DemoModal from "./DemoModal";
import getPageLangUnit from "../utils/getPageLangUnit";
import { Link } from "../i18n/routing";

interface HeroProps {
  language: "en" | "de" | "es" | "ru" | "ua";
}

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const language = getPageLangUnit(heroTranslations);

  const t = heroTranslations[language];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWatchDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // if (!isClient) {
  //   return null; // или можно вернуть загрузочный компонент
  // }

  return (
    <>
      <div className="relative min-h-[calc(100vh-80px)] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-16 sm:py-0">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[#0B0F19]">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-emerald-500/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-green-500/20 rounded-full filter blur-3xl" />
          {isClient && <Particles />}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-8 sm:pt-24 md:pt-32">
          <div className="space-y-4 sm:space-y-6 text-center">
            <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold leading-tight sm:leading-tight select-none px-2 sm:px-4 break-words">
              {t.title.part1}
              <div className="my-1 sm:my-2">
                <div className="inline-block bg-gradient-to-r from-emerald-400 to-green-500 text-transparent bg-clip-text whitespace-pre-wrap">
                  {t.title.part2}
                </div>
              </div>
              {t.title.part3}
            </h1>

            <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto px-2 sm:px-4 select-none">
              {t.description}
            </p>

            <div className="flex flex-col items-center space-y-4 sm:space-y-6 mt-6 sm:mt-12 px-2 sm:px-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="/en/contacts"
                  className="w-full sm:w-auto group bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-lg transition-all hover:animate-glow flex items-center justify-center gap-2 text-sm sm:text-lg font-semibold select-none"
                >
                  {t.contactUs}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={handleWatchDemo}
                  className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-gray-700 hover:border-emerald-400 transition-colors text-base sm:text-lg font-semibold flex items-center justify-center gap-2 select-none"
                >
                  {t.buttons.watchDemo}
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform fill-current" />
                </button>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-gray-400 select-none">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">{t.noCreditCard}</span>
                </div>
                <div className="w-full h-[250px] sm:h-[400px] md:h-[500px] rounded-lg sm:rounded-2xl overflow-hidden border-2 sm:border-4 border-emerald-400/20 shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/assets/images/hero-image.jpg"
                    alt={t.imageAlt}
                    className="w-full h-full object-cover object-center select-none"
                    loading="eager"
                  />
                </div>

                <div className="mt-8 sm:mt-12 px-2 sm:px-4">
                  <Divider />
                </div>

                <div className="text-center mt-8 sm:mt-12 px-2 sm:px-4">
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent select-none">
                    {t.advantagesTitle}
                  </h2>
                  <p className="mt-3 sm:mt-4 text-gray-400 text-sm sm:text-lg select-none">
                    {t.advantagesDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Advantage Cards */}
            <div className="px-4">
              <AdvantageCards />
            </div>

            <div className="mt-12 w-full">
              <Divider />
            </div>
          </div>
        </div>
      </div>

      <DemoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}

        // videoUrl="https://www.youtube.com/watch?v=HK6y8DAPN_0" // Добавьте позже реальный ID видео
      />
    </>
  );
};

export default Hero;
