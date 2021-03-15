import { FC } from "react"
import { TPagination, IItem } from "./Pagination"

const Pagination: TPagination = ({ children, size, ...props }) => {
  let classes = "pagination"
  classes += size ? ` pagination__${size}` : ""
  classes += props.className ? ` ${props.className}` : ""

  return (
    <nav className={classes} {...props}>
      {children}
    </nav>
  )
}

const Item: FC<IItem> = ({ active, disabled, label, ...props }) => {
  let classes = "pagination__item"
  classes += active ? ` active` : ""
  classes += disabled ? ` disabled` : ""
  classes += props.className ? ` ${props.className}` : ""

  return <span {...props} className={classes}>{label}</span>
}

Pagination.Item = Item

export {
  Item as PaginationItem,
}
export default Pagination