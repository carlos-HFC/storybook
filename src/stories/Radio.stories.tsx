import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import * as C from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Radio',
  component: C.RadioButton,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    type: {
      control: false
    }
  }
} as Meta;

const Template: Story<T.RadioProps> = (args) => <C.RadioButton {...args} />

export const Radio = Template.bind({});
Radio.args = {
  id: "Radio1",
  name: "Radio1",
  label: "Radio Button",
  type: 'radio'
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  id: "Radio1",
  name: "Radio1",
  label: "Checkbox Button",
  type: 'checkbox'
};