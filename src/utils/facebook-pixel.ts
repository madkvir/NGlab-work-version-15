import ReactPixel from 'react-facebook-pixel';

const options = {
  autoConfig: true,
  debug: false
};

// Initialize Facebook Pixel
export const initFacebookPixel = (pixelId: string) => {
  ReactPixel.init(pixelId, undefined, options);
};

// Page view tracking
export const trackPageView = () => {
  ReactPixel.pageView();
};

// Track custom events
export const trackEvent = (eventName: string, data?: object) => {
  ReactPixel.track(eventName, data);
};

// Track standard events
export const trackCustomEvent = (eventName: string, data?: object) => {
  ReactPixel.trackCustom(eventName, data);
};

// Track user data
export const setUserData = (data: object) => {
  ReactPixel.setUserData(data);
};