import { TProgress } from "./Progress"

const Progress: TProgress = ({ variant, width = 0, label, striped, animated, ...props }) => {
  let classes = 'progress__bar'
  classes += variant ? ` progress__bar-${variant}` : ''
  classes += striped ? ` progress__bar-striped` : ''
  classes += animated ? ` progress__bar-animated progress__bar-striped` : ''
  classes += props.className ? ` ${props.className}` : ''

  if (width > 100) width = 100
  if (width < 0) width = 0

  return (
    <div className="progress" {...props}>
      <div className={classes} style={{ width: `${width}%` }}>
        {label && `${width}%`}
      </div>
    </div>
  )
}

export default Progress