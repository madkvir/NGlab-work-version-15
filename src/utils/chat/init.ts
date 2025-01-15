import type { WindowWithChat } from './types';
import { DEFAULT_CONFIG } from './config';
import { loadScript } from '../script-loader/load';
import { handleChatWidgetError } from './error-handlers';
import { CHAT_WIDGET_URL } from './constants';

export const initChatWidget = async (): Promise<void> => {
  const win = window as WindowWithChat;
  
  // Only initialize if not already loaded
  if (win.zappr) {
    return;
  }

  try {
    // Set up initialization callback
    win.zapprLoaded = () => {
      try {
        win.zappr?.setPosition('bottom-right');
      } catch (error) {
        handleChatWidgetError(error as Error);
      }
    };

    // Set widget config
    win.widgetConfigs = [DEFAULT_CONFIG];

    // Load widget script
    await loadScript(CHAT_WIDGET_URL, {
      async: true,
      defer: true,
      id: 'zappr-widget-script'
    });
  } catch (error) {
    handleChatWidgetError(error as Error);
  }
};