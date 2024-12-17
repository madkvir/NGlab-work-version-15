import axios from 'axios';
import type { FormData, CRMPayload } from '../types/form';

const WEBHOOK_URL = 'https://api.keepincrm.com/callbacks/webhook/oxdrqwvyuhxC';

export class CRMError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CRMError';
  }
}

const transformFormData = (data: FormData): CRMPayload => ({
  company: "Website Lead",
  name: data.name,
  email: data.email,
  phone: data.phone || '',
  message: data.message,
  source: 'Website Contact Form',
  metadata: {
    consent: data.consent,
    website: 'neurogenlab.de',
    form_submission_date: new Date().toISOString(),
    url: window.location.href
  }
});

export const submitToCRM = async (data: FormData): Promise<void> => {
  try {
    const payload = transformFormData(data);
    const response = await axios.post(WEBHOOK_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.data) {
      throw new CRMError('No response from server');
    }

    return response.data;
  } catch (error) {
    console.error('CRM submission error:', error);
    
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new CRMError(
          error.response.data?.message || `Server error: ${error.response.status}`
        );
      } else if (error.request) {
        throw new CRMError('No response received from server');
      }
    }
    
    throw new CRMError('Failed to submit form');
  }
};