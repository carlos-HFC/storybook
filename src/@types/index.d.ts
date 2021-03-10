import { InputHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, TableHTMLAttributes, ProgressHTMLAttributes, OlHTMLAttributes, CSSProperties } from "react"

type Color = {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "purple" | "navy" | "dark"
}

type Size = {
  size?: 'small' | 'normal' | 'large'
}

interface Validation {
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Color['variant'] | "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-purple" | "outline-navy"
  size?: Size['size']
  label: ReactNode
  width?: "auto" | "block"
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, Validation {
  variant?: Size['size']
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

export interface FormControlProps extends InputProps, SelectProps, TextareaProps {
  label: string
  field?: 'input' | 'select' | 'textarea'
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, Validation {
  variant?: Size['size']
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, Validation {
  variant?: Size['size']
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
  size?: Size['size'] | 'xtra'
}

export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  size?: Size['size']
}