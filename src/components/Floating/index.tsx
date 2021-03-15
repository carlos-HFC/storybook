import { Input } from '..'
import { TFloating } from './Floating'

const Floating: TFloating = ({ label, validation = null, validationText, variant, id, ...props }) => {
  let classes = `floating`
  classes += props.className ? ` ${props.className}` : ''
  classes += variant ? ` floating__${variant}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      <div className={classes} title={props.title}>
        <Input placeholder={label} {...props} />
        <label htmlFor={id}>{label}</label>
      </div>
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}

export default Floating
