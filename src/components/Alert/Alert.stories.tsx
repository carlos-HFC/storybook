import { Story, Meta } from '@storybook/react/types-6-0';

import { Alert, IAlertProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Alert',
  component: Alert,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<IAlertProps> = (args) => (
  <Alert {...args}>
    <Alert.Body>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ratione culpa tenetur itaque facere praesentium doloremque amet, voluptates maiores odio. Deserunt aspernatur impedit iste, doloremque quisquam at tempore quis assumenda?
    </Alert.Body>
  </Alert>
)

const TemplateWithHeader: Story<IAlertProps> = (args) => (
  <Alert {...args}>
    <Alert.Header>Header {args.variant || ''}</Alert.Header>
    <Alert.Body>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ratione culpa tenetur itaque facere praesentium doloremque amet, voluptates maiores odio. Deserunt aspernatur impedit iste, doloremque quisquam at tempore quis assumenda?
    </Alert.Body>
  </Alert>
)

export const Default = Template.bind({})

export const Alerts = ({ ...args }) => {
  return (
    ["primary", "secondary", "success", "danger", "warning", "purple", "navy"].map(variant => (
      <Alert key={variant} variant={variant as any} style={{ marginBottom: "1rem" }} {...args}>
        <Alert.Body>
          Um simples alert {variant}
        </Alert.Body>
      </Alert>
    ))
  )
}

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary"
};

export const Success = Template.bind({});
Success.args = {
  variant: "success"
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger"
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning"
};

export const Purple = Template.bind({});
Purple.args = {
  variant: "purple"
};

export const Navy = Template.bind({});
Navy.args = {
  variant: "navy"
};

export const AlertsWithHeader = ({ ...args }) => {
  return (
    ["primary", "secondary", "success", "danger", "warning", "purple", "navy"].map(variant => (
      <Alert key={variant} variant={variant as any} style={{ marginBottom: "1rem" }} {...args}>
        <Alert.Header>Header {variant}</Alert.Header>
        <Alert.Body>
          Um simples alert {variant}
        </Alert.Body>
      </Alert>
    ))
  )
}

export const PrimaryWithHeader = TemplateWithHeader.bind({});
PrimaryWithHeader.args = {
  variant: "primary"
};

export const SecondaryWithHeader = TemplateWithHeader.bind({});
SecondaryWithHeader.args = {
  variant: "secondary"
};

export const SuccessWithHeader = TemplateWithHeader.bind({});
SuccessWithHeader.args = {
  variant: "success"
};

export const DangerWithHeader = TemplateWithHeader.bind({});
DangerWithHeader.args = {
  variant: "danger"
};

export const WarningWithHeader = TemplateWithHeader.bind({});
WarningWithHeader.args = {
  variant: "warning"
};

export const PurpleWithHeader = TemplateWithHeader.bind({});
PurpleWithHeader.args = {
  variant: "purple"
};

export const NavyWithHeader = TemplateWithHeader.bind({});
NavyWithHeader.args = {
  variant: "navy"
};