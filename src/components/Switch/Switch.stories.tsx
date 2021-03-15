import { Story, Meta } from '@storybook/react/types-6-0';

import { Switch, ISwitchProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Switch',
  component: Switch,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<ISwitchProps> = (args) => <Switch {...args} />

export const Default = Template.bind({});