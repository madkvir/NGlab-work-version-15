"use client";
import { Check, Sparkles, Wrench, Boxes } from "lucide-react";
import { useRouter } from "next/navigation";
import GlowingButton from "./common/GlowingButton";
import { pricingTranslations } from '../locales/translations';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const router = useRouter();
  const { language } = useLanguage();
  const t = pricingTranslations[language];

  const handleGetStarted = () => {
    router.push('/contacts');
  };

  return (
    <section id="pricing" className="py-5 -mt-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-block px-5 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm mb-5">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-semibold">
              {t.sectionTitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.description}
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
                  <h3 className="text-2xl font-bold text-white">{t.customDev.title}</h3>
                  <p className="text-gray-400 mt-2">{t.customDev.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-400">{t.customDev.startingFrom}</span>
                  <div className="text-2xl font-bold text-white mt-1">{t.customDev.price}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {t.customDev.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <GlowingButton onClick={handleGetStarted}>
                {t.customDev.cta}
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
                  <h3 className="text-2xl font-bold text-white">{t.platform.title}</h3>
                  <p className="text-gray-400 mt-2">{t.platform.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-400">{t.platform.period}</span>
                  <div className="text-2xl font-bold text-white mt-1">{t.platform.price}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {t.platform.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <GlowingButton onClick={handleGetStarted}>
                {t.platform.cta}
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
              <h3 className="text-2xl font-bold text-white mb-3">{t.trial.title}</h3>
              <p className="text-gray-400 mb-6">
                {t.trial.description}
              </p>
              <GlowingButton onClick={handleGetStarted}>
                {t.trial.cta}
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
