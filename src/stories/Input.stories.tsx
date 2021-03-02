import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

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

const Template: Story<T.InputProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><Input placeholder={`Input ${args.variant}`} {...args} /></div>

export const Inputs = () => (
  <>
    <Template variant="small" />
    <Template variant="normal" />
    <Template variant="large" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  variant: 'normal',
  placeholder: 'Input placeholder'
};

export const Password = Template.bind({});
Password.args = {
  variant: 'normal',
  password: true,
  placeholder: 'Input placeholder'
};
Password.argTypes = {
  password: { control: false }
}

export const Validation = Template.bind({});
Validation.args = {
  variant: 'normal',
  validation: 'valid',
  placeholder: 'Input placeholder'
};