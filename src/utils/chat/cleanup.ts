import { WindowWithChat } from './types';

export const cleanupWidget = () => {
  try {
    // Remove any existing widget elements
    const widgetElements = document.querySelectorAll('[id^="zappr-"]');
    widgetElements.forEach(element => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });

    // Cleanup global objects
    const win = window as WindowWithChat;
    delete win.zapprLoaded;
    delete win.widgetConfigs;
  } catch (error) {
    console.warn('Error cleaning up chat widget:', error);
  }
};