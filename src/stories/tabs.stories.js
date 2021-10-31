import React from 'react';
import { Tabs, TabPane } from '../components/tabs';
import "../index.css";

export default {
  title: 'Example/Tabs',
  component: Tabs,
  argTypes: {},
  args: {}
};

const Template = (args) => (
  <div>
    <Tabs {...args} defaultActiveTab="tab-1">
      <TabPane tab="tab-1" tabLabel="Tab 1">
        <h3>Tab 1</h3>
        <p>Content</p>
      </TabPane>
      <TabPane tab="tab-2" tabLabel="Tab 2">
        <h3>Tab 2</h3>
        <p>Content</p>
      </TabPane>
      <TabPane tab="tab-3" tabLabel="Tab 3">
        <h3>Tab 3</h3>
        <p>Content</p>
      </TabPane>
    </Tabs>
  </div>
);

export const Default = Template.bind({});