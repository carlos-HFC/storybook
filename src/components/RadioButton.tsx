import { RadioProps } from '../@types'

export const RadioButton: React.FC<RadioProps> = ({ id, label, name, validation = null, validationText = "Texto de validação", radio = false, checkbox = false, ...props }) => {
  let classes = 'check__input'
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      <div className="check__inline" title={props.title}>
        {(!radio && !checkbox) || (radio && checkbox) || radio
          ? <input type="radio" id={id} name={name} className={classes} {...props} />
          : <input type="checkbox" id={id} name={name} className={classes} {...props} />
        }
        <label htmlFor={id} className="check__label">{label}</label>
      </div>
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}
