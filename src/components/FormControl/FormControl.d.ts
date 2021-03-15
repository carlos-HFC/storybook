import { CSSProperties, FC, ReactNode } from "react";
import { IInputProps, ISelectProps, ITextareaProps } from "..";
import { Size, Validation } from "../../@types";

declare type TFormControl = FC<IFormControlProps & IInputProps & ISelectProps & ITextareaProps>

export default interface IFormControlProps extends Validation {
  className?: string
  children?: ReactNode
  field?: 'input' | 'select' | 'textarea'
  id?: string
  label: string
  multiple?: boolean
  password?: boolean
  style?: CSSProperties
  title?: string
  variant?: Size
}
