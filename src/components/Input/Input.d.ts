import { FC, InputHTMLAttributes } from 'react';
import { Size, Validation } from '../../@types'

declare type TInput = FC<IInputProps>

export default interface IInputProps extends Validation, InputHTMLAttributes<HTMLInputElement> {
  password?: boolean
  type?: 'text' | 'password' | 'email' | 'url' | 'date' | 'datetime-local' | 'time' | 'week' | 'tel' | 'search' | 'month' | 'number'
  variant?: Size
}