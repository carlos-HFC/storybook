import { Input, Select } from ".";
import { FormControlProps, InputProps, SelectProps } from "../@types";

export const FormControl: React.FC<FormControlProps> = ({ label, id = `FormControl__${label}_${(Math.random() * 1000).toFixed(3)}`, variant = 'normal', select = false, validation = null, validationText = "Texto de validação", ...props }) => {
  return (
    <div className={['form__control', `form__control__${variant}`, props.className].join(' ')} title={props.title} style={props.style}>
      <label htmlFor={id}>{label}</label>
      {select
        ? <Select id={id} validation={validation} validationText={validationText} multiple={props.multiple} {...props as SelectProps}>{props.children}</Select>
        : <Input validation={validation} validationText={validationText} id={id} {...props as InputProps} />}
    </div>
  )
}