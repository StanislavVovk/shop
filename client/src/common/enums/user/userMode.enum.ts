import type { ValidationMode } from 'react-hook-form';

interface UserModeKey {
  onChange: string
  onSubmit: string
}
export const UseFormMode: Record<keyof UserModeKey, keyof ValidationMode> = {
  onChange: 'onChange',
  onSubmit: 'onSubmit'
};
