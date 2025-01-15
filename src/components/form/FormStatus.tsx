import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormStatusProps {
  status: 'idle' | 'success' | 'error';
  error?: string | null;
}

const FormStatus: React.FC<FormStatusProps> = ({ status, error }) => {
  if (status === 'idle') return null;

  return (
    <div
      className={`flex items-start gap-3 text-sm p-4 rounded-lg mb-4 ${
        status === 'success'
          ? 'text-emerald-400 bg-emerald-500/10'
          : 'text-red-400 bg-red-500/10'
      }`}
    >
      {status === 'success' ? (
        <>
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>Your message has been sent successfully! We'll get back to you soon.</span>
        </>
      ) : (
        <>
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p>There was an error sending your message.</p>
            {error && <p className="text-xs opacity-80">{error}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default FormStatus;