import { captureException } from '../error-reporting';
import { isThirdPartyError } from '../helpers';

export const handleChatWidgetError = (error: Error | Event) => {
  // Always ignore chat widget errors - they're expected and handled internally
  if (error instanceof Error && (
    error.stack?.includes('zappr') ||
    error.message === 'Script error.' ||
    isThirdPartyError(error)
  )) {
    return;
  }
  
  captureException(error, { context: 'Chat widget' });
};

export const isChatWidgetError = (error: unknown): boolean => {
  if (error instanceof Error) {
    return error.stack?.includes('zappr') || 
           error.message === 'Script error.' || 
           isThirdPartyError(error);
  }
  return false;
};