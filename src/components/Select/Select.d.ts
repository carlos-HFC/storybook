import { FC, SelectHTMLAttributes } from "react";
import { Size, Validation } from "../../@types";

declare type TSelect = FC<ISelectProps>

export default interface ISelectProps extends Validation, SelectHTMLAttributes<HTMLSelectElement> {
  variant?: Size
}