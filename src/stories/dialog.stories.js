import React from 'react';
import Dialog from '../components/dialog';
import "../index.css";
import "./stories.css";

export default {
  title: 'Example/Dialog',
  component: Dialog,
  argTypes: {},
  args: {}
};

const Template = (args) => (
  <Dialog {...args} visible={true}>
    <h3>Title</h3>
    <p>Content</p>
  </Dialog>
);

export const Default = Template.bind({});