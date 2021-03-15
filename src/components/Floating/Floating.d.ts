import { FC } from 'react'
import { IInputProps } from '..'

declare type TFloating = FC<IFloatingProps>

export default interface IFloatingProps extends Omit<IInputProps, 'password'> {
  label: string
}