"use client";
import { Check, Sparkles, Wrench, Database, Code, Zap } from "lucide-react";
import GlowingButton from "./common/GlowingButton";
import { pricingTranslations } from "../locales/pricingTranslations";
import getPageLangUnit from "../utils/getPageLangUnit";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const language = getPageLangUnit(pricingTranslations);
  const t = pricingTranslations[language];
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/contacts");
  };

  return (
    <section id="pricing" className="py-5 -mt-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-5 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm mb-5">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-semibold">
              {t.sectionTitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.description}</p>
        </div>

        {/* Combined Content Block */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30"></div>
            <div className="relative bg-gray-900/90 rounded-xl p-8 md:p-10">
              {/* Custom Development Section */}
              <div className="mb-12 pb-12 border-b border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div className="mb-6 md:mb-0">
                    <Wrench className="w-12 h-12 text-emerald-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white">{t.customDev.title}</h3>
                    <p className="text-gray-400 mt-2 max-w-md">{t.customDev.subtitle}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="text-gray-400">{t.customDev.priceLabel}</span>
                    <div className="text-2xl font-bold text-white mt-1">{t.customDev.price}</div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-800/30 rounded-lg p-5">
                    <Database className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">{t.customDev.dataTitle}</h4>
                    <p className="text-gray-300 text-sm">{t.customDev.dataDescription}</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-5">
                    <Code className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">{t.customDev.logicTitle}</h4>
                    <p className="text-gray-300 text-sm">{t.customDev.logicDescription}</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-5">
                    <Zap className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="text-white font-semibold mb-2">
                      {t.customDev.integrationTitle}
                    </h4>
                    <p className="text-gray-300 text-sm">{t.customDev.integrationDescription}</p>
                  </div>
                </div>

                {/* Pricing Factors - Minimal */}
                <div className="max-w-2xl mx-auto mb-8 bg-gray-800/30 rounded-lg p-4">
                  <p className="text-white font-medium mb-0 text-center">
                    {t.customDev.pricingFactors}
                  </p>
                </div>

                <div className="text-center">
                  <GlowingButton onClick={handleGetStarted}>{t.customDev.cta}</GlowingButton>
                </div>
              </div>

              {/* Free Trial Section */}
              <div className="text-center max-w-2xl mx-auto">
                <Sparkles className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{t.trial.title}</h3>

                <div className="bg-gray-800/30 rounded-lg p-6 mb-6">
                  <p className="text-gray-300 mb-4">{t.trial.description}</p>
                  <div className="flex flex-wrap justify-center gap-6 mb-4">
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t.trial.feature1}</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{t.trial.feature2}</span>
                    </div>
                  </div>
                </div>

                <GlowingButton onClick={handleGetStarted}>{t.trial.cta}</GlowingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
