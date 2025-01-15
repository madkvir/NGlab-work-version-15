import axios from 'axios';
import type { FormData } from '../types/form';

// Use a CORS proxy to handle the requests
const CORS_PROXY = 'https://corsproxy.io/?';
const API_URL = `${CORS_PROXY}${encodeURIComponent('https://api.keepincrm.com/callbacks/webhook/oxdrqwvyuhxC')}`;

export class ApiError extends Error {
  constructor(message: string, public readonly code?: string) {
    super(message);
    this.name = 'ApiError';
  }
}

const api = axios.create({
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(
          error.response.data?.message || `Server error: ${error.response.status}`,
          error.response.status.toString()
        );
      } else if (error.request) {
        throw new ApiError('No response received from server', 'TIMEOUT');
      }
    }
    throw new ApiError('Failed to submit form');
  }
);

export const submitContactForm = async (data: FormData) => {
  const payload = {
    ...data,
    metadata: {
      source: 'website_contact_form',
      domain: 'neurogenlab.de',
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    }
  };

  const response = await api.post(API_URL, payload);
  return response.data;
};