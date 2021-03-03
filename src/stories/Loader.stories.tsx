import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Loader } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Loader',
  component: Loader,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.LoaderProps> = (args) => <Loader {...args} />

export const Default = Template.bind({});

export const Variants = () => (
  ["primary", "secondary", "success", "danger", "warning", "purple", "navy", "dark"].map(variant => (
    <Template variant={variant as T.LoaderProps['variant']} style={{ marginRight: ".5rem" }} />
  ))
)
