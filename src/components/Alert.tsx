import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { AlertProps } from '../@types'

type TLink = React.FC<AnchorHTMLAttributes<HTMLAnchorElement>>
type TBody = React.FC<HTMLAttributes<HTMLParagraphElement>>
type THeader = React.FC<HTMLAttributes<HTMLHeadingElement>>
export type TAlert = React.FC<AlertProps & HTMLAttributes<HTMLDivElement>> & { Header: THeader, Body: TBody, Link: TLink }

const Link: TLink = ({ ...props }) => {
  let classes = 'alert__link'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <a className={classes} {...props}>{props.children}</a>
  )
}
const Body: TBody = ({ ...props }) => {
  return (
    <p {...props}>{props.children}</p>
  )
}

const Header: THeader = ({ ...props }) => {
  let classes = 'alert__header'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <><h4 className={classes} {...props}>{props.children}</h4><hr /></>
  )
}

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

Alert.Header = Header
Alert.Body = Body
Alert.Link = Link

export {
  Header as AlertHeader,
  Body as AlertBody,
  Link as AlertLink,
  Alert
}