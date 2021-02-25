import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputProps } from '../@types'

export const Input: React.FC<InputProps> = ({ size = 'normal', subline = false, password = false, ...props }) => {
  const [type, setType] = useState('password')

  return (
    <>
      {!password && (
        <>
          <input className={['input', `input__${size}`, props.className].join(' ')} {...props} />
          {subline && <span className="input__bd" />}
        </>
      )}
      {password && (
        <div className="input__group">
          <input className={['input password', `input__${size}`, props.className].join(' ')} {...props} type={type} />
          {subline && <span className="input__bd" />}
          {type === 'password'
            ? <button onClick={() => setType('text')}><FaEye /></button>
            : <button onClick={() => setType('password')}><FaEyeSlash /></button>
          }
        </div>
      )}
    </>
  )
}