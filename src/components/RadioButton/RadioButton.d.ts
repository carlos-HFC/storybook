import { FC, InputHTMLAttributes, ReactNode } from "react";
import { Validation } from "../../@types";

declare type TRadioButton = FC<IRadioProps>

export default interface IRadioProps extends Validation, InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: ReactNode
  name: string
  type?: 'radio' | 'checkbox'
}