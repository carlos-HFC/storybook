import { RadioProps } from '../@types'

export const RadioButton: React.FC<RadioProps> = ({ id, label, name, type = 'radio', validation = null, validationText = "Texto de validação", ...props }) => {
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
