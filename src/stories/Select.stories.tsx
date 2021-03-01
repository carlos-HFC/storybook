import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectOption } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Select',
  component: Select,
  parameters: {
    controls: {
      expanded: true
    }
  },
  subcomponents: { 'Select.Option': SelectOption },
} as Meta;

const Template: Story<T.SelectProps> = (args) => (
  <div style={{ width: "50%", marginBottom: "1rem" }}>
    <Select {...args}>
      <Select.Option selected value={args.variant}>Select {args.variant}</Select.Option>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
      <Select.Option value="4">Four</Select.Option>
      <Select.Option value="5">Five</Select.Option>
    </Select>
  </div>
)

export const Selects = ({ ...args }) => (
  ['small', 'normal', 'large'].map(variant => (
    <Template key={variant} variant={variant as any} {...args} />
  ))
)

export const Default = Template.bind({});
Default.args = {
  variant: 'normal',
};

export const Validation = Template.bind({})
Validation.args = {
  variant: 'normal',
  validation: 'valid',
}

export const Multiple = Template.bind({})
Multiple.args = {
  variant: 'normal',
  multiple: true,
}

export const MultipleWithSize = Template.bind({})
MultipleWithSize.args = {
  variant: 'normal',
  multiple: true,
  size: 2
}