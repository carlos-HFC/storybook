import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputProps } from '../@types'

export const Input: React.FC<InputProps> = ({ size = 'normal', subline = false, password = false, validation = null, validationText = "Texto de validação", ...props }) => {
  const [type, setType] = useState('password')

  let classes = `input input__${size}`
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      {!password && (
        <>
          <input className={classes} {...props} />
          {subline && <span className="input__bd" />}
          {validation === 'valid' && <p className="valid__text">{validationText}</p>}
          {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
        </>
      )}
      {password && (
        <>
          <div className="input__group">
            <input className={['input password', `input__${size}`, props.className].join(' ')} {...props} type={type} />
            {subline && <span className="input__bd" />}
            {type === 'password'
              ? <button onClick={() => setType('text')}><FaEye /></button>
              : <button onClick={() => setType('password')}><FaEyeSlash /></button>
            }
          </div>
          {validation === 'valid' && <p className="valid__text">{validationText}</p>}
          {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
        </>
      )}
    </>
  )
}