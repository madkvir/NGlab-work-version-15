import axios from 'axios';
import type { FormData } from '../types/form';

const WEBHOOK_URL = 'https://api.keepincrm.com/callbacks/webhook/oxdrqwvyuhxC';

export const submitForm = async (formData: FormData) => {
  try {
    // Create a proxy URL to avoid CORS issues
    const proxyUrl = 'https://corsproxy.io/?';
    const encodedUrl = encodeURIComponent(WEBHOOK_URL);
    const finalUrl = `${proxyUrl}${encodedUrl}`;

    const payload = {
      company: "Website Lead",
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
      source: 'Website Contact Form',
      metadata: {
        consent: formData.consent ? 'yes' : 'no',
        website: 'neurogenlab.de',
        form_submission_date: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        selectedServices: formData.services ? 
          Object.entries(formData.services)
            .filter(([_, selected]) => selected)
            .map(([service]) => service)
            .join(', ') : ''
      }
    };

    const response = await axios.post(finalUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.data) {
      throw new Error('No response from server');
    }

    return true;
  } catch (error) {
    console.error('Form submission error:', error);
    throw new Error(error instanceof Error ? error.message : 'Failed to submit form');
  }
};