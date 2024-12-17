import type { ConsentSettings } from './types';
import { defaultConsentSettings, consentModeConfig, CONSENT_UPDATE_EVENT, CONSENT_DEFAULT_EVENT } from './config';
import { getStoredConsent, setStoredConsent } from './storage';
import { pushConsentEvent } from './dataLayer';

export const initConsentMode = (): void => {
  window.gtag = window.gtag || function() {
    (window.dataLayer = window.dataLayer || []).push(arguments);
  };

  const storedSettings = getStoredConsent();
  
  // Initialize Google's consent mode with default settings
  window.gtag('consent', 'default', {
    ...defaultConsentSettings,
    ...consentModeConfig
  });

  // Push initial consent state to dataLayer
  pushConsentEvent(CONSENT_DEFAULT_EVENT, storedSettings, 'default');
};

export const updateConsent = async (settings: Partial<ConsentSettings>): Promise<void> => {
  const currentSettings = getStoredConsent();
  const updatedSettings = { ...currentSettings, ...settings };
  
  // Update Google's consent mode
  window.gtag('consent', 'update', updatedSettings);
  
  // Store the updated settings
  setStoredConsent(updatedSettings);
  
  // Push consent update event to dataLayer
  await pushConsentEvent(
    CONSENT_UPDATE_EVENT,
    updatedSettings,
    Object.values(updatedSettings).every(value => value === 'granted')
      ? 'all_accepted'
      : 'custom_preferences'
  );
};

export const checkConsentStatus = (type: keyof ConsentSettings): boolean => {
  const settings = getStoredConsent();
  return settings[type] === 'granted';
};