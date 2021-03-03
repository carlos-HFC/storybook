import { FC, Fragment } from "react"
import { BreadcrumbProps } from "../@types"

export const Breadcrumb: FC<BreadcrumbProps> = ({ itens, divider = ">", ...props }) => {
  let classes = 'breadcrumb'
  classes += props.className ? ` ${props.className}` : ''

  if (!divider) divider = ">"

  return (
    <ol className={classes} {...props}>
      {itens.map(item => (
        <Fragment key={Math.round(Math.random() * 1000)}>
          {itens.length > 1 && itens.indexOf(item) !== 0 && <span>{divider}</span>}
          {itens.length - 1 === itens.indexOf(item)
            ? <li className="breadcrumb__item">{item.title}</li>
            : <a className="breadcrumb__item" href={item.href}>{item.title}</a>
          }
        </Fragment>
      ))}
    </ol>
  )
}