import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Pagination',
  component: Pagination,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.PaginationProps> = (args) => (
  <Pagination {...args}>
    <Pagination.Item label="1" />
    <Pagination.Item label="2" />
    <Pagination.Item label="3" />
  </Pagination>
)

export const Default = Template.bind({});

export const Active = ({ ...args }) => (
  <Pagination {...args}>
    <Pagination.Item label="1" active />
    <Pagination.Item label="2" />
    <Pagination.Item label="3" />
  </Pagination>
)

export const Disabled = ({ ...args }) => (
  <Pagination {...args}>
    <Pagination.Item label="1" disabled />
    <Pagination.Item label="2" />
    <Pagination.Item label="3" />
  </Pagination>
)

export const Sizes = Template.bind({})
Sizes.args = {
  size: "normal"
}