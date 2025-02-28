import Divider from "./Divider";
import FAQAccordion from "./FAQAccordion";
import { faqTranslations } from "../locales/translations";

interface FAQProps {
  language: keyof typeof faqTranslations;
}

const FAQ = async ({ language }: FAQProps) => {
  const t = faqTranslations[language];

  return (
    <section id="faq" className="py-5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Top Divider */}
        <div className="mb-5">
          <Divider />
        </div>

        {/* Section Header */}
        <div className="text-center mb-5">
          <div className="inline-block px-5 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm mb-5">
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-semibold">
              {t.sectionTitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.description}</p>
        </div>

        {/* FAQ Accordion */}
        <FAQAccordion faqs={t.faqs} />
      </div>
    </section>
  );
};

export default FAQ;
