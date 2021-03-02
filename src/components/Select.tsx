import { FC } from "react"
import { SelectProps } from '../@types'

export const Select: FC<SelectProps> = ({ variant = 'normal', validation = null, validationText = "Texto de validação", ...props }) => {
  let classes = `select select__${variant}`
  classes += validation !== null ? ` ${validation}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <>
      <select className={classes} {...props}>
        {props.children}
      </select>
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}