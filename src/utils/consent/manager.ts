import type { ConsentSettings } from './types';
import { pushConsentEvent } from './dataLayer';
import { CONSENT_UPDATE_EVENT } from './config';
import { setStoredConsent } from './storage';

const updateConsent = (settings: ConsentSettings): void => {
  // Update GTM consent state
  window.gtag('consent', 'update', settings);
  
  // Store settings in localStorage
  setStoredConsent(settings);
  
  // Push event to dataLayer
  pushConsentEvent(CONSENT_UPDATE_EVENT, settings, 'updated');
};

export const acceptAllConsent = (settings: ConsentSettings): void => {
  updateConsent({
    ...settings,
    analytics_storage: 'granted',
    ad_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted'
  });
};

export const rejectAllConsent = (settings: ConsentSettings): void => {
  updateConsent({
    ...settings,
    analytics_storage: 'denied',
    ad_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied'
  });
};

export const updateCustomConsent = (settings: ConsentSettings): void => {
  updateConsent(settings);
};