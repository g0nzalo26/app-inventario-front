import { useState, ChangeEvent } from "react";

type FormState = Record<string, any>;

export const useForm = <T extends FormState>(initialForm: T) => {
  const [formState, setFormState] = useState<T>(initialForm);

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const onResetForm = () => setFormState(initialForm);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};
