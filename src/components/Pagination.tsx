import { FC, HTMLAttributes, ReactNode } from "react"
import { PaginationProps } from "../@types"

type TItem = FC<HTMLAttributes<HTMLSpanElement> & {
  active?: boolean
  disabled?: boolean
  label: ReactNode
}>

type TPagination = FC<PaginationProps> & { Item: TItem }

const Item: TItem = ({ active, disabled, label, ...props }) => {
  let classes = "pagination__item"
  classes += active ? ` active` : ""
  classes += disabled ? ` disabled` : ""
  classes += props.className ? ` ${props.className}` : ""

  return (
    <span {...props} className={classes}>{label}</span>
  )
}

const Pagination: TPagination = ({ children, size, ...props }) => {
  let classes = "pagination"
  classes += size ? ` pagination__${size}` : ""
  classes += props.className ? ` ${props.className}` : ""

  return (
    <nav className={classes} {...props}>{children}</nav>
  )
}

Pagination.Item = Item

export {
  Item as PaginationItem,
  Pagination
}