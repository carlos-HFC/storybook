import { FC, HTMLAttributes } from "react";
import { Color } from "../../@types";

declare type TList = FC<IListProps>

export default interface IListProps extends HTMLAttributes<HTMLUListElement> {
  borderless?: boolean
  horizontal?: boolean
  variant?: Color
}