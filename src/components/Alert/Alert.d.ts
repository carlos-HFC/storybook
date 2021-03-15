import { AnchorHTMLAttributes, FC, ForwardRefExoticComponent, HTMLAttributes } from 'react'
import { Color } from '../../@types'

interface IBody extends FC<HTMLAttributes<HTMLParagraphElement>> { }
interface IHeader extends FC<HTMLAttributes<HTMLHeadingElement>> { }
interface ILink extends FC<AnchorHTMLAttributes<HTMLAnchorElement>> { }

declare type TAlert = FC<IAlertProps> & {
  Body: IBody,
  Header: IHeader,
  Link: ILink,
}

export default interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Color
}