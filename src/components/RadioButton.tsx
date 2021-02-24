import { RadioProps } from '../@types'

export const RadioButton: React.FC<RadioProps> = ({ id, label, name, type = 'radio', ...props }) => {
  return (
    <div className="check__inline" title={props.title}>
      <input type={type} id={id} name={name} className="check__input" {...props} />
      <label htmlFor={id} className="check__label">{label}</label>
    </div>
  )
}
