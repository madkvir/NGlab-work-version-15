import axios from 'axios';
import type { FormData } from '../types/form';

const WEBHOOK_URL = '/api/webhook';

export class WebhookError extends Error {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = 'WebhookError';
  }
}

export const submitToWebhook = async (data: FormData) => {
  try {
    const response = await axios.post(WEBHOOK_URL, {
      ...data,
      metadata: {
        source: 'website_contact_form',
        domain: 'neurogenlab.de',
        timestamp: new Date().toISOString()
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new WebhookError(
          error.response.data?.message || 'Server error',
          error.response.status.toString()
        );
      } else if (error.request) {
        throw new WebhookError('No response received from server', 'TIMEOUT');
      }
    }
    throw new WebhookError('Failed to submit form');
  }
};