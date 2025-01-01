import { ScriptLoadOptions, ScriptLoadResult } from './types';
import { delay } from '../helpers';

export const loadScript = async (
  src: string,
  options: ScriptLoadOptions = {}
): Promise<ScriptLoadResult> => {
  const {
    retries = 3,
    retryDelay = 1000,
    ignoreErrors = false,
    ...scriptOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const existingScript = document.getElementById(scriptOptions.id || '') as HTMLScriptElement;
      if (existingScript) {
        return { success: true, script: existingScript };
      }

      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';

      if (scriptOptions.id) script.id = scriptOptions.id;
      if (scriptOptions.async) script.async = true;
      if (scriptOptions.defer) script.defer = true;

      const loadPromise = new Promise<HTMLScriptElement>((resolve, reject) => {
        script.onload = () => {
          scriptOptions.onLoad?.();
          resolve(script);
        };
        script.onerror = (error) => {
          if (!ignoreErrors) {
            scriptOptions.onError?.(error);
          }
          reject(new Error(`Failed to load script: ${src}`));
        };
      });

      document.body.appendChild(script);
      const loadedScript = await loadPromise;
      return { success: true, script: loadedScript };
    } catch (error) {
      lastError = error as Error;
      if (attempt < retries) {
        await delay(retryDelay);
        continue;
      }
    }
  }

  return {
    success: false,
    error: lastError || new Error(`Failed to load script: ${src}`)
  };
};