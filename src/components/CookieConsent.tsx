import React, { useEffect } from 'react';
import { initTermly } from '../utils/consent/termly';

const CookieConsent: React.FC = () => {
  useEffect(() => {
    initTermly();
  }, []);

  // Termly handles the UI, so we don't need to render anything
  return null;
};

export default CookieConsent;