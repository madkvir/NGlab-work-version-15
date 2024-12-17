export interface ScriptLoadOptions {
  async?: boolean;
  defer?: boolean;
  id?: string;
  retries?: number;
  retryDelay?: number;
  onLoad?: () => void;
  onError?: (error: Error | Event) => void;
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const loadScript = async (src: string, options: ScriptLoadOptions = {}): Promise<HTMLScriptElement> => {
  const { retries = 3, retryDelay = 1000, ...rest } = options;
  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        return existingScript as HTMLScriptElement;
      }

      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';

      if (rest.id) {
        script.id = rest.id;
      }
      if (rest.async) {
        script.async = true;
      }
      if (rest.defer) {
        script.defer = true;
      }

      const loadPromise = new Promise<HTMLScriptElement>((resolve, reject) => {
        script.onload = () => {
          rest.onLoad?.();
          resolve(script);
        };

        script.onerror = (error) => {
          rest.onError?.(error);
          reject(new Error(`Failed to load script: ${src}`));
        };
      });

      document.body.appendChild(script);
      return await loadPromise;
    } catch (error) {
      lastError = error as Error;
      if (attempt < retries) {
        console.warn(`Attempt ${attempt + 1}/${retries} failed, retrying in ${retryDelay}ms...`);
        await delay(retryDelay);
      }
    }
  }

  throw lastError || new Error(`Failed to load script after ${retries} attempts`);
};

export const removeScript = (src: string): void => {
  const script = document.querySelector(`script[src="${src}"]`);
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
  }
};