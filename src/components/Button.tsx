import { ButtonProps } from '../@types'

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', label, width = 'auto', ...props }) => {
  let classes = 'btn'
  classes += variant ? ` btn__${variant}` : ''
  classes += size ? ` btn__${size}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <button type="button" className={classes} style={{ width: width === "block" ? "100%" : "auto" }} {...props}>
      {label}
    </button>
  );
};
