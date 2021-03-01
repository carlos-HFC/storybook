import { Input } from '.'
import { FloatingProps } from '../@types'

export const FormFloating: React.FC<FloatingProps> = ({ label, validation = null, validationText = "Texto de validação", variant = 'normal', id, subline = false, ...props }) => {
  return (
    <div className={["floating", `floating__${variant}`, props.className].join(' ')} title={props.title}>
      <Input validation={validation} validationText={validationText} placeholder={label} subline={subline} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
