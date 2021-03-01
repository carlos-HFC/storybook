import { InputHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode, SelectHTMLAttributes } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "purple" | "navy" |
  "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-purple" | "outline-navy"
  size?: 'small' | 'medium' | 'large'
  label: ReactNode
  width?: "auto" | "block"
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'small' | 'normal' | 'large'
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
  subline?: boolean
  password?: boolean
  type?: 'text' | 'password' | 'email' | 'url' | 'date' | 'datetime-local' | 'time' | 'week' | 'tel' | 'search' | 'month' | 'number'
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: ReactNode
  type?: 'radio' | 'checkbox'
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
}

export interface SwitchProps {
  onClick?: (event: MouseEvent<HTMLLabelElement, MouseEvent>) => void
}

export interface AlertProps {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "purple" | "navy"
}

export interface FloatingProps extends Omit<InputProps, 'password'> {
  label: string
}

export interface FormControlProps extends InputProps, SelectProps {
  label: string
  select?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'small' | 'normal' | 'large'
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
}