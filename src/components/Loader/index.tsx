import { TLoader } from "./Loader"

const Loader: TLoader = ({ variant, ...props }) => {
  let classes = 'loader'
  classes += variant ? ` bd__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props} />
  )
}

export default Loader