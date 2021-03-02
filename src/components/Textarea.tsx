import { TextareaProps } from '../@types'

export const Textarea: React.FC<TextareaProps> = ({ variant = 'normal', validation = null, validationText = "Texto de validação", ...props }) => {
  let classes = `textarea textarea__${variant}`
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      <textarea className={classes} {...props} />
      {validation === 'valid' && <p className="valid__text">{validationText}</p>}
      {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
    </>
  )
}