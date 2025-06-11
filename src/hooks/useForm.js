import { useState } from 'react';

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormData(initialValues);

  return { formData, handleInputChange, resetForm };
};
