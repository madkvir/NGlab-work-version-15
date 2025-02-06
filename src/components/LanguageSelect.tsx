import React from "react";
import { LANGUAGES } from "../config/constants";
import { UseFormRegister } from "react-hook-form";
import { BookingFormData } from "../types/booking";

interface LanguageSelectProps {
  value: string;
  onChange: (value: string) => void;
  register: UseFormRegister<BookingFormData>;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({ value, onChange, register }) => {
  const { ref, ...rest } = register("language");

  return (
    <select
      {...rest}
      ref={ref}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        rest.onChange(e);
      }}
      className="w-full rounded-md border-[#3DFEA3]/20 bg-[#152328] text-white shadow-sm focus:border-[#3DFEA3] focus:ring focus:ring-[#3DFEA3]/20 text-sm leading-5"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};
