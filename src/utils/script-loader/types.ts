export interface ScriptLoadOptions {
  async?: boolean;
  defer?: boolean;
  id?: string;
  onLoad?: () => void;
  onError?: (error: Error | Event) => void;
  retries?: number;
  retryDelay?: number;
  ignoreErrors?: boolean;
}

export interface ScriptLoadResult {
  success: boolean;
  script?: HTMLScriptElement;
  error?: Error;
}