import { useState } from 'react';
import { submitForm } from '../services/form.service';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
  consent: false
};

export const useContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.consent) {
      setError('Please agree to the data processing terms');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await submitForm(formData);
      setSuccess(true);
      setFormData(initialState);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    success,
    handleChange,
    handleSubmit
  };
};