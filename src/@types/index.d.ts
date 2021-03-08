import { InputHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, TableHTMLAttributes, ProgressHTMLAttributes, OlHTMLAttributes, CSSProperties } from "react"

type Color = {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "purple" | "navy" | "dark"
}

interface Validation {
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Color['variant'] | "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-purple" | "outline-navy"
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

export interface AlertProps extends Color { }

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

export interface TableProps extends TableHTMLAttributes<HTMLTableElement>, Color {
  striped?: boolean
  border?: boolean
}

export interface ListProps extends HTMLAttributes<HTMLUListElement>, Color {
  borderless?: boolean
  horizontal?: boolean
}

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  width: number
  animated?: boolean
  striped?: boolean
  label?: boolean
  variant?: Exclude<Color['variant'], 'primary' | 'secondary'>
}

export interface BreadcrumbProps extends OlHTMLAttributes<HTMLOListElement> {
  itens: {
    href: string
    title: string
  }[]
  divider?: string
}

export interface LoaderProps extends Color {
  className?: string
  style?: CSSProperties
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onHide?: () => void
  children?: ReactNode
  centered?: boolean
  scrollable?: boolean
}