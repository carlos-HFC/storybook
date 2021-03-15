import { FC, TableHTMLAttributes } from "react";
import { Color } from "../../@types";

declare type TTable = FC<ITableProps>

export default interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  border?: boolean
  striped?: boolean
  variant?: Color
}