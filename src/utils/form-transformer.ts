import type { FormData, CRMPayload } from '../types/form';
import { WEBSITE_CONFIG } from '../config/api.config';

export const transformFormDataToCRM = (data: FormData): CRMPayload => ({
  company: {
    name: "Website Lead",
    contacts: [{
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      description: data.message
    }],
    source: WEBSITE_CONFIG.source,
    custom_fields: {
      consent: data.consent,
      website: WEBSITE_CONFIG.domain,
      form_submission_date: new Date().toISOString()
    }
  }
});