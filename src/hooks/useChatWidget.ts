import { useState, useEffect, useCallback } from 'react';
import { WindowWithChat } from '../utils/chat/types';
import { DEFAULT_CONFIG } from '../utils/chat/config';
import { WIDGET_SCRIPT_URL } from '../utils/chat/config';
import { cleanupWidget } from '../utils/chat/cleanup';
import { loadScript, removeScript } from '../utils/script-loader';

export const useChatWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((error: Error | Event) => {
    console.warn('Chat widget error:', error);
    setError('Failed to load chat widget. Please try refreshing the page.');
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const win = window as WindowWithChat;
    let mounted = true;

    const initializeWidget = async () => {
      try {
        win.zapprLoaded = function() {
          try {
            win.zappr.setPosition('bottom-right');
            if (mounted) {
              setIsLoaded(true);
              setIsLoading(false);
            }
          } catch (error) {
            handleError(error as Error);
          }
        };

        win.widgetConfigs = [DEFAULT_CONFIG];

        await loadScript(WIDGET_SCRIPT_URL, {
          defer: true,
          async: true,
          id: 'zappr-widget-script',
          retries: 3,
          retryDelay: 1500,
          onLoad: () => {
            if (mounted) {
              setIsLoaded(true);
              setIsLoading(false);
            }
          },
          onError: handleError
        });
      } catch (error) {
        handleError(error as Error);
      }
    };

    initializeWidget();

    return () => {
      mounted = false;
      removeScript(WIDGET_SCRIPT_URL);
      cleanupWidget();
    };
  }, [handleError]);

  return { isLoading, isLoaded, error };
};