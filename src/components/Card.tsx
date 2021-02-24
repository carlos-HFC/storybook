import { AnchorHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react"

type TTitle = React.FC<HTMLAttributes<HTMLHeadingElement>>
type TSubtitle = React.FC<HTMLAttributes<HTMLHeadingElement>>
type THeader = React.FC<HTMLAttributes<HTMLDivElement>>
type TFooter = React.FC<HTMLAttributes<HTMLDivElement>>
type TBody = React.FC<HTMLAttributes<HTMLDivElement>>
type TText = React.FC<HTMLAttributes<HTMLParagraphElement>>
type TImg = React.FC<ImgHTMLAttributes<HTMLImageElement>>
type TLink = React.FC<AnchorHTMLAttributes<HTMLAnchorElement>>
export type TCard = React.FC<HTMLAttributes<HTMLDivElement>> & { Header: THeader, Footer: TFooter, Img: TImg, Title: TTitle, Subtitle: TSubtitle, Body: TBody, Link: TLink, Text: TText }

const Header: THeader = ({ ...props }) => {
  return (
    <div className={["card__header", props.className].join(' ')} {...props}>
      {props.children}
    </div>
  )
}

const Footer: TFooter = ({ ...props }) => {
  return (
    <div className={["card__footer", props.className].join(' ')} {...props}>
      {props.children}
    </div>
  )
}

const Body: TBody = ({ ...props }) => {
  return (
    <div className={["card__body", props.className].join(' ')} {...props}>
      {props.children}
    </div>
  )
}

const Text: TText = ({ ...props }) => {
  return (
    <p className={["card__text", props.className].join(' ')} {...props}>
      {props.children}
    </p>
  )
}

const Title: TTitle = ({ ...props }) => {
  return (
    <h5 className={["card__title", props.className].join(' ')} {...props}>
      {props.children}
    </h5>
  )
}

const Subtitle: TSubtitle = ({ ...props }) => {
  return (
    <h6 className={["card__subtitle", props.className].join(' ')} {...props}>
      {props.children}
    </h6>
  )
}

const Img: TImg = ({ ...props }) => {
  return (
    <img className={["card__img", props.className].join(' ')} alt={props.alt} {...props} />
  )
}

const Link: TLink = ({ ...props }) => {
  return (
    <a className={["card__link", props.className].join(' ')} {...props}>
      {props.children}
    </a>
  )
}

const Card: TCard = ({ ...props }) => {
  return (
    <div className={["card", props.className].join(' ')} {...props}>
      {props.children}
    </div>
  )
}


Card.Header = Header
Card.Footer = Footer
Card.Body = Body
Card.Title = Title
Card.Subtitle = Subtitle
Card.Img = Img
Card.Link = Link
Card.Text = Text

export {
  Footer as CardFooter,
  Body as CardBody,
  Header as CardHeader,
  Title as CardTitle,
  Subtitle as CardSubtitle,
  Link as CardLink,
  Img as CardImg,
  Text as CardText,
  Card
}
