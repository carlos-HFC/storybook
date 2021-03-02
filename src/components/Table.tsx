import { FC } from "react"
import { TableProps } from '../@types'

export const Table: FC<TableProps> = ({ variant, striped = false, border = false, ...props }) => {
  let classes = `table`
  classes += variant ? ` table__${variant}` : ''
  classes += striped ? ` table__striped` : ''
  classes += border ? ` table__border` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <table className={classes} {...props}>
      {props.children}
    </table>
  )
}