// Chat widget configuration types and utilities
export interface ChatWidgetConfig {
  id: string;
  allowFullScreenMode: boolean;
  closeButton: boolean;
  miniChat: {
    enabled: boolean;
  };
  floatButton: {
    mode: string;
  };
}

export interface WindowWithChat extends Window {
  zapprLoaded: () => void;
  zappr: {
    setPosition: (position: string) => void;
  };
  widgetConfigs: ChatWidgetConfig[];
}

export const WIDGET_SCRIPT_URL = 'https://static.zappr.ai/static/widget-pro/embed-v1.0.0.min.js';

export const DEFAULT_CONFIG: ChatWidgetConfig = {
  id: "igji7Zt86Uqx4soAepvbqA",
  allowFullScreenMode: true,
  closeButton: true,
  miniChat: {
    enabled: true,
  },
  floatButton: {
    mode: 'always'
  }
};

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