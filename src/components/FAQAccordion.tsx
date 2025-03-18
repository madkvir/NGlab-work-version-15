"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { FAQItem, TextFragment } from "./FAQData"; // Импорт типов из нового файла

interface FAQAccordeonProps {
  faqs: FAQItem[];
  locale: string;
}

const FAQAccordeon = ({ faqs, locale }: FAQAccordeonProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const renderAnswer = (answer: string | TextFragment[]) => {
    if (typeof answer === 'string') {
      return <div className="mt-4 text-gray-400 text-base leading-relaxed">{answer}</div>;
    }
    
    return (
      <div className="mt-4 text-gray-400 text-base leading-relaxed">
        {answer.map((fragment, index) => renderFragment(fragment, index, locale))}
      </div>
    );
  };
  
  const renderFragment = (fragment: TextFragment, index: number, locale: string) => {
    if (!fragment) return null;

    switch (fragment.type) {
      case 'bold':
        return (
          <strong 
            key={index} 
            className={fragment.isGreen ? 'text-emerald-400 font-bold' : 'font-bold'}
          >
            {fragment.content}
          </strong>
        );
      case 'link':
        const url = fragment.url?.startsWith('/') 
          ? `/${locale}${fragment.url}` 
          : fragment.url;
        return (
          <Link 
            key={index} 
            href={url || '#'} 
            className="text-emerald-400 font-bold underline"
          >
            {fragment.content}
          </Link>
        );
      case 'text':
        return (
          <span 
            key={index} 
            dangerouslySetInnerHTML={{ __html: fragment.content || '' }}
          />
        );
      case 'list':
      case 'numbered-list':
        const ListComponent = fragment.type === 'list' ? 'ul' : 'ol';
        const listClasses = fragment.type === 'list' 
          ? 'list-disc pl-5 my-2 space-y-1' 
          : 'list-decimal pl-5 my-2 space-y-2';
        
        return (
          <ListComponent key={index} className={listClasses}>
            {fragment.listItems?.map((item, i) => (
              <li key={i}>{renderFragment(item, i, locale)}</li>
            ))}
          </ListComponent>
        );
      case 'list-item':
        return (
          <div key={index}>
            {fragment.content && <span className="font-semibold">{fragment.content}</span>}
            {fragment.listItems && (
              <ul className="list-disc pl-5 mt-1 space-y-1">
                {fragment.listItems.map((subItem, i) => (
                  <li key={i}>{renderFragment(subItem, i, locale)}</li>
                ))}
              </ul>
            )}
          </div>
        );
      default:
        return null;
    }
  };

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
            {openIndex === index && renderAnswer(faq.answer)}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordeon;
