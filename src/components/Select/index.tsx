import { TSelect } from './Select'

const Select: TSelect = ({ variant, validation = null, validationText, ...props }) => {
  let classes = `select`
  classes += validation ? ` ${validation}` : ''
  classes += variant ? ` select__${variant}` : ''
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

export default Select