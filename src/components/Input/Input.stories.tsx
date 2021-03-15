import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, IInputProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    placeholder: {
      control: false
    },
  },
} as Meta;

const Template: Story<IInputProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><Input placeholder={`Input ${args?.variant || 'default'}`} {...args} /></div>

export const Inputs = () => (
  <>
    <Template variant="small" />
    <Template />
    <Template variant="large" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input placeholder'
};

export const Password = Template.bind({});
Password.args = {
  password: true,
  placeholder: 'Input placeholder'
};
Password.argTypes = {
  password: { control: false }
}

export const Validation = Template.bind({});
Validation.args = {
  validation: 'valid',
  placeholder: 'Input placeholder'
};