import { Story, Meta } from '@storybook/react/types-6-0';

import { Floating, IFloatingProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Floating',
  component: Floating,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<IFloatingProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><Floating {...args} /></div>

export const Floatings = () => (
  <>
    <Template label="Input small" variant="small" />
    <Template label="Input normal" />
    <Template label="Input large" variant="large" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  label: "E-mail",
  type: "email",
};