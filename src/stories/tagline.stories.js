import React from 'react';
import Tagline from '../components/tagline';
import "../index.css";

export default {
  title: 'Example/Tagline',
  component: Tagline,
  argTypes: {},
  args: {}
};

const Template = () => (
  <div>
    <h3>Title</h3>
    <Tagline>
      <p>This is an example description.</p>
      <p>Additional description.</p>
    </Tagline>
    <Tagline>
      <p>Last Updated At: 2021-01-01</p>
    </Tagline>
  </div>
);

export const Default = Template.bind({});