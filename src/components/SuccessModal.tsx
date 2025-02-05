import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircle2, X } from "lucide-react";
import { modalTranslations } from "../locales/modalTranslations";
import getPageLangUnit from "../utils/getPageLangUnit";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export function SuccessModal({ isOpen, onClose, email }: SuccessModalProps) {
  const language = getPageLangUnit(modalTranslations);
  const t = modalTranslations[language];

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-4"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#0A1A1F] p-6 text-left shadow-xl transition-all w-full max-w-md">
                <div className="absolute right-4 top-4">
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3DFEA3]/10 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-[#3DFEA3]" />
                  </div>

                  <Dialog.Title className="text-xl font-semibold text-white mb-2">
                    {t.bookingConfirmed}
                  </Dialog.Title>

                  <div className="text-gray-300 space-y-2">
                    <p>{t.thankYou}</p>
                    <p>
                      {t.emailConfirmation}{" "}
                      <span className="text-[#3DFEA3] font-medium">{email}</span>
                    </p>
                    <p className="text-sm">{t.checkInbox}</p>
                  </div>

                  <button
                    onClick={onClose}
                    className="mt-6 rounded-md bg-[#3DFEA3] px-6 py-2 text-sm font-semibold text-[#0A1A1F] shadow-sm hover:bg-[#3DFEA3]/90 focus:outline-none focus:ring-2 focus:ring-[#3DFEA3]/50 transform hover:scale-105 transition-all duration-300"
                  >
                    {t.gotIt}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
