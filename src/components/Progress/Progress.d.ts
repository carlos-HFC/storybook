import { FC, HTMLAttributes } from "react";
import { Color } from "../../@types";

declare type TProgress = FC<IProgressProps>

export default interface IProgressProps extends HTMLAttributes<HTMLDivElement> {
  animated?: boolean
  label?: boolean
  striped?: boolean
  variant?: Exclude<Color, 'primary' | 'secondary'>
  width: number
}