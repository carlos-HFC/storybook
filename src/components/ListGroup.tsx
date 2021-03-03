import { FC } from "react"
import { ListProps } from "../@types"

export const ListGroup: FC<ListProps> = ({ variant = undefined, borderless = false, horizontal = false, ...props }) => {
  let classes = 'list'
  classes += borderless ? ' list__borderless' : ''
  classes += horizontal ? ' list__horizontal' : ''
  classes += variant ? ` list__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <ul className={classes} {...props}>
      {props.children}
    </ul>
  )
}