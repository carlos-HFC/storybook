import * as T from './Card'

const Card: T.TCard = ({ ...props }) => {
  let classes = 'card'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Body: T.IBody = ({ ...props }) => {
  let classes = 'card__body'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Footer: T.IFooter = ({ ...props }) => {
  let classes = 'card__footer'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Header: T.IHeader = ({ ...props }) => {
  let classes = 'card__header'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} {...props}>
      {props.children}
    </div>
  )
}

const Img: T.IImg = ({ ...props }) => {
  let classes = 'card__img'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <img className={classes} alt={props.alt} {...props} />
  )
}

const Link: T.ILink = ({ ...props }) => {
  let classes = 'card__link'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <a className={classes} {...props}>
      {props.children}
    </a>
  )
}

const Subtitle: T.ISubtitle = ({ ...props }) => {
  let classes = 'card__subtitle'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <h6 className={classes} {...props}>
      {props.children}
    </h6>
  )
}

const Text: T.IText = ({ ...props }) => {
  let classes = 'card__text'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <p className={classes} {...props}>
      {props.children}
    </p>
  )
}

const Title: T.ITitle = ({ ...props }) => {
  let classes = 'card__title'
  classes += props.className ? ` ${props.className}` : ''

  return (
    <h5 className={classes} {...props}>
      {props.children}
    </h5>
  )
}

Card.Body = Body
Card.Footer = Footer
Card.Header = Header
Card.Img = Img
Card.Link = Link
Card.Subtitle = Subtitle
Card.Text = Text
Card.Title = Title

export {
  Body as CardBody,
  Footer as CardFooter,
  Header as CardHeader,
  Img as CardImg,
  Link as CardLink,
  Subtitle as CardSubtitle,
  Text as CardText,
  Title as CardTitle,
}

export default Card