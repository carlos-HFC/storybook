import { TSwitch } from './Switch'

const Switch: TSwitch = (props) => {
  return (
    <label className="switch" {...props}>
      <input type="checkbox" className="switch__check" />
      <span className="switch__slider" />
    </label>
  )
}

export default Switch