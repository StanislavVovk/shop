import { ErrorMessage } from '@hookform/error-message'
import { HTMLInputTypeAttribute, FC } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { useController, Mode, UseFormSetValue } from 'react-hook-form'
import { useAppSelector } from 'common/common'
import style from './input.module.css'

export interface IInputProps {
  className?: string
  control: any
  disabled?: boolean
  errors: { [x: string]: any }
  labelText: string
  mode?: Mode
  name: string
  placeholder?: string
  type?: HTMLInputTypeAttribute
  setValue?: UseFormSetValue<Record<string, any>>
}
// God component?
export const InputComponent: FC<IInputProps> = (
  {
    name,
    control,
    type = 'text',
    placeholder,
    errors,
    disabled = false,
    labelText,
    className = 'mb-4',
    mode = 'all'
  }): JSX.Element => {
  const { field } = useController({
    name,
    control
  })
  const {
    onChange,
    value
  } = field
  const errorState = useAppSelector(state => state.shopReducer.error)
  return (
    <Form.Group className={className.concat(' ', style.Input)}>
      <FloatingLabel label={labelText}>
        <Form.Control
          onChange={onChange}
          value={value}
          type={type}
          isInvalid={!!errors[name] || !!errorState}
          isValid={mode !== 'all' ? !errors[name] && value : undefined}
          disabled={disabled}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} errors={errors}/>
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  )
}
