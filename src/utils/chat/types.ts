export interface WindowWithChat extends Window {
  zapprLoaded: () => void;
  zappr: {
    setPosition: (position: string) => void;
  };
  widgetConfigs: ChatWidgetConfig[];
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