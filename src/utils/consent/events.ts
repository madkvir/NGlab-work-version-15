import type { ConsentSettings } from "./types";
import { sendGTMEvent } from "@next/third-parties/google";

export const CONSENT_EVENTS = {
  ACCEPT_ALL: "consent_accept_all",
  REJECT_ALL: "consent_reject_all",
  CUSTOM_PREFERENCES: "consent_custom_preferences",
} as const;

export const pushConsentEvent = (eventName: string, settings: ConsentSettings) => {
  // window.dataLayer = window.dataLayer || [];
  // window.dataLayer.push({
  //   event: eventName,
  //   consent_settings: settings,
  //   timestamp: new Date().toISOString()
  // });
  sendGTMEvent({
    event: eventName,
    consent_settings: settings,
    timestamp: new Date().toISOString(),
  });
};
