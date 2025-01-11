import type { ConsentSettings } from "./types";
import { defaultConsentSettings } from "./config";

const STORAGE_KEY = "consent_settings";

export const getStoredConsent = (): ConsentSettings => {
  try {
    if (typeof window === "undefined") {
      return defaultConsentSettings;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultConsentSettings;
  } catch (error) {
    console.warn("Error reading consent settings:", error);
    return defaultConsentSettings;
  }
};

export const setStoredConsent = (settings: ConsentSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.warn("Error saving consent settings:", error);
  }
};

export const hasStoredConsent = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) !== null;
};
