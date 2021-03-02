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

export const Radios = () => (
  <>
    <Template id="Radio1" name="Radio" label="Radio Button" radio />
    <Template id="Radio2" name="Radio" label="Radio Button" radio />
    <Template id="Radio3" name="Radio" label="Radio Button" radio />
  </>
)

export const Checkboxs = () => (
  <>
    <Template id="Checkbox1" name="Checkbox" label="Checkbox Button" checkbox />
    <Template id="Checkbox2" name="Checkbox" label="Checkbox Button" checkbox />
    <Template id="Checkbox3" name="Checkbox" label="Checkbox Button" checkbox />
  </>
)

export const Radio = Template.bind({});
Radio.args = {
  id: "Radio1",
  name: "Radio1",
  label: "Radio Button",
  radio: true
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  id: "Checkbox1",
  name: "Checkbox1",
  label: "Checkbox Button",
  checkbox: true,
};