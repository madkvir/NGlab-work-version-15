import React from 'react';
import { Send } from 'lucide-react';
import GlowingButton from '../common/GlowingButton';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isSubmitting }) => {
  return (
    <GlowingButton
      onClick={() => {}}
      icon={<Send className="w-5 h-5" />}
      className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
    >
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </GlowingButton>
  );
};

export default SubmitButton;