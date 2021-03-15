import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioButton, IRadioProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Radio',
  component: RadioButton,
  parameters: {
    controls: {
      expanded: true
    }
  },
  argTypes: {
    type: {
      control: false
    }
  }
} as Meta;

const Template: Story<IRadioProps> = (args) => <RadioButton {...args} />

export const Radios = () => (
  <>
    <Template id="Radio1" name="Radio" label="Radio Button" type="radio" />
    <Template id="Radio2" name="Radio" label="Radio Button" type="radio" />
    <Template id="Radio3" name="Radio" label="Radio Button" type="radio" />
  </>
)

export const Checkboxs = () => (
  <>
    <Template id="Checkbox1" name="Checkbox" label="Checkbox Button" type="checkbox" />
    <Template id="Checkbox2" name="Checkbox" label="Checkbox Button" type="checkbox" />
    <Template id="Checkbox3" name="Checkbox" label="Checkbox Button" type="checkbox" />
  </>
)

export const Radio = Template.bind({});
Radio.args = {
  id: "Radio1",
  name: "Radio1",
  label: "Radio Button",
  type: "radio"
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  id: "Checkbox1",
  name: "Checkbox1",
  label: "Checkbox Button",
  type: "checkbox"
};