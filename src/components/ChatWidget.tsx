import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ChatWidgetContent from './chat/ChatWidgetContent';
import ErrorMessage from './chat/ErrorMessage';

const ChatWidget = () => {
  return (
    <ErrorBoundary
      fallback={
        <ErrorMessage message="Something went wrong with the chat widget" />
      }
    >
      <ChatWidgetContent />
    </ErrorBoundary>
  );
};

export default ChatWidget;