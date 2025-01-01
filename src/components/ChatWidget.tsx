import React, { Suspense } from 'react';
import { useChatWidget } from '../hooks/useChatWidget';
import ErrorBoundary from '../utils/error-boundary';
import LoadingSpinner from './chat/LoadingSpinner';
import ErrorMessage from './chat/ErrorMessage';

const ChatWidget: React.FC = () => {
  const { isLoading, error } = useChatWidget();

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return null;
};

const ChatWidgetWithErrorBoundary: React.FC = () => (
  <ErrorBoundary
    fallback={<ErrorMessage message="Chat widget failed to load" />}
  >
    <Suspense fallback={<LoadingSpinner />}>
      <ChatWidget />
    </Suspense>
  </ErrorBoundary>
);

export default ChatWidgetWithErrorBoundary;