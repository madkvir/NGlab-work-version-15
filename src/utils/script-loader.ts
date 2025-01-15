interface ScriptLoadOptions {
  async?: boolean;
  defer?: boolean;
  id?: string;
  onLoad?: () => void;
  onError?: (error: Error | Event) => void;
  retries?: number;
  retryDelay?: number;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loadScript = async (
  src: string, 
  options: ScriptLoadOptions = {}
): Promise<HTMLScriptElement> => {
  const {
    retries = 3,
    retryDelay = 1000,
    ...scriptOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Check if script already exists
      const existingScript = document.getElementById(scriptOptions.id || '') as HTMLScriptElement;
      if (existingScript) {
        return existingScript;
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
          scriptOptions.onError?.(error);
          reject(new Error(`Failed to load script: ${src}`));
        };
      });

      document.body.appendChild(script);
      return await loadPromise;
    } catch (error) {
      lastError = error as Error;
      if (attempt < retries) {
        await delay(retryDelay);
        continue;
      }
    }
  }

  throw lastError || new Error(`Failed to load script: ${src}`);
};

export const removeScript = (id: string): void => {
  const script = document.getElementById(id);
  if (script?.parentNode) {
    script.parentNode.removeChild(script);
  }
};