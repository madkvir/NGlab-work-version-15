export type ConsentType =
  | "analytics_storage"
  | "ad_storage"
  | "functionality_storage"
  | "personalization_storage"
  | "security_storage";

export interface ConsentSettings {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  functionality_storage: "granted" | "denied";
  personalization_storage: "granted" | "denied";
  security_storage: "granted" | "denied";
}

export const defaultConsentSettings: ConsentSettings = {
  analytics_storage: "denied",
  ad_storage: "denied",
  functionality_storage: "denied",
  personalization_storage: "denied",
  security_storage: "granted", // Security is always granted for essential functionality
};

export const initConsentMode = () => {
  window.gtag =
    window.gtag ||
    function () {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };

  // Initialize consent mode with default settings
  window.gtag("consent", "default", defaultConsentSettings);
};

export const updateConsent = (settings: Partial<ConsentSettings>) => {
  window.gtag("consent", "update", settings);
};

export const getStoredConsent = (): ConsentSettings => {
  if (typeof window === "undefined") {
    return defaultConsentSettings; // Return defaults for non-browser environments
  }
  const stored = localStorage.getItem("userConsent");
  return stored ? JSON.parse(stored) : defaultConsentSettings;
};

export const setStoredConsent = (settings: ConsentSettings) => {
  localStorage.setItem("userConsent", JSON.stringify(settings));
};
