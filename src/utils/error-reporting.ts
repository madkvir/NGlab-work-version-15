interface ErrorDetails {
  message: string;
  stack?: string;
  context?: Record<string, unknown>;
}

export const captureException = (error: Error | unknown, context?: Record<string, unknown>) => {
  const errorDetails: ErrorDetails = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    context
  };

  // Log error details
  console.error('Error captured:', errorDetails);

  // Here you would typically send the error to your error reporting service
  // For example: Sentry, LogRocket, etc.
  
  // For now, we'll just log to console in production
  if (process.env.NODE_ENV === 'production') {
    // You could send to a logging endpoint or service
    console.error('Production error:', errorDetails);
  }
};