import { TTextarea } from './Textarea'

const Textarea: TTextarea = ({ variant, validation = null, validationText, ...props }) => {
  let classes = `textarea`
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''
  classes += variant ? ` textarea__${variant}` : ''

  return (
    <>
      <textarea className={classes} {...props} />
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}

export default Textarea