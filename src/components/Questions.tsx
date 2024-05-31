import { useState } from 'react';
import { FormAnswers, initialFormAnswers } from '../config';
import FormForPlanning from './FormForPlanning';

const Questions = () => {
  const [formAnswers, setFormAnswers] =
    useState<FormAnswers>(initialFormAnswers);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAnswers((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <FormForPlanning formAnswers={formAnswers} handleChange={handleChange} />
  );
};

export default Questions;
