import React from 'react';
import AlignedPrefix from '../components/aligned-prefix';
import "../index.css";

export default {
  title: 'Example/AlignedPrefix',
  component: AlignedPrefix,
  argTypes: {},
  args: {}
};

const Template = (args) => (
  <div>
    <div>
      <AlignedPrefix cssMode="table" prefixWidth={20} {...args} prefix={<img src="https://via.placeholder.com/50" />}>
        Paperbag UI
      </AlignedPrefix>
    </div>
    <div>
      <AlignedPrefix cssMode="table" prefixWidth={20} {...args} prefix={<img src="https://via.placeholder.com/10" />}>
        Paperbag UI
      </AlignedPrefix>
    </div>
    <div>
      <AlignedPrefix {...args} prefix={<span>Paperbag UI</span>}>
        <img src="https://via.placeholder.com/50" />
      </AlignedPrefix>
    </div>
    <div>
      <AlignedPrefix {...args} prefix={<span>Paperbag UI</span>}>
        <img src="https://via.placeholder.com/10" />
      </AlignedPrefix>
    </div>
  </div>
);

export const TableMode = Template.bind({});
TableMode.args = {
  cssMode: "table"
};

export const FlexboxMode = Template.bind({});
FlexboxMode.args = {
  cssMode: "flexbox"
};