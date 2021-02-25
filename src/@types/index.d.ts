import { InputHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "warning" | "success" | "purple" | "danger" | "navy" |
  "outline-primary" | "outline-secondary" | "outline-warning" | "outline-success" | "outline-purple" | "outline-danger" | "outline-navy"
  size?: 'small' | 'medium' | 'large'
  label: ReactNode
  width?: "auto" | "block"
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: 'small' | 'normal' | 'large'
  subline?: boolean
  password?: boolean
  type?: 'text' | 'password' | 'email' | 'url' | 'date' | 'datetime-local' | 'time' | 'week' | 'tel' | 'search' | 'month' | 'number'
}

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: ReactNode
  type?: 'radio' | 'checkbox'
}

export interface SwitchProps {
  onClick?: (event: MouseEvent<HTMLLabelElement, MouseEvent>) => void
}

export interface AlertProps {
  variant?: "primary" | "secondary" | "warning" | "success" | "purple" | "danger" | "navy"
}

export interface FloatingProps extends Omit<InputProps, 'password'> {
  label: string
}

export interface FormControlProps extends InputProps {
  label: string
}