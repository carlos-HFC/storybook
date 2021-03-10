import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../components'
import * as T from '../@types'

import '../css/styles.min.css'

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    variant: {
      control: false
    }
  }
} as Meta;

const Template: Story<T.ButtonProps> = (args) => <Button {...args} />;

export const Buttons = () => {
  return (
    ["primary", "secondary", "success", "danger", "warning", "purple", "navy"].map(variant => (
      <Button key={variant} variant={variant as any} label="Button" style={{ marginRight: ".5rem" }} />
    ))
  )
}

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  variant: "secondary"
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  variant: "success"
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  variant: "danger"
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Button',
  variant: "warning"
};

export const Purple = Template.bind({});
Purple.args = {
  label: 'Button',
  variant: "purple"
};

export const Navy = Template.bind({});
Navy.args = {
  label: 'Button',
  variant: "navy"
};

export const OutlineButtons = () => {
  return (
    ["outline-primary", "outline-secondary", "outline-success", "outline-danger", "outline-warning", "outline-purple", "outline-navy"].map(variant => (
      <Button key={variant} variant={variant as any} label="Button" style={{ marginRight: ".5rem" }} />
    ))
  )
}

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = {
  label: 'Button',
  variant: "outline-primary"
};

export const OutlineSecondary = Template.bind({});
OutlineSecondary.args = {
  label: 'Button',
  variant: "outline-secondary"
};

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  label: 'Button',
  variant: "outline-success"
};

export const OutlineDanger = Template.bind({});
OutlineDanger.args = {
  label: 'Button',
  variant: "outline-danger"
};

export const OutlineWarning = Template.bind({});
OutlineWarning.args = {
  label: 'Button',
  variant: "outline-warning"
};

export const OutlinePurple = Template.bind({});
OutlinePurple.args = {
  label: 'Button',
  variant: "outline-purple"
};

export const OutlineNavy = Template.bind({});
OutlineNavy.args = {
  label: 'Button',
  variant: "outline-navy"
};