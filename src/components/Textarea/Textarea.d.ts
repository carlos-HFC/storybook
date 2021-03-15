import { FC, TextareaHTMLAttributes } from "react";
import { Size, Validation } from "../../@types";

declare type TTextarea = FC<ITextareaProps>

export default interface ITextareaProps extends Validation, TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: Size
}