"use client";
import React from "react";
import { Send } from "lucide-react";
import GlowingButton from "../common/GlowingButton";
import getPageLangUnit from "../../utils/getPageLangUnit";

const buttonTranslations = {
  en: {
    sending: "Sending...",
    send: "Send Message",
  },
  de: {
    sending: "Wird gesendet...",
    send: "Nachricht senden",
  },
  es: {
    sending: "Enviando...",
    send: "Enviar Mensaje",
  },
  ru: {
    sending: "Отправка...",
    send: "Отправить сообщение",
  },
  ua: {
    sending: "Надсилання...",
    send: "Надіслати повідомлення",
  },
};

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  const language = getPageLangUnit(buttonTranslations);
  const t = buttonTranslations[language];

  return (
    <GlowingButton
      onClick={() => {}}
      icon={<Send className="w-5 h-5" />}
      className={isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
    >
      {isSubmitting ? t.sending : t.send}
    </GlowingButton>
  );
};

export default SubmitButton;
