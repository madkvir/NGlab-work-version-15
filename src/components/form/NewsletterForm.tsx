"use client";
export const dynamic = "force-dynamic";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import FormStatus from "./FormStatus";
import { newsletterFormTranslations } from "../../locales/translations";
import getPageLangUnit from "../../utils/getPageLangUnit";
import axios from "axios";

const NewsletterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    consent: false,
    "bot-field": "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const language = getPageLangUnit(newsletterFormTranslations);
  const t = newsletterFormTranslations[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formValues = formData;

    if (formValues["bot-field"]) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submission",
      form_name: "newsletter_form",
      form_data: {
        email: formValues.email,
        consent: formValues.consent,
        submission_timestamp: new Date().toISOString(),
        page_url: window.location.href,
      },
    });

    const submitData = new FormData();
    submitData.append("form-name", "newsletter");
    submitData.append("email", formValues.email);
    submitData.append("consent", formValues.consent.toString());

    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(submitData as any).toString(),
      });
      const subscription = await axios.post("/api/subscribe", {
        email: formValues.email,
        language,
      });
      if (subscription.status !== 200) {
        console.error("Email subscription error");
      }

      if (response.ok) {
        setFormData({
          email: "",
          consent: false,
          "bot-field": "",
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="flex items-center gap-3 bg-emerald-500/10 p-3 sm:p-4 rounded-lg animate-fade-in">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-emerald-400">{t.successTitle}</h4>
          <p className="text-xs sm:text-sm text-gray-400">{t.successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 sm:space-y-4"
      data-netlify="true"
      name="newsletter"
      method="POST"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <input type="hidden" name="bot-field" />

      <FormStatus status="idle" error={null} />

      <div className="relative">
        <div className="relative flex items-center">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.placeholder}
            className="w-full bg-gray-900/90 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-gray-400 animate-glow shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-emerald-400 to-green-300 hover:from-emerald-500 hover:to-green-400 text-white p-2 sm:p-2.5 rounded-r-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
          >
            <Send className={`w-4 h-4 sm:w-5 sm:h-5 ${isSubmitting ? "animate-pulse" : ""}`} />
          </button>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="newsletter-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-3 w-3 sm:h-4 sm:w-4 text-emerald-600 focus:ring-emerald-500 border-gray-700 rounded bg-gray-900/90"
          required
        />
        <label htmlFor="newsletter-consent" className="text-xs sm:text-sm text-gray-400">
          {t.agreement}{" "}
          <a href="/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            {t.privacyPolicy}
          </a>
        </label>
      </div>
    </form>
  );
};

export default NewsletterForm;
