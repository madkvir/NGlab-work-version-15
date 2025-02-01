import { LANGUAGES, SUBJECTS, POSITIONS } from '../config/constants';

export type Language = typeof LANGUAGES[number];
export type BookingSubject = typeof SUBJECTS[number];
export type Position = typeof POSITIONS[number];

export interface BookingFormData {
  name: string;
  email: string;
  website: string;
  subject: string;
  timezone: string;
  position: string;
  comments?: string;
  language: string;
  datetime: string | Date;
  'bot-field'?: string;
}