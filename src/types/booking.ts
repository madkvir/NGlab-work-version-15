import { LANGUAGES, SUBJECTS, POSITIONS } from '../config/constants';

export type Language = typeof LANGUAGES[number];
export type BookingSubject = typeof SUBJECTS[number];
export type Position = typeof POSITIONS[number];

export interface BookingFormData {
  name: string;
  language: Language;
  email: string;
  website: string; // Removed optional flag
  timezone: string;
  subject: BookingSubject;
  position: Position;
  datetime: Date;
  comments?: string;
}