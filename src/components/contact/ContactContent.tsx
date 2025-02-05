"use client";
import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { contactTranslations } from "../../locales/translations";
import ContactForm from "../form/ContactForm";
import BackToHome from "../BackToHome";
import Divider from "../Divider";
import getPageLangUnit from "../../utils/getPageLangUnit";

const ContactContent = () => {
  const language = getPageLangUnit(contactTranslations);
  const t = contactTranslations[language];

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t.contactInfo.address.title,
      content: t.contactInfo.address.content,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t.contactInfo.phone.title,
      content: (
        <a href="tel:+4930123456789" className="text-gray-400 hover:underline">
          {t.contactInfo.phone.content}
        </a>
      ),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t.contactInfo.email.title,
      content: (
        <a href="mailto:office@neurogenlab.de" className="text-gray-400 hover:underline">
          {t.contactInfo.email.content}
        </a>
      ),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t.contactInfo.hours.title,
      content: t.contactInfo.hours.content,
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <BackToHome />
        </div>

        <div className="text-center mb-12">
          <MessageSquare className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <Divider />

        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-3xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30"></div>
            <div className="relative bg-gray-900/90 rounded-xl p-6 sm:p-8 h-full min-h-[600px]">
              <h2 className="text-2xl font-semibold mb-8 text-center">{t.sendMessage}</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="space-y-8 w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-8 text-center">{t.getInTouch}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="text-emerald-400 mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-400 flex-grow">{info.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 mt-8">
              <h3 className="text-lg font-semibold mb-4">{t.aboutUs.title}</h3>
              <p className="text-gray-400">{t.aboutUs.content}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactContent;
