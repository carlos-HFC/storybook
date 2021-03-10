import { Input, Select, Textarea } from ".";
import { FormControlProps, InputProps, SelectProps, TextareaProps } from "../@types";

export const FormControl: React.FC<FormControlProps> = ({ label, id = `FormControl__${label}_${(Math.random() * 1000).toFixed(3)}`, variant = 'normal', field = 'input', validation = null, validationText = "Texto de validação", ...props }) => {
  let classes = 'form__control'
  classes += variant ? ` form__control__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} title={props.title} style={props.style}>
      <label htmlFor={id}>{label}</label>
      {field === 'select' &&
        <Select id={id} validation={validation} validationText={validationText} multiple={props.multiple} {...props as SelectProps}>
          {props.children}
        </Select>}
      {field === 'textarea' && <Textarea id={id} validation={validation} validationText={validationText} {...props as TextareaProps} />}
      {field === 'input' && <Input validation={validation} validationText={validationText} id={id} {...props as InputProps} />}
    </div>
  )
}