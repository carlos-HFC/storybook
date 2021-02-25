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
    type: {
      control: false
    },
    placeholder: {
      control: false
    },
  }
} as Meta;

const Template: Story<T.InputProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><Input placeholder={`Input ${args.size}`} {...args} /></div>

export const Inputs = () => (
  <>
    <Template size="normal" />
    <Template size="normal" subline />
    <Template size="normal" password />
  </>
)

export const Default = Template.bind({});
Default.args = {
  size: 'normal',
  placeholder: 'Input placeholder'
};

export const Subline = Template.bind({})
Subline.args = {
  size: 'normal',
  subline: true,
  placeholder: 'Input placeholder'
};
Subline.argTypes = {
  subline: { control: false }
}

export const Password = Template.bind({});
Password.args = {
  size: 'normal',
  password: true,
  placeholder: 'Input placeholder'
};
Password.argTypes = {
  password: { control: false }
}