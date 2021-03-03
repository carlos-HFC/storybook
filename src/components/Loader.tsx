import { FC } from "react"
import { LoaderProps } from "../@types"

export const Loader: FC<LoaderProps> = ({ variant = 'dark', ...props }) => {
  let classes = 'loader'
  classes += variant ? ` bd__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props} />
  )
}