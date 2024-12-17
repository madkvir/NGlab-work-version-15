export type ConsentType = 
  | 'analytics_storage'
  | 'ad_storage' 
  | 'functionality_storage'
  | 'personalization_storage'
  | 'security_storage'
  | 'region'
  | 'wait_for_update';

export type ConsentValue = 'granted' | 'denied';

export interface ConsentSettings {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  functionality_storage: ConsentValue;
  personalization_storage: ConsentValue;
  security_storage: ConsentValue;
}

export interface ConsentModeConfig {
  url_passthrough: boolean;
  region: string[];
  wait_for_update: number;
}

export interface ConsentEvent {
  event: string;
  consent_status: string;
  consent_settings?: ConsentSettings;
  client_id?: string;
}