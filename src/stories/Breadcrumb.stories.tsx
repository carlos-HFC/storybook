import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const itens = [
  { href: "#", title: "Item 1" },
  { href: "#", title: "Item 2" },
  { href: "#", title: "Item 3" },
]

const Template: Story<T.BreadcrumbProps> = (args) => <Breadcrumb {...args} itens={itens} />

export const Default = Template.bind({});

export const Divider = Template.bind({})
Divider.args = {
  divider: "/"
}