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