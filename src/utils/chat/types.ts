export interface WindowWithChat extends Window {
  zapprLoaded?: () => void;
  zappr?: any;
  widgetConfigs?: any;
}

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
