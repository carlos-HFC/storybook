import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { TInput } from './Input'

const Input: TInput = ({ variant, password = false, validation = null, validationText, ...props }) => {
  const [type, setType] = useState('password')

  let classes = `input`
  classes += password ? ' password' : ''
  classes += validation ? ` ${validation}` : ''
  classes += variant ? ` input__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

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


export default Input