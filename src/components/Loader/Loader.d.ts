import { FC, HTMLAttributes } from "react";
import { Color } from "../../@types";

declare type TLoader = FC<ILoaderProps>

export default interface ILoaderProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Color
}