import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Divider from './Divider';

const faqs = [
  {
    question: "What is NeuroGen Lab? How does it work?",
    answer: "NeuroGen Lab is an AI-powered platform that helps businesses automate and enhance their operations through advanced artificial intelligence. Our system uses cutting-edge machine learning algorithms to understand and process your business data, providing intelligent automation and insights."
  },
  {
    question: "What kind of businesses can benefit from NeuroGen Lab?",
    answer: "NeuroGen Lab is designed to help businesses of all sizes across various industries. Whether you're a small startup or a large enterprise, our AI solutions can be customized to meet your specific needs in customer service, data analysis, content generation, and more."
  },
  {
    question: "How long does it take to implement the solution?",
    answer: "Implementation time varies depending on your specific needs and the complexity of integration. Typically, basic setup can be completed within a few days, while more complex custom solutions may take several weeks. Our team provides support throughout the entire process."
  },
  {
    question: "Is my data safe with NeuroGen Lab?",
    answer: "Yes, we take data security very seriously. We employ industry-standard encryption protocols, regular security audits, and strict data handling procedures. All data is processed in compliance with GDPR and other relevant data protection regulations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 technical assistance, dedicated account managers, detailed documentation, and regular training sessions. Our team is always available to help you maximize the benefits of our AI solutions."
  },
  {
    question: "Is NeuroGen Lab available in multiple languages?",
    answer: "Yes, our platform supports multiple languages and can be customized for different regional requirements. Contact our sales team for specific language availability and customization options."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our AI solutions
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-5 rounded-xl bg-gray-900/50 hover:bg-gray-900/70 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 text-emerald-400">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-400 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="mt-5">
          <Divider />
        </div>
      </div>
    </section>
  );
};

export default FAQ;