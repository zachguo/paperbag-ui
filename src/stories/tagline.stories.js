import React from 'react';
import Tagline from '../components/tagline';
import "../index.css";
import "./stories.css";

export default {
  title: 'Example/Tagline',
  component: Tagline,
  argTypes: {},
  args: {}
};

const Template = (args) => (
  <div>
    <h3>Title</h3>
    <Tagline {...args}>
      <p>This is an example description.</p>
      <p>Last Updated At: 2021-01-01</p>
    </Tagline>
  </div>
);

export const Default = Template.bind({});