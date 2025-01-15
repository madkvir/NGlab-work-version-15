import { captureException } from './error-reporting';
import { isThirdPartyError } from './helpers';

export const handleUncaughtError = (
  message: string | Event,
  source?: string,
  lineno?: number,
  colno?: number,
  error?: Error
) => {
  // Ignore third-party script errors
  if (error && isThirdPartyError(error)) {
    return false;
  }

  // Ignore generic "Script error" messages from cross-origin scripts
  if (message === 'Script error.' && !source && !lineno) {
    return false;
  }

  const errorInfo = {
    message: message instanceof Event ? message.type : message,
    source,
    lineno,
    colno,
    error
  };

  console.error('Uncaught error:', errorInfo);
  captureException(error || new Error(String(message)));
  
  return false;
};

export const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  // Ignore third-party promise rejections
  if (isThirdPartyError(event.reason)) {
    return;
  }

  console.error('Unhandled promise rejection:', event.reason);
  captureException(event.reason);
  event.preventDefault();
};