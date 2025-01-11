import type { ConsentSettings } from "./types";
import { defaultConsentSettings, consentModeConfig } from "./config";
import { pushConsentEvent } from "./dataLayer";
import { CONSENT_DEFAULT_EVENT } from "./config";
import { sendGTMEvent } from "@next/third-parties/google";

export const initConsentMode = (): void => {
  // Initialize gtag if not already defined
  window.gtag =
    window.gtag ||
    function () {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };

  // Set default consent mode configuration
  window.gtag("consent", "default", {
    ...defaultConsentSettings,
    ...consentModeConfig,
  });

  // Push initial consent event
  // pushConsentEvent(CONSENT_DEFAULT_EVENT, defaultConsentSettings, "default");
  sendGTMEvent({
    event: CONSENT_DEFAULT_EVENT,
    consent_status: "default",
    consent_settings: defaultConsentSettings,
  });
};
