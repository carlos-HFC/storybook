import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select } from '../components'
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
} as Meta;

const Template: Story<T.SelectProps> = (args) => (
  <div style={{ width: "50%", marginBottom: "1rem" }}>
    <Select {...args}>
      <option selected value={args.variant}>Select {args.variant}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
      <option value="5">Five</option>
    </Select>
  </div>
)

export const Selects = () => (
  ['small', 'normal', 'large'].map(variant => (
    <Template key={variant} variant={variant as any} />
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