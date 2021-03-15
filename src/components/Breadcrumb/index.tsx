import { Children, FC, Fragment } from "react"
import { TBreadcrumb, IBreadcrumbItem } from "./Breadcrumb"

const Breadcrumb: TBreadcrumb = ({ divider = ">", children, ...props }) => {
  let classes = 'breadcrumb'
  classes += props.className ? ` ${props.className}` : ''

  if (!divider) divider = ">"

  return (
    <ol className={classes} {...props}>
      {Children.toArray(children).map((el, i) => (
        <Fragment key={Math.round(Math.random() * 1000)}>
          {i !== 0 && <span>{divider}</span>}
          {el}
        </Fragment>
      ))}
    </ol>
  )
}

const Item: FC<IBreadcrumbItem> = ({ active, label, ...props }) => {
  let classes = 'breadcrumb__item'
  classes += props.className ? ` ${props.className}` : ''

  if (!active) return <a className={classes} {...props}>{label}</a>

  return <li className={classes} {...props}>{label}</li>
}

Breadcrumb.Item = Item

export {
  Item as BreadcrumbItem
}
export default Breadcrumb