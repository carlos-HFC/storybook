import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Progress } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Progress',
  component: Progress,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.ProgressProps> = (args) => <Progress {...args} />

export const Default = Template.bind({});

export const Variants = (args) => (
  ["success", "danger", "warning", "purple", "navy", "dark"].map((variant, i) => (
    <Template key={i} {...args} variant={variant as T.ProgressProps['variant']} width={(i + 1) * 10} style={{ marginBottom: ".5rem" }} />
  ))
)
Variants.argTypes = {
  variant: { control: false },
  width: { control: false },
}

export const ProgressStriped = Template.bind({})
ProgressStriped.args = {
  width: 50,
  striped: true
}

export const ProgressAnimated = Template.bind({})
ProgressAnimated.args = {
  striped: true,
  animated: true,
  width: 50
}
ProgressAnimated.argTypes = {
  striped: { control: false }
}