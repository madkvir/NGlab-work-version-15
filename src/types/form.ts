export interface FormData {
  name?: string;
  email: string;
  phone?: string;
  message?: string;
  consent: boolean;
  type?: string;
  source?: string;
  services?: {
    aiChatBot: boolean;
    aiVoiceBot: boolean;
    customDevelopment: boolean;
    aiAvatar: boolean;
    aiAssistant: boolean;
    counseling: boolean;
  };
}