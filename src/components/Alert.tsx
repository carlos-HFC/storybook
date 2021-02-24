import { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { AlertProps } from '../@types'

type TLink = React.FC<AnchorHTMLAttributes<HTMLAnchorElement>>
type TBody = React.FC<HTMLAttributes<HTMLParagraphElement>>
type THeader = React.FC<HTMLAttributes<HTMLHeadingElement>>
export type TAlert = React.FC<AlertProps & HTMLAttributes<HTMLDivElement>> & { Header: THeader, Body: TBody, Link: TLink }

const Link: TLink = ({ ...props }) => {
  return (
    <a className={["alert__link", props.className].join(' ')} {...props}>{props.children}</a>
  )
}
const Body: TBody = ({ ...props }) => {
  return (
    <p {...props}>{props.children}</p>
  )
}

const Header: THeader = ({ ...props }) => {
  return (
    <><h4 className={["alert__header", props.className].join(' ')} {...props}>{props.children}</h4><hr /></>
  )
}

const Alert: TAlert = ({ variant = "primary", ...props }) => {
  return (
    <div className={["alert", `alert__${variant}`, props.className].join(' ')} role="alert" {...props}>
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