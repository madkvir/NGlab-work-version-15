export {};

declare global {
  interface Window {
    dataLayer?: Object[];
    [key: string]: any;
  }
} 