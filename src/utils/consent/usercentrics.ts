import type { ConsentSettings } from "./types";

// declare global {
//   interface Window {
//     UC_UI: {
//       isInitialized(): boolean;
//       acceptAllConsents(): void;
//       rejectAllConsents(): void;
//       showFirstLayer(): void;
//       hideFirstLayer(): void;
//       getServicesBaseInfo(): Array<{
//         id: string;
//         consent: {
//           status: boolean;
//         };
//       }>;
//     };
//   }
// }

export const initUsercentrics = (): void => {
  // Usercentrics is loaded via script tag in index.html
  // This function can be used for additional initialization if needed
};

export const getUsercentricsConsent = (): Partial<ConsentSettings> => {
  if (!window.UC_UI?.isInitialized()) {
    return {};
  }

  const services = window.UC_UI.getServicesBaseInfo();
  const settings: Partial<ConsentSettings> = {};

  services.forEach((service) => {
    const consentValue = service.consent.status ? "granted" : "denied";

    // Map Usercentrics service IDs to consent settings
    switch (service.id) {
      case "analytics":
        settings.analytics_storage = consentValue;
        break;
      case "advertising":
        settings.ad_storage = consentValue;
        break;
      case "functionality":
        settings.functionality_storage = consentValue;
        break;
      case "personalization":
        settings.personalization_storage = consentValue;
        break;
    }
  });

  return settings;
};

export const showConsentBanner = (): void => {
  if (window.UC_UI?.isInitialized()) {
    window.UC_UI.showFirstLayer();
  }
};

export const hideConsentBanner = (): void => {
  if (window.UC_UI?.isInitialized()) {
    window.UC_UI.hideFirstLayer();
  }
};

export const acceptAllConsents = (): void => {
  if (window.UC_UI?.isInitialized()) {
    window.UC_UI.acceptAllConsents();
  }
};

export const rejectAllConsents = (): void => {
  if (window.UC_UI?.isInitialized()) {
    window.UC_UI.rejectAllConsents();
  }
};
