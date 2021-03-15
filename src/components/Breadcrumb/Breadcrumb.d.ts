import { AllHTMLAttributes, FC, OlHTMLAttributes, ReactElement } from "react";

interface IBreadcrumbItem extends AllHTMLAttributes<HTMLElement> {
  active?: boolean
  label: ReactNode
}

declare type TBreadcrumb = FC<IBreadcrumbProps> & {
  Item: FC<IBreadcrumbItem>
}

export default interface IBreadcrumbProps extends OlHTMLAttributes<HTMLOListElement> {
  children: ReactElement<IBreadcrumbItem> | ReactElement<IBreadcrumbItem>[]
  divider?: string
}