import React from 'react';
import CheckBox from '../components/checkbox';
import "../index.css";
import "./stories.css";

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
  argTypes: {},
  args: {
    label: 'Show Deck',
    onChange: v => console.log(v)
  }
};

const Template = (args) => (
  <div>
    <CheckBox {...args} checked={false} />
    <CheckBox {...args} checked={true} />
  </div>
);

export const Default = Template.bind({});