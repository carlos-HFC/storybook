import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { InputProps } from '../@types'

export const Input: React.FC<InputProps> = ({ variant = 'normal', password = false, validation = null, validationText = "Texto de validação", ...props }) => {
  const [type, setType] = useState('password')

  let classes = `input input__${variant}`
  classes += password ? ' password' : ''
  classes += props.className ? ` ${props.className}` : ''
  classes += validation ? ` ${validation}` : ''

  return (
    <>
      {!password && (
        <>
          <input className={classes} {...props} />
          {validation === 'valid' && <p className="valid__text">{validationText}</p>}
          {validation === 'invalid' && <p className="invalid__text">{validationText}</p>}
        </>
      )}
      {password && (
        <>
          <div className="input__group">
            <input className={classes} {...props} type={type} />
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