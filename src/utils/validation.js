import { useState } from 'react';

export default function useValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isInputValid, setIsInputValid] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const validationMessage = e.target.validationMessage;
    const inputValid = e.target.validity.valid;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsInputValid({ ...isInputValid, [name]: inputValid });

    setIsFormValid(e.target.closest('form').checkValidity());
  }

  function setSubmitting(value) {
    setIsSubmitting(value);
  }

  return {
    handleChange,
    values,
    setValues,
    errors,
    isInputValid,
    setIsInputValid,
    isFormValid,
    setIsFormValid,
    isSubmitting,
    setSubmitting,
  };
}
