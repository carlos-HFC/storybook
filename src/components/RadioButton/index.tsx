import { TRadioButton } from './RadioButton'

const RadioButton: TRadioButton = ({ id, label, name, validation = null, validationText, type = 'radio', ...props }) => {
  let classes = 'check__input'
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      <div className="check__inline" title={props.title}>
        <input type={type} id={id} name={name} className={classes} {...props} />
        <label htmlFor={id} className="check__label">{label}</label>
      </div>
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}

export default RadioButton