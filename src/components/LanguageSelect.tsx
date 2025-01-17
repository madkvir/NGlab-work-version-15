import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { LANGUAGES } from "../config/constants";
import LanguageFlag from "./LanguageFlag";
import { UseFormRegister } from "react-hook-form";
import { BookingFormData } from "../types/booking";

interface LanguageSelectProps {
  value: string;
  onChange: (value: "English" | "Deutsch" | "Español" | "Русский" | "Українська") => void;
  register: UseFormRegister<BookingFormData>;
}

export function LanguageSelect({ value, onChange, register }: LanguageSelectProps) {
  const { ref, ...rest } = register("language", { required: true });

  return (
    <div className="relative">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            <Listbox.Button className="relative w-full rounded-md border border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5 py-2 pl-3 pr-10">
              <div className="flex items-center">
                <LanguageFlag language={value} />
                <span className="ml-2 block truncate">{value}</span>
              </div>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#152328] py-1 text-sm shadow-lg border border-[#3DFEA3]/20 focus:outline-none">
                {LANGUAGES.map((language) => (
                  <Listbox.Option
                    key={language}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-3 pr-9 ${
                        active ? "bg-[#1f3238]" : ""
                      }`
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <div className="flex items-center">
                        <LanguageFlag language={language} />
                        <span
                          className={`ml-2 block truncate ${
                            selected ? "font-semibold text-white" : "text-gray-300"
                          }`}
                        >
                          {language}
                        </span>
                        {selected && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#3DFEA3]">
                            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
      <input type="hidden" {...rest} ref={ref} value={value} />
    </div>
  );
}
