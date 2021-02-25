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
    <Template label="Input" />
    <Template label="Input (com subline)" subline />
  </>
)

export const Default = Template.bind({});
Default.args = {
  label: "E-mail",
};

export const Subline = Template.bind({});
Subline.args = {
  label: "E-mail",
  subline: true
};
Subline.argTypes = {
  subline: { control: false }
}