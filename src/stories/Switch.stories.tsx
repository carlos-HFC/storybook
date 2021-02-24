import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import * as C from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Switch',
  component: C.Switch,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.SwitchProps> = (args) => <C.Switch {...args} />

export const Default = Template.bind({});