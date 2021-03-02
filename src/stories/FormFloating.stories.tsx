import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormFloating } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/FormFloating',
  component: FormFloating,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.FloatingProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><FormFloating {...args} /></div>

export const Floatings = () => (
  <>
    <Template label="Input small" variant="small" />
    <Template label="Input normal" variant="normal" />
    <Template label="Input large" variant="large" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  label: "E-mail",
  type: "email",
};