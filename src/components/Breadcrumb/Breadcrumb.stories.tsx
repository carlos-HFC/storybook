import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumb, IBreadcrumbProps } from '..'

import '../../css/styles.min.css'

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

const Template: Story<IBreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    {itens.map(el => (
      <Breadcrumb.Item href={el.href} active={itens.lastIndexOf(el) === itens.length - 1} label={el.title} />
    ))}
  </Breadcrumb>
)

export const Default = Template.bind({});

export const Divider = Template.bind({})
Divider.args = {
  divider: "/"
}