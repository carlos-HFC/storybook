import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea, ITextareaProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Textarea',
  component: Textarea,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<ITextareaProps> = (args) => <div style={{ width: "50%", marginBottom: "1rem" }}><Textarea {...args} /></div>

export const Textareas = () => (
  <>
    <Template placeholder="Textarea small" variant="small" />
    <Template placeholder="Textarea normal" />
    <Template placeholder="Textarea large" variant="large" />
  </>
)

export const Default = Template.bind({});
Default.args = {
  placeholder: "Textarea default"
};

export const Validation = Template.bind({});
Validation.args = {
  placeholder: "Textarea com validação",
  validation: 'valid'
};