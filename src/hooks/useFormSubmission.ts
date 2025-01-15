import { useState } from 'react';
import { submitForm } from '../services/form.service';

interface FormState {
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  error: string | null;
}

export const useFormSubmission = () => {
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    submitStatus: 'idle',
    error: null
  });

  const handleSubmit = async (formData: Record<string, any>) => {
    setFormState({
      isSubmitting: true,
      submitStatus: 'idle',
      error: null
    });

    try {
      await submitForm(formData);

      setFormState({
        isSubmitting: false,
        submitStatus: 'success',
        error: null
      });

      return true;
    } catch (error) {
      setFormState({
        isSubmitting: false,
        submitStatus: 'error',
        error: error instanceof Error ? error.message : 'Failed to submit form'
      });

      return false;
    }
  };

  return {
    ...formState,
    submitForm: handleSubmit
  };
};