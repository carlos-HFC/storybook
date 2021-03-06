import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Table, ITableProps } from '..'

import '../../css/styles.min.css'

export default {
  title: 'Example/Table',
  component: Table,
  parameters: {
    controls: {
      expanded: true
    }
  },
} as Meta;

const Template: Story<ITableProps> = (args) => (
  <Table {...args} style={{ width: "75%" }}>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Carlos</td>
        <td>24</td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>24</td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>24</td>
      </tr>
      <tr>
        <td>Carlos</td>
        <td>24</td>
      </tr>
    </tbody>
  </Table>
)

export const Variants = () => (
  <div style={{ width: "50%" }}>
    <Table>
      <tr>
        <th>DEFAULT</th>
        <th>CELL</th>
      </tr>
    </Table>
    {["primary", "secondary", "success", "danger", "warning", "purple", "navy", "dark"].map(variant => (
      <Table key={variant} variant={variant as ITableProps['variant']}>
        <tr>
          <th>{variant.toUpperCase()}</th>
          <th>CELL</th>
        </tr>
      </Table>
    ))}
  </div>
)

export const Default = Template.bind({});

export const TableWithBorder = Template.bind({});
TableWithBorder.args = {
  border: true
}

export const TableStriped = Template.bind({});
TableStriped.args = {
  striped: true
}