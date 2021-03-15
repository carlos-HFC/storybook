import { Input, IInputProps, Select, ISelectProps, Textarea, ITextareaProps } from "..";
import { TFormControl } from "./FormControl";

const FormControl: TFormControl = ({ label, id = `FormControl__${label}_${(Math.random() * 1000)}`, variant, field = 'input', validation = null, validationText, ...props }) => {
  let classes = 'form__control'
  classes += variant ? ` form__control__${variant}` : ''
  classes += props.className ? ` ${props.className}` : ''

  return (
    <div className={classes} title={props.title} style={props.style}>
      <label htmlFor={id}>{label}</label>
      {field === 'select' &&
        <Select id={id} validation={validation} validationText={validationText} {...props as ISelectProps}>
          {props.children}
        </Select>}
      {field === 'textarea' && <Textarea id={id} validation={validation} validationText={validationText} {...props as ITextareaProps} />}
      {field === 'input' && <Input validation={validation} validationText={validationText} id={id} {...props as IInputProps} />}
    </div>
  )
}

export default FormControl