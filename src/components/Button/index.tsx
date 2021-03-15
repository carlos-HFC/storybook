import { TButton } from './Button'

const Button: TButton = ({ variant, block, size, label, ...props }) => {
  let classes = `btn btn__${variant}`
  classes += size ? ` btn__${size}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <button type="button" className={classes} style={{ width: block ? '100%' : 'auto' }} {...props}>
      {label}
    </button>
  );
};

export default Button