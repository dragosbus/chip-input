import React from 'react'
import { action } from '@storybook/addon-actions'
import CustomizedUnderline from './CustomizedUnderline'


export default {
  component: CustomizedUnderline,
  title: 'CustomizedUnderline',
};

const Template = (args) => <CustomizedUnderline {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue:['foo', 'bar'],
  fullWidth:true,
  onChange:action('onChange'),
};
