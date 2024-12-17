import ReactGA from 'react-ga4';
import { getTermlyConsent } from './consent/termly';

const generateClientId = (): string => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  return `${timestamp}.${random}`;
};

export const getClientId = async (): Promise<string> => {
  try {
    const storedClientId = localStorage.getItem('ga_client_id');
    if (storedClientId) {
      return storedClientId;
    }

    const newClientId = generateClientId();
    localStorage.setItem('ga_client_id', newClientId);
    return newClientId;
  } catch (error) {
    console.warn('Error handling client ID:', error);
    return generateClientId();
  }
};

export const pushFormDataToDataLayer = async (formName: string, formData: Record<string, any>) => {
  const clientId = await getClientId();
  const consentSettings = getTermlyConsent();

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'form_submission',
    form_name: formName,
    client_id: clientId,
    consent_settings: consentSettings,
    form_data: {
      ...formData,
      submission_timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title
    }
  });
};

export const initializeTracking = () => {
  const consentSettings = getTermlyConsent();
  
  // Only initialize GA4 if analytics consent is granted
  if (consentSettings.analytics_storage === 'granted') {
    ReactGA.initialize('G-ZMP9R7ZQ8M', {
      gaOptions: {
        send_page_view: false
      }
    });

    ReactGA.send({ 
      hitType: 'pageview',
      page: window.location.pathname 
    });
  }
};