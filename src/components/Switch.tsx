import { SwitchProps } from '../@types'

export const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <label className="switch" {...props}>
      <input type="checkbox" className="switch__check" />
      <span className="switch__slider" />
    </label>
  )
}