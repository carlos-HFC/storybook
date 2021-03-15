import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, ICardProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

export const Default: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Body>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
    </Card.Body>
  </Card>
)

export const CardWithTitle: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
    </Card.Body>
  </Card>
)

export const CardWithSubtitle: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
    </Card.Body>
  </Card>
)

export const CardWithImage: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Img src="https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
    </Card.Body>
  </Card>
)

export const CardWithHeader: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Img src="https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
    <Card.Header>
      Card Header
    </Card.Header>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
    </Card.Body>
  </Card>
)

export const CardWithFooter: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Img src="https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
    <Card.Header>
      Card Header
    </Card.Header>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      Card Footer
    </Card.Footer>
  </Card>
)

export const CardWithLink: Story<ICardProps> = ({ ...args }) => (
  <Card style={{ width: "20rem" }} {...args}>
    <Card.Img src="https://images.unsplash.com/photo-1504060765228-f97d1772ff9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Card image" />
    <Card.Header>
      Card Header
    </Card.Header>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle>Card Subtitle</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit tempora, expedita quis officia ratione ut? Ad atque dignissimos libero ipsum dolorem sequi consequuntur ut aut! A sequi veritatis in!
      </Card.Text>
      <Card.Link href="#">Link</Card.Link>
      <Card.Link href="#">Link</Card.Link>
    </Card.Body>
    <Card.Footer>
      Card Footer
    </Card.Footer>
  </Card>
)