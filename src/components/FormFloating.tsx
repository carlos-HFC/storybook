import { Input } from '.'
import { FloatingProps } from '../@types'

export const FormFloating: React.FC<FloatingProps> = ({ label, size = 'normal', ...props }) => {
  return (
    <div className={["floating", `floating__${size}`].join(' ')}>
      <Input {...props} placeholder={label} />
      <label htmlFor={props.id}>{label}</label>
    </div>
  )
}
