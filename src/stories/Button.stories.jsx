import React from 'react';
import Button from '../components/button';
import "../index.css";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {}
};

const Template = (args) => (
  <div>
    <Button {...args} />
    <Button {...args} disabled={true} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Button'
};

export const Outline = Template.bind({});
Outline.args = {
  type: 'outline',
  text: 'Button'
};

export const Clear = Template.bind({});
Clear.args = {
  type: 'clear',
  text: 'Button'
};