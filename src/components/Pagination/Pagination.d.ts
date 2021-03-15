import { FC, HTMLAttributes, ReactNode } from "react";
import { Size } from "../../@types";

interface IItem extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean
  disabled?: boolean
  label: ReactNode
}

declare type TPagination = FC<IPaginationProps> & {
  Item: FC<IItem>
}

export default interface IPaginationProps extends HTMLAttributes<HTMLElement> {
  size?: Size
}