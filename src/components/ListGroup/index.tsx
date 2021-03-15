import { TList } from "./List"

const ListGroup: TList = ({ variant, borderless, horizontal, ...props }) => {
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

export default ListGroup