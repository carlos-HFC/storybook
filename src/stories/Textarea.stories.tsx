import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.TextareaProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><Textarea {...args} /></div>

export const Textareas = () => (
  <>
    <Template placeholder="Textarea small" variant="small" />
    <Template placeholder="Textarea normal" variant="normal" />
    <Template placeholder="Textarea large" variant="large" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  variant: 'normal',
  placeholder: "Textarea default"
};

export const Validation = Template.bind({});
Validation.args = {
  variant: 'normal',
  placeholder: "Textarea com validação",
  validation: 'valid'
};