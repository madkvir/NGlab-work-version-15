import type { ConsentEvent, ConsentSettings } from "./types";
import { CONSENT_UPDATE_EVENT, CONSENT_DEFAULT_EVENT } from "./config";
import { getClientId } from "../tracking";
import { sendGTMEvent } from "@next/third-parties/google";

export const pushConsentEvent = async (
  eventType: typeof CONSENT_UPDATE_EVENT | typeof CONSENT_DEFAULT_EVENT,
  settings: ConsentSettings,
  status: string
): Promise<void> => {
  try {
    const clientId = await getClientId();

    const event: ConsentEvent = {
      event: eventType,
      consent_status: status,
      consent_settings: settings,
      client_id: clientId,
    };

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push(event);
    sendGTMEvent(event);
  } catch (error) {
    console.warn("Error pushing consent event:", error);

    // Still push the event without client ID if there's an error
    window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: eventType,
    //   consent_status: status,
    //   consent_settings: settings,
    // });
    sendGTMEvent({
      event: eventType,
      consent_status: status,
      consent_settings: settings,
    });
  }
};
