import React from 'react';

import { PrimaryButton } from '../../components/Buttons/PrimaryButton/Button';

export default {
  title: 'Example/Button',
  component: PrimaryButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PrimaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'PrimaryButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'PrimaryButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};

export const Disable = Template.bind({});
Disable.args = {
  label: 'Disable',
  disabled: true
};