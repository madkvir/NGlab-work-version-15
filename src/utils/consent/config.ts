import type { ConsentSettings, ConsentModeConfig } from './types';

export const defaultConsentSettings: ConsentSettings = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted'
};

export const consentModeConfig: ConsentModeConfig = {
  url_passthrough: true,
  region: ['DE', 'AT', 'CH', 'GB'],
  wait_for_update: 500
};

export const STORAGE_KEY = 'usercentrics_consent';
export const CONSENT_UPDATE_EVENT = 'consent_update';
export const CONSENT_DEFAULT_EVENT = 'consent_default';