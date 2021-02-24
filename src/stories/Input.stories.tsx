import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import * as C from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Input',
  component: C.Input,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    subline: {
      control: false
    },
    password: {
      control: false
    },
    value: {
      control: false
    },
    type: {
      control: false
    },
  }
} as Meta;

const Template: Story<T.InputProps> = (args) => <div style={{ width: "50%", position: "relative" }}><C.Input {...args} /></div>

export const Default = Template.bind({});
Default.args = {
  size: 'normal',
  subline: false,
  password: false,
  value: 'Input text',
  type: "text"
};

export const Subline = Template.bind({});
Subline.args = {
  size: 'normal',
  subline: true,
  password: false,
  value: 'Input text',
  type: "text"
};

export const Password = Template.bind({});
Password.args = {
  size: 'normal',
  subline: true,
  password: true,
  value: 'Input text',
  type: 'password'
};

export const PasswordShowText = Template.bind({});
PasswordShowText.args = {
  size: 'normal',
  subline: true,
  password: true,
  value: 'Input text',
  type: 'text'
};