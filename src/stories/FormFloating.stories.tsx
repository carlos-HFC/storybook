import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import * as C from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/FormFloating',
  component: C.FormFloating,
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
    type: {
      control: false
    },
  }
} as Meta;

const Template: Story<T.FloatingProps> = (args) => <C.FormFloating {...args} />

export const Default = Template.bind({});
Default.args = {
  label: "E-mail",
  type: "text"
};

export const Subline = Template.bind({});
Subline.args = {
  label: "E-mail",
  type: "text",
  subline: true
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: 'password',
  password: true
};

export const PasswordShowText = Template.bind({});
PasswordShowText.args = {
  label: "Password",
  type: 'text',
  password: true
};