import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal, IModalProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Modal',
  component: Modal,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;


const Template: Story<IModalProps> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  open: true,
  children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum cupiditate eius quas ullam expedita molestias illum sit tenetur cumque adipisci, ut dolore culpa nisi ipsum accusantium quos natus, quisquam sunt!"
}
Default.argTypes = {
  open: { control: false }
}

export const WithHeader = ({ ...args }) => (
  <Template {...args}>
    <Modal.Header btClose={args.btClose}>
      HEADER
    </Modal.Header>
    <Modal.Body>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at ullam, impedit sit repudiandae esse doloribus. Eaque ab reprehenderit iure ut dolorum enim quia hic, vel ratione atque molestias consectetur.
    </Modal.Body>
  </Template>
)
WithHeader.args = {
  open: true,
  btClose: false
}

export const WithFooter = ({ ...args }) => (
  <Template {...args}>
    <Modal.Header btClose={args.btClose}>
      HEADER
    </Modal.Header>
    <Modal.Body>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
    </Modal.Body>
    <Modal.Footer>
      FOOTER
    </Modal.Footer>
  </Template>
)
WithFooter.args = {
  open: true,
  btClose: false
}

export const Centered = ({ ...args }) => (
  <Template {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
  </Template>
)
Centered.args = {
  open: true,
  btClose: false,
  centered: true,
  scrollable: false
}

export const Scrollable = ({ ...args }) => (
  <Template {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ut optio, vitae, totam quo, dignissimos incidunt reprehenderit nostrum laboriosam quod labore! Doloremque saepe quibusdam facilis illum magnam voluptate repellat voluptatem?
  </Template>
)
Scrollable.args = {
  open: true,
  btClose: false,
  centered: false,
  scrollable: true,
}