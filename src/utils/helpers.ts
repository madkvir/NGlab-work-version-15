export const delay = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

export const isThirdPartyError = (error: unknown): boolean => {
  if (!error) return false;
  
  if (error instanceof Error) {
    // Check error stack
    if (error.stack) {
      return !error.stack.includes(window.location.origin);
    }
    // Check error message for common third-party indicators
    return error.message === 'Script error.' ||
           error.message.includes('cross-origin');
  }
  
  return false;
};

export const isProduction = (): boolean => 
  process.env.NODE_ENV === 'production';