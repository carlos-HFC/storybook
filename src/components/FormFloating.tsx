import { Input } from '.'
import { FloatingProps } from '../@types'

export const FormFloating: React.FC<FloatingProps> = ({ label, validation = null, validationText = "Texto de validação", variant = 'normal', id, subline = false, ...props }) => {
  let classes = `floating floating__${variant}`
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      <div className={classes} title={props.title}>
        <Input placeholder={label} subline={subline} {...props} />
        <label htmlFor={id}>{label}</label>
      </div>
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}
