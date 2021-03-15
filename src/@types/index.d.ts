import { ReactNode } from "react"

export declare type Color = "danger" | "dark" | "navy" | "primary" | "purple" | "secondary" | "success" | "warning"

export declare type Size = "large" | "normal" | "small"

export declare interface Validation {
  validation?: 'valid' | 'invalid' | null
  validationText?: ReactNode
}