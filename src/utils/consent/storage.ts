import type { ConsentSettings } from './types';
import { defaultConsentSettings, STORAGE_KEY } from './config';

export const getStoredConsent = (): ConsentSettings => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : defaultConsentSettings;
  } catch (error) {
    console.warn('Error reading consent settings:', error);
    return defaultConsentSettings;
  }
};

export const setStoredConsent = (settings: ConsentSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (error) {
    console.warn('Error saving consent settings:', error);
  }
};

export const clearStoredConsent = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn('Error clearing consent settings:', error);
  }
};