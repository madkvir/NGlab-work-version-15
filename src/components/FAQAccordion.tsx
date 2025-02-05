import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type Faq = {
  question: string;
  answer: string;
};

interface FAQAccordeonProps {
  faqs: Faq[];
}

const FAQAccordeon = ({ faqs }: FAQAccordeonProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
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
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </div>
            {openIndex === index && (
              <div className="mt-4 text-gray-400 text-base leading-relaxed">{faq.answer}</div>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordeon;
