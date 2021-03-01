import { OptionHTMLAttributes } from "react"
import { SelectProps } from '../@types'

type TOption = React.FC<OptionHTMLAttributes<HTMLOptionElement>>
export type TSelect = React.FC<SelectProps> & { Option: TOption }

const Option: TOption = ({ ...props }) => {
  return (
    <option {...props}>
      {props.children}
    </option>
  )
}

const Select: TSelect = ({ variant = 'normal', validation = null, validationText = "Texto de validação", ...props }) => {
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

Select.Option = Option

export {
  Option as SelectOption,
  Select
}