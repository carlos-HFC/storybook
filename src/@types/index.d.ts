import { InputHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, TableHTMLAttributes } from "react"

interface Validation {
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "purple" | "navy" |
  "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-purple" | "outline-navy"
  size?: 'small' | 'medium' | 'large'
  label: ReactNode
  width?: "auto" | "block"
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, Validation {
  variant?: 'small' | 'normal' | 'large'
  password?: boolean
  type?: 'text' | 'password' | 'email' | 'url' | 'date' | 'datetime-local' | 'time' | 'week' | 'tel' | 'search' | 'month' | 'number'
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement>, Validation {
  id: string
  name: string
  label: ReactNode
  radio?: boolean
  checkbox?: boolean
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
  textarea?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, Validation {
  variant?: 'small' | 'normal' | 'large'
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, Validation {
  variant?: 'small' | 'normal' | 'large'
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "purple" | "navy" | "dark"
  striped?: boolean
  border?: boolean
}