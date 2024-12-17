import type { ConsentSettings } from './types';

declare global {
  interface Window {
    Termly: {
      initialize(): void;
      onReady(callback: () => void): void;
      getConsentState(): {
        analytics?: boolean;
        advertising?: boolean;
        functional?: boolean;
        preferences?: boolean;
      };
    };
  }
}

export const initTermly = (): void => {
  // Termly is loaded via script tag in index.html
  if (window.Termly?.initialize) {
    window.Termly.initialize();
  }
};

export const getTermlyConsent = (): Partial<ConsentSettings> => {
  if (!window.Termly) {
    return {};
  }

  const consentState = window.Termly.getConsentState();
  const settings: Partial<ConsentSettings> = {
    analytics_storage: consentState.analytics ? 'granted' : 'denied',
    ad_storage: consentState.advertising ? 'granted' : 'denied',
    functionality_storage: consentState.functional ? 'granted' : 'denied',
    personalization_storage: consentState.preferences ? 'granted' : 'denied',
    security_storage: 'granted' // Always granted for essential functionality
  };

  return settings;
};