import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ListGroup } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/List',
  component: ListGroup,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<T.ListProps> = (args) => (
  <ListGroup {...args}>
    <li className="list__item">Item</li>
    <li className="list__item">Item</li>
    <li className="list__item">Item</li>
  </ListGroup>
)

export const Variants = () => (
  <>
    <ListGroup>
      <li className="list__item">Item default</li>
    </ListGroup>
    {["primary", "secondary", "success", "danger", "warning", "purple", "navy", "dark"].map(variant => (
      <ListGroup key={variant} variant={variant as T.ListProps['variant']}>
        <li className="list__item">Item com a classe {variant}</li>
      </ListGroup>
    ))}
  </>
)

export const Default = Template.bind({})

export const Borderless = Template.bind({})
Borderless.args = {
  borderless: true,
  horizontal: false,
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  borderless: false,
  horizontal: true,
}