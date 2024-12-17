import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

// Page view tracking
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Event tracking
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// User tracking
export const setUser = (userId: string) => {
  ReactGA.set({ userId });
};

// Custom dimension tracking
export const setCustomDimension = (dimensionName: string, value: string) => {
  ReactGA.set({ [dimensionName]: value });
};