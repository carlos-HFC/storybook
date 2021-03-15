import { FC, HTMLAttributes, ReactNode } from "react";
import { Size } from "../../@types";

interface IBody extends FC<HTMLAttributes<HTMLDivElement>> { }
interface IFooter extends FC<HTMLAttributes<HTMLElement>> { }
interface IHeader extends HTMLAttributes<HTMLElement> {
  btClose?: boolean
}
interface IModalContextProps extends IModalProps { }

declare type TModal = FC<IModalContextProps> & {
  Body: IBody,
  Footer: IFooter,
  Header: FC<IHeader>,
}

export default interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  centered?: boolean
  onHide?: () => void
  open?: boolean
  scrollable?: boolean
  size?: Size | 'xtra'
}