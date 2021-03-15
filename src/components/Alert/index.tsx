import { TAlert, IBody, IHeader, ILink } from './Alert'

const Alert: TAlert = ({ variant, ...props }) => {
  let classes = 'alert'
  classes += variant ? ` alert__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} role="alert" {...props}>
      {props.children}
    </div>
  );
};

const Body: IBody = ({ ...props }) => {
  return (
    <p {...props}>{props.children}</p>
  )
}

const Header: IHeader = ({ ...props }) => {
  let classes = 'alert__header'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <><h4 className={classes} {...props}>{props.children}</h4><hr /></>
  )
}

const Link: ILink = ({ ...props }) => {
  let classes = 'alert__link'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <a className={classes} {...props}>{props.children}</a>
  )
}

Alert.Body = Body
Alert.Header = Header
Alert.Link = Link

export {
  Body as AlertBody,
  Header as AlertHeader,
  Link as AlertLink,
}
export default Alert