import React from 'react';

interface FlagProps {
  language: string;
}

const LanguageFlag: React.FC<FlagProps> = ({ language }) => {
  const flags: Record<string, JSX.Element> = {
    'English': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" className="w-4 h-3">
        <rect width="40" height="30" fill="#00247D"/>
        <path d="M0,0 L40,30 M40,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L40,30 M40,0 L0,30" stroke="#CF142B" strokeWidth="2"/>
        <path d="M20,0 L20,30 M0,15 L40,15" stroke="#fff" strokeWidth="10"/>
        <path d="M20,0 L20,30 M0,15 L40,15" stroke="#CF142B" strokeWidth="6"/>
      </svg>
    ),
    'Deutsch': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" className="w-4 h-3">
        <rect width="40" height="10" fill="#000"/>
        <rect width="40" height="10" y="10" fill="#DD0000"/>
        <rect width="40" height="10" y="20" fill="#FFCE00"/>
      </svg>
    ),
    'Русский': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" className="w-4 h-3">
        <rect width="40" height="10" fill="#fff"/>
        <rect width="40" height="10" y="10" fill="#0039A6"/>
        <rect width="40" height="10" y="20" fill="#D52B1E"/>
      </svg>
    ),
    'Español': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" className="w-4 h-3">
        <rect width="40" height="30" fill="#c60b1e"/>
        <rect width="40" height="10" y="10" fill="#ffc400"/>
      </svg>
    ),
    'Українська': (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30" className="w-4 h-3">
        <rect width="40" height="15" fill="#005bbb"/>
        <rect width="40" height="15" y="15" fill="#ffd500"/>
      </svg>
    ),
  };

  return flags[language] || null;
};

export default LanguageFlag;