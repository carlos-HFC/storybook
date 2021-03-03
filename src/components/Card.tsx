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
  let classes = 'card__header'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Footer: TFooter = ({ ...props }) => {
  let classes = 'card__footer'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Body: TBody = ({ ...props }) => {
  let classes = 'card__body'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Text: TText = ({ ...props }) => {
  let classes = 'card__text'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <p className={classes} {...props}>
      {props.children}
    </p>
  )
}

const Title: TTitle = ({ ...props }) => {
  let classes = 'card__title'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <h5 className={classes} {...props}>
      {props.children}
    </h5>
  )
}

const Subtitle: TSubtitle = ({ ...props }) => {
  let classes = 'card__subtitle'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <h6 className={classes} {...props}>
      {props.children}
    </h6>
  )
}

const Img: TImg = ({ ...props }) => {
  let classes = 'card__img'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <img className={classes} alt={props.alt} {...props} />
  )
}

const Link: TLink = ({ ...props }) => {
  let classes = 'card__link'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <a className={classes} {...props}>
      {props.children}
    </a>
  )
}

const Card: TCard = ({ ...props }) => {
  let classes = 'card'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
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
