import { ButtonProps } from '../@types'

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', label, width = 'auto', ...props }) => {
  const w = width === 'block' ? "100%" : "auto"
  return (
    <button type="button" className={['btn', `btn__${size}`, `btn__${variant}`].join(' ')} style={{ width: w }} {...props}>
      {label}
    </button>
  );
};
