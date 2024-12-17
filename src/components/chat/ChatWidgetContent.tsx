import React from 'react';
import { useChatWidget } from '../../hooks/useChatWidget';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const ChatWidgetContent = () => {
  const { isLoading, error } = useChatWidget();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return null;
};

export default ChatWidgetContent;