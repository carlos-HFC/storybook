import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputProps } from '../@types'

export const Input: React.FC<InputProps> = ({ size = 'normal', subline = false, password = false, ...props }) => {
  const type = password && props.type === 'text' ? 'text' : password && props.type === 'password' ? 'password' : 'text'
  return (
    <>
      <input className={['input', `input__${size}`].join(' ')} {...props} type={type} />
      {subline && <span className="input__bd" />}
      {password && props.type === 'password' && (
        <div className="input__r__button">
          <button><FaEye /></button>
        </div>
      )}
      {password && props.type === 'text' && (
        <div className="input__r__button">
          <button><FaEyeSlash /></button>
        </div>
      )}
    </>
  )
}