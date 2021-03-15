import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Color, Size } from '../../@types'

declare type TButton = FC<IButtonProps>

export default interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean
  label: ReactNode
  size?: Size
  variant: Color | "outline-danger"| "outline-dark" | "outline-navy" | "outline-primary" | "outline-purple" | "outline-secondary" | "outline-success" | "outline-warning"
}
