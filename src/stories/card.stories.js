import React from 'react';
import Card from '../components/card';
import "../index.css";
import "./stories.css";

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {},
  args: {
    text: 'Card'
  }
};

const Template = (args) => (
  <Card {...args}>
    <h3>Section Title</h3>
    <p>Section Content.</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  isLink: false
};

export const Linked = Template.bind({});
Linked.args = {
  isLink: true
};