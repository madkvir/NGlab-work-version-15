import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface PhoneInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  countryCode: string;
  onCountryCodeChange: (code: string) => void;
  countryCodes: Array<{ code: string; country: string; flag: string }>;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  value,
  onChange,
  countryCode,
  onCountryCodeChange,
  countryCodes
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountry = countryCodes.find(c => c.code === countryCode);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">
        Phone Number
      </label>
      <div className="relative flex flex-col sm:flex-row gap-2">
        <div className="relative w-full sm:w-auto" ref={dropdownRef}>
          <button
            type="button"
            className="w-full sm:w-auto h-full px-3 bg-gray-800/50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 flex items-center justify-between gap-2"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{selectedCountry?.flag}</span>
              <span>{countryCode}</span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full sm:w-48 bg-gray-900/95 rounded-lg shadow-lg py-1 text-sm max-h-60 overflow-y-auto">
              {countryCodes.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className="w-full px-4 py-2 text-left hover:bg-gray-800/50 text-gray-300 hover:text-white flex justify-between items-center"
                  onClick={() => {
                    onCountryCodeChange(country.code);
                    setIsDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{country.flag}</span>
                    <span>{country.country}</span>
                  </div>
                  <span className="text-gray-400">{country.code}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <input
          type="tel"
          name="phone"
          value={value}
          onChange={onChange}
          placeholder="(999) 999-9999"
          className="flex-1 bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
        />
      </div>
    </div>
  );
};

export default PhoneInput;