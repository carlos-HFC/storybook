import { Story, Meta } from '@storybook/react/types-6-0';

import { ISelectProps, Select } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Select',
  component: Select,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<ISelectProps> = (args) => (
  <div style={{ width: "50%", marginBottom: "1rem" }}>
    <Select {...args}>
      <option selected value={args.variant}>Select {args.variant}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </Select>
  </div>
)

export const Selects = () => (
  ['small', 'normal', 'large'].map(variant => (
    <Template key={variant} variant={variant as ISelectProps['variant']} />
  ))
)

export const Default = Template.bind({});

export const Validation = Template.bind({})
Validation.args = {
  validation: 'valid',
}

export const Multiple = Template.bind({})
Multiple.args = {
  multiple: true,
}

export const MultipleWithSize = Template.bind({})
MultipleWithSize.args = {
  multiple: true,
  size: 2
}