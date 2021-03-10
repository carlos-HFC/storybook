import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormControl } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/FormControl',
  component: FormControl,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    id: {
      control: false
    },
  }
} as Meta;

const Template: Story<T.FormControlProps> = (args) => <div style={{ width: "50%" }}><FormControl {...args} /></div>

export const Controls = () => (
  <>
    <Template label="Nome" />
    <Template label="Password" type="password" password />
    <Template label="Select" field="select" />
    <Template label="Textarea" field="textarea" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  label: "E-mail"
};

export const ControlSelect = Template.bind({});
ControlSelect.args = {
  label: "Select",
  field: "select",
  children: (
    <>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </>
  )
};
ControlSelect.argTypes = {
  children: { control: false }
}

export const ControlMultipleSelect = Template.bind({});
ControlMultipleSelect.args = {
  label: "Select",
  field: "select",
  multiple: true,
  children: (
    <>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </>
  )
};
ControlMultipleSelect.argTypes = {
  children: { control: false }
}

export const ControlTextarea = Template.bind({});
ControlTextarea.args = {
  label: "Textarea",
  field: "textarea",
};