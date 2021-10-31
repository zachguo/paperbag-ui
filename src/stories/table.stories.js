import React from 'react';
import Table from '../components/table';
import "../index.css";

export default {
  title: 'Example/Table',
  component: Table,
  argTypes: {},
  args: {
    columns: [
      { index: "col_1", label: "Column 1", minWidth: 100, render: v => `ID ${v}` },
      { index: "col_2", label: "Column 2", minWidth: 75 },
      { index: "col_3", label: "Column 3", minWidth: 50 },
      { index: "col_4", label: "Column 4" }
    ],
    data: Array(100).fill("Test").map((e, i) => ({ col_1: i, col_2: e, col_3: e, col_4: e }))
  }
};

const Template = (args) => <Table {...args} />;

export const ReorientableWithHeader = Template.bind({});
ReorientableWithHeader.args = {
  reorientable: true,
  hideHeader: false
};

export const UnoreorientableWithoutHeader = Template.bind({});
UnoreorientableWithoutHeader.args = {
  reorientable: false,
  hideHeader: true
};