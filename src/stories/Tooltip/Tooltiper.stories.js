import React from 'react';

import { ToolTiper } from '../../components/Tooltip/index';

export default {
  title: 'Example/Tooltip',
  component: ToolTiper,
  argTypes: {
    title: 'Example',
  },
};

const Template = (args, children) => <ToolTiper {...args}>{children}</ToolTiper>;

export const ToolTiper = Template.bind({});
ToolTiper.args = {
  title: 'Example'
};
