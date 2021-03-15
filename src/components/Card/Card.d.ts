import { AnchorHTMLAttributes, FC, HTMLAttributes, ImgHTMLAttributes } from "react"

interface IBody extends FC<HTMLAttributes<HTMLDivElement>> { }
interface IFooter extends FC<HTMLAttributes<HTMLDivElement>> { }
interface IHeader extends FC<HTMLAttributes<HTMLDivElement>> { }
interface IImg extends FC<ImgHTMLAttributes<HTMLImageElement>> { }
interface ILink extends FC<AnchorHTMLAttributes<HTMLAnchorElement>> { }
interface ISubtitle extends FC<HTMLAttributes<HTMLHeadingElement>> { }
interface IText extends FC<HTMLAttributes<HTMLParagraphElement>> { }
interface ITitle extends FC<HTMLAttributes<HTMLHeadingElement>> { }

declare type TCard = FC<ICardProps> & {
  Body: IBody,
  Footer: IFooter,
  Header: IHeader,
  Img: IImg,
  Link: ILink,
  Subtitle: ISubtitle,
  Text: IText,
  Title: ITitle,
}

export default interface ICardProps extends HTMLAttributes<HTMLDivElement> { }