import React from 'react';
import Button from '../components/button';
import "../index.css";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
  args: {
    label: 'Button'
  }
};

const Template = (args) => (
  <div>
    <Button {...args} />
    <Button {...args} disabled={true} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary'
};

export const Outline = Template.bind({});
Outline.args = {
  type: 'outline'
};

export const Clear = Template.bind({});
Clear.args = {
  type: 'clear'
};