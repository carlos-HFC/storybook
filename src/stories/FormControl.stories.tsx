import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormControl, Select } from '../components'
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
    <Template label="E-mail" type="email" />
    <Template label="Password" type="password" password />
  </>
)

export const Default = Template.bind({});
Default.args = {
  label: "E-mail"
};

export const ControlSubline = Template.bind({});
ControlSubline.args = {
  label: "E-mail",
  subline: true
};
ControlSubline.argTypes = {
  subline: { control: false },
}

export const ControlSelect = Template.bind({});
ControlSelect.args = {
  label: "Select",
  select: true,
  children: (
    <>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
      <Select.Option value="4">Four</Select.Option>
      <Select.Option value="5">Five</Select.Option>
    </>
  )
};
ControlSelect.argTypes = {
  children: { control: false }
}

export const ControlMultipleSelect = Template.bind({});
ControlMultipleSelect.args = {
  label: "Select",
  select: true,
  multiple: true,
  children: (
    <>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
      <Select.Option value="4">Four</Select.Option>
      <Select.Option value="5">Five</Select.Option>
    </>
  )
};
ControlMultipleSelect.argTypes = {
  children: { control: false }
}