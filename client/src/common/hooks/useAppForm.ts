
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm } from 'react-hook-form';
import type { Schema } from 'joi';
import type { ValidationMode } from 'react-hook-form';
import { UseFormMode } from '../common';

interface IUseAppForm {
  validationSchema?: Schema
  defaultValues: Record<string, any>
  mode?: keyof ValidationMode
}

export const useAppForm = ({ validationSchema, defaultValues, mode }: IUseAppForm) => {
  const {
    control,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
    handleSubmit,
    setError,
    setValue
  } = useForm({
    defaultValues,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined,
    mode: mode ?? UseFormMode.onSubmit
  });

  return {
    control,
    isValid,
    isDirty,
    errors,
    reset,
    watch,
    handleSubmit,
    setError,
    setValue
  };
};
