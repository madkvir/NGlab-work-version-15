import axios from 'axios';
import type { FormData } from '../types/form';

const WEBHOOK_URL = 'https://api.keepincrm.com/callbacks/webhook/oxdrqwvyuhxC';

export const submitFormToWebhook = async (formData: FormData) => {
  try {
    const webhookData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      metadata: {
        source: 'website_contact_form',
        domain: 'neurogenlab.de',
        url: window.location.href,
        timestamp: new Date().toISOString(),
        consent: formData.consent
      }
    };

    const response = await axios.post(WEBHOOK_URL, webhookData, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://neurogenlab.de'
      }
    });

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form'
    };
  }
};